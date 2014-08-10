var control = require('./control')
var logic = require('./logic')
var paint = require('./paint')

var context = {
  "canvas": document.getElementsByTagName('canvas')[0],
  "graphic": document.getElementsByTagName('canvas')[0].getContext('2d'),
  "interval": 50,
  "x": 50,
  "yStand": 400,
  "ySquat": 450,
  "vJump" : {
    "start": -40
  },
  "aJump" : 5,
  "width": 100, "height": 150,
  "STAND": 1, "JUMP": 2, "SQUAT": 3
}

function init() {
  context.distance = 0
  context.status = context.STAND
  context.y = context.yStand
  delete context.vJump.current
  tick()
}

function tick() {
  logic(context)
  paint(context)
  if (context.status > 0)
    setTimeout(tick, context.interval)
}

control(context)
paint.init(context, init)
