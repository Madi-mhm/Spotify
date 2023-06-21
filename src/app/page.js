import './page.scss'
import Header from './Header/Header'
import BigCards from './Cards/BigCards'
import Details from './PageDetails/Details'


export default function Home() {

  return (

    <html>
      <Header></Header>

      {/* <div className='homePageContainer'>
        <BigCards></BigCards>
      </div>  */}
      <Details></Details>

    </html>
  )
}






