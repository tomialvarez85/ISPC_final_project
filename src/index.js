import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';


const routing = (
	<Router>
		<React.StrictMode>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/login" component={Login} />
			</Switch>
		</React.StrictMode>
	</Router>
);

const divRoot = document.querySelector('#root');
const root = createRoot(divRoot);

root.render(routing);