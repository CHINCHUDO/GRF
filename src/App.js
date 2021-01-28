import React from 'react';
// import logo from './imgAssets/GRF_logo_2.png';
// import logo from './logo.svg';
import './App.css';
import Nav from "./Nav";
import HomeComponent from './components/HomeComponent';
// import GRFTitle from './components/GRFTitleComponent';
import ContactComponent from './components/ContactComponent';
import Error404Component from './components/Error404Component';

//// Above is original

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useParams
} from "react-router-dom";
import AboutComponent from './components/AboutComponent';

export default function App() {
  return (
    <Router>
      <Nav /><div className="App-header">
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul> */}
        
        <Switch className="App-pages">
          <Route path="/about"><About/></Route>
          <Route path="/topics" component={Topics} />
          <Route path="/" exact component={Home} />
          <Route path="/contact"component={Contact}/>
          <Route path="/404" component={Error404} />
          <Redirect to="/404" component={Error404}/>
        </Switch>
      </div>
    </Router>
    // <select>
    //   <option value="grapefruit">Grapefruit</option>
    //   <option value="lime">Lime</option>
    //   <option Selected value="coconut">Coconut</option>
    //   <option value="mango">Mango</option>
    // </select>
  );
}

function Home() {
  return (
    <div className="site-Pages">
      <HomeComponent/>
    </div>
  );
}

function About() {
  return (
  <div className="site-Pages">
    <AboutComponent/>
  </div>
  );
}

function Error404() {
  return (
    <div className="site-Pages">
      <Error404Component/>
    </div>
  )
}

function Contact() {
  return (
    <div className="site-Pages">
      <ContactComponent/>
    </div>
  )
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}





//// Below is original

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <GRFTitle />
//         <img src={logo} className="App-logo" alt="logo" />
//         <HomeComponent />
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
