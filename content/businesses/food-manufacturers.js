export default {
  "schema": 2,
  "slug": "food-manufacturers",
  "status": "published",
  "plural": "food manufacturers",
  "subject": "food factory",
  "checked": "16 October 2026",
  "seo": {
    "title": "Food manufacturer software for Indian factories | Verity",
    "description": "Batch traceability, shelf life and first-expiry-first-out stock, quality holds, recalls and slow dues: the leaks in a food factory and the Verity screens that fix them.",
    "keywords": [
      "food manufacturing software India",
      "FSSAI batch traceability",
      "shelf life and FEFO stock",
      "quality hold and recall tracking",
      "food factory distributor dues"
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
    "eyebrow": "Verity for food manufacturers",
    "headline": "In a food factory, the date on the pack is the product. The records behind it are the business.",
    "lede": "Every pack leaves the factory with a batch code, a best-before date and a promise. When a retailer rejects a pallet for short shelf life, an inspector asks for one lot's records, or an ingredient is found faulty, the factory has to answer fast. Verity ties ingredient lots, batches, stock by expiry, quality holds and dispatches together so a question about a lot gets an answer in minutes.",
    "oneLine": "One system that knows every ingredient lot, every batch code, every day of shelf life left and every customer who got the pack.",
    "note": "Built for a floor where hands are wet and time is short. Records come from receiving, packing and dispatch steps already done.",
    "screen": "owner",
    "screenNote": "batches, shelf life, holds, dispatches and dues"
  },
  "today": {
    "heading": "Most food factories make good food and keep its history in too many places.",
    "paragraphs": [
      "The recipe is known by the production head. The ingredient lots are in a stores register. The batch code is stamped at packing. The quality checks are on sheets, and the dispatch is on a separate challan. Each is correct. None points to the next.",
      "Shelf life is where this hurts. A distributor wants pallets with most of the shelf life still left. If stock is sent oldest first only when someone remembers, the oldest cartons sit at the back and come back as returns.",
      "Compliance has its own dates: the FSSAI licence or registration, staff training, pest control, water tests and annual returns. They live with the quality head or a consultant."
    ],
    "stack": [
      "Batch sheets and stores register",
      "Quality check sheets",
      "Excel for stock, shelf life and distributor dues",
      "Accounts software",
      "WhatsApp with distributors and transporters"
    ],
    "stackNote": "Each works alone. Nobody can pull a lot's full trail on one screen when it matters."
  },
  "painsHeading": "Where a food factory actually loses money and trust.",
  "painsLede": "These are the situations food business owners and quality heads describe again and again. For each: what it looks like on an ordinary day, what it costs, and what Verity does about it.",
  "pains": [
    {
      "area": "Traceability",
      "title": "One ingredient lot goes into many batches and nobody can map it",
      "scene": "A spice supplier sends one lot that fills three batches of two products. A customer complaint arrives for one pack. Stores can find the supplier invoice but not the batches that used the lot.",
      "cost": "Without the map, you hold or recall more than you need. A bigger hold is more lost stock and a louder problem.",
      "fix": "Ingredient lots are received with supplier, date and expiry. Each batch records the lots it used. Verity shows, both ways, every batch a lot went into and every customer who received them.",
      "screen": "lots"
    },
    {
      "area": "Stock",
      "title": "Short-dated stock goes out last and comes back as returns",
      "scene": "New cartons are stacked in front because they are easier to pick. The older ones stay at the back until they are too close to expiry for a distributor to accept.",
      "cost": "One distributor-side account says retailers often want about 60 percent of shelf life left on food at purchase, and that about 10 percent of what that firm buys from brands is rejected. Stock that fails that test comes back or is written off.",
      "fix": "Finished goods are held by batch and best-before date. Verity picks first-expiry-first-out for each order, and shows each batch's remaining shelf life against each customer's minimum.",
      "screen": "shelf",
      "source": {
        "name": "The Better India, 2023",
        "url": "https://thebetterindia.com/315182/kolkata-milind-shah-started-gauraa-to-prevents-fmcg-products-from-going-to-landfills"
      }
    },
    {
      "area": "Quality",
      "title": "A batch fails a check and still gets packed",
      "scene": "Moisture reading is above range at 11 am. The line is busy. The batch is packed and the result is only noticed in the evening.",
      "cost": "A failed batch in the market is a recall risk. A failed batch caught after packing is wasted packaging, labour and shelf space.",
      "fix": "In-process and final checks are recorded against the batch with the allowed range. A result outside range places the batch on hold, and the packing step cannot start for it until the quality head releases it.",
      "screen": "quality"
    },
    {
      "area": "Quality",
      "title": "Holds are verbal and stock moves anyway",
      "scene": "The quality head says, hold that batch. The warehouse supervisor was not at that call. A pallet leaves on a truck that afternoon.",
      "cost": "Hold means nothing without a block. A held batch that ships becomes a customer's problem.",
      "fix": "A hold is a status on the batch that stops picking and dispatch. Verity lists current holds with the reason, the owner and the age, and records the release or the destruction decision.",
      "screen": "quality"
    },
    {
      "area": "Recall",
      "title": "A recall drill takes days, not hours",
      "scene": "A supplier notifies a contaminant in an ingredient. The team must find every batch, every customer, how much is unsold and how much is in transit. It takes two days of calls.",
      "cost": "FSSAI recall rules ask food businesses to have a recall plan and distribution records. A slow response widens the exposure and the damage to the brand.",
      "fix": "Verity lists affected batches, quantity dispatched, customers, warehouse stock and returns in one view, and creates a task per customer for staff to call, with outcomes recorded.",
      "screen": "lots",
      "source": {
        "name": "Taxguru, FSSAI Food Recall Plan and its Procedure, 2021",
        "url": "https://taxguru.in/corporate-law/fssai-food-recall-plan-procedure.html"
      }
    },
    {
      "area": "Packing",
      "title": "Best-before dates are wrong on the pack",
      "scene": "A date coder is set by hand at the start of the shift. One day it prints last month's date. The error is spotted at the warehouse after 600 cartons are made.",
      "cost": "Rework, relabelling and sometimes a destroyed batch. Worse, a wrong date that reaches the market.",
      "fix": "The pack date, batch code and shelf life come from the batch record. A line-start check compares the first printed pack with the record, and a mismatch holds the line until it is signed off.",
      "screen": "quality"
    },
    {
      "area": "Costing",
      "title": "Ingredient prices move and the pack price does not",
      "scene": "Edible oil, packing film or sugar rises. The price list was set in April. Wastage on the line and trim loss are not counted.",
      "cost": "Example arithmetic: a ₹40 pack with ₹26 of ingredients and packing, ₹6 of conversion and 5 percent line loss earns about ₹6, not ₹8.",
      "fix": "Every purchase records the rate. Verity costs each batch from actual lots, yield and line loss, and shows margin per product and per customer, so a rise shows as a changed margin quickly.",
      "screen": "owner"
    },
    {
      "area": "Stock",
      "title": "Ingredients expire in stores before they are used",
      "scene": "A seasonal ingredient was bought in bulk at a good rate. Half of it was past its date before the next production cycle.",
      "cost": "Cash tied up and written off. Example arithmetic: ₹3 lakh of stock written off a quarter is about ₹12 lakh a year.",
      "fix": "Ingredient lots carry expiry. Verity lists lots by days left against the production plan, and raises a task to use or return the ones at risk.",
      "screen": "shelf"
    },
    {
      "area": "Money",
      "title": "Distributors pay late and ask for returns in the same call",
      "scene": "A distributor with ₹18 lakh outstanding asks to return near-date stock and adjust it against dues. Sales agrees on a call. The accounts person finds out at month end.",
      "cost": "Return adjustments without records are disputes later. Slow payment also pushes the factory to borrow.",
      "fix": "Returns are recorded against the original batch and invoice with a reason. Verity shows dues by distributor and age net of approved returns, and routes a return above your limit for approval.",
      "screen": "orders"
    },
    {
      "area": "Money",
      "title": "Micro and small suppliers are paid late",
      "scene": "Small farm-gate and packing suppliers wait 70 days. Their calls begin to disrupt purchase planning.",
      "cost": "Since 1 April 2024, payment beyond the agreed period, capped at 45 days, to a micro or small seller is generally not deductible until it is paid.",
      "fix": "Each supplier bill is a record with due date against the 45 day limit and the supplier's size category. Verity lists bills approaching the limit so payment is planned before it turns into a tax cost.",
      "screen": "orders",
      "source": {
        "name": "SetIndiaBiz, MSME 45 day payment rule, 2025",
        "url": "https://www.setindiabiz.com/blog/msme-45-day-payment-rule"
      }
    },
    {
      "area": "Compliance",
      "title": "Licence, training and test dates sit with one person",
      "scene": "The licence, the water test, the pest control contract, and the food safety supervisor's certificate each have a date. The quality head knows them. If she is away, nobody does.",
      "cost": "A lapsed certificate or missed test is found when an officer visits. Fines and notices follow, and the scramble costs days.",
      "fix": "Each licence, test report, contract and training certificate is a record with expiry and owner. Renewal tasks open weeks ahead. Annual returns are tasks with the figures totalled from batches and dispatches.",
      "screen": "upkeep",
      "source": {
        "name": "SetIndiaBiz, FSSAI 2026 reforms, 2026",
        "url": "https://www.setindiabiz.com/blog/fssai-2026-reforms"
      }
    },
    {
      "area": "Hygiene",
      "title": "Cleaning, pest and temperature checks are signed in bulk",
      "scene": "Daily checks for cold room temperature, line cleaning and pest traps are ticked together at the end of the week before an audit.",
      "cost": "A check that is not done on the day cannot be proved later. A cold room drift can spoil a whole store of ingredients.",
      "fix": "Daily checks are tasks with a person and a time. A missed one is flagged the same day, and a temperature outside range opens an issue on the stock held there.",
      "screen": "upkeep"
    },
    {
      "area": "Equipment",
      "title": "Machine stops are noted nowhere",
      "scene": "The filling machine stops six times a shift for small reasons. Nobody records it. The shift report says output was low.",
      "cost": "Without reasons, the same stops repeat. Over a month they are lost packs and overtime.",
      "fix": "Each stop is a quick entry with reason and duration. Verity shows downtime by machine and cause, and links service tasks with dates to each machine.",
      "screen": "upkeep"
    },
    {
      "area": "Orders",
      "title": "Orders are taken without knowing what is packed",
      "scene": "A key account orders 5,000 cartons for Friday. Sales confirms. Packing material has not arrived and the line is booked.",
      "cost": "A missed delivery to a modern trade chain can mean penalties or a lost listing.",
      "fix": "Each order shows stock by batch, packing material, line slot and promised date. The planner sees conflicts before a date is confirmed.",
      "screen": "orders"
    },
    {
      "area": "Owner",
      "title": "The owner reads the factory through phone calls",
      "scene": "Output, holds, expiring stock and dues are four different questions to four different people.",
      "cost": "Decisions run on memory. A shelf-life or yield problem shows up weeks later as a return.",
      "fix": "One morning screen with batches made, holds, stock near expiry, dispatches and overdue dues, each with an owner.",
      "screen": "owner"
    }
  ],
  "factsHeading": "The numbers that make these problems worth fixing.",
  "factsLede": "From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.",
  "factsNote": "The 60 and 10 percent figures come from one distributor-side founder's account, not a survey. The FSSAI limits are from a consultancy summary of the 2026 changes; confirm them on FoSCoS. The IBEF share has no year on the page.",
  "facts": [
    {
      "figure": "₹1.5 crore",
      "text": "is the turnover up to which Basic Registration generally applies from 1 April 2026 (earlier ₹12 lakh); State Licence then runs up to ₹50 crore, and licences no longer need periodic renewal.",
      "source": {
        "name": "SetIndiaBiz, FSSAI 2026 reforms, 2026",
        "url": "https://www.setindiabiz.com/blog/fssai-2026-reforms"
      }
    },
    {
      "figure": "60%",
      "text": "of shelf life left is what retailers reportedly want on food products at purchase, and about 10% of the volume one distributor buys from brands is rejected by retailers.",
      "source": {
        "name": "The Better India, 2023",
        "url": "https://thebetterindia.com/315182/kolkata-milind-shah-started-gauraa-to-prevents-fmcg-products-from-going-to-landfills"
      }
    },
    {
      "figure": "7.9%",
      "text": "is the food processing sector's contribution to manufacturing GVA according to IBEF, which also puts the sector at about 1.93 million registered workers.",
      "source": {
        "name": "IBEF, Food processing industry in India, 2026",
        "url": "https://www.ibef.org/industry/food-processing"
      }
    },
    {
      "figure": "45 days",
      "text": "is the longest period a buyer generally has to pay a micro or small seller before the amount is disallowed as a deduction, from 1 April 2024.",
      "source": {
        "name": "SetIndiaBiz, MSME 45 day payment rule, 2025",
        "url": "https://www.setindiabiz.com/blog/msme-45-day-payment-rule"
      }
    }
  ],
  "screensHeading": "The screens you would use every day.",
  "screensLede": "Six views, each built for one job. Names, columns and terms are set up in your factory's own language.",
  "screens": [
    {
      "id": "owner",
      "title": "Factory / Today",
      "meta": "Plant: Coimbatore",
      "heading": "The owner's morning view",
      "caption": "Output, holds, stock near expiry, dispatches and dues on one screen, with the items that need a decision listed under it. It replaces the round of calls to quality, stores and accounts.",
      "blocks": [
        {
          "type": "kpis",
          "items": [
            {
              "label": "Batches packed",
              "value": "9",
              "note": "yesterday"
            },
            {
              "label": "On hold",
              "value": "2",
              "note": "1 over 3 days"
            },
            {
              "label": "Stock under 40% shelf life",
              "value": "1,140 ctn",
              "note": "3 batches"
            },
            {
              "label": "Overdue dues",
              "value": "₹46.8 lakh",
              "note": "5 distributors"
            }
          ]
        },
        {
          "type": "title",
          "text": "Margin per carton by product, from actual lot rates"
        },
        {
          "type": "bars",
          "items": [
            {
              "label": "Namkeen 200 g",
              "value": 70,
              "display": "₹38"
            },
            {
              "label": "Pickle 400 g",
              "value": 55,
              "display": "₹29"
            },
            {
              "label": "Ready mix 500 g",
              "value": 36,
              "display": "₹19",
              "tone": "muted"
            },
            {
              "label": "Sweets box",
              "value": 22,
              "display": "₹12",
              "tone": "muted"
            }
          ]
        },
        {
          "type": "alert",
          "text": "Edible oil rate rose 7% since June. Namkeen carton margin is down ₹4.",
          "action": "Review price"
        },
        {
          "type": "list",
          "items": [
            {
              "name": "Batch N-1017 on hold 4 days",
              "meta": "Moisture above range, waiting for re-test",
              "tag": [
                "Decide",
                "late",
                "Released",
                "ok"
              ]
            },
            {
              "name": "FSSAI annual return",
              "meta": "Figures totalled, owner to check",
              "tag": [
                "Review",
                "flag",
                "Checked",
                "ok"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "lots",
      "title": "Lots and traceability",
      "meta": "Ingredient lot CH-0412",
      "heading": "One lot, every batch, every customer",
      "caption": "From an ingredient lot forward to batches and customers, and from a batch back to lots. This is the screen you open for a complaint, a supplier notice or a recall drill.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Batch",
            "Product",
            "Packed",
            "Qty",
            "Dispatched"
          ],
          "rows": [
            [
              "N-1011",
              "Namkeen 200 g",
              "6 Oct",
              "2,400 ctn",
              [
                "Shipped 3 customers",
                "info"
              ]
            ],
            [
              "N-1014",
              "Namkeen 200 g",
              "9 Oct",
              "2,600 ctn",
              [
                "Shipped 2 customers",
                "info"
              ]
            ],
            [
              "R-0532",
              "Ready mix 500 g",
              "10 Oct",
              "1,800 ctn",
              [
                "In warehouse",
                "flag",
                "Held",
                "late"
              ]
            ]
          ]
        },
        {
          "type": "record",
          "title": "Lot CH-0412 / Chilli powder",
          "sub": "Supplier: Guntur Spice Co. Received 2 Oct, best before 2 Apr",
          "fields": [
            [
              "Quantity received",
              "1,200 kg"
            ],
            [
              "Test report",
              "Attached"
            ],
            [
              "Batches using lot",
              "3"
            ],
            [
              "Cartons shipped",
              "5,000"
            ],
            [
              "Status",
              [
                "Supplier query open",
                "late",
                "Cleared",
                "ok"
              ]
            ]
          ],
          "timeline": [
            [
              "2 Oct",
              "Received and tested"
            ],
            [
              "6 Oct",
              "Issued to N-1011"
            ],
            [
              "9 Oct",
              "Issued to N-1014"
            ],
            [
              "10 Oct",
              "Issued to R-0532"
            ]
          ]
        },
        {
          "type": "alert",
          "text": "If lot CH-0412 is recalled: 5,000 cartons shipped, 1,800 in warehouse, 5 customers to call.",
          "action": "Create tasks"
        }
      ]
    },
    {
      "id": "shelf",
      "title": "Shelf life and stock",
      "meta": "Finished goods and ingredients",
      "heading": "Stock by expiry, first out first",
      "caption": "Finished goods by batch and days of shelf life left, set against each customer's minimum. Ingredients by expiry against the production plan.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Batch",
            "Product",
            "Cartons",
            "Shelf life left",
            "Pick order"
          ],
          "rows": [
            [
              "N-1002",
              "Namkeen 200 g",
              "860",
              "38%",
              [
                "Ship first",
                "flag",
                "Allocated",
                "ok"
              ]
            ],
            [
              "N-1008",
              "Namkeen 200 g",
              "1,400",
              "61%",
              [
                "Next",
                "info"
              ]
            ],
            [
              "P-0220",
              "Pickle 400 g",
              "540",
              "27%",
              [
                "Below customer limit",
                "late",
                "Sold to discounter",
                "ok"
              ]
            ],
            [
              "R-0529",
              "Ready mix 500 g",
              "1,100",
              "78%",
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
            "Ingredient lot",
            "Left",
            "Expires",
            "Plan needs",
            "Status"
          ],
          "rows": [
            [
              "Besan B-77",
              "620 kg",
              "28 Oct",
              "450 kg",
              [
                "Use first",
                "flag",
                "Planned",
                "ok"
              ]
            ],
            [
              "Palm oil O-31",
              "1,100 L",
              "12 Jan",
              "900 L",
              [
                "OK",
                "ok"
              ]
            ],
            [
              "Sesame S-19",
              "180 kg",
              "20 Oct",
              "60 kg",
              [
                "At risk",
                "late",
                "Return asked",
                "info"
              ]
            ]
          ]
        }
      ]
    },
    {
      "id": "quality",
      "title": "Quality and release",
      "meta": "Today",
      "heading": "Checks, holds and release",
      "caption": "Every check has a range. A result outside it holds the batch, and the hold stops picking and dispatch until the right person releases it with a reason.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Batch",
            "Check",
            "Result",
            "Range",
            "Status"
          ],
          "rows": [
            [
              "N-1017",
              "Moisture",
              "5.4%",
              "up to 4.5%",
              [
                "Hold",
                "late",
                "Re-test passed",
                "ok"
              ]
            ],
            [
              "P-0224",
              "pH",
              "3.6",
              "3.2 to 3.8",
              [
                "Pass",
                "ok"
              ]
            ],
            [
              "R-0533",
              "Seal strength",
              "Low",
              "Standard",
              [
                "Hold",
                "flag",
                "Re-sealed, released",
                "ok"
              ]
            ],
            [
              "N-1018",
              "Date code",
              "Matches",
              "Batch record",
              [
                "Pass",
                "ok"
              ]
            ]
          ]
        },
        {
          "type": "list",
          "items": [
            {
              "name": "Hold H-212, Namkeen N-1017",
              "meta": "Raised 12 Oct by Meena, 2,400 cartons",
              "tag": [
                "Release or destroy",
                "late",
                "Released",
                "ok"
              ]
            },
            {
              "name": "Customer complaint, Pickle P-0220",
              "meta": "Foreign matter, retained sample at shelf Q2",
              "tag": [
                "Investigate",
                "flag",
                "Closed",
                "ok"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "orders",
      "title": "Orders and dues",
      "meta": "This week",
      "heading": "Orders, returns and who owes what",
      "caption": "Orders with stock, packing material and line slot beside them. Returns recorded against the original batch. Dues by distributor, with approved returns netted off.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Order",
            "Customer",
            "Qty",
            "Packing material",
            "Promise"
          ],
          "rows": [
            [
              "SO-5120",
              "Metro Fresh Chain",
              "5,000 ctn",
              "Film short",
              [
                "At risk",
                "late",
                "Film arrives Wed",
                "ok"
              ]
            ],
            [
              "SO-5124",
              "Rao Distributors",
              "2,200 ctn",
              "Available",
              [
                "Fri",
                "ok"
              ]
            ],
            [
              "SO-5127",
              "Annapoorna Stores",
              "900 ctn",
              "Available",
              [
                "Sat",
                "ok"
              ]
            ]
          ]
        },
        {
          "type": "table",
          "cols": [
            "Distributor",
            "Owed",
            "Age",
            "Return pending",
            "Next step"
          ],
          "rows": [
            [
              "Rao Distributors",
              "₹18.2 lakh",
              "76 days",
              "₹1.1 lakh",
              [
                "Approve return",
                "flag",
                "Approved",
                "ok"
              ]
            ],
            [
              "Sai Traders",
              "₹12.6 lakh",
              "58 days",
              "None",
              [
                "Call due",
                "late"
              ]
            ],
            [
              "Metro Fresh Chain",
              "₹16.0 lakh",
              "34 days",
              "None",
              [
                "On track",
                "ok"
              ]
            ]
          ]
        }
      ]
    },
    {
      "id": "upkeep",
      "title": "Compliance and machines",
      "meta": "Due in the next 60 days",
      "heading": "Licences, hygiene checks and machines",
      "caption": "Each licence, test report, training certificate and contract has an owner and a date. Daily hygiene checks are signed during the day, and machine stops are recorded with a reason.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Item",
            "Owner",
            "Due",
            "Status"
          ],
          "rows": [
            [
              "Water test report",
              "Quality head",
              "31 Oct",
              [
                "Due in 15 days",
                "late",
                "Booked",
                "ok"
              ]
            ],
            [
              "Pest control contract",
              "Admin",
              "20 Nov",
              [
                "OK",
                "ok"
              ]
            ],
            [
              "Food safety supervisor certificate, Latha",
              "Quality head",
              "Dec",
              [
                "Check",
                "flag",
                "Booked",
                "info"
              ]
            ],
            [
              "Annual return, licensed units",
              "Owner",
              "Check date",
              [
                "Review",
                "flag",
                "Figures ready",
                "ok"
              ]
            ]
          ]
        },
        {
          "type": "checks",
          "items": [
            {
              "text": "Cold room temperature, morning",
              "meta": "3.8 C, Manoj, 7:10",
              "done": true
            },
            {
              "text": "Cold room temperature, evening",
              "meta": "Due 6 pm",
              "done": false
            },
            {
              "text": "Line 2 cleaning verified",
              "meta": "Quality, after shift",
              "done": false
            }
          ]
        },
        {
          "type": "bars",
          "items": [
            {
              "label": "Filling machine 1",
              "value": 62,
              "display": "3.1 h stopped, 5 causes"
            },
            {
              "label": "Sealing line",
              "value": 34,
              "display": "1.7 h stopped",
              "tone": "muted"
            },
            {
              "label": "Packing table",
              "value": 12,
              "display": "0.6 h stopped",
              "tone": "muted"
            }
          ]
        }
      ]
    }
  ],
  "dayHeading": "The same Thursday, before and after.",
  "dayLede": "What changes is not the recipe. It is that every step leaves a record, and the record does the chasing.",
  "day": [
    {
      "time": "8:00",
      "before": "The production head reads yesterday's output from a notebook and asks stores what is near expiry.",
      "after": "The Today screen shows 9 batches packed, 2 on hold and 1,140 cartons under 40 percent shelf life."
    },
    {
      "time": "10:30",
      "before": "A moisture reading is high. The line is busy and the batch is packed before anyone reacts.",
      "after": "The result is entered, the batch goes on hold, and the packing step for it cannot start until quality releases it."
    },
    {
      "time": "1:00",
      "before": "A supplier phones about a faulty ingredient lot. It takes two days to find the batches.",
      "after": "The lot opens with its three batches, the customers and the warehouse stock, with a call task for each."
    },
    {
      "time": "3:30",
      "before": "The oldest cartons sit at the back and a distributor rejects a pallet.",
      "after": "Allocation picks first-expiry-first-out against each customer's minimum shelf life."
    },
    {
      "time": "5:30",
      "before": "Cold room checks are ticked together before an audit.",
      "after": "Each reading was entered on time, and the missed evening one was flagged and assigned."
    },
    {
      "time": "Month end",
      "before": "Returns and dues are argued from memory.",
      "after": "Every return is tied to its batch and invoice, and dues are shown net of approved returns."
    }
  ],
  "approach": {
    "heading": "We set it up with you, in four weeks.",
    "lede": "You do not get a login and a manual. We spend time on your line, at receiving and at dispatch, build Verity around how your factory really runs, bring your data in, then stay to make sure it keeps working.",
    "phases": [
      {
        "when": "Week 1",
        "name": "Discovery and mapping",
        "we": "Spend a shift on the line. Follow an ingredient lot from receiving to a coded pack to a loaded truck, and note where each record is made.",
        "you": "Two to three hours of yours and your quality head's. A few batch sheets, a month of dispatches and the compliance calendar.",
        "get": "A written map of your factory: products, recipes, lot and batch codes, shelf life rules, quality checks, and the first gaps we will close."
      },
      {
        "when": "Weeks 2 to 3",
        "name": "Configuration",
        "we": "Set up products and recipes, batch and date code rules, check ranges, hold and release rules, customer minimum shelf life, licence dates, hygiene tasks, machines and the six screens in your terms.",
        "you": "Check the setup with quality and stores. Tell us where a range or a rule is wrong.",
        "get": "A working Verity with your real products, checks and people, ready for your data."
      },
      {
        "when": "Weeks 3 to 4",
        "name": "Migration and training",
        "we": "Bring in your customers, products, stock by batch and expiry, licence dates and open dues from your sheets and accounts export. Train receiving, the line, quality, the warehouse and accounts at their stations.",
        "you": "A stock count by batch and expiry, the dues list and licence copies. One hour with each role.",
        "get": "Your factory's data inside Verity and a team that has used it through a real batch and dispatch."
      },
      {
        "when": "After go-live",
        "name": "Operations partnership",
        "we": "Stay on after launch. Review the first weeks of holds, returns and dues with you, tune ranges and limits, and change setup when you add a product or a line.",
        "you": "A short monthly review of what the numbers say.",
        "get": "A system that keeps matching how the factory runs, with someone responsible for it."
      }
    ],
    "bring": [
      "Your product list with recipes and shelf life",
      "A month of batch and quality sheets",
      "Your ingredient lot register",
      "The licence and certificate list with expiry dates",
      "Distributor dues and a month of dispatch notes"
    ],
    "time": "About 9 to 12 hours of your own time across the four weeks, mostly in week 1. Quality, stores and accounts need a few more.",
    "after": "Nobody is hired to run Verity. Lots, batches and dispatches are recorded as part of work the factory already does, and the reports come from those records."
  },
  "ai": {
    "heading": "Ask your factory a question. Get an answer, not a report to build.",
    "lede": "Verity AI reads your own batches, lots, stock and dues. Ask in plain language, then turn the answer into tasks for the right people.",
    "examples": [
      {
        "q": "Which stock has less than 40 percent shelf life left?",
        "a": "Three batches, 1,140 cartons. One is already below the minimum for two of your customers.",
        "rows": [
          [
            "Namkeen N-1002",
            "860 ctn"
          ],
          [
            "Pickle P-0220",
            "540 ctn"
          ],
          [
            "Others",
            "0"
          ]
        ],
        "action": "Create sell-first tasks for sales"
      },
      {
        "q": "Which customers got ingredient lot CH-0412?",
        "a": "Five customers across three batches. One batch of 1,800 cartons is still in the warehouse.",
        "rows": [
          [
            "Customers",
            "5"
          ],
          [
            "Cartons shipped",
            "5,000"
          ],
          [
            "In warehouse",
            "1,800"
          ]
        ],
        "action": "Hold the warehouse batch and create call tasks"
      },
      {
        "q": "Why were returns higher in September?",
        "a": "Most came from two distributors and were Pickle batches below 30 percent shelf life at delivery.",
        "rows": [
          [
            "Rao Distributors",
            "62%"
          ],
          [
            "Sai Traders",
            "24%"
          ],
          [
            "Others",
            "14%"
          ]
        ]
      }
    ]
  },
  "automationHeading": "The follow-ups nobody has time to make.",
  "automationLede": "Set once, then they run from your records. Staff still call distributors and suppliers; Verity makes sure the right person knows what to do.",
  "automations": [
    {
      "when": "A check result is outside its range",
      "then": [
        "Batch placed on hold",
        "Task to the quality head",
        "Release or destroy decision recorded"
      ]
    },
    {
      "when": "An ingredient lot is within its expiry warning period",
      "then": [
        "Added to the use-first list",
        "Task to planning to use or return it",
        "Outcome recorded"
      ]
    },
    {
      "when": "A finished batch falls below a customer's minimum shelf life",
      "then": [
        "Removed from that customer's allocation",
        "Offered to customers with a lower limit",
        "Task to sales if still unsold"
      ]
    },
    {
      "when": "A supplier notifies a problem with a lot",
      "then": [
        "Every batch using the lot listed",
        "Unshipped batches held",
        "Call task for each customer affected"
      ]
    },
    {
      "when": "A licence, test or certificate is 60 days from its date",
      "then": [
        "Task to the owner with documents needed",
        "Reminder at 30 days",
        "Next date set when done"
      ]
    },
    {
      "when": "A return is requested above your limit",
      "then": [
        "Held for approval",
        "Routed to the owner with the batch and reason",
        "Credit note task created on approval"
      ]
    }
  ],
  "rules": {
    "heading": "The rules a food factory has to keep up with.",
    "lede": "Verity does not give legal advice and does not file anything for you. It keeps the records these rules depend on in order, so you are not hunting for them when someone asks.",
    "note": "Rules change and differ by category, turnover and state. Confirm current requirements with your consultant or the FSSAI licensing authority.",
    "items": [
      {
        "name": "FSSAI registration or licence",
        "what": "A food manufacturer needs FSSAI registration or a licence. From 1 April 2026 the basic registration band generally applies up to ₹1.5 crore turnover, a State Licence above that up to ₹50 crore, and a Central Licence generally above that, while some categories need a Central Licence regardless of turnover. Licences generally no longer need periodic renewal, but changes to particulars must be filed.",
        "how": "The registration or licence is a record with category, number and the changes that need filing. Capacity or product changes become tasks.",
        "source": {
          "name": "SetIndiaBiz",
          "url": "https://www.setindiabiz.com/blog/fssai-2026-reforms"
        }
      },
      {
        "name": "Recall plan and distribution records",
        "what": "The Food Safety and Standards (Food Recall Procedure) Regulations, 2017, generally expect a food business to keep a recall plan and distribution records that connect raw materials, batch and lot codes to the accounts that received the food. Check the retention period and reporting time in the regulation.",
        "how": "Lots, batches, dispatches and customers are linked records, so a recall list can be produced from them.",
        "source": {
          "name": "Taxguru",
          "url": "https://taxguru.in/corporate-law/fssai-food-recall-plan-procedure.html"
        }
      },
      {
        "name": "Food safety supervisors and Schedule 4 hygiene",
        "what": "FSSAI's FoSTaC programme trains food safety supervisors in good hygiene and manufacturing practices based on Schedule 4 of the licensing regulations. Check whether and how many certified supervisors your licence category requires.",
        "how": "Each person's training certificate sits on their record with an expiry date, and daily hygiene checks are signed off as tasks.",
        "source": {
          "name": "FSSAI FoSTaC",
          "url": "https://fostac.fssai.gov.in/about-fostac.jsp"
        }
      },
      {
        "name": "Annual return and local registrations",
        "what": "Licensed manufacturers are generally expected to file an annual return, and other registrations such as local trade, pollution consent where applicable, and weights and measures labelling rules apply. Dates and forms vary, so confirm them with FoSCoS or your consultant.",
        "how": "The return and each registration are tasks with an owner and a date, with production and sales figures totalled from batches and dispatches."
      },
      {
        "name": "Payment terms for micro and small suppliers",
        "what": "From 1 April 2024, a buyer that owes a micro or small seller generally must pay within the agreed period, capped at 45 days, or the amount is not deductible until paid.",
        "how": "Supplier bills show due dates against that limit so payments are planned.",
        "source": {
          "name": "SetIndiaBiz",
          "url": "https://www.setindiabiz.com/blog/msme-45-day-payment-rule"
        }
      }
    ]
  },
  "rolesHeading": "Everyone sees the same records, through their own window.",
  "rolesLede": "A line operator should not see distributor margins. Sales should not release a quality hold. Each role opens on what it needs.",
  "roles": [
    {
      "role": "Owner",
      "question": "Is the factory making money, and what is at risk?",
      "sees": "Margin by product and customer, holds, stock near expiry, returns, dues and compliance dates."
    },
    {
      "role": "Production head",
      "question": "What is packed, what is planned and what stopped?",
      "sees": "Batches, line slots, machine stops, packing material and order dates."
    },
    {
      "role": "Quality head",
      "question": "What is on hold, what is due and what is under complaint?",
      "sees": "Check results, holds, retained samples, complaints, licences and hygiene checks."
    },
    {
      "role": "Stores and dispatch",
      "question": "What is where and what goes first?",
      "sees": "Lots by expiry, finished goods by shelf life, pick order and dispatch checks."
    },
    {
      "role": "Accounts",
      "question": "What was bought, sold, returned and owed?",
      "sees": "Invoices tied to dispatches, returns credits, distributor dues and supplier bills with due dates."
    }
  ],
  "alongside": {
    "heading": "What changes, and what stays the same.",
    "keep": [
      "Your accounts software. We agree during setup how invoices and payments reach Verity.",
      "Your date coders and packing machines. Staff set them",
      "Verity checks the first printed pack against the batch record.",
      "Your food safety consultant, who still prepares and files what FSSAI needs.",
      "WhatsApp and phone with distributors. Staff talk",
      "Verity tracks who owes a reply."
    ],
    "not": [
      "Control your machines or lines.",
      "File your FSSAI returns or licence changes.",
      "Give food safety or legal advice.",
      "Send messages to distributors or suppliers on its own."
    ],
    "migration": "We bring your products, customers, stock by batch and expiry, licence dates and open dues across from the sheets, registers and accounts export you use now, in stages, so the factory keeps running while it happens."
  },
  "faqHeading": "Questions food factory owners ask.",
  "faqs": [
    [
      "Will my packing staff really record batch codes and checks?",
      "Only if it takes seconds at the point of work, so we set up entry at receiving, the line and dispatch with a few fields each. We train during a real shift and start with the records that matter most."
    ],
    [
      "Can Verity run first-expiry-first-out?",
      "Yes, if finished goods are held by batch and best-before date. Verity proposes the pick order for each order and shows the remaining shelf life against each customer's minimum."
    ],
    [
      "How does it help in a recall?",
      "It links ingredient lots to batches, batches to dispatches and dispatches to customers, so you can list the affected stock and customers in minutes. Your team still calls the customers and deals with the authority."
    ],
    [
      "Does it replace my accounts software?",
      "No. Your accounts stay where they are. We agree during setup how invoices and payments reach Verity, which then handles lots, batches, quality holds, shelf life and dues."
    ],
    [
      "Does it file my FSSAI returns or licence changes?",
      "No. It keeps the dates and figures in order and tells the right person what is due. You or your consultant files with the authority."
    ],
    [
      "I make seasonal products. Will it cope?",
      "Yes. Products and recipes can be active for a season, and ingredient lots show expiry against the plan, so seasonal stock is used or returned in time."
    ],
    [
      "Can I see two factories together?",
      "Yes. Each is a location in one system, with stock, holds, dispatches and dues side by side, and customers are the same across both."
    ],
    [
      "Who can see my data?",
      "Only the people you allow. Access is set by role, so the line, quality, sales and accounts each see what they need, and every change is recorded with who made it and when."
    ],
    [
      "How quickly will I see something useful?",
      "The shelf-life list, overdue dues and licence calendar need only your existing data, so we aim to have them first. Holds and traceability become reliable after a few weeks of recorded batches."
    ],
    [
      "What does it cost?",
      "It depends on the number of factories, people and what you want set up. Message us and we will give you a clear number after a short conversation about how your factory runs."
    ]
  ],
  "related": [
    "manufacturers",
    "packaging-companies",
    "distributors",
    "wholesalers",
    "bakeries",
    "exporters"
  ],
  "ctaHeading": "Start with the stock about to expire.",
  "ctaLede": "Tell us how your factory runs and we will show you the shelf-life list, the lot-to-customer trace and the dues it would find, using your own numbers."
};
