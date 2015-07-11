var fs = require('fs')
var stream = require('stream')

exports = module.exports = create

function create (cap) {
  var rs = fs.createReadStream('/dev/random')
  if (!cap) {
    return rs
  }

  var counter = 0

  var t = new stream.Transform()

  t._transform = function (data, enc, callback) {
    counter += 1
    if (counter >= cap) {
      rs.emit('end')
    }
    callback(null, data)
  }
  rs.pipe(t)
  t.pause()
  rs.resume()
  return t
}
