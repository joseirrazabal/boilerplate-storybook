#!/usr/bin/env node
const jsdom = require('jsdom')
const { JSDOM } = jsdom

const html = `<html><header><style data-aphrodite></style></header><body><div id="root">Hello world</div></body></html>`
const dom = new JSDOM(`<!DOCTYPE html>${html}`);

const { window } = dom
const { document } = dom.window

// global.document = dom.window.document
// global.window = window
global.document = document

global.navigator = { userAgent: 'chrome' }
//---
// global.window = {}
// global.window.matchMedia = function() {
// 	return {
// 		matches: false,
// 		addListener: function() {},
// 		removeListener: function() {}
// 	}
// }

const fs = require('fs')
const CleanCSS = require('clean-css')

const compileCSS = require('@upate/react-with-styles-interface-css-compiler')

const registerMaxSpecificity = require('react-with-styles-interface-css/dist/utils/registerMaxSpecificity').default
const registerCSSInterfaceWithDefaultTheme = require('../src/utils/registerCSSInterfaceWithDefaultTheme').default

const args = process.argv.slice(2)
const optimizeForProduction = args.includes('-o') || args.includes('--optimize')

// require('../test/_helpers/ignoreSVGStrings');

registerMaxSpecificity(0)
registerCSSInterfaceWithDefaultTheme()

const path = './scripts/renderAllComponents.jsx'
const CSS = compileCSS(path)

const format = new CleanCSS({
	level: optimizeForProduction ? 2 : 0,
	format: 'beautify',
	inline: ['none']
})
const { styles: formattedCSS } = format.minify(CSS)

// const outputFilePath = optimizeForProduction ? './lib/css/mauri.css' : './css/styles.css';
const outputFilePath = './lib/css/emmaterial.css'
fs.writeFileSync(outputFilePath, formattedCSS, 'utf8')
