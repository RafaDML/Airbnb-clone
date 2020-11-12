import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
    return (
        <div className="header">
            <img
                className="header_icon"
                src="https://1000marcas.net/wp-content/uploads/2020/01/Airbnb-Logo.png"
            />

            <div className="header_center">
            <input type="text"/>
            <SearchIcon />
            </div>

            <div className='header_right'>
                <p>Conviertete anfitrión</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <AccountCircleIcon />

            </div>
        

            
        </div>
    )
}

export default Header
