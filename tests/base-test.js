var Lab = require('lab')
var Code = require('code')
var lab = exports.lab = Lab.script()

var test = lab.test
var expect = Code.expect

var randStream = require('./../src')

test('create random stream generator with infinity cap', function (done) {
  var rs = randStream()

  rs.once('data', function (chunk) {
    expect(chunk).to.be.instanceof(Buffer)
    expect(chunk.length).to.be.above(0)
    done()
  })

  rs.resume()
})

test('create random stream generator with 64mb cap', function (done) {
  // var rs = randStream(1 * 64 * 1024)
  var rs = randStream(1)

  var buf = new Buffer('')

  rs.once('data', function (chunk) {
    buf = Buffer.concat([buf, chunk])
  })

  rs.once('end', function () {
    expect(buf.length).to.equal(1 * 64 * 1024)
    done()
  })

  rs.resume()
})

test('create random stream generator with 128mb cap', function (done) {
  // Buffer max length is 64 Mb
  var rs = randStream(2)

  rs.once('data', function (chunk) {})

  rs.once('end', function () {
    done()
  })

  rs.resume()
})
