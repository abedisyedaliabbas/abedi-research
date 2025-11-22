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
  { name: "Islamabad", country: "Pakistan", places: 3, timeAgo: "5 months ago", cover: "assets/img/travel/islamabad.jpg" },
  { name: "Murree", country: "Pakistan", places: 1, timeAgo: "5 months ago", cover: "assets/img/travel/murree.jpg" },
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

// Render travel posts (featured/highlighted cities)
function renderTravelPosts() {
  const container = document.getElementById("travelPosts");
  if (!container) return;

  // Get all cities sorted by places (descending)
  const topCities = [...cities]
    .sort((a, b) => b.places - a.places);

  container.innerHTML = topCities
    .map(
      (city) => `
      <div class="col-md-6 col-lg-3">
        <article class="post-card h-100">
          ${city.cover 
            ? `<div class="post-cover" style="background-image:url('${city.cover}');"></div>`
            : `<div class="post-cover d-flex align-items-center justify-content-center bg-light">
                <i class="fa-solid fa-image fa-3x text-muted"></i>
              </div>`
          }
          <div class="post-body">
            <div class="mb-2">
              <span class="badge bg-primary-subtle text-primary">${city.places} places</span>
            </div>
            <h3 class="h5 fw-semibold mb-1">${city.name}</h3>
            <p class="text-muted small mb-0">${city.country}</p>
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
