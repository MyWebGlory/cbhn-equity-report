import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const stories = [
  {
    quote:
      "I had not seen a doctor in six years before the Health4Life screening event in Fresno. They found my blood pressure was dangerously high. I got on medication that same week. I do not want to think about what would have happened if I had waited another year.",
    name: "Denise W.",
    location: "Fresno County",
    context: "Health4Life participant, 2024",
  },
  {
    quote:
      "The HEAT training changed the way I talk to people about their health. I used to hand out flyers. Now I sit on porches and listen. People tell me things they would never say to a doctor. That is where the real work starts.",
    name: "Marcus T.",
    location: "Oakland",
    context: "HEAT Community Health Worker, Class of 2024",
  },
  {
    quote:
      "When my daughter was born, I almost bled out in the delivery room. Nobody told me I could have had a doula covered by Medi-Cal. CBHN fought to change that. I am glad the next mother will have options I did not.",
    name: "Jasmine L.",
    location: "Los Angeles County",
    context: "Maternal health advocate",
  },
  {
    quote:
      "I enrolled my whole family through the Covered California event at our church. My mother had been uninsured for three years because she did not know she qualified. The CBHN team walked her through every step in under an hour.",
    name: "Anthony R.",
    location: "Sacramento",
    context: "Covered California enrollee, 2024 open enrollment",
  },
];

const CommunityStories = () => {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-40px" });

  return (
    <section className="section-padding bg-muted/50">
      <div className="report-container">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-secondary">
            From the Community
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Voices from the Ground
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-muted-foreground md:text-lg">
            Programs are only as good as the difference they make in someone's day. These are
            stories from people who walked through our doors, picked up the phone, or showed
            up at a community event and left with something they did not have before.
          </p>
        </motion.div>

        <div ref={gridRef} className="grid gap-6 md:grid-cols-2">
          {stories.map((story, i) => (
            <motion.div
              key={story.name}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={gridInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col rounded-xl border border-border/60 bg-card p-7"
            >
              <Quote size={20} className="mb-4 text-secondary/60" />
              <p className="flex-1 font-serif text-base italic leading-[1.8] text-foreground/80">
                "{story.quote}"
              </p>
              <div className="mt-6 border-t border-border/40 pt-4">
                <p className="text-sm font-semibold text-foreground">{story.name}</p>
                <p className="text-[12px] text-muted-foreground">
                  {story.location} · {story.context}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityStories;
