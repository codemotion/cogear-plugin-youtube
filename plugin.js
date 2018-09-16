const path = require('path');
module.exports = {
  apply(){
    cogear.on('preload.page.chunks',page=>{
      if(!cogear.config.youtube || false !== cogear.config.youtube.inject){
        page.js = page.js || ['app'];
        page.js.push(path.join(__dirname,'youtube.js'));
      }
    });
    // Process hooks here
    cogear.on('parse.before',(parser)=>{
      const config = Object.assign({},cogear.config.youtube,{
        thumbsize: 'maxresdefault'
      });  
      
      // If it's not a layout, but a page
      if(parser.content && parser.content.indexOf('youtu') !== -1){
        const regex = /(?:!)https?:\/\/(?:www\.)?youtu(?:\.be\/|be\.com\/watch\?v=)([\w_-]{11})(\?.+)?/g;
        parser.content= parser.content.replace(regex,(match,code,options)=>{
          return `<div class="youtube" style="background-image: url(\'http://img.youtube.com/vi/${code}/${config.thumbsize}.jpg\');" data-src="${code}" data-options="${options}"><div class="youtube-link"><a href="https://www.youtube.com/watch?v=${code}"><svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%"><path class="ytp-large-play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#212121" fill-opacity="0.8"></path><path d="M 45,24 27,14 27,34" fill="#fff"></path></svg></a></div></div>`;
        });
      }
    });
  }
};