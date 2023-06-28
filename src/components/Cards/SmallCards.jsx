import './smallCards.scss'
import { AiFillPlayCircle } from "react-icons/ai";


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
            <div className="rightSide"><AiFillPlayCircle/></div>
        </div>
    )
}

export default SmallCards