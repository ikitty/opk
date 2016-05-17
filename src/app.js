import $ from 'jquery'
import './Button.css'

import Button from './Button'
const button  = new Button('qq.com');
$('#ret').html(button.render('a'));
//button.render('a');
