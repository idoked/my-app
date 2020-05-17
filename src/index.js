import React from 'react';
import ReactDOM from 'react-dom';

import './normalize.css';
import './index.css';
import './fonts/fonts.css';

import Main from './components/Main/Main';
import initialData from './initial-data';

ReactDOM.render(
  <React.StrictMode>
    <div className="view">
      <Main data={initialData} />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);