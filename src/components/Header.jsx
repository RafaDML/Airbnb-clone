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
                    <img
                        className="header_icon"
                        src={logo}
                    
                    />
                    </a>

                
                

                    <div className="header_center">
                        <input type="text"/>
                        <SearchIcon />
                    </div>

                    <div className='menu'>
                        <ul>
                            <li> <a href="anfitrion.html">Conviertete anfitrión   </a></li>
                            <li> <LanguageIcon /></li>
                            <li><ExpandMoreIcon /></li>
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
                         <Label for="usuario">Usuario</Label>
                        <Input type="text" id="usuario"/>
                         </FormGroup>
                         <FormGroup>
                         <Label for="usuario">Usuario</Label>
                        <Input type="text" id="usuario"/>
                         </FormGroup>
                         
                     </ModalBody>
                     <ModalFooter>
                         <Button color="success" onClick={this.abrirModal}>Iniciar Sesión</Button>

                         <Button color="secondary" onClick={this.abrirModal}>Close</Button>

                     </ModalFooter>
                 </Modal>
                 

            </>

        );
    }
}

export default Header;