import React from 'react'; //webpack is underneath the hood that does imports
import ReactDOM from 'react-dom'; //ReactNAtive for mobile phones
import './index.css';// react allows us to add css files to each component. "./" means same folder
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
//ReactDOM-Package uses function render. render function 

ReactDOM.render(<App/>, document.getElementById('root')); 

registerServiceWorker();
