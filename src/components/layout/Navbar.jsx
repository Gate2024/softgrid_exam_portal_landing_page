import { useState } from 'react'
import logo from '../../assets/logos/navbar/SG_ExamPro.png'

const links = ['Home', 'Features', 'How It Works', 'Benefits', 'Screenshots', 'About', 'Contact']

function Navbar () {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar-wrap">
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="SoftGrid ExamPro home">
          <img src={logo} alt="SoftGrid ExamPro" />
          <span>SoftGrid <strong>ExamPro</strong></span>
        </a>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map((link) => <a href={`#${link.toLowerCase().replaceAll(' ', '-')}`} key={link} onClick={() => setOpen(false)}>{link}</a>)}
        </div>
        <div className="nav-actions">
          <a className="login-link" href="https://exam.softgridinfo.in/student/login">Login</a>
          <a className="button button-small" href="https://exam.softgridinfo.in/student/login">Get Started <span aria-hidden="true">↗</span></a>
        </div>
        <button className="menu-button" type="button" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </nav>
    </header>
  )
}

export default Navbar
