import React from 'react'; //webpack is underneath the hood that does imports
import ReactDOM from 'react-dom'; //ReactNAtive for mobile phones
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';// react allows us to add css files to each component. "./" means same folder
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
import {searchRobots,requestRobots} from './reducers';
import 'tachyons';
//ReactDOM-Package uses function render. render function 

const logger=createLogger();

const rootReducer=combineReducers({searchRobots,requestRobots})

const store= createStore(rootReducer,applyMiddleware(thunkMiddleware ,logger));

ReactDOM.render(
	            <Provider store={store}>
	            <App />
	            </Provider>, document.getElementById('root')); 
registerServiceWorker();
