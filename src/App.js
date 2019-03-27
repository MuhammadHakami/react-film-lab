import React, { Component } from 'react';
import './App.css';
import Card from "./cards"
import TMDB from "./TMDB"

class App extends Component {
  handleClick=(e) => {
    console.log("handling Fave click!")
  }
  handleFilterClick(filter){
    console.log("setting filter to "+filter)
  }
  render() {
    const allCards= TMDB.films.map((element,index) => {
      return <Card item={element} key={index}/>
    })
    return (
      <div>
        <header className='row'>
          <div className='col-4 bg-secondary text-white text-center'>FILMS</div>
          <div className='col-8 bg-secondary text-white text-center'>DETAILS</div>
        </header>
        <content className='row'>
        <div className='col-4' style={{'position': 'relative','overflowY':'scroll','height':'800px'}}>
        <div className='row'>
        <div className='col bg-dark text-center text-white pt-1' onClick={()=>{
          this.handleClick()
          }}>ALL<span className='bg-white text-dark pr-1 pl-1 m-1 rounded'>{allCards.length}</span></div>
        <div className='col bg-dark text-center text-white pt-1' onClick={(e) =>{
          e.stopPropagation()
          this.handleClick(e)
          }}>FAVES<span className='bg-white text-dark pr-1 pl-1 m-1 rounded'>0</span></div>
        </div>
        {allCards}
        </div>
        <div className='col-8'>
        </div>
        </content>
      </div>
    );
  }
}

export default App;
