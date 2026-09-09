function CTASection() {
  return (
    <section className="cta-section" id="get-started" aria-labelledby="cta-title">
      <div className="cta-section__inner">
        <h2 id="cta-title">
          <span>Ready to Transform Your</span>
          <span>Examination Process?</span>
        </h2>
        <p className="cta-section__description">
          Manage examinations, automate evaluation, and gain actionable insights from one powerful platform.
        </p>
        <div className="cta-section__actions">
          <a className="cta-section__primary" href="https://exam.softgridinfo.in/student/login">Get Started Today</a>
          <a className="cta-section__secondary" href="https://softgridinfo.in/contact">Request a Demo</a>
        </div>
        <p className="cta-section__microcopy">No credit card required · Free 14-day trial · Cancel anytime</p>
      </div>
    </section>
  )
}

export default CTASection
