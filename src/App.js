import logo from './logo.svg';
import './App.css';

import {NavBar} from './Components/index';

const App = ({ Component, pageProps }) => (
  <div>
    <Component {...pageProps} />
    <NavBar />
  </div>
);

export default App;
