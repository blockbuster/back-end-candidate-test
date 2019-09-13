import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './controllers/index';
import Users from './controllers/users/users.jsx';
import User from './controllers/users/user.jsx';
import Products from './controllers/products/products.jsx';
import Product from './controllers/products/product.jsx';
import Programs from './controllers/programs/programs.jsx';
import Program from './controllers/programs/program.jsx';
import Transactions from './controllers/transactions/transactions.jsx';
import Transaction from './controllers/transactions/transaction.jsx';

import './index.css';

const App = () => (
	<Router basename="/">
		<Switch>
			<Route exact path="/" component={Index} />
            <Route exact path="/users" component={Users} />
			<Route path="/users/:id" component={User} />
			<Route exact path="/products" component={Products} />
			<Route path="/products/:id" component={Product} />
            <Route exact path="/programs" component={Programs} />
			<Route path="/programs/:id" component={Program} />
			<Route exact path="/transactions" component={Transactions} />
			<Route path="/transactions/:id" component={Transaction} />
		</Switch>
	</Router>
);

export default App;
