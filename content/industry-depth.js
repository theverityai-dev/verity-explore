/* The shared journey of each industry hub, written in plain words. The hub
   page also aggregates, at build time, the problems and sourced figures from
   its member business pages, so only the journey is authored here. Each stage:
   [what it is, who owns it, where it usually goes wrong]. */

export const LIFECYCLE = {
  'retail-commerce': {
    heading: 'A shop’s week, from supplier to the till.',
    lede: 'Whatever is sold, the path is the same: stock is bought, shelved, sold, paid for and reordered. Money leaks at the handoffs between these steps.',
    stages: [
      ['Buy', 'Owner or buyer', 'Orders are placed from memory of what sold, so fast lines run out and slow lines pile up.'],
      ['Receive', 'Store keeper', 'The delivery is not checked line by line, and shortages are found weeks later when the supplier disputes it.'],
      ['Display and price', 'Floor staff', 'Shelf price, system price and offer price differ, and nobody owns the difference.'],
      ['Sell', 'Counter staff', 'Discounts and returns are given on the spot and show up only as a lower total at day end.'],
      ['Count', 'Store keeper and owner', 'The shelf count and the book count disagree, and nobody knows which one to believe.'],
      ['Pay suppliers', 'Owner and accounts', 'Bills are paid when someone calls, not when they fall due or when cash allows.'],
      ['Review', 'Owner', 'Which lines earn money is known by feel, because margin, stock age and credit are in different places.'],
    ],
  },
  'food-hospitality': {
    heading: 'A service day, from the supplier’s van to the closing cash.',
    lede: 'Food and hospitality run on a clock. Ingredients arrive, are prepared, sold and gone within hours, so errors cannot be fixed later.',
    stages: [
      ['Order ingredients', 'Chef or manager', 'Orders are placed by phone from memory, with no record of the price or what was promised.'],
      ['Receive and store', 'Store keeper', 'Quantity and quality are not checked at the door, and expiry is found by smell.'],
      ['Prepare', 'Kitchen', 'Recipes live in the head of one cook, so portions and cost change with the shift.'],
      ['Serve', 'Floor and counter', 'Orders move by shouting and slips, so mistakes and delays are not recorded.'],
      ['Close the day', 'Manager', 'Sales, wastage and cash are totalled the next morning from memory and loose papers.'],
      ['Staff and rota', 'Manager', 'The roster is made on habit, not on what that day usually earns.'],
      ['Review', 'Owner', 'Food cost, wastage and staff cost are known at month end, too late to act.'],
    ],
  },
  'professional-services': {
    heading: 'A client matter, from first call to the last invoice.',
    lede: 'The product is work, and the work is people’s time. Value is lost where time is not recorded and where deadlines live in diaries.',
    stages: [
      ['Enquiry and engagement', 'Partner', 'The scope agreed on a call is not written down, so the work grows without the fee.'],
      ['Onboarding', 'Associate', 'Documents are collected by email in pieces and the checklist is in someone’s head.'],
      ['Do the work', 'Team', 'Who is doing what, and what is due when, is asked in person.'],
      ['Review and approve', 'Partner', 'Drafts wait in inboxes, and the partner’s time becomes the bottleneck.'],
      ['Deadlines and filings', 'Team and partner', 'Statutory and court dates live in separate diaries, and a miss costs the client.'],
      ['Bill', 'Accounts', 'Time worked is reconstructed at month end, and part of it is never billed.'],
      ['Collect and review', 'Partner', 'Which clients and which kinds of work pay is not known without a spreadsheet exercise.'],
    ],
  },
  healthcare: {
    heading: 'A patient visit, from booking to follow-up.',
    lede: 'Healthcare runs on a patient’s time, trust and records. The cost of a gap is paid by the patient first and by the practice second.',
    stages: [
      ['Appointment', 'Front desk', 'The day’s list is a paper register, and no-shows and gaps are not tracked.'],
      ['Registration', 'Front desk', 'The same patient is entered twice with a different spelling, so the history splits.'],
      ['Consultation and treatment', 'Doctor', 'Notes and treatment plans sit in a book or in the doctor’s memory.'],
      ['Tests and procedures', 'Lab and nursing', 'Orders, samples and results travel on slips, and a report can be lost.'],
      ['Medicines and consumables', 'Pharmacy and stores', 'Expiry and stock are checked when a drawer is found empty.'],
      ['Billing and insurance', 'Accounts', 'Claims are prepared late and from memory, so some are short paid.'],
      ['Follow-up', 'Clinic team', 'Patients due for a review are not listed, so they come back late or not at all.'],
    ],
  },
  education: {
    heading: 'A student’s year, from admission to results.',
    lede: 'Institutions juggle students, fees, teachers and timetables. Trouble starts where the office, the teachers and the parents each hold a different version.',
    stages: [
      ['Enquiry and admission', 'Admissions desk', 'Enquiries are noted on slips and never followed up, so seats go empty.'],
      ['Fees', 'Accounts', 'Instalments, concessions and dues are in a ledger that only one person understands.'],
      ['Timetable and teachers', 'Academic head', 'Clashes and absences are discovered on the morning.'],
      ['Attendance', 'Teachers', 'Registers are filled late and parents are told when it is too late to help.'],
      ['Assessment', 'Teachers', 'Marks are collected in different formats and compiled by hand.'],
      ['Parent communication', 'Class teacher', 'Each message is written by hand, and there is no record of what was said.'],
      ['Review', 'Principal or owner', 'Enrolment, fee collection and results are seen in separate reports.'],
    ],
  },
  'real-estate-construction': {
    heading: 'A project or property, from enquiry to handover.',
    lede: 'Work is long and money moves in stages. The risk is not that one thing fails but that nobody sees all the pieces at the same time.',
    stages: [
      ['Enquiry and site visit', 'Sales', 'Leads sit in phones, and a site visit is not followed by a recorded next step.'],
      ['Quote and agreement', 'Owner', 'The scope in the quote is changed on site, and the change is not priced.'],
      ['Approvals and permits', 'Project manager', 'Permit dates and conditions are in files, and a lapse stops the site.'],
      ['Work on site', 'Site engineer', 'Daily progress, material and labour are told by phone, not recorded.'],
      ['Material and vendors', 'Purchase', 'Material arrives late or short, and vendor bills are not matched to work done.'],
      ['Stage billing', 'Accounts', 'The bill is raised when someone remembers, and the stage is argued.'],
      ['Handover and maintenance', 'Project manager', 'Snags and later requests are lost between calls.'],
    ],
  },
  'manufacturing-b2b': {
    heading: 'An order, from enquiry to cash.',
    lede: 'Factories and trade businesses are chains of dependent steps. A delay at any step becomes a late order, and the cause is hard to find.',
    stages: [
      ['Quote and promise', 'Sales and owner', 'A date is promised without looking at what the floor can do.'],
      ['Plan and buy', 'Planner and purchase', 'Material is bought against requests, not against the plan, so the line stops for one item.'],
      ['Receive', 'Stores', 'Material is accepted by invoice and checked later, and shortages surface at the machine.'],
      ['Make or pick', 'Production or warehouse', 'Progress and waste are not written down, so the cause of delay is a guess.'],
      ['Check', 'Quality', 'Problems are found after dispatch, and cannot be traced to a batch or shift.'],
      ['Dispatch', 'Dispatch', 'One missing paper holds the truck.'],
      ['Collect and cost', 'Accounts and owner', 'Collection depends on memory, and the real margin of the order is never worked out.'],
    ],
  },
  'personal-local-services': {
    heading: 'A customer’s visit, from the first call to the next one.',
    lede: 'Local services depend on repeat customers and on staff who each hold part of the picture. What is not written down leaves with the person.',
    stages: [
      ['Enquiry', 'Front desk', 'Calls and messages come to different phones, and some are never answered.'],
      ['Schedule', 'Front desk', 'The day’s plan is on paper or in a chat, and gaps and overlaps are found when the customer arrives.'],
      ['Serve', 'Staff', 'What was done and what was promised is remembered by the person, not by the business.'],
      ['Stock and supplies', 'Owner or manager', 'Consumables run out in the middle of a service.'],
      ['Pay and settle', 'Front desk', 'Staff commission, advances and day-end cash are worked out by hand.'],
      ['Bring them back', 'Owner', 'Customers who have not returned are not listed, so nobody calls them.'],
      ['Review', 'Owner', 'Which services, staff and customers make money is known by feel.'],
    ],
  },
  'digital-technology': {
    heading: 'A project or subscription, from lead to renewal.',
    lede: 'Technology businesses sell time or a subscription. Money is lost where scope grows silently, where time is not tracked and where renewals are not watched.',
    stages: [
      ['Lead and proposal', 'Founder or sales', 'The scope in the proposal is not the scope in the delivery team’s head.'],
      ['Plan and staff', 'Delivery head', 'Who is free next month is a guess, so people are double-booked or idle.'],
      ['Build', 'Team', 'Tasks and changes are in chat, and what was agreed with the client is hard to find.'],
      ['Review and release', 'Lead', 'Approvals wait on one person, and releases are not recorded.'],
      ['Support', 'Support team', 'Tickets are answered from a shared inbox, and recurring issues are not counted.'],
      ['Invoice and renew', 'Accounts and founder', 'Billable work is missed and renewals arrive as a surprise.'],
      ['Review', 'Founder', 'Margin by client and by project is worked out at the end of the quarter.'],
    ],
  },
};
