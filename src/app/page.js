import './page.scss'
import Header from './Header/Header'
import BigCards from './Cards/BigCards'


export default function Home() {

  return (

    <html>
      <Header></Header>

      <div className='homePageContainer'>
        <BigCards></BigCards>
      </div> 

    </html>
  )
}






