import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FloatingShapes from "./FloatingShapes";

const eraColors = [
  "bg-primary text-primary-foreground",
  "bg-secondary text-secondary-foreground",
  "bg-accent text-accent-foreground",
  "bg-sky-aqua text-foreground",
  "bg-gold text-foreground",
  "bg-magenta text-primary-foreground",
];

const decades = [
  {
    era: "1978",
    title: "Statewide Branch Founded",
    description: "The California Black Health Network was established as a collaborative arrangement with the Bay Area Black Consortium for Quality Health Care, the Black Health Leadership Council of Los Angeles, and the San Diego Black Health Associates."
  },
  {
    era: "1980s",
    title: "First Statewide Conference and Incorporation",
    description: "CBHN was comprised of six chapters and two affiliate organizations. Funding support was primarily garnered through chapter dues and membership fees, as well as the annual conferences. CBHN hosted its first statewide conference in 1980 and incorporated as a 501c3 in 1983. Received first major grant from the California Health Care Foundation to conduct outreach and education activities."
  },
  {
    era: "1990s",
    title: "Tobacco, Nutrition, and Prevention",
    items: [
      { name: "Not in Mama's Kitchen Campaign", text: "An advocacy campaign to reduce exposure to secondhand smoke. This campaign ran each year on Mother's and Father's Day. Recipes and personal stories were solicited for inclusion in a cookbook." },
      { name: "African American Education Partnership (AATEP)", text: "Funded by California Department of Public Health - Proposition 99, CBHN worked to implement the AATEP program and build leadership, provide training and technical assistance, assess health education materials for cultural competency, disseminate culturally specific information, and create community education campaigns." },
      { name: "Tobacco Related Disease Research Program", text: "Funded by UC Regents, surveys were conducted to assess the health needs of African Americans in six areas of California and assist in tobacco use prevention and cessation." },
      { name: "Smoke Free Living for African Americans (SLAA)", text: "Funded by the County of Sacramento through tobacco settlement monies to reduce secondhand smoke in the cars and homes of African Americans in Sacramento." },
    ]
  },
  {
    era: "2000s",
    title: "Quality, Outreach, and Technology",
    items: [
      { name: "Quality Assurance Project", text: "Funded by the California Health Care Foundation, the purpose was to develop an Afrocentric framework for defining healthcare quality and to establish capacity to educate consumers about ensuring high quality medical services within San Diego and the Inland Empire." },
      { name: "The Sweet Heart Project", text: "Funded by The California Endowment, the purpose was to enable CBHN to work with CBOs, faith-based organizations and health centers to design interventions to reduce cardiovascular disease and diabetes among African Americans in San Diego." },
      { name: "Personal Health Records", text: "Through a planning grant funded by The California Endowment, a campaign was launched to encourage African Americans to utilize electronic health records to improve the health status of persons with chronic illnesses." },
    ]
  },
  {
    era: "2010s",
    title: "Healthcare Reform, Education, and Outreach",
    items: [
      { name: "Healthcare Reform", text: "CBHN was intricately involved in education and outreach around the issues of health reform and its impact on the African American and Black Immigrant communities and safety net populations." },
      { name: "Covered California", text: "CBHN became a Covered CA Navigator to increase the number of insured Californians, improve the quality of healthcare, lower costs, and reduce health disparities." },
      { name: "HIV/AIDS", text: "CBHN contracted with the California Black Women's Health Project to provide outreach through community meetings and launched a media campaign to encourage and recruit individuals to work together to eliminate HIV/AIDS." },
      { name: "Mental Health", text: "CBHN held three webinars that led to heightened awareness and conversation surrounding mental health concerns related to African Americans." },
      { name: "Prevention and Wellness", text: "CBHN focused on advocating for policies to eliminate sugar-sweetened beverages from the American diet. Collaborating with six faith-based churches, CBHN assisted congregants in achieving weight loss, reducing blood pressure, and reducing diabetes." },
      { name: "The Black Health Agenda", text: "In 2017, CBHN started the process of creating The Black Health Agenda through conducting a series of town hall meetings across California. The first iteration was published in 2019 and has become a flagship project of CBHN." },
    ]
  },
  {
    era: "2020+",
    title: "Campaign for Black Health Equity",
    description: "In 2021, CBHN activated its Health Equity Framework by launching the Campaign for Black Health Equity, a multi-year initiative that aims to drive growth, capacity building, and enhance awareness and impact of CBHN on a statewide level. Through the Campaign, CBHN actively conducts outreach, education, advocacy, policy initiatives, and programmatic efforts addressing key issues at the individual, community, and system levels."
  },
];

const subItemColors = [
  "border-l-primary",
  "border-l-secondary",
  "border-l-accent",
  "border-l-sky-aqua",
  "border-l-gold",
  "border-l-magenta",
];

const FourDecadesTimeline = () => {
  const headerRef = useRef(null);
  const listRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const listInView = useInView(listRef, { once: true, margin: "-40px" });

  return (
    <section id="timeline" className="section-padding relative overflow-hidden bg-muted/30">
      <FloatingShapes variant="waves" className="opacity-50" />
      <div className="report-container relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-6 text-[13px] font-bold uppercase tracking-[0.3em] text-secondary">
            A CBHN Retrospective
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-7xl">
            Four Decades of Addressing Health Disparities
          </h2>
          <p className="mt-8 text-lg leading-[1.8] text-muted-foreground md:text-xl">
            From its inception, CBHN's aim was to improve the health status of people of African descent in California by influencing policies and developing programs that promote health and prevent disease. Throughout the past four decades, CBHN has continued to focus on addressing health disparities, health policy, and health reform, and remains the only Black-led, statewide organization dedicated to advocating for health equity for all Black Californians in key regions across the state.
          </p>
        </motion.div>

        <div ref={listRef} className="mx-auto max-w-3xl">
          <div className="relative space-y-16">
            {decades.map((item, i) => (
              <motion.div
                key={item.era}
                initial={{ opacity: 0, x: -20 }}
                animate={listInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
                className="group flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl text-sm font-black shadow-lg ${eraColors[i]}`}>
                    {item.era}
                  </div>
                  {i < decades.length - 1 && (
                    <div className="mt-3 h-full w-1 rounded-full bg-gradient-to-b from-primary/40 via-secondary/20 to-transparent" />
                  )}
                </div>
                <div className="pb-2 flex-1">
                  <span className={`text-xs font-black tracking-wider uppercase ${i % 2 === 0 ? "text-primary" : "text-secondary"}`}>
                    {item.era}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl font-bold text-foreground md:text-3xl">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="mt-3 text-base leading-[1.7] text-muted-foreground">
                      {item.description}
                    </p>
                  )}
                  {item.items && (
                    <div className="mt-5 space-y-4">
                      {item.items.map((sub, si) => (
                        <div key={sub.name} className={`rounded-xl bg-card p-5 border-l-4 shadow-sm ${subItemColors[si % subItemColors.length]}`}>
                          <p className="text-sm font-bold text-foreground">{sub.name}</p>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{sub.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourDecadesTimeline;
