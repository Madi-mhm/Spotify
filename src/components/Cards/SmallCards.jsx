import './smallCards.scss'
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";



const SmallCards = ({songsName, artistsName, image }) =>{

    return(

        <div className="smallCards">
            <div className='leftSide'>
                <div className="smallCardsImage">
                    <img src={image} />
                </div>
                <div className="smallCardsInfo">
                    <h5>{songsName}</h5>
                    <p>{artistsName}</p>
                </div>
            </div >

            <div className='smallCardsIcons'>
                <div className="playIcon"><AiFillPlayCircle/></div>
                <div className='heartIcon'><AiOutlineHeart/></div>
            </div>
        </div>
    )
}

export default SmallCards