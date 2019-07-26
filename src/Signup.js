import React from 'react';
import axios from 'axios';
import './Signup.css';


class Signup extends React.Component{
  
   state = { result: null ,name:"",email:""};
  
  toggleButtonState = () => {
    let { name, email } = this.state;
    let context = this;
    axios.get(`/Subha_Spring_Test_1/employees/`)
      .then(res => {
        const persons = res.data;
        console.log('response',res.data);
        for (let i = 0; i < res.data.employeeList.length; i++) { 
          console.log('response',res.data.employeeList[i].firstName); 
          console.log('response',res.data.employeeList[i].email); 
          if(name===res.data.employeeList[i].firstName && email===res.data.employeeList[i].email)
          {
            // window.location.href = "https://designrevision.com/react-axios/";
            context.props.history.push("/welcome");
          }
        }
      })
  };

  handleChangeName = (event)  => {
   // console.log(event.target);
    this.setState({name: event.target.value}, () => {
     // alert(this.state.name);
    });
  }
  
  handleChangeEmail = (event)  => {
    // console.log(event.target);
     this.setState({email: event.target.value}, () => {
      // alert(this.state.email);
     });
   }
  render()
  {

  return (<div className="App">
   
   <div className="App__Aside"></div>
          <div className="App__Form">
          <div className="PageSwitcher">
               <a href='#' className="PageSwitcher__Item">Sign In</a>
               <a href='#' className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</a>

          </div>
          <div className="FormTitle">
          <a href='#' className="FormTitle__Link">Sign In</a> or <a href='#'
          className="FormTitle__Link FormTitle__Link--Active">Sign Up</a>
                 
          </div>
          <div className="FormCentre">
            <div className="FormField">
            <label  className="FormField__Label" htmlFor="name" >Full Name</label>
            <input type="text" id="name" className="FormField__Input" placeholder="Enter your name"
            name="name" value={this.state.value} onChange={this.handleChangeName} />

          </div>
      
          <div className="FormField">
            <label  className="FormField__Label" htmlFor="Email" >Email</label>
            <input type="text" id="email" className="FormField__Input" placeholder="Enter your email"
            name="email" value={this.state.value} onChange={this.handleChangeEmail}/>
    <button type="submit" className="btn btn-primary" onClick={this.toggleButtonState}>
          Sign up
       </button>
          </div>
        

          </div> 
           </div>
      <div>{this.state.result}</div>
    </div>);
  }
  
}

export default Signup;
