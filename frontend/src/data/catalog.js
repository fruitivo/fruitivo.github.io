export const NAV_ITEMS = [
  { id: "01", label: "Produkty", target: "#produkty" },
  { id: "02", label: "Příběh", target: "#pribeh" },
  { id: "03", label: "Proces", target: "#denik" },
  { id: "04", label: "Sady", target: "#sady" },
  { id: "05", label: "Sklizeň", target: "#sklizen" },
  { id: "06", label: "Kontakt", target: "#kontakt" },
];

export const MARQUEE_TEXT = "OBNOVA POŠKOZENÉ PŮDY • ČISTÉ BIO OVOCE • ŽIVÁ PŮDA • PLNÁ CHUŤ • BEZ CHEMIE • POCTIVÉ ZEMĚDĚLSTVÍ • ";

const product = (id, name, displayName, latin, subtitle, description, usage, orchard, notes, soil, sceneInk = "dark") => ({
  id, name, displayName, latin, subtitle, description, usage, orchard, notes, soil, sceneBg: "#EEEBE1", sceneInk,
});

export const CATEGORIES = [
  { id: "orchard", index: "01", name: "Klasické sady", accent: "#9E2A2B", tagline: "Prověřené druhy z rodinných výsadeb na regenerované půdě.", products: [
    product("pomegranate", "granátové jablko", "Granátové jablko", "Punica granatum", "Rubínová zrna plná síly", "Uvnitř každého plodu se ukrývají rubínová zrna, která v sobě nesou intenzivní, dokonale vyváženou chuť – spojení hluboké sladkosti a osvěžující, trpké jiskrnosti. Díky pěstování na vyprahlých řeckých terasách má naše ovoce mnohem plnější a koncentrovanější chuť než to z běžných velkovýrob.", "Sladce trpkavá šťáva plná semínek, prodáváme plody i lisovanou šťávu.", "Sad Peloponés, Řecko", ["Rubínové víno", "Brusinka", "Dřevo"], "Kamenité terasy s hlubokým kořenovým systémem", "light"),
    product("kiwi", "kiwi", "Kiwi", "Actinidia deliciosa", "Kiwi z rodinných výsadeb", "Po rozpadu sovětských zemědělských družstev zůstala v gruzínské Gurii spousta terasovitých svahů bez péče.", "Sladce nakyslé a šťavnaté, prodáváme výhradně čerstvé.", "Sad Guria, Gruzie", ["Svěží jahoda", "Tráva", "Citrus"], "Vlhké humózní půdy s mikrobiálním životem"),
    product("avocado", "avokádo", "Avokádo", "Persea americana", "Krémové avokádo Hass", "Neodolatelně krémová, máslová textura a jemně oříšková chuť, která se rozplyne na jazyku. Naše avokáda v sobě nesou sílu chilského slunce a jsou nabitá přirozenými, zdravými tuky. Žádná rychlovelkovýroba, ale poctivý plod, který zrál přesně tak dlouho, jak příroda potřebovala.", "Krémové a máslové, prodáváme výhradně čerstvé.", "Sad Petorca, Chile", ["Lískový oříšek", "Máslo", "Čerstvé obilí"], "Pórovitá úrodná hlinitá půda", "light"),
    product("watermelon", "vodní meloun", "Vodní meloun", "Citrullus lanatus", "Sladký meloun z teplých písků", "Divoký meloun pravděpodobně pochází přímo z pouště Kalahari, kde roste dodnes.", "Šťavnatý a osvěžující, prodáváme čerstvý, sezónně.", "Sad Kalahari, Namibie", ["Cukrová voda", "Růžové poupě", "Okurková svěžest"], "Písčité duny vyhřívané letním sluncem", "light"),
  ] },
  { id: "citrus", index: "02", name: "Citrusy", accent: "#688F35", tagline: "Esenciální oleje, ostrá svěžest a kůra bez vosků a postřiků.", products: [
    product("lime", "limetka", "Limetka", "Citrus aurantiifolia", "Šťavnatá mexická limetka", "Údolí San Joaquin patří mezi oblasti nejvíc zasažené dlouhodobým suchem v Kalifornii.", "Ostře kyselá, prodáváme čerstvou i jako sušenou kůru.", "Sad San Joaquin, Kalifornie, USA", ["Ostrá kyselost", "Citrusový květ", "Kůra"], "Vápencové podloží s organickým mulčem"),
    product("lemon", "citron", "Citron", "Citrus limon", "Aromatický citron Eureka", "Roste ve stejném údolí jako naše limetky — v oblasti dlouhodobě zasažené suchem.", "Intenzivně vonná kůra a kyselá šťáva, prodáváme čerstvý i sušenou kůru.", "Sad San Joaquin, Kalifornie, USA", ["Svěží kyselost", "Eukalyptus", "Květinový tón"], "Regenerovaná kamenitá půda s jíchou z kopřiv"),
  ] },
  { id: "tropical", index: "03", name: "Tropické ovoce", accent: "#E06A26", tagline: "Ovoce z teplých obnovených oblastí — sluncem nasáklé, sklízené v plné zralosti.", products: [
    product("mango", "mango", "Mango", "Mangifera indica", "Odrůda Kent z komunitních sadů", "Mangovník potřebuje přesně to, co dnes queenslandská buš nabízí až příliš — žár a sucho.", "Sladké a šťavnaté, prodáváme čerstvé i jako sušené plátky.", "Sad Kuranda, Queensland, Austrálie", ["Med", "Citrusová kůra", "Tropický nektar"], "Hluboká červená jílovitá půda s vysokým podílem humusu"),
    product("papaya", "papája", "Papája", "Carica papaya", "Sladká papája Formosa", "Roste na stejném pozemku jako naše mango — queenslandské buši, která si prošla opakovanými požáry.", "Sladká, máslová dužina, prodáváme čerstvou i jako sušené plátky.", "Sad Kuranda, Queensland, Austrálie", ["Karamel", "Meloun", "Vanilka"], "Vulkanický popel a regenerovaná lesní prsť", "light"),
    product("dragonfruit", "dračí ovoce", "Dračí ovoce", "Hylocereus undatus", "Pitahaya s jemnou dužinou", "Popínavý kaktus dračího ovoce roste tam, kde po odlesnění zbyla jen tenká vrstva vyprahlé půdy.", "Jemně sladké a osvěžující, prodáváme výhradně čerstvé.", "Sad León, Nikaragua", ["Kiwi", "Ostružina", "Limetková svěžest"], "Písčitohlinitá drenážovaná půda s biouhlem", "light"),
    product("lychee", "liči", "Liči", "Litchi chinensis", "Královské liči s květinovým aroma", "Další plodina ze stejného sadu jako mango a papája — queenslandská buš, kde po požárech obnovujeme půdu.", "Sladká, aromatická dužina kolem pecky, prodáváme čerstvé.", "Sad Kuranda, Queensland, Austrálie", ["Růže", "Muškátový hrozen", "Bílý čaj"], "Aluviální naplaveniny bohaté na minerály"),
    product("passionfruit", "marakuja", "Marakuja", "Passiflora edulis", "Intenzivní mučenka jedlá", "Popínavá réva marakuji pomáhá rychle zapojit kořeny do stabilizace svahu.", "Intenzivně kyselá a aromatická, skvělá čerstvá i do smoothie.", "Sad Kuranda, Queensland, Austrálie", ["Marakuja", "Žlutý citron", "Divoký med"], "Mulčované terasy s krycími plodinami"),
  ] },
  { id: "rare", index: "04", name: "Vzácné a divoké", accent: "#D49013", tagline: "Zapomenuté plody starých kultur, pěstované v malých dávkách.", products: [
    product("physalis", "mochyně", "Mochyně", "Physalis peruviana", "Incká třešeň v přírodním kalichu", "Mochyně patřila mezi první plodiny, které jsme zkusili na vyprahlé půdě.", "Sladce nakyslá, nejlíp chutná sušená jako svačina.", "Sad Karoo, Jižní Afrika", ["Ananas", "Angrešt", "Karamel"], "Suché obnovené stráně s lokální mykorhízou"),
    product("pawpaw", "asimina", "Asimina", "Asimina triloba", "Severoamerický banánovec", "Asimina je původní severoamerické ovoce, na které se během let velkovýroba téměř zapomněla.", "Krémová dužina s nádechem banánu a manga, prodáváme jen čerstvou.", "Sad Ohio Valley, Ohio, USA", ["Banánový krém", "Mango", "Kokosové mléko"], "Hluboké lužní půdy s bohatým opadem"),
  ] },
];

const SCENE_ORDER = ["avocado", "kiwi", "lime", "pawpaw", "lemon", "passionfruit", "physalis", "mango", "papaya", "watermelon", "pomegranate", "dragonfruit", "lychee"];
const ALL_SCENES = CATEGORIES.flatMap((cat) => cat.products.map((p) => ({ ...p, categoryId: cat.id, categoryName: cat.name, accent: cat.accent })));
export const SCENES = SCENE_ORDER.map((id) => ALL_SCENES.find((p) => p.id === id));
export const sceneIndexOf = (productId) => SCENES.findIndex((s) => s.id === productId);
export const categoryStartIndex = (categoryId) => SCENES.findIndex((s) => s.categoryId === categoryId);

export const ROOTS = { title: "Náš příběh", lead: "Fruitivo se zrodilo z jediné touhy — přivést k nám ovoce, které tady přirozeně neroste. A udělat to poctivě.", chapters: [
  { number: "01", title: "Kde to celé začíná", text: "Nezakládáme anonymní plantáže. Jezdíme tam, kde to půda nejvíc potřebuje — do krajin, které mají za sebou zkoušku v podobě sucha, požárů nebo vyčerpání. Tyhle zničené pozemky kupujeme a dáváme jim čas, péči a šanci se zase nadechnout." },
  { number: "02", title: "Neděláme to sami", text: "Na tohle bychom sami nestačili. Spojujeme se s místními lidmi, kteří tam žijí a starají se o zemi po generace. Společně tak vracíme život tam, kde už pomalu vyhasínal." },
  { number: "03", title: "Kousek jiného světa", text: "Když se oživená půda odvděčí a sady začnou rodit, ovoce sklízíme v nejlepší kondici a šetrně ho dovážíme do Česka." },
  { number: "04", title: "Kruh, který se uzavírá", text: "Část z každého prodeje se vrací tam, odkud ovoce přišlo — zpět do půdy, do výsadby nových stromů a na podporu komunit." },
] };

export const ORCHARDS = { title: "Naše obnovené sady", subtitle: "Devět území napříč kontinenty, kterým vracíme život", locations: [] };
export const HARVEST = { title: "Sklizeň", subtitle: "Na některých z našich pozemků se sklízí prakticky pořád.", intro: "Na některých z našich pozemků se sklízí prakticky pořád.", outro: "Sklizeň neděláme sami.", items: [] };
export const MONTHS = ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"];
export const PROCESS = { title: "Jak to funguje", subtitle: "Od zničené země po ovoce na vašem stole", steps: [] };
export const FOOTER = { statement: "Pěstujeme na živé zemi.", email: "fif.fruitivo@gmail.com", phone: "", address: "Fruitivo s.r.o. — Sokola Tůmy 402/12, 737 01 Český Těšín", socials: ["Instagram"], copyright: "© 2026 Fruitivo s.r.o. Všechna práva vyhrazena." };
