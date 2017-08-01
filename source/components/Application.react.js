import Canvas from './Canvas.react';
import React from 'react';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap'
import MediaQuery from 'react-responsive';

class Application extends React.Component {
  render() {
  	const jumboStyle = {
  		textAlign: 'center !important'
  	};
  	
    return (
    	<div>
		    <Jumbotron style={jumboStyle}>
		    	<h1>Draw Something</h1>
		      	<Canvas height="350" width="350" lineWidth="20"/>
		    </Jumbotron>
		    <Grid className="show-grid">
	      	<Row>
		      	<Col md={4}>
		      		<p>Project 1</p>
		      	</Col>
		      	<Col md={4}>
		      		<p>Project 1</p>
		      	</Col>
		      	<Col md={4}>
		      		<p>Project 1</p>
		      	</Col>
		    </Row>
		    <Row>
		      	<Col md={4}>
		      		<p>Project 1</p>
		      	</Col>
		      	<Col md={4}>
		      		<p>Project 1</p>
		      	</Col>
		      	<Col md={4}>
		      		<p>Project 1</p>
		      	</Col>
		    </Row>
	  		</Grid>
		</div>
    
    );
  }
}

module.exports = Application;