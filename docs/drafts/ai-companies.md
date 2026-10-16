---
slug: ai-companies
name: AI Companies
industry: Digital & Technology
status: researched
checked: 16 October 2026
---

# AI Companies

## Research log

Queries run (WebSearch):
- India AI startups challenges GPU compute cost enterprise pilots stuck pilot to production
- Digital Personal Data Protection Rules 2025 notified phased implementation timeline India
- IndiaAI Mission GPU compute subsidy startups allocated GPUs 2026
- India AI Governance Guidelines November 2025 MeitY principles
- enterprise AI pilots fail to reach production India survey percent
- AI startup India model evaluation data licensing copyright training data dispute ANI OpenAI Delhi High Court 2026

Sources (name | URL | year | verified | what it says):
- Storyboard18, report by MSL | https://www.storyboard18.com/digital/only-15-of-indian-firms-have-ai-in-production-report-reveals-details-about-indias-ai-gap-89172.htm | 2026 (9 Feb) | yes (WebFetch) | Only 15% of organisations have deployed GenAI workloads into production; just 8% of Indian enterprises can fully measure and allocate AI-related costs. Report name not given on the page.
- Business Today on Salesforce Agentic Workplace Study | https://www.businesstoday.in/technology/artificial-intelligence/story/india-loves-ai-so-why-are-so-many-workplace-ai-pilots-failing-546614-2026-07-31 | 2026 (31 Jul) | yes (WebFetch) | 38% of workers in India say their organisation had an unsuccessful AI pilot in the past year, highest among markets surveyed, against a 28% global average. Top named cause: outputs lacking business context (34%).
- Outlook Business, IndiaAI subsidy | https://www.outlookbusiness.com/artificial-intelligence/govt-offers-100-compute-subsidy-for-foundational-ai-model-development | 2025 (23 Jun) | yes (WebFetch) | 100% compute subsidy for core foundational-model work, 40% for other GPU-intensive work such as inferencing and applications; over 34,000 GPUs allocated; about ₹111.85 crore disbursed.
- Hogan Lovells, DPDP Act brought into force | https://www.hlc.com/en/publications/indias-digital-personal-data-protection-act-2023-brought-into-force- | 2025 (17 Nov) | yes (WebFetch) | DPDP Rules notified 13 November 2025. Some rules effective immediately, Rule 4 (consent managers) on 13 November 2026, the remaining rules including breach intimation and data retention on 13 May 2027. Other law-firm summaries describe the split differently, so confirm on the official gazette.
- Forrester blog, India's AI infrastructure bet | https://www.forrester.com/blogs/indias-ai-infrastructure-bet-faces-its-first-real-test/ | 2026 (2 Mar) | yes (WebFetch) | Argues enterprise AI proofs of concept stalled for lack of reliable compute; frames the problem as "compute certainty": dependable uptime, stable performance, predictable cost. No statistics used.
- iPleaders blog, ANI v OpenAI | https://blog.ipleaders.in/ani-v-openai-ai-training-copyright-ruling/ | 2026 (24 Aug article) | yes (WebFetch) | Delhi High Court, 24 July 2026, refused ANI's interim injunction against OpenAI. Findings are interim; the suit continues to trial.
- MeitY India AI Governance Guidelines (via Mondaq, AZB and others) | https://www.azbpartners.com/bank/meity-releases-guidelines-on-ai-governance-the-way-ahead-and-roadmap-for-ai-use-in-india/ | 2025 (Nov) | no (search result only) | Principle-based guidelines released November 2025; rely on existing law (IT Act, DPDP Act) rather than new AI legislation.
- Reports on IndiaAI compute portal pricing (about ₹65 per GPU-hour, review above 5,000 GPU hours) | various | 2026 | no | Single press reports; not used as a fact.

## SEO

- title: Business software for Indian AI companies | Verity
- description: Experiments nobody can rerun, GPU bills that arrive late, pilots without success criteria: 14 leaks in an AI company and the Verity screens that close each.
- keywords: AI company management software India; AI startup project and experiment tracking; GPU compute cost tracking by project; client AI pilot tracking; dataset register and licence tracking
- plural: AI companies
- subject: AI company
- uses: people, work, relationships, records, workflows, communication, intelligence, control, workforce, schedule, ai

## Hero

- eyebrow: Verity for AI companies
- headline: The model scored well in the notebook. Nobody can say what it cost or which data it learned from.
- lede: An AI company runs on experiments, data, compute and client pilots, and loses money in the gaps between them. A run nobody can repeat, a GPU bill that lands after the month closes, a pilot with no written test of success. Verity keeps the model, the data, the spend and the client against one record, so the company can see what it is building and what it is paying for.
- one line: One system that knows every model and dataset you hold, what each run cost, which client pilot it serves and what you promised to deliver.
- note: Your training code, notebooks and cloud consoles stay where they are. Verity runs the company around them.
- hero screen id: owner
- screen note: projects, runs, spend, pilots and people

## How it runs today

**Most AI companies are strong on the model and loose on everything around it.**

- The work itself is visible to the people doing it. A researcher knows which run was good. A founder knows which client is hot. What is hard to see is the join: which run produced the model that went to the pilot, which dataset was in it, what that compute cost, and whether the client has signed off on anything in writing.
- Research is kept in notebooks, experiment trackers, cloud billing pages, a shared drive of datasets and a chat channel per client. Each is fine alone. Nobody owns the picture across them, so the founder asks the same questions each week by message.
- Surveys give a sense of the gap. An MSL report in February 2026 found only 15% of Indian organisations had deployed generative AI workloads into production, and just 8% could fully measure and allocate AI costs. A Salesforce study reported in July 2026 found 38% of workers in India said their organisation had an unsuccessful AI pilot in the past year.
- runs on: Notebooks and an experiment tracker; Cloud billing consoles and GPU provider invoices; A shared drive of datasets; Slack or WhatsApp channel per client; Spreadsheet of pilots and grants
- stack note: The engineers keep what works for research. The business side runs on memory, so the cost and the promise are never in the same place as the model.

## Pains

Heading: Where an AI company actually loses time and money.
Lede: These are the situations founders, heads of research and delivery leads describe. For each one: what it looks like on an ordinary week, what it costs, and what Verity does about it.

### 1. A good run that nobody can repeat
- area: Experiments
- scene: Priya's team gets 91% on the held-out set in March. In September the client asks for the same model with a new label. The notebook was edited, the data folder was renamed and the engineer who ran it has moved teams. Two weeks go on trying to reproduce a number already shown to the client.
- cost: Example arithmetic: two engineers for two weeks at a loaded ₹2.5 lakh a month each is about ₹2.3 lakh, spent to get back to where you were, with the client waiting.
- fix: Each run is a record linked to the project, the dataset version, the code reference, the owner and the result. Verity shows which run each shipped model came from, so a rerun starts from a record and not from memory.
- screen: runs

### 2. The GPU bill arrives after the run is finished
- area: Compute
- scene: A fine-tune ran for six days on rented GPUs. The provider invoice lands in the next month, and the finance lead cannot say which project, client or experiment it belongs to. The founder finds out the pilot lost money when the invoice is paid.
- cost: Only 8% of Indian enterprises can fully measure and allocate AI costs, per an MSL report of February 2026. Example arithmetic: ₹6 lakh of compute in a quarter, unassigned, makes every project look cheaper than it was.
- fix: Compute spend is entered or imported against the project and run it served. Verity shows spend to date against each project's compute budget, and flags a project close to its limit while there is still time to stop.
- screen: compute
- source: (Storyboard18 on the MSL report, 2026: https://www.storyboard18.com/digital/only-15-of-indian-firms-have-ai-in-production-report-reveals-details-about-indias-ai-gap-89172.htm)

### 3. Reserved capacity that sits idle
- area: Compute
- scene: You committed to a block of GPUs for a year because capacity was hard to find. Two projects have since finished. The nodes sit at low use on weekends and between training runs, and the commitment is still billed in full.
- cost: Example arithmetic: a commitment of ₹4 lakh a month used at 45% leaves about ₹2.2 lakh a month paid for nothing.
- fix: Compute commitments are records with start, end, monthly cost and the projects that draw on them. Verity shows booked hours against the commitment by week, so idle capacity is visible and can be offered to the next project.
- screen: compute

### 4. Datasets with no clear origin or licence
- area: Data
- scene: A scraped corpus, a client's exported tickets, a purchased set and an open dataset are all in one folder. A prospect's legal team asks where the training data came from and whether it carries personal information. The answer takes a week to assemble.
- cost: A deal stalls or dies in due diligence. Delhi High Court's July 2026 interim ruling in ANI v OpenAI refused an injunction, but the suit is still going to trial, so the legal position on training data is not settled.
- fix: Every dataset is a record with source, licence or contract, whether it holds personal data, who approved its use and which models were trained on it. Verity answers "which models used this dataset" in one search.
- screen: data
- source: (iPleaders blog on ANI v OpenAI, 2026: https://blog.ipleaders.in/ani-v-openai-ai-training-copyright-ruling/)

### 5. Labelling vendors, rework and quality drift
- area: Data
- scene: A labelling team delivers 20,000 images. A spot check finds one class labelled inconsistently. The vendor says the guideline was unclear. The next batch is already in progress under the same guideline.
- cost: Example arithmetic: 20,000 items at ₹6 each is ₹1.2 lakh. If 15% need redoing, ₹18,000 is paid twice, plus weeks of model results built on noisy labels.
- fix: Each labelling batch is a record with vendor, guideline version, sample check result and accepted count. A failed check holds the batch from training and creates a rework task for the vendor contact.
- screen: data

### 6. Evaluations scattered, so nobody says "ready"
- area: Evaluation
- scene: Accuracy is in one notebook, a bias check in a slide, red-team notes in a document and latency in a dashboard. The release call is made by whoever speaks loudest in the stand-up.
- cost: A model ships with a gap nobody tracked, or a good model waits because nobody can show it is good.
- fix: Each model version has an evaluation checklist: accuracy, safety checks, latency, cost per call, and a named approver for each. Verity shows which checks pass and which are open, and records who signed the release.
- screen: runs

### 7. Pilots begin with no written test of success
- area: Pilots
- scene: A bank branch network agrees to a six-week pilot of a document-reading model. The aim is "see how it goes". Week six arrives, nobody agrees what a good result is, and the client asks for another month at no charge.
- cost: Free extensions eat engineering weeks. Example arithmetic: a four-person pilot team for an extra month at ₹10 lakh a month of combined cost is ₹10 lakh of unpaid work.
- fix: A pilot is a record with the success measure, the target, the start and end dates, what is in and out of scope, and the client approver. Verity tracks the measure through the pilot and flags a pilot that has passed its end date without a decision.
- screen: pilots

### 8. Pilot works, production never happens
- area: Pilots
- scene: The pilot hits its target. Then the client's security team asks for a review, the data team needs six weeks to open a feed, and the sponsor changes jobs. The pilot sits in "approved" for four months.
- cost: Only 15% of organisations had deployed generative AI workloads into production, per MSL in February 2026. A stalled conversion is revenue that was promised and never started.
- fix: After a successful pilot, Verity creates a conversion checklist: security review, data access, contract, support owner. Each item has an owner on both sides and a date. A stuck item shows against the deal.
- screen: pilots
- source: (Storyboard18 on the MSL report, 2026: https://www.storyboard18.com/digital/only-15-of-indian-firms-have-ai-in-production-report-reveals-details-about-indias-ai-gap-89172.htm)

### 9. Outputs that lack the client's business context
- area: Pilots
- scene: The model gives answers that are correct in general and wrong for this client's products and terms. Their staff stop trusting it after a week and go back to the old way.
- cost: The Salesforce study reported in July 2026 found 34% of workers whose AI pilot failed said outputs lacked business context. A pilot that people stop using is a pilot you cannot convert.
- fix: Client feedback is logged on the pilot as records with a category such as wrong context, too generic or slow. Verity groups them by type and by week, so the team fixes the largest category first and the client sees the fix.
- screen: pilots
- source: (Business Today on the Salesforce Agentic Workplace Study, 2026: https://www.businesstoday.in/technology/artificial-intelligence/story/india-loves-ai-so-why-are-so-many-workplace-ai-pilots-failing-546614-2026-07-31)

### 10. Deliverables and versions do not match what was promised
- area: Delivery
- scene: The contract lists a model, an evaluation report, an API handover note and two training sessions. The client holds version 2 of the report and version 3 of the model. Nobody checks until the final payment is due.
- cost: A delivery dispute holds up the final instalment. Example arithmetic: 20% of a ₹60 lakh contract held back is ₹12 lakh.
- fix: Contract deliverables are listed on the project with owner, due date, version and client acceptance. Verity shows what has been delivered, what is accepted and what is still open, and links each to the payment milestone your finance lead tracks.
- screen: pilots

### 11. Client data handled without a clear record
- area: Compliance
- scene: A client shares sample customer records for the pilot. Copies end up on three laptops and a cloud bucket. At the end of the pilot, nobody can say who deleted what.
- cost: The Digital Personal Data Protection Rules were notified on 13 November 2025 and phase in over 18 months, with breach intimation and data retention duties generally from 13 May 2027. Poor records of who held client data become a problem once these apply.
- fix: Each client data share is a record: what was received, for what purpose, who has access, where it is held and when it must be deleted. Deletion is a task with a due date, and the confirmation is stored on the record.
- screen: data
- source: (Hogan Lovells on the DPDP Rules, 2025: https://www.hlc.com/en/publications/indias-digital-personal-data-protection-act-2023-brought-into-force-)

### 12. Researchers stretched across too many projects
- area: People
- scene: Rahul is the only person who can tune the speech model. He is half on the bank pilot, half on a grant project, and an urgent request from a third client takes the rest. Nobody sees the overload until he leaves.
- cost: Over-allocated people ship late and quit. A single departure takes the knowledge of a model with them.
- fix: Each person is allocated to projects by percentage of time. Verity shows allocation per person and per week, flags anyone above 100%, and shows the single points of failure: models with one person who understands them.
- screen: people

### 13. Grants, compute subsidies and paperwork on someone's laptop
- area: Money
- scene: The company applied for subsidised GPU access and a research grant. Utilisation reports, usage letters and invoices are due on different dates. The person who applied is now busy with a pilot.
- cost: The IndiaAI Mission offers a 100% compute subsidy for core foundational-model work and 40% for other GPU-intensive work, per press reports of June 2025. Missed reporting can put the benefit at risk.
- fix: Each grant or subsidy is a record with terms, reporting dates, supporting documents and an owner. Verity creates reporting tasks ahead of each date and keeps the usage evidence attached.
- screen: compute
- source: (Outlook Business on IndiaAI compute subsidy, 2025: https://www.outlookbusiness.com/artificial-intelligence/govt-offers-100-compute-subsidy-for-foundational-ai-model-development)

### 14. The founder cannot see which projects earn
- area: Owner
- scene: Revenue looks healthy. Underneath, one pilot is profitable, one consumes three engineers for little money, and a grant project is quietly paying for the rest. The picture is built by hand on the last weekend of the month.
- cost: Decisions about hiring and which pilots to chase are made on feel. A loss-making client is kept because nobody can prove it loses.
- fix: Each project has revenue, compute spend and people time on one line. Verity shows margin by project and client, and lists the projects that have crossed a limit you set.
- screen: owner

## Facts

Heading: The numbers that make these problems worth fixing.
Lede: From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.
Note: The MSL and Salesforce figures are survey results reported in the press, and they measure different things (organisations versus workers). The subsidy figures come from a June 2025 press report and may have changed, so confirm on the IndiaAI portal. DPDP dates come from a law-firm summary; confirm on the official gazette.

- **15%**: of organisations in India have deployed generative AI workloads into production, and only 8% can fully measure and allocate AI-related costs, according to an MSL report. (Storyboard18 on the MSL report, 2026: https://www.storyboard18.com/digital/only-15-of-indian-firms-have-ai-in-production-report-reveals-details-about-indias-ai-gap-89172.htm)
- **38%**: of workers in India say their organisation had an unsuccessful AI pilot in the past year, the highest among markets surveyed and against a 28% global average. (Business Today on the Salesforce Agentic Workplace Study, 2026: https://www.businesstoday.in/technology/artificial-intelligence/story/india-loves-ai-so-why-are-so-many-workplace-ai-pilots-failing-546614-2026-07-31)
- **100% and 40%**: compute subsidy under the IndiaAI Mission, 100% for core foundational-model development and 40% for other GPU-intensive work such as inferencing and applications, with over 34,000 GPUs allocated. (Outlook Business, 2025: https://www.outlookbusiness.com/artificial-intelligence/govt-offers-100-compute-subsidy-for-foundational-ai-model-development)
- **13 May 2027**: the date from which most Digital Personal Data Protection Rules, including breach intimation and data retention duties, generally apply, after notification on 13 November 2025. (Hogan Lovells, 2025: https://www.hlc.com/en/publications/indias-digital-personal-data-protection-act-2023-brought-into-force-)

## Screens

Heading: The screens you would use every day.
Lede: Six views, each built for one job. Names, columns and terms are set up in your company's own language.

### owner: The founder's weekly view
- panel title: Company / This week
- meta: 9 live projects
- caption: Margin by project, compute spend against budget, pilots near their end date and anything that needs a decision, on one screen. It replaces the Friday round of messages.

```json
[
 {
  "type": "kpis",
  "items": [
   {"label": "Compute this month", "value": "₹7.8 lakh", "note": "budget ₹9 lakh"},
   {"label": "Live pilots", "value": "5", "note": "2 past end date"},
   {"label": "Runs this week", "value": "64", "note": "11 tied to a pilot"},
   {"label": "People over 100%", "value": "3", "note": "of 22 researchers"}
  ]
 },
 {
  "type": "title",
  "text": "Margin by project, last quarter"
 },
 {
  "type": "bars",
  "items": [
   {"label": "Bank document reader", "value": 58, "display": "34%"},
   {"label": "Retail demand model", "value": 41, "display": "24%"},
   {"label": "Speech grant project", "value": 12, "display": "7%", "tone": "muted"},
   {"label": "Insurance claims pilot", "value": 3, "display": "-2%", "tone": "muted"}
  ]
 },
 {
  "type": "list",
  "items": [
   {"name": "Insurance claims pilot is past its end date", "meta": "No decision from client, 3 weeks over", "tag": ["Decide", "late", "Extended", "info"]},
   {"name": "Speech project compute at 92% of budget", "meta": "Two runs queued for Friday", "tag": ["Review", "flag", "Raised", "ok"]}
  ]
 }
]
```

### runs: Runs, models and who signed the release
- panel title: Models and runs
- meta: Document reader v4
- caption: Every run is linked to its project, dataset version, owner and result. A model version carries its evaluation checklist and the person who approved release.

```json
[
 {
  "type": "table",
  "cols": ["Run", "Dataset", "Owner", "Result", "Cost", "Status"],
  "rows": [
   ["DR-412", "Invoices v7", "Aarav", "F1 0.91", "₹18,400", ["Candidate", "info", "Released", "ok"]],
   ["DR-409", "Invoices v7", "Aarav", "F1 0.88", "₹17,900", ["Superseded", "muted"]],
   ["DR-405", "Invoices v6", "Meera", "F1 0.84", "₹16,200", ["Superseded", "muted"]],
   ["DR-413", "Invoices v8", "Meera", "Running", "₹6,100 so far", ["Running", "info"]]
  ]
 },
 {
  "type": "checks",
  "items": [
   {"text": "Accuracy on held-out set", "meta": "F1 0.91, Aarav", "done": true},
   {"text": "Check for bias across document types", "meta": "Open, Meera", "done": false},
   {"text": "Latency under 800 ms", "meta": "Open, Rahul", "done": false},
   {"text": "Release approval", "meta": "Head of research", "done": false}
  ]
 }
]
```

### compute: Compute spend, commitments and grants
- panel title: Compute
- meta: October
- caption: Spend by project against its budget, GPU commitments against use, and grant or subsidy reporting dates with an owner.

```json
[
 {
  "type": "table",
  "cols": ["Project", "Budget", "Spent", "Left", "Status"],
  "rows": [
   ["Bank document reader", "₹3.0 lakh", "₹2.4 lakh", "₹0.6 lakh", ["On track", "ok"]],
   ["Speech grant project", "₹2.5 lakh", "₹2.3 lakh", "₹0.2 lakh", ["92% used", "flag", "Raised", "ok"]],
   ["Retail demand model", "₹2.0 lakh", "₹1.2 lakh", "₹0.8 lakh", ["On track", "ok"]],
   ["Unassigned invoices", "None", "₹1.9 lakh", "None", ["Assign", "late", "Assigned", "ok"]]
  ]
 },
 {
  "type": "bars",
  "items": [
   {"label": "Reserved nodes used, week 1", "value": 78, "display": "78%"},
   {"label": "Reserved nodes used, week 2", "value": 64, "display": "64%"},
   {"label": "Reserved nodes used, week 3", "value": 41, "display": "41%", "tone": "muted"},
   {"label": "Reserved nodes used, week 4", "value": 36, "display": "36%", "tone": "muted"}
  ]
 },
 {
  "type": "alert",
  "text": "Subsidy utilisation report is due in 12 days. Usage evidence attached for 2 of 3 months.",
  "action": "Assign"
 }
]
```

### data: The dataset register and client data
- panel title: Datasets
- meta: 31 datasets
- caption: Source, licence, personal data flag, approval and the models trained on each dataset. Client data shares carry a deletion date.

```json
[
 {
  "type": "table",
  "cols": ["Dataset", "Source", "Personal data", "Approved", "Used by", "Status"],
  "rows": [
   ["Invoices v7", "Client A, contract 14", "Yes, masked", "Legal, 3 Mar", "DR-409, DR-412", ["Cleared", "ok"]],
   ["Support tickets v2", "Client B export", "Yes", "Pending", "2 models", ["Review", "late", "Approved", "ok"]],
   ["Hindi speech set", "Purchased, licence file", "No", "Legal, 12 Jun", "Speech v3", ["Cleared", "ok"]],
   ["Web corpus 2025", "Crawled", "Unknown", "None", "1 model", ["Check source", "flag"]]
  ]
 },
 {
  "type": "record",
  "title": "Client B support tickets",
  "sub": "Shared for the claims pilot",
  "fields": [
   ["Purpose", "Pilot training and testing only"],
   ["Held in", "Secure bucket, 2 laptops"],
   ["Delete by", "30 November"],
   ["Status", ["Delete due", "late", "Deleted, confirmed", "ok"]]
  ],
  "timeline": [
   ["3 Sep", "Received, 18,400 rows"],
   ["10 Sep", "Names and phone numbers masked"],
   ["Task", "Delete copies and store confirmation"]
  ]
 }
]
```

### pilots: Client pilots and what was promised
- panel title: Pilots and deliverables
- meta: 5 live pilots
- caption: Each pilot has a written success measure, an end date, feedback by type, and the deliverables the contract lists. Conversion steps after a pilot have owners on both sides.

```json
[
 {
  "type": "board",
  "columns": [
   {
    "name": "Running",
    "cards": [
     {"title": "Insurance claims pilot", "meta": "Target 85% auto-read, now 79%", "tag": ["Past end date", "late", "Extended", "info"]},
     {"title": "Retail demand model", "meta": "Week 4 of 8", "tag": ["On track", "ok"]}
    ]
   },
   {
    "name": "Converting",
    "cards": [
     {"title": "Bank document reader", "meta": "Target met, security review open", "tag": ["Review", "flag", "Cleared", "ok"]},
     {"title": "Telecom call summaries", "meta": "Data feed not yet open", "tag": ["Waiting", "info"]}
    ]
   }
  ]
 },
 {
  "type": "bars",
  "items": [
   {"label": "Feedback: wrong context", "value": 46, "display": "23 items"},
   {"label": "Feedback: too generic", "value": 28, "display": "14 items"},
   {"label": "Feedback: too slow", "value": 12, "display": "6 items", "tone": "muted"}
  ]
 }
]
```

### people: Who is stretched, and who is the only one
- panel title: Team allocation
- meta: Next 4 weeks
- caption: Each person's share of time across projects, with overloads and single points of failure marked.

```json
[
 {
  "type": "table",
  "cols": ["Person", "Role", "Bank", "Speech", "Other", "Status"],
  "rows": [
   ["Rahul", "Research lead", "50%", "50%", "30%", ["Over 100%", "late", "Rebalanced", "ok"]],
   ["Aarav", "ML engineer", "80%", "0%", "20%", ["Full", "ok"]],
   ["Meera", "ML engineer", "40%", "40%", "10%", ["Spare 10%", "info"]],
   ["Zoya", "Data lead", "20%", "30%", "40%", ["Full", "ok"]]
  ]
 },
 {
  "type": "alert",
  "text": "Speech model v3 has one person who knows how to retrain it. Add a second owner.",
  "action": "Assign"
 }
]
```

## Day, before and after

Heading: The same Friday, before and after.
Lede: What changes is not the research. It is that the week leaves a record, and the record does the chasing.

- 9:30: before: The founder asks in chat which pilots are over budget. Three people reply with three numbers. | after: The weekly view shows compute against budget by project, and the two that need attention are at the top.
- 11:00: before: A client asks which data their model was trained on. You spend the afternoon searching folders. | after: The dataset register shows the source, licence and approval for each dataset in that model, and you reply in minutes.
- 1:00: before: A researcher says a result from March cannot be reproduced. | after: The run record links the model to its dataset version and code reference, and a rerun starts from there.
- 3:30: before: The pilot is a week past its end date and nobody wants to raise it with the client. | after: The pilot is flagged with its success measure and current result, and the owner has a task to ask for a decision.
- 5:00: before: Rahul is on four projects and no one has seen it. | after: The allocation view marks him above 100% and shows who has spare time.
- Month end: before: Finance asks which project each GPU invoice belongs to. | after: Invoices were assigned to projects when they arrived, so the month's compute is already allocated.

## How we work

Heading: We set it up with you, in four weeks.
Lede: You do not get a login and a manual. We learn how your team really moves a model from idea to client, build Verity around that, bring your records in, then stay on.

### Week 1: Discovery and mapping
- we: Sit with your head of research, delivery lead and finance lead. Trace one model from first experiment to client handover, and one GPU invoice from provider to project.
- you: Two to three hours across the week. A list of live projects, pilots and datasets, and a recent month of compute invoices.
- get: A written map of how your company works: the projects, the data, the spend, the pilots and where records are lost today.

### Weeks 2 to 3: Configuration
- we: Set up projects, model versions, evaluation checklists, the dataset register, compute budgets and commitments, pilot stages and deliverable lists, and build the six screens around your own terms.
- you: Check the setup with your head of research and delivery lead. Tell us where a checklist or stage is wrong.
- get: A working Verity with your real projects, checklists and rules, ready for your data.

### Weeks 3 to 4: Migration and training
- we: Bring in your project list, dataset inventory, compute invoices and pilot sheet. We agree how run logs and spend reach Verity during setup. Train researchers, delivery and finance in short sessions on live work.
- you: The datasets list with source and licence where known, and the contracts for live pilots. One hour per role.
- get: Your projects, datasets, spend and pilots inside Verity, and a team that has used it on a real run and a real pilot.

### After go-live: Operations partnership
- we: Stay on. Review the first weeks with you, tune budget limits and checklists, and handle changes when you add a project, a client or a data source.
- you: A short monthly review.
- get: A system that keeps matching how the company works, with someone responsible for it.

- bring: List of live projects with owners; Recent compute invoices from each provider; Dataset inventory, even if rough; Contracts and success measures for live pilots; Grant or subsidy letters with reporting dates
- time: About 8 to 12 hours of your own time across the four weeks, mostly in week 1. The head of research, delivery lead and finance lead need a few more.
- after: Nobody is hired to run Verity. Runs, spend and pilot notes are recorded as part of work the team already does, and reports come from those records.

## Verity AI examples

Heading: Ask your company a question. Get an answer, not a report to build.
Lede: Verity AI reads your own projects, runs, datasets, spend and pilot records. Ask in plain language, then turn the answer into tasks for the right people.

- Q: Which models were trained on Client B's support tickets? | A: Two models, both in the claims pilot. The dataset is marked for deletion on 30 November. | rows: Claims reader v2 = Run DR-409; Claims reader v3 = Run DR-412; Deletion due = 30 Nov | action: Create a deletion task for the data lead
- Q: Which projects will go over their compute budget this month? | A: The speech grant project is at 92% with two runs queued. The retail model has room. | rows: Speech grant = 92% used; Bank reader = 80%; Retail demand = 60% | action: Ask the project owner to confirm the queued runs
- Q: Which pilots have passed their end date without a decision? | A: Two. The insurance claims pilot is three weeks over, and the telecom summaries pilot is one week over. | rows: Insurance claims = 3 weeks; Telecom summaries = 1 week | action: Task each owner to ask the client for a decision

## Automations

Heading: The follow-ups nobody has time to make.
Lede: Set once, then they run from your records. People still talk to clients and vendors; Verity makes sure the right person knows what to do.

- when A project's compute spend reaches 80% of its budget: Alert to the project owner; Queued runs listed against the project; Decision to continue or stop recorded
- when A labelling batch fails its sample check: Batch held from training; Rework task to the vendor contact; Accepted count updated on reacceptance
- when A pilot passes its end date: Flagged on the pilots board; Task to the owner to ask the client for a decision; Outcome recorded: convert, extend or close
- when A client data share reaches its deletion date: Task to the data lead; Locations of copies listed on the task; Confirmation stored on the record
- when A model version is marked ready for release: Evaluation checklist checked for open items; Approval routed to the head of research; Release recorded with the approver
- when A grant or subsidy reporting date is 14 days away: Task to the owner with the evidence list; Missing usage records flagged; Submission recorded on the grant

## Rules and paperwork

Heading: The rules an AI company has to keep up with.
Lede: Verity does not give legal advice and does not file anything for you. It keeps the records these rules depend on in order, so you are not hunting for them when a client or regulator asks.
Note: Rules and court positions change. Confirm current requirements with your lawyer or the relevant authority.

- **Digital Personal Data Protection Act and Rules**: what: The Rules were notified on 13 November 2025 and phase in. Some parts apply from notification, consent manager rules generally from 13 November 2026, and most remaining duties, including breach intimation and data retention, generally from 13 May 2027. Whether you are a data fiduciary or processor depends on your contracts. | how: Each client data share and personal data dataset is a record with purpose, access, location and deletion date, so the facts the Rules ask about are on file. (Hogan Lovells: https://www.hlc.com/en/publications/indias-digital-personal-data-protection-act-2023-brought-into-force-)
- **India AI Governance Guidelines**: what: MeitY released principle-based guidelines in November 2025. They generally rely on existing law and do not create a separate AI statute. | how: Evaluation checklists, release approvals and a log of client feedback give you a record of the checks you ran and who signed them. (AZB & Partners summary: https://www.azbpartners.com/bank/meity-releases-guidelines-on-ai-governance-the-way-ahead-and-roadmap-for-ai-use-in-india/)
- **Copyright and training data**: what: In ANI v OpenAI, the Delhi High Court on 24 July 2026 refused an interim injunction. The findings are interim and the suit continues to trial, so the position on training data is not final. | how: Every dataset records its source and licence or contract, and which models used it, so a question about training data can be answered from the record. (iPleaders blog: https://blog.ipleaders.in/ani-v-openai-ai-training-copyright-ruling/)
- **IndiaAI compute subsidy terms**: what: Compute subsidies under the IndiaAI Mission were reported at 100% for core foundational-model work and 40% for other GPU-intensive work. Terms and reporting duties depend on your approval. | how: Each subsidy is a record with terms, reporting dates and usage evidence, and each report is a task with an owner. (Outlook Business: https://www.outlookbusiness.com/artificial-intelligence/govt-offers-100-compute-subsidy-for-foundational-ai-model-development)

## Roles

Heading: Everyone sees the same records, through their own window.
Lede: A researcher does not need every client contract. Finance does not need run logs. Each role opens on what it needs.

- Founder or CEO: Which projects earn, and what needs my decision? | Margin by project and client, compute against budget, pilots past their date and the people who are stretched.
- Head of research: Which models are ready, and which runs mattered? | Runs, evaluation checklists, release approvals, dataset use and single points of failure.
- Delivery lead: Are we meeting what we promised each client? | Pilots, success measures, deliverables, acceptance and conversion steps.
- Data lead: Do we know where every dataset came from? | Dataset register, licences, labelling batches, client data shares and deletion dates.
- Finance lead: What did this cost, and what do we invoice? | Compute spend by project, commitments, grant reporting dates and contract milestones.

## Alongside

Heading: What changes, and what stays the same.
- keep: Your training code, notebooks and experiment tracker. We agree during setup how run results reach Verity.; Your cloud and GPU provider consoles. We record their spend against projects.; Your chat channels with clients. Staff reply; Verity tracks who owes a reply.; Your accountant, who still prepares your returns.
- not: Train, host or serve your models.; Replace your experiment tracker or code repository.; Send messages to clients or vendors on its own.; File your returns or run your payroll.
- migration: We bring your project list, dataset inventory, compute invoices and pilot sheet across from the spreadsheets and shared drives you use now, in stages, so research carries on while it happens.

## FAQ

Heading: Questions AI company founders ask.

- **Our engineers hate process. Will they actually log runs?** Only if it takes seconds, so we agree how run results reach Verity during setup rather than asking for typed entries. What people add by hand is short: the project, the dataset version and a line on why.
- **Does Verity replace our experiment tracker?** No. Your tracker stays where researchers work. Verity holds the business side: which project and client a run serves, what it cost, which dataset it used and who approved release.
- **Can it track GPU spend across several providers?** Yes. Each provider's invoice is allocated to projects as a record, whether the numbers come in by import or by hand. We agree the route for each during setup.
- **We are four people. Is this too much?** A four-person team has the same gaps and less time to notice them. We set up only what you need, in the same four weeks, and leave out what you do not.
- **Can it help with a data protection review from a client?** It keeps the facts a review asks for in one place: what data you received, for what purpose, who had access and when it was deleted. It does not give legal advice or certify compliance.
- **Does it run or host our models?** No. Verity does not train, host or serve models. It runs the company around them.
- **Can it tell us what a pilot really cost?** Yes, once compute spend and people time are recorded against the pilot. Each pilot shows spend, time and revenue on one line.
- **Who can see my data?** Only the people you allow. Access is set by role, so researchers, delivery, finance and the founder each see what they need, and every change is recorded with who made it and when.
- **What does it cost?** It depends on the size of your team and what you want set up. Message us and we will give you a clear number after a short conversation about how your company works.

## Related and CTA

- related: saas-companies, startups, data-companies, software-agencies, it-services-companies, cybersecurity-companies
- cta heading: Start with the pilot that has no written test of success.
- cta lede: Tell us how your company runs and we will show you the compute spend, dataset gaps and stalled pilots it would find, using your own numbers.

## Assumptions and unverified

- All sample names, projects, runs and figures on screens are invented for illustration. Arithmetic examples are labelled as examples.
- Hours in "How we work" are drafted assumptions to confirm with the Verity team.
- The DPDP phase dates differ between law-firm summaries. The page follows the Hogan Lovells table (fetched); confirm on the official gazette.
- IndiaAI subsidy percentages and GPU counts come from a June 2025 press report and may have changed. Not verified against the portal.
- India AI Governance Guidelines described from law-firm summaries in search results only; the official document was not fetched.
- The ANI v OpenAI ruling is described from a single legal blog (iPleaders); the suit continues and an appeal on the interim order is reported open.
- Rule "Pain 9" 34% figure is a worker-reported survey result from Business Today's report on the Salesforce study.
