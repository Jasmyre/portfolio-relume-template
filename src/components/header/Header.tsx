
import CTAButton from '../cta-button/CTA-Button';
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <a href="#home">
          <h1 className={styles.logo_name}>Jasmyre</h1>
          <p className={styles.product_name}>PORTFOLIO</p>
        </a>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li><a href="#about">About Us</a></li>
          <li><a href="#service">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
        </ul>
        <div className="navigation-cta">
          <CTAButton text="Get Started"></CTAButton>
        </div>
      </nav>
    </div>
  )
}

export default Header;