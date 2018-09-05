module.exports = {
  apply(){
    // Process hooks here
    cogear.on('parse.before',(parser)=>{
      // If it's not a layout, but a page
      if(parser.content && parser.content.indexOf('youtu') !== -1){
        cogear.config.youtube = cogear.config.youtube || {};
        let width = cogear.config.youtube.width || 560;
        let height = cogear.config.youtube.height || 315;
        parser.content= parser.content.replace(/(?:!)https?:\/\/(?:www\.)?youtu(?:\.be\/|be\.com\/watch\?v=)([\w_-]{11})(\?.+)?/g,`<iframe width="${width}" height="${height}" src="https://www.youtube.com/embed/$1$2" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`);
      }
    });
  }
};