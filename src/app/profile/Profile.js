import './style/profile.css';
import { Component } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../sharedComponents/GeneralNavigation";
import Header from "../../sharedComponents/Header";
import Edit from './components/UpdateProfile';
import Tasks from '../tasks/components/Tasks';
class Profile extends Component{
    constructor(props)
    {
        super(props);
    
        this.state={
            user:{
            id:this.props.user.userId,
            email:this.props.user.userEmail,
            },
            tasks:this.props.tasks,
            isLoged:this.props.isLoged,
        }
        
    }
    redirect(path){
        const navigate = this.props.navigation;
        navigate(path,{replace:true});
    }
    updateEmail(newEmail){
        this.setState({user:{email:newEmail, tasks:this.state.user.tasks}});
    }
    
    getTotalTasks(){
        const totalEl =this.state.tasks.length;

        return totalEl;
    }

    getAcomlishedTask(){
        let totalFinshed =0;
        
        this.state.tasks.filter(
            (task)=>{if(task.status==='FINISHED') {totalFinshed++ }}

        )
       return (totalFinshed / this.getTotalTasks()) *100;
    }

    getDelayedTasks(){
        let totalDelayedTasks =0;
        this.state.tasks.filter(
            (task)=>{
                if(task.status==="DELAYED") totalDelayedTasks++;
            }
        )
        

        return totalDelayedTasks;
    }
    render(){
        const totalTask = this.getTotalTasks();
        const acomplishedTasks = this.getAcomlishedTask();
        const totalDelayedTasks = this.getDelayedTasks(); 

        console.log("delyed tasks:"+totalDelayedTasks);
        return <div>
            <Header logedIn={this.state.isLoged} userName={this.getUsername} redirect={this.redirect.bind(this)} />
            <Navigation currentPage={'profile'}/>
            <section className='main-section'>
                <Edit chageEmail={this.updateEmail.bind(this)} user={this.state.user}  />
                <div className="info-section">
                    <div className='bar'>
                        <span className="bar-title" >Tasks</span>
                        <div className="progress-bar">
                            <span>{totalTask}</span>
                        </div>
                    </div>
                    
                    <div className='bar'>
                        <span className="bar-title" >Acomlished</span>
                        <div className="progress-bar">
                            <span>{(acomplishedTasks<0)? '0' : acomplishedTasks}</span>
                        </div>    
                    </div>
                    <div className='bar'>
                        <span className="bar-title" >Delayed</span>
                        <div className="progress-bar">
                            <span>{(totalDelayedTasks<=0)? '0' : totalDelayedTasks }</span>
                        </div>
                    </div> 
                   
                </div>
            </section>
        </div> 
    }
}
export default function(props){
    const navigate=useNavigate();
    return <Profile {...props} navigation={navigate} /> 
};