import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Profile from './components/auth/Profile';
import PublicProfile from './components/users/PublicProfile';
import mezcalCard from './components/cards/card';
import Index from './components/tohue/index';
import Equipo from './components/tohue/equipo';
import Mezcal from './components/tohue/mezcal';
import Artesanias from './components/tohue/artesanias';
import Historia from './components/tohue/historia';
import Premios from './components/tohue/premios';
import Contacto from './components/tohue/contacto';



import indexEu from './components/tohueu/indexeu';
import mezcalEu from './components/tohueu/mezcaleu';
import Handicraft from './components/tohueu/handicrafts';
import Team from './components/tohueu/team';
import History from './components/tohueu/history';
import Awards from './components/tohueu/awards';
import cardUe from './components/cards/cardue';




const Routes = () => {
    return(
        <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/users/:id" component={PublicProfile} />
            <Route path="/tienda" component={mezcalCard} />
            <Route exact path="/" component={Index} />
            <Route path="/equipo" component={Equipo} />
            <Route path="/mezcal" component={Mezcal} />
            <Route path="/artesanias" component={Artesanias} />
            <Route path="/historia" component={Historia} />
            <Route path="/premios" component={Premios} />
            <Route path="/contacto" component={Contacto} />


            <Route path="/indexeu" component={indexEu} />
            <Route path="/team" component={Team}/>
            <Route path="/mezcaleu" component={mezcalEu} />
            <Route path="/handicraft" component={Handicraft} />
            <Route path="/history" component={History} />
            <Route path="/awards" component={Awards} />
            <Route path="/shop" component={cardUe} />
            
            
            



            





        </Switch>
    )
}

export default Routes