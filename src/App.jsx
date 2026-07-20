import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const NAV = ["Home", "About", "Services", "Workshops & Talks", "Contact"];

function Photo({ src, alt, aspect = "aspect-[4/5]", rounded = "rounded-2xl", className = "" }) {
  return (
    <div className={`relative ${aspect} ${rounded} overflow-hidden ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-9 h-9 rounded-full flex items-center justify-center font-serif text-sm"
        style={{ background: "linear-gradient(135deg, #492A34, #6b3d4a)", color: "#F2EDE6" }}>TN</div>
      <span className="font-serif text-lg tracking-wide" style={{ color: "#3A4138" }}>Taylor Noble</span>
    </div>
  );
}

function Header({ page, setPage }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur border-b"
      style={{ background: "rgba(242,237,230,0.97)", borderColor: "#3A413822" }}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => { setPage("Home"); setOpen(false); }}><Logo /></button>
        <nav className="hidden md:flex gap-8">
          {NAV.map(n => (
            <button key={n} onClick={() => setPage(n)} className="text-sm tracking-wide transition-colors"
              style={{ color: page === n ? "#3A4138" : "#3A413877", fontWeight: page === n ? 600 : 400 }}>{n}</button>
          ))}
        </nav>
        <button className="md:hidden" style={{ color: "#3A4138" }} onClick={() => setOpen(!open)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden flex flex-col px-6 pb-4 gap-3" style={{ background: "#F2EDE6" }}>
          {NAV.map(n => (
            <button key={n} onClick={() => { setPage(n); setOpen(false); }}
              className="text-left text-sm py-1" style={{ color: page === n ? "#3A4138" : "#3A413877" }}>{n}</button>
          ))}
        </div>
      )}
    </header>
  );
}

function Footer({ setPage }) {
  return (
    <footer style={{ background: "#3A4138" }} className="mt-24">
      <div className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-serif text-lg mb-2" style={{ color: "#F2EDE6" }}>Taylor Noble</div>
          <p className="text-sm leading-relaxed" style={{ color: "#F2EDE6aa" }}>
            Registered Psychologist<br />Sport &amp; Performance · Therapy · Educational Assessments<br />Wellington, New Zealand
          </p>
        </div>
        <div>
          <div className="text-sm font-medium mb-3 tracking-wide" style={{ color: "#F2EDE6" }}>Explore</div>
          <div className="flex flex-col gap-2 text-sm">
            {NAV.map(n => (
              <button key={n} onClick={() => setPage(n)} className="text-left transition-opacity"
                style={{ color: "#F2EDE6bb" }}>{n}</button>
            ))}
          </div>
        </div>
        <div>
          <div className="text-sm font-medium mb-3 tracking-wide" style={{ color: "#F2EDE6" }}>Bookings via</div>
          <div className="flex flex-col gap-2 text-sm">
            <a href="https://www.educationalassessments.co.nz/" target="_blank" rel="noopener noreferrer"
              style={{ color: "#F2EDE6bb" }} className="hover:opacity-100 transition-opacity">Educational Assessments Wellington</a>
            <a href="https://members.instep.nz/provider/taylor-noble/" target="_blank" rel="noopener noreferrer"
              style={{ color: "#F2EDE6bb" }} className="hover:opacity-100 transition-opacity">Instep EAP Profile</a>
          </div>
        </div>
      </div>
      <div className="border-t py-5 text-center text-xs" style={{ borderColor: "#F2EDE622", color: "#F2EDE655" }}>
        © {new Date().getFullYear()} Taylor Noble. All rights reserved.
      </div>
    </footer>
  );
}

const WineBtn = ({ onClick, children, outline }) => (
  <button onClick={onClick}
    className="px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 hover:shadow-lg transition-all duration-200"
    style={outline
      ? { border: "2px solid #492A34", color: "#492A34", background: "transparent" }
      : { background: "linear-gradient(135deg, #492A34, #6b3d4a)", color: "#F2EDE6", boxShadow: "0 4px 18px #492A3455" }}>
    {children}
  </button>
);

const GreenBtn = ({ onClick, children, outline }) => (
  <button onClick={onClick}
    className="px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 hover:shadow-lg transition-all duration-200"
    style={outline
      ? { border: "2px solid #8B9467", color: "#8B9467", background: "transparent" }
      : { background: "linear-gradient(135deg, #3A4138, #4e5a4b)", color: "#F2EDE6", boxShadow: "0 4px 18px #3A413855" }}>
    {children}
  </button>
);

const CreamBtn = ({ onClick, children }) => (
  <button onClick={onClick}
    className="px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 hover:shadow-lg transition-all duration-200"
    style={{ background: "#F2EDE6", color: "#3A4138", boxShadow: "0 4px 15px #F2EDE655" }}>
    {children}
  </button>
);

function Tag({ children }) {
  return (
    <span className="text-xs px-3 py-1 rounded-full font-medium"
      style={{ background: "#8B946722", color: "#8B9467", border: "1px solid #8B946755" }}>{children}</span>
  );
}

function Dot() {
  return <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 inline-block" style={{ background: "#492A34" }} />;
}

function HomePage({ setPage }) {
  return (
    <div>
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #F2EDE6 50%, #e0d9d0 100%)" }}>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: "#492A3422", animationDuration: "4s" }} />
        <div className="absolute top-40 -left-24 w-72 h-72 rounded-full blur-3xl animate-pulse" style={{ background: "#3A413822", animationDuration: "5s" }} />
        <div className="absolute top-8 right-12 w-3 h-3 rounded-full hidden md:block animate-bounce" style={{ background: "#492A34", animationDuration: "2.5s" }} />
        <div className="absolute top-20 right-32 w-2 h-2 rounded-full hidden md:block animate-bounce" style={{ background: "#8B9467", animationDuration: "3s" }} />
        <div className="absolute bottom-20 left-16 w-2.5 h-2.5 rounded-full hidden md:block animate-bounce" style={{ background: "#3A4138", animationDuration: "3.5s" }} />
        <div className="absolute bottom-10 right-24 w-2 h-2 rounded-full hidden md:block animate-bounce" style={{ background: "#492A34", animationDuration: "4s" }} />
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-24 relative grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase mb-4 font-semibold" style={{ color: "#8B9467" }}>Registered Psychologist</p>
            <h1 className="font-serif text-4xl md:text-6xl leading-tight" style={{ color: "#3A4138" }}>
              Helping people perform, <span style={{ color: "#492A34" }}>flourish</span>, and thrive.
            </h1>
            <p className="mt-6 text-lg leading-relaxed max-w-xl" style={{ color: "#3A4138bb" }}>
              Whether you're an athlete striving for consistent performance, a parent seeking support for your child, or someone navigating life's challenges, I work alongside people to build resilience, develop self-understanding, and create lasting change.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <WineBtn onClick={() => setPage("Services")}>Explore Services</WineBtn>
              <WineBtn onClick={() => setPage("Contact")} outline>Get in Touch</WineBtn>
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <div className="w-72 h-72 rounded-full overflow-hidden flex-shrink-0 shadow-2xl" style={{ border: "4px solid #492A3444" }}>
              <img src="/taylor-profile.JPG" alt="Taylor Noble" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-[1fr_1.6fr] gap-14 items-center">
        <Photo src="/taylor-about.jpeg" alt="Taylor Noble" aspect="aspect-[3/4]" />
        <div>
          <p className="text-sm tracking-[0.2em] uppercase mb-3 font-semibold" style={{ color: "#8B9467" }}>Kia ora</p>
          <h2 className="font-serif text-3xl mb-5" style={{ color: "#3A4138" }}>I'm Taylor.</h2>
          <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "#3A4138cc" }}>
            <p>I'm a New Zealand-trained Registered Psychologist passionate about helping people understand themselves, build psychological strength, and live in ways that reflect what matters most to them.</p>
            <p>Since becoming registered in 2018, I've worked across sport and performance, education, disability, and mental health. Today, my primary focus is sport and performance psychology, supporting athletes, coaches, teams, and high-performance environments, while also continuing to provide therapeutic support and educational assessments.</p>
            <p>At the heart of my work is a simple belief: when people better understand themselves, they become better equipped to handle life's challenges, pursue meaningful goals, and realise they are capable of more than they often believe.</p>
          </div>
          <div className="mt-6">
            <GreenBtn onClick={() => setPage("About")} outline>More about Taylor</GreenBtn>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "#3A4138" }}>
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-sm tracking-[0.2em] uppercase mb-3 font-semibold" style={{ color: "#8B946799" }}>Areas of practice</p>
          <h2 className="font-serif text-3xl mb-10" style={{ color: "#F2EDE6" }}>Three ways I can help</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Sport & Performance", desc: "Supporting athletes, coaches, teams, and organisations, from community sport through to the high performance level, to build mental strength, resilience, and a consistent performance mindset.", tags: ["Individual Athletes", "Teams & Organisations", "High Performance"], grad: "linear-gradient(135deg,#492A34,#6b3d4a)" },
              { title: "Therapeutic Support", desc: "Individual sessions for people of all ages across mental health, life transitions, parenting, and neurodivergence, combining CBT, ACT, and strengths-based approaches.", tags: ["Anxiety & Mood", "Youth & Adults", "Neurodivergence"], grad: "linear-gradient(135deg,#8B9467,#6b7550)" },
              { title: "Educational Assessments", desc: "Comprehensive learning and behavioural assessments to help young people understand their strengths and get the support they need to thrive.", tags: ["Learning Assessments", "Behavioural", "School Consultation"], grad: "linear-gradient(135deg,#3A4138,#4e5a4b)" },
            ].map(c => (
              <div key={c.title} className="rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                style={{ background: "#454d43", border: "1px solid #8B946733" }}>
                <div className="p-6">
                  <div className="w-8 h-8 rounded-lg mb-4" style={{ background: c.grad }} />
                  <h3 className="font-serif text-lg mb-2" style={{ color: "#F2EDE6" }}>{c.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#F2EDE6aa" }}>{c.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map(t => (
                      <span key={t} className="text-xs px-3 py-1 rounded-full"
                        style={{ background: "#8B946722", color: "#8B9467cc", border: "1px solid #8B946744" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <p className="text-sm tracking-[0.2em] uppercase mb-3 font-semibold" style={{ color: "#8B9467" }}>Organisations</p>
        <h2 className="font-serif text-3xl mb-4" style={{ color: "#3A4138" }}>Working alongside some of New Zealand's leading teams</h2>
        <p className="leading-relaxed max-w-2xl mb-8" style={{ color: "#3A4138bb" }}>
          Taylor has worked with athletes and sporting organisations across New Zealand, from community level through to international competition, including the Wellington Phoenix, Wellington Blaze, and Hurricanes Poua.
        </p>
        <WineBtn onClick={() => setPage("Services")}>See all services</WineBtn>
      </section>

      <section className="py-20" style={{ background: "#492A34" }}>
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase mb-3 font-semibold" style={{ color: "#F2EDE666" }}>Speaking &amp; Workshops</p>
            <h2 className="font-serif text-3xl mb-4" style={{ color: "#F2EDE6" }}>Engaging, practical, and accessible.</h2>
            <p className="leading-relaxed max-w-xl mb-6" style={{ color: "#F2EDE6cc" }}>
              Taylor delivers seminars, keynotes, and workshops for sporting organisations, schools, workplaces, and community groups across New Zealand, presenting complex psychological concepts in a way that leaves audiences with tools they can immediately apply.
            </p>
            <CreamBtn onClick={() => setPage("Workshops & Talks")}>See Workshop Topics</CreamBtn>
          </div>
          
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="font-serif text-2xl md:text-3xl leading-relaxed italic" style={{ color: "#3A4138" }}>
          "Mental performance is not something separate from performance. It is embedded in how athletes prepare, connect, recover, compete, and respond under pressure."
        </p>
      </section>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <p className="text-sm tracking-[0.2em] uppercase mb-3 font-semibold" style={{ color: "#8B9467" }}>About</p>
      <div className="grid md:grid-cols-[1fr_1.8fr] gap-8 items-start mb-12">
        <div className="space-y-4">
          <Photo src="/tayloraction.jpeg" alt="Taylor Noble" aspect="aspect-[3/4]" />
        </div>
        <div>
          <h1 className="font-serif text-4xl mb-1" style={{ color: "#3A4138" }}>Taylor Noble</h1>
          <p className="text-sm mb-2 font-medium" style={{ color: "#8B9467" }}>Registered Psychologist (2018)</p>
          <p className="text-sm mb-8 leading-relaxed" style={{ color: "#3A413877" }}>BA (Psychology; Education and Psychology) · MEdPsych (Distinction) · PGDipEdPsych · MNZPS</p>
          <div className="space-y-5 text-[15px] leading-relaxed" style={{ color: "#3A4138cc" }}>
            <p>Kia ora! I'm a New Zealand-trained, registered psychologist and I currently work primarily in sport and performance psychology, contracting to several different organisations as well as taking on my own clients.</p>
            <p>My work with sportspeople is strengths-based and person-centred, focused on working alongside people to develop a performance mindset so that they can achieve consistent quality performance whilst also ensuring their overall hauora and wellbeing is maintained.</p>
            <p>I also have experience across education, disability, and mental health, working with youth and adolescents, adults, and within family and team structures.</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl p-8 mb-10" style={{ background: "#3A4138" }}>
        <h2 className="font-serif text-2xl mb-4" style={{ color: "#F2EDE6" }}>My philosophy</h2>
        <div className="space-y-4 text-[15px] leading-relaxed" style={{ color: "#F2EDE6cc" }}>
          <p>I believe psychology isn't simply about solving problems. It's about helping people unlock their potential.</p>
          <p>Regardless of the area you are wanting to connect for, there is one key thing that ties my work together: I am deeply passionate about helping others better understand themselves, learn ways to cope, and unlock the tools to move towards the sort of person they want to be and the sort of life they want to live.</p>
          <p>I take a strengths-based, person-centred approach and combine evidence-based practice with practical, real-world application, using CBT, ACT, and Solution Focused approaches depending on what each person needs.</p>
        </div>
      </div>

      <h2 className="font-serif text-2xl mb-5" style={{ color: "#3A4138" }}>Qualifications and memberships</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
        {["Registered Psychologist, New Zealand (2018)", "BA (Psychology; Education and Psychology)", "Master of Educational Psychology (Distinction)", "Postgraduate Diploma in Educational Psychology", "Member, NZ Psychological Society (MNZPS)"].map(q => (
          <div key={q} className="flex items-start gap-3 rounded-xl px-4 py-3" style={{ background: "#F2EDE6" }}>
            <Dot />
            <span className="text-sm" style={{ color: "#3A4138" }}>{q}</span>
          </div>
        ))}
      </div>

      <Photo src="/Taylor-banner.jpeg" alt="Taylor Noble" aspect="aspect-[21/9]" />
    </div>
  );
}

function ServicesPage({ setPage }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <p className="text-sm tracking-[0.2em] uppercase mb-3 font-semibold" style={{ color: "#8B9467" }}>Services</p>
      <h1 className="font-serif text-4xl mb-4" style={{ color: "#3A4138" }}>How I can help</h1>
      <p className="leading-relaxed max-w-2xl mb-16" style={{ color: "#3A4138bb" }}>
        My services fall across three main areas. Whether you're an athlete, a coach, a parent, or someone seeking individual support, I'd love to hear from you.
      </p>

      <div className="mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase mb-2 font-bold" style={{ color: "#492A34" }}>01</p>
            <h2 className="font-serif text-2xl mb-3" style={{ color: "#3A4138" }}>Sport and Performance Psychology</h2>
            <p className="leading-relaxed mb-5" style={{ color: "#3A4138bb" }}>
              I work in sport and performance at every level, from community athletes through to high performance environments. My work is strengths-based and person-centred, focused on helping people develop a performance mindset that allows them to achieve consistent quality performance while maintaining their overall wellbeing.
            </p>
          </div>
          <Photo src="/taylorsports.jpeg" alt="Sport and Performance" aspect="aspect-[4/3]" />
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { heading: "Individual Athletes", items: ["Performance mindset", "Managing anxiety and pressure", "Confidence and focus", "Injury rehabilitation", "Self-identity", "Consistent performance and motivation", "Holistic wellbeing", "Mental health"] },
            { heading: "Teams and Organisations", items: ["Team culture", "Leadership development", "Coach support", "Athlete wellbeing", "Parent education", "Workshops and facilitation"] },
            { heading: "High Performance Consultancy", items: ["Embedding psychology in daily training", "Performance under pressure", "Cohesion and culture", "Staff and coaching support", "Athlete wellbeing systems"] },
          ].map(g => (
            <div key={g.heading} className="rounded-xl p-5" style={{ background: "#F2EDE6" }}>
              <h4 className="font-serif text-base mb-3" style={{ color: "#3A4138" }}>{g.heading}</h4>
              <ul className="space-y-1.5">
                {g.items.map(i => <li key={i} className="text-sm flex items-start gap-2" style={{ color: "#3A4138cc" }}><Dot />{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t mb-16" style={{ borderColor: "#3A413822" }} />

      <div className="mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
          <Photo src="/taylortherapy.jpeg" alt="Therapeutic Support" aspect="aspect-[4/3]" />
          <div>
            <p className="text-sm tracking-[0.2em] uppercase mb-2 font-bold" style={{ color: "#492A34" }}>02</p>
            <h2 className="font-serif text-2xl mb-3" style={{ color: "#3A4138" }}>Therapeutic Support</h2>
            <p className="leading-relaxed mb-5" style={{ color: "#3A4138bb" }}>
              I continue to offer individual therapeutic support to people of all ages across a wide range of needs. My approach is person-centred and draws on CBT, ACT, and Solution Focused Therapy, combining evidence-based practice with practical, real-world application to help you live with courage, curiosity, and greater self-understanding.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {["Anxiety and mood", "Stress and life transitions", "Parenting support", "Youth and adolescents", "Neurodivergence", "Behavioural concerns", "Emotional wellbeing", "Adults"].map(i => (
                <div key={i} className="text-sm flex items-start gap-2" style={{ color: "#3A4138cc" }}><Dot />{i}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t mb-16" style={{ borderColor: "#3A413822" }} />

      <div className="mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm tracking-[0.2em] uppercase mb-2 font-bold" style={{ color: "#492A34" }}>03</p>
            <h2 className="font-serif text-2xl mb-3" style={{ color: "#3A4138" }}>Educational Assessments</h2>
            <p className="leading-relaxed mb-5" style={{ color: "#3A4138bb" }}>
              Ensuring young people have the tools to thrive continues to be an important area of my work. I provide comprehensive learning and behavioural assessments to help children and adolescents understand their unique strengths and access the right support.
            </p>
            <div className="grid grid-cols-2 gap-2 mb-6">
              {["Learning assessments", "Behavioural assessments", "Neurodivergence", "School consultation", "Educational recommendations", "Parent feedback"].map(i => (
                <div key={i} className="text-sm flex items-start gap-2" style={{ color: "#3A4138cc" }}><Dot />{i}</div>
              ))}
            </div>
            <a href="https://www.educationalassessments.co.nz/" target="_blank" rel="noopener noreferrer"
              className="text-sm font-medium underline underline-offset-4" style={{ color: "#492A34" }}>
              Book via Educational Assessments Wellington
            </a>
          </div>
          <Photo src="/taylor-education-assessments.jpg" alt="Educational Assessments" aspect="aspect-[4/3]" />
        </div>
      </div>

      <div className="rounded-2xl p-8 mb-6" style={{ background: "#3A4138" }}>
        <h3 className="font-serif text-xl mb-5" style={{ color: "#F2EDE6" }}>Who I work with</h3>
        <div className="flex flex-wrap gap-2">
          {["Athletes", "Coaches", "High Performance Teams", "Sports Organisations", "Schools", "Parents", "Young People", "Adults", "Workplaces"].map(w => (
            <span key={w} className="text-xs px-3 py-1 rounded-full font-medium"
              style={{ background: "#8B946722", color: "#8B9467cc", border: "1px solid #8B946755" }}>{w}</span>
          ))}
        </div>
      </div>

      <div className="rounded-2xl p-8 text-center" style={{ background: "#F2EDE6" }}>
        <p className="mb-4" style={{ color: "#3A4138" }}>Not sure where to start?</p>
        <WineBtn onClick={() => setPage("Contact")}>Get in touch</WineBtn>
      </div>
    </div>
  );
}

function WorkshopsPage({ setPage }) {
  const topics = [
    { title: "Performing Under Pressure", desc: "Practical tools for managing the mental demands of competition, high-stakes environments, and performance moments.", color: "#492A34" },
    { title: "Building Resilience", desc: "Equipping athletes and young people with the mental tools to navigate setbacks, pressure, and adversity.", color: "#3A4138" },
    { title: "Mental Wellbeing", desc: "Understanding and looking after your mental health in sport, school, and everyday life.", color: "#8B9467" },
    { title: "Confidence and Motivation", desc: "Developing a strong performance mindset and the self-belief to back yourself when it counts.", color: "#492A34" },
    { title: "Leadership and Culture", desc: "For coaches, captains, and organisations, creating environments where people and teams can consistently perform.", color: "#3A4138" },
    { title: "Visualisation and Self-Understanding", desc: "Helping individuals understand how their mind works and how to use it to their advantage.", color: "#8B9467" },
  ];
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <p className="text-sm tracking-[0.2em] uppercase mb-3 font-semibold" style={{ color: "#8B9467" }}>Speaking and Workshops</p>
      <h1 className="font-serif text-4xl mb-4" style={{ color: "#3A4138" }}>Engaging, practical, and accessible.</h1>
      <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start mb-6">
        <div className="space-y-4 leading-relaxed" style={{ color: "#3A4138cc" }}>
          <p>Taylor regularly delivers seminars, keynote presentations, and workshops for sporting organisations, schools, workplaces, and community groups across New Zealand.</p>
          <p>Taylor has a unique and authentic way of engaging her audience, presenting complex psychological concepts in a way that is accessible and practical, leaving people with tools they can immediately apply in everyday life.</p>
        </div>
        <div className="hidden md:block w-52">
          <Photo src="/taylor-about.jpeg" alt="Taylor presenting" aspect="aspect-[3/4]" />
        </div>
      </div>

      <p className="text-sm tracking-[0.2em] uppercase mb-5 font-semibold mt-12" style={{ color: "#8B9467" }}>Topics include</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {topics.map(t => (
          <div key={t.title} className="bg-white rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            style={{ border: "1px solid #3A413822" }}>
            <div className="h-5 w-full" style={{ background: t.color }} />
            <div className="p-5">
              <h3 className="font-serif text-base mb-1.5" style={{ color: "#3A4138" }}>{t.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#3A4138aa" }}>{t.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm tracking-[0.2em] uppercase mb-5 font-semibold" style={{ color: "#8B9467" }}>Taylor speaks to</p>
      <div className="flex flex-wrap gap-2 mb-16">
        {["Schools", "Sporting Organisations", "High Performance Programmes", "Workplaces", "Community Groups", "Parent Groups", "Leadership Teams"].map(a => <Tag key={a}>{a}</Tag>)}
      </div>

      <div className="rounded-2xl p-10 text-center" style={{ background: "linear-gradient(135deg, #492A34, #6b3d4a)" }}>
        <h3 className="font-serif text-2xl mb-3" style={{ color: "#F2EDE6" }}>Interested in a session for your school or organisation?</h3>
        <p className="mb-6 max-w-lg mx-auto" style={{ color: "#F2EDE6bb" }}>Get in touch to talk through topics, format, and timing for your group.</p>
        <CreamBtn onClick={() => setPage("Contact")}>Enquire Now</CreamBtn>
      </div>
    </div>
  );
}

function ContactPage() {
  const [state, handleSubmit] = useForm("xgogkrrp");
  const [name, setName] = useState("");

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <p className="text-sm tracking-[0.2em] uppercase mb-3 font-semibold" style={{ color: "#8B9467" }}>Contact</p>
      <h1 className="font-serif text-4xl mb-6" style={{ color: "#3A4138" }}>Let's talk</h1>
      <p className="leading-relaxed max-w-xl mb-12" style={{ color: "#3A4138bb" }}>
        You can book directly with Taylor using the form below, or through her affiliated organisations to the right. Whether you're looking for individual support, educational assessments, workshop facilitation, or performance psychology for your organisation, I'd love to hear from you.
      </p>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <h2 className="font-serif text-xl mb-6" style={{ color: "#3A4138" }}>Book directly with Taylor</h2>
          {state.succeeded ? (
            <div className="rounded-2xl p-8 text-center" style={{ background: "#F2EDE6" }}>
              <h3 className="font-serif text-xl mb-2" style={{ color: "#3A4138" }}>
                Thanks, {name.split(" ")[0] || "there"}!
              </h3>
              <p className="text-sm" style={{ color: "#3A4138cc" }}>Your message has been sent. Taylor will be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm mb-1.5" style={{ color: "#3A4138" }}>Name</label>
                <input type="text" name="name" required value={name} onChange={e => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white focus:outline-none transition-all"
                  style={{ border: "1px solid #3A413833", color: "#3A4138" }} />
                <ValidationError field="name" errors={state.errors} className="text-xs mt-1" style={{ color: "#492A34" }} />
              </div>
              <div>
                <label className="block text-sm mb-1.5" style={{ color: "#3A4138" }}>Email</label>
                <input type="email" name="email" required
                  className="w-full px-4 py-3 rounded-lg bg-white focus:outline-none transition-all"
                  style={{ border: "1px solid #3A413833", color: "#3A4138" }} />
                <ValidationError field="email" errors={state.errors} className="text-xs mt-1" style={{ color: "#492A34" }} />
              </div>
              <div>
                <label className="block text-sm mb-1.5" style={{ color: "#3A4138" }}>Message</label>
                <textarea name="message" rows={5} required
                  className="w-full px-4 py-3 rounded-lg bg-white focus:outline-none resize-none"
                  style={{ border: "1px solid #3A413833", color: "#3A4138" }} />
                <ValidationError field="message" errors={state.errors} className="text-xs mt-1" style={{ color: "#492A34" }} />
              </div>
              <button type="submit" disabled={state.submitting}
                className="px-6 py-3 rounded-full text-sm font-semibold hover:scale-105 hover:shadow-lg transition-all duration-200"
                style={{ background: "linear-gradient(135deg, #492A34, #6b3d4a)", color: "#F2EDE6", opacity: state.submitting ? 0.7 : 1 }}>
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
        <div className="space-y-4">
          <div className="text-sm font-medium mb-4 tracking-wide" style={{ color: "#8B9467" }}>Or book via</div>
          {[
            { title: "Educational Assessments", desc: "Book learning and developmental assessments.", href: "https://www.educationalassessments.co.nz/", label: "Visit site" },
            { title: "Instep EAP", desc: "Book private practice sessions.", href: "https://members.instep.nz/provider/taylor-noble/", label: "View profile" },
          ].map(l => (
            <div key={l.title} className="rounded-xl p-6 bg-white" style={{ border: "1px solid #3A413822" }}>
              <h3 className="font-serif text-base mb-2" style={{ color: "#3A4138" }}>{l.title}</h3>
              <p className="text-sm mb-4" style={{ color: "#3A4138aa" }}>{l.desc}</p>
              <a href={l.href} target="_blank" rel="noopener noreferrer"
                className="text-sm font-medium underline underline-offset-4" style={{ color: "#492A34" }}>{l.label}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("Home");
  return (
    <div className="min-h-screen font-sans" style={{ background: "#FAF8F5" }}>
      <Header page={page} setPage={setPage} />
      {page === "Home" && <HomePage setPage={setPage} />}
      {page === "About" && <AboutPage />}
      {page === "Services" && <ServicesPage setPage={setPage} />}
      {page === "Workshops & Talks" && <WorkshopsPage setPage={setPage} />}
      {page === "Contact" && <ContactPage />}
      <Footer setPage={setPage} />
    </div>
  );
}
