// File: src/data/mockData.js

// Mock data for rooms
export const rooms = [
  {
    id: 1,
    name: "Deluxe King Room",
    type: "Deluxe Room",
    size: "45 m²",
    capacity: 2,
    price: 299,
    description: "Experience ultimate comfort in our Deluxe King Room, featuring a plush king-sized bed, elegant furnishings, and a spacious marble bathroom with a deep soaking tub. Floor-to-ceiling windows offer spectacular city views.",
    longDescription: "Our Deluxe King Room offers the perfect blend of sophistication and comfort. The spacious 45 square meter room features a luxurious king-sized bed with premium linens, an elegant sitting area, and a work desk. The marble bathroom includes a deep soaking tub, separate rain shower, and premium toiletries. Floor-to-ceiling windows provide stunning views of the city skyline, while modern amenities ensure a comfortable and connected stay. Ideal for business travelers or couples seeking a refined retreat in the heart of the city.",
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    images: [
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
      "/api/placeholder/800/500"
    ],
    amenities: [
      "King-sized bed",
      "City view",
      "Marble bathroom",
      "Soaking tub",
      "High-speed WiFi",
      "Smart TV",
      "Mini bar",
      "Room service",
      "Air conditioning",
      "Electronic safe"
    ],
    isAvailable: true,
    featured: true
  },
  {
    id: 2,
    name: "Premium Suite",
    type: "Suite",
    size: "75 m²",
    capacity: 3,
    price: 499,
    description: "Indulge in luxury in our Premium Suite, featuring a separate living room, king-sized bedroom, and expansive bathroom with both rainfall shower and soaking tub. Enjoy panoramic views and exclusive amenities.",
    longDescription: "Step into luxury in our expansive Premium Suite. This 75 square meter sanctuary offers a separate living room with elegant furnishings, a dining area, and a king-sized bedroom with premium bedding. The marble bathroom features a rainfall shower, deep soaking tub, and double vanity with premium amenities. Floor-to-ceiling windows present panoramic views of the city skyline and surrounding landmarks. Guests enjoy exclusive access to the Executive Lounge, including complimentary breakfast, evening cocktails, and personalized concierge service. Modern amenities like high-speed WiFi, smart TVs in both rooms, and a Nespresso machine complete this luxurious retreat.",
    image: "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    images: [
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
      "/api/placeholder/800/500"
    ],
    amenities: [
      "King-sized bed",
      "Separate living room",
      "Panoramic view",
      "Rainfall shower",
      "Deep soaking tub",
      "Executive lounge access",
      "High-speed WiFi",
      "Two Smart TVs",
      "Nespresso machine",
      "Mini bar",
      "Room service",
      "Air conditioning",
      "Electronic safe"
    ],
    isAvailable: true,
    featured: true
  },
  {
    id: 3,
    name: "Luxury Twin Room",
    type: "Luxury Room",
    size: "40 m²",
    capacity: 2,
    price: 279,
    description: "Perfect for friends or business colleagues, our Luxury Twin Room offers two plush queen beds, elegant workspace, and a marble bathroom with premium amenities. Enjoy cityscape views and modern comforts.",
    longDescription: "Our Luxury Twin Room is designed for comfort and convenience, ideal for friends traveling together or business colleagues. This 40 square meter room features two plush queen-sized beds with premium linens, an elegant workspace, and comfortable seating. The sleek marble bathroom includes a combined shower and bathtub with luxury toiletries. Enjoy modern amenities like high-speed WiFi, a large smart TV, and adjustable climate control. Large windows offer inspiring views of the city, creating a bright and welcoming atmosphere for your stay. Room service is available 24/7 to cater to your dining preferences.",
    image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    images: [
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
      "/api/placeholder/800/500",
      "/api/placeholder/800/500"
    ],
    amenities: [
      "Two queen beds",
      "City view",
      "Marble bathroom",
      "Work desk",
      "High-speed WiFi",
      "Smart TV",
      "Mini bar",
      "Room service",
      "Air conditioning",
      "Electronic safe"
    ],
    isAvailable: true,
    featured: true
  },
  {
    id: 4,
    name: "Presidential Suite",
    type: "Premium Suite",
    size: "120 m²",
    capacity: 4,
    price: 1299,
    description: "The epitome of luxury, our Presidential Suite offers unparalleled elegance with a master bedroom, spacious living and dining areas, private terrace, and butler service. Experience the ultimate in sophisticated hospitality.",
    longDescription: "Experience the pinnacle of luxury in our Presidential Suite, an expansive 120 square meter haven of sophistication. This exclusive accommodation features a master bedroom with a king-sized bed dressed in the finest linens, a separate guest bedroom, a grand living room with designer furniture, and a formal dining area that seats six. The lavish marble bathroom includes a steam shower, oversized jacuzzi tub, and premium toiletries. Step onto your private terrace to enjoy breathtaking panoramic views of the city skyline. Additional amenities include a fully stocked bar, state-of-the-art entertainment system, and dedicated butler service to attend to your every need. Guests enjoy VIP access to all hotel facilities and services, ensuring an unforgettable stay defined by privacy, space, and unparalleled luxury.",
    image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
    images: [
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg",
      "https://images.pexels.com/photos/3201763/pexels-photo-3201763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3634741/pexels-photo-3634741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    amenities: [
      "Master bedroom",
      "Guest bedroom",
      "Spacious living room",
      "Dining area",
      "Private terrace",
      "Panoramic views",
      "Jacuzzi tub",
      "Steam shower",
      "Butler service",
      "Executive lounge access",
      "High-speed WiFi",
      "Multiple Smart TVs",
      "Fully stocked bar",
      "Nespresso machine",
      "In-room dining",
      "Air conditioning",
      "Electronic safe"
    ],
    isAvailable: true,
    featured: false
  },
];

// Mock data for experiences
export const experiences = [
  {
    id: 1,
    title: "Spa & Wellness",
    subtitle: "Rejuvenate Your Body and Mind",
    description: "Indulge in a world of tranquility at our award-winning spa. Choose from a variety of treatments designed to relax, rejuvenate, and restore.",
    longDescription: "Step into a haven of peace and tranquility at our world-class spa and wellness center. Our skilled therapists offer a comprehensive menu of treatments that combine ancient healing techniques with modern therapeutic methods. From relaxing massages to rejuvenating facials and body treatments, each experience is tailored to your individual needs. Our facilities include aromatic steam rooms, a Finnish sauna, a vitality pool with hydrotherapy features, and a serene relaxation lounge. We use only premium organic products that nourish your skin and enhance your wellbeing. Whether you're seeking stress relief, beauty enhancement, or simply a moment of calm, our spa provides the perfect escape from the demands of everyday life.",
    image: "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true
  },
  {
    id: 2,
    title: "Fine Dining",
    subtitle: "Culinary Excellence",
    description: "Experience exquisite cuisine prepared by award-winning chefs using the finest local ingredients. Our restaurant offers an unforgettable gastronomic journey.",
    longDescription: "Embark on a remarkable culinary journey at our signature restaurant, where our Michelin-starred chef creates extraordinary dishes that celebrate both local heritage and international influences. Each plate is a masterpiece of flavor, texture, and presentation, crafted from the freshest seasonal ingredients sourced from local artisanal producers. The elegant dining room provides a sophisticated backdrop to your meal, with floor-to-ceiling windows offering stunning views of the city. Our sommelier has curated an exceptional wine list featuring both celebrated vineyards and undiscovered gems from around the world. For a truly special experience, reserve the Chef's Table to witness the artistry of our kitchen team up close while enjoying a bespoke tasting menu paired with premium wines. Whether you're celebrating a special occasion or simply appreciating the art of fine dining, our restaurant promises an unforgettable gastronomic experience.",
    image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true
  },
  {
    id: 3,
    title: "Rooftop Pool",
    subtitle: "Elevated Relaxation",
    description: "Swim with a view in our stunning rooftop infinity pool. Enjoy refreshing cocktails and light bites while taking in panoramic vistas of the city skyline.",
    longDescription: "Elevate your relaxation experience at our spectacular rooftop infinity pool, a stunning oasis positioned above the bustling city. The temperature-controlled waters seem to merge with the horizon, creating a magical floating sensation as you swim. Comfortable loungers and private cabanas line the deck, offering the perfect spot to soak up the sun or enjoy some shade. Our attentive pool staff provide refreshing towels, hydrating face mists, and complimentary sunscreen throughout the day. The adjacent pool bar serves creative cocktails, fresh juices, and a menu of light, healthy fare to enjoy poolside. As the sun sets, the atmosphere transforms with subtle lighting and ambient music, making it the perfect spot to unwind with a signature cocktail while watching the city lights twinkle below. Open year-round, our rooftop pool is a serene retreat that offers a perfect balance of relaxation and sophistication.",
    image: "https://images.pexels.com/photos/3140185/pexels-photo-3140185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: true
  },
  {
    id: 4,
    title: "Fitness Center",
    subtitle: "State-of-the-Art Equipment",
    description: "Maintain your fitness routine in our comprehensive gym featuring the latest equipment, personal training sessions, and daily fitness classes.",
    longDescription: "Our state-of-the-art fitness center provides everything you need to maintain or elevate your exercise routine while traveling. The spacious, light-filled space features the latest Technogym cardiovascular and strength training equipment, complete with integrated entertainment systems. A dedicated studio hosts a variety of complimentary classes, from energizing morning yoga to high-intensity interval training. Our certified personal trainers are available for one-on-one sessions tailored to your specific fitness goals, whether you're looking to improve endurance, build strength, or enhance flexibility. After your workout, recover in our wellness facilities, including steam rooms, experience showers, and a relaxation area serving fresh fruit and hydrating beverages. The fitness center is accessible 24 hours for your convenience, ensuring you can exercise according to your own schedule and preference.",
    image: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    featured: false
  },
  {
    id: 5,
    title: "Cultural Tours",
    subtitle: "Explore Local Heritage",
    description: "Discover the rich history and vibrant culture of our city with exclusive guided tours arranged by our knowledgeable concierge team.",
    longDescription: "Immerse yourself in the heart and soul of our destination with our carefully curated cultural tours. Our experienced concierge team works with knowledgeable local guides to create exclusive experiences that go beyond typical tourist attractions. Explore hidden architectural gems, visit artist workshops, participate in traditional craft demonstrations, and discover the stories that have shaped our city's unique identity. For food enthusiasts, our culinary walks explore local markets, specialty food shops, and authentic neighborhood eateries, offering delicious insights into regional cuisine. History buffs will appreciate our heritage tours that bring the past to life through compelling narratives and special access to historical sites. All tours can be customized to your interests and pace, whether you prefer an in-depth exploration or a broader overview. Transportation, refreshments, and any admission fees are seamlessly arranged, allowing you to focus entirely on the rich cultural experience.",
    image: "https://images.pexels.com/photos/2161467/pexels-photo-2161467.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: false
  },
];

// Mock data for testimonials
export const testimonials = [
  {
    id: 1,
    name: "Sarah Thompson",
    location: "New York, USA",
    rating: 5,
    comment: "Our stay at this luxury hotel exceeded all expectations. The room was immaculate, the staff attentive, and the dining experience exceptional. The spa treatment was the perfect end to our anniversary trip.",
    avatar: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "April 2025"
  },
  {
    id: 2,
    name: "James Wilson",
    location: "London, UK",
    rating: 5,
    comment: "As a frequent business traveler, I've stayed in many luxury hotels, but this one stands out for its attention to detail. The room technology was impressive, and the staff remembered my preferences from previous stays.",
    avatar: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "March 2025"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Madrid, Spain",
    rating: 4,
    comment: "A beautiful property with stunning views and exceptional service. The concierge arranged perfect excursions for our family. Would have given 5 stars, but the pool area was quite busy during our stay.",
    avatar: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "February 2025"
  },
  {
    id: 4,
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    comment: "This hotel sets the standard for luxury accommodation. The fine dining restaurant deserves its stellar reputation - our tasting menu with wine pairings was unforgettable. Already planning our return visit.",
    avatar: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "January 2025"
  },
];
