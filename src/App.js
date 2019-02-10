import React, { Component } from 'react';
import './App.css';
import { Grid, Button, Transition } from 'semantic-ui-react'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [],
      quotes: [],
      current_quote_index: 0,
      visible: true
    }
    this.handleClick = this.handleClick.bind(this);
    this.onAnimationComplete = this.onAnimationComplete.bind(this);
  }

  componentDidMount() {

    fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40')
      .then(res => {
        return res.json();
      }).then(data => {
        let temp_quote = [];
        let temp_author = [];

        for (let i = 0; i < 40; i++) {
          let text = data[i].content;
          let cleanText = text.replace(/<\/?[^>]+(>|$)/g, "");
          temp_quote = [...temp_quote, cleanText];
          temp_author = [...temp_author, data[i].title];
        }
        this.setState({
          quotes: temp_quote,
          authors: temp_author
        })
      })


  }

  handleClick() {
    this.setState({
      visible: !this.state.visible
    })
  }

  onAnimationComplete() {
    this.setState({
      current_quote_index: this.state.current_quote_index + 1,
      visible: !this.state.visible
    })
  }

  render() {
    let someHtml=this.state.quotes[this.state.current_quote_index];
    return (
      <div style={{ background: 'DarkSalmon', height: "100vh" }}>

        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>

            
            <div className='box'>
            <Transition onHide={this.onAnimationComplete} visible={this.state.visible} animation='scale' duration={1000}>
            <figure>
              <div className='quote' 
              dangerouslySetInnerHTML={{__html:someHtml}} 
              style={{color: 'white', fontSize: 24,fontFamily:'Roboto'}}/>
              <figcaption style={{color: 'white', fontSize: 22,paddingTop:20}}>{'  - '+this.state.authors[this.state.current_quote_index]}</figcaption>
            </figure>
            </Transition>

            <Button className='change-quote-button' onClick={this.handleClick} content='New Quote' colored color='red' />
            </div>

          </Grid.Column>
        </Grid>


      </div>
    );
  }
}

export default App;
