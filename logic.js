module.exports = function (context) {
  switch (context.status) {
    case context.STAND:
      context.y = context.yStand
    break
    case context.SQUAT:
      context.y = context.ySquat
    break
    case context.JUMP:
      if (context.vJump.current == null) {
        context.vJump.current = context.vJump.start
      }
      context.y += context.vJump.current
      if (context.y >= context.yStand) {
        delete context.vJump.current
        context.status = context.STAND
        context.y = context.yStand
      } else {
        context.vJump.current += context.aJump
      }
    break
  }
}