import React, { Component } from 'react'
import { connect } from 'react-redux';
 
class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
   
  // using an arrow function so that this is always bound to the particular instance of the component it's defined in

  handleChange = event => {
    this.setState({
        text: event.target.value
    });
}; 

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state)
  }


  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
            <label>add todo</label>
            <input
          type="text"
          onChange={this.handleChange} value={this.state.text}/>
          </p>
          <input type="submit" />
       </form>
       {this.state.text}
     </div>
   );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: 'ADD_TODO', payload: formData })
  };
};
 
export default connect(null, mapDispatchToProps)(CreateTodo);