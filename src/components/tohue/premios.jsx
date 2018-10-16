import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Premios extends Component {
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










                
        
                <div>

                    <h2>Nuestros premios</h2>

                </div>



                <br/>
                <br/>

                
                <div className="tohue">
                       
                        <h2>
                                En noviembre del 2017 participamos en Oaxaca en un concurso nacional de mezcales dirigido por
                                el Maestro Mezcalero Ulises Torrentera y 25 jueces catadores expertos. 
                        </h2>

                        <h3>
                            Nuestros dos mezcales calificaron dentro de los 33 mejores
                            a pesar de las 140 marcas participantes.
                        </h3>

                        <p>
                                Las puntuaciones de los 33 seleccionados se encuentran en un rango de 98.5 y 86.
                        </p>

                        <p>
                                Aquí les dejamos nuestras puntuaciones:
                        </p>

                        <p>
                                * Mezcal Tohue Tohue / Joven Cupreata Silvestre LM07 --> 96.4
                        </p>


                        <p>
                                * Mezcal Tohue Tohue / Joven Cupreata Silvestre LM08 --> 90.3
                        </p>
                        
                        
                </div>

                

                     <div className="imgpremios">
                        <div>

                                <img src="https://res.cloudinary.com/jordynube/image/upload/v1539667536/TohueTohue/img/Captura_de_pantalla_2018-10-16_a_la_s_0.24.34.png" width="80%" alt=""/>

                        </div>

                        <br/>
                        <br/>

                        <div>

                                <img src="https://res.cloudinary.com/jordynube/image/upload/v1539668388/Captura_de_pantalla_2018-10-16_a_la_s_0.39.19.png" width="70%" alt=""/>

                        </div>

                       

                </div>



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


export default Premios