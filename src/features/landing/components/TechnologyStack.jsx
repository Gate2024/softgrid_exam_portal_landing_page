import reactIcon from '../../../assets/icons/technologystacksection/react.svg'
import nodeIcon from '../../../assets/icons/technologystacksection/nodejs.svg'
import mongoIcon from '../../../assets/icons/technologystacksection/mongodb.svg'
import redisIcon from '../../../assets/icons/technologystacksection/redis.svg'
import dockerIcon from '../../../assets/icons/technologystacksection/docker.svg'

const technologies = [
  { name: 'React.js', icon: reactIcon, iconClass: 'technology-stack__icon--react' },
  { name: 'Node.js', icon: nodeIcon, iconClass: 'technology-stack__icon--node' },
  { name: 'MongoDB', icon: mongoIcon, iconClass: 'technology-stack__icon--mongodb' },
  { name: 'Redis Cache', icon: redisIcon, iconClass: 'technology-stack__icon--redis' },
  { name: 'Docker & K8s', icon: dockerIcon, iconClass: 'technology-stack__icon--docker' },
]

function TechPill({ name, icon, iconClass }) {
  return (
    <div className="technology-stack__pill">
      <img className={`technology-stack__icon ${iconClass}`} src={icon} alt="" />
      <span>{name}</span>
    </div>
  )
}

function TechnologyStack() {
  return (
    <section className="technology-stack" id="technology" aria-labelledby="technology-stack-title">
      <div className="technology-stack__inner">
        <p className="technology-stack__label">TECHNOLOGY</p>
        <h2 id="technology-stack-title">Built with Modern Technology</h2>
        <div className="technology-stack__pills">
          {technologies.map((technology) => (
            <TechPill key={technology.name} {...technology} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnologyStack
