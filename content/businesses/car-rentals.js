export default {
  "schema": 2,
  "slug": "car-rentals",
  "status": "published",
  "plural": "car rental businesses",
  "subject": "car rental business",
  "checked": "16 October 2026",
  "seo": {
    "title": "Car rental management software for Indian operators | Verity",
    "description": "Fleet availability, bookings and trips, damage and challans, service and document expiry, driver duty: the quiet losses in a car rental business and how Verity fixes them.",
    "keywords": [
      "car rental management software India",
      "fleet availability and booking tracking",
      "damage and challan recovery",
      "vehicle insurance permit and PUC expiry",
      "chauffeur driven rental duty roster"
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
    "ai",
    "logistics"
  ],
  "hero": {
    "eyebrow": "Verity for car rentals",
    "headline": "A rental car earns only when it is on the road, and it costs you whether it is or not.",
    "lede": "A rental fleet is a set of assets that make money by the day. The loss is in the gaps: a car idle between bookings, a car off the road for a repair nobody scheduled, a challan that arrives a month after the renter has gone, damage found at handover with no photo from pickup, a permit that expired last week. Verity connects the car, the booking, the trip, the incident and the paperwork, so each gap is visible while you can still act on it.",
    "oneLine": "One system that knows every car's availability and papers, every booking and trip, every damage and challan, every service due and every driver on duty.",
    "note": "Your booking channels, GPS devices and accounting tool stay. Verity records the bookings, handovers, incidents and paperwork around them.",
    "screen": "owner",
    "screenNote": "fleet, trips, incidents, upkeep and drivers"
  },
  "today": {
    "heading": "Most rental operators know how many cars they own and not how many were earning yesterday.",
    "paragraphs": [
      "The counter is simple. A car goes out, a car comes back. What is hard to see is the rest: which cars have been idle for six days, which are due for service, what each trip cost in fuel, damage and fines, and which documents expire this month.",
      "That information exists in pieces. A booking sheet or portal. A WhatsApp group for drivers. Photos of handover on someone's phone. A folder of insurance and permit copies. A notebook of service dates. The owner holds the rest in memory, often while also handling bookings.",
      "The market is growing from a small base. One research firm estimates India's self-drive rental market at about USD 141 million in 2025, growing around 14 percent a year to 2031, in a business where unlicensed private cars compete with licensed fleets and regulators have begun to act."
    ],
    "stack": [
      "Booking sheet or portal",
      "WhatsApp with drivers and renters",
      "Phone photos at handover",
      "Folder of insurance, permit and fitness copies",
      "Excel for service dates and expenses"
    ],
    "stackNote": "Each tool does its own job. None of them tells you that the car going out today has a permit that expires on Friday."
  },
  "painsHeading": "Where a car rental business actually loses money.",
  "painsLede": "These are the situations rental operators describe again and again. For each one: what it looks like on an ordinary day, what it costs, and what Verity does about it.",
  "pains": [
    {
      "area": "Fleet",
      "title": "Cars sit idle between bookings and nobody sees it",
      "scene": "A hatchback has been parked since Monday. A sedan was double-promised for the weekend. The booking sheet shows both as \"available\" because nobody updated them after the last return.",
      "cost": "Example arithmetic: a car that earns ₹2,500 a day and is idle for six days a month leaves ₹15,000 a month on the table, per car.",
      "fix": "Every car has a calendar of bookings, trips, service and repair. Verity shows availability by car and date, lists cars idle for more than a set number of days and warns about double bookings.",
      "screen": "fleet"
    },
    {
      "area": "Fleet",
      "title": "A car is promised that is not ready",
      "scene": "The customer arrives at 9 am. The car is in the garage for a brake job that the workshop said would be done yesterday. The substitute has a different fuel type and a different price.",
      "cost": "A refused booking, a discount, or a customer who never returns.",
      "fix": "Repairs and service are tasks on the car's calendar with an expected return date. Verity blocks the car for new bookings until the repair is signed off and suggests an equal car that is free.",
      "screen": "fleet"
    },
    {
      "area": "Bookings",
      "title": "Bookings come from many channels and are entered by hand",
      "scene": "A walk-in, a call, an aggregator listing, a corporate email and a WhatsApp message for the same weekend. Each is written in a different place and some are entered late.",
      "cost": "Double bookings, a car sent to the wrong customer, and a pricing mistake on a long trip.",
      "fix": "Each booking is a record with renter, car, dates, price, deposit and source. Verity shows all bookings on one calendar and flags clashes. Where bookings come from a portal, we agree during setup how they reach Verity.",
      "screen": "trips"
    },
    {
      "area": "Trips",
      "title": "Handover has no condition record, so damage is argued",
      "scene": "A car returns with a scratch on the left door. The renter says it was there before. The pickup photos are on an employee's phone, who left last month.",
      "cost": "A repair bill that falls on you, or a dispute with a customer, over damage that no one can place in time.",
      "fix": "Pickup and return have a condition checklist with photos, fuel level, odometer and the renter's acknowledgement, attached to the trip. Verity compares the two and shows what changed.",
      "screen": "incidents"
    },
    {
      "area": "Incidents",
      "title": "Damage claims and insurance are a slow, paper chase",
      "scene": "A car is returned with a dent and a cracked headlight. The claim needs forms, photos, a police report if there was an accident, workshop estimates and the policy. The papers are in four places and the claim deadline is near.",
      "cost": "A guide to Indian self-drive rentals notes that own-damage cover usually comes with a substantial excess, often ₹5,000 to ₹15,000, and tyres are usually not covered. What the policy does not cover, the operator absorbs unless it is recovered from the renter.",
      "fix": "Each incident is a record with photos, estimates, claim status, the policy used, the excess and the amount recovered from the renter. Verity lists claims by age and the amount outstanding.",
      "screen": "incidents"
    },
    {
      "area": "Challans",
      "title": "Challans arrive weeks later and the renter has gone",
      "scene": "A traffic notice for a camera violation comes in the owner's name a month after the trip. The trip sheet shows three renters that week. Finding the right one takes a day.",
      "cost": "A challan is generated against a vehicle registration number, not a person, and in 2024 roughly three quarters of the fines issued across India were still unpaid, according to a used-car portal citing an industry report. A fine you cannot pass on is yours.",
      "fix": "Each challan is logged with the car, date and time. Verity matches it to the trip that covers that moment, tasks the right person to recover it under the rental terms, and records the outcome.",
      "screen": "incidents"
    },
    {
      "area": "Maintenance",
      "title": "Service intervals are tracked by memory and odometer guesses",
      "scene": "A car has done 11,000 kilometres since its last service, because it has been out on long trips. The next customer takes it to a hill station.",
      "cost": "A breakdown on a trip costs a tow, a replacement car and a bad review, many times the cost of the service.",
      "fix": "Each car has an odometer record updated at every handover and return, and service rules by distance and date. Verity raises a service task before the limit and blocks long trips for cars close to it.",
      "screen": "upkeep"
    },
    {
      "area": "Compliance",
      "title": "Insurance, permit, fitness and pollution papers lapse",
      "scene": "The insurance on two cars expired on Sunday. A permit renewal is in a driver's glove box. A fitness certificate is due for an older vehicle. The renter is stopped at a checkpoint without valid papers.",
      "cost": "Fines, impounding and, if there is an accident without valid insurance, a claim you cannot make. In Goa a private vehicle rented out without a valid permit can see a ₹10,000 fine and suspension of its registration, according to a 2025 report.",
      "fix": "Each car's insurance, permit, fitness, pollution certificate and tax is a record with an expiry date and owner. Verity lists papers expiring in 45 days and blocks booking a car whose papers have lapsed.",
      "screen": "upkeep"
    },
    {
      "area": "Compliance",
      "title": "The operating licence and vehicle category are not clear",
      "scene": "A partner suggests adding five private cars from friends to meet demand. Nobody is sure if they may be used for rental, and in which plates.",
      "cost": "In August 2025 Bengaluru's transport department seized 21 private cars rented through a self-drive app, and owners faced fines of ₹30,000 to ₹35,000 each as reported. Enforcement is real.",
      "fix": "Each car record shows its registration category, plate type, permit and licence it operates under. Verity flags cars added without the right category, so the question is asked before the car goes on the road.",
      "screen": "upkeep"
    },
    {
      "area": "Drivers",
      "title": "Drivers' duty hours and trips are managed from a chat",
      "scene": "A chauffeur-driven booking runs from Bengaluru to Mysuru and back. The driver was on a night duty the day before. The next day another booking needs him at 6 am. Overtime and allowances are worked out at month end.",
      "cost": "A tired driver, a disputed allowance and a trip run late.",
      "fix": "Each driver's duty is a schedule with start and end time, trips, allowances and rest. Verity warns when a new trip breaks rest hours you set and totals allowances per trip.",
      "screen": "drivers"
    },
    {
      "area": "Drivers",
      "title": "Driver behaviour and fuel use are not tied to trips",
      "scene": "Two drivers take the same route and one uses more fuel. A car comes back with an unexplained extra 40 kilometres on the odometer.",
      "cost": "Fuel and wear that nobody can trace, and no basis to reward the careful driver.",
      "fix": "Fuel, distance and trip are recorded together, so Verity shows cost per kilometre by car and by driver, and flags trips whose distance does not match the route.",
      "screen": "drivers"
    },
    {
      "area": "Money",
      "title": "Deposits, advances and extra charges are settled at the counter",
      "scene": "A renter returns a day late, with a low fuel tank and a toll receipt for the operator's account. The security deposit is returned in cash with a rough deduction.",
      "cost": "Undercharged extras and deposits returned wrongly, with no record either way.",
      "fix": "Each trip records deposit, advance, extra days, fuel, tolls and fines, with the amount charged and the person who approved any waiver. Verity totals what is owed or returned and flags waivers above your limit.",
      "screen": "trips"
    },
    {
      "area": "Customers",
      "title": "Corporate and repeat customers are not recognised",
      "scene": "A company books five cars every month. A returning customer always asks for the same SUV. The counter staff treat both like first-time renters and ask for papers again.",
      "cost": "A repeat customer who feels unknown goes to a competitor, and a corporate account without a contact owner drifts.",
      "fix": "Renters and companies are records with every trip, preferences, documents on file and payment history. Verity lists regulars and accounts who have gone quiet and tasks the person who looks after them.",
      "screen": "trips"
    },
    {
      "area": "Compliance",
      "title": "Renters' licences and identity papers are copied and kept in photos",
      "scene": "A scan of a driving licence and an ID card sits in a WhatsApp chat. A year later nobody can say how long it should be kept or who has seen it.",
      "cost": "A data leak, a complaint and a poor answer to a regulator. Renters' licence validity is also not checked in time.",
      "fix": "Licence number, validity and ID verification are recorded on the renter with who checked them and when. Documents are kept with access by role and a retention date, and a booking is flagged when a licence has expired.",
      "screen": "trips"
    },
    {
      "area": "Owner",
      "title": "Several branches, airport counters and franchise cars with no single view",
      "scene": "A branch at the airport, a city office and cars owned by partners. A car is idle at one while another has a waiting list. Partners ask what their car earned.",
      "cost": "Idle cars on one side and refused bookings on the other, and trust lost with partners who cannot see their own numbers.",
      "fix": "Each branch is a location in one system. Cars, bookings and papers sit side by side, a car's earning and cost are visible per car and per owner, and transfers between branches are recorded.",
      "screen": "owner"
    }
  ],
  "factsHeading": "The numbers that make these problems worth fixing.",
  "factsLede": "From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.",
  "factsNote": "The market figures are a research vendor's estimates. The challan figures come from a used-car portal citing an industry report, so they are national, not for rental fleets. The seizure and fine details are press reports of enforcement drives. Local rules differ by state.",
  "facts": [
    {
      "figure": "14.2% a year",
      "text": "is the growth one research firm expects for India's self-drive rental market from 2026 to 2031, from about USD 141 million in 2025 to USD 312 million.",
      "source": {
        "name": "Ken Research, India Self-Drive Car Rental Market, 2026",
        "url": "https://www.kenresearch.com/industry-reports/india-self-drive-car-rental-market.md"
      }
    },
    {
      "figure": "75%",
      "text": "of the roughly ₹12,000 crore in traffic fines issued across India in 2024 was unpaid, a collection rate of 24%, with fines attached to the vehicle registration.",
      "source": {
        "name": "Vahan Bazaar, citing the CARS24 challan report via BusinessToday, 2025",
        "url": "https://vahanbazaar.in/news/india-challan-crisis-9000-crore-unpaid-used-car-buyers-2026"
      }
    },
    {
      "figure": "21 cars",
      "text": "private white-board cars rented through a self-drive app were seized in Bengaluru in August 2025 for operating without commercial registration.",
      "source": {
        "name": "News Karnataka, 2025",
        "url": "https://newskarnataka.com/bengaluru/21-white-board-cars-seized-for-illegal-rentals/22082025/"
      }
    },
    {
      "figure": "₹10,000",
      "text": "is the fine, with suspension of registration, that Goa said a first-time offender faces for renting out a private or unpermitted vehicle, with impounding and cancellation for repeat offenders.",
      "source": {
        "name": "The Goan, 2025",
        "url": "https://thegoan.net/goa-news/govt-to-crack-down-on-private-rented-vehicles/126764.html"
      }
    }
  ],
  "screensHeading": "The screens you would use every day.",
  "screensLede": "Six views, each built for one job. Names, columns and terms are set up in your rental business's own language.",
  "screens": [
    {
      "id": "owner",
      "title": "Fleet / Today",
      "meta": "Branches: Airport, City",
      "heading": "The owner's morning view",
      "caption": "Cars earning, cars idle, trips out, papers expiring, open challans and damage claims, on one screen, with items that need a decision listed under it. It replaces the evening message from the counter.",
      "blocks": [
        {
          "type": "kpis",
          "items": [
            {
              "label": "Cars on the road",
              "value": "34 of 52",
              "note": "65% utilised yesterday"
            },
            {
              "label": "Idle over 5 days",
              "value": "6",
              "note": "₹90,000 a month"
            },
            {
              "label": "Papers expiring, 45 days",
              "value": "9",
              "note": "3 insurance, 2 permit"
            },
            {
              "label": "Open challans",
              "value": "₹18,400",
              "note": "11 not yet recovered"
            }
          ]
        },
        {
          "type": "title",
          "text": "Earning and cost per car, last 30 days"
        },
        {
          "type": "bars",
          "items": [
            {
              "label": "Swift, MH 12",
              "value": 84,
              "display": "₹46,000 earned, ₹9,000 cost"
            },
            {
              "label": "Innova, KA 01",
              "value": 92,
              "display": "₹71,000 earned, ₹14,000 cost"
            },
            {
              "label": "Baleno, KA 05",
              "value": 38,
              "display": "₹19,000 earned, ₹8,000 cost",
              "tone": "muted"
            },
            {
              "label": "Creta, KA 03",
              "value": 24,
              "display": "₹12,000 earned, ₹15,000 cost",
              "tone": "muted"
            }
          ]
        },
        {
          "type": "alert",
          "text": "Insurance on KA 03 AB 4410 and KA 51 CD 7782 ends on Sunday. Both have bookings from Monday.",
          "action": "Renew"
        },
        {
          "type": "list",
          "items": [
            {
              "name": "Creta KA 03 has been in the garage for 9 days",
              "meta": "Brake job, expected back 14 Oct",
              "tag": [
                "Chase",
                "late",
                "Back 18 Oct",
                "info"
              ]
            },
            {
              "name": "Camera challan, 3 Sep, Whitefield",
              "meta": "Matched to trip with R. Mehta",
              "tag": [
                "Recover",
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
      "id": "fleet",
      "title": "Fleet availability",
      "meta": "Next 14 days",
      "heading": "Every car, every date, and what is blocking it",
      "caption": "Each car's calendar of bookings, service, repair and papers. Idle days, clashes and cars that are blocked from new bookings are visible at once, with the nearest equal car suggested for a swap.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Car",
            "Next booking",
            "Idle days",
            "Odometer",
            "Blocked by",
            "Status"
          ],
          "rows": [
            [
              "Swift MH 12 AB 3201",
              "Sat 18 Oct",
              "2",
              "41,200",
              "None",
              [
                "Available",
                "ok"
              ]
            ],
            [
              "Innova KA 01 CD 5520",
              "Sun 19 Oct",
              "0",
              "88,900",
              "Service at 90,000",
              [
                "Service soon",
                "flag",
                "Booked 17 Oct",
                "ok"
              ]
            ],
            [
              "Baleno KA 05 EF 1190",
              "None",
              "8",
              "27,450",
              "None",
              [
                "Idle",
                "late",
                "Offered corporate",
                "info"
              ]
            ],
            [
              "Creta KA 03 AB 4410",
              "Mon 20 Oct",
              "0",
              "52,300",
              "Brake repair, insurance ends Sun",
              [
                "Blocked",
                "late",
                "Back, insured",
                "ok"
              ]
            ]
          ]
        },
        {
          "type": "alert",
          "text": "Double booking: Innova KA 01 CD 5520 is promised to two renters on 19 Oct.",
          "action": "Swap one"
        }
      ]
    },
    {
      "id": "trips",
      "title": "Bookings and trips",
      "meta": "Today",
      "heading": "Bookings, handover and what was charged",
      "caption": "Each booking with the renter, car, dates, deposit and extras. Pickup and return carry a condition checklist with photos, fuel and odometer. Regular renters and corporate accounts sit beside them, with licence validity checked.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Renter",
            "Car",
            "Out",
            "Back",
            "Deposit",
            "Status"
          ],
          "rows": [
            [
              "R. Mehta",
              "Swift MH 12",
              "Fri 9 am",
              "Sun 6 pm",
              "₹5,000",
              [
                "Licence valid",
                "ok"
              ]
            ],
            [
              "Priya Nair",
              "Innova KA 01",
              "Sat 7 am",
              "Mon 8 am",
              "₹10,000",
              [
                "Licence expires 2 Nov",
                "flag",
                "Checked",
                "ok"
              ]
            ],
            [
              "Infra Corp",
              "Baleno x2",
              "Mon",
              "Fri",
              "₹10,000",
              [
                "Account",
                "info"
              ]
            ],
            [
              "Asif K.",
              "Creta KA 03",
              "Late return",
              "1 day late",
              "₹8,000",
              [
                "Extra ₹3,200",
                "flag",
                "Charged",
                "ok"
              ]
            ]
          ]
        },
        {
          "type": "record",
          "title": "Return: Creta KA 03, Asif K.",
          "sub": "Condition checked 14 Oct, 11:20",
          "fields": [
            [
              "Fuel",
              "3/8 at return, 8/8 at pickup"
            ],
            [
              "Odometer",
              "52,310, pickup 51,642"
            ],
            [
              "Damage",
              "Left rear bumper scuff (new)"
            ],
            [
              "Charges",
              "Late day ₹2,400, fuel ₹800"
            ],
            [
              "Deposit",
              [
                "Hold ₹3,200",
                "flag",
                "Returned ₹4,800",
                "ok"
              ]
            ]
          ],
          "timeline": [
            [
              "14 Oct",
              "Return photos taken"
            ],
            [
              "11 Oct",
              "Pickup photos taken"
            ],
            [
              "Note",
              "Left bumper not in pickup photos"
            ]
          ]
        }
      ]
    },
    {
      "id": "incidents",
      "title": "Damage, claims and challans",
      "meta": "Open",
      "heading": "Damage, claims and challans in one list",
      "caption": "Every damage claim and traffic fine with the car, trip, date, renter, amount and who must act. A challan is matched to the trip that covers its date and time.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Item",
            "Car",
            "Trip / renter",
            "Amount",
            "Age",
            "Status"
          ],
          "rows": [
            [
              "Camera challan, Whitefield",
              "Swift MH 12",
              "R. Mehta, 3 Sep",
              "₹1,000",
              "41 days",
              [
                "Recover",
                "late",
                "Paid",
                "ok"
              ]
            ],
            [
              "Left bumper scuff",
              "Creta KA 03",
              "Asif K., 11 to 14 Oct",
              "₹7,500 est.",
              "2 days",
              [
                "Estimate",
                "flag",
                "Deposit taken",
                "ok"
              ]
            ],
            [
              "Headlight crack, accident",
              "Baleno KA 05",
              "Rohit S., 29 Sep",
              "₹18,000",
              "15 days",
              [
                "Claim open",
                "info"
              ]
            ],
            [
              "Parking fine, airport",
              "Innova KA 01",
              "Priya N., 5 Oct",
              "₹500",
              "9 days",
              [
                "Charged",
                "ok"
              ]
            ]
          ]
        },
        {
          "type": "record",
          "title": "Claim: Baleno headlight, Rohit S.",
          "sub": "Policy excess ₹10,000, tyres not covered",
          "fields": [
            [
              "Estimate",
              "₹18,000"
            ],
            [
              "Excess to recover",
              "₹10,000"
            ],
            [
              "Claim status",
              "Submitted 5 Oct"
            ],
            [
              "Recovered from renter",
              [
                "₹0",
                "late",
                "₹10,000",
                "ok"
              ]
            ]
          ],
          "timeline": [
            [
              "5 Oct",
              "Claim filed with insurer"
            ],
            [
              "2 Oct",
              "Workshop estimate received"
            ],
            [
              "29 Sep",
              "Accident reported by renter"
            ],
            [
              "Note",
              "Police report attached"
            ]
          ]
        }
      ]
    },
    {
      "id": "upkeep",
      "title": "Service and documents",
      "meta": "Next 45 days",
      "heading": "Service and the papers that must not lapse",
      "caption": "Each car's service due by distance or date, and the expiry of insurance, permit, fitness, pollution and tax. Cars with lapsed papers cannot be booked until the paper is renewed.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Car",
            "Item",
            "Due",
            "Owner",
            "Days left",
            "Status"
          ],
          "rows": [
            [
              "Innova KA 01",
              "Service at 90,000 km",
              "At 90,000 (1,100 km away)",
              "Workshop lead",
              "3 trips",
              [
                "Book now",
                "flag",
                "Booked",
                "ok"
              ]
            ],
            [
              "Creta KA 03",
              "Insurance",
              "19 Oct",
              "Accounts",
              "3",
              [
                "Renew",
                "late",
                "Renewed",
                "ok"
              ]
            ],
            [
              "Swift MH 12",
              "Permit",
              "12 Nov",
              "Accounts",
              "27",
              [
                "Check",
                "info"
              ]
            ],
            [
              "Baleno KA 05",
              "Pollution certificate",
              "30 Oct",
              "Workshop lead",
              "15",
              [
                "Test",
                "flag"
              ]
            ],
            [
              "Innova KA 01",
              "Fitness certificate",
              "8 Dec",
              "Accounts",
              "53",
              [
                "OK",
                "ok"
              ]
            ]
          ]
        },
        {
          "type": "alert",
          "text": "2 cars have bookings after their insurance end date. They cannot be sent out until renewed.",
          "action": "Renew now"
        },
        {
          "type": "checks",
          "items": [
            {
              "text": "Operating licence for the business on file",
              "meta": "City transport authority, owner",
              "done": true
            },
            {
              "text": "All cars on commercial plates and permit",
              "meta": "Checked for the 3 new cars, accounts",
              "done": false
            }
          ]
        }
      ]
    },
    {
      "id": "drivers",
      "title": "Driver duty",
      "meta": "This week",
      "heading": "Duty, rest and trips for chauffeur-driven bookings",
      "caption": "Each driver's trips, start and end times, rest and allowances. A new trip that would break the rest hours you set is flagged, and fuel and distance are recorded against each trip.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Driver",
            "Mon",
            "Tue",
            "Wed",
            "Hours this week",
            "Status"
          ],
          "rows": [
            [
              "Suresh",
              "Mysuru return, 5 am to 11 pm",
              "Rest",
              "Airport, 6 am",
              "58",
              [
                "Rest short",
                "late",
                "Swapped",
                "ok"
              ]
            ],
            [
              "Manoj",
              "City, 9 to 6",
              "Pune run, 4 am",
              "Pune return",
              "62",
              [
                "Overtime",
                "flag"
              ]
            ],
            [
              "Ibrahim",
              "Rest",
              "Airport, 5 am",
              "City, 10 to 7",
              "41",
              [
                "Fine",
                "ok"
              ]
            ]
          ]
        },
        {
          "type": "table",
          "cols": [
            "Trip",
            "Car",
            "Distance",
            "Fuel",
            "Cost per km"
          ],
          "rows": [
            [
              "Mysuru return",
              "Innova KA 01",
              "310 km",
              "32 L",
              "₹9.8"
            ],
            [
              "Pune run",
              "Ertiga KA 02",
              "840 km",
              "76 L",
              "₹10.2"
            ]
          ]
        }
      ]
    }
  ],
  "dayHeading": "The same Friday, before and after.",
  "dayLede": "What changes is not the driving. It is that the day leaves a record, and the record does the chasing.",
  "day": [
    {
      "time": "8:00 am",
      "before": "The counter checks the sheet to see which cars are free. A sedan is promised twice.",
      "after": "The fleet calendar shows the clash the day before. One booking is swapped to an equal car."
    },
    {
      "time": "9:30 am",
      "before": "A renter picks up a car. Photos are taken on someone's phone.",
      "after": "The pickup checklist with photos, fuel and odometer is on the trip, and the renter acknowledges it."
    },
    {
      "time": "12:00",
      "before": "A traffic notice arrives for a trip last month. The team searches through three sheets.",
      "after": "The challan is matched to the trip that covers the time and the renter is on the task. The recovery is recorded."
    },
    {
      "time": "3:00 pm",
      "before": "A driver is booked for a 6 am trip after a night run. Nobody notices.",
      "after": "Verity flags the short rest. Another driver is assigned before the evening."
    },
    {
      "time": "6:00 pm",
      "before": "A car comes back late with less fuel and a new scratch. The deposit is settled by guess.",
      "after": "The return checklist shows the difference against pickup. The extra day, fuel and damage are charged and approved."
    },
    {
      "time": "Month end",
      "before": "Insurance and permit papers are found in folders and gloveboxes when someone asks.",
      "after": "Every paper had an expiry date and an owner, and none lapsed with a booking on it."
    }
  ],
  "approach": {
    "heading": "We set it up with you, in four weeks.",
    "lede": "You do not get a login and a manual. We spend time at your counter and garage, build Verity around how your fleet really runs, bring your data in, then stay to make sure it keeps working.",
    "phases": [
      {
        "when": "Week 1",
        "name": "Discovery and mapping",
        "we": "Spend a day at the counter and an afternoon at the workshop or yard. Watch how a booking becomes a handover, how a return is checked, how fines and damage are handled and how service is scheduled. Note which gaps cost the most.",
        "you": "Two to three hours of yours and your operations lead's. Your fleet list with registration details, a month of bookings, and your rental terms.",
        "get": "A written map of your business: fleet, booking sources, handover steps, incident and challan handling, service rules and the first gaps we will close."
      },
      {
        "when": "Weeks 2 to 3",
        "name": "Configuration",
        "we": "Set up cars with their papers and service rules, booking and trip records, pickup and return checklists, incident and challan flows, driver duty rules and branches, and build the six screens around your terms.",
        "you": "Check the setup with your operations lead and workshop contact. Tell us where a service rule, a charge or a form is wrong.",
        "get": "A working Verity with your real cars, papers and rules, ready for your data."
      },
      {
        "when": "Weeks 3 to 4",
        "name": "Migration and training",
        "we": "Bring in your fleet list, current bookings, document expiry dates, service history and open fines and claims from the sheets, folders and chats you use. Train the counter, drivers and workshop lead on real handovers.",
        "you": "Your car papers and the booking sheet in whatever form they exist, and a check of ten cars' dates. One hour with each role.",
        "get": "Your cars, bookings and papers inside Verity, and a team that has used it through a week of real trips."
      },
      {
        "when": "After go-live",
        "name": "Operations partnership",
        "we": "Stay on after launch. Review the first month with you, tune service and rest rules, and handle changes when you add cars, a branch or a partner.",
        "you": "A short monthly review of what the numbers say.",
        "get": "A system that keeps matching how your fleet runs, with someone responsible for it."
      }
    ],
    "bring": [
      "Fleet list with registration, category and plate type",
      "Insurance, permit, fitness, pollution and tax copies and dates",
      "A month of bookings and rates",
      "Your rental terms and deposit rules",
      "Service history and open challans or claims"
    ],
    "time": "About 9 to 12 hours of your own time across the four weeks, mostly in week 1. Your operations lead and workshop contact need a few more.",
    "after": "Nobody is hired to run Verity. Handovers, incidents and service are recorded as part of work the team already does, and the reports come from those records."
  },
  "ai": {
    "heading": "Ask your fleet a question. Get an answer, not a report to build.",
    "lede": "Verity AI reads your own cars, bookings, incidents and papers. Ask in plain language, then turn the answer into tasks for the right people.",
    "examples": [
      {
        "q": "Which cars have papers that expire in the next 45 days, and do they have bookings?",
        "a": "9 papers on 7 cars expire in 45 days. Two cars have bookings after their insurance end date.",
        "rows": [
          [
            "Insurance",
            "3"
          ],
          [
            "Permit",
            "2"
          ],
          [
            "Pollution certificate",
            "2"
          ],
          [
            "Fitness",
            "2"
          ]
        ],
        "action": "Create a renewal task for each paper"
      },
      {
        "q": "Which challans do we still need to recover, and from whom?",
        "a": "11 challans worth ₹18,400 are not yet recovered. 6 are matched to a trip and 5 need a renter to be identified.",
        "rows": [
          [
            "Matched to a trip",
            "6"
          ],
          [
            "Needs a match",
            "5"
          ],
          [
            "Over 30 days old",
            "4"
          ]
        ],
        "action": "Task to accounts to recover the matched ones"
      },
      {
        "q": "Which cars lose money?",
        "a": "Creta KA 03 earned ₹12,000 and cost ₹15,000 in the last 30 days, mostly from the brake repair and 9 days in the garage. Baleno KA 05 earned ₹19,000 and has been idle for 8 days.",
        "action": "Add a task to review these two cars"
      }
    ]
  },
  "automationHeading": "The follow-ups nobody has time to make.",
  "automationLede": "Set once, then they run from your records. Staff still talk to renters and drivers; Verity makes sure the right person knows what to do.",
  "automations": [
    {
      "when": "A car's insurance, permit, fitness or pollution certificate will expire in 45 days",
      "then": [
        "Task to the owner of that paper",
        "Bookings after the date flagged",
        "Car blocked from new bookings if it lapses"
      ]
    },
    {
      "when": "A car passes its service distance or date",
      "then": [
        "Service task created for the workshop lead",
        "Long trips blocked",
        "Next service date set when it is done"
      ]
    },
    {
      "when": "A car returns with a difference from pickup",
      "then": [
        "Difference listed on the trip",
        "Damage record created",
        "Charge or claim task to accounts"
      ]
    },
    {
      "when": "A challan is logged",
      "then": [
        "Matched to the trip covering the date and time",
        "Recovery task to accounts",
        "Outcome recorded: recovered, written off or disputed"
      ]
    },
    {
      "when": "A booking would put a driver below the rest you set",
      "then": [
        "Flagged to the duty manager",
        "Another driver suggested",
        "Decision recorded"
      ]
    },
    {
      "when": "A car has been idle for more than five days",
      "then": [
        "Listed on the owner screen",
        "Task to the manager to offer it or move it",
        "Outcome recorded"
      ]
    }
  ],
  "rules": {
    "heading": "The rules a car rental business has to keep up with.",
    "lede": "Verity does not give legal or tax advice and does not file anything for you. It keeps the records these rules depend on in order, so you are not hunting for them when someone asks.",
    "note": "Rules change and differ by state. Confirm current requirements with your accountant, a lawyer or your State Transport Authority.",
    "items": [
      {
        "name": "Rent-a-Cab licence and commercial plates",
        "what": "Self-drive rental in India generally operates under the Rent a Cab Scheme, 1989 and the Motor Vehicles Act, with state transport authorities issuing licences and cars needing commercial registration and permits. One report says the scheme sets a minimum fleet of 50 vehicles; state rules vary, so check yours. Using private white-board cars for rental has led to fines, seizures and licence action.",
        "how": "Each car records its registration category, plate type, permit and the licence it operates under. A car added without the right category is flagged before it goes out.",
        "source": {
          "name": "The Goan on Goa enforcement, 2025: https://thegoan.net/goa-news/govt-to-crack-down-on-private-rented-vehicles/126764.html; News Karnataka, 2025",
          "url": "https://newskarnataka.com/bengaluru/21-white-board-cars-seized-for-illegal-rentals/22082025/"
        }
      },
      {
        "name": "Vehicle papers and roadworthiness",
        "what": "Insurance, permit, fitness, pollution certificate and road tax generally need to be valid for a commercial vehicle to operate, and penalties for lapses vary by state and by item. Check current amounts with the transport authority.",
        "how": "Each paper has an expiry date and an owner, and a car with a lapsed paper is blocked from bookings."
      },
      {
        "name": "Traffic fines and your rental terms",
        "what": "A challan is generated against the vehicle registration number, while liability for the violation itself falls on the driver. Recovery from a renter generally depends on your signed rental terms, such as a clause for fines in the rental period and an administrative fee. Some operators publish such terms. Confirm yours with a lawyer.",
        "how": "Each challan is matched to the trip and renter, and the recovery or write-off is recorded.",
        "source": {
          "name": "Vahan Bazaar on challans, 2026: https://vahanbazaar.in/news/india-challan-crisis-9000-crore-unpaid-used-car-buyers-2026; an operator's published policy, IndusGo, 2026",
          "url": "https://www.indusgo.in/blog/travel-tips/what-happens-if-you-get-a-traffic-fine-during-your-self-drive-car-rental/"
        }
      },
      {
        "name": "GST on rentals",
        "what": "The GST rate on renting a car depends on whether a driver is supplied, the vehicle and how you opt to be taxed, and sources conflict on current rates after 22 September 2025. Your accountant should confirm yours.",
        "how": "Each booking records the amount, driver or no driver, and date, so returns can be prepared from clean data. Verity does not file returns."
      },
      {
        "name": "Renters' personal data",
        "what": "The Digital Personal Data Protection Rules were notified on 13 November 2025. Notice, consent and safeguard duties for businesses holding personal data are generally due from 13 May 2027. Licence scans and ID are personal data.",
        "how": "Renter documents are stored with access by role, a retention date and a log of who saw them.",
        "source": {
          "name": "AZB & Partners on the DPDP phases",
          "url": "https://www.azbpartners.com/bank/update-indias-digital-personal-data-protection-framework-comes-into-effect/"
        }
      }
    ]
  },
  "rolesHeading": "Everyone sees the same records, through their own window.",
  "rolesLede": "A driver should not see rental prices. The counter should not edit service rules. Each role opens on what it needs.",
  "roles": [
    {
      "role": "Owner",
      "question": "Which cars earn, and what is leaking?",
      "sees": "Utilisation and earning per car, idle cars, open claims and challans, papers expiring and every branch side by side."
    },
    {
      "role": "Operations manager",
      "question": "What must be sorted today?",
      "sees": "Fleet calendar, clashes, cars blocked, returns due, challans to recover and drivers on duty."
    },
    {
      "role": "Counter staff",
      "question": "Who is collecting what, and is it ready?",
      "sees": "Today's bookings, car status, licence checks, handover and return checklists, deposits and extras."
    },
    {
      "role": "Workshop lead",
      "question": "Which cars need me?",
      "sees": "Service by distance and date, repair status, damage logged at return and pollution tests due."
    },
    {
      "role": "Accounts",
      "question": "What was charged, recovered and owed?",
      "sees": "Deposits, extras, challans and claims, partner earnings per car, and papers renewal costs."
    }
  ],
  "alongside": {
    "heading": "What changes, and what stays the same.",
    "keep": [
      "Your booking portal or aggregator listings. We agree during setup how bookings reach Verity.",
      "Your GPS or telematics devices. We record what you tell us from them against the trip.",
      "WhatsApp with renters and drivers. Staff reply",
      "Verity tracks what was decided.",
      "Your accountant, who still prepares your returns."
    ],
    "not": [
      "Run your billing or take payments.",
      "Take online bookings or host your listing.",
      "Send messages to renters or drivers on its own.",
      "File your returns or run your payroll."
    ],
    "migration": "We bring your fleet list, papers and expiry dates, service history, bookings and open fines across from the sheets, folders and chats you use now, in stages, so cars keep going out while it happens."
  },
  "faqHeading": "Questions car rental owners ask.",
  "faqs": [
    [
      "I have fifteen cars and one counter person. Is this too much?",
      "A small fleet has the same papers and fines and fewer hands. We set up only what you need in the same four weeks, and leave out what you do not."
    ],
    [
      "Does it track GPS or connect to my devices?",
      "No. We do not integrate with named devices. During setup we agree how the odometer or trip data you already collect reaches Verity, and the trip record holds it."
    ],
    [
      "Can it recover challans from the renter?",
      "It matches each challan to the trip that covers the date and time and tasks the right person to recover it under your rental terms. Your staff speak to the renter and the outcome is recorded. Verity does not message the renter itself."
    ],
    [
      "Can it take online bookings?",
      "No. If bookings come from a portal or website today, that keeps working. Verity records each booking and the handover around it."
    ],
    [
      "Will my counter really record condition photos?",
      "Only if it takes seconds, so the checklist is short and the photos are taken on a phone at the car. We train at the counter during real handovers."
    ],
    [
      "We have partners who own cars in our fleet. Can they see their car?",
      "Yes, if you choose. A partner's car shows earning, cost and trips, and you decide what the partner can see."
    ],
    [
      "We run chauffeur-driven trips too. Does it handle drivers?",
      "Yes. Each driver has trips, start and end times, rest and allowances, and Verity warns when a trip breaks the rest hours you set. It does not run payroll."
    ],
    [
      "Who can see my data?",
      "Only the people you allow. Access is set by role, so counter staff, drivers, the workshop and accounts each see what they need, and every change is recorded with who made it and when."
    ],
    [
      "How quickly will I see something useful?",
      "The papers expiring list and the idle car list need only your existing data, so we aim to have them first. Challan and damage patterns become reliable after a few weeks of recorded trips."
    ],
    [
      "What does it cost?",
      "It depends on the number of cars, branches and what you want set up. Message us and we will give you a clear number after a short conversation about how your fleet runs."
    ]
  ],
  "related": [
    "car-washes",
    "auto-repair-shops",
    "tour-operators",
    "travel-agencies",
    "facility-management",
    "hotels"
  ],
  "ctaHeading": "Start with the papers that expire this month.",
  "ctaLede": "Tell us how your fleet runs and we will show you the idle cars, the unmatched challans and the expiring papers it would find, using your own cars."
};
