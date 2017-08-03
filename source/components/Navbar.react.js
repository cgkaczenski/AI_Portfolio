import React from 'react';

class Navbar extends React.Component {
  render() {

    return (
    	<div>
    		<nav className="navbar navbar-inverse navbar-fixed-top">
    			<div className="container-fluid">
    				<div className="collapse navbar-collapse" id="navHeader">
		  				<ul className="nav navbar-nav">
		    				<li className="active"><a href="#">Link</a></li>
		    			</ul>
		    		</div>
    				<div className="navbar-header">
    					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navHeader" aria-expanded="false">
					        <span className="sr-only"></span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					        <span className="icon-bar"></span>
					    </button>
					    <a className="navbar-brand" href="#">Brand</a>
    				</div>
    			</div>
    		</nav>    	
		</div>
    
    );
  }
}

module.exports = Navbar;