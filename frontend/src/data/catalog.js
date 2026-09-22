// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Fruitivo â€” katalog dat
// TODO(ASSETS): ProduktovÃ© vizuÃ¡ly jsou DOÄŒASNÃ‰ vektorovÃ© ilustrace
// (components/ProductArt.jsx). Pro finÃ¡lnÃ­ web nahradit vlastnÃ­mi assety.
// Pole `asset` u produktu je pÅ™ipraveno na budoucÃ­ reÅ¾imy:
//   { type: 'frames', baseUrl, count, ext } â†’ 360Â° spin ze sekvenÄnÃ­ch snÃ­mkÅ¯
//   { type: 'glb', src }                    â†’ 3D model pÅ™es React Three Fiber
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const NAV_ITEMS = [
  { id: "01", label: "Produkty", target: "#produkty" },
  { id: "02", label: "PÅ™Ã­bÄ›h", target: "#pribeh" },
  { id: "03", label: "Proces", target: "#denik" },
  { id: "04", label: "Sady", target: "#sady" },
  { id: "05", label: "SklizeÅˆ", target: "#sklizen" },
  { id: "06", label: "Kontakt", target: "#kontakt" },
];

export const MARQUEE_TEXT =
  "OBNOVA POÅ KOZENÃ‰ PÅ®DY â€¢ ÄŒISTÃ‰ BIO OVOCE â€¢ Å½IVÃ PÅ®DA â€¢ PLNÃ CHUÅ¤ â€¢ BEZ CHEMIE â€¢ POCTIVÃ‰ ZEMÄšDÄšLSTVÃ â€¢ ";

// sceneBg = plochÃ¡ barva scÃ©ny produktu Â· sceneInk = 'dark' | 'light'
// PoÅ™adÃ­ kategoriÃ­: od ovÄ›Å™enÃ½ch sadovÃ½ch klasik po vzÃ¡cnÃ© a divokÃ© plody.
export const CATEGORIES = [
  {
    id: "orchard",
    index: "01",
    name: "KlasickÃ© sady",
    accent: "#9E2A2B",
    tagline: "ProvÄ›Å™enÃ© druhy z rodinnÃ½ch vÃ½sadeb na regenerovanÃ© pÅ¯dÄ›.",
    products: [
      {
        id: "pomegranate", name: "granÃ¡tovÃ© jablko", displayName: "GranÃ¡tovÃ© jablko", latin: "Punica granatum",
        subtitle: "RubÃ­novÃ¡ zrna plnÃ¡ sÃ­ly",
        description: "PoÅ¾Ã¡ry roku 2021 zasÃ¡hly rozsÃ¡hlÃ© plochy starÃ½ch olivovÃ½ch hÃ¡jÅ¯ na PeloponÃ©su. ÄŒÃ¡st tÃ©hle spÃ¡lenÃ© pÅ¯dy jsme osadili granÃ¡tovnÃ­ky â€” odrÅ¯dou, kterÃ¡ dobÅ™e snÃ¡Å¡Ã­ sucho i chudÅ¡Ã­ podmÃ­nky.",
        usage: "Sladce trpkavÃ¡ Å¡Å¥Ã¡va plnÃ¡ semÃ­nek, prodÃ¡vÃ¡me plody i lisovanou Å¡Å¥Ã¡vu.",
        orchard: "Sad PeloponÃ©s, Å˜ecko",
        notes: ["RubÃ­novÃ© vÃ­no", "Brusinka", "DÅ™evo"],
        soil: "KamenitÃ© terasy s hlubokÃ½m koÅ™enovÃ½m systÃ©mem",
        sceneBg: "#EEEBE1", sceneInk: "light",
      },
      {
        id: "kiwi", name: "kiwi", displayName: "Kiwi", latin: "Actinidia deliciosa",
        subtitle: "Kiwi z rodinnÃ½ch vÃ½sadeb",
        description: "Po rozpadu sovÄ›tskÃ½ch zemÄ›dÄ›lskÃ½ch druÅ¾stev zÅ¯stala v gruzÃ­nskÃ© Gurii spousta terasovitÃ½ch svahÅ¯ bez pÃ©Äe. Kiwi jsme vybrali i proto, Å¾e jde o popÃ­navou rostlinu â€” jejÃ­ koÅ™eny pomÃ¡hajÃ­ takovÃ½ svah znovu zpevnit.",
        usage: "Sladce nakyslÃ© a Å¡Å¥avnatÃ©, prodÃ¡vÃ¡me vÃ½hradnÄ› ÄerstvÃ©.",
        orchard: "Sad Guria, Gruzie",
        notes: ["SvÄ›Å¾Ã­ jahoda", "TrÃ¡va", "Citrus"],
        soil: "VlhkÃ© humÃ³znÃ­ pÅ¯dy s mikrobiÃ¡lnÃ­m Å¾ivotem",
        sceneBg: "#EEEBE1", sceneInk: "dark",
      },
      {
        id: "avocado", name: "avokÃ¡do", displayName: "AvokÃ¡do", latin: "Persea americana",
        subtitle: "KrÃ©movÃ© avokÃ¡do Hass",
        description: "Region Petorca je bohuÅ¾el znÃ¡mÃ½ vodnÃ­ krizÃ­ zpÅ¯sobenou prÃ¡vÄ› nadmÄ›rnou avokÃ¡dovou produkcÃ­. ChtÄ›li jsme dokÃ¡zat, Å¾e se dÃ¡ pÄ›stovat i zodpovÄ›dnÄ›, s ohledem na mÃ­stnÃ­ vodnÃ­ zdroje.",
        usage: "KrÃ©movÃ© a mÃ¡slovÃ©, prodÃ¡vÃ¡me vÃ½hradnÄ› ÄerstvÃ©.",
        orchard: "Sad Petorca, Chile",
        notes: ["LÃ­skovÃ½ oÅ™Ã­Å¡ek", "MÃ¡slo", "ÄŒerstvÃ© obilÃ­"],
        soil: "PÃ³rovitÃ¡ ÃºrodnÃ¡ hlinitÃ¡ pÅ¯da",
        sceneBg: "#EEEBE1", sceneInk: "light",
      },
      {
        id: "watermelon", name: "vodnÃ­ meloun", displayName: "VodnÃ­ meloun", latin: "Citrullus lanatus",
        subtitle: "SladkÃ½ meloun z teplÃ½ch pÃ­skÅ¯",
        description: "DivokÃ½ meloun pravdÄ›podobnÄ› pochÃ¡zÃ­ pÅ™Ã­mo z pouÅ¡tÄ› Kalahari, kde roste dodnes. PÄ›stujeme ho na okraji pouÅ¡tÄ›, v peÄlivÄ› zavlaÅ¾ovanÃ©m pÃ¡su obnovenÃ© pÅ¯dy.",
        usage: "Å Å¥avnatÃ½ a osvÄ›Å¾ujÃ­cÃ­, prodÃ¡vÃ¡me ÄerstvÃ½, sezÃ³nnÄ›.",
        orchard: "Sad Kalahari, Namibie",
        notes: ["CukrovÃ¡ voda", "RÅ¯Å¾ovÃ© poupÄ›", "OkurkovÃ¡ svÄ›Å¾est"],
        soil: "PÃ­sÄitÃ© duny vyhÅ™Ã­vanÃ© letnÃ­m sluncem",
        sceneBg: "#EEEBE1", sceneInk: "light",
      },
    ],
  },
  {
    id: "citrus",
    index: "02",
    name: "Citrusy",
    accent: "#688F35",
    tagline: "EsenciÃ¡lnÃ­ oleje, ostrÃ¡ svÄ›Å¾est a kÅ¯ra bez voskÅ¯ a postÅ™ikÅ¯.",
    products: [
      {
        id: "lime", name: "limetka", displayName: "Limetka", latin: "Citrus aurantiifolia",
        subtitle: "Å Å¥avnatÃ¡ mexickÃ¡ limetka",
        description: "ÃšdolÃ­ San Joaquin patÅ™Ã­ mezi oblasti nejvÃ­c zasaÅ¾enÃ© dlouhodobÃ½m suchem v Kalifornii. CitrusovÃ© sady tu Äasto zÅ¯stÃ¡vajÃ­ neobdÄ›lanÃ©, protoÅ¾e voda je pro velkovÃ½robce pÅ™Ã­liÅ¡ drahÃ¡.",
        usage: "OstÅ™e kyselÃ¡, prodÃ¡vÃ¡me Äerstvou i jako suÅ¡enou kÅ¯ru.",
        orchard: "Sad San Joaquin, Kalifornie, USA",
        notes: ["OstrÃ¡ kyselost", "CitrusovÃ½ kvÄ›t", "KÅ¯ra"],
        soil: "VÃ¡pencovÃ© podloÅ¾Ã­ s organickÃ½m mulÄem",
        sceneBg: "#EEEBE1", sceneInk: "dark",
      },
      {
        id: "lemon", name: "citron", displayName: "Citron", latin: "Citrus limon",
        subtitle: "AromatickÃ½ citron Eureka",
        description: "Roste ve stejnÃ©m ÃºdolÃ­ jako naÅ¡e limetky â€” v oblasti dlouhodobÄ› zasaÅ¾enÃ© suchem, kde se citrusovÃ© sady staly pro velkovÃ½robce pÅ™Ã­liÅ¡ nÃ¡kladnÃ© na zavlaÅ¾ovÃ¡nÃ­.",
        usage: "IntenzivnÄ› vonnÃ¡ kÅ¯ra a kyselÃ¡ Å¡Å¥Ã¡va, prodÃ¡vÃ¡me ÄerstvÃ½ i suÅ¡enou kÅ¯ru.",
        orchard: "Sad San Joaquin, Kalifornie, USA",
        notes: ["SvÄ›Å¾Ã­ kyselost", "Eukalyptus", "KvÄ›tinovÃ½ tÃ³n"],
        soil: "RegenerovanÃ¡ kamenitÃ¡ pÅ¯da s jÃ­chou z kopÅ™iv",
        sceneBg: "#EEEBE1", sceneInk: "dark",
      },
    ],
  },
  {
    id: "tropical",
    index: "03",
    name: "TropickÃ© ovoce",
    accent: "#E06A26",
    tagline: "Ovoce z teplÃ½ch obnovenÃ½ch oblastÃ­ â€” sluncem nasÃ¡klÃ©, sklÃ­zenÃ© v plnÃ© zralosti.",
    products: [
      {
        id: "mango", name: "mango", displayName: "Mango", latin: "Mangifera indica",
        subtitle: "OdrÅ¯da Kent z komunitnÃ­ch sadÅ¯",
        description: "MangovnÃ­k potÅ™ebuje pÅ™esnÄ› to, co dnes queenslandskÃ¡ buÅ¡ nabÃ­zÃ­ aÅ¾ pÅ™Ã­liÅ¡ â€” Å¾Ã¡r a sucho. Po vlnÃ¡ch poÅ¾Ã¡rÅ¯, kterÃ© tudy proÅ¡ly, jsme tenhle kus zemÄ› koupili prÃ¡vÄ› proto, Å¾e o nÄ›j skoro nikdo nestÃ¡l.",
        usage: "SladkÃ© a Å¡Å¥avnatÃ©, prodÃ¡vÃ¡me ÄerstvÃ© i jako suÅ¡enÃ© plÃ¡tky.",
        orchard: "Sad Kuranda, Queensland, AustrÃ¡lie",
        notes: ["Med", "CitrusovÃ¡ kÅ¯ra", "TropickÃ½ nektar"],
        soil: "HlubokÃ¡ ÄervenÃ¡ jÃ­lovitÃ¡ pÅ¯da s vysokÃ½m podÃ­lem humusu",
        sceneBg: "#EEEBE1", sceneInk: "dark",
      },
      {
        id: "papaya", name: "papÃ¡ja", displayName: "PapÃ¡ja", latin: "Carica papaya",
        subtitle: "SladkÃ¡ papÃ¡ja Formosa",
        description: "Roste na stejnÃ©m pozemku jako naÅ¡e mango â€” queenslandskÃ© buÅ¡i, kterÃ¡ si proÅ¡la opakovanÃ½mi poÅ¾Ã¡ry, neÅ¾ jsme ji zaÄali obnovovat.",
        usage: "SladkÃ¡, mÃ¡slovÃ¡ duÅ¾ina, prodÃ¡vÃ¡me Äerstvou i jako suÅ¡enÃ© plÃ¡tky.",
        orchard: "Sad Kuranda, Queensland, AustrÃ¡lie",
        notes: ["Karamel", "Meloun", "Vanilka"],
        soil: "VulkanickÃ½ popel a regenerovanÃ¡ lesnÃ­ prsÅ¥",
        sceneBg: "#EEEBE1", sceneInk: "light",
      },
      {
        id: "dragonfruit", name: "draÄÃ­ ovoce", displayName: "DraÄÃ­ ovoce", latin: "Hylocereus undatus",
        subtitle: "Pitahaya s jemnou duÅ¾inou",
        description: "PopÃ­navÃ½ kaktus draÄÃ­ho ovoce roste tam, kde po odlesnÄ›nÃ­ zbyla jen tenkÃ¡ vrstva vyprahlÃ© pÅ¯dy â€” jeho vlastnÃ­ koÅ™eny pÅ™itom pomÃ¡hajÃ­ takovou zemi znovu zpevnit.",
        usage: "JemnÄ› sladkÃ© a osvÄ›Å¾ujÃ­cÃ­, prodÃ¡vÃ¡me vÃ½hradnÄ› ÄerstvÃ©.",
        orchard: "Sad LeÃ³n, Nikaragua",
        notes: ["Kiwi", "OstruÅ¾ina", "LimetkovÃ¡ svÄ›Å¾est"],
        soil: "PÃ­sÄitohlinitÃ¡ drenÃ¡Å¾ovanÃ¡ pÅ¯da s biouhlem",
        sceneBg: "#EEEBE1", sceneInk: "light",
      },
      {
        id: "lychee", name: "liÄi", displayName: "LiÄi", latin: "Litchi chinensis",
        subtitle: "KrÃ¡lovskÃ© liÄi s kvÄ›tinovÃ½m aroma",
        description: "DalÅ¡Ã­ plodina ze stejnÃ©ho sadu jako mango a papÃ¡ja â€” queenslandskÃ¡ buÅ¡, kde po poÅ¾Ã¡rech obnovujeme pÅ¯du uÅ¾ nÄ›kolik let.",
        usage: "SladkÃ¡, aromatickÃ¡ duÅ¾ina kolem pecky, prodÃ¡vÃ¡me ÄerstvÃ©.",
        orchard: "Sad Kuranda, Queensland, AustrÃ¡lie",
        notes: ["RÅ¯Å¾e", "MuÅ¡kÃ¡tovÃ½ hrozen", "BÃ­lÃ½ Äaj"],
        soil: "AluviÃ¡lnÃ­ naplaveniny bohatÃ© na minerÃ¡ly",
        sceneBg: "#EEEBE1", sceneInk: "dark",
      },
      {
        id: "passionfruit", name: "marakuja", displayName: "Marakuja", latin: "Passiflora edulis",
        subtitle: "IntenzivnÃ­ muÄenka jedlÃ¡",
        description: "PopÃ­navÃ¡ rÃ©va marakuji se hodÃ­ pÅ™esnÄ› na pÅ¯du, kterÃ¡ potÅ™ebuje rychle zapojit koÅ™eny do stabilizace svahu â€” a to je pÅ™esnÄ› situace, ve kterÃ© jsme Sad Kuranda pÅ™ebÃ­rali.",
        usage: "IntenzivnÄ› kyselÃ¡ a aromatickÃ¡, skvÄ›lÃ¡ ÄerstvÃ¡ i do smoothie.",
        orchard: "Sad Kuranda, Queensland, AustrÃ¡lie",
        notes: ["Marakuja", "Å½lutÃ½ citron", "DivokÃ½ med"],
        soil: "MulÄovanÃ© terasy s krycÃ­mi plodinami",
        sceneBg: "#EEEBE1", sceneInk: "dark",
      },
    ],
  },
  {
    id: "rare",
    index: "04",
    name: "VzÃ¡cnÃ© a divokÃ©",
    accent: "#D49013",
    tagline: "ZapomenutÃ© plody starÃ½ch kultur, pÄ›stovanÃ© v malÃ½ch dÃ¡vkÃ¡ch.",
    products: [
      {
        id: "physalis", name: "mochynÄ›", displayName: "MochynÄ›", latin: "Physalis peruviana",
        subtitle: "InckÃ¡ tÅ™eÅ¡eÅˆ v pÅ™Ã­rodnÃ­m kalichu",
        description: "Po vodnÃ­ krizi v KapskÃ©m MÄ›stÄ› zÅ¯stala spousta zemÄ›dÄ›lskÃ© pÅ¯dy v oblasti Karoo bez vyuÅ¾itÃ­. MochynÄ› patÅ™ila mezi prvnÃ­ plodiny, kterÃ© jsme na takhle vyprahlÃ© zemi vÅ¯bec zkusili.",
        usage: "Sladce nakyslÃ¡, nejlÃ­p chutnÃ¡ suÅ¡enÃ¡ jako svaÄina.",
        orchard: "Sad Karoo, JiÅ¾nÃ­ Afrika",
        notes: ["Ananas", "AngreÅ¡t", "Karamel"],
        soil: "SuchÃ© obnovenÃ© strÃ¡nÄ› s lokÃ¡lnÃ­ mykorhÃ­zou",
        sceneBg: "#EEEBE1", sceneInk: "dark",
      },
      {
        id: "pawpaw", name: "asimina", displayName: "Asimina", latin: "Asimina triloba",
        subtitle: "SeveroamerickÃ½ banÃ¡novec",
        description: "PÅ¯da v ÃºdolÃ­ Ohia byla generace vyÄerpÃ¡vÃ¡na monokulturou kukuÅ™ice a sÃ³ji. Asimina je pÅ™itom pÅ¯vodnÃ­ severoamerickÃ© ovoce â€” jen se na nÄ›j bÄ›hem let velkovÃ½roby skoro zapomnÄ›lo.",
        usage: "KrÃ©movÃ¡ duÅ¾ina s nÃ¡dechem banÃ¡nu a manga, prodÃ¡vÃ¡me jen Äerstvou, Å¡patnÄ› se skladuje.",
        orchard: "Sad Ohio Valley, Ohio, USA",
        notes: ["BanÃ¡novÃ½ krÃ©m", "Mango", "KokosovÃ© mlÃ©ko"],
        soil: "HlubokÃ© luÅ¾nÃ­ pÅ¯dy s bohatÃ½m opadem",
        sceneBg: "#EEEBE1", sceneInk: "dark",
      },
    ],
  },
];

// plochÃ½ seznam scÃ©n pro slider (nekoneÄnÃ¡ smyÄka)
// SeÅ™azeno podle ODSTÃNU barev (zelenÃ¡ â†’ Å¾lutÃ¡ â†’ oranÅ¾ovÃ¡ â†’ ÄervenÃ¡ â†’ rÅ¯Å¾ovÃ¡),
// aby pÅ™echody barev pozadÃ­ pÅ¯sobily pÅ™irozenÄ› a plynule; smyÄka se uzavÃ­rÃ¡ zpÄ›t do zelenÃ©.
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
  title: "NÃ¡Å¡ pÅ™Ã­bÄ›h",
  lead: "Fruitivo vzniklo z jednoho pÅ™Ã¡nÃ­ â€” pÅ™ivÃ©zt sem ovoce, kterÃ© u nÃ¡s neroste, a udÄ›lat to poctivÄ›.",
  chapters: [
    { number: "01", title: "Tam, kam patÅ™Ã­", text: "JezdÃ­me za nÃ­m tam, kam patÅ™Ã­. Do mÃ­st, kde slunce svÃ­tÃ­ skoro celÃ½ rok, ale kde mÃ¡ pÅ¯da za sebou tÄ›Å¾kÃ© roky â€” sucho, poÅ¾Ã¡ry, vyÄerpanou zemi. Tyhle pozemky kupujeme a dÃ¡vÃ¡me jim Äas se zase nadechnout." },
    { number: "02", title: "NedÄ›lÃ¡me to sami", text: "UÄÃ­me se od lidÃ­, kteÅ™Ã­ tam Å¾ijÃ­ a starajÃ­ se o zem odjakÅ¾iva. Oni vÄ›dÃ­, jak s pÅ¯dou a rostlinami zachÃ¡zet â€” my jim pomÃ¡hÃ¡me s obnovou a Äasem, kterÃ½ to potÅ™ebuje." },
    { number: "03", title: "Kousek jinÃ©ho svÄ›ta", text: "KdyÅ¾ sad zase zaÄne rodit, ovoce dovezeme domÅ¯. Chceme, aby si u nÃ¡s lidÃ© mohli vychutnat kousek jinÃ©ho svÄ›ta â€” takovÃ©ho, jakÃ½ doopravdy je, bez zbyteÄnÃ½ch oklik." },
    { number: "04", title: "ZpÃ¡tky k zemi a lidem", text: "A protoÅ¾e nÃ¡m na tÄ›ch mÃ­stech zÃ¡leÅ¾Ã­ dÃ¡l, ÄÃ¡st z kaÅ¾dÃ©ho prodeje se vracÃ­ zpÃ¡tky tam, odkud ovoce pÅ™iÅ¡lo â€” k zemi i k lidem, kteÅ™Ã­ nÃ¡m s nÃ­ pomÃ¡hajÃ­." },
  ],
};

export const HARVEST = {
  title: "SklizeÅˆ",
  subtitle: "Na nÄ›kterÃ©m z naÅ¡ich pozemkÅ¯ se sklÃ­zÃ­ prakticky poÅ™Ã¡d.",
  intro: "Na nÄ›kterÃ©m z naÅ¡ich pozemkÅ¯ se sklÃ­zÃ­ prakticky poÅ™Ã¡d. ZatÃ­mco na PeloponÃ©su dozrÃ¡vajÃ­ granÃ¡tovÃ¡ jablka, v Queenslandu se prÃ¡vÄ› sklÃ­zÃ­ mango. SezÃ³na nikdy ÃºplnÄ› nekonÄÃ­ â€” jen se pÅ™esouvÃ¡ po mapÄ›.",
  outro: "SklizeÅˆ nedÄ›lÃ¡me sami. Å˜Ã­dÃ­ se jÃ­ lidÃ©, kteÅ™Ã­ na danÃ© zemi pracujÃ­ roky, Äasto generace pÅ™ed nÃ¡mi. My jen pÅ™idÃ¡vÃ¡me Äas a pÃ©Äi, co si obnovenÃ¡ pÅ¯da zaslouÅ¾Ã­ â€” kdy pÅ™esnÄ› se trhÃ¡, poznÃ¡ zkuÅ¡enost, ne kalendÃ¡Å™. Od utrÅ¾enÃ­ plodu po odjezd k vÃ¡m uplyne jen pÃ¡r dnÃ­.",
  // months: 0 = leden â€¦ 11 = prosinec; sad se odvodÃ­ z Ãºdaje orchard u produktu
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

export const MONTHS = ["Leden", "Ãšnor", "BÅ™ezen", "Duben", "KvÄ›ten", "ÄŒerven", "ÄŒervenec", "Srpen", "ZÃ¡Å™Ã­", "Å˜Ã­jen", "Listopad", "Prosinec"];

export const ORCHARDS = {
  title: "NaÅ¡e obnovenÃ© sady",
  subtitle: "DevÄ›t ÃºzemÃ­ napÅ™Ã­Ä kontinenty, kterÃ½m vracÃ­me Å¾ivot",
  locations: [
    {
      id: "kuranda",
      name: "Sad Kuranda",
      place: "Queensland, AustrÃ¡lie",
      crops: "mango, marakuja, papÃ¡ja, liÄi",
      text: "BÃ½valÃ¡ buÅ¡ zasaÅ¾enÃ¡ poÅ¾Ã¡ry, dnes nejvÄ›tÅ¡Ã­ sad v naÅ¡Ã­ sÃ­ti.",
      image: "/assets/sad-kuranda.jpg",
      pin: { x: 90.4, y: 59.3 },
    },
    {
      id: "leon",
      name: "Sad LeÃ³n",
      place: "Nikaragua",
      crops: "draÄÃ­ ovoce",
      text: "PÅ¯da obnovenÃ¡ po letech odlesÅˆovÃ¡nÃ­, dnes domov draÄÃ­ho ovoce.",
      image: "/assets/sad-leon.jpg",
      pin: { x: 25.9, y: 43.1 },
    },
    {
      id: "sanjoaquin",
      name: "Sad San Joaquin",
      place: "Kalifornie, USA",
      crops: "limetka, citron",
      text: "ÃšdolÃ­ vysuÅ¡enÃ© lety sucha, citrusy sem vrÃ¡tily Å¾ivot i vodu.",
      image: "/assets/sad-sanjoaquin.jpg",
      pin: { x: 16.7, y: 29.7 },
    },
    {
      id: "karoo",
      name: "Sad Karoo",
      place: "JiÅ¾nÃ­ Afrika",
      crops: "mochynÄ›",
      text: "ZemÄ› po vodnÃ­ krizi, kde nenÃ¡roÄnÃ¡ mochynÄ› otevÅ™ela cestu dalÅ¡Ã­m plodinÃ¡m.",
      image: "/assets/sad-karoo.jpg",
      pin: { x: 56.1, y: 67.9 },
    },
    {
      id: "pelopones",
      name: "Sad PeloponÃ©s",
      place: "Å˜ecko",
      crops: "granÃ¡tovÃ© jablko",
      text: "StarÃ© olivovÃ© hÃ¡je zasaÅ¾enÃ© poÅ¾Ã¡ry roku 2021, obnovenÃ© pod granÃ¡tovÃ½mi sady.",
      image: "/assets/sad-pelopones.jpg",
      pin: { x: 56.2, y: 29.2 },
    },
    {
      id: "petorca",
      name: "Sad Petorca",
      place: "Chile",
      crops: "avokÃ¡do",
      text: "Region znÃ¡mÃ½ vodnÃ­ krizÃ­, kde obnova pÅ¯dy zaÄÃ­nÃ¡ dÃ¡vat smysl i ekonomicky.",
      image: "/assets/sad-petorca.jpg",
      pin: { x: 30.3, y: 67.9 },
    },
    {
      id: "kalahari",
      name: "Sad Kalahari",
      place: "Namibie",
      crops: "vodnÃ­ meloun",
      text: "Domovina divokÃ©ho melounu, odkud pochÃ¡zÃ­ i ten na vaÅ¡em stole.",
      image: "/assets/sad-kalahari.jpg",
      pin: { x: 56.7, y: 62.2 },
    },
    {
      id: "guria",
      name: "Sad Guria",
      place: "Gruzie",
      crops: "kiwi",
      text: "TerasovitÃ© svahy opuÅ¡tÄ›nÃ© po rozpadu sovÄ›tskÃ½ch zemÄ›dÄ›lskÃ½ch druÅ¾stev, dnes znovu zpevnÄ›nÃ© koÅ™eny popÃ­navÃ©ho kiwi.",
      image: "/assets/sad-guria.jpg",
      pin: { x: 61.7, y: 26.7 },
    },
    {
      id: "ohiovalley",
      name: "Sad Ohio Valley",
      place: "Ohio, USA",
      crops: "asimina",
      text: "PÅ¯da vyÄerpanÃ¡ generacemi monokultury kukuÅ™ice a sÃ³ji, dnes nÃ¡vrat k asiminÄ› â€” pÅ¯vodnÃ­mu americkÃ©mu ovoci.",
      image: "/assets/sad-ohiovalley.jpg",
      pin: { x: 27.1, y: 28.3 },
    },
  ],
};

export const PROCESS = {
  title: "Jak to funguje",
  subtitle: "Od zniÄenÃ© zemÄ› po ovoce na vaÅ¡em stole",
  steps: [
    {
      number: "01",
      title: "Najdeme pozemek",
      text: "HledÃ¡me pÅ¯du zasaÅ¾enou poÅ¾Ã¡rem, suchem nebo lety vyÄerpÃ¡vajÃ­cÃ­ho hospodaÅ™enÃ­ â€” v regionech, kde pÅ™irozenÄ› roste ovoce, kterÃ© chceme pÄ›stovat.",
    },
    {
      number: "02",
      title: "KoupÃ­me ji",
      text: "PrÃ¡vÄ› proto, Å¾e je poÅ¡kozenÃ¡, bÃ½vÃ¡ levnÃ¡. Kupujeme zemi, o kterou velkÃ© farmy pÅ™estaly stÃ¡t.",
    },
    {
      number: "03",
      title: "VrÃ¡tÃ­me jÃ­ vodu a mikrobiom",
      text: "NejdÅ™Ã­v se starÃ¡me o pÅ¯du samotnou, ne o rostliny na nÃ­ â€” kompost, krycÃ­ plodiny a obnova mikroorganismÅ¯, kterÃ© oheÅˆ nebo roky sucha z hlÃ­ny vzaly.",
      core: true,
    },
    {
      number: "04",
      title: "NechÃ¡me jÃ­ Äas",
      text: "Obnova pÅ¯dy trvÃ¡ roky, ne mÄ›sÃ­ce. Teprve kdyÅ¾ je zemÄ› znovu schopnÃ¡ drÅ¾et vodu a Å¾iviny, mÃ¡ smysl na ni nÄ›co sÃ¡zet.",
      core: true,
    },
    {
      number: "05",
      title: "VysadÃ­me odolnÃ© odrÅ¯dy",
      text: "SÃ¡zÃ­me plodiny, kterÃ© svÃ½mi hlubokÃ½mi koÅ™eny pÅ¯du dÃ¡l stabilizujÃ­ a chrÃ¡nÃ­ pÅ™ed opÄ›tovnou erozÃ­.",
    },
    {
      number: "06",
      title: "SklidÃ­me a dovezeme",
      text: "ZralÃ© ovoce sklidÃ­me a dopravÃ­me ÄerstvÃ© nebo Å¡etrnÄ› suÅ¡enÃ© aÅ¾ k vÃ¡m do ÄŒeska.",
    },
  ],
};

export const FOOTER = {
  statement: "PÄ›stujeme na Å¾ivÃ© zemi.",
  email: "info@fruitivo.cz",
  phone: "+420 800 567 369",
  address: "Fruitivo s.r.o. â€” Sokola TÅ¯my 402/12, 737 01 ÄŒeskÃ½ TÄ›Å¡Ã­n",
  socials: ["Instagram", "LinkedIn", "Pinterest"],
  copyright: "Â© 2026 Fruitivo s.r.o. VÅ¡echna prÃ¡va vyhrazena.",
};
