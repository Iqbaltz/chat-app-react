import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

export default function App() {
	return (
		<Switch>
			<Route exact path="/" render={(routeProps) => <Join {...routeProps} />} />
			<Route exact path="/chat" render={(routeProps) => <Chat {...routeProps} />} />
		</Switch>
	);
}
