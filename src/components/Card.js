import React, {Component} from 'react';

class Card extends Component {
  render() {
    let likeAnimal = this.props.likeAnimal;
    let i =0;
    let animalList = [];

    while(i<likeAnimal.length){
        animalList.push(<li key={i}>{likeAnimal[i]}</li>);
        ++i;
    }
    return (
        <div className="card">
            <h1>{this.props.name}</h1>
            while(i)
            {this.props.desc[0]}<br/>
            {this.props.desc[1]}<br/>
            {this.props.desc[2]}<br/>
            <h2>좋아하는 동물</h2>
            {animalList}
        </div>
    );
  }
}

export default Card;
