import './page.scss'
import Header from '../components/Header/Header'
import BigCards from '../components/Cards/BigCards'
import Footer from '@/components/Footer/Footer'


const Home = () =>  {



  return (
    
    <>
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

    </>
  )
}

export default Home



