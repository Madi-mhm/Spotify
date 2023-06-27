import './header.modules.scss'

const Header = () => {

    return(
        <div className='headerContainer'>
            <div className='headerLogo'>LOGO</div>
            <div className='headerNavBar'>
                <a href='./search'><div className='searchIcon'></div></a>
                <div className='hamburgerIcon'></div>
                <a className='navBarLinks' href="#">Favorites</a>
                <a className='navBarLinks' href="#">Log in</a>
            </div>
        </div>
      
    )
}

export default Header