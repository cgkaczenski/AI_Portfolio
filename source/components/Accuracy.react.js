import React from 'react';
import ReactDOM from 'react-dom';


class Accuracy extends React.Component {
	constructor(props) {
    super(props);
    
    this.state = {count: 100, correct:79, 
     letterCorrect:[7,7,10,9,8,8,8,5,9,8],
     letterCount:Array(10).fill(10)};

    this.handleCorrect = this.handleCorrect.bind(this);
    this.handleIncorrect = this.handleIncorrect.bind(this);
  }

  handleCorrect(id){
    if (this.props.result != 10){
      const letter = this.state.letterCount.slice();
      letter[id] += 1;
      this.setState({letterCount: letter});

      const correct = this.state.letterCorrect.slice();
      correct[id] += 1;
      this.setState({letterCorrect: correct});

      this.setState({count: this.state.count + 1});
      this.setState({correct: this.state.correct + 1});

      this.setState({correct: this.state.correct + 1});

      this.props.onClick();
    }
  }

  handleIncorrect(id){
    if (this.props.result != 10) {
      this.setState({count: this.state.count + 1});

      const letter = this.state.letterCount.slice();
      letter[id] += 1;
      this.setState({letterCount: letter});

      this.props.onClick();
    }
  }

  render () {

    return (
    	<div>
         <h2>Total Accuracy: {((this.state.correct/this.state.count)*100.0).toPrecision(4)} %</h2>
         <h2>Number of Trials: {this.state.count}</h2>
    	</div>
    	);
  }
  }
module.exports = Accuracy;