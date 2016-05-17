import $ from 'jquery'
import template from './Button.html'
//import './Button.css'

export default class Button {
    constructor(link) {
        this.link = link ;
    }
    onClick(event){
        alert(this.link)
    }
    render(node){
        return 'hiButton' ;
        //$(node).html('hiButton');
    }
}
