import { Component } from "react";
import Registration from "../Regeistration";
import RegistrerNavigation from "./RegisterNavigation";
import '../style/registerStyle.css';
class SignIn extends Component{
   
    constructor(props){
        super(props);
        this.state={ user:{
            email: '',
            pass:'',
        },
      };
    }
    
   
    setUserEmail(userEmail){
        // console.log(userEmail.target.value);
    
        this.setState({user:{email:userEmail.target.value, pass:this.state.user.pass}});
        // console.log(this.state.user.email);
    }
    setUserPassword(userPass){
        // console.log(userPass.target.value);
    
        this.setState({user:{email:this.state.user.email,pass:userPass.target.value}});

        // console.log(this.state.user.pass);
       
    }
    signIn(e){
        e.preventDefault();
        // console.log(this.state.user.email);
        
         const userEmail = e.target.userEmail.value;
         const userPass = e.target.userPass.value; 

        this.props.signIn(userEmail,userPass);
        document.querySelector(".registerForm").reset()
        this.setState({user:{email:'', pass:''}})

    }


    // to redirect or froward a reguest to an exesting url :  1- push method;to push adestenation into the stak's url  , 2-replace mthod; to replace the current path :: redirect > these method from useHistory() hook

    render(){
        return(
            <Registration>
                <RegistrerNavigation current={'sign-in'}/>
                <h1 className="registerTitle">Sign-in</h1>
                <form onSubmit={this.signIn.bind(this)} className="registerForm">
                    <input type="email"  name="userEmail" placeholder="Email"  /*onInput={this.setUserEmail.bind(this)}*/ />
                    <input type="password"  name="userPass" placeholder="Password" /*onChange={this.setUserPassword.bind(this)}*/ />
                    <button type="submit" >Sign-in</button>
                </form>
                
                <p>
                    {this.props.error}
                </p>
            </Registration>
        );
    }
}
export default SignIn;