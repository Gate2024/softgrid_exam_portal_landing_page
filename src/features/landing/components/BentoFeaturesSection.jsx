import symbolOne from '../../../assets/icons/bentofeaturesection/symbol_1.svg'
import symbolTwo from '../../../assets/icons/bentofeaturesection/symbol_2.svg'
import symbolThree from '../../../assets/icons/bentofeaturesection/symbol_3.svg'
import symbolFour from '../../../assets/icons/bentofeaturesection/symbol_4.svg'
import symbolFive from '../../../assets/icons/bentofeaturesection/symbol_5.svg'
import symbolSix from '../../../assets/icons/bentofeaturesection/symbol_6.svg'

const featureCards = [
  { title: 'Online Examination Management', description: 'Create, schedule, conduct, and manage online examinations effortlessly from a single, intuitive administrative dashboard.', icon: symbolOne, tone: 'blue' },
  { title: 'Question Bank Management', description: 'Organize thousands of questions by subjects, topics, difficulty levels, and categories with smart filters and bulk LaTeX / CSV imports.', icon: symbolTwo, tone: 'indigo' },
  { title: 'Automatic Result Generation', description: 'Automatically evaluate objective examinations, generate normalized percentiles, and publish candidate rankings the instant the exam ends.', icon: symbolThree, tone: 'green' },
  { title: 'Candidate Performance Reports', description: 'Analyze candidate scores, track longitudinal performance trends, inspect subject weak-spots, and view individual test-taking history.', icon: symbolFour, tone: 'cyan' },
  { title: 'Secure Authentication & Roles', description: 'Protect examination data with secure login, fine-grained permissions for proctors and invigilators, and role-based access control.', icon: symbolFive, tone: 'rose' },
  { title: 'Responsive User Interface', description: 'Seamless and lag-free examination experience optimized for desktop browsers, school lab tablets, and mobile devices without plugin installs.', icon: symbolSix, tone: 'amber' }
]

function BentoFeaturesSection () {
  return (
    <section className="bento-features" id="features" aria-labelledby="features-title">
      <div className="bento-features__inner">
        <header className="bento-features__header">
          <p className="bento-features__eyebrow">Features</p>
          <h2 id="features-title"><span>Everything You Need to Manage</span><strong>Online Exams</strong></h2>
          <p className="bento-features__description">One comprehensive platform to handle every aspect of online examination — from question authoring to automated evaluation and certified records.</p>
        </header>
        <div className="bento-features__grid">
          {featureCards.map(({ title, description, icon, tone }) => (
            <article className="bento-card" key={title}>
              <div className={`bento-card__icon bento-card__icon--${tone}`}><img src={icon} alt="" /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BentoFeaturesSection
