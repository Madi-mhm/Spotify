import './page.scss'
import { BiSearch } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import SmallCards from '@/components/Cards/SmallCards';


const SearchPage = () =>{

    return (
        <main className='searchMainPage'>
            <div className="searchPage">
                <div className="searchSection">
                    <p><AiOutlineArrowLeft/></p>
                    <input type="text" placeholder="search your artist..." />
                    <span><BiSearch/></span>

                </div>
                <div className="artistProfile">
                    <div className="artistprofilePic"></div>
                    <h5>Artist Name</h5>
                </div>

                {/* carousel */}




            </div>
        </main>
    )
}

export default SearchPage