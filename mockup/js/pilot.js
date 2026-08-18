/* Pilot app (chapter München, demo persona Jonas Weber p1) — CWA v3.

   Rebuilt on the SAME shell and component vocabulary as passenger.js:
   hero-head · app-body · floating tab dock · tiles · cover art · wizards.
   Only the copy (du-form, volunteer language) and the content differ.

   Logged out : welcome → passkey | phone → one-time code · sign-up → onboarding
   Logged in  : home · rides · ride · event · checkin · debrief · chats · chat ·
                training · profile */

CWA.reg({
  en: {
    'pilot.tab.home': 'Start',
    'pilot.tab.rides': 'Rides',
    'pilot.tab.chats': 'Chats',
    'pilot.tab.profile': 'Profile',

    'pilot.greetMorning': 'Morning, {name}!',
    'pilot.greetAfternoon': 'Hi {name}!',
    'pilot.greetEvening': 'Evening, {name}!',

    'pilot.heroNext': 'Your next ride',
    'pilot.heroWaiting': '{n} rides need a pilot',
    'pilot.heroWaitingSub': 'Take the one that fits your week.',
    'pilot.heroNothing': 'Nothing open right now',
    'pilot.heroNothingSub': 'Enjoy your day — we will ping you the moment something comes in.',
    'pilot.withName': 'with {name}',

    'pilot.openTitle': 'Needs a pilot',
    'pilot.feed.urgent': 'Starting soon!',
    'pilot.feed.urgentSub': 'This ride is in less than four hours — can you jump in?',
    'pilot.feed.grab': 'Grab this ride',
    'pilot.feed.empty': 'No open rides right now — check back later',
    'pilot.event.needs': 'Needs a pilot for {trishaw}',
    'pilot.event.slots': '{n} passenger slots',
    'pilot.event.youRide': 'You ride {trishaw}',
    'pilot.grabbed': 'Ride grabbed — thank you!',

    'pilot.statRides': 'Rides ridden',
    'pilot.statHours': 'Hours given',
    'pilot.statDonations': 'Collected',
    'pilot.weekTitle': 'Your week',
    'pilot.weekHint': 'Your chapter sees the days you marked as available',
    'pilot.eventsTitle': 'Chapter events',
    'pilot.garageTitle': 'Your home garage',
    'pilot.trainingBlock': 'Finish your training',
    'pilot.trainingBlockSub': '{done} of {total} done — then the ride feed opens up for you.',

    'pilot.seg.open': 'Open',
    'pilot.seg.mine': 'Mine',
    'pilot.seg.week': 'Week',
    'pilot.mine.emptyUp': 'No upcoming rides — grab one from the open list!',
    'pilot.mine.emptyPast': 'No completed rides yet',
    'pilot.mine.dayEmpty': 'Nothing planned on this day',

    'pilot.checkin': 'Check in',
    'pilot.finish': 'Finish ride',
    'pilot.ride.title': 'Ride details',
    'pilot.ride.route': 'Route',
    'pilot.ride.bike': 'Trishaw & garage',
    'pilot.ride.partner': 'Partner contact',
    'pilot.ride.roster': 'Passenger roster',
    'pilot.ride.proxy': 'Contact person',
    'pilot.check.title': 'Check-in',
    'pilot.check.lead': 'Three quick taps before you roll',
    'pilot.check.c1': 'Trishaw collected, battery OK',
    'pilot.check.c2': 'Passenger is here and seated',
    'pilot.check.c3': 'Blanket & helmet on board',
    'pilot.check.walkup': 'Add a walk-up passenger',
    'pilot.check.walkupName': 'Name',
    'pilot.check.walkupAdded': 'Walk-up passenger added',
    'pilot.check.start': 'Start ride',
    'pilot.check.started': 'Have a great ride!',
    'pilot.check.onRoad': 'You are on the road!',
    'pilot.check.onRoadSub': 'Enjoy it — finish the ride here when you are back.',
    'pilot.check.elapsed': 'Started {t}',
    'pilot.debrief.title': '30-second report',
    'pilot.debrief.bike': 'How is the trishaw?',
    'pilot.debrief.ok': 'All good',
    'pilot.debrief.problem': 'Problem',
    'pilot.debrief.issuePh': 'What is wrong?',
    'pilot.debrief.battery': 'Battery on return',
    'pilot.debrief.feedback': 'How was the ride?',
    'pilot.debrief.submit': 'Submit report',
    'pilot.debrief.done': 'Thanks for the ride, {name}!',
    'pilot.chats.empty': 'No conversations yet — they appear when you grab a ride',
    'pilot.chats.emptyPast': 'No past conversations',

    'pilot.gate.grab': 'Complete your training to ride',
    'pilot.notif.empty': 'No notifications yet',

    'pilot.welcome.title': 'Give someone the wind in their hair.',
    'pilot.welcome.sub': 'One hour of your week, a trishaw and a person who has not been outside in far too long.',
    'pilot.welcome.become': 'Become a pilot',

    'pauth.passkeyHint': 'No password — your device confirms it is you.',
    'pauth.verifying': 'Confirming with your device…',
    'pauth.welcomeBack': 'Good to see you!',
    'pauth.usePhone': 'Use your phone number instead',
    'pauth.phoneTitle': 'What is your number?',
    'pauth.phoneSub': 'We send you a six-digit code. Nothing to remember.',
    'pauth.codeSub': 'We sent six digits to {phone}.',
    'pauth.terms': 'By continuing you agree to your chapter’s safety guidelines.',

    'pilot.onb1.t': 'One hour. One smile.',
    'pilot.onb1.b': 'Pick a ride that fits your week, cycle at walking pace, and bring someone back into the neighbourhood they built.',
    'pilot.onb2.t': 'Training comes first',
    'pilot.onb2.b': 'Two short videos and one practical workshop with a captain. The ride feed unlocks the moment you are done.',
    'pilot.onb3.t': 'Ride when it suits you',
    'pilot.onb3.b': 'Nothing is assigned to you. You see what is open, you take what works, and you can hand it back.',
    'pilot.onb4.t': 'You are never alone out there',
    'pilot.onb4.b': 'Passenger notes, garage codes, the chapter team and your passenger — all one tap away in the app.',

    'pilot.signup.q1': 'What is your name?',
    'pilot.signup.nameLabel': 'Full name',
    'pilot.signup.phoneHint': 'Your chapter uses it to reach you before a ride.',
    'pilot.signup.q2': 'Your chapter',
    'pilot.signup.chapterFound': 'Closest chapter to you',
    'pilot.signup.chapterPilots': '{n} pilots ride here',
    'pilot.signup.q3': 'How you become a pilot',
    'pilot.signup.s1': 'Watch the training videos — about 20 minutes, right in this app.',
    'pilot.signup.s2': 'Join a practical workshop with one of the captains.',
    'pilot.signup.s3': 'Grab your first ride — a captain rides along the first time.',
    'pilot.signup.q4': 'Create your passkey',
    'pilot.signup.passkeyHint': 'Your device stores it. Nothing to remember.',
    'pilot.signup.create': 'Create passkey',
    'pilot.signup.creating': 'Creating your passkey…',

    'pilot.training.progress': '{done} of {total} done',
    'pilot.training.intro': 'Finish everything here and the ride feed opens up for you.',
    'pilot.training.open': 'Open training',
    'pilot.training.watch': 'Watch now',
    'pilot.training.completed': 'Completed',
    'pilot.training.required': 'Required',
    'pilot.training.video': 'Video',
    'pilot.training.workshop': 'Workshop',
    'pilot.training.workshopHint': 'Signed off by your captain after the practical workshop',
    'pilot.training.playing': 'Playing…',
    'pilot.training.videoDone': 'Video completed',
    'pilot.training.allDone': 'Training complete — you can grab rides now!',
    'pilot.training.captainApproves': 'A captain still confirms you as a pilot.',

    'pilot.profile.trained': 'Trained pilot',
    'pilot.profile.inTraining': 'Training in progress',
    'pilot.profile.home': 'Demo home',
    'pilot.profile.account': 'Account',
    'pilot.profile.name': 'Name',
    'pilot.profile.chapterCard': 'My chapter',
    'pilot.profile.homeBase': 'Home base',
    'pilot.profile.availHint': 'Your chapter sees when you can ride',
    'pilot.profile.editTitle': 'Edit your details',
    'pilot.profile.saved': 'Details saved',
    'pilot.profile.notifHint': 'New rides, messages and reminders'
  },

  de: {
    'pilot.tab.home': 'Start',
    'pilot.tab.rides': 'Fahrten',
    'pilot.tab.chats': 'Chats',
    'pilot.tab.profile': 'Profil',

    'pilot.greetMorning': 'Guten Morgen, {name}!',
    'pilot.greetAfternoon': 'Servus, {name}!',
    'pilot.greetEvening': 'Guten Abend, {name}!',

    'pilot.heroNext': 'Deine nächste Fahrt',
    'pilot.heroWaiting': '{n} Fahrten suchen eine·n Pilot·in',
    'pilot.heroWaitingSub': 'Nimm die, die in deine Woche passt.',
    'pilot.heroNothing': 'Gerade ist nichts offen',
    'pilot.heroNothingSub': 'Genieß den Tag — wir melden uns, sobald etwas reinkommt.',
    'pilot.withName': 'mit {name}',

    'pilot.openTitle': 'Pilot·in gesucht',
    'pilot.feed.urgent': 'Startet bald!',
    'pilot.feed.urgentSub': 'Diese Fahrt beginnt in weniger als vier Stunden — kannst du einspringen?',
    'pilot.feed.grab': 'Fahrt übernehmen',
    'pilot.feed.empty': 'Gerade keine offenen Fahrten — schau später wieder vorbei',
    'pilot.event.needs': 'Pilot·in gesucht für {trishaw}',
    'pilot.event.slots': '{n} Fahrgast-Plätze',
    'pilot.event.youRide': 'Du fährst {trishaw}',
    'pilot.grabbed': 'Fahrt übernommen — danke dir!',

    'pilot.statRides': 'Gefahrene Fahrten',
    'pilot.statHours': 'Geschenkte Stunden',
    'pilot.statDonations': 'Gesammelt',
    'pilot.weekTitle': 'Deine Woche',
    'pilot.weekHint': 'Dein Standort sieht die Tage, die du als verfügbar markiert hast',
    'pilot.eventsTitle': 'Events am Standort',
    'pilot.garageTitle': 'Deine Heimatgarage',
    'pilot.trainingBlock': 'Schulung abschließen',
    'pilot.trainingBlockSub': '{done} von {total} erledigt — danach öffnet sich der Fahrten-Feed für dich.',

    'pilot.seg.open': 'Offen',
    'pilot.seg.mine': 'Meine',
    'pilot.seg.week': 'Woche',
    'pilot.mine.emptyUp': 'Keine anstehenden Fahrten — schnapp dir eine aus der offenen Liste!',
    'pilot.mine.emptyPast': 'Noch keine abgeschlossenen Fahrten',
    'pilot.mine.dayEmpty': 'An diesem Tag ist nichts geplant',

    'pilot.checkin': 'Einchecken',
    'pilot.finish': 'Fahrt abschließen',
    'pilot.ride.title': 'Fahrtdetails',
    'pilot.ride.route': 'Route',
    'pilot.ride.bike': 'Rikscha & Garage',
    'pilot.ride.partner': 'Partner-Kontakt',
    'pilot.ride.roster': 'Fahrgast-Plan',
    'pilot.ride.proxy': 'Kontaktperson',
    'pilot.check.title': 'Check-in',
    'pilot.check.lead': 'Drei kurze Häkchen, dann geht’s los',
    'pilot.check.c1': 'Rikscha abgeholt, Akku OK',
    'pilot.check.c2': 'Fahrgast ist da und sitzt bequem',
    'pilot.check.c3': 'Decke & Helm an Bord',
    'pilot.check.walkup': 'Spontanen Fahrgast hinzufügen',
    'pilot.check.walkupName': 'Name',
    'pilot.check.walkupAdded': 'Fahrgast hinzugefügt',
    'pilot.check.start': 'Fahrt starten',
    'pilot.check.started': 'Gute Fahrt!',
    'pilot.check.onRoad': 'Ihr seid unterwegs!',
    'pilot.check.onRoadSub': 'Genießt es — schließe die Fahrt hier ab, wenn ihr zurück seid.',
    'pilot.check.elapsed': 'Gestartet {t}',
    'pilot.debrief.title': '30-Sekunden-Bericht',
    'pilot.debrief.bike': 'Wie geht es der Rikscha?',
    'pilot.debrief.ok': 'Alles gut',
    'pilot.debrief.problem': 'Problem',
    'pilot.debrief.issuePh': 'Was ist nicht in Ordnung?',
    'pilot.debrief.battery': 'Akku bei Rückgabe',
    'pilot.debrief.feedback': 'Wie war die Fahrt?',
    'pilot.debrief.submit': 'Bericht abschicken',
    'pilot.debrief.done': 'Danke für die Fahrt, {name}!',
    'pilot.chats.empty': 'Noch keine Unterhaltungen — sie erscheinen, sobald du eine Fahrt übernimmst',
    'pilot.chats.emptyPast': 'Keine vergangenen Unterhaltungen',

    'pilot.gate.grab': 'Erst Schulung abschließen',
    'pilot.notif.empty': 'Noch keine Benachrichtigungen',

    'pilot.welcome.title': 'Schenk jemandem den Wind in den Haaren.',
    'pilot.welcome.sub': 'Eine Stunde deiner Woche, eine Rikscha und ein Mensch, der viel zu lange nicht draußen war.',
    'pilot.welcome.become': 'Pilot·in werden',

    'pauth.passkeyHint': 'Kein Passwort — dein Gerät bestätigt, dass du es bist.',
    'pauth.verifying': 'Bestätigung durch dein Gerät…',
    'pauth.welcomeBack': 'Schön, dass du da bist!',
    'pauth.usePhone': 'Lieber deine Telefonnummer verwenden',
    'pauth.phoneTitle': 'Wie ist deine Nummer?',
    'pauth.phoneSub': 'Wir senden dir einen sechsstelligen Code. Du musst dir nichts merken.',
    'pauth.codeSub': 'Wir haben sechs Ziffern an {phone} geschickt.',
    'pauth.terms': 'Mit dem Fortfahren stimmst du den Sicherheitsrichtlinien deines Standorts zu.',

    'pilot.onb1.t': 'Eine Stunde. Ein Lächeln.',
    'pilot.onb1.b': 'Such dir eine Fahrt, die in deine Woche passt, fahr im Schritttempo und hol jemanden zurück in die Nachbarschaft, die er·sie aufgebaut hat.',
    'pilot.onb2.t': 'Zuerst die Schulung',
    'pilot.onb2.b': 'Zwei kurze Videos und ein Praxis-Workshop mit einem·einer Captain. Danach öffnet sich der Fahrten-Feed sofort.',
    'pilot.onb3.t': 'Fahr, wann es dir passt',
    'pilot.onb3.b': 'Dir wird nichts zugeteilt. Du siehst, was offen ist, nimmst, was passt — und kannst es auch wieder abgeben.',
    'pilot.onb4.t': 'Du bist nie allein unterwegs',
    'pilot.onb4.b': 'Hinweise zum Fahrgast, Garagencodes, das Standort-Team und dein Fahrgast — alles einen Fingertipp entfernt.',

    'pilot.signup.q1': 'Wie heißt du?',
    'pilot.signup.nameLabel': 'Vor- und Nachname',
    'pilot.signup.phoneHint': 'Damit erreicht dich dein Standort vor einer Fahrt.',
    'pilot.signup.q2': 'Dein Standort',
    'pilot.signup.chapterFound': 'Der Standort in deiner Nähe',
    'pilot.signup.chapterPilots': '{n} Pilot·innen fahren hier',
    'pilot.signup.q3': 'So wirst du Pilot·in',
    'pilot.signup.s1': 'Schau dir die Schulungsvideos an — rund 20 Minuten, direkt in der App.',
    'pilot.signup.s2': 'Mach den Praxis-Workshop mit einem·einer Captain.',
    'pilot.signup.s3': 'Übernimm deine erste Fahrt — beim ersten Mal fährt ein·e Captain mit.',
    'pilot.signup.q4': 'Erstelle deinen Passkey',
    'pilot.signup.passkeyHint': 'Dein Gerät speichert ihn. Du musst dir nichts merken.',
    'pilot.signup.create': 'Passkey erstellen',
    'pilot.signup.creating': 'Passkey wird erstellt…',

    'pilot.training.progress': '{done} von {total} erledigt',
    'pilot.training.intro': 'Schließ hier alles ab, dann öffnet sich der Fahrten-Feed für dich.',
    'pilot.training.open': 'Schulung öffnen',
    'pilot.training.watch': 'Jetzt ansehen',
    'pilot.training.completed': 'Abgeschlossen',
    'pilot.training.required': 'Pflicht',
    'pilot.training.video': 'Video',
    'pilot.training.workshop': 'Workshop',
    'pilot.training.workshopHint': 'Wird von deinem·deiner Captain nach dem Praxis-Workshop freigegeben',
    'pilot.training.playing': 'Läuft…',
    'pilot.training.videoDone': 'Video abgeschlossen',
    'pilot.training.allDone': 'Schulung komplett — du kannst jetzt Fahrten übernehmen!',
    'pilot.training.captainApproves': 'Ein·e Captain bestätigt dich noch als Pilot·in.',

    'pilot.profile.trained': 'Geschulte·r Pilot·in',
    'pilot.profile.inTraining': 'Schulung läuft',
    'pilot.profile.home': 'Demo-Startseite',
    'pilot.profile.account': 'Konto',
    'pilot.profile.name': 'Name',
    'pilot.profile.chapterCard': 'Mein Standort',
    'pilot.profile.homeBase': 'Heimatgarage',
    'pilot.profile.availHint': 'Dein Standort sieht, wann du fahren kannst',
    'pilot.profile.editTitle': 'Deine Daten bearbeiten',
    'pilot.profile.saved': 'Daten gespeichert',
    'pilot.profile.notifHint': 'Neue Fahrten, Nachrichten und Erinnerungen'
  },

  da: {
    'pilot.tab.home': 'Start',
    'pilot.tab.rides': 'Ture',
    'pilot.tab.chats': 'Chats',
    'pilot.tab.profile': 'Profil',

    'pilot.greetMorning': 'Godmorgen, {name}!',
    'pilot.greetAfternoon': 'Hej {name}!',
    'pilot.greetEvening': 'Godaften, {name}!',

    'pilot.heroNext': 'Din næste tur',
    'pilot.heroWaiting': '{n} ture mangler en pilot',
    'pilot.heroWaitingSub': 'Tag den, der passer i din uge.',
    'pilot.heroNothing': 'Intet ledigt lige nu',
    'pilot.heroNothingSub': 'Nyd dagen — vi siger til, så snart der kommer noget ind.',
    'pilot.withName': 'med {name}',

    'pilot.openTitle': 'Mangler en pilot',
    'pilot.feed.urgent': 'Starter snart!',
    'pilot.feed.urgentSub': 'Denne tur begynder om mindre end fire timer — kan du springe til?',
    'pilot.feed.grab': 'Tag denne tur',
    'pilot.feed.empty': 'Ingen ledige ture lige nu — kig forbi senere',
    'pilot.event.needs': 'Mangler en pilot til {trishaw}',
    'pilot.event.slots': '{n} passagerpladser',
    'pilot.event.youRide': 'Du kører {trishaw}',
    'pilot.grabbed': 'Turen er din — tak!',

    'pilot.statRides': 'Kørte ture',
    'pilot.statHours': 'Givne timer',
    'pilot.statDonations': 'Indsamlet',
    'pilot.weekTitle': 'Din uge',
    'pilot.weekHint': 'Din afdeling kan se de dage, du har markeret som ledige',
    'pilot.eventsTitle': 'Events i afdelingen',
    'pilot.garageTitle': 'Din hjemmegarage',
    'pilot.trainingBlock': 'Fuldfør din træning',
    'pilot.trainingBlockSub': '{done} af {total} gennemført — så åbner turoversigten sig for dig.',

    'pilot.seg.open': 'Ledige',
    'pilot.seg.mine': 'Mine',
    'pilot.seg.week': 'Uge',
    'pilot.mine.emptyUp': 'Ingen kommende ture — tag en fra den ledige liste!',
    'pilot.mine.emptyPast': 'Ingen gennemførte ture endnu',
    'pilot.mine.dayEmpty': 'Ingen ture denne dag',

    'pilot.checkin': 'Tjek ind',
    'pilot.finish': 'Afslut tur',
    'pilot.ride.title': 'Turdetaljer',
    'pilot.ride.route': 'Rute',
    'pilot.ride.bike': 'Rickshaw & garage',
    'pilot.ride.partner': 'Partnerkontakt',
    'pilot.ride.roster': 'Passagerplan',
    'pilot.ride.proxy': 'Kontaktperson',
    'pilot.check.title': 'Tjek ind',
    'pilot.check.lead': 'Tre hurtige flueben, før I ruller',
    'pilot.check.c1': 'Rickshaw hentet, batteri OK',
    'pilot.check.c2': 'Passageren er her og sidder godt',
    'pilot.check.c3': 'Tæppe & hjelm er med',
    'pilot.check.walkup': 'Tilføj spontan passager',
    'pilot.check.walkupName': 'Navn',
    'pilot.check.walkupAdded': 'Passager tilføjet',
    'pilot.check.start': 'Start turen',
    'pilot.check.started': 'God tur!',
    'pilot.check.onRoad': 'I er på tur!',
    'pilot.check.onRoadSub': 'Nyd den — afslut turen her, når I er tilbage.',
    'pilot.check.elapsed': 'Startet {t}',
    'pilot.debrief.title': '30-sekunders rapport',
    'pilot.debrief.bike': 'Hvordan har rickshawen det?',
    'pilot.debrief.ok': 'Alt i orden',
    'pilot.debrief.problem': 'Problem',
    'pilot.debrief.issuePh': 'Hvad er der galt?',
    'pilot.debrief.battery': 'Batteri ved aflevering',
    'pilot.debrief.feedback': 'Hvordan var turen?',
    'pilot.debrief.submit': 'Send rapport',
    'pilot.debrief.done': 'Tak for turen, {name}!',
    'pilot.chats.empty': 'Ingen samtaler endnu — de dukker op, når du tager en tur',
    'pilot.chats.emptyPast': 'Ingen tidligere samtaler',

    'pilot.gate.grab': 'Fuldfør din træning først',
    'pilot.notif.empty': 'Ingen notifikationer endnu',

    'pilot.welcome.title': 'Giv nogen vinden i håret.',
    'pilot.welcome.sub': 'En time af din uge, en rickshaw og et menneske, der ikke har været ude alt for længe.',
    'pilot.welcome.become': 'Bliv pilot',

    'pauth.passkeyHint': 'Ingen adgangskode — din enhed bekræfter, at det er dig.',
    'pauth.verifying': 'Bekræfter med din enhed…',
    'pauth.welcomeBack': 'Godt at se dig!',
    'pauth.usePhone': 'Brug dit telefonnummer i stedet',
    'pauth.phoneTitle': 'Hvad er dit nummer?',
    'pauth.phoneSub': 'Vi sender dig en sekscifret kode. Ingenting at huske.',
    'pauth.codeSub': 'Vi har sendt seks cifre til {phone}.',
    'pauth.terms': 'Ved at fortsætte accepterer du din afdelings sikkerhedsretningslinjer.',

    'pilot.onb1.t': 'En time. Et smil.',
    'pilot.onb1.b': 'Vælg en tur, der passer i din uge, kør i gåtempo, og hent nogen tilbage til det kvarter, de selv har bygget.',
    'pilot.onb2.t': 'Træning kommer først',
    'pilot.onb2.b': 'To korte videoer og en praktisk workshop med en kaptajn. Turoversigten åbner, så snart du er færdig.',
    'pilot.onb3.t': 'Kør når det passer dig',
    'pilot.onb3.b': 'Der bliver ikke tildelt dig noget. Du ser, hvad der er ledigt, tager det, der passer — og kan give det fra dig igen.',
    'pilot.onb4.t': 'Du er aldrig alene derude',
    'pilot.onb4.b': 'Noter om passageren, garagekoder, afdelingsteamet og din passager — alt sammen ét tryk væk.',

    'pilot.signup.q1': 'Hvad hedder du?',
    'pilot.signup.nameLabel': 'Fulde navn',
    'pilot.signup.phoneHint': 'Din afdeling bruger det til at kontakte dig før en tur.',
    'pilot.signup.q2': 'Din afdeling',
    'pilot.signup.chapterFound': 'Afdelingen tættest på dig',
    'pilot.signup.chapterPilots': '{n} piloter kører her',
    'pilot.signup.q3': 'Sådan bliver du pilot',
    'pilot.signup.s1': 'Se træningsvideoerne — cirka 20 minutter, direkte i appen.',
    'pilot.signup.s2': 'Deltag i en praktisk workshop med en af kaptajnerne.',
    'pilot.signup.s3': 'Tag din første tur — en kaptajn kører med den første gang.',
    'pilot.signup.q4': 'Opret din passkey',
    'pilot.signup.passkeyHint': 'Din enhed gemmer den. Du skal ikke huske noget.',
    'pilot.signup.create': 'Opret passkey',
    'pilot.signup.creating': 'Opretter din passkey…',

    'pilot.training.progress': '{done} af {total} gennemført',
    'pilot.training.intro': 'Fuldfør alt her, så åbner turoversigten sig for dig.',
    'pilot.training.open': 'Åbn træning',
    'pilot.training.watch': 'Se nu',
    'pilot.training.completed': 'Gennemført',
    'pilot.training.required': 'Påkrævet',
    'pilot.training.video': 'Video',
    'pilot.training.workshop': 'Workshop',
    'pilot.training.workshopHint': 'Godkendes af din kaptajn efter den praktiske workshop',
    'pilot.training.playing': 'Spiller…',
    'pilot.training.videoDone': 'Video gennemført',
    'pilot.training.allDone': 'Træningen er fuldført — du kan tage ture nu!',
    'pilot.training.captainApproves': 'En kaptajn skal stadig bekræfte dig som pilot.',

    'pilot.profile.trained': 'Trænet pilot',
    'pilot.profile.inTraining': 'Træning i gang',
    'pilot.profile.home': 'Demo-forside',
    'pilot.profile.account': 'Konto',
    'pilot.profile.name': 'Navn',
    'pilot.profile.chapterCard': 'Min afdeling',
    'pilot.profile.homeBase': 'Hjemmebase',
    'pilot.profile.availHint': 'Din afdeling kan se, hvornår du kan køre',
    'pilot.profile.editTitle': 'Rediger dine oplysninger',
    'pilot.profile.saved': 'Oplysninger gemt',
    'pilot.profile.notifHint': 'Nye ture, beskeder og påmindelser'
  }
});

(function () {
  var esc = CWA.esc;
  var ui = CWA.ui;
  var art = CWA.art;

  var PERSONA = 'pilot';
  var DEMO = { userId: 'p1', name: 'Jonas Weber', loggedIn: true };
  var DEMO_PHONE = '+49 170 555 0134';
  var DEMO_CODE = '6 1 8 3 2 5';
  var session = null;
  var PILOT_ID = null;
  var PILOT_NAME = '';

  function t(k, p) { return CWA.t(k, p); }
  function db() { return CWA.store.get(); }
  function find(list, id) { return CWA.store.find(list, id); }
  function viewEl() { return document.getElementById('view'); }
  function firstName(n) { return String(n || '').split(' ')[0]; }
  function me() { return PILOT_ID ? find(db().pilots, PILOT_ID) : null; }

  /* ---------------------------- session (shared) --------------------------- */
  session = CWA.auth.boot(PERSONA, DEMO);
  /* demo data may have been reseeded under a signed-up pilot → fall back to the demo persona */
  if (session && !find(db().pilots, session.userId)) session = CWA.auth.save(PERSONA, DEMO);
  if (session && session.userId === DEMO.userId) CWA.auth.markOnboarded(PERSONA);

  /* ------------------------------ ride helpers ---------------------------- */
  function isMine(r) {
    if (r.pilotId === PILOT_ID) return true;
    if (r.pilots) { for (var k in r.pilots) if (r.pilots[k] === PILOT_ID) return true; }
    return false;
  }
  function needsPilot(r) {
    if (r.pilots) { for (var k in r.pilots) if (!r.pilots[k]) return true; return false; }
    return !r.pilotId;
  }
  function freeTrishaw(r) {
    if (r.pilots) { for (var k in r.pilots) if (!r.pilots[k]) return k; }
    return null;
  }
  function clientOf(r, d) { return r.clientId ? find(d.clients, r.clientId) : null; }
  function partnerOf(r, d) { return r.partnerId ? find(d.partners, r.partnerId) : null; }
  function rideName(r, d) {
    if (r.type === 'event') return ui.eventTitle(r, d);
    var c = clientOf(r, d);
    if (c) return c.name;
    var p = partnerOf(r, d);
    return p ? p.name : '';
  }
  function ridersText(n) {
    return CWA.fmt.num(n) + ' ' + t(n === 1 ? 'common.passenger' : 'common.passengers');
  }
  function byTs(a, b) { return a.ts - b.ts; }
  function dayStart(ts) { var d = new Date(ts); d.setHours(0, 0, 0, 0); return d.getTime(); }

  function openRides(d) {
    return d.rides.filter(function (r) {
      return r.chapterId === 'muc' && r.status === 'open' && r.ts > Date.now() - 30 * 6e4 &&
        needsPilot(r) && !isMine(r);
    }).sort(byTs);
  }
  function myUpcoming(d) {
    return d.rides.filter(function (r) {
      return (r.status === 'staffed' || r.status === 'in_progress' ||
        (r.status === 'open' && r.type === 'event')) && isMine(r);
    }).sort(byTs);
  }

  /* ---------------------------- training gating --------------------------- */
  function requiredTrainings(d) {
    return (d.trainings || []).filter(function (tr) { return (tr.requiredFor || []).indexOf('pilot') !== -1; });
  }
  function trainingDone(p, id) { return (p.trainingsDone || []).indexOf(id) !== -1; }
  function cleared(p) {
    if (!p) return false;
    return requiredTrainings(db()).every(function (tr) { return trainingDone(p, tr.id); });
  }
  function trainingProgress() {
    var d = db(), p = me();
    var req = requiredTrainings(d);
    var done = req.filter(function (tr) { return trainingDone(p, tr.id); }).length;
    return { done: done, total: req.length, pct: req.length ? Math.round(done / req.length * 100) : 100 };
  }

  /* --------------------------------- shell -------------------------------- */
  var chromeless = false;

  function setView(html, opts) {
    opts = opts || {};
    chromeless = !!(opts.chromeless || opts.full);
    var v = viewEl();
    var appEl = document.querySelector('.app');
    if (appEl) appEl.style.height = (opts.fill || opts.full) ? '100dvh' : '';
    v.style.display = opts.fill ? 'flex' : '';
    v.style.flexDirection = opts.fill ? 'column' : '';
    v.style.flex = opts.fill ? '1' : '';
    v.style.minHeight = opts.fill ? '0' : '';
    v.innerHTML = html;
    var bell = v.querySelector('#bell-btn');
    if (bell) bell.addEventListener('click', notifModal);
    applyTabbarVisibility();
    ui.bindStickyHead();
  }
  function applyTabbarVisibility() {
    var tb = document.querySelector('#tabbar-slot .tabbar');
    if (tb) tb.style.display = chromeless ? 'none' : '';
  }
  function anyUnread() {
    var d = db();
    return d.chats.some(function (c) {
      var r = find(d.rides, c.rideId);
      if (!r || !isMine(r)) return false;
      var last = c.messages[c.messages.length - 1];
      return !!last && last.from !== 'pilot' && last.from !== 'system';
    });
  }
  function renderShell() {
    var slot = document.getElementById('tabbar-slot');
    if (!slot) return;
    if (!session) { slot.innerHTML = ''; return; }
    slot.innerHTML = ui.tabbar([
      { id: 'home', icon: 'home', labelKey: 'pilot.tab.home' },
      { id: 'rides', icon: 'bike', labelKey: 'pilot.tab.rides' },
      { id: 'chats', icon: 'chat', labelKey: 'pilot.tab.chats', dot: anyUnread() },
      { id: 'profile', icon: 'user', labelKey: 'pilot.tab.profile' }
    ]);
    if (CWA.route) {
      slot.querySelectorAll('[data-tab]').forEach(function (b) {
        b.classList.toggle('active', b.getAttribute('data-tab') === CWA.route.name);
      });
    }
    applyTabbarVisibility();
  }

  /* -------------------------- notifications sheet -------------------------- */
  var NOTIF_ICON = {
    'notif.rideOpen': 'bike', 'notif.message': 'chat', 'notif.approved': 'shield',
    'notif.cancelled': 'x', 'notif.scheduled': 'calendar', 'notif.grabbed': 'bike'
  };
  function myNotifs() {
    return db().notifications
      .filter(function (n) { return n.audience === 'pilot' || n.audience === 'pilot:' + PILOT_ID; })
      .slice()
      .sort(function (a, b) { return b.ts - a.ts; });
  }
  function hasFreshNotifs() {
    return myNotifs().some(function (n) { return n.ts > Date.now() - 864e5; });
  }
  function notifModal() {
    var list = myNotifs().slice(0, 8);
    var body = list.length
      ? '<div class="stack">' + list.map(function (n) {
        return '<button type="button" class="record-card row-lg"' +
          (n.hash ? ' data-nav="' + esc(n.hash) + '"' : '') + ' data-close>' +
          '<div class="icon-tile icon-tile-sm on-sun">' + CWA.icon(NOTIF_ICON[n.tKey] || 'bell') + '</div>' +
          '<div class="grow"><div class="small semibold">' + esc(t(n.tKey + '.t', n.params)) + '</div>' +
          '<div class="tiny muted">' + esc(t(n.tKey + '.b', n.params)) + '</div></div>' +
          '<span class="tiny muted">' + esc(CWA.fmt.rel(n.ts)) + '</span></button>';
      }).join('') + '</div>'
      : '<div class="empty-state"><div class="icon-tile">' + CWA.icon('bell') + '</div>' +
      '<div>' + esc(t('pilot.notif.empty')) + '</div></div>';

    CWA.ui.modal('<div class="stack">' +
      '<div class="between"><div class="h2">' + esc(t('common.notifications')) + '</div>' +
      '<button type="button" class="icon-btn" data-close aria-label="' + esc(t('common.close')) + '">' + CWA.icon('x') + '</button></div>' +
      body + '</div>');
  }

  /* ----------------------------- small builders ---------------------------- */
  function heroBtn(attrs, label, sub, icon, cls) {
    return '<button type="button" class="btn-hero ' + (cls || '') + '" ' + attrs + '>' +
      '<span class="grow">' + esc(label) +
      (sub ? '<span class="btn-hero-sub">' + esc(sub) + '</span>' : '') + '</span>' +
      '<span class="btn-hero-knob">' + CWA.icon(icon || 'arrowRight') + '</span></button>';
  }
  function bigOpt(icon, title, hint, attrs, sel, tone) {
    return '<button type="button" class="big-option' + (sel ? ' selected' : '') + '" ' + attrs + '>' +
      '<div class="icon-tile on-' + (tone || 'sun') + '">' + CWA.icon(icon) + '</div>' +
      '<div class="grow"><div>' + esc(title) + '</div>' +
      (hint ? '<div class="hint">' + esc(hint) + '</div>' : '') + '</div></button>';
  }
  function weekDays(off) {
    var d = new Date();
    d.setHours(0, 0, 0, 0);
    var monday = new Date(d.getFullYear(), d.getMonth(), d.getDate() - ((d.getDay() + 6) % 7) + off * 7);
    var out = [];
    for (var i = 0; i < 7; i++) out.push(new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + i).getTime());
    return out;
  }

  /* ------------------------------ write actions ---------------------------- */
  function grab(id) {
    if (!cleared(me())) { CWA.nav('#training'); return; }
    var r0 = find(db().rides, id);
    if (!r0) return;
    if (r0.type === 'event') {
      CWA.store.update(function (d) {
        var r = find(d.rides, id);
        var free = freeTrishaw(r);
        if (free) r.pilots[free] = PILOT_ID;
        if (!freeTrishaw(r)) r.status = 'staffed';
        var partner = partnerOf(r, d);
        CWA.store.notify(d, 'admin', 'notif.grabbed', { pilot: PILOT_NAME, name: partner ? partner.name : ui.eventTitle(r, d) }, '#events/' + id);
      });
    } else {
      CWA.store.update(function (d) {
        var r = find(d.rides, id);
        r.status = 'staffed'; r.pilotId = PILOT_ID; if (!r.trishawId) r.trishawId = 't1';
        if (!find(d.chats, 'chat-' + r.id)) {
          d.chats.push({ id: 'chat-' + r.id, rideId: r.id, messages: [{ from: 'system', name: '', text: '', tKey: 'chat.sysCreated', ts: Date.now() }] });
        }
        var client = find(d.clients, r.clientId);
        CWA.store.notify(d, 'client:' + r.clientId, 'notif.pilotAssigned', { pilot: PILOT_NAME }, '#ride/' + r.id);
        CWA.store.notify(d, 'admin', 'notif.grabbed', { pilot: PILOT_NAME, name: client ? client.name : '' }, '#rides/' + r.id);
      });
    }
    CWA.ui.toast(t('pilot.grabbed'));
    CWA.nav('#ride/' + id);
  }

  /* ====================== auth: welcome / phone / code ===================== */
  var authFlow = CWA.auth.loginFlow({
    persona: PERSONA,
    art: 'trishaw',
    titleKey: 'pilot.welcome.title',
    subKey: 'pilot.welcome.sub',
    passkeyHintKey: 'pauth.passkeyHint',
    signupHash: '#signup',
    signupKey: 'pilot.welcome.become',
    phone: DEMO_PHONE,
    code: DEMO_CODE,
    keys: {
      'auth.usePhone': 'pauth.usePhone',
      'auth.terms': 'pauth.terms',
      'auth.verifying': 'pauth.verifying',
      'auth.welcomeBack': 'pauth.welcomeBack',
      'auth.phoneTitle': 'pauth.phoneTitle',
      'auth.phoneSub': 'pauth.phoneSub',
      'auth.codeSub': 'pauth.codeSub'
    },
    root: viewEl,
    setHtml: function (html) { setView(html, { full: true }); },
    onLogin: function () {
      CWA.auth.save(PERSONA, DEMO);
      location.hash = CWA.auth.onboarded(PERSONA) ? '#home' : '#onboarding';
      location.reload();
    }
  });

  /* ============================== #onboarding ============================= */
  var onbIdx = 0;
  function onboardingView() {
    CWA.auth.onboarding({
      persona: PERSONA,
      slides: [
        { art: 'trishaw', title: t('pilot.onb1.t'), body: t('pilot.onb1.b') },
        { art: 'helmet', title: t('pilot.onb2.t'), body: t('pilot.onb2.b') },
        { art: 'calendar', title: t('pilot.onb3.t'), body: t('pilot.onb3.b') },
        { art: 'hands', title: t('pilot.onb4.t'), body: t('pilot.onb4.b') }
      ],
      start: onbIdx,
      onIndex: function (n) { onbIdx = n; },
      root: viewEl,
      setHtml: function (html) { setView(html, { full: true }); },
      onDone: function () { CWA.nav(cleared(me()) ? '#home' : '#training'); }
    }).render();
  }

  /* ================================ #signup =============================== */
  var su = { step: 1, name: '', phone: '', busy: false };

  function signupView() {
    var d = db();
    var chapter = find(d.chapters, 'muc');
    var pilotCount = d.pilots.filter(function (p) { return p.chapterId === 'muc'; }).length;
    var canNext = su.step !== 1 || (su.name.trim() && su.phone.trim());

    var html =
      ui.backHead({ backAction: 'su-back', title: esc(t('auth.signup')) }) +
      '<div class="app-body stack-lg" style="padding-bottom:2.5rem">' +
      '<div class="progress-dots">' + [1, 2, 3, 4].map(function (i) {
        return '<span class="' + (i < su.step ? 'done' : i === su.step ? 'current' : '') + '"></span>';
      }).join('') + '</div>';

    if (su.step === 1) {
      html += '<div class="display display-sm">' + esc(t('pilot.signup.q1')) + '</div>' +
        '<div class="stack">' +
        '<div class="field"><label class="label" for="su-name">' + esc(t('pilot.signup.nameLabel')) + '</label>' +
        '<input class="input" id="su-name" autocomplete="name" value="' + esc(su.name) + '"></div>' +
        '<div class="field"><label class="label" for="su-phone">' + esc(t('common.phone')) + '</label>' +
        '<input class="input" id="su-phone" type="tel" autocomplete="tel" value="' + esc(su.phone) + '">' +
        '<span class="hint">' + esc(t('pilot.signup.phoneHint')) + '</span></div>' +
        '</div>';
    } else if (su.step === 2) {
      html += '<div class="display display-sm">' + esc(t('pilot.signup.q2')) + '</div>' +
        '<div class="tile tile-mint stack">' +
        '<div class="row"><div class="icon-tile on-ink">' + CWA.icon('mapPin') + '</div>' +
        '<div class="grow"><div class="tile-value" style="font-size:1.375rem">' + esc(chapter ? chapter.name : '') + '</div>' +
        '<div class="tile-label">' + esc(t('pilot.signup.chapterFound')) + '</div></div></div>' +
        '<div class="small">' + esc(t('pilot.signup.chapterPilots', { n: CWA.fmt.num(pilotCount) })) + '</div>' +
        '</div>' +
        ui.mapEmbed(d.garages[0] ? d.garages[0].address : 'München', { small: true });
    } else if (su.step === 3) {
      html += '<div class="display display-sm">' + esc(t('pilot.signup.q3')) + '</div>' +
        '<div class="stack">' +
        [['play', 'pilot.signup.s1', 'sun'], ['users', 'pilot.signup.s2', 'lav'], ['bike', 'pilot.signup.s3', 'mint']].map(function (row, i) {
          return '<div class="card row-lg reveal" style="--i:' + i + '">' +
            '<div class="icon-tile on-' + row[2] + '">' + CWA.icon(row[0]) + '</div>' +
            '<div class="small grow">' + esc(t(row[1])) + '</div>' +
            '<div class="numeric muted">' + (i + 1) + '</div></div>';
        }).join('') + '</div>';
    } else {
      html += '<div class="display display-sm">' + esc(t('pilot.signup.q4')) + '</div>' +
        '<div class="stack center">' +
        '<div class="passkey-orb' + (su.busy ? ' ok' : '') + '">' + CWA.icon(su.busy ? 'check' : 'key') + '</div>' +
        '<div class="small muted center">' + esc(t(su.busy ? 'pilot.signup.creating' : 'pilot.signup.passkeyHint')) + '</div>' +
        '</div>';
    }

    if (su.step < 4) {
      html += '<button type="button" class="btn-hero" id="su-next"' + (canNext ? '' : ' disabled') + '>' +
        '<span class="grow">' + esc(t('common.next')) + '</span>' +
        '<span class="btn-hero-knob">' + CWA.icon('arrowRight') + '</span></button>';
    } else {
      html += heroBtn('id="su-create"' + (su.busy ? ' disabled' : ''),
        t(su.busy ? 'pilot.signup.creating' : 'pilot.signup.create'), '', 'key');
    }
    html += '</div>';
    setView(html, { full: true });

    var v = viewEl();
    v.querySelector('#su-back').addEventListener('click', function () {
      if (su.step > 1) { su.step--; CWA.render(); } else { CWA.nav('#welcome'); }
    });
    var nameInput = v.querySelector('#su-name');
    var phoneInput = v.querySelector('#su-phone');
    var next = v.querySelector('#su-next');
    function validate() { if (next) next.disabled = !(su.name.trim() && su.phone.trim()); }
    if (nameInput) nameInput.addEventListener('input', function () { su.name = nameInput.value; validate(); });
    if (phoneInput) phoneInput.addEventListener('input', function () { su.phone = phoneInput.value; validate(); });
    if (next) next.addEventListener('click', function () { su.step++; CWA.render(); });

    var create = v.querySelector('#su-create');
    if (create) create.addEventListener('click', function () {
      if (su.busy) return;
      su.busy = true;
      CWA.render();
      setTimeout(createPilot, 1500);
    });
  }

  function createPilot() {
    var name = su.name.trim();
    var phone = su.phone.trim();
    var id = CWA.store.uid('p');
    CWA.store.update(function (d) {
      d.pilots.push({
        id: id, name: name, phone: phone, role: 'volunteer', trained: false,
        rides: 0, chapterId: 'muc', availability: [], trainingsDone: []
      });
    });
    CWA.auth.save(PERSONA, { userId: id, name: name, loggedIn: true });
    location.hash = '#onboarding';
    location.reload();
  }

  /* ============================ ride cards (shared) ======================== */
  function grabButton(r) {
    if (!cleared(me())) {
      return '<button type="button" class="btn btn-secondary btn-lg btn-block" data-nav="#training">' +
        CWA.icon('lock') + esc(t('pilot.gate.grab')) + '</button>';
    }
    return heroBtn('data-grab="' + esc(r.id) + '"', t('pilot.feed.grab'), '', 'bike');
  }

  /* An open ride, presented as a proposition rather than a database row. */
  function openCard(r, d, urgent) {
    var partner = partnerOf(r, d);
    var client = clientOf(r, d);
    var head, meta;

    if (r.type === 'event') {
      var freeId = freeTrishaw(r);
      var tri = freeId ? find(d.trishaws, freeId) : null;
      head = '<div class="h2">' + esc(ui.eventTitle(r, d)) + '</div>' +
        '<div class="small medium" style="color:hsl(var(--sun-ink))">' +
        esc(t('pilot.event.needs', { trishaw: tri ? tri.number : '' })) + '</div>';
      meta =
        '<div class="row">' + CWA.icon('clock') + esc(CWA.fmt.rideWhen(r)) + ' · ' + esc(String(r.durationMin)) + ' ' + esc(t('common.min')) + '</div>' +
        '<div class="row">' + CWA.icon('mapPin') + '<span class="truncate">' + esc(r.pickup) + '</span></div>' +
        '<div class="row">' + CWA.icon('users') + esc(t('pilot.event.slots', { n: (r.roster || []).length })) + '</div>';
    } else {
      head = '<div class="h2">' + esc(CWA.fmt.rideWhen(r)) + '</div>' +
        '<div class="small medium muted">' + esc(client ? firstName(client.name) + (client.age ? ', ' + client.age : '') : (partner ? partner.name : '')) + '</div>';
      meta =
        '<div class="row">' + CWA.icon('mapPin') + '<span class="truncate">' + esc(r.pickup) + '</span></div>' +
        '<div class="row">' + CWA.icon('clock') + esc(String(r.durationMin)) + ' ' + esc(t('common.min')) + ' · ' + esc(ridersText(r.riders)) + '</div>';
    }

    return '<div class="card stack' + (urgent ? '' : '') + '"' +
      (urgent ? ' style="border-color:hsl(var(--sun));box-shadow:0 0 0 1px hsl(var(--sun))"' : '') + '>' +
      '<div class="between">' + ui.typeBadge(r.type) +
      '<span class="badge ' + (urgent ? 'badge-amber' : 'badge-outline') + '">' + CWA.icon('clock') + esc(CWA.fmt.rel(r.ts)) + '</span></div>' +
      '<div>' + head + '</div>' +
      '<div class="stack-sm small muted">' + meta + '</div>' +
      '<div class="row"><button type="button" class="btn btn-outline grow" data-nav="#ride/' + esc(r.id) + '">' +
      esc(t('common.details')) + '</button></div>' +
      grabButton(r) + '</div>';
  }

  /* One of my rides — always shows the single next action. */
  function mineCard(r, d) {
    var action = r.status === 'staffed'
      ? '<span class="badge badge-primary">' + CWA.icon('check') + esc(t('pilot.checkin')) + '</span>'
      : r.status === 'in_progress'
        ? '<span class="badge badge-emerald">' + CWA.icon('navigation') + esc(t('pilot.finish')) + '</span>'
        : ui.statusBadge(r.status);
    return '<button type="button" class="link-card" data-nav="#ride/' + esc(r.id) + '">' +
      '<div class="grow stack-sm">' +
      '<div class="row wrap">' + ui.typeBadge(r.type) + action + '</div>' +
      '<div class="h2">' + esc(CWA.fmt.rideWhen(r)) + '</div>' +
      '<div class="row small muted">' + CWA.icon('user') + '<span class="truncate">' + esc(rideName(r, d)) + '</span></div>' +
      '</div><span class="link-card-chevron">' + CWA.icon('chevronRight') + '</span></button>';
  }

  function eventCard(r, d) {
    var seats = ui.eventSeats(r);
    var mine = isMine(r);
    return '<button type="button" class="event-card" data-nav="#event/' + esc(r.id) + '">' +
      ui.eventCover(r, {
        chips: mine ? ui.coverChip(t('common.pilot'), 'shield', 'on-ink')
          : needsPilot(r) ? ui.coverChip(t('pilot.openTitle'), 'alert')
            : ui.coverChip(t('common.seatsFree', { free: seats.free, total: seats.total }), 'armchair')
      }) +
      '<div class="event-card-body">' +
      '<div class="h2">' + esc(ui.eventTitle(r, d)) + '</div>' +
      '<div class="row small muted">' + CWA.icon('clock') +
      '<span class="truncate">' + esc(CWA.fmt.day(r.ts) + ' · ' + CWA.fmt.time(r.ts)) + '</span></div>' +
      '</div></button>';
  }

  function bindRideActions() {
    viewEl().querySelectorAll('[data-grab]').forEach(function (b) {
      b.addEventListener('click', function () { grab(b.getAttribute('data-grab')); });
    });
  }

  function storyCard(d) {
    var list = (d.stories || []).filter(function (s) { return s.role !== 'pilot'; });
    if (!list.length) return '';
    var s = list[new Date().getDate() % list.length];
    return '<div class="quote stack-sm">' +
      '<div class="quote-mark">&ldquo;</div>' +
      '<div class="quote-text">' + esc(t(s.tKey)) + '</div>' +
      '<div class="row">' + art.avatar(s.author) +
      '<div><div class="small semibold">' + esc(s.author) + '</div>' +
      '<div class="tiny" style="opacity:.7">' + esc(t('story.' + s.role)) + '</div></div></div>' +
      '</div>';
  }

  /* ================================= #home ================================= */
  function homeView() {
    var d = db();
    var p = me();
    if (!p) { CWA.auth.logout(PERSONA); return; }
    var chapter = find(d.chapters, p.chapterId);
    var garage = d.garages[0]; // ponytail: garages carry no chapterId in the seed — first one is the München home base
    var open = openRides(d);
    var urgent = open.filter(function (r) { return r.ts < Date.now() + 4 * 36e5; });
    var mine = myUpcoming(d);
    var next = mine[0];
    var doneMine = d.rides.filter(function (r) { return r.status === 'done' && r.pilotId === PILOT_ID; });
    var rides = p.rides + doneMine.length;
    /* rides logged in this demo carry a real duration; the pilot's historic count
       is valued at the chapter's average ride (75 min) */
    var hours = Math.round((doneMine.reduce(function (s, r) { return s + (r.durationMin || 60); }, 0) + p.rides * 75) / 60);
    var donations = doneMine.reduce(function (s, r) { return s + ((r.debrief && r.debrief.donation) || 0); }, 0);
    var events = d.rides.filter(function (r) {
      return r.type === 'event' && r.chapterId === 'muc' && r.ts > Date.now() &&
        r.status !== 'cancelled' && r.status !== 'done';
    }).sort(byTs);
    var tp = trainingProgress();
    var h = new Date().getHours();
    var greetKey = h < 12 ? 'pilot.greetMorning' : h < 18 ? 'pilot.greetAfternoon' : 'pilot.greetEvening';

    var i = 0;
    function rev() { return ' class="reveal" style="--i:' + (i++) + '"'; }

    var html = ui.heroHead({
      lead: art.avatar(p.name, 'av-lg'),
      title: esc(t(greetKey, { name: firstName(p.name) })),
      sub: esc(CWA.fmt.dateLong(Date.now())),
      right: ui.bell(hasFreshNotifs())
    }) + '<div class="app-body stack-lg">';

    /* (0) blocking first: training is the gate to everything else */
    if (!cleared(p)) {
      html += '<button type="button" class="tile tile-sun row-lg"' + rev() + ' data-nav="#training">' +
        ui.ring(tp.pct, tp.pct + '%', 'sun') +
        '<div class="grow"><div class="tile-value" style="font-size:1.25rem">' + esc(t('pilot.trainingBlock')) + '</div>' +
        '<div class="tile-label">' + esc(t('pilot.trainingBlockSub', { done: CWA.fmt.num(tp.done), total: CWA.fmt.num(tp.total) })) + '</div></div>' +
        '<span class="btn-hero-knob" style="background:hsl(var(--sun-ink)/.15)">' + CWA.icon('chevronRight') + '</span>' +
        '</button>';
    }

    /* (1) the hero: what is happening for me next */
    if (next) {
      var nextName = rideName(next, d);
      html += '<button type="button" class="tile tile-ink stack-sm"' + rev() + ' data-nav="#ride/' + esc(next.id) + '">' +
        '<div class="between"><span class="eyebrow" style="color:inherit;opacity:.7">' + esc(t('pilot.heroNext')) + '</span>' +
        '<span class="cover-chip">' + CWA.icon('clock') + esc(CWA.fmt.rel(next.ts)) + '</span></div>' +
        '<div class="display display-sm">' + esc(CWA.fmt.rideWhen(next)) + '</div>' +
        '<div style="opacity:.85">' + esc(t('pilot.withName', { name: nextName }) + ' · ' + next.pickup) + '</div>' +
        '<div class="between mt-2">' +
        '<span class="row">' + ui.typeBadge(next.type) + '</span>' +
        '<span class="btn-hero-knob">' + CWA.icon('chevronRight') + '</span></div>' +
        '</button>';
      if (next.status === 'staffed') {
        html += '<div' + rev() + '>' + heroBtn('data-nav="#checkin/' + esc(next.id) + '"', t('pilot.checkin'), CWA.fmt.rideWhen(next), 'check', 'on-sun') + '</div>';
      } else if (next.status === 'in_progress') {
        html += '<div' + rev() + '>' + heroBtn('data-nav="#debrief/' + esc(next.id) + '"', t('pilot.finish'), '', 'checkCheck', 'on-rose') + '</div>';
      }
    } else if (open.length) {
      html += '<div class="tile tile-sun stack"' + rev() + '>' +
        '<div class="display display-sm">' + esc(t('pilot.heroWaiting', { n: CWA.fmt.num(open.length) })) + '</div>' +
        '<div class="tile-label">' + esc(t('pilot.heroWaitingSub')) + '</div>' +
        '<div class="tile-glyph">' + CWA.icon('bike') + '</div></div>' +
        '<div' + rev() + '>' + heroBtn('data-nav="#rides"', t('pilot.openTitle'), t('pilot.heroWaitingSub'), 'arrowRight') + '</div>';
    } else {
      html += '<div class="tile tile-mint stack"' + rev() + '>' +
        '<div class="display display-sm">' + esc(t('pilot.heroNothing')) + '</div>' +
        '<div class="tile-label">' + esc(t('pilot.heroNothingSub')) + '</div>' +
        '<div class="tile-glyph">' + CWA.icon('sun') + '</div></div>';
    }

    /* (2) rides that need someone — the heart of this app */
    if (open.length) {
      html += '<div class="stack"' + rev() + '>' +
        ui.sectionHead(t('pilot.openTitle'), t('common.seeAll'), '#rides') +
        (urgent.length ? '<div class="alert alert-amber">' + CWA.icon('alert') +
          '<div><div class="alert-title">' + esc(t('pilot.feed.urgent')) + '</div>' +
          '<div>' + esc(t('pilot.feed.urgentSub')) + '</div></div></div>' : '') +
        open.slice(0, 2).map(function (r) { return openCard(r, d, urgent.indexOf(r) !== -1); }).join('') +
        '</div>';
    }

    /* (3) what I have given so far */
    html += '<div class="tile-grid-3"' + rev() + '>' +
      '<div class="tile tile-mint"><div class="tile-value">' + esc(CWA.fmt.num(rides)) + '</div>' +
      '<div class="tile-label">' + esc(t('pilot.statRides')) + '</div></div>' +
      '<div class="tile tile-sky"><div class="tile-value">' + esc(CWA.fmt.num(hours)) + '</div>' +
      '<div class="tile-label">' + esc(t('pilot.statHours')) + '</div></div>' +
      '<div class="tile tile-peach"><div class="tile-value" style="font-size:1.25rem">' + esc(CWA.fmt.euro(donations)) + '</div>' +
      '<div class="tile-label">' + esc(t('pilot.statDonations')) + '</div></div>' +
      '</div>';

    /* (4) my week at a glance — availability doubles as the calendar */
    var days = weekDays(0);
    var today = dayStart(Date.now());
    html += '<div class="stack"' + rev() + '>' +
      ui.sectionHead(t('pilot.weekTitle'), t('common.viewWeek'), '#rides/week') +
      '<div class="week-strip">' + days.map(function (ts) {
        var dayInt = new Date(ts).getDay();
        var avail = (p.availability || []).indexOf(dayInt) !== -1;
        var has = d.rides.some(function (r) { return isMine(r) && dayStart(r.ts) === ts; });
        return '<button type="button" data-avail="' + dayInt + '" class="' + (avail ? 'active ' : '') + (ts === today ? 'today' : '') + '">' +
          '<span>' + esc(CWA.fmt.weekday(ts)) + '</span>' +
          '<span class="dnum">' + esc(String(new Date(ts).getDate())) + '</span>' +
          '<span class="ride-dot' + (has ? '' : ' none') + '"></span></button>';
      }).join('') + '</div>' +
      '<div class="row between"><span class="hint">' + esc(t('pilot.weekHint')) + '</span>' +
      ui.weatherChip() + '</div>' +
      '</div>';

    /* (5) chapter life */
    if (events.length) {
      html += '<div class="stack"' + rev() + '>' +
        ui.sectionHead(t('pilot.eventsTitle')) +
        '<div class="rail">' + events.slice(0, 4).map(function (r) { return eventCard(r, d); }).join('') + '</div>' +
        '</div>';
    }

    html += '<div' + rev() + '>' + storyCard(d) + '</div>';

    /* (6) where the trishaws live */
    if (garage) {
      html += '<div class="card stack"' + rev() + '>' +
        '<div class="eyebrow">' + esc(t('pilot.garageTitle')) + '</div>' +
        '<div class="row-lg"><div class="icon-tile on-lav">' + CWA.icon('warehouse') + '</div>' +
        '<div class="grow"><div class="h2">' + esc(garage.name) + '</div>' +
        '<div class="muted small">' + esc(garage.address) + '</div></div></div>' +
        ui.mapEmbed(garage.address, { small: true, caption: false }) +
        (chapter && chapter.phone
          ? '<a class="btn btn-outline btn-block" href="tel:' + esc(chapter.phone.replace(/\s+/g, '')) + '">' +
          CWA.icon('phone') + esc(chapter.phone) + '</a>' : '') +
        '</div>';
    }

    html += '</div>';
    setView(html);
    bindRideActions();
    bindAvailability();
  }

  function bindAvailability() {
    viewEl().querySelectorAll('[data-avail]').forEach(function (b) {
      b.addEventListener('click', function () {
        var dayInt = parseInt(b.getAttribute('data-avail'), 10);
        CWA.store.update(function (d2) {
          var p2 = find(d2.pilots, PILOT_ID);
          if (!p2.availability) p2.availability = [];
          var i = p2.availability.indexOf(dayInt);
          if (i === -1) p2.availability.push(dayInt); else p2.availability.splice(i, 1);
          p2.availability.sort(function (a, b2) { return a - b2; });
        });
      });
    });
  }

  /* ================================ #rides ================================= */
  var ridesTab = 'open';
  var weekOff = 0;
  var selIdx = -1;

  function ridesView(arg) {
    if (arg === 'open' || arg === 'mine' || arg === 'week') ridesTab = arg;
    var d = db();
    var open = openRides(d);
    var mine = myUpcoming(d);

    var html = ui.heroHead({
      lead: ui.brandDot(),
      title: esc(t('pilot.tab.rides')),
      sub: esc(t('pilot.openTitle') + ' · ' + open.length),
      right: ui.bell(hasFreshNotifs())
    }) + '<div class="app-body stack-lg">' +
      '<div class="seg w-full">' +
      ['open', 'mine', 'week'].map(function (k) {
        return '<button type="button" class="grow ' + (ridesTab === k ? 'active' : '') + '" data-rtab="' + k + '">' +
          esc(t('pilot.seg.' + k)) + '</button>';
      }).join('') + '</div>';

    if (ridesTab === 'open') {
      var urgent = open.filter(function (r) { return r.ts < Date.now() + 4 * 36e5; });
      if (!open.length) {
        html += '<div class="empty-state"><div class="icon-tile">' + CWA.icon('bike') + '</div>' +
          '<div>' + esc(t('pilot.feed.empty')) + '</div></div>';
      } else {
        if (urgent.length) {
          html += '<div class="alert alert-amber">' + CWA.icon('alert') +
            '<div><div class="alert-title">' + esc(t('pilot.feed.urgent')) + '</div>' +
            '<div>' + esc(t('pilot.feed.urgentSub')) + '</div></div></div>';
        }
        html += '<div class="stack">' + open.map(function (r, k) {
          return '<div class="reveal" style="--i:' + k + '">' + openCard(r, d, urgent.indexOf(r) !== -1) + '</div>';
        }).join('') + '</div>';
      }
    } else if (ridesTab === 'mine') {
      var past = d.rides.filter(function (r) { return r.status === 'done' && r.pilotId === PILOT_ID; })
        .sort(function (a, b) { return b.ts - a.ts; });
      html += '<div class="stack">' + ui.sectionHead(t('common.upcoming'));
      html += mine.length
        ? mine.map(function (r, k) { return '<div class="reveal" style="--i:' + k + '">' + mineCard(r, d) + '</div>'; }).join('')
        : '<div class="empty-state"><div class="icon-tile">' + CWA.icon('calendar') + '</div>' +
        '<div>' + esc(t('pilot.mine.emptyUp')) + '</div>' +
        '<button type="button" class="btn btn-primary" data-rtab="open">' + esc(t('pilot.seg.open')) + '</button></div>';
      html += '</div>';

      html += '<div class="stack">' + ui.sectionHead(t('common.past'));
      html += past.length
        ? past.map(function (r) {
          var don = r.debrief && r.debrief.donation
            ? '<span class="small semibold tabular text-emerald">' + esc(CWA.fmt.euro(r.debrief.donation)) + '</span>' : '';
          return '<div class="record-card between"><div>' +
            '<div class="small medium">' + esc(rideName(r, d)) + '</div>' +
            '<div class="tiny muted">' + esc(CWA.fmt.date(r.ts)) + '</div></div>' + don + '</div>';
        }).join('')
        : '<div class="small muted">' + esc(t('pilot.mine.emptyPast')) + '</div>';
      html += '</div>';
    } else {
      html += weekBlock(d);
    }

    html += '</div>';
    setView(html);

    var v = viewEl();
    v.querySelectorAll('[data-rtab]').forEach(function (b) {
      b.addEventListener('click', function () { ridesTab = b.getAttribute('data-rtab'); selIdx = -1; CWA.render(); });
    });
    v.querySelectorAll('[data-day]').forEach(function (b) {
      b.addEventListener('click', function () { selIdx = parseInt(b.getAttribute('data-day'), 10); CWA.render(); });
    });
    v.querySelectorAll('[data-week]').forEach(function (b) {
      b.addEventListener('click', function () { weekOff += parseInt(b.getAttribute('data-week'), 10); selIdx = -1; CWA.render(); });
    });
    bindRideActions();
  }

  function weekBlock(d) {
    var days = weekDays(weekOff);
    var today = dayStart(Date.now());
    if (selIdx < 0) { selIdx = days.indexOf(today); if (selIdx < 0) selIdx = 0; }
    var mine = d.rides.filter(isMine);

    var strip = days.map(function (ts, i) {
      var has = mine.some(function (r) { return dayStart(r.ts) === ts; });
      return '<button type="button" data-day="' + i + '" class="' +
        (i === selIdx ? 'active ' : '') + (ts === today ? 'today' : '') + '">' +
        '<span>' + esc(CWA.fmt.weekday(ts)) + '</span>' +
        '<span class="dnum">' + esc(String(new Date(ts).getDate())) + '</span>' +
        '<span class="ride-dot' + (has ? '' : ' none') + '"></span></button>';
    }).join('');

    var sel = days[selIdx];
    var list = mine.filter(function (r) { return dayStart(r.ts) === sel; }).sort(byTs);

    return '<div class="stack">' +
      '<div class="between">' +
      '<button type="button" class="icon-pill" data-week="-1" aria-label="' + esc(t('common.back')) + '">' + CWA.icon('chevronLeft') + '</button>' +
      '<div class="medium">' + esc(CWA.fmt.date(days[0]) + ' – ' + CWA.fmt.date(days[6])) + '</div>' +
      '<button type="button" class="icon-pill" data-week="1" aria-label="' + esc(t('common.next')) + '">' + CWA.icon('chevronRight') + '</button>' +
      '</div>' +
      '<div class="week-strip">' + strip + '</div>' +
      '</div>' +
      '<div class="stack">' + ui.sectionHead(CWA.fmt.day(sel)) +
      (list.length
        ? list.map(function (r) { return mineCard(r, d); }).join('')
        : '<div class="empty-state"><div class="icon-tile">' + CWA.icon('sun') + '</div>' +
        '<div>' + esc(t('pilot.mine.dayEmpty')) + '</div></div>') +
      '</div>';
  }

  /* ============================== #event/<id> ============================== */
  function eventView(id) {
    var d = db();
    var r = find(d.rides, id);
    if (!r || r.type !== 'event') { CWA.nav('#rides'); return; }
    var seats = ui.eventSeats(r);
    var partner = partnerOf(r, d);
    var guests = (r.roster || []).filter(function (x) { return !!x.name; }).map(function (x) { return x.name; });
    var myTri = null;
    if (r.pilots) { for (var k in r.pilots) if (r.pilots[k] === PILOT_ID) myTri = find(d.trishaws, k); }

    setView(
      ui.backHead({ back: '#rides' }) +
      '<div class="app-body stack-lg">' +
      '<div class="reveal">' + ui.eventCover(r, { tall: true, date: false, chips: ui.coverChip(t('common.event'), 'sparkles') }) + '</div>' +

      '<div class="stack-sm reveal" style="--i:1">' +
      '<div class="display">' + esc(ui.eventTitle(r, d)) + '</div>' +
      '<div class="row wrap muted">' +
      '<span class="row">' + CWA.icon('calendar') + esc(CWA.fmt.dateLong(r.ts)) + '</span>' +
      '<span class="row">' + CWA.icon('clock') + esc(CWA.fmt.time(r.ts)) + '</span></div>' +
      (myTri ? '<div><span class="badge badge-emerald">' + CWA.icon('bike') +
        esc(t('pilot.event.youRide', { trishaw: myTri.number })) + '</span></div>' : '') +
      '</div>' +

      '<div class="tile-grid reveal" style="--i:2">' +
      '<div class="tile tile-sun"><div class="tile-label">' + esc(t('common.duration')) + '</div>' +
      '<div class="tile-value">' + esc(CWA.fmt.num(r.durationMin)) + '<span style="font-size:1rem"> ' + esc(t('common.min')) + '</span></div>' +
      '<div class="tile-glyph">' + CWA.icon('clock') + '</div></div>' +
      '<div class="tile tile-mint"><div class="tile-label">' + esc(t('common.seats')) + '</div>' +
      '<div class="tile-value">' + esc(String(seats.taken)) + '<span style="font-size:1rem">/' + esc(String(seats.total)) + '</span></div>' +
      '<div class="tile-glyph">' + CWA.icon('armchair') + '</div></div>' +
      '</div>' +

      (ui.eventBody(r) ?
        '<div class="stack-sm reveal" style="--i:3"><h2 class="h2">' + esc(t('common.about')) + '</h2>' +
        '<p>' + esc(ui.eventBody(r)) + '</p></div>' : '') +

      '<div class="stack-sm reveal" style="--i:4"><h2 class="h2">' + esc(t('common.location')) + '</h2>' +
      '<div class="medium">' + esc(r.location || r.pickup) + '</div>' +
      ui.mapEmbed(r.location || r.pickup, { caption: false }) +
      (partner ? '<div class="row small muted">' + CWA.icon('building') +
        esc(t('common.hostedBy', { name: partner.name })) + '</div>' : '') + '</div>' +

      (guests.length ?
        '<div class="stack-sm reveal" style="--i:5"><h2 class="h2">' + esc(t('common.whoIsComing')) + '</h2>' +
        '<div class="row">' + ui.avatarStack(guests, 5) +
        '<span class="small muted">' + esc(t('common.seatsFree', { free: seats.free, total: seats.total })) + '</span></div>' +
        ui.seatStrip(r) + '</div>' : '') +

      '<div class="stack reveal" style="--i:6">' +
      '<button type="button" class="btn btn-outline btn-lg btn-block" data-nav="#ride/' + esc(r.id) + '">' +
      CWA.icon('list') + esc(t('pilot.ride.title')) + '</button>' +
      (needsPilot(r) && !isMine(r) ? grabButton(r) : '') +
      '</div>' +
      '</div>');
    bindRideActions();
  }

  /* =============================== #ride/<id> ============================== */
  function rideView(id) {
    var d = db();
    var r = find(d.rides, id);
    if (!r) { CWA.nav('#rides'); return; }
    var client = clientOf(r, d);
    var partner = partnerOf(r, d);
    var proxy = r.proxy || (client && client.proxy);
    var myTrishawId = r.trishawId;
    if (r.pilots) { for (var k in r.pilots) if (r.pilots[k] === PILOT_ID) myTrishawId = k; }
    var tri = myTrishawId ? find(d.trishaws, myTrishawId) : null;
    var gar = tri ? find(d.garages, tri.garageId) : null;
    var chat = find(d.chats, 'chat-' + id);
    var back = r.status === 'open' ? '#rides' : '#rides/mine';

    var html = ui.backHead({ back: back, title: esc(t('pilot.ride.title')) }) +
      '<div class="app-body stack-lg">';

    /* header block */
    html += '<div class="stack-sm reveal">' +
      '<div class="row wrap">' + ui.typeBadge(r.type) + ui.statusBadge(r.status) +
      '<span class="badge badge-outline">' + CWA.icon('clock') + esc(CWA.fmt.rel(r.ts)) + '</span></div>' +
      '<div class="display display-sm">' + esc(CWA.fmt.rideWhen(r)) + '</div>' +
      (r.type === 'event' ? '<div class="muted">' + esc(ui.eventTitle(r, d)) + '</div>' : '') +
      '</div>';

    /* passenger card */
    if (client) {
      html += '<div class="card stack reveal" style="--i:1">' +
        '<div class="eyebrow">' + esc(t('common.passenger')) + '</div>' +
        '<div class="row-lg">' + art.avatar(client.name, 'av-lg') +
        '<div class="grow"><div class="h2">' + esc(client.name) + (client.age ? ', ' + esc(String(client.age)) : '') + '</div>' +
        '<div class="tiny muted">' + esc(client.phone) + '</div></div>' +
        '<a class="icon-pill" href="tel:' + esc(client.phone) + '" aria-label="' + esc(t('common.call')) + '">' + CWA.icon('phone') + '</a>' +
        '</div>';
      if (client.mobilityNotes) {
        html += '<div class="alert alert-sky">' + CWA.icon('info') + '<div>' + esc(client.mobilityNotes) + '</div></div>';
      }
      if (proxy) {
        html += '<div class="between small"><span class="muted">' + esc(t('pilot.ride.proxy')) + '</span>' +
          '<a class="medium" href="tel:' + esc(proxy.phone || '') + '">' + esc(proxy.name || '') +
          (proxy.relation ? ' <span class="muted">(' + esc(proxy.relation) + ')</span>' : '') + '</a></div>';
      }
      if (r.notes) {
        html += '<div class="between small"><span class="muted">' + esc(t('common.notes')) + '</span>' +
          '<span class="medium">' + esc(r.notes) + '</span></div>';
      }
      html += '</div>';
    }

    /* route card */
    html += '<div class="card stack reveal" style="--i:2">' +
      '<div class="eyebrow">' + esc(t('pilot.ride.route')) + '</div>' +
      '<div class="row small">' + CWA.icon('mapPin') + '<div><div class="tiny muted">' + esc(t('common.pickup')) + '</div>' +
      '<div class="medium">' + esc(r.pickup) + '</div></div></div>' +
      (r.stops || []).map(function (s) {
        return '<div class="row small">' + CWA.icon('mapPin') + '<div><div class="tiny muted">' + esc(t('common.stop')) + '</div>' +
          '<div class="medium">' + esc(s) + '</div></div></div>';
      }).join('') +
      (r.destination
        ? '<div class="row small">' + CWA.icon('flag') + '<div><div class="tiny muted">' + esc(t('common.destination')) + '</div>' +
        '<div class="medium">' + esc(r.destination) + '</div></div></div>'
        : '') +
      '<div class="row small muted">' + CWA.icon('clock') + esc(String(r.durationMin)) + ' ' + esc(t('common.min')) +
      (r.returnRide ? ' <span class="badge badge-sky">' + esc(t('common.return')) + '</span>' : '') + '</div>' +
      ui.mapEmbed(r.pickup, { small: true, caption: false }) +
      '</div>';

    /* trishaw & garage card */
    if (tri) {
      html += '<div class="card stack reveal" style="--i:3">' +
        '<div class="eyebrow">' + esc(t('pilot.ride.bike')) + '</div>' +
        (r.pilots ? '<div><span class="badge badge-emerald">' + CWA.icon('bike') + esc(t('pilot.event.youRide', { trishaw: tri.number })) + '</span></div>' : '') +
        '<div class="between"><div class="row">' + CWA.icon('bike') +
        '<span class="semibold">' + esc(tri.number) + '</span>' +
        '<span class="small muted">' + esc(tri.model) + '</span></div>' +
        ui.batteryBar(tri.battery) + '</div>' +
        '<div class="between small"><span class="muted">' + esc(t('common.lockCode')) + '</span>' +
        '<span class="kbd">' + esc(tri.lockCode) + '</span></div>';
      if (gar) {
        html += '<div class="row small">' + CWA.icon('warehouse') +
          '<div><div class="medium">' + esc(gar.name) + '</div>' +
          '<div class="muted">' + esc(gar.address) + '</div></div></div>';
        if (gar.accessInstructions) {
          html += '<div class="alert alert-amber">' + CWA.icon('key') + '<div>' + esc(gar.accessInstructions) + '</div></div>';
        }
      }
      html += '</div>';
    }

    /* partner contact */
    if (partner) {
      html += '<div class="card stack-sm reveal" style="--i:4">' +
        '<div class="eyebrow">' + esc(t('pilot.ride.partner')) + '</div>' +
        '<div class="between"><div><div class="medium">' + esc(partner.contactName) + '</div>' +
        '<div class="small muted">' + esc(partner.name) + '</div></div>' +
        '<a class="icon-pill" href="tel:' + esc(partner.phone) + '" aria-label="' + esc(t('common.call')) + '">' + CWA.icon('phone') + '</a>' +
        '</div></div>';
    }

    /* event roster (read-only) */
    if (r.roster && r.trishaws) {
      var times = [];
      r.roster.forEach(function (e) { if (times.indexOf(e.time) === -1) times.push(e.time); });
      var grid = '<div class="roster-grid" style="grid-template-columns:auto repeat(' + r.trishaws.length + ',1fr)">' +
        '<div class="roster-head"></div>' +
        r.trishaws.map(function (tid) {
          var tw = find(d.trishaws, tid);
          return '<div class="roster-head">' + esc(tw ? tw.number : tid) + '</div>';
        }).join('') +
        times.map(function (time) {
          return '<div class="roster-time">' + esc(time) + '</div>' +
            r.trishaws.map(function (tid) {
              var entry = null;
              r.roster.forEach(function (e) { if (e.time === time && e.trishawId === tid) entry = e; });
              return entry && entry.name
                ? '<div class="roster-cell filled">' + (entry.order ? '<span class="order-num">' + esc(String(entry.order)) + '</span>' : '') + esc(entry.name) + '</div>'
                : '<div class="roster-cell">–</div>';
            }).join('');
        }).join('') +
        '</div>';
      html += '<div class="card stack reveal" style="--i:5"><div class="eyebrow">' + esc(t('pilot.ride.roster')) + '</div>' +
        '<div class="scroll-x">' + grid + '</div>' +
        '<button type="button" class="btn btn-outline btn-block" data-nav="#event/' + esc(r.id) + '">' +
        CWA.icon('sparkles') + esc(t('common.event')) + '</button></div>';
    }

    /* actions */
    var actions = '';
    if (chat || (r.status === 'staffed' && r.clientId)) {
      actions += '<button type="button" class="btn btn-outline btn-lg btn-block" data-nav="#chat/' + esc(r.id) + '">' +
        CWA.icon('chat') + esc(t('common.chat')) + '</button>';
    }
    if (r.status === 'open' && needsPilot(r) && !isMine(r)) actions += grabButton(r);
    if (r.status === 'staffed' && isMine(r)) {
      actions += heroBtn('data-nav="#checkin/' + esc(r.id) + '"', t('pilot.checkin'), '', 'check', 'on-sun');
    }
    if (r.status === 'in_progress' && isMine(r)) {
      actions += heroBtn('data-nav="#debrief/' + esc(r.id) + '"', t('pilot.finish'), '', 'checkCheck', 'on-rose');
    }
    if (actions) html += '<div class="stack reveal" style="--i:6">' + actions + '</div>';

    html += '</div>';
    setView(html);
    bindRideActions();
  }

  /* ============================= #checkin/<id> ============================= */
  var ck = { id: null, checks: [false, false, false], wOpen: false, wName: '', wWaiver: false };
  var startedAt = {}; // ponytail: elapsed time kept in-memory only; a real app would persist a start timestamp

  function checkinView(id) {
    var d = db();
    var r = find(d.rides, id);
    if (!r) { CWA.nav('#rides'); return; }
    if (ck.id !== id) ck = { id: id, checks: [false, false, false], wOpen: false, wName: '', wWaiver: false };

    if (r.status === 'in_progress') { renderOnRoad(r); return; }
    if (r.status !== 'staffed') { CWA.nav('#ride/' + id); return; }

    var allChecked = ck.checks[0] && ck.checks[1] && ck.checks[2];
    var doneCount = ck.checks.filter(Boolean).length;

    var html = ui.backHead({ back: '#ride/' + esc(id), title: esc(t('pilot.check.title')), sub: esc(CWA.fmt.rideWhen(r)) }) +
      '<div class="app-body stack-lg">';

    html += '<div class="stack-sm reveal">' +
      '<div class="display display-sm">' + esc(t('pilot.check.lead')) + '</div>' +
      '<div class="bar-track"><span class="bar-fill on-mint" style="width:' + Math.round(doneCount / 3 * 100) + '%"></span></div>' +
      '</div>';

    html += '<div class="stack">' +
      ['pilot.check.c1', 'pilot.check.c2', 'pilot.check.c3'].map(function (key, i) {
        return '<label class="check-row' + (ck.checks[i] ? ' checked' : '') + '">' +
          '<input type="checkbox" data-ck="' + i + '"' + (ck.checks[i] ? ' checked' : '') + '>' +
          '<span class="medium">' + esc(t(key)) + '</span></label>';
      }).join('') + '</div>';

    /* walk-up passengers */
    html += '<div class="stack">';
    if (r.walkUps && r.walkUps.length) {
      html += r.walkUps.map(function (w) {
        return '<div class="row small muted">' + CWA.icon('check') + esc(w.name) +
          ' · ' + esc(t('common.waiver')) + ': ' + esc(t('common.signed')) + '</div>';
      }).join('');
    }
    if (!ck.wOpen) {
      html += '<button type="button" class="btn btn-outline btn-block" id="wu-open">' +
        CWA.icon('plus') + esc(t('pilot.check.walkup')) + '</button>';
    } else {
      html += '<div class="card stack">' +
        '<div class="field"><label class="label" for="wu-name">' + esc(t('pilot.check.walkupName')) + '</label>' +
        '<input class="input" id="wu-name" value="' + esc(ck.wName) + '"></div>' +
        '<label class="check-row' + (ck.wWaiver ? ' checked' : '') + '">' +
        '<input type="checkbox" id="wu-waiver"' + (ck.wWaiver ? ' checked' : '') + '>' +
        '<span class="small">' + esc(t('waiver.text')) + '</span></label>' +
        '<button type="button" class="btn btn-secondary btn-block" id="wu-add"' +
        (ck.wWaiver && ck.wName.trim() ? '' : ' disabled') + '>' + esc(t('common.add')) + '</button>' +
        '</div>';
    }
    html += '</div>';

    html += heroBtn('id="start-btn"' + (allChecked ? '' : ' disabled'), t('pilot.check.start'), '', 'bike', 'on-rose');
    html += '</div>';
    setView(html);

    var v = viewEl();
    var startBtn = v.querySelector('#start-btn');
    v.querySelectorAll('[data-ck]').forEach(function (input) {
      input.addEventListener('change', function () {
        var i = parseInt(input.getAttribute('data-ck'), 10);
        ck.checks[i] = input.checked;
        input.closest('.check-row').classList.toggle('checked', input.checked);
        var n = ck.checks.filter(Boolean).length;
        var bar = v.querySelector('.bar-fill');
        if (bar) bar.style.width = Math.round(n / 3 * 100) + '%';
        startBtn.disabled = n !== 3;
      });
    });

    var wuOpen = v.querySelector('#wu-open');
    if (wuOpen) wuOpen.addEventListener('click', function () { ck.wOpen = true; CWA.render(); });
    var wuName = v.querySelector('#wu-name');
    var wuWaiver = v.querySelector('#wu-waiver');
    var wuAdd = v.querySelector('#wu-add');
    function wuValid() { if (wuAdd) wuAdd.disabled = !(ck.wWaiver && ck.wName.trim()); }
    if (wuName) wuName.addEventListener('input', function () { ck.wName = wuName.value; wuValid(); });
    if (wuWaiver) wuWaiver.addEventListener('change', function () {
      ck.wWaiver = wuWaiver.checked;
      wuWaiver.closest('.check-row').classList.toggle('checked', wuWaiver.checked);
      wuValid();
    });
    if (wuAdd) wuAdd.addEventListener('click', function () {
      var name = ck.wName.trim();
      if (!name || !ck.wWaiver) return;
      ck.wOpen = false; ck.wName = ''; ck.wWaiver = false;
      CWA.store.update(function (d2) {
        var r2 = find(d2.rides, id);
        if (!r2.walkUps) r2.walkUps = [];
        r2.walkUps.push({ name: name, waiverSigned: true });
      });
      CWA.ui.toast(t('pilot.check.walkupAdded'));
    });

    startBtn.addEventListener('click', function () {
      if (!(ck.checks[0] && ck.checks[1] && ck.checks[2])) return;
      startedAt[id] = Date.now();
      CWA.store.update(function (d2) { find(d2.rides, id).status = 'in_progress'; });
      CWA.ui.toast(t('pilot.check.started'));
    });
  }

  function renderOnRoad(r) {
    var elapsed = t('pilot.check.elapsed', { t: CWA.fmt.rel(startedAt[r.id] || r.ts) });
    setView(ui.backHead({ back: '#ride/' + esc(r.id), title: esc(t('pilot.check.title')), sub: esc(CWA.fmt.rideWhen(r)) }) +
      '<div class="app-body stack-lg">' +
      '<div class="center" style="margin:0 auto;width:min(20rem,90%)">' + art.hero('trishaw', { cls: 'roll' }) + '</div>' +
      '<div class="stack-sm center">' +
      '<div class="display">' + esc(t('pilot.check.onRoad')) + '</div>' +
      '<p class="muted">' + esc(t('pilot.check.onRoadSub')) + '</p>' +
      '<div class="tiny muted">' + esc(elapsed) + '</div></div>' +
      heroBtn('data-nav="#debrief/' + esc(r.id) + '"', t('pilot.finish'), '', 'checkCheck', 'on-rose') +
      '</div>');
  }

  /* ============================= #debrief/<id> ============================= */
  var dbf = { id: null, bikeOk: true, issue: '', battery: 70, donation: '', feedback: '' };

  function debriefView(id) {
    var d = db();
    var r = find(d.rides, id);
    if (!r) { CWA.nav('#rides'); return; }
    if (dbf.id !== id) {
      var tri0 = r.trishawId ? find(d.trishaws, r.trishawId) : null;
      dbf = { id: id, bikeOk: true, issue: '', battery: tri0 ? tri0.battery : 70, donation: '', feedback: '' };
    }

    var html = ui.backHead({ back: '#ride/' + esc(id), title: esc(t('pilot.debrief.title')), sub: esc(CWA.fmt.rideWhen(r)) }) +
      '<div class="app-body stack-lg">' +
      '<div class="display display-sm reveal">' + esc(t('pilot.debrief.title')) + '</div>';

    /* bike condition */
    html += '<div class="field reveal" style="--i:1"><span class="label">' + esc(t('pilot.debrief.bike')) + '</span>' +
      '<div class="row">' +
      '<button type="button" class="chip' + (dbf.bikeOk ? ' active' : '') + '" id="chip-ok">' + CWA.icon('check') + esc(t('pilot.debrief.ok')) + '</button>' +
      '<button type="button" class="chip' + (!dbf.bikeOk ? ' active' : '') + '" id="chip-prob">' + CWA.icon('wrench') + esc(t('pilot.debrief.problem')) + '</button>' +
      '</div>' +
      (!dbf.bikeOk
        ? '<textarea class="textarea" id="issue-input" placeholder="' + esc(t('pilot.debrief.issuePh')) + '">' + esc(dbf.issue) + '</textarea>'
        : '') +
      '</div>';

    /* battery on return */
    html += '<div class="field reveal" style="--i:2"><label class="label" for="bat-range">' + esc(t('pilot.debrief.battery')) + '</label>' +
      '<div class="row-lg">' +
      '<input type="range" min="0" max="100" value="' + esc(String(dbf.battery)) + '" id="bat-range" class="grow">' +
      '<span class="numeric" id="bat-label">' + esc(String(dbf.battery)) + '%</span>' +
      '</div></div>';

    /* donation */
    html += '<div class="field reveal" style="--i:3"><label class="label" for="don-input">' + esc(t('common.donation')) + '</label>' +
      '<div class="row"><span class="h2 muted">€</span>' +
      '<input type="number" min="0" step="1" class="input" id="don-input" placeholder="0" value="' + esc(dbf.donation) + '">' +
      '</div></div>';

    /* feedback */
    html += '<div class="field reveal" style="--i:4"><label class="label" for="fb-input">' + esc(t('pilot.debrief.feedback')) +
      ' <span class="hint">(' + esc(t('common.optional')) + ')</span></label>' +
      '<textarea class="textarea" id="fb-input">' + esc(dbf.feedback) + '</textarea></div>';

    html += heroBtn('id="dbf-submit"', t('pilot.debrief.submit'), '', 'checkCheck', 'on-rose');
    html += '</div>';
    setView(html);

    var v = viewEl();
    v.querySelector('#chip-ok').addEventListener('click', function () { dbf.bikeOk = true; CWA.render(); });
    v.querySelector('#chip-prob').addEventListener('click', function () { dbf.bikeOk = false; CWA.render(); });
    var issue = v.querySelector('#issue-input');
    if (issue) issue.addEventListener('input', function () { dbf.issue = issue.value; });
    var bat = v.querySelector('#bat-range');
    var batLabel = v.querySelector('#bat-label');
    bat.addEventListener('input', function () { dbf.battery = bat.value; batLabel.textContent = bat.value + '%'; });
    var don = v.querySelector('#don-input');
    don.addEventListener('input', function () { dbf.donation = don.value; });
    var fb = v.querySelector('#fb-input');
    fb.addEventListener('input', function () { dbf.feedback = fb.value; });

    v.querySelector('#dbf-submit').addEventListener('click', function () {
      var payload = {
        bikeOk: dbf.bikeOk,
        issue: dbf.bikeOk ? '' : dbf.issue.trim(),
        batteryReturn: parseInt(dbf.battery, 10) || 0,
        donation: parseFloat(dbf.donation) || 0,
        feedback: dbf.feedback.trim()
      };
      CWA.store.update(function (d2) {
        var r2 = find(d2.rides, id);
        r2.debrief = payload;
        r2.status = 'done';
        CWA.store.notify(d2, 'admin', 'notif.debrief', { pilot: PILOT_NAME }, '#rides/' + r2.id);
      });
      CWA.ui.toast(t('pilot.debrief.done', { name: firstName(PILOT_NAME) }));
      CWA.nav('#home');
    });
  }

  /* =============================== #training ============================== */
  function trainingView() {
    var d = db();
    var p = me();
    var tp = trainingProgress();

    var html = ui.backHead({ back: '#profile', title: esc(t('common.training')) }) +
      '<div class="app-body stack-lg">' +
      '<div class="tile tile-sun row-lg reveal">' + ui.ring(tp.pct, tp.pct + '%', 'sun') +
      '<div class="grow"><div class="tile-value" style="font-size:1.25rem">' +
      esc(t('pilot.training.progress', { done: CWA.fmt.num(tp.done), total: CWA.fmt.num(tp.total) })) + '</div>' +
      '<div class="tile-label">' + esc(t('pilot.training.intro')) + '</div></div></div>' +
      '<div class="stack">';

    html += (d.trainings || []).map(function (tr, i) {
      var done = trainingDone(p, tr.id);
      var required = (tr.requiredFor || []).indexOf('pilot') !== -1;
      var tappable = tr.type === 'video' && !done;
      var state = done
        ? '<span class="badge badge-emerald">' + CWA.icon('check') + esc(t('pilot.training.completed')) + '</span>'
        : tr.type === 'video'
          ? '<span class="small semibold text-primary">' + esc(t('pilot.training.watch')) + '</span>'
          : '<span class="tiny muted">' + esc(t('pilot.training.workshopHint')) + '</span>';

      return '<' + (tappable ? 'button type="button"' : 'div') + ' class="record-card video-card reveal" style="--i:' + i + '"' +
        (tappable ? ' data-play="' + esc(tr.id) + '"' : '') + '>' +
        '<div class="video-thumb' + (done ? ' done' : '') + '">' +
        (done ? CWA.icon('check') : '<span class="play-tri"></span>') + '</div>' +
        '<div class="grow stack-sm">' +
        '<div class="medium">' + esc(tr.title) + '</div>' +
        '<div class="row wrap tiny muted">' +
        '<span>' + esc(t(tr.type === 'video' ? 'pilot.training.video' : 'pilot.training.workshop')) + '</span>' +
        '<span>' + esc(CWA.fmt.num(tr.durationMin) + ' ' + t('common.min')) + '</span>' +
        (required ? '<span class="badge badge-outline">' + esc(t('pilot.training.required')) + '</span>' : '') +
        '</div>' + state + '</div>' +
        (tappable ? CWA.icon('chevronRight') : '') +
        '</' + (tappable ? 'button' : 'div') + '>';
    }).join('');

    html += '</div></div>';
    setView(html);

    viewEl().querySelectorAll('[data-play]').forEach(function (b) {
      b.addEventListener('click', function () {
        var tr = find(db().trainings, b.getAttribute('data-play'));
        if (tr) playVideo(tr);
      });
    });
  }

  /* mock player: a meter fills over ~2.5s, then the video counts as watched */
  function playVideo(tr) {
    var iv = null;
    var m = CWA.ui.modal(
      '<div class="stack">' +
      '<div class="cover">' + art.scene('garage') + '</div>' +
      '<div class="h2">' + esc(tr.title) + '</div>' +
      '<div class="small muted">' + esc(CWA.fmt.num(tr.durationMin) + ' ' + t('common.min')) + '</div>' +
      '<div class="bar-track"><span class="bar-fill" id="vp-fill" style="width:0%"></span></div>' +
      '<div class="small muted center">' + esc(t('pilot.training.playing')) + '</div>' +
      '<button type="button" class="btn btn-ghost btn-block" data-close>' + esc(t('common.close')) + '</button>' +
      '</div>',
      { onClose: function () { clearInterval(iv); } }
    );
    var fill = m.el.querySelector('#vp-fill');
    var pct = 0;
    iv = setInterval(function () {
      pct += 5;
      fill.style.width = pct + '%';
      if (pct < 100) return;
      clearInterval(iv);
      markDone(tr);
      m.close();
    }, 125);
  }

  function markDone(tr) {
    CWA.store.update(function (d) {
      var p = find(d.pilots, PILOT_ID);
      if (!p.trainingsDone) p.trainingsDone = [];
      if (p.trainingsDone.indexOf(tr.id) === -1) p.trainingsDone.push(tr.id);
    });
    var p2 = me();
    if (cleared(p2)) {
      CWA.ui.toast(t('pilot.training.allDone'));
      if (p2.role === 'volunteer') CWA.ui.toast(t('pilot.training.captainApproves'), 'info');
    } else {
      CWA.ui.toast(t('pilot.training.videoDone'));
    }
  }

  /* ================================ #chats ================================ */
  var chatsTab = 'active';
  function lastMsg(c) { return c.messages[c.messages.length - 1]; }
  function isPast(r) { return r.status === 'done' || r.status === 'cancelled'; }

  function chatsView() {
    var d = db();
    var items = d.chats
      .map(function (c) { return { c: c, r: find(d.rides, c.rideId) }; })
      .filter(function (x) { return x.r && isMine(x.r) && (chatsTab === 'past' ? isPast(x.r) : !isPast(x.r)); })
      .sort(function (a, b) { return (lastMsg(b.c) ? lastMsg(b.c).ts : 0) - (lastMsg(a.c) ? lastMsg(a.c).ts : 0); });

    var html = ui.heroHead({ lead: ui.brandDot(), title: esc(t('pilot.tab.chats')), right: ui.bell(hasFreshNotifs()) }) +
      '<div class="app-body stack-lg">' +
      '<div class="seg w-full">' +
      '<button type="button" class="grow ' + (chatsTab === 'active' ? 'active' : '') + '" data-ct="active">' + esc(t('chat.tabActive')) + '</button>' +
      '<button type="button" class="grow ' + (chatsTab === 'past' ? 'active' : '') + '" data-ct="past">' + esc(t('chat.tabPast')) + '</button>' +
      '</div>';

    if (!items.length) {
      html += '<div class="empty-state"><div class="icon-tile">' + CWA.icon('chat') + '</div>' +
        '<div>' + esc(t(chatsTab === 'past' ? 'pilot.chats.emptyPast' : 'pilot.chats.empty')) + '</div></div>';
    } else {
      html += '<div class="stack">' + items.map(function (x, i) {
        var last = lastMsg(x.c);
        var client = clientOf(x.r, d);
        var name = last && last.from === 'admin' ? t('chat.adminLabel') : (client ? client.name : rideName(x.r, d));
        var preview = last ? (last.from === 'system' ? t(last.tKey) : last.text) : '';
        var unread = !!last && last.from !== 'pilot' && last.from !== 'system';
        return '<button type="button" class="link-card reveal" style="--i:' + i + '" data-nav="#chat/' + esc(x.r.id) + '">' +
          art.avatar(name, 'av-lg') +
          '<div class="grow stack-sm"><div class="between"><span class="medium truncate">' + esc(name) + '</span>' +
          '<span class="tiny muted">' + (last ? esc(CWA.fmt.rel(last.ts)) : '') + '</span></div>' +
          '<div class="small muted truncate">' + esc(preview) + '</div></div>' +
          (unread ? '<span class="unread-dot"></span>' : '') +
          '</button>';
      }).join('') + '</div>';
    }
    html += '</div>';
    setView(html);

    viewEl().querySelectorAll('[data-ct]').forEach(function (b) {
      b.addEventListener('click', function () { chatsTab = b.getAttribute('data-ct'); CWA.render(); });
    });
  }

  /* ============================ #chat/<rideId> ============================ */
  function chatView(id) {
    var d = db();
    var r = find(d.rides, id);
    if (!r) { CWA.nav('#chats'); return; }
    var chat = find(d.chats, 'chat-' + id);
    var client = clientOf(r, d);
    var title = client ? client.name : rideName(r, d);

    var msgs = chat ? chat.messages.map(function (m) { return ui.chatMessage(m, 'pilot'); }).join('') : '';

    setView(ui.backHead({
      back: '#chats', title: esc(title), sub: esc(CWA.fmt.rideWhen(r)),
      right: '<button type="button" class="btn btn-outline btn-sm" data-nav="#ride/' + esc(id) + '">' + esc(t('chat.viewBooking')) + '</button>'
    }) +
      '<div class="chat-scroll">' + msgs + '</div>' +
      '<div class="chat-input-row">' +
      '<input class="input" id="chat-input" placeholder="' + esc(t('chat.placeholder')) + '" autocomplete="off">' +
      '<button type="button" class="send-btn" id="chat-send" aria-label="' + esc(t('common.send')) + '">' + CWA.icon('send') + '</button>' +
      '</div>', { fill: true, chromeless: true });

    var v = viewEl();
    var input = v.querySelector('#chat-input');
    function send() {
      var text = input.value.trim();
      if (!text) return;
      CWA.store.update(function (d2) {
        var c2 = find(d2.chats, 'chat-' + id);
        if (!c2) { c2 = { id: 'chat-' + id, rideId: id, messages: [] }; d2.chats.push(c2); }
        c2.messages.push({ from: 'pilot', name: PILOT_NAME, text: text, ts: Date.now() });
        var r2 = find(d2.rides, id);
        if (r2 && r2.clientId) {
          CWA.store.notify(d2, 'client:' + r2.clientId, 'notif.message', { name: PILOT_NAME, text: text.slice(0, 60) }, '#chat/' + id);
        }
      });
    }
    v.querySelector('#chat-send').addEventListener('click', send);
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') send(); });

    var sc = v.querySelector('.chat-scroll');
    if (sc) sc.scrollTop = sc.scrollHeight;
  }

  /* =============================== #profile =============================== */
  var notifOn = true;

  function profileView() {
    var d = db();
    var pilot = me();
    if (!pilot) { CWA.auth.logout(PERSONA); return; }
    var chapter = find(d.chapters, pilot.chapterId);
    var garage = d.garages[0];
    var doneMine = d.rides.filter(function (r) { return r.status === 'done' && r.pilotId === PILOT_ID; });
    var rides = pilot.rides + doneMine.length;
    var hours = Math.round((doneMine.reduce(function (s, r) { return s + (r.durationMin || 60); }, 0) + pilot.rides * 75) / 60);
    var donations = doneMine.reduce(function (s, r) { return s + ((r.debrief && r.debrief.donation) || 0); }, 0);
    var tp = trainingProgress();
    var isCleared = cleared(pilot);

    var html = ui.heroHead({ lead: ui.brandDot(), title: esc(t('pilot.tab.profile')) }) +
      '<div class="app-body stack-lg">';

    /* identity */
    html += '<div class="tile tile-lav stack reveal">' +
      '<div class="row-lg">' + art.avatar(pilot.name, 'av-xl') +
      '<div class="grow"><div class="tile-value" style="font-size:1.5rem">' + esc(pilot.name) + '</div>' +
      '<div class="tile-label">' + esc(pilot.phone) + '</div></div></div>' +
      '<div class="row wrap">' +
      (isCleared
        ? '<span class="cover-chip">' + CWA.icon('shield') + esc(t('pilot.profile.trained')) + '</span>'
        : '<span class="cover-chip">' + CWA.icon('clock') + esc(t('pilot.profile.inTraining')) + '</span>') +
      '<span class="cover-chip">' + CWA.icon('mapPin') + esc(chapter ? chapter.name : '') + '</span>' +
      '<span class="cover-chip">' + CWA.icon('bike') + esc(CWA.fmt.num(rides) + ' ' + t('common.rides')) + '</span>' +
      '</div></div>';

    /* stats */
    html += '<div class="tile-grid-3 reveal" style="--i:1">' +
      '<div class="tile tile-mint"><div class="tile-value">' + esc(CWA.fmt.num(rides)) + '</div>' +
      '<div class="tile-label">' + esc(t('pilot.statRides')) + '</div></div>' +
      '<div class="tile tile-sky"><div class="tile-value">' + esc(CWA.fmt.num(hours)) + '</div>' +
      '<div class="tile-label">' + esc(t('pilot.statHours')) + '</div></div>' +
      '<div class="tile tile-peach"><div class="tile-value" style="font-size:1.25rem">' + esc(CWA.fmt.euro(donations)) + '</div>' +
      '<div class="tile-label">' + esc(t('pilot.statDonations')) + '</div></div>' +
      '</div>';

    /* training */
    html += '<button type="button" class="card row-lg reveal" style="--i:2;text-align:left" data-nav="#training">' +
      ui.ring(tp.pct, tp.pct + '%', isCleared ? 'mint' : 'sun') +
      '<div class="grow"><div class="h2">' + esc(t('common.training')) + '</div>' +
      '<div class="small muted">' + esc(t('pilot.training.progress', { done: CWA.fmt.num(tp.done), total: CWA.fmt.num(tp.total) })) + '</div></div>' +
      '<span class="link-card-chevron">' + CWA.icon('chevronRight') + '</span></button>';

    /* account */
    html += '<div class="card stack reveal" style="--i:3">' +
      '<div class="between"><span class="eyebrow">' + esc(t('pilot.profile.account')) + '</span>' +
      '<button type="button" class="btn btn-outline btn-sm" id="edit-btn">' + CWA.icon('pencil') + esc(t('common.edit')) + '</button></div>' +
      '<dl class="detail-list">' +
      '<div><dt>' + esc(t('pilot.profile.name')) + '</dt><dd>' + esc(pilot.name) + '</dd></div>' +
      '<div><dt>' + esc(t('common.phone')) + '</dt><dd>' + esc(pilot.phone) + '</dd></div>' +
      '</dl></div>';

    /* availability */
    html += '<div class="card stack reveal" style="--i:4">' +
      '<div class="eyebrow">' + esc(t('common.availability')) + '</div>' +
      '<div class="week-strip">' + weekDays(0).map(function (ts) {
        var dayInt = new Date(ts).getDay();
        var on = (pilot.availability || []).indexOf(dayInt) !== -1;
        return '<button type="button" data-avail="' + dayInt + '" class="' + (on ? 'active' : '') + '">' +
          '<span>' + esc(CWA.fmt.weekday(ts)) + '</span>' +
          '<span class="dnum">' + (on ? CWA.icon('check') : '·') + '</span></button>';
      }).join('') + '</div>' +
      '<div class="hint">' + esc(t('pilot.profile.availHint')) + '</div>' +
      '</div>';

    /* chapter */
    html += '<div class="card stack reveal" style="--i:5">' +
      '<div class="eyebrow">' + esc(t('pilot.profile.chapterCard')) + '</div>' +
      '<div class="row-lg"><div class="icon-tile on-rose">' + CWA.icon('mapPin') + '</div>' +
      '<div class="grow"><div class="h2">' + esc(chapter ? chapter.name : '') + '</div>' +
      (garage ? '<div class="muted small">' + esc(t('pilot.profile.homeBase') + ': ' + garage.name) + '</div>' : '') +
      '</div></div>' +
      (garage ? ui.mapEmbed(garage.address, { small: true }) : '') +
      (chapter && chapter.phone
        ? '<a class="btn btn-outline btn-xl btn-block" href="tel:' + esc(chapter.phone.replace(/\s+/g, '')) + '">' +
        CWA.icon('phone') + esc(chapter.phone) + '</a>' : '') +
      '</div>';

    /* settings */
    html += '<div class="card stack reveal" style="--i:6">' +
      '<div class="eyebrow">' + esc(t('common.settings')) + '</div>' +
      '<div class="between"><span>' + esc(t('common.language')) + '</span>' + ui.langMenu() + '</div>' +
      '<div class="between"><div class="grow"><div>' + esc(t('common.notifications')) + '</div>' +
      '<div class="hint">' + esc(t('pilot.profile.notifHint')) + '</div></div>' +
      '<label class="switch"><input type="checkbox" id="notif-sw"' + (notifOn ? ' checked' : '') + '>' +
      '<span class="switch-slider"></span></label></div>' +
      '<div class="center"><a class="small muted" href="index.html">' + esc(t('pilot.profile.home')) + '</a></div>' +
      '</div>';

    html += '<button type="button" class="btn btn-destructive-outline btn-xl btn-block" id="logout-btn">' +
      CWA.icon('logout') + esc(t('auth.logout')) + '</button>';

    html += '</div>';
    setView(html);

    var v = viewEl();
    v.querySelector('#edit-btn').addEventListener('click', function () { editModal(pilot); });
    v.querySelector('#logout-btn').addEventListener('click', function () { CWA.auth.logout(PERSONA); });
    v.querySelector('#notif-sw').addEventListener('change', function () { notifOn = this.checked; });
    bindAvailability();
  }

  function editModal(pilot) {
    var m = CWA.ui.modal('<div class="stack">' +
      '<div class="h2">' + esc(t('pilot.profile.editTitle')) + '</div>' +
      '<div class="field"><label class="label" for="ed-name">' + esc(t('pilot.profile.name')) + '</label>' +
      '<input class="input" id="ed-name" value="' + esc(pilot.name) + '"></div>' +
      '<div class="field"><label class="label" for="ed-phone">' + esc(t('common.phone')) + '</label>' +
      '<input class="input" id="ed-phone" type="tel" value="' + esc(pilot.phone) + '"></div>' +
      '<div class="row"><button type="button" class="btn btn-outline grow" data-close>' + esc(t('common.cancel')) + '</button>' +
      '<button type="button" class="btn btn-primary grow" id="ed-save">' + esc(t('common.save')) + '</button></div>' +
      '</div>');
    m.el.querySelector('#ed-save').addEventListener('click', function () {
      var name = m.el.querySelector('#ed-name').value.trim();
      var phone = m.el.querySelector('#ed-phone').value.trim();
      if (!name) return;
      CWA.store.update(function (d2) {
        var p2 = find(d2.pilots, PILOT_ID);
        p2.name = name;
        p2.phone = phone;
      });
      PILOT_NAME = name;
      CWA.auth.save(PERSONA, { userId: PILOT_ID, name: name, loggedIn: true });
      m.close();
      CWA.ui.toast(t('pilot.profile.saved'));
    });
  }

  /* ================================= boot ================================= */
  if (!session) {
    document.body.innerHTML = '<div class="app" id="view"></div>';
    CWA.ui.startRouter({
      welcome: authFlow.welcome,
      phone: authFlow.phone,
      code: authFlow.code,
      signup: signupView
    }, 'welcome');
    return;
  }

  PILOT_ID = session.userId;
  PILOT_NAME = session.name;
  document.body.innerHTML = '<div class="app" id="view"></div><div id="tabbar-slot"></div>';
  CWA.renderShell = renderShell;
  renderShell();
  CWA.store.watch(['pilot', 'pilot:' + PILOT_ID], { persona: PERSONA, icon: 'bike', appName: 'CWA Pilot' });
  CWA.ui.startRouter({
    home: homeView,
    rides: ridesView,
    ride: rideView,
    event: eventView,
    checkin: checkinView,
    debrief: debriefView,
    chats: chatsView,
    chat: chatView,
    training: trainingView,
    profile: profileView,
    onboarding: onboardingView
  }, 'home');
})();
