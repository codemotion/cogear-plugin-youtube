module.exports = {
		apply(cogear){
			// Process hooks here
			cogear.hooks.afterParse.tap('youtube',(parser,file,result)=>{
				cogear.config.youtube = cogear.config.youtube || {}
				width = cogear.config.youtube.width || 560
				height = cogear.config.youtube.height || 315
				// If it's not a layout, but page
				if(file.indexOf('layout') === -1){
					result.content= result.content.replace(/(?:\!)https?:\/\/(?:www\.)?youtu(?:\.be\/|be\.com\/watch\?v=)([\w_-]{11})/g,`<iframe width="${width}" height="${height}" src="https://www.youtube.com/embed/$1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`)
				}
			})
		}
}