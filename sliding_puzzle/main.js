/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./confetti.js":
/*!*********************!*\
  !*** ./confetti.js ***!
  \*********************/
/***/ ((module) => {

eval("var confetti = {\n\tmaxCount: 150,\t\t//set max confetti count\n\tspeed: 2,\t\t\t//set the particle animation speed\n\tframeInterval: 15,\t//the confetti animation frame interval in milliseconds\n\talpha: 1.0,\t\t\t//the alpha opacity of the confetti (between 0 and 1, where 1 is opaque and 0 is invisible)\n\tgradient: false,\t//whether to use gradients for the confetti particles\n\tstart: null,\t\t//call to start confetti animation (with optional timeout in milliseconds, and optional min and max random confetti count)\n\tstop: null,\t\t\t//call to stop adding confetti\n\ttoggle: null,\t\t//call to start or stop the confetti animation depending on whether it's already running\n\tpause: null,\t\t//call to freeze confetti animation\n\tresume: null,\t\t//call to unfreeze confetti animation\n\ttogglePause: null,\t//call to toggle whether the confetti animation is paused\n\tremove: null,\t\t//call to stop the confetti animation and remove all confetti immediately\n\tisPaused: null,\t\t//call and returns true or false depending on whether the confetti animation is paused\n\tisRunning: null\t\t//call and returns true or false depending on whether the animation is running\n};\n\n(function() {\n\tconfetti.start = startConfetti;\n\tconfetti.stop = stopConfetti;\n\tconfetti.toggle = toggleConfetti;\n\tconfetti.pause = pauseConfetti;\n\tconfetti.resume = resumeConfetti;\n\tconfetti.togglePause = toggleConfettiPause;\n\tconfetti.isPaused = isConfettiPaused;\n\tconfetti.remove = removeConfetti;\n\tconfetti.isRunning = isConfettiRunning;\n\tvar supportsAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;\n\tvar colors = [\"rgba(30,144,255,\", \"rgba(107,142,35,\", \"rgba(255,215,0,\", \"rgba(255,192,203,\", \"rgba(106,90,205,\", \"rgba(173,216,230,\", \"rgba(238,130,238,\", \"rgba(152,251,152,\", \"rgba(70,130,180,\", \"rgba(244,164,96,\", \"rgba(210,105,30,\", \"rgba(220,20,60,\"];\n\tvar streamingConfetti = false;\n\tvar animationTimer = null;\n\tvar pause = false;\n\tvar lastFrameTime = Date.now();\n\tvar particles = [];\n\tvar waveAngle = 0;\n\tvar context = null;\n\n\tfunction resetParticle(particle, width, height) {\n\t\tparticle.color = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + \")\");\n\t\tparticle.color2 = colors[(Math.random() * colors.length) | 0] + (confetti.alpha + \")\");\n\t\tparticle.x = Math.random() * width;\n\t\tparticle.y = Math.random() * height - height;\n\t\tparticle.diameter = Math.random() * 10 + 5;\n\t\tparticle.tilt = Math.random() * 10 - 10;\n\t\tparticle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;\n\t\tparticle.tiltAngle = Math.random() * Math.PI;\n\t\treturn particle;\n\t}\n\n\tfunction toggleConfettiPause() {\n\t\tif (pause)\n\t\t\tresumeConfetti();\n\t\telse\n\t\t\tpauseConfetti();\n\t}\n\n\tfunction isConfettiPaused() {\n\t\treturn pause;\n\t}\n\n\tfunction pauseConfetti() {\n\t\tpause = true;\n\t}\n\n\tfunction resumeConfetti() {\n\t\tpause = false;\n\t\trunAnimation();\n\t}\n\n\tfunction runAnimation() {\n\t\tif (pause)\n\t\t\treturn;\n\t\telse if (particles.length === 0) {\n\t\t\tcontext.clearRect(0, 0, window.innerWidth, window.innerHeight);\n\t\t\tanimationTimer = null;\n\t\t} else {\n\t\t\tvar now = Date.now();\n\t\t\tvar delta = now - lastFrameTime;\n\t\t\tif (!supportsAnimationFrame || delta > confetti.frameInterval) {\n\t\t\t\tcontext.clearRect(0, 0, window.innerWidth, window.innerHeight);\n\t\t\t\tupdateParticles();\n\t\t\t\tdrawParticles(context);\n\t\t\t\tlastFrameTime = now - (delta % confetti.frameInterval);\n\t\t\t}\n\t\t\tanimationTimer = requestAnimationFrame(runAnimation);\n\t\t}\n\t}\n\n\tfunction startConfetti(timeout, min, max) {\n\t\tvar width = window.innerWidth;\n\t\tvar height = window.innerHeight;\n\t\twindow.requestAnimationFrame = (function() {\n\t\t\treturn window.requestAnimationFrame ||\n\t\t\t\twindow.webkitRequestAnimationFrame ||\n\t\t\t\twindow.mozRequestAnimationFrame ||\n\t\t\t\twindow.oRequestAnimationFrame ||\n\t\t\t\twindow.msRequestAnimationFrame ||\n\t\t\t\tfunction (callback) {\n\t\t\t\t\treturn window.setTimeout(callback, confetti.frameInterval);\n\t\t\t\t};\n\t\t})();\n\t\tvar canvas = document.getElementById(\"confetti-canvas\");\n\t\tif (canvas === null) {\n\t\t\tcanvas = document.createElement(\"canvas\");\n\t\t\tcanvas.setAttribute(\"id\", \"confetti-canvas\");\n\t\t\tcanvas.setAttribute(\"style\", \"display:block;z-index:999999;pointer-events:none;position:fixed;top:0\");\n\t\t\tdocument.body.prepend(canvas);\n\t\t\tcanvas.width = width;\n\t\t\tcanvas.height = height;\n\t\t\twindow.addEventListener(\"resize\", function() {\n\t\t\t\tcanvas.width = window.innerWidth;\n\t\t\t\tcanvas.height = window.innerHeight;\n\t\t\t}, true);\n\t\t\tcontext = canvas.getContext(\"2d\");\n\t\t} else if (context === null)\n\t\t\tcontext = canvas.getContext(\"2d\");\n\t\tvar count = confetti.maxCount;\n\t\tif (min) {\n\t\t\tif (max) {\n\t\t\t\tif (min == max)\n\t\t\t\t\tcount = particles.length + max;\n\t\t\t\telse {\n\t\t\t\t\tif (min > max) {\n\t\t\t\t\t\tvar temp = min;\n\t\t\t\t\t\tmin = max;\n\t\t\t\t\t\tmax = temp;\n\t\t\t\t\t}\n\t\t\t\t\tcount = particles.length + ((Math.random() * (max - min) + min) | 0);\n\t\t\t\t}\n\t\t\t} else\n\t\t\t\tcount = particles.length + min;\n\t\t} else if (max)\n\t\t\tcount = particles.length + max;\n\t\twhile (particles.length < count)\n\t\t\tparticles.push(resetParticle({}, width, height));\n\t\tstreamingConfetti = true;\n\t\tpause = false;\n\t\trunAnimation();\n\t\tif (timeout) {\n\t\t\twindow.setTimeout(stopConfetti, timeout);\n\t\t}\n\t}\n\n\tfunction stopConfetti() {\n\t\tstreamingConfetti = false;\n\t}\n\n\tfunction removeConfetti() {\n\t\tstop();\n\t\tpause = false;\n\t\tparticles = [];\n\t}\n\n\tfunction toggleConfetti() {\n\t\tif (streamingConfetti)\n\t\t\tstopConfetti();\n\t\telse\n\t\t\tstartConfetti();\n\t}\n\n\tfunction isConfettiRunning() {\n\t\treturn streamingConfetti;\n\t}\n\n\tfunction drawParticles(context) {\n\t\tvar particle;\n\t\tvar x, y, x2, y2;\n\t\tfor (var i = 0; i < particles.length; i++) {\n\t\t\tparticle = particles[i];\n\t\t\tcontext.beginPath();\n\t\t\tcontext.lineWidth = particle.diameter;\n\t\t\tx2 = particle.x + particle.tilt;\n\t\t\tx = x2 + particle.diameter / 2;\n\t\t\ty2 = particle.y + particle.tilt + particle.diameter / 2;\n\t\t\tif (confetti.gradient) {\n\t\t\t\tvar gradient = context.createLinearGradient(x, particle.y, x2, y2);\n\t\t\t\tgradient.addColorStop(\"0\", particle.color);\n\t\t\t\tgradient.addColorStop(\"1.0\", particle.color2);\n\t\t\t\tcontext.strokeStyle = gradient;\n\t\t\t} else\n\t\t\t\tcontext.strokeStyle = particle.color;\n\t\t\tcontext.moveTo(x, particle.y);\n\t\t\tcontext.lineTo(x2, y2);\n\t\t\tcontext.stroke();\n\t\t}\n\t}\n\n\tfunction updateParticles() {\n\t\tvar width = window.innerWidth;\n\t\tvar height = window.innerHeight;\n\t\tvar particle;\n\t\twaveAngle += 0.01;\n\t\tfor (var i = 0; i < particles.length; i++) {\n\t\t\tparticle = particles[i];\n\t\t\tif (!streamingConfetti && particle.y < -15)\n\t\t\t\tparticle.y = height + 100;\n\t\t\telse {\n\t\t\t\tparticle.tiltAngle += particle.tiltAngleIncrement;\n\t\t\t\tparticle.x += Math.sin(waveAngle) - 0.5;\n\t\t\t\tparticle.y += (Math.cos(waveAngle) + particle.diameter + confetti.speed) * 0.5;\n\t\t\t\tparticle.tilt = Math.sin(particle.tiltAngle) * 15;\n\t\t\t}\n\t\t\tif (particle.x > width + 20 || particle.x < -20 || particle.y > height) {\n\t\t\t\tif (streamingConfetti && particles.length <= confetti.maxCount)\n\t\t\t\t\tresetParticle(particle, width, height);\n\t\t\t\telse {\n\t\t\t\t\tparticles.splice(i, 1);\n\t\t\t\t\ti--;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n})();\n\nmodule.exports = confetti\n\n\n//# sourceURL=webpack://sliding_puzzle/./confetti.js?");

/***/ }),

/***/ "./html-ui.js":
/*!********************!*\
  !*** ./html-ui.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const positiveMod = __webpack_require__(/*! ./utils.js */ \"./utils.js\");\nconst confetti = __webpack_require__(/*! ./confetti.js */ \"./confetti.js\");\n\n/**\n * Code to create html nodes and handle interaction via mouse/touch gestures.\n */\nclass HtmlUI {\n  constructor(puzzle, board, goal) {\n    this.puzzle = puzzle;\n    this.board = board;\n    this.goal = goal;\n    this.dragging = null;\n    this.dragStart = [0, 0];\n\n    // Setup colormap. Letters map to arbitrary colors, numbers map to a\n    // gradient.\n    this.colorMap = {\"A\": \"#f44\", \"B\": \"#4f4\"};\n    for (let i=0; i<4; i++) {\n      for (let j=0; j<4; j++) {\n        const n = 1 + i * 4 + j;\n        const d = Math.sqrt((4-i)*(4-i) + (4-j)*(4-j)) / Math.sqrt(32);\n        const red = 0x00 + (0xe0 - 0x00) * d;\n        const green = 0x40 + (0xe0 - 0x40) * d;\n        const blue = 0x70 + (0xe0 - 0x70) * d;\n        const color = 'rgba(' + [red, green, blue].join() + \")\";\n        this.colorMap[n] = color;\n      }\n    }\n\n    this.createGrid();\n    this.createGoal();\n\n    document.onpointermove = (ev) => this.handleMove(ev);\n    document.onpointerup = (ev) => this.handleEnd(ev);\n    document.onkeydown = (ev) => this.handleKey(ev);\n  }\n\n  createGrid() {\n    this.offsets = {}; // tracks divs => offsets\n    this.divs = {}; // tracks offsets => divs\n\n    const r = [];\n    // We add cells in the [-4, 8) range to make wrapping easier.\n    for (let i=-4; i<8; i++) {\n      for (let j=-4; j<8; j++) {\n        r.push(this.createCell(i, j, this.puzzle.state[positiveMod(j, 4)][positiveMod(i, 4)]));\n      }\n    }\n    this.board.replaceChildren(...r);\n\n    const solved = this.puzzle.solved();\n    this.board.className = solved ? \"solved\" : \"unsolved\";\n    if (solved) {\n      confetti.start(10000);\n    }\n  }\n\n  createCell(x, y, label) {\n    const div = document.createElement(\"div\");\n    div.innerText = label;\n    div.style.left = this.offsetToPercentage(x);\n    div.style.top = this.offsetToPercentage(y);\n    div.style.backgroundColor = this.colorMap[label];\n    div.id = \"cell_\" + this.offsetToStr(x, y);\n\n    // UI events\n    div.onpointerdown = (ev) => this.handleStart(ev);\n\n    this.offsets[div.id] = [x, y];\n    this.divs[this.offsetToStr(x, y)] = div;\n\n    return div;\n  }\n\n  offsetToPercentage(n) {\n    return (n * 100 / 4) + \"%\";\n  }\n\n  offsetToStr(x, y) {\n    return x * 100 + y;\n  }\n\n  createGoal() {\n    for (let i=0; i<4; i++) {\n      for (let j=0; j<4; j++) {\n        this.createGoalCell(i, j, this.puzzle.target[i][j])\n      }\n    }\n  }\n\n  createGoalCell(x, y, label) {\n    const div = document.createElement(\"div\");\n    div.innerText = label;\n    div.style.left = this.offsetToPercentage(x);\n    div.style.top = this.offsetToPercentage(y);\n    div.style.backgroundColor = this.colorMap[label];\n    this.goal.appendChild(div);\n  }\n\n  handleStart(ev) {\n    if (this.dragging != null) {\n      // We got a handleStart while already dragging. This can happen in various\n      // edge cases. The easiest is to ignore the event (TODO: figure out if\n      // it's better to call abort() and then handle the new event?)\n      console.log(\"handleStart while dragging\");\n      return false;\n    }\n\n    if (this.puzzle.solved()) {\n      // Disallow making moves once the puzzle is solved.\n      return false;\n    }\n\n    // record element's starting position\n    const r = board.getBoundingClientRect();\n\n    this.dragStart = [ev.clientX - r.x, ev.clientY - r.y];\n    this.dragging = ev.srcElement;\n  }\n\n  handleMove(ev) {\n    if (this.dragging == null) {\n      return false;\n    }\n\n    // calculate how much the mouse has moved from it's initial position\n    const r = this.board.getBoundingClientRect();\n\n    const x = ev.clientX - r.x;\n    const y = ev.clientY - r.y;\n    let deltaX = x - this.dragStart[0];\n    let deltaY = y - this.dragStart[1];\n\n    // Prevent dragging too far in any direction\n    const maxX = this.offsetToX(3.5);\n    if (deltaX > maxX) {\n      deltaX = maxX;\n    }\n    if (deltaX < -maxX) {\n      deltaX = -maxX;\n    }\n    const maxY = this.offsetToY(3.5);\n    if (deltaY > maxY) {\n      deltaY = maxY;\n    }\n    if (deltaY < -maxY) {\n      deltaY = -maxY;\n    }\n\n    // reset the nodes since we might be switching from dragging horizontally to\n    // vertically or vice-versa.\n    this.resetNodes();\n\n    // figure out which axis we are dragging on\n    if (Math.abs(deltaX) > Math.abs(deltaY)) {\n      // Grab all the nodes which need to move\n      const rows = this.puzzle.rowColPair(this.offsets[this.dragging.id][1]);\n      const nodes = rows.flatMap(row => this.findHorzNodes(row));\n      nodes.forEach(el => {\n        // TODO: would be cleaner to use percentages. It doesn't matter much as\n        // we rebuild the grid at the end of the grad event.\n        el.style.left = this.offsetToX(this.offsets[el.id][0]) + deltaX;\n      });\n    } else {\n      // Grab all the nodes on the same column\n      const cols = this.puzzle.rowColPair(this.offsets[this.dragging.id][0]);\n      const nodes = cols.flatMap(col => this.findVertNodes(col));\n      nodes.forEach(el => {\n        // TODO: would be cleaner to use percentages. It doesn't matter much as\n        // we rebuild the grid at the end of the grad event.\n        el.style.top = this.offsetToY(this.offsets[el.id][1]) + deltaY;\n      });\n    }\n  }\n\n  handleEnd(ev) {\n    if (this.dragging == null) {\n      // This can happen if the initial mouse down happens outside the play\n      // area. Simplest to ignore.\n      return false;\n    }\n\n    // TODO: refactor with above\n\n    // calculate how much the mouse has moved from it's initial position\n    // assumption: all 4 borders have the same width.\n    const r = this.board.getBoundingClientRect();\n    const x = ev.clientX - r.x;\n    const y = ev.clientY - r.y;\n    let deltaX = x - this.dragStart[0];\n    let deltaY = y - this.dragStart[1];\n\n    // Prevent dragging too far in any direction\n    const maxX = this.offsetToX(3.5);\n    if (deltaX > maxX) {\n      deltaX = maxX;\n    }\n    if (deltaX < -maxX) {\n      deltaX = -maxX;\n    }\n    const maxY = this.offsetToY(3.5);\n    if (deltaY > maxY) {\n      deltaY = maxY;\n    }\n    if (deltaY < -maxY) {\n      deltaY = -maxY;\n    }\n\n    // reset the nodes since we might be switching from dragging horizontally to\n    // vertically or vice-versa.\n    this.resetNodes();\n\n    // figure out which axis we are dragging on\n    if (Math.abs(deltaX) > Math.abs(deltaY)) {\n      // round deltaX\n      const border = (this.board.offsetWidth - this.board.clientWidth);\n      // TODO: check if it's board's border or div's border that we care about\n      // here?\n      const r = this.board.getBoundingClientRect();\n      deltaX = Math.round(deltaX * 4 / (r.width-border));\n      this.puzzle.moveHorz(this.offsets[this.dragging.id][1], deltaX);\n    } else {\n      // round deltaY\n      const border = (this.board.offsetHeight - this.board.clientHeight);\n\n      // TODO: check if it's board's border or div's border that we care about\n      // here?\n      const r = this.board.getBoundingClientRect();\n      deltaY = Math.round(deltaY * 4 / (r.height-border));\n      this.puzzle.moveVert(this.offsets[this.dragging.id][0], deltaY);\n    }\n\n    this.createGrid();\n    this.dragging = null;\n  }\n\n  handleKey(ev) {\n    switch (ev.keyCode) {\n      case 49: // \"1\"\n      case 50: // \"2\"\n      case 51: // \"3\"\n      case 52: // \"4\"\n        this.puzzle.moveVert(ev.keyCode - 49, ev.shiftKey ? -1 : 1);\n        break;\n      case 53: // \"5\"\n        this.puzzle.moveHorz(0, ev.shiftKey ? -1 : 1);\n        break;\n      case 84: // \"T\"\n      this.puzzle.moveHorz(1, ev.shiftKey ? -1 : 1);\n      break;\n      case 71: // \"G\"\n      this.puzzle.moveHorz(2, ev.shiftKey ? -1 : 1);\n      break;\n      case 66: // \"B\"\n      this.puzzle.moveHorz(3, ev.shiftKey ? -1 : 1);\n      break;\n      default:\n        return;\n    }\n    this.createGrid();\n  }\n\n  resetNodes() {\n    const rows = this.puzzle.rowColPair(this.offsets[this.dragging.id][1]);\n    let nodes = rows.flatMap(row => this.findHorzNodes(row));\n    nodes.forEach(el => el.style.left = this.offsetToX(this.offsets[el.id][0]));\n\n    const cols = this.puzzle.rowColPair(this.offsets[this.dragging.id][0]);\n    nodes = cols.flatMap(col => this.findVertNodes(col));\n    nodes.forEach(el => el.style.top = this.offsetToY(this.offsets[el.id][1]));\n  }\n\n  findHorzNodes(offset) {\n    const r = [];\n    for (let i=-4; i<8; i++) {\n      r.push(this.divs[this.offsetToStr(i, offset)])\n    }\n    return r;\n  }\n\n  findVertNodes(offset) {\n    const r = [];\n    for (let j=-4; j<8; j++) {\n      r.push(this.divs[this.offsetToStr(offset, j)])\n    }\n    return r;\n  }\n\n  offsetToX(n) {\n    const border = (this.board.offsetWidth - this.board.clientWidth);\n    const r = this.board.getBoundingClientRect();\n    return n * (r.width-border)/4\n  }\n\n  offsetToY(n) {\n    const border = (this.board.offsetHeight - this.board.clientHeight);\n    const r = this.board.getBoundingClientRect();\n    return n * (r.height-border)/4\n  }\n}\n\nmodule.exports = HtmlUI\n\n\n//# sourceURL=webpack://sliding_puzzle/./html-ui.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/*\n  TODO:\n  - fix TODOs in code.\n  - test tablet / phone / different browsers.\n  - smoother changes to element positions.\n  - make the UI board infinite instead of 12x12 (makes gameplay somewhat nicer)\n  - fix \"Uncaught TypeError: Cannot read properties of undefined (reading '0')\"\n  - instructions + links for different levels:\n    <h1>A sliding puzzle with a Rubik's cube-like feel.</h1>\n    <div><strong>Instructions:</strong></div>\n    <ul>\n      <li>Slide the cells on the larger board to match the smaller board.</li>\n      <li>Cells wrap around.</li>\n    </ul>\n    <p><strong>Levels:</strong>\n      <ul>\n        <li>Easy</li>\n        <li>Medium</li>\n        <li>Hard</li>\n      </ul>\n    </p>\n    <p>Found a bug or want to contribute a feature? Link to github...</p>\n*/\n\n/**\n * The code maintains an internal model and a view (html nodes). Dragging works\n * on the view, but once the drag ends, the final move is computed and performed\n * on the model. The model is then used to rebuild the view to ensure both are\n * in sync. Creating/throwing away a small number of html nodes is cheap vs\n * ensuring that the view and model match up. This allows the model to only care\n * about a 4x4 grid, while the view can have extra html nodes to give the\n * illusion of wrapping around.\n */\n\nconst {Puzzle: Puzzle, Difficulty: Difficulty} = __webpack_require__(/*! ./puzzle.js */ \"./puzzle.js\");\nconst HtmlUI = __webpack_require__(/*! ./html-ui.js */ \"./html-ui.js\");\n\n//const puzzle = new Puzzle([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], Difficulty.Easy);\n//const puzzle = new Puzzle([[\"A\", \"B\", \"A\", \"B\"], [\"B\", \"A\", \"B\", \"A\"], [\"A\", \"B\", \"A\", \"B\"], [\"B\", \"A\", \"B\", \"A\"]], Difficulty.Easy);\nconst puzzle = new Puzzle([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], Difficulty.Hard);\n\npuzzle.shuffle(100);\n\nconst htmlUI = new HtmlUI(puzzle, board, goal);\n__webpack_require__.g.htmlUI = htmlUI;\n\n\n//# sourceURL=webpack://sliding_puzzle/./index.js?");

/***/ }),

/***/ "./puzzle.js":
/*!*******************!*\
  !*** ./puzzle.js ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const positiveMod = __webpack_require__(/*! ./utils.js */ \"./utils.js\");\n\n/**\n * Core of the puzzle. This class tracks the current state of the grid, handles\n * shuffling, checking whether we are done, etc.\n */\nclass Puzzle {\n  constructor(target, difficulty) {\n    this.target = target;\n    // Use a roundtrip via JSON to clone the target array\n    this.state = JSON.parse(JSON.stringify(target));\n    this.difficulty = difficulty;\n  }\n\n  shuffle(n) {\n    // if n>100, random moves should be enough to get an interesting start\n    // position. The advantage of using random moves is that it guarantees that\n    // the resulting board is solvable. The downside is that not all board\n    // positions will be equally likely to show up.\n    for (let i = 0; i < n; i++) {\n      // pick a number between 0-3\n      const pos = (Math.random() * 4) | 0;\n\n      // pick -1 or 1\n      const dir = ((Math.random() * 2) | 0) * 2 - 1;\n\n      if (Math.random() > 0.5) {\n        this.moveHorz(pos, dir);\n      } else {\n        this.moveVert(pos, dir);\n      }\n    }\n  }\n\n  solved() {\n    for (let i=0; i<4; i++) {\n      for (let j=0; j<4; j++) {\n        if (this.state[i][j] != this.target[i][j]) {\n          return false;\n        }\n      }\n    }\n    return true;\n  }\n\n  /**\n   * In hard mode, maps a row/col to the pair of rows/cols which move together.\n   * In easy mode, returns the argument.\n   */\n  rowColPair(n) {\n    if (this.difficulty == Difficulty.Easy) {\n      return [n];\n    } else {\n      // if n is 0 or 1 => return [0, 1]\n      // if n is 2 or 3 => return [2, 3]\n      const t = ((n/2)|0)*2;\n      return [t, t+1];\n    }\n  }\n\n  moveHorz(y, dir) {\n    const rows = this.rowColPair(y);\n    rows.forEach(row => this.moveSingleRowHorz(row, dir));\n  }\n\n  moveSingleRowHorz(y, dir) {\n    let t = [];\n    for (let i=0; i<4; i++) {\n      t[i] = this.state[y][positiveMod(i-dir, 4)]\n    }\n    this.state[y] = t;\n  }\n\n  moveVert(x, dir) {\n    const cols = this.rowColPair(x);\n    cols.forEach(col => this.moveSingleColVert(col, dir));\n  }\n\n  moveSingleColVert(x, dir) {\n    let t = [];\n    for (let i=0; i<4; i++) {\n      t[i] = this.state[positiveMod(i-dir, 4)][x]\n    }\n    for (let i=0; i<4; i++) {\n      this.state[i][x] = t[i];\n    }\n  }\n}\n\nclass Difficulty {\n  static Easy = new Difficulty(\"easy\");\n  static Hard = new Difficulty(\"hard\");\n\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nmodule.exports = { Puzzle, Difficulty }\n\n\n//# sourceURL=webpack://sliding_puzzle/./puzzle.js?");

/***/ }),

/***/ "./utils.js":
/*!******************!*\
  !*** ./utils.js ***!
  \******************/
/***/ ((module) => {

eval("/**\n * Like modulo, but always returns a positive value.\n */\nfunction positiveMod(n, d) {\n  const r = n % d;\n  return (r < 0) ? r + d : r;\n}\n\nmodule.exports = positiveMod\n\n\n//# sourceURL=webpack://sliding_puzzle/./utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;