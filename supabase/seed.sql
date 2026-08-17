-- ============================================================================
-- Kakanfo Inn & Conference Centre — seed data
-- Mirrors the fallback catalog in src/data/*.ts. Run AFTER schema.sql.
-- ============================================================================

-- Room categories --------------------------------------------------------------
insert into public.room_categories
  (id, name, slug, description, price_per_night, max_guests, size_sqm, amenities, images, total_rooms, featured)
values
  (
    'room-classic-studio', 'Classic Studio', 'classic-studio',
    'Twenty compact, beautifully finished studios with every essential laid on — a smart, modern base for short stays, holding the same 5-star standard as the rest of the house.',
    85000, 2, 24,
    array['Full-size bathroom','Refrigerator','Air conditioning','In-room telephone','Flat-screen TV with international channels','Private balcony with scenic view','Free high-speed Wi-Fi','Work desk','Rain shower','Tea & coffee station','24-hour room service'],
    array['/images/rooms/classic-studio-1.jpg',
          '/images/rooms/classic-studio-2.jpg',
          '/images/rooms/classic-studio-3.jpg'],
    20, false
  ),
  (
    'room-luxury', 'Luxury Room', 'luxury-room',
    'Forty generous rooms with a private balcony overlooking the grounds — premium comfort for business and leisure, with a full-size bathroom, refrigerator and every modern essential to hand.',
    100000, 2, 30,
    array['Full-size bathroom','Refrigerator','Air conditioning','In-room telephone','Flat-screen TV with international channels','Private balcony with scenic view','Free high-speed Wi-Fi','Executive work desk','Rain shower','Tea & coffee station','Mini fridge','24-hour room service'],
    array['/images/rooms/luxury-room-hero.jpg',
          '/images/rooms/luxury-room-1.jpg',
          '/images/rooms/luxury-room-2.jpg',
          '/images/rooms/luxury-room-3.jpg'],
    40, false
  ),
  (
    'room-classic-suite', 'Classic Suite', 'classic-suite',
    'Generously proportioned suites with a separate living area — room to receive visitors or simply spread out, finished in calm, premium style with a bathtub, Nespresso and more.',
    185000, 2, 52,
    array['Full-size bathroom','Refrigerator','Air conditioning','In-room telephone','Flat-screen TV with international channels','Private balcony with scenic view','Separate living area','Free high-speed Wi-Fi','Executive work desk','Bathtub & rain shower','Mini fridge','Nespresso machine','24-hour room service'],
    array['/images/rooms/classic-suite-1.jpg'],
    20, false
  ),
  (
    'room-presidential-suite-1-bed', 'Presidential Suite 1-Bed', 'presidential-suite-1-bed',
    'A one-bedroom presidential suite with living room and private study — space, privacy and a dedicated standard of care for guests who expect the very best.',
    255000, 3, 70,
    array['Full-size bathroom','Refrigerator','Air conditioning','In-room telephone','Flat-screen TV with international channels','Private balcony with scenic view','Living room','Private study','Free high-speed Wi-Fi','Bathtub & rain shower','Full mini bar','Nespresso machine','Butler on call','Airport transfer','Late checkout','24-hour room service'],
    array['/images/rooms/presidential-1-bed-1.jpg',
          '/images/rooms/presidential-1-bed-2.jpg',
          '/images/rooms/presidential-1-bed-3.jpg'],
    10, true
  ),
  (
    'room-presidential-suite-2-bed', 'Presidential Suite 2-Bed', 'presidential-suite-2-bed',
    'The finest address in the house — two bedrooms, living and dining rooms, ideal for families and VIP stays, finished to the highest standard Kakanfo Inn has to offer.',
    380000, 4, 100,
    array['Full-size bathroom','Refrigerator','Air conditioning','In-room telephone','Flat-screen TV with international channels','Private balcony with scenic view','Two bedrooms','Living & dining rooms','Private study','Free high-speed Wi-Fi','Jacuzzi bath','Full mini bar','Nespresso machine','Butler on call','Airport transfer','Late checkout','24-hour room service'],
    array['/images/rooms/presidential-2-bed-1.jpg',
          '/images/rooms/presidential-2-bed-2.jpg',
          '/images/rooms/presidential-2-bed-3.jpg',
          '/images/rooms/presidential-2-bed-4.jpg'],
    5, true
  );

-- Event spaces ------------------------------------------------------------------
insert into public.event_spaces
  (id, name, slug, description, capacity, size_sqm, price_per_day, setup_styles, amenities, images, featured)
values
  (
    'event-lekan-are-hall', 'Lekan Are Hall', 'lekan-are-hall',
    'The pride of the conference centre — a 2,000-guest hall for grand weddings, galas and large-scale conferences, served by a modern kitchen and large cold-storage facility.',
    2000, 1200, 800000,
    array['Banquet','Theatre','Classroom','Reception','Cabaret'],
    array['Modern catering kitchen','Cold storage facility','In-house AV','Stage & podium','Dance floor','Guest Wi-Fi','Air conditioning','Parking'],
    array['/images/halls/lekan-are-hall-1.jpg',
          '/images/halls/lekan-are-hall-2.jpg'],
    true
  ),
  (
    'event-nihinlola-hall', 'Nihinlola Hall', 'nihinlola-hall',
    'A 300-guest multipurpose hall on the original Nihinlola Street grounds — a warm, flexible space for weddings, receptions and mid-size corporate events.',
    300, 500, 350000,
    array['Banquet','Theatre','Classroom','Reception'],
    array['In-house AV','Stage & podium','Dance floor','Guest Wi-Fi','Air conditioning','Parking'],
    array['/images/halls/nihinlola-hall.jpg'],
    true
  ),
  (
    'event-bawa-garden', 'Bawa Continent Garden', 'bawa-continent-garden',
    'Designed to host cocktail and barbeque-themed parties — an open-air garden venue that comes alive as the evening sets in.',
    200, 400, 300000,
    array['Reception','Banquet','Theatre'],
    array['Outdoor stage','Event lighting','Garden setting','Guest Wi-Fi','On-site catering','Parking'],
    array['/images/halls/awero-garden.jpg'],
    true
  ),
  (
    'event-damola-hall', 'Damola Hall', 'damola-hall',
    'A 150-guest hall with an intimate, polished feel — well suited to birthday parties, meetings and family celebrations.',
    150, 300, 250000,
    array['Banquet','Theatre','Reception','Cabaret'],
    array['In-house AV','Stage & podium','Guest Wi-Fi','Air conditioning','Parking'],
    array['/images/halls/damola-hall.jpg'],
    false
  ),
  (
    'event-allied-hall', 'Allied Hall', 'allied-hall',
    'A versatile 110-guest hall for trainings, seminars and private functions — compact, comfortable and fully equipped.',
    110, 200, 200000,
    array['Classroom','U-shape','Theatre','Cabaret'],
    array['Projector & screen','Sound system','Guest Wi-Fi','Coffee break service','Air conditioning','Parking'],
    array['/images/halls/allied-hall-1.jpg',
          '/images/halls/allied-hall-2.jpg',
          '/images/halls/allied-hall-3.jpg'],
    false
  ),
  (
    'event-mojisola-hall', 'Mojisola Hall', 'mojisola-hall',
    'A 60-guest meeting and functions hall with natural light — ideal for workshops, small conferences and private dinners.',
    60, 120, 150000,
    array['Classroom','U-shape','Theatre','Cabaret'],
    array['Projector & screen','Flip chart','Guest Wi-Fi','Refreshments','Air conditioning'],
    array['/images/halls/mojisola-hall-1.jpg',
          '/images/halls/mojisola-hall-2.jpg'],
    false
  ),
  (
    'event-vip-hall', 'VIP Hall', 'vip-hall',
    'A discreet 60-guest hall for VIP receptions and executive gatherings — service and privacy come standard.',
    60, 120, 180000,
    array['Reception','Banquet','Cabaret'],
    array['In-house AV','Guest Wi-Fi','Refreshments','Air conditioning','Dedicated service team'],
    array['/images/halls/vip-hall-1.jpg',
          '/images/halls/vip-hall-2.jpg'],
    false
  ),
  (
    'event-ayo-boardroom', 'Ayo Boardroom', 'ayo-boardroom',
    'An intimate, oak-lined boardroom for decision makers — leather seating, silent air conditioning and total privacy for the deals that matter.',
    25, 60, 100000,
    array['Boardroom'],
    array['86" display','Video conferencing','Whiteboard','Guest Wi-Fi','Refreshments','Air conditioning'],
    array['/images/halls/ayo-boardroom-1.jpg',
          '/images/halls/ayo-boardroom-2.jpg'],
    false
  );

-- Add-on services ----------------------------------------------------------------
insert into public.add_on_services (id, name, description, price, category, icon, available)
values
  ('addon-airport-transfer', 'Airport Transfer', 'Private pickup or drop-off to and from Ibadan Airport in an air-conditioned vehicle.', 35000, 'transport', 'Plane', true),
  ('addon-car-driver', 'Car & Driver', 'Chauffeured vehicle on standby for the day, for meetings and city errands.', 40000, 'transport', 'Car', true),
  ('addon-breakfast', 'Breakfast Buffet', 'Full breakfast spread per guest — continental and local favourites.', 6000, 'dining', 'Coffee', true),
  ('addon-dinner', 'Dinner Set Menu', 'Three-course set dinner per guest, served in our dining room.', 12000, 'dining', 'Utensils', true),
  ('addon-welcome-drinks', 'Welcome Drinks', 'Chilled welcome cocktail or fresh juice on arrival per guest.', 8000, 'dining', 'GlassWater', true),
  ('addon-extra-bed', 'Extra Bed', 'Rollaway bed with premium bedding added to the room per night.', 15000, 'amenities', 'Bed', true),
  ('addon-early-checkin', 'Early Check-in', 'Guaranteed room access from 9:00am on arrival day (subject to availability).', 10000, 'amenities', 'Clock', true),
  ('addon-late-checkout', 'Late Checkout', 'Extend your stay until 6:00pm on departure day.', 10000, 'amenities', 'Moon', true),
  ('addon-laundry', 'Laundry Service', 'Same-day pressing and laundry for up to 5 items.', 5000, 'amenities', 'Shirt', true),
  ('addon-spa', 'Spa & Massage', '60-minute relaxation massage in our wellness suite.', 20000, 'wellness', 'Flower', true),
  ('addon-gym', 'Gym Day Pass', 'Full access to our fitness studio and equipment.', 5000, 'wellness', 'Dumbbell', true),
  ('addon-decor', 'Event Décor', 'Theme décor, flowers and centrepieces for your event space.', 150000, 'other', 'Sparkles', true),
  ('addon-av', 'AV & Production', 'Sound, lighting and projection with an on-site technician.', 80000, 'other', 'Video', true),
  ('addon-cake', 'Celebration Cake', 'Custom celebration cake for birthdays, anniversaries and more.', 25000, 'other', 'Cake', true);
