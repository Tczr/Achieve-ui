import { Component } from "react";
import { Link } from "react-router-dom";
class RegistrerNavigation extends Component{
    constructor(props){
        super(props);
        
    }
    setCurrentPage(){
        
    }
    render(){
        let signIn;
        let signUp;
        const currentPage=this.props.current;
        {currentPage === 'sign-in' ? 
        signIn=currentPage: signUp=currentPage }
        
        return(
            <nav>
                <ul className="register-nav">
                    
                    <li >
                        <Link to={'/'} className={signIn}> Sign-in </Link>
                    </li>

                    <li>
                        <Link to={'register'} className={signUp}>Sign-up</Link>                        
                    </li>
                </ul>
            </nav>
        );
    }

} export default RegistrerNavigation;