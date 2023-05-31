'use strict';
const breakpoint = 1260;

function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
r(function(){
    if (!document.getElementsByClassName) {
        var getElementsByClassName = function(node, classname) {
            var a = [];
            var re = new RegExp('(^| )'+classname+'( |$)');
            var els = node.getElementsByTagName("*");
            for(var i=0,j=els.length; i < j; i++)
                if(re.test(els[i].className))a.push(els[i]);
            return a;
        }
        var videos = getElementsByClassName(document.body,"youtube");
    } else {
        var videos = document.getElementsByClassName("youtube");
    }
    var nb_videos = videos.length;
    for (var i=0; i < nb_videos; i++) {
        videos[i].style.backgroundImage = 'url(http://i.ytimg.com/vi/' + videos[i].id + '/sddefault.jpg)';

        if (innerWidth < breakpoint) {
          videos[i].style.width = `${innerWidth - 20}px`;
          videos[i].style.height = `${(innerWidth - 20) * 281 / 500}px`;
          videos[i].style.backgroundSize = 'cover';
        } else {
          const widthParentNode = videos[i].parentNode.clientWidth;

          videos[i].style.width = `${widthParentNode - 150}px`;
          videos[i].style.height = `${(widthParentNode - 150) * 281 / 500}px`;
          videos[i].style.backgroundSize = 'cover';
        }

        var button = document.createElement("div");
        button.setAttribute("class","play-button");
        var play = document.createElement("div");
        play.appendChild(button);
        play.setAttribute("class","play");
        videos[i].appendChild(play);
        videos[i].onclick = function() {
            var iframe = document.createElement("iframe");
            var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
            if (this.getAttribute("data-params")) iframe_url+='&'+this.getAttribute("data-params");
            iframe.setAttribute("src",iframe_url);
            iframe.setAttribute("frameborder",'0');
            iframe.setAttribute("allow",'autoplay; fullscreen');
            iframe.style.width  = this.style.width;
            iframe.style.height = this.style.height;
            this.parentNode.replaceChild(iframe, this);
        }
    }
});
