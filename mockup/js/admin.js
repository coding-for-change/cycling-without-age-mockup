/* Admin app — two roles in one page:
   'chapter' = Petra Klein, chapter admin München (default)
   'super'   = Ole Kassow, super admin (adds the Global group: overview/countries/reports)
   Role lives in localStorage['cwa.adminRole']. Views render into #view; the shell is
   rebuilt by CWA.renderShell on every store/lang/role change, then CWA.render() re-fills #view. */

CWA.reg({
  en: {
    'admin.role': 'Chapter admin',
    'admin.roleSuper': 'Super admin',
    'admin.switchRole': 'Switch role',
    'admin.switchHint': 'This demo carries both admin roles — switch any time.',
    'admin.switchedToast': 'Now working as {name}',
    'admin.saved': 'Saved',

    'admin.grp.ops': 'Operations',
    'admin.grp.people': 'People',
    'admin.grp.setup': 'Setup',
    'admin.nav.dashboard': 'Dashboard',
    'admin.nav.requests': 'Requests',
    'admin.nav.calendar': 'Calendar',
    'admin.nav.rides': 'Rides',
    'admin.nav.events': 'Events',
    'admin.nav.chats': 'Chats',
    'admin.nav.pilots': 'Pilots',
    'admin.nav.clients': 'Passengers',
    'admin.nav.partners': 'Partners',
    'admin.nav.resources': 'Trishaws & garages',
    'admin.nav.settings': 'Settings',

    'admin.dash.ridesMonth': 'Rides this month',
    'admin.dash.openReq': 'Open requests',
    'admin.dash.activePilots': 'Active pilots',
    'admin.dash.donations': 'Donations this month',
    'admin.dash.today': "Today's rides",
    'admin.dash.noneToday': 'No rides today.',

    'admin.att.title': 'Needs attention',
    'admin.att.allClear': 'Nothing needs you right now — every ride has a pilot.',
    'admin.att.noPilot': "{name}'s ride still has no pilot",
    'admin.att.event': 'The event at {place} needs a pilot for {trishaw}',
    'admin.att.assign': 'Assign a pilot',
    'admin.att.staffEvent': 'Staff this event',
    'admin.att.openBooking': 'Open booking',

    'admin.assign.title': 'Assign a pilot',
    'admin.assign.hint': 'Only trained, approved pilots are listed.',
    'admin.assign.avail': 'usually rides {days}',
    'admin.assign.availNone': 'no availability set',
    'admin.assign.do': 'Assign pilot',
    'admin.assign.none': 'No trained pilots in this chapter yet.',
    'admin.assign.toast': '{pilot} is on the ride',

    'admin.col.when': 'When',
    'admin.col.type': 'Type',
    'admin.col.source': 'Source',
    'admin.col.checks': 'Checks',
    'admin.col.name': 'Name',
    'admin.col.role': 'Role',
    'admin.col.trained': 'Trained',
    'admin.col.rides': 'Rides',
    'admin.col.age': 'Age',
    'admin.col.address': 'Address',
    'admin.col.proxy': 'Proxy',
    'admin.col.mobility': 'Mobility notes',
    'admin.col.partner': 'Partner',
    'admin.col.slots': 'Slots filled',

    'admin.src.app': 'App',
    'admin.src.whatsapp': 'WhatsApp',
    'admin.src.phone': 'Phone',
    'admin.src.admin': 'Admin',

    'admin.flag.outside_hours': 'Outside opening hours',
    'admin.flag.lead_time': 'Too short notice',
    'admin.flag.waiver': 'Waiver missing',

    'admin.req.intro': 'New bookings are scheduled automatically — only these need your eyes.',
    'admin.req.empty': 'Inbox zero — everything scheduled automatically.',
    'admin.req.drawerTitle': 'Review request',
    'admin.req.summary': 'Request',
    'admin.req.requestedFor': 'Requested for',
    'admin.req.vOutside': '{name} asked for {time}, but the chapter is open {open}:00–{close}:00.',
    'admin.req.vOutsideTip': 'Pick a time within opening hours below — the passenger is notified automatically.',
    'admin.req.vLead': 'This request came in with less than {h} hours notice.',
    'admin.req.vLeadTip': 'You can still schedule it by hand if a pilot is available.',
    'admin.req.slotLabel': 'Time of day',
    'admin.req.trishawHint': 'Nearest to the pick-up address first',
    'admin.req.leaveOpen': 'Leave open — pilots can grab it',
    'admin.req.waiverToday': 'Waiver signed on paper today',
    'admin.req.decline': 'Decline',
    'admin.req.schedule': 'Schedule ride',
    'admin.req.scheduledToast': 'Ride scheduled',
    'admin.req.declinedToast': 'Request declined',

    'admin.cal.prev': 'Previous week',
    'admin.cal.next': 'Next week',
    'admin.cal.closed': 'Closed',

    'admin.tl.requested': 'Requested',
    'admin.tl.scheduled': 'Scheduled',
    'admin.tl.pilot': 'Pilot found',
    'admin.tl.ride': 'Ride',
    'admin.tl.done': 'Done',
    'admin.ride.lifecycle': 'Lifecycle',
    'admin.ride.debrief': 'Ride report',
    'admin.ride.bike': 'Trishaw condition',
    'admin.ride.bikeOk': 'In good condition',
    'admin.ride.issue': 'Issue reported',
    'admin.ride.batteryReturn': 'Battery on return',
    'admin.ride.feedback': 'Feedback',
    'admin.ride.cancel': 'Cancel ride',
    'admin.ride.cancelQ': 'Cancel this ride?',
    'admin.ride.cancelBody': 'The passenger — and the pilot, if assigned — will be notified.',
    'admin.ride.cancelledToast': 'Ride cancelled',
    'admin.ride.keep': 'Keep ride',
    'admin.ride.noChat': 'No chat yet',
    'admin.ride.noChatHint': 'A chat opens once a pilot takes the ride.',

    'admin.ev.assign': 'Pilots per trishaw',
    'admin.ev.roster': 'Riding roster',
    'admin.ev.progress': '{filled}/{total} slots filled',
    'admin.ev.full': 'Fully booked',
    'admin.ev.closeWhenFull': 'Close bookings when full',
    'admin.ev.addRider': 'Add passenger',
    'admin.ev.suggestions': 'Residents',
    'admin.ev.waiverCoord': 'Waiver signed by the partner coordinator',
    'admin.ev.riderAdded': '{name} added to the roster',
    'admin.ev.contact': 'Contact',
    'admin.ev.plan': 'Plan event',
    'admin.ev.wWhere': 'Where does the event start?',
    'admin.ev.atPartner': 'At a partner',
    'admin.ev.publicLoc': 'Public location',
    'admin.ev.publicHint': 'Open to everyone — passengers can reserve a seat in their app.',
    'admin.ev.wWhen': 'When, how long, how many seats?',
    'admin.ev.startTime': 'Start time',
    'admin.ev.trishawsLabel': 'Trishaws in use',
    'admin.ev.slotLen': 'Length of one ride slot',
    'admin.ev.preview': 'Roster preview',
    'admin.ev.slotsN': '{n} seats',
    'admin.ev.needTrishaw': 'Pick at least one trishaw.',
    'admin.ev.wReview': 'Ready to publish this event?',
    'admin.ev.create': 'Create event',
    'admin.ev.public': 'Public event',

    'admin.pil.explainer': 'New volunteers ride along with a captain first. Once the captain signs off their training, approve them here — they can take rides on their own right away.',
    'admin.pil.captain': 'Captain',
    'admin.pil.pilot': 'Pilot',
    'admin.pil.awaiting': 'Awaiting approval',
    'admin.pil.approve': 'Approve as pilot',
    'admin.pil.approvedToast': '{name} is now a pilot',
    'admin.pil.invite': 'Invite pilot',
    'admin.pil.roleVolunteer': 'Volunteer',
    'admin.pil.roleVolunteerHint': 'Rides along with a captain first',
    'admin.pil.rolePilotHint': 'Already trained elsewhere',
    'admin.pil.needs': 'They will need: {list}',
    'admin.pil.invitedToast': 'Invitation sent to {name}',
    'admin.pil.approveQ': 'Approve {name} as a pilot?',
    'admin.pil.missing': 'Training still missing: {list}',
    'admin.pil.approveAnyway': 'Approve anyway',

    'admin.tr.intro': 'Videos are watched in the pilot app. Workshops you sign off here.',
    'admin.tr.addVideo': 'Add video',
    'admin.tr.addWorkshop': 'Add workshop',
    'admin.tr.titleLabel': 'Title',
    'admin.tr.durationMin': 'Duration (minutes)',
    'admin.tr.requiredFor': 'Required for',
    'admin.tr.video': 'Video',
    'admin.tr.workshop': 'Workshop',
    'admin.tr.upload': 'Drop the video file here',
    'admin.tr.uploadHint': 'MP4 or MOV, up to 500 MB',
    'admin.tr.curriculum': 'Curriculum',
    'admin.tr.matrix': 'Who has completed what',
    'admin.tr.added': '{title} added',
    'admin.tr.signedOff': 'Signed off',
    'admin.tr.progress': 'Progress',
    'admin.tr.forPilot': 'Pilots',
    'admin.tr.forVolunteer': 'Volunteers',
    'admin.tr.tapHint': 'Tap a workshop cell to sign it off. Videos tick themselves once watched in the app.',
    'admin.tr.empty': 'No training material yet.',

    'admin.cli.proxySigned': 'Signed by proxy',
    'admin.cli.markSigned': 'Mark waiver as signed',
    'admin.cli.signedToast': 'Waiver marked as signed',
    'admin.cli.add': 'Add passenger',
    'admin.cli.residence': 'Where does the passenger live?',
    'admin.cli.atHome': 'At home',
    'admin.cli.inFacility': 'In a care facility',
    'admin.cli.facility': 'Facility',
    'admin.cli.waiverPaper': 'Waiver signed on paper',
    'admin.cli.addedToast': '{name} added',

    'admin.par.residents': '{n} residents',
    'admin.par.upcoming': 'Upcoming event rides',
    'admin.par.none': 'No upcoming event rides.',
    'admin.par.plan': 'Plan event ride',
    'admin.par.plannedToast': 'Event ride created',
    'admin.par.add': 'Add partner',
    'admin.par.contactName': 'Contact person',
    'admin.par.residentsLabel': 'Residents',
    'admin.par.addedToast': '{name} added',

    'admin.chats.empty': 'No conversations yet.',

    'admin.set.opModel': 'Operating model',
    'admin.set.opModelDesc': 'How new bookings reach your pilots.',
    'admin.set.auto': 'Auto-schedule requests',
    'admin.set.autoHint': 'Valid requests are published to pilots automatically.',
    'admin.set.leadTime': 'Lead time',
    'admin.set.hoursN': '{h} hours',
    'admin.set.calCard': 'Operating calendar',
    'admin.set.calDesc': 'The days and hours your chapter rides.',
    'admin.set.days': 'Operating days',
    'admin.set.opens': 'Opens',
    'admin.set.closes': 'Closes',
    'admin.set.slotHint': 'Booking slots: morning {m0}:00–{m1}:00 · afternoon {a0}:00–{a1}:00.',
    'admin.set.channels': 'Booking channels',
    'admin.set.channelsDesc': 'The ways passengers can book with you.',
    'admin.set.chApp': 'App & website',
    'admin.set.chAppHint': 'Self-service booking, waiver included.',
    'admin.set.chWa': 'WhatsApp bot',
    'admin.set.chWaHint': 'Chat booking for passengers without the app.',
    'admin.set.chPhone': 'Phone',
    'admin.set.chPhoneHint': 'You take the call and book by hand.',
    'admin.set.notif': 'Notifications & reminders',
    'admin.set.notifDesc': 'When the platform nudges everyone.',
    'admin.set.rideReminder': 'Ride reminder',
    'admin.set.noPilotAlert': 'No-pilot alert',
    'admin.set.demandCheck': 'Demand check',
    'admin.set.demandHint': 'We ask passengers who have not ridden for a while whether they would like to.',
    'admin.set.hBefore': '{h} h before',
    'admin.set.weekly': 'Weekly',
    'admin.set.monthly': 'Monthly',
    'admin.set.off': 'Off',
    'admin.set.waiverDesc': 'The text passengers agree to before their first ride.',
    'admin.set.waiverHint': 'Passengers see this text when booking and at check-in.',
    'admin.set.infoCard': 'Chapter info',
    'admin.set.infoDesc': 'Name, phone and where you are based.',
    'admin.set.name': 'Chapter name',
    'admin.set.country': 'Country',
    'admin.set.germany': 'Germany',

    'admin.res.trishaws': 'Trishaws',
    'admin.res.garages': 'Garages',
    'admin.res.access': 'Access',
    'admin.res.ok': 'Ready to ride',
    'admin.res.addTrishaw': 'Add trishaw',
    'admin.res.addGarage': 'Add garage',
    'admin.res.number': 'Number',
    'admin.res.model': 'Model',
    'admin.res.accessInstr': 'Access instructions',
    'admin.res.trishawAdded': 'Trishaw {n} added',
    'admin.res.garageAdded': '{name} added',

    'glob.subtitle': 'Global',
    'glob.overview': 'Overview',
    'glob.countries': 'Countries',
    'glob.reports': 'Reports',
    'glob.totalRides': 'Total rides',
    'glob.rideHours': 'Ride hours',
    'glob.chapters': 'Chapters',
    'glob.pilots': 'Pilots',
    'glob.rides': 'Rides',
    'glob.paxServed': 'Passengers served',
    'glob.trend': '+{p}% vs last year',
    'glob.trendNew': '+{n} this year',
    'glob.ridesPerMonth': 'Rides per month',
    'glob.topChapters': 'Top chapters',
    'glob.country': 'Country',
    'glob.ridesYtd': 'Rides YTD',
    'glob.colTrend': 'Trend',
    'glob.awaitingAlert': 'chapters are waiting for activation',
    'glob.viewCountries': 'View countries',
    'glob.active': 'Active',
    'glob.awaiting': 'Awaiting activation',
    'glob.activate': 'Activate',
    'glob.welcomeSent': 'Welcome email sent',
    'glob.openChapterAdmin': 'Open this chapter',
    'glob.reportTitle': 'Cycling Without Age — Impact Report',
    'glob.reportsTitle': 'Grant-ready reports',
    'glob.reportsHint': 'Pick a period and scope — the report is built from live network data.',
    'glob.generate': 'Generate report',
    'glob.period': 'Period',
    'glob.scope': 'Scope',
    'glob.pQuarter': 'This quarter',
    'glob.pYear': 'This year',
    'glob.p12': 'Last 12 months',
    'glob.sGlobal': 'Global',
    'glob.sGermany': 'Germany',
    'glob.sMuc': 'München',
    'glob.volunteers': 'Active volunteers',
    'glob.donations': 'Donations collected',
    'glob.chaptersActive': 'Chapters active',
    'glob.export': 'Export PDF',
    'glob.exported': 'Report exported — ready for your grant application',
    'glob.autoNote': 'Every chapter feeds these numbers automatically — no spreadsheets to chase.',
    'glob.addCountry': 'Add country',
    'glob.countryName': 'Country name',
    'glob.flagLabel': 'Flag',
    'glob.countryAdded': '{name} added to the network',
    'glob.addChapter': 'Add chapter',
    'glob.noChapters': 'No chapters yet — add the first one.',
    'glob.wName': 'What is the new chapter called?',
    'glob.chapterName': 'Chapter name',
    'glob.cityLabel': 'City or address',
    'glob.wContact': 'Who is the primary contact?',
    'glob.contactEmail': 'Email',
    'glob.contactInfo': 'The contact receives the activation email and becomes chapter admin.',
    'glob.wReview': 'Ready to create the chapter?',
    'glob.createChapter': 'Create chapter',
    'glob.chapterAdded': '{name} created — waiting for activation'
  },

  de: {
    'admin.role': 'Standort-Admin',
    'admin.roleSuper': 'Super-Admin',
    'admin.switchRole': 'Rolle wechseln',
    'admin.switchHint': 'Diese Demo enthält beide Admin-Rollen — wechsle jederzeit.',
    'admin.switchedToast': 'Du arbeitest jetzt als {name}',
    'admin.saved': 'Gespeichert',

    'admin.grp.ops': 'Betrieb',
    'admin.grp.people': 'Menschen',
    'admin.grp.setup': 'Einrichtung',
    'admin.nav.dashboard': 'Übersicht',
    'admin.nav.requests': 'Anfragen',
    'admin.nav.calendar': 'Kalender',
    'admin.nav.rides': 'Fahrten',
    'admin.nav.events': 'Events',
    'admin.nav.chats': 'Chats',
    'admin.nav.pilots': 'Pilot·innen',
    'admin.nav.clients': 'Fahrgäste',
    'admin.nav.partners': 'Partner',
    'admin.nav.resources': 'Rikschas & Garagen',
    'admin.nav.settings': 'Einstellungen',

    'admin.dash.ridesMonth': 'Fahrten diesen Monat',
    'admin.dash.openReq': 'Offene Anfragen',
    'admin.dash.activePilots': 'Aktive Pilot·innen',
    'admin.dash.donations': 'Spenden diesen Monat',
    'admin.dash.today': 'Heutige Fahrten',
    'admin.dash.noneToday': 'Heute keine Fahrten.',

    'admin.att.title': 'Braucht Aufmerksamkeit',
    'admin.att.allClear': 'Gerade ist alles im Griff — jede Fahrt hat eine Pilot·in.',
    'admin.att.noPilot': '{name}s Fahrt hat noch keine Pilot·in',
    'admin.att.event': 'Das Event bei {place} braucht eine Pilot·in für {trishaw}',
    'admin.att.assign': 'Pilot·in zuteilen',
    'admin.att.staffEvent': 'Event besetzen',
    'admin.att.openBooking': 'Buchung öffnen',

    'admin.assign.title': 'Pilot·in zuteilen',
    'admin.assign.hint': 'Nur geschulte, freigeschaltete Pilot·innen erscheinen hier.',
    'admin.assign.avail': 'fährt meist {days}',
    'admin.assign.availNone': 'keine Verfügbarkeit hinterlegt',
    'admin.assign.do': 'Pilot·in zuteilen',
    'admin.assign.none': 'Noch keine geschulten Pilot·innen an diesem Standort.',
    'admin.assign.toast': '{pilot} übernimmt die Fahrt',

    'admin.col.when': 'Wann',
    'admin.col.type': 'Art',
    'admin.col.source': 'Quelle',
    'admin.col.checks': 'Prüfungen',
    'admin.col.name': 'Name',
    'admin.col.role': 'Rolle',
    'admin.col.trained': 'Geschult',
    'admin.col.rides': 'Fahrten',
    'admin.col.age': 'Alter',
    'admin.col.address': 'Adresse',
    'admin.col.proxy': 'Vertretung',
    'admin.col.mobility': 'Mobilitätshinweise',
    'admin.col.partner': 'Partner',
    'admin.col.slots': 'Belegte Plätze',

    'admin.src.app': 'App',
    'admin.src.whatsapp': 'WhatsApp',
    'admin.src.phone': 'Telefon',
    'admin.src.admin': 'Verwaltung',

    'admin.flag.outside_hours': 'Außerhalb der Öffnungszeiten',
    'admin.flag.lead_time': 'Zu kurzfristig',
    'admin.flag.waiver': 'Einverständnis fehlt',

    'admin.req.intro': 'Neue Buchungen werden automatisch eingeplant — nur diese brauchen deinen Blick.',
    'admin.req.empty': 'Alles erledigt — alle Buchungen wurden automatisch eingeplant.',
    'admin.req.drawerTitle': 'Anfrage prüfen',
    'admin.req.summary': 'Anfrage',
    'admin.req.requestedFor': 'Gewünscht für',
    'admin.req.vOutside': '{name} wünscht sich {time}, der Standort ist aber von {open} bis {close} Uhr geöffnet.',
    'admin.req.vOutsideTip': 'Wähle unten eine Zeit innerhalb der Öffnungszeiten — der Fahrgast wird automatisch informiert.',
    'admin.req.vLead': 'Diese Anfrage kam mit weniger als {h} Stunden Vorlauf.',
    'admin.req.vLeadTip': 'Du kannst sie trotzdem von Hand einplanen, wenn eine Pilot·in Zeit hat.',
    'admin.req.slotLabel': 'Tageszeit',
    'admin.req.trishawHint': 'Die nächste zur Abholadresse zuerst',
    'admin.req.leaveOpen': 'Offen lassen — Pilot·innen können sie übernehmen',
    'admin.req.waiverToday': 'Einverständnis heute auf Papier unterschrieben',
    'admin.req.decline': 'Ablehnen',
    'admin.req.schedule': 'Fahrt einplanen',
    'admin.req.scheduledToast': 'Fahrt eingeplant',
    'admin.req.declinedToast': 'Anfrage abgelehnt',

    'admin.cal.prev': 'Vorherige Woche',
    'admin.cal.next': 'Nächste Woche',
    'admin.cal.closed': 'Geschlossen',

    'admin.tl.requested': 'Angefragt',
    'admin.tl.scheduled': 'Eingeplant',
    'admin.tl.pilot': 'Pilot·in gefunden',
    'admin.tl.ride': 'Fahrt',
    'admin.tl.done': 'Abgeschlossen',
    'admin.ride.lifecycle': 'Ablauf',
    'admin.ride.debrief': 'Fahrtbericht',
    'admin.ride.bike': 'Zustand der Rikscha',
    'admin.ride.bikeOk': 'In gutem Zustand',
    'admin.ride.issue': 'Problem gemeldet',
    'admin.ride.batteryReturn': 'Akku bei Rückgabe',
    'admin.ride.feedback': 'Rückmeldung',
    'admin.ride.cancel': 'Fahrt absagen',
    'admin.ride.cancelQ': 'Diese Fahrt absagen?',
    'admin.ride.cancelBody': 'Der Fahrgast — und falls zugeteilt die Pilot·in — wird benachrichtigt.',
    'admin.ride.cancelledToast': 'Fahrt abgesagt',
    'admin.ride.keep': 'Fahrt behalten',
    'admin.ride.noChat': 'Noch kein Chat',
    'admin.ride.noChatHint': 'Ein Chat öffnet sich, sobald eine Pilot·in die Fahrt übernimmt.',

    'admin.ev.assign': 'Pilot·innen pro Rikscha',
    'admin.ev.roster': 'Fahrplan der Mitfahrenden',
    'admin.ev.progress': '{filled}/{total} Plätze belegt',
    'admin.ev.full': 'Ausgebucht',
    'admin.ev.closeWhenFull': 'Buchung schließen, wenn ausgebucht',
    'admin.ev.addRider': 'Fahrgast hinzufügen',
    'admin.ev.suggestions': 'Bewohner·innen',
    'admin.ev.waiverCoord': 'Einverständnis von der Koordination des Partners unterschrieben',
    'admin.ev.riderAdded': '{name} wurde eingetragen',
    'admin.ev.contact': 'Kontakt',
    'admin.ev.plan': 'Event planen',
    'admin.ev.wWhere': 'Wo startet das Event?',
    'admin.ev.atPartner': 'Bei einem Partner',
    'admin.ev.publicLoc': 'Öffentlicher Ort',
    'admin.ev.publicHint': 'Für alle offen — Fahrgäste können in der App einen Platz reservieren.',
    'admin.ev.wWhen': 'Wann, wie lange, wie viele Plätze?',
    'admin.ev.startTime': 'Startzeit',
    'admin.ev.trishawsLabel': 'Eingesetzte Rikschas',
    'admin.ev.slotLen': 'Länge eines Fahrt-Slots',
    'admin.ev.preview': 'Vorschau des Fahrplans',
    'admin.ev.slotsN': '{n} Plätze',
    'admin.ev.needTrishaw': 'Wähle mindestens eine Rikscha.',
    'admin.ev.wReview': 'Event so veröffentlichen?',
    'admin.ev.create': 'Event anlegen',
    'admin.ev.public': 'Öffentliches Event',

    'admin.pil.explainer': 'Neue Ehrenamtliche fahren zuerst mit einem Captain mit. Sobald der Captain die Schulung bestätigt, kannst du sie hier freischalten — danach können sie sofort eigene Fahrten übernehmen.',
    'admin.pil.captain': 'Captain',
    'admin.pil.pilot': 'Pilot·in',
    'admin.pil.awaiting': 'Wartet auf Freigabe',
    'admin.pil.approve': 'Als Pilot·in freischalten',
    'admin.pil.approvedToast': '{name} ist jetzt Pilot·in',
    'admin.pil.invite': 'Pilot·in einladen',
    'admin.pil.roleVolunteer': 'Ehrenamtlich',
    'admin.pil.roleVolunteerHint': 'Fährt zuerst mit einem Captain mit',
    'admin.pil.rolePilotHint': 'Bereits woanders geschult',
    'admin.pil.needs': 'Wird noch brauchen: {list}',
    'admin.pil.invitedToast': 'Einladung an {name} gesendet',
    'admin.pil.approveQ': '{name} als Pilot·in freischalten?',
    'admin.pil.missing': 'Fehlt noch: {list}',
    'admin.pil.approveAnyway': 'Trotzdem freischalten',

    'admin.tr.intro': 'Videos werden in der Pilot·innen-App angesehen. Workshops bestätigst du hier.',
    'admin.tr.addVideo': 'Video hinzufügen',
    'admin.tr.addWorkshop': 'Workshop hinzufügen',
    'admin.tr.titleLabel': 'Titel',
    'admin.tr.durationMin': 'Dauer (Minuten)',
    'admin.tr.requiredFor': 'Pflicht für',
    'admin.tr.video': 'Video',
    'admin.tr.workshop': 'Workshop',
    'admin.tr.upload': 'Videodatei hierher ziehen',
    'admin.tr.uploadHint': 'MP4 oder MOV, bis 500 MB',
    'admin.tr.curriculum': 'Lehrplan',
    'admin.tr.matrix': 'Wer hat was abgeschlossen',
    'admin.tr.added': '{title} hinzugefügt',
    'admin.tr.signedOff': 'Bestätigt',
    'admin.tr.progress': 'Fortschritt',
    'admin.tr.forPilot': 'Pilot·innen',
    'admin.tr.forVolunteer': 'Ehrenamtliche',
    'admin.tr.tapHint': 'Tippe auf ein Workshop-Feld, um es zu bestätigen. Videos hakt die App selbst ab.',
    'admin.tr.empty': 'Noch kein Schulungsmaterial.',

    'admin.cli.proxySigned': 'Durch Vertretung unterschrieben',
    'admin.cli.markSigned': 'Einverständnis als unterschrieben markieren',
    'admin.cli.signedToast': 'Einverständnis als unterschrieben markiert',
    'admin.cli.add': 'Fahrgast hinzufügen',
    'admin.cli.residence': 'Wo wohnt der Fahrgast?',
    'admin.cli.atHome': 'Zu Hause',
    'admin.cli.inFacility': 'In einer Einrichtung',
    'admin.cli.facility': 'Einrichtung',
    'admin.cli.waiverPaper': 'Einverständnis auf Papier unterschrieben',
    'admin.cli.addedToast': '{name} hinzugefügt',

    'admin.par.residents': '{n} Bewohner·innen',
    'admin.par.upcoming': 'Anstehende Event-Fahrten',
    'admin.par.none': 'Keine anstehenden Event-Fahrten.',
    'admin.par.plan': 'Event-Fahrt planen',
    'admin.par.plannedToast': 'Event-Fahrt angelegt',
    'admin.par.add': 'Partner hinzufügen',
    'admin.par.contactName': 'Ansprechpartner·in',
    'admin.par.residentsLabel': 'Bewohner·innen',
    'admin.par.addedToast': '{name} hinzugefügt',

    'admin.chats.empty': 'Noch keine Unterhaltungen.',

    'admin.set.opModel': 'Betriebsmodell',
    'admin.set.opModelDesc': 'Wie neue Buchungen zu deinen Pilot·innen kommen.',
    'admin.set.auto': 'Anfragen automatisch einplanen',
    'admin.set.autoHint': 'Gültige Anfragen werden automatisch für Pilot·innen veröffentlicht.',
    'admin.set.leadTime': 'Vorlaufzeit',
    'admin.set.hoursN': '{h} Stunden',
    'admin.set.calCard': 'Fahrkalender',
    'admin.set.calDesc': 'An welchen Tagen und Stunden dein Standort fährt.',
    'admin.set.days': 'Fahrtage',
    'admin.set.opens': 'Öffnet',
    'admin.set.closes': 'Schließt',
    'admin.set.slotHint': 'Buchungsfenster: vormittags {m0}–{m1} Uhr · nachmittags {a0}–{a1} Uhr.',
    'admin.set.channels': 'Buchungswege',
    'admin.set.channelsDesc': 'Wie Fahrgäste bei dir buchen können.',
    'admin.set.chApp': 'App & Website',
    'admin.set.chAppHint': 'Selbst buchen, Einverständnis inklusive.',
    'admin.set.chWa': 'WhatsApp-Bot',
    'admin.set.chWaHint': 'Buchen im Chat — ganz ohne App.',
    'admin.set.chPhone': 'Telefon',
    'admin.set.chPhoneHint': 'Du nimmst den Anruf an und buchst von Hand.',
    'admin.set.notif': 'Benachrichtigungen & Erinnerungen',
    'admin.set.notifDesc': 'Wann die Plattform alle erinnert.',
    'admin.set.rideReminder': 'Fahrt-Erinnerung',
    'admin.set.noPilotAlert': 'Alarm ohne Pilot·in',
    'admin.set.demandCheck': 'Nachfrage-Check',
    'admin.set.demandHint': 'Wir fragen Fahrgäste, die lange nicht gefahren sind, ob sie wieder mögen.',
    'admin.set.hBefore': '{h} Std. vorher',
    'admin.set.weekly': 'Wöchentlich',
    'admin.set.monthly': 'Monatlich',
    'admin.set.off': 'Aus',
    'admin.set.waiverDesc': 'Der Text, dem Fahrgäste vor der ersten Fahrt zustimmen.',
    'admin.set.waiverHint': 'Fahrgäste sehen diesen Text beim Buchen und beim Check-in.',
    'admin.set.infoCard': 'Standort-Infos',
    'admin.set.infoDesc': 'Name, Telefon und wo ihr zu Hause seid.',
    'admin.set.name': 'Standort-Name',
    'admin.set.country': 'Land',
    'admin.set.germany': 'Deutschland',

    'admin.res.trishaws': 'Rikschas',
    'admin.res.garages': 'Garagen',
    'admin.res.access': 'Zugang',
    'admin.res.ok': 'Einsatzbereit',
    'admin.res.addTrishaw': 'Rikscha hinzufügen',
    'admin.res.addGarage': 'Garage hinzufügen',
    'admin.res.number': 'Nummer',
    'admin.res.model': 'Modell',
    'admin.res.accessInstr': 'Zugangs-Hinweise',
    'admin.res.trishawAdded': 'Rikscha {n} hinzugefügt',
    'admin.res.garageAdded': '{name} hinzugefügt',

    'glob.subtitle': 'Global',
    'glob.overview': 'Überblick',
    'glob.countries': 'Länder',
    'glob.reports': 'Berichte',
    'glob.totalRides': 'Fahrten gesamt',
    'glob.rideHours': 'Fahrtstunden',
    'glob.chapters': 'Standorte',
    'glob.pilots': 'Pilot·innen',
    'glob.rides': 'Fahrten',
    'glob.paxServed': 'Erreichte Fahrgäste',
    'glob.trend': '+{p} % ggü. Vorjahr',
    'glob.trendNew': '+{n} in diesem Jahr',
    'glob.ridesPerMonth': 'Fahrten pro Monat',
    'glob.topChapters': 'Top-Standorte',
    'glob.country': 'Land',
    'glob.ridesYtd': 'Fahrten (lfd. Jahr)',
    'glob.colTrend': 'Trend',
    'glob.awaitingAlert': 'Standorte warten auf ihre Freischaltung',
    'glob.viewCountries': 'Länder ansehen',
    'glob.active': 'Aktiv',
    'glob.awaiting': 'Wartet auf Freischaltung',
    'glob.activate': 'Freischalten',
    'glob.welcomeSent': 'Willkommens-E-Mail gesendet',
    'glob.openChapterAdmin': 'Diesen Standort öffnen',
    'glob.reportTitle': 'Radeln ohne Alter — Wirkungsbericht',
    'glob.reportsTitle': 'Berichte für Förderanträge',
    'glob.reportsHint': 'Zeitraum und Bereich wählen — der Bericht entsteht aus Live-Daten des Netzwerks.',
    'glob.generate': 'Bericht erstellen',
    'glob.period': 'Zeitraum',
    'glob.scope': 'Bereich',
    'glob.pQuarter': 'Dieses Quartal',
    'glob.pYear': 'Dieses Jahr',
    'glob.p12': 'Letzte 12 Monate',
    'glob.sGlobal': 'Global',
    'glob.sGermany': 'Deutschland',
    'glob.sMuc': 'München',
    'glob.volunteers': 'Aktive Ehrenamtliche',
    'glob.donations': 'Gesammelte Spenden',
    'glob.chaptersActive': 'Aktive Standorte',
    'glob.export': 'PDF exportieren',
    'glob.exported': 'Bericht exportiert — bereit für deinen Förderantrag',
    'glob.autoNote': 'Jeder Standort speist diese Zahlen automatisch ein — kein Hinterhertelefonieren mehr.',
    'glob.addCountry': 'Land hinzufügen',
    'glob.countryName': 'Name des Landes',
    'glob.flagLabel': 'Flagge',
    'glob.countryAdded': '{name} ins Netzwerk aufgenommen',
    'glob.addChapter': 'Standort hinzufügen',
    'glob.noChapters': 'Noch keine Standorte — leg den ersten an.',
    'glob.wName': 'Wie heißt der neue Standort?',
    'glob.chapterName': 'Name des Standorts',
    'glob.cityLabel': 'Stadt oder Adresse',
    'glob.wContact': 'Wer ist die Hauptansprechperson?',
    'glob.contactEmail': 'E-Mail',
    'glob.contactInfo': 'Die Ansprechperson erhält die Aktivierungs-E-Mail und wird Standort-Admin.',
    'glob.wReview': 'Standort so anlegen?',
    'glob.createChapter': 'Standort anlegen',
    'glob.chapterAdded': '{name} angelegt — wartet auf Freischaltung'
  },

  da: {
    'admin.role': 'Afdelingsadmin',
    'admin.roleSuper': 'Superadmin',
    'admin.switchRole': 'Skift rolle',
    'admin.switchHint': 'Denne demo rummer begge admin-roller — skift når du vil.',
    'admin.switchedToast': 'Du arbejder nu som {name}',
    'admin.saved': 'Gemt',

    'admin.grp.ops': 'Drift',
    'admin.grp.people': 'Personer',
    'admin.grp.setup': 'Opsætning',
    'admin.nav.dashboard': 'Overblik',
    'admin.nav.requests': 'Forespørgsler',
    'admin.nav.calendar': 'Kalender',
    'admin.nav.rides': 'Ture',
    'admin.nav.events': 'Gruppeture',
    'admin.nav.chats': 'Chats',
    'admin.nav.pilots': 'Piloter',
    'admin.nav.clients': 'Passagerer',
    'admin.nav.partners': 'Partnere',
    'admin.nav.resources': 'Rickshaws & garager',
    'admin.nav.settings': 'Indstillinger',

    'admin.dash.ridesMonth': 'Ture denne måned',
    'admin.dash.openReq': 'Åbne forespørgsler',
    'admin.dash.activePilots': 'Aktive piloter',
    'admin.dash.donations': 'Donationer denne måned',
    'admin.dash.today': 'Dagens ture',
    'admin.dash.noneToday': 'Ingen ture i dag.',

    'admin.att.title': 'Kræver opmærksomhed',
    'admin.att.allClear': 'Alt er under kontrol — alle ture har en pilot.',
    'admin.att.noPilot': '{name}s tur mangler stadig en pilot',
    'admin.att.event': 'Gruppeturen hos {place} mangler en pilot til {trishaw}',
    'admin.att.assign': 'Tildel en pilot',
    'admin.att.staffEvent': 'Bemand gruppeturen',
    'admin.att.openBooking': 'Åbn booking',

    'admin.assign.title': 'Tildel en pilot',
    'admin.assign.hint': 'Kun trænede, godkendte piloter vises.',
    'admin.assign.avail': 'kører oftest {days}',
    'admin.assign.availNone': 'ingen tilgængelighed angivet',
    'admin.assign.do': 'Tildel pilot',
    'admin.assign.none': 'Ingen trænede piloter i afdelingen endnu.',
    'admin.assign.toast': '{pilot} tager turen',

    'admin.col.when': 'Hvornår',
    'admin.col.type': 'Type',
    'admin.col.source': 'Kilde',
    'admin.col.checks': 'Kontroller',
    'admin.col.name': 'Navn',
    'admin.col.role': 'Rolle',
    'admin.col.trained': 'Trænet',
    'admin.col.rides': 'Ture',
    'admin.col.age': 'Alder',
    'admin.col.address': 'Adresse',
    'admin.col.proxy': 'Fuldmagt',
    'admin.col.mobility': 'Mobilitetsnoter',
    'admin.col.partner': 'Partner',
    'admin.col.slots': 'Besatte pladser',

    'admin.src.app': 'App',
    'admin.src.whatsapp': 'WhatsApp',
    'admin.src.phone': 'Telefon',
    'admin.src.admin': 'Admin',

    'admin.flag.outside_hours': 'Uden for åbningstid',
    'admin.flag.lead_time': 'For kort varsel',
    'admin.flag.waiver': 'Samtykke mangler',

    'admin.req.intro': 'Nye bookinger planlægges automatisk — kun disse har brug for dit blik.',
    'admin.req.empty': 'Indbakken er tom — alt er planlagt automatisk.',
    'admin.req.drawerTitle': 'Gennemgå forespørgsel',
    'admin.req.summary': 'Forespørgsel',
    'admin.req.requestedFor': 'Ønsket til',
    'admin.req.vOutside': '{name} har bedt om {time}, men afdelingen har åbent {open}–{close}.',
    'admin.req.vOutsideTip': 'Vælg et tidspunkt inden for åbningstiden herunder — passageren får automatisk besked.',
    'admin.req.vLead': 'Forespørgslen kom med mindre end {h} timers varsel.',
    'admin.req.vLeadTip': 'Du kan stadig planlægge den manuelt, hvis en pilot har tid.',
    'admin.req.slotLabel': 'Tidspunkt på dagen',
    'admin.req.trishawHint': 'Nærmest afhentningsadressen først',
    'admin.req.leaveOpen': 'Lad stå åben — piloter kan tage den',
    'admin.req.waiverToday': 'Samtykke underskrevet på papir i dag',
    'admin.req.decline': 'Afvis',
    'admin.req.schedule': 'Planlæg tur',
    'admin.req.scheduledToast': 'Turen er planlagt',
    'admin.req.declinedToast': 'Forespørgslen er afvist',

    'admin.cal.prev': 'Forrige uge',
    'admin.cal.next': 'Næste uge',
    'admin.cal.closed': 'Lukket',

    'admin.tl.requested': 'Forespurgt',
    'admin.tl.scheduled': 'Planlagt',
    'admin.tl.pilot': 'Pilot fundet',
    'admin.tl.ride': 'Tur',
    'admin.tl.done': 'Afsluttet',
    'admin.ride.lifecycle': 'Forløb',
    'admin.ride.debrief': 'Turrapport',
    'admin.ride.bike': 'Rickshawens stand',
    'admin.ride.bikeOk': 'I god stand',
    'admin.ride.issue': 'Problem meldt',
    'admin.ride.batteryReturn': 'Batteri ved aflevering',
    'admin.ride.feedback': 'Feedback',
    'admin.ride.cancel': 'Aflys tur',
    'admin.ride.cancelQ': 'Aflys denne tur?',
    'admin.ride.cancelBody': 'Passageren — og piloten, hvis tildelt — får besked.',
    'admin.ride.cancelledToast': 'Turen er aflyst',
    'admin.ride.keep': 'Behold tur',
    'admin.ride.noChat': 'Ingen chat endnu',
    'admin.ride.noChatHint': 'En chat åbner, når en pilot tager turen.',

    'admin.ev.assign': 'Piloter pr. rickshaw',
    'admin.ev.roster': 'Kørselsplan',
    'admin.ev.progress': '{filled}/{total} pladser besat',
    'admin.ev.full': 'Fuldt booket',
    'admin.ev.closeWhenFull': 'Luk for tilmelding, når alt er besat',
    'admin.ev.addRider': 'Tilføj passager',
    'admin.ev.suggestions': 'Beboere',
    'admin.ev.waiverCoord': 'Samtykke underskrevet af partnerens koordinator',
    'admin.ev.riderAdded': '{name} er tilføjet planen',
    'admin.ev.contact': 'Kontakt',
    'admin.ev.plan': 'Planlæg gruppetur',
    'admin.ev.wWhere': 'Hvor starter turen?',
    'admin.ev.atPartner': 'Hos en partner',
    'admin.ev.publicLoc': 'Offentligt sted',
    'admin.ev.publicHint': 'Åben for alle — passagerer kan reservere en plads i appen.',
    'admin.ev.wWhen': 'Hvornår, hvor længe, hvor mange pladser?',
    'admin.ev.startTime': 'Starttid',
    'admin.ev.trishawsLabel': 'Rickshaws i brug',
    'admin.ev.slotLen': 'Længde på én tur',
    'admin.ev.preview': 'Forhåndsvisning af planen',
    'admin.ev.slotsN': '{n} pladser',
    'admin.ev.needTrishaw': 'Vælg mindst én rickshaw.',
    'admin.ev.wReview': 'Klar til at oprette turen?',
    'admin.ev.create': 'Opret gruppetur',
    'admin.ev.public': 'Offentlig tur',

    'admin.pil.explainer': 'Nye frivillige kører først med en kaptajn. Når kaptajnen har godkendt træningen, godkender du dem her — så kan de tage ture på egen hånd med det samme.',
    'admin.pil.captain': 'Kaptajn',
    'admin.pil.pilot': 'Pilot',
    'admin.pil.awaiting': 'Afventer godkendelse',
    'admin.pil.approve': 'Godkend som pilot',
    'admin.pil.approvedToast': '{name} er nu pilot',
    'admin.pil.invite': 'Inviter pilot',
    'admin.pil.roleVolunteer': 'Frivillig',
    'admin.pil.roleVolunteerHint': 'Kører først med en kaptajn',
    'admin.pil.rolePilotHint': 'Allerede trænet et andet sted',
    'admin.pil.needs': 'De skal have: {list}',
    'admin.pil.invitedToast': 'Invitation sendt til {name}',
    'admin.pil.approveQ': 'Godkend {name} som pilot?',
    'admin.pil.missing': 'Træning mangler stadig: {list}',
    'admin.pil.approveAnyway': 'Godkend alligevel',

    'admin.tr.intro': 'Videoer ses i pilot-appen. Workshops godkender du her.',
    'admin.tr.addVideo': 'Tilføj video',
    'admin.tr.addWorkshop': 'Tilføj workshop',
    'admin.tr.titleLabel': 'Titel',
    'admin.tr.durationMin': 'Varighed (minutter)',
    'admin.tr.requiredFor': 'Påkrævet for',
    'admin.tr.video': 'Video',
    'admin.tr.workshop': 'Workshop',
    'admin.tr.upload': 'Træk videofilen hertil',
    'admin.tr.uploadHint': 'MP4 eller MOV, op til 500 MB',
    'admin.tr.curriculum': 'Kursusplan',
    'admin.tr.matrix': 'Hvem har gennemført hvad',
    'admin.tr.added': '{title} tilføjet',
    'admin.tr.signedOff': 'Godkendt',
    'admin.tr.progress': 'Fremgang',
    'admin.tr.forPilot': 'Piloter',
    'admin.tr.forVolunteer': 'Frivillige',
    'admin.tr.tapHint': 'Tryk på et workshop-felt for at godkende det. Videoer sætter appen selv flueben ved.',
    'admin.tr.empty': 'Intet træningsmateriale endnu.',

    'admin.cli.proxySigned': 'Underskrevet ved fuldmagt',
    'admin.cli.markSigned': 'Markér samtykke som underskrevet',
    'admin.cli.signedToast': 'Samtykke markeret som underskrevet',
    'admin.cli.add': 'Tilføj passager',
    'admin.cli.residence': 'Hvor bor passageren?',
    'admin.cli.atHome': 'Hjemme',
    'admin.cli.inFacility': 'På et plejehjem',
    'admin.cli.facility': 'Sted',
    'admin.cli.waiverPaper': 'Samtykke underskrevet på papir',
    'admin.cli.addedToast': '{name} tilføjet',

    'admin.par.residents': '{n} beboere',
    'admin.par.upcoming': 'Kommende gruppeture',
    'admin.par.none': 'Ingen kommende gruppeture.',
    'admin.par.plan': 'Planlæg gruppetur',
    'admin.par.plannedToast': 'Gruppeturen er oprettet',
    'admin.par.add': 'Tilføj partner',
    'admin.par.contactName': 'Kontaktperson',
    'admin.par.residentsLabel': 'Beboere',
    'admin.par.addedToast': '{name} tilføjet',

    'admin.chats.empty': 'Ingen samtaler endnu.',

    'admin.set.opModel': 'Driftsmodel',
    'admin.set.opModelDesc': 'Hvordan nye bookinger når dine piloter.',
    'admin.set.auto': 'Planlæg forespørgsler automatisk',
    'admin.set.autoHint': 'Gyldige forespørgsler offentliggøres automatisk til piloterne.',
    'admin.set.leadTime': 'Varsel',
    'admin.set.hoursN': '{h} timer',
    'admin.set.calCard': 'Kørekalender',
    'admin.set.calDesc': 'De dage og timer, afdelingen kører.',
    'admin.set.days': 'Køredage',
    'admin.set.opens': 'Åbner',
    'admin.set.closes': 'Lukker',
    'admin.set.slotHint': 'Bookingvinduer: formiddag {m0}–{m1} · eftermiddag {a0}–{a1}.',
    'admin.set.channels': 'Bookingkanaler',
    'admin.set.channelsDesc': 'De måder passagerer kan booke hos dig.',
    'admin.set.chApp': 'App & website',
    'admin.set.chAppHint': 'Selvbetjening med samtykke indbygget.',
    'admin.set.chWa': 'WhatsApp-bot',
    'admin.set.chWaHint': 'Booking i chatten — uden app.',
    'admin.set.chPhone': 'Telefon',
    'admin.set.chPhoneHint': 'Du tager opkaldet og booker manuelt.',
    'admin.set.notif': 'Notifikationer & påmindelser',
    'admin.set.notifDesc': 'Hvornår platformen minder alle om noget.',
    'admin.set.rideReminder': 'Turpåmindelse',
    'admin.set.noPilotAlert': 'Alarm uden pilot',
    'admin.set.demandCheck': 'Efterspørgselstjek',
    'admin.set.demandHint': 'Vi spørger passagerer, der ikke har kørt længe, om de har lyst igen.',
    'admin.set.hBefore': '{h} t. før',
    'admin.set.weekly': 'Ugentligt',
    'admin.set.monthly': 'Månedligt',
    'admin.set.off': 'Fra',
    'admin.set.waiverDesc': 'Teksten passagerer godkender før første tur.',
    'admin.set.waiverHint': 'Passagerer ser denne tekst ved booking og check-in.',
    'admin.set.infoCard': 'Afdelingsinfo',
    'admin.set.infoDesc': 'Navn, telefon og hjemsted.',
    'admin.set.name': 'Afdelingens navn',
    'admin.set.country': 'Land',
    'admin.set.germany': 'Tyskland',

    'admin.res.trishaws': 'Rickshaws',
    'admin.res.garages': 'Garager',
    'admin.res.access': 'Adgang',
    'admin.res.ok': 'Klar til tur',
    'admin.res.addTrishaw': 'Tilføj rickshaw',
    'admin.res.addGarage': 'Tilføj garage',
    'admin.res.number': 'Nummer',
    'admin.res.model': 'Model',
    'admin.res.accessInstr': 'Adgangsinstruktioner',
    'admin.res.trishawAdded': 'Rickshaw {n} tilføjet',
    'admin.res.garageAdded': '{name} tilføjet',

    'glob.subtitle': 'Global',
    'glob.overview': 'Overblik',
    'glob.countries': 'Lande',
    'glob.reports': 'Rapporter',
    'glob.totalRides': 'Ture i alt',
    'glob.rideHours': 'Turtimer',
    'glob.chapters': 'Afdelinger',
    'glob.pilots': 'Piloter',
    'glob.rides': 'Ture',
    'glob.paxServed': 'Passagerer på tur',
    'glob.trend': '+{p} % ift. sidste år',
    'glob.trendNew': '+{n} i år',
    'glob.ridesPerMonth': 'Ture pr. måned',
    'glob.topChapters': 'Topafdelinger',
    'glob.country': 'Land',
    'glob.ridesYtd': 'Ture i år',
    'glob.colTrend': 'Tendens',
    'glob.awaitingAlert': 'afdelinger afventer aktivering',
    'glob.viewCountries': 'Se lande',
    'glob.active': 'Aktiv',
    'glob.awaiting': 'Afventer aktivering',
    'glob.activate': 'Aktivér',
    'glob.welcomeSent': 'Velkomstmail sendt',
    'glob.openChapterAdmin': 'Åbn denne afdeling',
    'glob.reportTitle': 'Cykling uden alder — effektrapport',
    'glob.reportsTitle': 'Rapporter til fondsansøgninger',
    'glob.reportsHint': 'Vælg periode og omfang — rapporten bygges af live-data fra netværket.',
    'glob.generate': 'Generér rapport',
    'glob.period': 'Periode',
    'glob.scope': 'Omfang',
    'glob.pQuarter': 'Dette kvartal',
    'glob.pYear': 'I år',
    'glob.p12': 'Seneste 12 måneder',
    'glob.sGlobal': 'Globalt',
    'glob.sGermany': 'Tyskland',
    'glob.sMuc': 'München',
    'glob.volunteers': 'Aktive frivillige',
    'glob.donations': 'Indsamlede donationer',
    'glob.chaptersActive': 'Aktive afdelinger',
    'glob.export': 'Eksportér PDF',
    'glob.exported': 'Rapport eksporteret — klar til din fondsansøgning',
    'glob.autoNote': 'Hver afdeling leverer automatisk sine tal — ingen regneark at jagte.',
    'glob.addCountry': 'Tilføj land',
    'glob.countryName': 'Landets navn',
    'glob.flagLabel': 'Flag',
    'glob.countryAdded': '{name} er føjet til netværket',
    'glob.addChapter': 'Tilføj afdeling',
    'glob.noChapters': 'Ingen afdelinger endnu — opret den første.',
    'glob.wName': 'Hvad hedder den nye afdeling?',
    'glob.chapterName': 'Afdelingens navn',
    'glob.cityLabel': 'By eller adresse',
    'glob.wContact': 'Hvem er primær kontakt?',
    'glob.contactEmail': 'E-mail',
    'glob.contactInfo': 'Kontaktpersonen får aktiveringsmailen og bliver afdelingsadmin.',
    'glob.wReview': 'Klar til at oprette afdelingen?',
    'glob.createChapter': 'Opret afdeling',
    'glob.chapterAdded': '{name} oprettet — afventer aktivering'
  }
});

(function () {
  const t = CWA.t, esc = CWA.esc, icon = CWA.icon, fmt = CWA.fmt, store = CWA.store;
  const CH = 'muc';

  /* ---------- roles (two identities in one app) ---------- */
  const ROLES = {
    chapter: { name: 'Petra Klein', roleKey: 'admin.role', home: 'dashboard' },
    super: { name: 'Ole Kassow', roleKey: 'admin.roleSuper', home: 'overview' }
  };
  function role() { return localStorage.getItem('cwa.adminRole') === 'super' ? 'super' : 'chapter'; }
  function isSuper() { return role() === 'super'; }
  function me() { return ROLES[role()].name; }

  /* ---------- lookups ---------- */
  function D() { return store.get(); }
  function chapter(d) { return store.find(d.chapters, CH); }
  function mucRides(d) { return d.rides.filter(function (r) { return r.chapterId === CH; }); }
  function client(d, id) { return store.find(d.clients, id); }
  function pilot(d, id) { return store.find(d.pilots, id); }
  function partner(d, id) { return store.find(d.partners, id); }
  function trishaw(d, id) { return store.find(d.trishaws, id); }
  function garage(d, id) { return store.find(d.garages, id); }
  function myPilots(d) { return d.pilots.filter(function (p) { return p.chapterId === CH; }); }
  function ridePilots(d) {
    return myPilots(d).filter(function (p) { return (p.role === 'pilot' || p.role === 'captain') && p.trained; });
  }
  function rideWho(d, r) {
    if (r.clientId) { const c = client(d, r.clientId); return c ? c.name : '—'; }
    if (r.partnerId) { const p = partner(d, r.partnerId); return p ? p.name : '—'; }
    if (r.type === 'event') return r.pickup || t('admin.ev.public');
    return '—';
  }
  function rideHash(r) { return (r.type === 'event' ? '#events/' : '#rides/') + r.id; }
  function chatFor(d, rideId) {
    for (let i = 0; i < d.chats.length; i++) if (d.chats[i].rideId === rideId) return d.chats[i];
    return null;
  }
  function requiredFor(d, r) {
    return (d.trainings || []).filter(function (tr) { return (tr.requiredFor || []).indexOf(r) !== -1; });
  }
  function missingTrainings(d, p) {
    const need = requiredFor(d, p.role === 'volunteer' ? 'volunteer' : 'pilot').concat(
      p.role === 'volunteer' ? requiredFor(d, 'pilot') : []);
    const seen = {};
    return need.filter(function (tr) {
      if (seen[tr.id]) return false;
      seen[tr.id] = 1;
      return (p.trainingsDone || []).indexOf(tr.id) === -1;
    });
  }

  /* ---------- small utils ---------- */
  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function setView(html) { document.getElementById('view').innerHTML = html; }
  function crumb(text) { CWA.ui.setBreadcrumb(text); }
  function pad2(n) { return ('0' + n).slice(-2); }
  function dateStr(ts) { const d = new Date(ts); return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate()); }
  function timeStr(ts) { const d = new Date(ts); return pad2(d.getHours()) + ':' + pad2(d.getMinutes()); }
  function sameMonth(ts) { const d = new Date(ts), n = new Date(); return d.getMonth() === n.getMonth() && d.getFullYear() === n.getFullYear(); }
  function sameDay(a, b) { const x = new Date(a), y = new Date(b); return x.getFullYear() === y.getFullYear() && x.getMonth() === y.getMonth() && x.getDate() === y.getDate(); }
  function slotWindows(ch) { return (ch && ch.slotWindows) || { morning: [9, 12], afternoon: [13, 17] }; }
  function tsFrom(dateVal, slot, timeVal, ch) {
    const sw = slotWindows(ch);
    let h, m = 0;
    if (slot === 'morning') { h = sw.morning[0]; }
    else if (slot === 'afternoon') { h = sw.afternoon[0]; }
    else { const p = (timeVal || '10:00').split(':'); h = parseInt(p[0], 10) || 10; m = parseInt(p[1], 10) || 0; }
    const dp = (dateVal || dateStr(Date.now())).split('-');
    return new Date(parseInt(dp[0], 10), parseInt(dp[1], 10) - 1, parseInt(dp[2], 10), h, m, 0, 0).getTime();
  }
  /* weekday label for a JS day int (0=Sun) — locale-aware, via a known reference week */
  function dayName(di) { return fmt.weekday(new Date(2026, 0, 4 + di).getTime()); }
  function dayNames(list) {
    if (!list || !list.length) return '';
    return list.slice().sort().map(dayName).join(', ');
  }

  function srcBadge(s) {
    const cls = { app: 'badge-sky', whatsapp: 'badge-emerald', phone: 'badge-muted', admin: 'badge-muted' }[s] || 'badge-muted';
    return '<span class="badge ' + cls + '">' + esc(t('admin.src.' + (s || 'admin'))) + '</span>';
  }
  function waiverBadge(c) {
    if (c.waiverSigned && c.signedBy === 'proxy') return '<span class="badge badge-sky">' + esc(t('admin.cli.proxySigned')) + '</span>';
    if (c.waiverSigned) return '<span class="badge badge-emerald">' + esc(t('common.signed')) + '</span>';
    return '<span class="badge badge-amber">' + esc(t('common.pending')) + '</span>';
  }
  function backBtn(hash) {
    return '<button type="button" class="btn btn-ghost btn-sm" data-nav="' + hash + '">' + icon('arrowLeft') + esc(t('common.back')) + '</button>';
  }
  function addBtn(id, label, cls) {
    return '<button type="button" class="btn ' + (cls || 'btn-primary') + '" id="' + id + '">' + icon('plus') + esc(label) + '</button>';
  }
  function emptyState(ic, text, hint) {
    return '<div class="empty-state"><div class="icon-tile">' + icon(ic) + '</div><div class="medium">' + esc(text) + '</div>' +
      (hint ? '<div class="small">' + esc(hint) + '</div>' : '') + '</div>';
  }
  function pageHead(title, btnHtml, intro) {
    return '<div class="between wrap"><div><h1 class="h1">' + esc(title) + '</h1>' +
      (intro ? '<p class="muted small mt-1">' + esc(intro) + '</p>' : '') + '</div>' + (btnHtml || '') + '</div>';
  }

  /* ---------- form builders (labelled, escaped) ---------- */
  function modalHead(title) {
    return '<div class="between mb-4"><h3 class="h2">' + esc(title) + '</h3>' +
      '<button type="button" class="icon-btn" data-close aria-label="' + esc(t('common.close')) + '">' + icon('x') + '</button></div>';
  }
  function inputField(id, label, o) {
    o = o || {};
    return '<div class="field"><label class="label" for="' + id + '">' + esc(label) + '</label>' +
      '<input class="input" id="' + id + '" type="' + (o.type || 'text') + '"' +
      (o.value === undefined || o.value === null ? '' : ' value="' + esc(o.value) + '"') +
      (o.list ? ' list="' + o.list + '"' : '') +
      (o.min !== undefined ? ' min="' + o.min + '"' : '') +
      (o.placeholder ? ' placeholder="' + esc(o.placeholder) + '"' : '') +
      ' autocomplete="off">' +
      (o.hint ? '<span class="hint">' + esc(o.hint) + '</span>' : '') + '</div>';
  }
  function addrField(id, label, value) { return inputField(id, label, { value: value, list: 'cwa-addresses' }); }
  function selectField(id, label, optionsHtml, hint) {
    return '<div class="field"><label class="label" for="' + id + '">' + esc(label) + '</label>' +
      '<select class="select" id="' + id + '">' + optionsHtml + '</select>' +
      (hint ? '<span class="hint">' + esc(hint) + '</span>' : '') + '</div>';
  }
  function textareaField(id, label, value, rows) {
    return '<div class="field"><label class="label" for="' + id + '">' + esc(label) + '</label>' +
      '<textarea class="textarea" id="' + id + '" rows="' + (rows || 3) + '">' + esc(value || '') + '</textarea></div>';
  }
  function checkRow(id, label, checked) {
    return '<label class="check-row' + (checked ? ' checked' : '') + '"><input type="checkbox" id="' + id + '"' +
      (checked ? ' checked' : '') + '><span>' + esc(label) + '</span></label>';
  }
  function bigOption(attr, title, hint, selected) {
    return '<button type="button" class="big-option' + (selected ? ' selected' : '') + '" ' + attr + '>' +
      '<div class="grow"><div>' + esc(title) + '</div>' +
      (hint ? '<div class="hint small">' + esc(hint) + '</div>' : '') + '</div>' +
      (selected ? '<span class="text-primary">' + icon('check') + '</span>' : '') + '</button>';
  }
  function dots(n, cur) {
    let s = '<div class="progress-dots mb-4">';
    for (let i = 0; i < n; i++) s += '<span class="' + (i === cur ? 'current' : i < cur ? 'done' : '') + '"></span>';
    return s + '</div>';
  }
  /* modal() wires [data-close] once at creation — wizards re-render their body, so re-wire */
  function wireClose(root, m) {
    qsa('[data-close]', root).forEach(function (b) {
      b.addEventListener('click', function () { m.close(); });
    });
  }
  function wireChecks(root) {
    qsa('.check-row input[type="checkbox"]', root).forEach(function (cb) {
      const row = cb.closest('.check-row');
      if (!row) return;
      row.classList.toggle('checked', cb.checked);
      cb.addEventListener('change', function () { row.classList.toggle('checked', cb.checked); });
    });
  }
  /* small live map under an address input — refreshed on change/blur, not per keystroke */
  function wireMapPreview(root, inputId, boxId) {
    const inp = qs('#' + inputId, root), box = qs('#' + boxId, root);
    if (!inp || !box) return;
    function upd() {
      const v = inp.value.trim();
      box.innerHTML = v ? CWA.ui.mapEmbed(v, { small: true }) : '';
    }
    inp.addEventListener('change', upd);
    inp.addEventListener('blur', upd);
    upd();
  }
  function num(v, fallback) { const n = parseInt(v, 10); return isNaN(n) ? fallback : n; }

  /* ---------- shell ---------- */
  const GLOBAL_NAV = [
    { id: 'overview', icon: 'globe', labelKey: 'glob.overview' },
    { id: 'countries', icon: 'flag', labelKey: 'glob.countries' },
    { id: 'reports', icon: 'download', labelKey: 'glob.reports' }
  ];

  CWA.renderShell = function () {
    const d = D(), ch = chapter(d);
    const reqN = mucRides(d).filter(function (r) { return r.status === 'requested'; }).length;
    const groups = [];
    if (isSuper()) groups.push({ labelKey: 'glob.subtitle', items: GLOBAL_NAV });
    groups.push(
      { labelKey: 'admin.grp.ops', items: [
        { id: 'dashboard', icon: 'dashboard', labelKey: 'admin.nav.dashboard' },
        { id: 'requests', icon: 'bell', labelKey: 'admin.nav.requests', badge: reqN ? String(reqN) : null },
        { id: 'calendar', icon: 'calendar', labelKey: 'admin.nav.calendar' },
        { id: 'rides', icon: 'bike', labelKey: 'admin.nav.rides' },
        { id: 'events', icon: 'users', labelKey: 'admin.nav.events' },
        { id: 'chats', icon: 'chat', labelKey: 'admin.nav.chats' }
      ] },
      { labelKey: 'admin.grp.people', items: [
        { id: 'pilots', icon: 'users', labelKey: 'admin.nav.pilots' },
        { id: 'training', icon: 'clipboard', labelKey: 'common.training' },
        { id: 'clients', icon: 'user', labelKey: 'admin.nav.clients' },
        { id: 'partners', icon: 'building', labelKey: 'admin.nav.partners' }
      ] },
      { labelKey: 'admin.grp.setup', items: [
        { id: 'resources', icon: 'warehouse', labelKey: 'admin.nav.resources' },
        { id: 'settings', icon: 'settings', labelKey: 'admin.nav.settings' }
      ] }
    );

    CWA.ui.adminShell({
      subtitle: isSuper() ? t('glob.subtitle') : (ch ? ch.name : 'München'),
      groups: groups,
      userName: me(),
      userRole: t(ROLES[role()].roleKey),
      breadcrumbRoot: isSuper() ? 'Global' : (ch ? ch.name : 'München'),
      tabs: isSuper() ?
        [{ id: 'overview', icon: 'globe', labelKey: 'glob.overview' },
         { id: 'countries', icon: 'flag', labelKey: 'glob.countries' },
         { id: 'reports', icon: 'download', labelKey: 'glob.reports' },
         { id: 'dashboard', icon: 'dashboard', labelKey: 'admin.nav.dashboard' },
         { id: 'settings', icon: 'settings', labelKey: 'admin.nav.settings' }] :
        [{ id: 'dashboard', icon: 'dashboard', labelKey: 'admin.nav.dashboard' },
         { id: 'requests', icon: 'bell', labelKey: 'admin.nav.requests' },
         { id: 'rides', icon: 'bike', labelKey: 'admin.nav.rides' },
         { id: 'chats', icon: 'chat', labelKey: 'admin.nav.chats' },
         { id: 'settings', icon: 'settings', labelKey: 'admin.nav.settings' }]
    });

    /* account row instead of the shell's static user block (desktop) … */
    const foot = qs('.sidebar-footer');
    if (foot) {
      foot.innerHTML =
        '<button type="button" class="record-card" id="role-switch">' +
        '<div class="row">' + CWA.ui.avatar(me()) +
        '<div class="grow"><div class="small medium truncate">' + esc(me()) + '</div>' +
        '<div class="tiny muted truncate">' + esc(t(ROLES[role()].roleKey)) + '</div></div>' +
        icon('chevronDown') + '</div></button>';
      qs('#role-switch', foot).addEventListener('click', openRoleModal);
    }
    /* … and a header avatar button so the switch is reachable on mobile too.
       Inserted before the (always-visible) language dropdown, which stays
       the rightmost, top-right corner control. */
    const hdr = qs('.inset-header');
    const hdrLangMenu = hdr && qs('.lang-menu', hdr);
    if (hdr && hdrLangMenu) {
      hdrLangMenu.insertAdjacentHTML('beforebegin',
        '<button type="button" class="icon-btn hide-desktop" id="role-switch-m" aria-label="' +
        esc(t('admin.switchRole')) + '">' + icon('user') + '</button>');
      qs('#role-switch-m', hdr).addEventListener('click', openRoleModal);
    }
  };

  function openRoleModal() {
    const d = D(), ch = chapter(d);
    const cur = role();
    const rows = [
      { key: 'chapter', name: ROLES.chapter.name, sub: t('admin.role') + ' · ' + (ch ? ch.name : 'München') },
      { key: 'super', name: ROLES.super.name, sub: t('admin.roleSuper') }
    ];
    const m = CWA.ui.modal(
      modalHead(t('admin.switchRole')) +
      '<p class="muted small mb-4">' + esc(t('admin.switchHint')) + '</p>' +
      '<div class="stack">' + rows.map(function (r) {
        return '<button type="button" class="big-option' + (r.key === cur ? ' selected' : '') + '" data-role="' + r.key + '">' +
          CWA.ui.avatar(r.name) +
          '<div class="grow"><div>' + esc(r.name) + '</div><div class="hint small">' + esc(r.sub) + '</div></div>' +
          (r.key === cur ? '<span class="text-primary">' + icon('check') + '</span>' : '') + '</button>';
      }).join('') + '</div>'
    );
    qsa('[data-role]', m.el).forEach(function (b) {
      b.addEventListener('click', function () {
        const key = b.getAttribute('data-role');
        m.close();
        if (key === cur) return;
        localStorage.setItem('cwa.adminRole', key);
        CWA.renderShell();
        CWA.nav('#' + ROLES[key].home);
        CWA.ui.toast(t('admin.switchedToast', { name: ROLES[key].name }));
      });
    });
  }

  /* ================================================================ dashboard */
  function vDashboard() {
    crumb(t('admin.nav.dashboard'));
    const d = D(), now = Date.now();
    const rides = mucRides(d);

    const ridesMonth = rides.filter(function (r) {
      return ['done', 'open', 'staffed', 'in_progress'].indexOf(r.status) !== -1 && sameMonth(r.ts);
    }).length;
    const openReq = rides.filter(function (r) { return r.status === 'requested'; }).length;
    const activePilots = ridePilots(d).length;
    const donations = rides.reduce(function (sum, r) {
      return sum + (r.debrief && sameMonth(r.ts) ? (r.debrief.donation || 0) : 0);
    }, 0);

    /* one card per concrete issue, each with its own specific action */
    const issues = [];
    rides.forEach(function (r) {
      if (r.status === 'open' && r.type !== 'event' && r.ts > now && r.ts < now + 24 * 36e5) {
        issues.push({
          icon: 'user',
          title: t('admin.att.noPilot', { name: esc(rideWho(d, r).split(' ')[0]) }),
          sub: fmt.dayTime(r.ts) + ' · ' + fmt.rel(r.ts),
          actions:
            '<button type="button" class="btn btn-primary btn-sm" data-assign="' + esc(r.id) + '">' +
            icon('user') + esc(t('admin.att.assign')) + '</button>' +
            '<button type="button" class="btn btn-ghost btn-sm" data-nav="' + rideHash(r) + '">' +
            esc(t('admin.att.openBooking')) + '</button>'
        });
      }
      if (r.type === 'event' && r.pilots && r.status !== 'cancelled' && r.ts > now && r.ts < now + 14 * 864e5) {
        Object.keys(r.pilots).forEach(function (k) {
          if (r.pilots[k]) return;
          const tw = trishaw(d, k);
          issues.push({
            icon: 'users',
            title: t('admin.att.event', { place: esc(rideWho(d, r)), trishaw: esc(tw ? tw.number : k) }),
            sub: fmt.dayTime(r.ts) + ' · ' + fmt.rel(r.ts),
            actions: '<button type="button" class="btn btn-outline btn-sm" data-nav="#events/' + esc(r.id) + '">' +
              icon('users') + esc(t('admin.att.staffEvent')) + '</button>'
          });
        });
      }
    });

    const todays = rides.filter(function (r) { return sameDay(r.ts, now) && r.status !== 'cancelled'; })
      .sort(function (a, b) { return a.ts - b.ts; });

    setView(
      '<div class="stack-lg">' +
      '<h1 class="h1">' + esc(t('admin.nav.dashboard')) + '</h1>' +

      '<div class="grid-4">' +
      [[fmt.num(ridesMonth), 'admin.dash.ridesMonth'],
       [fmt.num(openReq), 'admin.dash.openReq'],
       [fmt.num(activePilots), 'admin.dash.activePilots'],
       [fmt.euro(donations), 'admin.dash.donations']].map(function (s) {
        return '<div class="stat-tile"><div class="stat-value">' + esc(s[0]) + '</div><div class="stat-label">' + esc(t(s[1])) + '</div></div>';
      }).join('') +
      '</div>' +

      '<div><div class="row mb-4"><span class="text-amber">' + icon('alert') + '</span>' +
      '<h2 class="h2 alert-title text-amber">' + esc(t('admin.att.title')) + '</h2>' +
      (issues.length ? '<span class="badge badge-amber">' + esc(fmt.num(issues.length)) + '</span>' : '') + '</div>' +
      (issues.length ?
        '<div class="stack">' + issues.map(function (a) {
          return '<div class="card"><div class="between wrap"><div class="row-lg grow">' +
            '<div class="icon-tile">' + icon(a.icon) + '</div>' +
            '<div class="grow"><div class="medium">' + a.title + '</div>' +
            '<div class="small muted">' + esc(a.sub) + '</div></div></div>' +
            '<div class="row wrap">' + a.actions + '</div></div></div>';
        }).join('') + '</div>' :
        '<div class="card">' + emptyState('checkCheck', t('admin.att.allClear')) + '</div>') +
      '</div>' +

      '<div><h2 class="h2 mb-4">' + esc(t('admin.dash.today')) + '</h2>' +
      (todays.length ?
        '<div class="stack-sm">' + todays.map(function (r) {
          const p = pilot(d, r.pilotId);
          return '<button type="button" class="record-card" data-nav="' + rideHash(r) + '">' +
            '<div class="between"><div class="row-lg">' +
            '<span class="medium tabular">' + esc(fmt.time(r.ts)) + '</span>' +
            '<div><div class="medium">' + esc(rideWho(d, r)) + '</div>' +
            '<div class="small muted">' + (p ? esc(p.name) : '<span class="badge badge-amber">' + esc(t('status.open')) + '</span>') + '</div></div>' +
            '</div>' + CWA.ui.statusBadge(r.status) + '</div></button>';
        }).join('') + '</div>' :
        '<div class="card"><div class="muted small">' + esc(t('admin.dash.noneToday')) + '</div></div>') +
      '</div>' +

      '</div>'
    );

    qsa('[data-assign]', qs('#view')).forEach(function (b) {
      b.addEventListener('click', function () { openAssignModal(b.getAttribute('data-assign')); });
    });
  }

  /* assign a pilot to an open ride — right from the attention card */
  function openAssignModal(rideId) {
    const d = D();
    const r = store.find(d.rides, rideId);
    if (!r) return;
    const who = rideWho(d, r);
    const pilots = ridePilots(d);

    if (!pilots.length) {
      CWA.ui.modal(modalHead(t('admin.assign.title')) + '<div class="card">' + emptyState('users', t('admin.assign.none')) + '</div>');
      return;
    }

    const m = CWA.ui.modal(
      modalHead(t('admin.assign.title')) +
      '<div class="stack">' +
      '<div class="detail-list">' +
      '<div><dt>' + esc(t('common.passenger')) + '</dt><dd>' + esc(who) + '</dd></div>' +
      '<div><dt>' + esc(t('admin.col.when')) + '</dt><dd>' + esc(fmt.rideWhen(r)) + '</dd></div>' +
      '<div><dt>' + esc(t('common.pickup')) + '</dt><dd>' + esc(r.pickup) + '</dd></div>' +
      '</div>' +
      selectField('as-pilot', t('common.pilot'), pilots.map(function (p) {
        const av = (p.availability && p.availability.length) ?
          t('admin.assign.avail', { days: dayNames(p.availability) }) : t('admin.assign.availNone');
        return '<option value="' + esc(p.id) + '">' + esc(p.name + ' · ' + av) + '</option>';
      }).join(''), t('admin.assign.hint')) +
      '<button type="button" class="btn btn-primary btn-block" id="as-do">' + esc(t('admin.assign.do')) + '</button>' +
      '</div>'
    );

    qs('#as-do', m.el).addEventListener('click', function () {
      const pid = qs('#as-pilot', m.el).value;
      let pName = '';
      m.close();
      store.update(function (db) {
        const ride = store.find(db.rides, rideId);
        const p = store.find(db.pilots, pid);
        if (!ride || !p) return;
        pName = p.name;
        ride.status = 'staffed';
        ride.pilotId = pid;
        if (!store.find(db.chats, 'chat-' + ride.id)) {
          db.chats.push({ id: 'chat-' + ride.id, rideId: ride.id, messages: [{ from: 'system', name: '', text: '', tKey: 'chat.sysCreated', ts: Date.now() }] });
        }
        if (ride.clientId) {
          store.notify(db, 'client:' + ride.clientId, 'notif.pilotAssigned', { pilot: p.name }, '#ride/' + ride.id);
        }
      });
      CWA.ui.toast(t('admin.assign.toast', { pilot: pName }));
    });
  }

  /* ================================================================ requests */
  function vRequests() {
    crumb(t('admin.nav.requests'));
    const d = D();
    const reqs = mucRides(d).filter(function (r) { return r.status === 'requested'; })
      .sort(function (a, b) { return a.ts - b.ts; });

    let body;
    if (!reqs.length) {
      body = '<div class="card">' + emptyState('checkCheck', t('admin.req.empty')) + '</div>';
    } else {
      body = CWA.ui.table(reqs,
        [
          { labelKey: 'common.passenger', render: function (r) { return '<span class="medium">' + esc(rideWho(d, r)) + '</span>'; } },
          { labelKey: 'admin.col.when', render: function (r) { return esc(fmt.rideWhen(r)); } },
          { labelKey: 'admin.col.type', render: function (r) { return CWA.ui.typeBadge(r.type); } },
          { labelKey: 'admin.col.source', render: function (r) { return srcBadge(r.source); } },
          { labelKey: 'admin.col.checks', render: function (r) { return reqFlags(d, r) || '—'; } }
        ],
        function (r) {
          return '<div class="between"><div><div class="medium">' + esc(rideWho(d, r)) + '</div>' +
            '<div class="small muted">' + esc(fmt.rideWhen(r)) + '</div></div>' + srcBadge(r.source) + '</div>' +
            '<div class="row wrap mt-2">' + CWA.ui.typeBadge(r.type) + (reqFlags(d, r) || '') + '</div>';
        },
        function (r) { return 'class="clickable" data-req="' + r.id + '"'; }
      );
    }

    setView(
      '<div class="stack-lg">' +
      pageHead(t('admin.nav.requests'), '', t('admin.req.intro')) +
      body + '</div>'
    );

    qsa('[data-req]', qs('#view')).forEach(function (el) {
      el.addEventListener('click', function () { openRequestDrawer(el.getAttribute('data-req')); });
    });
  }

  function reqFlags(d, r) {
    let html = '';
    if (r.flag) html += '<span class="badge badge-amber">' + esc(t('admin.flag.' + r.flag)) + '</span> ';
    const c = client(d, r.clientId);
    if (c && !c.waiverSigned) html += '<span class="badge badge-red">' + esc(t('admin.flag.waiver')) + '</span>';
    return html.trim();
  }

  function openRequestDrawer(id) {
    const d = D();
    const r = store.find(d.rides, id);
    if (!r) return;
    const c = client(d, r.clientId);
    const ch = chapter(d);
    let curSlot = r.slot || 'exact';

    /* proximity mock: Rosenau pickups are closest to the Rosenau shed (t2) */
    const isRosenau = /rosenau/i.test(r.pickup || '');
    const twOpts = d.trishaws.map(function (tw) {
      const g = garage(d, tw.garageId);
      const near = (tw.id === 't2') === isRosenau;
      return { id: tw.id, near: near, label: tw.number + ' · ' + (g ? g.name : '') + ' · ' + (near ? '400 m' : '2.1 km') };
    }).sort(function (a, b) { return (b.near ? 1 : 0) - (a.near ? 1 : 0); });

    const pilots = ridePilots(d);

    let alertHtml = '';
    if (r.flag === 'outside_hours') {
      alertHtml = '<div class="alert alert-amber">' + icon('alert') + '<div>' +
        '<div class="alert-title">' + esc(t('admin.flag.outside_hours')) + '</div>' +
        '<div>' + t('admin.req.vOutside', { name: esc(c ? c.name : ''), time: esc(fmt.time(r.ts)), open: ch.openHour, close: ch.closeHour }) + '</div>' +
        '<div class="small mt-1">' + esc(t('admin.req.vOutsideTip')) + '</div></div></div>';
    } else if (r.flag === 'lead_time') {
      alertHtml = '<div class="alert alert-amber">' + icon('alert') + '<div>' +
        '<div class="alert-title">' + esc(t('admin.flag.lead_time')) + '</div>' +
        '<div>' + t('admin.req.vLead', { h: ch.leadTimeHours }) + '</div>' +
        '<div class="small mt-1">' + esc(t('admin.req.vLeadTip')) + '</div></div></div>';
    }

    const dr = CWA.ui.drawer(
      '<div class="drawer-header"><div class="grow">' +
      '<div class="h2">' + esc(t('admin.req.drawerTitle')) + '</div>' +
      '<div class="small muted">' + esc(c ? c.name : '') + '</div></div>' +
      '<button type="button" class="icon-btn" data-close aria-label="' + esc(t('common.close')) + '">' + icon('x') + '</button></div>' +

      '<div class="drawer-body"><div class="stack-lg">' +

      '<div><div class="small semibold muted mb-2">' + esc(t('admin.req.summary')) + '</div>' +
      '<div class="detail-list">' +
      '<div><dt>' + esc(t('common.passenger')) + '</dt><dd>' + esc(c ? c.name : '—') + '</dd></div>' +
      '<div><dt>' + esc(t('admin.req.requestedFor')) + '</dt><dd>' + esc(fmt.rideWhen(r)) + '</dd></div>' +
      '<div><dt>' + esc(t('admin.col.type')) + '</dt><dd>' + CWA.ui.typeBadge(r.type) + '</dd></div>' +
      '<div><dt>' + esc(t('common.passengers')) + '</dt><dd>' + esc(r.riders) + '</dd></div>' +
      '<div><dt>' + esc(t('common.pickup')) + '</dt><dd>' + esc(r.pickup) + '</dd></div>' +
      '<div><dt>' + esc(t('admin.col.source')) + '</dt><dd>' + srcBadge(r.source) + '</dd></div>' +
      (r.notes ? '<div><dt>' + esc(t('common.notes')) + '</dt><dd>' + esc(r.notes) + '</dd></div>' : '') +
      '</div>' +
      CWA.ui.mapEmbed(r.pickup, { small: true }) + '</div>' +

      alertHtml +

      '<div class="field"><label class="label" for="req-date">' + esc(t('common.date')) + '</label>' +
      '<input type="date" class="input" id="req-date" value="' + dateStr(r.ts) + '"></div>' +

      '<div class="field"><span class="label">' + esc(t('admin.req.slotLabel')) + '</span>' +
      '<div class="row wrap">' +
      ['morning', 'afternoon', 'exact'].map(function (s) {
        return '<button type="button" class="chip' + (s === curSlot ? ' active' : '') + '" data-slot="' + s + '">' + esc(t('slot.' + s)) + '</button>';
      }).join('') + '</div></div>' +

      '<div class="field" id="req-time-field"' + (curSlot === 'exact' ? '' : ' style="display:none"') + '>' +
      '<label class="label" for="req-time">' + esc(t('common.time')) + '</label>' +
      '<input type="time" class="input" id="req-time" value="' + timeStr(r.ts) + '"></div>' +

      '<div class="field"><label class="label" for="req-trishaw">' + esc(t('common.trishaw')) + '</label>' +
      '<select class="select" id="req-trishaw">' +
      twOpts.map(function (o) { return '<option value="' + o.id + '"' + (o.near ? ' selected' : '') + '>' + esc(o.label) + '</option>'; }).join('') +
      '</select><span class="hint">' + esc(t('admin.req.trishawHint')) + '</span></div>' +

      '<div class="field"><label class="label" for="req-pilot">' + esc(t('common.pilot')) + '</label>' +
      '<select class="select" id="req-pilot"><option value="">' + esc(t('admin.req.leaveOpen')) + '</option>' +
      pilots.map(function (p) { return '<option value="' + p.id + '">' + esc(p.name) + '</option>'; }).join('') +
      '</select></div>' +

      (c && !c.waiverSigned ? checkRow('req-waiver', t('admin.req.waiverToday'), false) : '') +

      '</div></div>' +

      '<div class="drawer-footer">' +
      '<button type="button" class="btn btn-destructive-outline" id="req-decline">' + esc(t('admin.req.decline')) + '</button>' +
      '<button type="button" class="btn btn-primary grow" id="req-approve">' + esc(t('admin.req.schedule')) + '</button>' +
      '</div>'
    );

    const el = dr.el;
    qsa('[data-slot]', el).forEach(function (b) {
      b.addEventListener('click', function () {
        curSlot = b.getAttribute('data-slot');
        qsa('[data-slot]', el).forEach(function (x) { x.classList.toggle('active', x === b); });
        qs('#req-time-field', el).style.display = curSlot === 'exact' ? '' : 'none';
      });
    });
    wireChecks(el);

    qs('#req-approve', el).addEventListener('click', function () {
      const dateVal = qs('#req-date', el).value;
      const timeVal = qs('#req-time', el).value;
      const twVal = qs('#req-trishaw', el).value;
      const plVal = qs('#req-pilot', el).value;
      const wEl = qs('#req-waiver', el);
      const wChecked = !!(wEl && wEl.checked);
      dr.close(); /* close BEFORE writing — the write re-renders the whole page */
      store.update(function (db) {
        const ride = store.find(db.rides, id);
        if (!ride) return;
        const chp = store.find(db.chapters, CH);
        ride.ts = tsFrom(dateVal, curSlot, timeVal, chp);
        ride.slot = curSlot;
        delete ride.flag;
        delete ride.waiverPending;
        const cl = store.find(db.clients, ride.clientId);
        if (wChecked && cl) cl.waiverSigned = true;
        ride.trishawId = twVal;
        if (plVal) {
          ride.status = 'staffed';
          ride.pilotId = plVal;
          if (!store.find(db.chats, 'chat-' + ride.id)) {
            db.chats.push({ id: 'chat-' + ride.id, rideId: ride.id, messages: [{ from: 'system', name: '', text: '', tKey: 'chat.sysCreated', ts: Date.now() }] });
          }
          const pl = store.find(db.pilots, plVal);
          store.notify(db, 'client:' + ride.clientId, 'notif.pilotAssigned', { pilot: pl ? pl.name : '' }, '#ride/' + ride.id);
        } else {
          ride.status = 'open';
          ride.pilotId = null;
          store.notify(db, 'pilot', 'notif.rideOpen', { name: cl ? cl.name : '', when: fmt.rideWhen(ride), place: ride.pickup }, '#feed');
          store.notify(db, 'client:' + ride.clientId, 'notif.scheduled', { when: fmt.rideWhen(ride) }, '#ride/' + ride.id);
        }
      });
      CWA.ui.toast(t('admin.req.scheduledToast'));
    });

    qs('#req-decline', el).addEventListener('click', function () {
      dr.close();
      store.update(function (db) {
        const ride = store.find(db.rides, id);
        if (!ride) return;
        ride.status = 'cancelled';
        const cl = store.find(db.clients, ride.clientId);
        store.notify(db, 'client:' + ride.clientId, 'notif.cancelled', { name: cl ? cl.name : '', when: fmt.rideWhen(ride) }, '#ride/' + ride.id);
      });
      CWA.ui.toast(t('admin.req.declinedToast'), 'info');
    });
  }

  /* ================================================================ calendar */
  let weekOffset = 0;

  function vCalendar() {
    crumb(t('admin.nav.calendar'));
    const d = D(), ch = chapter(d);
    const mon = new Date();
    mon.setHours(0, 0, 0, 0);
    mon.setDate(mon.getDate() - ((mon.getDay() + 6) % 7) + weekOffset * 7);
    const weekStart = mon.getTime();
    const weekEnd = weekStart + 7 * 864e5;
    const today = Date.now();

    /* bucket rides into day/hour cells */
    const cells = {};
    mucRides(d).forEach(function (r) {
      if (r.status === 'cancelled' || r.ts < weekStart || r.ts >= weekEnd) return;
      const dt = new Date(r.ts);
      const day = (dt.getDay() + 6) % 7, h = dt.getHours();
      if (h < 8 || h > 19) return;
      const key = day + '-' + h;
      cells[key] = (cells[key] || '') +
        '<div class="cal-event status-' + esc(r.status) + '" data-nav="' + rideHash(r) + '">' +
        esc(fmt.time(r.ts)) + ' ' + esc(rideWho(d, r).split(' ')[0]) + '</div>';
    });

    let grid = '<div class="cal-head"></div>';
    for (let i = 0; i < 7; i++) {
      const dayTs = weekStart + i * 864e5;
      grid += '<div class="cal-head' + (sameDay(dayTs, today) ? ' today' : '') + '">' +
        '<div class="dow">' + esc(fmt.weekday(dayTs)) + '</div><div>' + new Date(dayTs).getDate() + '</div></div>';
    }
    const opDays = (ch && ch.operatingDays) || [1, 2, 3, 4, 5, 6];
    for (let h = 8; h <= 19; h++) {
      grid += '<div class="cal-hour">' + pad2(h) + ':00</div>';
      for (let i = 0; i < 7; i++) {
        const jsDay = new Date(weekStart + i * 864e5).getDay();
        const closed = opDays.indexOf(jsDay) === -1 || h < ch.openHour || h >= ch.closeHour;
        grid += '<div class="cal-cell' + (closed ? ' closed' : '') + '">' + (cells[i + '-' + h] || '') + '</div>';
      }
    }

    setView(
      '<div class="stack-lg">' +
      '<div class="between wrap"><h1 class="h1">' + esc(t('admin.nav.calendar')) + '</h1>' +
      '<div class="row">' +
      '<button type="button" class="icon-btn" id="cal-prev" aria-label="' + esc(t('admin.cal.prev')) + '">' + icon('chevronLeft') + '</button>' +
      '<span class="medium tabular">' + esc(fmt.date(weekStart)) + ' – ' + esc(fmt.date(weekEnd - 864e5)) + '</span>' +
      '<button type="button" class="icon-btn" id="cal-next" aria-label="' + esc(t('admin.cal.next')) + '">' + icon('chevronRight') + '</button>' +
      '<button type="button" class="btn btn-outline btn-sm" id="cal-today">' + esc(t('common.today')) + '</button>' +
      '</div></div>' +

      '<div class="scroll-x"><div class="cal-grid">' + grid + '</div></div>' +

      '<div class="row wrap">' +
      ['requested', 'open', 'staffed', 'done'].map(function (s) {
        return '<span class="cal-event status-' + s + '">' + esc(t('status.' + s)) + '</span>';
      }).join('') +
      '<span class="badge badge-outline">' + esc(t('admin.cal.closed')) + '</span>' +
      '</div></div>'
    );

    qs('#cal-prev').addEventListener('click', function () { weekOffset--; CWA.render(); });
    qs('#cal-next').addEventListener('click', function () { weekOffset++; CWA.render(); });
    qs('#cal-today').addEventListener('click', function () { weekOffset = 0; CWA.render(); });
  }

  /* ================================================================ rides */
  let rideFilter = 'all';

  function vRides(arg) {
    if (arg) return rideDetail(arg);
    crumb(t('admin.nav.rides'));
    const d = D();
    const all = mucRides(d).sort(function (a, b) { return b.ts - a.ts; });
    const shown = rideFilter === 'all' ? all : all.filter(function (r) { return r.status === rideFilter; });

    const chips = ['all', 'open', 'staffed', 'in_progress', 'done', 'cancelled'].map(function (f) {
      const n = f === 'all' ? all.length : all.filter(function (r) { return r.status === f; }).length;
      const label = (f === 'all' ? t('common.all') : t('status.' + f)) + ' · ' + n;
      return '<button type="button" class="chip' + (rideFilter === f ? ' active' : '') + '" data-filter="' + f + '">' + esc(label) + '</button>';
    }).join('');

    const list = shown.length ? CWA.ui.table(shown,
      [
        { labelKey: 'admin.col.when', render: function (r) { return esc(fmt.rideWhen(r)); } },
        { labelKey: 'common.passenger', render: function (r) { return '<span class="medium">' + esc(rideWho(d, r)) + '</span>'; } },
        { labelKey: 'admin.col.type', render: function (r) { return CWA.ui.typeBadge(r.type); } },
        { labelKey: 'common.pilot', render: function (r) { const p = pilot(d, r.pilotId); return p ? esc(p.name) : '—'; } },
        { labelKey: 'common.trishaw', render: function (r) {
          if (r.trishaws) return esc(r.trishaws.map(function (id) { const tw = trishaw(d, id); return tw ? tw.number : id; }).join(', '));
          const tw = trishaw(d, r.trishawId); return tw ? esc(tw.number) : '—';
        } },
        { labelKey: 'common.status', render: function (r) { return CWA.ui.statusBadge(r.status); } }
      ],
      function (r) {
        const p = pilot(d, r.pilotId);
        return '<div class="between"><div><div class="medium">' + esc(rideWho(d, r)) + '</div>' +
          '<div class="small muted">' + esc(fmt.rideWhen(r)) + (p ? ' · ' + esc(p.name) : '') + '</div></div>' +
          CWA.ui.statusBadge(r.status) + '</div>';
      },
      function (r) { return 'class="clickable" data-nav="' + rideHash(r) + '"'; }
    ) : '<div class="card">' + emptyState('bike', t('admin.dash.noneToday')) + '</div>';

    setView(
      '<div class="stack-lg">' +
      '<h1 class="h1">' + esc(t('admin.nav.rides')) + '</h1>' +
      '<div class="row wrap">' + chips + '</div>' +
      list + '</div>'
    );

    qsa('[data-filter]', qs('#view')).forEach(function (b) {
      b.addEventListener('click', function () { rideFilter = b.getAttribute('data-filter'); CWA.render(); });
    });
  }

  function rideDetail(id) {
    const d = D();
    const r = store.find(d.rides, id);
    if (!r) {
      crumb(t('admin.nav.rides'));
      setView(backBtn('#rides') + '<div class="card mt-4">' + emptyState('search', t('admin.nav.rides')) + '</div>');
      return;
    }
    const who = rideWho(d, r);
    crumb(who);
    const p = pilot(d, r.pilotId);
    const tw = trishaw(d, r.trishawId);
    const g = tw ? garage(d, tw.garageId) : null;

    /* lifecycle timeline */
    const order = { requested: 0, open: 1, staffed: 2, in_progress: 3, done: 4 };
    const idx = r.status === 'cancelled' ? 0 : order[r.status];
    const steps = [
      { k: 'admin.tl.requested', done: true, hint: fmt.date(r.createdAt) },
      { k: 'admin.tl.scheduled', done: idx >= 1, current: idx === 0, hint: idx >= 1 ? fmt.rideWhen(r) : '' },
      { k: 'admin.tl.pilot', done: idx >= 2, current: idx === 1, hint: p ? p.name : '' },
      { k: 'admin.tl.ride', done: idx >= 4, current: idx === 3, hint: fmt.dayTime(r.ts) },
      { k: 'admin.tl.done', done: idx >= 4, current: false, hint: '' }
    ];
    const timeline = '<div class="timeline">' + steps.map(function (s) {
      return '<div class="timeline-step ' + (s.done ? 'done' : s.current ? 'current' : 'pending') + '">' +
        '<div class="timeline-dot">' + (s.done ? icon('check') : '') + '</div>' +
        '<div><div class="timeline-title">' + esc(t(s.k)) + '</div>' +
        (s.hint ? '<div class="hint">' + esc(s.hint) + '</div>' : '') + '</div></div>';
    }).join('') + '</div>';

    /* details */
    const rows = [];
    rows.push([t('admin.col.when'), esc(fmt.rideWhen(r))]);
    rows.push([t('common.pickup'), esc(r.pickup)]);
    if (r.stops && r.stops.length) rows.push([t('common.stop'), esc(r.stops.join(', '))]);
    if (r.destination) rows.push([t('common.destination'), esc(r.destination)]);
    rows.push([t('common.return'), esc(t(r.returnRide ? 'common.yes' : 'common.no'))]);
    if (tw) rows.push([t('common.trishaw'), esc(tw.number)]);
    if (g) rows.push([t('common.garage'), esc(g.name)]);
    rows.push([t('common.passengers'), esc(r.riders)]);
    rows.push([t('admin.col.source'), srcBadge(r.source)]);
    if (r.notes) rows.push([t('common.notes'), esc(r.notes)]);
    const details = '<div class="detail-list">' + rows.map(function (row) {
      return '<div><dt>' + esc(row[0]) + '</dt><dd>' + row[1] + '</dd></div>';
    }).join('') + '</div>' +
      '<div class="mt-4">' + CWA.ui.mapEmbed(r.pickup, { small: true }) + '</div>';

    /* debrief */
    let debrief = '';
    if (r.status === 'done' && r.debrief) {
      const db = r.debrief;
      debrief = '<div class="card"><h3 class="h2 mb-4">' + esc(t('admin.ride.debrief')) + '</h3>' +
        '<div class="detail-list">' +
        '<div><dt>' + esc(t('admin.ride.bike')) + '</dt><dd>' +
        (db.bikeOk ? '<span class="text-emerald medium">' + esc(t('admin.ride.bikeOk')) + '</span>' :
          '<span class="text-amber medium">' + esc(t('admin.ride.issue')) + '</span>') + '</dd></div>' +
        '<div><dt>' + esc(t('admin.ride.batteryReturn')) + '</dt><dd>' + CWA.ui.batteryBar(db.batteryReturn) + '</dd></div>' +
        '<div><dt>' + esc(t('common.donation')) + '</dt><dd>' + esc(fmt.euro(db.donation || 0)) + '</dd></div>' +
        (db.feedback ? '<div><dt>' + esc(t('admin.ride.feedback')) + '</dt><dd>' + esc(db.feedback) + '</dd></div>' : '') +
        '</div>' +
        (!db.bikeOk && db.issue ?
          '<div class="alert alert-amber mt-4">' + icon('wrench') + '<div>' + esc(db.issue) + '</div></div>' : '') +
        '</div>';
    }

    /* chat column */
    const chat = chatFor(d, r.id);
    const chatCol = chat ?
      '<div class="card card-flush">' +
      '<div class="chat-scroll" style="max-height:360px">' + msgsHtml(chat) + '</div>' +
      '<form class="chat-input-row" id="chat-form">' +
      '<input class="input" placeholder="' + esc(t('chat.placeholder')) + '" aria-label="' + esc(t('common.chat')) + '">' +
      '<button type="submit" class="send-btn" aria-label="' + esc(t('common.send')) + '">' + icon('send') + '</button></form></div>' :
      '<div class="card">' + emptyState('chat', t('admin.ride.noChat'), t('admin.ride.noChatHint')) + '</div>';

    setView(
      '<div class="stack-lg">' +
      '<div>' + backBtn('#rides') + '</div>' +
      '<div class="between wrap"><div class="row-lg">' + CWA.ui.avatar(who, 'avatar-lg') +
      '<div><h1 class="h1">' + esc(who) + '</h1>' +
      '<div class="row wrap mt-1">' + CWA.ui.typeBadge(r.type) + CWA.ui.statusBadge(r.status) + '</div></div></div>' +
      '<div class="row wrap">' +
      (r.status === 'open' && r.type !== 'event' ?
        '<button type="button" class="btn btn-primary" id="ride-assign">' + icon('user') + esc(t('admin.att.assign')) + '</button>' : '') +
      (r.status !== 'done' && r.status !== 'cancelled' ?
        '<button type="button" class="btn btn-destructive-outline" id="ride-cancel">' + icon('x') + esc(t('admin.ride.cancel')) + '</button>' : '') +
      '</div></div>' +
      '<div class="grid-2">' +
      '<div class="stack">' +
      '<div class="card"><h3 class="h2 mb-4">' + esc(t('admin.ride.lifecycle')) + '</h3>' + timeline + '</div>' +
      '<div class="card"><h3 class="h2 mb-4">' + esc(t('common.details')) + '</h3>' + details + '</div>' +
      debrief +
      '</div>' +
      '<div class="stack"><h3 class="h2">' + esc(t('common.chat')) + '</h3>' + chatCol + '</div>' +
      '</div></div>'
    );

    wireChat(r.id);

    const assignBtn = qs('#ride-assign');
    if (assignBtn) assignBtn.addEventListener('click', function () { openAssignModal(id); });

    const cancelBtn = qs('#ride-cancel');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', function () {
        const m = CWA.ui.modal(
          '<h3 class="h2 mb-2">' + esc(t('admin.ride.cancelQ')) + '</h3>' +
          '<p class="muted small">' + esc(t('admin.ride.cancelBody')) + '</p>' +
          '<div class="between mt-6">' +
          '<button type="button" class="btn btn-ghost" data-close>' + esc(t('admin.ride.keep')) + '</button>' +
          '<button type="button" class="btn btn-destructive" id="confirm-cancel">' + esc(t('admin.ride.cancel')) + '</button></div>'
        );
        qs('#confirm-cancel', m.el).addEventListener('click', function () {
          m.close();
          store.update(function (db) {
            const ride = store.find(db.rides, id);
            if (!ride) return;
            ride.status = 'cancelled';
            const cl = store.find(db.clients, ride.clientId);
            if (ride.clientId) {
              store.notify(db, 'client:' + ride.clientId, 'notif.cancelled', { name: cl ? cl.name : '', when: fmt.rideWhen(ride) }, '#ride/' + ride.id);
            }
            if (ride.pilotId) {
              store.notify(db, 'pilot', 'notif.cancelled', { name: cl ? cl.name : rideWho(db, ride), when: fmt.rideWhen(ride) }, '#feed');
            }
          });
          CWA.ui.toast(t('admin.ride.cancelledToast'), 'info');
        });
      });
    }
  }

  /* ================================================================ events */
  function vEvents(arg) {
    if (arg) return eventDetail(arg);
    crumb(t('admin.nav.events'));
    const d = D();
    const evs = mucRides(d).filter(function (r) { return r.type === 'event'; })
      .sort(function (a, b) { return a.ts - b.ts; });

    const list = evs.length ? CWA.ui.table(evs,
      [
        { labelKey: 'admin.col.partner', render: function (r) {
          return '<span class="medium">' + esc(rideWho(d, r)) + '</span>' +
            (r.public ? ' <span class="badge badge-sky">' + esc(t('admin.ev.public')) + '</span>' : '');
        } },
        { labelKey: 'admin.col.when', render: function (r) { return esc(fmt.rideWhen(r)); } },
        { labelKey: 'admin.col.slots', render: function (r) {
          const filled = (r.roster || []).filter(function (x) { return x.name; }).length;
          return '<span class="tabular">' + filled + '/' + (r.roster || []).length + '</span>';
        } },
        { labelKey: 'admin.nav.pilots', render: function (r) {
          const keys = Object.keys(r.pilots || {});
          const n = keys.filter(function (k) { return r.pilots[k]; }).length;
          return '<span class="tabular">' + n + '/' + keys.length + '</span>';
        } },
        { labelKey: 'common.status', render: function (r) { return CWA.ui.statusBadge(r.status); } }
      ],
      function (r) {
        const filled = (r.roster || []).filter(function (x) { return x.name; }).length;
        return '<div class="between"><div><div class="medium">' + esc(rideWho(d, r)) + '</div>' +
          '<div class="small muted">' + esc(fmt.rideWhen(r)) + ' · ' + filled + '/' + (r.roster || []).length + '</div></div>' +
          CWA.ui.statusBadge(r.status) + '</div>';
      },
      function (r) { return 'class="clickable" data-nav="#events/' + r.id + '"'; }
    ) : '<div class="card">' + emptyState('users', t('admin.par.none')) + '</div>';

    setView('<div class="stack-lg">' +
      pageHead(t('admin.nav.events'), addBtn('ev-new', t('admin.ev.plan'))) +
      list + '</div>');

    qs('#ev-new').addEventListener('click', function () { openEventWizard(null); });
  }

  /* ---- "+ Plan event" wizard: where → when & capacity (live roster preview) → review ---- */
  function openEventWizard(prePartnerId) {
    const d = D(), ch = chapter(d);
    const w = {
      where: prePartnerId ? 'partner' : null,
      partnerId: prePartnerId || null,
      address: '',
      date: dateStr(Date.now() + 7 * 864e5),
      time: '10:00',
      durationMin: 120,
      trishaws: d.trishaws.map(function (tw) { return tw.id; }),
      slotMin: 30
    };
    let step = prePartnerId ? 1 : 0;

    function place() {
      if (w.where === 'partner') {
        const pn = partner(d, w.partnerId);
        return pn ? pn.address : '';
      }
      return w.address;
    }
    function placeName() {
      if (w.where === 'partner') {
        const pn = partner(d, w.partnerId);
        return pn ? pn.name : '';
      }
      return w.address;
    }
    function slotTimes() {
      const n = Math.max(1, Math.floor(w.durationMin / w.slotMin));
      const p = w.time.split(':');
      const start = (num(p[0], 10) * 60) + num(p[1], 0);
      const out = [];
      for (let i = 0; i < n; i++) {
        const tot = start + i * w.slotMin;
        out.push(pad2(Math.floor(tot / 60) % 24) + ':' + pad2(tot % 60));
      }
      return out;
    }
    function rosterOf() {
      const out = [];
      slotTimes().forEach(function (tm) {
        w.trishaws.forEach(function (id) { out.push({ time: tm, trishawId: id, name: null, order: null }); });
      });
      return out;
    }
    function previewHtml() {
      if (!w.trishaws.length) return '<div class="alert alert-amber">' + icon('alert') + '<div>' + esc(t('admin.ev.needTrishaw')) + '</div></div>';
      const times = slotTimes();
      let grid = '<div class="roster-head"></div>' + w.trishaws.map(function (id) {
        const tw = trishaw(d, id);
        return '<div class="roster-head">' + esc(tw ? tw.number : id) + '</div>';
      }).join('');
      times.forEach(function (tm) {
        grid += '<div class="roster-time">' + esc(tm) + '</div>';
        w.trishaws.forEach(function () { grid += '<div class="roster-cell">—</div>'; });
      });
      return '<div class="between mb-2"><span class="small semibold muted">' + esc(t('admin.ev.preview')) + '</span>' +
        '<span class="small muted tabular">' + esc(t('admin.ev.slotsN', { n: times.length * w.trishaws.length })) + '</span></div>' +
        '<div class="scroll-x"><div class="roster-grid" style="grid-template-columns:auto repeat(' + w.trishaws.length + ',1fr);min-width:' +
        (w.trishaws.length * 6 + 4) + 'rem">' + grid + '</div></div>';
    }

    const m = CWA.ui.modal('<div id="ev-wiz"></div>' + CWA.ui.addressDatalist());
    const box = qs('#ev-wiz', m.el);

    function render() {
      if (step === 0) {
        box.innerHTML = modalHead(t('admin.ev.plan')) + dots(3, 0) +
          '<h4 class="h2 mb-4">' + esc(t('admin.ev.wWhere')) + '</h4>' +
          '<div class="stack">' +
          d.partners.map(function (pn) {
            return bigOption('data-pick-partner="' + esc(pn.id) + '"', pn.name,
              t('admin.ev.atPartner') + ' · ' + pn.address, w.where === 'partner' && w.partnerId === pn.id);
          }).join('') +
          bigOption('data-pick-public="1"', t('admin.ev.publicLoc'), t('admin.ev.publicHint'), w.where === 'public') +
          (w.where === 'public' ?
            addrField('ev-addr', t('admin.col.address'), w.address) +
            '<div id="ev-map"></div>' +
            '<button type="button" class="btn btn-primary btn-block" id="ev-next0">' + esc(t('common.next')) + '</button>' : '') +
          '</div>';
      } else if (step === 1) {
        const openH = (ch && ch.openHour) || 9, closeH = (ch && ch.closeHour) || 18;
        const slots = [];
        for (let h = openH; h <= closeH; h++) { slots.push(pad2(h) + ':00'); slots.push(pad2(h) + ':30'); }
        if (slots.indexOf(w.time) === -1) w.time = slots[0]; /* keep state and select in sync */
        const timeOpts = slots.map(function (v) {
          return '<option value="' + v + '"' + (v === w.time ? ' selected' : '') + '>' + v + '</option>';
        }).join('');
        box.innerHTML = modalHead(t('admin.ev.plan')) + dots(3, 1) +
          '<h4 class="h2 mb-4">' + esc(t('admin.ev.wWhen')) + '</h4>' +
          '<div class="stack">' +
          inputField('ev-date', t('common.date'), { type: 'date', value: w.date }) +
          selectField('ev-time', t('admin.ev.startTime'), timeOpts) +
          '<div class="field"><span class="label">' + esc(t('common.duration')) + '</span><div class="row wrap">' +
          [90, 120, 180].map(function (n) {
            return '<button type="button" class="chip' + (w.durationMin === n ? ' active' : '') + '" data-dur="' + n + '">' +
              n + ' ' + esc(t('common.min')) + '</button>';
          }).join('') + '</div></div>' +
          '<div class="field"><span class="label">' + esc(t('admin.ev.trishawsLabel')) + '</span>' +
          d.trishaws.map(function (tw) {
            return checkRow('ev-tw-' + tw.id, tw.number + ' · ' + tw.model, w.trishaws.indexOf(tw.id) !== -1);
          }).join('') + '</div>' +
          '<div class="field"><span class="label">' + esc(t('admin.ev.slotLen')) + '</span><div class="row wrap">' +
          [30, 45].map(function (n) {
            return '<button type="button" class="chip' + (w.slotMin === n ? ' active' : '') + '" data-slotlen="' + n + '">' +
              n + ' ' + esc(t('common.min')) + '</button>';
          }).join('') + '</div></div>' +
          '<div id="ev-preview">' + previewHtml() + '</div>' +
          '<div class="between"><button type="button" class="btn btn-ghost" id="ev-back1">' + esc(t('common.back')) + '</button>' +
          '<button type="button" class="btn btn-primary" id="ev-next1">' + esc(t('common.next')) + '</button></div>' +
          '</div>';
      } else {
        const times = slotTimes();
        box.innerHTML = modalHead(t('admin.ev.plan')) + dots(3, 2) +
          '<h4 class="h2 mb-4">' + esc(t('admin.ev.wReview')) + '</h4>' +
          '<div class="card stack"><div class="detail-list">' +
          '<div><dt>' + esc(t('common.pickup')) + '</dt><dd>' + esc(placeName()) + '</dd></div>' +
          (w.where === 'public' ? '<div><dt>' + esc(t('admin.ev.publicLoc')) + '</dt><dd>' + esc(t('common.yes')) + '</dd></div>' : '') +
          '<div><dt>' + esc(t('admin.col.when')) + '</dt><dd>' + esc(fmt.dayTime(tsFrom(w.date, 'exact', w.time, ch))) + '</dd></div>' +
          '<div><dt>' + esc(t('common.duration')) + '</dt><dd>' + esc(w.durationMin + ' ' + t('common.min')) + '</dd></div>' +
          '<div><dt>' + esc(t('common.trishaw')) + '</dt><dd>' + esc(w.trishaws.map(function (id) {
            const tw = trishaw(d, id); return tw ? tw.number : id;
          }).join(', ')) + '</dd></div>' +
          '<div><dt>' + esc(t('admin.col.slots')) + '</dt><dd class="tabular">' +
          esc(t('admin.ev.slotsN', { n: times.length * w.trishaws.length })) + '</dd></div>' +
          '</div>' + CWA.ui.mapEmbed(place(), { small: true }) + '</div>' +
          '<div class="between mt-4"><button type="button" class="btn btn-ghost" id="ev-back2">' + esc(t('common.back')) + '</button>' +
          '<button type="button" class="btn btn-primary" id="ev-create">' + icon('sparkles') + esc(t('admin.ev.create')) + '</button></div>';
      }
      wire();
    }

    function wire() {
      wireClose(box, m);
      qsa('[data-pick-partner]', box).forEach(function (b) {
        b.addEventListener('click', function () {
          w.where = 'partner';
          w.partnerId = b.getAttribute('data-pick-partner');
          step = 1;
          render();
        });
      });
      const pub = qs('[data-pick-public]', box);
      if (pub) pub.addEventListener('click', function () { w.where = 'public'; render(); });
      const next0 = qs('#ev-next0', box);
      if (next0) {
        wireMapPreview(box, 'ev-addr', 'ev-map');
        next0.addEventListener('click', function () {
          const inp = qs('#ev-addr', box);
          w.address = inp.value.trim();
          if (!w.address) { inp.focus(); return; }
          step = 1;
          render();
        });
      }

      const dateEl = qs('#ev-date', box), timeEl = qs('#ev-time', box);
      function refresh() {
        if (dateEl) w.date = dateEl.value || w.date;
        if (timeEl) w.time = timeEl.value;
        const pv = qs('#ev-preview', box);
        if (pv) pv.innerHTML = previewHtml();
      }
      if (dateEl) dateEl.addEventListener('change', refresh);
      if (timeEl) timeEl.addEventListener('change', refresh);
      qsa('[data-dur]', box).forEach(function (b) {
        b.addEventListener('click', function () {
          w.durationMin = num(b.getAttribute('data-dur'), 120);
          qsa('[data-dur]', box).forEach(function (x) { x.classList.toggle('active', x === b); });
          refresh();
        });
      });
      qsa('[data-slotlen]', box).forEach(function (b) {
        b.addEventListener('click', function () {
          w.slotMin = num(b.getAttribute('data-slotlen'), 30);
          qsa('[data-slotlen]', box).forEach(function (x) { x.classList.toggle('active', x === b); });
          refresh();
        });
      });
      wireChecks(box);
      d.trishaws.forEach(function (tw) {
        const cb = qs('#ev-tw-' + tw.id, box);
        if (!cb) return;
        cb.addEventListener('change', function () {
          w.trishaws = d.trishaws.filter(function (x) {
            const c = qs('#ev-tw-' + x.id, box);
            return c && c.checked;
          }).map(function (x) { return x.id; });
          refresh();
        });
      });

      const b1 = qs('#ev-back1', box);
      if (b1) b1.addEventListener('click', function () { step = 0; render(); });
      const n1 = qs('#ev-next1', box);
      if (n1) n1.addEventListener('click', function () {
        refresh();
        if (!w.trishaws.length) return;
        step = 2;
        render();
      });
      const b2 = qs('#ev-back2', box);
      if (b2) b2.addEventListener('click', function () { step = 1; render(); });

      const create = qs('#ev-create', box);
      if (create) create.addEventListener('click', function () {
        const nid = store.uid('r');
        const isPublic = w.where === 'public';
        const roster = rosterOf();
        const pilots = {};
        w.trishaws.forEach(function (id) { pilots[id] = null; });
        const ts = tsFrom(w.date, 'exact', w.time, ch);
        const pickup = place();
        m.close();
        store.update(function (db) {
          db.rides.push({
            id: nid, chapterId: CH, type: 'event', status: 'open', public: isPublic,
            partnerId: isPublic ? null : w.partnerId, source: 'admin',
            ts: ts, slot: 'exact', durationMin: w.durationMin, riders: 0,
            pickup: pickup, stops: [], returnRide: false,
            trishaws: w.trishaws.slice(), pilots: pilots, trishawId: null, pilotId: null,
            roster: roster, closeWhenFull: true, notes: '', debrief: null, createdAt: Date.now()
          });
        });
        CWA.ui.toast(t('admin.par.plannedToast'));
        CWA.nav('#events/' + nid);
      });
    }

    render();
  }

  function eventDetail(id) {
    const d = D();
    const r = store.find(d.rides, id);
    if (!r || r.type !== 'event') {
      crumb(t('admin.nav.events'));
      setView(backBtn('#events') + '<div class="card mt-4">' + emptyState('search', t('admin.nav.events')) + '</div>');
      return;
    }
    const pn = partner(d, r.partnerId);
    const who = rideWho(d, r);
    crumb(who);

    const assignable = myPilots(d).filter(function (p) { return p.trained; });
    const twKeys = Object.keys(r.pilots || {});

    /* per-trishaw pilot selects */
    const assignRows = twKeys.map(function (k) {
      const tw = trishaw(d, k);
      return '<div class="field"><label class="label" for="ev-as-' + esc(k) + '">' + esc(tw ? tw.number : k) + '</label>' +
        '<select class="select" id="ev-as-' + esc(k) + '" data-assign="' + esc(k) + '">' +
        '<option value="">' + esc(t('admin.req.leaveOpen')) + '</option>' +
        assignable.map(function (p) {
          return '<option value="' + p.id + '"' + (r.pilots[k] === p.id ? ' selected' : '') + '>' + esc(p.name) + '</option>';
        }).join('') + '</select></div>';
    }).join('');

    /* roster grid */
    const twIds = r.trishaws || twKeys;
    const times = [];
    (r.roster || []).forEach(function (x) { if (times.indexOf(x.time) === -1) times.push(x.time); });
    let roster = '<div class="roster-head"></div>' + twIds.map(function (twId) {
      const tw = trishaw(d, twId);
      const p = pilot(d, r.pilots ? r.pilots[twId] : null);
      return '<div class="roster-head">' + esc(tw ? tw.number : twId) +
        '<div class="tiny muted" style="font-weight:400">' + (p ? esc(p.name) : esc(t('status.open'))) + '</div></div>';
    }).join('');
    times.forEach(function (tm) {
      roster += '<div class="roster-time">' + esc(tm) + '</div>';
      twIds.forEach(function (twId) {
        const entry = (r.roster || []).filter(function (x) { return x.time === tm && x.trishawId === twId; })[0];
        if (entry && entry.name) {
          roster += '<div class="roster-cell filled"><span>' + esc(entry.name) + '</span><span class="order-num">#' + esc(entry.order) + '</span></div>';
        } else {
          roster += '<button type="button" class="roster-cell" data-time="' + esc(tm) + '" data-tw="' + esc(twId) + '">' + icon('plus') + '</button>';
        }
      });
    });

    const filled = (r.roster || []).filter(function (x) { return x.name; }).length;
    const total = (r.roster || []).length;
    const isFull = total > 0 && filled === total;

    setView(
      '<div class="stack-lg">' +
      '<div>' + backBtn('#events') + '</div>' +
      '<div class="between wrap"><div class="row-lg">' + CWA.ui.avatar(who, 'avatar-lg') +
      '<div><h1 class="h1">' + esc(who) + '</h1>' +
      '<div class="row wrap mt-1">' + CWA.ui.typeBadge('event') + CWA.ui.statusBadge(r.status) +
      (r.public ? '<span class="badge badge-sky">' + esc(t('admin.ev.public')) + '</span>' : '') + '</div></div></div>' +
      (r.status !== 'done' && r.status !== 'cancelled' ?
        '<button type="button" class="btn btn-destructive-outline" id="ride-cancel-ev">' + icon('x') + esc(t('admin.ride.cancel')) + '</button>' : '') +
      '</div>' +

      '<div class="grid-2">' +
      '<div class="card"><h3 class="h2 mb-4">' + esc(t('common.details')) + '</h3><div class="detail-list">' +
      (pn ? '<div><dt>' + esc(t('admin.col.partner')) + '</dt><dd>' + esc(pn.name) + '</dd></div>' +
        '<div><dt>' + esc(t('admin.ev.contact')) + '</dt><dd>' + esc(pn.contactName) + '</dd></div>' +
        '<div><dt>' + esc(t('common.phone')) + '</dt><dd>' + esc(pn.phone) + '</dd></div>' : '') +
      '<div><dt>' + esc(t('common.pickup')) + '</dt><dd>' + esc(r.pickup) + '</dd></div>' +
      '<div><dt>' + esc(t('admin.col.when')) + '</dt><dd>' + esc(fmt.rideWhen(r)) + '</dd></div>' +
      '<div><dt>' + esc(t('common.duration')) + '</dt><dd>' + esc(r.durationMin) + ' ' + esc(t('common.min')) + '</dd></div>' +
      (r.notes ? '<div><dt>' + esc(t('common.notes')) + '</dt><dd>' + esc(r.notes) + '</dd></div>' : '') +
      '</div>' +
      '<div class="mt-4">' + CWA.ui.mapEmbed(r.pickup, { small: true }) + '</div></div>' +

      '<div class="card"><h3 class="h2 mb-4">' + esc(t('admin.ev.assign')) + '</h3>' +
      '<div class="stack">' + assignRows + '</div></div>' +
      '</div>' +

      '<div class="card">' +
      '<div class="between wrap mb-4"><h3 class="h2">' + esc(t('admin.ev.roster')) + '</h3>' +
      '<div class="row"><span class="small muted tabular">' + esc(t('admin.ev.progress', { filled: filled, total: total })) + '</span>' +
      (isFull && r.closeWhenFull ? '<span class="badge badge-emerald">' + esc(t('admin.ev.full')) + '</span>' : '') +
      '</div></div>' +
      '<div class="scroll-x"><div class="roster-grid" style="grid-template-columns:auto repeat(' + twIds.length + ',1fr);min-width:' + (twIds.length * 10 + 6) + 'rem">' + roster + '</div></div>' +
      '<div class="between mt-6"><span class="small">' + esc(t('admin.ev.closeWhenFull')) + '</span>' +
      '<label class="switch"><input type="checkbox" id="ev-cwf"' + (r.closeWhenFull ? ' checked' : '') + '><span class="switch-slider"></span></label></div>' +
      '</div>' +
      '</div>'
    );

    qsa('[data-assign]', qs('#view')).forEach(function (sel) {
      sel.addEventListener('change', function () {
        const key = sel.getAttribute('data-assign');
        const val = sel.value || null;
        store.update(function (db) {
          const ride = store.find(db.rides, id);
          if (!ride || !ride.pilots) return;
          ride.pilots[key] = val;
          const all = Object.keys(ride.pilots).every(function (k) { return !!ride.pilots[k]; });
          ride.status = all ? 'staffed' : 'open';
        });
        CWA.ui.toast(t('admin.saved'));
      });
    });

    qsa('.roster-cell[data-time]', qs('#view')).forEach(function (b) {
      b.addEventListener('click', function () {
        openRosterModal(id, b.getAttribute('data-time'), b.getAttribute('data-tw'));
      });
    });

    const cwf = qs('#ev-cwf');
    if (cwf) {
      cwf.addEventListener('change', function () {
        const checked = cwf.checked;
        store.update(function (db) {
          const ride = store.find(db.rides, id);
          if (ride) ride.closeWhenFull = checked;
        });
        CWA.ui.toast(t('admin.saved'));
      });
    }

    const cbtn = qs('#ride-cancel-ev');
    if (cbtn) {
      cbtn.addEventListener('click', function () {
        const m = CWA.ui.modal(
          '<h3 class="h2 mb-2">' + esc(t('admin.ride.cancelQ')) + '</h3>' +
          '<p class="muted small">' + esc(t('admin.ride.cancelBody')) + '</p>' +
          '<div class="between mt-6">' +
          '<button type="button" class="btn btn-ghost" data-close>' + esc(t('admin.ride.keep')) + '</button>' +
          '<button type="button" class="btn btn-destructive" id="confirm-cancel">' + esc(t('admin.ride.cancel')) + '</button></div>'
        );
        qs('#confirm-cancel', m.el).addEventListener('click', function () {
          m.close();
          store.update(function (db) {
            const ride = store.find(db.rides, id);
            if (!ride) return;
            ride.status = 'cancelled';
            if (ride.pilotId || (ride.pilots && Object.keys(ride.pilots).some(function (k) { return ride.pilots[k]; }))) {
              store.notify(db, 'pilot', 'notif.cancelled', { name: rideWho(db, ride), when: fmt.rideWhen(ride) }, '#feed');
            }
          });
          CWA.ui.toast(t('admin.ride.cancelledToast'), 'info');
        });
      });
    }
  }

  const RESIDENTS = ['Georg Lang', 'Anni Roth', 'Rosa Eder', 'Franz Obermeier', 'Liesl Huber'];

  function openRosterModal(rideId, time, twId) {
    const d = D();
    const r = store.find(d.rides, rideId);
    if (!r) return;
    const taken = (r.roster || []).map(function (x) { return x.name; }).filter(Boolean);
    const suggestions = RESIDENTS.filter(function (n) { return taken.indexOf(n) === -1; });

    const m = CWA.ui.modal(
      modalHead(t('admin.ev.addRider')) +
      '<div class="stack">' +
      inputField('ros-name', t('admin.col.name')) +
      (suggestions.length ?
        '<div><div class="hint mb-2">' + esc(t('admin.ev.suggestions')) + '</div><div class="row wrap">' +
        suggestions.map(function (n) { return '<button type="button" class="chip" data-pick="' + esc(n) + '">' + esc(n) + '</button>'; }).join('') +
        '</div></div>' : '') +
      checkRow('ros-waiver', t('admin.ev.waiverCoord'), true) +
      '<button type="button" class="btn btn-primary btn-block" id="ros-add">' + esc(t('common.add')) + '</button>' +
      '</div>'
    );

    const inp = qs('#ros-name', m.el);
    qsa('[data-pick]', m.el).forEach(function (b) {
      b.addEventListener('click', function () {
        inp.value = b.getAttribute('data-pick');
        qsa('[data-pick]', m.el).forEach(function (x) { x.classList.toggle('active', x === b); });
      });
    });
    wireChecks(m.el);

    qs('#ros-add', m.el).addEventListener('click', function () {
      const name = inp.value.trim();
      if (!name) { inp.focus(); return; }
      m.close();
      store.update(function (db) {
        const ride = store.find(db.rides, rideId);
        if (!ride || !ride.roster) return;
        const entry = ride.roster.filter(function (x) { return x.time === time && x.trishawId === twId; })[0];
        if (!entry) return;
        entry.name = name;
        entry.order = ride.roster.reduce(function (mx, x) { return Math.max(mx, x.order || 0); }, 0) + 1;
      });
      CWA.ui.toast(t('admin.ev.riderAdded', { name: name }));
    });
  }

  /* ================================================================ pilots */
  function vPilots() {
    crumb(t('admin.nav.pilots'));
    const d = D();
    const rows = myPilots(d);

    function roleBadge(p) {
      if (p.role === 'captain') return '<span class="badge badge-primary">' + esc(t('admin.pil.captain')) + '</span>';
      if (p.role === 'pilot') return '<span class="badge badge-emerald">' + esc(t('admin.pil.pilot')) + '</span>';
      return '<span class="badge badge-amber">' + esc(t('admin.pil.awaiting')) + '</span>';
    }
    function approveBtn(p) {
      return '<button type="button" class="btn btn-sm btn-primary" data-approve="' + p.id + '">' + esc(t('admin.pil.approve')) + '</button>';
    }

    setView(
      '<div class="stack-lg">' +
      pageHead(t('admin.nav.pilots'), addBtn('pi-new', t('admin.pil.invite')), t('admin.pil.explainer')) +
      CWA.ui.table(rows,
        [
          { labelKey: 'admin.col.name', render: function (p) {
            return '<div class="row">' + CWA.ui.avatar(p.name) + '<span class="medium">' + esc(p.name) + '</span></div>';
          } },
          { labelKey: 'admin.col.role', render: roleBadge },
          { labelKey: 'admin.col.trained', render: function (p) {
            return p.trained ? '<span class="text-emerald">' + icon('check') + '</span>' : '—';
          } },
          { labelKey: 'common.availability', render: function (p) {
            return '<span class="small muted">' + esc(dayNames(p.availability) || '—') + '</span>';
          } },
          { labelKey: 'admin.col.rides', render: function (p) { return '<span class="tabular">' + esc(p.rides) + '</span>'; } },
          { labelKey: 'common.phone', render: function (p) { return '<span class="tabular muted">' + esc(p.phone) + '</span>'; } },
          { labelKey: '', render: function (p) { return p.role === 'volunteer' ? approveBtn(p) : ''; } }
        ],
        function (p) {
          return '<div class="between"><div class="row">' + CWA.ui.avatar(p.name) +
            '<div><div class="medium">' + esc(p.name) + '</div>' +
            '<div class="small muted tabular">' + esc(p.phone) + ' · ' + esc(p.rides) + ' ' + esc(t('common.rides')) + '</div></div></div>' +
            roleBadge(p) + '</div>' +
            (p.role === 'volunteer' ? '<div class="mt-2">' + approveBtn(p) + '</div>' : '');
        },
        function () { return ''; }
      ) +
      '</div>'
    );

    qs('#pi-new').addEventListener('click', openInviteModal);
    qsa('[data-approve]', qs('#view')).forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.stopPropagation();
        askApprove(b.getAttribute('data-approve'));
      });
    });
  }

  function doApprove(pid) {
    let pName = '';
    store.update(function (db) {
      const p = store.find(db.pilots, pid);
      if (!p) return;
      p.role = 'pilot';
      p.trained = true;
      pName = p.name;
      store.notify(db, 'pilot:' + pid, 'notif.approved', { name: p.name }, '#profile');
    });
    CWA.ui.toast(t('admin.pil.approvedToast', { name: pName }));
  }

  /* volunteers with unfinished required training get a warning first */
  function askApprove(pid) {
    const d = D(), p = pilot(d, pid);
    if (!p) return;
    const missing = missingTrainings(d, p);
    if (!missing.length) { doApprove(pid); return; }
    const list = missing.map(function (x) { return x.title; }).join(', ');
    const m = CWA.ui.modal(
      '<h3 class="h2 mb-2">' + t('admin.pil.approveQ', { name: esc(p.name) }) + '</h3>' +
      '<div class="alert alert-amber">' + icon('alert') + '<div>' +
      '<div class="alert-title">' + t('admin.pil.missing', { list: esc(list) }) + '</div>' +
      '<div class="small mt-1">' + esc(t('admin.tr.intro')) + '</div></div></div>' +
      '<div class="between mt-6"><button type="button" class="btn btn-ghost" data-close>' + esc(t('common.cancel')) + '</button>' +
      '<div class="row"><button type="button" class="btn btn-outline" id="ap-training">' + icon('clipboard') + esc(t('common.training')) + '</button>' +
      '<button type="button" class="btn btn-primary" id="ap-yes">' + esc(t('admin.pil.approveAnyway')) + '</button></div></div>'
    );
    qs('#ap-training', m.el).addEventListener('click', function () { m.close(); CWA.nav('#training'); });
    qs('#ap-yes', m.el).addEventListener('click', function () { m.close(); doApprove(pid); });
  }

  function openInviteModal() {
    const d = D();
    let prole = 'volunteer';
    const needed = requiredFor(d, 'pilot').map(function (x) { return x.title; }).join(', ');

    const m = CWA.ui.modal(
      modalHead(t('admin.pil.invite')) +
      '<div class="stack">' +
      inputField('pi-name', t('admin.col.name')) +
      inputField('pi-phone', t('common.phone'), { type: 'tel', placeholder: '+49 170 555 0000' }) +
      '<div class="field"><span class="label">' + esc(t('admin.col.role')) + '</span>' +
      '<div class="row wrap">' +
      '<button type="button" class="chip active" data-prole="volunteer">' + esc(t('admin.pil.roleVolunteer')) + '</button>' +
      '<button type="button" class="chip" data-prole="pilot">' + esc(t('admin.pil.pilot')) + '</button>' +
      '</div><span class="hint" id="pi-rolehint">' + esc(t('admin.pil.roleVolunteerHint')) + '</span></div>' +
      (needed ? '<div class="alert alert-sky">' + icon('clipboard') + '<div>' + t('admin.pil.needs', { list: esc(needed) }) + '</div></div>' : '') +
      '<button type="button" class="btn btn-primary btn-block" id="pi-send">' + icon('send') + esc(t('admin.pil.invite')) + '</button>' +
      '</div>'
    );

    qsa('[data-prole]', m.el).forEach(function (b) {
      b.addEventListener('click', function () {
        prole = b.getAttribute('data-prole');
        qsa('[data-prole]', m.el).forEach(function (x) { x.classList.toggle('active', x === b); });
        qs('#pi-rolehint', m.el).textContent = t(prole === 'pilot' ? 'admin.pil.rolePilotHint' : 'admin.pil.roleVolunteerHint');
      });
    });

    qs('#pi-send', m.el).addEventListener('click', function () {
      const nameEl = qs('#pi-name', m.el);
      const name = nameEl.value.trim();
      if (!name) { nameEl.focus(); return; }
      const phone = qs('#pi-phone', m.el).value.trim();
      m.close();
      store.update(function (db) {
        db.pilots.push({
          id: store.uid('p'), name: name, phone: phone, role: prole, trained: prole === 'pilot',
          rides: 0, chapterId: CH, langs: ['de'], availability: [], trainingsDone: []
        });
      });
      CWA.ui.toast(t('admin.pil.invitedToast', { name: name }));
    });
  }

  /* ================================================================ training */
  function vTraining() {
    crumb(t('common.training'));
    const d = D();
    const trs = d.trainings || [];
    const people = myPilots(d);

    function typeBadge(tr) {
      return '<span class="badge ' + (tr.type === 'video' ? 'badge-sky' : 'badge-primary') + '">' +
        esc(t(tr.type === 'video' ? 'admin.tr.video' : 'admin.tr.workshop')) + '</span>';
    }
    function reqChips(tr) {
      return [['pilot', 'admin.tr.forPilot'], ['volunteer', 'admin.tr.forVolunteer']].map(function (r) {
        const on = (tr.requiredFor || []).indexOf(r[0]) !== -1;
        return '<button type="button" class="chip' + (on ? ' active' : '') + '" data-req="' + esc(tr.id) + ':' + r[0] + '">' +
          (on ? icon('check') : '') + esc(t(r[1])) + '</button>';
      }).join('');
    }
    function done(p, tr) { return (p.trainingsDone || []).indexOf(tr.id) !== -1; }
    function cell(p, tr, mobile) {
      const isDone = done(p, tr);
      const mark = isDone ? '<span class="text-emerald">' + icon('check') + '</span>' : '<span class="muted">—</span>';
      if (tr.type !== 'workshop') return mark;
      const attrs = 'data-sign="' + esc(p.id) + ':' + esc(tr.id) + '" aria-label="' + esc(p.name + ' · ' + tr.title) + '"';
      return mobile ? '<span class="chip" ' + attrs + '>' + mark + '</span>' :
        '<button type="button" class="chip" ' + attrs + '>' + mark + '</button>';
    }
    function progress(p) {
      const need = trs.filter(function (tr) {
        return (tr.requiredFor || []).indexOf(p.role === 'volunteer' ? 'volunteer' : 'pilot') !== -1;
      });
      const set = need.length ? need : trs;
      const ok = set.filter(function (tr) { return done(p, tr); }).length;
      const pct = set.length ? Math.round(ok / set.length * 100) : 100;
      return '<div style="min-width:6rem"><span class="meter"><span class="meter-fill" style="width:' + pct + '%"></span></span>' +
        '<span class="tiny muted tabular">' + ok + '/' + set.length + '</span></div>';
    }

    const matrix = (trs.length && people.length) ? CWA.ui.table(people,
      [{ labelKey: 'admin.col.name', render: function (p) {
        return '<div class="row">' + CWA.ui.avatar(p.name) + '<span class="medium">' + esc(p.name) + '</span></div>';
      } }].concat(trs.map(function (tr) {
        return { labelKey: '', render: function (p) { return cell(p, tr, false); } };
      })).concat([{ labelKey: 'admin.tr.progress', render: progress }]),
      function (p) {
        return '<div class="between mb-2"><div class="row">' + CWA.ui.avatar(p.name) +
          '<span class="medium">' + esc(p.name) + '</span></div>' + progress(p) + '</div>' +
          '<div class="stack-sm">' + trs.map(function (tr) {
            return '<div class="between"><span class="small muted">' + esc(tr.title) + '</span>' + cell(p, tr, true) + '</div>';
          }).join('') + '</div>';
      },
      function () { return ''; }
    ) : '<div class="card">' + emptyState('clipboard', t('admin.tr.empty')) + '</div>';

    setView(
      '<div class="stack-lg">' +
      '<div class="between wrap"><div><h1 class="h1">' + esc(t('common.training')) + '</h1>' +
      '<p class="muted small mt-1">' + esc(t('admin.tr.intro')) + '</p></div>' +
      '<div class="row wrap">' + addBtn('tr-video', t('admin.tr.addVideo'), 'btn-primary') +
      addBtn('tr-shop', t('admin.tr.addWorkshop'), 'btn-outline') + '</div></div>' +

      '<div><h2 class="h2 mb-4">' + esc(t('admin.tr.curriculum')) + '</h2>' +
      (trs.length ? '<div class="grid-2">' + trs.map(function (tr) {
        return '<div class="card"><div class="video-card">' +
          '<div class="video-thumb">' + (tr.type === 'video' ? '<span class="play-tri"></span>' : icon('clipboard')) + '</div>' +
          '<div class="grow"><div class="row wrap">' + typeBadge(tr) +
          '<span class="medium">' + esc(tr.title) + '</span></div>' +
          '<div class="small muted tabular">' + esc(tr.durationMin + ' ' + t('common.min')) + '</div></div></div>' +
          '<div class="row wrap mt-4"><span class="small muted">' + esc(t('admin.tr.requiredFor')) + '</span>' + reqChips(tr) + '</div>' +
          '</div>';
      }).join('') + '</div>' : '<div class="card">' + emptyState('clipboard', t('admin.tr.empty')) + '</div>') +
      '</div>' +

      '<div><div class="between wrap mb-4"><h2 class="h2">' + esc(t('admin.tr.matrix')) + '</h2>' +
      '<span class="small muted">' + esc(t('admin.tr.tapHint')) + '</span></div>' + matrix + '</div>' +
      '</div>'
    );

    /* the table helper has no per-column head override — patch the training headers in */
    const ths = qsa('.table-desktop thead th', qs('#view'));
    trs.forEach(function (tr, i) {
      if (ths[i + 1]) ths[i + 1].textContent = tr.title;
    });

    qs('#tr-video').addEventListener('click', function () { openTrainingModal('video'); });
    qs('#tr-shop').addEventListener('click', function () { openTrainingModal('workshop'); });

    qsa('[data-req]', qs('#view')).forEach(function (b) {
      b.addEventListener('click', function () {
        const parts = b.getAttribute('data-req').split(':');
        store.update(function (db) {
          const tr = store.find(db.trainings || [], parts[0]);
          if (!tr) return;
          tr.requiredFor = tr.requiredFor || [];
          const i = tr.requiredFor.indexOf(parts[1]);
          if (i === -1) tr.requiredFor.push(parts[1]); else tr.requiredFor.splice(i, 1);
        });
        CWA.ui.toast(t('admin.saved'));
      });
    });

    qsa('[data-sign]', qs('#view')).forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.stopPropagation();
        const parts = b.getAttribute('data-sign').split(':');
        let nowDone = false;
        store.update(function (db) {
          const p = store.find(db.pilots, parts[0]);
          if (!p) return;
          p.trainingsDone = p.trainingsDone || [];
          const i = p.trainingsDone.indexOf(parts[1]);
          if (i === -1) { p.trainingsDone.push(parts[1]); nowDone = true; } else p.trainingsDone.splice(i, 1);
        });
        CWA.ui.toast(nowDone ? t('admin.tr.signedOff') : t('admin.saved'));
      });
    });
  }

  function openTrainingModal(type) {
    const isVideo = type === 'video';
    const m = CWA.ui.modal(
      modalHead(t(isVideo ? 'admin.tr.addVideo' : 'admin.tr.addWorkshop')) +
      '<div class="stack">' +
      inputField('nt-title', t('admin.tr.titleLabel')) +
      inputField('nt-dur', t('admin.tr.durationMin'), { type: 'number', value: isVideo ? 10 : 120, min: 1 }) +
      (isVideo ?
        '<div class="field"><span class="label">' + esc(t('admin.tr.video')) + '</span>' +
        '<div class="roster-cell"><span class="text-primary">' + icon('download') + '</span>' +
        '<span class="medium">' + esc(t('admin.tr.upload')) + '</span>' +
        '<span class="hint">' + esc(t('admin.tr.uploadHint')) + '</span></div></div>' : '') +
      '<div class="field"><span class="label">' + esc(t('admin.tr.requiredFor')) + '</span>' +
      checkRow('nt-pilot', t('admin.tr.forPilot'), true) +
      checkRow('nt-vol', t('admin.tr.forVolunteer'), false) + '</div>' +
      '<button type="button" class="btn btn-primary btn-block" id="nt-add">' + esc(t('common.add')) + '</button>' +
      '</div>'
    );
    wireChecks(m.el);

    qs('#nt-add', m.el).addEventListener('click', function () {
      const titleEl = qs('#nt-title', m.el);
      const title = titleEl.value.trim();
      if (!title) { titleEl.focus(); return; }
      const dur = num(qs('#nt-dur', m.el).value, isVideo ? 10 : 120);
      const req = [];
      if (qs('#nt-pilot', m.el).checked) req.push('pilot');
      if (qs('#nt-vol', m.el).checked) req.push('volunteer');
      m.close();
      store.update(function (db) {
        db.trainings = db.trainings || [];
        db.trainings.push({ id: store.uid(isVideo ? 'v' : 'w'), type: type, title: title, durationMin: dur, requiredFor: req });
      });
      CWA.ui.toast(t('admin.tr.added', { title: title }));
    });
  }

  /* ================================================================ clients */
  function vClients() {
    crumb(t('admin.nav.clients'));
    const d = D();

    function proxyCell(c) {
      return c.proxy ? esc(c.proxy.name) + ' <span class="muted small">(' + esc(c.proxy.relation) + ')</span>' : '—';
    }
    function mobShort(c) {
      const s = c.mobilityNotes || '';
      return s.length > 42 ? esc(s.slice(0, 42)) + '…' : (esc(s) || '—');
    }

    setView(
      '<div class="stack-lg">' +
      pageHead(t('admin.nav.clients'), addBtn('cl-new', t('admin.cli.add'))) +
      CWA.ui.table(d.clients,
        [
          { labelKey: 'admin.col.name', render: function (c) {
            return '<div class="row">' + CWA.ui.avatar(c.name) + '<span class="medium">' + esc(c.name) + '</span></div>';
          } },
          { labelKey: 'admin.col.age', render: function (c) { return '<span class="tabular">' + esc(c.age || '—') + '</span>'; } },
          { labelKey: 'admin.col.address', render: function (c) { return esc(c.address); } },
          { labelKey: 'common.waiver', render: waiverBadge },
          { labelKey: 'admin.col.proxy', render: proxyCell },
          { labelKey: 'admin.col.mobility', render: function (c) { return '<span class="muted small">' + mobShort(c) + '</span>'; } }
        ],
        function (c) {
          return '<div class="between"><div class="row">' + CWA.ui.avatar(c.name) +
            '<div><div class="medium">' + esc(c.name) + (c.age ? ', ' + esc(c.age) : '') + '</div>' +
            '<div class="small muted">' + esc(c.address) + '</div></div></div>' + waiverBadge(c) + '</div>';
        },
        function (c) { return 'class="clickable" data-client="' + c.id + '"'; }
      ) +
      '</div>'
    );

    qs('#cl-new').addEventListener('click', openClientWizard);
    qsa('[data-client]', qs('#view')).forEach(function (el) {
      el.addEventListener('click', function () { openClientModal(el.getAttribute('data-client')); });
    });
  }

  function openClientModal(id) {
    const d = D();
    const c = store.find(d.clients, id);
    if (!c) return;

    const rows = [
      [t('admin.col.age'), esc(c.age || '—')],
      [t('common.phone'), '<span class="tabular">' + esc(c.phone) + '</span>'],
      [t('admin.col.address'), esc(c.address)],
      [t('common.waiver'), waiverBadge(c)]
    ];
    if (c.mobilityNotes) rows.push([t('admin.col.mobility'), esc(c.mobilityNotes)]);
    if (c.proxy) {
      rows.push([t('admin.col.proxy'), esc(c.proxy.name) + ' (' + esc(c.proxy.relation) + ')']);
      rows.push([t('common.phone') + ' · ' + t('admin.col.proxy'), '<span class="tabular">' + esc(c.proxy.phone) + '</span>']);
    }

    const m = CWA.ui.modal(
      '<div class="between mb-4"><div class="row-lg">' + CWA.ui.avatar(c.name, 'avatar-lg') +
      '<div><h3 class="h2">' + esc(c.name) + '</h3><div class="small muted">' + esc(c.address) + '</div></div></div>' +
      '<button type="button" class="icon-btn" data-close aria-label="' + esc(t('common.close')) + '">' + icon('x') + '</button></div>' +
      '<div class="detail-list">' + rows.map(function (row) {
        return '<div><dt>' + esc(row[0]) + '</dt><dd>' + row[1] + '</dd></div>';
      }).join('') + '</div>' +
      '<div class="mt-4">' + CWA.ui.mapEmbed(c.address, { small: true }) + '</div>' +
      (!c.waiverSigned ?
        '<div class="stack mt-4">' +
        checkRow('cw-check', t('admin.req.waiverToday'), false) +
        '<button type="button" class="btn btn-primary btn-block" id="cw-btn" disabled>' + esc(t('admin.cli.markSigned')) + '</button>' +
        '</div>' : '')
    );

    const cb = qs('#cw-check', m.el);
    if (cb) {
      wireChecks(m.el);
      const btn = qs('#cw-btn', m.el);
      cb.addEventListener('change', function () { btn.disabled = !cb.checked; });
      btn.addEventListener('click', function () {
        m.close();
        store.update(function (db) {
          const cl = store.find(db.clients, id);
          if (cl) cl.waiverSigned = true;
        });
        CWA.ui.toast(t('admin.cli.signedToast'));
      });
    }
  }

  /* "+ Add passenger" — residence drives either an address or a partner facility */
  function openClientWizard() {
    const d = D();
    const st = { where: 'home', partnerId: d.partners[0] ? d.partners[0].id : null };
    const m = CWA.ui.modal('<div id="cl-box"></div>' + CWA.ui.addressDatalist());
    const box = qs('#cl-box', m.el);

    function render() {
      const name = qs('#cl-name', box) ? qs('#cl-name', box).value : '';
      const age = qs('#cl-age', box) ? qs('#cl-age', box).value : '';
      const phone = qs('#cl-phone', box) ? qs('#cl-phone', box).value : '';
      const addr = qs('#cl-addr', box) ? qs('#cl-addr', box).value : '';
      const notes = qs('#cl-notes', box) ? qs('#cl-notes', box).value : '';
      const waiver = qs('#cl-waiver', box) ? qs('#cl-waiver', box).checked : false;

      box.innerHTML = modalHead(t('admin.cli.add')) +
        '<div class="stack">' +
        inputField('cl-name', t('admin.col.name'), { value: name }) +
        '<div class="grid-2">' +
        inputField('cl-age', t('admin.col.age'), { type: 'number', value: age, min: 1 }) +
        inputField('cl-phone', t('common.phone'), { type: 'tel', value: phone }) +
        '</div>' +
        '<div class="field"><span class="label">' + esc(t('admin.cli.residence')) + '</span>' +
        bigOption('data-res="home"', t('admin.cli.atHome'), '', st.where === 'home') +
        bigOption('data-res="facility"', t('admin.cli.inFacility'), '', st.where === 'facility') +
        '</div>' +
        (st.where === 'home' ?
          addrField('cl-addr', t('admin.col.address'), addr) + '<div id="cl-map"></div>' :
          selectField('cl-partner', t('admin.cli.facility'), d.partners.map(function (pn) {
            return '<option value="' + esc(pn.id) + '"' + (st.partnerId === pn.id ? ' selected' : '') + '>' + esc(pn.name) + '</option>';
          }).join(''))) +
        textareaField('cl-notes', t('admin.col.mobility'), notes) +
        checkRow('cl-waiver', t('admin.cli.waiverPaper'), waiver) +
        '<button type="button" class="btn btn-primary btn-block" id="cl-add">' + esc(t('common.add')) + '</button>' +
        '</div>';

      wireClose(box, m);
      wireChecks(box);
      wireMapPreview(box, 'cl-addr', 'cl-map');
      qsa('[data-res]', box).forEach(function (b) {
        b.addEventListener('click', function () { st.where = b.getAttribute('data-res'); render(); });
      });
      const sel = qs('#cl-partner', box);
      if (sel) sel.addEventListener('change', function () { st.partnerId = sel.value; });

      qs('#cl-add', box).addEventListener('click', function () {
        const nameEl = qs('#cl-name', box);
        const nm = nameEl.value.trim();
        if (!nm) { nameEl.focus(); return; }
        const ageV = num(qs('#cl-age', box).value, null);
        const phoneV = qs('#cl-phone', box).value.trim();
        const notesV = qs('#cl-notes', box).value.trim();
        const signed = qs('#cl-waiver', box).checked;
        const atHome = st.where === 'home';
        const pn = partner(d, st.partnerId);
        const addrV = atHome ? qs('#cl-addr', box).value.trim() : (pn ? pn.name : '');
        m.close();
        store.update(function (db) {
          db.clients.push({
            id: store.uid('c'), name: nm, age: ageV, phone: phoneV,
            address: addrV, partnerId: atHome ? null : st.partnerId,
            mobilityNotes: notesV, waiverSigned: signed, proxy: null
          });
        });
        CWA.ui.toast(t('admin.cli.addedToast', { name: nm }));
      });
    }

    render();
  }

  /* ================================================================ partners */
  function vPartners() {
    crumb(t('admin.nav.partners'));
    const d = D(), now = Date.now();

    setView(
      '<div class="stack-lg">' +
      pageHead(t('admin.nav.partners'), addBtn('pa-new', t('admin.par.add'))) +
      (d.partners.length ? d.partners.map(function (pn) {
        const upcoming = mucRides(d).filter(function (r) {
          return r.type === 'event' && r.partnerId === pn.id && r.ts > now && r.status !== 'cancelled';
        }).sort(function (a, b) { return a.ts - b.ts; });

        return '<div class="card"><div class="between wrap mb-4"><div class="row-lg">' +
          '<div class="icon-tile">' + icon('building') + '</div>' +
          '<div><div class="medium" style="font-size:1rem">' + esc(pn.name) + '</div>' +
          '<div class="small muted">' + esc(pn.contactName) + ' · <span class="tabular">' + esc(pn.phone) + '</span></div>' +
          '<div class="small muted">' + esc(pn.address) + ' · ' + esc(t('admin.par.residents', { n: pn.residents })) + '</div></div></div>' +
          '<button type="button" class="btn btn-primary btn-sm" data-plan="' + esc(pn.id) + '">' + icon('plus') + esc(t('admin.par.plan')) + '</button></div>' +

          '<div class="grid-2">' +
          '<div>' + CWA.ui.mapEmbed(pn.address, { small: true }) + '</div>' +
          '<div><div class="small semibold muted mb-2">' + esc(t('admin.par.upcoming')) + '</div>' +
          (upcoming.length ?
            '<div class="stack-sm">' + upcoming.map(function (r) {
              const filled = (r.roster || []).filter(function (x) { return x.name; }).length;
              return '<button type="button" class="record-card" data-nav="#events/' + r.id + '">' +
                '<div class="between"><div><div class="medium">' + esc(fmt.rideWhen(r)) + '</div>' +
                '<div class="small muted">' + esc(t('admin.ev.progress', { filled: filled, total: (r.roster || []).length })) + '</div></div>' +
                CWA.ui.statusBadge(r.status) + '</div></button>';
            }).join('') + '</div>' :
            '<div class="muted small">' + esc(t('admin.par.none')) + '</div>') +
          '</div></div>' +
          '</div>';
      }).join('') : '<div class="card">' + emptyState('building', t('admin.par.none')) + '</div>') +
      '</div>'
    );

    qs('#pa-new').addEventListener('click', openPartnerModal);
    qsa('[data-plan]', qs('#view')).forEach(function (b) {
      b.addEventListener('click', function () { openEventWizard(b.getAttribute('data-plan')); });
    });
  }

  function openPartnerModal() {
    const m = CWA.ui.modal(
      modalHead(t('admin.par.add')) +
      '<div class="stack">' +
      inputField('pa-name', t('admin.col.name')) +
      inputField('pa-contact', t('admin.par.contactName')) +
      inputField('pa-phone', t('common.phone'), { type: 'tel' }) +
      addrField('pa-addr', t('admin.col.address'), '') +
      '<div id="pa-map"></div>' +
      inputField('pa-res', t('admin.par.residentsLabel'), { type: 'number', value: 10, min: 0 }) +
      '<button type="button" class="btn btn-primary btn-block" id="pa-add">' + esc(t('common.add')) + '</button>' +
      '</div>' + CWA.ui.addressDatalist()
    );
    wireMapPreview(m.el, 'pa-addr', 'pa-map');

    qs('#pa-add', m.el).addEventListener('click', function () {
      const nameEl = qs('#pa-name', m.el);
      const name = nameEl.value.trim();
      if (!name) { nameEl.focus(); return; }
      const contact = qs('#pa-contact', m.el).value.trim();
      const phone = qs('#pa-phone', m.el).value.trim();
      const addr = qs('#pa-addr', m.el).value.trim();
      const res = num(qs('#pa-res', m.el).value, 0);
      m.close();
      store.update(function (db) {
        db.partners.push({ id: store.uid('n'), name: name, contactName: contact, phone: phone, address: addr, residents: res });
      });
      CWA.ui.toast(t('admin.par.addedToast', { name: name }));
    });
  }

  /* ================================================================ chats */
  let chatTab = 'active';

  function vChats() {
    crumb(t('admin.nav.chats'));
    const d = D();
    const isPast = function (r) { return r.status === 'done' || r.status === 'cancelled'; };
    const threads = d.chats.filter(function (c) {
      const r = store.find(d.rides, c.rideId);
      if (!r || r.chapterId !== CH || !c.messages.length) return false;
      return chatTab === 'past' ? isPast(r) : !isPast(r);
    }).sort(function (a, b) {
      return b.messages[b.messages.length - 1].ts - a.messages[a.messages.length - 1].ts;
    });

    setView(
      '<div class="stack-lg">' +
      '<h1 class="h1">' + esc(t('admin.nav.chats')) + '</h1>' +
      '<div class="seg" role="group" aria-label="' + esc(t('common.chat')) + '">' +
      [['active', 'chat.tabActive'], ['past', 'chat.tabPast']].map(function (s) {
        return '<button type="button" data-ctab="' + s[0] + '" class="' + (chatTab === s[0] ? 'active' : '') + '">' + esc(t(s[1])) + '</button>';
      }).join('') + '</div>' +
      (threads.length ?
        '<div class="stack-sm">' + threads.map(function (c) {
          const r = store.find(d.rides, c.rideId);
          const who = rideWho(d, r);
          const p = pilot(d, r.pilotId);
          const names = who + (p ? ' · ' + p.name : '');
          const last = c.messages[c.messages.length - 1];
          const preview = last.from === 'system' ? t(last.tKey || '') : last.text;
          const unread = last.from !== 'admin';
          return '<button type="button" class="record-card" data-nav="#chat/' + r.id + '">' +
            '<div class="between"><div class="row">' + CWA.ui.avatar(who) +
            '<div class="grow"><div class="medium">' + esc(names) + '</div>' +
            '<div class="tiny muted">' + esc(fmt.rideWhen(r)) + '</div>' +
            '<div class="small muted truncate" style="max-width:26rem">' + esc(preview.slice(0, 80)) + '</div></div></div>' +
            '<div class="row">' + (unread ? '<span class="unread-dot"></span>' : '') +
            '<span class="tiny muted">' + esc(fmt.rel(last.ts)) + '</span></div></div></button>';
        }).join('') + '</div>' :
        '<div class="card">' + emptyState('chat', t('admin.chats.empty')) + '</div>') +
      '</div>'
    );

    qsa('[data-ctab]', qs('#view')).forEach(function (b) {
      b.addEventListener('click', function () { chatTab = b.getAttribute('data-ctab'); CWA.render(); });
    });
  }

  function vChat(rideId) {
    const d = D();
    const r = store.find(d.rides, rideId);
    const c = chatFor(d, rideId);
    if (!r || !c) {
      crumb(t('admin.nav.chats'));
      setView(backBtn('#chats') + '<div class="card mt-4">' + emptyState('chat', t('admin.chats.empty')) + '</div>');
      return;
    }
    const who = rideWho(d, r);
    crumb(who);
    const p = pilot(d, r.pilotId);

    setView(
      '<div class="stack">' +
      '<div class="between wrap"><div class="row">' +
      '<button type="button" class="icon-btn" data-nav="#chats" aria-label="' + esc(t('common.back')) + '">' + icon('arrowLeft') + '</button>' +
      CWA.ui.avatar(who) +
      '<div><div class="medium">' + esc(who + (p ? ' · ' + p.name : '')) + '</div>' +
      '<div class="tiny muted">' + esc(fmt.rideWhen(r)) + '</div></div></div>' +
      '<button type="button" class="btn btn-outline btn-sm" data-nav="' + rideHash(r) + '">' +
      icon('externalLink') + esc(t('chat.viewBooking')) + '</button></div>' +

      '<div class="card card-flush">' +
      '<div class="chat-scroll" style="max-height:60vh;min-height:20rem">' + msgsHtml(c) + '</div>' +
      '<form class="chat-input-row" id="chat-form">' +
      '<input class="input" placeholder="' + esc(t('chat.placeholder')) + '" aria-label="' + esc(t('common.chat')) + '">' +
      '<button type="submit" class="send-btn" aria-label="' + esc(t('common.send')) + '">' + icon('send') + '</button></form>' +
      '</div></div>'
    );

    wireChat(rideId);
  }

  function msgsHtml(chat) {
    return chat.messages.map(function (m) { return CWA.ui.chatMessage(m, 'admin'); }).join('');
  }

  function wireChat(rideId) {
    const f = qs('#chat-form');
    if (f) {
      f.addEventListener('submit', function (e) {
        e.preventDefault();
        const inp = f.querySelector('input');
        const text = inp.value.trim();
        if (!text) return;
        const from = me();
        store.update(function (db) {
          const chat = chatFor(db, rideId);
          const ride = store.find(db.rides, rideId);
          if (!chat || !ride) return;
          chat.messages.push({ from: 'admin', name: from, text: text, ts: Date.now() });
          if (ride.clientId) store.notify(db, 'client:' + ride.clientId, 'notif.message', { name: from, text: text.slice(0, 60) }, '#chat/' + rideId);
          if (ride.pilotId) store.notify(db, 'pilot', 'notif.message', { name: from, text: text.slice(0, 60) }, '#chat/' + rideId);
        });
      });
    }
    const sc = qs('.chat-scroll');
    if (sc) sc.scrollTop = sc.scrollHeight;
  }

  /* ================================================================ resources */
  function vResources() {
    crumb(t('admin.nav.resources'));
    const d = D();

    setView(
      '<div class="stack-lg">' +
      '<div class="between wrap"><h1 class="h1">' + esc(t('admin.nav.resources')) + '</h1>' +
      '<div class="row wrap">' + addBtn('rs-tw', t('admin.res.addTrishaw')) +
      addBtn('rs-g', t('admin.res.addGarage'), 'btn-outline') + '</div></div>' +

      '<div><h2 class="h2 mb-4">' + esc(t('admin.res.trishaws')) + '</h2>' +
      '<div class="grid-2">' + d.trishaws.map(function (tw) {
        const g = garage(d, tw.garageId);
        return '<div class="card"><div class="between mb-4"><div class="row-lg">' +
          '<div class="icon-tile">' + icon('bike') + '</div>' +
          '<div><div class="medium" style="font-size:1rem">' + esc(tw.number) + '</div>' +
          '<div class="small muted">' + esc(tw.model) + '</div></div></div>' +
          '<span class="badge badge-emerald">' + esc(t('admin.res.ok')) + '</span></div>' +
          '<div class="detail-list">' +
          '<div><dt>' + esc(t('common.garage')) + '</dt><dd>' + esc(g ? g.name : '—') + '</dd></div>' +
          '<div><dt>' + esc(t('common.battery')) + '</dt><dd>' + CWA.ui.batteryBar(tw.battery) + '</dd></div>' +
          '<div><dt>' + esc(t('common.lockCode')) + '</dt><dd><span class="kbd">' + esc(tw.lockCode) + '</span></dd></div>' +
          '</div></div>';
      }).join('') + '</div></div>' +

      '<div><h2 class="h2 mb-4">' + esc(t('admin.res.garages')) + '</h2>' +
      '<div class="grid-2">' + d.garages.map(function (g) {
        return '<div class="card"><div class="row-lg mb-4">' +
          '<div class="icon-tile">' + icon('warehouse') + '</div>' +
          '<div><div class="medium" style="font-size:1rem">' + esc(g.name) + '</div>' +
          '<div class="small muted">' + esc(g.address) + '</div></div></div>' +
          CWA.ui.mapEmbed(g.address, { small: true, caption: false }) +
          '<div class="small mt-4"><span class="semibold">' + esc(t('admin.res.access')) + ':</span> ' +
          '<span class="muted">' + esc(g.accessInstructions) + '</span></div></div>';
      }).join('') + '</div></div>' +

      '</div>'
    );

    qs('#rs-tw').addEventListener('click', openTrishawModal);
    qs('#rs-g').addEventListener('click', openGarageModal);
  }

  function openTrishawModal() {
    const d = D();
    const m = CWA.ui.modal(
      modalHead(t('admin.res.addTrishaw')) +
      '<div class="stack">' +
      inputField('rs-num', t('admin.res.number'), { placeholder: 'MUC-03' }) +
      inputField('rs-model', t('admin.res.model'), { placeholder: 'Van Raam Chat' }) +
      selectField('rs-garage', t('common.garage'), d.garages.map(function (g) {
        return '<option value="' + esc(g.id) + '">' + esc(g.name) + '</option>';
      }).join('')) +
      inputField('rs-lock', t('common.lockCode'), { placeholder: '0000' }) +
      '<button type="button" class="btn btn-primary btn-block" id="rs-add">' + esc(t('common.add')) + '</button>' +
      '</div>'
    );
    qs('#rs-add', m.el).addEventListener('click', function () {
      const numEl = qs('#rs-num', m.el);
      const number = numEl.value.trim();
      if (!number) { numEl.focus(); return; }
      const model = qs('#rs-model', m.el).value.trim();
      const gid = qs('#rs-garage', m.el).value;
      const lock = qs('#rs-lock', m.el).value.trim();
      m.close();
      store.update(function (db) {
        db.trishaws.push({ id: store.uid('t'), number: number, model: model, garageId: gid, battery: 100, lockCode: lock, status: 'ok' });
      });
      CWA.ui.toast(t('admin.res.trishawAdded', { n: number }));
    });
  }

  function openGarageModal() {
    const m = CWA.ui.modal(
      modalHead(t('admin.res.addGarage')) +
      '<div class="stack">' +
      inputField('rg-name', t('admin.col.name')) +
      addrField('rg-addr', t('admin.col.address'), '') +
      '<div id="rg-map"></div>' +
      textareaField('rg-access', t('admin.res.accessInstr'), '') +
      '<button type="button" class="btn btn-primary btn-block" id="rg-add">' + esc(t('common.add')) + '</button>' +
      '</div>' + CWA.ui.addressDatalist()
    );
    wireMapPreview(m.el, 'rg-addr', 'rg-map');
    qs('#rg-add', m.el).addEventListener('click', function () {
      const nameEl = qs('#rg-name', m.el);
      const name = nameEl.value.trim();
      if (!name) { nameEl.focus(); return; }
      const addr = qs('#rg-addr', m.el).value.trim();
      const acc = qs('#rg-access', m.el).value.trim();
      m.close();
      store.update(function (db) {
        db.garages.push({ id: store.uid('g'), name: name, address: addr, accessInstructions: acc });
      });
      CWA.ui.toast(t('admin.res.garageAdded', { name: name }));
    });
  }

  /* ================================================================ settings */
  function setCard(ic, title, desc, inner, saveId) {
    return '<div class="card stack">' +
      '<div class="row"><div class="icon-tile icon-tile-sm">' + icon(ic) + '</div>' +
      '<div class="grow"><h3 class="h2">' + esc(title) + '</h3>' +
      '<div class="small muted">' + esc(desc) + '</div></div></div>' +
      inner +
      (saveId ? '<div class="between"><span class="tiny muted"></span>' +
        '<button type="button" class="btn btn-primary btn-sm" id="' + saveId + '">' + esc(t('common.save')) + '</button></div>' : '') +
      '</div>';
  }
  function switchRow(id, label, hint, checked) {
    return '<div class="between"><div><div class="medium small">' + esc(label) + '</div>' +
      (hint ? '<div class="hint">' + esc(hint) + '</div>' : '') + '</div>' +
      '<label class="switch"><input type="checkbox" id="' + id + '"' + (checked ? ' checked' : '') +
      ' aria-label="' + esc(label) + '"><span class="switch-slider"></span></label></div>';
  }
  function selectRow(id, label, hint, optionsHtml) {
    return '<div class="between wrap"><div><label class="medium small" for="' + id + '">' + esc(label) + '</label>' +
      (hint ? '<div class="hint">' + esc(hint) + '</div>' : '') + '</div>' +
      '<select class="select" id="' + id + '" style="width:11rem">' + optionsHtml + '</select></div>';
  }
  function opts(list, cur) {
    return list.map(function (o) {
      return '<option value="' + esc(o[0]) + '"' + (String(o[0]) === String(cur) ? ' selected' : '') + '>' + esc(o[1]) + '</option>';
    }).join('');
  }

  function vSettings() {
    crumb(t('admin.nav.settings'));
    const d = D(), ch = chapter(d);
    const sw = slotWindows(ch);
    const opDays = ch.operatingDays || [];
    const dayInts = [1, 2, 3, 4, 5, 6, 0];
    const chan = ch.channels || { app: true, whatsapp: true, phone: true };
    const rem = ch.reminders || { ride: 24, noPilot: 4, demand: 'monthly' };
    const co = store.find(d.countries, ch.country);

    function hourOpts(sel) {
      let s = '';
      for (let h = 8; h <= 20; h++) s += '<option value="' + h + '"' + (h === sel ? ' selected' : '') + '>' + pad2(h) + ':00</option>';
      return s;
    }

    setView(
      '<div class="stack-lg" style="max-width:46rem">' +
      '<h1 class="h1">' + esc(t('admin.nav.settings')) + '</h1>' +

      setCard('sparkles', t('admin.set.opModel'), t('admin.set.opModelDesc'),
        switchRow('set-auto', t('admin.set.auto'), t('admin.set.autoHint'), !!ch.autoSchedule) +
        selectRow('set-lead', t('admin.set.leadTime'), '', opts([24, 48, 72].map(function (h) {
          return [h, t('admin.set.hoursN', { h: h })];
        }), ch.leadTimeHours)), 'save-op') +

      setCard('calendar', t('admin.set.calCard'), t('admin.set.calDesc'),
        '<div class="field"><span class="label">' + esc(t('admin.set.days')) + '</span>' +
        '<div class="row wrap">' + dayInts.map(function (di) {
          return '<button type="button" class="chip' + (opDays.indexOf(di) !== -1 ? ' active' : '') + '" data-day="' + di + '">' +
            esc(dayName(di)) + '</button>';
        }).join('') + '</div></div>' +
        '<div class="grid-2">' +
        '<div class="field"><label class="label" for="set-open">' + esc(t('admin.set.opens')) + '</label>' +
        '<select class="select" id="set-open">' + hourOpts(ch.openHour) + '</select></div>' +
        '<div class="field"><label class="label" for="set-close">' + esc(t('admin.set.closes')) + '</label>' +
        '<select class="select" id="set-close">' + hourOpts(ch.closeHour) + '</select></div>' +
        '</div>' +
        '<div class="hint">' + esc(t('admin.set.slotHint', { m0: sw.morning[0], m1: sw.morning[1], a0: sw.afternoon[0], a1: sw.afternoon[1] })) + '</div>',
        'save-cal') +

      setCard('phone', t('admin.set.channels'), t('admin.set.channelsDesc'),
        switchRow('set-ch-app', t('admin.set.chApp'), t('admin.set.chAppHint'), chan.app !== false) +
        switchRow('set-ch-wa', t('admin.set.chWa'), t('admin.set.chWaHint'), chan.whatsapp !== false) +
        switchRow('set-ch-ph', t('admin.set.chPhone'), t('admin.set.chPhoneHint'), chan.phone !== false),
        'save-chan') +

      setCard('bell', t('admin.set.notif'), t('admin.set.notifDesc'),
        selectRow('set-rem-ride', t('admin.set.rideReminder'), '', opts([24, 48].map(function (h) {
          return [h, t('admin.set.hBefore', { h: h })];
        }), rem.ride)) +
        selectRow('set-rem-pilot', t('admin.set.noPilotAlert'), '', opts([2, 4, 6].map(function (h) {
          return [h, t('admin.set.hBefore', { h: h })];
        }), rem.noPilot)) +
        selectRow('set-rem-demand', t('admin.set.demandCheck'), t('admin.set.demandHint'),
          opts([['weekly', t('admin.set.weekly')], ['monthly', t('admin.set.monthly')], ['off', t('admin.set.off')]], rem.demand)),
        'save-rem') +

      setCard('shield', t('waiver.title'), t('admin.set.waiverDesc'),
        '<textarea class="textarea" id="set-waiver" rows="4" aria-label="' + esc(t('waiver.title')) + '">' + esc(ch.waiverText || t('waiver.text')) + '</textarea>' +
        '<div class="hint">' + esc(t('admin.set.waiverHint')) + '</div>', 'save-waiver') +

      setCard('building', t('admin.set.infoCard'), t('admin.set.infoDesc'),
        inputField('set-name', t('admin.set.name'), { value: ch.name }) +
        inputField('set-phone', t('common.phone'), { type: 'tel', value: ch.phone }) +
        addrField('set-addr', t('admin.col.address'), ch.address || '') +
        '<div id="set-map"></div>' +
        '<div class="field"><span class="label">' + esc(t('admin.set.country')) + '</span>' +
        '<div><span class="badge badge-muted">' + esc(co ? co.flag + ' ' + co.name : t('admin.set.germany')) + '</span></div></div>',
        'save-info') +

      '</div>' + CWA.ui.addressDatalist()
    );

    wireMapPreview(qs('#view'), 'set-addr', 'set-map');

    function saveChapter(fn) {
      store.update(function (db) {
        const c = store.find(db.chapters, CH);
        if (c) fn(c);
      });
      CWA.ui.toast(t('admin.saved'));
    }

    qs('#save-op').addEventListener('click', function () {
      const auto = qs('#set-auto').checked;
      const lead = num(qs('#set-lead').value, 48);
      saveChapter(function (c) { c.autoSchedule = auto; c.leadTimeHours = lead; });
    });

    qsa('[data-day]', qs('#view')).forEach(function (b) {
      b.addEventListener('click', function () { b.classList.toggle('active'); });
    });
    qs('#save-cal').addEventListener('click', function () {
      const days = qsa('[data-day].active', qs('#view')).map(function (b) { return num(b.getAttribute('data-day'), 1); });
      const oh = num(qs('#set-open').value, 9);
      const chh = num(qs('#set-close').value, 18);
      saveChapter(function (c) { c.operatingDays = days; c.openHour = oh; c.closeHour = chh; });
    });

    qs('#save-chan').addEventListener('click', function () {
      const app = qs('#set-ch-app').checked, wa = qs('#set-ch-wa').checked, ph = qs('#set-ch-ph').checked;
      saveChapter(function (c) { c.channels = { app: app, whatsapp: wa, phone: ph }; });
    });

    qs('#save-rem').addEventListener('click', function () {
      const ride = num(qs('#set-rem-ride').value, 24);
      const noPilot = num(qs('#set-rem-pilot').value, 4);
      const demand = qs('#set-rem-demand').value;
      saveChapter(function (c) { c.reminders = { ride: ride, noPilot: noPilot, demand: demand }; });
    });

    qs('#save-waiver').addEventListener('click', function () {
      const txt = qs('#set-waiver').value;
      saveChapter(function (c) { c.waiverText = txt; });
    });

    qs('#save-info').addEventListener('click', function () {
      const name = qs('#set-name').value.trim() || 'München';
      const phone = qs('#set-phone').value.trim();
      const addr = qs('#set-addr').value.trim();
      saveChapter(function (c) { c.name = name; c.phone = phone; c.address = addr; });
    });
  }

  /* ==================================================== global role: overview */
  function num0(n) { return fmt.num(n); }
  function sumC(d, f) { return d.countries.reduce(function (a, c) { return a + f(c); }, 0); }
  function mucDone(d) {
    return d.rides.filter(function (r) { return r.chapterId === CH && r.status === 'done'; }).length;
  }
  function statTile(labelKey, value, trend) {
    return '<div class="stat-tile"><div class="stat-value">' + esc(value) + '</div>' +
      '<div class="stat-label">' + esc(t(labelKey)) + '</div>' +
      (trend ? '<div class="stat-trend">' + esc(trend) + '</div>' : '') + '</div>';
  }
  /* chapters created in this demo (seed chapters carry no createdAt) */
  function newChapters(d, countryId) {
    return d.chapters.filter(function (c) { return c.createdAt && (!countryId || c.country === countryId); });
  }
  function countryChapters(d, c) { return c.chapters + newChapters(d, c.id).length; }
  function awaitingCount(d) {
    return newChapters(d).filter(function (c) { return c.awaitingActivation; }).length + (activated.berlin ? 0 : 1);
  }
  function chapterBadge(status) {
    return status === 'active'
      ? '<span class="badge badge-emerald">' + icon('check') + esc(t('glob.active')) + '</span>'
      : '<span class="badge badge-amber">' + icon('clock') + esc(t('glob.awaiting')) + '</span>';
  }

  function vOverview() {
    if (!isSuper()) { CWA.nav('#dashboard'); return; }
    const d = D();
    crumb(t('glob.overview'));

    const done = mucDone(d);
    const rides = sumC(d, function (c) { return c.stats.rides; }) + done;
    const hours = sumC(d, function (c) { return c.stats.hours; });
    const chapters = sumC(d, function (c) { return countryChapters(d, c); });
    const pilots = sumC(d, function (c) { return c.pilots; });
    const pax = Math.round(rides * 1.4);
    const awaiting = awaitingCount(d);

    /* bar chart: last 8 months, mock rising series; the current month carries
       the live count of this month's München rides on top of the base */
    const now = new Date();
    const liveMonth = d.rides.filter(function (r) {
      const dt = new Date(r.ts);
      return r.chapterId === CH && dt.getMonth() === now.getMonth() && dt.getFullYear() === now.getFullYear();
    }).length;
    const base = [5890, 6040, 6230, 6410, 6660, 6890, 7140, 7290];
    const months = base.map(function (v, i) {
      const dt = new Date(); dt.setDate(1); dt.setHours(12, 0, 0, 0);
      dt.setMonth(dt.getMonth() - (7 - i));
      return { ts: dt.getTime(), v: i === 7 ? v + liveMonth : v };
    });
    const max = months.reduce(function (m, x) { return Math.max(m, x.v); }, 1);
    const bars = months.map(function (m) {
      const pct = Math.round(m.v / max * 76);
      return '<div class="bar-col"><div class="bar-value">' + esc(num0(m.v)) + '</div>' +
        '<div class="bar" style="height:' + pct + '%"></div>' +
        '<div class="bar-label">' + esc(fmt.monthShort(m.ts)) + '</div></div>';
    }).join('');

    const top = [
      { name: 'København Ø', flag: '🇩🇰', rides: 1412, pilots: 96, trend: '+9%' },
      { name: 'München', flag: '🇩🇪', rides: done, pilots: myPilots(d).length, trend: '+14%', live: true },
      { name: 'Amsterdam Zuid', flag: '🇳🇱', rides: 1187, pilots: 71, trend: '+11%' },
      { name: 'Portland, OR', flag: '🇺🇸', rides: 934, pilots: 58, trend: '+6%' },
      { name: 'Singapore East', flag: '🇸🇬', rides: 812, pilots: 49, trend: '+18%' }
    ];
    const table = CWA.ui.table(top, [
      { labelKey: 'common.chapter', render: function (r) { return '<span class="medium">' + esc(r.name) + '</span>'; } },
      { labelKey: 'glob.country', render: function (r) { return '<span style="font-size:1.125rem">' + esc(r.flag) + '</span>'; } },
      { labelKey: 'glob.ridesYtd', render: function (r) { return '<span class="tabular">' + esc(num0(r.rides)) + '</span>'; } },
      { labelKey: 'glob.pilots', render: function (r) { return '<span class="tabular">' + esc(num0(r.pilots)) + '</span>'; } },
      { labelKey: 'glob.colTrend', render: function (r) { return '<span class="text-emerald medium">' + esc(r.trend) + '</span>'; } }
    ], function (r) {
      return '<div class="between"><div><div class="medium">' + esc(r.flag + ' ' + r.name) + '</div>' +
        '<div class="small muted">' + esc(num0(r.rides) + ' ' + t('common.rides') + ' · ' + num0(r.pilots) + ' ' + t('glob.pilots')) + '</div></div>' +
        '<span class="text-emerald medium small">' + esc(r.trend) + '</span></div>';
    });

    setView(
      '<div class="stack-lg">' +
      '<h1 class="h1">' + esc(t('glob.overview')) + '</h1>' +
      '<div class="grid-4">' +
      statTile('glob.totalRides', num0(rides), t('glob.trend', { p: 12 })) +
      statTile('glob.rideHours', num0(hours), t('glob.trend', { p: 11 })) +
      statTile('glob.countries', num0(d.countries.length + 36), t('glob.trendNew', { n: 3 })) +
      statTile('glob.chapters', num0(chapters), t('glob.trendNew', { n: 18 })) +
      '</div>' +
      '<div class="grid-2">' +
      statTile('glob.pilots', num0(pilots), t('glob.trend', { p: 9 })) +
      statTile('glob.paxServed', num0(pax), t('glob.trend', { p: 13 })) +
      '</div>' +
      (awaiting ?
        '<div class="alert alert-sky">' + icon('info') +
        '<div class="grow"><span class="semibold tabular">' + esc(num0(awaiting)) + '</span> ' + esc(t('glob.awaitingAlert')) + '</div>' +
        '<button type="button" class="btn btn-sm btn-outline" data-nav="#countries">' + esc(t('glob.viewCountries')) + '</button>' +
        '</div>' : '') +
      '<div class="card"><h2 class="h2 mb-4">' + esc(t('glob.ridesPerMonth')) + '</h2><div class="bar-chart">' + bars + '</div></div>' +
      '<div><h2 class="h2 mb-4">' + esc(t('glob.topChapters')) + '</h2>' + table + '</div>' +
      '</div>'
    );
  }

  /* ==================================================== global role: countries */
  let activated = {}; /* page state: mock chapter id -> activated */

  const MOCK_CHAPTERS = {
    dk: [['København Ø', 1412, 96], ['Aarhus', 680, 41], ['Odense', 433, 28], ['Aalborg', 291, 19]],
    us: [['Portland, OR', 934, 58], ['Madison, WI', 512, 33], ['Boston, MA', 287, 21], ['San Diego, CA', 240, 16]],
    uk: [['Oxford', 388, 25], ['Bristol', 344, 22], ['Edinburgh', 201, 14]],
    au: [['Melbourne', 421, 27], ['Sydney', 356, 24], ['Perth', 148, 11]]
  };
  const FLAGS = ['🇫🇷', '🇳🇱', '🇮🇹', '🇪🇸', '🇵🇱', '🇸🇪', '🇳🇴', '🇨🇭', '🇦🇹', '🇵🇹'];

  function deRows(d) {
    return [
      { name: 'München', rides: mucDone(d), pilots: myPilots(d).length, status: 'active', live: true },
      { name: 'Augsburg', rides: 276, pilots: 17, status: 'active' },
      { name: 'Berlin-Pankow', mockId: 'berlin', rides: null, pilots: 6, status: activated.berlin ? 'active' : 'awaiting' },
      { name: 'Freiburg', rides: 198, pilots: 13, status: 'active' }
    ];
  }
  function storeRows(d, countryId) {
    return newChapters(d, countryId).map(function (c) {
      return { name: c.name, rides: null, pilots: 0, status: c.awaitingActivation ? 'awaiting' : 'active', chapterId: c.id };
    });
  }

  /* mobile record-cards are <button>s — use spans there to avoid nested interactive elements */
  function chapterAction(r, mobile) {
    if (r.live) {
      const inner = icon('externalLink') + esc(t('glob.openChapterAdmin'));
      const attrs = 'class="btn btn-sm btn-ghost text-primary" data-open-chapter="1"';
      return mobile ? '<span ' + attrs + '>' + inner + '</span>' : '<button type="button" ' + attrs + '>' + inner + '</button>';
    }
    if (r.status === 'awaiting') {
      const attrs = 'class="btn btn-sm btn-outline"' +
        (r.chapterId ? ' data-activate-ch="' + esc(r.chapterId) + '"' : ' data-activate="' + esc(r.mockId) + '"');
      return mobile ? '<span ' + attrs + '>' + esc(t('glob.activate')) + '</span>' :
        '<button type="button" ' + attrs + '>' + esc(t('glob.activate')) + '</button>';
    }
    return '';
  }

  function vCountries(arg) {
    if (!isSuper()) { CWA.nav('#dashboard'); return; }
    if (arg) { vCountry(arg); return; }
    const d = D();
    crumb(t('glob.countries'));
    setView(
      '<div class="stack-lg">' +
      pageHead(t('glob.countries'), addBtn('co-new', t('glob.addCountry'))) +
      '<div class="grid-3">' + d.countries.map(function (c) {
        return '<button type="button" class="record-card" data-nav="#countries/' + esc(c.id) + '">' +
          '<div class="between mb-2"><div class="row-lg"><span style="font-size:1.75rem">' + esc(c.flag) + '</span>' +
          '<span class="h2">' + esc(c.name) + '</span></div>' + icon('chevronRight') + '</div>' +
          '<div class="detail-list">' +
          '<div><dt>' + esc(t('glob.chapters')) + '</dt><dd class="tabular">' + esc(num0(countryChapters(d, c))) + '</dd></div>' +
          '<div><dt>' + esc(t('glob.pilots')) + '</dt><dd class="tabular">' + esc(num0(c.pilots)) + '</dd></div>' +
          '<div><dt>' + esc(t('glob.rides')) + '</dt><dd class="tabular">' + esc(num0(c.stats.rides)) + '</dd></div>' +
          '</div></button>';
      }).join('') + '</div></div>'
    );
    qs('#co-new').addEventListener('click', openCountryModal);
  }

  function openCountryModal() {
    let flag = FLAGS[0];
    const m = CWA.ui.modal(
      modalHead(t('glob.addCountry')) +
      '<div class="stack">' +
      inputField('co-name', t('glob.countryName')) +
      '<div class="field"><span class="label">' + esc(t('glob.flagLabel')) + '</span>' +
      '<div class="row wrap">' + FLAGS.map(function (f, i) {
        return '<button type="button" class="chip' + (i === 0 ? ' active' : '') + '" data-flag="' + esc(f) + '" aria-label="' + esc(f) + '">' +
          '<span style="font-size:1.25rem">' + esc(f) + '</span></button>';
      }).join('') + '</div></div>' +
      '<button type="button" class="btn btn-primary btn-block" id="co-add">' + esc(t('common.add')) + '</button>' +
      '</div>'
    );
    qsa('[data-flag]', m.el).forEach(function (b) {
      b.addEventListener('click', function () {
        flag = b.getAttribute('data-flag');
        qsa('[data-flag]', m.el).forEach(function (x) { x.classList.toggle('active', x === b); });
      });
    });
    qs('#co-add', m.el).addEventListener('click', function () {
      const nameEl = qs('#co-name', m.el);
      const name = nameEl.value.trim();
      if (!name) { nameEl.focus(); return; }
      m.close();
      store.update(function (db) {
        db.countries.push({ id: store.uid('co'), name: name, flag: flag, chapters: 0, pilots: 0, stats: { rides: 0, hours: 0 } });
      });
      CWA.ui.toast(t('glob.countryAdded', { name: name }));
    });
  }

  function vCountry(id) {
    const d = D();
    const c = store.find(d.countries, id);
    if (!c) { CWA.nav('#countries'); return; }
    crumb(c.name);

    const base = id === 'de' ? deRows(d) : (MOCK_CHAPTERS[id] || []).map(function (mk) {
      return { name: mk[0], rides: mk[1], pilots: mk[2], status: 'active' };
    });
    const rows = base.concat(storeRows(d, id));
    function ridesCell(r) {
      return r.rides === null ? '<span class="muted">—</span>' : '<span class="tabular">' + esc(num0(r.rides)) + '</span>';
    }

    const table = rows.length ? CWA.ui.table(rows, [
      { labelKey: 'common.chapter', render: function (r) { return '<span class="medium">' + esc(r.name) + '</span>'; } },
      { labelKey: 'glob.ridesYtd', render: ridesCell },
      { labelKey: 'glob.pilots', render: function (r) { return '<span class="tabular">' + esc(num0(r.pilots)) + '</span>'; } },
      { labelKey: 'common.status', render: function (r) { return chapterBadge(r.status); } },
      { labelKey: '', render: function (r) { return chapterAction(r, false); } }
    ], function (r) {
      return '<div class="between wrap"><div><div class="medium">' + esc(r.name) + '</div>' +
        '<div class="small muted">' + ridesCell(r) + ' ' + esc(t('common.rides')) + ' · ' + esc(num0(r.pilots) + ' ' + t('glob.pilots')) + '</div></div>' +
        '<div class="stack-sm">' + chapterBadge(r.status) + chapterAction(r, true) + '</div></div>';
    }, function () { return ''; }) : '<div class="card">' + emptyState('flag', t('glob.noChapters')) + '</div>';

    setView(
      '<div class="stack-lg">' +
      '<div class="between wrap"><div class="row-lg">' +
      '<button type="button" class="icon-btn" data-nav="#countries" aria-label="' + esc(t('common.back')) + '">' + icon('arrowLeft') + '</button>' +
      '<span style="font-size:2rem">' + esc(c.flag) + '</span>' +
      '<h1 class="h1">' + esc(c.name) + '</h1></div>' +
      addBtn('ch-new', t('glob.addChapter')) + '</div>' +
      '<div class="grid-3">' +
      statTile('glob.chapters', num0(countryChapters(d, c))) +
      statTile('glob.pilots', num0(c.pilots)) +
      statTile('glob.rides', num0(c.stats.rides)) +
      '</div>' +
      '<div><h2 class="h2 mb-4">' + esc(t('glob.chapters')) + '</h2>' + table + '</div>' +
      '</div>'
    );

    qs('#ch-new').addEventListener('click', function () { openChapterWizard(id); });

    qsa('[data-activate]', qs('#view')).forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.stopPropagation();
        activated[el.getAttribute('data-activate')] = true;
        CWA.ui.toast(t('glob.welcomeSent'));
        CWA.render();
      });
    });
    qsa('[data-activate-ch]', qs('#view')).forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.stopPropagation();
        const cid = el.getAttribute('data-activate-ch');
        store.update(function (db) {
          const chp = store.find(db.chapters, cid);
          if (chp) delete chp.awaitingActivation;
        });
        CWA.ui.toast(t('glob.welcomeSent'));
      });
    });
    qsa('[data-open-chapter]', qs('#view')).forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.stopPropagation();
        localStorage.setItem('cwa.adminRole', 'chapter');
        CWA.renderShell();
        CWA.nav('#dashboard');
      });
    });
  }

  /* ---- chapter setup wizard: name & city → contact → review ---- */
  function openChapterWizard(countryId) {
    const w = { name: '', city: '', contact: '', email: '' };
    let step = 0;
    const m = CWA.ui.modal('<div id="ch-wiz"></div>' + CWA.ui.addressDatalist());
    const box = qs('#ch-wiz', m.el);

    function render() {
      if (step === 0) {
        box.innerHTML = modalHead(t('glob.addChapter')) + dots(3, 0) +
          '<h4 class="h2 mb-4">' + esc(t('glob.wName')) + '</h4>' +
          '<div class="stack">' +
          inputField('cw-name', t('glob.chapterName'), { value: w.name }) +
          addrField('cw-city', t('glob.cityLabel'), w.city) +
          '<div id="cw-map"></div>' +
          '<button type="button" class="btn btn-primary btn-block" id="cw-next0">' + esc(t('common.next')) + '</button>' +
          '</div>';
      } else if (step === 1) {
        box.innerHTML = modalHead(t('glob.addChapter')) + dots(3, 1) +
          '<h4 class="h2 mb-4">' + esc(t('glob.wContact')) + '</h4>' +
          '<div class="stack">' +
          inputField('cw-contact', t('admin.col.name'), { value: w.contact }) +
          inputField('cw-email', t('glob.contactEmail'), { type: 'email', value: w.email, placeholder: 'name@example.org' }) +
          '<div class="alert alert-sky">' + icon('info') + '<div>' + esc(t('glob.contactInfo')) + '</div></div>' +
          '<div class="between"><button type="button" class="btn btn-ghost" id="cw-back1">' + esc(t('common.back')) + '</button>' +
          '<button type="button" class="btn btn-primary" id="cw-next1">' + esc(t('common.next')) + '</button></div>' +
          '</div>';
      } else {
        box.innerHTML = modalHead(t('glob.addChapter')) + dots(3, 2) +
          '<h4 class="h2 mb-4">' + esc(t('glob.wReview')) + '</h4>' +
          '<div class="card"><div class="detail-list">' +
          '<div><dt>' + esc(t('glob.chapterName')) + '</dt><dd>' + esc(w.name) + '</dd></div>' +
          '<div><dt>' + esc(t('glob.cityLabel')) + '</dt><dd>' + esc(w.city) + '</dd></div>' +
          '<div><dt>' + esc(t('admin.par.contactName')) + '</dt><dd>' + esc(w.contact) + '</dd></div>' +
          '<div><dt>' + esc(t('glob.contactEmail')) + '</dt><dd>' + esc(w.email) + '</dd></div>' +
          '<div><dt>' + esc(t('common.status')) + '</dt><dd>' + chapterBadge('awaiting') + '</dd></div>' +
          '</div></div>' +
          '<div class="between mt-4"><button type="button" class="btn btn-ghost" id="cw-back2">' + esc(t('common.back')) + '</button>' +
          '<button type="button" class="btn btn-primary" id="cw-create">' + icon('sparkles') + esc(t('glob.createChapter')) + '</button></div>';
      }
      wire();
    }

    function wire() {
      wireClose(box, m);
      const n0 = qs('#cw-next0', box);
      if (n0) {
        wireMapPreview(box, 'cw-city', 'cw-map');
        n0.addEventListener('click', function () {
          const nameEl = qs('#cw-name', box);
          w.name = nameEl.value.trim();
          w.city = qs('#cw-city', box).value.trim();
          if (!w.name) { nameEl.focus(); return; }
          step = 1;
          render();
        });
      }
      const b1 = qs('#cw-back1', box);
      if (b1) b1.addEventListener('click', function () { step = 0; render(); });
      const n1 = qs('#cw-next1', box);
      if (n1) n1.addEventListener('click', function () {
        const cEl = qs('#cw-contact', box);
        w.contact = cEl.value.trim();
        w.email = qs('#cw-email', box).value.trim();
        if (!w.contact) { cEl.focus(); return; }
        step = 2;
        render();
      });
      const b2 = qs('#cw-back2', box);
      if (b2) b2.addEventListener('click', function () { step = 1; render(); });
      const create = qs('#cw-create', box);
      if (create) create.addEventListener('click', function () {
        const name = w.name;
        m.close();
        store.update(function (db) {
          db.chapters.push({
            id: store.uid('ch'), name: name, country: countryId,
            leadTimeHours: 48, autoSchedule: true, operatingDays: [1, 2, 3, 4, 5, 6],
            openHour: 9, closeHour: 18, phone: '', address: w.city,
            contactName: w.contact, contactEmail: w.email,
            awaitingActivation: true, createdAt: Date.now()
          });
        });
        CWA.ui.toast(t('glob.chapterAdded', { name: name }));
      });
    }

    render();
  }

  /* ==================================================== global role: reports */
  const rep = { period: 'quarter', scope: 'global', generated: false };
  const PERIODS = [['quarter', 'glob.pQuarter'], ['year', 'glob.pYear'], ['last12', 'glob.p12']];
  const SCOPES = [['global', 'glob.sGlobal'], ['de', 'glob.sGermany'], ['muc', 'glob.sMuc']];
  function periodKey() { return PERIODS.filter(function (p) { return p[0] === rep.period; })[0][1]; }
  function scopeKey() { return SCOPES.filter(function (s) { return s[0] === rep.scope; })[0][1]; }

  function reportData(d) {
    /* ponytail: period factor is a flat mock ratio — a real backend would query by date range */
    const f = { quarter: 0.24, year: 0.62, last12: 1 }[rep.period];
    if (rep.scope === 'muc') {
      const doneRides = d.rides.filter(function (r) { return r.chapterId === CH && r.status === 'done'; });
      const hours = Math.round(doneRides.reduce(function (a, r) { return a + (r.durationMin || 60); }, 0) / 60);
      const don = doneRides.reduce(function (a, r) { return a + ((r.debrief && r.debrief.donation) || 0); }, 0);
      return { rides: doneRides.length, hours: hours, vols: myPilots(d).length, pax: Math.round(doneRides.length * 1.4), don: don, chapters: 1, countries: 1 };
    }
    if (rep.scope === 'de') {
      const c = store.find(d.countries, 'de');
      const rides = Math.round((c.stats.rides + mucDone(d)) * f);
      return { rides: rides, hours: Math.round(c.stats.hours * f), vols: c.pilots, pax: Math.round(rides * 1.4), don: Math.round(71500 * f), chapters: countryChapters(d, c), countries: 1 };
    }
    const total = sumC(d, function (c) { return c.stats.rides; }) + mucDone(d);
    const rides = Math.round(total * f);
    return {
      rides: rides,
      hours: Math.round(sumC(d, function (c) { return c.stats.hours; }) * f),
      vols: sumC(d, function (c) { return c.pilots; }),
      pax: Math.round(rides * 1.4),
      don: Math.round(412000 * f),
      chapters: sumC(d, function (c) { return countryChapters(d, c); }),
      countries: d.countries.length + 36
    };
  }

  function vReports() {
    if (!isSuper()) { CWA.nav('#dashboard'); return; }
    const d = D();
    crumb(t('glob.reports'));

    let html =
      '<div class="stack-lg">' +
      '<h1 class="h1">' + esc(t('glob.reports')) + '</h1>' +
      '<div class="card stack">' +
      '<div class="row"><div class="icon-tile icon-tile-sm">' + icon('clipboard') + '</div>' +
      '<div><div class="h2">' + esc(t('glob.reportsTitle')) + '</div>' +
      '<div class="small muted">' + esc(t('glob.reportsHint')) + '</div></div></div>' +
      selectField('rep-period', t('glob.period'), PERIODS.map(function (p) {
        return '<option value="' + p[0] + '"' + (rep.period === p[0] ? ' selected' : '') + '>' + esc(t(p[1])) + '</option>';
      }).join('')) +
      '<div class="field"><span class="label">' + esc(t('glob.scope')) + '</span>' +
      '<div class="row wrap">' + SCOPES.map(function (s) {
        return '<button type="button" class="chip' + (rep.scope === s[0] ? ' active' : '') + '" data-scope="' + s[0] + '">' + esc(t(s[1])) + '</button>';
      }).join('') + '</div></div>' +
      '<div><button type="button" class="btn btn-primary" id="rep-gen">' + icon('sparkles') + esc(t('glob.generate')) + '</button></div>' +
      '</div>';

    if (rep.generated) {
      const rd = reportData(d);
      const rows = [
        ['glob.rides', num0(rd.rides)],
        ['glob.rideHours', num0(rd.hours)],
        ['glob.volunteers', num0(rd.vols)],
        ['glob.paxServed', num0(rd.pax)],
        ['glob.donations', fmt.euro(rd.don)],
        ['glob.chaptersActive', num0(rd.chapters)],
        ['glob.countries', num0(rd.countries)]
      ];
      html +=
        '<div class="card">' +
        '<div class="h2">' + esc(t('glob.reportTitle')) + '</div>' +
        '<div class="small muted mb-4">' + esc(t(periodKey())) + ' · ' + esc(t(scopeKey())) + '</div>' +
        '<div class="detail-list">' + rows.map(function (r) {
          return '<div><dt>' + esc(t(r[0])) + '</dt><dd class="tabular">' + esc(r[1]) + '</dd></div>';
        }).join('') + '</div>' +
        '<div class="between mt-4 wrap">' +
        '<span class="small muted grow">' + esc(t('glob.autoNote')) + '</span>' +
        '<button type="button" class="btn btn-outline" id="rep-export">' + icon('download') + esc(t('glob.export')) + '</button>' +
        '</div></div>';
    }
    setView(html + '</div>');

    qs('#rep-period').addEventListener('change', function () {
      rep.period = this.value;
      if (rep.generated) CWA.render();
    });
    qsa('[data-scope]', qs('#view')).forEach(function (b) {
      b.addEventListener('click', function () { rep.scope = b.getAttribute('data-scope'); CWA.render(); });
    });
    qs('#rep-gen').addEventListener('click', function () { rep.generated = true; CWA.render(); });
    const ex = qs('#rep-export');
    if (ex) ex.addEventListener('click', function () { CWA.ui.toast(t('glob.exported')); });
  }

  /* ================================================================ boot */
  const views = {
    dashboard: vDashboard,
    requests: vRequests,
    calendar: vCalendar,
    rides: vRides,
    events: vEvents,
    pilots: vPilots,
    training: vTraining,
    clients: vClients,
    partners: vPartners,
    chats: vChats,
    chat: vChat,
    resources: vResources,
    settings: vSettings,
    overview: vOverview,
    countries: vCountries,
    reports: vReports
  };

  CWA.renderShell();
  CWA.ui.startRouter(views, ROLES[role()].home);
  CWA.store.watch(['admin', 'global'], { persona: 'admin', icon: 'dashboard', appName: 'CWA Admin' });
})();
