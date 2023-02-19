import { Component } from "react";
import Task from "./Task";
class DelayedTasks extends Component{
    render(){
        return(
            <section>
            <h5 className="section-title">Delayed</h5>
            {this.props.tasks.map(
               (task,index)=>(<Task task={task} key={index}/> )
            )}
            </section>
        );
    }
}export default DelayedTasks;
