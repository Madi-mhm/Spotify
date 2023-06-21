import './page.scss'
import Header from '../components/Header/Header'
import BigCards from '../components/Cards/BigCards'
import Details from '../PageDetails/Details'
import Footer from '@/components/Footer/Footer'


export default function Home() {

  return (

    <html>
      <Header></Header>

      <div className='homePageContainer'>
        
        <div className='homePageCarouselContainer'>
          <h3>name of carousel</h3>
          <div className='homePageCarousel'>
          <BigCards></BigCards>
          </div>
        </div>
        
        <div className='homePageCarouselContainer'>
          <h3>name of carousel</h3>
          <div className='homePageCarousel'>
          <BigCards></BigCards>
          </div>
        </div>
      </div> 

      <Footer/>

    </html>
  )
}






