import { motion } from "framer-motion";
import { ROOTS } from "../data/catalog";
import { EN } from "../data/en";
import { useLang, pick } from "../langContext";

const EASE = [0.65, 0, 0.35, 1];

const STORY_CZ = {
  lead: "Fruitivo se zrodilo z jediné touhy — přivést k nám ovoce, které tady přirozeně neroste. A udělat to poctivě.",
  chapters: [
    {
      number: "01",
      title: "Kde to celé začíná",
      text: "Nezakládáme anonymní plantáže. Jezdíme tam, kde to půda nejvíc potřebuje — do krajin, které mají za sebou zkoušku v podobě sucha, požárů nebo vyčerpání. Tyhle zničené pozemky kupujeme a dáváme jim to nejcennější: čas, péči a šanci se zase nadechnout. Sázíme na nich přesně to ovoce, které do dané oblasti odjakživa patřilo a kterému se tam přirozeně daří.",
    },
    {
      number: "02",
      title: "Neděláme to sami",
      text: "Na tohle bychom sami nestačili. Spojujeme se s místními lidmi, kteří tam žijí a starají se o zemi po generace. Oni znají každý kousek půdy, vědí, co rostliny potřebují, a rozumí jim lépe než kdokoli jiný. My jim poskytujeme zázemí a podporu, oni nám své neocenitelné know-how. Společně tak vracíme život tam, kde už pomalu vyhasínal.",
    },
    {
      number: "03",
      title: "Kousek jiného světa",
      text: "Když se oživená půda odvděčí a sady začnou rodit, přichází ta nejkrásnější část. Ovoce sklízíme v té nejlepší kondici a šetrně ho dovážíme k nám do Česka. Bez zbytečných oklik a dlouhých mezikroků. Chceme, abyste si u nás mohli vychutnat kousek jiného světa — autentický, voňavý a takový, jaký ho stvořila samotná příroda, ne laboratoř.",
    },
    {
      number: "04",
      title: "Kruh, který se uzavírá",
      text: "Tím pro nás cesta nekončí. Věříme v rovnováhu a vděčnost vůči místům, která nás hostí. Proto se část z každého prodeje vrací tam, odkud ovoce přišlo — zpět do půdy, do výsadby nových stromů a na podporu komunit, bez kterých by tenhle příběh nemohl existovat.",
    },
  ],
};

export const Roots = () => {
  const { lang } = useLang();
  const chapters = STORY_CZ.chapters.map((ch, i) => ({
    ...ch,
    title: pick(lang, ch.title, EN.roots.chapters[i]?.title),
    text: pick(lang, ch.text, EN.roots.chapters[i]?.text),
  }));
  return (
  <section id="pribeh" data-testid="roots-section" className="bg-stone px-5 sm:px-10 py-28 sm:py-40">
    <div className="max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="text-[11px] tracking-[0.35em] uppercase font-semibold text-ink/50 mb-6"
      >
        {pick(lang, "02 · Příběh", EN.sectionLabels.story)}
      </motion.p>

      <h2 className="font-serif tracking-tight leading-[1.05] text-4xl sm:text-5xl lg:text-6xl max-w-3xl">
        <motion.span
          className="block overflow-hidden"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span
            variants={{ hidden: { y: "110%" }, show: { y: 0 } }}
            transition={{ duration: 0.9, ease: EASE }}
            className="block"
          >
            {pick(lang, ROOTS.title, EN.roots.title)}
          </motion.span>
        </motion.span>
        <motion.span
          className="block overflow-hidden"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span
            variants={{ hidden: { y: "110%" }, show: { y: 0 } }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.12 }}
            className="block italic font-light text-ink/70 text-2xl sm:text-3xl lg:text-4xl mt-3"
          >
            {pick(lang, STORY_CZ.lead, EN.roots.lead)}
          </motion.span>
        </motion.span>
      </h2>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
        {chapters.map((ch, i) => (
          <motion.article
            key={ch.number}
            data-testid={`manifesto-chapter-${ch.number}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE, delay: (i % 2) * 0.12 }}
            className="border-t border-ink/15 pt-6"
          >
            <span className="font-serif italic text-lg text-ink/40">{ch.number}</span>
            <h3 className="font-serif text-xl sm:text-2xl mt-2 mb-3 leading-snug">{ch.title}</h3>
            <p className="text-sm sm:text-base leading-relaxed text-ink/70 max-w-md">{ch.text}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
  );
};
