import React, { Component } from 'react';
import './App.css';

class Cards extends Component {
  handleDetailsClick(film){
    console.log("Fetching the details for "+film)
  }
  render() {
    return (
        <div className='row bg-white mb-1'>
            <div className='col-4'>
            <img src={"https://image.tmdb.org/t/p/w500/"+this.props.item.poster_path} alt="movie"/>
            </div>
            <div className ='col-8'>
            <p>{this.props.item.title}</p>
            <p className='text-muted'>{this.props.item.release_date.split('-')[0]}</p>
            <div className="film-row-fave add_to_queue" >
              <p className="material-icons" onClick={ ()=> {
            this.handleDetailsClick('film')
            }}
              >add_to_queue</p>
            </div>
            </div>
        </div>
    );
  }
}

export default Cards;