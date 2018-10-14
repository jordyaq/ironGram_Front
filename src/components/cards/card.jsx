import React, {Component} from 'react'
import { Card } from 'antd';
import { InputNumber } from 'antd';
import { Button } from 'antd';




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
              
                <div className="cardMezcal">    
                <Card title="Tohue Tohue" style={{ width: 400, height: 750}}>
                    <h2>Botella</h2>
                    <p>250ml</p>
                    <img style={{width: 200, height: 400}} src="http://www.mezcalbuenviaje.com/mezcal-buen-viaje-images/mezcal-buen-viaje-botellaTobala.png" alt="mini"/>
                    <br/>
                    <p>¿Cuantas botellas te vas a llevar?</p>
                    <InputNumber min={0} max={10} defaultValue={0} onChange={this.onChange} />
                    <p>¿Cajas? (Precio mayoreo)</p>
                    <InputNumber min={0} max={10} defaultValue={0} onChange={this.onChange} />
                    <br/>
                    <hr/>
                    
                    <Button type="primary">Comprar</Button>
                </Card>

                 <Card title="Tohue Tohue" style={{ width: 400, height: 750 }}>
                    <h2>Botella</h2>
                    <p>250ml</p>
                    <img style={{width: 200, height: 400}} src="http://www.mezcalbuenviaje.com/mezcal-buen-viaje-images/mezcal-buen-viaje-botellaTobala.png" alt="mini"/>
                    <br/>
                    <p>¿Cuantas botellas te vas a llevar?</p>
                    <InputNumber min={1} max={10} defaultValue={0} onChange={this.onChange} />
                    <p>¿Cajas? (Precio mayoreo)</p>
                    <InputNumber min={1} max={10} defaultValue={0} onChange={this.onChange} />
                    <br/>
                    <hr/>
                    
                    <Button type="primary">Comprar</Button>
                </Card>

                 <Card title="Tohue Tohue" style={{ width: 400, height: 750 }}>
                    <h2>Botella</h2>
                    <p>250ml</p>
                    <img style={{width: 200, height: 400}} src="http://www.mezcalbuenviaje.com/mezcal-buen-viaje-images/mezcal-buen-viaje-botellaTobala.png" alt="mini"/>
                    <br/>
                    <p>¿Cuantas botellas te vas a llevar?</p>
                    <InputNumber min={1} max={10} defaultValue={0} onChange={this.onChange} />
                    <p>¿Cajas? (Precio mayoreo)</p>
                    <InputNumber min={1} max={10} defaultValue={0} onChange={this.onChange} />
                    <br/>
                    <hr/>
                    
                    <Button type="primary">Comprar</Button>
                </Card>

                 <Card title="Tohue Tohue" style={{ width: 400, height: 750 }}>
                    <h2>Botella</h2>
                    <p>250ml</p>
                    <img style={{width: 200, height: 400}} src="http://www.mezcalbuenviaje.com/mezcal-buen-viaje-images/mezcal-buen-viaje-botellaTobala.png" alt="mini"/>
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