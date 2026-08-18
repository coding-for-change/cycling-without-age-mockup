"""Local dev server for the mockup that disables caching entirely.

python3 -m http.server sends no cache headers, so browsers fall back to
heuristic caching and can keep serving an old js/css file for a long time
after it's edited on disk — confusing during active development. Run this
instead of the stdlib module directly:

    python3 tools/dev_server.py 8000 .
"""
import http.server
import sys


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        self.send_header('Clear-Site-Data', '"cache"')
        super().end_headers()

    def do_GET(self):
        # never honor conditional revalidation — always send the current bytes
        for h in ('If-Modified-Since', 'If-None-Match'):
            if h in self.headers:
                del self.headers[h]
        super().do_GET()


if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    directory = sys.argv[2] if len(sys.argv) > 2 else '.'
    handler = lambda *args, **kwargs: NoCacheHandler(*args, directory=directory, **kwargs)
    http.server.ThreadingHTTPServer(('', port), handler).serve_forever()
