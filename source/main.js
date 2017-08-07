import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Application from './components/Application.react';
import Vision from './components/Vision.react';


ReactDOM.render(
	<Router>
		<Switch>
			<Route exact path="/" component={Application}/>
			<Route path="/vision" component={Vision}/>
		</Switch>
	</Router>
	, document.getElementById('root')
);
