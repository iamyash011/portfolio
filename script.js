// ============================================================
// script.js — Brutalist Portfolio Interactivity
// Particle constellation · Scroll reveal · Dynamic rendering
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  // Loading screen
  const loader = document.querySelector(".loader");
  window.addEventListener("load", () => {
    setTimeout(() => loader.classList.add("hidden"), 300);
  });

  // Render content from data.js
  renderHero();
  renderProjects();
  renderSkills();
  renderOffRecord();
  renderContact();
  renderFooter();

  // Init features
  initParticles();
  initNavigation();
  initScrollReveal();
  initBackToTop();
});

// ── SVG Icons ───────────────────────────────────────────────

const icons = {
  file: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
  arrowUpRight: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  arrowUp: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>`,
  book: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  music: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
  code: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  brain: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0 0 7.5V16a4 4 0 0 0 8 0v-1.5a4 4 0 0 0 0-7.5V6a4 4 0 0 0-4-4z"/></svg>`,
};

// ── RENDER FUNCTIONS ────────────────────────────────────────

function renderHero() {
  const heroText = document.getElementById("hero-text");
  const heroPortrait = document.getElementById("hero-portrait");
  const heroMeta = document.getElementById("hero-meta");

  const nameParts = personalInfo.name.toUpperCase();

  heroText.innerHTML = `
    <div class="hero-badge">${personalInfo.tagline}</div>
    <h1 class="hero-name">
      ${nameParts}
    </h1>
    <p class="hero-bio">${personalInfo.shortBio}</p>
    <div class="hero-cta">
      <a href="${personalInfo.resumeLink}" target="_blank" class="btn btn-primary" id="btn-cv">
        ${icons.file} View CV ${icons.arrowUpRight}
      </a>
      <a href="${personalInfo.linkedinUrl}" target="_blank" class="btn btn-secondary" id="btn-linkedin">
        ${icons.linkedin} LinkedIn
      </a>
      <a href="${personalInfo.githubUrl}" target="_blank" class="btn btn-secondary" id="btn-github">
        ${icons.github} GitHub
      </a>
    </div>
  `;

  heroPortrait.innerHTML = `
    <div class="portrait-glow"></div>
    <div class="portrait-frame">
      <span class="portrait-label portrait-label-top">01 — PORTRAIT</span>
      <span class="portrait-label portrait-label-tr">${personalInfo.email}</span>
      <img src="${personalInfo.profilePhoto}" alt="${personalInfo.name}"
           onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjgwMCIgdmlld0JveD0iMCAwIDYwMCA4MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI4MDAiIGZpbGw9IiMxMTExMTEiLz48Y2lyY2xlIGN4PSIzMDAiIGN5PSIyODAiIHI9IjEwMCIgZmlsbD0iIzFhMWExYSIvPjxwYXRoIGQ9Ik0xNTAgNjUwQzE1MCA1MjAgMjEwIDQyMCAzMDAgNDIwQzM5MCA0MjAgNDUwIDUyMCA0NTAgNjUwIiBmaWxsPSIjMWExYTFhIi8+PHRleHQgeD0iMzAwIiB5PSI3NTAiIGZpbGw9IiMyYTJhMmEiIGZvbnQtZmFtaWx5PSJtb25vc3BhY2UiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFERCBZT1VSIFBIT1RPPC90ZXh0Pjwvc3ZnPg=='">
      <span class="portrait-label portrait-label-bl">EST. ${new Date().getFullYear()}</span>
      <span class="portrait-label portrait-label-br">FRAME · 35MM</span>
    </div>
  `;

  heroMeta.innerHTML = `
    <span>${personalInfo.location}</span>
    <span class="hero-meta-sep"></span>
    <span>${personalInfo.roles.join(" · ")}</span>
  `;
}

function renderProjects() {
  const grid = document.getElementById("projects-grid");

  grid.innerHTML = projects
    .map((p, i) => {
      // Generate a placeholder image pattern
      const placeholderSvg = `data:image/svg+xml;base64,${btoa(`<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="600" fill="#0f0f0f"/><line x1="0" y1="0" x2="800" y2="600" stroke="#1a1a1a" stroke-width="1"/><line x1="800" y1="0" x2="0" y2="600" stroke="#1a1a1a" stroke-width="1"/><rect x="280" y="240" width="240" height="120" rx="4" fill="#141414" stroke="#1f1f1f"/><text x="400" y="306" fill="#333" font-family="monospace" font-size="14" text-anchor="middle">PROJECT ${String(i + 1).padStart(2, '0')}</text></svg>`)}`;

      // If the project has a valid link (PDF path or URL), make it clickable
      const hasLink = p.link && p.link !== "#";
      const tag = hasLink ? "a" : "div";
      const linkAttrs = hasLink ? `href="${p.link}" target="_blank"` : "";

      return `
        <${tag} ${linkAttrs} class="project-card reveal reveal-d${(i % 2) + 1}">
          <div class="project-card-image">
            <span class="project-card-meta">${p.year} · ${p.role}</span>
            ${hasLink ? `<div class="project-card-arrow">${icons.arrowUpRight}</div>` : ""}
            <img src="${p.image || placeholderSvg}" alt="${p.title}">
          </div>
          <div class="project-card-body">
            <h3 class="project-card-title">${p.title}</h3>
            <p class="project-card-desc">${p.description}</p>
            <div class="project-tags">
              ${p.tags.map((t) => `<span class="project-tag">${t}</span>`).join("")}
            </div>
          </div>
        </${tag}>
      `;
    })
    .join("");
}

function renderSkills() {
  const grid = document.getElementById("skills-grid");

  grid.innerHTML = skills
    .map(
      (s, i) => `
    <div class="skill-cell reveal reveal-d${(i % 2) + 1}">
      <div class="skill-cell-header">
        <h3 class="skill-cell-name">${s.category}</h3>
        <span class="skill-cell-index">${s.index} // Cap</span>
      </div>
      <div class="skill-list">
        ${s.items
          .map(
            (item) => `
          <div class="skill-item">
            <span class="skill-item-bullet">▸</span>
            <span class="skill-item-name">${item}</span>
            <span class="skill-item-line"></span>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `
    )
    .join("");
}

function renderOffRecord() {
  const grid = document.getElementById("offrecord-grid");

  // Fun facts card
  const funfactsHtml = `
    <div class="funfacts-card reveal">
      <div class="funfacts-label">ABOUT.TXT</div>
      ${funFacts
        .map(
          (f, i) => `
        <div class="funfact-item">
          <p class="funfact-text">
            <span class="funfact-index">0${i + 1}</span>${f}
          </p>
        </div>
      `
        )
        .join("")}
    </div>
  `;

  // Stat cards
  const statsHtml = stats
    .map(
      (s, i) => `
    <div class="stat-card reveal reveal-d${i + 1}">
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `
    )
    .join("");

  // Status bar
  const statusHtml = `
    <div class="status-bar reveal">
      <div class="status-bar-header">
        <span class="status-bar-title">/ CURRENTLY</span>
        <span class="status-live"><span class="status-live-dot"></span> LIVE</span>
      </div>
      <div class="status-items">
        ${currently
          .map(
            (c) => `
          <div class="status-item">
            <div class="status-item-icon">${icons[c.icon] || "📌"}</div>
            <div class="status-item-label">${c.label}</div>
            <div class="status-item-value">${c.value}</div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;

  grid.innerHTML = funfactsHtml + statsHtml + statusHtml;
}

function renderContact() {
  const grid = document.getElementById("contact-grid");

  const links = [
    {
      icon: icons.mail,
      label: "EMAIL",
      value: personalInfo.email,
      url: `mailto:${personalInfo.email}`,
    },
    {
      icon: icons.linkedin,
      label: "LINKEDIN",
      value: "in/" + (personalInfo.linkedinUrl.split("/in/")[1] || "yourprofile"),
      url: personalInfo.linkedinUrl,
    },
    {
      icon: icons.github,
      label: "GITHUB",
      value: "@" + (personalInfo.githubUrl.split("github.com/")[1] || "yourprofile"),
      url: personalInfo.githubUrl,
    },
    {
      icon: icons.file,
      label: "CV (PDF)",
      value: "Download",
      url: personalInfo.resumeLink,
    },
  ];

  grid.innerHTML = links
    .map(
      (l, i) => `
    <a href="${l.url}" target="_blank" class="contact-link reveal reveal-d${i + 1}">
      <div class="contact-link-info">
        <span class="contact-link-icon">${l.icon}</span>
        <div class="contact-link-text">
          <span class="contact-link-label">${l.label}</span>
          <span class="contact-link-value">${l.value}</span>
        </div>
      </div>
      <span class="contact-link-arrow">${icons.arrowUpRight}</span>
    </a>
  `
    )
    .join("");
}

function renderFooter() {
  document.getElementById("footer-year").textContent = new Date().getFullYear();
  document.getElementById("footer-name").textContent = personalInfo.name;
}

// ── PARTICLE CONSTELLATION SYSTEM ───────────────────────────

function initParticles() {
  const canvas = document.getElementById("particle-canvas");
  const ctx = canvas.getContext("2d");
  let particles = [];
  let mouse = { x: -1000, y: -1000 };

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener("resize", resize);

  document.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  document.addEventListener("mouseleave", () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  // Particle count scales with viewport
  const count = Math.min(
    Math.floor((window.innerWidth * window.innerHeight) / 15000),
    100
  );

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.3 + 0.05,
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      // Mouse interaction — gentle repulsion
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 140) {
        const force = (140 - dist) / 140;
        p.vx -= (dx / dist) * force * 0.2;
        p.vy -= (dy / dist) * force * 0.2;
      }

      // Damping & drift
      p.vx *= 0.985;
      p.vy *= 0.985;
      p.vx += (Math.random() - 0.5) * 0.015;
      p.vy += (Math.random() - 0.5) * 0.015;

      p.x += p.vx;
      p.y += p.vy;

      // Wrap edges
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      // Draw particle dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
      ctx.fill();
    });

    // Constellation lines between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          const opacity = ((110 - dist) / 110) * 0.08;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    // Lines from cursor to nearby particles
    particles.forEach((p) => {
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 160) {
        const opacity = ((160 - dist) / 160) * 0.15;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(255, 69, 0, ${opacity})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// ── NAVIGATION ──────────────────────────────────────────────

function initNavigation() {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    // Active link tracking
    const sections = document.querySelectorAll("section[id]");
    let current = "";
    sections.forEach((section) => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) current = section.getAttribute("id");
    });

    links.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Mobile menu toggle
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("open");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("open");
    });
  });
}

// ── SCROLL REVEAL ───────────────────────────────────────────

function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );

  reveals.forEach((el) => observer.observe(el));
}

// ── BACK TO TOP ─────────────────────────────────────────────

function initBackToTop() {
  const btn = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 500);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
