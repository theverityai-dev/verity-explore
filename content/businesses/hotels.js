export default {
  "schema": 2,
  "slug": "hotels",
  "status": "published",
  "plural": "hotels",
  "subject": "hotel",
  "checked": "15 October 2026",
  "seo": {
    "title": "Hotel management software for Indian hotels | Verity",
    "description": "The leaks in a hotel, from rooms that are not ready at check-in and OTA commission to group blocks and lapsed licences, what each costs, and the Verity screens that fix them.",
    "keywords": [
      "hotel management software India",
      "housekeeping room status tracking",
      "hotel group block and OTA commission tracking",
      "hotel maintenance work orders",
      "Form C foreign guest records"
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
    "workforce",
    "schedule",
    "locations",
    "ai"
  ],
  "hero": {
    "eyebrow": "Verity for hotels",
    "headline": "A hotel sells the same room every night. The profit is in what happens between guests.",
    "lede": "A hotel's only product is a clean, working room, ready on time, at the right rate, through the right channel. Behind each night is a rooms-ready list kept on a whiteboard, a group block that quietly expires, an air-conditioner that has been \"on the list\" for a month, a commission paid on a guest who would have called direct, and a register of foreign guests that must be filed within a day. Verity puts the rooms, the guests, the staff and the paperwork on one set of records, so the next problem is visible before the guest finds it.",
    "oneLine": "One system that knows every room, who is in it, who is cleaning it, what is broken, what the guest asked for and what each channel really earns.",
    "note": "Built for a front desk that is also taking calls and handling luggage. The records come from check-ins, housekeeping rounds and the bills you already handle.",
    "screen": "owner",
    "screenNote": "rooms, channels, groups, housekeeping and licences"
  },
  "today": {
    "heading": "Most hotels know their occupancy to the room and their leaks to the guess.",
    "paragraphs": [
      "The lobby is easy to see. The queue at check-in, the group arriving by bus, the full board on a long weekend. What is hard to see is what sits behind it: which rooms are still being cleaned at 2 pm, which are blocked for a fault nobody has fixed, how much of last month's revenue went to OTA commission, how many rooms a wedding block actually used, and whether every foreign guest was reported in time.",
      "That information lives in pieces. The booking system or register knows who is arriving. Housekeeping runs on a board and a walkie-talkie. Maintenance is a message to the engineer. Group contracts are in the sales manager's email. The licence file is with the general manager. The owner, who is often also the manager, holds the rest in memory.",
      "A year-end review of Indian hotels by a hospitality consultancy puts all-India occupancy for 2025 at 64 percent, average daily rate at ₹8,624 and revenue per available room at ₹5,522, with supply up 7.8 percent. The same review lists talent and skill shortage and weak weekend demand at city hotels among the challenges. A hotel with one-third of its rooms empty on an average night cannot afford to also lose rooms to delay, faults and commission."
    ],
    "stack": [
      "Booking register or front-office software",
      "OTA extranets and a phone",
      "Housekeeping board and walkie-talkie",
      "WhatsApp groups for staff and vendors",
      "Excel for rates, groups and stock"
    ],
    "stackNote": "Each one does its own job. None of them know about the others, and the night auditor is the only person who sees all of it, at 2 am."
  },
  "painsHeading": "Where a hotel actually loses money.",
  "painsLede": "These are the situations hotel owners and managers describe again and again. For each one: what it looks like on an ordinary day, what it costs, and what Verity does about it.",
  "pains": [
    {
      "area": "Rooms",
      "title": "Room availability kept in three places",
      "scene": "A phone booking is written in the register. The same room is sold on an OTA extranet. A walk-in is given a room that the sales manager promised to a regular. At 6 pm two guests stand at the desk holding confirmations for room 204.",
      "cost": "A guest walked to another hotel costs the room night, the compensation and the review. A room held back by caution is a night of rent with no sale.",
      "fix": "Rooms are records by type and number, with each night as booked, held, blocked or free, and the source of each booking. The front desk and the manager see one board. We agree during setup how bookings from your OTAs and the register reach Verity, and which one is the source of truth.",
      "screen": "rooms"
    },
    {
      "area": "Revenue",
      "title": "Commission paid with no view of the net rate",
      "scene": "A ₹4,200 room sold on an OTA leaves less than the same room sold direct. A discount funded by the hotel brings the rate lower still. The monthly statement is checked by no one, and a corporate client who would have called direct is booked through a portal out of habit.",
      "cost": "In 2018 the hotel association FHRAI said hotels were paying OTA commissions of 18 to 40 percent. Example arithmetic: 15 of 38 occupied rooms a night booked at 18 percent on ₹4,200 is about ₹11,300 a night, roughly ₹3.4 lakh a month.",
      "fix": "Every booking records its channel, rate and the commission or discount that applies. Verity shows what a room night actually leaves by channel, month by month, and lists repeat guests who came through a portal so your team can invite them to call direct next time.",
      "screen": "owner",
      "source": {
        "name": "The Statesman on FHRAI notice to MakeMyTrip and Goibibo, 2018",
        "url": "https://www.thestatesman.com/business/fhrai-puts-makemytrip-goibibo-notice-warns-nationwide-protest-issues-not-resolved-amicably-1502714077.html"
      }
    },
    {
      "area": "Groups",
      "title": "Wedding and group blocks that expire unused",
      "scene": "A family blocks 20 rooms for a wedding. The contract says the unused rooms are released a week before. Nobody sets a reminder. On the day only 12 are used, eight sit idle and the rooming list is a photo of a handwritten sheet.",
      "cost": "Example arithmetic: 8 idle rooms for 2 nights at ₹4,500 is ₹72,000 of room nights that could have been sold, plus the work of building the rooming list by hand.",
      "fix": "Each group is a record with its block, cut-off date, rate, pick-up and rooming list. Verity shows pick-up against the block, reminds the sales manager before the cut-off, and lists the rooms to release or confirm.",
      "screen": "groups"
    },
    {
      "area": "Groups",
      "title": "Corporate accounts, rate agreements and travel agents in an email thread",
      "scene": "A company has a negotiated rate for 30 room nights a month. A travel agent has a commission arrangement. Neither is written where the front desk can see it, so the agreed rate is not applied and the invoice is disputed.",
      "cost": "Disputed bills mean late payments, and unrecorded agreements mean undercharging or losing the account.",
      "fix": "Each account has its rates, credit terms, usage and last stay on one record. The front desk sees the agreed rate at booking, and the manager sees accounts below their promised volume or past their credit days.",
      "screen": "groups"
    },
    {
      "area": "Housekeeping",
      "title": "Rooms not ready at check-in time",
      "scene": "Checkout is at 11 and check-in at 2. By 1:45 there are four early arrivals at the desk and nine rooms still marked dirty. The housekeeping supervisor does not know which rooms the front desk needs first.",
      "cost": "Guests who wait in the lobby start the stay unhappy, and a late room means a late turn for the next guest in a full house. Staff then rush the rooms that need care.",
      "fix": "Each room has a status that housekeeping updates from the floor: to clean, cleaning, inspected, ready. Verity orders the list by arrival time, shows rooms at risk and the attendant for each, and tells the supervisor which to do first.",
      "screen": "rooms"
    },
    {
      "area": "Maintenance",
      "title": "Faults that stay \"on the list\"",
      "scene": "The air-conditioner in 312 is noisy. A leaking tap in 105 was reported on Monday. The engineer has no list, so the room is sold, the guest complains, and the room is blocked at the worst time.",
      "cost": "Example arithmetic: a room out of order for 5 nights because a fault was left until it failed is ₹21,000 at ₹4,200. A complaint in a review costs more than the repair.",
      "fix": "A fault is a work order with the room, the reporter, the priority and the engineer. A room with a serious fault is blocked from sale until it is closed, and the preventive schedule for pumps, lifts, boilers and air-conditioners raises tasks before they fail.",
      "screen": "upkeep"
    },
    {
      "area": "Guests",
      "title": "Guest requests lost between desk, housekeeping and kitchen",
      "scene": "A guest asks the desk for an extra pillow, a late checkout and a cake for the evening. The desk tells housekeeping by phone and the kitchen by a note. The pillow arrives; the cake does not.",
      "cost": "Small misses decide the review. They are cheap to fix when someone owns them and costly when nobody does.",
      "fix": "Each request is a task on the guest's stay, with an owner, a time and a state. Verity lists requests past their time, so the supervisor sees them before the guest calls again. Complaints are recorded with the outcome.",
      "screen": "guest"
    },
    {
      "area": "Guests",
      "title": "Repeat guests treated like strangers",
      "scene": "A business traveller has stayed 14 times and always asks for a high floor, a quiet room and an early breakfast. Each time the desk starts again. A family who stayed for a wedding last year is not invited back for the same date.",
      "cost": "Repeat guests cost far less to win than new ones. Without a record, they get no recognition and no reason to book direct.",
      "fix": "Each guest has a record with stays, preferences, requests and notes. At the next booking the desk sees the history, and Verity lists guests due for a thank-you or an invitation, as tasks for your team to act on.",
      "screen": "guest"
    },
    {
      "area": "Compliance",
      "title": "Foreign guest records, ID and the 24-hour rule",
      "scene": "A group of foreign guests arrives on a busy evening. The IDs are photographed later. The online form is filled the next day, or left for the weekend. No one has checked that every guest, including children, is reported.",
      "cost": "A Goa government notice of December 2025 says non-submission by an accommodation keeper under the Immigration and Foreigners Act 2025 carries a penalty of ₹50,000 in each case. Reporting is due within 24 hours of arrival.",
      "fix": "Each foreign guest's ID and form status sit on the arrival record. Verity lists arrivals whose form is not filed, with the time left, and raises a task for the person on duty. Your team files; Verity records that it was done.",
      "screen": "guest",
      "source": {
        "name": "Government of Goa, Department of Information and Publicity, 2025",
        "url": "https://www.goa.gov.in/wp-content/uploads/2025/12/ONLINE-FILLING-OF.pdf"
      }
    },
    {
      "area": "Stock",
      "title": "Linen, amenities and minibar counted by eye",
      "scene": "Sheets and towels go to the laundry and some do not return. Soap, shampoo and slippers are restocked by feel. The minibar is checked at checkout by whoever has time, and items are missed.",
      "cost": "Example arithmetic: 30 sets of linen that never return in a quarter at ₹900 a set is ₹27,000. Unbilled minibar items add up quietly.",
      "fix": "Linen, amenities and minibar items are stock records with a par level. Counts out to the laundry and back are recorded, and Verity shows the shortfall per batch and per vendor. Minibar use is entered against the room at checkout.",
      "screen": "supplies"
    },
    {
      "area": "Suppliers",
      "title": "Kitchen, banquet and room purchases from the same vendors",
      "scene": "The restaurant, the banquet and the rooms each order from their own vendors, by phone. Vegetable and dairy rates drift. A cleaning supplier's invoice is paid twice.",
      "cost": "Rates are not compared, the same vendor is paid from three places, and an invoice for something that did not arrive is paid.",
      "fix": "Purchases are recorded with the rate, the quantity received and the department. Verity compares order, receipt and invoice, flags a rate that moved beyond your limit and shows the total owed to each vendor across departments.",
      "screen": "supplies"
    },
    {
      "area": "People",
      "title": "Staff come and go, and the standard goes with them",
      "scene": "Housekeeping and front-office staff leave within a year. A new attendant is shown the floor for a day and put on a section. The shift roster is a photo in a WhatsApp group.",
      "cost": "A hospitality article in 2025, based on a survey by Booking.com and Statista, said accommodations plan to hire about ten staff each in the next year, with housekeeping and food and beverage most in demand. Constant hiring means constant retraining.",
      "fix": "Shifts, leave and rest days are one roster. Checklists for room inspection, front-desk handover and fire drills are records, and each person's training and sign-off are recorded. The manager sees who is cleared for which task.",
      "screen": "team",
      "source": {
        "name": "Booking.com and Statista, 2025 India Accommodation Barometer via HospitalityNet, 2025",
        "url": "https://www.hospitalitynet.org/opinion/4130834.html"
      }
    },
    {
      "area": "Compliance",
      "title": "Licences, tax rate changes and inspections",
      "scene": "The fire certificate, the FSSAI registration, the trade licence, the lift certificate and the liquor licence each have a different date. In September 2025 the room tax slabs changed. Nobody is sure which rooms are above the threshold.",
      "cost": "A notice, a fine or a sealed kitchen, and an invoice at the wrong rate. A lapsed licence on a long weekend is costly.",
      "fix": "Each licence, certificate and safety test is a record with a date and an owner, and a renewal is a task weeks ahead. Room rates are stored by room type so the accountant sees which fall above or below the tax slab. Your accountant decides the rate; Verity does not file anything.",
      "screen": "upkeep"
    },
    {
      "area": "Money",
      "title": "Extras and advances that do not reach the bill",
      "scene": "A guest takes a laundry bag, an extra bed and a late checkout. The desk notes some of it on a slip. A wedding family pays an advance in cash and by transfer. At checkout the bill omits two of the items.",
      "cost": "Example arithmetic: three missed extras a day at ₹600 each is ₹1,800 a day, about ₹54,000 a month.",
      "fix": "Extras and advances are entered on the stay as they happen. At checkout, Verity compares what was recorded with what was billed and flags what is missing. Your front-office system still makes the bill.",
      "screen": "owner"
    },
    {
      "area": "Money",
      "title": "The night audit finds the gap at 2 am",
      "scene": "The night auditor ties cash, card and UPI against the day's bills. They are ₹2,300 apart. Nobody on the evening shift can say why.",
      "cost": "A small daily gap becomes a monthly argument, and the owner stops trusting the numbers.",
      "fix": "The day's receipts by mode are compared with the bills and the advances recorded. A mismatch is flagged with the shift and amount, and the person on duty adds the reason before handover.",
      "screen": "owner"
    },
    {
      "area": "Owner",
      "title": "Several properties, one WhatsApp group",
      "scene": "A second hotel opens in another city. Occupancy, complaints and licence dates arrive on WhatsApp each night, in different words. The owner cannot compare the properties.",
      "cost": "You cannot see which property leaks, so the same leak runs in both.",
      "fix": "Each hotel is a location in one system, with occupancy, rate by channel, housekeeping speed, open faults, licence dates and complaints side by side. Each morning Verity lists what needs a decision, each with an owner.",
      "screen": "owner"
    }
  ],
  "factsHeading": "The numbers that make these problems worth fixing.",
  "factsLede": "From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.",
  "factsNote": "The performance figures are one consultancy's year-end review using CoStar data and cover all rated hotels. The commission figure is a 2018 hotel association claim, shown with its year, not an audited rate. The penalty is from a state government notice, so confirm the amount with your FRRO or the Bureau of Immigration. The tax slab is from a vendor summary of the September 2025 notification, so confirm it with your accountant.",
  "facts": [
    {
      "figure": "64%",
      "text": "all-India hotel occupancy in 2025, with an average daily rate of ₹8,624 and revenue per available room of ₹5,522. About one night in three, a room is empty.",
      "source": {
        "name": "Horwath HTL, India Hotel Market Review 2025, 2026",
        "url": "https://horwathhtl.com/wp-content/uploads/2026/02/HHTL-India-Market-Report-2025.pdf"
      }
    },
    {
      "figure": "18 to 40%",
      "text": "OTA commission that hotels said they were paying, according to the hotel association FHRAI in 2018. This is a complaint from the hotel side, not an audited figure.",
      "source": {
        "name": "The Statesman, 2018",
        "url": "https://www.thestatesman.com/business/fhrai-puts-makemytrip-goibibo-notice-warns-nationwide-protest-issues-not-resolved-amicably-1502714077.html"
      }
    },
    {
      "figure": "₹50,000",
      "text": "penalty in each case for an accommodation keeper who does not submit the foreign guest's details, which are due within 24 hours of arrival, under India's Immigration and Foreigners Act 2025.",
      "source": {
        "name": "Government of Goa notice, 2025",
        "url": "https://www.goa.gov.in/wp-content/uploads/2025/12/ONLINE-FILLING-OF.pdf"
      }
    },
    {
      "figure": "₹7,500",
      "text": "the room rate a night at or below which, from 22 September 2025, the tax rate on a hotel room is 5 percent without input tax credit; above it, 18 percent with credit.",
      "source": {
        "name": "Petpooja summary of the GST Council changes, 2026",
        "url": "https://blog.petpooja.com/finance-compliance/gst-on-hotel-rooms-slab-wise-rates/"
      }
    }
  ],
  "screensHeading": "The screens you would use every day.",
  "screensLede": "Seven views, each built for one job. Names, columns and terms are set up in your own hotel's language.",
  "screens": [
    {
      "id": "owner",
      "title": "Hotel / Today",
      "meta": "Property: Lakeview, 60 rooms",
      "heading": "The owner's morning view",
      "caption": "Occupancy, what each channel really leaves, rooms at risk, extras that did not reach the bill and anything that does not tie, on one screen, with the items needing a decision under it. It replaces the night auditor's message.",
      "blocks": [
        {
          "type": "kpis",
          "items": [
            {
              "label": "Occupancy",
              "value": "71%",
              "note": "43 of 60 rooms"
            },
            {
              "label": "Average rate",
              "value": "₹4,380",
              "note": "up ₹120 on last week"
            },
            {
              "label": "Rooms out of order",
              "value": "3",
              "note": "2 closing today"
            },
            {
              "label": "Unbilled extras",
              "value": "₹5,400",
              "note": "9 stays"
            }
          ]
        },
        {
          "type": "title",
          "text": "What a ₹4,200 room night leaves, by channel"
        },
        {
          "type": "bars",
          "items": [
            {
              "label": "Direct and corporate",
              "value": 96,
              "display": "₹4,030"
            },
            {
              "label": "Travel agent",
              "value": 88,
              "display": "₹3,700"
            },
            {
              "label": "OTA A",
              "value": 82,
              "display": "₹3,444",
              "tone": "muted"
            },
            {
              "label": "OTA B",
              "value": 78,
              "display": "₹3,276",
              "tone": "muted"
            }
          ]
        },
        {
          "type": "alert",
          "text": "Cash, card and UPI differ from the day's bills by ₹2,300. 4 stays unmatched on the evening shift.",
          "action": "Review"
        },
        {
          "type": "list",
          "items": [
            {
              "name": "Wedding block, Mehra family: cut-off in 3 days",
              "meta": "20 rooms blocked, 12 picked up",
              "tag": [
                "Release",
                "late",
                "Released 6",
                "ok"
              ]
            },
            {
              "name": "Room 312 air-conditioner fault",
              "meta": "Reported Monday, engineer not assigned",
              "tag": [
                "Assign",
                "flag",
                "Fixed",
                "ok"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "rooms",
      "title": "Rooms and housekeeping",
      "meta": "Check-in from 2 pm",
      "heading": "Which rooms are ready, and for whom",
      "caption": "Every room's state by the hour, ordered by arrival time, with the attendant and the minutes taken. Faults block a room from sale until they are closed.",
      "blocks": [
        {
          "type": "board",
          "columns": [
            {
              "name": "To clean",
              "cards": [
                {
                  "title": "Room 204, Deluxe",
                  "meta": "Arrival 1:30 pm, Gupta family",
                  "tag": [
                    "First",
                    "late",
                    "Started",
                    "info"
                  ]
                },
                {
                  "title": "Room 118, Standard",
                  "meta": "Arrival 3 pm",
                  "tag": [
                    "Queue",
                    "flag"
                  ]
                }
              ]
            },
            {
              "name": "Cleaning",
              "cards": [
                {
                  "title": "Room 207, Deluxe",
                  "meta": "Anita, floor 2, 22 min",
                  "tag": [
                    "On time",
                    "ok"
                  ]
                }
              ]
            },
            {
              "name": "Ready",
              "cards": [
                {
                  "title": "Room 301, Suite",
                  "meta": "Inspected 12:40",
                  "tag": [
                    "Ready",
                    "ok"
                  ]
                },
                {
                  "title": "Room 312, Deluxe",
                  "meta": "Air-conditioner fault",
                  "tag": [
                    "Blocked",
                    "late",
                    "Fixed",
                    "ok"
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "table",
          "cols": [
            "Attendant",
            "Floor",
            "Rooms today",
            "Avg minutes",
            "Status"
          ],
          "rows": [
            [
              "Anita",
              "2",
              "11",
              "28",
              [
                "On pace",
                "ok"
              ]
            ],
            [
              "Santosh",
              "1",
              "10",
              "34",
              [
                "Behind",
                "late",
                "Helped",
                "ok"
              ]
            ],
            [
              "Meena",
              "3",
              "9",
              "26",
              [
                "On pace",
                "ok"
              ]
            ]
          ]
        }
      ]
    },
    {
      "id": "groups",
      "title": "Groups and accounts",
      "meta": "Next 30 days",
      "heading": "Blocks, cut-offs and corporate accounts",
      "caption": "Each wedding, conference and company has a block, a cut-off, a rate, a pick-up and a rooming list. Account rates and credit terms are visible when the desk takes a booking.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Group",
            "Block",
            "Picked up",
            "Cut-off",
            "Rooming list",
            "Status"
          ],
          "rows": [
            [
              "Mehra wedding",
              "20 rooms",
              "12",
              "21 Oct",
              "8 names missing",
              [
                "Release 8",
                "late",
                "Released",
                "ok"
              ]
            ],
            [
              "Infra Tech conference",
              "30 rooms",
              "28",
              "25 Oct",
              "Complete",
              [
                "On track",
                "ok"
              ]
            ],
            [
              "Bose family",
              "10 rooms",
              "6",
              "28 Oct",
              "4 names missing",
              [
                "Follow up",
                "flag"
              ]
            ],
            [
              "Alumni meet",
              "15 rooms",
              "15",
              "30 Oct",
              "Complete",
              [
                "Full",
                "ok"
              ]
            ]
          ]
        },
        {
          "type": "list",
          "items": [
            {
              "name": "Rao & Co, corporate rate ₹3,600",
              "meta": "18 of 30 promised room nights used",
              "tag": [
                "Below volume",
                "flag"
              ]
            },
            {
              "name": "Skyline Travels, agent",
              "meta": "Invoice 41 days old",
              "tag": [
                "Chase",
                "late",
                "Paid",
                "ok"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "guest",
      "title": "Arrivals and guests",
      "meta": "Today",
      "heading": "Arrivals, requests and the guest record",
      "caption": "Each arrival shows ID and foreign-guest form status, special requests and history. Requests are tasks with an owner and a time, and the form status counts down from arrival.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Guest",
            "Room",
            "ID checked",
            "Foreign form",
            "Requests",
            "Status"
          ],
          "rows": [
            [
              "Hans Weber, 2 guests",
              "204",
              "Yes",
              "Due 6:10 pm",
              "Early check-in",
              [
                "File form",
                "late",
                "Filed",
                "ok"
              ]
            ],
            [
              "Priya Nair",
              "301",
              "Yes",
              "Not needed",
              "High floor",
              [
                "Ready",
                "ok"
              ]
            ],
            [
              "Gupta family, 4",
              "207",
              "Pending",
              "Not needed",
              "Cot, cake at 8 pm",
              [
                "ID pending",
                "flag",
                "Checked",
                "ok"
              ]
            ],
            [
              "Mr and Mrs Fernandes",
              "118",
              "Yes",
              "Not needed",
              "Quiet room",
              [
                "Ready",
                "ok"
              ]
            ]
          ]
        },
        {
          "type": "record",
          "title": "Priya Nair",
          "sub": "14 stays since 2023. Business traveller, Pune",
          "fields": [
            [
              "Usual room",
              "High floor, quiet"
            ],
            [
              "Breakfast",
              "6:30 am, South Indian"
            ],
            [
              "Last stay",
              "2 September"
            ],
            [
              "Rate",
              "Corporate, ₹3,600"
            ],
            [
              "Open request",
              [
                "Late checkout asked",
                "flag",
                "Approved",
                "ok"
              ]
            ]
          ],
          "timeline": [
            [
              "2 Sep",
              "Room 301, breakfast moved to 6:15"
            ],
            [
              "11 Aug",
              "Complaint: slow wi-fi, fixed by engineer"
            ],
            [
              "Note",
              "Prefers a call before arrival"
            ]
          ]
        }
      ]
    },
    {
      "id": "upkeep",
      "title": "Maintenance and licences",
      "meta": "Due in the next 60 days",
      "heading": "Faults, licences and safety checks",
      "caption": "A fault is a work order with an owner, and the room is blocked until it is closed. Licences, safety tests and preventive jobs have a date and a person.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Item",
            "Place",
            "Due",
            "Owner",
            "Status"
          ],
          "rows": [
            [
              "Air-conditioner noise",
              "Room 312",
              "Today",
              "Engineer",
              [
                "Open",
                "late",
                "Fixed",
                "ok"
              ]
            ],
            [
              "Leaking tap",
              "Room 105",
              "Today",
              "Plumber",
              [
                "Open",
                "flag",
                "Fixed",
                "ok"
              ]
            ],
            [
              "Lift safety test",
              "Both lifts",
              "30 Nov",
              "Manager",
              [
                "Book",
                "flag",
                "Booked",
                "ok"
              ]
            ],
            [
              "Fire certificate and drill",
              "Property",
              "Check date",
              "Owner",
              [
                "Check",
                "flag",
                "Confirmed",
                "ok"
              ]
            ],
            [
              "FSSAI registration",
              "Kitchen",
              "Check category",
              "Manager",
              [
                "Check",
                "flag",
                "Confirmed",
                "ok"
              ]
            ]
          ]
        },
        {
          "type": "checks",
          "items": [
            {
              "text": "Fire exits and extinguishers, weekly walk",
              "meta": "Due Saturday, security lead",
              "done": false
            },
            {
              "text": "Boiler pressure check",
              "meta": "Done 6 am, engineer",
              "done": true
            }
          ]
        }
      ]
    },
    {
      "id": "supplies",
      "title": "Supplies",
      "meta": "Linen, amenities and purchases",
      "heading": "Linen, amenities and what vendors charge",
      "caption": "Linen out to the laundry and back, amenity stock against par level, and what each vendor charged. Order, receipt and invoice are compared before payment.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Item",
            "In rooms",
            "In laundry",
            "In store",
            "Par",
            "Status"
          ],
          "rows": [
            [
              "Bed sheets, double",
              "58",
              "44",
              "62",
              "180",
              [
                "Short 16",
                "late",
                "Ordered",
                "ok"
              ]
            ],
            [
              "Bath towels",
              "112",
              "70",
              "130",
              "300",
              [
                "Short 12",
                "flag"
              ]
            ],
            [
              "Shampoo sachets",
              "n/a",
              "n/a",
              "420",
              "500",
              [
                "OK",
                "ok"
              ]
            ],
            [
              "Slippers",
              "n/a",
              "n/a",
              "90",
              "200",
              [
                "Reorder",
                "flag",
                "Ordered",
                "ok"
              ]
            ]
          ]
        },
        {
          "type": "table",
          "cols": [
            "Vendor",
            "Item",
            "Last rate",
            "Change",
            "Delivery check"
          ],
          "rows": [
            [
              "CleanLine Laundry",
              "Sheet wash",
              "₹14",
              [
                "No change",
                "ok"
              ],
              [
                "12 sets not returned",
                "late",
                "Credit asked",
                "info"
              ]
            ],
            [
              "Fresh Farms",
              "Vegetables, weekly",
              "₹21,400",
              [
                "+7%",
                "flag"
              ],
              [
                "Matched",
                "ok"
              ]
            ],
            [
              "Gupta Supplies",
              "Amenities",
              "₹9,800",
              [
                "No change",
                "ok"
              ],
              [
                "Matched",
                "ok"
              ]
            ]
          ]
        }
      ]
    },
    {
      "id": "team",
      "title": "Roster and training",
      "meta": "Next week",
      "heading": "Shifts that follow arrivals, and a trained bench",
      "caption": "Arrivals and checkouts by hour set against the housekeeping and front-desk roster. Training and sign-offs sit on each person's record.",
      "blocks": [
        {
          "type": "title",
          "text": "Checkouts and arrivals per hour against staff on shift, Saturday"
        },
        {
          "type": "bars",
          "items": [
            {
              "label": "8 to 11 am",
              "value": 70,
              "display": "26 checkouts, 6 attendants"
            },
            {
              "label": "11 am to 2 pm",
              "value": 100,
              "display": "38 rooms to turn, 7 attendants"
            },
            {
              "label": "2 to 6 pm",
              "value": 80,
              "display": "31 arrivals, 3 at desk"
            },
            {
              "label": "6 to 10 pm",
              "value": 35,
              "display": "11 arrivals, 2 at desk",
              "tone": "muted"
            }
          ]
        },
        {
          "type": "table",
          "cols": [
            "Person",
            "Role",
            "Cleared for",
            "Training",
            "Shift"
          ],
          "rows": [
            [
              "Anita",
              "Attendant",
              "Rooms, suites",
              [
                "Complete",
                "ok"
              ],
              "Mon to Fri"
            ],
            [
              "Rahul",
              "Front desk",
              "Check-in, night audit",
              [
                "Fire drill due",
                "late",
                "Booked",
                "info"
              ],
              "Tue to Sat"
            ],
            [
              "Zainab",
              "New hire",
              "Rooms",
              [
                "Week 2 of 3",
                "info"
              ],
              "Mon to Fri"
            ]
          ]
        }
      ]
    }
  ],
  "dayHeading": "The same Saturday, before and after.",
  "dayLede": "What changes is not the lobby or the staff. It is that the day leaves a record, and the record does the chasing.",
  "day": [
    {
      "time": "6:30 am",
      "before": "The manager walks the corridors with a notebook, listing what needs fixing and who needs to know.",
      "after": "The Today screen shows 3 rooms out of order, 2 closing today, and a wedding block with a cut-off in three days."
    },
    {
      "time": "11:00 am",
      "before": "Checkout is a rush. The housekeeping supervisor does not know which rooms the desk needs first.",
      "after": "Rooms are ordered by arrival time. Room 204 is first, with Anita assigned."
    },
    {
      "time": "2:00 pm",
      "before": "Four early arrivals wait in the lobby while nine rooms are still being turned.",
      "after": "Seven rooms are ready, two are in progress, and the desk knows which guest to offer a room to first."
    },
    {
      "time": "5:30 pm",
      "before": "A foreign guest has checked in, and the online form waits for tomorrow.",
      "after": "The arrival shows the form due at 6:10 pm. The person on duty files it and marks it done."
    },
    {
      "time": "8:00 pm",
      "before": "The guest who asked for a cake at 2 pm asks again.",
      "after": "The request was a task for the kitchen. It was flagged at 6 pm, and the cake is delivered at 7:55."
    },
    {
      "time": "Night audit",
      "before": "Cash and bills differ by ₹2,300 and no one can say why.",
      "after": "Four stays do not tie. The evening shift adds the reasons before handover."
    }
  ],
  "approach": {
    "heading": "We set it up with you, in four weeks.",
    "lede": "You do not get a login and a manual. We spend time at your front desk and on the floors, build Verity around how your hotel really runs, bring your data in, then stay to make sure it keeps working.",
    "phases": [
      {
        "when": "Week 1",
        "name": "Discovery and mapping",
        "we": "Spend a checkout-to-check-in window at your hotel, and a night audit. Watch how a room goes from occupied to ready, how a fault is reported, how a group is handled and how the day is closed, and note which leaks matter most.",
        "you": "Two to three hours of yours and your general manager's. Access to your room list and rates, a month of booking reports, group contracts and the licence file.",
        "get": "A written map of your hotel: room types and rates, channels, housekeeping flow, maintenance schedule, vendors, licences and the first leaks we will close."
      },
      {
        "when": "Weeks 2 to 3",
        "name": "Configuration",
        "we": "Set up your rooms and types, channels, rates, group and account records, housekeeping steps, maintenance schedules, stock lists, shifts and licences, and build the seven screens around your own terms.",
        "you": "Check the setup with your housekeeping head, front-office manager and engineer. Tell us where a rule or a name is wrong.",
        "get": "A working Verity with your real rooms, staff and rules, ready for your data."
      },
      {
        "when": "Weeks 3 to 4",
        "name": "Migration and training",
        "we": "Bring in your guest list, upcoming groups, account rates, vendor details, stock counts and licence dates from the registers and sheets you use. Train housekeeping, the front desk, maintenance and the night auditor at their stations during a live shift.",
        "you": "Your guest history and group diary in whatever form they exist, and an opening count of linen and amenities. One hour with each role.",
        "get": "Your rooms, groups and suppliers inside Verity, and a team that has used it through a check-in rush."
      },
      {
        "when": "After go-live",
        "name": "Operations partnership",
        "we": "Stay on after launch. Review the first weeks with you, tune the limits and checklists, and handle changes when you add a room type, a channel, a vendor or a property.",
        "you": "A short monthly review of what the numbers say.",
        "get": "A system that keeps matching how the hotel runs, with someone responsible for it."
      }
    ],
    "bring": [
      "Your room list with types and published rates",
      "A month of booking and billing reports from your front-office system",
      "Group and corporate contracts, even if they are emails",
      "Your vendor list with the last invoices",
      "The licence file and the dates of safety tests",
      "The housekeeping and front-desk roster for the last month"
    ],
    "time": "About 9 to 12 hours of your own time across the four weeks, mostly in week 1. Your housekeeping head, front-office manager and engineer need a few more.",
    "after": "Nobody is hired to run Verity. Room status, faults and requests are recorded as part of work the team already does, and the reports come from those records."
  },
  "ai": {
    "heading": "Ask your hotel a question. Get an answer, not a report to build.",
    "lede": "Verity AI reads your own rooms, bookings, staff and maintenance records. Ask in plain language, then turn the answer into tasks for the right people.",
    "examples": [
      {
        "q": "Which rooms will not be ready for the 2 pm arrivals?",
        "a": "Two of the nine rooms still to clean are needed before 3 pm: 204 and 118. Room 312 is blocked for a fault.",
        "rows": [
          [
            "Room 204",
            "Arrival 1:30 pm"
          ],
          [
            "Room 118",
            "Arrival 3 pm"
          ],
          [
            "Room 312",
            "Blocked, fault"
          ]
        ],
        "action": "Assign Santosh to 204 and 118"
      },
      {
        "q": "How much commission did we pay OTAs last month, and for how many repeat guests?",
        "a": "About ₹3.4 lakh on 410 room nights. 96 of those room nights were by guests who had stayed before.",
        "rows": [
          [
            "OTA A",
            "₹1.9 lakh"
          ],
          [
            "OTA B",
            "₹1.5 lakh"
          ],
          [
            "Repeat guests via OTAs",
            "96 room nights"
          ]
        ],
        "action": "Create invitation tasks for the front-office manager"
      },
      {
        "q": "Which groups have rooms that will expire this week?",
        "a": "The Mehra wedding has 8 unused rooms with a cut-off on 21 October. The Bose family has 4.",
        "rows": [
          [
            "Mehra wedding",
            "8 rooms"
          ],
          [
            "Bose family",
            "4 rooms"
          ]
        ],
        "action": "Create release tasks for the sales manager"
      }
    ]
  },
  "automationHeading": "The follow-ups nobody has time to make.",
  "automationLede": "Set once, then they run from your records. Staff still talk to guests and vendors; Verity makes sure the right person knows what to do.",
  "automations": [
    {
      "when": "A room is checked out",
      "then": [
        "Status set to to-clean and ordered by next arrival",
        "Task to the floor attendant",
        "Inspection step before it shows as ready"
      ]
    },
    {
      "when": "A fault is reported on a room",
      "then": [
        "Work order to the engineer with priority",
        "Room blocked from sale if serious",
        "Sold again only when the order is closed"
      ]
    },
    {
      "when": "A group cut-off is a week away",
      "then": [
        "Pick-up shown against the block",
        "Reminder to the sales manager",
        "Rooms released or confirmed and recorded"
      ]
    },
    {
      "when": "A foreign guest arrives",
      "then": [
        "Form task to the person on duty with the time left",
        "Reminder before the 24 hours end",
        "Done status recorded on the arrival"
      ]
    },
    {
      "when": "Linen or amenity stock falls below par",
      "then": [
        "Order drafted for the vendor",
        "Count out and back recorded for the laundry",
        "Shortfall marked against the batch"
      ]
    },
    {
      "when": "A licence, certificate or safety test is 45 days from its date",
      "then": [
        "Task to the person who owns it",
        "Papers and the last renewal shown on the task",
        "Next date set when done"
      ]
    }
  ],
  "rules": {
    "heading": "The rules a hotel has to keep up with.",
    "lede": "Verity does not give legal or tax advice and does not file anything for you. It keeps the records these rules depend on in order, so you are not hunting for them when an officer asks.",
    "note": "Rules change and differ by state. Confirm current requirements with your accountant or the relevant authority.",
    "items": [
      {
        "name": "Foreign guest reporting",
        "what": "Under the Immigration and Foreigners Act 2025, in force from 1 September 2025, accommodation keepers generally must submit a foreign guest's details electronically within 24 hours of arrival, on the form earlier called Form C. A Goa government notice states a penalty of ₹50,000 in each case for not doing so. Registration of your account is with the FRRO.",
        "how": "Each arrival shows ID and form status, with the time left. A task goes to the person on duty, and the filing is recorded.",
        "source": {
          "name": "Government of Goa, 2025",
          "url": "https://www.goa.gov.in/wp-content/uploads/2025/12/ONLINE-FILLING-OF.pdf"
        }
      },
      {
        "name": "Tax on room rates",
        "what": "From 22 September 2025, rooms at ₹7,500 or less per night are generally taxed at 5 percent without input tax credit, and rooms above that at 18 percent with credit. The test uses the rate actually charged, and borderline cases should be confirmed with your accountant.",
        "how": "Rates by room type and the rate charged on each stay are recorded, so your accountant sees which fall on either side. Verity does not file returns.",
        "source": {
          "name": "Petpooja, 2026",
          "url": "https://blog.petpooja.com/finance-compliance/gst-on-hotel-rooms-slab-wise-rates/"
        }
      },
      {
        "name": "FSSAI registration or licence for the kitchen",
        "what": "A hotel that serves food needs FSSAI registration or a licence. From 1 April 2026 the basic registration band generally applies up to ₹1.5 crore of turnover and a state licence above that up to ₹50 crore. Licences generally no longer need renewal, but hygiene duties continue. Check your category.",
        "how": "The registration or licence is a record with its number and category, and daily hygiene checks are signed off by the kitchen.",
        "source": {
          "name": "SetIndiaBiz, 2026",
          "url": "https://www.setindiabiz.com/blog/fssai-2026-reforms"
        }
      },
      {
        "name": "Fire safety, building and local licences",
        "what": "Hotels generally need fire safety clearance, local trade or hotel licences, lift certificates and, if alcohol is served, an excise licence. Each is set by the state or city and renewed on its own date.",
        "how": "Each is a record with its date and owner. A renewal opens as a checklist weeks ahead, with the last papers attached."
      },
      {
        "name": "Music and entertainment licences",
        "what": "Playing recorded or live music in the lobby, restaurant or banquet generally needs licences from the music rights bodies. Rates change, so confirm with them.",
        "how": "The licences are records with a renewal date, and event nights check the cover before the event."
      }
    ]
  },
  "rolesHeading": "Everyone sees the same records, through their own window.",
  "rolesLede": "An attendant should not see room revenue. The front desk should not edit vendor rates. Each role opens on what it needs.",
  "roles": [
    {
      "role": "Owner",
      "question": "Is the hotel making money, and where is it going?",
      "sees": "Occupancy, rate by channel, commission paid, open faults, licence dates and every property side by side."
    },
    {
      "role": "General manager",
      "question": "What needs sorting today?",
      "sees": "Rooms at risk for check-in, groups to release, approvals waiting, faults open, complaints and licence tasks."
    },
    {
      "role": "Housekeeping supervisor",
      "question": "Which rooms do I do first?",
      "sees": "Rooms by status and arrival time, attendants assigned, inspection steps and linen counts."
    },
    {
      "role": "Front desk",
      "question": "Who is arriving and what do they need?",
      "sees": "Arrivals with ID and form status, requests, guest history, account rates and block rooms."
    },
    {
      "role": "Engineer",
      "question": "What is broken and what is due?",
      "sees": "Work orders by room and priority, preventive jobs, vendor details and the history of each machine."
    }
  ],
  "alongside": {
    "heading": "What changes, and what stays the same.",
    "keep": [
      "Your front-office or booking system. We agree during setup how bookings and bills reach Verity.",
      "Your OTA extranets and channel tools. We record the channel and rate of each booking.",
      "WhatsApp for staff and vendors. Staff reply",
      "Verity tracks who owes a reply.",
      "Your accountant, who still prepares your returns."
    ],
    "not": [
      "Run your billing or reservations, or take online bookings.",
      "Sell rooms on portals or manage your rates and inventory on them.",
      "Send messages to guests or vendors on its own.",
      "File your foreign guest forms, returns or run your payroll."
    ],
    "migration": "We bring your rooms, guest history, account rates, vendor details, stock counts and licence dates across from the registers, sheets and phones you use now, in stages, so the hotel keeps running while it happens."
  },
  "faqHeading": "Questions hotel owners ask.",
  "faqs": [
    [
      "Does Verity replace my front-office or booking system?",
      "No. Your system keeps taking bookings and making bills. We agree during setup how bookings, stays and payments reach Verity, which then does the housekeeping, maintenance, group, stock and guest work around them."
    ],
    [
      "Can it manage my OTA rates and room inventory?",
      "No. Your channel tools keep doing that. Verity records the channel and rate of each booking so you can see what each channel really leaves, and which repeat guests came through a portal."
    ],
    [
      "Will my housekeeping staff actually update room status?",
      "Only if it takes a few seconds, so we set it up as one tap from a phone or a screen on the floor, and train attendants on their own floor during a live shift. If your staff do not carry phones, a supervisor can update rooms from a printed sheet at the end of each round."
    ],
    [
      "Can it file my foreign guest forms?",
      "No. Your team files them. Verity shows which arrivals have a form due, how many hours are left, and records when it is done."
    ],
    [
      "How would it help with groups and weddings?",
      "Each group is a record with its block, cut-off, rate, pick-up and rooming list. Verity reminds your sales manager before the cut-off and shows which rooms to release or confirm."
    ],
    [
      "I run a 20-room hotel with a small team. Is this too much?",
      "A small hotel has the same leaks and less time to notice them. We set up only what you need, in the same four weeks, and leave out what you do not."
    ],
    [
      "I have a hotel in two cities. Can I see them together?",
      "Yes. Each is a location in one system, with occupancy, channels, housekeeping, faults and licences side by side. Guests are the same people across both."
    ],
    [
      "Who can see my data?",
      "Only the people you allow. Access is set by role, so housekeeping, the front desk, engineers and your accountant each see what they need, and every change is recorded with who made it and when."
    ],
    [
      "What does it cost?",
      "It depends on the number of rooms, properties and what you want set up. Message us and we will give you a clear number after a short conversation about how your hotel runs."
    ]
  ],
  "related": [
    "resorts",
    "guest-houses",
    "restaurants",
    "event-venues",
    "catering-businesses",
    "hostels"
  ],
  "ctaHeading": "Start with the rooms that are not ready at two.",
  "ctaLede": "Tell us how your hotel runs and we will show you the room delays, expiring group blocks and open faults it would find, using your own numbers."
};
