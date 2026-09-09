import logo from '../../assets/logos/navbar/SG_ExamPro.png'
import linkedInIcon from '../../assets/icons/footer/akar-icons_linkedin-box-fill.svg'
import instagramIcon from '../../assets/icons/footer/famicons_logo-instagram.svg'
import youtubeIcon from '../../assets/icons/footer/youtube.svg'

const quickLinks = [
  ['Features', '#features'],
  ['How It Works', '#how-it-works'],
  ['Screenshots', '#screenshots'],
  ['Security', '#security'],
  ['Pricing', null],
  ['Dashboard', null],
  ['Contact Us', '#contact'],
]

const featureLinks = [
  ['Online Examination Management', null],
  ['Question Bank Management', null],
  ['Automatic Result Generation', null],
  ['Candidate Performance Reports', null],
  ['Secure Authentication & Roles', null],
  ['Responsive User Interface', null],
]

const contactLinks = [
  ['Contact Us', 'https://softgridinfo.in/contact'],
  ['Sales', 'https://softgridinfo.in/sales'],
  ['Privacy Policy', 'https://softgridinfo.in/privacy-policy'],
  ['Terms & Conditions', 'https://softgridinfo.in/terms-and-conditions'],
  ['Cookie Policy', 'https://softgridinfo.in/cookie-policy'],
]

const socialLinks = [
  [linkedInIcon, 'LinkedIn', 'https://www.linkedin.com/company/softgrid-info-pvt-ltd'],
  [instagramIcon, 'Instagram', 'https://www.instagram.com/softgridinfo/'],
  [youtubeIcon, 'YouTube', 'https://youtube.com/@softgridinfo?si=PptiXFEJXZpARelh'],
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
            {socialLinks.map(([icon, label, href]) => href ? (
              <a aria-label={label} href={href} key={label}><img src={icon} alt="" /></a>
            ) : (
              <button aria-label={label} key={label} type="button"><img src={icon} alt="" /></button>
            ))}
          </div>
        </div>
        <FooterLinkGroup title="Quick Links" links={quickLinks} />
        <FooterLinkGroup title="Product Features" links={featureLinks} />
        <FooterLinkGroup title="Contact" links={contactLinks} />
      </div>
      <div className="site-footer__bottom">
        <div className="site-footer__bottom-inner">
          <p>© 2026 ExamPortal. All rights reserved.</p>
          <p>Designed &amp; Developed by SoftGrid Info Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
