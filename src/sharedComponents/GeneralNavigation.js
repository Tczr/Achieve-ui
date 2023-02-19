import { Component } from "react";
import { Link } from "react-router-dom";
import './style/navigation.css';

class Navigation extends Component{

    render(){
        let lPointer;
        let rPointer;
        const currentPointer = this.props.currentPage;
        {
            (currentPointer === 'task') ? lPointer = currentPointer : rPointer = currentPointer;
        }
        return(
            <nav className="nav-app">
                <ul>
                    <li>
                        <Link to={'/task'} className={lPointer}>task</Link>
                    </li>
                    <li>
                        <Link to={'/profile'} className={rPointer}>profile</Link>
                    </li>
                </ul>
            </nav>
        );
    }

}export default Navigation;