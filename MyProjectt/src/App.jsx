import './App.css'

const profile = {
  name: 'Alex Morgan',
  role: 'Frontend developer building polished digital products',
  location: 'Based in India, collaborating worldwide',
  blurb:
    'I design and build fast, memorable interfaces for startups, agencies, and founders who want their product to feel premium from the first click.',
  availability: 'Available for freelance projects and full-time roles',
  email: 'hello@alexmorgan.dev',
  resumeLabel: 'Request Resume',
}

const stats = [
  { value: '5+', label: 'Years crafting product experiences' },
  { value: '18', label: 'Launches delivered across web and mobile' },
  { value: '92%', label: 'Clients who return for a second build' },
]

const featuredProjects = [
  {
    title: 'Northstar Commerce',
    summary:
      'A storefront redesign focused on mobile speed, clearer product storytelling, and a smoother checkout journey.',
    impact: '38% increase in mobile conversions after launch',
    stack: ['React', 'Design systems', 'Performance'],
  },
  {
    title: 'Pulse Analytics',
    summary:
      'A SaaS dashboard with modular data cards, guided onboarding, and a visual language built for dense information.',
    impact: 'Cut onboarding friction by 41% in the first month',
    stack: ['Product UI', 'Dashboard UX', 'Accessibility'],
  },
  {
    title: 'Canvas Studio',
    summary:
      'A personal brand and booking experience for a creative studio that needed personality without sacrificing clarity.',
    impact: 'Tripled qualified inbound leads from the website',
    stack: ['Brand web', 'Motion', 'Responsive design'],
  },
]

const experience = [
  {
    period: '2024 - Present',
    title: 'Senior Frontend Developer',
    company: 'Independent',
    description:
      'Partnering with early-stage teams to take products from rough ideas to production-ready interfaces.',
  },
  {
    period: '2021 - 2024',
    title: 'Product Designer & Developer',
    company: 'Orbit Labs',
    description:
      'Led design-to-code delivery for marketing sites, internal tools, and customer-facing dashboards.',
  },
  {
    period: '2019 - 2021',
    title: 'UI Engineer',
    company: 'Studio Nine',
    description:
      'Built reusable components, improved responsiveness, and helped turn static mockups into maintainable React apps.',
  },
]

const services = [
  {
    title: 'Portfolio & Brand Sites',
    text: 'Distinctive landing pages and personal brands that feel intentional instead of template-driven.',
  },
  {
    title: 'Product Interface Design',
    text: 'Clean, scalable screens for SaaS products, dashboards, internal tools, and MVPs.',
  },
  {
    title: 'Frontend Build & Polish',
    text: 'Responsive implementation, performance tuning, accessibility fixes, and launch-ready refinement.',
  },
]

const testimonials = [
  {
    quote:
      'Alex brought structure to the chaos and gave our product a visual identity that finally matched the quality of the service.',
    author: 'Priya Mehta',
    role: 'Founder, Northstar Commerce',
  },
  {
    quote:
      'Fast, thoughtful, and unusually detail-oriented. Every screen felt sharper after Alex touched it.',
    author: 'Daniel Brooks',
    role: 'Product Lead, Pulse Analytics',
  },
]

const links = [
  { label: 'GitHub', href: 'https://github.com/alexmorgan' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alexmorgan' },
  { label: 'Behance', href: 'https://www.behance.net/alexmorgan' },
]

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top">
            <span className="brand-mark">AM</span>
            <span>Alex Morgan</span>
          </a>

          <nav className="site-nav" aria-label="Primary">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="nav-cta" href={`mailto:${profile.email}`}>
            Let&apos;s Talk
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{profile.availability}</p>
              <h1>{profile.role}</h1>
              <p className="hero-text">{profile.blurb}</p>
              <p className="hero-location">{profile.location}</p>

              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  Explore Projects
                </a>
                <a className="button button-secondary" href={`mailto:${profile.email}`}>
                  {profile.resumeLabel}
                </a>
              </div>

              <ul className="stat-grid" aria-label="Highlights">
                {stats.map((stat) => (
                  <li key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="hero-card" aria-label="Profile Snapshot">
              <div className="portrait-glow" aria-hidden="true" />
              <div className="portrait-ring">
                <div className="portrait-core">
                  <span>{profile.name}</span>
                </div>
              </div>

              <div className="hero-card-body">
                <p className="card-label">Current focus</p>
                <h2>Designing bold interfaces with calm, usable systems underneath.</h2>
                <p>
                  I like crisp structure, strong typography, fast performance, and just
                  enough motion to make a site feel alive.
                </p>

                <div className="chip-list">
                  <span>React</span>
                  <span>UI Systems</span>
                  <span>Motion</span>
                  <span>Accessibility</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="logo-strip">
          <div className="container logo-strip-inner">
            <p>Trusted by teams building SaaS, ecommerce, creator brands, and internal tools.</p>
            <div className="logo-cloud" aria-label="Project categories">
              <span>Startups</span>
              <span>Studios</span>
              <span>Founders</span>
              <span>Agencies</span>
              <span>Product Teams</span>
            </div>
          </div>
        </section>

        <section className="content-section" id="work">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Selected Work</p>
              <h2>Recent projects shaped for clarity, speed, and personality.</h2>
            </div>

            <div className="project-grid">
              {featuredProjects.map((project, index) => (
                <article
                  className={`project-card ${index === 0 ? 'project-card-featured' : ''}`}
                  key={project.title}
                >
                  <div className="project-topline">
                    <span>0{index + 1}</span>
                    <p>{project.impact}</p>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="project-tags" aria-label={`${project.title} skills`}>
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section about-section" id="about">
          <div className="container about-grid">
            <div className="about-copy">
              <p className="eyebrow">About</p>
              <h2>A portfolio should feel like a point of view, not a placeholder.</h2>
              <p>
                My work sits between design and development. I care about the visual
                language, but I care just as much about how it scales, performs, and
                supports the people using it every day.
              </p>
              <p>
                When I join a project, I usually help shape the message, refine the
                interaction model, and build the frontend so the final result keeps its
                character all the way to production.
              </p>
            </div>

            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={`${item.period}-${item.company}`}>
                  <span className="timeline-period">{item.period}</span>
                  <h3>{item.title}</h3>
                  <p className="timeline-company">{item.company}</p>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section" id="services">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Services</p>
              <h2>Ways we can work together.</h2>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section testimonials-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Client Notes</p>
              <h2>Feedback from people I&apos;ve built with.</h2>
            </div>

            <div className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <blockquote className="testimonial-card" key={testimonial.author}>
                  <p>&ldquo;{testimonial.quote}&rdquo;</p>
                  <footer>
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="container contact-panel">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Have something ambitious in mind?</h2>
            <p className="footer-text">
              I&apos;m open to product design partnerships, frontend builds, and portfolio
              refreshes that need a sharper visual identity.
            </p>
          </div>

          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <div className="social-links" aria-label="Social links">
              {links.map((link) => (
                <a href={link.href} key={link.label} rel="noreferrer" target="_blank">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
