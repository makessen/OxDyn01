# AI Tools
1. Google Gemini 3.1 Pro
2. Antigravity
3. Antigravity IDE
4. Stitch -> direct deploy to Netlify

# Some key prompts

Initiate a new remote github repo for this project and puth the current dir to initiate it

Use this brief [Design%20Engineer%20Brief.md](file;file:///Users/duncanoon/AGYProjects/OxDyn01/docs/Design%20Engineer%20Brief.md) 

And these definitions:
12:40 start 12:58 decide on sector = Legal 12:59 Decide on Regulated, Document-heavy Organisation = Thames Water 13:01 Decide on Senior Decision maker = [Julian Gething - Chief Restructuring Officer](https://www.thameswater.co.uk/about-us/governance/our-board/julian-gething) Input sources: [https://www.thameswater.co.uk/about-us/regulation/our-five-year-plan](https://www.thameswater.co.uk/about-us/regulation/our-five-year-plan) [https://www.thameswater.co.uk/about-us/regulation/our-regulators](https://www.thameswater.co.uk/about-us/regulation/our-regulators) [https://www.thameswater.co.uk/about-us/regulation/drainage-and-wastewater-management](https://www.thameswater.co.uk/about-us/regulation/drainage-and-wastewater-management) [https://www.thameswater.co.uk/about-us/regulation/pollution-incident-reduction](https://www.thameswater.co.uk/about-us/regulation/pollution-incident-reduction) [https://www.thameswater.co.uk/about-us/regulation](https://www.thameswater.co.uk/about-us/regulation)
Legal sources: [https://caselaw.nationalarchives.gov.uk/ewca/crim/2019/1344?query=Thames+water+pollution](https://caselaw.nationalarchives.gov.uk/ewca/crim/2019/1344?query=Thames+water+pollution) [https://caselaw.nationalarchives.gov.uk/ewhc/tcc/2007/2021?query=Thames+water+pollution](https://caselaw.nationalarchives.gov.uk/ewhc/tcc/2007/2021?query=Thames+water+pollution) [https://caselaw.nationalarchives.gov.uk/ewca/civ/2018/342?query=Thames+water+pollution](https://caselaw.nationalarchives.gov.uk/ewca/civ/2018/342?query=Thames+water+pollution) [https://caselaw.nationalarchives.gov.uk/ewhc/ch/2016/1547?query=Thames+water+pollution](https://caselaw.nationalarchives.gov.uk/ewhc/ch/2016/1547?query=Thames+water+pollution) [https://caselaw.nationalarchives.gov.uk/ewca/crim/2015/960?query=Thames+water+pollution](https://caselaw.nationalarchives.gov.uk/ewca/crim/2015/960?query=Thames+water+pollution) [https://caselaw.nationalarchives.gov.uk/ewca/crim/2010/202?query=Thames+water+pollution](https://caselaw.nationalarchives.gov.uk/ewca/crim/2010/202?query=Thames+water+pollution) [https://caselaw.nationalarchives.gov.uk/ewhc/admin/2003/1197?query=Thames+water+pollution](https://caselaw.nationalarchives.gov.uk/ewhc/admin/2003/1197?query=Thames+water+pollution) [https://caselaw.nationalarchives.gov.uk/ewca/civ/2009/28?query=Thames+water+pollution](https://caselaw.nationalarchives.gov.uk/ewca/civ/2009/28?query=Thames+water+pollution) [https://caselaw.nationalarchives.gov.uk/ewhc/tcc/2011/3253?query=Thames+water+pollution](https://caselaw.nationalarchives.gov.uk/ewhc/tcc/2011/3253?query=Thames+water+pollution) [https://caselaw.nationalarchives.gov.uk/ewca/civ/2018/2795?query=Thames+water+pollution](https://caselaw.nationalarchives.gov.uk/ewca/civ/2018/2795?query=Thames+water+pollution)
Social sources: [https://www.linkedin.com/company/thames-water/](https://www.linkedin.com/company/thames-water/) [https://www.bbc.co.uk/news/uk-england-london-67357566](https://www.bbc.co.uk/news/uk-england-london-67357566) [https://www.thames21.org.uk/water-quality-results/](https://www.thames21.org.uk/water-quality-results/) [https://www.sas.org.uk/water-quality/water-companies-shocking-stats/englands-water-companies/thames-water/](https://www.sas.org.uk/water-quality/water-companies-shocking-stats/englands-water-companies/thames-water/) [https://www.thameswater.co.uk/about-us/performance/river-health/storm-discharge-and-flow-data](https://www.thameswater.co.uk/about-us/performance/river-health/storm-discharge-and-flow-data)
GIS Sources: [https://www.thameswater.co.uk/edm-map](https://www.thameswater.co.uk/edm-map)
Data sources: various xlsx files downloaded from Thames Water.

Generate in Stitch: 
The product: a tool that lets their team ask plain-English questions of the organisation's private library - internal reports, archived PDFs, spreadsheets, scans and returns sourced answers with citations back to the original document. Auditable. Nothing leaves their environment.

You have one page to make them lean in. Pick the name. Pick the sector. Invent the brand. Design and build the page.


## The Stitch prompt created from Antigravity:

"A desktop landing page for a highly secure enterprise B2B product called Substrata. It's designed for Chief Restructuring Officers in regulated industries like Thames Water to interrogate decades of internal documents (PDFs, spreadsheets, legal precedents) using plain-English questions without data leaving their environment. The vibe must be serious, heavily audited, professional, highly secure, high-contrast, austere (think deep navy, slate gray, stark white, clean typography like Inter). Section 1 (Hero): Headline 'Total visibility into your regulatory reality', subheadline 'Securely interrogate decades of internal reports and legal precedents. 100% auditable. Zero data leaves your environment.' with a CTA 'See Live Demo'. Section 2: A mockup of the UI showing a search bar asking 'How many pollution incidents in 2019 violated the 1991 Water Industry Act?' returning a cited answer. Section 3: Key Features (Verifiable Citations, On-Premise/VPC Deployment, Unlocks Unstructured Data)."

(This led the generation of a landing page rather than an actual app layout)



# Interventions
- the initial prompt led the generation of a landing page rather than an actual app layout, I had to iterate the design from there.
- After the 'one-shot' in Stitch I iterated the design a couple of times
- I also used some prompts and targeted changes in specific areaas in Stitch to emphasise the security of the system. 

# Reflections
- My Macbook is getting slow and too old
- improve project scaffolding to enable more rapid start.
- have a different accelerator for the 'one-shot' idea - I have used a quick hand drawn sketch previously - I should use that to guide the initial generation.
- code quality is superficial prototype and not ready for production
- I usually use prompts to document progress and build a project memory... I used more than the 2 hours to tidy up the documents.
- check versions of libraries and ensure the environment is set up BEFORE STARTING as I spent a long time debugging issues with my .next and .react version conflicts.

