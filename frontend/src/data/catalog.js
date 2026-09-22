// ─────────────────────────────────────────────────────────────────────
// Fruitivo — katalog dat
// TODO(ASSETS): Produktové vizuály jsou DOČASNĚ vektorové ilustrace
// (components/ProductArt.jsx). Pro finální web nahradit vlastními assety.
// Pole `asset` u produktu je připraveno na budoucí režimy:
//   { type: 'frames', baseUrl, count, ext } → 360° spin ze sekvenčních snímků
//   { type: 'glb', src }                    → 3D model přes React Three Fiber
// ─────────────────────────────────────────────────────────────────────

export const NAV_ITEMS = [
  { id: "01", label: "Produkty", target: "#produkty" },
  { id: "02", label: "Příběh", target: "#pribeh" },
  { id: "03", label: "Proces", target: "#denik" },
  { id: "04", label: "Sady", target: "#sady" },
  { id: "05", label: "Sklizeň", target: "#sklizen" },
  { id: "06", label: "Kontakt", target: "#kontakt" },
];

export const MARQUEE_TEXT =
  "OBNOVA POŠKOZENÉ PŮDY • ČISTÉ BIO OVOCE • ŽIVÁ PŮDA • PLNÁ CHUŤ • BEZ CHEMIE • POCTIVÉ ZEMĚDĚLSTVÍ • ";

// sceneBg = plochá barva scény produktu · sceneInk = 'dark' | 'light'
// Pořadí kategorií: od ověřených sadových klasik po vzácné a divoké plody.
export const CATEGORIES = [
  {
    id: "orchard",
    index: "01",
    name: "Klasické sady",
    accent: "#9E2A2B",
    tagline: "Prověřené druhy z rodinných výsadeb na regenerované půdě.",
    products: [
      {
        id: "pomegranate", name: "granátové jablko", displayName: "Granátové jablko", latin: "Punica granatum",
        subtitle: "Rubínová zrna plná síly",
        description: "Uvnitř každého plodu se ukrývají rubínová zrna, která v sobě nesou intenzivní, dokonale vyváženou chuť – spojení hluboké sladkosti a osvěžující, trpké jiskrnosti. Díky pěstování na vyprahlých řeckých terasách má naše ovoce mnohem plnější a koncentrovanější chuť než to z běžných velkovýrob.",
        usage: "Sladce trpkavá šťáva plná semínek, prodáváme plody i lisovanou šťávu.",
        orchard: "Sad Peloponés, Řecko",
        notes: ["Rubínové víno", "Brusinka", "Dřevo"],
        soil: "Kamenité terasy s hlubokým kořenovým systémem",
        sceneBg: "#EEEBE1", sceneInk: "light",
      },
      {
        id: "kiwi", name: "kiwi", displayName: "Kiwi", latin: "Actinidia deliciosa",
        subtitle: "Kiwi z rodinných výsadeb",
        description: "Dokonale vyvážená kombinace osvěžující kyselosti a podmanivé sladkosti, skrytá pod jemně chlupatou slupkou. Naše kiwi v sobě ukrývají obrovskou porci vitamínu C a jasně zelenou, neuvěřitelně šťavnatou dužinu plnou drobných semínek. Žádná rychlovelkovýroba, ale poctivý plod, který zrál v harmonii s čistou přírodou.",
        usage: "Sladce nakyslé a šťavnaté, prodáváme výhradně čerstvé.",
        orchard: "Sad Guria, Gruzie",
        notes: ["Světlá jahoda", "Tráva", "Citrus"],
        soil: "Vlhké humózní půdy s mikrobiálním životem",
        sceneBg: "#EEEBE1", sceneInk: "dark",
      },
      {
        id: "avocado", name: "avokádo", displayName: "Avokádo", latin: "Persea americana",
        subtitle: "Krémové avokádo Hass",
        description: "Neodolatelně krémová, máslová textura a jemně oříšková chuť, která se rozplyne na jazyku. Naše avokáda v sobě nesou sílu chilského slunce a jsou nabitá přirozenými, zdravými tuky. Žádná rychlovelkovýroba, ale poctivý plod, který zrál přesně tak dlouho, jak příroda potřebovala.",
        usage: "Krémové a máslové, prodáváme výhradně čerstvé.",
        orchard: "Sad Petorca, Chile",
        notes: ["Lískový oříšek", "Máslo", "Čerstvé obilí"],
        soil: "Pórovitá úrodná hlinitá půda",
        sceneBg: "#EEEBE1", sceneInk: "light",
      },
      {
        id: "watermelon", name: "vodní meloun", displayName: "Vodní meloun", latin: "Citrullus lanatus",
        subtitle: "Sladký meloun z teplých písků",
        description: "Osvěžující, neuvěřitelně šťavnatá dužina s čistou, přirozenou sladkostí, která spolehlivě zažene žízeň. Naše melouny v sobě nesou křupavou svěžest sluncem zalitých polí. Žádná rychlovelkovýroba, ale poctivý plod plný letní energie.",
        usage: "Šťavnatý a osvěžující, prodáváme čerstvý, sezónně.",
        orchard: "Sad Kalahari, Namibie",
        notes: ["Cukrová voda", "Růžové poupě", "Okurková svěžest"],
        soil: "Písčité duny vyhřáté letním sluncem",
        sceneBg: "#EEEBE1", sceneInk: "light",
      },
    ],
  },
  {
    id: "citrus",
    index: "02",
    name: "Citrusy",
    accent: "#688F35",
    tagline: "Esenciální oleje, ostrá svěžest a kůra bez vosků a postřiků.",
    products: [
      {
        id: "lime", name: "limetka", displayName: "Limetka", latin: "Citrus aurantiifolia",
        subtitle: "Šťavnatá mexická limetka",
        description: "Intenzivní, čistá kyselost s podtóny svěžích aromatických silic z kůry. Naše limetky v sobě nesou prudkou energii a neuvěřitelně šťavnatou dužinu. Žádná rychlovelkovýroba, ale poctivý plod, který dopsal svůj příběh pod horkým sluncem. Skvělé do drinků, asijské kuchyně nebo prostě všude tam, kde chcete probudit chuťové buňky.",
        usage: "Ostře kyselá, prodáváme čerstvou i jako sušenou kůru.",
        orchard: "Sad San Joaquin, Kalifornie, USA",
        notes: ["Ostrá kyselost", "Citrusový květ", "Kůra"],
        soil: "Vápencové podloží s organickým mulčem",
        sceneBg: "#EEEBE1", sceneInk: "dark",
      },
      {
        id: "lemon", name: "citron", displayName: "Citron", latin: "Citrus limon",
        subtitle: "Aromatický citron Eureka",
        description: "Ostrá, zářivá a povzbuzující kyselost doprovázená bohatým esenciálním aroma v silné kůře. Naše citrony v sobě nesou jiskrnou energii a maximální šťavnatost. Žádná rychlovelkovýroba, ale poctivý plod, který dozrál do dokonalé síly.",
        usage: "Intenzivně vonná kůra a kyselá šťáva, prodáváme čerstvý i sušenou kůru.",
        orchard: "Sad San Joaquin, Kalifornie, USA",
        notes: ["Svěží kyselost", "Eukalyptus", "Květinový tón"],
        soil: "Regenerovaná kamenitá půda s jíchem z kopřiv",
        sceneBg: "#EEEBE1", sceneInk: "dark",
      },
    ],
  },
  {
    id: "tropical",
    index: "03",
    name: "Tropické ovoce",
    accent: "#E06A26",
    tagline: "Ovoce z teplých obnovených oblastí — sluncem nasáklé, sklizené v plné zralosti.",
    products: [
      {
        id: "mango", name: "mango", displayName: "Mango", latin: "Mangifera indica",
        subtitle: "Odrůda Kent z komunitních sadů",
        description: "Bohatá, hedvábně hladká a hutná dužina s hlubokou, medovou sladkostí a tropickým aroma. Naše manga v sobě nesou sluncem prohřátou chuť dálek. Žádná rychlovelkovýroba, ale poctivý plod, který změkl v té správné harmonii.",
        usage: "Sladké a šťavnaté, prodáváme čerstvé i jako sušené plátky.",
        orchard: "Sad Kuranda, Queensland, Austrálie",
        notes: ["Med", "Citrusová kůra", "Tropický nektar"],
        soil: "Hluboká červená jílovitá půda s vysokým podílem humusu",
        sceneBg: "#EEEBE1", sceneInk: "dark",
      },
      {
        id: "papaya", name: "papája", displayName: "Papája", latin: "Carica papaya",
        subtitle: "Sladká papája Formosa",
        description: "Máslově jemná, rozplývající se dužina s lahodnou, sametovou sladkostí připomínající meloun a jemné tóny pižma. Naše papáji v sobě nesou lehkost a tropickou svěžest. Žádná rychlovelkovýroba, ale poctivý plod plný života.",
        usage: "Sladká, máslová dužina, prodáváme čerstvou i jako sušené plátky.",
        orchard: "Sad Kuranda, Queensland, Austrálie",
        notes: ["Karamel", "Meloun", "Vanilka"],
        soil: "Vulkanický popel a regenerovaná lesní prst",
        sceneBg: "#EEEBE1", sceneInk: "light",
      },
      {
        id: "dragonfruit", name: "dračí ovoce", displayName: "Dračí ovoce", latin: "Hylocereus undatus",
        subtitle: "Pitahaya s jemnou dužinou",
        description: "Jemná, osvěžující a elegantní chuť s krémovou texturou posetou křupavými černými semínky, která připomíná křížence hrušky a kiwi. Naše dračí ovoce v sobě nesou tajemnou exotiku. Žádná rychlovelkovýroba, ale poctivý plod plný čisté přírodní vláhy.",
        usage: "Jemně sladké a osvěžující, prodáváme výhradně čerstvé.",
        orchard: "Sad León, Nikaragua",
        notes: ["Kiwi", "Ostružina", "Limetková svěžest"],
        soil: "Písčitohlinitá drenážovaná půda s biouhlem",
        sceneBg: "#EEEBE1", sceneInk: "light",
      },
      {
        id: "lychee", name: "liči", displayName: "Liči", latin: "Litchi chinensis",
        subtitle: "Královské liči s květinovým aroma",
        description: "Šťavnatá, průsvitná dužina s parfémově sladkou, květinovou chutí a osvěžujícím podtónem. Naše liči v sobě nesou jedinečnou delikatesu. Žádná rychlovelkovýroba, ale poctivý plod plný intenzivního aroma.",
        usage: "Sladká, aromatická dužina kolem pecky, prodáváme čerstvé.",
        orchard: "Sad Kuranda, Queensland, Austrálie",
        notes: ["Růže", "Muškátový hrozen", "Bílý čaj"],
        soil: "Aluviální naplaveniny bohaté na minerály",
        sceneBg: "#EEEBE1", sceneInk: "dark",
      },
      {
        id: "passionfruit", name: "marakuja", displayName: "Marakuja", latin: "Passiflora edulis",
        subtitle: "Intenzivní mučenka jedlá",
        description: "Intenzivní, exotická a podmanivě kyselkavá chuť ukrytá pod voňavou gelovou strukturou plnou křupavých semínek. Naše maracuji v sobě nesou explozi tropické svěžesti. Žádná rychlovelkovýroba, ale poctivý plod plný hlubokého aroma.",
        usage: "Intenzivně kyselá a aromatická, skvělá čerstvá i do smoothie.",
        orchard: "Sad Kuranda, Queensland, Austrálie",
        notes: ["Marakuja", "Žlutý citron", "Divoký med"],
        soil: "Mulčované terasy s krycími plodinami",
        sceneBg: "#EEEBE1", sceneInk: "dark",
      },
    ],
  },
  {
    id: "rare",
    index: "04",
    name: "Vzácné a divoké",
    accent: "#D49013",
    tagline: "Zapomenuté plody starých kultur, pěstované v malých dávkách.",
    products: [
      {
        id: "physalis", name: "mochyně", displayName: "Mochyně", latin: "Physalis peruviana",
        subtitle: "Incká třešně v přirozeném kalichu",
        description: "Malé zlatavé bobulky ukryté v papírovém lampionku, které překvapí jedinečnou, sladkokyselou chutí s jemným nádechem ananasu a vanilky. Naše mochyne v sobě nesou koncentrovanou sluneční sílu. Žádná rychlovelkovýroba, ale poctivý, hravý plod plný chuti.",
        usage: "Sladce nakyslá, nejlépe chutná sušená jako svačina.",
        orchard: "Sad Karoo, Jižní Afrika",
        notes: ["Ananas", "Angrešt", "Karamel"],
        soil: "Suché obnovené stráně s lokální mykorhízou",
        sceneBg: "#EEEBE1", sceneInk: "dark",
      },
      {
        id: "pawpaw", name: "asimina", displayName: "Asimina", latin: "Asimina triloba",
        subtitle: "Severoamerický banánovec",
        description: "Neuvěřitelně krémová, pudinková textura a fascinující chuťový profil, který v sobě mísí tóny zralého banánu, manga a ananasu. Naše asiminy v sobě nesou překvapivou, divokou exotiku, a přitom zrály v mírném pásu. Žádná rychlovelkovýroba, ale vzácný, poctivý plod, který voní po dáli a zrál v harmonii s regenerovanou přírodou.",
        usage: "Krémová dužina s nádechem banánu a manga, prodáváme jen čerstvou, špatně se skladuje.",
        orchard: "Sad Ohio Valley, Ohio, USA",
        notes: ["Banánový krém", "Mango", "Kokosové mléko"],
        soil: "Hluboké lužní půdy s bohatým opadem",
        sceneBg: "#EEEBE1", sceneInk: "dark",
      },
    ],
  },
];

// plochý seznam scén pro slider (nekonečná smyčka)
// Seřazeno podle ODTĚNŮ barev (zelená → žlutá → oranžová → červená → růžová),
// aby přechody barev pozadí působily přirozeně a plynule; smyčka se uzavírá zpět do zelené.
const SCENE_ORDER = [
  "avocado", "kiwi", "lime", "pawpaw", "lemon", "passionfruit",
  "physalis", "mango", "papaya", "watermelon", "pomegranate", "dragonfruit", "lychee",
];
const ALL_SCENES = CATEGORIES.flatMap((cat) =>
  cat.products.map((p) => ({ ...p, categoryId: cat.id, categoryName: cat.name, accent: cat.accent }))
);
export const SCENES = SCENE_ORDER.map((id) => ALL_SCENES.find((p) => p.id === id));

export const sceneIndexOf = (productId) => SCENES.findIndex((s) => s.id === productId);
export const categoryStartIndex = (categoryId) => SCENES.findIndex((s) => s.categoryId === categoryId);

export const ROOTS = {
  title: "Náš příběh",
  lead: "Fruitivo vzniklo z jednoho přání — přivést sem ovoce, které u nás neroste, a udělat to poctivě.",
  chapters: [
    { number: "01", title: "Tam, kam patří", text: "Jezdíme za ním tam, kam patří. Do míst, kde slunce svítí skoro celý rok, ale kde má půda za sebou těžké roky — sucho, požáry, vyčerpanou zem. Tyhle pozemky kupujeme a dáváme jim čas se zase nadechnout." },
    { number: "02", title: "Neděláme to sami", text: "Učíme se od lidí, kteří tam žijí a starají se o zem odjakživa. Oni vědí, jak s půdou a rostlinami zacházet — my jim pomáháme s obnovou a časem, který to potřebuje." },
    { number: "03", title: "Kousek jiného světa", text: "Když sad zase začne rodit, ovoce dovezeme domů. Chceme, aby si u nás lidé mohli vychutnat kousek jiného světa — takového, jaký doopravdy je, bez zbytečných oklik." },
    { number: "04", title: "Zpátky k zemi a lidem", text: "A protože nám na těch místech záleží dál, část z každého prodeje se vrací zpátky tam, odkud ovoce přišlo — k zemi i k lidem, kteří nám s ní pomáhají." },
  ],
};

export const HARVEST = {
  title: "Sklizeň",
  subtitle: "Na některých z našich pozemků se sklízí prakticky pořád.",
  intro: "Na některých z našich pozemků se sklízí prakticky pořád. Zatímco na Peloponésu dozrávají granátová jablka, v Queenslandu se právě sklidí mango. Sezóna nikdy úplně nekončí — jen se přesouvá po mapě.",
  outro: "Sklizeň neděláme sami. Řídí se jí lidé, kteří na dané zemi pracují roky, často generace před námi. My jen přidáváme čas a péči, co si obnovená půda zaslouží — kdy přesně se trhá, pozná zkušenost, ne kalendář. Od utržení plodu po odjezd k vám uplyne jen pár dnů.",
  // months: 0 = leden … 11 = prosinec; sad se odvodí z údaje orchard u produktu
  items: [
    { productId: "mango", months: [11, 0, 1] },
    { productId: "passionfruit", months: [1, 2, 3] },
    { productId: "papaya", months: [0, 1, 2] },
    { productId: "lychee", months: [10, 11] },
    { productId: "dragonfruit", months: [5, 6, 7, 8] },
    { productId: "lime", months: [4, 5, 6, 7] },
    { productId: "lemon", months: [10, 11, 0] },
    { productId: "physalis", months: [1, 2, 3] },
    { productId: "pomegranate", months: [8, 9, 10] },
    { productId: "avocado", months: [7, 8, 9, 10] },
    { productId: "watermelon", months: [0, 1, 2] },
    { productId: "kiwi", months: [9, 10] },
    { productId: "pawpaw", months: [8, 9] },
  ],
};

export const MONTHS = ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"];

export const ORCHARDS = {
  title: "Naše obnovené sady",
  subtitle: "Devět území napříč kontinenty, kterým vracíme život",
  locations: [
    {
      id: "kuranda",
      name: "Sad Kuranda",
      place: "Queensland, Austrálie",
      crops: "mango, marakuja, papája, liči",
      text: "Bývalá buš zasažená požáry, dnes největší sad v naší síti.",
      image: "/assets/sad-kuranda.jpg",
      pin: { x: 90.4, y: 59.3 },
    },
    {
      id: "leon",
      name: "Sad León",
      place: "Nikaragua",
      crops: "dračí ovoce",
      text: "Půda obnovená po letech odlesňování, dnes domov dračího ovoce.",
      image: "/assets/sad-leon.jpg",
      pin: { x: 25.9, y: 43.1 },
    },
    {
      id: "sanjoaquin",
      name: "Sad San Joaquin",
      place: "Kalifornie, USA",
      crops: "limetka, citron",
      text: "Údolí vysušené lety sucha, citrusy sem vrátily život i vodu.",
      image: "/assets/sad-sanjoaquin.jpg",
      pin: { x: 16.7, y: 29.7 },
    },
    {
      id: "karoo",
      name: "Sad Karoo",
      place: "Jižní Afrika",
      crops: "mochyně",
      text: "Země po vodní krizi, kde nenáročná mochyně otevřela cestu dalším plodinám.",
      image: "/assets/sad-karoo.jpg",
      pin: { x: 56.1, y: 67.9 },
    },
    {
      id: "pelopones",
      name: "Sad Peloponés",
      place: "Řecko",
      crops: "granátové jablko",
      text: "Staré olivové háje zasažené požáry roku 2021, obnovené pod granátovými sady.",
      image: "/assets/sad-pelopones.jpg",
      pin: { x: 56.2, y: 29.2 },
    },
    {
      id: "petorca",
      name: "Sad Petorca",
      place: "Chile",
      crops: "avokádo",
      text: "Region známý vodní krizí, kde obnova půdy začíná dávat smysl i ekonomicky.",
      image: "/assets/sad-petorca.jpg",
      pin: { x: 30.3, y: 67.9 },
    },
    {
      id: "kalahari",
      name: "Sad Kalahari",
      place: "Namibie",
      crops: "vodní meloun",
      text: "Domovina divokého melounu, odkud pochází i ten na vašem stole.",
      image: "/assets/sad-kalahari.jpg",
      pin: { x: 56.7, y: 62.2 },
    },
    {
      id: "guria",
      name: "Sad Guria",
      place: "Gruzie",
      crops: "kiwi",
      text: "Terasovité svahy opuštěné po rozpadu sovětských zemědělských družstev, dnes znovu zpevněné kořeny popínavého kiwi.",
      image: "/assets/sad-guria.jpg",
      pin: { x: 61.7, y: 26.7 },
    },
    {
      id: "ohiovalley",
      name: "Sad Ohio Valley",
      place: "Ohio, USA",
      crops: "asimina",
      text: "Půda vyčerpaná generacemi monokultury kukuřice a sóji, dnes návrat k asimině — původnímu americkému ovoci.",
      image: "/assets/sad-ohiovalley.jpg",
      pin: { x: 27.1, y: 28.3 },
    },
  ],
};

export const PROCESS = {
  title: "Jak to funguje",
  subtitle: "Od zničené země po ovoce na vašem stole",
  steps: [
    {
      number: "01",
      title: "Najdeme pozemek",
      text: "Hledáme půdu zasaženou požárem, suchem nebo lety vyčerpávajícího hospodaření — v regionech, kde přirozeně roste ovoce, které chceme pěstovat.",
    },
    {
      number: "02",
      title: "Koupíme ji",
      text: "Právě proto, že je poškozená, bývá levná. Kupujeme zemi, o kterou velké farmy přestaly stát.",
    },
    {
      number: "03",
      title: "Vrátíme jí vodu a mikrobiom",
      text: "Nejdřív se staráme o půdu samotnou, ne o rostliny na ní — kompost, krycí plodiny a obnova mikroorganismů, které oheň nebo roky sucha z hlíny vzaly.",
      core: true,
    },
    {
      number: "04",
      title: "Necháme jí čas",
      text: "Obnova půdy trvá roky, ne měsíce. Teprve když je země znovu schopná držet vodu a živiny, má smysl na ni něco sázet.",
      core: true,
    },
    {
      number: "05",
      title: "Vysadíme odolné odrůdy",
      text: "Sázíme plodiny, které svými hlubokými kořeny půdu dále stabilizují a chrání před opětovnou erozí.",
    },
    {
      number: "06",
      title: "Sklidíme a dovezeme",
      text: "Zralé ovoce sklidíme a dopravíme čerstvé nebo šetrně sušené až k vám do Česka.",
    },
  ],
};

export const FOOTER = {
  statement: "Pěstujeme na živé zemi.",
  email: "info@fruitivo.cz",
  phone: "+420 800 567 369",
  address: "Fruitivo s.r.o. — Sokola Tůmy 402/12, 737 01 Český Těšín",
  socials: ["Instagram", "LinkedIn", "Pinterest"],
  copyright: "© 2026 Fruitivo s.r.o. Všechna práva vyhrazena.",
};
