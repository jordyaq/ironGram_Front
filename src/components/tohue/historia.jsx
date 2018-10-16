import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Historia extends Component {
    render () {
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












                        <div className="tohue">

                                <h2>Historia de la empresa</h2>

                        </div>




                        <div>

                                <div className="tohue">

                                <h3>Al final del año 2013, Stephen de Francia y Alfredo de la Ciudad de Mexico iniciaron un viaje
                                 en el Estado de Guerrero con el fin de encontrar y ayudar los artesanos que tallan Mascaras y empezar
                                  un proyecto de emprendimiento social. Guiados por la familia de Alfredo quien por gran parte es de origen 
                                  guerrerense visitaron diversas comunidades donde se dieron cuenta del difícil trabajo de artesano y la falta de
                                   reconocimiento de su arte. 
                                </h3>

                                <div class="tohue">
                                    <p>¡Ve el video! ;)</p>
                                    <img src="https://res.cloudinary.com/jordynube/image/upload/v1539645039/TohueTohue/img/flechadown.png" width='30px' height="30px" alt="Ve para abajo"/>
                                </div>    

                                <video autoPlayn controls loop>
                                    
                                    <source src="https://res.cloudinary.com/jordynube/video/upload/v1539664665/TohueTohue/Tohue_Tohue__m%C3%A1s_que_Mezcal_esencias_de_Guerrero.mp4" type="video/mp4"/>

                                </video>



                                </div>




                                <div className="tohue">

                                    <h3>
                                    Con 3000 pesos en la bolsa, Alfredo y Stephen colaboraron
                                     con diferentes artesanos y compraron sus primeras mascaras en el fin de revender las
                                      a un precio justo en la Ciudad de Mexico. 
                                    </h3>


                                    <h3>
                                    En este viaje, el padre de Alfredo compartió a Stephen una botella.
                                     Sin saber que era, al beber la bebida, Stephen fue muy sorprendido positivamente y pregunto: “que es?”:
                                      “Mezcal” contestaron Alfredo y su padre. Stephen comento que era el mejor Mezcal que había probado y que
                                       no sabía que en Guerrero se producía Mezcal.
                                    </h3>


                                    <h3>
                                        Es cuando surgió la idea de desarrollar una marca de Mezcal guerrerense
                                        incluyendo una pieza de artesanía en cada botella.
                                    </h3>

                                    
                                    <img src="https://res.cloudinary.com/jordynube/image/upload/v1539665804/TohueTohue/img/WhatsApp_Image_2018-09-22_at_13.11.19.jpg" alt="Socios"  width="70%"/>


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

export default Historia