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
			  						Add some information about the album below, the author, or any other background context.
			  						Make it a few sentences long so folks can pick up some informative tidbits. Then, link
			  						them off to some social networking sites or contact information.
			  					</p>
		  					</div>
		  					<div className="col-md-4 col-lg-4">
		  					</div>
		  					<div className="col-sm-4 col-md-3 col-lg-3">
		  						<h4 style={textStyle}>Contact</h4>
		  						<ul style={contactStyle}>
		  							<li>Email</li>
		  							<li>Github</li>
		  						</ul>
		  					</div>
		  				</div>
		    		</div>
    				<div className="navbar-header row">
    					<div className="col-md-2 col-lg-2">
		  				</div>
    					<a className="navbar-brand" href="#">Brand</a>
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