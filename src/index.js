/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import ReactDOM from 'react-dom';
import CTRA_App from './CTRA_App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<CTRA_App />, document.getElementById('root'));
registerServiceWorker();
