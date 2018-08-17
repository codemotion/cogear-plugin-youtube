
let plugin = require('../plugin');

describe('cogear-plugin-youtube',()=>{
	beforeEach(()=>{
		this.page = {
			content: `!https://www.youtube.com/watch?v=cFh-cQelKPU`
		}
		let page = this.page
		this.cogear = {
			config: {
				youtube: {
					width: 640,
					height: 480
				}
			},
			hooks: {
				afterParse: {
					tap(name,callback){
						callback('Parser','index.md',page)
					}
				}
			}
	}})
	test("it must parse youtube link",()=>{
		plugin.apply(this.cogear)		
		expect(this.page.content).toContain('iframe')
	})
	test("it must apply config-defined width and height",()=>{
		plugin.apply(this.cogear)
		expect(this.page.content).toContain('width="640"')
	})
})