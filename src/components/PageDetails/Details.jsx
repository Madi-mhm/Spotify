import './details.scss'
import { BiShareAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillPlayCircle } from "react-icons/ai";



const Details = () =>{
    return(
        <div className='detailsPageContainer'>
            <div className='detailsIconsContainer'>
                <div className='detailsIcons'><BiShareAlt/></div>
                <div className='detailsIcons'><AiOutlineHeart/></div>
            </div>
            <div className='songsDetails'>
                <div className='detailsPageImage'></div>
                <div className='detailsPageNameAndDescription'>
                    <h3>Name of the song</h3>
                    <p>It's a place for the description of thesdcsdcds dövl,söldvsdsong</p>
                </div>
                <div className='detailsPageLikesAndduration'>
                    <p>12938r9 Likes</p>
                    <p>3:32 minutes</p>
                </div>
                <div className='detailsPagePlayButton'>
                 <AiFillPlayCircle/>
                </div>
            </div>
            <div className='moreSongInDetails'></div>

        </div>
    )
}

export default Details