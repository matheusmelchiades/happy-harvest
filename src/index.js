import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (process.env.NODE_ENV !== 'development') {
    console.log = console.warn = console.error = () => {};
} else {
    console.warn = console.error = () => {};
}

ReactDOM.render(<App />, document.getElementById('root'));
