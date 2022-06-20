import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.min.css';
import moment from 'moment';
import 'moment/locale/vi';
moment.locale('vi');

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <Router>
        <App />
    </Router>
);
