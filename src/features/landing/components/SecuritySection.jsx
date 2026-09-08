import shieldSecurityIcon from '../../../assets/icons/securitysection/grommet-icons_shield-security.svg'
import roleIcon from '../../../assets/icons/securitysection/group.svg'
import protectedDataIcon from '../../../assets/icons/securitysection/boxicons_shield-quarter.svg'
import controlledAccessIcon from '../../../assets/icons/securitysection/carbon_ibm-z-os-ai-control-interface.svg'
import processingIcon from '../../../assets/icons/securitysection/hugeicons_loading-02.svg'
import monitoringIcon from '../../../assets/icons/securitysection/charm_monitor-arrow.svg'

const securityCards = [
  { icon: shieldSecurityIcon, title: 'Secure Authentication', description: 'Multi-layer login with OTP and session management.' },
  { icon: roleIcon, title: 'Role-Based Access', description: 'Granular permissions for admins, examiners, and candidates.' },
  { icon: protectedDataIcon, title: 'Protected Exam Data', description: 'End-to-end encrypted question and result storage.' },
  { icon: controlledAccessIcon, title: 'Controlled Exam Access', description: 'Time-bound access windows with IP whitelisting.' },
  { icon: processingIcon, title: 'Reliable Processing', description: 'Zero-downtime result calculation with audit trails.' },
  { icon: monitoringIcon, title: 'Candidate Monitoring', description: 'Tab-switch detection and activity logging during exams.' }
]

function SecurityCard ({ icon, title, description }) {
  return <article className="security-card"><div className="security-card__icon"><img src={icon} alt="" /></div><h3>{title}</h3><p>{description}</p></article>
}

function SecuritySection () {
  return <section className="security-section" id="security" aria-labelledby="security-title"><div className="security-section__inner"><header className="security-section__header"><p>Security</p><h2 id="security-title"><span>Secure. Reliable.</span><strong>Built for Fair Examinations.</strong></h2><div>Every aspect of the platform is engineered to protect examination integrity.</div></header><div className="security-grid">{securityCards.map((card) => <SecurityCard key={card.title} {...card} />)}</div></div></section>
}

export default SecuritySection
