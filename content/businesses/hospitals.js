export default {
  "schema": 2,
  "slug": "hospitals",
  "status": "published",
  "plural": "hospitals",
  "subject": "hospital",
  "checked": "15 October 2026",
  "seo": {
    "title": "Hospital management software for Indian hospitals | Verity",
    "description": "OPD queues, bed and discharge delays, bill leakage, claim rejections, ward stock and NABH records: 16 hospital problems and the Verity screens that fix them.",
    "keywords": [
      "hospital management software India",
      "hospital bed and discharge tracking",
      "hospital insurance claim tracking",
      "hospital consumables and pharmacy stock",
      "NABH documentation tracking",
      "multi-branch hospital software"
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
    "eyebrow": "Verity for hospitals",
    "headline": "A hospital never closes. The money and the risk sit in the hours between admission and discharge.",
    "lede": "A patient waits in OPD, a bed sits empty with a discharge pending, a charge is never posted, a claim comes back with a query, a file is missing a signature before the NABH visit. Each is small. Together they decide the month. Verity connects the queue, the bed, the bill, the ward store and the file, so the people running the hospital can see where things are stuck while there is still time to move them.",
    "oneLine": "One system that knows every patient visit, every bed, every pending bill and claim, every ward consumable and every document due, and tells each team what needs attention now.",
    "note": "Verity records and organises. It does not give medical advice, and it does not decide or store treatment as advice. Your clinicians remain the authority on care.",
    "screen": "owner",
    "screenNote": "wards, claims, stock and compliance for the day"
  },
  "today": {
    "heading": "Most hospitals run on several systems and a lot of phone calls.",
    "paragraphs": [
      "The front desk registers the patient. The doctor sees them in OPD and may admit. The nurse tracks the ward on a board. The billing desk builds a bill from slips. The insurance desk chases the insurer. The pharmacy and stores count in their own register. The quality coordinator assembles files before an audit. Each team does its part. The patient moves through all of them.",
      "What is hard to see is what sits between the teams: a bed that is clean but unassigned, a discharge waiting on one signature, a bill missing a consumable that was used in theatre, a claim waiting for one document, a register that is complete in one ward and not another.",
      "Published figures show the cost of this friction in one place. A 2024 survey by a healthcare provider found five in ten patients faced discharge delays because of claim processing, and about 38 percent said discharge took over eight hours. That is one survey, but any hospital manager will recognise the pattern."
    ],
    "stack": [
      "Registration and billing software",
      "Paper case sheets and ward registers",
      "Excel for beds, stock and claims",
      "WhatsApp groups between departments",
      "Insurer and TPA portals and email"
    ],
    "stackNote": "Each tool does its own job. Nothing joins the queue, the bed, the bill and the file, so people are the glue."
  },
  "painsHeading": "Where a hospital loses time, money and control.",
  "painsLede": "These are the situations hospital owners, administrators and department heads describe. For each one: what it looks like on an ordinary day, what it costs, and what Verity does about it.",
  "pains": [
    {
      "area": "OPD",
      "title": "The OPD queue has no shape",
      "scene": "Forty patients are waiting outside one consultant's room, six outside another's. Tokens are handed out in the order people arrive, not the order they were booked. A patient who came for a review stands in the same line as a new case, and the front desk cannot say how long the wait is.",
      "cost": "Example arithmetic: if a consultant sees 40 patients in a morning and the average wait is 50 minutes, that is more than 30 hours of patient time lost before noon. Long waits send patients to the next clinic.",
      "fix": "Each OPD visit is a record with a doctor, a time slot, a status (waiting, with doctor, billed, done) and a wait time. Verity shows the queue per consultant and flags the rooms where waits are running long, so the desk can rebalance.",
      "screen": "opd"
    },
    {
      "area": "OPD",
      "title": "Doctor schedules, no-shows and double-booked slots",
      "scene": "A consultant's weekly OPD timing changes for a surgery day and the desk finds out when patients arrive. Follow-up slots are given on paper. Some patients do not turn up; others arrive for a doctor who is in theatre.",
      "cost": "A wasted slot cannot be sold again. A patient sent away for a schedule mix-up rarely comes back.",
      "fix": "Consultant timings, leave and theatre days are on one schedule. Follow-up visits are created from the previous visit with a date and owner, and no-shows are marked so the desk can ask staff to call. Staff make the call; Verity records the outcome.",
      "screen": "opd"
    },
    {
      "area": "Records",
      "title": "The same patient has three records",
      "scene": "A patient is registered as Ramesh Kumar at the OPD desk, R. Kumar at the lab and Ramesh Kumar Singh at admission. The old discharge summary is under one name and the new reports under another.",
      "cost": "Duplicate files mean missing history, repeated tests and bills that go to the wrong account. They also make it harder to answer a patient or an auditor who asks for the full record.",
      "fix": "Each patient has one record with a visit history, and a possible duplicate is flagged at registration for a person to merge or keep. Reports and documents attach to that record, with permissions on who can open them.",
      "screen": "opd"
    },
    {
      "area": "Beds",
      "title": "Nobody knows which beds are really free",
      "scene": "The ward board says bed 12 is free. Housekeeping has not cleaned it. Bed 14 is occupied but the patient left an hour ago. The emergency desk phones three wards to find a bed while a patient waits on a trolley.",
      "cost": "An idle bed is lost revenue and a blocked bed is a delayed admission. One ICRA sample put private hospital occupancy at around 62 to 64 percent in FY2023, so every empty bed matters.",
      "fix": "Every bed has a state: occupied, discharge pending, being cleaned, ready, blocked. Housekeeping and nurses update it on the ward screen. The admission desk sees ready beds by ward and type without making calls.",
      "screen": "beds",
      "source": {
        "name": "BW Healthcareworld on ICRA, 2023",
        "url": "https://bwhealthcareworld.businessworld.in/article/Indian-Hospital-Industry-To-Post-Robust-Performance-In-FY2023-Report/13-01-2023-461620"
      }
    },
    {
      "area": "Beds",
      "title": "Discharge takes half a day",
      "scene": "The doctor has cleared the patient at 10 am. The final bill waits for pharmacy returns, the summary waits for a signature, the insurer waits for a document, and the family waits in the room. The bed is not ready until evening.",
      "cost": "A survey by a healthcare provider reported that about 38 percent of respondents said discharge took over eight hours. Every extra hour is a bed that cannot take the next admission.",
      "fix": "Discharge is a checklist on the patient record with an owner for each step: summary, pharmacy clearance, final bill, insurer authorisation, medicines and instructions handed over. The screen shows which step is holding each discharge, so the right person is chased.",
      "screen": "beds",
      "source": {
        "name": "The Week, report on a Pristyn Care survey, 2024",
        "url": "https://www.theweek.in/news/biz-tech/2024/04/29/medical-insurance-claims-5-out-of-10-patients-face-discharge-delays.amp.html"
      }
    },
    {
      "area": "Wards",
      "title": "Ward tasks and handovers live in notebooks",
      "scene": "The night nurse hands over verbally. A request to reassess a dressing, to arrange a transfer, to chase a report, is said once and forgotten by morning. Nurses and ward boys are rostered by memory.",
      "cost": "Missed tasks become complaints, and an incident with no written trail is hard to explain afterwards.",
      "fix": "Ward tasks are assigned to a named person with a time, shown on the ward screen and carried across shifts. The roster shows who is on each ward, and each handover leaves a record of what was open.",
      "screen": "beds"
    },
    {
      "area": "Billing",
      "title": "Charges used in the ward never reach the bill",
      "scene": "A consumable is used in theatre and the slip is lost. A bedside procedure is done at night and not entered. A package patient is billed for an item that the package already covered.",
      "cost": "Example arithmetic: if 3 charges of ₹800 each go unposted on one in ten admissions, and the hospital has 600 admissions a month, that is about ₹1.4 lakh of unbilled care every month.",
      "fix": "Consumables, procedures and visits are recorded against the admission as they happen. Verity compares what was used and done with what the bill carries, and lists the gaps before the final bill is closed.",
      "screen": "claims"
    },
    {
      "area": "Billing",
      "title": "Estimates, deposits and the final bill do not match",
      "scene": "The family is told ₹1.8 lakh at admission. The final bill is ₹2.6 lakh. Nobody warned them when the stay was extended or a procedure added. The billing desk now has an argument at the counter.",
      "cost": "Disputes slow discharge, hurt trust and lead to waivers given in a hurry.",
      "fix": "The estimate, deposits and running charges sit on the admission record. When the running total passes the estimate by a set share, Verity alerts the billing desk and the ward so the family is told early. Staff speak to the family.",
      "screen": "claims"
    },
    {
      "area": "Insurance",
      "title": "Insurance pre-approvals and queries are chased by phone",
      "scene": "The insurance desk has forty open pre-authorisations. One insurer asked for a document two days ago and nobody saw the email. Another approved a lower amount than requested and the ward does not know.",
      "cost": "Insurers are generally required to decide cashless requests within an hour and give final authorisation on discharge within three hours of the hospital's request, so a delay at the hospital's end, such as a missing document, is a delay the hospital owns.",
      "fix": "Each insurer case is a record with status, amount asked, amount approved, documents sent and documents requested. Verity lists cases that wait on the hospital and cases that wait on the insurer, with age. The desk sends the documents; Verity tracks who owes what.",
      "screen": "claims",
      "source": {
        "name": "The Tribune on the IRDAI master circular, 2024",
        "url": "https://tribuneindia.com/news/irdai-sets-three-hour-limit-to-settle-cashless-health-claims-626490"
      }
    },
    {
      "area": "Insurance",
      "title": "Claims come back short and money is stuck with TPAs",
      "scene": "A claim is paid ₹62,000 against ₹78,000 billed, with a deduction note nobody reads. Old claims sit unpaid for months. The accounts team cannot say which insurer owes how much.",
      "cost": "Example arithmetic: ₹40 lakh stuck with insurers for 60 days instead of 30 is working capital the hospital finances itself, on top of the deductions that are never challenged.",
      "fix": "Billed, approved, settled and deducted amounts are on each claim, with the deduction reason. Verity shows outstanding by insurer and age, and flags claims short-paid beyond a limit so someone raises the query.",
      "screen": "claims"
    },
    {
      "area": "Stock",
      "title": "Pharmacy and ward stores run out or expire",
      "scene": "The ward store runs out of IV sets at 2 am. The central pharmacy holds a batch of an injection that expires in three weeks. Theatre implants are kept on consignment and the count in the register does not match the count in the cupboard.",
      "cost": "Emergency purchases cost more than planned ones, and expired stock is paid-for stock thrown away. Implants that are used but not billed are a direct loss.",
      "fix": "Items are tracked by batch and expiry across the central store, pharmacy and each ward store. Consumption by ward drives reorder points, near-expiry lists go to the pharmacist, and implants are recorded to the patient when used.",
      "screen": "stock"
    },
    {
      "area": "Suppliers",
      "title": "Purchases, suppliers and price creep",
      "scene": "Three departments order from the same supplier at three different rates. Goods arrive short and the invoice is passed anyway. A rate contract expired last month and nobody noticed.",
      "cost": "Overpaying on high-volume items quietly compounds, and paying for short deliveries is pure loss.",
      "fix": "Purchase orders, receipts and invoices are matched, and rates are compared across departments and suppliers. A rate that rises beyond your limit, or a delivery that does not match the order, is flagged before payment.",
      "screen": "stock"
    },
    {
      "area": "Equipment",
      "title": "Biomedical equipment is serviced when it breaks",
      "scene": "The ventilator was due for service in August. The theatre light has no service record. The vendor's number is in the biomedical engineer's phone, and he is on leave.",
      "cost": "Equipment that fails during use is a patient safety event, and an unplanned repair costs more than a booked one.",
      "fix": "Each device is an asset record with service history, calibration dates and the vendor. Verity raises tasks before a date is due, and keeps downtime and repair history on the record.",
      "screen": "nabh"
    },
    {
      "area": "NABH and records",
      "title": "Files are incomplete when the auditor asks",
      "scene": "Two weeks before an accreditation visit, the quality team checks 200 closed files. Consent forms are unsigned in some, the discharge summary is missing in others, and nursing notes are not countersigned.",
      "cost": "Gaps found at the audit are findings, and rushing to fix files in the last fortnight takes clinicians away from patients. The 6th edition of the NABH hospital standards applies to new applications from 1 January 2025 and puts weight on digital information management.",
      "fix": "Each admission has a completeness checklist: consent, summary, notes, orders, billing sign-off. Verity shows missing items by file, ward and doctor each week, so files are completed while the patient episode is fresh.",
      "screen": "nabh",
      "source": {
        "name": "Digital Health News on NABH 6th edition, 2024",
        "url": "https://www.digitalhealthnews.com/nabh-introduces-6th-edition-of-accreditation-standards-for-hospitals-with-emphasis-on-digital-health-technology"
      }
    },
    {
      "area": "Compliance",
      "title": "Licences, staff credentials and who may see which record",
      "scene": "A nurse's registration renewal lapses. The fire safety certificate date is in a file. Interns and billing staff can open any patient's file. Nobody can say who looked at a particular celebrity's record.",
      "cost": "Lapsed credentials are a compliance gap, and open access to health data is a legal and reputational risk. India's Digital Personal Data Protection Rules were notified on 14 November 2025, with most duties applying 18 months later.",
      "fix": "Staff credentials, licences and certificates are records with expiry and owner. Access to patient records is set by role, and every view or change leaves an audit trail.",
      "screen": "nabh",
      "source": {
        "name": "SCC Online on DPDP Rules 2025",
        "url": "https://www.scconline.com/blog/post/2025/12/26/digital-personal-data-protection-rules-2025-key-highlights/"
      }
    },
    {
      "area": "Owner",
      "title": "Consultant payouts and the owner's blind spot",
      "scene": "Visiting consultants are paid a share of their billing. The calculation is done by hand at month end and disputed. The owner asks what the hospital earned from orthopaedics last quarter and waits three days for a sheet.",
      "cost": "Disputes strain relations with consultants, and decisions about which department to grow wait for slow numbers. A second branch doubles the problem.",
      "fix": "Each bill is tagged to the consultant and department, so shares and department income come from the same records. Branches are locations that roll up, with occupancy, waits, claims outstanding and stock side by side.",
      "screen": "owner"
    }
  ],
  "factsHeading": "The numbers that make these problems worth fixing.",
  "factsLede": "From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.",
  "factsNote": "The discharge-delay figures come from one survey by a healthcare provider and the article does not report its sample size. The IRDAI timelines are as reported by a newspaper on the May 2024 circular, so confirm against the circular itself. The DPDP commencement date is the article's inference from the notification date. NABH timing is from a trade news article.",
  "facts": [
    {
      "figure": "5 in 10",
      "text": "patients faced discharge delays because of insurance claim processing, and about 38 percent said discharge took over 8 hours, in a 2024 survey by a healthcare provider.",
      "source": {
        "name": "The Week, Pristyn Care survey, 2024",
        "url": "https://www.theweek.in/news/biz-tech/2024/04/29/medical-insurance-claims-5-out-of-10-patients-face-discharge-delays.amp.html"
      }
    },
    {
      "figure": "1 hour and 3 hours",
      "text": "the time limits the IRDAI master circular of May 2024 sets for insurers to decide a cashless request and to give final authorisation on discharge after the hospital's request.",
      "source": {
        "name": "The Tribune, 2024",
        "url": "https://tribuneindia.com/news/irdai-sets-three-hour-limit-to-settle-cashless-health-claims-626490"
      }
    },
    {
      "figure": "1 January 2025",
      "text": "the date from which new NABH accreditation applications are assessed under the 6th edition, with an emphasis on digital health technology.",
      "source": {
        "name": "Digital Health News, 2024",
        "url": "https://www.digitalhealthnews.com/nabh-introduces-6th-edition-of-accreditation-standards-for-hospitals-with-emphasis-on-digital-health-technology"
      }
    },
    {
      "figure": "14 November 2025",
      "text": "the date the Digital Personal Data Protection Rules were notified, with most duties applying 18 months later. Security logs are to be kept at least one year.",
      "source": {
        "name": "SCC Online, 2025",
        "url": "https://www.scconline.com/blog/post/2025/12/26/digital-personal-data-protection-rules-2025-key-highlights/"
      }
    }
  ],
  "screensHeading": "The screens you would use every day.",
  "screensLede": "Six views, each built for one job. Names, columns and terms are set up in your hospital's own language.",
  "screens": [
    {
      "id": "owner",
      "title": "Hospital / Today",
      "meta": "Branch: Main campus",
      "heading": "The administrator's morning view",
      "caption": "Beds, waits, discharges, claims and anything overdue on one screen. Items needing a decision are listed under it with an owner.",
      "blocks": [
        {
          "type": "kpis",
          "items": [
            {
              "label": "Beds occupied",
              "value": "212 of 260",
              "note": "14 discharges pending"
            },
            {
              "label": "Average OPD wait",
              "value": "38 min",
              "note": "Ortho room 3: 62 min"
            },
            {
              "label": "Claims outstanding",
              "value": "₹1.9 cr",
              "note": "₹46 lakh over 45 days"
            },
            {
              "label": "Files incomplete",
              "value": "23",
              "note": "closed in last 7 days"
            }
          ]
        },
        {
          "type": "title",
          "text": "Outstanding claims by age"
        },
        {
          "type": "bars",
          "items": [
            {
              "label": "0 to 15 days",
              "value": 70,
              "display": "₹92 lakh"
            },
            {
              "label": "16 to 45 days",
              "value": 45,
              "display": "₹52 lakh"
            },
            {
              "label": "46 to 90 days",
              "value": 24,
              "display": "₹33 lakh",
              "tone": "muted"
            },
            {
              "label": "Over 90 days",
              "value": 8,
              "display": "₹13 lakh",
              "tone": "muted"
            }
          ]
        },
        {
          "type": "alert",
          "text": "6 discharges are waiting on the insurer for more than 3 hours.",
          "action": "Open list"
        },
        {
          "type": "list",
          "items": [
            {
              "name": "Ward 4 oxygen tubing below reorder point",
              "meta": "2 days of use left",
              "tag": [
                "Order",
                "flag",
                "Ordered",
                "ok"
              ]
            },
            {
              "name": "Ventilator V-07 service due this week",
              "meta": "Vendor visit not booked",
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
      "id": "opd",
      "title": "OPD",
      "meta": "Today, 9:40 am",
      "heading": "The OPD queue by consultant",
      "caption": "Each consultant's queue with waits, follow-ups due and no-shows. The desk sees where to move people. One patient record holds every visit.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Consultant",
            "Waiting",
            "Avg wait",
            "Seen",
            "Status"
          ],
          "rows": [
            [
              "Dr. Mehta, Medicine",
              "14",
              "22 min",
              "18",
              [
                "On time",
                "ok"
              ]
            ],
            [
              "Dr. Rao, Orthopaedics",
              "31",
              "62 min",
              "9",
              [
                "Long wait",
                "late",
                "Overflow to Room 4",
                "ok"
              ]
            ],
            [
              "Dr. Iyer, Paediatrics",
              "11",
              "25 min",
              "16",
              [
                "On time",
                "ok"
              ]
            ],
            [
              "Dr. Banerjee, ENT",
              "9",
              "30 min",
              "12",
              [
                "Slot gap 11 am",
                "flag"
              ]
            ]
          ]
        },
        {
          "type": "record",
          "title": "Sunita Devi, 54",
          "sub": "UHID 204518. Possible duplicate: Sunita D. Kumari",
          "fields": [
            [
              "Last visit",
              "12 September, Medicine"
            ],
            [
              "Follow-up due",
              "10 October"
            ],
            [
              "Insurance",
              "Cashless, policy on file"
            ],
            [
              "Record",
              [
                "Possible duplicate",
                "flag",
                "Merged",
                "ok"
              ]
            ]
          ],
          "timeline": [
            [
              "12 Sep",
              "OPD visit, reports uploaded"
            ],
            [
              "10 Oct",
              "Follow-up not attended"
            ],
            [
              "Today",
              "Call task to desk"
            ]
          ]
        },
        {
          "type": "alert",
          "text": "7 follow-ups due this week have no booked slot.",
          "action": "Assign calls"
        }
      ]
    },
    {
      "id": "beds",
      "title": "Beds and wards",
      "meta": "Ward 4, Medical",
      "heading": "Beds, discharges and ward tasks",
      "caption": "Every bed with its state, every pending discharge with the step holding it, and tasks handed across shifts.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Bed",
            "Patient",
            "State",
            "Discharge step",
            "Owner"
          ],
          "rows": [
            [
              "4-02",
              "A. Khan",
              "Occupied",
              "Day 3 of stay",
              "Nurse Priya"
            ],
            [
              "4-05",
              "S. Nair",
              "Discharge pending",
              "Insurer authorisation",
              [
                "Waiting 2 h 40 m",
                "late",
                "Approved",
                "ok"
              ]
            ],
            [
              "4-07",
              "R. Das",
              "Discharge pending",
              "Final bill",
              [
                "Pharmacy return",
                "flag",
                "Billed",
                "ok"
              ]
            ],
            [
              "4-09",
              "Empty",
              "Cleaning",
              "Housekeeping",
              [
                "Ready in 20 min",
                "info",
                "Ready",
                "ok"
              ]
            ],
            [
              "4-11",
              "Empty",
              "Ready",
              "None",
              [
                "Held for ER",
                "info"
              ]
            ]
          ]
        },
        {
          "type": "checks",
          "items": [
            {
              "text": "Discharge summary signed, bed 4-05",
              "meta": "Dr. Mehta",
              "done": true
            },
            {
              "text": "Medicines and instructions handed over, bed 4-07",
              "meta": "Nurse Priya",
              "done": false
            },
            {
              "text": "Dressing review, bed 4-02, night shift",
              "meta": "Carried from night",
              "done": false
            }
          ]
        }
      ]
    },
    {
      "id": "claims",
      "title": "Billing and insurance",
      "meta": "Open admissions and claims",
      "heading": "Bills, insurer cases and what is owed",
      "caption": "Running charges against the estimate, unposted charges found before the bill closes, and insurer cases showing who owes the next step.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Admission",
            "Estimate",
            "Running bill",
            "Gap check",
            "Status"
          ],
          "rows": [
            [
              "Bed 4-05, S. Nair",
              "₹1,80,000",
              "₹2,06,400",
              [
                "3 charges unposted",
                "late",
                "Posted",
                "ok"
              ],
              "Tell family"
            ],
            [
              "Bed 6-02, M. Joshi",
              "₹95,000",
              "₹88,100",
              [
                "None",
                "ok"
              ],
              "On track"
            ],
            [
              "Bed 7-01, K. Pillai",
              "₹3,20,000",
              "₹3,64,000",
              [
                "Over estimate by 14%",
                "flag",
                "Family informed",
                "ok"
              ],
              "Review"
            ]
          ]
        },
        {
          "type": "table",
          "cols": [
            "Insurer",
            "Cases open",
            "Waiting on us",
            "Short-paid",
            "Oldest"
          ],
          "rows": [
            [
              "Insurer A",
              "18",
              "5",
              "₹1.2 lakh",
              "41 days"
            ],
            [
              "Insurer B",
              "11",
              "2",
              "₹0.4 lakh",
              "23 days"
            ],
            [
              "TPA C",
              "24",
              "9",
              [
                "₹3.1 lakh",
                "late"
              ],
              "67 days"
            ]
          ]
        },
        {
          "type": "alert",
          "text": "9 cases with TPA C are waiting on documents from us. Oldest is 6 days.",
          "action": "Assign"
        }
      ]
    },
    {
      "id": "stock",
      "title": "Stores",
      "meta": "Central store and wards",
      "heading": "Pharmacy and ward stores",
      "caption": "Stock by batch and expiry across the central store and ward stores, consumption by ward, implants linked to patients and supplier rates compared.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Item",
            "Central",
            "Ward stores",
            "Next expiry",
            "Status"
          ],
          "rows": [
            [
              "IV set, adult",
              "1,200",
              "340",
              "Mar 2027",
              [
                "OK",
                "ok"
              ]
            ],
            [
              "Inj. ceftriaxone 1 g",
              "86",
              "24",
              "18 Nov",
              [
                "Near expiry",
                "late",
                "Moved to ER",
                "ok"
              ]
            ],
            [
              "Oxygen tubing",
              "60",
              "12",
              "Jan 2028",
              [
                "Reorder",
                "flag",
                "Ordered",
                "ok"
              ]
            ],
            [
              "Knee implant, size 3",
              "2",
              "Theatre",
              "Jun 2028",
              [
                "Consignment",
                "info"
              ]
            ]
          ]
        },
        {
          "type": "table",
          "cols": [
            "Supplier",
            "Item",
            "Last rate",
            "Change",
            "Delivery check"
          ],
          "rows": [
            [
              "MedSupply Co.",
              "IV set",
              "₹18",
              "+6%",
              [
                "Matched",
                "ok"
              ]
            ],
            [
              "Surgi Care",
              "Gloves, box",
              "₹310",
              "No change",
              [
                "20 short",
                "late",
                "Credit asked",
                "info"
              ]
            ]
          ]
        }
      ]
    },
    {
      "id": "nabh",
      "title": "Quality and compliance",
      "meta": "Next 60 days",
      "heading": "Files, equipment and credentials",
      "caption": "Completeness of closed files, equipment and credential dates, and who may open which record. Missing items are listed by ward and doctor.",
      "blocks": [
        {
          "type": "table",
          "cols": [
            "Ward",
            "Closed files",
            "Complete",
            "Missing",
            "Status"
          ],
          "rows": [
            [
              "Medical",
              "64",
              "58",
              "Consent x3, summary x3",
              [
                "Chase",
                "flag",
                "Done",
                "ok"
              ]
            ],
            [
              "Surgical",
              "52",
              "41",
              "Op notes x5, nursing x6",
              [
                "Chase",
                "late"
              ]
            ],
            [
              "Maternity",
              "38",
              "37",
              "Summary x1",
              [
                "Chase",
                "flag",
                "Done",
                "ok"
              ]
            ]
          ]
        },
        {
          "type": "table",
          "cols": [
            "Item",
            "Last done",
            "Due",
            "Owner",
            "Status"
          ],
          "rows": [
            [
              "Ventilator V-07 service",
              "Apr",
              "Oct",
              "Biomedical",
              [
                "Due this week",
                "late",
                "Booked",
                "ok"
              ]
            ],
            [
              "Fire safety certificate",
              "Check date",
              "Nov",
              "Admin",
              [
                "Check",
                "flag",
                "Confirmed",
                "ok"
              ]
            ],
            [
              "Nurse registration, T. Joseph",
              "Check date",
              "30 Oct",
              "Nursing head",
              [
                "Renewal",
                "flag"
              ]
            ]
          ]
        },
        {
          "type": "checks",
          "items": [
            {
              "text": "Access review: billing staff cannot open clinical notes",
              "meta": "Monthly, IT and admin",
              "done": true
            },
            {
              "text": "Equipment calibration log sampled",
              "meta": "Quality coordinator",
              "done": false
            }
          ]
        }
      ]
    }
  ],
  "dayHeading": "The same Tuesday, before and after.",
  "dayLede": "What changes is not the care. It is that the day leaves a record, and the record does the chasing.",
  "day": [
    {
      "time": "8:30 am",
      "before": "The OPD desk hands out tokens and learns about Dr. Rao's theatre call at 9:15.",
      "after": "The schedule showed the theatre call yesterday, so Dr. Rao's slots were moved and patients were told in advance."
    },
    {
      "time": "11:00 am",
      "before": "Ortho has 31 waiting and nobody senior knows.",
      "after": "The queue screen flags a 62 minute wait and the desk opens Room 4."
    },
    {
      "time": "1:00 pm",
      "before": "The ER phones three wards for a bed.",
      "after": "The bed screen shows two ready beds in Ward 4 and one cleaning, ready in 20 minutes."
    },
    {
      "time": "3:30 pm",
      "before": "A discharged patient waits since morning. Nobody knows the insurer is waiting on a document.",
      "after": "The discharge checklist shows one open step, and the insurance desk sends the document within minutes."
    },
    {
      "time": "8:00 pm",
      "before": "The night nurse hands over verbally.",
      "after": "Open ward tasks carry across the shift change, each with a name."
    },
    {
      "time": "Month end",
      "before": "The accounts team builds the claims and consultant sheets by hand.",
      "after": "Outstanding claims, deductions and consultant shares come from records already kept."
    }
  ],
  "approach": {
    "heading": "We set it up with you, in four weeks.",
    "lede": "You do not get a login and a manual. We spend time in your OPD, wards, billing office and stores, build Verity around how your hospital really runs, bring your data in, then stay to make sure it keeps working.",
    "phases": [
      {
        "when": "Week 1",
        "name": "Discovery and mapping",
        "we": "Walk one patient journey from registration to discharge with your front desk, ward nurses, billing and insurance desks. Sit with the pharmacy, stores and quality coordinator. Note where things get stuck.",
        "you": "Three to four hours of yours and your administrator's. A department head per area for an hour each. Access to sample bills, claim files and stock registers.",
        "get": "A written map of your hospital: departments, wards and bed types, consultants, insurers, stores and the first problems we will close."
      },
      {
        "when": "Weeks 2 to 3",
        "name": "Configuration",
        "we": "Set up departments, wards, beds, consultants, schedules, discharge steps, claim statuses, store locations, reorder points, equipment and the six screens in your own terms. Set who may see what.",
        "you": "Check each area with its head. Tell us where a step, a form name or a rule is wrong. Agree access by role with your IT or compliance lead.",
        "get": "A working Verity set up with your wards, doctors and rules, ready for your data."
      },
      {
        "when": "Weeks 3 to 4",
        "name": "Migration and training",
        "we": "Bring in your patient list, open admissions, open claims, stock and supplier lists, equipment and staff credentials from the sheets and systems you use. Train each team at its desk during a real shift.",
        "you": "Extracts from your current systems and an opening stock count. An hour with each role.",
        "get": "Your live data inside Verity and teams that have used it through real shifts."
      },
      {
        "when": "After go-live",
        "name": "Operations partnership",
        "we": "Stay on after launch. Review the first weeks of waits, discharge times and claim ageing with you, tune the limits, and handle changes when you add a ward, a department or a branch.",
        "you": "A short monthly review with the administrator and finance head.",
        "get": "A system that keeps matching how the hospital runs, with someone responsible for it."
      }
    ],
    "bring": [
      "A month of bills, claim files and insurer correspondence",
      "Ward and bed list with types",
      "Consultant timings and the OPD schedule",
      "Stock registers for the central store, pharmacy and one ward",
      "Equipment list with service dates, and licence and credential certificates"
    ],
    "time": "About 10 to 14 hours of your own time across the four weeks, mostly in week 1. Department heads, the insurance desk lead and the stores in-charge need a few hours each.",
    "after": "Nobody is hired to run Verity. Records are made as part of work teams already do, and reports come from them."
  },
  "ai": {
    "heading": "Ask your hospital a question. Get an answer, not a report to build.",
    "lede": "Verity AI reads your own visit, bed, billing, claim and stock records and respects who may see what. Ask in plain language, then turn the answer into tasks for the right people. It organises your records. It does not give clinical advice.",
    "examples": [
      {
        "q": "Which discharges are held up, and by what?",
        "a": "14 discharges are pending. 6 wait on the insurer, 4 on the final bill, 3 on a summary signature, 1 on housekeeping.",
        "rows": [
          [
            "Insurer authorisation",
            "6"
          ],
          [
            "Final bill",
            "4"
          ],
          [
            "Summary signature",
            "3"
          ],
          [
            "Housekeeping",
            "1"
          ]
        ],
        "action": "Create a chase task for each owner"
      },
      {
        "q": "Which insurers owe us the most and for how long?",
        "a": "TPA C has ₹46 lakh outstanding, with ₹13 lakh past 45 days. Insurer A is next at ₹38 lakh.",
        "rows": [
          [
            "TPA C",
            "₹46 lakh"
          ],
          [
            "Insurer A",
            "₹38 lakh"
          ],
          [
            "Insurer B",
            "₹21 lakh"
          ],
          [
            "Others",
            "₹85 lakh"
          ]
        ],
        "action": "Assign follow-up to the insurance desk"
      },
      {
        "q": "Which files are incomplete before the next audit?",
        "a": "23 closed files in the last 7 days are incomplete. Surgical ward has the most, mainly operation notes and nursing notes.",
        "rows": [
          [
            "Surgical",
            "11"
          ],
          [
            "Medical",
            "6"
          ],
          [
            "Maternity",
            "1"
          ],
          [
            "Others",
            "5"
          ]
        ],
        "action": "Send missing-item tasks to ward in-charges"
      }
    ]
  },
  "automationHeading": "The follow-ups nobody has time to make.",
  "automationLede": "Set once, then they run from your records. Staff still talk to patients, families and insurers; Verity makes sure the right person knows what to do.",
  "automations": [
    {
      "when": "A running bill passes the estimate by your set share",
      "then": [
        "Billing desk and ward in-charge alerted",
        "Task to inform the family",
        "Conversation recorded on the admission"
      ]
    },
    {
      "when": "A discharge is cleared by the doctor",
      "then": [
        "Checklist created with an owner per step",
        "Bed marked discharge pending",
        "Housekeeping task created when the patient leaves"
      ]
    },
    {
      "when": "An insurer asks for a document",
      "then": [
        "Case marked waiting on hospital",
        "Task to the insurance desk with the request",
        "Sent date and reply recorded"
      ]
    },
    {
      "when": "A claim is paid below the amount billed",
      "then": [
        "Deduction and reason recorded",
        "Task to the insurance desk to query",
        "Outcome recorded: recovered or accepted"
      ]
    },
    {
      "when": "A store item reaches reorder point or a batch nears expiry",
      "then": [
        "Task to the store in-charge",
        "Order drafted or batch moved to a busier ward",
        "Stock updated on receipt"
      ]
    },
    {
      "when": "A closed file has missing items",
      "then": [
        "Missing items listed by doctor and ward",
        "Task to the ward in-charge",
        "File marked complete when signed"
      ]
    }
  ],
  "rules": {
    "heading": "The rules a hospital has to keep up with.",
    "lede": "Verity does not give legal or medical advice and does not file anything for you. It keeps the records these rules depend on in order, so you are not hunting for them when someone asks.",
    "note": "Rules change and differ by state. Confirm current requirements with your legal adviser, your NABH consultant and the relevant authority.",
    "items": [
      {
        "name": "Clinical establishment registration",
        "what": "Hospitals generally need registration under the Clinical Establishments (Registration and Regulation) Act, 2010 where a state has adopted it, or under the state's own nursing home or establishment law elsewhere. Rules and renewals differ by state.",
        "how": "The registration is a record with number, category, dates and an owner, and changes to beds or services are tasks."
      },
      {
        "name": "NABH accreditation standards",
        "what": "Hospitals that seek or hold NABH accreditation work to the standards. The 6th edition applies to new applications from 1 January 2025, with attention to information management and digital health.",
        "how": "Completeness checklists per admission and sampled by ward, with dates for equipment and credential items.",
        "source": {
          "name": "Digital Health News",
          "url": "https://www.digitalhealthnews.com/nabh-introduces-6th-edition-of-accreditation-standards-for-hospitals-with-emphasis-on-digital-health-technology"
        }
      },
      {
        "name": "Health data and the DPDP Rules, 2025",
        "what": "Hospitals handle health data, treated as high risk. The Rules were notified on 14 November 2025 and most duties apply 18 months later. They include security safeguards and keeping logs for at least a year. Erasure requests can generally be declined where clinical record laws require retention.",
        "how": "Role-based access and an audit trail on every view and change.",
        "source": {
          "name": "SCC Online",
          "url": "https://www.scconline.com/blog/post/2025/12/26/digital-personal-data-protection-rules-2025-key-highlights/"
        }
      },
      {
        "name": "Biomedical waste, fire safety and local permissions",
        "what": "Hospitals generally need biomedical waste authorisation and fire safety certification, and local permits, with dates that vary by state.",
        "how": "Each is a record with the issuing body, date and owner, with a task before it lapses."
      }
    ]
  },
  "rolesHeading": "Everyone sees the same records, through their own window.",
  "rolesLede": "A billing clerk should not read a clinical note. A ward nurse should not see consultant payouts. Each role opens on what it needs.",
  "roles": [
    {
      "role": "Administrator",
      "question": "Where is the hospital stuck today?",
      "sees": "Beds, waits, discharges, claims by age, stock and compliance for every branch."
    },
    {
      "role": "Doctor",
      "question": "Who is on my list and what is pending?",
      "sees": "My OPD queue, follow-ups due, my admitted patients and the files waiting for my signature."
    },
    {
      "role": "Ward in-charge",
      "question": "What is open on my ward?",
      "sees": "Bed states, pending discharges, handover tasks, the roster and the ward store."
    },
    {
      "role": "Billing and insurance desk",
      "question": "What is unbilled and what is owed?",
      "sees": "Running bills against estimates, insurer cases waiting on us and short-paid claims."
    },
    {
      "role": "Stores and pharmacy in-charge",
      "question": "What is running out or expiring?",
      "sees": "Stock by batch and expiry, ward consumption, supplier rates and receipts to check."
    }
  ],
  "alongside": {
    "heading": "What changes, and what stays the same.",
    "keep": [
      "Your registration and billing software if you have one. We agree during setup how patient, bill and visit data reach Verity.",
      "Your lab and imaging systems. Reports attach to the patient record.",
      "Insurer and TPA portals, which your desk still uses to submit.",
      "Your accountant, who still prepares returns and statutory filings."
    ],
    "not": [
      "Run your billing counter or take payments.",
      "Give medical advice or store treatment decisions as advice.",
      "Submit claims to insurers or message patients on its own.",
      "File returns, run payroll or replace the doctor's clinical records."
    ],
    "migration": "We bring patients, open admissions, open claims, stock, suppliers, equipment and staff credentials across from the systems and sheets you use now, in stages, one department at a time, so the hospital keeps running while it happens."
  },
  "faqHeading": "Questions hospital owners ask.",
  "faqs": [
    [
      "Does Verity replace our hospital information system?",
      "No. Whatever runs your registration and billing keeps doing so. We agree during setup how patient and bill data reach Verity, which then connects the queue, beds, claims, stores and files around them."
    ],
    [
      "Will it store treatment decisions or give clinical advice?",
      "No. Verity records and organises: visits, bed states, charges, documents and tasks. It does not advise on diagnosis or treatment. Clinical notes stay under your doctors' control and your clinical record rules."
    ],
    [
      "How do you handle patient privacy?",
      "Access is set by role, so billing staff, ward staff and doctors each see only what they need. Every view and change is recorded with who and when. We agree the access plan with your compliance lead in week 2."
    ],
    [
      "Can it help with NABH preparation?",
      "It keeps the records NABH reviewers ask for in order: file completeness, equipment service, credentials and licences. It does not certify you or file anything. Your NABH consultant still advises on the standards."
    ],
    [
      "Can it submit claims to insurers?",
      "No. Your insurance desk submits through the insurer or TPA portals. Verity tracks each case, the documents sent and requested, what was approved and what was paid."
    ],
    [
      "We have two branches. Can we see them together?",
      "Yes. Each is a location with beds, waits, claims and stock side by side, and patients can be one record across both."
    ],
    [
      "Will doctors and nurses accept more data entry?",
      "Only if it replaces work. We keep entries to a tap or two at the point of work, train at the desk during real shifts, and start with the few records that matter most."
    ],
    [
      "How quickly will we see something useful?",
      "Bed states, discharge checklists and claim ageing need only your existing data, so we aim to have them first. Waits and consumption patterns become reliable after a few weeks of recorded activity."
    ],
    [
      "What does it cost?",
      "It depends on the number of branches, beds, users and what you want set up. Message us and we will give you a clear number after a short conversation about how your hospital runs."
    ]
  ],
  "related": [
    "clinics",
    "diagnostic-labs",
    "pharmacies",
    "medical-distributors",
    "physiotherapy-clinics",
    "dental-clinics"
  ],
  "ctaHeading": "Start with the discharges that wait.",
  "ctaLede": "Tell us how your hospital runs and we will show you the held-up discharges, the unposted charges and the claims past their date, using your own numbers."
};
