import { Component } from "react";

class Task extends Component{

    render(){
        return (
            <div key={this.props.index}>
                <span>{this.props.task.name}</span>
                <br/>
                <span>{this.props.task.createdAt}</span>
            </div>
        );
    }
}export default Task;