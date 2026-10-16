export default {
  schema: 2,
  slug: 'online-marketplaces',
  status: 'published',
  plural: 'online marketplaces',
  subject: 'marketplace',
  checked: '15 October 2026',

  seo: {
    title: 'Operations software for Indian online marketplaces | Verity',
    description:
      'See 14 problems that drain a marketplace: unfilled demand, stalled seller onboarding, weak listings, disputes, payout queries and subsidy, and the Verity screens for each.',
    keywords: [
      'marketplace operations software India',
      'seller onboarding and KYC tracking',
      'marketplace dispute management',
      'seller payout reconciliation',
      'marketplace seller quality scorecard',
    ],
  },

  uses: ['people', 'work', 'relationships', 'records', 'workflows', 'communication', 'intelligence', 'control', 'orders', 'suppliers', 'locations', 'workforce', 'ai'],

  hero: {
    eyebrow: 'Verity for online marketplaces',
    headline: 'Buyers searched for something in Pune and your marketplace had nothing to show them.',
    lede:
      'A marketplace does not fail everywhere at once. It fails in one category, one city, one seller group at a time. Verity keeps unfilled demand, seller health, disputes and payouts together, so you can see where the next failure is forming.',
    oneLine:
      'One system for the people who supply your marketplace: who is joining, who is thriving, who is causing disputes and who is owed money.',
    note: 'Your app and website stay where they are. Verity runs the operation behind the marketplace.',
    screen: 'owner',
    screenNote: 'categories, cities, sellers and your ops team',
  },

  today: {
    heading: 'The marketplace runs on code. The supply side still runs on people and sheets.',
    paragraphs: [
      'Buyers see an app. Behind it, a small team approves seller documents, reads photos for fake goods, settles disputes, answers "where is my payout" and chases the sellers who matter. That work happens in an admin panel, a ticket tool, a payments dashboard, and a lot of WhatsApp groups.',
      'Each tool holds one slice. The admin panel knows the listing. The ticket tool knows the complaint. The payments dashboard knows the transfer. Nobody can open one seller and see the full picture: when they joined, how many listings, how many disputes, how late they dispatch and what they are owed.',
      'So problems are found by the loudest complaint. A category quietly empties. A good seller leaves after a delayed payout. A bad one runs for months because each complaint is handled as a one-off.',
    ],
    stack: ['Admin panel', 'Support ticket tool', 'Payments dashboard', 'Sheets for KYC and quality', 'WhatsApp groups with sellers'],
    stackNote: 'These tools do their jobs. None gives you one view of a seller, a category or a dispute across all of them.',
  },

  painsHeading: 'Where a marketplace actually loses money and trust.',
  painsLede:
    'These are the situations marketplace operators describe again and again. For each one: how it looks, what it costs, and what Verity does about it.',
  pains: [
    {
      area: 'Supply',
      title: 'Demand arrives in categories and cities with nothing to sell',
      scene:
        'Searches for "handloom sarees under ₹2,000" in Bhopal return three listings, two out of stock. The buyer leaves, and the search is just a line in an analytics tool.',
      cost:
        'Example arithmetic: 5,000 failed searches a month with a 3% chance of becoming an order at ₹1,200 is ₹1.8 lakh of sales you could have had, and every failed search teaches the buyer not to return.',
      fix:
        'Failed and thin searches are grouped by category and city and shown against the sellers you have there. A gap becomes a task for the supply team with a target, a named owner and a record of whom they approached.',
      screen: 'supply',
    },
    {
      area: 'Supply',
      title: 'City and category launches are run from separate sheets',
      scene:
        'Launching home décor in Jaipur needs 60 sellers by month end. The target sits in one sheet, the sellers contacted in another, and the status in a manager’s head.',
      cost:
        'Launches slip without anyone noticing, and the team repeats outreach to sellers who already said no.',
      fix:
        'Each launch is a project with a target, sellers contacted, stage reached and who owns each one. Cities are locations that roll up, so you compare launches side by side.',
      screen: 'supply',
    },
    {
      area: 'Onboarding',
      title: 'Seller documents sit in a queue for days',
      scene:
        'A seller applied on Monday. Her PAN is blurred, the bank proof is for a different name, and nobody told her. By Friday she has listed on a rival marketplace.',
      cost:
        'Every day of waiting loses sellers you paid to attract. Reviewers spend time re-reading the same file because there is no clear state.',
      fix:
        'Every application is a record with a state: documents received, under review, correction needed, approved or rejected. The reviewer sees the missing item, and a correction request is a task with a due date.',
      screen: 'onboarding',
    },
    {
      area: 'Onboarding',
      title: 'Sellers join and never list, or list once and disappear',
      scene:
        'Of every 100 approved sellers, 40 add one product and never return. Nobody follows up because no one can see who they are.',
      cost:
        'Example arithmetic: if 800 sellers join a quarter and 320 go quiet, you have paid for verification and onboarding of 320 sellers who gave you no supply.',
      fix:
        'Verity tracks days since approval, listings added and first sale. Sellers who stall at a stage appear on a list assigned to an onboarding executive with a call script, and the result is recorded.',
      screen: 'onboarding',
    },
    {
      area: 'Quality',
      title: 'Poor, duplicate and fake listings reach buyers',
      scene:
        'The same phone case has eleven listings with different prices. A "branded" shoe comes with photos from another website. Moderators work through a queue that is never empty.',
      cost:
        'Buyers lose trust. In a LocalCircles survey, about one in five online shoppers reported receiving a fake or counterfeit product in a year, which is the reputation risk every marketplace shares.',
      fix:
        'Flagged listings go into a review queue ranked by risk and sales. Each decision (approve, ask for proof, remove) is recorded with a reason and the moderator’s name. Repeat issues roll up to the seller.',
      screen: 'listings',
      source: {
        name: 'LocalCircles survey via Moneylife, January 2025',
        url: 'https://moneylife.in/article/48-percentage-of-online-shoppers-got-stuck-with-a-wrong-product-localcircles/76116.html',
      },
    },
    {
      area: 'Quality',
      title: 'Rule breaking is handled one complaint at a time',
      scene:
        'A seller asks buyers to pay outside the app. Three different support agents handled three complaints over two months. No one saw that it was the same seller.',
      cost:
        'Revenue leaks outside your fees, and the strongest buyers meet the weakest sellers again and again.',
      fix:
        'Complaints, warnings and policy flags attach to the seller, so repeats are visible. A suspension or removal above a set limit needs a recorded approval and reason.',
      screen: 'sellers',
    },
    {
      area: 'Disputes',
      title: 'Disputes are decided slowly and on thin evidence',
      scene:
        'A buyer says the saree is not the colour shown. The seller says it is. Photos are in two chat threads, the delivery record is in the logistics tool, and the support agent decides by gut.',
      cost:
        'A slow dispute costs a buyer, an unfair one costs a seller. Either way the refund usually comes out of your own pocket.',
      fix:
        'A dispute is a record holding the order, listing, photos, messages and delivery proof, with a deadline for each side to respond. Decisions are recorded with reasons so similar cases are handled the same way.',
      screen: 'disputes',
    },
    {
      area: 'Disputes',
      title: 'Nobody knows what disputes really cost',
      scene:
        'Refunds are paid, shipping is reversed, goodwill credits are given. Each is booked in a different place, so the cost of disputes appears as a general loss.',
      cost:
        'You cannot tell which categories and sellers produce the most refund cost, so you cannot fix the cause.',
      fix:
        'Every refund, reverse shipping cost and credit is recorded against the dispute. Cost is shown by category and seller, and by whether you or the seller bore it.',
      screen: 'disputes',
    },
    {
      area: 'Money',
      title: 'Sellers keep asking where their payout is',
      scene:
        'Payouts are held for returns windows and disputes. A seller sees ₹14,000 less than expected and calls three times. The agent has to check four screens to say why.',
      cost:
        'Payout queries are among the heaviest seller-support loads, and a late or unexplained payout is the fastest way to lose a good seller.',
      fix:
        'Each payout is a statement line by line: sales, fees, returns, holds and adjustments. Held amounts show their reason and release date, so support answers in seconds and exceptions are listed for the finance team.',
      screen: 'payouts',
    },
    {
      area: 'Money',
      title: 'The take rate on paper is not the take rate you earn',
      scene:
        'Your headline take rate is 12%. After coupons you fund, shipping subsidy, refund absorption and payment costs, the real number in some categories is closer to 4%.',
      cost:
        'You scale categories that look healthy and lose money on every order.',
      fix:
        'Each order carries commission, subsidy, refunds you bore and fees paid out. The overview shows net revenue per order by category, so you can see which ones to push and which to reprice.',
      screen: 'owner',
    },
    {
      area: 'Sellers',
      title: 'Support for sellers is slow and the same questions repeat',
      scene:
        'Ten new sellers ask how to change a bank account. A seller waits two days for an answer to a listing rejection. Agents have no history on the seller to go with it.',
      cost:
        'Frustrated sellers, repeated work for the support team, and no list of the questions that should be solved in the product or the help page.',
      fix:
        'Seller tickets sit on the seller record with the tier, past issues and what they are owed. Questions are tagged by topic, and the top five are listed each week so the product team sees what to fix.',
      screen: 'sellers',
    },
    {
      area: 'Sellers',
      title: 'You cannot see which sellers are good until buyers complain',
      scene:
        'A seller cancels 14% of orders and dispatches late, but the numbers are in separate reports. A reliable seller with excellent ratings is never recognised.',
      cost:
        'Buyers meet the worst suppliers, and your best sellers receive no extra attention.',
      fix:
        'A seller scorecard shows cancellation rate, late dispatch, disputes, returns and ratings in one place, with the limits you set. Sellers over the limit get a task for an account manager, and the best get recognised.',
      screen: 'sellers',
    },
    {
      area: 'Sellers',
      title: 'Your top sellers are managed informally, and one leaving hurts',
      scene:
        'Fifty sellers produce most of your sales. One account manager knows them all through calls. When she leaves, no one knows what was promised to whom.',
      cost:
        'A top seller leaving takes a share of GMV with them and the relationship history is lost.',
      fix:
        'Key sellers have a relationship record with contacts, commitments, calls and issues. A task appears when a key seller’s sales drop or a payout is held.',
      screen: 'sellers',
    },
    {
      area: 'Compliance',
      title: 'Tax collected at source and seller records do not agree',
      scene:
        'Marketplaces that collect payment from buyers generally collect GST tax at source and report it each month. Your finance team rebuilds the seller-wise figures from exports before the 10th.',
      cost:
        'Errors in the monthly statement, seller complaints about credit, and days of month-end work.',
      fix:
        'Each order carries the seller, taxable value and tax collected, and returns reduce the net figure. A seller-wise summary is ready for your accountant to prepare the statement.',
      screen: 'payouts',
    },
  ],

  factsHeading: 'The numbers that make these problems worth fixing.',
  factsLede:
    'From published sources, with the source named under each figure. Your own numbers will differ, and showing you yours is the first thing Verity does.',
  facts: [
    {
      figure: '20%',
      text: 'of surveyed Indian online shoppers said they received a fake or counterfeit product at least once in the past 12 months. Only 39% of them got a replacement.',
      source: { name: 'LocalCircles via Moneylife', year: '2025', url: 'https://moneylife.in/article/48-percentage-of-online-shoppers-got-stuck-with-a-wrong-product-localcircles/76116.html' },
    },
    {
      figure: '48%',
      text: 'of those surveyed said they had been stuck with a wrong product, linked in the report to platforms’ return and refund policies. The survey had over 102,000 responses.',
      source: { name: 'LocalCircles via Moneylife', year: '2025', url: 'https://moneylife.in/article/48-percentage-of-online-shoppers-got-stuck-with-a-wrong-product-localcircles/76116.html' },
    },
    {
      figure: '0.5%',
      text: 'GST tax collected at source on the net value of sales made through a marketplace that collects payment, reduced from 1% from 10 July 2024. It is deposited and reported by the operator within 10 days after month end.',
      source: { name: 'TaxAJ guide to Section 52', year: '2024', url: 'https://www.taxaj.com/learn/gst-on-e-commerce-operators-tcs-under-section-52-step-by-step-guide/' },
    },
    {
      figure: 'Every 6 months',
      text: 'is how often IndiaMART said it plans to double its spending on AI tools to curb fake listings and check content, showing how much effort quality work now needs.',
      source: { name: 'Reuters via The Star', year: '2026', url: 'https://www.thestar.com.my/tech/tech-news/2026/06/25/indiamart-doubles-down-on-ai-to-curb-fake-listings-improve-buyer-interaction' },
    },
  ],
  factsNote:
    'The shopper figures come from one survey of online shoppers and may differ for a business-to-business or services marketplace. The tax item is from a tax guide and applies only where the operator collects the buyer’s payment. They show scale, not what your marketplace will see.',

  screensHeading: 'The screens you would use every day.',
  screensLede: 'Seven views, each built for one job. Categories, cities and stages are named the way your team already says them.',
  screens: [
    {
      id: 'owner',
      title: 'Marketplace / Today',
      meta: 'All categories, this month',
      heading: 'The founder’s overview',
      caption:
        'Active sellers, unfilled demand, dispute cost and what you really earn per order, with the items that need a decision under it.',
      blocks: [
        {
          type: 'kpis',
          items: [
            { label: 'Active sellers', value: '2,140', note: '38% listed only once' },
            { label: 'Searches unfilled', value: '19%', note: 'no matching supply' },
            { label: 'Dispute cost', value: '₹6.8 L', note: 'refunds and reverse freight' },
            { label: 'Net take rate', value: '6.1%', note: 'headline is 12%' },
          ],
        },
        { type: 'title', text: 'Net revenue per order by category' },
        {
          type: 'bars',
          items: [
            { label: 'Handloom and sarees', value: 82, display: '₹96' },
            { label: 'Home décor', value: 61, display: '₹71' },
            { label: 'Electronics accessories', value: 22, display: '₹26', tone: 'muted' },
            { label: 'Kitchenware', value: 9, display: '₹11', tone: 'muted' },
          ],
        },
        { type: 'alert', text: 'Kitchenware loses money on orders once the coupon you fund is counted.', action: 'Review' },
        {
          type: 'list',
          items: [
            { name: 'Top seller sales down 35%', meta: 'Payout held since 4 October', tag: ['Call', 'late', 'Resolved', 'ok'] },
            { name: 'Home décor in Jaipur', meta: '41 of 60 target sellers', tag: ['Behind', 'flag'] },
          ],
        },
      ],
    },
    {
      id: 'supply',
      title: 'Supply and demand',
      meta: 'Category by city',
      heading: 'Where buyers search and nothing is there',
      caption:
        'Searches that returned nothing useful, set against the sellers you have, and the launches planned to close each gap.',
      blocks: [
        {
          type: 'table',
          cols: ['Category, city', 'Searches', 'Unfilled', 'Sellers', 'Plan'],
          rows: [
            ['Handloom, Bhopal', '5,200', '58%', '4', ['Recruit 20', 'late', 'On track', 'ok']],
            ['Home décor, Jaipur', '3,900', '31%', '41', ['41 of 60', 'flag']],
            ['Kitchenware, Pune', '7,400', '12%', '118', ['OK', 'ok']],
            ['Electronics, Indore', '2,800', '44%', '9', ['Recruit 15', 'late']],
          ],
        },
        { type: 'alert', text: 'Handloom in Bhopal: 3,000 searches this month found fewer than 3 matches.', action: 'Assign' },
      ],
    },
    {
      id: 'onboarding',
      title: 'Seller onboarding',
      meta: 'Applications in progress',
      heading: 'Every application has a stage and an owner',
      caption:
        'Applications move from documents received to approved. Corrections are requested with a due date, and sellers who stall after approval go on a follow-up list.',
      blocks: [
        {
          type: 'board',
          columns: [
            {
              name: 'Documents received',
              cards: [
                { title: 'Kavita Handlooms', meta: 'Bhopal, applied 2 days ago', tag: ['Review', 'info'] },
                { title: 'Raza Electronics', meta: 'Indore, applied today', tag: ['Review', 'info'] },
              ],
            },
            {
              name: 'Correction needed',
              cards: [
                { title: 'Meena Crafts', meta: 'Bank proof name does not match PAN', tag: ['Waiting 3 days', 'late', 'Corrected', 'ok'] },
              ],
            },
            {
              name: 'Approved, not listing',
              cards: [
                { title: 'Sagar Utensils', meta: 'No listing 12 days after approval', tag: ['Call', 'flag', 'Listing', 'ok'] },
                { title: 'Neha Fabrics', meta: 'One listing, no sale', tag: ['Call', 'flag'] },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'listings',
      title: 'Listing review',
      meta: 'Moderation queue',
      heading: 'Risky listings first, with a record of every call',
      caption:
        'Flagged listings are ranked by risk and sales, with the reason, the seller’s history and the decision.',
      blocks: [
        {
          type: 'table',
          cols: ['Listing', 'Seller', 'Flag', 'Orders', 'Decision'],
          rows: [
            ['Branded running shoe', 'Sagar Utensils', 'Photos found elsewhere', '48', ['Ask proof', 'late', 'Removed', 'ok']],
            ['Phone case, 11 copies', 'Raza Electronics', 'Duplicates', '120', ['Merge', 'flag', 'Merged', 'ok']],
            ['Silk saree, claimed pure', 'Meena Crafts', 'Price too low', '9', ['Ask proof', 'flag']],
            ['Steel bottle 1 L', 'Kumar Stores', 'Wrong category', '31', ['Fix', 'info']],
          ],
        },
        { type: 'alert', text: 'Sagar Utensils has 3 removals in 30 days. A seller review is due.', action: 'Open seller' },
      ],
    },
    {
      id: 'sellers',
      title: 'Seller',
      meta: 'Record and scorecard',
      heading: 'One page for every seller',
      caption:
        'Sales, dispatch speed, disputes, tickets, commitments and what they are owed, so account managers, support and moderators see the same seller.',
      blocks: [
        {
          type: 'record',
          title: 'Kavita Handlooms, Bhopal',
          sub: 'Joined March 2026. Key seller. Account manager: Pooja',
          fields: [
            ['Sales, 90 days', '₹7.9 L'],
            ['Cancellation rate', ['11%', 'flag']],
            ['Late dispatch', ['18%', 'late']],
            ['Open disputes', '2'],
            ['Payout', ['₹38,200 held', 'info', 'Released', 'ok']],
            ['Tier', 'Key seller'],
          ],
          timeline: [
            ['4 Oct', 'Payout held for two open disputes'],
            ['2 Oct', 'Asked for help with packaging, promised callback'],
            ['21 Sep', 'Warning: cancellation rate above 10%'],
            ['Note', 'Promised priority placement in the festive sale.'],
          ],
        },
        {
          type: 'table',
          cols: ['Seller', 'Cancel', 'Late', 'Disputes', 'Action'],
          rows: [
            ['Kavita Handlooms', '11%', '18%', '2', ['Call', 'flag', 'Called', 'ok']],
            ['Kumar Stores', '3%', '4%', '0', ['Recognise', 'ok']],
            ['Raza Electronics', '9%', '12%', '6', ['Review', 'late']],
          ],
        },
      ],
    },
    {
      id: 'disputes',
      title: 'Disputes',
      meta: 'Open cases',
      heading: 'A case with all its evidence and a clock',
      caption:
        'Order, photos, messages and delivery proof sit on the dispute. Each side has a deadline to respond. The decision and who bears the cost are recorded.',
      blocks: [
        {
          type: 'table',
          cols: ['Case', 'Category', 'Claim', 'Value', 'State'],
          rows: [
            ['D-2214', 'Handloom', 'Colour not as shown', '₹1,850', ['Seller reply due', 'flag', 'Decided', 'ok']],
            ['D-2209', 'Electronics', 'Item not received', '₹2,490', ['Decide today', 'late']],
            ['D-2198', 'Kitchenware', 'Damaged on arrival', '₹640', ['Refund, seller bears', 'info']],
            ['D-2187', 'Home décor', 'Wrong item', '₹1,200', ['Waiting buyer', 'muted']],
          ],
        },
        { type: 'title', text: 'Dispute cost this month, by who bore it' },
        {
          type: 'bars',
          items: [
            { label: 'Marketplace', value: 58, display: '₹3.9 L', tone: 'muted' },
            { label: 'Sellers', value: 42, display: '₹2.9 L' },
          ],
        },
      ],
    },
    {
      id: 'payouts',
      title: 'Payouts and tax',
      meta: 'This payout cycle',
      heading: 'Every payout explained line by line',
      caption:
        'Sales, fees, returns, holds and adjustments for each seller, with exceptions listed for finance and a seller-wise summary of tax collected for your accountant.',
      blocks: [
        {
          type: 'table',
          cols: ['Seller', 'Sales', 'Fees and returns', 'Held', 'Payable'],
          rows: [
            ['Kavita Handlooms', '₹1,20,400', '₹21,800', ['₹38,200', 'flag', 'Released', 'ok'], '₹60,400'],
            ['Kumar Stores', '₹84,000', '₹11,900', '₹0', '₹72,100'],
            ['Raza Electronics', '₹66,500', '₹14,100', ['₹12,000', 'late'], '₹40,400'],
            ['Meena Crafts', '₹22,300', '₹4,100', '₹0', '₹18,200'],
          ],
        },
        { type: 'alert', text: '3 payouts have a hold with no reason or release date recorded.', action: 'Fix' },
      ],
    },
  ],

  dayHeading: 'The same Thursday, before and after.',
  dayLede: 'The marketplace works as it did. What changes is that the people behind it stop searching four tools for one answer.',
  day: [
    {
      time: '9:30',
      before: 'You read three dashboards to see how the marketplace did and what is going wrong.',
      after: 'You open Today. Two categories are short of supply, one payout is held and four sellers need a call.',
    },
    {
      time: '11:00',
      before: 'A seller has applied for a third time because nobody told her what was wrong.',
      after: 'Her application shows the blurred PAN, and the correction request went out with a due date.',
    },
    {
      time: '1:00',
      before: 'A buyer dispute is decided from two chat threads and a hunch.',
      after: 'The dispute holds the photos, delivery proof and each side’s reply. The decision has a reason.',
    },
    {
      time: '3:30',
      before: 'A top seller threatens to leave over a held payout. Support cannot say why it is held.',
      after: 'The payout statement shows the hold, the two disputes behind it and the release date.',
    },
    {
      time: '6:00',
      before: 'Your onboarding team adds sellers, but no one knows which ones ever list.',
      after: 'A list of approved sellers with no listing after 10 days is on each executive’s task list.',
    },
    {
      time: 'Month end',
      before: 'Finance rebuilds seller-wise tax figures from exports.',
      after: 'The seller-wise summary is ready, with returns already netted off.',
    },
  ],

  approach: {
    heading: 'We set it up with you, in four weeks.',
    lede:
      'You do not get a login and a manual. We learn how your sellers join, sell, dispute and get paid, build Verity around it, bring your data in, and stay on to keep it accurate.',
    phases: [
      {
        when: 'Week 1',
        name: 'Discovery and mapping',
        we: 'Meet founders, the supply team, moderators, support and finance. Follow one seller from application to first payout and one dispute from complaint to refund.',
        you: 'Three hours of your time, plus access to the admin panel exports, ticket history and a recent payout report.',
        get: 'A written map of your seller journey, dispute process and payout flow, with the gaps ranked by cost.',
      },
      {
        when: 'Weeks 2 to 3',
        name: 'Configuration',
        we: 'Set up categories, cities, onboarding stages, scorecard limits, dispute types, payout hold reasons and approval limits. We agree how orders, sellers and payout data reach Verity.',
        you: 'Check stages and limits with your heads of supply and support. Correct any rule we got wrong.',
        get: 'A working Verity with your sellers’ journey and rules, ready for data.',
      },
      {
        when: 'Weeks 3 to 4',
        name: 'Migration and training',
        we: 'Bring in seller records, open applications, open disputes and recent payouts. Train the supply, moderation, support and finance teams on live cases.',
        you: 'Exports from your panel and sheets in whatever shape they are. An hour with each team.',
        get: 'Your sellers, cases and payouts inside Verity, and teams who have closed real cases in it.',
      },
      {
        when: 'After go-live',
        name: 'Operations partnership',
        we: 'Review the first weeks of disputes, scorecards and gaps with you, tune limits, and add categories and cities as you launch them.',
        you: 'A short monthly review of what the numbers show.',
        get: 'An operation that keeps pace with new categories and a team that can show its work.',
      },
    ],
    bring: [
      'A recent export of sellers with status and category',
      'Your seller onboarding checklist and rejection reasons',
      'Your dispute and refund policy as your team applies it',
      'A recent payout report with holds and adjustments',
      'Your commission, coupon and subsidy rules',
    ],
    time: 'About 10 to 12 hours of your own time across the four weeks, mostly in week 1. Your heads of supply, support and finance need a few more.',
    after: 'No one has to be hired to run Verity. Reviews, calls and decisions are recorded as part of work the team already does.',
  },

  ai: {
    heading: 'Ask your marketplace a question. Get an answer, not a report to build.',
    lede:
      'Verity AI reads your own seller, dispute, listing and payout records. Ask in plain language, then turn the answer into tasks for the right people.',
    examples: [
      {
        q: 'Which categories in which cities have the biggest supply gap?',
        a: 'Handloom in Bhopal and electronics in Indore have the most failed searches, with 58% and 44% unfilled.',
        rows: [['Handloom, Bhopal', '58%'], ['Electronics, Indore', '44%'], ['Home décor, Jaipur', '31%'], ['Kitchenware, Pune', '12%']],
        action: 'Create recruiting tasks for the supply team',
      },
      {
        q: 'Which sellers cause the most dispute cost?',
        a: 'Three sellers account for 34% of dispute cost this month. Raza Electronics has 6 open disputes.',
        rows: [['Raza Electronics', '₹58,000'], ['Sagar Utensils', '₹41,000'], ['Kumar Stores', '₹22,000'], ['Others', '₹4.6 L']],
      },
      {
        q: 'Which approved sellers have not listed in two weeks?',
        a: '162 approved sellers have no listing 14 days after approval. 71 are in categories where you are short of supply.',
        action: 'Assign follow-up calls to the onboarding team',
      },
    ],
  },

  automationHeading: 'The follow-ups nobody has time to make.',
  automationLede: 'Set once, then they run from your records. Your team still makes the calls and takes the decisions. Verity makes sure the right person knows.',
  automations: [
    {
      when: 'A seller application waits longer than 48 hours',
      then: ['Moved to the top of the review queue', 'Reviewer and missing item shown', 'Escalated to the supply head if still open'],
    },
    {
      when: 'An approved seller has no listing after 10 days',
      then: ['Added to the follow-up list', 'Call task to the onboarding executive', 'Outcome recorded: listing, stuck or lost'],
    },
    {
      when: 'A listing is flagged as high risk',
      then: ['Placed in the moderation queue by sales volume', 'Proof requested from the seller', 'Decision and reason recorded on the seller'],
    },
    {
      when: 'A buyer opens a dispute',
      then: ['Order, photos and delivery proof attached', 'Response deadlines set for both sides', 'Decision and cost split recorded'],
    },
    {
      when: 'A seller’s cancellation rate passes your limit',
      then: ['Warning logged on the seller record', 'Task to the account manager', 'Review scheduled if it repeats'],
    },
    {
      when: 'A payout is held',
      then: ['Reason and release date required', 'Support sees the explanation', 'Release task created for finance'],
    },
  ],

  rules: {
    heading: 'The rules a marketplace has to keep up with.',
    lede:
      'Verity does not give legal or tax advice and does not file anything for you. It keeps the seller, order and complaint records these rules depend on in order, so your team is not rebuilding them from exports.',
    items: [
      {
        name: 'GST tax collected at source',
        what: 'A marketplace that collects payment for suppliers generally collects 0.5% of the net value of taxable supplies, deposits it and reports it each month, due within 10 days after month end. The rate was 1% before 10 July 2024.',
        how: 'Each order carries seller, taxable value and tax collected, and returns reduce the net value, so the seller-wise summary your accountant needs already exists.',
        source: { name: 'TaxAJ guide to Section 52', url: 'https://www.taxaj.com/learn/gst-on-e-commerce-operators-tcs-under-section-52-step-by-step-guide/' },
      },
      {
        name: 'Consumer Protection (E-Commerce) Rules, 2020 and the 2026 amendment',
        what: 'The 2026 amendment, effective 1 January 2027, asks marketplaces for clearer disclosure of seller details, return, refund and warranty terms, and asks that any reduced price show the lowest price of the last 30 days. Marketplaces also need a grievance officer. The exact duties depend on how you operate, so confirm them.',
        how: 'Seller details, policy versions, complaints and the decision on each are recorded with dates and names, so the grievance trail is available when asked for.',
        source: { name: 'LiveLaw', url: 'https://www.livelaw.in/consumer-cases/government-amends-e-commerce-rules-to-strengthen-consumer-protection-550184' },
      },
      {
        name: 'Seller and buyer personal data',
        what: 'Seller identity documents, bank details and buyer addresses are personal data. India’s data protection rules were notified in November 2025, with most duties starting over the following 12 to 18 months.',
        how: 'Documents and personal details sit in one permissioned place. Who viewed or changed a seller’s record is logged.',
        source: { name: 'AZB Partners on the DPDP framework', url: 'https://www.azbpartners.com/bank/update-indias-digital-personal-data-protection-framework-comes-into-effect/' },
      },
      {
        name: 'Your own seller agreement and policies',
        what: 'Your fees, hold rules, return window and suspension rights are in the agreement sellers accepted. Disputes are only easy to settle when you can show what the seller agreed to and when.',
        how: 'The policy version accepted by each seller is stored on the seller record, and decisions refer to it.',
      },
    ],
    note: 'Rules change and differ by situation. Confirm current requirements with your lawyer, your accountant or the relevant authority.',
  },

  rolesHeading: 'Everyone sees the same records, through their own window.',
  rolesLede: 'A moderator does not need payout details. A finance analyst does not need to approve listings. Each role opens on what it needs.',
  roles: [
    { role: 'Founder', question: 'Where is the marketplace healthy and where is it weak?', sees: 'Supply gaps by category and city, net take rate, dispute cost, seller churn and key sellers at risk.' },
    { role: 'Supply and onboarding', question: 'Who do I recruit and who has stalled?', sees: 'Launch targets, applications by stage, approved sellers not listing, follow-up outcomes.' },
    { role: 'Moderator', question: 'Which listing needs a decision first?', sees: 'The risk-ranked queue, seller history, reasons and past decisions.' },
    { role: 'Support and disputes', question: 'What is this seller or buyer asking and why?', sees: 'The case with evidence, deadlines, the seller’s record and payout status.' },
    { role: 'Finance', question: 'What do we owe and what did we collect?', sees: 'Payout statements, holds, exceptions, refund cost and the seller-wise tax summary.' },
  ],

  alongside: {
    heading: 'What changes, and what stays the same.',
    keep: [
      'Your marketplace app, website and admin panel. We agree how seller, order and payout data reaches Verity.',
      'Your payment provider, which keeps moving the money.',
      'Your ticketing or chat tool, if you have one, mapped during setup.',
      'Your lawyer and accountant, who still advise and prepare returns.',
    ],
    not: [
      'Run your marketplace app or take buyer orders.',
      'Move money or hold funds for you.',
      'Message sellers or buyers on its own.',
      'File your returns or give legal advice.',
    ],
    migration:
      'We bring seller records, open applications, open disputes and recent payouts across from your panel and sheets, in stages, so your sellers see no gap.',
  },

  faqHeading: 'Questions marketplace operators ask.',
  faqs: [
    [
      'Does Verity replace my admin panel or my marketplace app?',
      'No. Your app and panel keep doing their job. Verity is where your operations team sees sellers, cases and payouts together, and we agree during setup how data reaches it.',
    ],
    [
      'Can Verity pay my sellers?',
      'No. Your payment provider moves the money. Verity records each payout line by line, shows holds and reasons, and lists exceptions for your finance team.',
    ],
    [
      'We are a services marketplace, not products. Does it fit?',
      'Yes. The same pains apply to providers instead of sellers, and bookings or jobs instead of orders. We use your own words during setup.',
    ],
    [
      'How would it decide which listings are fake?',
      'It does not decide on its own. Your rules and your moderators do. Verity ranks flagged listings by risk and sales, keeps the evidence and records each decision.',
    ],
    [
      'Can it help with seller KYC?',
      'It tracks each application, the documents received, the reviewer and what is missing. The checking itself is done by your team or your verification provider.',
    ],
    [
      'Can I see sellers by city?',
      'Yes. Cities are locations in one system, so supply, disputes and net revenue roll up and can be compared side by side.',
    ],
    [
      'Who can see seller bank details and documents?',
      'Only the people you allow. Access is set by role, so moderators, support and finance each see what they need, and every view and change is recorded with who and when.',
    ],
    [
      'We have a small ops team. Is this too much?',
      'A small team feels the lack of one view the most. We set up only what you need, and the four-week process is the same.',
    ],
    [
      'What does it cost?',
      'It depends on the number of categories, cities and users and what you want set up. Message us and we will give you a clear number after a short conversation about how your marketplace runs.',
    ],
  ],

  related: ['ecommerce-businesses', 'startups', 'saas-companies', 'edtech-companies', 'wholesalers', 'distributors'],

  ctaHeading: 'Start with the categories where buyers find nothing.',
  ctaLede:
    'Tell us how your marketplace runs and we will show you the supply gaps, stalled sellers and dispute costs it would find, using your own numbers.',
};
