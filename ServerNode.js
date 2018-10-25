/*
 * test用
 */


'use strict';


// import _ from 'lodash';
var _ = require('lodash')

const express = require('express');
const app = express();

app.use(express.static('images'));
app.use(express.static('public'));
//app.use('/static', express.static('images'));
//app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.sendfile('./index.html');
});

app.listen(3000, () => {
    console.log("My app listening on port 3000!");
});


let debug = function(x) {
	console.log(x);
}

