import React, { Component } from 'react';
import './App.css';
import {  Grid, Button ,Transition} from 'semantic-ui-react'


const quotes = ['I love dog', 'I love cat', 'I love Coca Cola','I love pepsi','google spaghetti'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_quote_index: 0,
      visible:true
    }
    this.handleClick = this.handleClick.bind(this);
    this.onAnimationComplete= this.onAnimationComplete.bind(this);
  }

  handleClick() {
    this.setState({
      visible: !this.state.visible
    })
  }

  onAnimationComplete(){
    this.setState({
      current_quote_index: this.state.current_quote_index + 1,
      visible: !this.state.visible
    })
  }

  render() {
    return (
      <div style={{ background: 'DarkSalmon', height: "100vh" }}>

        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>

            <Transition  onHide={this.onAnimationComplete} visible={this.state.visible} animation='scale' duration={1000}>
              <p style={{ color: 'white', fontSize: 28 }}>{quotes[this.state.current_quote_index]}</p>
            </Transition>

            <Button onClick={this.handleClick} content='New Quote' inverted color='standard' />

          </Grid.Column>
        </Grid>


      </div>
    );
  }
}

export default App;
