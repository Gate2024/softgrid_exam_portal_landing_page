const kpis = [
  ['Total Exams', '148', '+12 this month'],
  ['Candidates', '5,240', '+340 this month'],
  ['Questions', '12,800', '+800 this month'],
  ['Avg Score', '82.4%', '+3.1% this month']
]

const exams = [
  ['Mathematics — Mid-Term', 'Sep 1, 2026', 'Completed', '84%'],
  ['Science — Unit Test', 'Aug 28, 2026', 'Completed', '78%'],
  ['English — Final Exam', 'Sep 5, 2026', 'Scheduled', '—']
]

function KpiCard ({ label, value, trend }) {
  return <div className="dashboard-kpi"><span>{label}</span><div><strong>{value}</strong><em>{trend}</em></div></div>
}

function PerformanceChart () {
  return <div className="dashboard-panel performance-panel"><h3>Candidate Performance Trend</h3><svg viewBox="0 0 680 82" preserveAspectRatio="none" aria-hidden="true"><path d="M0 49 C76 46 130 43 208 45 C286 47 336 50 412 45 C492 40 560 37 680 40" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" /></svg></div>
}

function SubjectChart () {
  const bars = [66, 49, 85, 41, 74]
  return <div className="dashboard-panel subject-panel"><h3>Candidates by Subject</h3><div className="subject-bars" aria-hidden="true">{bars.map((height, index) => <i style={{ height: `${height}%` }} key={index} />)}</div></div>
}

function RecentExaminations () {
  return <div className="dashboard-panel recent-panel"><h3>Recent Examinations</h3><div className="exam-list">{exams.map(([name, date, status, score]) => <div className="exam-row" key={name}><span className="exam-name">{name}</span><span className="exam-date">{date}</span><span className={`exam-status ${status === 'Scheduled' ? 'scheduled' : ''}`}>{status}</span><span className="exam-score">{score}</span></div>)}</div></div>
}

function DashboardMockup () {
  return <div className="dashboard-mockup"><div className="dashboard-browser"><div className="browser-dots"><i /><i /><i /></div><span>examportal.app/dashboard</span></div><div className="dashboard-content"><div className="dashboard-kpis">{kpis.map(([label, value, trend]) => <KpiCard key={label} label={label} value={value} trend={trend} />)}</div><div className="dashboard-chart-row"><PerformanceChart /><SubjectChart /></div><RecentExaminations /></div></div>
}

function CalloutLabel ({ children, className }) {
  return <div className={`dashboard-callout ${className}`}><span>{children}</span><i /></div>
}

function DashboardShowcase () {
  return <section className="dashboard-showcase" aria-labelledby="dashboard-showcase-title"><div className="dashboard-showcase__inner"><header className="dashboard-showcase__header"><p>Product</p><h2 id="dashboard-showcase-title"><span>Powerful Dashboard.</span><strong>Complete Control.</strong></h2><div>Every metric, every exam, every candidate — all visible at a glance.</div></header><div className="dashboard-stage"><CalloutLabel className="callout-live">Live statistics</CalloutLabel><CalloutLabel className="callout-trend">Trend analytics</CalloutLabel><CalloutLabel className="callout-status">Exam status</CalloutLabel><DashboardMockup /></div></div></section>
}

export default DashboardShowcase
