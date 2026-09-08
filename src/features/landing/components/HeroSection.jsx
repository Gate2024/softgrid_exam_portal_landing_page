import laptop from '../../../assets/images/hero/chatgpt_image.png'
import fileSymbol from '../../../assets/icons/hero/file_symbol.svg'
import chart from '../../../assets/icons/hero/glowing_svg.svg'
import cap from '../../../assets/icons/hero/cap_symbol.png'
import university from '../../../assets/icons/hero/university_symbol.svg'

function HolographicSymbol ({ className, src, alt }) {
  return <div className={`holo-symbol ${className}`}><img src={src} alt={alt} /></div>
}

function QuestionBankCard () {
  return <div className="hero-card question-bank-card"><small>Question Bank Asset</small><strong>12,450 Items</strong><div className="question-meta"><span>+20.8%</span><em>Verified LaTeX &amp; Code</em></div><div className="card-ribbon"><img src={university} alt="" /> <b>SoftGrid Core</b><em>SEC-L3</em></div></div>
}

function AnalyticsCard () {
  return <div className="hero-card analytics-card"><div className="analytics-heading"><small>Real-Time Submissions</small><b>Live</b></div><strong>6,850/hr</strong><img className="analytics-chart" src={chart} alt="Submission activity chart" /></div>
}

function IntegrityCard () {
  return <div className="hero-card integrity-card"><span className="integrity-icon"><img src={fileSymbol} alt="" /></span><div><strong>Integrity Stream</strong><small>AI Multi-Cam Active</small></div><b>+100% OK</b></div>
}

function DashboardPreview () {
  return <div className="visual-stage" aria-label="SoftGrid ExamPro dashboard preview"><div className="hero-glow central-glow" /><div className="hero-glow left-glow" /><div className="hero-glow right-glow" /><QuestionBankCard /><AnalyticsCard /><HolographicSymbol className="left-symbol" src={fileSymbol} alt="Secure file" /><HolographicSymbol className="right-symbol" src={cap} alt="Graduation cap" /><IntegrityCard /><img className="hero-laptop" src={laptop} alt="SoftGrid ExamPro examination dashboard on a laptop" /></div>
}

function HeroSection () {
  return <section className="hero" id="top"><DashboardPreview /><div className="hero-copy"><h1><span>Smart Online</span><strong>Examination Simplification</strong></h1><p>Create, manage, conduct, and evaluate online examinations with a secure and powerful platform built for modern institutions.</p><div className="hero-actions"><a className="button primary-button" href="#get-started">Get started <span aria-hidden="true">↗</span></a><a className="button secondary-button" href="#demo">Watch Demo <span className="play" aria-hidden="true"><i /></span></a></div></div></section>
}

export default HeroSection
