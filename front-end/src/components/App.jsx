import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home/Home';
import Products from './products/Products';
import Programs from './programs/Programs';
import Transactions from './transactions/Transactions';
import Users from './users/Users';

const App = React.memo(() => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/programs">Programs</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/transactions">Transactions</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/programs" component={Programs} />
      <Route path="/products" component={Products} />
      <Route path="/transactions" component={Transactions} />
      <Route path="/users" component={Users} />
    </div>
  </Router>
));

export default App;
