import {Component} from 'react';
// import {Link, useNavigate} from 'react-router-dom';
import './style/header.css';
class Header extends Component{

    // constructor(props)
    // {
    //     super(props);
    // }
    // isLogedIn(prop){
    //     return prop.logedIn !== false ;
    // }

    logouHandler(event){
        event.preventDefault();
        this.props.redirect("/");
    }
    render(){
        
        return(
            <header>
                <div>
                    <img src='' alt='user photo'/>
                    <span>{this.props.userName}</span>
                </div>

                <button onClick={this.logouHandler.bind(this)}>Logout</button>

                
            </header>
        );
        
    }
} export default Header;