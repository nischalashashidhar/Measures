import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './assets/stylesheets/index.scss';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import  toDoApp  from './reducers/reducer';

const store = createStore(toDoApp);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
