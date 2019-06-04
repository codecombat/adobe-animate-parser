(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 100,
	height: 150,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Tween2 = function() {
	this.initialize();

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000CC").s().p("AgiAtQgLgGgDgJQgCgFAAgLIgDgOQAAgGAGgKQAKgPAUgLQAFgEAHgBIAKgCQAKAAAFACQAIAEAIALIAOAUQAEAHAAAKQAAAMgCAFQgFAPgOAEQgGACgMAAIgVAGIgIABQgKAAgKgFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-5.4,-5,10.9,10);
p.frameBounds = [rect];


(lib.circle_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(-9.8,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:12.4,y:8},9).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000CC").s().p("ABgEUIhHgCQgmgDgdgKQgWgIgdgQIgygdIgngVQgYgNgPgKQgrgdgRgkQgLgWgDgeQgCgTAAgjQAAg5ADgbQAEguAQghQASgjAggaQAggaAngKQAVgFAcgCIAygBICIABIAhABQASACAMAGQALAGAQANQASAQAIAEIAbAOQARAIAIAIIAGAIQAEAHADAJIAJAbIALAjQAFAUgFAPQgGATgVAMQgLAGgNAFIghALQgSAHgMAJQAAAIAIAIQAIAIALACQAJACALgCIAVgDQAKgCAJABQAOAAAIAGQATAMABAgQABAhgQAlQgJAUgSAeIgKAOQgPAYgKALQgPATgRAJQgSAJgbADIggABIgQAAgAiIjmQgjAHgcAXQgcAXgOAhQgLAagDAkQgCAQAAAxQgBAoACATQAFAhAPAWQALAQAWAPIApAYIBIArQArAYAiAIQAVAGAiACIA6ABIAiAAQATgBANgHQAOgGANgPQAHgJANgTQAXgkAKgWQAIgTACgRQACgOgCgNQgjAFgVgCQgegDgSgQQgSgQgFgaQgDgRAFgKQAHgNAbgKIA+gZQANgGADgFQAEgHgDgNQgFgTgHgTQgGgOgHgJQgGgGgWgMQgSgKgbgUQgPgMgJgEQgIgCgRAAQhoABg1gBIgcgBQggAAgQAEg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.8,-27.6,59.7,55.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


// stage content:
(lib.nest_movieclip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Head
	this.instance = new lib.circle_mc();
	this.instance.setTransform(49.4,73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.66,rotation:67.5,x:44.7,y:84.8},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(69.5,120.7,59.7,55.3);
p.frameBounds = [rect, new cjs.Rectangle(68.7,122.4,59.9,56.2), new cjs.Rectangle(68.3,124.1,59.9,56.8), new cjs.Rectangle(69,125.7,58.1,57.1), new cjs.Rectangle(70.6,127,54.2,57.5), new cjs.Rectangle(73.1,128.5,48.1,58.5), new cjs.Rectangle(66.4,125.3,56.5,69.2)];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;