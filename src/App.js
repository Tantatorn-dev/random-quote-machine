import React, { Component } from 'react';
import './App.css';
import { Header, Container, Grid } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div style={{ background: 'DarkSalmon', height: "100vh" }}>

        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            
              <Header as='h1'>Hello</Header> 
           
          </Grid.Column>
        </Grid>


      </div>
    );
  }
}

export default App;
