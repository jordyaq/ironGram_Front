import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Contacto extends Component {
    render() {
        return(
            <div>


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
                    <li><Link to="/indexeu">English</Link></li>
                    </ul>
                </nav>
                </div>
            </div>
                <hr/>
        </div>









                        <Link to="https://api.whatsapp.com/send?phone=5493516342592&text=Hola!%20Quiero%20generar%20mas%20ventas!">Hola</Link>



























                        <footer>

<div>

<div>

   <Link to="">Redes sociales</Link>

</div>



<div>

    <Link to="https://www.facebook.com/MezcalTohueTohue/">Facebook</Link>

   | 

    <Link to="https://www.instagram.com/mezcaltohuetohue/?hl=es-la">Instagram</Link>

    |

    <Link to="">Twitter</Link>

    |

    <Link to="">Google +</Link>

</div>




</div>








</footer>
            </div>
        )
    }
}

export default Contacto