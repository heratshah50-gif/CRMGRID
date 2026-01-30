import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between px-6 md:px-12 py-5 max-w-[1400px] mx-auto bg-[var(--bg)] border-b border-[var(--border)]">
        <Link href="#" className="flex items-center gap-2 no-underline text-[var(--text)] font-bold text-[1.35rem]">
          <span className="logo-icon text-[1.1rem]">C</span>
          CRM Basegrid
        </Link>
        <nav className="nav-links hidden md:flex items-center gap-8">
          <Link href="#" className="text-[var(--text-muted)] no-underline font-medium text-[0.95rem] hover:text-[var(--text)] transition-colors">Home</Link>
          <Link href="#pricing" className="text-[var(--text-muted)] no-underline font-medium text-[0.95rem] hover:text-[var(--text)] transition-colors">Pricing</Link>
          <Link href="#" className="text-[var(--text-muted)] no-underline font-medium text-[0.95rem] hover:text-[var(--text)] transition-colors">Company</Link>
          <Link href="#" className="text-[var(--text-muted)] no-underline font-medium text-[0.95rem] hover:text-[var(--text)] transition-colors">Resources</Link>
          <Link href="#" className="text-[var(--text-muted)] no-underline font-medium text-[0.95rem] hover:text-[var(--text)] transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/register" className="text-[var(--accent)] no-underline font-medium text-[0.95rem] border border-[var(--accent)] px-4 py-2 rounded-lg hover:bg-[var(--accent-soft)] transition-colors">Register</Link>
          <Link href="/login" className="btn-primary">Log In</Link>
        </div>
      </header>

      <main>
        {/* Hero + Analytics widgets + Dashboard */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-start">
            <div className="hero max-w-[520px] lg:max-w-none mx-auto lg:mx-0 text-center lg:text-left">
              <h1 className="text-[2rem] md:text-[2.75rem] font-bold leading-tight mb-5 tracking-tight text-[var(--text)]">
                Streamline sales and delight your customers
              </h1>
              <p className="text-[var(--text-muted)] text-base md:text-[1.1rem] leading-relaxed mb-6">
                Our CRM solution powers businesses of all sizes. Elevate your sales game with CRM Basegrid.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
                <Link href="/register" className="btn-primary px-7 py-3.5 text-base">Get started</Link>
                <Link href="#" className="btn-outline flex items-center gap-2">
                  <PlayIcon className="w-[18px] h-[18px]" />
                  Learn more
                </Link>
              </div>
              <p className="text-[var(--text-muted)] text-sm">Try free for 30 days — no credit card required.</p>

              {/* Analytics widgets in hero */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="analytics-widget bg-[var(--bg-card)] rounded-xl p-4 border border-[var(--border)] shadow-[var(--shadow)]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[var(--text-muted)] text-sm font-medium">Happy customer</span>
                    <span className="text-[var(--accent)] font-bold text-sm">75%</span>
                  </div>
                  <div className="h-2 bg-[var(--bg-hero-card)] rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-[var(--accent)]" style={{ width: "75%" }} />
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-[var(--text-muted)] text-xs">
                    <SmileyIcon className="w-4 h-4 text-[var(--accent)]" />
                    On track this month
                  </div>
                </div>
                <div className="analytics-widget bg-[var(--bg-card)] rounded-xl p-4 border border-[var(--border)] shadow-[var(--shadow)]">
                  <div className="text-[var(--text-muted)] text-xs font-medium mb-1">Today&apos;s Visitors</div>
                  <div className="text-[var(--text)] font-bold text-xl">17,058</div>
                  <div className="mt-1 h-8 flex items-end gap-0.5">
                    {[40, 55, 35, 70, 45, 65, 80].map((h, i) => (
                      <div key={i} className="flex-1 bg-[var(--accent)] rounded-t opacity-80" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <p className="text-emerald-600 text-xs font-medium mt-1">+9.3% from yesterday</p>
                </div>
              </div>
            </div>

            {/* Main dashboard mockup (light) */}
            <div className="showcase-light max-w-[640px] w-full mx-auto lg:ml-auto">
              <div className="flex items-center justify-between px-5 py-4 bg-[var(--bg-hero-card)] border-b border-[var(--border)]">
                <div className="flex items-center gap-2 font-bold text-base text-[var(--text)]">
                  <span className="logo-icon w-7 h-7 text-[0.9rem]">C</span>
                  CRM Basegrid
                </div>
                <div className="flex items-center gap-2 py-2 px-3 bg-white rounded-lg border border-[var(--border)] text-[var(--text-muted)] text-[0.85rem]">
                  <SearchIcon className="w-4 h-4 opacity-70" />
                  Search
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] min-h-[380px]">
                <aside className="showcase-sidebar p-4 pl-3 bg-[var(--bg-hero-card)] border-r border-[var(--border)] flex flex-wrap lg:flex-col gap-1 border-b lg:border-b-0 border-[var(--border)]">
                  {[
                    { label: "Home", active: true, icon: HomeIcon },
                    { label: "Contacts", icon: PersonIcon },
                    { label: "Calendar", icon: CalendarIcon },
                    { label: "Add Contact", icon: AddIcon },
                    { label: "Settings", icon: SettingsIcon },
                    { label: "Help Center", icon: HelpIcon },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`nav-item flex items-center gap-2.5 py-2.5 px-3 rounded-lg text-[var(--text-muted)] text-[0.8rem] mb-0.5 ${item.active ? "active" : ""}`}
                    >
                      <item.icon className="w-[18px] h-[18px] shrink-0" />
                      {item.label}
                    </div>
                  ))}
                </aside>
                <div className="showcase-main p-5 bg-white">
                  <h2 className="showcase-title text-[1.1rem] font-bold mb-4 text-[var(--text)]">Team Dashboard</h2>
                  <div className="flex gap-4 mb-4">
                    <select className="py-2 px-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg text-[var(--text)] text-[0.8rem]">
                      <option>All Members</option>
                    </select>
                    <select className="py-2 px-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg text-[var(--text)] text-[0.8rem]">
                      <option>All Projects</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                    <div className="showcase-kpi bg-[var(--bg)] rounded-lg p-3 text-center border border-[var(--border)]">
                      <div className="text-[0.7rem] text-[var(--text-muted)] mb-1">Total Leads</div>
                      <div className="value blue text-[1.25rem] font-bold">5</div>
                    </div>
                    <div className="showcase-kpi bg-[var(--bg)] rounded-lg p-3 text-center border border-[var(--border)]">
                      <div className="text-[0.7rem] text-[var(--text-muted)] mb-1">Pending Follow-Ups</div>
                      <div className="value orange text-[1.25rem] font-bold">0</div>
                    </div>
                    <div className="showcase-kpi bg-[var(--bg)] rounded-lg p-3 text-center border border-[var(--border)]">
                      <div className="text-[0.7rem] text-[var(--text-muted)] mb-1">Overdue Follow-Ups</div>
                      <div className="value red text-[1.25rem] font-bold">0</div>
                    </div>
                    <div className="showcase-kpi bg-[var(--bg)] rounded-lg p-3 text-center border border-[var(--border)]">
                      <div className="text-[0.7rem] text-[var(--text-muted)] mb-1">Unanswered Emails</div>
                      <div className="value purple text-[1.25rem] font-bold">0</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="showcase-chart bg-[var(--bg)] rounded-lg p-3 border border-[var(--border)] text-[0.75rem] text-[var(--text-muted)]">
                      <div className="chart-title font-semibold text-[var(--text)] mb-2">Follow-Up Status</div>
                      <div className="chart-placeholder" />
                    </div>
                    <div className="showcase-chart pie bg-[var(--bg)] rounded-lg p-3 border border-[var(--border)] text-[0.75rem] text-[var(--text-muted)]">
                      <div className="chart-title font-semibold text-[var(--text)] mb-2">Team Communication Gaps</div>
                      <div className="chart-placeholder" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly bar chart strip (analytics) */}
          <div className="mt-8 bg-[var(--bg-card)] rounded-xl p-4 border border-[var(--border)] shadow-[var(--shadow)] max-w-[520px] lg:max-w-none mx-auto">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[var(--text)] font-semibold text-sm">Weekly activity</span>
              <span className="text-[var(--text-muted)] text-xs">Sun – Fri</span>
            </div>
            <div className="flex items-end gap-2 h-12">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"].map((day, i) => (
                <div key={day} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t bg-[var(--accent)] min-h-[4px] opacity-90"
                    style={{ height: `${[35, 60, 45, 85, 55, 70][i]}%` }}
                  />
                  <span className="text-[var(--text-muted)] text-[10px]">{day}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics & CRM dashboards section */}
        <section className="bg-white py-16 px-6 md:px-12 border-y border-[var(--border)]">
          <div className="max-w-[1400px] mx-auto">
            <h2 className="text-center text-2xl font-bold mb-4 text-[var(--text)]">Analytics & CRM at a glance</h2>
            <p className="text-center text-[var(--text-muted)] text-sm max-w-xl mx-auto mb-12">
              Real-time dashboards, pipeline views, and contact insights — all in one place.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="crm-dashboard-card bg-[var(--bg)] rounded-[var(--radius-lg)] p-5 border border-[var(--border)] shadow-[var(--shadow)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[var(--text)] font-semibold text-sm">Revenue</span>
                  <span className="text-[var(--accent)] text-xs font-medium">View As</span>
                </div>
                <p className="text-[var(--text-muted)] text-xs mb-3">Today Revenue</p>
                <div className="flex items-end gap-1 h-16">
                  {[50, 70, 45, 90, 60, 75, 85].map((h, i) => (
                    <div key={i} className="flex-1 bg-[var(--accent)] rounded-t opacity-80" style={{ height: `${h}%` }} />
                  ))}
                </div>
                <p className="mt-2 text-[var(--accent)] font-bold text-sm">$290</p>
              </div>
              <div className="crm-dashboard-card bg-[var(--bg)] rounded-[var(--radius-lg)] p-5 border border-[var(--border)] shadow-[var(--shadow)]">
                <div className="text-[var(--text)] font-semibold text-sm mb-4">Sales Pipeline</div>
                <div className="flex gap-2 items-end h-20">
                  <div className="flex-1 rounded-t bg-rose-400 h-[70%]" />
                  <div className="flex-1 rounded-t bg-emerald-400 h-[85%]" />
                  <div className="flex-1 rounded-t bg-sky-400 h-[60%]" />
                  <div className="flex-1 rounded-t bg-amber-400 h-[45%]" />
                  <div className="flex-1 rounded-t bg-teal-400 h-[55%]" />
                </div>
                <div className="flex gap-3 mt-2 text-[10px] text-[var(--text-muted)]">
                  <span>Lead</span>
                  <span>Qualified</span>
                  <span>Proposal</span>
                  <span>Negotiation</span>
                  <span>Won</span>
                </div>
              </div>
              <div className="crm-dashboard-card bg-[var(--bg)] rounded-[var(--radius-lg)] p-5 border border-[var(--border)] shadow-[var(--shadow)]">
                <div className="text-[var(--text)] font-semibold text-sm mb-4">Contacts</div>
                <div className="space-y-2">
                  {["Sarah Chen", "Mike Johnson", "Emma Wilson"].map((name, i) => (
                    <div key={name} className="flex items-center gap-2 py-1.5 px-2 rounded-lg bg-white border border-[var(--border)]">
                      <div className="w-6 h-6 rounded-full bg-[var(--accent)] opacity-70" />
                      <span className="text-[var(--text)] text-xs font-medium">{name}</span>
                      {i === 0 && <span className="ml-auto text-[10px] text-[var(--accent)]">Active</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="features px-6 md:px-12 py-16 max-w-[1400px] mx-auto">
          <h2 className="text-center text-2xl font-bold mb-12 text-[var(--text)]">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sales Automation",
                desc: "Automate repetitive tasks and boost sales. Keep your team focused on closing deals.",
                icon: ChartIcon,
                visual: "bar",
              },
              {
                title: "Multi-Channel Support",
                desc: "Reach customers on their preferred channels. Email, calendar, and contacts in one place.",
                icon: MessageIcon,
                visual: "channels",
              },
              {
                title: "Industry-Tailored Solutions",
                desc: "Built for ecommerce and insurance. Manage leads, follow-ups, and SLAs your way.",
                icon: BuildingIcon,
                visual: "building",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="feature-card bg-[var(--bg-card)] border border-[var(--border)] rounded-[var(--radius-lg)] p-8 transition-all shadow-[var(--shadow)]"
              >
                <div className="w-12 h-12 bg-[var(--accent-soft)] rounded-xl flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6 text-[var(--accent)]" />
                </div>
                <h3 className="text-[1.2rem] font-semibold mb-3 text-[var(--text)]">{f.title}</h3>
                <p className="text-[var(--text-muted)] text-[0.95rem] leading-relaxed mb-4">{f.desc}</p>
                {f.visual === "bar" && (
                  <div className="flex items-end gap-0.5 h-10 pt-2">
                    {[40, 65, 50, 80, 55].map((h, i) => (
                      <div key={i} className="flex-1 bg-[var(--accent)] rounded-t opacity-80" style={{ height: `${h}%` }} />
                    ))}
                    <span className="text-[var(--accent)] text-xs font-medium ml-2 flex items-center gap-1">
                      <CheckIcon className="w-4 h-4" /> Completed
                    </span>
                  </div>
                )}
                {f.visual === "channels" && (
                  <div className="flex gap-2 pt-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-lg border-2 border-[var(--accent)] bg-[var(--accent-soft)]" />
                    ))}
                  </div>
                )}
                {f.visual === "building" && (
                  <div className="pt-2">
                    <BuildingIcon className="w-10 h-10 text-[var(--accent)] opacity-70" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-6 md:px-12 bg-[var(--bg)] border-t border-[var(--border)]">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-[var(--accent-soft)] text-[var(--accent)] mb-4">
                Testimonials
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-4">
                Check Out Our Customers&apos; Feedback
              </h2>
              <p className="text-[var(--text-muted)] text-base md:text-lg max-w-2xl mx-auto">
                Uncover the essential benefits that position CRM Basegrid as the premier solution for relationship management.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto pb-2">
              {[
                {
                  rating: "5.0",
                  headline: "Our sales process is now incredibly streamlined!",
                  body: "CRM Basegrid has revolutionized our sales workflow. We can effortlessly manage deals, keep tabs on progress, and finalize transactions more quickly. It's truly transformative for our team!",
                  name: "Aisha Noor",
                  title: "Marketing Director at Innovatech",
                },
                {
                  rating: "5.0",
                  headline: "Our collected data is invaluable.",
                  body: "Real-time engagement insights and automated reports help us understand our customers' needs better than ever, significantly enhancing customer satisfaction.",
                  name: "Michael T.",
                  title: "Founder of WealthWise",
                },
                {
                  rating: "5.0",
                  headline: "The customer team experience is seamless.",
                  body: "With seamless collaboration and clear visibility into every touchpoint, our team consistently delivers. CRM Basegrid has become essential to our operations.",
                  name: "Sarah Chen",
                  title: "COO at Atlas Solutions",
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className="testimonial-card flex-shrink-0 md:flex-shrink bg-[var(--bg-card)] rounded-xl p-6 border border-[var(--border)] shadow-[var(--shadow)] hover:shadow-[var(--shadow-lg)] transition-shadow min-w-0"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[var(--text)] font-bold text-sm">{t.rating}</span>
                    <div className="flex gap-0.5" aria-hidden="true">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <StarIcon key={i} className="w-4 h-4 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-[var(--text)] font-bold text-base mb-2 leading-snug">{t.headline}</h3>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-5">{t.body}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--accent)] opacity-80 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-[var(--text)] font-semibold text-sm truncate">{t.name}</p>
                      <p className="text-[var(--text-muted)] text-xs truncate">{t.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-16 px-6 md:px-12 bg-white border-t border-[var(--border)]">
          <div className="max-w-[1400px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-4">
                Choose the <span className="text-[var(--accent)]">Perfect Plan</span> for Your Business
              </h2>
              <p className="text-[var(--text-muted)] text-base md:text-lg max-w-2xl mx-auto mb-8">
                Whether you&apos;re just getting started or need advanced features for a growing team, we have the right plan to help you manage your customer relationships and drive success.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="#pricing-cards" className="btn-primary px-6 py-3 rounded-xl">
                  Check this out
                </Link>
                <Link href="#" className="btn-outline px-6 py-3 rounded-xl">
                  Free Trial
                </Link>
              </div>
            </div>
            <div id="pricing-cards" className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "Starter",
                  subtitle: "For small companies.",
                  price: "39",
                  features: [
                    "Basic CRM tools",
                    "1 Sales pipeline",
                    "Customer support",
                    "2 Marketing automation",
                    "3 Reporting and analytics",
                  ],
                  popular: false,
                },
                {
                  name: "Professional",
                  subtitle: "For growing teams.",
                  price: "59",
                  features: [
                    "Basic CRM tools",
                    "Customizable dashboards",
                    "AI-powered insights",
                    "5 Marketing automation",
                    "10 Reporting and analytics",
                  ],
                  popular: true,
                },
                {
                  name: "Enterprise",
                  subtitle: "For professional companies.",
                  price: "199",
                  features: [
                    "Basic CRM tools",
                    "Customizable dashboards",
                    "AI-powered insights",
                    "Unlimited Marketing automation",
                    "Unlimited Reporting and analytics",
                  ],
                  popular: false,
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl border-2 p-6 flex flex-col ${
                    plan.popular
                      ? "border-[var(--accent)] bg-[var(--accent-soft)] shadow-[var(--shadow-lg)]"
                      : "border-[var(--border)] bg-[var(--bg-card)] shadow-[var(--shadow)]"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-amber-400 text-[var(--text)]">
                      Popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-[var(--text)] mb-1">{plan.name}</h3>
                  <p className="text-[var(--text-muted)] text-sm mb-4">{plan.subtitle}</p>
                  <div className="mb-6">
                    <span className="text-2xl md:text-3xl font-bold text-[var(--text)]">${plan.price}</span>
                    <span className="text-[var(--text-muted)] text-sm"> /month</span>
                  </div>
                  <p className="text-[var(--text)] font-semibold text-sm mb-3">Include:</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[var(--text-muted)] text-sm">
                        <CheckIcon className="w-5 h-5 text-[var(--accent)] flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#"
                    className="block w-full text-center btn-primary py-3.5 rounded-xl no-underline"
                  >
                    Get Started Now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="trust bg-[var(--bg-hero-card)] py-12 px-6 md:px-12 border-t border-[var(--border)]">
          <div className="max-w-[1400px] mx-auto text-center">
            <h2 className="text-[1.1rem] font-semibold text-[var(--text)] mb-8">
              Trusted by 2000+ ecommerce and Insurance companies
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-10">
              {["PayPal", "PHILIPS", "MIGROS", "PrestaShop", "SAMSUNG", "Milestone"].map((name) => (
                <span key={name} className="text-lg font-bold text-[var(--text-muted)]">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="px-6 md:px-12 py-12 max-w-[1400px] mx-auto">
          <div
            className="rounded-2xl overflow-hidden text-center px-8 py-14 md:py-16 md:px-12"
            style={{
              background: "linear-gradient(90deg, var(--accent-hover) 0%, var(--accent) 50%, var(--accent-light) 100%)",
            }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight max-w-2xl mx-auto" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.25)" }}>
              Ready to Transform Your Customer Management?
            </h2>
            <p className="text-white text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.25)" }}>
              Join thousands of businesses that are already growing faster with our platform. Sign up now and take control of your customer relationships like never before!
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold text-white bg-[var(--text)] hover:opacity-90 transition-opacity no-underline"
              >
                Get Started
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-semibold border-2 border-white text-white bg-transparent hover:bg-white hover:text-[var(--accent)] transition-colors no-underline"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center py-8 text-[var(--text-muted)] text-sm border-t border-[var(--border)] bg-white">
        <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
          <Link href="/privacy-policy" className="text-[var(--accent)] hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="text-[var(--accent)] hover:underline">Terms and Conditions</Link>
        </div>
        © 2026 CRM Basegrid. All rights reserved.
      </footer>
    </>
  );
}

function PlayIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function SmileyIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
    </svg>
  );
}

function CheckIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
    </svg>
  );
}

function StarIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function SearchIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
  );
}

function HomeIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
}

function PersonIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </svg>
  );
}

function CalendarIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
    </svg>
  );
}

function AddIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </svg>
  );
}

function SettingsIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
    </svg>
  );
}

function HelpIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
    </svg>
  );
}

function ChartIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
    </svg>
  );
}

function MessageIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z" />
    </svg>
  );
}

function BuildingIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
    </svg>
  );
}
