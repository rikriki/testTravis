var should = require('chai').should();
var expect = require('chai').expect;
var _ = require('lodash')


var bundles = [{bundle:1,a:1},{bundle:2,a:1}]
describe('Loading browsers from browserstack API.', function() {
	it('Should 1 to equal 1', function(done) {
		expect(1).to.equal(1)
		done()
		
	})
	it('Should respond with a list of browsers', function(done) {
		expect(1).to.equal(1)
		var beverages = {tea:'yes',coffee:'yes'}
		beverages.should.have.property('tsea')
		done()
	})

})