import React, {Component} from 'react'
import {Link} from 'react-router-dom'



class footer extends Component {
    state = {
        current: "mail"
    }
    render() {
        return(
            <footer>

    <div>

            <div>

                    <h2>Redes sociales</h2>
        
            </div>

            

            <div>

                    <Link to="https://www.facebook.com/MezcalTohueTohue/"> Facebook</Link>

                   | 

                    <Link to="https://www.instagram.com/mezcaltohuetohue/?hl=es-la">Instagram</Link>

                    |

                    <Link to="">Twitter</Link>

                    |

                    <Link to="">Google</Link>

            </div>

           


    </div>


    
    

</footer>

  

    

        
            )
    }
}

export default footer