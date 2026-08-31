import { useState, useEffect } from 'react'

const MODULES = [
  {
    n: '01',
    title: 'Front Desk & Guest Registration',
    body: 'Register visiting families and long-stay guests in under a minute, with ID capture and ward or department linkage built in.',
  },
  {
    n: '02',
    title: 'Room & Ward Management',
    body: 'See every room across every block — occupied, held, or ready — updated the moment housekeeping marks it clean.',
  },
  {
    n: '03',
    title: 'Reservations',
    body: 'Hold rooms against expected admissions, transfers, or extended family stays, with automatic release if a booking lapses.',
  },
  {
    n: '04',
    title: 'Check-In & Check-Out',
    body: 'Move a guest from arrival to departure in a guided flow — deposits, ID, room assignment, and folio closure in sequence.',
  },
  {
    n: '05',
    title: 'Payments',
    body: 'Take deposits, extend stays, and settle final bills, with every transaction tied to a guest folio and shift report.',
  },
  {
    n: '06',
    title: 'Housekeeping',
    body: 'Assign rooms to staff, track turnaround time, and flag maintenance issues before the next guest arrives.',
  },
  {
    n: '07',
    title: 'Reports',
    body: 'Occupancy, revenue, average stay length, and staff performance, exportable at the end of any shift or month.',
  },
]

const WORKFLOW = [
  { label: 'Reserve', detail: 'Room held against an admission or family request' },
  { label: 'Register', detail: 'Guest details and ID recorded at the desk' },
  { label: 'Check in', detail: 'Room assigned, deposit taken, key issued' },
  { label: 'Stay', detail: 'Housekeeping and requests tracked daily' },
  { label: 'Check out', detail: 'Folio settled, room released to housekeeping' },
]

function useRevealOnLoad() {
  const [revealed, setRevealed] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 60)
    return () => clearTimeout(t)
  }, [])
  return revealed
}

export default function App() {
  const revealed = useRevealOnLoad()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="page">
      <header className="topbar">
        <div className="wrap topbar-inner">
          <div className="brand">
            <svg className="brand-mark" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M14 2L25 8V20L14 26L3 20V8L14 2Z" stroke="currentColor" strokeWidth="1.4" />
              <path d="M14 8V20M9 11V17M19 11V17" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            <span className="brand-name">Meridian</span>
          </div>

          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            <a href="#modules" onClick={() => setMenuOpen(false)}>Modules</a>
            <a href="#workflow" onClick={() => setMenuOpen(false)}>Workflow</a>
            <a href="#roles" onClick={() => setMenuOpen(false)}>Roles</a>
            <a className="nav-cta" href="#login" onClick={() => setMenuOpen(false)}>Sign in</a>
          </nav>

          <button
            className="menu-btn"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <main>
        <section className={`hero wrap ${revealed ? 'is-revealed' : ''}`}>
          <p className="hero-kicker">Hospital hospitality management</p>
          <h1 className="hero-title">
            One system for every guest,
            <br />
            from arrival to departure.
          </h1>
          <p className="hero-sub">
            Meridian runs the front desk, rooms, and housekeeping for the families
            and long-stay guests your hospital accommodates — separate from clinical
            records, built for the pace of a front desk.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#login">Sign in to your desk</a>
            <a className="btn btn-ghost" href="#modules">See what it does</a>
          </div>

          <dl className="hero-stats">
            <div>
              <dt>Guest record to room key</dt>
              <dd>Under 90 seconds</dd>
            </div>
            <div>
              <dt>Room status</dt>
              <dd>Updated in real time</dd>
            </div>
            <div>
              <dt>Shift reports</dt>
              <dd>Ready at hand-off</dd>
            </div>
          </dl>
        </section>

        <section className="workflow" id="workflow">
          <div className="wrap">
            <h2 className="section-title">How a stay moves through Meridian</h2>
            <ol className="workflow-strip">
              {WORKFLOW.map((step, i) => (
                <li key={step.label} className="workflow-step">
                  <div className="workflow-step-top">
                    <span className="workflow-index">{String(i + 1).padStart(2, '0')}</span>
                    <span className="workflow-label">{step.label}</span>
                  </div>
                  <p className="workflow-detail">{step.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="modules" id="modules">
          <div className="wrap">
            <div className="modules-head">
              <h2 className="section-title">Everything the front desk needs</h2>
              <p className="modules-sub">Seven modules, one shared record for every guest.</p>
            </div>
            <div className="directory">
              {MODULES.map((m) => (
                <div className="directory-row" key={m.n}>
                  <span className="directory-n">{m.n}</span>
                  <div className="directory-copy">
                    <h3>{m.title}</h3>
                    <p>{m.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="roles" id="roles">
          <div className="wrap roles-grid">
            <div className="roles-copy">
              <h2 className="section-title">Built for two logins, not one</h2>
              <p>
                Administrators configure rooms, rates, and staff access.
                Receptionists live in a single dashboard built for the desk —
                arrivals, departures, and room status, without a settings menu
                in sight.
              </p>
            </div>
            <div className="role-cards">
              <div className="role-card">
                <h3>Administrator</h3>
                <ul>
                  <li>Configure rooms, wards, and rate plans</li>
                  <li>Manage receptionist and housekeeping accounts</li>
                  <li>Review reports across every shift</li>
                </ul>
                <a href="#login" className="role-link">Administrator sign in →</a>
              </div>
              <div className="role-card role-card-accent">
                <h3>Receptionist</h3>
                <ul>
                  <li>Register guests and take payments</li>
                  <li>Check guests in and out</li>
                  <li>Send rooms to housekeeping and back</li>
                </ul>
                <a href="#login" className="role-link">Receptionist sign in →</a>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-band" id="login">
          <div className="wrap cta-band-inner">
            <div>
              <h2 className="section-title">Ready for your front desk</h2>
              <p>Sign in with the credentials issued by your hospital administrator.</p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary btn-large" href="#">Administrator sign in</a>
              <a className="btn btn-outline btn-large" href="#">Receptionist sign in</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <div className="brand brand-small">
            <svg className="brand-mark" width="20" height="20" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M14 2L25 8V20L14 26L3 20V8L14 2Z" stroke="currentColor" strokeWidth="1.4" />
              <path d="M14 8V20M9 11V17M19 11V17" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            <span>Meridian</span>
          </div>
          <p className="footer-note">Hospital hospitality management system.</p>
        </div>
      </footer>
    </div>
  )
}
