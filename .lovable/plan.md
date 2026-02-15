

# CBHN Impact Report: Complete Overhaul

## Overview

This is a full rebuild of the CBHN Impact Report website using the real content from the 34-page Word document. The report shifts from a "2024 Annual Report" to a **"4 Decades of Advancing Health Equity"** impact report, designed as a fundraising and donor-facing tool. Font changes to Open Sans. Two new images are integrated. The structure follows the editorial, long-scroll format inspired by Girls Who Code and The California Endowment reference sites.

---

## Global Changes

**Font**: Replace `Inter` and `Playfair Display` with `Open Sans` for body text. Keep a serif font (Playfair Display) for headlines only, or switch headlines to Open Sans Bold if preferred.

**Color palette**: Already applied from the previous update (Shamrock, Molten Orange, Regal Navy). No changes needed here.

**New images**: Copy `image-4.png` (Advocacy) and `image-5.png` (Team/Office) into `src/assets/`. Use them in the Advocacy/Policy section and the Executive Director letter or About section.

---

## New Section Structure (Top to Bottom)

The report will be restructured into the following sections, each in its own component:

### 1. Hero Section (rewrite)
- Headline: **"4 Decades of Advancing Health Equity in California"**
- Subtitle: "Investments, Initiatives, and Impact"
- Subtext: CBHN is the only Black-led statewide organization dedicated to health equity for all Black Californians. Founded in 1978.
- CTA buttons: "Read the Report" and "Support the Campaign"

### 2. Executive Director Letter (NEW component)
- Full letter from Rhonda M. Smith, taken verbatim from the document (Page 3)
- Photo placeholder using the uploaded team image (`image-5.png`)
- Signed "Rhonda M. Smith, Executive Director"
- Quote block from Denise Adams-Simms (1999-2008 ED) at the top

### 3. Executive Summary / Infographic (NEW component)
- A visual "at a glance" infographic with key lifetime stats:
  - Founded 1978
  - 45+ grant-funded programs reviewed
  - 12 major funders over 4 decades
  - 106,000+ individuals reached
  - 95 organizational partnerships created
  - 100+ legislative bills sponsored or supported
  - 6,000+ individuals enrolled in health plans
  - 700+ Black Health Network members
  - $8.3M in grants (1980-2020)
  - 4,000+ enrolled in healthcare coverage (2020-2024)
- Animated counters with icons, laid out in a grid (similar to current YearInNumbers but expanded)

### 4. History and Overview (REWRITE of MissionSection)
- CBHN founded 1978 as collaboration between Bay Area, LA, and San Diego
- Six chapters listed
- 1983 incorporation as 501c3
- Core focus areas: Outreach, Advocacy, Data-driven policy, Partnerships
- 2017 strategic re-evaluation with new Vision, Mission, Values
- Theory of Change explanation

### 5. Four Decades Timeline (REWRITE of EventsTimeline)
- Vertical timeline spanning 1978 to 2024:
  - **1978**: Statewide branch founded
  - **1980s**: First statewide conference, chapter model, first major grant from CA Health Care Foundation
  - **1990s**: Not in Mama's Kitchen Campaign, AATEP (Prop 99), Tobacco Research, SLAA
  - **2000s**: Quality Assurance Project, Sweet Heart Project, Personal Health Records
  - **2010s**: Healthcare Reform and ACA outreach, Covered California Navigator, HIV/AIDS campaign, Mental Health webinars, Prevention and Wellness, Black Health Agenda town halls
  - **2020-2024**: Campaign for Black Health Equity launch, COVID response, new ED hired

### 6. A New Beginning: 2020-2024 (NEW component)
- Response, Recovery, Resilience framework from page 12
- Health Equity Framework visual (Racial Justice + Social Justice + Environmental Justice = Health Equity)
- New Vision and Mission statements
- Campaign for Black Health Equity overview and its six core components:
  - Black Health Network
  - Black Health Agenda
  - Health Equity Forum
  - Health4Life
  - Advocacy and Policy
  - Healthcare Coverage

### 7. Grant-Funded Programs (REWRITE of ProgramsGrid)
- Cards for each program from pages 15-17:
  - MHSOAC
  - ACEs Awareness
  - Covered California Navigation
  - Medi-Cal Outreach
  - Campaign for Black Health Equity
  - "How Do I..." Campaign
  - Diabetes and SDOH
  - Supporting Health of African Americans
  - Non-Toxic Black Beauty Project
  - All of Us Campaign
  - Caregiving and the Black Community

### 8. Health Disparities (keep ImpactStats, minor text updates)
- Keep the current 6-card disparity grid, content is accurate

### 9. Policy and Advocacy (REWRITE of LegislativeWins)
- Use the advocacy image (`image-4.png`) as a section banner
- **Sponsored Legislation**:
  - SB 987: California Cancer Care Equity Act (signed 2022)
  - AB 85: SDOH Screening (vetoed 2023, reintroduced)
  - HERJF budget request
  - AB 2300: Toxic-Free Medical Devices Act (signed 2024)
- **Supported Legislation**:
  - SB 65: California Momnibus Act
  - SB 17: Racial Equity Commission
  - Proposition 31: Flavored Tobacco Ban
  - Proposition 3: Right to Marry
  - Proposition 4: Climate Bond
  - Proposition 6: End Involuntary Servitude
  - Proposition 33: Rent Control
- **Advocacy Wins**:
  - Black Health Equity Advocacy Week (first week of May, every year)
  - HEAT Program details

### 10. Black Health Network (NEW component)
- 700+ members across 31 counties
- Member roles and professional titles
- BHN Accomplishments list (13 networking events, 11 mentorship pairs, 37 HEAT graduates, Provider Directory, Black Healthcare Bill of Rights)
- Mentoring testimonials (Ivanna Evans, Mercedes Samudio, Stephanie Bryant)

### 11. Key Accomplishments 2020-2024 (NEW component)
- Highlight reel with animated entries:
  - 2 bills signed into law
  - First-ever Black Health Equity Advocacy Week
  - HEAT Program launched
  - 2,000+ educated through Health4Life and Forums
  - 110,000 individuals reached statewide
  - 4,000+ enrolled in health plans
  - 700+ BHN members
  - Nonprofit of the Year 2022
  - Sacramento Business Journal DEI Honoree 2023
  - Non-Toxic Black Beauty Project launched

### 12. "How Do I..." Campaign (NEW component)
- Overview of the CHCF "Listening to Black Californians" study
- Campaign goals and objectives
- Year 1 results: 600 individuals educated, 4.8/5.0 satisfaction
- Webinar topics listed

### 13. Stakeholder Feedback (REWRITE of CommunityStories)
- Replace fictional testimonials with real stakeholder quotes:
  - Leigh Purry, Blue Shield of California
  - Kiran Savage-Sangwan, California Pan-Ethnic Health Network
  - HEAT program anonymous feedback (3 quotes)
  - Mentoring program testimonials
- Three themes: Health Disparity Awareness, Health Equity and Advocacy, Creating and Facilitating Connections
- Key stats: 100% awareness improvement, 85% trust in CBHN advocacy, 80% made connections

### 14. Looking Ahead: 2025 and Beyond (REWRITE of LookingAhead)
- Campaign for Black Health Equity continuation at three levels:
  - Individual: health literacy, disparities, outcomes
  - Community: SDOH, healthcare access, stakeholder engagement
  - System: racial bias, access, affordable equitable care
- Priority initiatives:
  - Capacity Building
  - Marketing and Branding Strategy
  - Provider Network Directory
  - Health Education (Year 2 of "How Do I...")
  - Conscious Black Beauty Movement
  - Policy Priorities and Agenda
  - Workforce Development

### 15. Financials (keep FinancialsChart, update data)
- Update with real funding data where available from the document
- Mention $8.3M in grants from 1980-2020, 12 major funders

### 16. Call to Action / Donate (keep Footer structure)
- "Join the Campaign for Black Health Equity"
- "Help CBHN rewrite the health story for all Black Californians"
- Donate button, contact info, social links

---

## Technical Implementation

### Files to create:
- `src/components/ExecutiveDirectorLetter.tsx`
- `src/components/ExecutiveSummary.tsx`
- `src/components/HistoryOverview.tsx`
- `src/components/FourDecadesTimeline.tsx`
- `src/components/NewBeginning2020.tsx`
- `src/components/GrantPrograms.tsx`
- `src/components/BlackHealthNetwork.tsx`
- `src/components/KeyAccomplishments.tsx`
- `src/components/HowDoICampaign.tsx`
- `src/components/StakeholderFeedback.tsx`

### Files to heavily rewrite:
- `src/components/HeroSection.tsx` (new headline and framing)
- `src/components/MissionSection.tsx` (becomes HistoryOverview or removed)
- `src/components/EventsTimeline.tsx` (becomes FourDecadesTimeline)
- `src/components/ProgramsGrid.tsx` (becomes GrantPrograms with 11 programs)
- `src/components/LegislativeWins.tsx` (real legislation data)
- `src/components/CommunityStories.tsx` (becomes StakeholderFeedback)
- `src/components/LookingAhead.tsx` (real 2025 priorities)
- `src/components/YearInNumbers.tsx` (becomes ExecutiveSummary infographic)
- `src/components/Leadership.tsx` (may keep or fold into HistoryOverview)
- `src/pages/Index.tsx` (new section ordering)

### Files to update:
- `src/index.css` (swap Inter to Open Sans in Google Fonts import and CSS vars)
- `src/components/Navbar.tsx` (update nav links to match new sections)

### Assets to copy:
- `user-uploads://image-4.png` to `src/assets/advocacy.png`
- `user-uploads://image-5.png` to `src/assets/team-office.png`

### Design patterns kept:
- Framer Motion `useInView` scroll-reveal on every section
- Animated counters for stats
- Vertical timeline with colored connecting lines
- Card-based layouts with subtle tinted borders
- Pulsing Donate button in navbar
- Back to Top button
- Recharts pie chart for financials
- No em dashes, no ampersands, no AI cliches

### Responsive approach:
- All grids collapse to single column on mobile
- Timeline stays readable on small screens
- Images scale with `object-cover`

