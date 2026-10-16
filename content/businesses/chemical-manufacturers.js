export default {
  "schema": 2,
  "slug": "chemical-manufacturers",
  "status": "published",
  "plural": "chemical manufacturers",
  "subject": "chemical plant",
  "checked": "16 October 2026",
  "seo": {
    "title": "Chemical manufacturer software for Indian plants | Verity",
    "description": "Batch and lot records, hazardous goods papers, effluent and consent dates, and slow receivables: the leaks in a chemical plant and the Verity screens that close them.",
    "keywords": [
      "chemical manufacturing software India",
      "batch and lot traceability chemical plant",
      "safety data sheet and dispatch records",
      "effluent and hazardous waste records",
      "chemical plant owner dashboard"
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
    "orders",
    "suppliers",
    "logistics",
    "workforce",
    "schedule",
    "ai"
  ],
  "hero": {
    "eyebrow": "Verity for chemical manufacturers",
    "headline": "A chemical plant can make a good batch and still lose the paperwork that proves it.",
    "lede": "The reactor does its job. The trouble is everything around it: which drum of solvent went into which batch, whether the safety data sheet went with the truck, when the effluent record was last filled in, and which customer has not paid since June. Verity ties raw material lots, batches, dispatches, compliance dates and money into one record, so the owner can answer in minutes what used to take a day of phone calls.",
    "oneLine": "One system that knows every lot that came in, every batch that went out, every consent date and every rupee still owed.",
    "note": "Built for a plant where the supervisor is not a data entry person. Records come out of the steps already done at the weighbridge, the lab and the dispatch gate.",
    "screen": "owner",
    "screenNote": "yields, stock, compliance dates, dispatches and dues"
  },
  "today": {
    "heading": "Most chemical plants run well on the floor and loosely on paper.",
    "paragraphs": [
      "The process itself is usually tightly controlled by an experienced chemist or plant head. What is loosely held is the record trail around it: a batch sheet on a clipboard, a lab result on a separate sheet, lot numbers of raw material in a stores register, and a dispatch note written at the gate.",
      "When a customer queries a drum six weeks later, someone has to dig through three registers to find which raw material lot and which batch it came from. When an inspector asks for the last quarter's waste records, the same hunt starts again.",
      "Compliance adds its own lists. A consent to operate, a hazardous waste authorisation, annual returns, safety data sheets for each product, labels and transport papers. Each has a date and an owner that lives in someone's head."
    ],
    "stack": [
      "Batch sheets and lab notebooks",
      "Stores and weighbridge registers",
      "Excel for stock, costing and dues",
      "Tally or similar for accounts",
      "WhatsApp with customers, transporters and the consultant"
    ],
    "stackNote": "Each tool is fine for its own job. Nothing connects a batch to the lot it used, the customer it went to, or the paper that had to travel with it."
  },
  "painsHeading": "Where a chemical plant actually loses money and sleep.",
  "painsLede": "These are the situations plant owners and heads describe again and again. For each: what it looks like on an ordinary day, what it costs, and what Verity does about it.",
  "pains": [
    {
      "area": "Production",
      "title": "Yield drifts and nobody sees it until the month end",
      "scene": "A batch that used to give 94 kg per 100 kg of input now gives 90. It happens over three weeks, across two shifts, with a new operator on one and a worn agitator on the other. The monthly report shows it after the material is already gone.",
      "cost": "Example arithmetic: a product with ₹120 per kg of input and 4 percent yield loss on 40 tonnes a month loses about ₹1.9 lakh a month.",
      "fix": "Each batch records inputs and output against the standard recipe. Verity shows yield by product, shift and reactor, flags a batch that falls outside your range on the day it closes, and lists the batches behind the drift.",
      "screen": "batches"
    },
    {
      "area": "Traceability",
      "title": "Nobody can say which raw material lot went into which batch",
      "scene": "Three suppliers send the same solvent. Drums are issued from stores by whichever is nearest. A customer reports a colour issue and the plant cannot say whether it came from the March lot or the April one.",
      "cost": "Without lot-to-batch links, one complaint can mean holding every batch made in that period. The real cost is the stock you stop selling while you search.",
      "fix": "Raw material lots are received with supplier, date and test result. Each batch records which lots were issued to it. Verity shows, both ways, every batch a lot went into and every lot a batch used.",
      "screen": "batches"
    },
    {
      "area": "Quality",
      "title": "Certificates of analysis are late, retyped or wrong",
      "scene": "The lab result is on a sheet. The dispatch clerk retypes it into a certificate at the last minute while the truck waits. A decimal goes wrong, or a result from the previous batch is reused.",
      "cost": "A wrong certificate is a returned consignment, a credit note and a customer who now double checks everything you send.",
      "fix": "Lab results are recorded against the batch and drawn into the certificate from that record, not retyped. Dispatch is held until the batch is released by the person who has the right to release it.",
      "screen": "batches"
    },
    {
      "area": "Quality",
      "title": "A complaint arrives and the retained sample is nowhere",
      "scene": "A buyer says the last drum failed their incoming test. The retained sample for that batch should be on a shelf, but the shelf has no labels. The batch sheet is in a box from last year.",
      "cost": "A complaint you cannot investigate is one you have to accept. It also costs the regular order that follows.",
      "fix": "Each complaint is a record linked to the batch, the customer, the dispatch and the retained sample location. The investigation, the finding and any credit are recorded on it, and the open ones are listed by age.",
      "screen": "batches"
    },
    {
      "area": "Safety",
      "title": "The safety data sheet is out of date, or did not go with the truck",
      "scene": "The product formulation changed in July. The safety data sheet on file is from last year. A new customer asks for the current one and a driver arrives at a plant without it.",
      "cost": "The Manufacture, Storage and Import of Hazardous Chemicals Rules treat safety data sheets as part of hazard communication. A missing or stale sheet is a compliance gap and a customer trust problem.",
      "fix": "Each product holds its current safety data sheet as a record with a version and review date. Verity lists sheets due for review, and a dispatch cannot be closed until the current sheet is recorded as sent with it.",
      "screen": "safety",
      "source": {
        "name": "Maven Regulatory, MSIHC Rules guide, 2025",
        "url": "https://www.mavenrs.com/blog/msihc-rules-india-hazardous-chemical-management-compliance-guide"
      }
    },
    {
      "area": "Dispatch",
      "title": "Hazardous goods dispatch papers are done in a hurry",
      "scene": "The tanker is loaded, the label is on, but the transport emergency card, the driver's trained status and the vehicle papers are checked by whoever remembers. A dispatch goes out with one missing.",
      "cost": "A stopped vehicle on the road, a delayed delivery and in the worst case an unprepared response to a leak.",
      "fix": "A dispatch checklist per product class: label, emergency card, driver and vehicle details, quantity against order. The gate supervisor signs it off, and Verity records who and when against the dispatch.",
      "screen": "safety"
    },
    {
      "area": "Stores",
      "title": "Drums of different products share the same godown",
      "scene": "Stock has grown in the past quarter. Oxidisers sit near solvents because that is where space was. Nobody has written down which products are held where, or the limit for each area.",
      "cost": "A storage mistake is a safety risk first and a licence problem next. It also means stock is hard to find when an order comes in.",
      "fix": "Each storage location is a record with the products allowed and quantity limits you set. Verity shows what is stored where, warns when a receipt would break your own limit, and lists the oldest stock per location.",
      "screen": "safety"
    },
    {
      "area": "Compliance",
      "title": "Effluent and hazardous waste records are filled in before the audit",
      "scene": "Effluent readings, waste generated, waste sent out and manifests live on different sheets. The annual return is due and the person who knows the numbers is on leave.",
      "cost": "Waste rules in India require records and an annual return to the State Pollution Control Board, and a gap can lead to notices or consent trouble.",
      "fix": "Daily effluent readings, waste generated and each manifest are recorded as they happen. Verity totals them by month and year so the annual return figures are already on screen, and flags a missing entry the same day.",
      "screen": "plant",
      "source": {
        "name": "Mynd Solution, Hazardous waste compliance in India",
        "url": "https://www.myndsolution.com/complete-guide-to-hazardous-waste-compliance-in-india-rules-authorisation-and-disposal-requirements/"
      }
    },
    {
      "area": "Compliance",
      "title": "Consent, authorisation and licence dates sit with one person",
      "scene": "The consent to operate, hazardous waste authorisation, factory licence, boiler certificate and fire clearance each expire on a different date. The consultant knows them. If the consultant changes, nobody does.",
      "cost": "A lapsed consent can stop production. The cost is the days of lost output and the fee to regularise.",
      "fix": "Each licence, consent and certificate is a record with number, authority, expiry and owner. Renewal tasks open weeks ahead and carry the documents needed.",
      "screen": "plant"
    },
    {
      "area": "Equipment",
      "title": "The reactor stops because a gasket was never replaced",
      "scene": "A reactor seal leaks during a batch. The spare was not in stores. The vendor is two days away. Planned maintenance is on a whiteboard that was wiped last month.",
      "cost": "A stopped batch loses material in process and the delivery date with it. Unplanned stops cost more than planned ones.",
      "fix": "Each reactor, pump, boiler and pressure vessel is an asset record with service history, spares and next due date. Maintenance becomes a scheduled task with a person, and Verity flags overdue ones.",
      "screen": "plant"
    },
    {
      "area": "Costing",
      "title": "Raw material prices move and the quote does not",
      "scene": "A solvent rate goes up 8 percent. Sales quotes are still on last quarter's price list. The cost of a batch includes losses, recovered solvent and fuel that nobody has worked out.",
      "cost": "Example arithmetic: a ₹95 per kg product with ₹70 of material, ₹12 of conversion and a 6 percent hidden loss earns about ₹9 per kg, not the ₹13 the price list suggests.",
      "fix": "Every purchase records the rate. Verity costs each batch from actual lot rates, yield and conversion, and shows the margin per product and per customer, so a price rise shows up as a changed margin the same week.",
      "screen": "owner"
    },
    {
      "area": "Money",
      "title": "Customers pay late and the plant finds out when cash is short",
      "scene": "Four customers owe more than 90 days. The accounts person chases when asked. Meanwhile the plant buys raw material on shorter terms.",
      "cost": "Example arithmetic: ₹60 lakh outstanding beyond 60 days, financed at 12 percent, costs about ₹60,000 a month in interest alone. Where you are the seller to a small buyer, the MSME payment rules also matter to them.",
      "fix": "Each invoice is tracked against the dispatch, due date and customer's usual pay days. Verity lists overdue amounts by customer and age, and creates a follow-up task for the person who owns the relationship. Staff make the call.",
      "screen": "orders",
      "source": {
        "name": "SetIndiaBiz, MSME 45 day payment rule, 2025",
        "url": "https://www.setindiabiz.com/blog/msme-45-day-payment-rule"
      }
    },
    {
      "area": "Orders",
      "title": "Sales promises a date the plant cannot meet",
      "scene": "A customer asks for 8 tonnes by Friday. Sales says yes. The plant has one reactor booked for another product until Thursday and the raw material has not arrived.",
      "cost": "A missed date is a lost customer. Over-promising also forces expensive air freight or overtime to catch up.",
      "fix": "Orders show required quantity, raw material available, reactor slots and expected finish. The planner sees conflicts before a date is confirmed.",
      "screen": "orders"
    },
    {
      "area": "People",
      "title": "Operator training, PPE and permits are not recorded",
      "scene": "A new operator is moved to a hazardous step on his second week. Nobody remembers if his induction and PPE issue were completed. A hot work permit is a paper slip.",
      "cost": "A person without the right training in a chemical process is a safety risk and, after an incident, a record you cannot produce.",
      "fix": "Each person's training, induction, PPE issue and station clearance are records with dates. Permits for hot work and entry are tasks with sign-off, and shifts are set from who is cleared.",
      "screen": "safety"
    },
    {
      "area": "Owner",
      "title": "The owner reads the plant through phone calls",
      "scene": "The owner asks what was made today, what is pending dispatch and who has not paid. Each answer is a different person on a different call. By evening the picture is already old.",
      "cost": "Decisions run on memory and calls. Small gaps in yield, stock and dues compound before they are seen.",
      "fix": "One morning screen with production, yield flags, stock below reorder, compliance dates due, dispatches and overdue dues, each item with an owner.",
      "screen": "owner"
    }
  ],
  "factsHeading": "The numbers that make these problems worth fixing.",
  "factsLede": "From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.",
  "factsNote": "The IBEF page gives two different figures for India's share of global chemical sales, so only its GDP share and rank are used here. The QCO and waste-form details come from trade-news and consultancy sites, not the Gazette or rule text; confirm each with the regulator or your consultant. The 43B(h) summary is from a consultancy blog.",
  "facts": [
    {
      "figure": "7%",
      "text": "of India's GDP comes from the chemicals sector, which IBEF values at about US$ 250 billion in 2024 and ranks sixth-largest chemical producer in the world.",
      "source": {
        "name": "IBEF, Chemical industry in India, 2026",
        "url": "https://www.ibef.org/exports/chemical-industry-india.aspx"
      }
    },
    {
      "figure": "14",
      "text": "Bureau of Indian Standards Quality Control Orders on chemicals, petrochemicals and polymers were revoked by notifications of 12 November 2025, changing which products need a BIS licence.",
      "source": {
        "name": "Chemradar, India revokes 14 chemical QCOs, 2025",
        "url": "https://www.chemradar.com/en/service/detail/f5fv97h6hurk"
      }
    },
    {
      "figure": "30 June",
      "text": "is the date by which hazardous waste generators generally file the annual return on Form 4 with the State Pollution Control Board for the previous financial year.",
      "source": {
        "name": "Mynd Solution, Hazardous waste compliance in India",
        "url": "https://www.myndsolution.com/complete-guide-to-hazardous-waste-compliance-in-india-rules-authorisation-and-disposal-requirements/"
      }
    },
    {
      "figure": "45 days",
      "text": "is the longest period a buyer generally has to pay a micro or small enterprise seller before the amount is disallowed as a tax deduction, under section 43B(h) from 1 April 2024.",
      "source": {
        "name": "SetIndiaBiz, MSME 45 day payment rule, 2025",
        "url": "https://www.setindiabiz.com/blog/msme-45-day-payment-rule"
      }
    }
  ],
  "screensHeading": "The screens you would use every day.",
  "screensLede": "Five views, each built for one job. Names, columns and terms are set up in your plant's own language.",
  "screens": [
    {
      "id": "owner",
      "title": "Plant / Today",
      "meta": "Unit 2, Vapi",
      "heading": "The owner's morning view",
      "caption": "Yield, stock, compliance dates, dispatches and dues on one screen, with the items that need a decision listed under it. It replaces the evening round of calls to the supervisor and the accounts desk.",
      "blocks": [
        {
          "type": "kpis",
          "items": [
            {
              "label": "Batches closed",
              "value": "6",
              "note": "yesterday"
            },
            {
              "label": "Average yield",
              "value": "91.8%",
              "note": "standard 94%"
            },
            {
              "label": "Dispatched",
              "value": "18.4 t",
              "note": "7 consignments"
            },
            {
              "label": "Overdue dues",
              "value": "₹58.2 lakh",
              "note": "4 customers"
            }
          ]
        },
        {
          "type": "title",
          "text": "Margin per kg by product, from actual lot rates"
        },
        {
          "type": "bars",
          "items": [
            {
              "label": "Product A",
              "value": 78,
              "display": "₹14.2"
            },
            {
              "label": "Product B",
              "value": 52,
              "display": "₹9.6"
            },
            {
              "label": "Product C",
              "value": 31,
              "display": "₹5.7",
              "tone": "muted"
            },
            {
              "label": "Product D",
              "value": 20,
              "display": "₹3.8",
              "tone": "muted"
            }
          ]
        },
        {
          "type": "alert",
          "text": "Product C margin fell by ₹2.1 per kg after the last solvent purchase.",
          "action": "Review price"
        },
        {
          "type": "list",
          "items": [
            {
              "name": "Consent to operate renewal",
              "meta": "Due in 41 days, documents 3 of 8 ready",
              "tag": [
                "Prepare",
                "flag",
                "In progress",
                "ok"
              ]
            },
            {
              "name": "Reactor 2 gasket service",
              "meta": "Overdue by 5 days",
              "tag": [
                "Book",
                "late",
                "Booked",
                "ok"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "batches",
      "title": "Batches and lots",
      "meta": "Product A, last 7 days",
      "heading": "From lot to batch to certificate",
      "caption": "Each batch shows the raw material lots it used, yield, test results and release status. A complaint or a certificate pulls from the same record, so nothing is retyped.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Batch",
            "Lots used",
            "Yield",
            "Lab result",
            "Status"
          ],
          "rows": [
            [
              "A-2410-14",
              "S-882, M-310",
              "94.1%",
              "In range",
              [
                "Released",
                "ok"
              ]
            ],
            [
              "A-2410-15",
              "S-882, M-311",
              "90.2%",
              "In range",
              [
                "Low yield",
                "late",
                "Reviewed",
                "ok"
              ]
            ],
            [
              "A-2410-16",
              "S-903, M-311",
              "93.6%",
              "Pending",
              [
                "Hold",
                "flag",
                "Released",
                "ok"
              ]
            ],
            [
              "A-2410-17",
              "S-903, M-312",
              "92.8%",
              "Out of range",
              [
                "Re-test",
                "late",
                "Re-test passed",
                "ok"
              ]
            ]
          ]
        },
        {
          "type": "record",
          "title": "Complaint C-118 / Greenfield Coatings",
          "sub": "Colour variation on drum 12 of batch A-2410-15",
          "fields": [
            [
              "Batch",
              "A-2410-15"
            ],
            [
              "Raw lots",
              "S-882, M-311"
            ],
            [
              "Retained sample",
              "Shelf R3, slot 14"
            ],
            [
              "Dispatched",
              "7 Oct, 2.4 t"
            ],
            [
              "Status",
              [
                "Investigating",
                "late",
                "Closed, credit raised",
                "ok"
              ]
            ]
          ],
          "timeline": [
            [
              "12 Oct",
              "Complaint logged by sales"
            ],
            [
              "13 Oct",
              "Retained sample re-tested"
            ],
            [
              "14 Oct",
              "Lot M-311 flagged for supplier query"
            ],
            [
              "Note",
              "Four other batches used lot M-311"
            ]
          ]
        }
      ]
    },
    {
      "id": "safety",
      "title": "Safety and dispatch",
      "meta": "Today",
      "heading": "Safety sheets, storage and dispatch checks",
      "caption": "Current safety data sheet per product, what is stored where against your limits, who is cleared to work on which step, and the checks signed at the gate before a vehicle leaves.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Product",
            "SDS version",
            "Last review",
            "Next review",
            "Status"
          ],
          "rows": [
            [
              "Product A",
              "v4",
              "Mar 2026",
              "Mar 2027",
              [
                "Current",
                "ok"
              ]
            ],
            [
              "Product B",
              "v2",
              "Aug 2025",
              "Aug 2026",
              [
                "Overdue",
                "late",
                "Reviewed",
                "ok"
              ]
            ],
            [
              "Product C",
              "v3",
              "Jan 2026",
              "Jan 2027",
              [
                "Current",
                "ok"
              ]
            ],
            [
              "Product D",
              "v1",
              "Not recorded",
              "Now",
              [
                "Missing",
                "flag",
                "Added",
                "ok"
              ]
            ]
          ]
        },
        {
          "type": "checks",
          "items": [
            {
              "text": "Label and quantity match order",
              "meta": "Gate 2, Ramesh, 11:20",
              "done": true
            },
            {
              "text": "Current SDS and emergency card in cab",
              "meta": "Truck GJ 15 AB 4421",
              "done": true
            },
            {
              "text": "Driver details and vehicle papers recorded",
              "meta": "Pending",
              "done": false
            },
            {
              "text": "Dispatch released by shift in charge",
              "meta": "Pending",
              "done": false
            }
          ]
        },
        {
          "type": "table",
          "cols": [
            "Person",
            "Cleared for",
            "PPE issued",
            "Induction",
            "Status"
          ],
          "rows": [
            [
              "Sunil K.",
              "Reactor 1, 2",
              "Mar 2026",
              "Done",
              [
                "Cleared",
                "ok"
              ]
            ],
            [
              "Imran S.",
              "Stores, drum filling",
              "Sep 2026",
              "Done",
              [
                "Cleared",
                "ok"
              ]
            ],
            [
              "Dinesh P.",
              "Reactor 2",
              "Not issued",
              "Week 2 of 3",
              [
                "Not cleared",
                "late",
                "Training booked",
                "info"
              ]
            ]
          ]
        }
      ]
    },
    {
      "id": "plant",
      "title": "Plant and compliance",
      "meta": "Due in the next 90 days",
      "heading": "Effluent, waste, licences and equipment",
      "caption": "Every consent, authorisation and certificate has a date and a person. Daily effluent readings and each waste manifest are entered as they happen, so the annual return figures are already totalled.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Item",
            "Authority or vendor",
            "Due",
            "Owner",
            "Status"
          ],
          "rows": [
            [
              "Consent to operate",
              "State Pollution Control Board",
              "28 Nov",
              "Plant head",
              [
                "Due in 43 days",
                "flag",
                "Applied",
                "ok"
              ]
            ],
            [
              "Hazardous waste authorisation",
              "State Pollution Control Board",
              "15 Jan",
              "Plant head",
              [
                "OK",
                "ok"
              ]
            ],
            [
              "Boiler certificate",
              "Boiler inspector",
              "30 Oct",
              "Maintenance",
              [
                "Due this month",
                "late",
                "Booked 24 Oct",
                "ok"
              ]
            ],
            [
              "Reactor 2 gasket",
              "Vendor",
              "10 Oct",
              "Maintenance",
              [
                "Overdue",
                "late",
                "Done",
                "ok"
              ]
            ]
          ]
        },
        {
          "type": "kpis",
          "items": [
            {
              "label": "Effluent readings logged",
              "value": "26 of 28",
              "note": "this month"
            },
            {
              "label": "Waste sent out",
              "value": "3.2 t",
              "note": "4 manifests"
            },
            {
              "label": "Annual return",
              "value": "Ready",
              "note": "figures totalled"
            }
          ]
        },
        {
          "type": "alert",
          "text": "Two effluent readings missing on 8 and 9 October.",
          "action": "Assign"
        }
      ]
    },
    {
      "id": "orders",
      "title": "Orders and dues",
      "meta": "This week",
      "heading": "Orders, plant capacity and who owes what",
      "caption": "Each order shows quantity, raw material available, reactor slot and promised date. Beside it, invoices by age, with the person who owns each customer and the next step.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Order",
            "Customer",
            "Qty",
            "Stock check",
            "Promise"
          ],
          "rows": [
            [
              "SO-3302",
              "Greenfield Coatings",
              "8 t",
              "Short 1.5 t",
              [
                "Date at risk",
                "late",
                "Raw lot due Wed",
                "ok"
              ]
            ],
            [
              "SO-3305",
              "Shah Dye Works",
              "4 t",
              "Available",
              [
                "Fri 24 Oct",
                "ok"
              ]
            ],
            [
              "SO-3307",
              "Pinnacle Polymers",
              "12 t",
              "Available",
              [
                "Reactor clash",
                "flag",
                "Moved to Mon",
                "ok"
              ]
            ]
          ]
        },
        {
          "type": "table",
          "cols": [
            "Customer",
            "Owed",
            "Age",
            "Owner",
            "Next step"
          ],
          "rows": [
            [
              "Shah Dye Works",
              "₹14.6 lakh",
              "94 days",
              "Meera",
              [
                "Call due",
                "late",
                "Promised 20 Oct",
                "info"
              ]
            ],
            [
              "Kanti Industries",
              "₹21.0 lakh",
              "71 days",
              "Meera",
              [
                "Reminder",
                "flag"
              ]
            ],
            [
              "Greenfield Coatings",
              "₹9.4 lakh",
              "48 days",
              "Arvind",
              [
                "On track",
                "ok"
              ]
            ]
          ]
        }
      ]
    }
  ],
  "dayHeading": "The same Wednesday, before and after.",
  "dayLede": "What changes is not the chemistry. It is that every step leaves a record, and the record does the chasing.",
  "day": [
    {
      "time": "7:30",
      "before": "The plant head walks the floor and asks each supervisor what ran overnight. Yield is known by feel.",
      "after": "The Today screen shows last night's batches, one low yield with the lot used, and two tasks assigned."
    },
    {
      "time": "10:00",
      "before": "A customer calls about a drum from last month. The lot and batch take an hour to find.",
      "after": "The batch opens in a minute with its lots, results and retained sample shelf, and the complaint is already linked."
    },
    {
      "time": "12:30",
      "before": "Dispatch checks are by memory. The driver is waiting.",
      "after": "The gate checklist is signed step by step, with the current safety sheet recorded as sent."
    },
    {
      "time": "3:00",
      "before": "Sales promises a date for 8 tonnes without knowing if the raw material is in.",
      "after": "The order shows a shortfall and the lot due Wednesday, so the date is set from facts."
    },
    {
      "time": "5:30",
      "before": "Effluent and waste entries are filled from memory on Friday.",
      "after": "Readings were entered during the day, and two missing ones were flagged and assigned."
    },
    {
      "time": "Month end",
      "before": "The accountant asks for dispatches and dues. Numbers are rebuilt from three files.",
      "after": "Dispatches, invoices and dues already tie to the same records."
    }
  ],
  "approach": {
    "heading": "We set it up with you, in four weeks.",
    "lede": "You do not get a login and a manual. We spend time at the weighbridge, the lab and the dispatch gate, build Verity around how your plant really runs, bring your data in, then stay to make sure it keeps working.",
    "phases": [
      {
        "when": "Week 1",
        "name": "Discovery and mapping",
        "we": "Spend a shift in your plant. Follow a lot from receipt to a finished batch to a loaded truck, and note where records are made and where they are lost.",
        "you": "Two to three hours of yours and your plant head's. Access to a few batch sheets, a month of dispatches and the compliance calendar.",
        "get": "A written map of your plant: products, recipes, lots, storage areas, licences, and the first gaps we will close."
      },
      {
        "when": "Weeks 2 to 3",
        "name": "Configuration",
        "we": "Set up products and recipes, yield ranges, lot and batch numbering, storage limits, dispatch checklists, licence and consent dates, equipment and the five screens, in your own terms.",
        "you": "Check the setup with the lab head and the stores in charge. Tell us where a range or a rule is wrong.",
        "get": "A working Verity with your real products, rules and people, ready for your data."
      },
      {
        "when": "Weeks 3 to 4",
        "name": "Migration and training",
        "we": "Bring in your customers, products, stock, licence dates and open dues from your sheets and accounts export. Train stores, the lab, the gate and the accounts desk at their own stations.",
        "you": "An opening stock count by lot, the open dues list and the licence copies. One hour with each role.",
        "get": "Your plant's data inside Verity and a team that has used it through a real batch and dispatch."
      },
      {
        "when": "After go-live",
        "name": "Operations partnership",
        "we": "Stay on after launch. Review the first weeks of yields and dues with you, tune limits, and change setup when you add a product, a reactor or a storage area.",
        "you": "A short monthly review of what the numbers say.",
        "get": "A system that keeps matching how the plant runs, with someone responsible for it."
      }
    ],
    "bring": [
      "Your product list with recipes and yield ranges",
      "A month of batch sheets and lab results",
      "Your stores or lot register",
      "The list of licences, consents and certificates with expiry dates",
      "Your open dues list and a month of dispatch notes"
    ],
    "time": "About 9 to 12 hours of your own time across the four weeks, mostly in week 1. The lab head, stores in charge and accounts person need a few more.",
    "after": "Nobody is hired to run Verity. Lots, batches and dispatches are recorded as part of work the plant already does, and the reports come from those records."
  },
  "ai": {
    "heading": "Ask your plant a question. Get an answer, not a report to build.",
    "lede": "Verity AI reads your own batches, lots, dispatches and dues. Ask in plain language, then turn the answer into tasks for the right people.",
    "examples": [
      {
        "q": "Which batches used lot M-311 and where did they go?",
        "a": "Five batches used it. Four have shipped to three customers. One is on hold in the warehouse.",
        "rows": [
          [
            "Shipped batches",
            "4"
          ],
          [
            "Customers",
            "3"
          ],
          [
            "On hold",
            "1"
          ],
          [
            "Tonnes affected",
            "9.6"
          ]
        ],
        "action": "Create a hold and a call task for each customer"
      },
      {
        "q": "Why was Product A yield low this month?",
        "a": "Most of the loss is on night shift on Reactor 2. Six batches ran about 3 points below standard.",
        "rows": [
          [
            "Reactor 2 night shift",
            "6 batches"
          ],
          [
            "Reactor 1",
            "1 batch"
          ],
          [
            "Day shift",
            "within range"
          ]
        ]
      },
      {
        "q": "Which licences and certificates fall due before December?",
        "a": "Four items. The consent to operate is the closest, and its documents are three of eight ready.",
        "action": "Assign the missing documents to the plant head"
      }
    ]
  },
  "automationHeading": "The follow-ups nobody has time to make.",
  "automationLede": "Set once, then they run from your records. Staff still call customers and suppliers; Verity makes sure the right person knows what to do.",
  "automations": [
    {
      "when": "A batch closes outside the yield or lab range",
      "then": [
        "Batch held from release",
        "Task to the lab head with the lots used",
        "Decision recorded on the batch"
      ]
    },
    {
      "when": "A raw material lot is flagged by a complaint",
      "then": [
        "Every batch that used the lot is listed",
        "Unshipped batches placed on hold",
        "Task to sales for each affected customer"
      ]
    },
    {
      "when": "A product's safety data sheet reaches its review date",
      "then": [
        "Task to the safety officer",
        "Previous version kept with the record",
        "New version required before the next dispatch"
      ]
    },
    {
      "when": "A dispatch is created for a hazardous product",
      "then": [
        "Gate checklist created for that product class",
        "Dispatch cannot close until it is signed",
        "Sign-off time and person recorded"
      ]
    },
    {
      "when": "A consent, authorisation or certificate is 60 days from expiry",
      "then": [
        "Renewal task to the named owner",
        "Documents needed listed on the task",
        "Reminder to the plant head if not started in 15 days"
      ]
    },
    {
      "when": "An invoice passes its due date",
      "then": [
        "Added to the overdue list by customer and age",
        "Follow-up task to the relationship owner",
        "Outcome recorded: promised, paid or disputed"
      ]
    }
  ],
  "rules": {
    "heading": "The rules a chemical plant has to keep up with.",
    "lede": "Verity does not give legal advice and does not file anything for you. It keeps the records these rules depend on in order, so you are not hunting for them when someone asks.",
    "note": "Rules change and differ by state, product and plant size. Confirm current requirements with your consultant or the relevant authority.",
    "items": [
      {
        "name": "Hazardous chemicals rules and safety data sheets",
        "what": "The Manufacture, Storage and Import of Hazardous Chemicals Rules, 1989, made under the Environment (Protection) Act, generally cover the hazardous chemicals you make, store or import, including hazard communication through safety data sheets and labels. Importers also have notification and record duties. Check which of your products are covered.",
        "how": "Each product holds its current safety data sheet, version and review date. Storage areas, labels and dispatch checks are records tied to the product.",
        "source": {
          "name": "Maven Regulatory, MSIHC Rules guide",
          "url": "https://www.mavenrs.com/blog/msihc-rules-india-hazardous-chemical-management-compliance-guide"
        }
      },
      {
        "name": "Hazardous waste authorisation, manifests and annual return",
        "what": "The Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016, generally require authorisation from the State Pollution Control Board, a manifest for waste moved out, records of waste handled, and an annual return on Form 4 by 30 June for the previous year.",
        "how": "Waste generated and each manifest are recorded as they happen and totalled by month and year, so the return figures are on screen.",
        "source": {
          "name": "Mynd Solution",
          "url": "https://www.myndsolution.com/complete-guide-to-hazardous-waste-compliance-in-india-rules-authorisation-and-disposal-requirements/"
        }
      },
      {
        "name": "Consent to establish and operate, and effluent conditions",
        "what": "A chemical unit generally needs consent from the State Pollution Control Board, is placed in a pollution category, and must meet the conditions written in its consent, such as effluent limits. Consents are for a fixed term and are renewed.",
        "how": "The consent is a record with its conditions, expiry and owner. Daily effluent readings and equipment checks sit beside it, and renewal becomes a task weeks ahead."
      },
      {
        "name": "BIS quality control orders",
        "what": "Some chemicals and polymers had mandatory BIS certification under Quality Control Orders, and 14 such orders were revoked by notifications of 12 November 2025, with further changes reported. Whether your product is covered depends on the current list.",
        "how": "Each product records whether a BIS licence applies, its number and its renewal date, and the list is reviewed when notifications change.",
        "source": {
          "name": "Chemradar",
          "url": "https://www.chemradar.com/en/service/detail/f5fv97h6hurk"
        }
      },
      {
        "name": "Payment terms for micro and small suppliers",
        "what": "From 1 April 2024, a buyer that owes a micro or small enterprise generally must pay within the agreed period, capped at 45 days, or the amount is not deductible until paid. This matters when you buy from small suppliers, and when your own customers are small.",
        "how": "Supplier bills show a due date against the 45 day limit, so payments are planned before they become a tax cost.",
        "source": {
          "name": "SetIndiaBiz",
          "url": "https://www.setindiabiz.com/blog/msme-45-day-payment-rule"
        }
      }
    ]
  },
  "rolesHeading": "Everyone sees the same records, through their own window.",
  "rolesLede": "An operator should not see customer margins. Sales should not edit a batch result. Each role opens on what it needs.",
  "roles": [
    {
      "role": "Owner",
      "question": "Is the plant making money, and what is at risk?",
      "sees": "Yield, margin per product, overdue dues, licence dates and every unit side by side."
    },
    {
      "role": "Plant head",
      "question": "What ran, what stopped and what is due?",
      "sees": "Batches closed, yield flags, equipment tasks, permits and compliance dates."
    },
    {
      "role": "Lab head",
      "question": "What is released, held or under investigation?",
      "sees": "Batch results, retained samples, complaints and certificate status."
    },
    {
      "role": "Stores and dispatch",
      "question": "What came in, what is going out and is it cleared?",
      "sees": "Lots received, storage limits, dispatch checklists and the current safety sheet."
    },
    {
      "role": "Accounts",
      "question": "What was bought, sold and owed?",
      "sees": "Invoices tied to dispatches, overdue dues by customer and supplier bills with due dates."
    }
  ],
  "alongside": {
    "heading": "What changes, and what stays the same.",
    "keep": [
      "Your accounts software. We agree during setup how invoices and payments reach Verity.",
      "Your lab instruments and their own reports. We record the results against the batch.",
      "Your safety and environment consultant, who still prepares and files what the authorities need.",
      "WhatsApp and phone with customers and transporters. Staff talk",
      "Verity tracks who owes a reply."
    ],
    "not": [
      "Run your process control or reactor automation.",
      "File consents, returns or manifests with the authorities.",
      "Give legal, safety or technical advice.",
      "Send messages to customers or suppliers on its own."
    ],
    "migration": "We bring your products, customers, stock by lot, licence dates and open dues across from the sheets, registers and accounts export you use now, in stages, so production keeps running while it happens."
  },
  "faqHeading": "Questions plant owners ask.",
  "faqs": [
    [
      "My operators are not computer people. Will they really record lots and batches?",
      "Only if it takes seconds at the point of work, so we set up entry at the stores window, the reactor and the gate, with a few fields each. We train during a real batch and start with the records that matter most."
    ],
    [
      "Can Verity trace a raw material lot to the customers who received it?",
      "Yes, if lots are recorded at receipt and issued to batches, and batches are linked to dispatches. Verity then shows the chain both ways. It is only as complete as the records made."
    ],
    [
      "Does it replace my accounts software?",
      "No. Your accounts stay where they are. We agree during setup how invoices and payments reach Verity, which then handles lots, batches, dispatches, compliance dates and dues."
    ],
    [
      "Does it file my returns and manifests?",
      "No. It keeps the figures and dates in order and tells the right person what is due. Your consultant or your team still files with the authority."
    ],
    [
      "I make many small products in a few reactors. Will it cope?",
      "Yes. Each product has its own recipe and range, and each batch records the reactor used. Planning shows reactor slots against orders."
    ],
    [
      "Can it hold safety data sheets for every product?",
      "It holds each sheet as a record with version and review date, and records that it was sent with a dispatch. It does not write the sheet for you."
    ],
    [
      "I have two plants. Can I see them together?",
      "Yes. Each is a location in one system, with yield, stock, compliance dates and dues side by side, and customers are the same across both."
    ],
    [
      "Who can see my data?",
      "Only the people you allow. Access is set by role, so operators, the lab, sales and accounts each see what they need, and every change is recorded with who made it and when."
    ],
    [
      "How quickly will I see something useful?",
      "The licence calendar, overdue dues and stock by lot need only your existing data, so we aim to have them first. Yield and margin patterns become reliable after a few weeks of recorded batches."
    ],
    [
      "What does it cost?",
      "It depends on the number of plants, people and what you want set up. Message us and we will give you a clear number after a short conversation about how your plant runs."
    ]
  ],
  "related": [
    "manufacturers",
    "pharmaceutical-manufacturers",
    "industrial-suppliers",
    "distributors",
    "packaging-companies",
    "exporters"
  ],
  "ctaHeading": "Start with the lot you cannot trace.",
  "ctaLede": "Tell us how your plant runs and we will show you the lot-to-batch trace, the licence calendar and the overdue dues it would find, using your own numbers."
};
