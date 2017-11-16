import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import propTypes from 'prop-types'
import ReactTooltip from 'react-tooltip';
import { Modal as ReactOverlayModal } from 'react-overlays';
import { connect } from 'react-redux'
import * as bucketsActions from '../actions/bucketsAction'
import  { Modal,InputGroup, Panel, Col, FormGroup,FormControl, Button}from 'react-bootstrap';
import { bindActionCreators } from 'redux';
class bucketPage extends Component{
    constructor(props){
        super(props)
        this.state={
                name:'',
                id:'',
                editbucketModal: false,

        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.deleteBucket=this.deleteBucket.bind(this);

    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        const bucketDetails = {
            name:this.state.name
        }
        this.props.bucketsAction.createBuckets(bucketDetails)
    }

    deleteBucket = id => e => {
        e.preventDefault();
        this.props.bucketsAction.deleteBucket(id)
    }

    updateBucket = id => e =>{
        e.preventDefault();
        id = this.state.id
        this.props.bucketsAction.editBucket(id, {name: this.state.name})
    }

    componentWillMount(){
        this.props.bucketsAction.loadBuckets()
    }
      render(){
          const messages = this.props.buckets.message
          const bucketlists = this.props.buckets.bucket
          return(
            <div>
                     {messages.map((themessage) =>(
                <tr key = {themessage.message} >{themessage.message}</tr>
            ))}
                <form onSubmit={this.onSubmit }>
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
                bucketlists.map((bucket) =>(

                    <tr key={bucket.id}>
                    <td>{bucket.name}</td>
                    <td>
                    <a data-tip="React-tooltip" data-for='edit' onClick={(event=>this.setState({ editbucketModal: true, id: bucket.id , name :bucket.name }))}  className="btn btn-warning"><i className="fa fa-pencil"></i></a>
                    <ReactTooltip id='edit' type='warning'>
                      <span>edit this bucketlist</span>
                    </ReactTooltip>
                                    <a  data-tip="React-tooltip" data-for='delete'onClick={this.deleteBucket(bucket.id)} className="btn btn-danger"><i className="fa fa-trash"></i></a>
                                        <ReactTooltip id='delete' type='error'>
                                          <span>delete this bucket</span>
                                        </ReactTooltip>
                                    <a data-tip="React-tooltip" data-for='view' className="btn btn-info"><i className="fa fa-eye"></i> </a>
                                        <ReactTooltip id='view' type='info'>
                                          <span>view items in this bucket</span>
                                      </ReactTooltip>
                        </td>
                    </tr>


                ))
                    }
                     </tbody>
                    </table>
            <Modal show={this.state.editbucketModal} onHide={this.close}>
            <Modal.Header onClick={(event => this.setState({ editbucketModal: false }))} closeButton>
              <Modal.Title>edit this bucket </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form onSubmit ={this.updateBucket()}>
                    <FormGroup>
                        <InputGroup>
                            <FormControl type="text" defaultValue={this.state.name} onChange={this.onChange} name="name" required />
                    <InputGroup.Button><Button bsStyle="primary" onClick={(event => this.setState({ editbucketModal: false }))} type="submit">Submit</Button></InputGroup.Button>
                  </InputGroup>
                </FormGroup>
              </form>
                    </Modal.Body>
            <Modal.Footer>
              <Button onClick={(event => this.setState({ editbucketModal: false }))} >Close</Button>
            </Modal.Footer>
          </Modal>
                </div>
          );
        }
    }

function mapStateToProps(state, ownprops){
return { buckets : state.bucketReducer
}
}
function mapDispatchToProps(dispatch){
return{
    bucketsAction: bindActionCreators(bucketsActions , dispatch)
}

}
export default connect(mapStateToProps, mapDispatchToProps) (bucketPage);