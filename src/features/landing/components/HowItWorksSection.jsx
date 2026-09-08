const steps = [
  { number: '01', title: 'Create Exam', description: 'Set exam details, duration, subjects, and rules.' },
  { number: '02', title: 'Add Questions', description: 'Select from the question bank or create new questions.' },
  { number: '03', title: 'Conduct Exam', description: 'Candidates securely attend the examination online.' },
  { number: '04', title: 'Evaluate & Analyze', description: 'Generate results automatically and review detailed performance reports.' }
]

function HowItWorksSection () {
  return (
    <section className="how-it-works" id="how-it-works" aria-labelledby="how-it-works-title">
      <div className="how-it-works__inner">
        <header className="how-it-works__header">
          <p className="how-it-works__eyebrow">Process</p>
          <h2 id="how-it-works-title">How It Works</h2>
          <p className="how-it-works__description">Get from zero to a live examination in four simple steps.</p>
        </header>
        <ol className="process-steps">
          <span className="process-connector" aria-hidden="true" />
          {steps.map(({ number, title, description }, index) => (
            <li className="process-step" key={number}>
              <div className="process-step__number">{number}</div>
              <h3>{title}</h3>
              <p>{description}</p>
              {index < steps.length - 1 && <span className="process-arrow" aria-hidden="true">→</span>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default HowItWorksSection
