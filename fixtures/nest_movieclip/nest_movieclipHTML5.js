(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [];


// symbols:



(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000CC").s().p("AgiAtQgMgFgDgJQgBgFAAgLIgDgPQgBgHAGgKQAKgOAUgMQAGgDAGgCIALgBQALAAAEACQAIADAJAMIAOATQADAHAAALQAAAMgCAGQgFAOgOAEQgGACgMABIgVAFIgIABQgKAAgKgFg");
	this.shape.setTransform(-0.0269,0.0097);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5.4,-5,10.9,10);
p.frameBounds = [rect];


(lib.circle_mc_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000CC").s().p("ABhEUIhHgCQgngDgdgKQgXgHgdgRIgxgcIgogVQgXgNgPgKQgsgegRgjQgKgWgEgfQgCgSAAglQAAg5ADgaQAFguAQghQARgkAhgZQAfgaAngKQAWgGAcgBIAygBICJAAIAgABQASACANAHQALAFAQAOQASAPAHAFIAcANQAQAIAIAJIAGAIQAEAGAEAJIAJAbIALAjQAFAUgFAPQgHATgVANQgKAGgOAEIggAMQgTAHgLAIQgBAJAIAJQAIAHALACQAJACAMgBIAVgEQAKgBAIAAQAOABAJAFQASAMABAhQABAggQAmQgJAUgSAdIgJAPQgQAYgJALQgQASgRAJQgSAKgaACIghABIgPAAgAiJjnQgiAHgdAYQgcAXgOAgQgLAagDAkQgBARgBAwQAAAqACASQAEAiAPAVQAMARAWAPIAoAXIBJArQAqAYAiAJQAXAFAiACIA6ACIAiAAQATgCANgGQANgHANgOQAIgJAMgTQAYglAJgWQAIgTACgRQACgOgCgNQgjAFgUgCQgfgCgSgQQgRgQgGgaQgDgSAGgKQAHgOAagKIA/gZQAMgFAEgGQADgGgDgOQgEgTgIgTQgFgOgIgIQgFgGgXgNQgSgJgbgVQgPgMgJgDQgIgDgRAAQhpABg1gBIgcAAQgfAAgRADg");
	this.shape.setTransform(0.0029,0.0313);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(10));

}).prototype = p = new cjs.MovieClip();


(lib.circle_mc_Layer_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-9.85,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:12.4,y:8},9).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.circle_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Layer_2_obj_
	this.Layer_2 = new lib.circle_mc_Layer_2();
	this.Layer_2.name = "Layer_2";
	this.Layer_2.parent = this;
	this.Layer_2.setTransform(-9.9,-5.5,1,1,0,0,0,-9.9,-5.5);
	this.Layer_2.depth = 0;
	this.Layer_2.isAttachedToCamera = 0
	this.Layer_2.isAttachedToMask = 0
	this.Layer_2.layerDepth = 0
	this.Layer_2.layerIndex = 0
	this.Layer_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(10));

	// Layer_1_obj_
	this.Layer_1 = new lib.circle_mc_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 1
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-29.8,-27.6,59.7,55.3);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.Scene_1_Head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Head
	this.instance = new lib.circle_mc();
	this.instance.parent = this;
	this.instance.setTransform(49.35,73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.6596,rotation:67.5002,x:44.65,y:84.8},6).wait(1));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.linetween_HTML5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_6 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(1));

	// Head_obj_
	this.Head = new lib.Scene_1_Head();
	this.Head.name = "Head";
	this.Head.parent = this;
	this.Head.setTransform(49.4,73.3,1,1,0,0,0,49.4,73.3);
	this.Head.depth = 0;
	this.Head.isAttachedToCamera = 0
	this.Head.isAttachedToMask = 0
	this.Head.layerDepth = 0
	this.Head.layerIndex = 0
	this.Head.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Head).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(69.5,120.7,59.7,55.3);
p.frameBounds = [rect, new cjs.Rectangle(68.7,122.5,59.9,56.2), new cjs.Rectangle(68.3,124.1,59.8,56.9), new cjs.Rectangle(69,125.7,58.1,57.3), new cjs.Rectangle(70.5,127,54.2,57.5), new cjs.Rectangle(73.1,128.4,48,58.6), new cjs.Rectangle(66.4,125.3,56.5,69.2)];
// library properties:
lib.properties = {
	id: '73557948BA25458897FB36D10AEF0E3C',
	width: 100,
	height: 150,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['73557948BA25458897FB36D10AEF0E3C'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;