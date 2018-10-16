import React, {Component} from 'react'
import {Link} from 'react-router-dom'



class Index extends Component {
    state = {
        current: "mail"
    }
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











        


            <div class="container2">

    
            <div>
                <video autoPlay muted loop > 
                <source src="https://res.cloudinary.com/jordynube/video/upload/v1539561531/TohueTohue/Tohue_Tohue_Fabrica_Video.mp4" type="video/mp4" />
                </video>
            </div>








                

        </div>




        <div class="tohue">
                        <div>

                            <h1>Mezcal Tohue Tohue: Mas que un mezcal, 100% orgànico. <br/> ..Tienda en linea..</h1>
                            <hr/>

                <br/>
                
                </div>

                </div>



                <div class="tohue">
                    <img src="https://res.cloudinary.com/jordynube/image/upload/v1539645039/TohueTohue/img/flechadown.png" width='30px' height="30px" alt="Ve para abajo"/>
                </div>






<div class="container3">

<div class="principal">
<div class="imghistoria">

    <img src="https://res.cloudinary.com/jordynube/image/upload/v1539573687/TohueTohue/img/todasbotellas.jpg" width="600px" height="400px" alt="Img historia"/>


</div>

 <div class="titulo">
    <h2>
            Familia de botellas Tohue Tohue
    </h2>

    

    <hr/>

    <h3>Tenemos de todos tamaños.</h3>
    <br/>
    <br/>

    <button class="butcompra" type="button"><Link to="#">Comprar</Link> </button>
    <br/>
    <br/>
    
    
    <p><i class="fas fa-arrow-up"></i> <br/> Click aqui para ir a tienda </p>
   
 </div>

 

</div>

</div>

<div class="tohue">
<div>
<hr/>
<h2>Una marca hecha con mucho trabajo y aun mas amor.</h2>
<hr/>
</div>
</div>




<div class="container3">

<div class="principal">
<div class="imghistoria">

<img src="https://res.cloudinary.com/jordynube/image/upload/v1539570839/TohueTohue/img/indexinfo.jpg" width="600px" height="400px" alt="Img historia"/>


</div>

<div class="titulo">
<h2>
        Tohue Tohue
</h2>



<hr/>

<h3>Nuestra visión.</h3>
<br/>
<br/>

<p>Es un proyecto social que propone una forma nueva e innovadora de rescatar
        el trabajo artesanal guerrerense a través de la distribución y promoción de la artesanía,
         creando una marca de Mezcal que represanta la Región.</p>
</div>



</div>

</div>

<div class="tohudive">
<div>
<hr/>
<h2>¡Nuestro tesoro el Maguey!</h2>
<hr/>
</div>
</div>



<div class="container3">

<div class="principal">


 <div class="titulo">
    <h2>
        Nuestra planta 
    </h2>

    

    <hr/>

    <h3>El maguey Silvestre Cupreata / Papalotl.</h3>
    <br/>
    <br/>

    <p> Del municipio de Eduardo Neri el cual toma de 12 a 20 años en madurar.</p>
 </div>


 <div class="imghistoria">

        <img src="https://res.cloudinary.com/jordynube/image/upload/v1539570956/TohueTohue/img/maguey.jpg" width="600px" height="400px" alt="Img historia"/>


</div>
 

</div>

</div>

<div class="tohudive">
<div>
    <hr/>
    <h2>¿Que nos hace diferentes?</h2>
    <hr/>
</div>
</div>



<div class="container3">

<div class="principal">
    

     <div class="titulo">
        <h2>
            La tradición
        </h2>

        

        <hr/>

        <h3>Cuidamos lo que nos hace unicos, a nuestro equipo de trabajo.</h3>
        <br/>
        <br/>

        <p> Las danzas tradicionales.</p>
        
        <p>El idioma Náhuatl que esta en peligro de extinción.</p>
        
        <p>
                El trabajo de los artesanos mascareros. 
        </p>
    </div>


    <div class="imghistoria">

            <img src="https://res.cloudinary.com/jordynube/image/upload/v1539573169/TohueTohue/img/tradiciones.jpg" width="600px" height="400px" alt="Img historia"/>


    </div>

     

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

export default Index