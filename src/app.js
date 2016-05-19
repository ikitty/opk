import $ from 'jquery'
import './style.css'

if ($('div.btn').length) {
    require.ensure([], ()=> {
        const Btn = require('./Button').default
        new Btn().render('div.btn');
    }, 'button')
}

if ($('div.header').length ) {
    require.ensure([], ()=> {
        const Header = require('./Header').default
        new Header().render('div.header');
    }, 'header')
}
