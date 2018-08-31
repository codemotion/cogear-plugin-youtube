
const Emittery = require('emittery')
let plugin = require('../plugin');

class Cogear extends Emittery {
	constructor(){
		super()
		this.config = {
			youtube: {
				width: 640,
				height: 480
			}
		}
	}
}
describe('cogear-plugin-youtube',()=>{
	beforeEach(()=>{
		this.parser = {
			file: "index.md",
			content: `!https://www.youtube.com/watch?v=cFh-cQelKPU`
		}
		global.cogear = new Cogear()
		let parser = this.parser
	})
	test("it must parse youtube link",()=>{
		plugin.apply()		
		expect(this.parser.content).toContain('iframe')
	})
	test("it must apply config-defined width and height",()=>{
		plugin.apply()
		expect(this.parser.content).toContain('width="640"')
	})
})