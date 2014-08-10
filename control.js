module.exports = function (context) {
  var pointer = {
    "start": ('ontouchstart' in document) ? 'touchstart' : 'mousedown',
    "move": ('ontouchmove' in document) ? 'touchmove' : 'mousemove',
    "end": ('ontouchend' in document) ? 'touchend' : 'mouseup'
  }

  var downY = null

  function onStart(event) {
    if (context.status !== context.STAND) return

    downY = event.touches ? event.touches[0].pageY : event.pageY
    document.addEventListener(pointer.move, onMove)
  }

  function onMove(event) {
    var pageY = event.touches ? event.touches[0].pageY : event.pageY

    if (pageY < downY) { // Jump
      context.status = context.JUMP
      document.removeEventListener(pointer.move, onMove)
    } else if (pageY > downY) { // Squat
      context.status = context.SQUAT
      document.addEventListener(pointer.end, onEnd)
      document.removeEventListener(pointer.move, onMove)
    }
  }

  function onEnd(event) {
    context.status = context.STAND
    document.removeEventListener(pointer.end, onEnd)
  }

  document.addEventListener(pointer.start, onStart)
}