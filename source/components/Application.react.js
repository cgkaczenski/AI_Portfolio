import Album from './Album.react';
import Canvas from './Canvas.react';
import Navbar from './Navbar.react';
import React from 'react';

class Application extends React.Component {
  render() {
  	const jumboStyle = {
  		textAlign: 'center'
  	};

    return (
    	<div>
    		<Navbar />

		    <div className="jumbotron" style={jumboStyle}>
		    	<h1>Page under construction</h1>
          <h3>Check back tommorrow to see progress :)</h3>
		      	<Canvas height="350" width="350" lineWidth="20"/>
		    </div>

		    <Album />
		</div>
    
    );
  }
}

module.exports = Application;