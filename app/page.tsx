const services = [
  {
    number: '01',
    name: 'Full Planning',
    tagline: 'From the ring through the final send-off.',
    price: '$5,000',
    subject: 'Full Planning inquiry',
    features: [
      'Step-by-step planning with biweekly guides and check-ins',
      'Recommended vendors and thoughtful budget assistance',
      'Venue walk-through and collaborative layout planning',
      'Final confirmations, rehearsal, and full wedding-day execution',
    ],
  },
  {
    number: '02',
    name: 'Partial Planning',
    tagline: 'A strong foundation, then steady support.',
    price: '$4,000',
    subject: 'Partial Planning inquiry',
    features: [
      'Hands-on help booking three key vendors',
      'Planning support beginning 90 days before your wedding',
      'Vendor confirmations, venue walk-through, and layout planning',
      'Final confirmations, rehearsal, and full wedding-day execution',
    ],
  },
  {
    number: '03',
    name: 'Wedding Day Coordination',
    tagline: 'Your plans, brought together with care.',
    price: '$2,000',
    subject: 'Wedding day coordination inquiry',
    features: [
      'Support beginning 60 days before your wedding',
      'Confirmation of all your pre-booked vendors',
      'Venue walk-through and collaborative layout planning',
      'Final confirmations, rehearsal, and full wedding-day execution',
    ],
  },
];

const faqs = [
  {
    question: 'When does planning support begin?',
    answer:
      'Full Planning begins with the ring. Planning and Coordination begins 90 days before the wedding, and Wedding Day Coordination begins 60 days before the wedding.',
  },
  {
    question: 'Which package includes help finding vendors?',
    answer:
      'Full Planning includes recommended vendors throughout the process. Planning and Coordination includes hands-on help booking three key vendors. Wedding Day Coordination is designed for couples who have already booked their vendor team.',
  },
  {
    question: 'Are the rehearsal and wedding day included?',
    answer:
      'Yes. All three services include final confirmations, rehearsal coordination, and full wedding-day execution.',
  },
  {
    question: 'Will Paige help with the venue layout?',
    answer:
      'Yes. Every service includes a venue walk-through and collaborative layout planning so the day can flow comfortably and reflect your vision.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Email Paige with your name, phone number, wedding date if you have one, and the package you are considering. She will follow up to learn more about your plans and confirm availability.',
  },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span>P</span>
      <span>S</span>
    </span>
  );
}

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <p className="section-label">
      <span>{number}</span>
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Paige Southwick Events, home">
          <BrandMark />
          <span className="brand-copy">
            <strong>Paige Southwick</strong>
            <span>Events</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#experience">Experience</a>
          <a href="#services">Services</a>
          <a href="#about">Meet Paige</a>
          <a href="#portfolio">Celebrations</a>
        </nav>

        <a
          className="header-cta"
          href="mailto:paigesouthwickevents@gmail.com?subject=Wedding%20planning%20inquiry"
        >
          Inquire
        </a>
      </header>

      <div id="main-content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Wedding planning &amp; design</p>
            <h1>
              Your day,
              <span>beautifully held.</span>
            </h1>
            <p className="hero-lede">
              Thoughtful planning, steady guidance, and a trusted friend in your
              corner, so getting married never feels like a chore.
            </p>

            <div className="hero-actions">
              <a className="button button-dark" href="#services">
                Explore services
              </a>
              <a
                className="text-link"
                href="mailto:paigesouthwickevents@gmail.com?subject=Wedding%20planning%20inquiry"
              >
                Let&apos;s plan together
              </a>
            </div>

            <div className="service-note" aria-label="Available planning services">
              <span>Full planning</span>
              <i aria-hidden="true" />
              <span>Partial planning</span>
              <i aria-hidden="true" />
              <span>Wedding coordination</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-arch" aria-hidden="true" />
            <figure className="hero-photo">
              <img
                src="/images/paige-assisting-bride.jpg"
                alt="Paige helping a bride carry her train outside the wedding venue"
                width="2200"
                height="1651"
              />
            </figure>
            <div className="hero-card">
              <BrandMark />
              <p>
                <strong>Real support,</strong>
                <span>every step of the way.</span>
              </p>
            </div>
            <p className="photo-caption">The calm behind your best day</p>
          </div>
        </section>

        <section className="promise-band" aria-label="Paige Southwick Events promise">
          <p>Your vision</p>
          <span className="diamond-divider" aria-hidden="true" />
          <p>My thoughtful plan</p>
          <span className="diamond-divider" aria-hidden="true" />
          <p>A celebration that feels like you</p>
        </section>

        <section className="experience section-shell" id="experience">
          <div className="experience-heading">
            <SectionLabel number="01">The Paige promise</SectionLabel>
            <h2>
              Planning should feel exciting.
              <span>Never exhausting.</span>
            </h2>
          </div>

          <div className="experience-grid">
            <figure className="experience-photo image-frame">
              <img
                src="/images/reception-overview.jpg"
                alt="A candlelit wedding reception with the newly married couple embracing"
                width="1067"
                height="1600"
                loading="lazy"
              />
              <figcaption>Space to be fully present</figcaption>
            </figure>

            <div className="experience-copy">
              <p className="opening-copy">
                I want every couple to feel like they have a knowledgeable best
                friend in their corner, someone who understands what they are
                navigating and keeps their best interests at heart.
              </p>
              <p>
                Together, we turn the long list of decisions into clear next
                steps. I keep the plans moving, the details aligned, and the day
                feeling like yours from start to finish.
              </p>
              <blockquote>
                “You deserve to enjoy your engagement, your wedding, and every
                beautiful moment in between.”
              </blockquote>
              <div className="signature-lockup">
                <span>Paige</span>
                <p>Planner, designer, and calm person in the room</p>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio" id="portfolio">
          <div className="section-shell portfolio-heading">
            <div>
              <SectionLabel number="02">Selected celebrations</SectionLabel>
              <h2>
                Intentional details.
                <span>Unhurried moments.</span>
              </h2>
            </div>
            <p>
              A thoughtful plan creates room for the moments you will actually
              remember. Every table, timeline, and transition works together so
              you can simply be there.
            </p>
          </div>

          <div className="gallery-grid">
            <figure className="gallery-item gallery-details">
              <img
                src="/images/bridal-details.jpg"
                alt="Bridal shoes, orchids, and wedding rings"
                width="1067"
                height="1600"
                loading="lazy"
              />
              <figcaption>Details with meaning</figcaption>
            </figure>
            <figure className="gallery-item gallery-cake">
              <img
                src="/images/wedding-cake.jpg"
                alt="Two-tier wedding cake decorated with pale roses and orchids"
                width="1067"
                height="1600"
                loading="lazy"
              />
              <figcaption>Beauty in every layer</figcaption>
            </figure>
            <figure className="gallery-item gallery-aisle">
              <img
                src="/images/bride-walking-aisle.jpg"
                alt="Bride walking toward her wedding ceremony with her escort"
                width="1067"
                height="712"
                loading="lazy"
              />
              <figcaption>Time for what matters</figcaption>
            </figure>
            <figure className="gallery-item gallery-table">
              <img
                src="/images/candlelit-reception-table.jpg"
                alt="Candlelit reception table arranged with flowers and glassware"
                width="1061"
                height="1600"
                loading="lazy"
              />
              <figcaption>A warm welcome</figcaption>
            </figure>
          </div>
        </section>

        <section className="services section-shell" id="services">
          <div className="services-intro">
            <SectionLabel number="03">Services &amp; investment</SectionLabel>
            <h2>
              The right support,
              <span>right when you need it.</span>
            </h2>
            <p>
              Choose the level of partnership that meets you where you are. Every
              service finishes with Paige beside you for the rehearsal and the
              full wedding day.
            </p>
          </div>

          <div className="services-list">
            {services.map((service) => (
              <article className="service-card" key={service.name}>
                <div className="service-card-topline">
                  <span>{service.number}</span>
                  <p>Investment {service.price}</p>
                </div>
                <div className="service-card-main">
                  <div>
                    <h3>{service.name}</h3>
                    <p className="service-tagline">{service.tagline}</p>
                  </div>
                  <ul>
                    {service.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <a
                  className="service-link"
                  href={`mailto:paigesouthwickevents@gmail.com?subject=${encodeURIComponent(service.subject)}`}
                >
                  Ask about this service
                </a>
              </article>
            ))}
          </div>

          <p className="pricing-note">
            Availability and final package scope are confirmed with Paige before booking.
          </p>
        </section>

        <section className="about" id="about">
          <div className="about-images">
            <figure className="about-main-image">
              <img
                src="/images/paige-styling-tablescape.jpg"
                alt="Paige smiling while arranging flowers on a wedding table"
                width="1170"
                height="746"
                loading="lazy"
              />
            </figure>
            <figure className="about-portrait image-frame">
              <img
                src="/images/paige-southwick-portrait.jpg"
                alt="Portrait of Paige Southwick"
                width="1400"
                height="1866"
                loading="lazy"
              />
              <figcaption>Hi, I&apos;m Paige</figcaption>
            </figure>
          </div>

          <div className="about-copy">
            <SectionLabel number="04">Meet your planner</SectionLabel>
            <h2>
              Your calm, capable
              <span>person in the room.</span>
            </h2>
            <p className="opening-copy">
              I&apos;m Paige, and I believe the best planning relationship feels
              personal. You should always know what comes next, feel heard in
              every decision, and trust that someone is holding the full picture.
            </p>
            <p>
              My favorite part of this work is helping couples bring a dream day
              to life while enjoying the road that gets them there. Think of me
              as your wedding wizard, organized, honest, and genuinely excited
              to celebrate alongside you.
            </p>
            <div className="about-values">
              <p><span>01</span>Clear next steps</p>
              <p><span>02</span>Thoughtful design</p>
              <p><span>03</span>Fully present moments</p>
            </div>
            <a
              className="text-link about-link"
              href="mailto:paigesouthwickevents@gmail.com?subject=Tell%20me%20about%20your%20wedding"
            >
              Tell me about your day
            </a>
          </div>
        </section>

        <section className="process section-shell" id="process">
          <div className="process-heading">
            <SectionLabel number="05">How it works</SectionLabel>
            <h2>
              From hello
              <span>to “I do.”</span>
            </h2>
          </div>

          <ol className="process-list">
            <li>
              <span>01</span>
              <div>
                <h3>Say hello</h3>
                <p>Share your name, wedding plans, and the support you are considering.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Choose your support</h3>
                <p>We will find the service that best fits your date, plans, and priorities.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Plan together</h3>
                <p>With clear next steps and thoughtful guidance, we bring every detail into focus.</p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <h3>Be fully present</h3>
                <p>You celebrate. Paige keeps the people, details, and timeline moving with care.</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="faq section-shell" id="faq">
          <div className="faq-heading">
            <SectionLabel number="06">Good to know</SectionLabel>
            <h2>
              A few answers
              <span>before we begin.</span>
            </h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  <span>{faq.question}</span>
                  <i aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact" id="inquire">
          <div className="contact-copy">
            <SectionLabel number="07">Your next step</SectionLabel>
            <h2>
              Let&apos;s get you
              <span>married.</span>
            </h2>
            <p>
              Tell me what you are dreaming up, where you are in the planning
              process, and how I can help. I cannot wait to hear about your day.
            </p>
            <a
              className="button button-dark contact-button"
              href="mailto:paigesouthwickevents@gmail.com?subject=Let%27s%20plan%20our%20wedding&body=Name%3A%0APhone%3A%0AWedding%20date%3A%0AVenue%20or%20city%3A%0APackage%20of%20interest%3A%0ATell%20me%20about%20your%20plans%3A"
            >
              Email Paige
            </a>
            <a className="contact-email" href="mailto:paigesouthwickevents@gmail.com">
              paigesouthwickevents@gmail.com
            </a>
            <div className="inquiry-checklist">
              <p>Helpful details to include</p>
              <ul>
                <li>Your name and phone number</li>
                <li>Your wedding date and venue, if known</li>
                <li>The service you are considering</li>
              </ul>
            </div>
          </div>
          <figure className="contact-photo">
            <img
              src="/images/candlelit-reception-table.jpg"
              alt="Elegant wedding dinner table glowing in candlelight"
              width="1061"
              height="1600"
              loading="lazy"
            />
            <figcaption>Happy planning</figcaption>
          </figure>
        </section>
      </div>

      <footer className="site-footer">
        <div className="footer-brand">
          <BrandMark />
          <div>
            <p>Paige Southwick Events</p>
            <span>Wedding planning &amp; design</span>
          </div>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#services">Services</a>
          <a href="#about">Meet Paige</a>
          <a href="#portfolio">Celebrations</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="footer-meta">
          <p>Selected photography: Stella Shots Media, Max&apos;s Golden Hour, and Caitlin Rose Photography.</p>
          <p>Copyright 2026 Paige Southwick Events.</p>
        </div>
      </footer>
    </main>
  );
}
