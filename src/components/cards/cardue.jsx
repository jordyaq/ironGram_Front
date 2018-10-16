import React, {Component} from 'react'
import { Card } from 'antd';
import { InputNumber } from 'antd';
import { Button } from 'antd';
import {Link} from 'react-router-dom'




class  cardEu extends Component{

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
<li><Link to="/tienda">Shop</Link></li>
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








              
                <div className="cardMezcal">    
                <Card title="8USD" style={{ width: 400, height: 750}}>
                    <h2>Bottle</h2>
                    <p>50ml</p>
                    <img style={{width: 350, height: 400}} src="https://res.cloudinary.com/jordynube/image/upload/v1539684057/botella_mini.jpg" alt="mini"/>
                    <br/>
                    <p>¿How many bottles would you buy?</p>
                    <InputNumber min={0} max={10} defaultValue={0} onChange={this.onChange} />
                    <p>¿Boxes? (wholesale price)</p>
                    <InputNumber min={0} max={10} defaultValue={0} onChange={this.onChange} />
                    <br/>
                    <hr/>
                    
                    <Button type="primary">Buy</Button>
                </Card>

                 <Card title="20USD" style={{ width: 400, height: 750 }}>
                    <h2>Bottle</h2>
                    <p>250ml</p>
                    <img style={{width: 350, height: 400}} src="https://res.cloudinary.com/jordynube/image/upload/v1539684057/botella_mediana.jpg" alt="mini"/>
                    <br/>
                    <p>¿How many bottles would you buy?</p>
                    <InputNumber min={1} max={10} defaultValue={0} onChange={this.onChange} />
                    <p>¿Boxes? (wholesale price)</p>
                    <InputNumber min={1} max={10} defaultValue={0} onChange={this.onChange} />
                    <br/>
                    <hr/>
                    
                    <Button type="primary">Buy</Button>
                </Card>

                 <Card title="50USD" style={{ width: 400, height: 750 }}>
                    <h2>Bottle</h2>
                    <p>750ml</p>
                    <img style={{width: 350, height: 400}} src="https://res.cloudinary.com/jordynube/image/upload/v1539684057/botella_grande.jpg" alt="mini"/>
                    <br/>
                    <p>¿How many bottles would you buy?</p>
                    <InputNumber min={1} max={10} defaultValue={0} onChange={this.onChange} />
                    <p>¿Boxes? (wholesale price)</p>
                    <InputNumber min={1} max={10} defaultValue={0} onChange={this.onChange} />
                    <br/>
                    <hr/>
                    
                    <Button type="primary">Buy</Button>
                </Card>

                 <Card title="80USD" style={{ width: 400, height: 750 }}>
                    <h2>Bottle</h2>
                    <p>Special 750ml</p>
                    <img style={{width: 350, height: 400}} src="https://res.cloudinary.com/jordynube/image/upload/v1539684057/Botella_disfrzada.jpg" alt="mini"/>
                    <br/>
                    <p>¿How many bottles would you buy?</p>
                    <InputNumber min={1} max={10} defaultValue={0} onChange={this.onChange} />
                    <p>¿Boxes? (wholesale price)</p>
                    <InputNumber min={1} max={10} defaultValue={0} onChange={this.onChange} />
                    <br/>
                    <hr/>
                    
                    <Button type="primary">Buy</Button>
                </Card>

                </div>
                
            </div>
        )

    }
}



export default cardEu