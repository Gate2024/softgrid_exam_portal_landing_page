import schoolsIcon from '../../../assets/icons/trustedbysection/schools.svg'
import collegesIcon from '../../../assets/icons/trustedbysection/college_&_uni.svg'
import coachingIcon from '../../../assets/icons/trustedbysection/coaching_hub.svg'
import trainingIcon from '../../../assets/icons/trustedbysection/training_orgs.svg'
import corporateIcon from '../../../assets/icons/securitysection/group.svg'

const trustedInstitutions = [
  { label: 'Schools', icon: schoolsIcon },
  { label: 'Colleges & Unis', icon: collegesIcon },
  { label: 'Coaching Hubs', icon: coachingIcon },
  { label: 'Training Orgs', icon: trainingIcon },
  { label: 'Corporate Teams', icon: corporateIcon, iconClassName: 'trusted-by__badge-icon--corporate' }
]

function TrustedBySection () {
  return (
    <section className="trusted-by" aria-labelledby="trusted-by-title">
      <div className="trusted-by__inner">
        <p className="trusted-by__label" id="trusted-by-title">Built for modern education &amp; training institutions worldwide</p>
        <div className="trusted-by__badges">
          {trustedInstitutions.map(({ label, icon, iconClassName }) => (
            <div className="trusted-by__badge" key={label}>
              {icon && <img className={iconClassName} src={icon} alt="" />}
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedBySection
