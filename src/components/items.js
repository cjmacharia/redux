import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import propTypes from 'prop-types'
import ReactTooltip from 'react-tooltip';
import { connect } from 'react-redux'
import * as itemsActions from '../actions/itemAction'
import  { Modal,InputGroup, Panel, Col, FormGroup,FormControl, Button}from 'react-bootstrap';
import { bindActionCreators } from 'redux';
class ItemsPage extends Component{
    constructor(props){
        super(props)
        this.state={
                name:'',
                id:'',
                edititemModal: false,

        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.updateItem=this.updateItem.bind(this)

    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
   deleteItem = id=> e =>{
    e.preventDefault();
    let bucketid = this.props.routeParams
    this.props.itemAction.deleteItem(id , bucketid)
   }
    onSubmit (e){
        let id = this.props.routeParams
        e.preventDefault();
        const items = {
            name:this.state.name,

        }
        this.props.itemAction.createItem(items, id)
    }
    updateItem= id => e => {
      e.preventDefault();
      let bucketid = this.props.routeParams
      let id = this.state.id
      this.props.itemAction.editItem(bucketid, id, {name: this.state.name})
    }
      render(){
        let id = this.props.routeParams
        const items = this.props.items.item.filter(item => {
            return item.bucketlist_id == id.bucket_id ? item :null
        })
          return(
            <div>
                <form onSubmit={this.onSubmit}>
                <Panel header='add buckets' bsStyle="warning">
                <FormGroup>
                <FormControl type="text" placeholder="name" defaultValue={this.state.name} onChange={this.onChange} name="name" required/>
                </FormGroup>
                <Button bsStyle="success" type="submit">submit</Button>
                </Panel>
                </form>
                    <table>
                        <tbody>

                    {

                items.map((item) =>(

                    <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>
                    <a data-tip="React-tooltip" data-for='edit' onClick={(event=>this.setState({ edititemModal: true, id: item.id , name :item.name }))}  className="btn btn-warning"><i className="fa fa-pencil"></i></a>
                    <ReactTooltip id='edit' type='warning'>
                      <span>edit this bucketlist</span>
                    </ReactTooltip>
                                    <a  data-tip="React-tooltip" data-for='delete' onClick={this.deleteItem(item.id)}className="btn btn-danger"><i className="fa fa-trash"></i></a>
                                        <ReactTooltip id='delete' type='error'>
                                          <span>delete this bucket</span>
                                        </ReactTooltip>
                                        <a data-tip="React-tooltip" data-for='edit' onClick={(event=>this.setState({ edititemModal: true, id: item.id , name :item.name }))}  className="btn btn-warning"><i className="fa fa-pencil"></i></a>
                    <ReactTooltip id='edit' type='warning'>
                      <span>edit this item</span>
                    </ReactTooltip>
                        </td>
                    </tr>


                ))
                    }
                     </tbody>
                    </table>
            <Modal show={this.state.edititemModal} onHide={this.close}>
            <Modal.Header onClick={(event => this.setState({ edititemModal: false }))} closeButton>
              <Modal.Title>edit this bucket </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit ={this.updateItem()}>
                    <FormGroup>
                        <InputGroup>
                            <FormControl type="text" defaultValue={this.state.name} onChange={this.onChange} name="name" required />
                    <InputGroup.Button><Button bsStyle="primary" onClick={(event => this.setState({ edititemModal: false }))} type="submit">Submit</Button></InputGroup.Button>
                  </InputGroup>
                </FormGroup>
              </form>
                    </Modal.Body>
            <Modal.Footer>
              <Button onClick={(event => this.setState({ edititemModal: false }))} >Close</Button>
            </Modal.Footer>
          </Modal>
                </div>
          );
        }
    }

function mapStateToProps(state, ownprops){
return { buckets : state.bucketReducer,
            items : state.itemReducer
}
}
function mapDispatchToProps(dispatch){
return{
    itemAction: bindActionCreators(itemsActions , dispatch)
}

}
export default connect(mapStateToProps, mapDispatchToProps) (ItemsPage);