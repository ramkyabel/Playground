import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
// import { routerMiddleware } from 'react-router-redux'
// import createHashHistory from 'history/createBrowserHistory';

import Nav from '../Nav';
import Home from '../Home';
import About from '../About';
import Counter from '../Counter'
import ReactCycle from '../ReactCycle';

const App = () => {
  const name = "Ramky Abel";
  return (
    <HashRouter>
      <div>
        <Nav />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" render={ props =>
               <About {...props} name={name}/>
             } />
            <Route path="/counter" component= {Counter} />
            <Route path="/react_cycle" component= {ReactCycle} />
          </Switch>
      </div>
    </HashRouter>
  )
}

// export const history = createHashHistory({
//   basename: '',
//   hashType: 'slash',
//   getUserConfirmation: (message, callback) => callback(window.confirm(message))
// });
// export {
//   routerMiddleware,
// }

export default App;
