---
slug: software-agencies
name: Software Agencies
industry: Digital & Technology
status: researched
checked: 15 October 2026
---

# Software Agencies

## Research log

Queries run (WebSearch):
- software development agency India scope creep fixed price overruns timesheets project failure statistics
- PMI Pulse of the Profession 2018 scope creep 52% projects
- Nasscom Indian tech industry revenue FY26 headcount strategic review 2026
- MSME Samadhaan delayed payment 45 days Section 43B(h) Income Tax IT services small vendors
- TDS section 194J threshold Rs 50,000 professional fees from 1 April 2025 Budget 2025 freelancers 10%
- Copyright Act 1957 Section 19 assignment in writing period territory not stated five years India lapse one year content agencies
- Indian software services small companies delayed payments foreign clients export of services GST LUT 2025 realisation FEMA nine months
- Digital Personal Data Protection Rules 2025 notified phased commencement data processors

Sources (name | URL | year | verified | what it says):
- Online PM Courses, summary of PMI Pulse of the Profession 2018 | https://onlinepmcourses.com/success-disruptive-times-pmi-pulse-profession/ | 2018 | yes (secondary; pmi.org returned 403) | 52% of projects experienced scope creep, attributed to PMI Pulse of the Profession 2018. Search results said it was up from 43% five years earlier (not on the fetched page). General project data, not software-only.
- ETV Bharat (PTI), Nasscom FY26 | https://www.etvbharat.com/en/business/india-fy26-tech-revenues-hit-usd-315-billion-enn26022404879 | 2026 | yes (WebFetch) | Core IT services USD 149 billion in FY26 (USD 143 billion in FY25); total tech USD 315 billion; revenue up 6.1%, headcount up 2.3%.
- Advocatekhoj, Copyright Act 1957 Section 19 | https://www.advocatekhoj.com/library/bareacts/copyright/19.php | n/a | yes (WebFetch) | Assignment valid only in writing and signed; period deemed five years if not stated; territory deemed India if not stated; one-year lapse unless otherwise specified.
- TaxGuru, Section 43B(h) | https://www.taxguru.in/income-tax/section-43bh-msme-payment.html | 2024 | yes (WebFetch) | 45-day outer limit for micro and small suppliers' goods or services, from AY 2024-25.
- ClearTax, Section 194J | https://cleartax.in/s/section-194j | n/a | yes (WebFetch) | Professional services 10%, technical services 2%, threshold Rs 50,000 a year; clients paying a software agency may treat fees as professional or technical, which the accountant decides.
- Scconline, DPDP Rules 2025 | https://www.scconline.com/blog/post/2025/12/26/digital-personal-data-protection-rules-2025-key-highlights/ | 2025 | yes (WebFetch) | Notified 14 Nov 2025; most duties 18 months later; processors covered; deletion on instruction; logs kept at least one year.
- McKinsey 2012 study of large IT projects, Standish CHAOS, Clutch poll, Gitnux and Raftlabs statistics | various | various | no | Only seen through LinkedIn posts, forums and statistics pages; conflicting. NOT used.
- Foreign payment realisation rules (RBI/FEMA) | various | 2025/2026 | no | Conflicting reports of nine, twelve and fifteen months; a new framework reported from 1 October 2026. NOT used as a fact.

## SEO

- title: Software agency management software for Indian dev shops | Verity
- description: Sprints, scope changes, timesheets and fixed-price budgets in one system. See the 14 leaks in a software agency and the Verity screens that close each one.
- keywords: software agency management software India; fixed price project budget tracking; change request and scope tracking; developer timesheet tracking; sprint and client dependency tracking
- plural: software agencies
- subject: software agency
- uses: people, work, relationships, records, workflows, communication, intelligence, control, workforce, schedule, ai

## Hero

- eyebrow: Verity for software agencies
- headline: The sprint finished on time. The fixed-price budget finished two weeks ago.
- lede: A software agency prices a project before it knows what it is. Then the client changes the scope by chat, the API keys arrive late, the sprint slips for a reason nobody wrote down, and the timesheet is filled in on Friday. Verity ties the estimate, the sprint, the change request and the hours to one project record, so you can see the overrun in week three and not in week twelve.
- one line: One system that knows every project's estimate, every change request, every sprint and every hour, and tells you which fixed-price job is burning money before the client does.
- note: Your code, repositories and task boards stay where they are. Verity runs the company around them.
- hero screen id: owner
- screen note: projects, budgets, sprints and utilisation

## How it runs today

**The developers manage the code well. The commercial side of each project is a guess.**

- A software agency of fifteen to eighty people runs a dozen projects at once, a mix of fixed-price builds, time-and-material work and monthly support. Developers live in the repository and the sprint board. Project managers run standups, estimate tasks and chase clients.
- The commercial facts live elsewhere. The fixed price was quoted on a call and a spreadsheet. Change requests are chat messages. Client dependencies, such as content, designs and access, are tracked by whoever remembers. Timesheets are filled on Friday from memory. The founder holds the project margins in their head.
- So the agency finds out late. A fixed-price project that has used 85% of its budget at 50% of its scope. A change that was agreed in a call and never priced. A sprint that failed because the client's API access arrived late, with the team blamed. A client invoice disputed because the hours do not match the sprint. General project data shows how common this is: PMI's 2018 Pulse of the Profession reported scope creep or uncontrolled change on 52% of projects.
- runs on: Task board per project; Git hosting; Chat groups with clients; Timesheet tool or spreadsheet; Quotation and invoice sheets
- stack note: Each tool is fine for its job. Nothing joins the estimate, the change, the sprint, the hours and the invoice.

## Pains

Heading: Where a software agency actually loses money.
Lede: These are the situations founders, delivery heads and project managers describe again and again. For each one: what it looks like, what it costs, and what Verity does about it.

### 1. The fixed price was a guess
- area: Fixed price
- scene: A client wants an app "like the one on the Play Store". A 200-hour estimate is made on a call and rounded up by 20%. The fixed price goes out the same afternoon. Nobody records what was included.
- cost: A price set before the scope is known is the root of most overruns. Example arithmetic: if the real build is 330 hours and the cost is ₹1,000 an hour, the overrun is 130 hours, or ₹1.3 lakh, against a margin that was perhaps ₹1.5 lakh.
- fix: Every project starts from a scope list with an estimate per item and the assumptions behind them. The fixed price is tied to that list. Anything outside it is, by definition, a change.
- screen: budget

### 2. Nobody sees the budget burning
- area: Fixed price
- scene: A project has a 1,000-hour budget. Developers log time on Fridays. The project manager sees the total at month end and finds it at 880 hours with half the features done.
- cost: By the time it is visible, little can be done.
- fix: Hours are logged against the project and scope item as work happens. Verity shows hours used against the budget next to the share of scope delivered, so a project that is burning faster than it delivers is flagged weekly to the delivery head.
- screen: budget

### 3. Changes agreed in chat and never priced
- area: Scope
- scene: A client asks on a call for a new report and a second login role. The account manager says "sure, we'll see". It goes into the sprint without a ticket for the change.
- cost: Each small yes is unpaid work. PMI's 2018 Pulse of the Profession found scope creep or uncontrolled change on 52% of the projects it surveyed.
- fix: Any request outside the scope list becomes a change request with an estimate, a price and a client approver. Work on it does not start until it is approved, or until the delivery head accepts it as a free gesture, which is recorded.
- screen: scope
- source: (Online PM Courses on PMI Pulse of the Profession, 2018: https://onlinepmcourses.com/success-disruptive-times-pmi-pulse-profession/)

### 4. Bug fixes and new features blur together
- area: Scope
- scene: The warranty period ends in 30 days. The client raises 14 items. Seven are real defects, five are new features, two are "it should work like this" opinions.
- cost: New work gets done free under the label of a bug fix, and a real defect gets argued about.
- fix: Every item raised after delivery is classified as defect, change or support. The warranty end date is on the project, and anything classed as a change goes to the change request flow.
- screen: scope

### 5. The client's delay becomes your delay
- area: Sprints
- scene: The sprint needed the client's payment gateway keys on Monday. They came the following Thursday. The sprint is reported as missed, and the client asks why.
- cost: Idle days for developers on a fixed-price project are paid for by the agency, and the client's delay goes unrecorded.
- fix: Client dependencies, such as access, content, designs and decisions, are tracked with an owner on the client's side and a needed-by date. A late one is recorded with the days lost, so the plan is changed and the delay is on the record.
- screen: sprints

### 6. Sprint carry-over with no explanation
- area: Sprints
- scene: Six of fourteen stories carry over to the next sprint. The retro says "estimates were off". Nobody can tell whether it was scope, dependencies, sickness, or a production issue.
- cost: Repeating the same causes means repeating the same slips.
- fix: Each story that carries over records a reason from a short list: estimate, client dependency, defect, change, absence or other. The delivery head sees the causes across projects over the last several sprints.
- screen: sprints

### 7. One developer, two sprints, no one counted
- area: Sprints
- scene: A senior developer is assigned to two sprints at 100% each. A third client calls her for an urgent fix. She works late, delivers all three late and resigns.
- cost: Overloading the best developer loses the project and then the person.
- fix: Allocation is shown by person, project and week with leave and holidays. Anyone above 100% is flagged to the delivery head, and the request for an urgent fix is logged against a project, not given verbally.
- screen: sprints

### 8. Timesheets filled on Friday from memory
- area: Timesheets
- scene: At 6 pm on Friday, twelve developers fill in a week of hours. Most pick even numbers. Debugging for a client's issue goes in under another project.
- cost: Wrong data produces wrong margins and disputes over the invoice. Example arithmetic: 10% of hours booked to the wrong project on 12 projects can hide a ₹3 to 4 lakh loss on one of them.
- fix: Time is logged from the task, with project and scope item already filled, during or just after the work. Weekly approval by the project manager closes the week.
- screen: timesheets

### 9. Non-billable time is invisible
- area: Timesheets
- scene: Pre-sales calls, code reviews for other teams, hiring interviews and environment fixes take about a fifth of the senior team's week. None of it is logged.
- cost: Hourly rates are set as if all hours were billable, so the company is quietly underpriced.
- fix: Non-billable categories such as pre-sales, internal tools and hiring are logged like projects. Verity shows billable and non-billable hours by person and week, giving the true utilisation to price against.
- screen: timesheets

### 10. Time-and-material invoices that the client questions
- area: Timesheets
- scene: The monthly invoice lists 640 hours. The client's manager asks what was done in week two. The project manager reconstructs it from commit messages.
- cost: Weeks of delay on a payment and a weaker relationship.
- fix: Approved hours carry the task or scope item they were spent on. The invoice summary your finance team prepares comes from approved hours by person, rate and task, so the answer is already on the record.
- screen: timesheets

### 11. Code, repositories and credentials in one person's name
- area: Handover
- scene: The client's cloud account, the app store login and the production database password are held by one developer. She leaves, and a hotfix cannot be deployed.
- cost: A delayed fix on a live system and an awkward call to the client.
- fix: Each project lists the accounts, repositories and environments, the person who holds admin access, a backup holder and the last review date. A resignation creates a handover task for each item.
- screen: handover

### 12. Who owns the code was never written down
- area: Handover
- scene: A client has paid in full and wants the source code and the right to host and modify it. The agreement says only "development services". A freelancer wrote a core module.
- cost: Under the Copyright Act, an assignment must be in writing, and if it does not state a period it is generally taken as five years, and if it does not state a territory, India only. Disputes at handover are costly and slow down payment.
- fix: Each project has an ownership record: the agreement with the client, agreements with every freelancer, what rights were assigned and for how long, and the licences of third-party components. A project cannot be marked handed over without it.
- screen: handover
- source: (Copyright Act 1957, Section 19, Advocatekhoj: https://www.advocatekhoj.com/library/bareacts/copyright/19.php)

### 13. Real customer data in test environments
- area: Handover
- scene: To reproduce a bug, a developer copies a client's production database to a laptop. It stays there for four months after the project ends.
- cost: The DPDP Rules, notified in November 2025, set duties on those who process personal data, including security safeguards, breach reporting and deletion on the controller's instruction. Most duties start about 18 months after publication.
- fix: Each project records which environments hold client data, who has access, and a deletion date. A project that closes creates tasks to remove copies and access, with a sign-off from the delivery head.
- screen: handover
- source: (Scconline on DPDP Rules 2025: https://www.scconline.com/blog/post/2025/12/26/digital-personal-data-protection-rules-2025-key-highlights/)

### 14. Cash: milestone payments, foreign clients and tax on fees
- area: Money
- scene: A US client pays 60 days after invoice. A domestic client deducts tax on fees and sends the certificate months later. A freelancer developer is owed money that is overdue.
- cost: Cash gaps are bridged by the agency. Where a micro or small vendor is paid after the allowed period, Section 43B(h) generally disallows the expense until it is paid; the limit is 45 days from acceptance.
- fix: Project billing events and vendor bills are records with dates and states. Verity lists what is due from clients and to vendors, by age. Your accountant handles tax deducted, certificates and foreign receipts; the records are ready.
- screen: owner
- source: (TaxGuru on Section 43B(h): https://www.taxguru.in/income-tax/section-43bh-msme-payment.html)

## Facts

Heading: The numbers behind these problems.
Lede: From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.
Note: The scope creep figure is for projects in general, not only software, and was seen through a secondary summary. Nasscom figures are as reported by PTI. No Indian survey on fixed-price overruns in software agencies was found, so those pains use labelled example arithmetic.

- **52%**: of projects experienced scope creep or uncontrolled change, in PMI's 2018 Pulse of the Profession, as summarised by a project management course site. This is across industries. (Online PM Courses on PMI, 2018: https://onlinepmcourses.com/success-disruptive-times-pmi-pulse-profession/)
- **USD 149 billion**: Nasscom's FY26 estimate for core IT services in India, in an industry where revenue grew 6.1% and headcount 2.3%. (ETV Bharat on Nasscom, 2026: https://www.etvbharat.com/en/business/india-fy26-tech-revenues-hit-usd-315-billion-enn26022404879)
- **5 years**: the period for which an assignment of copyright is generally taken to last when none is stated, and India alone when no territory is stated. It must be in writing. (Copyright Act 1957, Section 19, Advocatekhoj: https://www.advocatekhoj.com/library/bareacts/copyright/19.php)
- **10% or 2%**: the usual TDS rates on professional and technical service fees respectively, above ₹50,000 a year, so how a client treats your fees affects your cash. (ClearTax on Section 194J: https://cleartax.in/s/section-194j)

## Screens

Heading: The screens you would use every day.
Lede: Six views, each built for one job. Names, columns and terms are set up in your agency's own language.

### owner: The founder's morning view
- panel title: Agency / This week
- meta: All projects
- caption: Fixed-price projects burning ahead of delivery, change requests waiting, utilisation and what clients owe, on one screen. It replaces the Monday project review.

```json
[
 {"type":"kpis","items":[
  {"label":"Fixed-price at risk","value":"3 of 9","note":"burn ahead of scope"},
  {"label":"Change requests open","value":"11","note":"₹6.4 L unpriced"},
  {"label":"Billable utilisation","value":"71%","note":"target 78%"},
  {"label":"Owed by clients","value":"₹34 L","note":"₹12 L past 45 days"}
 ]},
 {"type":"title","text":"Budget used against scope delivered, fixed-price projects"},
 {"type":"bars","items":[
  {"label":"Ledgerly app: budget used","value":88,"display":"880 of 1,000 h","tone":"muted"},
  {"label":"Ledgerly app: scope done","value":52,"display":"52%"},
  {"label":"HealthPlus portal: budget","value":47,"display":"376 of 800 h"},
  {"label":"HealthPlus portal: scope","value":50,"display":"50%"}
 ]},
 {"type":"alert","text":"Ledgerly app has used 88% of its budget with 52% of scope delivered. 4 change requests are unpriced.","action":"Review project"},
 {"type":"list","items":[
  {"name":"Gateway keys, Ledgerly","meta":"Client dependency, needed 13 Oct, 6 days late","tag":["Chase","late","Received","ok"]},
  {"name":"Developer Nisha at 140% across 2 sprints","meta":"Ledgerly and HealthPlus","tag":["Over","flag","Rebalanced","ok"]}
 ]}
]
```

### budget: Estimate, budget burn and what is left
- panel title: Fixed-price projects
- meta: Ledgerly app
- caption: The scope list with estimates, hours used per item and the share delivered. The budget line moves with approved change requests only.

```json
[
 {"type":"table","cols":["Scope item","Estimate","Used","Delivered","Variance","Status"],"rows":[
  ["Login and roles","80 h","94 h","100%","+14 h",["Done","ok"]],
  ["Ledger screens","240 h","310 h","70%","+70 h",["Over","late"]],
  ["Reports","160 h","120 h","35%","-40 h",["On track","info"]],
  ["Payments","120 h","140 h","20%","Forecast +80 h",["At risk","flag","Replanned","ok"]],
  ["Admin panel","100 h","30 h","0%","n/a",["Not started","muted"]]
 ]},
 {"type":"alert","text":"At the current pace the project needs about 1,380 hours against 1,000 budgeted.","action":"Plan response"}
]
```

### scope: Change requests and defects, kept apart
- panel title: Scope and changes
- meta: All open items
- caption: Every request after kick-off is a defect, a change or support. Changes carry an estimate, a price and a client approver. Defects are checked against the warranty end date.

```json
[
 {"type":"table","cols":["Request","Project","Type","Estimate","Client approver","Status"],"rows":[
  ["Second login role","Ledgerly","Change","24 h, ₹36,000","Rahul Mehta",["Quote sent","info","Approved","ok"]],
  ["New report","Ledgerly","Change","40 h, ₹60,000","Rahul Mehta",["Not priced","late","Quoted","ok"]],
  ["Page crashes on save","HealthPlus","Defect","6 h","n/a",["In warranty","ok"]],
  ["Export to Excel","HealthPlus","Change","16 h, ₹24,000","Dr Anita Rao",["Declined","muted"]]
 ]},
 {"type":"record","title":"HealthPlus portal","sub":"Warranty ends 14 Nov","fields":[
  ["Raised after delivery","14 items"],["Defects","7"],["Changes","5"],["Support questions","2"]
 ],"timeline":[["30 Oct","Review items with client"],["5 Nov","Changes quoted"],["14 Nov","Warranty ends"]]}
]
```

### sprints: Sprint health, dependencies and who is loaded
- panel title: Sprints
- meta: Current sprint and next two weeks
- caption: Stories done and carried over with a reason, client dependencies with their needed-by dates, and each developer's allocation across sprints.

```json
[
 {"type":"table","cols":["Dependency","Project","Client owner","Needed by","Days late","Status"],"rows":[
  ["Payment gateway keys","Ledgerly","Rahul Mehta","13 Oct","6",["Late","late","Received","ok"]],
  ["Sample patient data","HealthPlus","Dr Anita Rao","20 Oct","0",["Due","info"]],
  ["Brand assets","Ledgerly","Meera Kulkarni","18 Oct","2",["Late","flag"]]
 ]},
 {"type":"bars","items":[
  {"label":"Carry-over: client dependency","value":50,"display":"3 stories"},
  {"label":"Carry-over: estimate","value":33,"display":"2 stories","tone":"muted"},
  {"label":"Carry-over: defect","value":17,"display":"1 story","tone":"muted"}
 ]},
 {"type":"table","cols":["Developer","This week","Projects","Leave","Status"],"rows":[
  ["Nisha","140%","Ledgerly, HealthPlus","None",["Over","late","Rebalanced","ok"]],
  ["Arun","90%","Ledgerly","19 Oct",["OK","ok"]]
 ]}
]
```

### timesheets: Hours as they happen, billable or not
- panel title: Timesheets
- meta: This week
- caption: Hours logged from the task against project and scope item, approved by the project manager. Billable and non-billable time shown side by side.

```json
[
 {"type":"table","cols":["Developer","Billable","Non-billable","Total","Approved","Status"],"rows":[
  ["Nisha","38 h","8 h","46 h","Yes",["Over 45 h","flag"]],
  ["Arun","32 h","6 h","38 h","Yes",["OK","ok"]],
  ["Farhan","24 h","14 h","38 h","No",["Pending","late","Approved","ok"]],
  ["Priya","30 h","4 h","34 h","Yes",["OK","ok"]]
 ]},
 {"type":"bars","items":[
  {"label":"Billable","value":71,"display":"71%"},
  {"label":"Pre-sales","value":10,"display":"10%","tone":"muted"},
  {"label":"Code review and hiring","value":12,"display":"12%","tone":"muted"},
  {"label":"Internal tools","value":7,"display":"7%","tone":"muted"}
 ]}
]
```

### handover: Access, ownership and data to remove
- panel title: Handover and close
- meta: Projects closing in the next 60 days
- caption: For each project, who holds admin access, the ownership agreements, where client data sits and what must be removed at close.

```json
[
 {"type":"table","cols":["Project","Admin holder","Backup","Ownership paper","Client data copies","Status"],"rows":[
  ["Ledgerly app","Nisha","None","Client agreement only",["2 laptops","flag","Removed","ok"],["Gap","late","Backup added","ok"]],
  ["HealthPlus portal","Arun","Priya","Freelancer agreement missing","1 test server",["Gap","flag"]],
  ["Retail POS app","Priya","Arun","Complete","None",["Ready","ok"]]
 ]},
 {"type":"checks","items":[
  {"text":"Freelancer agreement for reports module","meta":"Period and territory stated","done":false},
  {"text":"Delete HealthPlus test data","meta":"Due when project closes, 14 Nov","done":false},
  {"text":"Third-party licences listed, Retail POS","meta":"Reviewed by Arun","done":true}
 ]}
]
```

## Day, before and after

Heading: The same Wednesday, before and after.
Lede: What changes is not the code. It is that the day leaves a record, and the record does the chasing.

- 9:30: before: The delivery head asks each project manager how their sprint is going. | after: The sprints view shows two dependencies late, three stories at risk and one developer over 100%.
- 11:00: before: A client asks for "one more report" on a call. The account manager says yes. | after: The request is logged as a change with an estimate, and goes to the client approver for a price.
- 1:00: before: The team waits for payment gateway keys that were promised last week. | after: The dependency was flagged six days ago with the client contact named, and the delay is on the record.
- 3:30: before: A developer fixes a client "bug" that is really a new feature. | after: The item was classed as a change, so it waits for a quote.
- 6:00: before: Developers log the day's hours at the end of the week. | after: Hours were logged from the task as work happened, against the scope item.
- Month end: before: Invoices are built from memory and disputed. | after: Approved hours by task and delivered milestones are on the record, so finance prepares the invoice from them.

## How we work

Heading: We set it up with you, in four weeks.
Lede: You do not get a login and a manual. We follow a project from quote to invoice, build Verity around how your scope, sprints and hours really move, bring in your data, then stay to make sure it keeps working.

### Week 1: Discovery and mapping
- we: Trace one fixed-price project and one time-and-material project from quote to invoice. Sit in a sprint planning and a change discussion. Note where scope, hours and money stop lining up.
- you: Two to three hours of yours and your delivery head's. Three recent quotes with their final invoices and hours.
- get: A written map of your agency: projects, pricing models, scope lists, sprint routine, timesheets and the first gaps we will close.

### Weeks 2 to 3: Configuration
- we: Set up client and project records, scope lists, change request flow, dependency tracking, allocation, timesheet categories, handover records and the six screens in your own terms.
- you: Check the setup with a project manager and a senior developer. Tell us where a stage, category or rule is wrong.
- get: A working Verity with your real projects, pricing models and rules, ready for your data.

### Weeks 3 to 4: Migration and training
- we: Bring in clients, active projects, scope lists, current allocations and recent hours from your sheets and tools. Train each role on its own screen using live projects.
- you: Your project list and timesheet export in whatever form they exist. One hour with each role.
- get: Your projects, scope and hours inside Verity, and a team that has run a real change request and a real sprint through it.

### After go-live: Operations partnership
- we: Stay on after launch. Review the first month of budgets, changes and utilisation with you, tune the limits, and handle changes when you add a client, a team or a pricing model.
- you: A short monthly review of what the numbers say.
- get: A system that keeps matching how the agency runs, with someone responsible for it.

- bring: Three recent quotes with scope and final invoice; A month of timesheets; Your list of active projects with pricing model; Client agreements, including any ownership terms; A list of accounts and repositories you hold for clients
- time: About 9 to 12 hours of your own time across the four weeks, mostly in week 1. Your delivery head needs a few more.
- after: Nobody is hired to run Verity. Scope, hours and dependencies are recorded as part of work the team already does, and views come from those records.

## Verity AI examples

Heading: Ask your agency a question. Get an answer, not a report to build.
Lede: Verity AI reads your own project, scope, sprint and timesheet records. Ask in plain language, then turn the answer into tasks for the right people.

- Q: Which fixed-price projects are burning faster than they are delivering? | A: Three of nine. Ledgerly is the worst, at 88% of budget with 52% of scope done. | rows: Ledgerly app = 88% budget, 52% scope; Retail POS = 71% budget, 60% scope; Pay Hub = 66% budget, 55% scope | action: Create review tasks for each project manager
- Q: How many hours did we spend on unpriced changes last month? | A: 142 hours across five projects, worth about ₹2.1 lakh at your standard rate. | rows: Ledgerly = 64 h; HealthPlus = 38 h; Retail POS = 22 h; Others = 18 h | action: Create quote tasks for the account managers
- Q: Which projects have a single person holding all admin access? | A: Four. Two of them close within 30 days. | action: Create backup-holder tasks

## Automations

Heading: The follow-ups nobody has time to make.
Lede: Set once, then they run from your records. Your team still talks to clients and developers; Verity makes sure the right person knows what to do.

- when A request outside the scope list is logged: Classified as defect, change or support; Estimate task to the project manager; Held for client approval before work begins
- when Hours used on a fixed-price project pass 75% of budget with less than 75% of scope delivered: Delivery head alerted; Recovery options listed; Decision recorded on the project
- when A client dependency passes its needed-by date: Flag on the sprint view; Task to the account manager to chase; Days lost recorded
- when A developer's allocation goes above 100%: Flag to the delivery head; Clashing projects named; Rebalancing recorded
- when A project reaches its warranty end date: Open defects listed; New items routed to the change flow; Closing checklist created
- when A project closes: Tasks to remove client data copies and access; Ownership paper checked; Handover signed off by the delivery head

## Rules and paperwork

Heading: The rules a software agency has to keep up with.
Lede: Verity does not give legal or tax advice and does not file anything for you. It keeps the records these rules depend on in order, so you are not hunting for them when someone asks.
Note: Rules change and differ by situation. Confirm current requirements with your accountant or lawyer.

- **Copyright assignment (Copyright Act, 1957, Section 19)**: what: An assignment of rights in code must be in writing and signed. If it does not state a period, it is generally taken as five years, and if it does not state a territory, as India only. Rights not used within a year can lapse unless the assignment says otherwise. | how: Each project has an ownership record covering client and freelancer agreements, period, territory and third-party licences. (Advocatekhoj, bare act: https://www.advocatekhoj.com/library/bareacts/copyright/19.php)
- **Digital Personal Data Protection Rules, 2025**: what: Notified on 14 November 2025. Most duties, such as security safeguards, breach reporting and retention, generally apply 18 months after publication. Processors follow the controller's instructions, including on deletion. | how: Each project records which environments hold client data, who can access them and when they must be removed. (Scconline: https://www.scconline.com/blog/post/2025/12/26/digital-personal-data-protection-rules-2025-key-highlights/)
- **MSME payment terms and Section 43B(h)**: what: Amounts owed to micro and small suppliers beyond the allowed period, which cannot exceed 45 days from acceptance, are generally disallowed as a deduction until paid, from AY 2024-25. Medium enterprises are excluded. | how: Vendor and freelancer bills carry acceptance date, registration status and due date. (TaxGuru: https://www.taxguru.in/income-tax/section-43bh-msme-payment.html)
- **GST, TDS and foreign receipts**: what: Clients may deduct tax on your fees as professional or technical, and invoices to clients outside India follow separate GST and RBI rules for receiving payment, which have been changing. Your accountant and bank decide and file. | how: Each billing event records client, country, amount, date and payment state. (ClearTax on Section 194J: https://cleartax.in/s/section-194j)

## Roles

Heading: Everyone sees the same records, through their own window.
Lede: A developer should not see everyone's rates. A client contact should not see another client's project. Each role opens on what it needs.

- Founder: Which projects make money and which are at risk? | Budget against scope, change requests, utilisation, receivables and client risk.
- Delivery head: Who is loaded, what is blocked, what is over? | Allocation, sprints, dependencies, change requests and warranty dates.
- Project manager: Where is my project against its budget? | Scope list, hours used, carry-over reasons, client dependencies and change requests.
- Developer: What do I work on and what do I log? | Own tasks, the project scope, own timesheet and own allocation.
- Finance lead: What can I invoice and what do I owe? | Approved hours, delivered milestones, approved changes and vendor bills.

## Alongside

Heading: What changes, and what stays the same.
- keep: Your repositories and sprint boards, where developers work. We agree during setup how tasks and hours reach Verity.; Your chat and email with clients. Your team replies; Verity tracks who owes a reply.; Your accounts package, which still raises invoices and files returns.; Your cloud accounts and build tools, which Verity does not touch.
- not: Write, review or deploy code.; Send invoices, reminders or messages to clients on its own.; Run your payroll or file your returns.; Draft client contracts or give legal advice on code ownership.
- migration: We bring clients, active projects, scope lists, allocations, recent hours and handover details across from your sheets and tools, in stages, so sprints keep running while it happens.

## FAQ

Heading: Questions software agency owners ask.

- **My developers hate timesheets. Will they use it?** Only if it is quick. Time is logged from the task, with the project and scope item already filled. We start with billable work and add other categories only where you need the answer.
- **We already use a sprint board. Why add this?** A board knows tasks. It does not know the fixed price, the change requests, the client's dependencies or the budget. We agree during setup how tasks reach Verity, or you move them.
- **How does it show a fixed-price overrun early?** Each project has a scope list with estimates. Hours are logged against scope items and compared with the share delivered, so the burn is visible weekly instead of at month end.
- **What if a client changes scope in a chat?** The account manager logs it as a change request with an estimate. It waits for a client approver before work begins, or the delivery head records it as a free gesture.
- **Does it write or review code?** No. It does not touch your code or repositories. It records the project, scope, people and hours around them.
- **Can it handle support retainers and time-and-material together?** Yes. Retainers have hours included and used, time-and-material has approved hours by person and rate, and fixed-price has scope and budget. Each is set up in your terms.
- **Can clients see progress?** Only if you want them to. By default your team uses Verity and clients keep replying the way they do now. A client view can be agreed during setup.
- **Who can see my data?** Only the people you allow. Access is set by role and project, and every change is recorded with who made it and when.
- **What does it cost?** It depends on the number of people, projects and what you want set up. Message us and we will give you a clear number after a short conversation about how your agency runs.

## Related and CTA

- related: it-services-companies, app-developers, web-development-agencies, saas-companies, startups, ai-companies
- cta heading: Start with the fixed-price project that is burning.
- cta lede: Tell us how your agency runs and we will show you the projects spending faster than they deliver, the changes nobody priced and the access held by one person, using your own numbers.

## Assumptions and unverified

- All sample names, hours, rates and amounts are illustrations.
- The scope creep figure is cross-industry, from a secondary summary of PMI 2018 because pmi.org returned 403. The 43% figure five years earlier was not on the fetched page and is not used.
- No verified Indian statistic on fixed-price overruns in software agencies was found. McKinsey, Standish, Clutch and Gitnux numbers were seen only through unreliable intermediaries and were left out.
- Pain 2 paraphrases a trade guide aimed at marketing and creative agencies (Enterprise DNA) for the general pattern, without a number; it was not fetched, so remove the sentence about the trade guide if it is converted without verification.
- Foreign payment realisation rules (RBI/FEMA) conflict across sources and are left out; the rules entry says confirm with the bank and accountant.
- Whether a client treats fees as professional (10%) or technical (2%) is a matter for the accountant; the threshold effective date (1 April 2025) was not on the fetched page.
- Software agency work for a client may involve the agency acting as a data processor; this depends on contracts.
- Copyright ownership of code created by employees versus freelancers was not researched beyond Section 19.
