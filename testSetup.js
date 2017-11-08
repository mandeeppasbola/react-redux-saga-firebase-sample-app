process.env.NODE_ENV = 'test'

require.extensions['.css'] = function () {return null}
const jsdom = require('jsdom')
const {JSDOM} = jsdom;
const dom = new JSDOM('');
var exposedProperties = ['window', 'navigator', 'document']

global.document = dom.window.document
global.navigator = { userAgent: 'node.js' }
global.window = dom.window
global.HTMLElement = dom.window.HTMLElement;

Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
      exposedProperties.push(property)
      global[property] = document.defaultView[property]
    }
  })