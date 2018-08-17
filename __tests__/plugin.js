
let plugin = require('../plugin');

describe('cogear-plugin-youtube',()=>{
	beforeEach(()=>{
		this.parser = {
			file: "index.md",
			content: `!https://www.youtube.com/watch?v=cFh-cQelKPU`
		}
		let parser = this.parser
		this.cogear = {
			config: {
				youtube: {
					width: 640,
					height: 480
				}
			},
			hooks: {
				beforeParse: {
					tap(name,callback){
						callback(parser)
					}
				}
			}
	}})
	test("it must parse youtube link",()=>{
		plugin.apply(this.cogear)		
		expect(this.parser.content).toContain('iframe')
	})
	test("it must apply config-defined width and height",()=>{
		plugin.apply(this.cogear)
		expect(this.parser.content).toContain('width="640"')
	})
})