import './bigCards.scss'

const BigCards = ({name}) => {
    return(
        <>
        <div className='cardContainer'>
            <div className='cardImageContainer'>
                <div className='cardImage'></div>
            </div>
            <div className='cardsInfoContainer'>
                <div className='cardsInfo'>
                <h4>{name}</h4>
                <p>Description</p>
                </div>
            </div>
        </div>
</>
    )
}

export default BigCards