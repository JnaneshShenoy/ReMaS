// Main App component to render different pages
// Example: Define your App component using React
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './pages/Main';
import ShopByProduct from './pages/ShopByProduct';
import Shopkeepers from './pages/Shopkeepers';
import { Switch, Route } from 'react-router-dom';


const App = () => {
  // App JSX structure with routes
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/shopbyproduct" component={ShopByProduct} />
        <Route path="/shopkeepers" component={Shopkeepers} />
        {/* Add other routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
