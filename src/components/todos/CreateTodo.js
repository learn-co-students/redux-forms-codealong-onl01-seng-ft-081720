import React, { Component } from 'react'
import { connect } from 'react-redux';

class CreateTodo extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }


  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    // this.props.addTodo(this.state)
    // With alternate export statement change this line to
    this.props.dispatch({ type: 'ADD_TODO', payload: this.state })
  }

  render() {
    return(
      <div>
        <h1>Create Todo Component</h1>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <p>
            <label>Add Todo</label>
            {/* <input type="text" onChange={(event) => this.handleChange(event)}/> */}
            {/* once you make handle change an arrow function you no longer need the callback function for onChange */}
            {/* so instead write it this way */}
            <input type="text" onChange={this.handleChange} value={this.state.text} />
          </p>
          <input type="submit" />
        </form>
      {/* this line is to visually confirm we are changing the state of component */}
        {this.state.text}
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addTodo: formData => dispatch({type: 'ADD_TODO', payload: formData })
//   }
// }
// export default CreateTodo;
// export default connect(null, mapDispatchToProps)(CreateTodo);
// Alternate export statement
// With alternate you no longer need the mapDispatchToProps function
export default connect()(CreateTodo);
