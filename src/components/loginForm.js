import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { Panel, Col, FormGroup,FormControl, Button}from 'react-bootstrap';
import * as LoginActions from '../actions/loginAction'
class LoginPage extends Component{
    constructor(props){
    super(props);
    this.state={
        email:'',
        password:'',
    }
    }
    handleClick(event){
    event.preventDefault()
    const user = {
        email: this.state.email,
        password: this.state.password
    }
    this.props.loginAction.userLogin(user)
    }
      render(){
          console.log(this.props)
          return(
            <div>
                <Col md = {6} mdPush={3} >
                <Panel header='login' bsStyle="warning">
                <FormGroup>
                <FormControl type="email" placeholder="email" onChange={(event)=>this.setState({email:event.target.value})}/>
                </FormGroup>
                <FormGroup>
                <FormControl type="password" placeholder="Password" onChange={(event)=>this.setState({password:event.target.value})}/>
                </FormGroup>
                <Button bsStyle="success" onClick={(event)=>{this.handleClick(event)}}>Login</Button>
                </Panel>
                </Col>
                </div>

          );
        }
    }
 function mapStateToProps (state, ownProps){
return{
   user : state.loginReducer
}
 }
 function mapDispatchToProps(dispatch){
     return{
        loginAction: bindActionCreators(LoginActions, dispatch)
    }

 }
export default connect(mapStateToProps,mapDispatchToProps) (LoginPage);