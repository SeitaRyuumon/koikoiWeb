/*
 * test用
 */


'use strict';


// import _ from 'lodash';
var _ = require('lodash')

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendfile('./index.html');
});


app.use（express.static（ 'public'））;


app.listen(3000, () => {
    console.log("My app listening on port 3000!");
});


let debug = function(x) {
	console.log(x);
}

