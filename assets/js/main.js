const profileData = {
  currentRole: "Postdoctoral Research Fellow",
  currentOrg: "Singapore University of Technology and Design (SUTD)",
  focus: "AI-Driven Molecular Design & Photoacoustic Imaging",
  methods: "AI/ML · TD-DFT · CASSCF · CASPT2",
  vision: "AI-accelerated discovery of smarter, more sustainable materials",
};

const researchPillars = [
  {
    icon: "fa-flask", // Changed from fa-microscope to fa-flask (more common icon)
    title: "Excited-State Dynamics",
    summary:
      "TD-DFT, CASSCF, and CASPT2 methods to unravel mechanisms behind ultralong phosphorescence and photoinduced processes.",
    badges: ["TD-DFT", "CASSCF", "CASPT2"],
  },
  {
    icon: "fa-atom", // Changed from fa-dna to fa-atom (more common icon)
    title: "AI-Enhanced Molecular Engineering",
    summary:
      "AI-guided design of organic fluorophores for photoacoustic imaging and photothermal therapy, combining machine learning predictions with quantum chemical modeling for biomedical applications.",
    badges: ["AI-Guided Design", "Photoacoustic", "Photothermal"],
  },
  {
    icon: "fa-lightbulb", // Changed from fa-earth-asia to fa-lightbulb (more common icon)
    title: "AI-Driven Materials Discovery",
    summary:
      "Machine learning and AI for accelerated molecular design, developing photostable materials for optoelectronics and environmental sensing through intelligent property prediction.",
    badges: ["AI/ML", "Photostability", "Materials Discovery"],
  },
];

const educationTimeline = [
  {
    year: "2020 – 2024",
    title: "Doctor of Philosophy – PhD, Science, Maths and Technology",
    institution: "Singapore University of Technology and Design (SUTD)",
    description:
      "Focused on excited-state conformational dynamics of organic dyes under Prof. Xiaogang Liu, using TD-DFT, CASSCF, and CASPT2 methods.",
  },
  {
    year: "2017 – 2019",
    title: "Master of Science – MS, Applied Mathematics and Chemistry",
    institution: "Lahore University of Management Sciences",
    description:
      "Cross-disciplinary training in applied mathematics and chemistry.",
  },
  {
    year: "2011 – 2015",
    title: "Bachelor of Science – BS, Chemical and Biomolecular Engineering",
    institution: "University of Engineering and Technology, Lahore",
    description:
      "Foundational engineering education in chemical and biomolecular processes.",
  },
];

const experienceData = [
  {
    role: "Visiting Research Fellow",
    org: "Nanyang Technological University (NTU)",
    location: "Singapore",
    duration: "Aug 2025 – Present",
    highlights: [
      "Research collaboration in computational chemistry and molecular design.",
    ],
  },
  {
    role: "Postdoctoral Research Fellow",
    org: "Singapore University of Technology and Design (SUTD)",
    location: "Singapore",
    duration: "Sep 2024 – Present",
    highlights: [
      "Designing organic fluorophores for photoacoustic imaging and photothermal therapy.",
      "Merging quantum chemical modeling with real-world biomedical applications.",
    ],
  },
  {
    role: "Visiting Researcher",
    org: "University College London",
    location: "London, UK",
    duration: "Mar 2023 – August 2023",
    highlights: [
      "Collaborated with Prof. Rachel Crespo-Otero on excited-state decay pathways.",
      "Simulated excited-state decay in solid-state systems and developed photostable materials.",
    ],
  },
  {
    role: "Visiting Researcher",
    org: "Queen Mary University of London",
    location: "London, UK",
    duration: "Mar 2023 – August 2023",
    highlights: [
      "Advanced expertise in nonadiabatic dynamics and machine learning for molecular design.",
      "Photochemical simulations for photostable materials development.",
    ],
  },
];

// University logos for the Affiliations section on the main page
// Add your photos to assets/img/main/ directory
const partnerLogos = [
  {
    name: "SUTD",
    shortName: "SUTD",
    url: "https://www.sutd.edu.sg/",
    logo: "assets/img/main/sutd.jpg", // Add sutd.jpg to assets/img/main/
  },
  {
    name: "NTU",
    shortName: "NTU",
    url: "https://www.ntu.edu.sg/",
    logo: "assets/img/main/ntu.jpg", // Add ntu.jpg to assets/img/main/
  },
  {
    name: "UCL",
    shortName: "UCL",
    url: "https://www.ucl.ac.uk/",
    logo: "assets/img/main/ucl.jpg", // Add ucl.jpg to assets/img/main/
  },
  {
    name: "Queen Mary University",
    shortName: "QMUL",
    url: "https://www.qmul.ac.uk/",
    logo: "assets/img/main/queen-mary.jpg", // Add queen-mary.jpg to assets/img/main/
  },
  {
    name: "Lahore University of Management Sciences",
    shortName: "LUMS",
    url: "https://lums.edu.pk/",
    logo: "assets/img/main/lums.jpg", // Add lums.jpg to assets/img/main/
  },
  {
    name: "University of Engineering and Technology, Lahore",
    shortName: "UET Lahore",
    url: "https://uet.edu.pk/",
    logo: "assets/img/main/uet-lahore.jpg", // Add uet-lahore.jpg to assets/img/main/
  },
];

const newsHighlights = [
  {
    title: "Celebrating My PhD Graduation in Computational Chemistry!",
    description:
      "Successfully completed PhD in Science, Maths and Technology at SUTD, focusing on excited-state conformational dynamics of organic dyes.",
    tag: "Milestone",
  },
  {
    title: "Exciting News: Bursary Award for Summer School in Catalysis!",
    description:
      "Awarded a bursary to attend a summer school in catalysis, furthering research in computational chemistry applications.",
    tag: "Award",
  },
  {
    title: "Oral Presentation at Fluorescent Biomolecules Conference",
    description:
      "Delivered an oral presentation at the Fluorescent Biomolecules conference in Hong Kong, sharing research on photostability and excited-state dynamics.",
    tag: "Conference",
  },
  {
    title: "12th Asian Photochemistry Conference in Melbourne",
    description:
      "Attended and presented at the 12th Asian Photochemistry Conference in Melbourne, Australia, engaging with the photochemistry community.",
    tag: "Conference",
  },
];

// NOTE: Replace with your actual research video/presentation if available
const heroVideo = ""; // Add your video URL here when available

// Hero card removed - profile data kept for potential future use

function renderResearchCards() {
  const container = document.getElementById("researchCards");
  if (!container) return;
  container.innerHTML = researchPillars
    .map(
      (pillar) => `
      <div class="col-md-4">
        <div class="card-gradient p-4 h-100">
          <h3 class="h5 fw-semibold">${pillar.title}</h3>
          <p class="text-muted">${pillar.summary}</p>
          <div class="d-flex flex-wrap gap-2">
            ${pillar.badges
              .map(
                (badge) =>
                  `<span class="badge rounded-pill text-bg-light border">${badge}</span>`
              )
              .join("")}
          </div>
        </div>
      </div>`
    )
    .join("");
}

function renderTimeline() {
  const template = document.getElementById("timelineItemTemplate");
  const timeline = document.getElementById("educationTimeline");
  if (!template || !timeline) return;
  timeline.innerHTML = "";

  educationTimeline.forEach((item) => {
    const node = template.content.cloneNode(true);
    node.querySelector(".year").textContent = item.year;
    node.querySelector(".title").textContent = item.title;
    node.querySelector(".institution").textContent = item.institution;
    node.querySelector(".description").textContent = item.description;
    timeline.appendChild(node);
  });
}

function renderExperience() {
  const container = document.getElementById("experienceCards");
  if (!container) return;
  container.innerHTML = experienceData
    .map(
      (exp) => `
      <div class="col-md-4">
        <div class="card-gradient p-4 h-100">
          <p class="text-uppercase small text-muted mb-1">${exp.duration}</p>
          <h3 class="h5 fw-semibold">${exp.role}</h3>
          <p class="mb-2">${exp.org}</p>
          <p class="text-muted small mb-3">${exp.location}</p>
          <ul class="list-unstyled text-muted">
            ${exp.highlights
              .map(
                (point) =>
                  `<li class="mb-2"><i class="fa-solid fa-check text-primary me-2"></i>${point}</li>`
              )
              .join("")}
          </ul>
        </div>
      </div>`
    )
    .join("");
}

function renderPartnerLogos() {
  const container = document.getElementById("partnerLogos");
  if (!container) return;
  container.innerHTML = partnerLogos
    .map(
      (partner) => `
      <div class="col">
        <a
          class="partner-logo-card d-flex align-items-center justify-content-center position-relative"
          href="${partner.url}"
          target="_blank"
          rel="noopener"
        >
          <img 
            src="${partner.logo}" 
            alt="${partner.name}" 
            loading="lazy"
            class="partner-logo-img"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          />
          <div class="logo-fallback d-none flex-column align-items-center justify-content-center">
            <i class="fa-solid fa-building-columns fa-2x text-primary mb-2"></i>
            <span class="text-primary fw-semibold small text-center">${partner.shortName || partner.name}</span>
          </div>
        </a>
      </div>`
    )
    .join("");
}

// News carousel removed from main page - now on separate news.html page

// Intro video button removed

function renderHeroStats() {
  // Update hero section stats
  const citationsEl = document.getElementById("heroCitations");
  const hIndexEl = document.getElementById("heroHIndex");
  const publicationsEl = document.getElementById("heroPublications");
  
  if (citationsEl) citationsEl.textContent = "379";
  if (hIndexEl) hIndexEl.textContent = "9";
  if (publicationsEl) publicationsEl.textContent = "19";
  
  // Update hero position
  const positionEl = document.getElementById("heroPosition");
  const orgEl = document.getElementById("heroOrg");
  
  if (positionEl) positionEl.textContent = profileData.currentRole;
  if (orgEl) orgEl.textContent = profileData.currentOrg;
}

// Handle contact form submission with Formspree
function initContactForm() {
  const form = document.getElementById("contactForm");
  const messageDiv = document.getElementById("formMessage");
  const submitBtn = document.getElementById("submitBtn");
  
  if (!form) return;
  
  // Check if Formspree ID is set
  const formAction = form.getAttribute("action");
  if (formAction && formAction.includes("YOUR_FORM_ID")) {
    // Formspree not configured yet - show helpful message
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      messageDiv.className = "alert alert-warning";
      messageDiv.innerHTML = `
        <i class="fa-solid fa-info-circle me-2"></i>
        <strong>Form not configured yet.</strong><br>
        <small>Please set up Formspree (free at <a href="https://formspree.io" target="_blank">formspree.io</a>) 
        and update the form action URL, or email me directly at 
        <a href="mailto:abedisyedaliabbas@gmail.com">abedisyedaliabbas@gmail.com</a></small>
      `;
      messageDiv.classList.remove("d-none");
    });
    return;
  }
  
  form.addEventListener("submit", async function(e) {
    e.preventDefault();
    
    const spinner = submitBtn.querySelector(".spinner-border");
    const originalBtnText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.disabled = true;
    if (spinner) spinner.classList.remove("d-none");
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Sending...';
    
    // Hide previous messages
    messageDiv.classList.add("d-none");
    
    try {
      const formData = new FormData(form);
      
      // Submit to Formspree
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });
      
      if (response.ok) {
        // Success
        messageDiv.className = "alert alert-success";
        messageDiv.innerHTML = '<i class="fa-solid fa-check-circle me-2"></i>Thank you! Your message has been sent successfully. I\'ll get back to you soon.';
        messageDiv.classList.remove("d-none");
        form.reset();
        
        // Scroll to message
        setTimeout(() => {
          messageDiv.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 100);
      } else {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      
      // Error - show user-friendly message with email fallback
      messageDiv.className = "alert alert-danger";
      messageDiv.innerHTML = `
        <i class="fa-solid fa-exclamation-circle me-2"></i>
        <strong>Sorry, there was an error sending your message.</strong><br>
        <small>Please try again or email me directly at 
        <a href="mailto:abedisyedaliabbas@gmail.com?subject=Contact from Website">abedisyedaliabbas@gmail.com</a></small>
      `;
      messageDiv.classList.remove("d-none");
      
      // Scroll to message
      setTimeout(() => {
        messageDiv.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 100);
    } finally {
      // Reset button
      submitBtn.disabled = false;
      if (spinner) spinner.classList.add("d-none");
      submitBtn.innerHTML = originalBtnText;
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeroStats();
  renderResearchCards();
  renderTimeline();
  renderExperience();
  renderPartnerLogos();
  initContactForm();
});

