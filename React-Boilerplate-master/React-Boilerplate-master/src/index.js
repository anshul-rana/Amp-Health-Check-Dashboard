import React from 'react';
import ReactDOM from 'react-dom';
 import App from './App';
 import Header from './Header';
  import Table from './Table';

import registerServiceWorker from './registerServiceWorker';
import './index.css';


  ReactDOM.render(<Header/>, document.getElementById('root'));
    ReactDOM.render(<Table/>, document.getElementById('table'));
  
registerServiceWorker();
