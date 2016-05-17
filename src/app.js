import $ from 'jquery'
//$('#ret').html('hello girl');
import './Button.css'

import Button from './Button'
const button  = new Button('qq.com');
$('#ret').html(button.render('a'));
//button.render('a');

console.log(button);
//cats = require('./cat.js');
//console.log('cats are:' + cats);

