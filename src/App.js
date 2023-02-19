
import { Component } from 'react';

import TaskPage from './app/tasks/TaskPage';
import Profile from './app/profile/Profile'; 
import { /*Navigate,*/ Route,  Routes, useNavigate } from 'react-router-dom';
import SignIn from './app/registration/components/SignIn';
import SignUp from './app/registration/components/SignUp';
// import Request from './sharedComponents/Request';
class App extends Component {
  constructor(props){
    super(props);
    // this.requset = new Requset();

  }
  state= {
    user:{},
    tasks:[],
    isLoged:false,
    errorMessage:''
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.isLoged && (prevState.user.userEmail === this.state.user.userEmail))
          {
           this.state=prevState; 
          
          }
    }

    HttpRequest(type, url, data){
      const promise = new Promise((resolve, reject)=>
      {
          const client =  new XMLHttpRequest();
          client.open(type,url);
      
          //expected object in form of json as well as the request inform the browser the  objectis a json object
          client.responseType='json';
          if(data!==null) { client.setRequestHeader('Content-Type','application/json'); }

          client.onload = ()=> {
              if(client.status===400)
                  reject(client.response);
              else
                  resolve(client.response);
          }

          client.onerror = () =>{
              console.log('something went wrong!!')
          }
          client.send();

    })

    return promise;
  }
// GET /api/v1/user/get/{obj}.
// POST /api/v1/user/login
  signIn(email,pass){
    const user ={
      email : email,
      pass : pass,
    }
    console.log(email);
    this.HttpRequest('GET', '/user/get/'+email)
    .then(
      data => {
        if(data !== null){
            if(data.password !== pass){
              console.log(pass);
              this.setState({errorMessage:"plase enter the correct password"});}
            else this.setState({user:data, isLoged:true, tasks:data.todolist})

          if(data.totList!==null && data.todoList.length>0)
            this.setState({tasks:data.todoList})
          const navigate = this.props.navigation;
          navigate('/task',{replace:true});
          
          
        }
      }
    )
    .catch((err)=>{this.setState({isLoged:false});console.log(err)});      
  }



  addTask(task){

    this.HttpRequest('POST', '/task/add', task).then(
      response=>console.log(response)
    ).catch(
      error=> { console.log(error);}
    )
  }
  render()
  {
    return (
      <Routes>

      <Route exact path='/' element={<SignIn error={this.state.errorMessage} signIn={this.signIn.bind(this)}/>} />
      <Route  path='/register' element={<SignUp />} />
      <Route path='/task' element={
      <TaskPage isLoged={this.state.isLoged} 
      email={this.state.user.userEmail} id={this.state.user.userId}
      addTask={this.addTask.bind(this)} tasks={this.state.tasks} />
      } />

      <Route path='/profile' isLoged={this.state.isLoged}  element={<Profile user={this.state.user} tasks={this.state.tasks} />} />

        {/*
         redirect when user is not loged-in
          it work but there was a huge problem those are as below:
          1-it dependes on state, therefore submition or  refresh 
        */}
        {/* this.state.isLoged ? <TaskPage isLoged={this.state.isLoged} email={this.state.user.userEmail} id={this.state.user.userId}/>
        :
        <Navigate to={'/'} replace/> */}

      <Route path='/profile' element={ <Profile /> }/>

        
    </Routes>

    );
  }
}

export default function(props){
  const navigate = useNavigate();
  return <App {...props} navigation={navigate}/>
};
