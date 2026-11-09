export default {
  "schema": 2,
  "slug": "importers",
  "status": "published",
  "plural": "importers",
  "subject": "import business",
  "checked": "16 October 2026",
  "seo": {
    "title": "Importer software for Indian trading companies | Verity",
    "description": "Shipment tracking, customs papers and duty, supplier advances and true landed cost: the leaks in an import business and the Verity screens that fix them.",
    "keywords": [
      "importer management software India",
      "shipment tracking and customs documents",
      "landed cost calculation",
      "supplier advance payment tracking",
      "demurrage and free days tracking"
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
    "schedule",
    "locations",
    "ai"
  ],
  "hero": {
    "eyebrow": "Verity for importers",
    "headline": "An importer pays for goods twice: once to the supplier, and again in every day they spend stuck between ship and shelf.",
    "lede": "An import deal is made of many small dates and documents: the advance, the bill of lading, the Bill of Entry, the duty, the free days, the truck to the warehouse. A missed date turns into demurrage. A wrong cost turns into a thin margin you only discover after selling. Verity ties the supplier, the shipment, the papers, the duty and the stock to one record, so you can see the true landed cost and the next deadline for every container.",
    "oneLine": "One system that knows every supplier advance, every container, every document and every rupee of landed cost.",
    "note": "Built for a small team where one person holds the shipments in their head. The records come from the documents and messages your team already handles.",
    "screen": "owner",
    "screenNote": "shipments, duty, advances, landed cost and dues"
  },
  "today": {
    "heading": "Most importers run on one trusted person, a lot of email and a customs broker.",
    "paragraphs": [
      "The deal starts with a proforma invoice and an advance. The goods ship. The supplier emails the documents. The broker files the Bill of Entry and sends a duty figure. The shipping line sends arrival notices. The goods reach the warehouse, and the real cost is worked out later, if at all.",
      "The facts that matter sit in different places: the payment in the bank advice, the documents in an email thread, the duty in the broker's note, the free days in a shipping line message, the stock in a warehouse sheet.",
      "Rules add dates. Import payments to overseas suppliers are generally expected to be completed within a set period of the shipment. Customs has its own forms and, from 2026, new options such as monthly deferred duty payment for eligible importers. Someone has to know which applies to which shipment."
    ],
    "stack": [
      "Email threads with suppliers and brokers",
      "Excel for shipments, costs and dues",
      "Bank advices and remittance records",
      "Accounts software",
      "WhatsApp with brokers, transporters and the warehouse"
    ],
    "stackNote": "Each tool is used well. The shipment, its cost and its deadlines are in none of them as one record."
  },
  "painsHeading": "Where an import business actually loses money.",
  "painsLede": "These are the situations importers and their finance heads describe again and again. For each: what it looks like on an ordinary day, what it costs, and what Verity does about it.",
  "pains": [
    {
      "area": "Shipments",
      "title": "Nobody knows where each container is",
      "scene": "Five containers are at sea, two are at port and one is on a truck. The tracking links are in five emails. A customer asks for a date and the answer takes an hour.",
      "cost": "Customers who cannot get a date place the order elsewhere, and the team spends its day answering where is my container.",
      "fix": "Each shipment is a record with supplier, order, vessel or flight, container, expected dates and status. Verity shows all shipments by stage on one board, with the date each one needs a decision.",
      "screen": "shipments",
      "root": "Shipment status is held by the freight forwarder, the clearing agent and the supplier, and the importer asks each one separately.",
      "workaround": "Phone calls and messages to the forwarder, and a spreadsheet of containers kept by one person.",
      "options": [
        "Rely on the forwarder's portal, which shows only their view",
        "A shared tracker sheet",
        "Each shipment as a record with supplier, order, vessel or flight, container, expected dates and status, all shown by stage on one board"
      ],
      "pick": "One board answers where the goods are without a phone call.",
      "needs": "Order and shipping details from the supplier and forwarder, as you receive them."
    },
    {
      "area": "Documents",
      "title": "A document is missing or wrong and the container waits",
      "scene": "The bill of lading says one consignee name, the invoice another. The packing list quantity differs by a carton. The broker holds the filing until the supplier corrects it.",
      "cost": "Every day of correction can be a day of port charges, with a customer waiting for the stock.",
      "fix": "Each shipment has a document checklist: invoice, packing list, bill of lading, certificates and others needed for the product. Verity compares key fields across them, lists mismatches and assigns the correction to the person who owns the supplier.",
      "screen": "shipments",
      "root": "Documents are made by different parties and checked against each other late, usually by the clearing agent.",
      "workaround": "The clearing agent flags a mismatch when the documents arrive at the port.",
      "options": [
        "Check documents by hand when they arrive",
        "Ask the supplier to send drafts first",
        "A document checklist per shipment, with key fields compared across invoice, packing list and bill of lading"
      ],
      "pick": "A mismatch is found when it can still be corrected by the supplier.",
      "needs": "The document list for each product and the key fields to compare."
    },
    {
      "area": "Port charges",
      "title": "Free days run out and demurrage starts",
      "scene": "The vessel arrives early. The free time at the port is short. The Bill of Entry was not filed because a certificate was late, and charges start.",
      "cost": "Demurrage is charged per container per day after free time. Example arithmetic: ₹5,000 a day on 4 containers for 6 days is ₹1.2 lakh, a cost that did not need to exist.",
      "fix": "Each container shows its free time end and the steps still pending to clear it. Verity lists containers by days left and creates tasks for the broker, the transporter and the warehouse. Staff chase; the dates are visible to all.",
      "screen": "shipments",
      "source": {
        "name": "Cogoport, Demurrage and detention, 2026",
        "url": "https://www.cogoport.com/blogs/demurrage-detention-how-to-avoid-charges"
      },
      "root": "The free time on a container is a date in the shipping line's notice, and no one in the importer's office owns it.",
      "workaround": "The clearing agent tells the importer when charges are about to start.",
      "options": [
        "Ask the agent to track every day",
        "A reminder in a calendar",
        "Each container showing its free time end and the steps pending to clear it, listed by days left with tasks for broker, transporter and warehouse"
      ],
      "pick": "Demurrage is avoided or at least a decision made in time.",
      "needs": "Free time per container and the clearance steps in your process."
    },
    {
      "area": "Port charges",
      "title": "The container is out of the port but not back",
      "scene": "The goods were delivered to the warehouse. The empty container sits at the factory for a week because nobody was assigned to return it.",
      "cost": "Detention is charged for holding the carrier's container past free time outside the port, separately from demurrage.",
      "fix": "Each container has a return task with a due date and an owner, raised when it leaves the port. Verity shows containers still out and the days left.",
      "screen": "shipments",
      "source": {
        "name": "Cogoport, 2026",
        "url": "https://www.cogoport.com/blogs/demurrage-detention-how-to-avoid-charges"
      },
      "root": "The empty container must be returned by a date, and once the goods are in the warehouse, no one is watching the date.",
      "workaround": "The transporter is asked when it is convenient.",
      "options": [
        "Leave it to the transporter",
        "A reminder on the calendar",
        "A return task with due date and owner raised when the container leaves the port, with containers still out and days left shown"
      ],
      "pick": "Detention is avoided by a visible task.",
      "needs": "Return dates and the transporter who will return the container."
    },
    {
      "area": "Costing",
      "title": "The real landed cost is known only after the goods are sold",
      "scene": "The price list was set from the supplier's invoice and a rough duty. Freight, insurance, port charges, clearing fees, transport and exchange rate moved. Margin is checked quarterly.",
      "cost": "Example arithmetic: a ₹100 invoice value that becomes ₹138 landed, quoted at ₹135, loses money on every unit.",
      "fix": "Each shipment collects every cost line: goods, freight, insurance, duty, port charges, clearing and transport at the actual exchange rate. Verity spreads it across the items and shows landed cost per unit and margin at today's price list.",
      "screen": "landed",
      "root": "Cost lines come from many bills over weeks, and the product cost is not calculated until the last one arrives.",
      "workaround": "A rough landed cost based on the last shipment of the same product.",
      "options": [
        "Add a fixed percent to the purchase price",
        "Calculate at the end of the quarter",
        "Each shipment collecting every cost line at the actual exchange rate and spreading it across items to give a landed cost per unit"
      ],
      "pick": "The selling price is set from the real cost.",
      "needs": "Bills for freight, insurance, duty, port charges, clearing and transport."
    },
    {
      "area": "Customs and duty",
      "title": "Duty is paid without a clear view of what was assessed",
      "scene": "The broker sends one duty amount for the Bill of Entry. Nobody checks it against the classification used last time. A later notice asks for more.",
      "cost": "Wrong classification or valuation can lead to retrospective duty demands, interest and penalties. Customs law now calls a voluntary settlement of short-paid duty a charge for non-payment of duty, equal to the earlier reduced 15 percent levy.",
      "fix": "Each item records its classification, the rate and the duty assessed on past Bills of Entry. Verity compares a new shipment with earlier ones and flags a changed rate or value for the owner to ask the broker about. Any advance ruling is stored with its validity.",
      "screen": "landed",
      "source": {
        "name": "ICAI, Union Budget 2026: Transformative Amendments in Customs Law, 2026",
        "url": "https://cajournal.icai.org/article-details/union-budget-2026-transformative-amendments-in-customs-law"
      },
      "root": "Classification and duty are decided by the clearing agent and not recorded in a way the importer can compare with the past.",
      "workaround": "The importer asks the agent what was paid and files the Bill of Entry.",
      "options": [
        "Trust the agent entirely",
        "Keep copies of every Bill of Entry in a folder",
        "Each item recording its classification, rate and duty assessed on past Bills of Entry, with a new shipment compared against earlier ones and unusual changes flagged"
      ],
      "pick": "The importer can raise a question before paying or after assessment. Confirm classification with your customs adviser.",
      "needs": "Past Bills of Entry and the items imported."
    },
    {
      "area": "Money",
      "title": "Duty cash goes out earlier than it needs to",
      "scene": "Duty is paid shipment by shipment at clearance. For eligible importers, the deferred payment facility has widened, but nobody has checked whether it fits this business.",
      "cost": "Duty paid early is cash tied up. Example arithmetic: ₹40 lakh of duty paid a month early at 12 percent a year costs about ₹40,000.",
      "fix": "Duty due on each Bill of Entry sits on a calendar, showing the payment route and due date. Verity totals what is due by month so the finance head can plan cash and see when a monthly payment falls.",
      "screen": "owner",
      "source": {
        "name": "ICAI, Union Budget 2026: Transformative Amendments in Customs Law, 2026",
        "url": "https://cajournal.icai.org/article-details/union-budget-2026-transformative-amendments-in-customs-law"
      },
      "root": "Duty payment dates are scattered across Bills of Entry, and the finance head sees the cash outflow when it arrives.",
      "workaround": "The accountant asks the clearing agent how much is due this week.",
      "options": [
        "Pay at assessment each time",
        "A monthly estimate",
        "Duty due on each Bill of Entry on a calendar with payment route and due date, totalled by month"
      ],
      "pick": "The finance head plans cash around known dates.",
      "needs": "Duty amounts and due dates from the Bills of Entry."
    },
    {
      "area": "Suppliers",
      "title": "Supplier advances are paid and then forgotten",
      "scene": "A 30 percent advance goes out for an order. Production at the supplier slips. Three months later the goods are late and nobody remembers the terms agreed.",
      "cost": "An advance with no delivery is a loan to a supplier with little recourse. Recovery from an overseas supplier is hard.",
      "fix": "Each order records the advance, the date, the agreed shipping date and the refund terms. Verity lists advances by age and orders overdue to ship, and creates a follow-up task for the person who owns that supplier.",
      "screen": "suppliers",
      "root": "Advances to suppliers are paid to secure the order, and the shipping date and refund terms are recorded in an email.",
      "workaround": "The purchase head remembers which suppliers owe shipments.",
      "options": [
        "Avoid advances, which limits supply options",
        "A sheet of advances",
        "Each order recording advance, date, agreed shipping date and refund terms, listed by age and overdue shipments"
      ],
      "pick": "Money paid to suppliers is chased by name and date.",
      "needs": "Orders with advances and agreed terms."
    },
    {
      "area": "Money",
      "title": "Overseas payment dates and bank records do not match the shipments",
      "scene": "The bank remits against an invoice. The Bill of Entry is filed later. Which remittance covers which entry is only worked out when the bank asks.",
      "cost": "Import payments are generally expected to be completed within six months of shipment, with extensions only through the bank. A mismatch means bank queries and a scramble to find documents.",
      "fix": "Each remittance is linked to the order and shipment, with the shipment date and the Bill of Entry. Verity lists shipments with payments near the generally expected six month point, so the finance head acts early.",
      "screen": "suppliers",
      "root": "Overseas payments are made through the bank, and the link between the payment, the order and the shipment lives in separate records.",
      "workaround": "Accounts matches by hand at the end of the month.",
      "options": [
        "Match at year end",
        "Ask the bank to supply a list",
        "Each remittance linked to the order and shipment, with shipment date and Bill of Entry, and shipments with payments near the generally applicable time limits listed. Confirm limits with your bank or adviser."
      ],
      "pick": "Matching is done as the payment is made.",
      "needs": "Remittance details and the shipments they relate to."
    },
    {
      "area": "Money",
      "title": "Exchange rate moves between the order and the payment",
      "scene": "An order is priced in dollars when the rupee is at one level. By payment, it has moved. The finance head learns the gain or loss from the bank statement.",
      "cost": "A rupee move of 2 to 3 percent on a large order can be larger than the whole margin.",
      "fix": "Each order records its currency, amount, rate at order and the rate at payment. Verity shows exposure across open orders and the cost effect at today's rate. Verity does not hedge or buy currency.",
      "screen": "landed",
      "root": "The exchange rate at order, at shipment and at payment are different, and nobody tracks the gap.",
      "workaround": "The owner compares rates occasionally and hopes.",
      "options": [
        "Always buy forward, which has a cost",
        "Add a safety margin on prices",
        "Each order recording currency, amount, rate at order and rate at payment, with exposure across open orders and the effect at today's rate"
      ],
      "pick": "The owner sees the exposure and decides when to cover.",
      "needs": "Order currency, amounts and the rates you use."
    },
    {
      "area": "Quality",
      "title": "Quality problems show up after the goods arrive",
      "scene": "A batch of imported goods is found defective at the warehouse. The inspection report was a photo on WhatsApp. The supplier disputes the claim.",
      "cost": "A claim without a record trail is a claim you lose, and the stock sits unsold.",
      "fix": "Inspection reports, photos and claims are records on the shipment and supplier. Verity shows the claim, the documents and the supplier's reply, and tracks the credit or replacement through to settlement.",
      "screen": "suppliers",
      "root": "Quality is checked when goods arrive, but the supplier, the claim and the proof are in separate emails.",
      "workaround": "The importer sends photos to the supplier by message and follows up by phone.",
      "options": [
        "Inspect before shipment, which adds cost",
        "Accept a discount",
        "Inspection reports, photos and claims as records on the shipment and supplier, with the claim, the documents and the supplier's reply tracked"
      ],
      "pick": "Claims are made with evidence, and bad suppliers are visible.",
      "needs": "Inspection reports and photos."
    },
    {
      "area": "Stock",
      "title": "Stock arrives and sales does not know what is available",
      "scene": "A container is cleared, but the warehouse sheet is not updated for two days. Sales quotes the same item as out of stock.",
      "cost": "A lost sale for stock that was sitting in the warehouse.",
      "fix": "Receipt at the warehouse updates stock against the shipment and landed cost. Sales sees what is cleared, what is in transit, and what is reserved for orders.",
      "screen": "dues",
      "root": "Stock in transit, cleared stock and reserved stock are different, and sales sees only what the warehouse says.",
      "workaround": "Sales calls the warehouse for each customer enquiry.",
      "options": [
        "Sell only what is in the warehouse",
        "A shared stock sheet",
        "Receipt at the warehouse updating stock against the shipment and landed cost, with sales seeing cleared, in transit and reserved stock"
      ],
      "pick": "Sales sells what is really available.",
      "needs": "Warehouse receipts and reservations."
    },
    {
      "area": "Money",
      "title": "Customers pay late while suppliers are paid on time",
      "scene": "The importer pays the overseas supplier on the due date and carries customers on 60 to 90 days.",
      "cost": "Example arithmetic: ₹1.2 crore outstanding beyond 60 days financed at 11 percent a year costs about ₹1.1 lakh a month in interest.",
      "fix": "Invoices are tracked against due date and customer's usual payment days. Verity lists overdue amounts by customer and age with the person who owns the relationship, and creates follow-up tasks. Staff make the call.",
      "screen": "dues",
      "root": "Suppliers must be paid on time but customers pay slowly, and neither list is seen together.",
      "workaround": "The owner tells accounts which customer to call.",
      "options": [
        "Advance payments from customers, which limits sales",
        "A ledger sheet",
        "Invoices tracked against due date and the customer's usual payment days, overdue by customer and age with an owner"
      ],
      "pick": "Cash needs are visible before the supplier payment date.",
      "needs": "Invoices, customer terms and payments."
    },
    {
      "area": "Owner",
      "title": "The owner sees profit only after the goods are sold",
      "scene": "The owner asks which shipments are still open, which are making money and what cash is tied up in transit. Each answer needs a different person.",
      "cost": "Decisions about what to order next run on feel.",
      "fix": "One morning screen with shipments by stage, free days left, advances outstanding, duty due, landed cost against price, and dues.",
      "screen": "owner",
      "root": "Profit is known only when the goods are sold and all costs are in, which is weeks after the decision to import.",
      "workaround": "The owner relies on feel for the product.",
      "options": [
        "A quarterly profit review",
        "Rely on the accountant's summary",
        "A morning screen of shipments by stage, free days left, advances, duty due, landed cost against price and dues"
      ],
      "pick": "Decisions about import are made on live numbers.",
      "needs": "Shipments, costs and selling prices."
    }
  ],
  "factsHeading": "The numbers that make these problems worth fixing.",
  "factsLede": "From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.",
  "factsNote": "The trade figure is provisional and from a secondary site quoting the Commerce Ministry. The customs changes are from a professional journal's summary of Budget 2026, so confirm each with your customs broker or the CBIC notification.",
  "facts": [
    {
      "figure": "US$ 774.98 billion",
      "text": "was India's merchandise import bill in FY26 (April 2025 to March 2026), up 7.46% on FY25, according to provisional Ministry of Commerce data.",
      "source": {
        "name": "Finnovate, citing Ministry of Commerce and Industry / DGFT, 2026",
        "url": "https://www.finnovate.in/learn/blog/india-fy26-trade-data-deficit-exports-imports"
      }
    },
    {
      "figure": "30 days",
      "text": "is the deferred payment period for import duty from 1 March 2026, doubled from 15 days, on a monthly cycle with duty due by the 1st of the next month, and extended to eligible manufacturer importers.",
      "source": {
        "name": "ICAI, The Chartered Accountant, Union Budget 2026, 2026",
        "url": "https://cajournal.icai.org/article-details/union-budget-2026-transformative-amendments-in-customs-law"
      }
    },
    {
      "figure": "15%",
      "text": "is the charge for non-payment of duty on voluntary settlement of short-paid or unpaid duty, which replaces the word penalty, with the amount equal to the earlier reduced levy.",
      "source": {
        "name": "ICAI, The Chartered Accountant, Union Budget 2026, 2026",
        "url": "https://cajournal.icai.org/article-details/union-budget-2026-transformative-amendments-in-customs-law"
      }
    },
    {
      "figure": "5 years",
      "text": "is the new validity of a customs advance ruling, extended from three years, under the Budget 2026 changes.",
      "source": {
        "name": "ICAI, The Chartered Accountant, Union Budget 2026, 2026",
        "url": "https://cajournal.icai.org/article-details/union-budget-2026-transformative-amendments-in-customs-law"
      }
    }
  ],
  "screensHeading": "The screens you would use every day.",
  "screensLede": "Five views, each built for one job. Names, columns and terms are set up in your import business's own language.",
  "screens": [
    {
      "id": "owner",
      "title": "Imports / Today",
      "meta": "Head office: Mumbai",
      "heading": "The owner's morning view",
      "caption": "Shipments by stage, free days left, advances out, duty due and customer dues on one screen, with the items that need a decision under it. It replaces the round of emails with the broker and the warehouse.",
      "blocks": [
        {
          "type": "kpis",
          "items": [
            {
              "label": "Shipments open",
              "value": "14",
              "note": "6 at sea, 3 at port"
            },
            {
              "label": "Free days under 3",
              "value": "2",
              "note": "containers"
            },
            {
              "label": "Advances out",
              "value": "₹86.4 lakh",
              "note": "5 suppliers"
            },
            {
              "label": "Overdue dues",
              "value": "₹1.1 crore",
              "note": "7 customers"
            }
          ]
        },
        {
          "type": "title",
          "text": "Landed cost against price list, per unit"
        },
        {
          "type": "bars",
          "items": [
            {
              "label": "Item A, price ₹212",
              "value": 84,
              "display": "Cost ₹178"
            },
            {
              "label": "Item B, price ₹95",
              "value": 78,
              "display": "Cost ₹74"
            },
            {
              "label": "Item C, price ₹140",
              "value": 96,
              "display": "Cost ₹135",
              "tone": "muted"
            },
            {
              "label": "Item D, price ₹60",
              "value": 100,
              "display": "Cost ₹63, below cost",
              "tone": "muted"
            }
          ]
        },
        {
          "type": "alert",
          "text": "Item D now costs ₹63 landed against a price list of ₹60.",
          "action": "Review price"
        },
        {
          "type": "list",
          "items": [
            {
              "name": "Duty due 1 Nov for 6 Bills of Entry",
              "meta": "₹22.8 lakh on the monthly route",
              "tag": [
                "Plan cash",
                "flag",
                "Scheduled",
                "ok"
              ]
            },
            {
              "name": "Container MSKU 4471 free time ends in 2 days",
              "meta": "Certificate pending from supplier",
              "tag": [
                "Chase",
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
      "id": "shipments",
      "title": "Shipments",
      "meta": "Open shipments",
      "heading": "Every container, document and free day",
      "caption": "Each shipment by stage with its document checklist, expected dates and free days left. A mismatch between documents is listed on the shipment with the person who owns the correction.",
      "blocks": [
        {
          "type": "board",
          "columns": [
            {
              "name": "At sea",
              "cards": [
                {
                  "title": "SH-0418 Guangzhou to Nhava Sheva",
                  "meta": "3 containers, ETA 24 Oct",
                  "tag": [
                    "Docs ok",
                    "ok"
                  ]
                },
                {
                  "title": "SH-0420 Hamburg to Chennai",
                  "meta": "1 container, ETA 29 Oct",
                  "tag": [
                    "Invoice mismatch",
                    "late",
                    "Corrected",
                    "ok"
                  ]
                }
              ]
            },
            {
              "name": "At port",
              "cards": [
                {
                  "title": "SH-0412 Shanghai to Nhava Sheva",
                  "meta": "2 containers, 2 free days left",
                  "tag": [
                    "Filing pending",
                    "late",
                    "BoE filed",
                    "ok"
                  ]
                }
              ]
            },
            {
              "name": "In transit to warehouse",
              "cards": [
                {
                  "title": "SH-0409 Jebel Ali to Mundra",
                  "meta": "1 container, truck dispatched",
                  "tag": [
                    "Return empty by 26 Oct",
                    "info"
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "checks",
          "items": [
            {
              "text": "Commercial invoice",
              "meta": "SH-0420, quantity differs by 40 cartons",
              "done": false
            },
            {
              "text": "Packing list",
              "meta": "SH-0420, received",
              "done": true
            },
            {
              "text": "Bill of lading",
              "meta": "SH-0420, consignee name check",
              "done": false
            },
            {
              "text": "Certificate of origin",
              "meta": "SH-0412, pending from supplier",
              "done": false
            }
          ]
        }
      ]
    },
    {
      "id": "landed",
      "title": "Landed cost",
      "meta": "Shipment SH-0412",
      "heading": "Landed cost, duty and exchange rate",
      "caption": "Every cost line on a shipment, spread across the items at the actual exchange rate. Duty assessed is shown beside earlier shipments of the same item.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Cost line",
            "Amount",
            "Per unit",
            "Note"
          ],
          "rows": [
            [
              "Goods (USD 48,200 at 84.20)",
              "₹40.6 lakh",
              "₹165",
              "Order rate 83.4"
            ],
            [
              "Freight and insurance",
              "₹3.2 lakh",
              "₹13",
              [
                "+9% vs last",
                "flag"
              ]
            ],
            [
              "Customs duty and charges",
              "₹8.1 lakh",
              "₹33",
              [
                "Rate changed",
                "late",
                "Confirmed with broker",
                "ok"
              ]
            ],
            [
              "Port, clearing, transport",
              "₹2.4 lakh",
              "₹10",
              "As quoted"
            ]
          ]
        },
        {
          "type": "kpis",
          "items": [
            {
              "label": "Landed cost",
              "value": "₹221 / unit",
              "note": "was ₹213 last shipment"
            },
            {
              "label": "Price list",
              "value": "₹235 / unit",
              "note": "margin 6%"
            },
            {
              "label": "Exchange gain or loss",
              "value": "-₹32,000",
              "note": "order rate vs payment"
            }
          ]
        },
        {
          "type": "alert",
          "text": "Duty rate for Item A changed from the last Bill of Entry. Ask the broker why.",
          "action": "Assign"
        }
      ]
    },
    {
      "id": "suppliers",
      "title": "Suppliers and payments",
      "meta": "Open orders",
      "heading": "Orders, advances and claims",
      "caption": "Each order with its advance, shipping date, payment due and any claim. Payments are linked to shipments, so the bank trail is clear.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Supplier",
            "Order",
            "Advance",
            "Shipping date",
            "Status"
          ],
          "rows": [
            [
              "Guangdong Trade Co",
              "PO-901",
              "₹18.2 lakh",
              "30 Sep",
              [
                "Late 16 days",
                "late",
                "Booked 28 Oct",
                "info"
              ]
            ],
            [
              "Hamburg Parts GmbH",
              "PO-905",
              "₹9.6 lakh",
              "10 Oct",
              [
                "On time",
                "ok"
              ]
            ],
            [
              "Jebel Ali Wholesale",
              "PO-907",
              "None",
              "15 Oct",
              [
                "Shipped",
                "ok"
              ]
            ],
            [
              "Shanghai Plastics",
              "PO-910",
              "₹22.0 lakh",
              "20 Oct",
              [
                "Check",
                "flag"
              ]
            ]
          ]
        },
        {
          "type": "table",
          "cols": [
            "Shipment",
            "Shipped",
            "Paid so far",
            "Balance due",
            "Window"
          ],
          "rows": [
            [
              "SH-0412",
              "12 Sep",
              "₹36.5 lakh",
              "₹8.2 lakh",
              [
                "Payment 28 days left",
                "flag",
                "Paid",
                "ok"
              ]
            ],
            [
              "SH-0409",
              "30 Sep",
              "₹12.0 lakh",
              "None",
              [
                "Complete",
                "ok"
              ]
            ]
          ]
        },
        {
          "type": "record",
          "title": "Claim CL-14 / Shanghai Plastics",
          "sub": "Damaged goods in SH-0388",
          "fields": [
            [
              "Quantity",
              "380 units"
            ],
            [
              "Evidence",
              "6 photos, inspection report"
            ],
            [
              "Claim value",
              "₹2.1 lakh"
            ],
            [
              "Status",
              [
                "Awaiting reply",
                "late",
                "Credit agreed",
                "ok"
              ]
            ]
          ],
          "timeline": [
            [
              "3 Oct",
              "Goods inspected at warehouse"
            ],
            [
              "5 Oct",
              "Claim sent by account manager"
            ],
            [
              "12 Oct",
              "Reply promised in 7 days"
            ]
          ]
        }
      ]
    },
    {
      "id": "dues",
      "title": "Stock and dues",
      "meta": "This week",
      "heading": "Stock, customers and who owes what",
      "caption": "Cleared and in-transit stock against orders from customers, and customer dues by age with the person who owns each relationship.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Item",
            "Cleared",
            "In transit",
            "Reserved",
            "Status"
          ],
          "rows": [
            [
              "Item A",
              "1,200",
              "3,000",
              "900",
              [
                "OK",
                "ok"
              ]
            ],
            [
              "Item B",
              "180",
              "2,400",
              "600",
              [
                "Short",
                "late",
                "Booked from SH-0418",
                "ok"
              ]
            ],
            [
              "Item C",
              "2,500",
              "0",
              "400",
              [
                "OK",
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
              "Modern Hardware",
              "₹32.4 lakh",
              "88 days",
              "Sanjay",
              [
                "Call due",
                "late",
                "Promised 22 Oct",
                "info"
              ]
            ],
            [
              "Patel Traders",
              "₹18.9 lakh",
              "63 days",
              "Sanjay",
              [
                "Reminder",
                "flag"
              ]
            ],
            [
              "Kumar Distributors",
              "₹9.6 lakh",
              "31 days",
              "Rita",
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
  "dayHeading": "The same Thursday, before and after.",
  "dayLede": "What changes is not the shipping. It is that every shipment leaves one record, and the record does the chasing.",
  "day": [
    {
      "time": "9:00",
      "before": "The team scrolls email to find which containers are at the port.",
      "after": "The Today screen shows 14 open shipments by stage, with 2 containers under 3 free days."
    },
    {
      "time": "11:00",
      "before": "The broker says a certificate is missing, a day after the vessel arrived.",
      "after": "The checklist showed the certificate pending for a week, and the supplier contact was already chased."
    },
    {
      "time": "1:30",
      "before": "A customer asks for a date on a container. The answer takes an hour.",
      "after": "The shipment shows the ETA, the clearing step and the warehouse slot."
    },
    {
      "time": "3:30",
      "before": "A price is quoted from the supplier's invoice and a rough duty.",
      "after": "The quote uses landed cost from the actual shipment, and the item that is below cost is flagged."
    },
    {
      "time": "5:30",
      "before": "An advance is paid and the shipping date is not written down.",
      "after": "The advance is recorded with the agreed shipping date and a follow-up if it slips."
    },
    {
      "time": "Month end",
      "before": "The accountant asks for payments and Bills of Entry. They are found in four places.",
      "after": "Each payment is linked to its shipment and Bill of Entry."
    }
  ],
  "approach": {
    "heading": "We set it up with you, in four weeks.",
    "lede": "You do not get a login and a manual. We spend time with your team, your broker's way of working and your warehouse, build Verity around how your imports really run, bring your data in, then stay to make sure it keeps working.",
    "phases": [
      {
        "when": "Week 1",
        "name": "Discovery and mapping",
        "we": "Follow two shipments end to end: one that went smoothly and one that did not. Sit with your import manager, finance head, broker contact and warehouse lead, and note where dates and papers are lost.",
        "you": "Two to three hours of yours and your import manager's. Access to a few shipment files, a month of bank advices and the broker's duty notes.",
        "get": "A written map of your import flow: suppliers, order and advance terms, documents, port steps, costs, stock and the first gaps we will close."
      },
      {
        "when": "Weeks 2 to 3",
        "name": "Configuration",
        "we": "Set up suppliers, items and classifications, order and advance records, shipment stages, document checklists, free-day alerts, cost lines and exchange rates, stock and the five screens in your terms.",
        "you": "Check the setup with the import manager and finance head. Tell us where a stage, cost line or rule is wrong.",
        "get": "A working Verity with your real suppliers, items and rules, ready for your data."
      },
      {
        "when": "Weeks 3 to 4",
        "name": "Migration and training",
        "we": "Bring in your open shipments, orders, advances, item list, stock and customer dues from your sheets and accounts export. Train the import desk, finance, the warehouse and sales at their own stations.",
        "you": "Your open shipments list, an opening stock count and the dues list. One hour with each role.",
        "get": "Your import data inside Verity and a team that has used it through live shipments."
      },
      {
        "when": "After go-live",
        "name": "Operations partnership",
        "we": "Stay on after launch. Review the first weeks of landed cost and free days with you, tune alerts, and change setup when you add a supplier, an item or a port.",
        "you": "A short monthly review of what the numbers say.",
        "get": "A system that keeps matching how your imports run, with someone responsible for it."
      }
    ],
    "bring": [
      "A list of open shipments and orders",
      "A month of bank advices and broker duty notes",
      "Your item list with classification codes you use",
      "Your stock sheet and customer dues list",
      "Supplier terms and any advance rulings or licences"
    ],
    "time": "About 8 to 12 hours of your own time across the four weeks, mostly in week 1. The import manager, finance head and warehouse lead need a few more.",
    "after": "Nobody is hired to run Verity. Orders, documents, payments and receipts are recorded as part of work the team already does, and the reports come from those records."
  },
  "ai": {
    "heading": "Ask your import business a question. Get an answer, not a report to build.",
    "lede": "Verity AI reads your own shipments, costs, advances and dues. Ask in plain language, then turn the answer into tasks for the right people.",
    "examples": [
      {
        "q": "Which containers will start costing demurrage this week?",
        "a": "Two containers have under 3 free days left. One is waiting for a certificate and one for the Bill of Entry filing.",
        "rows": [
          [
            "SH-0412",
            "2 days left"
          ],
          [
            "SH-0418",
            "3 days left"
          ]
        ],
        "action": "Create tasks for the broker and supplier contact"
      },
      {
        "q": "Which items are selling below landed cost?",
        "a": "Item D, at ₹63 landed against a price of ₹60, and Item C is within ₹5 of cost.",
        "rows": [
          [
            "Item D",
            "-₹3 per unit"
          ],
          [
            "Item C",
            "₹5 margin"
          ]
        ]
      },
      {
        "q": "Which advances are overdue to ship?",
        "a": "Three advances totalling ₹49.8 lakh, the oldest 16 days past the shipping date.",
        "action": "Create follow-up tasks for supplier owners"
      }
    ]
  },
  "automationHeading": "The follow-ups nobody has time to make.",
  "automationLede": "Set once, then they run from your records. Staff still talk to suppliers, brokers and customers; Verity makes sure the right person knows what to do.",
  "automations": [
    {
      "when": "A shipment's free days fall below your limit",
      "then": [
        "Flagged on the board",
        "Task to the broker contact and warehouse lead",
        "Cleared steps ticked as they complete"
      ]
    },
    {
      "when": "A document in the checklist does not match another",
      "then": [
        "Mismatch listed on the shipment",
        "Task to the supplier's account manager",
        "Cleared when the corrected copy is recorded"
      ]
    },
    {
      "when": "A container leaves the port",
      "then": [
        "Return task created with due date",
        "Owner shown on the shipment",
        "Marked done when returned"
      ]
    },
    {
      "when": "A supplier advance passes the agreed shipping date",
      "then": [
        "Listed on the supplier screen",
        "Follow-up task to the supplier's owner",
        "Outcome recorded: new date, refund or claim"
      ]
    },
    {
      "when": "A shipment's landed cost is above the price list",
      "then": [
        "Item flagged",
        "Task to sales and the owner",
        "Price decision recorded"
      ]
    },
    {
      "when": "A shipment is near the generally expected payment window",
      "then": [
        "Task to the finance head",
        "Linked remittances and Bills of Entry shown",
        "Bank query answered from the record"
      ]
    }
  ],
  "rules": {
    "heading": "The rules an importer has to keep up with.",
    "lede": "Verity does not give legal or customs advice and does not file anything for you. It keeps the records these rules depend on in order, so you are not hunting for them when someone asks.",
    "note": "Rules change often and differ by product. Confirm current requirements with your customs broker, bank or adviser.",
    "items": [
      {
        "name": "Customs duty, Bill of Entry and classification",
        "what": "Import duty depends on the item's classification, value and applicable notifications, and is assessed on the Bill of Entry. A wrong classification or valuation can lead to later demands with interest. Budget 2026 changes include a five year advance ruling validity and a 15 percent charge for non-payment on voluntary settlement. Confirm each with your broker.",
        "how": "Each item records its classification, past assessed duty and any advance ruling with its validity, and a changed rate is flagged.",
        "source": {
          "name": "ICAI",
          "url": "https://cajournal.icai.org/article-details/union-budget-2026-transformative-amendments-in-customs-law"
        }
      },
      {
        "name": "Deferred payment of duty",
        "what": "From 1 March 2026, the deferred duty payment period is 30 days on a monthly cycle, for eligible importers, with duty on Bills of Entry returned in a month due by the 1st of the next month. Check whether you qualify.",
        "how": "Duty due is a calendar by route and date, so cash is planned.",
        "source": {
          "name": "ICAI",
          "url": "https://cajournal.icai.org/article-details/union-budget-2026-transformative-amendments-in-customs-law"
        }
      },
      {
        "name": "Import payments through your bank",
        "what": "Remittances against imports are generally expected to be completed within six months of shipment, with extensions only through your authorised dealer bank, and banks match Bill of Entry data with remittances. Advance payments follow the bank's conditions. Confirm the current RBI direction with your bank.",
        "how": "Each remittance is linked to its order, shipment and Bill of Entry, and shipments nearing the window are listed."
      },
      {
        "name": "Port charges, free time and container return",
        "what": "Demurrage applies while a container stays in the terminal past free time, and detention applies when a carrier's container is kept outside the port past free time. Free time varies by line, port and container type.",
        "how": "Free days and return dates are tracked on each container with an owner.",
        "source": {
          "name": "Cogoport",
          "url": "https://www.cogoport.com/blogs/demurrage-detention-how-to-avoid-charges"
        }
      },
      {
        "name": "Import registration and product approvals",
        "what": "An importer needs an Importer Exporter Code, and some products need further approvals or standards certification before clearance, which differ by product.",
        "how": "Registration numbers, certificates and approvals are records with expiry, linked to the items that need them."
      }
    ]
  },
  "rolesHeading": "Everyone sees the same records, through their own window.",
  "rolesLede": "A warehouse clerk should not see supplier prices. Sales should not edit a shipment's cost. Each role opens on what it needs.",
  "roles": [
    {
      "role": "Owner",
      "question": "Which imports make money, and where is cash tied up?",
      "sees": "Landed cost against price, advances, duty due, free days and dues."
    },
    {
      "role": "Import manager",
      "question": "What is moving and what is stuck?",
      "sees": "Shipments by stage, documents, mismatches, free days and supplier follow-ups."
    },
    {
      "role": "Finance head",
      "question": "What is due, to whom and when?",
      "sees": "Remittances, duty calendar, exchange exposure and customer dues."
    },
    {
      "role": "Warehouse lead",
      "question": "What is arriving and what is cleared?",
      "sees": "Expected arrivals, container returns, receipts and stock."
    },
    {
      "role": "Sales",
      "question": "What can I sell and at what price?",
      "sees": "Stock cleared and in transit, landed cost floor and reserved quantities."
    }
  ],
  "alongside": {
    "heading": "What changes, and what stays the same.",
    "keep": [
      "Your customs broker, who still files Bills of Entry and clears the goods.",
      "Your bank, which still makes remittances and handles letters of credit. We record the payments against the shipment.",
      "Your accounts software. We agree during setup how invoices and payments reach Verity.",
      "Email and WhatsApp with suppliers and brokers. Staff talk",
      "Verity tracks who owes a reply."
    ],
    "not": [
      "File Bills of Entry or customs documents.",
      "Make payments, buy currency or hedge exchange risk.",
      "Give customs, tax or legal advice.",
      "Send messages to suppliers or customers on its own."
    ],
    "migration": "We bring your open shipments, orders, advances, item list, stock and customer dues across from the sheets, email folders and accounts export you use now, in stages, so imports keep moving while it happens."
  },
  "faqHeading": "Questions importers ask.",
  "faqs": [
    [
      "My broker does the customs work. What does Verity add?",
      "It keeps the broker's output, such as duty and Bill of Entry details, in the same record as the supplier, the payment, the free days and the stock. Your broker still files and clears."
    ],
    [
      "Can it calculate my landed cost?",
      "Yes, once cost lines are recorded on the shipment. It spreads goods, freight, insurance, duty, port charges, clearing and transport across the items at the actual exchange rate, and shows cost per unit against your price list."
    ],
    [
      "Will it track shipments automatically from the shipping line?",
      "We agree during setup how shipment status and dates reach Verity, and your team can also update them. Verity does not promise a live link to any named carrier."
    ],
    [
      "Can it stop demurrage?",
      "It shows free days left and assigns tasks so the right person acts early. Your team and broker still do the clearing."
    ],
    [
      "Does it make payments or hedge currency?",
      "No. Your bank makes payments. Verity records them against the order and shipment and shows your exchange exposure at today's rate."
    ],
    [
      "Does it file my customs documents?",
      "No. Your broker or your team files them. Verity keeps the documents, dates and costs in order."
    ],
    [
      "I import for my own factory, not for trading. Does it fit?",
      "Yes. Shipments, documents, duty and landed cost work the same way, and received goods can flow to your stock and production records."
    ],
    [
      "Who can see my data?",
      "Only the people you allow. Access is set by role, so the import desk, finance, the warehouse and sales each see what they need, and every change is recorded with who made it and when."
    ],
    [
      "How quickly will I see something useful?",
      "The free-day list, advances outstanding and customer dues need only your existing data, so we aim to have them first. Landed cost and margin patterns become reliable after a few shipments are recorded."
    ],
    [
      "What does it cost?",
      "It depends on the number of locations, people and what you want set up. Message us and we will give you a clear number after a short conversation about how your imports run."
    ]
  ],
  "related": [
    "exporters",
    "wholesalers",
    "distributors",
    "industrial-suppliers",
    "manufacturers",
    "electronics-stores"
  ],
  "ctaHeading": "Start with the container running out of free days.",
  "ctaLede": "Tell us how your imports run and we will show you the free-day list, the advances outstanding and the landed cost it would find, using your own numbers.",
  "workflow": {
    "heading": "From supplier order to cash collected, and where each handoff slips.",
    "lede": "An import passes through a supplier, a shipping line, a port, a clearing agent, a transporter and a warehouse. The importer owns none of these steps, so the risks sit in the handoffs between parties.",
    "stages": [
      {
        "name": "Supplier order",
        "owner": "Purchase head",
        "does": "The order is placed with price, quantity, terms and shipping date.",
        "data": "Supplier, items, currency, advance, shipping date.",
        "breaks": "Advances are paid and the shipping date is forgotten.",
        "handoff": "The supplier ships and sends documents."
      },
      {
        "name": "Documents and shipment",
        "owner": "Import coordinator",
        "does": "Documents are received and checked and the shipment is tracked.",
        "data": "Invoice, packing list, bill of lading, vessel, container.",
        "breaks": "Mismatches are found late and status is requested from many parties.",
        "handoff": "Documents go to the clearing agent."
      },
      {
        "name": "Arrival and clearance",
        "owner": "Clearing agent and importer",
        "does": "The Bill of Entry is filed, duty is assessed and goods are cleared.",
        "data": "Classification, duty, free days, charges.",
        "breaks": "Free time runs out and duty is paid without a comparison to past assessments.",
        "handoff": "Cleared goods go to the transporter."
      },
      {
        "name": "Transport and warehouse",
        "owner": "Logistics and warehouse",
        "does": "Goods move to the warehouse and the container is returned.",
        "data": "Transporter, receipt quantity, container return date.",
        "breaks": "Containers are not returned on time and receipt differences are late.",
        "handoff": "Stock updates and sales is told."
      },
      {
        "name": "Landed cost",
        "owner": "Accounts",
        "does": "All costs are gathered and a cost per unit is calculated.",
        "data": "Goods, freight, insurance, duty, port charges, clearing, transport, exchange rate.",
        "breaks": "The cost is known only after the goods are sold.",
        "handoff": "Landed cost goes to pricing."
      },
      {
        "name": "Sales and delivery",
        "owner": "Sales",
        "does": "Stock is sold and delivered.",
        "data": "Stock available, reserved, price, customer.",
        "breaks": "Sales does not know what is cleared or reserved.",
        "handoff": "The invoice goes to accounts."
      },
      {
        "name": "Payment and settlement",
        "owner": "Accounts and finance head",
        "does": "Overseas payments, duty and customer collections are managed.",
        "data": "Remittance, exchange rate, invoices, dues.",
        "breaks": "Payments do not match shipments and customers pay late.",
        "handoff": "Settled records close the shipment."
      },
      {
        "name": "Review and next order",
        "owner": "Owner and purchase head",
        "does": "Shipment results are reviewed against the plan before the next order is placed.",
        "data": "Landed cost against price, claims, supplier performance, free days lost.",
        "breaks": "The review happens rarely, so the same supplier or route problem repeats.",
        "handoff": "Findings return to the supplier order for the next shipment."
      }
    ]
  },
  "content": {
    "hooks": [
      "Container kahan hai, har baar forwarder ko phone karna padta hai?",
      "Ek document galat tha aur container port par ruka raha.",
      "Free days khatam hue aur demurrage shuru ho gaya.",
      "Khaali container samay par wapas nahi gaya.",
      "Landed cost bikne ke baad pata chalta hai.",
      "Duty kitni lagi, pichle shipment se kya farak?",
      "Duty ka paisa kab jaana hai, finance ko pata hai?",
      "Supplier ko advance diya, shipping date bhool gaye.",
      "Overseas payment aur shipment ka match mahine ke end mein.",
      "Dollar ka rate badla, margin kitna gaya?",
      "Goods aaye aur quality kharab nikli. Claim ka saboot kahan hai?",
      "Sales ko pata nahi stock kitna clear hai.",
      "Customer late paisa deta hai, supplier ko time par dena padta hai.",
      "Maal bik gaya aur ab pata chala profit kitna.",
      "Aap office mein nahi hote to shipment ka status kaun batata hai?",
      "Bill of Entry ke classification ka record kahan hai?",
      "Container ki detention ka bill aaya.",
      "Shipment ka invoice aur packing list mein farak.",
      "Insurance ka kaghaz shipment ke saath gaya?",
      "Supplier ne kal tak ship karne ka vada kiya tha.",
      "Clearing agent ka bill aur port charge alag alag.",
      "Stock in transit sales ko nahi dikhta.",
      "Hum 12 supplier se mangwate hain aur ek hi Excel mein.",
      "Open orders par exchange rate ka exposure kitna hai?",
      "Duty ki payment ki tarikh kisne dekhi?"
    ],
    "explainers": [
      {
        "concept": "Every container on one board",
        "pain": "Nobody knows where each container is (pain 1)",
        "for": "Owners and import coordinators",
        "hook": "Container kahan hai, har baar forwarder ko phone karna padta hai?",
        "show": "Shipments by stage on one board with expected dates",
        "visual": "A world strip with container icons moving through stages",
        "outcome": "No more status calls",
        "cta": "Book the free seven day demo"
      },
      {
        "concept": "The mismatch caught early",
        "pain": "A document is missing or wrong (pain 2)",
        "for": "Import coordinators",
        "hook": "Ek document galat tha aur container port par ruka raha",
        "show": "A document checklist with key fields compared across documents",
        "visual": "Three documents with a mismatching field highlighted",
        "outcome": "Corrections before arrival",
        "cta": "Share your document set"
      },
      {
        "concept": "Days left before demurrage",
        "pain": "Free days run out (pain 3)",
        "for": "Logistics heads",
        "hook": "Free days khatam hue aur demurrage shuru ho gaya",
        "show": "Containers by days left with tasks for each party",
        "visual": "A countdown on each container card",
        "outcome": "Demurrage avoided",
        "cta": "Load your containers"
      },
      {
        "concept": "The empty container",
        "pain": "Container is not returned (pain 4)",
        "for": "Logistics",
        "hook": "Khaali container samay par wapas nahi gaya",
        "show": "Return tasks with due dates",
        "visual": "A container icon with a return date ring",
        "outcome": "No detention",
        "cta": "Try it on open containers"
      },
      {
        "concept": "Real landed cost",
        "pain": "Landed cost known after sale (pain 5)",
        "for": "Owners and accounts",
        "hook": "Landed cost bikne ke baad pata chalta hai",
        "show": "A shipment collecting every cost line and a cost per unit",
        "visual": "Cost lines stacking onto a unit price",
        "outcome": "Pricing from true cost",
        "cta": "Cost one shipment"
      },
      {
        "concept": "Duty against the past",
        "pain": "Duty without a clear view (pain 6)",
        "for": "Owners and accounts",
        "hook": "Duty kitni lagi, pichle shipment se kya farak?",
        "show": "Classification and duty compared with earlier Bills of Entry",
        "visual": "Two bills side by side with a flag on a difference",
        "outcome": "Questions raised in time",
        "cta": "Share three past bills"
      },
      {
        "concept": "Money out to suppliers",
        "pain": "Supplier advances forgotten (pain 8)",
        "for": "Purchase heads",
        "hook": "Supplier ko advance diya, shipping date bhool gaye",
        "show": "Advances by age and orders overdue to ship",
        "visual": "A ledger with an aging colour",
        "outcome": "Advances recovered or shipped",
        "cta": "List your advances"
      },
      {
        "concept": "The rate that moved",
        "pain": "Exchange rate moves (pain 10)",
        "for": "Owners and finance",
        "hook": "Dollar ka rate badla, margin kitna gaya?",
        "show": "Exposure across open orders and the effect at today's rate",
        "visual": "A rate line against a stack of orders",
        "outcome": "Cover decisions on facts",
        "cta": "Bring your open orders"
      },
      {
        "concept": "What can sales sell",
        "pain": "Stock status unclear (pain 12)",
        "for": "Sales",
        "hook": "Sales ko pata nahi stock kitna clear hai",
        "show": "Cleared, in transit and reserved stock",
        "visual": "Three stock bars side by side",
        "outcome": "Promises that hold",
        "cta": "Share your stock sheet"
      },
      {
        "concept": "Profit before the sale",
        "pain": "Profit known only after sale (pain 14)",
        "for": "Owners",
        "hook": "Maal bik gaya aur ab pata chala profit kitna",
        "show": "A morning screen with landed cost against price",
        "visual": "A phone list with margins",
        "outcome": "Better import decisions",
        "cta": "Ask for the demo"
      }
    ],
    "scripts": [
      {
        "title": "Container kahan hai",
        "beats": [
          {
            "at": "0 to 5s",
            "say": "Container kahan hai, har baar forwarder ko phone karna padta hai?"
          },
          {
            "at": "5 to 15s",
            "say": "Forwarder ek baat, clearing agent doosri, supplier teesri."
          },
          {
            "at": "15 to 25s",
            "say": "Aap apna business process batayiye. Hum saat din mein, aapke actual business data par, ek customised demo banate hain. Bilkul free."
          },
          {
            "at": "25 to 40s",
            "say": "Har shipment ek record: supplier, order, vessel, container, dates. Ek board par stage ke hisaab se."
          },
          {
            "at": "40 to 50s",
            "say": "Aapko poochna nahi padta."
          },
          {
            "at": "50 to 60s",
            "say": "Aapki team dekhe, pasand aaye tabhi aage badhiye. Nahi toh koi charge nahi."
          }
        ]
      },
      {
        "title": "Free days",
        "beats": [
          {
            "at": "0 to 5s",
            "say": "Free days khatam hue aur demurrage shuru ho gaya."
          },
          {
            "at": "5 to 15s",
            "say": "Kisi ne date dekhi hi nahi thi."
          },
          {
            "at": "15 to 25s",
            "say": "Apne containers ki list dijiye. Saat din mein free demo."
          },
          {
            "at": "25 to 40s",
            "say": "Har container ke free days aur baaki steps. Din kam hone par broker, transporter aur warehouse ko task."
          },
          {
            "at": "40 to 50s",
            "say": "Container ki wapsi ka task bhi."
          },
          {
            "at": "50 to 60s",
            "say": "Demo pasand aaye tabhi aage. Nahi toh koi charge nahi."
          }
        ]
      },
      {
        "title": "Landed cost",
        "beats": [
          {
            "at": "0 to 5s",
            "say": "Landed cost bikne ke baad pata chalta hai."
          },
          {
            "at": "5 to 15s",
            "say": "Freight, duty, port, clearing, sab alag bill."
          },
          {
            "at": "15 to 25s",
            "say": "Ek shipment ke bill dijiye. Saat din mein free demo."
          },
          {
            "at": "25 to 40s",
            "say": "Har shipment mein saari cost lines, asli exchange rate par, item par baanti hui. Cost per unit tayyar."
          },
          {
            "at": "40 to 50s",
            "say": "Selling price asli cost se tay hota hai."
          },
          {
            "at": "50 to 60s",
            "say": "Pasand aaye tabhi aage badhiye. Nahi toh koi charge nahi."
          }
        ]
      },
      {
        "title": "Supplier ka advance",
        "beats": [
          {
            "at": "0 to 5s",
            "say": "Supplier ko advance diya, shipping date bhool gaye."
          },
          {
            "at": "5 to 15s",
            "say": "Email mein vada tha, kisi ko yaad nahi."
          },
          {
            "at": "15 to 25s",
            "say": "Apne advance ki list dijiye. Saat din mein free demo."
          },
          {
            "at": "25 to 40s",
            "say": "Har order mein advance, tarikh, shipping date aur refund terms. Purane advance aur late shipment upar."
          },
          {
            "at": "40 to 50s",
            "say": "Purchase head naam aur tarikh se follow up karta hai."
          },
          {
            "at": "50 to 60s",
            "say": "Pasand aaye tabhi aage. Nahi toh koi charge nahi."
          }
        ]
      },
      {
        "title": "Dollar ka rate",
        "beats": [
          {
            "at": "0 to 5s",
            "say": "Dollar ka rate badla, margin kitna gaya?"
          },
          {
            "at": "5 to 15s",
            "say": "Order par ek rate, payment par doosra."
          },
          {
            "at": "15 to 25s",
            "say": "Apne open order dijiye. Saat din mein free demo."
          },
          {
            "at": "25 to 40s",
            "say": "Har order mein currency, rate at order aur rate at payment. Sab open order ka exposure ek jagah."
          },
          {
            "at": "40 to 50s",
            "say": "Aap cover ka faisla jaankari se lete hain."
          },
          {
            "at": "50 to 60s",
            "say": "Demo pasand aaye tabhi aage badhiye. Nahi toh koi charge nahi."
          }
        ]
      }
    ]
  },
  "sales": {
    "leadWith": "Landed cost known only after the sale, and demurrage from untracked free days",
    "titles": [
      "Managing Director",
      "Owner",
      "Head of Import",
      "Head of Purchase",
      "Director Finance",
      "Head of Logistics",
      "General Manager Operations"
    ],
    "deciders": "The owner or managing director decides. The finance head and head of import influence.",
    "size": "A trading or manufacturing business with 20 to 200 people and a regular flow of imported containers from several suppliers.",
    "firstMessage": "Hello, I work with importers on landed cost and container tracking. We build a free seven day demo on your own shipment data. How do you know the real cost of a shipment today?",
    "discovery": [
      "How do you track where each container is?",
      "How do you catch a document mismatch before arrival?",
      "Who watches free days and container return dates?",
      "When do you know the landed cost per unit?",
      "How are advances to suppliers followed up?",
      "How do you track exchange rate exposure on open orders?"
    ],
    "objections": [
      {
        "o": "The clearing agent handles this",
        "a": "The agent does clearance. We give you one view across all the parties so you do not have to ask each of them."
      },
      {
        "o": "We use Tally",
        "a": "We keep Tally for accounts and add the shipment and landed cost record it does not hold."
      },
      {
        "o": "Not enough staff for a project",
        "a": "The four week plan needs about 8 to 14 owner hours in total."
      },
      {
        "o": "Cost",
        "a": "Cost depends on scope. We start with the one problem that costs most, and the demo is free."
      }
    ],
    "demo": "A board of shipments by stage, a document mismatch flagged, a container with days left and a landed cost per unit, built from the importer's own shipments.",
    "proof": "Take the last three shipments and show their real landed cost and any free days lost.",
    "followUp": "Thank you for your time. I have built the demo around the shipment you described, with its landed cost. When can your finance head and I go through it for 20 minutes?"
  }
};
