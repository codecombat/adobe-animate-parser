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



(lib.Tween1 = function() {
	this.initialize();

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000CC").s().p("AgdK7QgQgDABgeQABgkADgRQACgNAFgRIAKgeQANgxAHhOQAGhkADhtQABhegEiVQgEjDgBgyIABjKIABjGQAAgTAIgGQAGgEAIADQAIADAEAHQAGAKgBAUIgCCjQgBCFABBfIAGEKQAEChgCBoQgCAzgDAyQgGBogOA8IgQBBQgHAmgBAcQgBASgEAHQgDAHgFADQgFADgEAAIgDAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-4.6,-69.9,9.2,140);
p.frameBounds = [rect];


// stage content:
(lib.linetween_HTML5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(8.7,76.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.55,rotation:90,x:50.2,y:140.7},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(54.1,82,9.2,140);
p.frameBounds = [rect, new cjs.Rectangle(46.2,97.7,36.2,126.6), new cjs.Rectangle(40.8,115.8,58.7,108.1), new cjs.Rectangle(38.6,135.9,75.2,86.1), new cjs.Rectangle(39.8,156.7,84.6,62.5), new cjs.Rectangle(44.3,177.6,87.6,39), new cjs.Rectangle(52,197.4,84.4,18.6), new cjs.Rectangle(62,211.1,76.4,9.2)];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;