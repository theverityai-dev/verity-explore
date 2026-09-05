/* The complete Explore scope: 123 business domains.

   A domain appears as a built page only when a content file exists at
   content/businesses/<slug>.js AND that file's `status` is 'published'.
   Everything else stays out of the build and out of the sitemap, which is how
   section 48 of the brief — no thin or placeholder pages in the index — is
   enforced mechanically rather than by discipline.

   `tier` is rollout priority, revised against product fit in
   docs/explore-audit.md section 8. */

export const REGISTRY = [
  /* ---------------------------------------------- retail & commerce --- */
  ['retail-stores', 'Retail Stores', 'retail-commerce', 1],
  ['supermarkets', 'Supermarkets', 'retail-commerce', 1],
  ['grocery-stores', 'Grocery Stores', 'retail-commerce', 1],
  ['convenience-stores', 'Convenience Stores', 'retail-commerce', 2],
  ['department-stores', 'Department Stores', 'retail-commerce', 2],
  ['fashion-stores', 'Fashion Stores', 'retail-commerce', 1],
  ['clothing-boutiques', 'Clothing Boutiques', 'retail-commerce', 1],
  ['shoe-stores', 'Shoe Stores', 'retail-commerce', 2],
  ['jewellery-stores', 'Jewellery Stores', 'retail-commerce', 1],
  ['electronics-stores', 'Electronics Stores', 'retail-commerce', 1],
  ['furniture-stores', 'Furniture Stores', 'retail-commerce', 1],
  ['home-decor-stores', 'Home Decor Stores', 'retail-commerce', 2],
  ['beauty-stores', 'Beauty Stores', 'retail-commerce', 2],
  ['cosmetics-stores', 'Cosmetics Stores', 'retail-commerce', 1],
  ['sports-stores', 'Sports Stores', 'retail-commerce', 2],
  ['bookstores', 'Bookstores', 'retail-commerce', 1],
  ['gift-shops', 'Gift Shops', 'retail-commerce', 2],
  ['pet-stores', 'Pet Stores', 'retail-commerce', 2],
  ['hardware-stores', 'Hardware Stores', 'retail-commerce', 2],
  ['auto-parts-stores', 'Auto Parts Stores', 'retail-commerce', 2],

  /* ---------------------------------------------- food & hospitality --- */
  ['restaurants', 'Restaurants', 'food-hospitality', 1],
  ['cafes', 'Cafés', 'food-hospitality', 1],
  ['bakeries', 'Bakeries', 'food-hospitality', 1],
  ['cloud-kitchens', 'Cloud Kitchens', 'food-hospitality', 1],
  ['fast-food-businesses', 'Fast Food Businesses', 'food-hospitality', 1],
  ['catering-businesses', 'Catering Businesses', 'food-hospitality', 1],
  ['bars-and-lounges', 'Bars & Lounges', 'food-hospitality', 2],
  ['hotels', 'Hotels', 'food-hospitality', 1],
  ['resorts', 'Resorts', 'food-hospitality', 2],
  ['hostels', 'Hostels', 'food-hospitality', 2],
  ['guest-houses', 'Guest Houses', 'food-hospitality', 2],
  ['travel-agencies', 'Travel Agencies', 'food-hospitality', 2],
  ['tour-operators', 'Tour Operators', 'food-hospitality', 2],
  ['event-venues', 'Event Venues', 'food-hospitality', 2],

  /* ------------------------------------------- professional services --- */
  ['law-firms', 'Law Firms', 'professional-services', 1],
  ['accounting-firms', 'Accounting Firms', 'professional-services', 1],
  ['ca-firms', 'CA Firms', 'professional-services', 1],
  ['consulting-firms', 'Consulting Firms', 'professional-services', 1],
  ['marketing-agencies', 'Marketing Agencies', 'professional-services', 1],
  ['advertising-agencies', 'Advertising Agencies', 'professional-services', 2],
  ['pr-agencies', 'PR Agencies', 'professional-services', 2],
  ['design-agencies', 'Design Agencies', 'professional-services', 2],
  ['architecture-firms', 'Architecture Firms', 'professional-services', 2],
  ['interior-designers', 'Interior Designers', 'professional-services', 2],
  ['real-estate-agencies', 'Real Estate Agencies', 'professional-services', 1],
  ['recruitment-agencies', 'Recruitment Agencies', 'professional-services', 1],
  ['insurance-agencies', 'Insurance Agencies', 'professional-services', 2],
  ['financial-advisors', 'Financial Advisors', 'professional-services', 2],
  ['it-services-companies', 'IT Services Companies', 'professional-services', 1],

  /* ------------------------------------------------------ healthcare --- */
  ['hospitals', 'Hospitals', 'healthcare', 1],
  ['clinics', 'Clinics', 'healthcare', 1],
  ['dental-clinics', 'Dental Clinics', 'healthcare', 1],
  ['dermatology-clinics', 'Dermatology Clinics', 'healthcare', 2],
  ['physiotherapy-clinics', 'Physiotherapy Clinics', 'healthcare', 2],
  ['diagnostic-labs', 'Diagnostic Labs', 'healthcare', 1],
  ['pharmacies', 'Pharmacies', 'healthcare', 1],
  ['optical-stores', 'Optical Stores', 'healthcare', 2],
  ['veterinary-clinics', 'Veterinary Clinics', 'healthcare', 2],
  ['mental-wellness-practices', 'Mental Wellness Practices', 'healthcare', 2],
  ['medical-distributors', 'Medical Distributors', 'healthcare', 2],

  /* ------------------------------------------------------- education --- */
  ['schools', 'Schools', 'education', 1],
  ['colleges', 'Colleges', 'education', 1],
  ['universities', 'Universities', 'education', 2],
  ['coaching-institutes', 'Coaching Institutes', 'education', 1],
  ['tuition-centres', 'Tuition Centres', 'education', 1],
  ['test-preparation-centres', 'Test Preparation Centres', 'education', 1],
  ['edtech-companies', 'EdTech Companies', 'education', 2],
  ['language-institutes', 'Language Institutes', 'education', 2],
  ['skill-training-institutes', 'Skill Training Institutes', 'education', 2],
  ['music-schools', 'Music Schools', 'education', 2],
  ['dance-academies', 'Dance Academies', 'education', 2],
  ['vocational-training-centres', 'Vocational Training Centres', 'education', 2],

  /* --------------------------------------- real estate & construction --- */
  ['real-estate-developers', 'Real Estate Developers', 'real-estate-construction', 1],
  ['property-dealers', 'Property Dealers', 'real-estate-construction', 1],
  ['property-management', 'Property Management', 'real-estate-construction', 1],
  ['construction-companies', 'Construction Companies', 'real-estate-construction', 1],
  ['contractors', 'Contractors', 'real-estate-construction', 1],
  ['architects', 'Architects', 'real-estate-construction', 3],
  ['interior-design-firms', 'Interior Design Firms', 'real-estate-construction', 3],
  ['home-builders', 'Home Builders', 'real-estate-construction', 3],
  ['facility-management', 'Facility Management', 'real-estate-construction', 3],
  ['building-material-suppliers', 'Building Material Suppliers', 'real-estate-construction', 3],

  /* ---------------------------------------------- manufacturing & B2B --- */
  ['manufacturers', 'Manufacturers', 'manufacturing-b2b', 1],
  ['textile-manufacturers', 'Textile Manufacturers', 'manufacturing-b2b', 1],
  ['garment-manufacturers', 'Garment Manufacturers', 'manufacturing-b2b', 1],
  ['furniture-manufacturers', 'Furniture Manufacturers', 'manufacturing-b2b', 3],
  ['chemical-manufacturers', 'Chemical Manufacturers', 'manufacturing-b2b', 3],
  ['pharmaceutical-manufacturers', 'Pharmaceutical Manufacturers', 'manufacturing-b2b', 3],
  ['food-manufacturers', 'Food Manufacturers', 'manufacturing-b2b', 3],
  ['packaging-companies', 'Packaging Companies', 'manufacturing-b2b', 3],
  ['importers', 'Importers', 'manufacturing-b2b', 3],
  ['exporters', 'Exporters', 'manufacturing-b2b', 3],
  ['wholesalers', 'Wholesalers', 'manufacturing-b2b', 1],
  ['distributors', 'Distributors', 'manufacturing-b2b', 1],
  ['industrial-suppliers', 'Industrial Suppliers', 'manufacturing-b2b', 3],

  /* --------------------------------------- personal & local services --- */
  ['salons', 'Salons', 'personal-local-services', 1],
  ['spas', 'Spas', 'personal-local-services', 1],
  ['gyms', 'Gyms', 'personal-local-services', 1],
  ['fitness-studios', 'Fitness Studios', 'personal-local-services', 3],
  ['yoga-studios', 'Yoga Studios', 'personal-local-services', 3],
  ['wedding-planners', 'Wedding Planners', 'personal-local-services', 1],
  ['photographers', 'Photographers', 'personal-local-services', 1],
  ['car-rentals', 'Car Rentals', 'personal-local-services', 3],
  ['car-washes', 'Car Washes', 'personal-local-services', 3],
  ['auto-repair-shops', 'Auto Repair Shops', 'personal-local-services', 3],
  ['cleaning-services', 'Cleaning Services', 'personal-local-services', 3],
  ['laundry-services', 'Laundry Services', 'personal-local-services', 3],
  ['repair-services', 'Repair Services', 'personal-local-services', 3],
  ['printing-businesses', 'Printing Businesses', 'personal-local-services', 3],
  ['tailors', 'Tailors', 'personal-local-services', 3],

  /* --------------------------------------------- digital & technology --- */
  ['saas-companies', 'SaaS Companies', 'digital-technology', 1],
  ['software-agencies', 'Software Agencies', 'digital-technology', 1],
  ['startups', 'Startups', 'digital-technology', 1],
  ['ecommerce-businesses', 'E-commerce Businesses', 'digital-technology', 1],
  ['online-marketplaces', 'Online Marketplaces', 'digital-technology', 3],
  ['app-developers', 'App Developers', 'digital-technology', 3],
  ['web-development-agencies', 'Web Development Agencies', 'digital-technology', 3],
  ['cybersecurity-companies', 'Cybersecurity Companies', 'digital-technology', 3],
  ['data-companies', 'Data Companies', 'digital-technology', 3],
  ['ai-companies', 'AI Companies', 'digital-technology', 3],
  ['gaming-studios', 'Gaming Studios', 'digital-technology', 3],
  ['content-agencies', 'Content Agencies', 'digital-technology', 1],
  ['creator-businesses', 'Creator Businesses', 'digital-technology', 3],
].map(([slug, name, industry, tier]) => ({ slug, name, industry, tier }));

export const BY_SLUG = Object.fromEntries(REGISTRY.map((b) => [b.slug, b]));
