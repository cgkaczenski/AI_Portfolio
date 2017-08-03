import Canvas from './Canvas.react';
import Navbar from './Navbar.react';
import React from 'react';

class Application extends React.Component {
  render() {
  	const jumboStyle = {
  		textAlign: 'center !important'
  	};

    return (
    	<div>
    		<Navbar />

		    <div className="jumbotron" style={jumboStyle}>
		    	<h1>Draw Something</h1>
		      	<Canvas height="350" width="350" lineWidth="20"/>
		    </div>
		    
	      	<div className="row">
		      	<div className="col-md-4">
		      		<p>Project 1</p>
		      	</div>
		      	<div className="col-md-4">
		      		<p>Project 1</p>
		      	</div>
		      	<div className="col-md-4">
		      		<p>Project 1</p>
		      	</div>
		    </div>
		    <div className="row">
		      	<div className="col-md-4">
		      		<p>Project 1</p>
		      	</div>
		      	<div className="col-md-4">
		      		<p>Project 1</p>
		      	</div>
		      	<div className="col-md-4">
		      		<p>Project 1</p>
		      	</div>
		    </div>
		    
	  		
		</div>
    
    );
  }
}

module.exports = Application;