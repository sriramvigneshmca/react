import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Hello from './Hello';
//import Card from './Card'
import 'tachyons';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//	<Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
	//<Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
	//<Card id={robots[3].id} name={robots[3].name} email={robots[3].email}/>
	//<Card id={robots[4].id} name={robots[4].name} email={robots[4].email}/>
	//<Card id={robots[5].id} name={robots[5].name} email={robots[5].email}/>