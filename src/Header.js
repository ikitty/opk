import $ from 'jquery'
import Mustache from 'mustache'
import template from './Header.html'
import './Header.css'

export default class Header {
    constructor() { }

    render(node){
        //var nowUrl = location.href ;
        //nowUrl = nowUrl.substring(0, nowUrl.lastIndexOf('/')+1);

        //var elA = document.getElementById('eventLink').getElementsByTagName('a');
        //for (var i = 0, k ; k = elA[i] ; i++ ) {
            //if (k.getAttribute('href').indexOf(nowUrl) > -1) {
                //k.className = 'on' ;
                //break;
            //}
        //}

        $(node).html(
            template        
        )
    }
}
