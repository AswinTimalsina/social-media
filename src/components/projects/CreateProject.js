import React, { Component } from 'react'
import {connect} from 'react-redux';
import {submitHandler} from '../store/actions/projectActions';


class CreateProject extends Component {
    state={
        title:'',
        content:''
    }

    onSubmitHandler=(e)=>{
        e.preventDefault();
        // console.log('title: '+ this.state.title + ' content: '+ this.state.content)
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmitHandler} className='white'>
                    <h5 className="grey-text text-darken-3">New Post</h5>
                    <div className="input-field">
                        <label>Title</label>
                        <input type="text" id='title' onChange={(event)=>{this.setState({title: event.target.value})}}/>
                    </div>

                    <div className="input-field">
                        <label>Content</label>
                        <textarea name="content" id="" cols="30" rows="10" className="materialize-textarea" onChange={(event)=>{this.setState({content: event.target.value})}}/>
                    </div>
                    <div className='input-field'>
                        <button className="btn pink lighten-1 z-depth-0">Add Post</button>
                    </div>
                </form>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return{
//         projects: state.project.projects
//     }
// }


const mapDispatchToProps = dispatch => {
    return{
        onSubmit: (titCont) => dispatch(submitHandler(titCont))
    }
}


export default connect(null, mapDispatchToProps)(CreateProject);
