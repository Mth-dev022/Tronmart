import Header from './components/Header/Header'
import Container from './Components/Image-section/Container'
import ProductsSection from './Components/Products-section/ProductsSection'
import Cases from './Components/Products-section/Cases'
import Deals from './Components/Best-deals/Deals'
import Sponsor from './Components/Sponsors/Sponsor'
import AudioAndVideoDeals from './Components/Audio&video-deals/AudioAndVideoDeals'
import BrandsDeals from './Components/Brands-deals/BrandsDeals'
import Recommendations from './Components/Recommendations/Recommendations'
import Footer from './Components/Footer/Footer'

import Store from './assets/Audio&videoDeals-images/store.jpg'
import './index.css'

function App() {
  
  return (
    <>
      <Header />
      <Container />
      <ProductsSection />
      <Cases />
      <Deals />
      <Sponsor />
      <AudioAndVideoDeals />
      <div className='blue-container'>
        <img style={{cursor:'pointer'}} src={Store} />
      </div>
      <BrandsDeals />
      <Recommendations />
      <Footer />
    </>
  )
}
export default App
