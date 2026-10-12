import { useEffect, useState } from "react";
import {
  FiActivity,
  FiArrowDown,
  FiArrowUpRight,
  FiAward,
  FiBook,
  FiDatabase,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMenu,
  FiMoon,
  FiServer,
  FiShield,
  FiSun,
  FiX,
} from "react-icons/fi";
import {
  SiAmazonaws,
  SiApachekafka,
  SiApachemaven,
  SiDocker,
  SiGit,
  SiHibernate,
  SiJava,
  SiJavascript,
  SiJunit5,
  SiLeetcode,
  SiMysql,
  SiPostman,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiSpringsecurity,
} from "react-icons/si";
import resumePdf from "./Assets/Aarti_Kumari_CV.pdf";
import "./style.scss";

const navigationItems = [
  { id: "experience", label: "Experience", index: "01" },
  { id: "approach", label: "Approach", index: "02" },
  { id: "background", label: "Background", index: "03" },
  { id: "contact", label: "Contact", index: "04" },
];

const socials = [
  { href: "https://github.com/Aartikjha", label: "GitHub", Icon: FiGithub },
  { href: "https://www.linkedin.com/in/aarti-kumari-636bb325b", label: "LinkedIn", Icon: FiLinkedin },
  { href: "https://leetcode.com/u/aartikjha365", label: "LeetCode", Icon: SiLeetcode },
  { href: "mailto:aartikjha365@gmail.com", label: "Email", Icon: FiMail },
];

const experience = [
  {
    number: "01",
    company: "NVIDIA",
    tenure: "Full-time",
    location: "Bengaluru, India",
    period: "Feb 2026 — Present",
    discipline: "Payments · Auth · Microservices",
    roles: [
      {
        title: "Associate Engineer — Java Developer",
        period: "Feb 2026 — Present",
        points: [
          "Developed and support 50+ secure REST APIs for payment and authentication workflows — Java 17, Spring Boot, Spring Data JPA — with Spring Security, request validation, HMAC-SHA256 verification, and global exception handling.",
          "Improved API performance by 30% through Redis caching and tuned MySQL queries, indexes, and JPA fetch plans — eliminating N+1 query patterns to lower database load under concurrent traffic.",
          "Built fault-tolerant microservices with Netflix Eureka, Spring Cloud Config, RestClient, and Resilience4j circuit breakers, reducing cascading failures during downstream outages.",
          "Debug code and trace end-to-end request flows across services to isolate root causes — delivering defect fixes and enhancements against tight SLAs.",
        ],
      },
    ],
    name: "Secure Payments & Auth Platform",
    metrics: [
      { value: "50+", label: "secure payment & auth APIs in production" },
      { value: "30%", label: "faster API responses under concurrent load" },
      { value: "N+1", label: "query patterns eliminated from hot paths" },
    ],
    systemLabel: "payments.api",
    stack: ["Java 17", "Spring Boot", "Spring Security", "Redis", "MySQL", "Resilience4j", "Eureka"],
    tone: "payments",
  },
  {
    number: "02",
    company: "Husys Consulting",
    tenure: "Full-time",
    location: "Bengaluru, India",
    period: "Oct 2025 — Feb 2026",
    discipline: "Microservices · DevOps",
    roles: [
      {
        title: "Java Developer",
        period: "Oct 2025 — Feb 2026",
        points: [
          "Designed a microservices-based architecture with Spring Boot and Docker — cutting deployment time by 50% and improving scalability across internal platforms.",
          "Integrated services into CI/CD workflows with Maven and Git; applied Factory, Builder, and Strategy patterns to reduce coupling and improve testability.",
          "Added Log4j structured logging that shortened mean time to resolution (MTTR); delivered sprint goals in Agile (Scrum) with defects tracked in JIRA.",
        ],
      },
    ],
    name: "Internal Platform Modernization",
    metrics: [
      { value: "50%", label: "faster deployments with Docker & CI/CD" },
      { value: "MTTR", label: "down after structured logging rollout" },
      { value: "03", label: "design patterns applied to cut coupling" },
    ],
    systemLabel: "platform.deploy",
    stack: ["Java", "Spring Boot", "Docker", "Maven", "CI/CD", "Log4j", "JIRA"],
    tone: "platform",
  },
  {
    number: "03",
    company: "KodNest",
    tenure: "Internship",
    location: "Bengaluru, India",
    period: "Mar 2025 — Oct 2025",
    discipline: "Backend foundations · TDD",
    roles: [
      {
        title: "Java Developer — Intern",
        period: "Mar 2025 — Oct 2025",
        points: [
          "Shipped 10+ backend REST APIs using Java, Spring Boot, Spring Data JPA, and Spring Security with JWT authentication — MVC architecture over Hibernate ORM.",
          "Raised unit and integration test coverage to 85% with JUnit and Mockito, measurably reducing post-release defects.",
        ],
      },
    ],
    name: "Secure API Foundations",
    metrics: [
      { value: "10+", label: "backend REST APIs shipped end-to-end" },
      { value: "85%", label: "unit & integration test coverage" },
      { value: "JWT", label: "authentication on every secured route" },
    ],
    systemLabel: "jwt-secured.rest",
    stack: ["Java", "Spring Boot", "Spring Security", "JWT", "Hibernate", "JUnit 5", "Mockito"],
    tone: "foundations",
  },
];

const capabilities = [
  {
    number: "01",
    Icon: FiServer,
    title: "APIs & microservices",
    copy: "Spring Boot services with clean contracts — versioned, validated, and built to fail gracefully when downstream doesn't.",
    tag: "REST / SPRING CLOUD",
    points: [
      "Resource-shaped REST contracts, global exception handling",
      "Eureka discovery, Config Server, and API Gateway",
      "Resilience4j circuit breakers, retries, and timeouts",
    ],
    footer: "Spring Boot · Eureka · Resilience4j",
  },
  {
    number: "02",
    Icon: FiDatabase,
    title: "Data & persistence",
    copy: "MySQL schemas, JPA mappings, and cache strategy applied where they change the latency users actually feel.",
    tag: "MYSQL / REDIS",
    points: [
      "Query tuning, indexing, and JPA fetch plans",
      "N+1 patterns eliminated from hot paths",
      "Redis caching and idempotency for exactly-once writes",
    ],
    footer: "MySQL · JPA · Redis",
  },
  {
    number: "03",
    Icon: FiShield,
    title: "Security by default",
    copy: "Authentication and verification built into the request path — not bolted on after the first incident.",
    tag: "AUTH / VERIFICATION",
    points: [
      "JWT and OAuth2 flows with Spring Security",
      "HMAC-SHA256 verification for payment callbacks",
      "RBAC and request validation at the boundary",
    ],
    footer: "JWT · OAuth2 · HMAC · RBAC",
  },
  {
    number: "04",
    Icon: FiActivity,
    title: "Production support & quality",
    copy: "Structured logs, root-cause analysis, and tests that catch regressions before users do.",
    tag: "RCA / OBSERVABILITY",
    points: [
      "Log4j structured logging that shortens MTTR",
      "JUnit 5 + Mockito to 85% coverage, TDD habits",
      "End-to-end request tracing across services",
    ],
    footer: "Log4j · JUnit 5 · Mockito · JIRA",
  },
];

const techCards = [
  { name: "Java", Icon: SiJava, level: 8, years: "3+", group: "Languages" },
  { name: "Spring Boot", Icon: SiSpringboot, level: 8, years: "1+", group: "Backend" },
  { name: "Spring Security", Icon: SiSpringsecurity, level: 7, years: "1+", group: "Backend" },
  { name: "Hibernate / JPA", Icon: SiHibernate, level: 7, years: "1+", group: "Data" },
  { name: "MySQL", Icon: SiMysql, level: 7, years: "2+", group: "Data" },
  { name: "Redis", Icon: SiRedis, level: 7, years: "1+", group: "Data" },
  { name: "Kafka", Icon: SiApachekafka, level: 6, years: "1+", group: "Messaging" },
  { name: "Docker", Icon: SiDocker, level: 7, years: "1+", group: "DevOps" },
  { name: "AWS", Icon: SiAmazonaws, level: 6, years: "1+", group: "DevOps" },
  { name: "Maven", Icon: SiApachemaven, level: 7, years: "1+", group: "Tooling" },
  { name: "Git", Icon: SiGit, level: 8, years: "2+", group: "Tooling" },
  { name: "JUnit 5", Icon: SiJunit5, level: 8, years: "1+", group: "Testing" },
  { name: "Postman", Icon: SiPostman, level: 8, years: "1+", group: "Tooling" },
  { name: "React", Icon: SiReact, level: 6, years: "1+", group: "Frontend" },
  { name: "JavaScript", Icon: SiJavascript, level: 7, years: "2+", group: "Languages" },
];

const technologies = [
  { name: "Java", Icon: SiJava },
  { name: "Spring Boot", Icon: SiSpringboot },
  { name: "Kafka", Icon: SiApachekafka },
  { name: "Redis", Icon: SiRedis },
  { name: "MySQL", Icon: SiMysql },
  { name: "Docker", Icon: SiDocker },
  { name: "React", Icon: SiReact },
];

const stats = [
  { value: "60", suffix: "+", label: "production REST endpoints shipped" },
  { value: "30", suffix: "%", label: "faster API responses via caching & tuning" },
  { value: "50", suffix: "%", label: "faster deployments with Docker & CI/CD" },
  { value: "85", suffix: "%", label: "test coverage with JUnit & Mockito" },
];

function CaseVisual({ project }) {
  const isPayments = project.tone === "payments";

  return (
    <div className={`case-visual case-visual--${project.tone}`} aria-label={`${project.company} system visual`}>
      <div className="case-visual__glow" />
      <div className="case-visual__meta">
        <span>{project.discipline}</span>
        <span>LIVE SYSTEM / {project.number}</span>
      </div>
      <div className="case-visual__window">
        <div className="case-visual__window-bar">
          <span className="window-dots"><i /><i /><i /></span>
          <span>{project.systemLabel}</span>
          <span className="window-secure">● secure</span>
        </div>
        {isPayments ? (
          <div className="screen">
            <aside className="screen__rail"><span /><span className="is-active" /><span /><span /></aside>
            <div className="screen__body">
              <div className="screen__headline">
                <div><small>PAYMENT AUTHORIZATION</small><strong>Stripe Checkout</strong></div>
                <span>99.9% success</span>
              </div>
              <div className="screen__chart">
                <div className="chart-grid" />
                <svg viewBox="0 0 470 146" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M0 117 C37 115 54 99 79 104 S117 76 144 84 S189 58 214 70 S264 41 290 55 S334 34 363 44 S423 12 470 18" />
                  <path className="area" d="M0 117 C37 115 54 99 79 104 S117 76 144 84 S189 58 214 70 S264 41 290 55 S334 34 363 44 S423 12 470 18 V146 H0 Z" />
                </svg>
                <span className="chart-point chart-point--one" />
                <span className="chart-point chart-point--two" />
              </div>
              <div className="screen__cards">
                <span><small>Idempotency</small><b>Exactly-once</b></span>
                <span><small>HMAC</small><b>Verified</b></span>
                <span><small>Latency</small><b>−30%</b></span>
              </div>
            </div>
          </div>
        ) : project.tone === "platform" ? (
          <div className="screen">
            <aside className="screen__rail"><span>BD</span><span className="is-active">TS</span><span>DP</span><span>RL</span></aside>
            <div className="screen__body">
              <div className="screen__headline"><div><small>CI/CD PIPELINE</small><strong>microservices release</strong></div><span>−50% time</span></div>
              <div className="offer-flow">
                <span className="offer-flow__line" />
                <div className="offer-flow__node"><i>01</i><b>Build</b><small>Maven</small></div>
                <div className="offer-flow__node"><i>02</i><b>Test</b><small>JUnit 5</small></div>
                <div className="offer-flow__node is-result"><i>03</i><b>Deploy</b><small>Docker</small></div>
              </div>
              <div className="screen__rule"><span>IF <b>tests green</b></span><i>+</i><span>AND <b>image built</b></span><em>SHIPPED</em></div>
            </div>
          </div>
        ) : (
          <div className="screen">
            <aside className="screen__rail"><span>DS</span><span className="is-active">SC</span><span>TS</span><span>SH</span></aside>
            <div className="screen__body">
              <div className="screen__headline"><div><small>API LIFECYCLE</small><strong>jwt-secured.rest</strong></div><span>85% covered</span></div>
              <div className="offer-flow offer-flow--four">
                <span className="offer-flow__line" />
                <div className="offer-flow__node is-done"><i>01</i><b>Design</b><small>Contract</small></div>
                <div className="offer-flow__node is-active"><i>02</i><b>Secure</b><small>JWT</small></div>
                <div className="offer-flow__node"><i>03</i><b>Test</b><small>85%</small></div>
                <div className="offer-flow__node is-result"><i>04</i><b>Ship</b><small>REST</small></div>
              </div>
              <div className="screen__rule"><span>IF <b>jwt valid</b></span><i>+</i><span>AND <b>tests pass</b></span><em>MERGED</em></div>
            </div>
          </div>
        )}
      </div>
      <div className="case-visual__footer"><span>{project.name}</span><span>System status <i /> operational</span></div>
    </div>
  );
}

function LogoMark() {
  return (
    <svg className="wordmark__mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="lm-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#171b2c" />
          <stop offset="1" stopColor="#080a12" />
        </linearGradient>
        <linearGradient id="lm-beam" gradientUnits="userSpaceOnUse" x1="25" y1="35" x2="39" y2="35">
          <stop offset="0" stopColor="#818cf8" />
          <stop offset="0.55" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
        <radialGradient id="lm-sheen" cx="0.3" cy="0.16" r="0.95">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.1" />
          <stop offset="0.55" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <filter id="lm-soft" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3.2" />
        </filter>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#lm-bg)" />
      <rect width="64" height="64" rx="16" fill="url(#lm-sheen)" />
      <rect x="0.6" y="0.6" width="62.8" height="62.8" rx="15.4" fill="none" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1.2" />
      <g fill="none" strokeLinecap="round" strokeWidth="6.5">
        <path d="M21 46 L32 18" stroke="#eef1fb" />
        <path d="M43 46 L32 18" stroke="#eef1fb" strokeOpacity="0.92" />
        <path d="M25 35 H39" stroke="url(#lm-beam)" filter="url(#lm-soft)" opacity="0.65" />
        <path d="M25 35 H39" stroke="url(#lm-beam)" />
      </g>
    </svg>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("top");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(() => localStorage.getItem("portfolio-theme") === "light");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.style.colorScheme = isLightMode ? "light" : "dark";
    localStorage.setItem("portfolio-theme", isLightMode ? "light" : "dark");
  }, [isLightMode]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 18);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("[data-nav-section]"));
    const updateActiveSection = () => {
      const line = window.scrollY + window.innerHeight * 0.35;
      let current = sections.length ? sections[0].id : "top";
      sections.forEach((section) => {
        if (section.offsetTop <= line) current = section.id;
      });
      if (sections.length && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40) {
        current = sections[sections.length - 1].id;
      }
      setActiveSection(current);
    };
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    const revealables = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    revealables.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className={`portfolio ${isLightMode ? "portfolio--light" : ""}`}>
      <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Aarti Kumari home">
          <LogoMark />
          <span className="wordmark__name">aarti<span className="grad">.dev</span></span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              className={activeSection === item.id ? "is-active" : ""}
              href={`#${item.id}`}
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <div className="header-socials">
            {socials.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon /></a>
            ))}
          </div>
          <span className="header-divider" aria-hidden="true" />
          <button
            className="icon-button"
            type="button"
            onClick={() => setIsLightMode((light) => !light)}
            aria-label={isLightMode ? "Switch to dark theme" : "Switch to light theme"}
          >
            {isLightMode ? <FiMoon /> : <FiSun />}
          </button>
          <button
            className="icon-button menu-toggle"
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      <nav
        className={`mobile-nav ${isMenuOpen ? "mobile-nav--open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-nav__title">Navigate</div>
        {navigationItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>
            <span>{item.index}</span>{item.label}<FiArrowUpRight />
          </a>
        ))}
        <a className="mobile-nav__resume" href={resumePdf} download onClick={closeMenu} tabIndex={isMenuOpen ? 0 : -1}>Download résumé <FiDownload /></a>
      </nav>

      <main>
        <section className="hero" id="top" data-nav-section aria-labelledby="hero-title">
          <div className="aurora" aria-hidden="true"><span /><span /><span /></div>
          <div className="hero__grid" aria-hidden="true" />
          <div className="shell hero__content">
            <div className="hero__copy">
              <p className="badge"><span className="badge__dot" /> Java Backend Engineer · NVIDIA</p>
              <h1 id="hero-title">
                Engineering <span className="grad">resilience</span> into systems where uptime matters.
              </h1>
              <p className="hero__intro">
                I’m Aarti Kumari — a Java full-stack developer. I build and support enterprise backends —
                Spring Boot microservices, secure payment APIs, and the data layers beneath them — with
                60+ production endpoints already in the wild.
              </p>
              <div className="hero__actions">
                <a className="btn btn--primary" href="#experience">View experience <FiArrowDown /></a>
                <a className="btn btn--ghost" href={resumePdf} download>Download résumé <FiDownload /></a>
              </div>
              <div className="hero__socials">
                {socials.map(({ href, label, Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}><Icon /></a>
                ))}
              </div>
            </div>

            <div className="hero__visual" aria-label="Code card representing Aarti's engineering profile">
              <div className="hero__ring" aria-hidden="true" />
              <div className="code-card">
                <div className="code-card__bar"><span className="window-dots"><i /><i /><i /></span><span>Engineer.java</span><span className="code-card__lang">Java</span></div>
                <pre className="code-card__body">
<span className="c">{"// backend engineer, full-stack"}</span>{"\n"}
<span className="k">@Component</span>{"\n"}
<span className="k">class</span> <span className="v">Engineer</span> {"{"}{"\n"}
{"  "}String name = <span className="s">"Aarti Kumari"</span>;{"\n"}
{"  "}String role = <span className="s">"Java Backend Engineer"</span>;{"\n"}
{"  "}String[] stack = {"{"}<span className="s">"Java 17"</span>, <span className="s">"Spring Boot"</span>, <span className="s">"MySQL"</span>{"}"};{"\n"}
{"  "}String focus = <span className="s">"resilient, secure, observable"</span>;{"\n"}
{"  "}String ship() {"{"} <span className="k">return</span> <span className="s">"reliability"</span>; {"}"}{"\n"}
{"}"}<span className="caret" />
                </pre>
              </div>
              <div className="float-chip float-chip--one"><SiSpringboot /> Spring Boot</div>
              <div className="float-chip float-chip--two"><SiApachekafka /> Kafka</div>
              <div className="float-chip float-chip--three"><SiMysql /> MySQL</div>
            </div>
          </div>
          <div className="hero__scroll"><i /><span>scroll to explore</span></div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[0, 1].map((copy) => (
              <div className="marquee__group" key={copy}>
                {technologies.map(({ name, Icon }) => (
                  <span key={`${copy}-${name}`}><Icon />{name}</span>
                ))}
                <span className="marquee__star">✦</span>
                <span>Microservices architecture</span>
                <span className="marquee__star">✦</span>
                <span>Production resilience</span>
                <span className="marquee__star">✦</span>
              </div>
            ))}
          </div>
        </div>

        <section className="stats" aria-label="Career evidence">
          <div className="shell stats__grid">
            {stats.map((stat, index) => (
              <div className="stat-card" key={stat.label} data-reveal style={{ transitionDelay: `${index * 90}ms` }}>
                <strong className="grad">{stat.value}<span>{stat.suffix}</span></strong>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="experience shell" id="experience" data-nav-section aria-labelledby="experience-title">
          <div className="section-head" data-reveal>
            <p className="eyebrow"><span className="eyebrow__index">01</span> Experience</p>
            <h2 id="experience-title">Built through <span className="grad">harder problems.</span></h2>
            <p className="section-head__copy">From internship to NVIDIA in a year — enterprise Java backends, the services shipped inside each role, and the outcomes to prove it.</p>
          </div>

          <div className="xp-list">
            {experience.map((item, index) => (
              <article className="xp" key={item.company} data-reveal style={{ transitionDelay: `${index * 80}ms` }}>
                <div className="xp__head">
                  <span className="xp__tile">{item.number}</span>
                  <div className="xp__id">
                    <h3>{item.company}</h3>
                    <p className="xp__meta">
                      <span>{item.tenure}</span>
                      <i>·</i>
                      <span>{item.location}</span>
                    </p>
                  </div>
                  <div className="xp__when">
                    <span className="xp__period">{item.period}</span>
                  </div>
                </div>

                <div className="xp__body">
                  <ul className="xp__roles">
                    {item.roles.map((role) => (
                      <li className="xp__role" key={role.title}>
                        <div className="xp__role-head">
                          <h4>{role.title}</h4>
                          <span>{role.period}</span>
                        </div>
                        <ul className="xp__points">
                          {role.points.map((point) => <li key={point}>{point}</li>)}
                        </ul>
                      </li>
                    ))}
                  </ul>

                  <aside className="xp__aside">
                    <CaseVisual project={item} />
                    <div className="case-metrics">
                      {item.metrics.map((metric) => (
                        <div key={metric.label}>
                          <strong className="grad">{metric.value}</strong>
                          <span>{metric.label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="case-stack">
                      <span className="case-stack__label">Stack</span>
                      {item.stack.map((tag) => <span className="case-stack__tag" key={tag}>{tag}</span>)}
                    </div>
                  </aside>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="approach" id="approach" data-nav-section aria-labelledby="approach-title">
          <div className="approach__glow" aria-hidden="true" />
          <div className="shell">
            <div className="section-head" data-reveal>
              <p className="eyebrow"><span className="eyebrow__index">02</span> How I build</p>
              <h2 id="approach-title">From first endpoint <span className="grad">to last mile.</span></h2>
              <p className="section-head__copy">Backend engineering isn’t just endpoints. It’s understanding how each layer’s decision changes every layer above it.</p>
            </div>
            <div className="capability-grid">
              {capabilities.map((capability, index) => (
                <article className="capability-card" key={capability.number} data-reveal style={{ transitionDelay: `${index * 80}ms` }}>
                  <div className="capability-card__top">
                    <span className="capability-card__icon"><capability.Icon /></span>
                    <span className="capability-card__number">{capability.number}</span>
                  </div>
                  <h3>{capability.title}</h3>
                  <p>{capability.copy}</p>
                  <ol className="capability-card__points">
                    {capability.points.map((point) => <li key={point}>{point}</li>)}
                  </ol>
                  <div className="capability-card__meta">
                    <span className="capability-card__tag">{capability.tag}</span>
                    <span className="capability-card__footer">{capability.footer}</span>
                  </div>
                </article>
              ))}
            </div>
            <div className="technology-row" data-reveal>
              <span>In the toolkit</span>
              <div>{technologies.map(({ name, Icon }) => <span key={name}><Icon />{name}</span>)}</div>
            </div>
          </div>
        </section>

        <section className="background shell" id="background" data-nav-section aria-labelledby="background-title">
          <div className="section-head" data-reveal>
            <p className="eyebrow"><span className="eyebrow__index">03</span> Background</p>
            <h2 id="background-title">The foundations <span className="grad">behind the craft.</span></h2>
            <p className="section-head__copy">Formal training and the full working toolkit — the same detail that appears on the résumé, in the open.</p>
          </div>

          <div className="edu-card" data-reveal>
            <span className="edu-card__icon"><FiBook /></span>
            <div className="edu-card__body">
              <h3>Master of Computer Applications (MCA)</h3>
              <p>Sir M. Visvesvaraya Institute of Technology · Bengaluru, India</p>
            </div>
            <div className="edu-card__meta">
              <span className="edu-card__period">2022 — 2024</span>
              <span className="edu-card__cgpa">CGPA 8.68</span>
            </div>
          </div>

          <div className="edu-card" data-reveal>
            <span className="edu-card__icon"><FiAward /></span>
            <div className="edu-card__body">
              <h3>Certifications</h3>
              <p>Java Developer — KodNest · Google Cloud Computing Foundations — NPTEL</p>
            </div>
            <div className="edu-card__meta">
              <span className="edu-card__period">KodNest · NPTEL</span>
              <span className="edu-card__cgpa">02 earned</span>
            </div>
          </div>

          <div className="tech-grid">
            {techCards.map((tech, index) => (
              <article className="tech-card" key={tech.name} data-reveal style={{ transitionDelay: `${index * 40}ms` }}>
                <span className="tech-card__ring" style={{ "--p": tech.level * 10 }} aria-hidden="true">
                  <i><tech.Icon /></i>
                </span>
                <h4>{tech.name}</h4>
                <p className="tech-card__score"><strong>{tech.level}</strong><span>/10</span></p>
                <p className="tech-card__years">{tech.years} yrs · {tech.group}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact" data-nav-section aria-labelledby="contact-title">
          <div className="contact__glow" aria-hidden="true" />
          <div className="shell contact__content" data-reveal>
            <p className="eyebrow eyebrow--center"><span className="eyebrow__index">04</span> Start a conversation</p>
            <h2 id="contact-title">Have a system worth <span className="grad">obsessing over?</span></h2>
            <p className="contact__copy">Let’s talk about the problem, the scale it needs to reach, and the service it needs to become.</p>
            <p className="contact__meta"><FiMapPin /> Bengaluru, India <i>·</i> <a href="tel:+919113422730">+91 91134 22730</a></p>
            <a className="btn btn--primary btn--large" href="mailto:aartikjha365@gmail.com">aartikjha365@gmail.com <FiArrowUpRight /></a>
            <div className="contact__links">
              {socials.map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"><Icon /> {label}</a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer shell">
        <a className="wordmark" href="#top" aria-label="Back to top"><LogoMark /><span className="wordmark__name">aarti<span className="grad">.dev</span></span></a>
        <p>Designed & engineered with intent · © {new Date().getFullYear()}</p>
        <a href="#top">Back to top <FiArrowUpRight /></a>
      </footer>
    </div>
  );
}

export default App;
