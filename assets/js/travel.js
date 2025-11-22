// Travel data based on Google Timeline
// Statistics: 81 cities visited, 19 countries/regions visited

// Countries with city counts
const countries = [
  { name: "Pakistan", cities: 4, timeAgo: "Today", flag: "🇵🇰" },
  { name: "Singapore", cities: 1, timeAgo: "Last week", flag: "🇸🇬" },
  { name: "Malaysia", cities: 8, timeAgo: "3 weeks ago", flag: "🇲🇾" },
  { name: "Thailand", cities: 14, timeAgo: "6 months ago", flag: "🇹🇭" },
  { name: "Italy", cities: 9, timeAgo: "11 months ago", flag: "🇮🇹" },
  { name: "Netherlands", cities: 2, timeAgo: "11 months ago", flag: "🇳🇱" },
  { name: "France", cities: 3, timeAgo: "11 months ago", flag: "🇫🇷" },
  { name: "Bahrain", cities: 1, timeAgo: "11 months ago", flag: "🇧🇭" },
  { name: "United Arab Emirates", cities: 3, timeAgo: "Last year", flag: "🇦🇪" },
  { name: "United Kingdom", cities: 10, timeAgo: "Last year", flag: "🇬🇧" },
  { name: "Hong Kong", cities: 1, timeAgo: "2 years ago", flag: "🇭🇰" },
  { name: "Saudi Arabia", cities: 6, timeAgo: "2 years ago", flag: "🇸🇦" },
  { name: "Australia", cities: 1, timeAgo: "2 years ago", flag: "🇦🇺" },
  { name: "Türkiye", cities: 1, timeAgo: "2 years ago", flag: "🇹🇷" },
  { name: "Qatar", cities: 1, timeAgo: "2 years ago", flag: "🇶🇦" },
  { name: "Iraq", cities: 1, timeAgo: "2 years ago", flag: "🇮🇶" },
  { name: "Germany", cities: 9, timeAgo: "2 years ago", flag: "🇩🇪" },
  { name: "Czechia", cities: 1, timeAgo: "3 years ago", flag: "🇨🇿" },
  { name: "Denmark", cities: 7, timeAgo: "4 years ago", flag: "🇩🇰" },
];

// Cities with place counts (organized by country)
const cities = [
  // Pakistan
  { name: "Lahore", country: "Pakistan", places: 265, timeAgo: "Today", cover: "assets/img/travel/lahore.jpg" },
  { name: "Islamabad", country: "Pakistan", places: 3, timeAgo: "5 months ago", cover: "assets/img/travel/lahore.jpg" },
  { name: "Murree", country: "Pakistan", places: 1, timeAgo: "5 months ago", cover: "assets/img/travel/lahore.jpg" },
  { name: "Raiwind", country: "Pakistan", places: 1, timeAgo: "4 years ago", cover: "assets/img/travel/riyadh.jpg" },
  
  // Singapore
  { name: "Singapore", country: "Singapore", places: 449, timeAgo: "Last week", cover: "assets/img/travel/marina-bay.jpg" },
  
  // Malaysia
  { name: "Johor Bahru", country: "Malaysia", places: 64, timeAgo: "3 weeks ago", cover: "assets/img/travel/kuala-lumpur.jpg" },
  { name: "Kuala Lumpur", country: "Malaysia", places: 5, timeAgo: "3 years ago", cover: "assets/img/travel/kuala-lumpur.jpg" },
  { name: "Subang Jaya", country: "Malaysia", places: 10, timeAgo: "3 years ago", cover: "assets/img/travel/kuala-lumpur.jpg" },
  { name: "Petaling Jaya", country: "Malaysia", places: 4, timeAgo: "3 years ago", cover: "assets/img/travel/kuala-lumpur.jpg" },
  { name: "Pattaya City", country: "Malaysia", places: 6, timeAgo: "3 years ago", cover: "assets/img/travel/bangkok.jpg" },
  { name: "Batu Caves", country: "Malaysia", places: 1, timeAgo: "3 years ago", cover: "assets/img/travel/kuala-lumpur.jpg" },
  { name: "Gelang Patah", country: "Malaysia", places: 4, timeAgo: "10 months ago", cover: "assets/img/travel/kuala-lumpur.jpg" },
  { name: "San Donato Milanese", country: "Malaysia", places: 13, timeAgo: "11 months ago", cover: "assets/img/travel/milan.jpg" },
  
  // Thailand
  { name: "Bangkok", country: "Thailand", places: 26, timeAgo: "7 months ago", cover: "assets/img/travel/bangkok.jpg" },
  { name: "Phuket", country: "Thailand", places: 4, timeAgo: "8 months ago", cover: "assets/img/travel/phuket.jpg" },
  { name: "Mai Khao", country: "Thailand", places: 1, timeAgo: "7 months ago", cover: "assets/img/travel/phuket.jpg" },
  { name: "Nong Prue", country: "Thailand", places: 1, timeAgo: "7 months ago", cover: "assets/img/travel/bangkok.jpg" },
  { name: "Thep Krasatti", country: "Thailand", places: 1, timeAgo: "7 months ago", cover: "assets/img/travel/phuket.jpg" },
  { name: "Ratsada", country: "Thailand", places: 1, timeAgo: "7 months ago", cover: "assets/img/travel/phuket.jpg" },
  { name: "Wichit", country: "Thailand", places: 4, timeAgo: "7 months ago", cover: "assets/img/travel/phuket.jpg" },
  { name: "Chalong", country: "Thailand", places: 6, timeAgo: "7 months ago", cover: "assets/img/travel/phuket.jpg" },
  { name: "Kathu", country: "Thailand", places: 1, timeAgo: "8 months ago", cover: "assets/img/travel/phuket.jpg" },
  { name: "Pa Tong", country: "Thailand", places: 4, timeAgo: "8 months ago", cover: "assets/img/travel/phuket.jpg" },
  { name: "Rawai", country: "Thailand", places: 1, timeAgo: "8 months ago", cover: "assets/img/travel/phuket.jpg" },
  { name: "Phra Nakhon Si Ayutthaya", country: "Thailand", places: 2, timeAgo: "8 months ago", cover: "assets/img/travel/bangkok.jpg" },
  { name: "Khlong Chik", country: "Thailand", places: 1, timeAgo: "8 months ago", cover: "assets/img/travel/bangkok.jpg" },
  
  // Italy
  { name: "Milan", country: "Italy", places: 13, timeAgo: "11 months ago", cover: "assets/img/travel/milan.jpg" },
  { name: "Venice", country: "Italy", places: 7, timeAgo: "2 years ago", cover: "assets/img/travel/venice.jpg" },
  { name: "Padua", country: "Italy", places: 1, timeAgo: "2 years ago", cover: "assets/img/travel/venice.jpg" },
  { name: "Cambridge", country: "Italy", places: 2, timeAgo: "2 years ago", cover: "assets/img/travel/london.jpg" },
  { name: "Rozzano", country: "Italy", places: 4, timeAgo: "2 years ago", cover: "assets/img/travel/milan.jpg" },
  { name: "Como", country: "Italy", places: 3, timeAgo: "2 years ago", cover: "assets/img/travel/milan.jpg" },
  { name: "Brunate", country: "Italy", places: 1, timeAgo: "2 years ago", cover: "assets/img/travel/milan.jpg" },
  { name: "Brescia", country: "Italy", places: 1, timeAgo: "11 months ago", cover: "assets/img/travel/milan.jpg" },
  { name: "San Giuliano Milanese", country: "Italy", places: 5, timeAgo: "11 months ago", cover: "assets/img/travel/milan.jpg" },
  
  // Netherlands
  { name: "Amsterdam", country: "Netherlands", places: 9, timeAgo: "11 months ago", cover: "assets/img/travel/amsterdam.jpg" },
  { name: "Schiphol", country: "Netherlands", places: 2, timeAgo: "11 months ago", cover: "assets/img/travel/amsterdam.jpg" },
  
  // France
  { name: "Paris", country: "France", places: 11, timeAgo: "11 months ago", cover: "assets/img/travel/paris.jpg" },
  { name: "Montrouge", country: "France", places: 1, timeAgo: "11 months ago", cover: "assets/img/travel/paris.jpg" },
  { name: "Malakoff", country: "France", places: 2, timeAgo: "11 months ago", cover: "assets/img/travel/paris.jpg" },
  
  // United Kingdom
  { name: "London", country: "United Kingdom", places: 47, timeAgo: "Last year", cover: "assets/img/travel/london.jpg" },
  { name: "Liverpool", country: "United Kingdom", places: 8, timeAgo: "Last year", cover: "assets/img/travel/liverpool.jpg" },
  { name: "Reading", country: "United Kingdom", places: 9, timeAgo: "Last year", cover: "assets/img/travel/london.jpg" },
  { name: "Barking", country: "United Kingdom", places: 2, timeAgo: "Last year", cover: "assets/img/travel/london.jpg" },
  { name: "Leicester Forest East", country: "United Kingdom", places: 1, timeAgo: "Last year", cover: "assets/img/travel/london.jpg" },
  { name: "Wembley", country: "United Kingdom", places: 23, timeAgo: "2 years ago", cover: "assets/img/travel/london.jpg" },
  { name: "Horley", country: "United Kingdom", places: 3, timeAgo: "2 years ago", cover: "assets/img/travel/london.jpg" },
  { name: "Wythall", country: "United Kingdom", places: 1, timeAgo: "Last year", cover: "assets/img/travel/london.jpg" },
  { name: "Southall", country: "United Kingdom", places: 2, timeAgo: "Last year", cover: "assets/img/travel/london.jpg" },
  { name: "Masai", country: "United Kingdom", places: 1, timeAgo: "Last year", cover: "assets/img/travel/london.jpg" },
  
  // United Arab Emirates
  { name: "Dubai", country: "United Arab Emirates", places: 11, timeAgo: "Last year", cover: "assets/img/travel/dubai.jpg" },
  { name: "Sharjah", country: "United Arab Emirates", places: 1, timeAgo: "Last year", cover: "assets/img/travel/dubai.jpg" },
  { name: "Ajman", country: "United Arab Emirates", places: 6, timeAgo: "Last year", cover: "assets/img/travel/dubai.jpg" },
  
  // Saudi Arabia
  { name: "Riyadh", country: "Saudi Arabia", places: 8, timeAgo: "2 years ago", cover: "assets/img/travel/riyadh.jpg" },
  { name: "Makkah", country: "Saudi Arabia", places: 5, timeAgo: "2 years ago", cover: "assets/img/travel/riyadh.jpg" },
  { name: "Madinah", country: "Saudi Arabia", places: 10, timeAgo: "2 years ago", cover: "assets/img/travel/riyadh.jpg" },
  { name: "Al Abyar", country: "Saudi Arabia", places: 1, timeAgo: "2 years ago", cover: "assets/img/travel/riyadh.jpg" },
  { name: "Al Bukayriyah", country: "Saudi Arabia", places: 1, timeAgo: "2 years ago", cover: "assets/img/travel/riyadh.jpg" },
  { name: "Taif", country: "Saudi Arabia", places: 1, timeAgo: "2 years ago", cover: "assets/img/travel/riyadh.jpg" },
  
  // Australia
  { name: "Melbourne", country: "Australia", places: 18, timeAgo: "2 years ago", cover: "assets/img/travel/melbourne.jpg" },
  
  // Türkiye
  { name: "Istanbul", country: "Türkiye", places: 2, timeAgo: "2 years ago", cover: "assets/img/travel/istanbul.jpg" },
  
  // Qatar
  { name: "Doha", country: "Qatar", places: 1, timeAgo: "2 years ago", cover: "assets/img/travel/dubai.jpg" },
  
  // Iraq
  { name: "Baghdad", country: "Iraq", places: 1, timeAgo: "2 years ago", cover: "assets/img/travel/riyadh.jpg" },
  
  // Germany
  { name: "Dresden", country: "Germany", places: 5, timeAgo: "3 years ago", cover: "assets/img/travel/dresden.jpg" },
  { name: "Oldenburg", country: "Germany", places: 5, timeAgo: "2 years ago", cover: "assets/img/travel/oldenburg.jpg" },
  { name: "Bremen", country: "Germany", places: 1, timeAgo: "2 years ago", cover: "assets/img/travel/oldenburg.jpg" },
  { name: "Verden", country: "Germany", places: 1, timeAgo: "3 years ago", cover: "assets/img/travel/oldenburg.jpg" },
  { name: "Hanover", country: "Germany", places: 1, timeAgo: "3 years ago", cover: "assets/img/travel/oldenburg.jpg" },
  { name: "Magdeburg", country: "Germany", places: 1, timeAgo: "3 years ago", cover: "assets/img/travel/dresden.jpg" },
  { name: "Halle (Saale)", country: "Germany", places: 1, timeAgo: "3 years ago", cover: "assets/img/travel/dresden.jpg" },
  { name: "Leipzig", country: "Germany", places: 1, timeAgo: "3 years ago", cover: "assets/img/travel/dresden.jpg" },
  { name: "Sepang", country: "Germany", places: 2, timeAgo: "2 years ago", cover: "assets/img/travel/dresden.jpg" },
  
  // Czechia
  { name: "Prague", country: "Czechia", places: 1, timeAgo: "3 years ago", cover: "assets/img/travel/prague.jpg" },
  
  // Denmark
  { name: "Copenhagen", country: "Denmark", places: 4, timeAgo: "4 years ago", cover: "assets/img/travel/copenhagen.jpg" },
  { name: "Kastrup", country: "Denmark", places: 1, timeAgo: "4 years ago", cover: "assets/img/travel/copenhagen.jpg" },
  { name: "Lyngby", country: "Denmark", places: 8, timeAgo: "4 years ago", cover: "assets/img/travel/copenhagen.jpg" },
  { name: "Hvidovre", country: "Denmark", places: 1, timeAgo: "4 years ago", cover: "assets/img/travel/copenhagen.jpg" },
  { name: "Brøndby Strand", country: "Denmark", places: 2, timeAgo: "4 years ago", cover: "assets/img/travel/copenhagen.jpg" },
  { name: "Glostrup", country: "Denmark", places: 2, timeAgo: "4 years ago", cover: "assets/img/travel/copenhagen.jpg" },
  { name: "Gentofte", country: "Denmark", places: 1, timeAgo: "4 years ago", cover: "assets/img/travel/copenhagen.jpg" },
  
  // Hong Kong
  { name: "Hong Kong", country: "Hong Kong", places: 8, timeAgo: "2 years ago", cover: "assets/img/travel/hong-kong.jpg" },
  
  // Bahrain
  { name: "Manama", country: "Bahrain", places: 1, timeAgo: "11 months ago", cover: "assets/img/travel/dubai.jpg" },
];

// Gallery photos
const travelGallery = [
  {
    caption: "Marina Bay, Singapore",
    image: "assets/img/travel/marina-bay.jpg",
  },
  {
    caption: "SUTD Research Hub, Singapore",
    image: "assets/img/travel/sutd-team.jpg",
  },
  {
    caption: "Melbourne, Australia",
    image: "assets/img/travel/melbourne-conference.jpg",
  },
];

// Render countries view
function renderCountries() {
  const container = document.getElementById("countriesView");
  if (!container) return;

  container.innerHTML = countries
    .map(
      (country) => `
      <div class="col-md-6 col-lg-4">
        <div class="country-card h-100">
          <div class="country-flag">${country.flag}</div>
          <div class="country-info">
            <h3 class="h5 fw-bold mb-1">${country.name}</h3>
            <p class="text-muted small mb-0">
              <span class="badge bg-primary-subtle text-primary">${country.cities} ${country.cities === 1 ? 'city' : 'cities'}</span>
            </p>
          </div>
        </div>
      </div>`
    )
    .join("");
}

// Render cities view
function renderCities() {
  const container = document.getElementById("citiesView");
  if (!container) return;

  // Sort cities by places (descending)
  const sortedCities = [...cities].sort((a, b) => b.places - a.places);

  container.innerHTML = sortedCities
    .map(
      (city) => `
      <div class="col-md-6 col-lg-3">
        <article class="city-card h-100">
          ${city.cover 
            ? `<div class="city-cover" style="background-image:url('${city.cover}');"></div>`
            : `<div class="city-cover d-flex align-items-center justify-content-center bg-light">
                <i class="fa-solid fa-city fa-3x text-muted"></i>
              </div>`
          }
          <div class="city-badge">${city.places} ${city.places === 1 ? 'place' : 'places'}</div>
          <div class="city-body">
            <h3 class="h6 fw-bold mb-1">${city.name}</h3>
            <p class="text-muted small mb-0">${city.country}</p>
          </div>
        </article>
      </div>`
    )
    .join("");
}

// Original travel posts with photos and descriptions
const travelPosts = [
  {
    title: "Phuket",
    date: "March 2025",
    location: "Phuket, Thailand",
    excerpt: "A sun-kissed island adventure with a close friend, exploring winding coastal paths on a motorbike, enjoying Thai cuisine, and discovering the delightful 7-Eleven culture.",
    tags: ["Thailand", "Adventure"],
    cover: "assets/img/travel/phuket.jpg",
  },
  {
    title: "Amsterdam",
    date: "December 2024",
    location: "Amsterdam, Netherlands",
    excerpt: "Exploring the artistic heritage, intricate canal system, and cultural attractions. Visited the Van Gogh Museum and Anne Frank House, experiencing the city's unique charm.",
    tags: ["Netherlands", "Culture"],
    cover: "assets/img/travel/amsterdam.jpg",
  },
  {
    title: "Paris",
    date: "December 2024",
    location: "Paris, France",
    excerpt: "My first non-conference visit to this iconic destination. Wandered through Montmartre, visited the Louvre, and enjoyed breathtaking views from the Eiffel Tower.",
    tags: ["France", "Culture"],
    cover: "assets/img/travel/paris.jpg",
  },
  {
    title: "Liverpool",
    date: "July 2024",
    location: "Liverpool, UK",
    excerpt: "A trip blending professional conference engagements with leisure exploration. Visited The Beatles Statue, explored the city's architecture, and ventured to Sheffield's mountains.",
    tags: ["UK", "Conference"],
    cover: "assets/img/travel/liverpool.jpg",
  },
  {
    title: "Hong Kong",
    date: "2024",
    location: "Hong Kong",
    excerpt: "Walking the vibrant streets after a refreshing rain shower, surrounded by neon glow and the rich scent of rain-soaked concrete. A dive into the heart of Hong Kong's living, breathing urban culture.",
    tags: ["Hong Kong", "Urban"],
    cover: "assets/img/travel/hong-kong.jpg",
  },
  {
    title: "Melbourne",
    date: "2023",
    location: "Melbourne, Australia",
    excerpt: "Morning runs along the Yarra River and coastal walkways, with the rhythmic sound of footsteps mingling with seabird calls. A meditation and reflection on life's journey.",
    tags: ["Australia", "Nature"],
    cover: "assets/img/travel/melbourne.jpg",
  },
  {
    title: "London",
    date: "Mar - Aug 2023",
    location: "London, UK",
    excerpt: "As a visiting researcher, I collaborated with brilliant minds at local universities. Explored Piccadilly Circus, Hyde Park, the British Museum, and enjoyed the city's vibrant energy.",
    tags: ["UK", "Research"],
    cover: "assets/img/travel/london.jpg",
  },
  {
    title: "Milan",
    date: "2023",
    location: "Milan, Italy",
    excerpt: "Staying with my brother and niece Hayal, exploring bustling piazzas, enjoying Italian cuisine, and marveling at the Duomo. A vibrant tableau of joy, family, and culinary adventure.",
    tags: ["Italy", "Family"],
    cover: "assets/img/travel/milan.jpg",
  },
  {
    title: "Venice",
    date: "2023",
    location: "Venice, Italy",
    excerpt: "Cycling through the dreamlike city floating on its network of canals. Indulging in dark chocolate Italian gelato and experiencing Venice by bike, boat, and taste.",
    tags: ["Italy", "Adventure"],
    cover: "assets/img/travel/venice.jpg",
  },
  {
    title: "Copenhagen",
    date: "2023",
    location: "Copenhagen, Denmark",
    excerpt: "Experiencing Scandinavian flair with minimalist yet colorful architecture, expansive green parks, and a palpable sense of design. The friendliness of the Danes made it feel like home.",
    tags: ["Denmark", "Culture"],
    cover: "assets/img/travel/copenhagen.jpg",
  },
  {
    title: "Dubai",
    date: "2023",
    location: "Dubai, UAE",
    excerpt: "Visiting my sister and niece Soha in this dazzling city. Exploring from the Burj Khalifa to artificial islands, marveling at Dubai's transformation and ambition.",
    tags: ["UAE", "Family"],
    cover: "assets/img/travel/dubai.jpg",
  },
  {
    title: "Istanbul",
    date: "2023",
    location: "Istanbul, Turkey",
    excerpt: "A city straddling two continents, alive with countless cats and ancient cobblestone pavements. Exploring the Blue Mosque, Grand Bazaar, and indulging in Turkish coffee and baklava.",
    tags: ["Turkey", "Culture"],
    cover: "assets/img/travel/istanbul.jpg",
  },
  {
    title: "Bangkok",
    date: "2023",
    location: "Bangkok, Thailand",
    excerpt: "Hosted by my friend Earth and his girlfriend Aoy. Exploring colorful markets, golden temples, and enjoying street food. Extended adventures to Pattaya's stunning beaches.",
    tags: ["Thailand", "Friends"],
    cover: "assets/img/travel/bangkok.jpg",
  },
  {
    title: "Riyadh",
    date: "2023",
    location: "Riyadh, Saudi Arabia",
    excerpt: "Reuniting with my old friend Tabish and exploring the dynamic city. Performing Umrah, a profound spiritual journey at the Grand Mosque, adding deep significance to my visit.",
    tags: ["Saudi Arabia", "Spiritual"],
    cover: "assets/img/travel/riyadh.jpg",
  },
  {
    title: "Prague",
    date: "2023",
    location: "Prague, Czech Republic",
    excerpt: "A brief but memorable visit with stunning architecture and pristine streets. Clear skies and gentle breeze made walking through the historic city center a sheer delight.",
    tags: ["Czech Republic", "Architecture"],
    cover: "assets/img/travel/prague.jpg",
  },
  {
    title: "Dresden",
    date: "2023",
    location: "Dresden, Germany",
    excerpt: "Attending a conference in this city steeped in history. Breathtaking landscapes with iconic castles, expansive rivers, and serene morning runs along the Elbe.",
    tags: ["Germany", "Conference"],
    cover: "assets/img/travel/dresden.jpg",
  },
  {
    title: "Oldenburg",
    date: "2023",
    location: "Oldenburg, Germany",
    excerpt: "Visiting my uncle in this quiet, charming small city. Traditional German architecture, small cafes, and a perfect space for reflection and connection with family.",
    tags: ["Germany", "Family"],
    cover: "assets/img/travel/oldenburg.jpg",
  },
  {
    title: "Kuala Lumpur",
    date: "Ongoing",
    location: "Kuala Lumpur, Malaysia",
    excerpt: "A frequent destination from Singapore. Embracing the Malay language, enjoying nasi lemak, satay, and roti canai. A place that resonates with my spirit, offering new experiences with every visit.",
    tags: ["Malaysia", "Food"],
    cover: "assets/img/travel/kuala-lumpur.jpg",
  },
];

// Render travel posts (featured/highlighted cities)
function renderTravelPosts() {
  const container = document.getElementById("travelPosts");
  if (!container) return;

  container.innerHTML = travelPosts
    .map(
      (post) => `
      <div class="col-md-6 col-lg-3">
        <article class="post-card h-100">
          ${post.cover 
            ? `<div class="post-cover" style="background-image:url('${post.cover}');"></div>`
            : `<div class="post-cover d-flex align-items-center justify-content-center bg-light">
                <i class="fa-solid fa-image fa-3x text-muted"></i>
              </div>`
          }
          <div class="post-body">
            <p class="text-uppercase small text-muted mb-1">${post.date}</p>
            <h3 class="h5 fw-semibold">${post.title}</h3>
            <p class="text-muted mb-2">${post.excerpt}</p>
            <p class="small text-primary fw-semibold">${post.location}</p>
            <div class="d-flex flex-wrap gap-2">
              ${post.tags
                .map(
                  (tag) =>
                    `<span class="badge rounded-pill text-bg-light border">${tag}</span>`
                )
                .join("")}
            </div>
          </div>
        </article>
      </div>`
    )
    .join("");
}

// Render featured destinations
function renderFeaturedDestinations() {
  const container = document.getElementById("featuredDestinations");
  if (!container) return;

  const featured = [
    {
      title: "Singapore",
      subtitle: "Research Hub",
      description: "449 places visited - Home base for PhD and postdoctoral research.",
      icon: "fa-building",
      color: "primary",
      places: 449
    },
    {
      title: "Lahore",
      subtitle: "Home City",
      description: "265 places visited - My hometown and frequent destination.",
      icon: "fa-home",
      color: "success",
      places: 265
    },
    {
      title: "London",
      subtitle: "Research Collaboration",
      description: "47 places visited - Visiting researcher at UCL and Queen Mary.",
      icon: "fa-handshake",
      color: "info",
      places: 47
    },
    {
      title: "Melbourne",
      subtitle: "Award Winner",
      description: "18 places visited - APC Exhibitor Prize winner.",
      icon: "fa-trophy",
      color: "warning",
      places: 18
    }
  ];

  container.innerHTML = featured
    .map(
      (dest) => `
      <div class="col-md-6 col-lg-3">
        <div class="featured-destination-card h-100">
          <div class="destination-icon bg-${dest.color}-subtle text-${dest.color}">
            <i class="fa-solid ${dest.icon}"></i>
          </div>
          <h3 class="h6 fw-bold mt-3 mb-1">${dest.title}</h3>
          <p class="text-muted small mb-2">${dest.subtitle}</p>
          <p class="text-muted small mb-0">${dest.description}</p>
        </div>
      </div>`
    )
    .join("");
}

// Render travel gallery
function renderTravelGallery() {
  const container = document.getElementById("travelGallery");
  if (!container) return;

  const filteredGallery = travelGallery.filter(shot => shot.image && shot.image.trim() !== "");
  
  if (filteredGallery.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="fa-solid fa-images fa-3x text-muted mb-3"></i>
        <p class="text-muted">Gallery photos will appear here once images are added.</p>
      </div>`;
    return;
  }

  container.innerHTML = filteredGallery
    .map(
      (shot) => `
      <div class="col-md-4">
        <div class="gallery-card">
          <img src="${shot.image}" alt="${shot.caption}" class="img-fluid rounded-4" loading="lazy" />
          <p class="text-muted small mt-3">${shot.caption}</p>
        </div>
      </div>`
    )
    .join("");
}

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  renderTravelPosts();
  renderFeaturedDestinations();
  renderTravelGallery();
  
  // Render countries and cities if containers exist
  if (document.getElementById("countriesView")) {
    renderCountries();
  }
  if (document.getElementById("citiesView")) {
    renderCities();
  }
});
