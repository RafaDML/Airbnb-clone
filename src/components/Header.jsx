import React, {Component} from 'react';

import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import logo from '../assets/images/main-logo.jpg';
import {Button,Modal,ModalHeader,ModalBody,ModalFooter, FormGroup, Input,Label} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/css/Header.css'

class Header extends Component {
    state={
        abierto: false,
    }
    abrirModal=()=>{
        this.setState({abierto: !this.state.abierto});
    }

    render()
    {
        return (
            <>
            
                <div className="header">
            
                    <a href="/">
                    <img className="header_icon" src={logo}/>
                    </a>

                
                

                    <div className="header_center">
                        <input type="text" placeholder="Empieza tu búsqueda" />
                        <SearchIcon  />
                    </div>

                    <div className='menu'>
                        <ul>
                            <li> <a href="anfitrion.html">Hazte anfitrión   </a></li>
                            <li> <LanguageIcon /></li>
                            <li><ExpandMoreIcon   /></li>
                            <li> <Button onClick={this.abrirModal}><AccountCircleIcon /></Button></li>
                            

                        </ul>
                        
                       
                       
                        
                       

                    </div>

                    
                

                    
                 </div>
                 <Modal isOpen={this.state.abierto}>
                     <ModalHeader>
                         Iniciar Sesion

                     </ModalHeader>
                     <ModalBody>
                         <FormGroup>
                         
                        <Input type="text" placeholder="Usuario" id="usuario"/>
                         </FormGroup>
                         <FormGroup>
                         
                        <Input type="password" placeholder="Contraseña" id="contraseña"/>
                         </FormGroup>
                         
                     </ModalBody>
                     <ModalFooter>
                         <Button className="login_btn" color="danger" onClick={this.abrirModal}>Iniciar Sesión</Button>

                         <Button color="secondary" onClick={this.abrirModal}>Close</Button>

                     </ModalFooter>
                 </Modal>
                 

            </>

        );
    }
}

export default Header;