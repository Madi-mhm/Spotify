import './page.scss'
import { BiSearch } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import SmallCards from '@/components/Cards/SmallCards';
import ArtistProfile from '@/components/ArtistProfile/ArtistProfile';


const SearchPage = () =>{

    return (
        <main className='searchMainPage'>
            <div className="searchPage">
                <div className="searchSection">
                    <p><AiOutlineArrowLeft/></p>
                    <input type="text" placeholder="search your artist..." />
                    <span><BiSearch/></span>

                </div>
            </div>
        </main>
    )
}

export default SearchPage