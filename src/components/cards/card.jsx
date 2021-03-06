import React, {Component} from 'react'
import { Card } from 'antd';
import { InputNumber } from 'antd';
import { Button } from 'antd';
import {Link} from 'react-router-dom'




class  mezcalCard extends Component{

    state = {
        current: 'mail',
      }
    
      handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      }

    onChange(value) {
        console.log('changed', value);
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







              
                <div className="cardMezcal">    
                <Card title="150MXN" style={{ width: 400, height: 750}}>
                    <h2>Botella</h2>
                    <p>50ml</p>
                    <img style={{width: 350, height: 400}} src="https://res.cloudinary.com/jordynube/image/upload/v1539684057/botella_mini.jpg" alt="mini"/>
                    <br/>
                    <p>¿Cuantas botellas te vas a llevar?</p>
                    <InputNumber min={0} max={10} defaultValue={0} onChange={this.onChange} />
                    <p>¿Cajas? (Precio mayoreo)</p>
                    <InputNumber min={0} max={10} defaultValue={0} onChange={this.onChange} />
                    <br/>
                    <hr/>
                    
                    <Button type="primary">Comprar</Button>
                </Card>

                 <Card title="380MXN" style={{ width: 400, height: 750 }}>
                    <h2>Botella</h2>
                    <p>250ml</p>
                    <img style={{width: 350, height: 400}} src="https://res.cloudinary.com/jordynube/image/upload/v1539684057/botella_mediana.jpg" alt="mini"/>
                    <br/>
                    <p>¿Cuantas botellas te vas a llevar?</p>
                    <InputNumber min={1} max={10} defaultValue={0} onChange={this.onChange} />
                    <p>¿Cajas? (Precio mayoreo)</p>
                    <InputNumber min={1} max={10} defaultValue={0} onChange={this.onChange} />
                    <br/>
                    <hr/>
                    
                    <Button type="primary">Comprar</Button>
                </Card>

                 <Card title="980MXN" style={{ width: 400, height: 750 }}>
                    <h2>Botella</h2>
                    <p>750ml</p>
                    <img style={{width: 350, height: 400}} src="https://res.cloudinary.com/jordynube/image/upload/v1539684057/botella_grande.jpg" alt="mini"/>
                    <br/>
                    <p>¿Cuantas botellas te vas a llevar?</p>
                    <InputNumber min={1} max={10} defaultValue={0} onChange={this.onChange} />
                    <p>¿Cajas? (Precio mayoreo)</p>
                    <InputNumber min={1} max={10} defaultValue={0} onChange={this.onChange} />
                    <br/>
                    <hr/>
                    
                    <Button type="primary">Comprar</Button>
                </Card>

                 <Card title="1600MXN" style={{ width: 400, height: 750 }}>
                    <h2>Botella</h2>
                    <p>Disfrazada 750ml</p>
                    <img style={{width: 350, height: 400}} src="https://res.cloudinary.com/jordynube/image/upload/v1539684057/Botella_disfrzada.jpg" alt="mini"/>
                    <br/>
                    <p>¿Cuantas botellas te vas a llevar?</p>
                    <InputNumber min={1} max={10} defaultValue={0} onChange={this.onChange} />
                    <p>¿Cajas? (Precio mayoreo)</p>
                    <InputNumber min={1} max={10} defaultValue={0} onChange={this.onChange} />
                    <br/>
                    <hr/>
                    
                    <Button type="primary">Comprar</Button>
                </Card>

                </div>
                
            </div>
        )

    }
}



export default mezcalCard