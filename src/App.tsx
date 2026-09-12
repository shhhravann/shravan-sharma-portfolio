import { useEffect, useRef, useState } from 'react';
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ExternalLink,
  Menu,
  X,
} from 'lucide-react';

type Project = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image?: string;
  imageAlt: string;
  kind: 'facto' | 'ecommerce' | 'cafe' | 'bank';
  size?: 'large';
  overview: string;
  objective: string;
  build: string;
  role: string;
  stack: string[];
  features: string[];
  approach: string;
  learning: string;
  links: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    id: 'facto',
    index: '01 / AI + NLP',
    title: 'FACTO',
    subtitle: 'Real-Time Misinformation Detection System',
    description:
      'An interactive dashboard focused on information verification and misinformation awareness.',
    tags: ['Interactive dashboard', 'Information verification', 'Misinformation awareness'],
    image: '/assets/projects/facto.jpg',
    imageAlt: 'Facto misinformation detection dashboard',
    kind: 'facto',
    size: 'large',
    overview:
      'Facto is an information and misinformation-focused interactive dashboard for exploring credibility signals and structured news analysis. The documented project work improved fake news detection accuracy by 18%.',
    objective:
      'Make information verification easier to explore through a structured, interactive dashboard experience.',
    build:
      'Built an interactive dashboard that brings credibility checks, prediction output, and supporting analysis into one place.',
    role:
      'Built the project experience around misinformation detection, structured analysis, and making model output easier to understand.',
    stack: [
      'Transformer-based embeddings',
      'Text preprocessing',
      'Tokenization',
      'Sentiment analysis',
      'Semantic similarity',
      'Fake news classification',
      'REST APIs',
      'CI/CD',
      'OpenAI Whisper',
      'Chart.js',
    ],
    features: [
      'Real-time news credibility verification',
      'Speech-to-text transcription with OpenAI Whisper',
      'Prediction and confidence-score dashboards',
      'Social trend analytics',
      'Blockchain-based voting for transparency',
    ],
    approach:
      'The experience is organized around turning complex information signals into a clearer dashboard flow for checking and exploring news credibility.',
    learning:
      'The project reinforced how much clarity matters when presenting uncertain or sensitive information.',
    links: [],
  },
  {
    id: 'ecommerce-admin',
    index: '02 / PRODUCT',
    title: 'SERVER-RENDERED E-COMMERCE PRODUCT MANAGEMENT DASHBOARD',
    subtitle: 'Product management interface for an e-commerce system',
    description:
      'A real-world product management dashboard designed around server-side rendering, fast page loads, and a structured admin experience.',
    tags: ['Server-rendered', 'Product CRUD', 'Admin experience'],
    image: '/assets/projects/ecommerce-admin.jpg',
    imageAlt: 'E-commerce admin dashboard with inventory charts',
    kind: 'ecommerce',
    overview:
      'A product management dashboard built around server-side rendering for an e-commerce system, with a focus on fast page loads, efficient product management, and a structured admin interface.',
    objective:
      'Design and develop a server-side rendered admin dashboard for managing products in an e-commerce system.',
    build:
      'Built the admin flow around product CRUD, multi-step product creation, validation, visual data, secure image handling, and protected access.',
    role: 'Built the project myself, shaping the dashboard structure and the product management workflow.',
    stack: ['Next.js', 'React', 'Server-side rendering', 'Form validation', 'Charts / data visualization', 'Image upload / storage', 'Authentication'],
    features: ['Server-side rendering using Next.js', 'Product management CRUD', 'Multi-step product creation forms', 'Strong form validation', 'Interactive sales / stock visualizations', 'Secure image upload / storage', 'Authentication and authorization', 'Admin-only dashboard'],
    approach: 'The workflow is organized around an authenticated admin surface where product data can be created, edited, reviewed, and managed without losing the speed benefits of server-rendered pages.',
    learning: 'The project made the tradeoffs around admin workflows, validation, and server-rendered product experiences more tangible.',
    links: [],
  },
  {
    id: 'cafe-aroma',
    index: '03 / FULL-STACK',
    title: 'CAFÉ AROMA — FULL-STACK CAFÉ WEB EXPERIENCE',
    subtitle: 'A complete digital café experience',
    description:
      'A warm, responsive café experience built around menu browsing, ordering, cart interactions, and delivery details.',
    tags: ['Full-stack', 'Menu + ordering', 'Responsive interface'],
    image: '/assets/projects/cafe-aroma.jpg',
    imageAlt: 'Café Aroma website hero with food and coffee photography',
    kind: 'cafe',
    overview:
      'Café Aroma is a full-stack café web experience that takes a visitor from the landing page through menu browsing, ordering, cart review, delivery details, and contact.',
    objective:
      'Create a complete digital café experience that feels inviting while keeping the ordering journey clear.',
    build:
      'Built the café landing experience, menu browsing, ordering flow, cart interaction, delivery details, contact experience, and responsive interface.',
    role: 'Built the project myself from the café experience through the responsive user interface.',
    stack: ['Full-stack web experience', 'Responsive interface', 'Menu + ordering flow', 'Cart experience', 'Delivery details'],
    features: ['Café landing experience', 'Menu browsing', 'Ordering flow', 'Add-to-cart experience', 'Delivery details', 'Contact experience', 'Responsive interface'],
    approach: 'The experience keeps the visual warmth of a café while guiding visitors through the practical steps needed to browse, choose, review, and complete an order.',
    learning: 'The project was an exercise in balancing atmosphere with the clarity needed for a useful ordering experience.',
    links: [{ label: 'Live project', href: 'https://iridescent-choux-43f77c.netlify.app/' }],
  },
  {
    id: 'bank-management',
    index: '04 / SYSTEMS',
    title: 'BANK MANAGEMENT SYSTEM',
    subtitle: 'C++ Terminal-Based Bank Management System',
    description:
      'A terminal-based programming project focused on core C++ and object-oriented thinking.',
    tags: ['C++', 'OOP', 'Core programming'],
    imageAlt: 'Terminal-style preview for the Bank Management System project',
    kind: 'bank',
    overview:
      'A C++ terminal-based banking application built using object-oriented programming concepts. This is a console project, not a web application.',
    objective:
      'Practice designing a small banking system around classes, objects, data handling, and everyday banking operations.',
    build:
      'Built the terminal interface and core banking operations with C++, OOP, encapsulation, and file handling.',
    role: 'Built the project myself as a focused C++ and object-oriented programming exercise.',
    stack: ['C++', 'Object-Oriented Programming', 'Classes and Objects', 'Encapsulation', 'File Handling'],
    features: ['Banking operations', 'CRUD-style data handling', 'Console / terminal interface', 'Account-focused workflows'],
    approach: 'The system keeps the interaction intentionally direct: a console menu exposes the banking operations while classes and file handling organize the underlying data.',
    learning: 'The project strengthened my understanding of how object-oriented structure and persistence work together in a small system.',
    links: [],
  },
];

const navItems = [
  ['About', 'about'],
  ['Work', 'work'],
  ['Journey', 'journey'],
  ['Contact', 'contact'],
];

const skillGroups = [
  {
    number: '01',
    title: 'Full-stack development',
    skills: [
      ['HTML', 'Semantic structure for the web.'],
      ['CSS', 'Visual systems, layout, and responsive interfaces.'],
      ['JavaScript', 'The language connecting frontend and backend exploration.'],
      ['React', 'Reusable interfaces and product-facing experiences.'],
      ['Node.js', 'Server-side JavaScript for full-stack projects.'],
      ['Express.js', 'A documented backend framework.'],
      ['REST APIs', 'Connecting product interfaces to useful services.'],
      ['Git', 'Version control for keeping experiments understandable.'],
      ['GitHub', 'A documented collaboration and project tool.'],
    ],
  },
  {
    number: '02',
    title: 'AI / ML',
    skills: [
      ['Python', 'A language I use while exploring data and intelligent systems.'],
      ['NumPy', 'A documented part of the data science toolkit.'],
      ['Pandas', 'Working with structured data and analysis.'],
      ['Machine learning fundamentals', 'Learning how models support useful problem solving.'],
      ['AI / ML workflows', 'Connecting exploration, evaluation, and product thinking.'],
    ],
  },
  {
    number: '03',
    title: 'Data science',
    skills: [
      ['Python', 'A language I use while learning through data.'],
      ['Data analysis', 'Turning structured information into clearer questions.'],
      ['Data visualization', 'Making patterns easier to see and discuss.'],
      ['Statistics fundamentals', 'Building the foundations behind better analysis.'],
    ],
  },
  {
    number: '04',
    title: 'DSA / computer science',
    skills: [
      ['C++', 'Core language and object-oriented project work.'],
      ['Data structures & algorithms', 'The foundation behind clearer problem solving.'],
      ['OOP', 'A core concept practiced in C++ work.'],
      ['Problem solving', 'Learning to break large questions into smaller ones.'],
      ['Algorithms', 'Thinking carefully about steps, tradeoffs, and outcomes.'],
    ],
  },
  {
    number: '05',
    title: 'Databases',
    skills: [
      ['SQL', 'Working with structured data and queries.'],
      ['MongoDB', 'Document-oriented data storage.'],
      ['PostgreSQL', 'A relational database I am learning and building with.'],
    ],
  },
  {
    number: '06',
    title: 'Tools',
    skills: [
      ['VS Code', 'The everyday workspace for learning and building.'],
      ['Git', 'Version control for keeping experiments understandable.'],
      ['GitHub', 'A documented collaboration and project tool.'],
    ],
  },
];

const activities = {
  cocurricular: [
    ['Naukri Campus Young Turks 2025', 'Certificate of Merit · 97.45 percentile'],
    ['Oracle Certified Foundations Associate', 'Agentic AI certification'],
    ['Oracle Cloud Infrastructure 2025', 'AI Foundations Associate'],
    ['Salesforce Agentforce', 'AI-powered CRM and intelligent automation workshop'],
    ['COMET’26 — World of Data Science and AI', 'Workshop'],
    ['COMET’26 — World of Consulting', 'Workshop'],
    ['COMET’26 — Introduction to Securities Markets', 'Workshop'],
    ['Bharatiya Antariksh Hackathon 2026', 'Participation / idea submission'],
    ['IEEE Day Quiz', 'Participation'],
    ['Internal Hackathon for Smart India Hackathon 2025', 'Participation'],
    ['QuizOff 2026 — India’s Biggest AI Quiz', 'Participation / recognition'],
    ['Udbhav 2024', 'Software category participation'],
    ['National Intellectual Property Awareness Mission', 'Participation'],
  ],
  extracurricular: [
    ['Poornima Manthan 2026', 'Participation'],
    ['4th National Environment Youth Parliament 2026', 'Regional round'],
    ['Advent 3.0 / Poornima MUN', 'Special mention'],
    ['IEEE DSSY-WLC 2025', 'Volunteer appreciation'],
    ['RINEX Campus Ambassador', 'Feb–Mar 2025'],
  ],
};

function getPath() {
  return window.location.pathname.replace(/\/+$/, '') || '/';
}

function ProjectVisual({
  project,
  onOpen,
  detail = false,
}: {
  project: Project;
  onOpen: () => void;
  detail?: boolean;
}) {
  return (
    <button
      className={`project-image-button ${detail ? 'detail-image-button' : ''} project-image-${project.kind}`}
      type="button"
      onClick={onOpen}
      aria-label={`View ${project.title} case study`}
    >
      {project.image ? (
        <img src={project.image} alt={project.imageAlt} loading={detail ? 'eager' : 'lazy'} />
      ) : (
        <span className="terminal-preview" aria-label="Terminal screenshot placeholder">
          <span className="terminal-bar"><i /><i /><i /><b>bank-management.cpp</b></span>
          <span className="terminal-lines">
            <span><b>$</b> ./bank_management</span>
            <span className="terminal-muted">BANK MANAGEMENT SYSTEM</span>
            <span>01  Create account</span>
            <span>02  View account</span>
            <span>03  Data handling</span>
            <span><b>$</b> _</span>
          </span>
        </span>
      )}
      {!detail && <span className="image-overlay">View case study <ArrowDownRight size={16} /></span>}
    </button>
  );
}

function SiteHeader({
  mobileOpen,
  setMobileOpen,
  scrolled,
  onNavigate,
  detail = false,
}: {
  mobileOpen: boolean;
  setMobileOpen: (value: boolean) => void;
  scrolled: boolean;
  onNavigate: (id: string) => void;
  detail?: boolean;
}) {
  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav">
        <a
          className="brand"
          href="/"
          onClick={(event) => {
            event.preventDefault();
            onNavigate('top');
          }}
          data-testid="link-brand"
        >
          <span className="brand-mark">S</span>
          Shravan Sharma
        </a>
        {detail ? (
          <a
            className="detail-back nav-detail-back"
            href="/#work"
            onClick={(event) => {
              event.preventDefault();
              onNavigate('work');
            }}
          >
            <ArrowLeft size={15} /> Back to work
          </a>
        ) : (
          <>
            <nav className="nav-links" aria-label="Primary navigation">
              {navItems.map(([label, id]) => (
                <a href={`#${id}`} key={id} onClick={() => onNavigate(id)} data-testid={`link-nav-${id}`}>
                  {label}
                </a>
              ))}
            </nav>
            <div className="nav-availability"><span className="pulse-dot" /> building in public</div>
            <button className="menu-toggle" type="button" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-label={mobileOpen ? 'Close menu' : 'Open menu'} data-testid="button-mobile-menu">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </>
        )}
      </div>
      {!detail && mobileOpen && (
        <nav className="container mobile-nav" aria-label="Mobile navigation">
          {navItems.map(([label, id]) => (
            <a href={`#${id}`} key={id} onClick={() => onNavigate(id)} data-testid={`link-mobile-${id}`}>{label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

function ProjectDetail({
  project,
  onNavigate,
}: {
  project: Project;
  onNavigate: (id: string) => void;
}) {
  const currentIndex = projects.findIndex((item) => item.id === project.id);
  const previous = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="project-detail">
      <section className="detail-hero">
        <div className="container">
          <div className="detail-heading">
            <div className="eyebrow reveal is-visible">{project.index}</div>
            <h1 className="detail-title reveal is-visible">{project.title}</h1>
            <p className="detail-subtitle reveal is-visible">{project.subtitle}</p>
          </div>
          <ProjectVisual project={project} onOpen={() => undefined} detail />
        </div>
      </section>

      <section className="detail-content">
        <div className="container detail-grid">
          <div className="detail-overview">
            <div className="eyebrow">Case study</div>
            <h2>Built to make the <em>question</em> clearer.</h2>
            <p>{project.overview}</p>
          </div>
          <div className="detail-facts">
            <div className="detail-fact">
              <span>Objective</span>
              <p>{project.objective}</p>
            </div>
            <div className="detail-fact">
              <span>What I built</span>
              <p>{project.build}</p>
            </div>
            <div className="detail-fact">
              <span>My role</span>
              <p>{project.role}</p>
            </div>
            <div className="detail-fact">
              <span>Tech stack</span>
              <div className="detail-tags">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
            </div>
            <div className="detail-fact">
              <span>Key features</span>
              <ul>{project.features.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </div>
        <div className="container detail-approach">
          <span className="eyebrow">Approach / how it works</span>
          <p>{project.approach}</p>
        </div>
        {project.links.length > 0 && (
          <div className="container detail-links">
            <span className="eyebrow">Project links</span>
            {project.links.map((link) => <a href={link.href} key={link.label} target="_blank" rel="noreferrer">{link.label} <ExternalLink size={14} /></a>)}
          </div>
        )}
        <div className="container detail-approach detail-learning">
          <span className="eyebrow">Challenges / learning</span>
          <p>{project.learning}</p>
        </div>
        <div className="container project-pagination">
          <a href={`/projects/${previous.id}`} onClick={(event) => { event.preventDefault(); onNavigate(previous.id); }}>
            <span><ArrowLeft size={15} /> Previous project</span>
            <strong>{previous.title}</strong>
          </a>
          <a href={`/projects/${next.id}`} onClick={(event) => { event.preventDefault(); onNavigate(next.id); }}>
            <span>Next project <ArrowRight size={15} /></span>
            <strong>{next.title}</strong>
          </a>
        </div>
      </section>
    </main>
  );
}

function HomePage({
  onProject,
  onNavigate,
}: {
  onProject: (project: Project) => void;
  onNavigate: (id: string) => void;
}) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <main className="portfolio">
      <section className="hero" id="top">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow hero-kicker reveal">Shravan Sharma / Developer / Creator</div>
            <h1 className="hero-title reveal"><span>From questions</span><span className="outline">to code,</span><span>from code to products.</span></h1>
            <p className="hero-copy reveal">I’m <strong>Shravan Sharma</strong> — a Data Science student, full-stack developer, and AI/ML enthusiast who enjoys turning problems into things people can actually use.</p>
            <div className="hero-actions reveal">
              <a className="button-primary" href="#work" onClick={() => onNavigate('work')} data-testid="link-hero-work">Explore selected work <ArrowDownRight className="arrow" size={16} /></a>
              <a className="button-quiet" href="#about" onClick={() => onNavigate('about')} data-testid="link-hero-about">A little about me <ArrowDownRight className="arrow" size={16} /></a>
            </div>
            <div className="hero-note reveal"><span className="hero-note-line" /> building across code, data, and product thinking</div>
          </div>
          <div className="hero-portrait-wrap reveal">
            <div className="hero-portrait-frame">
              <img className="hero-portrait" src="/assets/profile.png" alt="Shravan Sharma in a blazer" />
              <span className="portrait-label">developer<br /><em>/ creator</em></span>
            </div>
            <div className="portrait-note">a work in progress<br />with intent</div>
          </div>
        </div>
        <div className="hero-scroll mono">scroll to wander</div>
      </section>

      <div className="marquee-band" aria-hidden="true"><div className="marquee-track"><span>data science</span><span>full-stack developer</span><span>ai / ml</span><span>dsa</span><span>problem solver</span><span>creator</span><span>building with code</span><span>data science</span><span>full-stack developer</span><span>ai / ml</span><span>dsa</span><span>problem solver</span><span>creator</span><span>building with code</span></div></div>

      <section className="section about" id="about">
        <div className="container">
          <div className="eyebrow reveal">01 / The person behind the pixels</div>
          <h2 className="section-heading reveal">Curious by default.<br /><em>Intentional</em> by choice.</h2>
          <div className="about-layout">
            <div className="about-photo-wrap reveal">
              <img className="about-photo" src="/assets/about.jpg" alt="Shravan Sharma speaking with a microphone" loading="lazy" />
              <span className="about-photo-caption">learning in public / jaipur</span>
            </div>
            <div className="about-copy reveal">
              <p className="about-lede">I’m currently pursuing my B.Tech in Data Science at Poornima Institute of Engineering and Technology, Jaipur.</p>
              <p className="about-body">I enjoy working at the intersection of software development, data and intelligent systems. I build full-stack web applications, explore AI/ML, practice DSA, and keep experimenting with new ways of turning ideas into working products.</p>
              <p className="about-body">I’m still early in the journey, and that’s something I’m comfortable with. I like learning by building — understanding why something works, figuring out what breaks, and improving it through iteration.</p>
              <p className="about-body">Outside the code itself, I enjoy sharing ideas, writing about things I learn, and staying involved in the developer community. LinkedIn is one of the places where I regularly document what I’m learning, building and thinking about.</p>
              <p className="about-body">For me, development is not just about writing code. It is about understanding the problem first, building the right solution, and making the final experience useful for someone on the other side.</p>
            </div>
          </div>
          <div className="principles reveal">
            <article className="principle"><span className="principle-number">01</span><h3>Make it useful</h3><p>Start with the person, the problem, and the smallest helpful next step.</p></article>
            <article className="principle"><span className="principle-number">02</span><h3>Stay curious</h3><p>Follow the question from the interface into the systems underneath it.</p></article>
            <article className="principle"><span className="principle-number">03</span><h3>Keep learning</h3><p>Build, reflect, read the docs, and return with more clarity.</p></article>
          </div>
        </div>
      </section>

      <section className="section work" id="work">
        <div className="container">
          <div className="work-intro">
            <div><div className="eyebrow reveal">02 / Selected work</div><h2 className="section-heading reveal">Projects with <em>purpose.</em></h2></div>
            <p className="work-note reveal">A growing archive of systems, interfaces, and questions I’ve built to understand the technology behind useful products.</p>
          </div>
          <div className="projects">
            {projects.map((project) => (
              <article className={`project-card ${project.size === 'large' ? 'large' : ''} project-card-${project.kind} reveal`} key={project.id} data-testid={`card-project-${project.id}`}>
                <div className="project-card-top"><span className="project-index">{project.index}</span><ArrowDownRight className="project-arrow" size={20} /></div>
                <ProjectVisual project={project} onOpen={() => onProject(project)} />
                <div className="project-meta">
                  <button className="project-title-link" type="button" onClick={() => onProject(project)}>{project.title}</button>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                  <button className="project-case-link" type="button" onClick={() => onProject(project)} data-testid={`button-view-${project.id}`}>View case study <ArrowDownRight size={13} /></button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section journey" id="journey">
        <div className="container journey-grid">
          <div className="journey-intro"><div className="eyebrow reveal">03 / Journey</div><h2 className="section-heading reveal">Learning is the <em>throughline.</em></h2><p className="reveal">The timeline is still being written. For now, it’s a map of where curiosity has taken me.</p></div>
          <div className="timeline reveal">
            <article className="timeline-item"><span className="timeline-year">2024—28</span><div><h3>B.Tech in Data Science</h3><p>Poornima Institute of Engineering and Technology, Jaipur · Current CGPA: 7.60 / 10</p></div></article>
            <article className="timeline-item"><span className="timeline-year">BEFORE</span><div><h3>A strong academic base</h3><p>Class 10 — 95% · Class 12 — First Division</p></div></article>
            <article className="timeline-item"><span className="timeline-year">NOW</span><div><h3>Building across the stack</h3><p>Exploring full-stack development, AI/ML, Data Science, DSA, and the craft of making products feel clear.</p></div></article>
            <article className="timeline-item"><span className="timeline-year">ALONG THE WAY</span><div><h3>Learning through experimentation</h3><p>Projects are my preferred way to learn: build something, notice what breaks, and return with better questions.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section toolkit" id="toolkit">
        <div className="container toolkit-layout">
          <div className="toolkit-copy"><div className="eyebrow reveal">04 / Toolkit</div><h2 className="section-heading reveal">Full-stack breadth.<br /><em>Honest</em> signal.</h2><p className="reveal">No fake percentages. Just the languages, frameworks, concepts, and tools documented in my current learning and project work.</p></div>
          <div className="toolbox reveal">
            {skillGroups.map((group) => (
              <div className="tool-group" key={group.title}>
                <h3>{group.number} — {group.title}</h3>
                <div className="tool-list">
                  {group.skills.map(([skill, description]) => (
                    <button className={`tool ${hoveredSkill === skill ? 'is-active' : ''}`} type="button" key={skill} onMouseEnter={() => setHoveredSkill(skill)} onFocus={() => setHoveredSkill(skill)} onMouseLeave={() => setHoveredSkill(null)} onBlur={() => setHoveredSkill(null)}>
                      {skill}
                      {hoveredSkill === skill && <span className="tool-description">{description}</span>}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section achievements" id="achievements">
        <div className="container achievements-grid">
          <div><div className="eyebrow reveal">05 / Proof of progress</div><h2 className="section-heading reveal">Proof of <em>progress.</em></h2></div>
          <div className="achievement-list reveal">
            <article><span>Certificate of Merit</span><p>Naukri Campus Young Turks 2025 · 97.45 percentile</p></article>
            <article><span>Certification</span><p>Oracle Certified Foundations Associate · Agentic AI · Oracle University</p></article>
            <article><span>Academic progress</span><p>B.Tech in Data Science · Current CGPA 7.60 / 10 · Poornima Institute of Engineering and Technology, Jaipur</p></article>
          </div>
        </div>
      </section>

      <section className="section personality" id="personality">
        <div className="container">
          <div className="eyebrow reveal">06 / Beyond the stack</div>
          <h2 className="section-heading reveal">Beyond the <em>stack.</em></h2>
          <div className="activity-groups reveal">
            {([
              ['01', 'Co-curricular', activities.cocurricular],
              ['02', 'Extra-curricular', activities.extracurricular],
            ] as const).map(([number, title, items]) => (
              <section className="activity-group" key={title}>
                <div className="activity-group-heading">
                  <span>{number}</span>
                  <h3>{title}</h3>
                </div>
                <div className="activity-list">
                  {items.map(([activity, status], index) => (
                    <article className="activity-item" key={activity}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <div><h4>{activity}</h4><p>{status}</p></div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <div className="eyebrow reveal">07 / Open channel</div>
          <h2 className="contact-heading reveal">Have a good<br /><span>question?</span></h2>
          <div className="contact-bottom reveal">
            <p className="contact-note">I’m open to thoughtful conversations about projects, collaboration, learning, writing about technology, and the next useful thing to build.</p>
            <div className="contact-links">
              <a className="contact-placeholder" href="mailto:shravansharma.31055@gmail.com" data-testid="link-contact-email">shravansharma.31055@gmail.com <ArrowUp size={14} /></a>
              <div className="social-links" aria-label="Social links">
                <a href="https://github.com/shhhravann" target="_blank" rel="noreferrer">GitHub <ExternalLink size={12} /></a>
                <a href="https://www.linkedin.com/in/shravan-sharmaa" target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={12} /></a>
                <a href="https://x.com/Shraaavannnn" target="_blank" rel="noreferrer">X <ExternalLink size={12} /></a>
                <a href="https://leetcode.com/u/shhhravann/" target="_blank" rel="noreferrer">LeetCode <ExternalLink size={12} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer"><div className="container footer-row"><span>© {new Date().getFullYear()} Shravan Sharma</span><span>Built with curiosity + code</span><a className="back-top" href="#top" onClick={() => onNavigate('top')} data-testid="link-back-top">back to top <ArrowUp size={14} /></a></div></footer>
    </main>
  );
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [path, setPath] = useState(getPath());
  const [scrolled, setScrolled] = useState(false);
  const [cursor, setCursor] = useState({ x: -100, y: -100, active: false });
  const revealRef = useRef<IntersectionObserver | null>(null);
  const projectId = path.startsWith('/projects/') ? path.split('/')[2] : null;
  const project = projects.find((item) => item.id === projectId);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    const onPopState = () => setPath(getPath());
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('popstate', onPopState);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('popstate', onPopState);
    };
  }, []);

  useEffect(() => {
    revealRef.current?.disconnect();
    revealRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal:not(.is-visible)').forEach((element) => revealRef.current?.observe(element));
    return () => revealRef.current?.disconnect();
  }, [path]);

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => setCursor((current) => ({ ...current, x: event.clientX, y: event.clientY }));
    const onPointerOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      setCursor((current) => ({ ...current, active: Boolean(target.closest('a, button')) }));
    };
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerover', onPointerOver);
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerover', onPointerOver);
    };
  }, []);

  useEffect(() => {
    document.title = project ? `${project.title} — Shravan Sharma` : 'Shravan Sharma — Developer & Creator';
    const hashTarget = window.location.hash.replace(/^#/, '');
    const sectionTarget = ['work', 'about', 'journey', 'personality', 'contact'].includes(hashTarget) ? hashTarget : null;
    if (path === '/' && sectionTarget) {
      requestAnimationFrame(() => document.getElementById(sectionTarget)?.scrollIntoView({ behavior: 'smooth' }));
    } else if (path !== '/') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [path, project]);

  const navigate = (target: string) => {
    if (target === 'top' || target === 'work' || target === 'about' || target === 'journey' || target === 'contact') {
      window.history.pushState({}, '', target === 'top' ? '/' : `/#${target}`);
      setPath('/');
      setMobileOpen(false);
      requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' }));
      return;
    }
    window.history.pushState({}, '', `/projects/${target}`);
    setPath(`/projects/${target}`);
    setMobileOpen(false);
  };

  return (
    <>
      <div className="cursor-dot" style={{ left: cursor.x, top: cursor.y }} aria-hidden="true" />
      <div className={`cursor-ring ${cursor.active ? 'active' : ''}`} style={{ left: cursor.x, top: cursor.y }} aria-hidden="true" />
      <SiteHeader mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} scrolled={scrolled} onNavigate={navigate} detail={Boolean(project)} />
      {project ? <ProjectDetail project={project} onNavigate={navigate} /> : <HomePage onProject={(item) => navigate(item.id)} onNavigate={navigate} />}
    </>
  );
}

export default App;