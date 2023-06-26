import './bigCards.scss'

const BigCards = ({name, }) => {
    return(
        <>
        <div className='cardContainer'>
            <div className='cardImageContainer'>
                <div className='cardImage'>
                    {/* <img src="hey" className='cardImageItem' /> */}
                </div>
            </div>
            <div className='cardsInfoContainer'>
                <div className='cardsInfo'>
                <h4>{name}</h4>
                <p>hey</p>
                </div>
            </div>
        </div>
</>
    )
}

export default BigCards