import { Component } from "react";
import Registration from "../Regeistration";
import RegistrerNavigation from "./RegisterNavigation";
import "../style/registerStyle.css"
class SignUp extends Component{
    render(){
        return (
        <Registration>
        <RegistrerNavigation current={'sign-up'} />
        <h1 className="registerTitle">Sign-up</h1>
        <form className="registerForm">
            <input type="email" placeholder="Email*"/>
            <input type="password" placeholder="Passowrd"/>
            <input type="password" placeholder="Confirm password"/>
            <button type="submit">Register </button>
        </form>
        
    </Registration>
    );
    }
}export default SignUp;