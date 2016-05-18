import $ from 'jquery'
import template from './Button.html'
import './Button.css'
import Mustache from 'mustache'

export default class Button {
    constructor(link) {
        this.link = link ;
    }
    onClick(event){
        alert(this.link)
    }
    render(node){
        const text  = $(node).text();

        $(node).html(
            Mustache.render(template, {link: this.link, text: text})
        );

        $('.btn').click(this.onClick.bind(this))
    }
}
