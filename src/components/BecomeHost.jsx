import React,{Component} from 'react';
import logo from '../assets/images/BecomeHostHomeLogo.png';
import '../assets/css/BecomeHost.css';
import 'bootstrap/dist/css/bootstrap.css';

class BecomeHost extends Component{
    render(){
        return(
            <>
            <div className="BecomeHostLogo" >
                <a href="/"><img  className="header_icon_becomehost" src={logo}/></a>

            </div>
            <div becomehost_info_space>
                <h1 className="becomehost_info">Recibe huéspedes en tu espacio con Airbnb</h1>
            <a  ><button className="become_host_btn" >Comienza ahora</button></a>
            </div>
                
            </>
        )
    }
}

export default BecomeHost;