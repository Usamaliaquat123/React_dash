import React, { Component } from 'react';
import './login.css'
class ReactState extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name : 'Mary',
        newName : String,
        width : window.innerWidth
    };
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleResize = this.handleResize.bind(this)
  }
  handleChangeName(e) {
    this.setState({ name : e.target.value })
  }
  componentDidMount(){
      document.title = this.state.name
      window.addEventListener('resize',this.handleResize)
    }

    handleResize(){ 
        this.setState({
            width : window.innerWidth
        })
    }
    componentWillUnmount(){
        window.removeEventListener('resize',this.handleResize)
    }
  componentDidUpdate(){
      document.title = this.state.name
  }
  render() {
    return (
      <div>
          <section>
              <input 
                value={this.state.name}
                onChange={this.handleChangeName}
              />
              
          </section>
          <p>Width : {this.state.width}</p>
      </div>
    );
  }
}

export default ReactState;
