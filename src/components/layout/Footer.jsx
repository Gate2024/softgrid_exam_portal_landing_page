import logo from '../../assets/logos/navbar/SG_ExamPro.png'

const productLinks = [
  ['Features', '#features'],
  ['How It Works', '#how-it-works'],
  ['Screenshots', '#screenshots'],
  ['Security', '#security'],
  ['Pricing', '#pricing'],
]

const resourceLinks = [
  ['Documentation', '#documentation'],
  ['API Reference', '#api-reference'],
  ['Blog', '#blog'],
  ['Support Center', '#support-center'],
  ['Status Page', '#status-page'],
]

const contactLinks = [
  ['Contact Us', '#contact'],
  ['Sales', '#sales'],
  ['Privacy Policy', '#privacy-policy'],
  ['Terms & Conditions', '#terms-and-conditions'],
  ['Cookie Policy', '#cookie-policy'],
]

const socialLinks = [
  ['in', 'LinkedIn'],
  ['▶', 'YouTube'],
  ['📘', 'Facebook'],
]

function FooterLinkGroup({ title, links }) {
  return (
    <div className="site-footer__column">
      <h2>{title}</h2>
      <nav aria-label={`${title} links`}>
        {links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
      </nav>
    </div>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__brand-column">
          <a className="site-footer__brand" href="#top" aria-label="SoftGrid ExamPro home">
            <img src={logo} alt="SoftGrid ExamPro" />
            <span>SoftGrid ExamPro</span>
          </a>
          <p className="site-footer__description">
            A secure, scalable examination management platform built for modern educational institutions and training organizations.
          </p>
          <div className="site-footer__socials" aria-label="Social links">
            {socialLinks.map(([glyph, label]) => (
              <button aria-label={label} key={label} type="button">{glyph}</button>
            ))}
          </div>
        </div>
        <FooterLinkGroup title="Product" links={productLinks} />
        <FooterLinkGroup title="Resources" links={resourceLinks} />
        <FooterLinkGroup title="Contact" links={contactLinks} />
      </div>
      <div className="site-footer__bottom">
        <div className="site-footer__bottom-inner">
          <p>© 2026 ExamPortal. All rights reserved.</p>
          <p>Built with React · Node.js · MongoDB</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
