var express = require('express');
var router = express.Router();

var React = require('react');
import {renderToString} from 'react-dom/server';
import App from '../components/App';

/* GET home page. */
router.get('/', function(req, res, next) {
    var rcontent = renderToString(<App/>);
    res.render('index', { title: 'Express',
        content: rcontent});
});

module.exports = router;
