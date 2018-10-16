import React, {Component} from 'react'
import {Link} from 'react-router-dom'



class navBar extends Component {
    state = {
        current: "mail"
    }
    render() {
        return(

            
            <div class="container">
            
                <div class="nav">


                    <div class="logo">
                    <Link to="jyf"><img src="https://res.cloudinary.com/jordynube/image/upload/v1539643119/TohueTohue/img/logoweb.png" alt="Logo"/> </Link>
                    </div>
            
                    <div>
                    <nav class="navbar">
                        <ul>
                        <li><Link to="/">Inicio</Link></li>
                        |
                        <li><Link to="/mezcal">El mezcal</Link></li>
                        |
                        <li><Link to="/artesanias">Artesanias</Link></li>
                        |
                        <li><Link to="/equipo">El equipo</Link></li>
                        |
                        <li><Link to="/historia">Nuestra Historia</Link></li>
                        |
                        <li><Link to="/premios">Premios</Link></li>
                        |
                        <li><Link to="/tienda">Tienda</Link></li>
                        |
                        <li><Link to="/contacto">Contacto</Link></li>
                        |
                        <li><Link to="/contacto">English</Link></li>
                        </ul>
                    </nav>
                    </div>
                </div>
                    <hr/>
            </div>

  

    

        
            )
    }
}

export default navBar
