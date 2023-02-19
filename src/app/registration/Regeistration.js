import { Component } from "react";
import './style/registerStyle.css';
import '../../sharedComponents/style/navigation.css';
class Registration extends Component{
   constructor(props){
       super(props);
       this.props=props;
   }
    render(){
        return (
            <div className="container">
                <div className="registerCard">
                 {this.props.children}
                </div>

                <div className="aboutCard">
                    <img src="" alt="our company" />
                    <div>
                        <p className="cardTitle">About</p>
                        <span className="cardText">
                            some Text some Text 
                            some Text some Text 
                        </span>
                    </div>
                </div>
                
            </div>
        );
    }
}
export default Registration;