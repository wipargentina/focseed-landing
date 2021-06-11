import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Tanks from 'pages/Tanks';
import Policy from 'pages/Policy';

// import TagManager from 'react-gtm-module';
import AboutUs from 'pages/AboutUs';
import Products from 'pages/Products';
import ScrollToTop from 'components/ScrollToTop';

// const tagManagerArgs = {
//   gtmId: 'GTM-TSTKTGV'
// };

// TagManager.initialize(tagManagerArgs);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/sobre-nosotros'>
            <AboutUs />
          </Route>
          <Route exact path='/productos'>
            <Products />
          </Route>
          <Route exact path='/gracias'>
            <Tanks />
          </Route>
          <Route exact path='/politica-de-privacidad'>
            <Policy />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
