export default {
  slug: 'gyms',
  status: 'published',
  plural: 'gyms',
  subject: 'gym',

  seo: {
    title: 'AI business management software for gyms | Verity',
    description:
      'Verity connects membership renewals, attendance-based churn signals, personal training revenue, equipment maintenance and collections into one system.',
    keywords: [
      'AI software for gyms',
      'gym management software',
      'membership renewal and churn tracking',
      'fitness centre attendance and PT revenue software',
    ],
  },

  hero: {
    eyebrow: 'Verity for gyms',
    headline: 'A member who stops coming in week three will not renew in month twelve.',
    lede:
      'Gym revenue is renewals, and renewals are decided by attendance months earlier. Verity turns the attendance you already record into the churn signal nobody acts on.',
    note: 'Runs alongside your existing access and billing setup.',
    panel: {
      title: 'Club',
      meta: 'All centres · This month',
      rowsLabel: 'Needs attention',
      metrics: [
        { label: 'Active members', value: '1,840', note: 'across 3 centres' },
        { label: 'Renewals in 60 days', value: '312', note: '84 at risk on attendance' },
        { label: 'Disengaged', value: '206', note: 'no visit in 21 days' },
        { label: 'Dues outstanding', value: '₹14 L', note: '164 members' },
      ],
      rows: [
        { name: '206 members have not visited in 21 days', meta: '84 renew within 60 days', active: true },
        { name: 'New joiners not onboarded within first week', meta: '38 members · strongest churn predictor', active: true },
        { name: 'Two treadmills out of service for 11 days', meta: 'Peak-hour complaints recorded', active: true },
        { name: 'PT sessions sold but not scheduled', meta: '146 sessions · liability carried', active: false },
      ],
      note: 'Illustrative figures. Verity shows your own club in this shape.',
    },
  },

  overview: {
    heading: 'A gym is a subscription business that measures attendance and manages neither.',
    paragraphs: [
      'Almost all of a gym’s revenue is membership renewal. A member who renews is worth several times one who does not, and the single strongest predictor of renewal is whether they were actually using the facility months before the decision. Gyms record attendance at the door and almost never turn it into a signal.',
      'The pattern is consistent and well known: a member who stops attending in the first weeks after joining rarely returns and rarely renews. Onboarding in that window — an induction, a plan, a check-in — changes the outcome more than anything done at renewal time. Thirty-eight new joiners not onboarded in their first week is thirty-eight renewals already at risk.',
      'The second revenue line is personal training and other paid services, sold as session packages that are frequently unscheduled. Sessions sold and not delivered are a liability the gym carries and a member relationship quietly cooling.',
      'The third is equipment. A gym’s product is working machines, and a treadmill out of service for eleven days at peak hours produces complaints and cancellations that nobody attributes back to the maintenance job.',
      'The fourth is that dues on monthly and instalment memberships accumulate against a fixed cost base.',
      'Verity turns attendance into a renewal signal, tracks the session liability, and connects equipment downtime to the complaints it causes.',
    ],
  },

  terminology: [
    ['Memberships, plans, renewals', 'Workflows'],
    ['Members, leads, guests', 'Relationships'],
    ['Attendance, sessions, inductions', 'Work'],
    ['Trainers, floor staff, front desk', 'People'],
    ['Equipment, maintenance, consumables', 'Records'],
    ['Centres, floors, studios', 'Locations'],
    ['Dues, instalments, freezes', 'Control'],
  ],

  challengesHeading: 'The renewal is decided long before the renewal date.',
  challengesLede:
    'Gym problems are engagement problems that present as revenue problems several months later.',
  challenges: [
    {
      problem: 'Attendance is recorded and never used',
      detail:
        'The gym knows who came in and does nothing with it, so a member who stopped attending is contacted at renewal, when the decision is already made.',
      outcome:
        'Attendance patterns raise a disengagement signal against the member with their renewal date attached.',
    },
    {
      problem: 'New joiners are not onboarded',
      detail:
        'The first weeks determine whether a member forms a habit, and induction and check-ins depend on whoever is free.',
      outcome:
        'Onboarding is work with steps, owners and dates in the first weeks, which is where retention is actually won.',
    },
    {
      problem: 'Sold sessions go unscheduled',
      detail:
        'Personal training packages are sold and then not booked, leaving an unfulfilled liability and a cooling relationship.',
      outcome:
        'Session balances sit on the member record with scheduling prompts, so the liability is worked rather than carried.',
    },
    {
      problem: 'Equipment downtime is not connected to churn',
      detail:
        'A machine is out of service for weeks and the complaints, cancellations and quiet non-attendance that follow are never linked to it.',
      outcome:
        'Equipment jobs carry downtime, and member complaints attach to the equipment they concern.',
    },
    {
      problem: 'Dues accumulate against fixed costs',
      detail:
        'Monthly and instalment memberships fall behind, and follow-up is inconsistent while access continues.',
      outcome:
        'Dues age on the member record with contact history and access policy applied consistently.',
    },
    {
      problem: 'Renewal conversations start too late',
      detail:
        'Renewal is approached in the final weeks, by which point the member has already decided based on months of experience.',
      outcome:
        'Renewals are worked from attendance and engagement well before the date, with the right members prioritised.',
    },
  ],

  modulesLede:
    'One system across memberships, engagement, sessions and equipment.',
  modules: [
    {
      id: 'relationships',
      title: 'Members, leads and guests',
      line:
        'Members are records with their plan, renewal date, attendance pattern, sessions held, dues, goals and contact history.',
      why:
        'The member relationship is the entire business and the renewal decision is made from its whole history.',
      example:
        'Eighty-four members renewing within sixty days who have not attended in three weeks.',
    },
    {
      id: 'work',
      title: 'Attendance, inductions and sessions',
      line:
        'Visits, onboarding steps and training sessions are work with owners, dates and states against the member.',
      why:
        'Retention is produced by things that happen in the first weeks, and those only happen if they are assigned.',
      example:
        'Thirty-eight new joiners without a completed induction in their first week.',
    },
    {
      id: 'workflows',
      title: 'Memberships, renewals and freezes',
      line:
        'Joining, renewal, upgrade, freeze and cancellation move through defined steps with recorded decisions.',
      why:
        'Freezes and cancellations carry reasons that are the most useful retention information a gym gets.',
      example:
        'Cancellation reasons recorded and aggregated rather than absorbed at the desk.',
    },
    {
      id: 'people',
      title: 'Trainers, floor staff and front desk',
      line:
        'Staff are modelled once, and every session, induction, follow-up and sale carries who owned it.',
      why:
        'Retention and personal training revenue both vary sharply by trainer.',
      example:
        'Renewal rate among members onboarded by each trainer.',
    },
    {
      id: 'records',
      title: 'Equipment and maintenance',
      line:
        'Equipment is a record with its service schedule, fault history, downtime and the complaints raised against it.',
      why:
        'The gym’s product is working equipment, and downtime at peak hours is a churn driver.',
      example:
        'Two treadmills out of service for eleven days, with the peak-hour complaints attached.',
    },
    {
      id: 'control',
      title: 'Dues, access policy and approvals',
      line:
        'One permission model and one audit trail, with discounts, freezes and access decisions recorded.',
      why:
        'Discounting to close a membership and continuing access despite dues are both decisions worth seeing.',
      example:
        'A joining discount recorded as an approval with its effect on realised membership value.',
    },
    {
      id: 'intelligence',
      title: 'Retention, revenue and engagement reporting',
      line:
        'Attendance and engagement patterns, renewal rates, churn by cohort and reason, session liability, equipment downtime and dues ageing come from the operational records.',
      why:
        'A subscription business needs cohort retention reporting, and gyms almost always report joins and revenue instead.',
      example:
        'Renewal rate by attendance band, which quantifies exactly what engagement is worth.',
    },
    {
      id: 'ai',
      title: 'Ask the club a question',
      line:
        'Verity AI answers from your own member, attendance, session and equipment records, respects permissions, and can create assigned follow-ups.',
      why:
        'The valuable question — who is about to leave and why — is answerable from data the gym already collects.',
      example:
        '"Which members renewing soon have stopped attending?" returns eighty-four with calls assigned.',
    },
    {
      id: 'communication',
      title: 'Member contact recorded',
      line:
        'Calls, check-ins and complaints attach to the member or equipment they concern.',
      why:
        'A retention call is only useful if the next person knows it happened and what was said.',
      example:
        'A member’s complaint about a machine, visible when they later consider cancelling.',
    },
    {
      id: 'locations',
      title: 'Centres, floors and studios',
      line:
        'Locations roll into the business, with members, equipment and reporting following the same structure.',
      why:
        'Multi-centre operators need retention and utilisation comparable across sites.',
      example:
        'Renewal rate and equipment downtime by centre.',
    },
    {
      id: 'workforce',
      title: 'Trainer availability and session delivery',
      line:
        'Trainer availability and session delivery stay connected to the members they served.',
      why:
        'Unscheduled sold sessions are a liability, and scheduling depends on trainer availability being visible.',
      example:
        'A hundred and forty-six sold sessions unscheduled against trainer availability.',
    },
  ],

  workflowsHeading: 'Retention is a sequence, not a conversation at renewal.',
  workflowsLede:
    'These already happen. As records they change the renewal months before it is due.',
  workflows: [
    {
      name: 'Joining and onboarding',
      steps: [
        'Member joined with plan, dues schedule and goals recorded',
        'Induction scheduled within the first week',
        'Initial programme agreed and recorded',
        'Check-ins scheduled through the first month',
        'Attendance in the first weeks tracked as the retention signal',
      ],
      note:
        'The first weeks decide the renewal, and this is the sequence almost no gym runs consistently.',
    },
    {
      name: 'Disengagement follow-up',
      steps: [
        'Members past an attendance threshold identified',
        'Renewal date and history attached',
        'Contact assigned to a trainer or the front desk',
        'Reason recorded — travel, injury, dissatisfaction, habit',
        'Re-engagement plan agreed and tracked',
      ],
      note:
        'A member reachable at three weeks is frequently unreachable at three months.',
    },
    {
      name: 'Renewal cycle',
      steps: [
        'Renewals due identified well ahead of the date',
        'Attendance and engagement reviewed per member',
        'Priority set by risk rather than by date',
        'Conversation assigned with the member history attached',
        'Outcome and reason recorded either way',
      ],
      note:
        'Prioritising by risk rather than by date is what makes the same effort produce more renewals.',
    },
    {
      name: 'Personal training package',
      steps: [
        'Package sold and session balance recorded',
        'Sessions scheduled against trainer availability',
        'Delivery recorded and the balance reduced',
        'Unscheduled balances surfaced with prompts',
        'Expiry and extension handled as recorded decisions',
      ],
      note:
        'Sold and unscheduled sessions are a liability and a signal, and they are usually neither tracked nor worked.',
    },
    {
      name: 'Equipment maintenance',
      steps: [
        'Service schedules held against equipment',
        'Faults raised as jobs with priority and owner',
        'Downtime recorded from report to return to service',
        'Member complaints attached to the equipment',
        'Repeat faults surfaced for replacement decisions',
      ],
      note:
        'Downtime at peak hours produces churn that is never attributed unless the two records connect.',
    },
    {
      name: 'Dues collection',
      steps: [
        'Instalments raised against the membership',
        'Balances aged automatically',
        'Follow-up assigned with contact history',
        'Access policy applied consistently at thresholds',
        'Outcome recorded on the member record',
      ],
      note:
        'Applying access policy consistently is fairer and more collectible than applying it occasionally.',
    },
  ],

  ai: {
    heading: 'Ask who is about to leave.',
    lede:
      'Verity AI reads the same member, attendance, session and equipment records the club creates every day. It answers from your own centres, respects permissions, and can turn an answer into retention calls.',
    panelMeta: 'Grounded in your club records',
    note: 'Verity AI only returns what the person asking has permission to see.',
    questions: [
      'Which members renewing in the next sixty days have stopped attending?',
      'Which new joiners have not completed onboarding in their first week?',
      'What is renewal rate by attendance band?',
      'How many sold personal training sessions are unscheduled?',
      'Which equipment has the most downtime and the most complaints?',
      'What reasons are members giving when they cancel?',
      'Which members are past dues while still using the club?',
      'How does retention compare across centres?',
      'Summarise churn risk for the next quarter.',
    ],
  },

  automationHeading: 'The signals sitting in your door data.',
  automationLede:
    'Each runs from the club’s own records at the point the condition is met.',
  automations: [
    {
      trigger: 'A member passes an attendance gap threshold',
      steps: [
        'Member flagged with renewal date and history attached',
        'Contact assigned to a trainer or front desk',
        'Reason and re-engagement outcome recorded',
      ],
    },
    {
      trigger: 'A new member joins',
      steps: [
        'Induction scheduled within the first week',
        'Check-ins created through the first month',
        'Escalated if the induction does not happen',
      ],
    },
    {
      trigger: 'A renewal date approaches',
      steps: [
        'Attendance and engagement reviewed',
        'Risk-based priority assigned',
        'Conversation assigned with member history attached',
      ],
    },
    {
      trigger: 'Sold sessions remain unscheduled',
      steps: [
        'Balance flagged against the member and trainer',
        'Scheduling prompt assigned',
        'Expiry decision raised if it approaches',
      ],
    },
    {
      trigger: 'Equipment goes out of service',
      steps: [
        'Job raised with priority and downtime tracked',
        'Peak-hour impact flagged',
        'Complaints attached to the equipment record',
      ],
    },
    {
      trigger: 'Dues pass their threshold',
      steps: [
        'Balance aged with contact history attached',
        'Follow-up assigned',
        'Access policy applied consistently at the threshold',
      ],
    },
  ],

  intelligenceHeading: 'What the operator can actually see.',
  intelligenceLede:
    'Cohort retention and engagement from the attendance you already collect.',
  intelligence: [
    {
      area: 'Retention',
      points: [
        'Renewal rate by cohort and centre',
        'Renewal rate by attendance band',
        'Churn reasons recorded at cancellation',
        'Members at risk ahead of renewal',
      ],
    },
    {
      area: 'Engagement',
      points: [
        'Attendance frequency by member and cohort',
        'Onboarding completion in the first weeks',
        'Disengagement gaps and re-engagement outcomes',
        'Peak-hour utilisation by centre',
      ],
    },
    {
      area: 'Revenue',
      points: [
        'Membership revenue by plan and centre',
        'Personal training sold, delivered and outstanding',
        'Realised membership value after discounts',
        'Dues outstanding with ageing',
      ],
    },
    {
      area: 'Equipment',
      points: [
        'Downtime by machine and period',
        'Complaints attached to equipment',
        'Repeat faults and replacement candidates',
        'Service compliance against schedules',
      ],
    },
    {
      area: 'Staff',
      points: [
        'Sessions delivered by trainer',
        'Retention among members each trainer onboarded',
        'Follow-ups completed and outcomes',
        'Sales and discounting by staff member',
      ],
    },
  ],
  intelligenceNote:
    'All of this comes from attendance, sessions and maintenance records the club already produces.',

  rolesHeading: 'One club, four different questions.',
  rolesLede:
    'Everyone works from the same records, and each opens on what they need.',
  roles: [
    {
      role: 'Owner',
      question: 'What is retention doing?',
      focus: 'Renewal rate by cohort and attendance band, churn reasons, revenue per member, centre comparison.',
    },
    {
      role: 'Club manager',
      question: 'Who needs contacting this week?',
      focus: 'Disengaged members with renewals approaching, onboarding overdue, equipment down, dues outstanding.',
    },
    {
      role: 'Trainer',
      question: 'Who are my members and how are they doing?',
      focus: 'Assigned members, attendance patterns, sessions to schedule and deliver, check-ins due.',
    },
    {
      role: 'Front desk',
      question: 'What is due and what is outstanding?',
      focus: 'Renewals due, dues outstanding, sessions to book, complaints to record.',
    },
  ],

  useCasesHeading: 'What gyms use Verity for',
  useCases: [
    {
      name: 'Attendance as a churn signal',
      body: 'Door data turned into a disengagement signal with the renewal date attached, months before the renewal conversation.',
    },
    {
      name: 'First-week onboarding',
      body: 'Induction and check-ins as assigned work in the weeks that actually decide whether a member forms a habit.',
    },
    {
      name: 'Risk-based renewal prioritisation',
      body: 'Renewals worked by engagement risk rather than by date order, so the same effort produces more renewals.',
    },
    {
      name: 'Session liability',
      body: 'Sold personal training sessions tracked against delivery, so an unfulfilled balance is worked rather than carried.',
    },
    {
      name: 'Equipment downtime and complaints',
      body: 'Maintenance jobs carrying downtime with member complaints attached, connecting a broken machine to the churn it causes.',
    },
    {
      name: 'Cancellation reasons',
      body: 'Reasons recorded at cancellation and aggregated, which is the most useful retention information a gym receives and usually discards.',
    },
    {
      name: 'Dues and access policy',
      body: 'Balances aged with access policy applied consistently at thresholds rather than occasionally.',
    },
    {
      name: 'Asking about churn',
      body: 'Plain-language questions across attendance, renewals, sessions and equipment, with calls assigned in the same step.',
    },
  ],

  migration:
    'Your access control and billing setup continues to run and is mapped during implementation. Members, plans, renewal dates, session balances, equipment and dues are brought across, and Verity is introduced as the operational layer.',

  faqHeading: 'Questions gym operators ask',
  faqs: [
    [
      'What can AI software do for a gym?',
      'Verity AI answers questions from your own member, attendance, session and equipment records: which members renewing soon have stopped attending, which new joiners were not onboarded, what renewal rate looks like by attendance band, how many sold sessions are unscheduled. Each answer can become a retention call assigned to a trainer.',
    ],
    [
      'How does it help with retention?',
      'Attendance is already collected at the door and almost never used. Verity turns the pattern into a disengagement signal with the renewal date attached, so members are contacted at three weeks — when they are reachable — rather than at renewal, when the decision has been made.',
    ],
    [
      'Why does onboarding matter so much?',
      'The first weeks determine whether a member forms a habit, and habit determines renewal. Making induction and early check-ins assigned work with dates is the single highest-return change available, and it usually depends on whoever is free.',
    ],
    [
      'Does it track personal training packages?',
      'Session balances sit on the member record with scheduling prompts against trainer availability, so sold-and-unscheduled sessions become a worked list rather than an unfulfilled liability and a cooling relationship.',
    ],
    [
      'Can it connect equipment downtime to churn?',
      'Equipment is a record with fault history and downtime, and member complaints attach to the equipment they concern — so a machine out of service at peak hours can be seen alongside the complaints and cancellations that follow it.',
    ],
    [
      'Does Verity replace our access control or billing?',
      'No. Those continue and are mapped during implementation. Verity holds members, engagement, sessions, equipment, dues and the retention reporting across them.',
    ],
    [
      'Can it record why members leave?',
      'Cancellation and freeze reasons are recorded as part of the workflow and aggregated, which is the most useful retention information a gym gets and the one most often lost at the front desk.',
    ],
    [
      'Does it work across several centres?',
      'Centres, floors and studios are locations rolling into the business, so retention, engagement and equipment downtime are directly comparable across sites.',
    ],
    [
      'How long does implementation take?',
      'About four weeks: discovery and mapping of membership plans and the member journey, configuration, migration of members, renewal dates and session balances, then an ongoing operations partnership.',
    ],
  ],

  ctaHeading: 'Start with the members who stopped coming.',
  ctaLede:
    'They are in your door data already and they are still reachable. Tell us how attendance is used today.',

  related: ['fitness-studios', 'yoga-studios', 'spas', 'salons', 'coaching-institutes', 'saas-companies'],
};
