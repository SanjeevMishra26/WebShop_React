import React from 'react';
import './App.css';
import Navbar from './app/Navbar'

class App extends React.Component {  

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
            array:[]
    };
   
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserName = this.handleUserName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
  }

  handleUserName(e) {
    this.setState({
      username: e.target.value,
    });
    this.state.array.push(e.target.value)
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value,
    });
    this.state.array.push(e.target.value)
  }

  handleConfirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value,
    });
    this.state.array.push(e.target.value)
  }

  handleSubmit(e) {
    e.preventDefault();
    
  }

 
  render() {


    return (
      <div className="App">
		
		<Navbar/>
        
		<div className="form-container">
          
            {/* login form --- //import logo ---- import logo from './logo.svg';*/}

            <h1 className="heading"> Login Portal </h1>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                defaultValue={this.state.username} 
                onBlur={this.handleUserName} 
                className="form-control" 
                name="username"/>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                defaultValue={this.state.password} 
                onBlur={this.handlePassword} 
                className="form-control" 
                name="password"/>
            </div>

            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input 
                type="password" 
                defaultValue={this.state.confirmPassword} 
                onBlur={this.handleConfirmPassword} 
                className="form-control" 
                name="confirm-password"/>
            </div>

            <button className="btn-submit" onClick={this.handleSubmit}>Submit</button>

        </div>

      </div>
    );
  }
}

export default App;
