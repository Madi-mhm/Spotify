import './appStyle/page.scss'
import Header from '../components/Header/Header'
import Footer from '@/components/Footer/Footer'
import NewReleasesSection from '../components/Carousels/NewReleases';


const Home =  () =>  {
  // throw new Error()


  return (
    
    <>    

      <Header />
      <div className='homePageContainer'>

        <h3>New Releases </h3>
        <div className='homePageCarouselContainer'>
          <div className='homePageCarousel'>
            <NewReleasesSection />
          </div>
        </div>

        <h3>New Releases </h3>
        <div className='homePageCarouselContainer'>
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



// function fakeLoadingFctn() {
//   return new Promise((resolve) => {
//       setTimeout(() => {
//           resolve(true);
//       }, 3000);
//   });
// }