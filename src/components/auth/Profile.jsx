import React, {Component} from 'react'
import axios from 'axios'
import toastr from 'toastr'
import {uploadPic} from '../../services/userService'
import {Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';



class Profile extends Component{

    state = {
        user:{}
    }

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(!user) return this.props.history.push('/login')
        this.setState({user})
    }

    getPrivateInfo = () => {
        axios.get('http://localhost:3000/private', {
            headers:{
                "Authorization" : localStorage.getItem('token') 
            }
        })
        .then(res=>{
            console.log(res)
        })
        .catch(e=>toastr.error("algo falló", e.message))
    }

    uploadPhoto = () => {
        this.refs.input.click()
    }

    onChangeFile = (e) => {
        console.log(e.target.files[0])
        uploadPic(e.target.files[0])
        .then(pic=>console.log(pic))
        .catch(e=>toastr.error('Error'))
    }

    render(){

       
        return(
            <div style={{ width: 200, height:'100vh', textAlign: 'left', maxWidth: 200, minWidth: 250}}>
    
        <Menu>

          

          <Menu.Item key="/admin">
            <Link to="/profile">
              <Icon type="profile" /><span>Profile</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="/admin/users/new">
            <Link to="">
              <Icon type="plus-circle" theme="outlined"/><span>Nuevo Producto</span>
            </Link>
          </Menu.Item>
            
        <Menu.Item key="/admin/projects">
            <Link to="/admin/projects" >
              <Icon type="folder" /><span>Nuevos Clientes</span>
            </Link>
          </Menu.Item>

          <Menu.Item onClick={this.logOut} key="/admin/logout">
            <Link to="/">
              <Icon type="poweroff" /> <span>Logout</span>
            </Link>
          </Menu.Item>

        </Menu>          
        
           </div>
        )
    }
}

export default Profile