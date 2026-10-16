export default {
  "schema": 2,
  "slug": "cybersecurity-companies",
  "status": "published",
  "plural": "cybersecurity firms",
  "subject": "cybersecurity company",
  "checked": "16 October 2026",
  "seo": {
    "title": "Cybersecurity firm software: engagements, findings, retests | Verity",
    "description": "The 14 problems that slow a security services firm, from scoping and consultant planning to findings that never get retested, and the Verity screens that fix them.",
    "keywords": [
      "cybersecurity company management software India",
      "pentest engagement and findings tracking",
      "security consultant utilisation",
      "remediation and retest tracking",
      "incident response retainer tracking"
    ]
  },
  "uses": [
    "people",
    "work",
    "relationships",
    "records",
    "workflows",
    "communication",
    "intelligence",
    "control",
    "workforce",
    "schedule",
    "locations",
    "ai"
  ],
  "hero": {
    "eyebrow": "Verity for cybersecurity companies",
    "headline": "You find the problems in other companies. Verity makes sure none slip through in yours.",
    "lede": "A security services firm sells expert time and trust. The time is booked across engagements and the trust depends on findings being tracked, reports being right and client data being handled with care. Scope, findings, retests and retainers sit in separate tools. Verity ties them to each client engagement.",
    "oneLine": "One system that follows each engagement from scope to report to retest, shows who is booked where and keeps every finding and retainer hour accounted for.",
    "note": "Built for a firm of ten to a few hundred with consultants who dislike admin. Records come from the engagement work itself.",
    "screen": "owner",
    "screenNote": "clients, consultants, engagements and retainers"
  },
  "today": {
    "heading": "Most security firms are good at finding issues and loose at tracking them.",
    "paragraphs": [
      "An engagement starts with a scope in an email or a statement of work. By the time the test runs, the scope has moved, the client's contact has changed and test accounts are late.",
      "Findings live in the consultant's notes and a report template. Their status after delivery, meaning who fixed what and what was retested, is held in the client's tracker or nobody's.",
      "The market is short of skilled people. A 2026 DSCI and SANS report found that 73 percent of enterprises and 68 percent of providers say skilled candidates are in limited supply, and 84 percent of organisations need one to six months to fill a security role."
    ],
    "stack": [
      "Statements of work in email",
      "Spreadsheet of consultant bookings",
      "Findings in a reporting tool or document templates",
      "Ticket tool for retainers",
      "Timesheet sheet and an accounting package"
    ],
    "stackNote": "Each tool is good at one job. None tells you whether a finding was fixed, who is free next month or whether a retainer is about to run out of hours."
  },
  "painsHeading": "Where a security firm loses margin and trust.",
  "painsLede": "These are the situations security firm owners and delivery heads describe. For each one: what it looks like, what it costs, and what Verity does about it.",
  "pains": [
    {
      "area": "Engagements",
      "title": "Scope is agreed in email and drifts",
      "scene": "A test is sold for one web application and three APIs. During the test the client adds a mobile app and a staging environment, verbally.",
      "cost": "Unpaid days, an over-run test and a report that is hard to defend when the client says the extra work was included.",
      "fix": "Each engagement records its scope, exclusions, days sold and approved changes. A change creates a change request with days and price, and the engagement shows days sold against days used.",
      "screen": "engagements"
    },
    {
      "area": "Sales",
      "title": "Quotes are priced on gut feel",
      "scene": "A senior consultant estimates ten days from experience. Last time a similar test took fifteen.",
      "cost": "Fixed-price tests that lose money and discounts given without knowing what the work really cost.",
      "fix": "Each engagement keeps estimated and actual days by activity. Verity shows how past tests of the same type ran, so the next quote starts from data.",
      "screen": "owner"
    },
    {
      "area": "People",
      "title": "Consultants are double-booked or idle",
      "scene": "The best web tester is booked on two engagements in the same week while two juniors are free. Nobody saw it until Monday.",
      "cost": "Delays, overtime and idle people, in a market where skilled candidates are hard to find. In 2026, 84 percent of organisations reported taking one to six months to fill a security role.",
      "fix": "Consultants have skills, certifications and bookings. Verity shows load by week, clashes and who is free for a new engagement by skill.",
      "screen": "staffing",
      "source": {
        "name": "DSCI-SANS Indian Cyber Security Skilling Landscape report, 1 May 2026",
        "url": "https://www.dsci.in/content/indian-cyber-security-skilling-landscape-2025-2026"
      }
    },
    {
      "area": "Engagements",
      "title": "Tests wait on the client",
      "scene": "The test window opens on Monday. VPN access, test accounts and a contact for questions arrive on Thursday.",
      "cost": "Days lost, a test squeezed to fit the old deadline and a lower quality report.",
      "fix": "Each engagement has a list of what the client must provide, with dates. Verity warns before the start if items are missing and records delay so it can be charged or explained.",
      "screen": "engagements"
    },
    {
      "area": "Findings",
      "title": "Findings are tracked in documents, not as items",
      "scene": "Forty findings from a test sit in a document. Three months later the client asks which are still open. Someone searches old emails.",
      "cost": "Hours spent answering a simple question and a client who thinks you do not follow up.",
      "fix": "Each finding is a record with severity, affected asset, owner on the client side, status and dates. Verity shows open findings by client, severity and age.",
      "screen": "findings"
    },
    {
      "area": "Reports",
      "title": "Report review is a bottleneck",
      "scene": "Three reports wait for a senior reviewer who is also testing. Versions go back and forth by email.",
      "cost": "Late deliveries that delay the client's own audit, and errors that slip through a rushed review.",
      "fix": "Each report moves through draft, review and release with an owner and a due date. Verity shows the review queue and flags reports waiting more than a set time.",
      "screen": "engagements"
    },
    {
      "area": "Findings",
      "title": "Retests are forgotten or done for free",
      "scene": "The client says critical issues are fixed. A retest is promised but not scheduled, then asked for at the last moment before an audit.",
      "cost": "Unplanned work, unpaid days and a client who is not sure the fix is real.",
      "fix": "A fix claim creates a retest task with an owner and a date. The retest is an item on the engagement with days and price, and the finding closes only after a retest result is recorded.",
      "screen": "findings"
    },
    {
      "area": "Security",
      "title": "Client data and evidence are handled loosely",
      "scene": "Screenshots, credentials and extracts from a client system sit in a consultant's laptop folder and a shared drive.",
      "cost": "A security firm that leaks client data loses its reputation. Clients also ask how evidence is stored and when it is destroyed.",
      "fix": "Evidence is attached to the engagement with access limited to the team and a retention date. Verity records who viewed or changed it and lists evidence due for deletion.",
      "screen": "compliance"
    },
    {
      "area": "Retainers",
      "title": "Retainer and incident response hours burn unseen",
      "scene": "A client buys 100 hours of incident response support for a year. Ad hoc calls use hours that nobody logs, and the client is surprised at the invoice.",
      "cost": "Unbilled hours, disputes and renewals missed because nobody saw the balance.",
      "fix": "Each retainer shows hours bought, used and remaining, with each request logged against it. Verity warns at 80 percent and lists retainers near renewal.",
      "screen": "retainers"
    },
    {
      "area": "Retainers",
      "title": "After-hours incidents are handled by whoever picks up",
      "scene": "A client calls at midnight with a suspected incident. The on-call roster is in a chat group. The first person who answers takes it, whether or not they have the skills.",
      "cost": "Slow response, the wrong people on the job and a client who counts the hours to first reply.",
      "fix": "The on-call roster, response times promised and incident records sit in one place. Verity shows who is on call and records time to first response and handover steps.",
      "screen": "retainers"
    },
    {
      "area": "Compliance",
      "title": "Certifications and empanelment lapse",
      "scene": "A consultant's certification expires the week a client's tender needs it. The firm's own empanelment renewal is in someone's calendar.",
      "cost": "A tender that cannot be bid, or a client's audit that finds the firm out of compliance. Regulated buyers such as banks and insurers are the main group that asks for empanelled auditors.",
      "fix": "Each person's certifications and the firm's empanelments and registrations are records with expiry dates. Verity reminds ahead of time and lists engagements that depend on them.",
      "screen": "compliance",
      "source": {
        "name": "Cybersecify on who needs empanelled pentest vendors",
        "url": "https://cybersecify.com/blog/who-needs-cert-in-empanelled-pentest-vendor/"
      }
    },
    {
      "area": "Money",
      "title": "Billing misses time and milestones",
      "scene": "Fixed-price milestones, time-and-materials hours and retainer overage are tracked in three places. An invoice goes out late or short.",
      "cost": "Unbilled work and cash that arrives weeks after it should.",
      "fix": "Each engagement shows milestones, hours worked and what has been invoiced. Verity lists work done but not invoiced and invoices overdue with a task for the account owner. Billing stays in your accounts software.",
      "screen": "owner"
    },
    {
      "area": "Compliance",
      "title": "The firm has its own reporting duties",
      "scene": "As a company handling client data, the firm itself is bound by incident reporting and log retention rules. Nobody has written down who does what.",
      "cost": "A fine or an embarrassing gap after an incident. The CERT-In directions require reporting within six hours of noticing a qualifying incident and keeping at least 180 days of logs in India.",
      "fix": "The firm's own incident steps, owners and log retention checks are tasks with dates. Verity records what happened and when during an incident.",
      "screen": "compliance",
      "source": {
        "name": "AM Legals, CERT-In compliance guide",
        "url": "https://amlegals.com/cert-in-compliance-guide-2025/"
      }
    },
    {
      "area": "People",
      "title": "Knowledge walks out with the consultant",
      "scene": "A senior tester leaves. His scripts, tricks and client notes were on his laptop and in his head.",
      "cost": "Slower tests, repeated mistakes and a junior team that starts from zero.",
      "fix": "Methods, checklists, past findings categories and client notes are records the whole team can search, with access by role. A handover lists what the leaver owned.",
      "screen": "owner"
    }
  ],
  "factsHeading": "The numbers that make these problems worth fixing.",
  "factsLede": "From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.",
  "factsNote": "The talent figures are from a 2026 report by DSCI and SANS. The CERT-In rules are from a law firm's guide because the official text was not read, and the guide does not state the issue date. They show the pressures on the sector, not what your firm will see.",
  "facts": [
    {
      "figure": "73% and 68%",
      "text": "of enterprises and cybersecurity providers say skilled cybersecurity candidates are in limited supply.",
      "source": {
        "name": "DSCI and SANS, 2026",
        "url": "https://www.dsci.in/content/indian-cyber-security-skilling-landscape-2025-2026"
      }
    },
    {
      "figure": "84%",
      "text": "of organisations need one to six months to fill a cybersecurity role, with only 3 percent filling one in under a month.",
      "source": {
        "name": "DSCI and SANS, 2026",
        "url": "https://www.dsci.in/content/indian-cyber-security-skilling-landscape-2025-2026"
      }
    },
    {
      "figure": "6 hours",
      "text": "the reporting window the CERT-In Directions set for qualifying cyber incidents, counted from when the organisation notices or is notified.",
      "source": {
        "name": "AM Legals, 2025",
        "url": "https://amlegals.com/cert-in-compliance-guide-2025/"
      }
    },
    {
      "figure": "180 days",
      "text": "the minimum period for which security logs must be retained in India under the same Directions.",
      "source": {
        "name": "AM Legals, 2025",
        "url": "https://amlegals.com/cert-in-compliance-guide-2025/"
      }
    }
  ],
  "screensHeading": "The screens you would use every day.",
  "screensLede": "Six views, each for one job. Clients, consultants, engagements and retainers are set up in your own terms.",
  "screens": [
    {
      "id": "owner",
      "title": "Firm / This week",
      "meta": "All engagements",
      "heading": "The managing partner's weekly view",
      "caption": "Engagements running, consultants free, findings open, retainer hours and work not yet invoiced on one screen, with the items that need a decision listed below.",
      "blocks": [
        {
          "type": "kpis",
          "items": [
            {
              "label": "Engagements",
              "value": "18",
              "note": "6 starting"
            },
            {
              "label": "Consultants free",
              "value": "3",
              "note": "next 2 weeks"
            },
            {
              "label": "Open criticals",
              "value": "7",
              "note": "across 5 clients"
            },
            {
              "label": "Not yet invoiced",
              "value": "₹14.8 L",
              "note": "work done"
            }
          ]
        },
        {
          "type": "title",
          "text": "Estimated against actual days, last 6 tests"
        },
        {
          "type": "bars",
          "items": [
            {
              "label": "Web application",
              "value": 118,
              "display": "118%"
            },
            {
              "label": "Mobile application",
              "value": 96,
              "display": "96%"
            },
            {
              "label": "Network",
              "value": 104,
              "display": "104%"
            },
            {
              "label": "Cloud review",
              "value": 140,
              "display": "140%",
              "tone": "muted"
            }
          ]
        },
        {
          "type": "alert",
          "text": "Cloud reviews have run 40 percent over estimate in the last three engagements.",
          "action": "Reprice"
        },
        {
          "type": "list",
          "items": [
            {
              "name": "Certification for two consultants",
              "meta": "Expires 14 Nov, tender needs both",
              "tag": [
                "Renew",
                "flag",
                "Booked",
                "ok"
              ]
            },
            {
              "name": "Retainer, Asha Bank",
              "meta": "84 of 100 hours used, renews in 40 days",
              "tag": [
                "Talk",
                "flag"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "engagements",
      "title": "Engagements",
      "meta": "By stage",
      "heading": "Engagements from scope to report",
      "caption": "Each engagement moves across the board with its scope, days sold and days used, client dependencies and report status. Delays caused by the client are recorded.",
      "blocks": [
        {
          "type": "board",
          "columns": [
            {
              "name": "Scoping",
              "cards": [
                {
                  "title": "E-306 Mobile app, Greenleaf Bank",
                  "meta": "Scope in draft, 12 days",
                  "tag": [
                    "Awaiting client",
                    "flag",
                    "Signed",
                    "ok"
                  ]
                },
                {
                  "title": "E-310 Cloud review, Acme Foods",
                  "meta": "Estimate 8 days",
                  "tag": [
                    "Quote",
                    "muted"
                  ]
                }
              ]
            },
            {
              "name": "Testing",
              "cards": [
                {
                  "title": "E-298 Web app and APIs, Beta Pay",
                  "meta": "Day 7 of 10, VPN access late 3 days",
                  "tag": [
                    "Delayed",
                    "late",
                    "Noted",
                    "ok"
                  ]
                },
                {
                  "title": "E-301 Network, Delta Telecom",
                  "meta": "Day 3 of 9",
                  "tag": [
                    "On track",
                    "ok"
                  ]
                }
              ]
            },
            {
              "name": "Report and retest",
              "cards": [
                {
                  "title": "E-290 Report, Gamma Retail",
                  "meta": "In review 4 days",
                  "tag": [
                    "Review",
                    "flag",
                    "Released",
                    "ok"
                  ]
                },
                {
                  "title": "E-285 Retest, Zenith Insurance",
                  "meta": "Promised for Friday",
                  "tag": [
                    "Book",
                    "late"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "findings",
      "title": "Findings",
      "meta": "Open items by client",
      "heading": "Findings from first report to retest",
      "caption": "Every finding with severity, asset, client owner and status, from first report to retest. The client can ask what is open and the answer is one filter away.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Finding",
            "Client",
            "Severity",
            "Age",
            "Status"
          ],
          "rows": [
            [
              "SQL injection in login",
              "Beta Pay",
              "Critical",
              "9 days",
              [
                "Fix claimed",
                "flag",
                "Retest booked",
                "ok"
              ]
            ],
            [
              "Weak TLS configuration",
              "Delta Telecom",
              "Medium",
              "41 days",
              [
                "Open",
                "late"
              ]
            ],
            [
              "Missing rate limiting",
              "Gamma Retail",
              "High",
              "21 days",
              [
                "Retested, closed",
                "ok"
              ]
            ],
            [
              "Exposed storage bucket",
              "Acme Foods",
              "Critical",
              "3 days",
              [
                "Open",
                "late",
                "Fix claimed",
                "flag"
              ]
            ]
          ]
        },
        {
          "type": "alert",
          "text": "7 critical findings are open across 5 clients, the oldest 33 days.",
          "action": "Review"
        }
      ]
    },
    {
      "id": "staffing",
      "title": "Staffing",
      "meta": "Next 4 weeks",
      "heading": "Who is booked where, by skill",
      "caption": "Consultants by skill and certification with load by week. Clashes, idle time and who can take a new engagement are visible before the week starts.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Consultant",
            "Skills",
            "Week 1",
            "Week 2",
            "Week 3"
          ],
          "rows": [
            [
              "Anil",
              "Web, API",
              [
                "100%",
                "ok"
              ],
              [
                "130%",
                "late",
                "100%",
                "ok"
              ],
              [
                "60%",
                "muted"
              ]
            ],
            [
              "Priya",
              "Cloud, network",
              [
                "80%",
                "ok"
              ],
              [
                "80%",
                "ok"
              ],
              [
                "100%",
                "ok"
              ]
            ],
            [
              "Imran",
              "Mobile",
              [
                "40%",
                "muted"
              ],
              [
                "40%",
                "muted"
              ],
              [
                "40%",
                "muted"
              ]
            ],
            [
              "Sneha",
              "Web",
              [
                "100%",
                "ok"
              ],
              [
                "100%",
                "ok"
              ],
              [
                "20%",
                "muted"
              ]
            ]
          ]
        },
        {
          "type": "alert",
          "text": "Anil is booked at 130 percent in week 2. Imran has 60 percent free and mobile skills.",
          "action": "Rebalance"
        }
      ]
    },
    {
      "id": "retainers",
      "title": "Retainers",
      "meta": "Hours and response",
      "heading": "Retainers, hours and on-call",
      "caption": "Retainer hours bought, used and left, requests logged against them and the on-call roster. Time to first response is recorded for every incident.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Client",
            "Hours",
            "Used",
            "Renewal",
            "Action"
          ],
          "rows": [
            [
              "Asha Bank",
              "100",
              "84",
              "40 days",
              [
                "Talk",
                "flag"
              ]
            ],
            [
              "Zenith Insurance",
              "60",
              "22",
              "5 months",
              [
                "OK",
                "ok"
              ]
            ],
            [
              "Delta Telecom",
              "120",
              "119",
              "12 days",
              [
                "Over",
                "late",
                "Quote extra",
                "ok"
              ]
            ]
          ]
        },
        {
          "type": "list",
          "items": [
            {
              "name": "On call this week",
              "meta": "Priya, then Sneha from Thursday",
              "tag": [
                "Set",
                "ok"
              ]
            },
            {
              "name": "Incident I-47, Asha Bank",
              "meta": "First response in 22 minutes",
              "tag": [
                "Closed",
                "ok"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "compliance",
      "title": "Compliance",
      "meta": "Firm and people",
      "heading": "Certifications, evidence and the firm's own duties",
      "caption": "Certifications and empanelments with expiry, evidence kept for each engagement with retention dates, and the firm's own incident and log tasks.",
      "blocks": [
        {
          "type": "checks",
          "items": [
            {
              "text": "Two consultant certifications expire 14 Nov",
              "meta": "Booked for exam 8 Nov",
              "done": false
            },
            {
              "text": "Empanelment renewal",
              "meta": "Due in 70 days, managing partner",
              "done": false
            },
            {
              "text": "Evidence for E-285 deleted per policy",
              "meta": "Done 10 Oct",
              "done": true
            },
            {
              "text": "Quarterly log retention check",
              "meta": "Done 1 Oct, 180 days kept in India",
              "done": true
            }
          ]
        },
        {
          "type": "alert",
          "text": "Evidence from three closed engagements is past its retention date.",
          "action": "Review"
        }
      ]
    }
  ],
  "dayHeading": "The same Thursday, before and after.",
  "dayLede": "The firm works the same way. What changes is that engagements, findings and promises leave a record that chases for you.",
  "day": [
    {
      "time": "9:30",
      "before": "The delivery head checks a sheet and three chats to see who is free.",
      "after": "The week screen shows consultant load, engagements starting and clients that owe access."
    },
    {
      "time": "11:00",
      "before": "A client asks which findings are still open. Someone searches old reports.",
      "after": "The open findings list for that client is filtered and sent in a minute."
    },
    {
      "time": "1:00",
      "before": "A test starts and VPN access is not ready. Nobody records the delay.",
      "after": "The client dependency is overdue, the delay is logged and the days are protected."
    },
    {
      "time": "3:30",
      "before": "A retainer runs past its hours without anyone noticing.",
      "after": "A warning at 80 percent went to the account owner two weeks ago."
    },
    {
      "time": "5:30",
      "before": "A tender needs two certifications that expired last week.",
      "after": "The renewal was on the list and booked six weeks earlier."
    },
    {
      "time": "Month end",
      "before": "Finance asks which work is not yet invoiced.",
      "after": "The list shows the engagements and milestones done and not billed."
    }
  ],
  "approach": {
    "heading": "We set it up with you, in four weeks.",
    "lede": "You do not get a login and a manual. We learn how your engagements actually run, build Verity around them, bring your data in, then stay on to keep it working.",
    "phases": [
      {
        "when": "Week 1",
        "name": "Discovery and mapping",
        "we": "Spend a day with your delivery head, a consultant and the person who invoices. Follow an engagement from quote to report to retest, and map your tools for scoping, findings, time and billing.",
        "you": "A few hours from you and your delivery head. Two recent engagements with their statements of work, reports and timesheets.",
        "get": "A written map of how engagements, findings, staffing and retainers run today and the problems to fix first."
      },
      {
        "when": "Weeks 2 to 3",
        "name": "Configuration",
        "we": "Set up engagement types and stages, scope and change request fields, findings records with severities, consultant skills and certifications, retainers and on-call rules, evidence retention and approvals.",
        "you": "Check the stages, severities and retention rules with your delivery head and a consultant.",
        "get": "A working Verity with your real engagement types, people and rules."
      },
      {
        "when": "Weeks 3 to 4",
        "name": "Migration and training",
        "we": "Bring in clients, open engagements, consultants and certifications, open findings and retainers. Train managers, consultants and the finance owner on live engagements.",
        "you": "Your list of active engagements and open findings, in whatever form they exist. One hour per role.",
        "get": "Your firm inside Verity and a team that has used it on a real engagement."
      },
      {
        "when": "After go-live",
        "name": "Operations partnership",
        "we": "Stay on after launch. Review the first weeks with you, tune lists and reminders and handle new offices and service lines.",
        "you": "A short monthly review of what the numbers say.",
        "get": "A system that keeps matching how the firm runs, with someone responsible for it."
      }
    ],
    "bring": [
      "A list of active engagements with scope and days",
      "Consultant list with skills and certifications",
      "Open findings by client",
      "Retainers with hours and dates",
      "Your evidence and retention policy"
    ],
    "time": "About 8 to 11 hours of owner time across the four weeks, mostly in week 1. Your delivery head and finance owner need a few more.",
    "after": "Nobody is hired to run Verity. Engagements, findings and hours are recorded as part of the work you already do, and the reports come from those records."
  },
  "ai": {
    "heading": "Ask your firm a question.",
    "lede": "Verity AI reads your engagements, findings, consultants, retainers and compliance records. Ask in plain language, then turn the answer into tasks for the right person.",
    "examples": [
      {
        "q": "Which critical findings have been open for more than 14 days, and for whom?",
        "a": "Four critical findings across three clients. The oldest is 33 days, for Acme Foods.",
        "rows": [
          [
            "Acme Foods",
            "33 days"
          ],
          [
            "Beta Pay",
            "21 days"
          ],
          [
            "Delta Telecom",
            "16 days"
          ]
        ],
        "action": "Create follow-up tasks for each client owner"
      },
      {
        "q": "Which consultant is booked above 100 percent in the next three weeks?",
        "a": "Anil in week 2 at 130 percent. Imran has 60 percent free and the mobile skill needed for E-306.",
        "rows": [
          [
            "Anil, week 2",
            "130%"
          ],
          [
            "Imran, free",
            "60%"
          ]
        ],
        "action": "Propose a rebalance to the delivery head"
      },
      {
        "q": "Which retainers will run out of hours before renewal?",
        "a": "Delta Telecom has used 119 of 120 hours with 12 days to renewal, and Asha Bank is at 84 of 100 with 40 days left.",
        "rows": [
          [
            "Delta Telecom",
            "119 of 120"
          ],
          [
            "Asha Bank",
            "84 of 100"
          ]
        ],
        "action": "Ask the account owners to quote extra hours"
      }
    ]
  },
  "automationHeading": "The follow-ups nobody has time to make.",
  "automationLede": "Set once, then they run from your records. People still do the testing and the talking. Verity makes sure the right person knows to.",
  "automations": [
    {
      "when": "An engagement is 5 days from start and the client has not provided access",
      "then": [
        "Flagged to the delivery head",
        "Client contact task created",
        "Delay recorded if the start moves"
      ]
    },
    {
      "when": "A client claims a finding is fixed",
      "then": [
        "Retest task created with an owner and a date",
        "Retest days added to the engagement",
        "Finding closed only on a recorded retest result"
      ]
    },
    {
      "when": "A report waits for review for more than 3 days",
      "then": [
        "Flagged to the reviewer and the delivery head",
        "Reassigned if needed",
        "Release date recorded"
      ]
    },
    {
      "when": "A retainer reaches 80 percent of its hours",
      "then": [
        "Warning to the account owner",
        "Renewal and extra hours quote task created",
        "Outcome recorded"
      ]
    },
    {
      "when": "A certification or empanelment is 60 days from expiry",
      "then": [
        "Task to the owner",
        "Exam or renewal date recorded",
        "Engagements that depend on it listed"
      ]
    },
    {
      "when": "Evidence passes its retention date",
      "then": [
        "Listed for review",
        "Deletion task to the engagement owner",
        "Completion recorded"
      ]
    }
  ],
  "rules": {
    "heading": "The rules a cybersecurity company has to keep up with.",
    "lede": "Verity does not give legal advice, does not test or scan any system and does not file anything for you. It keeps the records these rules and your clients' requirements depend on in order.",
    "note": "Rules and client requirements differ by sector and contract, and they change. Confirm current requirements with your lawyer and the relevant authority.",
    "items": [
      {
        "name": "CERT-In incident reporting and log retention",
        "what": "The CERT-In Directions require qualifying cyber incidents to be reported within six hours of the organisation noticing or being notified, and at least 180 days of security logs to be kept in India. They cover body corporates, data centres, cloud and VPN providers, so a security firm handling client data should assume they apply to its own systems.",
        "how": "The firm's own incident steps, owners and log retention checks are tasks with dates, and an incident record shows what happened and when.",
        "source": {
          "name": "AM Legals",
          "url": "https://amlegals.com/cert-in-compliance-guide-2025/"
        }
      },
      {
        "name": "Empanelled auditors for regulated clients",
        "what": "Regulated buyers such as banks, insurers, telecom and government tenders are the main group that asks for CERT-In empanelled auditors. Many software buyers do not need them.",
        "how": "The firm's empanelment and each consultant's certifications are records with expiry dates, linked to the engagements that need them.",
        "source": {
          "name": "Cybersecify",
          "url": "https://cybersecify.com/blog/who-needs-cert-in-empanelled-pentest-vendor/"
        }
      },
      {
        "name": "Personal data in client systems",
        "what": "Testing may expose personal data. India's data protection rules were notified in November 2025, and most duties start to apply over the following 12 to 18 months.",
        "how": "Evidence is attached to the engagement with limited access, who viewed it recorded and a retention date.",
        "source": {
          "name": "AZB Partners",
          "url": "https://www.azbpartners.com/bank/update-indias-digital-personal-data-protection-framework-comes-into-effect/"
        }
      },
      {
        "name": "Contractual confidentiality and rules of engagement",
        "what": "Each client contract sets what may be tested, when and how data is handled. Working outside it can be a breach of contract or worse.",
        "how": "Scope, exclusions, test windows and approvals are recorded on the engagement and changes need a recorded approval."
      }
    ]
  },
  "rolesHeading": "Everyone sees the same records, through their own window.",
  "rolesLede": "A consultant should not see other clients' evidence. Finance should not see findings. Each role opens on what it needs.",
  "roles": [
    {
      "role": "Managing partner",
      "question": "Where do we make money and where are the risks?",
      "sees": "Engagements by margin, work not invoiced, retainers, certifications due and open criticals by client."
    },
    {
      "role": "Delivery head",
      "question": "Who is doing what and what is late?",
      "sees": "Consultant load, engagements by stage, client dependencies, report queue and retests due."
    },
    {
      "role": "Consultant",
      "question": "What is mine this week?",
      "sees": "My engagements, scope and client dependencies, evidence I own and findings to write up."
    },
    {
      "role": "Account manager",
      "question": "What does my client need to know?",
      "sees": "Open findings, retainer hours, renewals and promises made to the client."
    },
    {
      "role": "Finance owner",
      "question": "What is done and not billed?",
      "sees": "Milestones, hours worked, retainer overage and invoices overdue."
    }
  ],
  "alongside": {
    "heading": "What changes, and what stays the same.",
    "keep": [
      "Your testing and scanning tools",
      "Your reporting templates and findings tools if you like them",
      "Your accounts software and accountant",
      "Your ticket or chat tools for client calls"
    ],
    "not": [
      "Test, scan or monitor any system",
      "Store client credentials or secrets for testing",
      "Send messages to clients on its own",
      "Give legal, audit or security advice"
    ],
    "migration": "We bring your clients, engagements, consultants, open findings and retainers across from the documents, sheets and tools you use now, in stages, so engagements keep running while it happens."
  },
  "faqHeading": "Questions security firm owners ask.",
  "faqs": [
    [
      "My consultants hate admin. Will they use it?",
      "It only works if recording takes seconds, so we set it up around the notes and templates they already use. They get a clear view of their week, the scope they were sold and what the client owes them."
    ],
    [
      "Can it replace my findings or reporting tool?",
      "It can hold findings, severity and status, and it tracks retests and follow-ups. If you prefer a specialist reporting tool, we agree during setup how findings reach Verity so status and retests are tracked in one place."
    ],
    [
      "Does it run or monitor tests?",
      "No. Verity does not scan or test any system. It records engagements, findings, people and hours."
    ],
    [
      "Can it hold client evidence safely?",
      "It attaches evidence to the engagement with access limited by role and a retention date, and it records who viewed or changed it. It does not replace your own security controls and it is not a place to store client credentials."
    ],
    [
      "Can it help with the CERT-In reporting rules?",
      "It records your own incident steps, owners and log checks as tasks with dates. It does not report on your behalf and it does not give legal advice."
    ],
    [
      "Can I see utilisation across offices?",
      "Yes. Each office is a location in one system, and consultants, engagements and margins can be compared side by side."
    ],
    [
      "Can it send reports to clients?",
      "Not by itself. It tracks report review and release, and your team sends the report and records the date."
    ],
    [
      "Who can see what?",
      "Only the people you allow. Access is set by role and by engagement, and every change is recorded with who made it and when."
    ],
    [
      "What does it cost?",
      "It depends on the number of users and what you want set up. Message us and we will give you a clear number after a short conversation about how your firm runs."
    ]
  ],
  "related": [
    "it-services-companies",
    "software-agencies",
    "data-companies",
    "ai-companies",
    "saas-companies",
    "consulting-firms"
  ],
  "ctaHeading": "Find out which findings are still open.",
  "ctaLede": "Tell us how your firm runs and we will show you the clashing bookings, open critical findings and retainers near their limit it would find, using your own numbers."
};
