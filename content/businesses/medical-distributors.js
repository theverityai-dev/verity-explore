export default {
  "schema": 2,
  "slug": "medical-distributors",
  "status": "published",
  "plural": "medical distributors",
  "subject": "medical distributor",
  "checked": "15 October 2026",
  "seo": {
    "title": "Medical distributor software: batch, credit, returns | Verity",
    "description": "Batch and expiry, chemist credit, returns and cold chain: the 14 problems that eat a medical distributor's thin margin, and the Verity screens that fix them.",
    "keywords": [
      "medical distributor software India",
      "pharma stockist batch expiry tracking",
      "chemist credit and outstanding tracking",
      "pharma returns and expiry claims",
      "cold chain records distributor"
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
    "inventory",
    "suppliers",
    "orders",
    "workforce",
    "locations",
    "ai"
  ],
  "hero": {
    "eyebrow": "Verity for medical distributors",
    "headline": "A distributor earns a few points on every strip. A batch that expires or a chemist who never pays can erase a month of them.",
    "lede": "A medical distributor buys from manufacturers, stores by batch, sells to hundreds of chemists on credit and takes back what expires or fails. The margin is thin and fixed by others, so the money is in what you do not lose: stock that expires before it is sold, dues that run past their date, returns nobody claimed. Verity connects the batch, the chemist, the van and the return so you see each leak while it can be fixed.",
    "oneLine": "One system that knows every batch and its expiry, every chemist's dues and last order, every van and delivery, every return claim and every cold-chain record, and tells you what to act on today.",
    "note": "It works alongside your billing software. It does not issue your invoices.",
    "screen": "owner",
    "screenNote": "batches, dues, returns and routes"
  },
  "today": {
    "heading": "Most distributors run big numbers on thin margins and manual memory.",
    "paragraphs": [
      "The billing software knows invoices. The godown knows what is physically there. The salesmen know their chemists. The accountant knows the ledger. The owner knows who is slow to pay. None of these agree on the same day.",
      "Margins in the trade are thin and largely set by others. In 2022 the chemists' and druggists' body asked that a minimum trade margin of 10 percent for wholesalers be recognised and said margins had not been restructured since 1995. When the percentage is small, a single unclaimed return or an unpaid invoice matters.",
      "Every day, a distributor also deals with batch-level quality action. In July 2026, 280 samples were reported not of standard quality or spurious by the drug regulator's monthly alert, and such failures are batch-specific. A distributor has to know which chemist holds which batch."
    ],
    "stack": [
      "Billing software and stock reports",
      "Ledger and Excel for outstanding",
      "Paper or Excel for returns and expiry claims",
      "WhatsApp with salesmen, chemists and drivers",
      "Temperature sheets or a data logger report"
    ],
    "stackNote": "Each does its piece. Nothing tells you which chemist holds a recalled batch or which return claim is about to lapse."
  },
  "painsHeading": "Where a medical distributor loses margin.",
  "painsLede": "These are the situations distributors, stockists and their accounts and godown teams describe. For each one: what it looks like on an ordinary day, what it costs, and what Verity does about it.",
  "pains": [
    {
      "area": "Stock",
      "title": "Stock expires in the godown",
      "scene": "A slow scheme item bought in bulk sits in a rack. Nobody checks expiry until a quarterly physical count, when a lot has three weeks left and the manufacturer's return window has closed.",
      "cost": "Example arithmetic: ₹6 lakh of short-dated stock written off at 1.5 percent margin takes the margin on about ₹4 crore of sales to recover.",
      "fix": "Every receipt records batch and expiry. Verity lists stock by months to expiry and value, shows which items can still be returned to the manufacturer, pushed on a scheme to chemists or moved between godowns.",
      "screen": "batches"
    },
    {
      "area": "Stock",
      "title": "Wrong batch is picked, and FEFO is only a hope",
      "scene": "The picker takes the nearest box, not the earliest-expiring batch. The chemist's copy of the invoice shows one batch, the carton holds another.",
      "cost": "The older batch expires on your shelf, and a chemist's batch query turns into an argument you cannot settle.",
      "fix": "Each sale line is linked to the batch and the pick list shows the earliest-expiring batch first. A batch mismatch at dispatch is flagged before the van leaves.",
      "screen": "batches"
    },
    {
      "area": "Compliance",
      "title": "A quality alert, and you cannot say who holds the batch",
      "scene": "The regulator's monthly alert names a batch as not of standard quality. You need to know within hours how much remains, which chemists were sold it and what has already been consumed.",
      "cost": "Selling or leaving a flagged batch in circulation is a compliance and reputation risk. Tracing by hand through invoices takes days.",
      "fix": "Because every sale line carries a batch, Verity answers who holds the batch, how much is in the godown and which invoices carried it, and creates a task per salesman to recover it. The source of the alert is checked by a person.",
      "screen": "returns",
      "source": {
        "name": "ETV Bharat on the July 2026 CDSCO NSQ alert",
        "url": "https://www.etvbharat.com/en/bharat/cdsco-flags-280-drug-samples-as-nsq-or-spurious-in-july-enn26082107816"
      }
    },
    {
      "area": "Credit",
      "title": "Chemists pay late and nobody sees the pattern",
      "scene": "Sixty chemists owe money. Some pay in a week, some in sixty days. A salesman keeps taking new orders from one who has two invoices overdue. The owner learns the total at month end.",
      "cost": "Example arithmetic: ₹1.2 crore of dues running 20 days late on a distributor with a 1.5 percent margin costs more in interest than the margin on those sales.",
      "fix": "Every chemist has a credit limit, terms and an ageing view. Verity shows outstanding by age and by salesman, and holds a new order for approval when dues are over limit or days.",
      "screen": "credit"
    },
    {
      "area": "Credit",
      "title": "Collections depend on the salesman's memory",
      "scene": "The collection round is whoever remembers. A cheque is received and posted late. A post-dated cheque bounces and the entry is not reversed.",
      "cost": "Unrecorded or late cheques hide the real dues and delay follow-up.",
      "fix": "Collections and cheques are recorded against invoices with dates, including post-dated cheques and returned cheques. Daily collection targets by salesman come from the ageing list.",
      "screen": "credit"
    },
    {
      "area": "Returns",
      "title": "Returns and expiry claims lapse",
      "scene": "A chemist returns expired and damaged strips. They sit in a bag for weeks. By the time the claim goes to the manufacturer the window has closed, or the debit note does not match.",
      "cost": "Unclaimed expiry is money you refund to the chemist and never recover from the principal.",
      "fix": "Each return is a record with chemist, batch, quantity, reason and the manufacturer's claim window. Verity tracks claim status through raised, accepted, credited or rejected, and flags claims close to their cut-off date.",
      "screen": "returns"
    },
    {
      "area": "Suppliers",
      "title": "Credit notes and scheme claims are not reconciled",
      "scene": "The manufacturer's scheme promised a free box on ten. The credit note arrives short. Nobody compared it to the sales that earned the scheme.",
      "cost": "Scheme benefits you earned and did not receive are quiet loss.",
      "fix": "Scheme terms are recorded per manufacturer, sales earning them are tallied, and the credit due is compared with the credit note received.",
      "screen": "returns"
    },
    {
      "area": "Cold chain",
      "title": "Cold chain items have no temperature trail",
      "scene": "Insulin and vaccines go into a van in the afternoon. The ice pack was changed or not. A chemist's fridge reading is never asked for. The godown fridge alarm goes off at night.",
      "cost": "A study of vaccine transport in India found 9 to 35 percent of some transfers exposed to sub-zero temperatures. A spoiled lot is a total loss and a patient-safety concern.",
      "fix": "Cold-chain stock is flagged. Fridge checks and van packing are tasks signed off with temperature readings. An excursion is recorded against the batches affected, with the decision taken by a named person.",
      "screen": "cold",
      "source": {
        "name": "Indian Journal of Public Health, 2019, search-result wording",
        "url": "https://doaj.org/article/2019a3f7845d466d8262d4d6a00f14f3"
      }
    },
    {
      "area": "Dispatch",
      "title": "Wrong or short deliveries come back as disputes",
      "scene": "The chemist says eight strips of one item were missing. The driver says he delivered all. The invoice was signed on a phone photo.",
      "cost": "Disputes mean credit notes, re-delivery trips and strained relationships.",
      "fix": "Orders are picked, packed and loaded against the invoice, and delivery is confirmed with quantities received. Differences are recorded at the door, with the reason.",
      "screen": "dispatch"
    },
    {
      "area": "Dispatch",
      "title": "Vans, drivers and routes are planned by habit",
      "scene": "Three vans cover overlapping areas. A driver waits for an invoice that is not printed. A chemist who ordered at noon gets goods the next day.",
      "cost": "Fuel, driver time and late deliveries cost more than the margin on small orders.",
      "fix": "Orders are grouped by route and day, each van has its load and sequence, and late orders appear on the dispatch screen. Staff plan the route; Verity shows what is waiting.",
      "screen": "dispatch"
    },
    {
      "area": "Buying",
      "title": "Purchases are bought on instinct",
      "scene": "A scheme tempts a bulk buy. Another item sold out last week and its purchase order was missed. Salesmen's orders and the godown's counts do not meet.",
      "cost": "Bulk buying slow items ties up cash. Missing a fast item loses a chemist's loyalty.",
      "fix": "Sales by item and chemist, current stock and incoming orders are shown together with reorder points. A purchase draft is created for review, and a scheme purchase shows how many months of sales it represents.",
      "screen": "owner"
    },
    {
      "area": "People",
      "title": "Salesmen's targets and chemist coverage",
      "scene": "Salesmen visit the same easy chemists. A chemist who used to order weekly has gone quiet. Targets are given on paper and reviewed at month end.",
      "cost": "A lost chemist is a recurring order that quietly goes to a competitor.",
      "fix": "Each chemist has a usual order pattern. Verity lists chemists who have gone quiet, with last order and value, and assigns a visit task to the salesman covering them.",
      "screen": "credit"
    },
    {
      "area": "Compliance",
      "title": "Licences, registers and inspections",
      "scene": "The wholesale licence retention fee date is in a drawer. The competent person's records are on a certificate nobody has scanned. An inspector asks for purchase records and the Schedule H1 register is incomplete.",
      "cost": "A notice, penalty or licence action. Licences are generally valid indefinitely if the retention fee is paid within each five-year period, with a late fee that rises monthly.",
      "fix": "Licences, retention-fee dates, competent person details and registers are records with owners and dates. Sales line records give the purchase and sale trail by batch when asked.",
      "screen": "returns",
      "source": {
        "name": "CalcGuru, Drug Licence in India 2026",
        "url": "https://calcguru.in/?p=4879"
      }
    },
    {
      "area": "Owner",
      "title": "The owner sees the day after",
      "scene": "With two godowns and several salesmen, the owner asks for sales, dues and stock and gets three different sheets.",
      "cost": "Decisions about credit, buying and routes wait on whoever builds the sheet.",
      "fix": "Godowns are locations in one system, with stock, dues, returns and routes side by side. Each morning Verity lists what needs a decision, with an owner.",
      "screen": "owner"
    }
  ],
  "factsHeading": "The numbers that make these problems worth fixing.",
  "factsLede": "From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.",
  "factsNote": "The NSQ count is from a newspaper report on the regulator's monthly release, and its own headline and breakdown differ by one. The margin demand is a 2022 trade body statement, not a current rate. The licence details are from a secondary guide, so confirm with your state drug controller. The cold chain figure is from a 2019 study of vaccine transport in public health settings and could only be checked from search-result wording.",
  "facts": [
    {
      "figure": "280",
      "text": "drug samples reported not of standard quality or spurious in the regulator's July 2026 monthly alert. The failures are batch-specific.",
      "source": {
        "name": "ETV Bharat, 2026",
        "url": "https://www.etvbharat.com/en/bharat/cdsco-flags-280-drug-samples-as-nsq-or-spurious-in-july-enn26082107816"
      }
    },
    {
      "figure": "10%",
      "text": "the minimum trade margin for wholesalers that the chemists' and druggists' body asked for in 2022, saying margins had not been restructured since 1995.",
      "source": {
        "name": "Free Press Journal, 2022",
        "url": "https://www.freepressjournal.in/amp/indore/indore-reframe-trade-margin-says-all-india-organisation-of-chemists-and-druggists"
      }
    },
    {
      "figure": "27 October 2017",
      "text": "the date notification G.S.R. 1337(E) abolished drug licence renewal. Licences are now valid indefinitely if a retention fee is paid in each five-year period.",
      "source": {
        "name": "CalcGuru, 2026",
        "url": "https://calcguru.in/?p=4879"
      }
    },
    {
      "figure": "9 to 35%",
      "text": "of inter-facility vaccine transfers in one 2019 study of 110 transport episodes were exposed to sub-zero temperatures.",
      "source": {
        "name": "Indian Journal of Public Health, 2019",
        "url": "https://doaj.org/article/2019a3f7845d466d8262d4d6a00f14f3"
      }
    }
  ],
  "screensHeading": "The screens you would use every day.",
  "screensLede": "Six views, each built for one job. Names, columns and terms are set up in your distribution business's own language.",
  "screens": [
    {
      "id": "owner",
      "title": "Distribution / Today",
      "meta": "Godown: Main",
      "heading": "The owner's morning view",
      "caption": "Sales, dues, short-dated stock, returns and cold-chain checks on one screen, with the items needing a decision listed under it.",
      "blocks": [
        {
          "type": "kpis",
          "items": [
            {
              "label": "Sales yesterday",
              "value": "₹18.4 lakh",
              "note": "142 invoices"
            },
            {
              "label": "Dues over terms",
              "value": "₹62 lakh",
              "note": "31 chemists"
            },
            {
              "label": "Expiring in 90 days",
              "value": "₹9.8 lakh",
              "note": "returnable ₹6.1 lakh"
            },
            {
              "label": "Return claims at risk",
              "value": "₹2.3 lakh",
              "note": "window closes in 10 days"
            }
          ]
        },
        {
          "type": "title",
          "text": "Dues by age"
        },
        {
          "type": "bars",
          "items": [
            {
              "label": "Within terms",
              "value": 72,
              "display": "₹1.4 cr"
            },
            {
              "label": "1 to 30 days late",
              "value": 38,
              "display": "₹44 lakh"
            },
            {
              "label": "31 to 60 days late",
              "value": 13,
              "display": "₹14 lakh",
              "tone": "muted"
            },
            {
              "label": "Over 60 days late",
              "value": 5,
              "display": "₹4 lakh",
              "tone": "muted"
            }
          ]
        },
        {
          "type": "alert",
          "text": "Fridge 2 in Main godown read 11°C at 6 am. 14 insulin and vaccine batches affected.",
          "action": "Review"
        },
        {
          "type": "list",
          "items": [
            {
              "name": "Fast item below reorder point",
              "meta": "Pantoprazole 40 mg: 6 days of stock",
              "tag": [
                "Order",
                "flag",
                "Ordered",
                "ok"
              ]
            },
            {
              "name": "Chemist over credit limit",
              "meta": "Ram Medicals: ₹2.1 lakh over limit",
              "tag": [
                "Hold",
                "late",
                "Cleared",
                "ok"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "batches",
      "title": "Stock",
      "meta": "Months to expiry, all godowns",
      "heading": "Stock by batch and expiry",
      "caption": "What is in the godown by batch, how soon it expires, what can still be returned and what should be pushed on a scheme first.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Item",
            "Batch",
            "Qty",
            "Expiry",
            "Status"
          ],
          "rows": [
            [
              "Amoxicillin 500, strip 10",
              "AX2210",
              "1,200",
              "Dec 2026",
              [
                "Push scheme",
                "late",
                "Moved",
                "ok"
              ]
            ],
            [
              "Metformin 500, strip 10",
              "MF3341",
              "3,400",
              "Jun 2027",
              [
                "OK",
                "ok"
              ]
            ],
            [
              "Cetirizine 10, strip 10",
              "CT1187",
              "900",
              "Nov 2026",
              [
                "Return window",
                "flag",
                "Claim raised",
                "ok"
              ]
            ],
            [
              "Pantoprazole 40, strip 15",
              "PP4410",
              "450",
              "Mar 2027",
              [
                "Low",
                "flag",
                "Ordered",
                "ok"
              ]
            ]
          ]
        },
        {
          "type": "alert",
          "text": "Pick list for invoice 4412 shows batch CT1187 first. The carton on the rack is CT1204.",
          "action": "Fix pick"
        }
      ]
    },
    {
      "id": "credit",
      "title": "Chemists",
      "meta": "Outstanding and quiet accounts",
      "heading": "Chemist dues, collections and coverage",
      "caption": "Each chemist's limit, dues by age, post-dated cheques and last order. Collection and visit tasks go to the salesman covering them.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Chemist",
            "Limit",
            "Due",
            "Oldest",
            "Status"
          ],
          "rows": [
            [
              "Ram Medicals",
              "₹3.0 lakh",
              "₹5.1 lakh",
              "46 days",
              [
                "Over limit",
                "late",
                "Paid ₹2 lakh",
                "ok"
              ]
            ],
            [
              "City Chemist",
              "₹2.0 lakh",
              "₹1.4 lakh",
              "12 days",
              [
                "Within terms",
                "ok"
              ]
            ],
            [
              "Sri Pharma",
              "₹1.5 lakh",
              "₹1.1 lakh",
              "34 days",
              [
                "PDC bounced",
                "flag",
                "Re-presented",
                "info"
              ]
            ],
            [
              "Lakshmi Medical",
              "₹1.0 lakh",
              "₹0.2 lakh",
              "5 days",
              [
                "Quiet 3 weeks",
                "flag"
              ]
            ]
          ]
        },
        {
          "type": "alert",
          "text": "9 chemists who ordered weekly have not ordered in 3 weeks. 4 have dues over terms.",
          "action": "Assign visits"
        }
      ]
    },
    {
      "id": "returns",
      "title": "Returns",
      "meta": "Claims open",
      "heading": "Returns, claims and batch tracing",
      "caption": "Every return with its manufacturer claim window and status, scheme credits compared with sales, licence dates and, when an alert arrives, which chemists hold the batch.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Manufacturer",
            "Return value",
            "Claim cut-off",
            "Credit received",
            "Status"
          ],
          "rows": [
            [
              "Pharma A",
              "₹1.1 lakh",
              "24 Oct",
              "₹0",
              [
                "Raise claim",
                "late",
                "Raised",
                "ok"
              ]
            ],
            [
              "Pharma B",
              "₹0.8 lakh",
              "6 Nov",
              "₹0.6 lakh",
              [
                "Short ₹0.2 lakh",
                "flag"
              ]
            ],
            [
              "Pharma C",
              "₹0.4 lakh",
              "30 Oct",
              "₹0.4 lakh",
              [
                "Credited",
                "ok"
              ]
            ]
          ]
        },
        {
          "type": "title",
          "text": "Batch IB5521, alert received: who holds it"
        },
        {
          "type": "table",
          "cols": [
            "Chemist",
            "Qty sold",
            "Invoice",
            "Salesman",
            "Status"
          ],
          "rows": [
            [
              "City Chemist",
              "60",
              "4291",
              "Arun",
              [
                "Recover",
                "late",
                "Returned",
                "ok"
              ]
            ],
            [
              "Sri Pharma",
              "120",
              "4305",
              "Vijay",
              [
                "Recover",
                "flag"
              ]
            ]
          ]
        },
        {
          "type": "list",
          "items": [
            {
              "name": "Wholesale licence retention fee",
              "meta": "Due date recorded, owner: Accounts",
              "tag": [
                "Check",
                "flag",
                "Paid",
                "ok"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "cold",
      "title": "Cold chain",
      "meta": "Fridges and vans",
      "heading": "Cold-chain stock and fridge checks",
      "caption": "Cold-chain batches, fridge readings and van packing sign-offs, with any excursion recorded against the batches affected.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Unit",
            "Reading",
            "Time",
            "Signed by",
            "Status"
          ],
          "rows": [
            [
              "Godown fridge 1",
              "4°C",
              "6:10",
              "Suresh",
              [
                "OK",
                "ok"
              ]
            ],
            [
              "Godown fridge 2",
              "11°C",
              "6:12",
              "Suresh",
              [
                "Excursion",
                "late",
                "Moved, decision logged",
                "ok"
              ]
            ],
            [
              "Van 3, ice packs",
              "Packed",
              "14:20",
              "Driver Ali",
              [
                "Check on return",
                "info"
              ]
            ]
          ]
        },
        {
          "type": "checks",
          "items": [
            {
              "text": "Cold-chain batches in fridge 2 listed",
              "meta": "14 batches",
              "done": true
            },
            {
              "text": "Decision on affected batches recorded by quality owner",
              "meta": "Due today",
              "done": false
            }
          ]
        }
      ]
    },
    {
      "id": "dispatch",
      "title": "Dispatch",
      "meta": "Today's routes",
      "heading": "Picking, vans and delivery confirmation",
      "caption": "Orders grouped by route, load by van, delivery confirmed with quantities and differences recorded at the door.",
      "blocks": [
        {
          "type": "board",
          "columns": [
            {
              "name": "To pick",
              "cards": [
                {
                  "title": "Route North, 14 invoices",
                  "meta": "Van 2, ready by 11 am",
                  "tag": [
                    "Pick",
                    "flag",
                    "Picked",
                    "ok"
                  ]
                }
              ]
            },
            {
              "name": "On van",
              "cards": [
                {
                  "title": "Route Market, 22 invoices",
                  "meta": "Van 1, left 10:40",
                  "tag": [
                    "On time",
                    "ok"
                  ]
                },
                {
                  "title": "Route East, 9 invoices",
                  "meta": "Van 3, cold chain",
                  "tag": [
                    "Temp check",
                    "info",
                    "Signed",
                    "ok"
                  ]
                }
              ]
            },
            {
              "name": "Delivered",
              "cards": [
                {
                  "title": "City Chemist, inv 4291",
                  "meta": "1 strip short, noted",
                  "tag": [
                    "Difference",
                    "flag",
                    "Credit noted",
                    "ok"
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "dayHeading": "The same Friday, before and after.",
  "dayLede": "What changes is not the medicine. It is that the day leaves a record, and the record does the chasing.",
  "day": [
    {
      "time": "8:00 am",
      "before": "The manager checks a few racks by eye and hopes nothing is close to expiry.",
      "after": "The stock screen lists lines expiring in 90 days by value and which can be returned or pushed first."
    },
    {
      "time": "10:30 am",
      "before": "A salesman takes an order from a chemist with two invoices overdue.",
      "after": "The order is held for approval because dues are over limit."
    },
    {
      "time": "12:30 pm",
      "before": "The regulator's alert arrives. Tracing takes two days through invoices.",
      "after": "Verity lists chemists who hold the batch by invoice, and recovery tasks go to the salesmen."
    },
    {
      "time": "3:00 pm",
      "before": "A driver forgets to confirm a short delivery. The chemist argues it three days later.",
      "after": "The shortfall is recorded at the door and the credit note follows."
    },
    {
      "time": "6:00 pm",
      "before": "Returns pile up in a corner.",
      "after": "Returns are logged with a claim cut-off for each manufacturer, and the oldest are on the list for Monday."
    },
    {
      "time": "Month end",
      "before": "The accountant rebuilds dues and returns.",
      "after": "Dues by age, return claims and scheme credits come from records already kept."
    }
  ],
  "approach": {
    "heading": "We set it up with you, in four weeks.",
    "lede": "You do not get a login and a manual. We spend time in your godown, billing desk and on a delivery round, build Verity around how your distribution really runs, bring your data in, then stay to make sure it keeps working.",
    "phases": [
      {
        "when": "Week 1",
        "name": "Discovery and mapping",
        "we": "Spend a morning in the godown and a day on a delivery round with the accounts team. Follow a purchase from receipt to a chemist's invoice to a return. Note where batches, dues and claims leak.",
        "you": "Three hours of yours and your accountant's. A salesman and the godown in-charge for an hour each. Access to stock reports, outstanding lists and a month of invoices.",
        "get": "A written map of your business: godowns, routes, salesmen, chemists, manufacturers, return rules and the first gaps we will close."
      },
      {
        "when": "Weeks 2 to 3",
        "name": "Configuration",
        "we": "Set up godowns, items with batches and expiry, chemist credit terms, manufacturer return windows and schemes, routes, vans, cold-chain units and the six screens in your own terms.",
        "you": "Check the setup with the godown in-charge and accounts. Tell us where a rule or a term is wrong.",
        "get": "A working Verity with your real items, chemists and rules, ready for your data."
      },
      {
        "when": "Weeks 3 to 4",
        "name": "Migration and training",
        "we": "Bring in your item list with batches and expiry, chemist list with dues, open returns and manufacturer terms from your billing exports and sheets. Train godown, accounts, dispatch and salesmen at their stations.",
        "you": "Exports from your billing software and a physical count of one godown. An hour with each role.",
        "get": "Your stock, dues and returns inside Verity, and a team that has used it through a day of dispatch."
      },
      {
        "when": "After go-live",
        "name": "Operations partnership",
        "we": "Stay on after launch. Review the first weeks of dues, expiry and return numbers with you, tune the limits and handle changes when you add a manufacturer, a route or a godown.",
        "you": "A short monthly review of what the numbers say.",
        "get": "A system that keeps matching how the business runs, with someone responsible for it."
      }
    ],
    "bring": [
      "A stock report with batch and expiry",
      "The outstanding list by chemist with ageing",
      "Manufacturer return and scheme terms",
      "The route list with vans and drivers",
      "Licence copies and the competent person's details"
    ],
    "time": "About 10 to 12 hours of your own time across the four weeks, mostly in week 1. Your accountant, godown in-charge and dispatch lead need a few more.",
    "after": "Nobody is hired to run Verity. Receipts, picks and returns are recorded as part of the work the team already does."
  },
  "ai": {
    "heading": "Ask your distribution business a question. Get an answer, not a report to build.",
    "lede": "Verity AI reads your own stock, sales, dues and return records and respects who may see what. Ask in plain language, then turn the answer into tasks for the right people.",
    "examples": [
      {
        "q": "Which batches expire in the next 90 days, and what can still be returned?",
        "a": "₹9.8 lakh expires within 90 days. ₹6.1 lakh can still be returned to manufacturers, ₹2.4 lakh can be pushed on a scheme.",
        "rows": [
          [
            "Returnable",
            "₹6.1 lakh"
          ],
          [
            "Push on scheme",
            "₹2.4 lakh"
          ],
          [
            "Write-off risk",
            "₹1.3 lakh"
          ]
        ],
        "action": "Create return and scheme tasks"
      },
      {
        "q": "Which chemists should I stop supplying until they pay?",
        "a": "Nine chemists are over limit and over 45 days. Ram Medicals and Sri Pharma owe the most.",
        "rows": [
          [
            "Ram Medicals",
            "₹5.1 lakh"
          ],
          [
            "Sri Pharma",
            "₹1.1 lakh"
          ],
          [
            "Others",
            "₹6.8 lakh"
          ]
        ],
        "action": "Hold new orders pending approval"
      },
      {
        "q": "Who holds batch IB5521?",
        "a": "Two chemists were sold it on invoices 4291 and 4305. 180 units went out, of which 60 are back.",
        "action": "Create recovery tasks for Arun and Vijay"
      }
    ]
  },
  "automationHeading": "The follow-ups nobody has time to make.",
  "automationLede": "Set once, then they run from your records. Staff still speak to chemists and manufacturers; Verity makes sure the right person knows what to do.",
  "automations": [
    {
      "when": "A batch reaches 90 days to expiry",
      "then": [
        "Listed with value and returnable share",
        "Task to the buyer to push or return",
        "Claim window shown on the return"
      ]
    },
    {
      "when": "A chemist goes over limit or over terms",
      "then": [
        "New orders held for approval",
        "Task to the salesman and accounts",
        "Outcome recorded: paid, extended or stopped"
      ]
    },
    {
      "when": "A return is logged",
      "then": [
        "Claim window and manufacturer attached",
        "Task to raise the claim",
        "Credit received compared with the claim"
      ]
    },
    {
      "when": "A quality alert names a batch",
      "then": [
        "Godown stock and sold lines found",
        "Recovery task per salesman",
        "Recovered quantity recorded against the invoice"
      ]
    },
    {
      "when": "A fridge reading is out of range",
      "then": [
        "Affected batches listed",
        "Task to the quality owner",
        "Decision recorded with a name"
      ]
    },
    {
      "when": "A fast item falls below reorder point",
      "then": [
        "Draft purchase created",
        "Compared with the scheme on offer",
        "Stock updated on receipt"
      ]
    }
  ],
  "rules": {
    "heading": "The rules a medical distributor has to keep up with.",
    "lede": "Verity does not give legal advice and does not file anything for you. It keeps the records these rules depend on in order, so you are not hunting for them when an inspector or an auditor asks.",
    "note": "Rules change and differ by state. Confirm current requirements with your state drug controller, your accountant and your legal adviser.",
    "items": [
      {
        "name": "Wholesale drug licence",
        "what": "Wholesale of drugs generally needs a licence from the state drug authority: Form 20B for general drugs, and Form 21B for drugs in Schedules C and C(1). Since 27 October 2017 the licence is generally valid indefinitely if a retention fee is paid in each five-year period. A competent person is generally required, not necessarily a registered pharmacist.",
        "how": "The licence, retention-fee dates and competent person details are records with owners and dates, and the fee is a task before it lapses.",
        "source": {
          "name": "CalcGuru",
          "url": "https://calcguru.in/?p=4879"
        }
      },
      {
        "name": "Purchase, sale and register records",
        "what": "A wholesaler generally keeps purchase and sale records, with batch details, and registers for certain drug schedules. Retention periods differ by record; a secondary source gives two years for purchase records and three for the Schedule H1 register, which should be confirmed.",
        "how": "Every sale line carries item, batch, quantity, buyer licence and invoice, so the trail exists by batch when asked."
      },
      {
        "name": "Quality alerts and withdrawals",
        "what": "The regulator publishes monthly alerts on samples not of standard quality or spurious. Failures are batch-specific.",
        "how": "Verity finds stock and sold lines by batch and creates recovery tasks. A person checks the official notice.",
        "source": {
          "name": "ETV Bharat",
          "url": "https://www.etvbharat.com/en/bharat/cdsco-flags-280-drug-samples-as-nsq-or-spurious-in-july-enn26082107816"
        }
      },
      {
        "name": "Storage and cold chain",
        "what": "Drugs that need controlled temperatures must be stored accordingly. Exact conditions depend on the product label and the licence conditions.",
        "how": "Fridge readings and van packing checks are signed off with the date and a name, and excursions are recorded against the batches."
      }
    ]
  },
  "rolesHeading": "Everyone sees the same records, through their own window.",
  "rolesLede": "A salesman should not see another salesman's chemists or your margins. The godown should not edit credit limits. Each role opens on what it needs.",
  "roles": [
    {
      "role": "Owner",
      "question": "Where is margin leaking and who owes me?",
      "sees": "Sales, dues by age, expiry and return claims, and every godown side by side."
    },
    {
      "role": "Accounts",
      "question": "What is due, what is paid, what is claimed?",
      "sees": "Outstanding by chemist, cheques, credit notes and scheme credits."
    },
    {
      "role": "Godown in-charge",
      "question": "What is expiring and what must be picked?",
      "sees": "Batch and expiry, pick lists by earliest expiry, cold-chain checks and returns received."
    },
    {
      "role": "Salesman",
      "question": "Which of my chemists need a visit or a call?",
      "sees": "My chemists, their usual orders, dues, quiet accounts and visit tasks."
    },
    {
      "role": "Dispatch and drivers",
      "question": "What is on my van and what has been delivered?",
      "sees": "Route, load, delivery confirmations and differences to record."
    }
  ],
  "alongside": {
    "heading": "What changes, and what stays the same.",
    "keep": [
      "Your billing software for invoices. We agree during setup how invoices and receipts reach Verity.",
      "Your accounting ledger and your accountant, who still prepares returns.",
      "WhatsApp and the phone with chemists and manufacturers. Staff speak to them",
      "Verity tracks the follow-up.",
      "Your data loggers or thermometers, with readings entered or agreed during setup."
    ],
    "not": [
      "Issue your invoices or run your billing counter.",
      "Take online orders from chemists.",
      "Send messages to chemists or manufacturers on its own.",
      "File GST returns or run payroll."
    ],
    "migration": "We bring your items with batches, chemists with dues, open returns and manufacturer terms across from your billing exports and sheets, in stages, godown by godown, so dispatch carries on while it happens."
  },
  "faqHeading": "Questions medical distributors ask.",
  "faqs": [
    [
      "Does Verity replace my billing software?",
      "No. Your billing software keeps issuing invoices. We agree during setup how invoices, batches and receipts reach Verity, which then does the batch, dues, returns and cold-chain work around them."
    ],
    [
      "Can it track every batch from purchase to chemist?",
      "Yes, once receipts and sale lines carry the batch. That is the basis for expiry lists and for finding who holds a batch when an alert arrives."
    ],
    [
      "Will it keep me from missing return claim dates?",
      "It records each manufacturer's claim window on the return and flags those near their cut-off. Your team still raises the claim with the manufacturer."
    ],
    [
      "Can it handle cold chain?",
      "It records fridge readings, van packing checks and excursions against the batches affected. It does not provide hardware or sensors; we agree during setup how readings reach Verity."
    ],
    [
      "Can chemists order through Verity?",
      "No. Verity does not take online orders. Your salesmen and phone orders continue, and Verity makes sure each order and each due has an owner."
    ],
    [
      "I have two godowns. Can I see them together?",
      "Yes. Each godown is a location in one system, with stock, dues, returns and routes side by side, and transfers are recorded."
    ],
    [
      "Who can see my data?",
      "Only the people you allow. Access is set by role, so a salesman sees only his chemists and your accountant sees dues and credit notes. Every change is recorded with who and when."
    ],
    [
      "How quickly will I see something useful?",
      "The expiry list and dues ageing need only your billing exports, so we aim to have them first. Return claim and quiet-chemist patterns become reliable after a few weeks."
    ],
    [
      "What does it cost?",
      "It depends on the number of godowns, users and what you want set up. Message us and we will give you a clear number after a short conversation about how your business runs."
    ]
  ],
  "related": [
    "pharmacies",
    "hospitals",
    "distributors",
    "pharmaceutical-manufacturers",
    "clinics",
    "diagnostic-labs"
  ],
  "ctaHeading": "Start with the stock that expires and the dues that run late.",
  "ctaLede": "Tell us how your distribution runs and we will show you the short-dated batches, the over-limit chemists and the return claims about to lapse, using your own numbers."
};
