
import './page.scss'
import Header from '../components/Header/Header'
import Footer from '@/components/Footer/Footer'
import NewReleasesSection from '../components/Carousels/NewReleases';


const Home = () =>  {

  return (
    
    <>
      <Header />
      <div className='homePageContainer'>
        
        <div className='homePageCarouselContainer'>
          <h3>name of carousel</h3>
          <div className='homePageCarousel'>
            <NewReleasesSection />
          </div>

        </div>

      </div> 

      <Footer/>

    </>
  )
}

export default Home



