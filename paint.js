exports = module.exports = function (c) {
  c.graphic.clearRect(0, 0, c.canvas.width, c.canvas.height)
  switch (c.status) {
    case c.STAND:
      c.graphic.fillRect(c.x, c.y, c.width, c.height)
    break
    case c.JUMP:
      c.graphic.fillRect(c.x, c.y, c.width, c.height)
    break
    case c.SQUAT:
      c.graphic.fillRect(c.x, c.y, c.width, c.height)
    break
  }
}

exports.init = function (context, callback) {
  setTimeout(callback, 100)
}