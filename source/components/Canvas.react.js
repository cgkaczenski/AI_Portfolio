import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';

class Canvas extends React.Component {
	constructor(props) {
    super(props);
    this.state = {text: [], index:10};

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.initialize = this.initialize.bind(this);
  }

  componentDidMount() {
    this.canvas = ReactDOM.findDOMNode(this.canvasRef);
    this.canvas.width = this.props.width;
    this.canvas.height = this.props.height;
    this.lineWidth = this.props.lineWidth;
    this.ctx = this.canvas.getContext('2d');
    this.initialize();
  }

  initialize() {
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.lineWidth = 1;
    this.ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.lineWidth = 0.05;
    this.setState({text:[]});
    this.setState({index:10});
  }

  getCursorPosition(e) {
    const {top, left} = this.canvas.getBoundingClientRect();
    return {
      x: e.clientX - left,
      y: e.clientY - top
    };
  }

  onMouseDown(e) {
    var prev = this.getCursorPosition(e);
    this.prev = prev;
    this.drawing = true;
  }

  onMouseUp(e){
    this.drawing = false;

    var img = new Image();
    img.onload = () => {
      var inputs = [];

      //Create a new canvas context in order to resize the image
      var context = document.createElement('canvas').getContext('2d');

      //Resize the image by redrawing it
      context.drawImage(img, 0, 0, img.width, img.height, 0, 0, 28, 28);

      //grab the raw image data
      var data = context.getImageData(0, 0, 28, 28).data;

      //Change the encoding of the image data (UInt8 clampedArray)
      for (var i = 0; i < 28; i++) {
        for (var j = 0; j < 28; j++) {
          var n = 4 * (i * 28 + j);
          inputs[i * 28 + j] = (data[n + 0] + data[n + 1] + data[n + 2]) / 3;
        }
      }
      
      axios.post('/canvas', {
        data: inputs
      })
      .then(function (response) {
        var index = response.data.result;
        var text = ["A","B","C","D","E","F","G","H","I","J"];
        this.setState({text:text[index]});
        this.setState({index:index});
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
    };
    img.src = this.canvas.toDataURL();
    }

  onMouseMove(e) {
    if (this.drawing){
      var curr = this.getCursorPosition(e);
      this.ctx.lineWidth = this.lineWidth;
      this.ctx.lineCap = 'round';
      this.ctx.beginPath();
      this.ctx.moveTo(this.prev.x, this.prev.y);
      this.ctx.lineTo(curr.x, curr.y);
      this.ctx.stroke();
      this.ctx.closePath();
      this.prev = curr;
      }  
    }

  render () {

      return (
    	<div>
        <canvas
        ref={(canvas) => { this.canvasRef = canvas; }}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseMove={this.onMouseMove}>
        </canvas>
        <p>Result:{this.state.text}</p>
        <p>
          <a className="btn btn-primary" data-toggle="collapse" data-target="#navHeader" aria-expanded="false">Contact</a>
          <a className="btn btn-default" onClick={this.initialize}> Clear </a>
        </p>

		</div>
    	);
  }
}

module.exports = Canvas;