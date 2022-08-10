// h - header
// f - footer

// c - content, ch - home, ca - about, co - offers, cr - realisations, cc - contact

const h_translate = {
    pl: {
        h1: "Home",
        h2: "O nas",
        h3: "Oferta",
        h3_1: "Konstrukcje szklarniowe",
        h3_2: "Systemy cieniujące",
        h3_3: "Ogrzewanie i chłodzenie",
        h3_4: "Elektryczność i oświetlenie",
        h3_5: "Sytemy nawadniające",
        h3_6: "Zbiorniki buforowe",
        h3_7: "Systemy kontroli klimatu",
        h3_8: "Instalacje fotowoltaiczne",
        h4: "Realizacje",
        h5: "Kontakt",
    },
    en: {
        h1: "Home",
        h2: "About Us",
        h3: "Offer",
        h3_1: "Greenhouse structures",
        h3_2: "Shading systems",
        h3_3: "Heating and cooling",
        h3_4: "Electricity and lighting",
        h3_5: "Irrigation systems",
        h3_6: "Buffer tanks",
        h3_7: "Climate control systems",
        h3_8: "Photovoltaic systems",
        h4: "Realisations",
        h5: "Contact",
    },
    de: {
        h1: "Home",
        h2: "Über uns",
        h3: "Angebot",
        h3_1: "Gewächshausstrukturen",
        h3_2: "Beschattungssysteme",
        h3_3: "Heizung und Kühlung",
        h3_4: "Elektrizität und Beleuchtung",
        h3_5: "Bewässerungssysteme",
        h3_6: "Puffertanks",
        h3_7: "Klimatisierungssysteme",
        h3_8: "Fotovoltaikanlagen",
        h4: "Realisierungen",
        h5: "Kontakt",
    },
};

const f_translate = {
    pl: {
        f1: "Nasze usługi:",
        f2: "Konstrukcje szklarniowe",
        f3: "Systemy cieniujące",
        f4: "Ogrzewanie i chłodzenie",
        f5: "Elektryka i oświetlenia",
        f6: "Systemy nawodnieniowe",
        f7: "Zbiorniki buforowe",
        f8: "Systemy kontroli klimatu",
        f9: "Instalacje fotowoltaiczne",
        f10: "Agromont Sp. z o.o.",
        f11: "Jesteśmy Polską firmą działającą od 2013 roku na rynku krajowym i europejskim, zajmującą się kompleksowym montażem szklarni holenderskich i instalacji w obiektach produkcyjnych i przemysłowych. Działamy jako wykonawca projektów dla zleceniodawców z całego świata.",
        f12: "Firma:",
        f13: "<strong>Agromont Sp. z o.o.</strong>",
        f14: "Turawska 1b",
        f15: "46-022 Zawada",
        f16: "Tel: +48 608 528 465",
        f17: "Tel: +48 602 288 850",
        f18: "E-mail: info@agromont.pl",
        f19: "&copy Lorem Ipsum",
    },
    en: {
        f1: "Our services:",
        f2: "Greenhouse structures",
        f3: "Shading systems",
        f4: "Heating and cooling",
        f5: "Electrical and lighting",
        f6: "Irrigation systems",
        f7: "Buffer tanks",
        f8: "Climate control systems",
        f9: "Photovoltaic installations",
        f10: "Agromont Ltd.",
        f11: "We are a Polish company operating since 2013 in the domestic and European market, engaged in comprehensive installation of Dutch greenhouses and installations in production and industrial facilities. We act as a contractor of projects for principals from all over the world.",
        f12: "The company:",
        f13: "<strong>Agromont Ltd.</strong>",
        f14: "Turawska 1b",
        f15: "46-022 Zawada",
        f16: "Tel: +48 608 528 465",
        f17: "Tel: +48 602 288 850",
        f18: "E-mail: info@agromont.pl",
        f19: "&copy Lorem Ipsum",
    },
    de: {
        f1: "Unsere Dienstleistungen:",
        f2: "Gewächshauskonstruktionen",
        f3: "Beschattungssysteme",
        f4: "Heizung und Kühlung",
        f5: "Elektrik und Beleuchtung",
        f6: "Bewässerungssysteme",
        f7: "Puffertanks",
        f8: "Klimatisierungssysteme",
        f9: "Photovoltaische Anlagen",
        f10: "Agromont GmbH.",
        f11: "Wir sind ein polnisches Unternehmen, das seit 2013 auf dem heimischen und europäischen Markt tätig ist und sich mit der umfassenden Installation von niederländischen Gewächshäusern und Anlagen in Produktions- und Industrieanlagen beschäftigt. Wir sind als Projektträger für Auftraggeber aus der ganzen Welt tätig.",
        f12: "Das Unternehmen:",
        f13: "<strong>Agromont GmbH.</strong>",
        f14: "Turawska 1b",
        f15: "46-022 Zawada",
        f16: "Tel: +48 608 528 465",
        f17: "Tel: +48 602 288 850",
        f18: "E-mail: info@agromont.pl",
        f19: "&copy Lorem Ipsum",
    },
};

const ch_translate = {
    pl: {
        ch1: "Kompleksowa realizacja obiektów szklarniowych i montaż instalacji przemysłowych",
        ch2: "Sprawdź naszą ofertę i zaplanuj z nami budowę obiektu szklarniowego oraz montaż instalacji przemysłowych korzystając z najnowocześniejszej technologii i innowacyjnych rozwiązań. <br>Poznaj jakość AGROMONT, potwierdzoną realizacjami projektów w Polsce i Europie.",
        ch3: "Poznaj nas",
        ch4: "Kompleksowy montaż obiektów szklarniowych",
        ch5: "Jesteśmy Polską firmą działającą od 2013 roku na rynku krajowym i europejskim, zajmującą się kompleksowym montażem szklarni holenderskich. <br>Profil działalności  naszej firmy obejmuje kompleksowy nadzór w fazie projektowej, w czasie budowy szklarni i montażu instalacji towarzyszących, a po jej zakończeniu profesjonalny serwis oraz opiekę techniczną.",
        ch6: "Montaż instalacji szklarniowych i przemysłowych",
        ch7: "Jesteśmy specjalistami w zakresie montażu wszystkich rodzajów instalacji na obiektach szklarniowych i obiektach o charakterze przemysłowym i produkcyjnym. <br>Nasz doświadczony zespół realizuje zadania zlecone w zakresie montażu instalacji elektrycznych, grzewczych, chłodniczych, nawadniających, solarnych, zbiorników buforowych i wodnych oraz wszelkich instalacji w obiektach szklarniowych i przemysłowych.",
        ch8: "Szeroki zakres usług",
        ch9: "Nasza firma specjalizuje się w realizacji projektów pod klucz w ogrodnictwie szklarniowym. Zajmujemy się również dostarczaniem kompleksowych rozwiązań z zakresu budownictwa przemysłowego i montażu instalacji.",
        ch10: "Elastyczność i mobilność",
        ch11: "Jesteśmy w branży montażowej od prawie 20 lat. Zrealizowaliśmy kilkadziesiąt nowoczesnych szklarni wielkopowierzchniowych oraz innych obiektów przemysłowych w systemie „pod klucz”. Jesteśmy w stanie zrealizować nawet najbardziej wymagające zlecenia w dowolnej części świata.",
        ch12: "Doświadczony zespół specjalistów",
        ch13: "Od lat budujemy nasz zespół. Dzięki temu nasi monterzy to wysokiej klasy specjaliści, którzy do każdego zadania podchodzą z najwyższą starannością i uwagą. Zapewniamy naszym partnerom najwyższy standard wykonania.",
        ch14: "Dbamy o każdy szczegół",
        ch15: "Budowane przez nas obiekty i instalacje charakteryzują się wysoką trwałością i najwyższą jakością wykonania. <br>Oferujemy kompleksową budowę, montaż i serwis obiektów szklarniowych oraz innych obiektów produkcyjnych i przemysłowych.",
        ch16: "W ciągu kilkunastu lat naszej obecności na rynku zdobyliśmy bogate doświadczenie w branży konstrukcyjno-montażowej. Zrealizowaliśmy wiele projektów między innymi w Polsce, Szwajcarii, Wielkiej Brytanii, Włoszech, Ukrainie, Łotwie, Litwie, Estonii, Rosji, Kazachstanie, Wietnamie i Australii.",
        ch17: "O nas",
        ch18: "Oferta",
        ch19: "ponad",
        ch20: "zrealizowanych projektów",
        ch21: "lat doświadczenia",
        ch22: "Nasze realizacje",
        ch23: "Sprawdź najciekawsze projekty, jakie mieliśmy okazję realizować, dla naszych klientów w Polsce i Europie.",
        ch24: "Więcej informacji",
        ch25: "Agromont Sp. z o.o.",
        ch26: "Od 2013 roku świadczymy najwyższej jakości uslugi w zakresie projektowania oraz realizacji projektów budowy szklarni przemysłowych, w tym ich wyposażenia i serwisu. Współpracujemy z holenderską firmą KG Greenhouses, dostarczając nowoczesne rozwiązania szklarniowe, także konstrukcje używane. Odwiedź nas w siedzibie firmy lub skontaktuj się, aby umówić spotkanie.",
        ch27: "Turawska 1b, 46-022 Zawada, Polska",
        ch28: "Potrzebujesz więcej informacji?",
        ch29: "Zrealizuj swój projekt z nami. Zapraszamy do kontaktu!",
        ch30: " Kontakt",
    },
    en: {
        ch1: "Comprehensive implementation of greenhouse facilities and installation of industrial plants",
        ch2: "Check out our offer and plan with us the construction of a greenhouse facility and the installation of industrial installations using state-of-the-art technology and innovative solutions. <br> Experience the quality of AGROMONT, confirmed by the implementation of projects in Poland and Europe.",
        ch3: "Get to know us",
        ch4: "Comprehensive installation of greenhouse facilities",
        ch5: "We are a Polish company operating since 2013 on the domestic and European market, dealing with the comprehensive installation of Dutch greenhouses. <br> The profile of our company's activities includes comprehensive supervision during the design phase, during the construction of the greenhouse and the installation of accompanying installations, and after its completion, professional service and technical care.",
        ch6: "Installation of greenhouse and industrial installations",
        ch7: "We are specialists in the installation of all types of installations on greenhouse facilities and facilities of an industrial and manufacturing nature. <br> Our experienced team carries out commissioned tasks in the installation of electrical, heating, cooling, irrigation, solar, buffer and water tanks and all installations in greenhouse and industrial facilities.",
        ch8: "Wide range of services",
        ch9: "Our company specialises in turnkey projects in greenhouse horticulture. We are also involved in providing complex industrial construction and installation solutions.",
        ch10: "Flexibility and mobility",
        ch11: "We have been in the installation business for almost 20 years. We have completed dozens of modern large-scale greenhouses and other industrial buildings on a turnkey basis. We are able to carry out even the most demanding orders in any part of the world.",
        ch12: "Experienced team of specialists",
        ch13: "We have been building up our team for years. As a result, our fitters are high-calibre specialists who approach every task with the utmost care and attention. We provide our partners with the highest standard of workmanship.",
        ch14: "We take care of every detail",
        ch15: "The facilities and installations we build are characterised by high durability and top quality workmanship. <br> We offer comprehensive construction, installation and servicing of greenhouse facilities and other production and industrial facilities.",
        ch16: "During the several years we have been on the market, we have gained a wealth of experience in the construction and assembly industry. We have completed numerous projects in Poland, Switzerland, the UK, Italy, Ukraine, Latvia, Lithuania, Estonia, Russia, Kazakhstan, Vietnam and Australia, among others.",
        ch17: "About us",
        ch18: "Offer",
        ch19: "over",
        ch20: "projects carried out",
        ch21: "years of experience",
        ch22: "Our realisations",
        ch23: "Check out the most interesting projects we have had the opportunity to realise, for our clients in Poland and Europe.",
        ch24: "More information",
        ch25: "Agromont Ltd.",
        ch26: "Since 2013, we have been providing top quality services in the design and implementation of industrial greenhouse projects, including equipment and service. We work with the Dutch company KG Greenhouses, providing modern greenhouse solutions, including second-hand structures. Visit us at our headquarters or contact us to arrange an appointment.",
        ch27: "Turawska 1b, 46-022 Zawada, Poland",
        ch28: "Need more information?",
        ch29: "Realise your project with us. Feel free to contact us!",
        ch30: "Contact",
    },
    de: {
        ch1: "Umfassende Realisierung von Gewächshausanlagen und Installation von Industrieanlagen",
        ch2: "Informieren Sie sich über unser Angebot und planen Sie mit uns den Bau einer Gewächshausanlage und die Installation von Industrieanlagen mit modernster Technik und innovativen Lösungen. <br> Erleben Sie die Qualität von AGROMONT, bestätigt durch die Durchführung von Projekten in Polen und Europa.",
        ch3: "Lernen Sie uns kennen",
        ch4: "Umfassende Installation von Gewächshausanlagen",
        ch5: "Wir sind ein polnisches Unternehmen, das seit 2013 auf dem heimischen und europäischen Markt tätig ist und sich mit der umfassenden Installation von niederländischen Gewächshäusern beschäftigt. <br> Zum Geschäftsprofil unseres Unternehmens gehört die umfassende Betreuung während der Planungsphase, während des Baus des Gewächshauses und der Installation der dazugehörigen Anlagen sowie nach der Fertigstellung der professionelle Service und die technische Betreuung.",
        ch6: "Installation von Gewächshaus- und Industrieanlagen",
        ch7: "Wir sind Spezialisten für die Installation aller Arten von Anlagen in Gewächshäusern, Industrie- und Produktionsbetrieben. <br> Unser erfahrenes Team führt Auftragsarbeiten in den Bereichen Elektro-, Heizungs-, Kühlungs-, Bewässerungs-, Solar-, Puffer- und Wassertankinstallation sowie alle Installationen in Gewächshäusern und Industrieanlagen durch.",
        ch8: "Breite Palette von Dienstleistungen",
        ch9: "Unser Unternehmen ist auf schlüsselfertige Projekte im Gewächshausgartenbau spezialisiert. Wir bieten auch komplexe industrielle Bau- und Installationslösungen an.",
        ch10: "Flexibilität und Mobilität",
        ch11: "Wir sind seit fast 20 Jahren im Installationsgeschäft tätig. Wir haben Dutzende von modernen Großgewächshäusern und anderen Industriegebäuden schlüsselfertig erstellt. Wir sind in der Lage, auch die anspruchsvollsten Aufträge in allen Teilen der Welt auszuführen.",
        ch12: "Erfahrenes Team von Spezialisten",
        ch13: "Wir bauen unser Team seit Jahren auf. Daher sind unsere Monteure hochkarätige Spezialisten, die jede Aufgabe mit größter Sorgfalt und Aufmerksamkeit angehen. Wir bieten unseren Partnern den höchsten Standard in der Verarbeitung.",
        ch14: "Wir kümmern uns um jedes Detail",
        ch15: "Die von uns gebauten Anlagen und Installationen zeichnen sich durch eine hohe Lebensdauer und eine hochwertige Verarbeitung aus. <br> Wir bieten umfassende Bau-, Installations- und Serviceleistungen für Gewächshausanlagen und andere Produktions- und Industrieanlagen.",
        ch16: "In den vielen Jahren, in denen wir auf dem Markt sind, haben wir einen großen Erfahrungsschatz in der Bau- und Montagebranche gesammelt. Wir haben zahlreiche Projekte u. a. in Polen, der Schweiz, dem Vereinigten Königreich, Italien, der Ukraine, Lettland, Litauen, Estland, Russland, Kasachstan, Vietnam und Australien durchgeführt.",
        ch17: "Über uns",
        ch18: "Angebot",
        ch19: "über",
        ch20: "durchgeführte Projekte",
        ch21: "langjährige Erfahrung",
        ch22: "Unsere Realisierungen",
        ch23: "Sehen Sie sich die interessantesten Projekte an, die wir für unsere Kunden in Polen und Europa realisieren durften.",
        ch24: "Weitere Informationen",
        ch25: "Agromont GmgH.",
        ch26: "Seit 2013 bieten wir erstklassige Dienstleistungen bei der Planung und Umsetzung von Industriegewächshausprojekten, einschließlich Ausrüstung und Service. Wir arbeiten mit dem niederländischen Unternehmen KG Greenhouses zusammen, das moderne Gewächshauslösungen, auch aus zweiter Hand, anbietet. Besuchen Sie uns in unserer Zentrale oder vereinbaren Sie einen Termin mit uns.",
        ch27: "Turawska 1b, 46-022 Zawada, Polen",
        ch28: "Benötigen Sie weitere Informationen?",
        ch29: "Realisieren Sie Ihr Projekt mit uns. Nehmen Sie Kontakt mit uns auf!",
        ch30: "Kontakt",
    },
};

const ca_translate = {
    pl: {
        ca1: "Usługi<br>CNC",
    },
    en: {
        ca1: "CNC<br>Services",
    },
    de: {
        ca1: "CNC<br>dienstleistungen",
    },
};

const co_translate = {
    pl: {
        co1: "Zakres<br>usług",
    },
    en: {
        co1: "Scope of<br>Services",
    },
    de: {
        co1: "Leitungs<br>spektrum",
    },
};

const cr_translate = {
    pl: {
        cr1: "Zapoznaj się z galerią przykładowych detali, wykonanych w technologii CNC w naszym warsztacie.",
    },
    en: {
        cr1: "See the gallery of sample details made with the use of CNC technology in our workshop.",
    },
    de: {
        cr1: "Werfen Sie einen Blick auf die Galerie mit Detailsbeispielen, die in unserer Werkstatt mit CNC-Technik hergestellt wurden.",
    },
};

const cc_translate = {
    pl: {
        cc1: "Usługę wyceniamy w 24 godziny lub szybciej. Jeśli chcesz porozmawiać o zleceniu osobiście, to zapraszamy do naszej siedziby w miejscowości Rudniki. Możesz do nas dojechać autostradą A1 lub drogą krajową nr 91.",
    },
    en: {
        cc1: "We will quote the service in 24 hours or less. If you want to talk about the order in person, we invite you to our headquarters in Rudniki. You can reach us via A1 highway or state road no. 91.",
    },
    de: {
        cc1: "Einen Kostenvoranschlag für unsere Dienstleistungen erhalten Sie innerhalb von 24 Stunden oder weniger. Wenn Sie eine Bestellung persönlich besprechen möchten, besuchen Sie bitte unsere Hauptgeschäftsstelle in Rudniki. Sie erreichen uns über die Autobahn A1 oder die Bundesstraße 91.",
    },
};
