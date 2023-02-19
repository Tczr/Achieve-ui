import { Component } from "react";
import ActiveTasks from "./ActiveTask";
import DelayedTasks from "./DelayedTasks";
import FinishedTasks from "./FinishedTasks";
import '../style/tasks.css';
class Tasks extends Component{
    constructor(props)
    {
        super(props);

         this.state={
           finishedTasks:[],
           activeTasks:[],
           delayedTasks:[]
        }
       
        
    }
    componentDidMount(){
        this.doFilter();
    }
    componentDidUpdate(prevProp){
        if(prevProp.tasks.length!==this.props.tasks.length)
        {
         this.doFilter();
        }
    }
    
    componentWillUnmount(){
        this.setState({tasks:[]})
    }
    doFilter(){
       
        this.setState({activeTasks:this.props.tasks.filter(
            (task)=>{return task.status==='ACTIVE'})});
        
        this.setState({delayedTasks:this.props.tasks.filter(
            (task)=>{ return task.status==='DELAYED'})
        });

        this.setState({finishedTasks:this.props.tasks.filter(
            (task)=>{ return task.status==='FINISHED'})});
       
        // console.log(this.state.activeTasks);
    }


    render(){
       
        return(
            <div className="taskContainer">
                
                <ActiveTasks tasks={this.state.activeTasks}/>
                <DelayedTasks tasks={this.state.delayedTasks}/>
                <FinishedTasks tasks={this.state.finishedTasks}/>
               
            </div>
        );
    }
}export default Tasks;