import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const events = [
  {
    month: "January",
    title: "Covered California Open Enrollment Push",
    description:
      "CBHN launched a six-week enrollment campaign in partnership with 14 community-based organizations across the state. Field teams worked weekends at churches, barbershops, and grocery stores in South LA, East Oakland, and Stockton to sign up uninsured residents. The push resulted in 1,840 new enrollments before the February deadline.",
  },
  {
    month: "March",
    title: "Black Health Agenda Sacramento Summit",
    description:
      "Over 200 community leaders, public health officials, and legislators gathered at the State Capitol for the release of the 2024 Black Health Agenda. The day included committee presentations, panel discussions with county health officers, and a working lunch where attendees mapped out implementation timelines for each of the 14 policy recommendations.",
  },
  {
    month: "April",
    title: "Health4Life Expansion into Kern, Merced, and San Joaquin Counties",
    description:
      "CBHN opened three new Health4Life sites in the Central Valley, an area where Black residents face some of the longest drive times to primary care in the state. Local facilitators were recruited and trained over a four-week intensive. By month's end, the new sites had completed 380 chronic disease screenings.",
  },
  {
    month: "June",
    title: "HEAT Community Health Worker Graduation",
    description:
      "Eighty-six new community health workers graduated from the HEAT training program at a ceremony in Oakland. Graduates completed 120 hours of classroom instruction and 40 hours of supervised fieldwork. Several members of the graduating class were hired directly by county health departments within weeks of finishing the program.",
  },
  {
    month: "August",
    title: "Back-to-School Health Fair Series",
    description:
      "CBHN partnered with school districts in seven counties to host free health fairs before the start of the school year. The fairs offered vision and dental screenings, immunization clinics, asthma education for parents, and Medi-Cal enrollment assistance. More than 2,600 children and parents attended across all locations.",
  },
  {
    month: "September",
    title: "Climate and Health Town Hall, Los Angeles",
    description:
      "CBHN hosted a town hall in South LA focused on the health effects of air pollution and extreme heat on Black communities. Panelists included a pulmonologist from UCLA Health, a representative from the South Coast Air Quality Management District, and two residents who had been displaced by wildfire smoke. The event drew 340 attendees and was covered by KPCC and the LA Times.",
  },
  {
    month: "October",
    title: "Maternal Health Advocacy Day in Sacramento",
    description:
      "A delegation of 45 CBHN members, doulas, and maternal health advocates met with legislators to push for full implementation of the Medi-Cal postpartum extension. The group shared personal testimony in four committee meetings and secured verbal commitments from three Assembly members to co-author follow-up legislation on birthing center funding.",
  },
  {
    month: "December",
    title: "Annual Gala and Year-End Fundraiser",
    description:
      "CBHN closed out 2024 with its annual gala in San Francisco, attended by 480 supporters, donors, and partners. The event raised $1.2 million for 2025 programming. Keynote remarks came from the Surgeon General of California, who recognized CBHN as one of the most effective health equity organizations in the state.",
  },
];

const EventsTimeline = () => {
  const headerRef = useRef(null);
  const listRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const listInView = useInView(listRef, { once: true, margin: "-40px" });

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
            2024 Calendar
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Month by Month
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-muted-foreground md:text-lg">
            A year of steady, daily work that added up. Here is what happened, month by month,
            from enrollment season in January to the annual gala in December.
          </p>
        </motion.div>

        <div ref={listRef} className="mx-auto max-w-2xl">
          <div className="relative space-y-10">
            {events.map((event, i) => (
              <motion.div
                key={event.month}
                initial={{ opacity: 0, x: -20 }}
                animate={listInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
                className="group flex gap-5"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-[11px] font-bold uppercase tracking-wider text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {event.month.slice(0, 3)}
                  </div>
                  {i < events.length - 1 && (
                    <div className="mt-2 h-full w-px bg-border" />
                  )}
                </div>
                <div className="pb-2">
                  <span className="text-[11px] font-semibold tracking-wider text-muted-foreground">
                    {event.month} 2024
                  </span>
                  <h3 className="mt-1 font-serif text-base font-semibold text-foreground">
                    {event.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-[1.7] text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsTimeline;
