import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import * as RegisterAction from '../actions/signUpAction'
import  { Panel, Col, FormGroup,FormControl, Button}from 'react-bootstrap';
class RegisterPage extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            email:'',
            password:''
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        const data = {
            username: this.state.username ,
            email :this.state.email,
            password: this.state.password,
        }
        this.props.signUp(data)
    }

      render(){
        console.log(this.props)
          return(
            <div>
                <form onSubmit={this.onSubmit}>
                <Col md = {6} mdPush={3} >
                <Panel header='Register' bsStyle="warning">
                <FormGroup>
                <FormControl type="text" placeholder="username" value={this.state.username} onChange={this.onChange} name="username"/>
                </FormGroup>
                <FormGroup>
                <FormControl type="email" placeholder="email"  onChange={this.onChange} value={this.state.email} name="email" />
                </FormGroup>
                <FormGroup>
                <FormControl type="password" placeholder="Password" onChange={this.onChange}   name="password"/>
                </FormGroup>
                <FormGroup>
                <FormControl type="password" placeholder="confirm Password" onChange={this.onChange}    name="cPassword" />
                </FormGroup>
                <Button bsStyle="success" type="submit">Register</Button>
                </Panel>
                </Col>
                </form>
                </div>
          );
        }
    }

        function mapStateToProps(state, ownprops){
        return { data : state.registerReducer
        }
    }
        function mapDispatchToProps(dispatch){
        return {
            signUp : (data) => dispatch(RegisterAction.signUp(data))
        }
        }
        export default connect(mapStateToProps, mapDispatchToProps) (RegisterPage);