import $ from 'jquery'
import Mustache from 'mustache'
import template from './Header.html'
import './Header.css'

export default class Header {
    constructor() {

    }
    render(node){
        const subtitle = $(node).text();

        $(node).html(
            Mustache.render(template, {subtitle})
        )
    }
}
