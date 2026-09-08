
import Navbar from './components/layout/Navbar'
import HeroSection from './features/landing/components/HeroSection'
import TrustedBySection from './features/landing/components/TrustedBySection'
import BentoFeaturesSection from './features/landing/components/BentoFeaturesSection'
import HowItWorksSection from './features/landing/components/HowItWorksSection'
import DashboardShowcase from './features/landing/components/DashboardShowcase'
import BenefitsSection from './features/landing/components/BenefitsSection'
import SecuritySection from './features/landing/components/SecuritySection'
import TechnologyStack from './features/landing/components/TechnologyStack'
import ScreenshotGallery from './features/landing/components/ScreenshotGallery'
import CTASection from './features/landing/components/CTASection'
import Footer from './components/layout/Footer'

function App () {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <HeroSection />
        <TrustedBySection />
        <BentoFeaturesSection />
        <HowItWorksSection />
        <DashboardShowcase />
        <BenefitsSection />
        <SecuritySection />
        <TechnologyStack />
        <ScreenshotGallery />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
export default App;
