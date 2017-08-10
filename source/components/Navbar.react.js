import React from 'react';

class Navbar extends React.Component {
  render() {

  	const textStyle = {
  		color: '#9d9d9d'
  	};

  	const contactStyle = {
  		color: '#9d9d9d',
  		listStyle: 'none'
  	};

  	const buttonStyle = {
  		marginRight: '20%'
  	};

    return (
    	<div>
    		<nav className="navbar navbar-inverse navbar-fixed-top">
    			<div className="container-fluid">
    				<div className="collapse navbar-collapse" id="navHeader">
		  				<div className="row">
		  					<div className="col-md-2 col-lg-2">
		  					</div>
		  					<div className="col-sm-8 col-md-3 col-lg-3">
			  					<h4 style={textStyle}>About</h4>
			  					<p style={textStyle}>
			  						I am currently studying Machine Learning at Udacity.
			  						I graduated from the University of Arkansas at Little
			  						Rock with a degree in Computer Science. Before that,
			  						I was working at K&S Professional Research Service,
			  						a clinical research company. My interests include
			  						Artificial Intelligence, Machine Learning, and Web
			  						Development.
			  					</p>
		  					</div>
		  					<div className="col-md-4 col-lg-4">
		  					</div>
		  					<div className="col-sm-4 col-md-3 col-lg-3">
		  						<h4 style={textStyle}>Contact</h4>
		  						<ul style={contactStyle}>
		  							<li>Email: Kzpulaski@gmail.com</li>
		  							<li>
		  								<a href='https://github.com/cgkaczenski'>Github</a>
		  							</li>
		  							<li>
		  								<a href='https://www.linkedin.com/in/christopher-kaczenski/'>Linkedin</a>
		  							</li>
		  							<li>
		  								<img src="../static/profile.jpg" alt="Picture" className="img-circle" height="106" width="126"></img>
		  							</li>
		  						</ul>
		  					</div>
		  				</div>
		    		</div>
    				<div className="navbar-header row">
    					<div className="col-md-2 col-lg-2">
		  				</div>
    					<a className="navbar-brand">
    						<img alt="Hog" src="../static/pig_brand.png" width="40" height="30"></img>
    						</a>
    					<button type="button" className="navbar-toggle" data-toggle="collapse" style={buttonStyle}
    					 data-target="#navHeader" aria-expanded="false">
					        <span className="sr-only"></span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					    </button>
    				</div>
    			</div>
    		</nav>    	
		</div>
    
    );
  }
}

module.exports = Navbar;