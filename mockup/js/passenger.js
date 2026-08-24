/* Passenger app (senior mode, chapter München) — CWA v3.

   Logged out : welcome → passkey | phone → one-time code · sign-up wizard → animated onboarding
   Logged in  : home · book · booked · rides · ride · events · event · chats · chat · profile

   Structure note: pilot.js runs the identical shell (hero-head + app-body +
   floating tab dock) and the identical component vocabulary — the two apps are
   one design system with two vocabularies of copy. */

CWA.reg({
  en: {
    'pax.tab.home': 'Start',
    'pax.tab.rides': 'My rides',
    'pax.tab.chats': 'Messages',
    'pax.tab.profile': 'Profile',

    'pax.welcomeTitle': 'The wind in your hair. Again.',
    'pax.welcomeLine': 'Rides in the fresh air with friendly volunteers — booked in a few big, simple taps.',
    'pax.passkeyHint': 'No password. Your device knows it is you.',
    'pax.signupCta': 'I am new here',

    'pax.onb1.t': 'Fresh air, on your terms',
    'pax.onb1.b': 'Say when you would like to go out. A trained volunteer picks you up right at your door.',
    'pax.onb2.t': 'Five simple steps',
    'pax.onb2.b': 'A day, a time, a place. Big buttons, no small print, and you can change your mind at any point.',
    'pax.onb3.t': 'You always know who is coming',
    'pax.onb3.b': 'Your pilot says hello before the ride. Write to them whenever you like — or just pick up the phone.',
    'pax.onb4.t': 'That is everything',
    'pax.onb4.b': 'The München team is looking forward to meeting you. Shall we find your first ride?',

    'pax.yourName': 'Your name',
    'pax.address': 'Address',
    'pax.atHome': 'At home',
    'pax.su.q1': 'What is your name?',
    'pax.su.namePh': 'First and last name',
    'pax.su.phonePh': 'e.g. +49 89 555 1234',
    'pax.su.q2': 'Where do you live?',
    'pax.su.atHomeSub': 'We pick you up at your door',
    'pax.su.facility': 'In a care home or facility',
    'pax.su.facilitySub': 'We pick you up at the entrance',
    'pax.su.pickFacility': 'Which facility?',
    'pax.su.chapterFound': 'We found your local chapter',
    'pax.su.chapterHint': 'This team organises the rides in your neighbourhood.',
    'pax.su.q5': 'Create your passkey',
    'pax.su.passkeyLine': 'Your device remembers you — no password to keep.',
    'pax.su.createPasskey': 'Create passkey',

    'pax.heroNoRide': 'Where would you like to go?',
    'pax.heroNoRideSub': 'Tell us when and where. We take care of the rest.',
    'pax.pickupAt': 'We pick you up at {place}',
    'pax.pilotPicksYou': '{name} picks you up at {place}',
    'pax.bookSub': 'Takes about a minute',
    'pax.statRides': 'Rides together',
    'pax.statHours': 'Hours outside',
    'pax.statFirst': 'Your first ride is waiting',
    'pax.statFirstSub': 'Every ride is free — donations are welcome, never expected.',
    'pax.chapterPulse': 'rides in München this month',
    'pax.eventsTitle': 'Coming up near you',
    'pax.allEvents': 'All events',
    'pax.noEvents': 'No events planned right now — we will let you know.',
    'pax.eventReserved': 'Your seat is booked',

    'pax.seatsFree': '{free} of {total} seats free',
    'pax.reserveSeat': 'Reserve a seat',
    'pax.onList': 'You are on the list',
    'pax.eventFull': 'Fully booked',
    'pax.reservedToast': 'Your seat is reserved',
    'pax.eventGone': 'This event could not be found.',
    'pax.eventPilots': 'Your pilots on the day',
    'pax.cancelSeat': 'Cancel my seat',
    'pax.cancelSeatQ': 'Do you really want to give up your seat?',
    'pax.cancelSeatYes': 'Yes, cancel my seat',
    'pax.keepSeat': 'No, keep my seat',
    'pax.seatCancelledToast': 'Your seat has been cancelled',

    'pax.wa.title': 'Booking by WhatsApp',
    'pax.wa.body': 'You can also book by WhatsApp message — no app needed. Want to try?',
    'pax.wa.try': 'Try the WhatsApp bot',
    'pax.wa.keep': 'Keep using the app',
    'pax.wa.row': 'WhatsApp bot',

    'pax.noRides': 'You have no rides yet',
    'pax.noChats': 'No conversations yet',

    'pax.account': 'Account',
    'pax.myChapter': 'My chapter',
    'pax.editAccount': 'Your details',
    'pax.savedToast': 'Your details are saved',
    'pax.notifsHint': 'A message when your ride is confirmed.',
    'pax.notif.empty': 'No notifications for now',
    'pax.demoHome': 'Demo home',

    'pax.goodMorning': 'Good morning, {name}!',
    'pax.goodAfternoon': 'Good afternoon, {name}!',
    'pax.goodEvening': 'Good evening, {name}!',
    'pax.bookRide': 'Book a ride',
    'pax.nextRide': 'Your next ride',
    'pax.needHelp': 'Do you need help?',
    'pax.helpText': 'Call us. We are happy to help — a person answers.',
    'pax.bookAgain': 'Book again',
    'pax.bookAgainHint': 'Same route, new day',
    'pax.q1': 'What kind of ride would you like?',
    'pax.pleasureSub': 'A relaxing ride outside',
    'pax.errandSub': 'To the doctor, shop or hairdresser',
    'pax.q2': 'When would you like to ride?',
    'pax.pickDay': 'Pick a day',
    'pax.whatTime': 'What time of day?',
    'pax.q3pleasure': 'Where shall we pick you up?',
    'pax.q3errand': 'Where are we going?',
    'pax.destPh': 'e.g. doctor, shop or hairdresser',
    'pax.addStop': 'Add a stop',
    'pax.returnHint': 'We bring you back home',
    'pax.q4': 'Who is riding?',
    'pax.justMe': 'Just me',
    'pax.companion': 'Me and a companion',
    'pax.forSomeone': 'I am booking for someone else',
    'pax.proxyName': 'Who is the ride for?',
    'pax.proxyNamePh': 'First and last name',
    'pax.q5': 'Is everything correct?',
    'pax.sumPleasure': 'A pleasure ride {when}. We pick you up at {pickup}.',
    'pax.sumErrand': 'An errand ride {when} from {pickup} to {dest}.',
    'pax.sumReturn': 'Afterwards we bring you back home.',
    'pax.sumTwo': 'You bring a companion.',
    'pax.sumProxy': 'This ride is for {name}.',
    'pax.whenMorning': '{day} in the morning',
    'pax.whenAfternoon': '{day} in the afternoon',
    'pax.whenExact': '{day} at {time}',
    'pax.notesPh': 'Anything the pilot should know?',
    'pax.confirmBook': 'Yes, book this ride',
    'pax.toastBooked': 'Your ride is booked',
    'pax.bookedTitle': 'Your ride is booked!',
    'pax.requestedTitle': 'We got your request!',
    'pax.requestedText': 'We will call you to confirm the time.',
    'pax.whatNext': 'What happens next',
    'pax.next1': 'We find a friendly pilot for you',
    'pax.next2': 'You get a message as soon as everything is set',
    'pax.next3': 'The pilot picks you up at your door',
    'pax.backHome': 'Back to start',
    'pax.tlBooked': 'Booked',
    'pax.tlPilot': 'Pilot found',
    'pax.tlDay': 'Ride day',
    'pax.tlDone': 'Done',
    'pax.lookingPilot': 'We are looking for a pilot for you',
    'pax.yourPilot': 'Your pilot',
    'pax.lateCancelNote': 'Only call for last-minute changes, please.',
    'pax.cancelRide': 'Cancel this ride',
    'pax.cancelQ': 'Do you really want to cancel this ride?',
    'pax.cancelYes': 'Yes, cancel the ride',
    'pax.cancelKeep': 'No, keep the ride',
    'pax.cancelledToast': 'Your ride has been cancelled',
    'pax.cancelledInfo': 'This ride has been cancelled.',
    'pax.chatEmpty': 'Your pilot will appear here soon',
    'pax.rideGone': 'This ride could not be found.',
    'pax.flag.outside_hours': 'outside opening hours',
    'pax.flag.lead_time': 'very short notice'
  },

  de: {
    'pax.tab.home': 'Start',
    'pax.tab.rides': 'Meine Fahrten',
    'pax.tab.chats': 'Nachrichten',
    'pax.tab.profile': 'Profil',

    'pax.welcomeTitle': 'Der Wind in den Haaren. Wieder.',
    'pax.welcomeLine': 'Ausfahrten an der frischen Luft mit netten Ehrenamtlichen — in wenigen großen, einfachen Schritten gebucht.',
    'pax.passkeyHint': 'Kein Passwort. Ihr Gerät weiß, dass Sie es sind.',
    'pax.signupCta': 'Ich bin neu hier',

    'pax.onb1.t': 'Frische Luft, wann Sie mögen',
    'pax.onb1.b': 'Sagen Sie uns, wann Sie hinaus möchten. Eine geschulte ehrenamtliche Person holt Sie direkt an Ihrer Haustür ab.',
    'pax.onb2.t': 'Fünf einfache Schritte',
    'pax.onb2.b': 'Ein Tag, eine Uhrzeit, ein Ort. Große Schaltflächen, kein Kleingedrucktes — und Sie können es jederzeit ändern.',
    'pax.onb3.t': 'Sie wissen immer, wer kommt',
    'pax.onb3.b': 'Ihre Pilot·in meldet sich vor der Fahrt. Schreiben Sie ihr, wann immer Sie möchten — oder greifen Sie einfach zum Telefon.',
    'pax.onb4.t': 'Das war schon alles',
    'pax.onb4.b': 'Das Team in München freut sich auf Sie. Suchen wir Ihre erste Ausfahrt?',

    'pax.yourName': 'Ihr Name',
    'pax.address': 'Adresse',
    'pax.atHome': 'Zu Hause',
    'pax.su.q1': 'Wie heißen Sie?',
    'pax.su.namePh': 'Vor- und Nachname',
    'pax.su.phonePh': 'z. B. +49 89 555 1234',
    'pax.su.q2': 'Wo wohnen Sie?',
    'pax.su.atHomeSub': 'Wir holen Sie an Ihrer Haustür ab',
    'pax.su.facility': 'In einem Seniorenheim oder einer Einrichtung',
    'pax.su.facilitySub': 'Wir holen Sie am Eingang ab',
    'pax.su.pickFacility': 'Welche Einrichtung?',
    'pax.su.chapterFound': 'Wir haben Ihren Standort in der Nähe gefunden',
    'pax.su.chapterHint': 'Dieses Team organisiert die Fahrten in Ihrer Nachbarschaft.',
    'pax.su.q5': 'Erstellen Sie Ihren Passkey',
    'pax.su.passkeyLine': 'Ihr Gerät erkennt Sie wieder — Sie brauchen kein Passwort.',
    'pax.su.createPasskey': 'Passkey erstellen',

    'pax.heroNoRide': 'Wohin möchten Sie?',
    'pax.heroNoRideSub': 'Sagen Sie uns wann und wohin. Um alles andere kümmern wir uns.',
    'pax.pickupAt': 'Wir holen Sie hier ab: {place}',
    'pax.pilotPicksYou': '{name} holt Sie hier ab: {place}',
    'pax.bookSub': 'Dauert etwa eine Minute',
    'pax.statRides': 'Gemeinsame Fahrten',
    'pax.statHours': 'Stunden draußen',
    'pax.statFirst': 'Ihre erste Ausfahrt wartet',
    'pax.statFirstSub': 'Jede Fahrt ist kostenlos — Spenden sind willkommen, aber nie erwartet.',
    'pax.chapterPulse': 'Fahrten diesen Monat in München',
    'pax.eventsTitle': 'Demnächst in Ihrer Nähe',
    'pax.allEvents': 'Alle Events',
    'pax.noEvents': 'Gerade sind keine Events geplant — wir sagen Ihnen Bescheid.',
    'pax.eventReserved': 'Ihr Platz ist gebucht',

    'pax.seatsFree': '{free} von {total} Plätzen frei',
    'pax.reserveSeat': 'Platz reservieren',
    'pax.onList': 'Sie sind angemeldet',
    'pax.eventFull': 'Ausgebucht',
    'pax.reservedToast': 'Ihr Platz ist reserviert',
    'pax.eventGone': 'Dieses Event wurde nicht gefunden.',
    'pax.eventPilots': 'Ihre Pilot·innen an dem Tag',
    'pax.cancelSeat': 'Platz stornieren',
    'pax.cancelSeatQ': 'Möchten Sie Ihren Platz wirklich aufgeben?',
    'pax.cancelSeatYes': 'Ja, Platz stornieren',
    'pax.keepSeat': 'Nein, Platz behalten',
    'pax.seatCancelledToast': 'Ihr Platz wurde storniert',

    'pax.wa.title': 'Buchen per WhatsApp',
    'pax.wa.body': 'Sie können auch per WhatsApp-Nachricht buchen — ohne App. Möchten Sie es ausprobieren?',
    'pax.wa.try': 'WhatsApp-Bot ausprobieren',
    'pax.wa.keep': 'Weiter in der App',
    'pax.wa.row': 'WhatsApp-Bot',

    'pax.noRides': 'Sie haben noch keine Fahrten',
    'pax.noChats': 'Noch keine Unterhaltungen',

    'pax.account': 'Konto',
    'pax.myChapter': 'Mein Standort',
    'pax.editAccount': 'Ihre Angaben',
    'pax.savedToast': 'Ihre Angaben sind gespeichert',
    'pax.notifsHint': 'Eine Nachricht, wenn Ihre Fahrt bestätigt ist.',
    'pax.notif.empty': 'Im Moment keine Benachrichtigungen',
    'pax.demoHome': 'Demo-Startseite',

    'pax.goodMorning': 'Guten Morgen, {name}!',
    'pax.goodAfternoon': 'Guten Tag, {name}!',
    'pax.goodEvening': 'Guten Abend, {name}!',
    'pax.bookRide': 'Fahrt buchen',
    'pax.nextRide': 'Ihre nächste Fahrt',
    'pax.needHelp': 'Brauchen Sie Hilfe?',
    'pax.helpText': 'Rufen Sie uns an. Wir helfen Ihnen gerne — es geht ein Mensch ran.',
    'pax.bookAgain': 'Erneut buchen',
    'pax.bookAgainHint': 'Gleiche Strecke, neuer Tag',
    'pax.q1': 'Welche Fahrt möchten Sie machen?',
    'pax.pleasureSub': 'Eine entspannte Fahrt an der frischen Luft',
    'pax.errandSub': 'Zum Arzt, zum Einkaufen oder zum Friseur',
    'pax.q2': 'Wann möchten Sie fahren?',
    'pax.pickDay': 'Tag auswählen',
    'pax.whatTime': 'Zu welcher Tageszeit?',
    'pax.q3pleasure': 'Wo dürfen wir Sie abholen?',
    'pax.q3errand': 'Wohin soll es gehen?',
    'pax.destPh': 'z. B. Arzt, Geschäft oder Friseur',
    'pax.addStop': 'Zwischenstopp hinzufügen',
    'pax.returnHint': 'Wir bringen Sie wieder nach Hause',
    'pax.q4': 'Wer fährt mit?',
    'pax.justMe': 'Nur ich',
    'pax.companion': 'Ich und eine Begleitung',
    'pax.forSomeone': 'Ich buche für jemand anderen',
    'pax.proxyName': 'Für wen ist die Fahrt?',
    'pax.proxyNamePh': 'Vor- und Nachname',
    'pax.q5': 'Stimmt alles so?',
    'pax.sumPleasure': 'Eine Ausfahrt {when}. Wir holen Sie hier ab: {pickup}.',
    'pax.sumErrand': 'Eine Besorgungsfahrt {when} von {pickup} nach {dest}.',
    'pax.sumReturn': 'Danach bringen wir Sie wieder nach Hause.',
    'pax.sumTwo': 'Sie nehmen eine Begleitung mit.',
    'pax.sumProxy': 'Diese Fahrt ist für {name}.',
    'pax.whenMorning': '{day} am Vormittag',
    'pax.whenAfternoon': '{day} am Nachmittag',
    'pax.whenExact': '{day} um {time} Uhr',
    'pax.notesPh': 'Gibt es etwas, das Ihre Pilot·in wissen sollte?',
    'pax.confirmBook': 'Ja, diese Fahrt buchen',
    'pax.toastBooked': 'Ihre Fahrt ist gebucht',
    'pax.bookedTitle': 'Ihre Fahrt ist gebucht!',
    'pax.requestedTitle': 'Wir haben Ihre Anfrage erhalten!',
    'pax.requestedText': 'Wir rufen Sie an, um die Uhrzeit zu bestätigen.',
    'pax.whatNext': 'So geht es weiter',
    'pax.next1': 'Wir finden eine nette Pilot·in für Sie',
    'pax.next2': 'Sie bekommen eine Nachricht, sobald alles feststeht',
    'pax.next3': 'Ihre Pilot·in holt Sie an Ihrer Haustür ab',
    'pax.backHome': 'Zur Startseite',
    'pax.tlBooked': 'Gebucht',
    'pax.tlPilot': 'Pilot·in gefunden',
    'pax.tlDay': 'Fahrttag',
    'pax.tlDone': 'Abgeschlossen',
    'pax.lookingPilot': 'Wir suchen eine Pilot·in für Sie',
    'pax.yourPilot': 'Ihre Pilot·in',
    'pax.lateCancelNote': 'Bitte rufen Sie nur bei kurzfristigen Änderungen an.',
    'pax.cancelRide': 'Fahrt absagen',
    'pax.cancelQ': 'Möchten Sie diese Fahrt wirklich absagen?',
    'pax.cancelYes': 'Ja, Fahrt absagen',
    'pax.cancelKeep': 'Nein, Fahrt behalten',
    'pax.cancelledToast': 'Ihre Fahrt wurde abgesagt',
    'pax.cancelledInfo': 'Diese Fahrt wurde abgesagt.',
    'pax.chatEmpty': 'Ihre Pilot·in erscheint hier bald',
    'pax.rideGone': 'Diese Fahrt wurde nicht gefunden.',
    'pax.flag.outside_hours': 'außerhalb der Öffnungszeiten',
    'pax.flag.lead_time': 'sehr kurzfristig'
  },

  da: {
    'pax.tab.home': 'Start',
    'pax.tab.rides': 'Mine ture',
    'pax.tab.chats': 'Beskeder',
    'pax.tab.profile': 'Profil',

    'pax.welcomeTitle': 'Vinden i håret. Igen.',
    'pax.welcomeLine': 'Ture i det fri med venlige frivillige — booket med få store, enkle tryk.',
    'pax.passkeyHint': 'Ingen adgangskode. Din enhed ved, at det er dig.',
    'pax.signupCta': 'Jeg er ny her',

    'pax.onb1.t': 'Frisk luft, når du vil',
    'pax.onb1.b': 'Sig hvornår du gerne vil ud. En trænet frivillig henter dig lige uden for din dør.',
    'pax.onb2.t': 'Fem enkle trin',
    'pax.onb2.b': 'En dag, et tidspunkt, et sted. Store knapper, ingen småtekst — og du kan altid ombestemme dig.',
    'pax.onb3.t': 'Du ved altid, hvem der kommer',
    'pax.onb3.b': 'Din pilot siger hej inden turen. Skriv til vedkommende, når du vil — eller tag bare telefonen.',
    'pax.onb4.t': 'Det var det hele',
    'pax.onb4.b': 'Teamet i München glæder sig til at møde dig. Skal vi finde din første tur?',

    'pax.yourName': 'Dit navn',
    'pax.address': 'Adresse',
    'pax.atHome': 'Hjemme',
    'pax.su.q1': 'Hvad hedder du?',
    'pax.su.namePh': 'Fornavn og efternavn',
    'pax.su.phonePh': 'f.eks. +45 26 86 39 34',
    'pax.su.q2': 'Hvor bor du?',
    'pax.su.atHomeSub': 'Vi henter dig ved din dør',
    'pax.su.facility': 'På et plejehjem eller en institution',
    'pax.su.facilitySub': 'Vi henter dig ved indgangen',
    'pax.su.pickFacility': 'Hvilken institution?',
    'pax.su.chapterFound': 'Vi har fundet din lokale afdeling',
    'pax.su.chapterHint': 'Dette team organiserer turene i dit område.',
    'pax.su.q5': 'Opret din passkey',
    'pax.su.passkeyLine': 'Din enhed husker dig — ingen adgangskode.',
    'pax.su.createPasskey': 'Opret passkey',

    'pax.heroNoRide': 'Hvor vil du gerne hen?',
    'pax.heroNoRideSub': 'Sig hvornår og hvorhen. Vi klarer resten.',
    'pax.pickupAt': 'Vi henter dig her: {place}',
    'pax.pilotPicksYou': '{name} henter dig her: {place}',
    'pax.bookSub': 'Tager omkring et minut',
    'pax.statRides': 'Ture sammen',
    'pax.statHours': 'Timer udenfor',
    'pax.statFirst': 'Din første tur venter',
    'pax.statFirstSub': 'Alle ture er gratis — donationer er velkomne, men aldrig forventede.',
    'pax.chapterPulse': 'ture i München denne måned',
    'pax.eventsTitle': 'På vej i nærheden',
    'pax.allEvents': 'Alle events',
    'pax.noEvents': 'Ingen events planlagt lige nu — vi siger til.',
    'pax.eventReserved': 'Din plads er booket',

    'pax.seatsFree': '{free} af {total} pladser fri',
    'pax.reserveSeat': 'Reserver en plads',
    'pax.onList': 'Du er på listen',
    'pax.eventFull': 'Fuldt booket',
    'pax.reservedToast': 'Din plads er reserveret',
    'pax.eventGone': 'Dette event kunne ikke findes.',
    'pax.eventPilots': 'Dine piloter på dagen',
    'pax.cancelSeat': 'Aflys min plads',
    'pax.cancelSeatQ': 'Vil du virkelig give afkald på din plads?',
    'pax.cancelSeatYes': 'Ja, aflys min plads',
    'pax.keepSeat': 'Nej, behold min plads',
    'pax.seatCancelledToast': 'Din plads er aflyst',

    'pax.wa.title': 'Book via WhatsApp',
    'pax.wa.body': 'Du kan også booke med en WhatsApp-besked — uden app. Vil du prøve?',
    'pax.wa.try': 'Prøv WhatsApp-botten',
    'pax.wa.keep': 'Fortsæt i appen',
    'pax.wa.row': 'WhatsApp-bot',

    'pax.noRides': 'Du har endnu ingen ture',
    'pax.noChats': 'Ingen samtaler endnu',

    'pax.account': 'Konto',
    'pax.myChapter': 'Min afdeling',
    'pax.editAccount': 'Dine oplysninger',
    'pax.savedToast': 'Dine oplysninger er gemt',
    'pax.notifsHint': 'En besked når din tur er bekræftet.',
    'pax.notif.empty': 'Ingen notifikationer lige nu',
    'pax.demoHome': 'Demo-forside',

    'pax.goodMorning': 'Godmorgen, {name}!',
    'pax.goodAfternoon': 'Goddag, {name}!',
    'pax.goodEvening': 'Godaften, {name}!',
    'pax.bookRide': 'Book en tur',
    'pax.nextRide': 'Din næste tur',
    'pax.needHelp': 'Har du brug for hjælp?',
    'pax.helpText': 'Ring til os. Vi hjælper dig gerne — der sidder et menneske i den anden ende.',
    'pax.bookAgain': 'Book igen',
    'pax.bookAgainHint': 'Samme rute, ny dag',
    'pax.q1': 'Hvilken slags tur vil du på?',
    'pax.pleasureSub': 'En afslappende tur i det fri',
    'pax.errandSub': 'Til lægen, butikken eller frisøren',
    'pax.q2': 'Hvornår vil du på tur?',
    'pax.pickDay': 'Vælg en dag',
    'pax.whatTime': 'Hvornår på dagen?',
    'pax.q3pleasure': 'Hvor skal vi hente dig?',
    'pax.q3errand': 'Hvor skal vi hen?',
    'pax.destPh': 'f.eks. læge, butik eller frisør',
    'pax.addStop': 'Tilføj et stop',
    'pax.returnHint': 'Vi kører dig hjem igen',
    'pax.q4': 'Hvem skal med på turen?',
    'pax.justMe': 'Kun mig',
    'pax.companion': 'Mig og en ledsager',
    'pax.forSomeone': 'Jeg booker for en anden',
    'pax.proxyName': 'Hvem er turen til?',
    'pax.proxyNamePh': 'Fornavn og efternavn',
    'pax.q5': 'Er alt rigtigt?',
    'pax.sumPleasure': 'En hyggetur {when}. Vi henter dig her: {pickup}.',
    'pax.sumErrand': 'En ærindetur {when} fra {pickup} til {dest}.',
    'pax.sumReturn': 'Bagefter kører vi dig hjem igen.',
    'pax.sumTwo': 'Du tager en ledsager med.',
    'pax.sumProxy': 'Denne tur er til {name}.',
    'pax.whenMorning': '{day} om formiddagen',
    'pax.whenAfternoon': '{day} om eftermiddagen',
    'pax.whenExact': '{day} kl. {time}',
    'pax.notesPh': 'Er der noget, piloten skal vide?',
    'pax.confirmBook': 'Ja, book denne tur',
    'pax.toastBooked': 'Din tur er booket',
    'pax.bookedTitle': 'Din tur er booket!',
    'pax.requestedTitle': 'Vi har modtaget din forespørgsel!',
    'pax.requestedText': 'Vi ringer til dig for at bekræfte tidspunktet.',
    'pax.whatNext': 'Hvad sker der nu',
    'pax.next1': 'Vi finder en venlig pilot til dig',
    'pax.next2': 'Du får besked, så snart alt er på plads',
    'pax.next3': 'Piloten henter dig ved din dør',
    'pax.backHome': 'Tilbage til start',
    'pax.tlBooked': 'Booket',
    'pax.tlPilot': 'Pilot fundet',
    'pax.tlDay': 'Turdag',
    'pax.tlDone': 'Gennemført',
    'pax.lookingPilot': 'Vi leder efter en pilot til dig',
    'pax.yourPilot': 'Din pilot',
    'pax.lateCancelNote': 'Ring kun ved ændringer i sidste øjeblik.',
    'pax.cancelRide': 'Aflys turen',
    'pax.cancelQ': 'Vil du aflyse denne tur?',
    'pax.cancelYes': 'Ja, aflys turen',
    'pax.cancelKeep': 'Nej, behold turen',
    'pax.cancelledToast': 'Din tur er aflyst',
    'pax.cancelledInfo': 'Denne tur er aflyst.',
    'pax.chatEmpty': 'Din pilot dukker snart op her',
    'pax.rideGone': 'Turen kunne ikke findes.',
    'pax.flag.outside_hours': 'uden for åbningstiden',
    'pax.flag.lead_time': 'med meget kort varsel'
  }
});

(function () {
  var esc = CWA.esc;
  var t = CWA.t;
  var find = CWA.store.find;
  var ui = CWA.ui;
  var art = CWA.art;

  var PERSONA = 'passenger';
  var WA_KEY = 'cwa.waSuggested';
  var NOTIF_KEY = 'cwa.pax.notifs';
  var DEMO = { userId: 'c1', name: 'Maria Huber', loggedIn: true };
  var DEMO_PHONE = '+49 89 555 2211';
  var DEMO_CODE = '4 7 2 9 1 3';

  function db() { return CWA.store.get(); }

  /* ----------------------------- mock session ----------------------------- */
  var session = CWA.auth.boot(PERSONA, DEMO);
  /* a signed-up account can vanish when the demo store re-seeds — fall back to the demo user */
  if (session && !find(db().clients, session.userId)) {
    localStorage.removeItem('cwa.auth.' + PERSONA);
    session = CWA.auth.boot(PERSONA, DEMO);
  }
  /* the golden path never sees onboarding; the launcher's "replay" link does */
  if (session && session.userId === DEMO.userId) CWA.auth.markOnboarded(PERSONA);

  function me(d) { return find(d.clients, session.userId); }

  /* -------------------------------- shell -------------------------------- */
  document.body.innerHTML = '<div class="app"><div id="view"></div></div><div id="tabbar-slot"></div>';
  var appEl = document.querySelector('.app');
  var viewEl = document.getElementById('view');

  var lastView = null;   // which view rendered last — resets wizard state on fresh entry
  var bs = null;         // booking wizard state
  var su = null;         // signup wizard state
  var chatTab = 'active';
  var chatFocus = false;
  var chromeless = false;
  var onbIdx = 0;        // survives re-renders (language switch mid-onboarding)

  /* Chat threads and the auth/onboarding screens need the full viewport height
     (scroll inside, input on the bottom edge) and no tab dock. */
  function setView(html, opts) {
    opts = opts || {};
    chromeless = !!(opts.chat || opts.full);
    appEl.style.height = chromeless ? '100dvh' : '';
    viewEl.style.display = opts.chat ? 'flex' : '';
    viewEl.style.flexDirection = opts.chat ? 'column' : '';
    viewEl.style.flex = opts.chat ? '1' : '';
    viewEl.style.minHeight = opts.chat ? '0' : '';
    viewEl.innerHTML = html;
    var bell = viewEl.querySelector('#bell-btn');
    if (bell) bell.addEventListener('click', notifModal);
    applyChrome();
    ui.bindStickyHead();
  }

  /* -------------------------- notifications sheet -------------------------- */
  var NOTIF_ICON = {
    'notif.pilotAssigned': 'bike', 'notif.scheduled': 'calendar',
    'notif.cancelled': 'x', 'notif.message': 'chat'
  };
  function myNotifs() {
    return db().notifications
      .filter(function (n) { return n.audience === 'client:' + session.userId; })
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
          '<div class="icon-tile icon-tile-sm on-mint">' + CWA.icon(NOTIF_ICON[n.tKey] || 'bell') + '</div>' +
          '<div class="grow"><div class="small semibold">' + esc(t(n.tKey + '.t', n.params)) + '</div>' +
          '<div class="tiny muted">' + esc(t(n.tKey + '.b', n.params)) + '</div></div>' +
          '<span class="tiny muted">' + esc(CWA.fmt.rel(n.ts)) + '</span></button>';
      }).join('') + '</div>'
      : '<div class="empty-state"><div class="icon-tile">' + CWA.icon('bell') + '</div>' +
      '<div>' + esc(t('pax.notif.empty')) + '</div></div>';

    ui.modal('<div class="stack">' +
      '<div class="between"><div class="h2">' + esc(t('common.notifications')) + '</div>' +
      '<button type="button" class="icon-btn" data-close aria-label="' + esc(t('common.close')) + '">' + CWA.icon('x') + '</button></div>' +
      body + '</div>');
  }
  function applyChrome() {
    var tb = document.querySelector('#tabbar-slot .tabbar');
    if (tb) tb.style.display = chromeless ? 'none' : '';
  }

  function myChats(d) {
    return d.chats.filter(function (c) {
      var r = find(d.rides, c.rideId);
      return !!r && r.clientId === session.userId;
    });
  }
  function lastMsg(c) { return c.messages[c.messages.length - 1]; }
  function isUnread(c) {
    var m = lastMsg(c);
    return !!m && m.from !== 'client' && m.from !== 'system';
  }
  function isActiveRide(r) { return r.status !== 'done' && r.status !== 'cancelled'; }

  /* Completed rides, most recent first, deduped by route — the shortlist
     offered by "Book again" so a repeat trip skips straight to picking a day. */
  function pastRideOptions(d) {
    var seen = {};
    return d.rides.filter(function (r) {
      return r.clientId === session.userId && r.status === 'done';
    }).sort(function (a, b) { return b.ts - a.ts; }).filter(function (r) {
      var key = r.type + '|' + r.pickup + '|' + (r.destination || '');
      if (seen[key]) return false;
      seen[key] = true;
      return true;
    }).slice(0, 3);
  }

  function anyUnread() {
    var d = db();
    return myChats(d).some(function (c) {
      return isActiveRide(find(d.rides, c.rideId)) && isUnread(c);
    });
  }

  function renderShell() {
    var slot = document.getElementById('tabbar-slot');
    if (!slot) return;
    if (!session) { slot.innerHTML = ''; return; }
    slot.innerHTML = ui.tabbar([
      { id: 'home', icon: 'home', labelKey: 'pax.tab.home' },
      { id: 'rides', icon: 'calendar', labelKey: 'pax.tab.rides' },
      { id: 'chats', icon: 'chat', labelKey: 'pax.tab.chats', dot: anyUnread() },
      { id: 'profile', icon: 'user', labelKey: 'pax.tab.profile' }
    ]);
    if (CWA.route) {
      slot.querySelectorAll('[data-tab]').forEach(function (b) {
        b.classList.toggle('active', b.getAttribute('data-tab') === CWA.route.name);
      });
    }
    applyChrome();
  }

  /* ---------------------------- small builders ---------------------------- */
  function isoToday() {
    var d = new Date();
    return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
  }

  function bigOpt(icon, title, hint, attrs, sel, tone) {
    return '<button type="button" class="big-option' + (sel ? ' selected' : '') + '" ' + attrs + '>' +
      '<div class="icon-tile on-' + (tone || 'sun') + '">' + CWA.icon(icon) + '</div>' +
      '<div class="grow"><div>' + esc(title) + '</div>' +
      (hint ? '<div class="hint">' + esc(hint) + '</div>' : '') + '</div>' +
      (sel ? '<span class="text-emerald">' + CWA.icon('check') + '</span>' : '') + '</button>';
  }

  function chip(label, attrs, sel, icon) {
    return '<button type="button" class="chip' + (sel ? ' active' : '') + '" ' + attrs + '>' +
      (icon ? CWA.icon(icon) : '') + esc(label) + '</button>';
  }

  function dots(step, total) {
    var out = '<div class="progress-dots">';
    for (var i = 1; i <= total; i++) out += '<span class="' + (i < step ? 'done' : i === step ? 'current' : '') + '"></span>';
    return out + '</div>';
  }

  function heroBtn(id, label, sub, icon, cls) {
    return '<button type="button" class="btn-hero ' + (cls || '') + '" ' + id + '>' +
      '<span class="grow">' + esc(label) +
      (sub ? '<span class="btn-hero-sub">' + esc(sub) + '</span>' : '') + '</span>' +
      '<span class="btn-hero-knob">' + CWA.icon(icon || 'arrowRight') + '</span></button>';
  }

  function wizHeader(title, sub) {
    /* wizard back steps backwards instead of navigating, so this header is hand-built */
    return ui.backHead({ backAction: 'wiz-back', title: esc(title), sub: sub ? esc(sub) : '' });
  }

  function notFound(msgKey, back) {
    setView(ui.backHead({ back: back || '#home', title: esc(t('brand')) }) +
      '<div class="app-body"><div class="empty-state"><div class="icon-tile">' + CWA.icon('search') + '</div>' +
      '<div>' + esc(t(msgKey || 'pax.rideGone')) + '</div>' +
      '<button type="button" class="btn btn-primary" data-nav="#home">' + esc(t('pax.backHome')) + '</button>' +
      '</div></div>');
  }

  /* ======================= auth: welcome / phone / code ==================== */
  var authFlow = CWA.auth.loginFlow({
    persona: PERSONA,
    art: 'wind',
    titleKey: 'pax.welcomeTitle',
    subKey: 'pax.welcomeLine',
    passkeyHintKey: 'pax.passkeyHint',
    signupHash: '#signup',
    signupKey: 'pax.signupCta',
    phone: DEMO_PHONE,
    code: DEMO_CODE,
    root: function () { return viewEl; },
    setHtml: function (html) { setView(html, { full: true }); },
    onLogin: function () {
      CWA.auth.save(PERSONA, DEMO);
      location.hash = CWA.auth.onboarded(PERSONA) ? '#home' : '#onboarding';
      location.reload();
    }
  });

  /* ============================== #onboarding ============================= */
  function onboardingView() {
    lastView = 'onboarding';
    /* rebuilt on every entry so a language switch mid-flow is picked up */
    var onb = CWA.auth.onboarding({
      persona: PERSONA,
      slides: [
        { art: 'wind', title: t('pax.onb1.t'), body: t('pax.onb1.b') },
        { art: 'calendar', title: t('pax.onb2.t'), body: t('pax.onb2.b') },
        { art: 'chat', title: t('pax.onb3.t'), body: t('pax.onb3.b') },
        { art: 'celebrate', title: t('pax.onb4.t'), body: t('pax.onb4.b') }
      ],
      start: onbIdx,
      onIndex: function (n) { onbIdx = n; },
      root: function () { return viewEl; },
      setHtml: function (html) { setView(html, { full: true }); },
      onDone: function () { CWA.nav('#home'); }
    });
    onb.render();
  }

  /* ================================ #signup ================================ */
  function signup() {
    if (lastView !== 'signup' || !su) {
      su = { step: 1, name: '', phone: '', where: null, address: '', partnerId: null, waiver: false };
    }
    lastView = 'signup';
    var s = su;
    var d = db();
    var chapter = find(d.chapters, 'muc');

    function stepOk() {
      if (s.step === 1) return !!(s.name.trim() && s.phone.trim());
      if (s.step === 2) return s.where === 'facility' ? !!s.partnerId : !!(s.where === 'home' && s.address.trim().length >= 4);
      if (s.step === 4) return s.waiver;
      return true;
    }
    function nextBtn() {
      return '<button type="button" class="btn-hero" id="su-next"' + (stepOk() ? '' : ' disabled') + '>' +
        '<span class="grow">' + esc(t('common.next')) + '</span>' +
        '<span class="btn-hero-knob">' + CWA.icon('arrowRight') + '</span></button>';
    }

    var body = '';
    if (s.step === 1) {
      body =
        '<div class="wizard-question display display-sm">' + esc(t('pax.su.q1')) + '</div>' +
        '<div class="field"><label class="label" for="su-name">' + esc(t('pax.yourName')) + '</label>' +
        '<input type="text" class="input" id="su-name" value="' + esc(s.name) + '" placeholder="' + esc(t('pax.su.namePh')) + '"></div>' +
        '<div class="field"><label class="label" for="su-phone">' + esc(t('common.phone')) + '</label>' +
        '<input type="tel" class="input" id="su-phone" value="' + esc(s.phone) + '" placeholder="' + esc(t('pax.su.phonePh')) + '"></div>' +
        nextBtn();
    } else if (s.step === 2) {
      body =
        '<div class="wizard-question display display-sm">' + esc(t('pax.su.q2')) + '</div>' +
        '<div class="stack">' +
        bigOpt('home', t('pax.atHome'), t('pax.su.atHomeSub'), 'data-where="home"', s.where === 'home', 'mint') +
        bigOpt('building', t('pax.su.facility'), t('pax.su.facilitySub'), 'data-where="facility"', s.where === 'facility', 'lav') +
        '</div>' +
        (s.where === 'home' ?
          '<div class="field"><label class="label" for="su-address">' + esc(t('pax.address')) + '</label>' +
          '<input type="text" class="input" id="su-address" list="cwa-addresses" value="' + esc(s.address) + '"></div>' +
          ui.addressDatalist() +
          '<div id="su-map">' + (s.address.trim().length >= 4 ? ui.mapEmbed(s.address.trim(), { small: true }) : '') + '</div>' +
          nextBtn() : '') +
        (s.where === 'facility' ?
          '<div class="label">' + esc(t('pax.su.pickFacility')) + '</div>' +
          '<div class="stack">' + d.partners.map(function (p) {
            return bigOpt('armchair', p.name, p.address, 'data-partner="' + esc(p.id) + '"', s.partnerId === p.id, 'peach');
          }).join('') + '</div>' +
          nextBtn() : '');
    } else if (s.step === 3) {
      body =
        '<div class="wizard-question display display-sm">' + esc(t('pax.su.chapterFound')) + '</div>' +
        '<div class="tile tile-mint stack">' +
        '<div class="row"><div class="icon-tile on-ink">' + CWA.icon('mapPin') + '</div>' +
        '<div class="grow"><div class="tile-value" style="font-size:1.375rem">' + esc(chapter.name) + '</div>' +
        '<div class="tile-label">' + esc(chapter.phone) + '</div></div></div>' +
        '<div class="small">' + esc(t('pax.su.chapterHint')) + '</div>' +
        '</div>' +
        ui.mapEmbed(s.partnerId ? (find(d.partners, s.partnerId) || {}).address : s.address, { small: true }) +
        nextBtn();
    } else if (s.step === 4) {
      body =
        '<div class="wizard-question display display-sm">' + esc(t('waiver.title')) + '</div>' +
        '<label class="check-row' + (s.waiver ? ' checked' : '') + '" id="su-waiver-row">' +
        '<input type="checkbox" id="su-waiver"' + (s.waiver ? ' checked' : '') + '>' +
        '<span>' + esc(t('waiver.text')) + '</span></label>' +
        nextBtn();
    } else {
      body =
        '<div class="wizard-question display display-sm">' + esc(t('pax.su.q5')) + '</div>' +
        '<div class="stack center"><div class="passkey-orb">' + CWA.icon('key') + '</div>' +
        '<div class="hint" id="su-pk-hint">' + esc(t('pax.su.passkeyLine')) + '</div></div>' +
        heroBtn('id="su-create"', t('pax.su.createPasskey'), '', 'key');
    }

    setView(wizHeader(t('auth.signup')) + '<div class="app-body stack-lg" style="padding-bottom:2.5rem">' +
      dots(s.step, 5) + body + '</div>', { full: true });

    viewEl.querySelector('#wiz-back').addEventListener('click', function () {
      if (s.step > 1) { s.step--; CWA.render(); } else { su = null; CWA.nav('#welcome'); }
    });
    viewEl.querySelectorAll('[data-where]').forEach(function (b) {
      b.addEventListener('click', function () {
        s.where = b.getAttribute('data-where');
        if (s.where === 'home') s.partnerId = null; else s.address = '';
        CWA.render();
      });
    });
    viewEl.querySelectorAll('[data-partner]').forEach(function (b) {
      b.addEventListener('click', function () { s.partnerId = b.getAttribute('data-partner'); CWA.render(); });
    });

    function syncNext() {
      var nb = viewEl.querySelector('#su-next');
      if (nb) nb.disabled = !stepOk();
    }
    function bind(sel, fn) {
      var el = viewEl.querySelector(sel);
      if (el) el.addEventListener('input', function () { fn(el.value); syncNext(); });
    }
    bind('#su-name', function (v) { s.name = v; });
    bind('#su-phone', function (v) { s.phone = v; });

    var mapTimer = null;
    bind('#su-address', function (v) {
      s.address = v;
      clearTimeout(mapTimer);
      mapTimer = setTimeout(function () {
        var box = viewEl.querySelector('#su-map');
        if (box) box.innerHTML = s.address.trim().length >= 4 ? ui.mapEmbed(s.address.trim(), { small: true }) : '';
      }, 400);
    });

    var wv = viewEl.querySelector('#su-waiver');
    if (wv) wv.addEventListener('change', function () {
      s.waiver = wv.checked;
      viewEl.querySelector('#su-waiver-row').classList.toggle('checked', s.waiver);
      syncNext();
    });

    var nb = viewEl.querySelector('#su-next');
    if (nb) nb.addEventListener('click', function () { s.step++; CWA.render(); });

    var create = viewEl.querySelector('#su-create');
    if (create) create.addEventListener('click', function () {
      create.disabled = true;
      viewEl.querySelector('#su-pk-hint').textContent = t('auth.verifying');
      viewEl.querySelector('.passkey-orb').classList.add('ok');
      viewEl.querySelector('.passkey-orb').innerHTML = CWA.icon('check');
      setTimeout(createAccount, 1400);
    });
  }

  function createAccount() {
    var sess = null;
    CWA.store.update(function (d) {
      var partner = su.partnerId ? find(d.partners, su.partnerId) : null;
      var c = {
        id: CWA.store.uid('c'),
        name: su.name.trim(),
        phone: su.phone.trim(),
        address: partner ? partner.name : su.address.trim(),
        mobilityNotes: '',
        waiverSigned: true,
        proxy: null
      };
      if (partner) c.partnerId = partner.id;
      d.clients.push(c);
      sess = { userId: c.id, name: c.name, loggedIn: true };
    });
    su = null;
    CWA.auth.save(PERSONA, sess);
    location.hash = '#onboarding';
    location.reload();
  }

  /* ============================ events (shared) ============================ */
  function eventTitle(r, d) { return ui.eventTitle(r, d); }

  function myEvents(d, client) {
    return d.rides.filter(function (r) {
      return r.type === 'event' && isActiveRide(r) && r.ts > Date.now() &&
        (r.public === true || (!!client.partnerId && r.partnerId === client.partnerId));
    }).sort(function (a, b) { return a.ts - b.ts; });
  }

  function onList(r) {
    return (r.roster || []).some(function (x) { return x.name === session.name; });
  }

  function reserveSeat(id) {
    var d0 = db();
    var title = eventTitle(find(d0.rides, id), d0);
    CWA.store.update(function (d) {
      var r = find(d.rides, id);
      if (!r || !r.roster) return;
      var free = r.roster.filter(function (x) { return !x.name; })[0];
      if (!free) return;
      var maxOrder = r.roster.reduce(function (m, x) { return Math.max(m, x.order || 0); }, 0);
      free.name = session.name;
      free.order = maxOrder + 1;
      CWA.store.notify(d, 'admin', 'notif.eventSignup', { name: session.name, event: title }, '#events/' + id);
    });
    CWA.ui.toast(t('pax.reservedToast'), 'success');
  }

  function cancelSeat(id) {
    var d0 = db();
    var title = eventTitle(find(d0.rides, id), d0);
    CWA.store.update(function (d) {
      var r = find(d.rides, id);
      if (!r || !r.roster) return;
      var mineSlot = r.roster.filter(function (x) { return x.name === session.name; })[0];
      if (!mineSlot) return;
      mineSlot.name = null;
      mineSlot.order = null;
      CWA.store.notify(d, 'admin', 'notif.eventCancel', { name: session.name, event: title }, '#events/' + id);
    });
    CWA.ui.toast(t('pax.seatCancelledToast'), 'info');
  }

  /* compact card used on the home rail and the events list */
  function eventCard(r, d) {
    var s = ui.eventSeats(r);
    var mine = onList(r);
    return '<button type="button" class="event-card" data-nav="#event/' + esc(r.id) + '">' +
      ui.eventCover(r, {
        chips: mine ? ui.coverChip(t('pax.onList'), 'check', 'on-ink') :
          (s.free ? ui.coverChip(t('pax.seatsFree', { free: s.free, total: s.total }), 'armchair') :
            ui.coverChip(t('pax.eventFull'), 'x'))
      }) +
      '<div class="event-card-body">' +
      '<div class="h2">' + esc(eventTitle(r, d)) + '</div>' +
      '<div class="row small muted">' + CWA.icon('clock') +
      '<span class="truncate">' + esc(CWA.fmt.day(r.ts) + ' · ' + CWA.fmt.time(r.ts)) + '</span></div>' +
      '<div class="row small muted">' + CWA.icon('mapPin') + '<span class="truncate">' + esc(r.pickup) + '</span></div>' +
      '</div></button>';
  }

  function eventsView() {
    lastView = 'events';
    var d = db();
    var list = myEvents(d, me(d));
    setView(
      ui.backHead({ back: '#home', title: esc(t('common.events')) }) +
      '<div class="app-body stack-lg">' +
      '<div class="display display-sm">' + esc(t('pax.eventsTitle')) + '</div>' +
      (list.length
        ? '<div class="stack">' + list.map(function (r, i) {
          return '<div class="reveal" style="--i:' + i + '">' + eventCard(r, d) + '</div>';
        }).join('') + '</div>'
        : '<div class="empty-state"><div class="icon-tile">' + CWA.icon('calendar') + '</div>' +
        '<div>' + esc(t('pax.noEvents')) + '</div></div>') +
      '</div>');
    bindReserve();
  }

  function eventView(id) {
    lastView = 'event';
    var d = db();
    var r = find(d.rides, id);
    if (!r || r.type !== 'event') { notFound('pax.eventGone', '#events'); return; }

    var seats = ui.eventSeats(r);
    var mine = onList(r);
    var partner = r.partnerId ? find(d.partners, r.partnerId) : null;
    var chapter = find(d.chapters, r.chapterId || 'muc');
    var guests = (r.roster || []).filter(function (x) { return !!x.name; }).map(function (x) { return x.name; });
    var pilots = [];
    if (r.pilots) {
      for (var k in r.pilots) {
        if (r.pilots[k]) { var p = find(d.pilots, r.pilots[k]); if (p) pilots.push(p); }
      }
    }

    setView(
      ui.backHead({ back: '#events' }) +
      '<div class="app-body stack-lg">' +

      '<div class="reveal">' + ui.eventCover(r, { tall: true, date: false, chips: ui.coverChip(t('common.event'), 'sparkles') }) + '</div>' +

      '<div class="stack-sm reveal" style="--i:1">' +
      '<div class="display">' + esc(eventTitle(r, d)) + '</div>' +
      '<div class="row wrap muted">' +
      '<span class="row">' + CWA.icon('calendar') + esc(CWA.fmt.dateLong(r.ts)) + '</span>' +
      '<span class="row">' + CWA.icon('clock') + esc(CWA.fmt.time(r.ts)) + '</span>' +
      '</div></div>' +

      '<div class="tile-grid reveal" style="--i:2">' +
      '<div class="tile tile-sun"><div class="tile-label">' + esc(t('common.duration')) + '</div>' +
      '<div class="tile-value">' + esc(CWA.fmt.num(r.durationMin)) + '<span style="font-size:1rem"> ' + esc(t('common.min')) + '</span></div>' +
      '<div class="tile-glyph">' + CWA.icon('clock') + '</div></div>' +
      '<div class="tile tile-mint"><div class="tile-label">' + esc(t('common.seats')) + '</div>' +
      '<div class="tile-value">' + esc(String(seats.free)) + '<span style="font-size:1rem">/' + esc(String(seats.total)) + '</span></div>' +
      '<div class="tile-glyph">' + CWA.icon('armchair') + '</div></div>' +
      '</div>' +

      (ui.eventBody(r) ?
        '<div class="stack-sm reveal" style="--i:3"><h2 class="h2">' + esc(t('common.about')) + '</h2>' +
        '<p>' + esc(ui.eventBody(r)) + '</p>' +
        '<div class="row small muted">' + CWA.icon('gift') + esc(t('common.freeOfCharge')) + '</div></div>' : '') +

      '<div class="stack-sm reveal" style="--i:4">' +
      '<h2 class="h2">' + esc(t('common.location')) + '</h2>' +
      '<div class="medium">' + esc(r.location || r.pickup) + '</div>' +
      ui.mapEmbed(r.location || r.pickup, { caption: false }) +
      (partner ? '<div class="row small muted">' + CWA.icon('building') +
        esc(t('common.hostedBy', { name: partner.name })) + '</div>' : '') +
      '</div>' +

      '<div class="stack-sm reveal" style="--i:5">' +
      '<h2 class="h2">' + esc(t('common.whoIsComing')) + '</h2>' +
      (guests.length ? '<div class="row">' + ui.avatarStack(guests, 5) +
        '<span class="small muted">' + esc(t('pax.seatsFree', { free: seats.free, total: seats.total })) + '</span></div>' : '') +
      ui.seatStrip(r, session.name) +
      '</div>' +

      (pilots.length ?
        '<div class="card stack-sm reveal" style="--i:6"><div class="eyebrow">' + esc(t('pax.eventPilots')) + '</div>' +
        pilots.map(function (p) {
          return '<div class="row">' + ui.avatar(p.name) + '<span class="medium grow">' + esc(p.name) + '</span>' +
            '<span class="badge badge-emerald">' + CWA.icon('shield') + esc(t('common.pilot')) + '</span></div>';
        }).join('') + '</div>' : '') +

      '<div class="stack reveal" style="--i:7">' +
      (mine
        ? '<div class="tile tile-mint row"><div class="icon-tile on-ink">' + CWA.icon('check') + '</div>' +
        '<div class="grow"><div class="tile-value" style="font-size:1.125rem">' + esc(t('pax.eventReserved')) + '</div>' +
        '<div class="tile-label">' + esc(CWA.fmt.dateLong(r.ts) + ' · ' + CWA.fmt.time(r.ts)) + '</div></div></div>'
        : seats.free
          ? heroBtn('data-reserve="' + esc(r.id) + '"', t('pax.reserveSeat'), t('pax.seatsFree', { free: seats.free, total: seats.total }), 'armchair', 'on-rose')
          : '<div class="alert alert-amber">' + CWA.icon('info') + '<div>' + esc(t('pax.eventFull')) + '</div></div>') +
      (mine ? '<button type="button" class="btn btn-destructive-outline btn-xl btn-block" id="seat-cancel">' +
        CWA.icon('x') + esc(t('pax.cancelSeat')) + '</button>' : '') +
      '<a class="btn btn-outline btn-lg btn-block" href="tel:' + esc(chapter.phone.replace(/\s+/g, '')) + '">' +
      CWA.icon('phone') + esc(t('common.help')) + '</a>' +
      '</div>' +

      '</div>');
    bindReserve();

    var seatCancelBtn = viewEl.querySelector('#seat-cancel');
    if (seatCancelBtn) seatCancelBtn.addEventListener('click', function () {
      var m = CWA.ui.modal(
        '<div class="stack-lg">' +
        '<div class="display display-sm">' + esc(t('pax.cancelSeatQ')) + '</div>' +
        '<button type="button" class="btn btn-destructive btn-xl btn-block" id="seat-cancel-yes">' + esc(t('pax.cancelSeatYes')) + '</button>' +
        '<button type="button" class="btn btn-outline btn-xl btn-block" data-close>' + esc(t('pax.keepSeat')) + '</button>' +
        '</div>');
      m.el.querySelector('#seat-cancel-yes').addEventListener('click', function () {
        cancelSeat(id);
        m.close();
      });
    });
  }

  function bindReserve() {
    viewEl.querySelectorAll('[data-reserve]').forEach(function (b) {
      b.addEventListener('click', function () { reserveSeat(b.getAttribute('data-reserve')); });
    });
  }

  /* ================================= #home ================================= */
  function waSuggest() {
    if (localStorage.getItem(WA_KEY)) return;
    localStorage.setItem(WA_KEY, '1');
    setTimeout(function () {
      if (!CWA.route || CWA.route.name !== 'home') return;
      CWA.ui.modal(
        '<div class="stack-lg">' +
        '<div class="row-lg"><div class="icon-tile on-mint">' + CWA.icon('whatsapp') + '</div>' +
        '<div class="grow"><div class="h2">' + esc(t('pax.wa.title')) + '</div></div></div>' +
        '<p>' + esc(t('pax.wa.body')) + '</p>' +
        '<a class="btn btn-primary btn-xl btn-block" href="whatsapp.html">' + CWA.icon('whatsapp') + esc(t('pax.wa.try')) + '</a>' +
        '<button type="button" class="btn btn-outline btn-xl btn-block" data-close>' + esc(t('pax.wa.keep')) + '</button>' +
        '</div>');
    }, 1000);
  }

  function home() {
    lastView = 'home';
    var d = db();
    var client = me(d);
    var chapter = find(d.chapters, 'muc');
    var h = new Date().getHours();
    var greetKey = h < 12 ? 'pax.goodMorning' : h < 18 ? 'pax.goodAfternoon' : 'pax.goodEvening';

    var mine = d.rides.filter(function (r) { return r.clientId === session.userId; });
    var next = mine.filter(function (r) {
      return isActiveRide(r) && r.ts > Date.now() - 2 * 36e5;
    }).sort(function (a, b) { return a.ts - b.ts; })[0];
    var pilot = next && next.pilotId ? find(d.pilots, next.pilotId) : null;
    var done = mine.filter(function (r) { return r.status === 'done'; });
    var hours = Math.round(done.reduce(function (s2, r) { return s2 + (r.durationMin || 60); }, 0) / 60);
    var events = myEvents(d, client);
    var monthAgo = Date.now() - 30 * 864e5;
    var pulse = d.rides.filter(function (r) {
      return r.chapterId === 'muc' && r.status === 'done' && r.ts > monthAgo;
    }).length;

    var i = 0;
    function rev() { return ' class="reveal" style="--i:' + (i++) + '"'; }

    setView(
      ui.heroHead({
        lead: art.avatar(client.name, 'av-lg'),
        title: esc(t(greetKey, { name: client.name.split(' ')[0] })),
        sub: esc(CWA.fmt.dateLong(Date.now())),
        right: ui.bell(hasFreshNotifs())
      }) +
      '<div class="app-body stack-lg">' +

      /* — the one thing that matters right now — */
      (next
        ? '<button type="button" class="tile tile-ink stack-sm"' + rev() + ' data-nav="#ride/' + esc(next.id) + '">' +
        '<div class="between"><span class="eyebrow" style="color:inherit;opacity:.7">' + esc(t('pax.nextRide')) + '</span>' +
        '<span class="cover-chip">' + CWA.icon('clock') + esc(CWA.fmt.rel(next.ts)) + '</span></div>' +
        '<div class="display display-sm">' + esc(CWA.fmt.rideWhen(next)) + '</div>' +
        '<div style="opacity:.85">' + esc(pilot
          ? t('pax.pilotPicksYou', { name: pilot.name.split(' ')[0], place: next.pickup })
          : t('pax.pickupAt', { place: next.pickup })) + '</div>' +
        '<div class="between mt-2">' +
        (pilot ? '<span class="row">' + art.avatar(pilot.name) +
          '<span class="medium">' + esc(pilot.name) + '</span></span>'
          : '<span class="cover-chip">' + CWA.icon('search') + esc(t('pax.lookingPilot')) + '</span>') +
        '<span class="btn-hero-knob">' + CWA.icon('chevronRight') + '</span></div>' +
        '</button>'
        : '<div class="tile tile-sun stack"' + rev() + '>' +
        '<div class="display display-sm">' + esc(t('pax.heroNoRide')) + '</div>' +
        '<div class="tile-label">' + esc(t('pax.heroNoRideSub')) + '</div>' +
        '<div class="tile-glyph">' + CWA.icon('bike') + '</div></div>') +

      '<div' + rev() + '>' + heroBtn('data-nav="#book"', t('pax.bookRide'), t('pax.bookSub'), 'bike', next ? '' : 'on-rose') + '</div>' +

      /* — a quiet, honest sense of scale — */
      '<div class="tile-grid"' + rev() + '>' +
      (done.length
        ? '<div class="tile tile-mint"><div class="tile-value">' + esc(CWA.fmt.num(done.length)) + '</div>' +
        '<div class="tile-label">' + esc(t('pax.statRides')) + '</div>' +
        '<div class="tile-glyph">' + CWA.icon('bike') + '</div></div>' +
        '<div class="tile tile-sky"><div class="tile-value">' + esc(CWA.fmt.num(hours)) + '</div>' +
        '<div class="tile-label">' + esc(t('pax.statHours')) + '</div>' +
        '<div class="tile-glyph">' + CWA.icon('sun') + '</div></div>'
        : '<div class="tile tile-mint" style="grid-column:span 2"><div class="tile-value" style="font-size:1.25rem">' +
        esc(t('pax.statFirst')) + '</div>' +
        '<div class="tile-label">' + esc(t('pax.statFirstSub')) + '</div>' +
        '<div class="tile-glyph">' + CWA.icon('heart') + '</div></div>') +
      '</div>' +

      '<div class="tile tile-paper row"' + rev() + '>' +
      '<div class="icon-tile on-rose">' + CWA.icon('users') + '</div>' +
      '<div class="grow"><div class="tile-value" style="font-size:1.375rem">' + esc(CWA.fmt.num(pulse)) + '</div>' +
      '<div class="tile-label">' + esc(t('pax.chapterPulse')) + '</div></div>' +
      ui.weatherChip() + '</div>' +

      /* — what is coming up — */
      (events.length
        ? '<div class="stack"' + rev() + '>' +
        ui.sectionHead(t('pax.eventsTitle'), t('pax.allEvents'), '#events') +
        '<div class="rail">' + events.slice(0, 4).map(function (r) { return eventCard(r, d); }).join('') + '</div>' +
        '</div>' : '') +

      /* — a human being, one tap away — */
      '<div class="card stack"' + rev() + '>' +
      '<div class="row-lg"><div class="icon-tile on-sky">' + CWA.icon('phone') + '</div>' +
      '<div class="grow"><div class="h2">' + esc(t('pax.needHelp')) + '</div>' +
      '<div class="muted small">' + esc(t('pax.helpText')) + '</div></div></div>' +
      '<a class="btn btn-outline btn-xl btn-block" href="tel:' + esc(chapter.phone.replace(/\s+/g, '')) + '">' +
      CWA.icon('phone') + esc(chapter.phone) + '</a>' +
      '</div>' +

      '</div>');

    bindReserve();
    waSuggest();
  }

  /* ================================= #book ================================= */
  function book() {
    if (lastView !== 'book' || !bs) {
      var client = me(db());
      bs = { step: 1, type: null, day: null, date: '', slot: null, time: '', pickup: client.address || '',
        destination: '', stops: [], ret: true, riders: 0, proxy: false, proxyName: '', proxyOk: false, notes: '' };
    }
    lastView = 'book';
    var s = bs;

    function step2ok() { return !!(s.day && (s.day !== 'pick' || s.date) && s.slot && (s.slot !== 'exact' || s.time)); }
    function step3ok() { return !!(s.pickup.trim() && (s.type !== 'functional' || s.destination.trim())); }
    function step4ok() { return s.proxy ? !!(s.proxyName.trim() && s.proxyOk) : s.riders > 0; }

    function nextBtn(ok) {
      return '<button type="button" class="btn-hero" id="wiz-next"' + (ok ? '' : ' disabled') + '>' +
        '<span class="grow">' + esc(t('common.next')) + '</span>' +
        '<span class="btn-hero-knob">' + CWA.icon('arrowRight') + '</span></button>';
    }

    function computeTs() {
      var d = new Date();
      if (s.day === 'tomorrow') d.setDate(d.getDate() + 1);
      else if (s.day === 'pick' && s.date) {
        var p = s.date.split('-');
        d = new Date(+p[0], +p[1] - 1, +p[2]);
      }
      if (s.slot === 'morning') d.setHours(9, 0, 0, 0);
      else if (s.slot === 'afternoon') d.setHours(13, 0, 0, 0);
      else {
        var tp = (s.time || '12:00').split(':');
        d.setHours(+tp[0], +tp[1] || 0, 0, 0);
      }
      return d.getTime();
    }

    function sentence() {
      var ts = computeTs();
      var when = s.slot === 'exact'
        ? t('pax.whenExact', { day: CWA.fmt.day(ts), time: CWA.fmt.time(ts) })
        : t(s.slot === 'morning' ? 'pax.whenMorning' : 'pax.whenAfternoon', { day: CWA.fmt.day(ts) });
      var out = s.type === 'functional'
        ? t('pax.sumErrand', { when: when, pickup: s.pickup.trim(), dest: s.destination.trim() })
        : t('pax.sumPleasure', { when: when, pickup: s.pickup.trim() });
      if (s.type === 'functional' && s.ret) out += ' ' + t('pax.sumReturn');
      if (s.riders === 2) out += ' ' + t('pax.sumTwo');
      if (s.proxy && s.proxyName.trim()) out += ' ' + t('pax.sumProxy', { name: s.proxyName.trim() });
      return out;
    }

    function confirmBooking() {
      var newId = null;
      CWA.store.update(function (d) {
        var id = CWA.store.uid('r');
        newId = id;
        var ts = computeTs();
        var dt = new Date(ts);
        var flag = null, status = 'open';
        if (dt.getDay() === 0 || (s.slot === 'exact' && (dt.getHours() < 9 || dt.getHours() >= 18))) {
          status = 'requested'; flag = 'outside_hours';
        } else if (s.slot === 'exact' && ts < Date.now() + 4 * 36e5) {
          status = 'requested'; flag = 'lead_time';
        }
        var proxyName = s.proxy ? s.proxyName.trim() : '';
        var ride = {
          id: id, chapterId: 'muc', type: s.type, status: status, clientId: session.userId, source: 'app',
          ts: ts, slot: s.slot, durationMin: 60, riders: s.riders || 1, pickup: s.pickup.trim(),
          destination: s.type === 'functional' && s.destination.trim() ? s.destination.trim() : undefined,
          stops: s.type === 'functional' ? s.stops.map(function (x) { return x.trim(); }).filter(Boolean) : [],
          returnRide: s.type === 'functional' ? !!s.ret : false,
          trishawId: status === 'open' ? 't1' : null, pilotId: null,
          notes: s.notes.trim(), proxy: proxyName ? { name: proxyName } : null,
          flag: flag || undefined, debrief: null, createdAt: Date.now()
        };
        d.rides.push(ride);
        var when = CWA.fmt.rideWhen(ride);
        if (status === 'open') {
          CWA.store.notify(d, 'pilot', 'notif.rideOpen', { name: session.name, when: when, place: ride.pickup }, '#feed');
          CWA.store.notify(d, 'admin', 'notif.newRequest', { name: session.name, when: when }, '#requests');
        } else {
          CWA.store.notify(d, 'admin', 'notif.requestFlagged', { name: session.name, reason: t('pax.flag.' + flag) }, '#requests');
        }
      });
      CWA.ui.toast(t('pax.toastBooked'), 'success');
      bs = null;
      CWA.nav('#booked/' + newId);
    }

    /* ---- step bodies ---- */
    var body = '';
    if (s.step === 1) {
      var d0 = db();
      var events = myEvents(d0, me(d0)).slice(0, 3);
      var again = pastRideOptions(d0);
      var hasShortcuts = events.length || again.length;
      body =
        (events.length ?
          '<div class="stack-sm reveal">' +
          ui.sectionHead(t('pax.eventsTitle'), t('pax.allEvents'), '#events') +
          '<div class="rail">' + events.map(function (r) { return eventCard(r, d0); }).join('') + '</div>' +
          '</div>' : '') +
        (again.length ?
          '<div class="stack-sm reveal">' +
          '<div class="eyebrow">' + esc(t('pax.bookAgain')) + '</div>' +
          '<div class="hint" style="margin-top:-.25rem">' + esc(t('pax.bookAgainHint')) + '</div>' +
          again.map(function (r) {
            return '<button type="button" class="record-card row-lg" data-again="' + esc(r.id) + '">' +
              '<div class="icon-tile icon-tile-sm on-' + (r.type === 'functional' ? 'sky' : 'rose') + '">' +
              CWA.icon(r.type === 'functional' ? 'route' : 'heart') + '</div>' +
              '<div class="grow"><div class="medium">' + esc(r.destination ? r.pickup + ' → ' + r.destination : r.pickup) + '</div>' +
              '<div class="hint">' + esc(t('type.' + r.type)) + ' · ' + esc(CWA.fmt.date(r.ts)) + '</div></div>' +
              '<span class="link-card-chevron">' + CWA.icon('chevronRight') + '</span></button>';
          }).join('') + '</div>' : '') +
        (hasShortcuts ?
          '<div class="row"><span class="divider grow"></span><span class="tiny muted">' + esc(t('auth.or')) + '</span><span class="divider grow"></span></div>'
          : '') +
        '<div class="wizard-question display display-sm">' + esc(t('pax.q1')) + '</div>' +
        '<div class="stack">' +
        bigOpt('heart', t('type.pleasure'), t('pax.pleasureSub'), 'data-type="pleasure"', s.type === 'pleasure', 'rose') +
        bigOpt('route', t('type.functional'), t('pax.errandSub'), 'data-type="functional"', s.type === 'functional', 'sky') +
        '</div>';
    } else if (s.step === 2) {
      body =
        '<div class="wizard-question display display-sm">' + esc(t('pax.q2')) + '</div>' +
        '<div class="row wrap">' +
        chip(t('common.today'), 'data-day="today"', s.day === 'today') +
        chip(t('common.tomorrow'), 'data-day="tomorrow"', s.day === 'tomorrow') +
        chip(t('pax.pickDay'), 'data-day="pick"', s.day === 'pick', 'calendar') +
        '</div>' +
        (s.day === 'pick' ?
          '<div class="field"><label class="label" for="wiz-date">' + esc(t('common.date')) + '</label>' +
          '<input type="date" class="input" id="wiz-date" min="' + isoToday() + '" value="' + esc(s.date) + '"></div>' : '') +
        '<div class="label">' + esc(t('pax.whatTime')) + '</div>' +
        '<div class="row wrap">' +
        chip(t('slot.morning'), 'data-slot="morning"', s.slot === 'morning', 'sunMedium') +
        chip(t('slot.afternoon'), 'data-slot="afternoon"', s.slot === 'afternoon', 'sunset') +
        chip(t('slot.exact'), 'data-slot="exact"', s.slot === 'exact', 'clock') +
        '</div>' +
        (s.slot === 'exact' ?
          '<div class="field"><label class="label" for="wiz-time">' + esc(t('common.time')) + '</label>' +
          '<input type="time" class="input" id="wiz-time" value="' + esc(s.time) + '"></div>' : '') +
        nextBtn(step2ok());
    } else if (s.step === 3) {
      body =
        '<div class="wizard-question display display-sm">' + esc(t(s.type === 'functional' ? 'pax.q3errand' : 'pax.q3pleasure')) + '</div>' +
        '<div class="field"><label class="label" for="wiz-pickup">' + esc(t('common.pickup')) + '</label>' +
        '<input type="text" class="input" id="wiz-pickup" list="cwa-addresses" value="' + esc(s.pickup) + '"></div>' +
        (s.type === 'functional' ?
          '<div class="field"><label class="label" for="wiz-dest">' + esc(t('common.destination')) + '</label>' +
          '<input type="text" class="input" id="wiz-dest" list="cwa-addresses" value="' + esc(s.destination) + '" placeholder="' + esc(t('pax.destPh')) + '"></div>' +
          s.stops.map(function (v, i) {
            return '<div class="field"><label class="label">' + esc(t('common.stop')) + ' ' + (i + 1) + '</label>' +
              '<input type="text" class="input wiz-stop" list="cwa-addresses" data-i="' + i + '" value="' + esc(v) + '"></div>';
          }).join('') +
          '<button type="button" class="btn btn-outline btn-block" id="wiz-add-stop">' + CWA.icon('plus') + esc(t('pax.addStop')) + '</button>' +
          '<div class="card card-tight between"><div><div class="medium">' + esc(t('common.return')) + '</div>' +
          '<div class="hint">' + esc(t('pax.returnHint')) + '</div></div>' +
          '<label class="switch"><input type="checkbox" id="wiz-ret"' + (s.ret ? ' checked' : '') + '><span class="switch-slider"></span></label></div>'
          : '') +
        '<div id="wiz-map">' + (s.pickup.trim().length >= 4 ? ui.mapEmbed(s.pickup.trim(), { small: true }) : '') + '</div>' +
        ui.addressDatalist() +
        nextBtn(step3ok());
    } else if (s.step === 4) {
      body =
        '<div class="wizard-question display display-sm">' + esc(t('pax.q4')) + '</div>' +
        '<div class="stack">' +
        bigOpt('user', t('pax.justMe'), '', 'data-riders="1"', !s.proxy && s.riders === 1, 'mint') +
        bigOpt('users', t('pax.companion'), '', 'data-riders="2"', !s.proxy && s.riders === 2, 'lav') +
        bigOpt('pencil', t('pax.forSomeone'), '', 'data-proxy="1"', s.proxy, 'peach') +
        '</div>' +
        (s.proxy ?
          '<div class="field"><label class="label" for="wiz-proxy-name">' + esc(t('pax.proxyName')) + '</label>' +
          '<input type="text" class="input" id="wiz-proxy-name" value="' + esc(s.proxyName) + '" placeholder="' + esc(t('pax.proxyNamePh')) + '"></div>' +
          '<label class="check-row' + (s.proxyOk ? ' checked' : '') + '" id="wiz-proxy-row">' +
          '<input type="checkbox" id="wiz-proxy-ok"' + (s.proxyOk ? ' checked' : '') + '>' +
          '<span>' + esc(t('waiver.proxy')) + '</span></label>' +
          nextBtn(step4ok())
          : '');
    } else {
      body =
        '<div class="wizard-question display display-sm">' + esc(t('pax.q5')) + '</div>' +
        '<div class="tile tile-sun"><p class="quote-text">' + esc(sentence()) + '</p>' +
        '<div class="tile-glyph">' + CWA.icon('bike') + '</div></div>' +
        '<div class="field"><label class="label" for="wiz-notes">' + esc(t('common.notes')) +
        ' <span class="muted">(' + esc(t('common.optional')) + ')</span></label>' +
        '<textarea class="textarea" id="wiz-notes" placeholder="' + esc(t('pax.notesPh')) + '">' + esc(s.notes) + '</textarea></div>' +
        heroBtn('id="wiz-confirm"', t('pax.confirmBook'), '', 'check', 'on-rose');
    }

    setView(wizHeader(t('pax.bookRide'), t('common.details')) +
      '<div class="app-body stack-lg">' + dots(s.step, 5) + body + '</div>');

    /* ---- handlers ---- */
    viewEl.querySelector('#wiz-back').addEventListener('click', function () {
      if (s.step > 1) { s.step--; CWA.render(); } else { CWA.nav('#home'); }
    });
    viewEl.querySelectorAll('[data-type]').forEach(function (b) {
      b.addEventListener('click', function () { s.type = b.getAttribute('data-type'); s.step = 2; CWA.render(); });
    });
    viewEl.querySelectorAll('[data-again]').forEach(function (b) {
      b.addEventListener('click', function () {
        var r = find(db().rides, b.getAttribute('data-again'));
        if (!r) return;
        s.type = r.type;
        s.pickup = r.pickup || '';
        s.destination = r.destination || '';
        s.stops = (r.stops || []).slice();
        s.ret = !!r.returnRide;
        if (r.proxy && r.proxy.name) { s.proxy = true; s.proxyName = r.proxy.name; s.proxyOk = true; }
        else { s.proxy = false; s.riders = r.riders || 1; }
        s.step = 2;
        CWA.render();
      });
    });
    viewEl.querySelectorAll('[data-day]').forEach(function (b) {
      b.addEventListener('click', function () { s.day = b.getAttribute('data-day'); CWA.render(); });
    });
    viewEl.querySelectorAll('[data-slot]').forEach(function (b) {
      b.addEventListener('click', function () { s.slot = b.getAttribute('data-slot'); CWA.render(); });
    });
    viewEl.querySelectorAll('[data-riders]').forEach(function (b) {
      b.addEventListener('click', function () {
        s.proxy = false; s.proxyName = ''; s.proxyOk = false;
        s.riders = +b.getAttribute('data-riders'); s.step = 5; CWA.render();
      });
    });
    var proxyBtn = viewEl.querySelector('[data-proxy]');
    if (proxyBtn) proxyBtn.addEventListener('click', function () {
      if (!s.proxy) { s.proxy = true; s.riders = 1; CWA.render(); }
    });

    function syncNext() {
      var nb = viewEl.querySelector('#wiz-next');
      if (nb) nb.disabled = !(s.step === 2 ? step2ok() : s.step === 3 ? step3ok() : step4ok());
    }
    function bind(sel, fn) {
      var el = viewEl.querySelector(sel);
      if (el) el.addEventListener('input', function () { fn(el.value); syncNext(); });
    }
    bind('#wiz-date', function (v) { s.date = v; });
    bind('#wiz-time', function (v) { s.time = v; });
    bind('#wiz-dest', function (v) { s.destination = v; });
    bind('#wiz-proxy-name', function (v) { s.proxyName = v; });
    bind('#wiz-notes', function (v) { s.notes = v; });

    var mapTimer = null;
    bind('#wiz-pickup', function (v) {
      s.pickup = v;
      clearTimeout(mapTimer);
      mapTimer = setTimeout(function () {
        var box = viewEl.querySelector('#wiz-map');
        if (box) box.innerHTML = s.pickup.trim().length >= 4 ? ui.mapEmbed(s.pickup.trim(), { small: true }) : '';
      }, 450);
    });

    viewEl.querySelectorAll('.wiz-stop').forEach(function (inp) {
      inp.addEventListener('input', function () { s.stops[+inp.getAttribute('data-i')] = inp.value; });
    });

    var addStop = viewEl.querySelector('#wiz-add-stop');
    if (addStop) addStop.addEventListener('click', function () { s.stops.push(''); CWA.render(); });

    var retSwitch = viewEl.querySelector('#wiz-ret');
    if (retSwitch) retSwitch.addEventListener('change', function () { s.ret = retSwitch.checked; });

    var proxyOk = viewEl.querySelector('#wiz-proxy-ok');
    if (proxyOk) proxyOk.addEventListener('change', function () {
      s.proxyOk = proxyOk.checked;
      viewEl.querySelector('#wiz-proxy-row').classList.toggle('checked', s.proxyOk);
      syncNext();
    });

    var nextB = viewEl.querySelector('#wiz-next');
    if (nextB) nextB.addEventListener('click', function () { s.step++; CWA.render(); });

    var confirmB = viewEl.querySelector('#wiz-confirm');
    if (confirmB) confirmB.addEventListener('click', confirmBooking);
  }

  /* Shared by the post-booking confirmation and the ride detail page.
     redirectHash: where to send the passenger afterwards — needed on the
     booked-confirmation screen, since it doesn't know how to display a
     ride it just found out is cancelled; the ride detail page just
     re-renders itself in place via the store's cwa:change listener. */
  function openCancelModal(id, redirectHash) {
    var m = CWA.ui.modal(
      '<div class="stack-lg">' +
      '<div class="display display-sm">' + esc(t('pax.cancelQ')) + '</div>' +
      '<button type="button" class="btn btn-destructive btn-xl btn-block" id="cancel-yes">' + esc(t('pax.cancelYes')) + '</button>' +
      '<button type="button" class="btn btn-outline btn-xl btn-block" data-close>' + esc(t('pax.cancelKeep')) + '</button>' +
      '</div>');
    m.el.querySelector('#cancel-yes').addEventListener('click', function () {
      CWA.store.update(function (dd) {
        var r = find(dd.rides, id);
        if (!r) return;
        r.status = 'cancelled';
        var when = CWA.fmt.rideWhen(r);
        CWA.store.notify(dd, 'admin', 'notif.cancelled', { name: session.name, when: when }, '#rides/' + id);
        if (r.pilotId) CWA.store.notify(dd, 'pilot', 'notif.cancelled', { name: session.name, when: when }, '#feed');
      });
      m.close();
      CWA.ui.toast(t('pax.cancelledToast'), 'info');
      if (redirectHash) CWA.nav(redirectHash);
    });
  }

  /* ============================= #booked/<id> ============================= */
  function booked(id) {
    lastView = 'booked';
    var ride = find(db().rides, id);
    if (!ride) { notFound(); return; }
    var requested = ride.status === 'requested';

    setView(
      ui.backHead({ back: '#home' }) +
      '<div class="app-body stack-lg">' +
      '<div class="center reveal" style="margin:0 auto;width:min(20rem,90%)">' + art.hero('celebrate') + '</div>' +
      '<div class="stack-sm center reveal" style="--i:1">' +
      '<div class="display">' + esc(t(requested ? 'pax.requestedTitle' : 'pax.bookedTitle')) + '</div>' +
      '<p class="muted">' + esc(requested ? t('pax.requestedText') : CWA.fmt.rideWhen(ride)) + '</p>' +
      '</div>' +
      (requested ? '' :
        '<div class="card stack reveal" style="--i:2"><div class="h2">' + esc(t('pax.whatNext')) + '</div>' +
        [['search', 'pax.next1', 'sun'], ['bell', 'pax.next2', 'sky'], ['bike', 'pax.next3', 'mint']].map(function (p) {
          return '<div class="row-lg"><div class="icon-tile icon-tile-sm on-' + p[2] + '">' + CWA.icon(p[0]) + '</div>' +
            '<div class="grow">' + esc(t(p[1])) + '</div></div>';
        }).join('') + '</div>') +
      '<div class="stack reveal" style="--i:3">' +
      heroBtn('data-nav="#ride/' + esc(ride.id) + '"', t('common.details'), '', 'arrowRight') +
      '<button type="button" class="btn btn-outline btn-xl btn-block" data-nav="#home">' + esc(t('pax.backHome')) + '</button>' +
      '<button type="button" class="small muted center" style="padding:.5rem" id="booked-cancel">' + esc(t('pax.cancelRide')) + '</button>' +
      '</div></div>');

    var bookedCancel = viewEl.querySelector('#booked-cancel');
    if (bookedCancel) bookedCancel.addEventListener('click', function () { openCancelModal(id, '#rides'); });
  }

  /* ================================ #rides ================================ */
  function ridesView() {
    lastView = 'rides';
    var d = db();
    var mine = d.rides.filter(function (r) { return r.clientId === session.userId; });
    var up = mine.filter(isActiveRide).sort(function (a, b) { return a.ts - b.ts; });
    var past = mine.filter(function (r) { return !isActiveRide(r); }).sort(function (a, b) { return b.ts - a.ts; });

    setView(
      ui.heroHead({
        lead: ui.brandDot(),
        title: esc(t('pax.tab.rides')),
        sub: esc(t('common.upcoming') + ' · ' + up.length),
        right: '<button type="button" class="icon-pill on-ink" data-nav="#book" aria-label="' + esc(t('pax.bookRide')) + '">' +
          CWA.icon('plus') + '</button>'
      }) +
      '<div class="app-body stack-lg">' +

      (up.length ?
        '<div class="stack">' + ui.sectionHead(t('common.upcoming')) +
        up.map(function (r, i) {
          var pilot = r.pilotId ? find(d.pilots, r.pilotId) : null;
          return '<button type="button" class="link-card reveal" style="--i:' + i + '" data-nav="#ride/' + esc(r.id) + '">' +
            '<div class="grow stack-sm">' +
            '<div class="row wrap">' + ui.typeBadge(r.type) + ui.statusBadge(r.status) + '</div>' +
            '<div class="h2">' + esc(CWA.fmt.rideWhen(r)) + '</div>' +
            '<div class="row muted small">' + CWA.icon('mapPin') + '<span class="truncate">' + esc(r.pickup) + '</span></div>' +
            (pilot ? '<div class="row">' + art.avatar(pilot.name) + '<span class="small medium">' + esc(pilot.name) + '</span></div>' : '') +
            '</div><span class="link-card-chevron">' + CWA.icon('chevronRight') + '</span></button>';
        }).join('') + '</div>' : '') +

      (up.length || past.length ? '' :
        '<div class="empty-state"><div class="icon-tile">' + CWA.icon('calendar') + '</div>' +
        '<div>' + esc(t('pax.noRides')) + '</div>' +
        '<button type="button" class="btn btn-primary btn-xl" data-nav="#book">' + CWA.icon('bike') + esc(t('pax.bookRide')) + '</button>' +
        '</div>') +

      (past.length ?
        '<div class="stack">' + ui.sectionHead(t('common.past')) +
        past.map(function (r) {
          return '<button type="button" class="record-card between" data-nav="#ride/' + esc(r.id) + '">' +
            '<span class="row">' + CWA.icon(r.type === 'functional' ? 'route' : 'heart') +
            '<span class="muted">' + esc(CWA.fmt.date(r.ts) + ' · ' + t('type.' + r.type)) + '</span></span>' +
            ui.statusBadge(r.status) + '</button>';
        }).join('') + '</div>' : '') +

      '</div>');
  }

  /* ============================== #ride/<id> ============================== */
  function timeline(ride) {
    var idx = { requested: 1, open: 1, staffed: 2, in_progress: 2, done: 4 }[ride.status];
    var steps = [
      { key: 'pax.tlBooked' },
      { key: 'pax.tlPilot', hint: ride.status === 'requested' ? t('pax.requestedText') : ride.status === 'open' ? t('pax.lookingPilot') : null },
      { key: 'pax.tlDay', hint: idx === 2 ? CWA.fmt.rideWhen(ride) : null },
      { key: 'pax.tlDone' }
    ];
    return '<div class="timeline">' + steps.map(function (st, i) {
      var cls = i < idx ? 'done' : i === idx ? 'current' : 'pending';
      return '<div class="timeline-step ' + cls + '"><div class="timeline-dot">' + (i < idx ? CWA.icon('check') : '') + '</div>' +
        '<div><div class="timeline-title">' + esc(t(st.key)) + '</div>' +
        (st.hint && cls !== 'pending' ? '<div class="hint">' + esc(st.hint) + '</div>' : '') +
        '</div></div>';
    }).join('') + '</div>';
  }

  function rideView(id) {
    lastView = 'ride';
    var d = db();
    var ride = find(d.rides, id);
    if (!ride) { notFound(); return; }
    if (ride.type === 'event') { CWA.nav('#event/' + id); return; }
    var pilot = ride.pilotId ? find(d.pilots, ride.pilotId) : null;
    var staffedLike = ride.status === 'staffed' || ride.status === 'in_progress';

    var rows = [[t('common.pickup'), ride.pickup]];
    if (ride.destination) rows.push([t('common.destination'), ride.destination]);
    (ride.stops || []).forEach(function (sp, i) { rows.push([t('common.stop') + ' ' + (i + 1), sp]); });
    if (ride.type === 'functional') rows.push([t('common.return'), t(ride.returnRide ? 'common.yes' : 'common.no')]);
    rows.push([t('common.duration'), ride.durationMin + ' ' + t('common.min')]);
    if (ride.notes) rows.push([t('common.notes'), ride.notes]);

    setView(
      ui.backHead({ back: '#rides', title: esc(t('type.' + ride.type)) }) +
      '<div class="app-body stack-lg">' +

      '<div class="stack-sm reveal"><div class="display display-sm">' + esc(CWA.fmt.rideWhen(ride)) + '</div>' +
      '<div class="row wrap">' + ui.typeBadge(ride.type) + ui.statusBadge(ride.status) +
      (isActiveRide(ride) ? '<span class="badge badge-outline">' + CWA.icon('clock') + esc(CWA.fmt.rel(ride.ts)) + '</span>' : '') +
      '</div></div>' +

      (ride.status === 'cancelled' ?
        '<div class="alert alert-amber">' + CWA.icon('info') + '<div>' + esc(t('pax.cancelledInfo')) + '</div></div>' :
        '<div class="card reveal" style="--i:1">' + timeline(ride) + '</div>') +

      (pilot && (staffedLike || ride.status === 'done') ?
        '<div class="tile tile-mint stack reveal" style="--i:2">' +
        '<div class="row-lg">' + art.avatar(pilot.name, 'av-lg') +
        '<div class="grow"><div class="tile-label">' + esc(t('pax.yourPilot')) + '</div>' +
        '<div class="tile-value" style="font-size:1.375rem">' + esc(pilot.name) + '</div></div></div>' +
        '<a class="btn btn-outline btn-xl btn-block" href="tel:' + esc(pilot.phone.replace(/\s+/g, '')) + '">' +
        CWA.icon('phone') + esc(pilot.phone) + '</a>' +
        '<div class="tile-foot center">' + esc(t('pax.lateCancelNote')) + '</div>' +
        '</div>' : '') +

      (staffedLike ?
        '<div class="reveal" style="--i:3">' + heroBtn('data-nav="#chat/' + esc(ride.id) + '"', t('common.chat'), '', 'chat') + '</div>' : '') +

      '<div class="card reveal" style="--i:4"><dl class="detail-list">' + rows.map(function (r) {
        return '<div><dt class="muted">' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>';
      }).join('') + '</dl></div>' +

      '<div class="stack-sm reveal" style="--i:5"><h2 class="h2">' + esc(t('common.location')) + '</h2>' +
      ui.mapEmbed(ride.pickup, { small: true }) + '</div>' +

      (isActiveRide(ride) ?
        '<button type="button" class="btn btn-destructive-outline btn-xl btn-block" id="ride-cancel">' +
        CWA.icon('x') + esc(t('pax.cancelRide')) + '</button>' : '') +
      '</div>');

    var cancelBtn = viewEl.querySelector('#ride-cancel');
    if (cancelBtn) cancelBtn.addEventListener('click', function () { openCancelModal(id); });
  }

  /* ================================ #chats ================================ */
  function chatsView() {
    lastView = 'chats';
    var d = db();
    var rows = myChats(d).map(function (c) { return { c: c, r: find(d.rides, c.rideId) }; })
      .filter(function (x) { return chatTab === 'active' ? isActiveRide(x.r) : !isActiveRide(x.r); })
      .sort(function (a, b) { return (lastMsg(b.c) ? lastMsg(b.c).ts : 0) - (lastMsg(a.c) ? lastMsg(a.c).ts : 0); });

    setView(
      ui.heroHead({ lead: ui.brandDot(), title: esc(t('pax.tab.chats')), right: ui.bell(anyUnread()) }) +
      '<div class="app-body stack-lg">' +

      '<div class="seg w-full">' +
      '<button type="button" class="grow ' + (chatTab === 'active' ? 'active' : '') + '" data-ctab="active">' + esc(t('chat.tabActive')) + '</button>' +
      '<button type="button" class="grow ' + (chatTab === 'past' ? 'active' : '') + '" data-ctab="past">' + esc(t('chat.tabPast')) + '</button>' +
      '</div>' +

      (rows.length ?
        '<div class="stack">' + rows.map(function (x, i) {
          var last = lastMsg(x.c);
          var pilot = x.r.pilotId ? find(d.pilots, x.r.pilotId) : null;
          var who = last && last.from === 'admin' ? t('chat.adminLabel') : pilot ? pilot.name : t('common.chat');
          var preview = !last ? '' : last.from === 'system' ? t(last.tKey || '') : last.text;
          return '<button type="button" class="link-card reveal" style="--i:' + i + '" data-nav="#chat/' + esc(x.r.id) + '">' +
            art.avatar(who, 'av-lg') +
            '<div class="grow stack-sm">' +
            '<div class="between"><span class="medium truncate">' + esc(who) + '</span>' +
            '<span class="tiny muted">' + (last ? esc(CWA.fmt.rel(last.ts)) : '') + '</span></div>' +
            '<div class="small muted truncate">' + esc(preview) + '</div>' +
            '</div>' +
            (isUnread(x.c) ? '<span class="unread-dot"></span>' : '') +
            '</button>';
        }).join('') + '</div>' :
        '<div class="empty-state"><div class="icon-tile">' + CWA.icon('chat') + '</div>' +
        '<div>' + esc(t('pax.noChats')) + '</div></div>') +

      '</div>');

    viewEl.querySelectorAll('[data-ctab]').forEach(function (b) {
      b.addEventListener('click', function () { chatTab = b.getAttribute('data-ctab'); CWA.render(); });
    });
  }

  /* ============================== #chat/<id> ============================== */
  function chat(id) {
    lastView = 'chat';
    var d = db();
    var ride = find(d.rides, id);
    var chatObj = find(d.chats, 'chat-' + id);
    var pilot = ride && ride.pilotId ? find(d.pilots, ride.pilotId) : null;

    var header = ui.backHead({
      back: '#chats',
      title: esc(pilot ? pilot.name : t('common.chat')),
      sub: ride ? esc(CWA.fmt.rideWhen(ride)) : '',
      right: ride ? '<button type="button" class="btn btn-outline btn-sm" data-nav="#ride/' + esc(id) + '">' +
        esc(t('chat.viewBooking')) + '</button>' : ''
    });

    if (!chatObj) {
      setView(header +
        '<div class="chat-scroll"><div class="empty-state"><div class="icon-tile">' + CWA.icon('chat') + '</div>' +
        '<div>' + esc(t('pax.chatEmpty')) + '</div></div></div>', { chat: true });
      return;
    }

    setView(header +
      '<div class="chat-scroll">' +
      chatObj.messages.map(function (m) { return ui.chatMessage(m, 'client'); }).join('') +
      '</div>' +
      '<div class="chat-input-row">' +
      '<input type="text" class="input" id="chat-input" placeholder="' + esc(t('chat.placeholder')) + '">' +
      '<button type="button" class="send-btn" id="chat-send" aria-label="' + esc(t('common.send')) + '">' + CWA.icon('send') + '</button>' +
      '</div>', { chat: true });

    var sc = viewEl.querySelector('.chat-scroll');
    sc.scrollTop = sc.scrollHeight;

    var input = viewEl.querySelector('#chat-input');
    function send() {
      var text = input.value.trim();
      if (!text) return;
      chatFocus = true;
      CWA.store.update(function (dd) {
        var cObj = find(dd.chats, 'chat-' + id);
        if (!cObj) return;
        cObj.messages.push({ from: 'client', name: session.name, text: text, ts: Date.now() });
        CWA.store.notify(dd, 'pilot', 'notif.message', { name: session.name, text: text.slice(0, 60) }, '#chat/' + id);
      });
    }
    viewEl.querySelector('#chat-send').addEventListener('click', send);
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter') send(); });
    if (chatFocus) { input.focus(); chatFocus = false; }
  }

  /* =============================== #profile =============================== */
  function editAccount() {
    var d = db();
    var c = me(d);
    var partner = c.partnerId ? find(d.partners, c.partnerId) : null;
    var m = CWA.ui.modal(
      '<div class="stack-lg">' +
      '<div class="h2">' + esc(t('pax.editAccount')) + '</div>' +
      '<div class="field"><label class="label" for="ed-name">' + esc(t('pax.yourName')) + '</label>' +
      '<input type="text" class="input" id="ed-name" value="' + esc(c.name) + '"></div>' +
      '<div class="field"><label class="label" for="ed-phone">' + esc(t('common.phone')) + '</label>' +
      '<input type="tel" class="input" id="ed-phone" value="' + esc(c.phone || '') + '"></div>' +
      (partner ? '' :
        '<div class="field"><label class="label" for="ed-address">' + esc(t('pax.address')) + '</label>' +
        '<input type="text" class="input" id="ed-address" list="cwa-addresses" value="' + esc(c.address || '') + '"></div>' +
        ui.addressDatalist()) +
      '<button type="button" class="btn btn-primary btn-xl btn-block" id="ed-save">' + esc(t('common.save')) + '</button>' +
      '<button type="button" class="btn btn-outline btn-xl btn-block" data-close>' + esc(t('common.cancel')) + '</button>' +
      '</div>');

    m.el.querySelector('#ed-save').addEventListener('click', function () {
      var name = m.el.querySelector('#ed-name').value.trim();
      var phone = m.el.querySelector('#ed-phone').value.trim();
      var addrEl = m.el.querySelector('#ed-address');
      if (!name) return;
      CWA.store.update(function (dd) {
        var cc = find(dd.clients, session.userId);
        if (!cc) return;
        cc.name = name;
        cc.phone = phone;
        if (addrEl) cc.address = addrEl.value.trim();
      });
      session.name = name;
      CWA.auth.save(PERSONA, session);
      m.close();
      CWA.ui.toast(t('pax.savedToast'), 'success');
    });
  }

  function profileView() {
    lastView = 'profile';
    var d = db();
    var c = me(d);
    var chapter = find(d.chapters, 'muc');
    var partner = c.partnerId ? find(d.partners, c.partnerId) : null;
    var residence = partner ? partner.name : t('pax.atHome') + ' · ' + (c.address || '');
    var mapAddress = partner ? partner.address : c.address;
    var notifsOn = localStorage.getItem(NOTIF_KEY) !== '0';
    var done = d.rides.filter(function (r) { return r.clientId === session.userId && r.status === 'done'; });

    var rows = [[t('pax.yourName'), c.name], [t('common.phone'), c.phone || '']];
    rows.push([partner ? t('common.chapter') : t('pax.address'), partner ? partner.name : (c.address || '')]);

    setView(
      ui.heroHead({ lead: ui.brandDot(), title: esc(t('pax.tab.profile')) }) +
      '<div class="app-body stack-lg">' +

      /* (a) identity */
      '<div class="tile tile-lav stack reveal">' +
      '<div class="row-lg">' + art.avatar(c.name, 'av-xl') +
      '<div class="grow"><div class="tile-value" style="font-size:1.5rem">' + esc(c.name) + '</div>' +
      '<div class="tile-label">' + esc(c.phone || '') + '</div></div></div>' +
      '<div class="row wrap">' +
      '<span class="cover-chip">' + CWA.icon('user') + esc(t('common.passenger')) + '</span>' +
      '<span class="cover-chip">' + CWA.icon('mapPin') + esc(chapter.name) + '</span>' +
      (done.length ? '<span class="cover-chip">' + CWA.icon('bike') + esc(CWA.fmt.num(done.length) + ' ' + t('common.rides')) + '</span>' : '') +
      '</div></div>' +

      /* (b) account */
      '<div class="card stack reveal" style="--i:1">' +
      '<div class="eyebrow">' + esc(t('pax.account')) + '</div>' +
      '<dl class="detail-list">' + rows.map(function (r) {
        return '<div><dt class="muted">' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>';
      }).join('') + '</dl>' +
      '<button type="button" class="btn btn-outline btn-block" id="prof-edit">' + CWA.icon('pencil') + esc(t('common.edit')) + '</button>' +
      '</div>' +

      /* (c) my chapter */
      '<div class="card stack reveal" style="--i:2">' +
      '<div class="eyebrow">' + esc(t('pax.myChapter')) + '</div>' +
      '<div class="row-lg"><div class="icon-tile on-rose">' + CWA.icon('mapPin') + '</div>' +
      '<div class="grow"><div class="h2">' + esc(chapter.name) + '</div>' +
      '<div class="muted small">' + esc(residence) + '</div></div></div>' +
      ui.mapEmbed(mapAddress, { small: true }) +
      '<a class="btn btn-outline btn-xl btn-block" href="tel:' + esc(chapter.phone.replace(/\s+/g, '')) + '">' +
      CWA.icon('phone') + esc(chapter.phone) + '</a>' +
      '</div>' +

      /* (d) settings */
      '<div class="card stack reveal" style="--i:3">' +
      '<div class="eyebrow">' + esc(t('common.settings')) + '</div>' +
      '<div class="between"><span>' + esc(t('common.language')) + '</span>' + ui.langMenu() + '</div>' +
      '<div class="between"><div><div>' + esc(t('common.notifications')) + '</div>' +
      '<div class="hint">' + esc(t('pax.notifsHint')) + '</div></div>' +
      '<label class="switch"><input type="checkbox" id="prof-notifs"' + (notifsOn ? ' checked' : '') + '>' +
      '<span class="switch-slider"></span></label></div>' +
      '<a class="between" href="whatsapp.html"><span class="row">' + CWA.icon('whatsapp') +
      '<span>' + esc(t('pax.wa.row')) + '</span></span>' + CWA.icon('chevronRight') + '</a>' +
      '<div class="center"><a class="small muted" href="index.html">' + esc(t('pax.demoHome')) + '</a></div>' +
      '</div>' +

      /* (e) logout */
      '<button type="button" class="btn btn-destructive-outline btn-xl btn-block" id="prof-logout">' +
      CWA.icon('logout') + esc(t('auth.logout')) + '</button>' +

      '</div>');

    viewEl.querySelector('#prof-edit').addEventListener('click', editAccount);
    var sw = viewEl.querySelector('#prof-notifs');
    sw.addEventListener('change', function () { localStorage.setItem(NOTIF_KEY, sw.checked ? '1' : '0'); });
    viewEl.querySelector('#prof-logout').addEventListener('click', function () { CWA.auth.logout(PERSONA); });
  }

  /* ================================= boot ================================= */
  CWA.renderShell = renderShell;
  renderShell();

  if (!session) {
    CWA.ui.startRouter({
      welcome: authFlow.welcome,
      phone: authFlow.phone,
      code: authFlow.code,
      signup: signup
    }, 'welcome');
    return;
  }

  CWA.store.watch(['client:' + session.userId], { persona: PERSONA, icon: 'heart', appName: 'CWA' });
  CWA.ui.startRouter({
    home: home,
    book: book,
    booked: booked,
    rides: ridesView,
    ride: rideView,
    events: eventsView,
    event: eventView,
    chats: chatsView,
    chat: chat,
    profile: profileView,
    onboarding: onboardingView
  }, 'home');
})();
