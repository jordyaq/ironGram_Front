import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Awards extends Component {

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
                    <li><Link to="/indexeu">Home</Link></li>
                    |
                    <li><Link to="/mezcaleu">Mezcal</Link></li>
                    |
                    <li><Link to="/handicraft">Handicrafts</Link></li>
                    |
                    <li><Link to="/team">Team</Link></li>
                    |
                    <li><Link to="/history">Our history</Link></li>
                    |
                    <li><Link to="/awards">Awards</Link></li>
                    |
                    <li><Link to="/shop">Shop</Link></li>
                    |
                    <li><Link to="/contacto">Contact</Link></li>
                    |
                    <li><Link to="/">Spanish</Link></li>
                    </ul>
                </nav>
                </div>
            </div>
                <hr/>
        </div>




 <div>

<h2>Awards and recognitions </h2>

</div>



<br/>
<br/>


<div className="tohue">
   
    <h2>
    In november 2017 we participated in a national mezcal 
competition in Oaxaca, conducted by the master mezcalero 
Ulises Torrentera and 25 other expert taseters. 
 
    </h2>

    <h3>
    We entered two bottles of our mezcal and both were placed 
    in the top 33 best mezcals out of the 140 participants.

    </h3>

    <p>
      The top 33 were awarded points between the range of 86 - 98.5 

    </p>

    <p>
            Here we leave our scores:
    </p>

    <p>
            * Mezcal Tohue Tohue / Young Cupreata Wild LM07 --> 96.4
    </p>


    <p>
            * Mezcal Tohue Tohue / Young Cupreata Wild LM08 --> 90.3
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

<Link to="">Social networks</Link>

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


export default Awards