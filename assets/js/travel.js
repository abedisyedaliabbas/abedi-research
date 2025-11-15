// Travel blog photos - add your photos to assets/img/travel/ directory
// Photo file names should match the location (e.g., phuket.jpg, amsterdam.jpg)
const travelPosts = [
  {
    title: "Phuket",
    date: "March 2025",
    location: "Phuket, Thailand",
    excerpt:
      "A sun-kissed island adventure with a close friend, exploring winding coastal paths on a motorbike, enjoying Thai cuisine, and discovering the delightful 7-Eleven culture.",
    tags: ["Thailand", "Adventure"],
    cover: "assets/img/travel/phuket.jpg", // Add phuket.jpg to assets/img/travel/
  },
  {
    title: "Amsterdam",
    date: "December 2024",
    location: "Amsterdam, Netherlands",
    excerpt:
      "Exploring the artistic heritage, intricate canal system, and cultural attractions. Visited the Van Gogh Museum and Anne Frank House, experiencing the city's unique charm.",
    tags: ["Netherlands", "Culture"],
    cover: "assets/img/travel/amsterdam.jpg", // Add amsterdam.jpg to assets/img/travel/
  },
  {
    title: "Paris",
    date: "December 2024",
    location: "Paris, France",
    excerpt:
      "My first non-conference visit to this iconic destination. Wandered through Montmartre, visited the Louvre, and enjoyed breathtaking views from the Eiffel Tower.",
    tags: ["France", "Culture"],
    cover: "assets/img/travel/paris.jpg", // Add paris.jpg to assets/img/travel/
  },
  {
    title: "Liverpool",
    date: "July 2024",
    location: "Liverpool, UK",
    excerpt:
      "A trip blending professional conference engagements with leisure exploration. Visited The Beatles Statue, explored the city's architecture, and ventured to Sheffield's mountains.",
    tags: ["UK", "Conference"],
    cover: "assets/img/travel/liverpool.jpg", // Add liverpool.jpg to assets/img/travel/
  },
  {
    title: "Hong Kong",
    date: "2024",
    location: "Hong Kong",
    excerpt:
      "Walking the vibrant streets after a refreshing rain shower, surrounded by neon glow and the rich scent of rain-soaked concrete. A dive into the heart of Hong Kong's living, breathing urban culture.",
    tags: ["Hong Kong", "Urban"],
    cover: "assets/img/travel/hong-kong.jpg", // Add hong-kong.jpg to assets/img/travel/
  },
  {
    title: "Melbourne",
    date: "2023",
    location: "Melbourne, Australia",
    excerpt:
      "Morning runs along the Yarra River and coastal walkways, with the rhythmic sound of footsteps mingling with seabird calls. A meditation and reflection on life's journey.",
    tags: ["Australia", "Nature"],
    cover: "assets/img/travel/melbourne.jpg", // Add melbourne.jpg to assets/img/travel/
  },
  {
    title: "London",
    date: "Mar - Aug 2023",
    location: "London, UK",
    excerpt:
      "As a visiting researcher, I collaborated with brilliant minds at local universities. Explored Piccadilly Circus, Hyde Park, the British Museum, and enjoyed the city's vibrant energy.",
    tags: ["UK", "Research"],
    cover: "assets/img/travel/london.jpg", // Add london.jpg to assets/img/travel/
  },
  {
    title: "Milan",
    date: "2023",
    location: "Milan, Italy",
    excerpt:
      "Staying with my brother and niece Hayal, exploring bustling piazzas, enjoying Italian cuisine, and marveling at the Duomo. A vibrant tableau of joy, family, and culinary adventure.",
    tags: ["Italy", "Family"],
    cover: "assets/img/travel/milan.jpg", // Add milan.jpg to assets/img/travel/
  },
  {
    title: "Venice",
    date: "2023",
    location: "Venice, Italy",
    excerpt:
      "Cycling through the dreamlike city floating on its network of canals. Indulging in dark chocolate Italian gelato and experiencing Venice by bike, boat, and taste.",
    tags: ["Italy", "Adventure"],
    cover: "assets/img/travel/venice.jpg", // Add venice.jpg to assets/img/travel/
  },
  {
    title: "Copenhagen",
    date: "2023",
    location: "Copenhagen, Denmark",
    excerpt:
      "Experiencing Scandinavian flair with minimalist yet colorful architecture, expansive green parks, and a palpable sense of design. The friendliness of the Danes made it feel like home.",
    tags: ["Denmark", "Culture"],
    cover: "assets/img/travel/copenhagen.jpg", // Add copenhagen.jpg to assets/img/travel/
  },
  {
    title: "Dubai",
    date: "2023",
    location: "Dubai, UAE",
    excerpt:
      "Visiting my sister and niece Soha in this dazzling city. Exploring from the Burj Khalifa to artificial islands, marveling at Dubai's transformation and ambition.",
    tags: ["UAE", "Family"],
    cover: "assets/img/travel/dubai.jpg", // Add dubai.jpg to assets/img/travel/
  },
  {
    title: "Istanbul",
    date: "2023",
    location: "Istanbul, Turkey",
    excerpt:
      "A city straddling two continents, alive with countless cats and ancient cobblestone pavements. Exploring the Blue Mosque, Grand Bazaar, and indulging in Turkish coffee and baklava.",
    tags: ["Turkey", "Culture"],
    cover: "assets/img/travel/istanbul.jpg", // Add istanbul.jpg to assets/img/travel/
  },
  {
    title: "Bangkok",
    date: "2023",
    location: "Bangkok, Thailand",
    excerpt:
      "Hosted by my friend Earth and his girlfriend Aoy. Exploring colorful markets, golden temples, and enjoying street food. Extended adventures to Pattaya's stunning beaches.",
    tags: ["Thailand", "Friends"],
    cover: "assets/img/travel/bangkok.jpg", // Add bangkok.jpg to assets/img/travel/
  },
  {
    title: "Riyadh",
    date: "2023",
    location: "Riyadh, Saudi Arabia",
    excerpt:
      "Reuniting with my old friend Tabish and exploring the dynamic city. Performing Umrah, a profound spiritual journey at the Grand Mosque, adding deep significance to my visit.",
    tags: ["Saudi Arabia", "Spiritual"],
    cover: "assets/img/travel/riyadh.jpg", // Add riyadh.jpg to assets/img/travel/
  },
  {
    title: "Prague",
    date: "2023",
    location: "Prague, Czech Republic",
    excerpt:
      "A brief but memorable visit with stunning architecture and pristine streets. Clear skies and gentle breeze made walking through the historic city center a sheer delight.",
    tags: ["Czech Republic", "Architecture"],
    cover: "assets/img/travel/prague.jpg", // Add prague.jpg to assets/img/travel/
  },
  {
    title: "Dresden",
    date: "2023",
    location: "Dresden, Germany",
    excerpt:
      "Attending a conference in this city steeped in history. Breathtaking landscapes with iconic castles, expansive rivers, and serene morning runs along the Elbe.",
    tags: ["Germany", "Conference"],
    cover: "assets/img/travel/dresden.jpg", // Add dresden.jpg to assets/img/travel/
  },
  {
    title: "Oldenburg",
    date: "2023",
    location: "Oldenburg, Germany",
    excerpt:
      "Visiting my uncle in this quiet, charming small city. Traditional German architecture, small cafes, and a perfect space for reflection and connection with family.",
    tags: ["Germany", "Family"],
    cover: "assets/img/travel/oldenburg.jpg", // Add oldenburg.jpg to assets/img/travel/
  },
  {
    title: "Kuala Lumpur",
    date: "Ongoing",
    location: "Kuala Lumpur, Malaysia",
    excerpt:
      "A frequent destination from Singapore. Embracing the Malay language, enjoying nasi lemak, satay, and roti canai. A place that resonates with my spirit, offering new experiences with every visit.",
    tags: ["Malaysia", "Food"],
    cover: "assets/img/travel/kuala-lumpur.jpg", // Add kuala-lumpur.jpg to assets/img/travel/
  },
];

const travelTimeline = [
  {
    year: "Aug 2025",
    title: "Visiting Research Fellow",
    location: "Nanyang Technological University (NTU), Singapore",
    description:
      "Started as Visiting Research Fellow at NTU, continuing research in computational chemistry and molecular design.",
  },
  {
    year: "Sep 2024",
    title: "Postdoctoral Research Fellow",
    location: "Singapore University of Technology and Design (SUTD)",
    description:
      "Began postdoctoral position at SUTD, designing organic fluorophores for photoacoustic imaging and photothermal therapy.",
  },
  {
    year: "2024",
    title: "PhD Graduation",
    location: "Singapore University of Technology and Design (SUTD)",
    description:
      "Successfully completed PhD in Science, Maths and Technology, focusing on excited-state conformational dynamics of organic dyes.",
  },
  {
    year: "2024",
    title: "Oral Presentation at Fluorescent Biomolecules Conference",
    location: "Hong Kong",
    description:
      "Delivered an oral presentation at the Fluorescent Biomolecules conference, sharing research on photostability and excited-state dynamics.",
  },
  {
    year: "2024",
    title: "Bursary Award for Summer School in Catalysis",
    location: "Summer School in Catalysis",
    description:
      "Awarded a competitive bursary to attend a catalysis summer school, bridging computation with experiments.",
  },
  {
    year: "2023",
    title: "12th Asian Photochemistry Conference",
    location: "Melbourne, Australia",
    description:
      "Attended and presented at the 12th Asian Photochemistry Conference, engaging with the photochemistry community.",
  },
  {
    year: "Mar 2023 - Aug 2023",
    title: "Visiting Researcher",
    location: "University College London & Queen Mary University of London, UK",
    description:
      "Collaborated with Prof. Rachel Crespo-Otero on excited-state decay pathways, simulating excited-state decay in solid-state systems and developing photostable materials.",
  },
];

// Gallery photos - add your photos to assets/img/travel/ directory
// Photo file names should be descriptive (e.g., marina-bay.jpg, sutd-team.jpg)
const travelGallery = [
  {
    caption: "Marina Bay, Singapore",
    image: "assets/img/travel/marina-bay.jpg", // Add marina-bay.jpg to assets/img/travel/
  },
  {
    caption: "SUTD Research Hub, Singapore",
    image: "assets/img/travel/sutd-team.jpg", // Add sutd-team.jpg to assets/img/travel/
  },
  {
    caption: "Melbourne, Australia",
    image: "assets/img/travel/melbourne-conference.jpg", // Add melbourne-conference.jpg to assets/img/travel/
  },
  // Add more gallery photos here
  // Example:
  // {
  //   caption: "Description of photo",
  //   image: "assets/img/travel/photo-name.jpg",
  // },
];

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

function renderTravelTimeline() {
  const template = document.getElementById("travelTimelineTemplate");
  const container = document.getElementById("travelTimeline");
  if (!template || !container) return;

  container.innerHTML = "";
  travelTimeline.forEach((stop) => {
    const node = template.content.cloneNode(true);
    node.querySelector(".year").textContent = stop.year;
    node.querySelector(".title").textContent = stop.title;
    node.querySelector(".location").textContent = stop.location;
    node.querySelector(".description").textContent = stop.description;
    container.appendChild(node);
  });
}

// Featured destinations for the highlights section
const featuredDestinations = [
  {
    title: "Singapore",
    subtitle: "Research Hub",
    description: "Home base for PhD and postdoctoral research at SUTD and NTU.",
    icon: "fa-building",
    color: "primary"
  },
  {
    title: "Hong Kong",
    subtitle: "Conference City",
    description: "Oral presentation at the Fluorescent Biomolecules conference.",
    icon: "fa-microscope",
    color: "success"
  },
  {
    title: "Melbourne",
    subtitle: "Award Winner",
    description: "APC Exhibitor Prize at the 12th Asian Photochemistry Conference.",
    icon: "fa-trophy",
    color: "warning"
  },
  {
    title: "London",
    subtitle: "Research Collaboration",
    description: "Visiting researcher at UCL and Queen Mary University.",
    icon: "fa-handshake",
    color: "info"
  }
];

function renderFeaturedDestinations() {
  const container = document.getElementById("featuredDestinations");
  if (!container) return;

  container.innerHTML = featuredDestinations
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

function renderTravelGallery() {
  const container = document.getElementById("travelGallery");
  if (!container) return;

  const filteredGallery = travelGallery.filter(shot => shot.image && shot.image.trim() !== "");
  
  if (filteredGallery.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="fa-solid fa-images fa-3x text-muted mb-3"></i>
        <p class="text-muted">Gallery photos will appear here once image URLs are added to <code>assets/js/travel.js</code></p>
        <p class="text-muted small">Extract image URLs from your travel blog and add them to the <code>travelGallery</code> array.</p>
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

document.addEventListener("DOMContentLoaded", () => {
  renderTravelPosts();
  renderFeaturedDestinations();
  renderTravelGallery();
});

