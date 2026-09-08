import examIcon from '../../../assets/icons/benefitssection/ph_exam.svg'
import resultsIcon from '../../../assets/icons/benefitssection/icon-park-outline_mail-review.svg'
import securityIcon from '../../../assets/icons/benefitssection/boxicons_shield-half.svg'
import conductedIcon from '../../../assets/icons/benefitssection/healthicons_i-exam-multiple-choice-outline.svg'

const checklistColumns = [
  ['Reduce manual evaluation effort', 'Improve examination accuracy', 'Monitor candidate performance', 'Improve examination security'],
  ['Save time and operational costs', 'Centralize all examination data', 'Generate reports instantly', 'Scale from small tests to mass exams']
]

const benefitStats = [
  { value: '98%', label: 'Evaluation Accuracy', icon: examIcon, tone: 'accuracy' },
  { value: '5x', label: 'Faster Results', icon: resultsIcon, tone: 'results' },
  { value: '99.9%', label: 'Platform Uptime', icon: securityIcon, tone: 'uptime' },
  { value: '50K+', label: 'Exams Conducted', icon: conductedIcon, tone: 'conducted' }
]

function BenefitChecklistItem ({ children }) {
  return <li><span className="benefit-check" aria-hidden="true"><i /></span><span>{children}</span></li>
}

function BenefitStatCard ({ value, label, icon, tone }) {
  return <article className={`benefit-stat benefit-stat--${tone}`}><img src={icon} alt="" /><strong>{value}</strong><p>{label}</p></article>
}

function BenefitsSection () {
  return (
    <section className="benefits-section" id="benefits" aria-labelledby="benefits-title">
      <div className="benefits-section__inner">
        <div className="benefits-section__copy">
          <p className="benefits-section__eyebrow">Benefits</p>
          <h2 id="benefits-title"><span>Designed to Make</span><strong>Examinations Easier</strong></h2>
          <p className="benefits-section__description">ExamPortal removes the friction from every stage of examination — so your team can focus on outcomes, not operations.</p>
          <div className="benefits-checklist">
            {checklistColumns.map((column, index) => <ul key={index}>{column.map((item) => <BenefitChecklistItem key={item}>{item}</BenefitChecklistItem>)}</ul>)}
          </div>
        </div>
        <div className="benefits-stats">{benefitStats.map((stat) => <BenefitStatCard key={stat.label} {...stat} />)}</div>
      </div>
    </section>
  )
}

export default BenefitsSection
