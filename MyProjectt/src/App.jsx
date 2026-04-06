import './App.css'

const profile = {
  name: 'SAMPHINEHAS S',
  role: 'AI & ML Engineering Student | MERN Stack Developer',
  headline:
    'Building practical AI and web experiences that turn ideas into usable products.',
  summary:
    'I am a B.E. CSE (AIML) student at Sri Eshwar College of Engineering with hands-on experience in MERN stack development, AI-powered learning tools, and immersive simulation projects. I enjoy building applications that blend strong problem-solving with clean user experiences.',
  phone: '8667370527',
  email: 'samphinehas.s2024aiml@sece.ac.in',
  institution: 'Sri Eshwar College of Engineering',
}

const stats = [
  { value: '7.45', label: 'CGPA up to 2nd semester' },
  { value: '3', label: 'Major projects built and presented' },
  { value: '250+', label: 'SkillRack problems solved' },
]

const education = [
  {
    title: 'B.E CSE (AIML)',
    place: 'Sri Eshwar College of Engineering',
    detail: 'CGPA: 7.45 (up to 2nd sem)',
    period: '2024 - 2028',
  },
  {
    title: 'HSC',
    place: 'Kendriya Vidyalaya Coimbatore',
    detail: '82%',
    period: '2022 - 2024',
  },
  {
    title: 'SSLC',
    place: 'Kendriya Vidyalaya Coimbatore',
    detail: '88%',
    period: '2021 - 2022',
  },
]

const internship = {
  title: 'MERN Stack Intern',
  company: 'Better Tomorrow',
  period: '2025',
  project: 'FlavorVerse',
  summary:
    'Developed a full-stack recipe finder web application using the MERN stack, enabling users to search, filter, and explore recipes based on ingredients, cuisine, and dietary preferences.',
  points: [
    'Built RESTful APIs, dynamic search, advanced filters, and CRUD operations for recipes and favorites.',
    'Created a responsive React interface with interactive animations for a smoother user experience.',
    'Implemented secure backend services with Express and Node.js and a scalable MongoDB plus Mongoose architecture.',
  ],
  stack: ['React JS', 'Node JS', 'Express JS', 'MongoDB'],
}

const projects = [
  {
    title: 'Socratic AI Tutor',
    subtitle: 'Intelligent AI-Based Learning Assistant',
    summary:
      'Developed an AI-powered tutoring system based on the Socratic method to improve conceptual understanding through guided questioning.',
    points: [
      'Used NLP and LLMs to analyze student queries and generate step-by-step, thought-provoking responses instead of direct answers.',
      'Designed a responsive web interface for real-time interaction.',
      'Added adaptive learning features to personalize difficulty and track student progress.',
    ],
    stack: ['AI', 'NLP', 'LLMs', 'Web UI'],
  },
  {
    title: 'VR-Based Disaster Rescue Game',
    subtitle: 'Immersive Emergency Response Simulation',
    summary:
      'Built a disaster rescue simulation game in Unity to create an immersive emergency response experience.',
    points: [
      'Designed interactive scenarios where players escape from a fire-affected building while completing rescue tasks.',
      'Implemented realistic fire effects, task-based objectives, health indicators, and interactive VR controls.',
      'Focused on improving decision-making skills and emergency preparedness through experiential learning.',
    ],
    stack: ['Unity', 'VR', 'Simulation Design'],
  },
  {
    title: 'AccessLens',
    subtitle: 'AI Navigation Assistant for the Visually Impaired',
    summary:
      'Developed an assistive AI system that helps visually impaired users navigate safely with real-time audio guidance.',
    points: [
      'Used YOLO for real-time object detection to identify obstacles and hazards.',
      'Processed live camera input to provide immediate environmental awareness.',
      'Focused on accessibility and safer day-to-day navigation support.',
    ],
    stack: ['YOLO', 'Computer Vision', 'Assistive AI'],
  },
]

const certifications = [
  'Web Development | Udemy | 2025',
  'C Training by IIT Bombay | 2024',
  'C++ Training by IIT Bombay | 2024',
  'HTML, CSS for Beginner | Udemy | 2024',
]

const achievements = [
  'Attended the OWASP meetup organized by Kumaraguru College of Technology.',
  'Participated in a 24-hour National Hackathon conducted by N.G.P College.',
  'Participated in Smart India Hackathon at the college level.',
  'Secured third prize in a National Level 8-hour Hackathon at MKCE.',
]

const codingProfiles = [
  {
    name: 'LeetCode',
    stat: 'Solved 20+ problems',
    detail: 'Global Rank: 3,687,265',
  },
  {
    name: 'SkillRack',
    stat: 'Solved 250+ problems',
    detail: 'Profile link can be added here',
  },
]

const skillGroups = [
  {
    title: 'Programming',
    items: ['C', 'C++', 'Python', 'Java', 'JavaScript'],
  },
  {
    title: 'Core Concepts',
    items: ['DSA', 'OOP', 'DBMS'],
  },
  {
    title: 'Web Technologies',
    items: ['HTML', 'CSS', 'JavaScript', 'React JS'],
  },
  {
    title: 'Database',
    items: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Tools',
    items: [
      'VS Code',
      'IntelliJ',
      'Canva',
      'Excel',
      'PowerPoint',
      'GitHub',
      'Postman',
      'Google Colab',
      'MS Office',
      'CapCut',
    ],
  },
]

const profiles = ['GitHub', 'LinkedIn']

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top">
            <span className="brand-mark">SS</span>
            <span>{profile.name}</span>
          </a>

          <nav className="site-nav" aria-label="Primary">
            <a href="#education">Education</a>
            <a href="#internship">Internship</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="nav-cta" href={`mailto:${profile.email}`}>
            Contact Me
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{profile.institution}</p>
              <h1>{profile.role}</h1>
              <p className="hero-text">{profile.headline}</p>
              <p className="hero-location">{profile.summary}</p>

              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  View Projects
                </a>
                <a className="button button-secondary" href={`mailto:${profile.email}`}>
                  Email Me
                </a>
              </div>

              <div className="contact-strip">
                <a href={`tel:${profile.phone}`}>Phone: {profile.phone}</a>
                <a href={`mailto:${profile.email}`}>Email: {profile.email}</a>
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
                <p className="card-label">Quick Snapshot</p>
                <h2>Student developer focused on AI, accessibility, and full-stack products.</h2>
                <p>
                  My portfolio brings together AI tutoring, assistive technology, virtual
                  reality simulation, and MERN stack application development.
                </p>

                <div className="chip-list">
                  <span>AI / ML</span>
                  <span>MERN Stack</span>
                  <span>React JS</span>
                  <span>Problem Solving</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="logo-strip">
          <div className="container logo-strip-inner">
            <p>Focused on learning fast, building real projects, and growing through hackathons and internships.</p>
            <div className="logo-cloud" aria-label="Public profiles">
              {profiles.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section" id="education">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Education</p>
              <h2>Academic background and core learning journey.</h2>
            </div>

            <div className="timeline">
              {education.map((item) => (
                <article className="timeline-item" key={`${item.title}-${item.period}`}>
                  <span className="timeline-period">{item.period}</span>
                  <h3>{item.title}</h3>
                  <p className="timeline-company">{item.place}</p>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section" id="internship">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Internship</p>
              <h2>Industry experience built through a MERN stack internship.</h2>
            </div>

            <article className="feature-panel">
              <div className="feature-panel-top">
                <div>
                  <span className="timeline-period">{internship.period}</span>
                  <h3>
                    {internship.title} - {internship.company}
                  </h3>
                  <p className="timeline-company">{internship.project}</p>
                </div>
                <div className="project-tags" aria-label="Internship stack">
                  {internship.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>

              <p className="feature-summary">{internship.summary}</p>
              <ul className="detail-list">
                {internship.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="content-section" id="projects">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Projects</p>
              <h2>Projects spanning AI tutoring, VR simulation, and assistive technology.</h2>
            </div>

            <div className="project-grid project-grid-wide">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-topline">
                    <span>{project.subtitle}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <ul className="detail-list">
                    {project.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
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

        <section className="content-section" id="certifications">
          <div className="container split-grid">
            <div>
              <div className="section-heading compact-heading">
                <p className="eyebrow">Certifications</p>
                <h2>Courses and training completed.</h2>
              </div>
              <div className="stacked-list">
                {certifications.map((item) => (
                  <article className="list-card" key={item}>
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <div className="section-heading compact-heading">
                <p className="eyebrow">Achievements</p>
                <h2>Hackathons, meetups, and participation highlights.</h2>
              </div>
              <div className="stacked-list">
                {achievements.map((item) => (
                  <article className="list-card" key={item}>
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="content-section" id="profiles">
          <div className="container split-grid">
            <div>
              <div className="section-heading compact-heading">
                <p className="eyebrow">Coding Profiles</p>
                <h2>Practice and consistency through coding platforms.</h2>
              </div>
              <div className="service-grid service-grid-stack">
                {codingProfiles.map((item) => (
                  <article className="service-card" key={item.name}>
                    <h3>{item.name}</h3>
                    <p>{item.stat}</p>
                    <p className="muted-top">{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>

            <div id="skills">
              <div className="section-heading compact-heading">
                <p className="eyebrow">Skills</p>
                <h2>Technical strengths across programming, web, and tools.</h2>
              </div>
              <div className="skill-groups">
                {skillGroups.map((group) => (
                  <article className="service-card" key={group.title}>
                    <h3>{group.title}</h3>
                    <div className="project-tags">
                      {group.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="container contact-panel">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s connect for projects, internships, and opportunities.</h2>
            <p className="footer-text">
              You can reach me directly by phone or email. GitHub and LinkedIn can be
              added once the profile URLs are available.
            </p>
          </div>

          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="button button-secondary" href={`tel:${profile.phone}`}>
              {profile.phone}
            </a>
            <div className="social-links" aria-label="Social links">
              {profiles.map((item) => (
                <span className="static-pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
