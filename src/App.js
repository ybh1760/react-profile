import React, {Component} from 'react';
import Card from "./components/Card";


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      card:[
        {name:"최수민" ,desc:["안녕하세요 저는 서강대학교의 컴퓨터공학과를 다니고 있습니다.","올해는 25살인데 내년엔 26이에요.","지금 기분은 행복해요!"]},
        {name:"이한길" ,desc:["안녕하세요 저는 홍익대학교의 법학과를 다니고 있습니다.", "올해는 29살인데 내년엔 30이에요.", "지금 기분은 불행해요!"]},
        {name:"김서영" ,desc:["안녕하세요 저는 이화여자대학교의 사이버보안학과를 다니고 있습니다." ,"올해는 22살인데 내년엔 23이에요." ,"지금 기분은 불행해요!"]}    
      ],
      animal:[
        {animalList:["사자", "토끼", "뱀"]},
        {animalList:["펭귄"]},
        {animalList:["웜", "트로이목마"]}
      ]
    }
  }
  render() {
    let i=0;
    let data = this.state.card;
    let cardList = [];
    while(i<data.length){
      cardList.push(<Card key = {i} name={this.state.card[i].name} desc={this.state.card[i].desc} likeAnimal={this.state.animal[i].animalList}></Card>)
      ++i;
    }
    return (
    <div className="App">
        {cardList}
    </div>
    );
  }
}

export default App;
