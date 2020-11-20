rimport React from 'react'
import '../assets/css/Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import logo from '../assets/images/main-logo.jpg';

function Header() {
    return (
        <div className="header">
         
            <img
                className="header_icon"
                src={logo}
               
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
