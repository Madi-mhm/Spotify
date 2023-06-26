import './bigCards.scss'

const BigCards = ({name, imageUrl, type}) => {
    return(
        <>
        <div className='cardContainer'>
            <div className='cardImageContainer'>
                <div className='cardImage'>
                    <img src={imageUrl} className='cardImageItem' />
                </div>
            </div>
            <div className='cardsInfoContainer'>
                <div className='cardsInfo'>
                <h4>{name}</h4>
                <p>{type}</p>
                </div>
            </div>
        </div>
</>
    )
}

export default BigCards