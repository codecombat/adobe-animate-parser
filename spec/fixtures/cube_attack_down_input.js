(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.补间3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA/ASQgGAAgEgCIgCgBIgBgBQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAABAAIAAgCIAYgDQAjgFAPgEQAUgFANgFQALgEAAgBQAGADgOAKIgGACQgOAGgRAFQgPAEgSADIgQACgAhIARQgZgCgZgIQgQgEgPgFIgGgCIgGgGQgFgFADgCIALAFQAOAFATAFQALADAoAFIAYAEQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAIgBAAIgCABQgDACgHAAg");
	this.shape.setTransform(-0.0705,-0.0295,4.4788,4.4788);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-75.9,-8.1,151.7,16.2);
p.frameBounds = [rect];


(lib.元件10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AArAsIhHgMIhogTQg8gMgjgJIgIgDQgDgBgBgDIACgHQAEgFAGgDQAKgEAhgCIBKgDQAtgDBKgHIApgDIAwgEQBigLAigBIAGgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAgBABQAAAAAAABQAAAAAAAAQABABAAAAIAAACQgPAFgqADIg9AEQgsAGhJAFQhcAHggADIhAAEQgrADADAIIAFACQASAHAoAGIA8AKQBAANB4ASIB6ATIAAAKQhegNhFgNg");
	this.shape.setTransform(36.7681,125.1992,5.2249,5.2249,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0FEFF").s().p("AhwADIAEgDQAOgEAyAAICegBIgCALIgKAAIhvAAQhugBAHgCg");
	this.shape_1.setTransform(40.9045,197.9118,5.2249,5.2249,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#37F2FF").s().p("AhlAAQhFgGhAgHQAAABgBABQAAAAAAgBQAAAAAAgCQABgBAAgCQALgDAdAAIA5ABQAngCAoABIBKABICSgDIA/gCQAKAAgBAFQgBAHABAHIACAeQjYgSh5gHg");
	this.shape_2.setTransform(38.292,134.5386,5.2249,5.2249,90);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1918B8").s().p("AjQAOIBLgFQCegJC4gRQANgCAFANQAEALgkgBQg3gBi6AHIiwAIQgNgCAbgCg");
	this.shape_3.setTransform(58.7711,146.1036,5.2249,5.2249,90);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1918B8").s().p("AC5AhQh0gPhqgPQjXgfAngFIAeAFIBJAMQBVAMBXAJQBiAMAlACQAiACgRAHQgOAGgJAAIgGgBg");
	this.shape_4.setTransform(25.1467,133.7643,5.2249,5.2249,90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#009EFB").s().p("AgQAgQiqgbgogLQgigKAUgIQALgEARgCQENgPCwgXQAEAAgCAOIgEAWQgCAJAEAIQADAIAFAEQALAHgFAOQgDAKgIAJIgjAgQglgIi0gdg");
	this.shape_5.setTransform(36.8552,136.0004,5.2249,5.2249,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件10, rect = new cjs.Rectangle(0.2,-0.2,73.3,266.1), [rect]);


(lib.元件8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah/AsQgKgEgGgFQgMgKgEgQQgDgTAHgLQAGgKAAgBQgDgGgCgDIgCgDQAAgCAFAAIAKAKQAOANASALQAeARAXAFIAPAAQAEAAACACQgEAEgFAAIgKAAIgCAAQgCABgBAGIgJALQgIAHgMAFQgIACgIAAQgLAAgMgEgAiWgMIgCAHQABAPAJAMQAFAHAEADQAXAMAagIQAQgHACgNQgJgCgJgEIgIgDQgSgHgQgMIgOgLQgHAEgDAHgABlAwIgMgCQgMgFgIgHIgJgLQgBgGgCgBIgMAAQgDAAgDgCIgDgDQAEgCAFAAIAMAAQAXgEAegRQAegTAMgQQABAAABAAQABAAABABQAAAAABAAQAAAAAAABIgCADIgFAJQAAABAGAKQAHALgDAUQgEAQgMAJIgQAKQgMAEgNAAIgCAAgABdAHQgLAFgPAEIADAHQAFAIAKAFQgBADAQAAQATABAPgIIAJgKQAJgNABgPQgBgMgLgGQgUATgcAMg");
	this.shape.setTransform(16.0857,4.8163);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3FEFF").s().p("AhwAmIgXgHQgOgHgEgWIgBgUQACgMAHgEQAEgDAEAAQAXAWAbAMQAOAFAKABQAFAJgIAKIgJAHQgJAJgRAAIgLAAgABMAdQgFgDgEgFQgIgJAFgKIAYgGQAbgLAXgWIAIACQAHAFACALIgBAVQgEAWgOAHQgKAEgNACIgMABQgQAAgJgJg");
	this.shape_1.setTransform(16.025,5.6471);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件8, rect = new cjs.Rectangle(0,0,32.2,9.7), [rect]);


(lib.WarpedAsset_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3CF2FF").s().p("AgvBpQglgGgagSIgKgJQgDgDgFgJIgEgSQgFgRACgRQAAgMAEgMIAAgBIgFAEIAFgEIACgGIADgGQANgVAIgJQAEgFANgIQAggWAagIQAfgKAhAGIANAEIAMAFIAAAAIgBgHIABAHQAaAQAGAFQAPAOAKALIALAOQAHALADAFIAAAGQgBAYgKAVQgJASgVATIgNAKQgcAUgfALIgEABIgOAAQggAAgVgEg");
	this.shape.setTransform(-77.9,47.4083);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3CF2FF").s().p("Ah8FaQAJgPAIgSIAEgKIAYg/QAWhGAJgjQADgMAEg1QAEgqALgWIACgsIABgqIAAgZIgBghIgHgxIgFgWIgDgHIABAAQA2gGAogxQAKgOAJgRQAKgTAAgLQAFgmALgEIACAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAEAAAEAEIAHAGIAMAKIABABIAGADIAFACIgDABIgRALQgsA/geA4IgPAfIgNAeIgDAGIgTBVQgGAvADAyIAAAFIAAADIABAKQADAtAGARQALAcAgAMIAHACIATAQIASAOQACADAAAEQAAAMgdARQglAVgwAkQg0AlgjAfIgFAEIgEAEIgYAUIgCACIARgdg");
	this.shape_1.setTransform(-86,10.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CBFEFF").s().p("AhQE9IAHgPIAphhIALgdIALgfIAKgiIADgKIAEgVIAMhNIADgVIABgHIAAAAQAHg8AHhKIABgeIAKiCIAFABIAEgBIAJAAIACAHIAFAWIAHAxIABAhIAAAZIgBAqIgCAtQgLAWgEAqQgEA0gDAMQgJAjgWBGIgYA/IgDAKQgLAagXAjIgDAFIgSAWQgMAOgLAIg");
	this.shape_2.setTransform(-96.5208,20.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CBFEFF").s().p("AApDpIgCAAQgjgDgXgVQgUgRgSgjQgDgDgEgMIgKguIgEgYIgCgeIAAgGIgBgEQAAgRABgPQAFgsARgxQASgwAjgsIAcgkIAJgKIAAgBIABAAIAGgBQhRCBgQBhQgXCLB8ArQAIAGALACIAUADIAAAXIgCACIggAVIgFACIgCgBg");
	this.shape_3.setTransform(-94.3562,-38.3937);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3CF2FF").s().p("AAXBHQgIgEgFgFQgNgHgagSIgHgFQgDgBgBgDIgBABIAAgBQgggdgGgVQgCgEAAgHIAAAAIgBgLQAhg3AxAkIAQAIIAUAPIARARQAHAIADAIIAJARIAFAOIAAAAIABACQgBACABAGQACAFABABQACABAAAHIgDALQgBAGgEAEQgIAJgOAAQgNAAgRgHg");
	this.shape_4.setTransform(88.575,43.4109);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3CF2FF").s().p("AhMBuQgUgzAKgnQAKgoA5gzQA3gyA3gUQgrA9giBGQgeA9gfBSQgDAJgFAAQgJAAgMggg");
	this.shape_5.setTransform(36.4444,54.1848);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009EFB").s().p("AhcA0QgIgQgIg2QgFgkAogPQAXgIA1gEQAkgCAdAXQAeAXALAoQAKAkg8AYQgxATgzAAQgkAAgPgeg");
	this.shape_6.setTransform(5.8942,47.592);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1918B8").s().p("AJgE/QgcgBgTgCIhWgNIgRgCQgIgCgWgIIgGgCQgZgJgVgLIgEgCQgFgCgFgGIgIgJQgSgVgEgFIgDgCQgMgGgEABIgHACQgHAFgGAKIgBAFIgEAFIgIAIQgRAPgJAEQgVAKgIACIgQAEQgfAGgWgEIgHgCQgggEgwgSIgVgIQgKgFgNgHQgNgIgEgEIgIgKQgHgIgFgDIgCgBQgDgDgIgCIgOgDQgKAAgGAMIAAAEQAAANAJAEInEgLIgDABQgpAEgXABIgHAAIgOADIgRAGQgYAJgMADQgqAMgvAGIgYACQhGAHgpgLIgGgBIhdgYIgBgBIgBgCIgBgBIgCgEQgwglgGhDQgFg3AYg/QAFgNAFgFIALgOIAHgJIAPgKIAxgpIAAACQgEAMAAANQgBARAEARIAEARQAGAJADADIAJAJQAaASAlAGQAaAEArgBIAEgBQAegLAcgTIAOgLQAUgRAJgTQALgUAAgaIAAgGQgCgFgIgLIgLgOQgJgLgQgNQgGgFgZgQIgCgIQgFghAlgXQAJgFBLgeQAqgQBPgOQBRgOApACQBDAEAkAQQAZALA8AlQgSAHAGAIQAGAHAVAFQA1AMAsgPQB0goB3AZQDCApCbhCQAhgOA6gcQAzgXAjgGQBfgPBfBdQAEACANANQAPANAJATIghgbQgLgJgJAAQgKAAgGALQgEAHgBAGIgBANIgZghQgFgGgJgHIgQgNQgIgHgPgGQgPgGgKAAQgTAAgNADIgHADIgBADQgeAfAKApQAHAeAgAoQgPADgbAMQgdAMgLACQghAtAIArQAGApAlAMQA3ATAtgWQAugVACguQAAgFgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAABAAIAAgEQABgFAFgFQALgLAGgNIABgBQACgEACgBIACgCIAAgBIABAAQABACADACIAHAFQAaASAOAHQAFAFAIADQAlAPAPgQQAEgEABgGIADgMQAAgGgCgBQgBgBgCgGQgBgGABgCIAAgDQAIgTAAgXIAAgHIgEgTIgIgQQA0BKAJBHQAJBGgeBYQgJAagiAmQgwA2g5AhIgcAOIgCABIAAAAIinAOIgvgCgAFYhBQg5AzgKAoQgJAnATAzQAUAyAKgbQAfhSAfg9QAihGAqg9Qg3AUg4AygAA+iNQg2AEgWAIQgoAPAFAkQAIA3AIAQQAPAdAjAAQA0AAAxgTQA8gXgKgkQgLgpgegXQgbgVghAAIgFAAg");
	this.shape_7.setTransform(-0.0053,53.5643);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009EFB").s().p("AMzM6IAAAAIACAAIAcgPQA6ghAvg1QAignAJgZQAfhZgKhGQgJhHg0hLIAIARIAEATIABAGQAAAXgJATIAAACIAAAAIAAAAIgGgOIgJgSQgDgIgHgIIgRgRIgUgPIgRgIQgxgkggA3IAAALIAAAAQABAGABAFQAHAVAfAeIABAAIgDAEQgCABgCAEIAAABQgHANgKAKQgFAFgCAGIAAADQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQACAAgBAFQgCAvguAWQgsAVg3gSQgmgNgGgpQgIgsAhgsQAMgDAcgMQAcgMAOgDQgggogHgeQgKgoAfgfIAAgEIAHgCQANgEATAAQAKAAAPAGQAPAGAJAIIAQAMQAIAHAFAGIAZAhIABgNQABgFAEgIQAGgKAKAAQAJAAAMAJIAgAaQgJgTgOgMQgOgNgEgDQhfhdheAQQgjAFgzAXQg7AdggANQicBCjCgoQh3gah0ApQgrAPg2gMQgVgFgGgIQgFgIARgHQg8glgYgLQglgQhDgEQgpgChRAPQhPAOgpAQQhMAdgJAFQglAXAFAiIACAHIAAAAIgNgFIgMgEQghgGggAKQgbAIggAWQgMAIgFAFQgIAJgNAVIgCAGIgDAGIgFAEIgsAkIgPAKIgHAJIgLAOQgEAHgGAMQgXA/AEA3QAGBDAwAmIACAEIABABIACACIAAAAIgXgGQgjgcgPgnQgOghgEgzIAHhdIABgBQALgIAMgOIASgVIADgEIADgDIAYgUIAEgDIAEgEQAkggA0glQAxgjAlgWQAcgRAAgMQAAgEgCgDIgSgNIgTgRIgGgCQgggLgLgcQgHgRgDgtIAAgHIgBgHIAAgEQgEg0AGguIAUhVIADgGIANgeIAQgeQAdg4AthAIARgKIACgBIAVAHIAZAGQAQABAbAAIBmgqQAwggAog6IBpBMIAjARIAeALIBeARQATABAUgBIAEgEQAkgmAAgmQAAgJgDgJQgJgigngpIgUgSIgIgGIh6g7IgPgEIhogSIgqgCIgZgCQg6gFgzgSIgagLQgsgTgpggIgGgFIgIgcIgDgOQgFgYAFgUQAKgwAUgWQAXgaAygOQAQgEBOAGQBPAHAYALQAYAMALAEQAbAIA5AKQAAACALAIQAMAIAMAFIAeAOQAWAKATADQArAHBHgMQAZgEBZgUQCigrCugHQAygHBDAFQAnADASADQAgAGAUAOQAaARALAKQAQANAQAVQAgApgcAfQgVAZg3APQgBApgJAJQgLALgvAFIiBAXIgrAHIgHAAQgYADgzABIhnAEIgRADQgPADgKAFQgmAaAhA7IANAPQAGAGAJAFQAVAMAmAFIAIABIAcACIAPAAIBpgBIAiABIAhABQBQADAyAEIAQABQATAAAOAKQAHAFAGAHQAJAKAIARIAIAUQAEAVAIANQATAfApgMQAYgGAggWIABgCIALgLQAUgTAKgDIADAAQATgCALAfIACACIAFAZIAFAaQAIApAEAoIAAABQAGA3ADBTIAABMQAAA+AAAXQAFBCAkAqIAeANIAFgEIAFgJIABgFIAAAAIAGAKQAAABABAAQAAAAABAAQAAAAAAAAQABAAAAAAIBQDdIADAQIACAYIgFAxIgFAXQgSA3gwA8IgBACIgBABIgBABIgBABIgBACIgBABIgBABIgBABIgBACIgBABIhVA+QgaAKgcABQgGADgFAAIgBAAIgCAAg");
	this.shape_8.setTransform(0.25,1.6325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CBFEFF").s().p("ADNCrQgcgIhCgcIm2gLQgLgJgCgJQgBgHADgQQA7gLBQgBICLADQBmgQB4gZQAUggAGgmQAFgcgBgxQgGgWgBgMQgBgSAIgRQALADAJAFIABABIA8B8QAXAwAMAXQAJAOAHAOQAHAQAEAVIAFAWIABAIIAAABQgHAhgUAXIgDAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABIgBAJIgPABQgsAAgqgNg");
	this.shape_9.setTransform(61.2525,-52.1816);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CBFEFF").s().p("AkSAAIAEABQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQAAgHADgCIBTgDQAwgEAggNQCHgCA2ADQBpAFBRAXIAAAJIgLAAQggAPg1gBQg8gDgaAAIlnALIgIgfg");
	this.shape_10.setTransform(-56.075,-41.7694);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3CF2FF").s().p("AOxJAQgkgqgEhCQgBgXAAg+IAAhMQgDhUgGg3IAAgBQgEgogIgpIgFgaIgFgZIgCgCQgLgggSADIgEAAQgKADgTATIgLALIgCACQggAWgYAGQgpALgTgeQgIgNgEgVIgIgTQgIgRgJgKQgGgHgHgFQgOgKgTAAIgPgBQgzgEhQgDIgggBIgjgBIhpABIgQAAIgbgCIgIgBQglgFgWgMQgJgFgGgGIgNgPQghg7AmgaQAKgFAPgDIARgDIBngEQAzgBAYgDIAHAAIArgHICBgXQAwgFAKgLQAKgJAAgpQA3gPAWgZQAbgfgggpQgQgVgQgNQgLgKgagRQgUgOgfgGQgTgDgngDQhDgFgxAHQivAHiiArQhZAUgZAEQhHAMgqgHQgUgDgWgKIgegOQgMgFgMgIQgKgIAAgCQg5gKgbgIQgLgEgZgMQgYgLhPgHQhOgGgQAEQgyAOgWAaQgVAWgKAwQgEAUAEAYIADAOIAHAcIAHAFQApAgAsATIAaALQAzASA7AFIAYACIAqACIBoASIAJACIAGACIB6A7IAIAGIAUASQAnAoAJAjQADAJAAAJQAAAmgkAlIgEAEQgUABgTgBIhegRIgegLIgjgQIhohMQgpA6gvAfIABgBIADgDQALgHAKgSQALgSABgKIABgJIAAgJQgDgUgTAIIgGADIgLAGIgLAaIAAABIgEAIQgJAOgMAHIgGAEIgBAAQgXAPgUAGQgXAGgagFIgHgCIgVgJQgUgNgNgKIgUgSQgXgUgQAHIgHADQgJAIgDAIIgBADIgDAYIgBAGIgBAFQgIAggKAWQgLAWgSATIgCACIgGAEIAAgXIgUgDQgLgCgIgGQh9grAXiLQAQhhBSiBIgGABIABgCIAmgkIAAgBIAAAAQAHgFACgDQAbg7AQgcIAHgLIABgBQAGgHAEgJIARgcIABgBQARgZAVgOIAFgDQARgIAMgDIAGgCIAxAAIAogBIAGgBIMuAAID7AAQCOgBBmABIAKAAIAIABQAIACAIAHIAPAMIACACIALALQADACAKARIADAFIAwBtIAAgBQgJgFgLgDQgIARABASQAAAMAHAWQAAAxgEAcQgHAngTAgQh4AZhoAQIiLgDQhQABg6ALQgEAQACAHQACAJALAJIG2ALQBCAcAdAIQAxAPA0gDIAAgJQAAgBAAAAQABAAAAAAQABgBAAAAQABAAABABIAEAAQATgXAHghIAAAAIABAOIAAA8IgHG0QgBBKACAYIAAADIAPBMIAEALIgCAFIgFAJIgFAEgAsviMIAIAfIFogLQAaAAA8ADQA1ABAggPIALAAIAAgJQhRgYhpgFQg2gDiIACQggANgwAEIhTADQgDACAAAIQgBAAAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgEgBIAAAAg");
	this.shape_11.setTransform(-1.9537,-27.6583);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AIxOBQgmgDgxgOQgtgNgjgQIgngQQgQgIgQgMIgrAcQgYAMgaAGQgZAFgzgCQgNAAgigJQgfgJgTgHIgkgMQgWgIgNgGIovAAQifA4ifgNQhKgUgbgNQg7gbgQgrQghhQADhfQABgUAEgVIAFgmIAAgDIACgEIAAAAIBbjSIABgFQAIgjADgYQAKhSAEhoIACiVQg9hXgXhJQgZhUAPheQAEgYATgcIAjgxQArg+AqglQAuhVAZgqQAjg7AcgZQAngkAzgDQEjAEGLgBIKtgCQAmAHAWAJQAgAMAVAVIBRCqQAwBhAqBFQAnBOgJBcQgICzAED4QgBBkAHBOQBHCNAUBSQAiCHg0BiQhgCDh9ApQhEAWhcAAQg5AAhEgJgAFJL2IADACQADAFASAVIAIAJQAGAGAEACIAEACQAVALAaAJIAGACQAVAIAJACIARACIBVANQATACAcABIAwACICmgOIABAAIABAAIACAAQAEgBAGgCQAcgCAagJIBVg/IABgBIABgBIABgBIABgCIABgBIABgBIABgBIABgCIABgBIABgBQAxg9ARg2IAFgXIAFgyIgCgYIgDgQIhQjcQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIgCgFIgBgBIAAgBIgCgEIAAAAIgEgLIgPhMIAAgCQgCgZABhKIAHm0IAAg7IgBgOIAAgBIgBgIIgEgXIgFgTIgHgSQgGgOgJgOQgNgXgXgwIhsjqIgDgEQgKgSgDgCIgLgLIgCgBIgPgMQgIgHgIgDIgIgBIgKABQhmgBiOAAIj7ABIsuAAIgGAAIgoACIgxgBIgGACQgMAEgRAHIgFADQgVAPgRAZIgBABIgRAbQgEAJgGAHIgBABIgHALQgQAcgbA7QgCADgHAFIAAABIAAAAIgoAnIAAAAIgBABIgEADIgFAGIgcAkQgjAsgSAxQgRAwgFAuQgBAOAAASIABAEIAAAFIACAfIAEAYIAKAuQAEALADADQASAkAUARQAYAUAjAEIACAAQAFAAACgBIAUgNIAMgJIACgBIAGgEIACgCQASgUALgVQAKgXAIggIABgFIABgGIADgRIABgKQADgJAJgHIAHgEQAQgHAXAUIAUASQANAKAUANIAVAKIAHACQAaAFAXgGQAUgFAXgQIABAAIAGgEQAMgIAJgOIAEgHIAAgCIALgZIALgHIAGgDQATgIADAUIAAAJIgBAJQgBALgLARQgKASgLAJIgDADIgCABIhlAqQgcAAgPgCIgZgFIgVgIIgFgCIgHgDIAAgBIgMgKIgHgGQgEgEgEAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQABAAAAAAIgCAAQgMAEgEAmQgBALgJATQgJARgKAOQgoAxg3AGIgBAAIgGAAIgDAAIgDABIgGgBIgMCkIgNCBIgBAHIgDAWIgLBNIgFAVIgCAKIgMAhIgKAgIgLAdIgpBhIgIAPIAAADIAAABIgIBdQAEAyAOAhQAQAnAiAcIAXAGIAAAAIABABIBdAYIAFABQAqALBGgHIAXgCQAwgGApgMQAMgDAZgJIAQgGIAOgDIAIAAQAXgBAogEIADgBIHFALQgKgEAAgNIABgEQAGgMAJAAIAPADQAIACADADIACABQAFADAHAIIAHAKQAEAEAOAIQAMAHALAFIAVAIQAwASAgAEIAHACQAVAEAggGIAPgEQAIgCAVgKQAJgEASgPIAIgIIADgFIACgFQAFgKAIgFIAGgCIABAAQAEAAAMAFg");
	this.shape_12.setTransform(0.0342,-0.0055);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.8,-90.6,219.7,181.2);
p.frameBounds = [rect];


(lib.WarpedAsset_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AALDcIgzgIQgzgWghggIgmgxQgHgagJgHIgIAAIgyAJQgPgCgIgNIgHgPQAPgLAPAAIAfgTQAXhXA8g9QAfgeAZgNQBNgxB2gEQA8gDAtAHQAWACAAALQgCAIgJADIgpAGQgmgCAGALQAEAGALAJQBdBJgQCEQgPBJgzArQgHAHhAAkQgsASgzAAIgVgBgAhthdIgVAnQgWAvAFAqIAPA2QAZA8AwAYIBKAWQBYAKA8gxIAlglQAlgzgDhIQADgUgJgcQgPg4gygmQgigUgxgEIgPAAQheAAhQBNg");
	this.shape.setTransform(44.1112,-0.0708);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3FEFF").s().p("AiFCfQgigagWgtQgrhYA6hTIA/g8QBUg6BogCIA8AmQA/A0AIA0IgEBfQgPBqg/AeQgtAVg2AJQgbAEgWAAQhIAAgngtg");
	this.shape_1.setTransform(47.8347,0.6892);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ah/DKQgrgUgcgXQg0grgPhJQgPiDBfhLQALgIAEgHQAEgLgkACIgrgGQgJgCAAgJQAAgKAWgDIBpgEQB2AEBNAyIA4ArQA8A8AXBXIAeAUIAfAKQgHAcgYACIgxgIQgCgCgHACQgIAGgHAaQgZAlgNANQgjAggzAVQgiAMgjAAQgwAAgygUgAhOirIhWAXQgvAngPA4QgJAcADATQgDBIAjA0QATAaARAKQA9AyBYgLQAqgGAggPQAxgYAYg8IAPg2QAHgqgWgvIgYgnQhNhOheAAIgPABg");
	this.shape_2.setTransform(-43.9277,0.0587);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3FEFF").s().p("AgdDIIhjgeQg8gegPhqIgFhfQAHg0A+g0QAggXAegPQBnACBUA6QArAeAVAeQA8BTgtBYQgVAtgjAaQgnAthJAAQgXAAgbgEg");
	this.shape_3.setTransform(-47.4857,0.6892);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.7,-22.1,141.5,44.3);
p.frameBounds = [rect];


(lib.PuppetShape_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.WarpedAsset_4("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgnDUQgogUgcgYQgdgYgagjIgHgWQgIgQgJAFIgxAJQgXgGgHgYQARgKANgBIAegTQAYhCAcgqQAkg2A0gcQCOhICeAWQAMACAHAHQAGAJgPAGQgFACgPABQgOABgGACQgbABgCADQgCAEAOAQQAtAsASAyQATAygFA9QgSA8ghAkQgeAig5AdQg2ASgwAAQghAAgfgJgAAUigQhWAVgkAsQgfAmgHAbQgGAUACAuQADBYBWAxQArAZBCgFQBAgGAsgeQBLg1gEhsQgBgygOgcQgQgfgtgjQgagUgtAAQgdAAglAIg");
	this.shape.setTransform(44.0532,-0.0972);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3FEFF").s().p("AgIDMQhJAAg2gtQg5gwgLhAQgLhBAog/QAlg5BJgeQAzgWBXgNQBGAvAMALQAoAmAHAxQAKBCgRA6QgUBHg3AfQg+AkhBAAIgCAAg");
	this.shape_1.setTransform(48.0799,0.6253);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgsDcQgfgDg1gOQg5gfgdghQghgkgSg7QgFg9AUgyQATgyAtgsQARgPgHgFIgYgFIgbgCQgNgBgDgEQgNgIgBgEQAAgHAkgFQA1gIBWAMQBjAOAyAgQBlBCAnB9IAeAUQALAAATAKQgHAYgXAGIgxgIQgOgJgKApQgfAngZAVQggAcglAOQgcALggAAIgXgBgAikiSQgjAhgQAeQgUAmACApQADA1AMAjQARAuAlAaQA9AgAxAFQA6AHA3gdQAkgUAXgkQAXgkAFgtQADgfgLgiQgKgjgUgaQhGg3g7gPQgagHgZAAQgvAAgtAXg");
	this.shape_2.setTransform(-43.825,-0.0395);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3FEFF").s().p("Ah9CqQgzgpgSg/QgQg0AFhKQAQgwAiglQAggfAygaQC6AYA9BgQBSCAh3ByQg7ArhGAAQg6AAhLghg");
	this.shape_3.setTransform(-47.7046,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.7,-22.1,141.5,44.3);
p.frameBounds = [rect, new cjs.Rectangle(-70.5,-22.1,141.2,44.2)];


(lib.PuppetShape_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.WarpedAsset_4("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgnDUQgogUgcgYQgdgYgagjIgHgWQgIgQgJAFIgxAJQgXgGgHgYQARgKANgBIAegTQAYhCAcgqQAkg2A0gcQCOhICeAWQAMACAHAHQAGAJgPAGQgFACgPABQgOABgGACQgbABgCADQgCAEAOAQQAtAsASAyQATAygFA9QgSA8ghAkQgeAig5AdQg2ASgwAAQghAAgfgJgAAUigQhWAVgkAsQgfAmgHAbQgGAUACAuQADBYBWAxQArAZBCgFQBAgGAsgeQBLg1gEhsQgBgygOgcQgQgfgtgjQgagUgtAAQgdAAglAIg");
	this.shape.setTransform(44.0532,-0.0972);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3FEFF").s().p("AgIDMQhJAAg2gtQg5gwgLhAQgLhBAog/QAlg5BJgeQAzgWBXgNQBGAvAMALQAoAmAHAxQAKBCgRA6QgUBHg3AfQg+AkhBAAIgCAAg");
	this.shape_1.setTransform(48.0799,0.6253);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgsDcQgfgDg1gOQg5gfgdghQghgkgSg7QgFg9AUgyQATgyAtgsQARgPgHgFIgYgFIgbgCQgNgBgDgEQgNgIgBgEQAAgHAkgFQA1gIBWAMQBjAOAyAgQBlBCAnB9IAeAUQALAAATAKQgHAYgXAGIgxgIQgOgJgKApQgfAngZAVQggAcglAOQgcALggAAIgXgBgAikiSQgjAhgQAeQgUAmACApQADA1AMAjQARAuAlAaQA9AgAxAFQA6AHA3gdQAkgUAXgkQAXgkAFgtQADgfgLgiQgKgjgUgaQhGg3g7gPQgagHgZAAQgvAAgtAXg");
	this.shape_2.setTransform(-43.825,-0.0395);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3FEFF").s().p("Ah9CqQgzgpgSg/QgQg0AFhKQAQgwAiglQAggfAygaQC6AYA9BgQBSCAh3ByQg7ArhGAAQg6AAhLghg");
	this.shape_3.setTransform(-47.7046,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.7,-22.1,141.5,44.3);
p.frameBounds = [rect, rect=new cjs.Rectangle(-70.5,-22.1,141.2,44.2), rect];


(lib.PuppetShape_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.WarpedAsset_4("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgnDUQgogUgcgYQgdgYgagjIgHgWQgIgQgJAFIgxAJQgXgGgHgYQARgKANgBIAegTQAYhCAcgqQAkg2A0gcQCOhICeAWQAMACAHAHQAGAJgPAGQgFACgPABQgOABgGACQgbABgCADQgCAEAOAQQAtAsASAyQATAygFA9QgSA8ghAkQgeAig5AdQg2ASgwAAQghAAgfgJgAAUigQhWAVgkAsQgfAmgHAbQgGAUACAuQADBYBWAxQArAZBCgFQBAgGAsgeQBLg1gEhsQgBgygOgcQgQgfgtgjQgagUgtAAQgdAAglAIg");
	this.shape.setTransform(44.0532,-0.0972);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3FEFF").s().p("AgIDMQhJAAg2gtQg5gwgLhAQgLhBAog/QAlg5BJgeQAzgWBXgNQBGAvAMALQAoAmAHAxQAKBCgRA6QgUBHg3AfQg+AkhBAAIgCAAg");
	this.shape_1.setTransform(48.0799,0.6253);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgsDcQgfgDg1gOQg5gfgdghQghgkgSg7QgFg9AUgyQATgyAtgsQARgPgHgFIgYgFIgbgCQgNgBgDgEQgNgIgBgEQAAgHAkgFQA1gIBWAMQBjAOAyAgQBlBCAnB9IAeAUQALAAATAKQgHAYgXAGIgxgIQgOgJgKApQgfAngZAVQggAcglAOQgcALggAAIgXgBgAikiSQgjAhgQAeQgUAmACApQADA1AMAjQARAuAlAaQA9AgAxAFQA6AHA3gdQAkgUAXgkQAXgkAFgtQADgfgLgiQgKgjgUgaQhGg3g7gPQgagHgZAAQgvAAgtAXg");
	this.shape_2.setTransform(-43.825,-0.0395);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3FEFF").s().p("Ah9CqQgzgpgSg/QgQg0AFhKQAQgwAiglQAggfAygaQC6AYA9BgQBSCAh3ByQg7ArhGAAQg6AAhLghg");
	this.shape_3.setTransform(-47.7046,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.7,-22.1,141.5,44.3);
p.frameBounds = [rect, rect=new cjs.Rectangle(-70.5,-22.1,141.2,44.2), rect];


(lib.PuppetShape_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.WarpedAsset_7("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3CF2FF").s().p("AgvBlQgjgHgcgRIgFgFIgFgEQgGgIgCgFIgEgSQgEgPABgSQAAgGAEgSIAAgBIgFAEIAFgFQACgHADgEQANgUAIgIQAEgFANgIQAggUAbgHQAegIAhAEQAGABAHAEIAMAFIABABQARAKANALQANAMAMAOIALAOQAIAKACAGIABAGQgCAYgLATQgJATgUARQgEAEgKAGQgaARggALIgEABQgnAAgbgGg");
	this.shape.setTransform(-78.375,48.669);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3CF2FF").s().p("AhsE1IAFgKQAQglAIgZIAQgyIAPg1QADgNAFgxQAEgoAJgWIADhYQABgbgDgeIgHgyQgFgRAAgIIgCgEQAAgBgBAAQAAgBAAAAQABgBAAAAQAAAAABAAIAAgBIAEAAQATgCAagMQAhgPAMgTQAPgWAEgIQALgTABgMQACgSACgHQAEgMAJgGIACgBIACABQADABAEADIAHAIIAMAMIAGAFIAEACQABAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgRAJQgyBHgbAvIgPAeIgNAeIgDAGIgJAqQgHAbgCAQQgFAiADA+IABAFIAAANQADAsAGAPQAHAQALAKQAHAGATAKIAGACIATARIAJAHIAIAIIADACQABABgBAEQgFAKgFAEQgDADgSALQhbA0hPBCIglAeQAbguAIgRg");
	this.shape_1.setTransform(-86.4389,11.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CBFEFF").s().p("AhQE9IAHgPIAphgIAMgdIAKgfIALgiIAIgfIAQhtQAKhcACghIACgeQAEhSAEg1IAFABIAEAAIAIABIACAIIAGAYIAHAyQADAegBAcIgDBYQgJAWgEAoQgFAxgDAMIgPA1IgQAyQgIAZgQAmIgEAJQgMAbgWAjIgDAFIgSAVQgLANgMAIg");
	this.shape_2.setTransform(-97.0107,21.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CBFEFF").s().p("AAiD2QgjgLgWgZQgTgUgRgpQgEgHgDgKIgKhPIgBghIAAgHIAAgEQABgXACgKQAIg0AUgqQAYguAignIAngpIAAgBIAIAAQhlCXgNBGQgXBzB2BdQAOAMAYAFIAAAZIgjAUg");
	this.shape_3.setTransform(-94.4,-39.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3CF2FF").s().p("AAyBLQgKAAgRgGIgMgIQgRgJgVgOIgIgFIgFgEIgBgBQgdgZgJgWIgCgLIAAgBIgBgKQARgaATgGQATgGAaAPIAIAEQAGACADACIAUAOIARAQQAFAHAEAJIAKAQIAFAOIAAABIABABIAAAIIADAGQADADgBAFIgCAMQgCAGgEAEQgKAJgOAAIgBAAg");
	this.shape_4.setTransform(89.0893,44.6134);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3CF2FF").s().p("AhPBnQgTg4APggQASgmAzgxQA5g4AvgMQgkAzgnBSIg/CMQgDAIgFAAQgKAAgNgmg");
	this.shape_5.setTransform(36.9112,56.8882);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009EFB").s().p("AgqBPQhBgGgBhbQAAgjAngQQAfgMAqACQApACAbATQAgAVAFAnQAFAng7AXQgqAQgmAAIgRgBg");
	this.shape_6.setTransform(5.7944,51.2214);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1918B8").s().p("AI4E8IgrgGIgrgGIgRgBQgMgDgRgGIgGgBQgdgIgRgIIgEgBQgFgCgOgOIgVgZIgDgCQgLgFgGABIgEAAIgDACQgJAGgFAJIgBAFQgCAEgCABIgJAIQgMAKgPAHQgTAKgMADIgRADQgfAGgYgEIgHgCQgVgEg8gRIgWgHQgSgGgXgQQgDgDgEgHQgHgHgHgEIgCgBQgHgDgEAAIgPgBQgJABgHANIAAAEQABAMAIAEQhnAGh9gKQhNgGiXgUIhCAAIgHAAQgIAAgGADIgRAFIgkALQg0AQglAEQgLABgMAAQg9ADgwgMIhggdIgBAAIgBgCIgBgBIgCgEQhQhPAriIQAEgMAFgHIALgOQACgEACgBIAEgEIAHgFIAHgFIAygoIAAACQgEASAAAHQgBARAEAQIAEARQACAGAGAGIAFAFIAFAEQAcASAjAHQAbAFAoABIAEgBQAggLAagRQAKgGAEgEQAUgRAJgSQALgTACgZIgBgGQgCgHgIgKIgLgOQgMgOgNgMQgLgJgTgMQgCgEAAgDQAFgcACgDQAFgMAagNQAQgJBFgVQAhgLBQgKQBVgLAiAEQA9AHArASQAaALA/AlQgXAVAyAHQAxAGAvgMQB0ggB5ARQBcANBKgFQBigIBWgoIBagsQAygWAkgHQBdgPBaBUQAFACAFAEIAJAIQANAMAKATIgggZQgXgSgNAUQgEAGgBAHIgBAOIgZggQgFgGgKgHIgPgMQgIgHgPgFQgOgFgKAAQgPAAgRAFIgHACIgCAFQgaAkAIAjQAHAcAfAoQgQAFgZAKIgpARQgcAhAEAtQAEAtAkAMQA4ATAogUQAngTAPgxQABgGgCAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIAAgEQADgHADgEQAKgJAHgOIABgCIAEgEIACgDIAAAAIABgBIAEAEIAIAFQAVAOASAJIANAIQARAGAKAAQAOABAKgKQAEgEACgGIACgMQABgFgCgCQgCgCgBgFQgCgFABgCIAAgEQAIgUABgWIgBgHIgEgTIgIgQQAxBPAIBDQAJBDgdBZQgIAXgiAnQgtAyg6AkIgcAQIgDAAIAFAAIioAVIgkAAQgoAAgSgBgAFig4QgzAygSAmQgPAgATA3QATA4AMgZIBAiNQAnhSAkgyQgvALg6A4gAgMhtQgnAQAAAjQABBbBAAGQAvAFAzgUQA8gXgFgmQgFgoghgVQgbgTgogCIgOAAQgjAAgZAKg");
	this.shape_7.setTransform(0.03,55.2436);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009EFB").s().p("AM4MqIABgBIAcgPQA5gjAtgzQAkgpAHgVQAdhZgJhEQgJhDgxhPIAIAQIAFATIAAAHQgBAXgHATIAAABIgBABIAAgBIgFgOIgKgRQgEgJgFgHIgRgQIgUgOQgDgCgGgCIgJgEQgagPgTAGQgTAGgRAaIABAKIAAABIACALQAJAWAdAaIABABQgBABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgEAFIAAACQgIAOgJAJQgEAEgCAHIgBAEQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAABAAQACAAgCAGQgOAygnATQgoAUg4gTQgkgMgEguQgEgtAcghIAogRQAagKAQgFQgggogGgcQgIgjAagkIACgFIAGgCQARgFAQAAQAJAAAPAFQAOAFAIAHIAQAMQAJAHAFAGIAZAgIABgOQABgHAEgGQAOgUAXASIAgAZQgKgTgNgMIgKgIQgEgEgGgCQhZhUheAPQgkAHgxAWIhaAsQhWAohjAIQhJAFhcgNQh6gRhzAgQgwAMgwgGQgzgHAXgVQg+glgagLQgsgSg9gHQgigEhVALQhQAKghALQhFAVgQAJQgZANgGAMQgBADgFAcQgBADACAEIAAAAIgMgGQgIgDgFgBQgigFgeAIQgcAIgfATQgOAJgEAEQgIAIgNAVIgCAGQgBADgCACIgFAEIgsAkIgIAEIgHAGIgEAEQgCABgCAEIgKAOQgGAHgEANQgrCIBQBPIACAEIABABIABACIAAAAIgWgHQgggegQgkQgOghgHgwIAHhbIAAgBQAMgIALgNIAVgZIACgCIAigcQBPhCBcg0QASgKADgDQAFgEAFgLQABgDgBgCIgDgCIgIgIIgJgGIgTgSIgGgCQgTgKgHgGQgLgJgHgRQgGgPgEgsIAAgHIgBgGIAAgFQgDg/AFgiQADgQAHgaIAJgqIADgGIANgeIAPgdQAbgwAyhGIARgKIADgBIAVAKQAPAHAJACIArAGIBnghQAvgdArgyIBoBPQAHAGAbAMQAYALAHACQBCAOAdAFQANADAagBQACAAACgEQAjgjACgiQABgGgEgLQgLgiglglQgHgHgNgKIgIgGIh6hBIgOgFIhogYQgcgEgNgEIgYgGQg7gPgwgaIgYgOQgugegjgjQgGgEAAgCIgHgdIgDgPQgCghAEgLQARgxASgPQAWgSA2gDQAPAABMAXQBCAUAeASQAaAPAKAEQAOAHAaAIIAoANQAKAMAFADQAGAFAOAHIAeAQQATAJAVADQBQALCMglQCBgiAkgIQBbgWBKgMQBNgPAlgCIA2gEQAeAAAUAHQAgALAKAFQAUALAOARQAdAjgeAmQgWAbguAWQgBAngNAOQgLANgoALIh+AlIgyAOQgQADgVACIgoAEIhlANQgOABgEACIgNAEQgHACgFADQgTAQAAAVQABARAOAZQAFAHAIAGQAIAHAIADQAWAKAkACIAIAAIAeAAIC5gMQBYgIAogBIAPgBQAUAAAPAHQAFADAIAIQAKAKAGAQQAGAKADAJIAFARQADAKAFAFQANAPANAEQANADAVgHQATgHAkgbIAMgPQASgVALgGIADAAQAMgBAIAJQAFAGAGAOIABACIALA2QAIAwAEAhIABAMQAHBXACA2IAABJQAAA5ACAZQACAcAKAbQALAdARAVQAXAKAIACQABAAADgEIAFgJIACgEIAAgBIAFAKIADABIAqBuQAZBCAQAtIACAQQACAOAAAKQgDAcgEAVQgBALgEALQgSAygwA+IgCABIgBABIAAACIgBABIgBABIgBABIgBACIgBABIgBABIgBABIhUA/QgYAJgdAEIgKADIgCAAg");
	this.shape_8.setTransform(0.38,3.8495);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CBFEFF").s().p("AlPCrQgCgHADgOQA5gMBPgKICKgPQBbgdB9gtQAPgkAGgoQAFgigBguQgGgVgBgOQAAgRAFgSIAUAFIAAAAIA+B2QAZAwAOAWIAIANIAJAPQAHAQAGAVIAFAXQACAEAAAFIAAgCIgBAFQgBAKgHASQgIAYgIAIIgDAAQgBAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAABIAAAJQgwAFg0gIQgogHg4gRIjXAVQiDAOhWADQgKgIgCgJg");
	this.shape_9.setTransform(61.135,-52.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CBFEFF").s().p("ACvArIhVgIIlkgkIgGggIAEABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABgHADgDIBQAIQAtACAkgIQBtANBOAOQBmARBTAaIgBAJIgLgBQgbAHgkAAIgXgBg");
	this.shape_10.setTransform(-55.825,-38.264);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3CF2FF").s().p("APQJLIgegMQglgvgEg7QgBgZAAg3IAAhLQgDg6gHhcIgBgDQgGgygGgfIgLg2IgBgCQgGgOgFgGQgIgIgMABIgDAAQgKAFgTAVIgMAPQgjAbgUAHQgUAHgOgDQgNgEgNgPQgEgFgEgKIgFgRQgDgJgFgKQgHgPgKgKQgIgIgFgDQgOgHgUAAIgPABQgpABhXAIIhCADIhpAIIgRABIgjAAQglgCgWgKQgHgDgIgHQgJgGgEgHQgPgZAAgRQgBgVAUgQQAEgDAIgCIAMgEQAFgCANgBIBmgNIAngEQAVgCAQgDIAygOIB+glQAogLAMgNQANgOAAgnQAvgWAWgbQAegmgdgjQgPgRgUgLQgKgFgfgLQgUgHgfAAIg1AEQgmAChMAPQhKAMhcAWQgkAIiBAiQiMAlhQgLQgUgDgUgJIgegQQgOgHgGgFQgEgDgKgMIgogNQgagIgPgHQgKgEgagPQgdgShDgUQhLgXgQAAQg1ADgWASQgTAPgRAxQgDALACAhIADAPQADAVADAIIAGAGQAkAjAtAeIAZAOQAwAaA6APQAMAEAMACQAOAEAcAEIBnAYIAPAFIB6BBIAHAGQANAKAHAHQAlAlALAiQAEAKAAAGQgCAigjAjQgDAEgBAAQgbABgMgDQgdgFhCgOQgHgCgYgLQgbgMgIgGIhohOQgqAxgwAdIABgBIAEgDQAcgXAGgZIABgIIAAgIQgDgRgSADIgHACIgFACQgEABgBACIgMAXIgFAIQgIAKgMAIIgGACIgBAAQgZAMgUADQgXAEgZgHIgHgCIgVgOQgSgNgOgOIgTgUQgXgVgPAFIgHACQgKAIgDAHIgBADIgEAgIgCAFQgKAlgKASQgIARgVAYIgCACIgGAEIAAgZQgYgFgOgLQh3hcAXh1QAOhHBkiWIgGAAIABgCIAjggIAAgBIAAgBQAGgEACgDQAKgYAhg6IAHgKIAAgBQADgCAHgMIAQgaIABgBQASgVAbgPIAHgCIAigCIAGAAIAwASIAmALIAGABQFwBkGggqQB5gMB9gXQBXgQCWgiIAKgCIAJgBQAJABAJAFIARAIIACABIAOAJQAEADALANIADAEQAKARAMAgQAOAmAFAMIAAAAIgUgFQgFASAAARQABAPAGAUQABAvgFAhQgGApgPAkQh9AuhcAcIiKAPQhPAKg5AMQgDAOACAIQACAJAKAHQBWgDCDgNIDYgWQA3ARApAHQA0AIAwgEIAAgKQAAAAABgBQAAAAAAAAQABAAAAAAQABgBABAAIADAAQARgZAIgmIAAABIABAQIACBAQACBngEFfQAABFABAgIARBPIADAMIgBAEQgBAFgEAEQgDAEgCAAIAAAAgAstiVIAGAgIFlAlIBUAIQAzADAjgJIAMABIAAgJQhTgahmgSQhNgOhvgNQgjAIgtgCIhRgIQgDADgBAHQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgEgBIAAAAg");
	this.shape_11.setTransform(-1.6613,-26.6975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AI6OFQg1gFhvghIgngNQgPgGgTgLIgwAbQgbANgcAFQgeAGgxgEQgNgBgggIQgegIgTgHIglgMIglgKQh3AOijgLQi6gShfgHQhUAbhHAJQhOAKhSgJQhNgbgUgKQg0gagVgqQgTgmgHguQgEgbgDg9QgBgGACgNIACgUIAFgmIAAgDIACgEIAAAAIBcjRIACgGIAFgcIAFgeQAKhYACheQAAhuACgxQg2hngThSQgXhhAShjQAFgZAWgZQAcgaAMgQQAQgVAZgZIAugsQAyhiAMgUQAjg7AlgVQAogXA8AIQEeBuFzgCQFdgCE3hjQArgCAUADQAhADAbAQQAaAtA6BzQA0BnAkA4QApBRgDBfQgCEdADCrQACByAGA/QBICOASBQQAbB4gtBxQhqB4h2AsQhWAhhwAAQgmAAgpgEgAFTMIIADABIAVAZQAOAOAFACIAEACQARAHAdAIIAGACQARAGAMACIARACIArAFIArAGQAZADBFgBICegUIAGgBIAEgBIgCABIADgBQACAAAHgDQAdgDAYgJIBUg/IABgBIABgCIABgBIABgBIABgBIABgCIABgBIABgBIABgBIABgBQAxg/ARgxQAEgLACgMQAEgUACgdQABgKgCgOIgDgQQgPgtgZhCIgqhuQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBIgDgEIAAgCIgDgEQgDgFAAgFIgRhPQgBggAAhFQAElfgChnIgChAIgBgQIAAgCIgCgIIgFgXQgCgLgEgJIgHgSIgRgcQgRgcgWgpQgVgpgfhEIgzhtIgDgEQgLgOgEgDIgOgIIgCgBIgRgJQgJgEgJgBIgJAAIgKADQiWAhhXARQh9AWh5AMQmgAqlwhkIgGgBIgmgKIgwgSIgGgBIgiADIgHABQgbAPgSAVIgBABIgQAaQgHANgDACIAAABIgHAKQghA5gKAZQgCADgGAEIAAAAIAAABIgmAkIgEADIgFAFIgdAgQgkAogXAuQgUAqgJAzQgCAKgBAZIABAEIgBAGIACAiIAKBPQACAKAFAHQARAoASAVQAXAZAkALIAJAAIApgYIACgCQAVgYAIgRQAKgTAKglIACgFIAEgZIACgKQACgHAKgIIAHgDQAPgFAXAWIATAUQAOAOASAOIAVANIAHADQAZAGAXgDQAUgDAZgMIABAAIAGgDQAMgIAIgKIAFgIIAMgYQABgCAEgBIAFgCIAHgCQASgDADARIAAAJIgBAIQgGAagcAXIgFADQg7ASgrAPIgsgGQgJgCgPgGIgUgKIgLgHIgNgNIgGgHQgEgEgEAAIgBgBIgCAAQgJAHgEAMQgCAHgCASQgCAMgLATQgEAIgOAWQgNATggAPQgcAMgSACIgIAAIgEAAIgDgBIgDAAIgGgBQgEA5gHBwIgPCbIgRBhIgCAKIgMAiIgLAeIgLAdIgpBgIgHAPIAAADIgBABIgGBbQAGAwAPAgQAQAlAgAeIAWAHIAAAAIABAAIBgAcQAwANA9gDQAMAAALgCQAlgDA0gQIAkgLIARgGQAGgCAIAAIAHAAIBCAAQCXATBNAGQB9AKBngGQgIgDgBgMIAAgEQAHgOAJAAIAPABQAEAAAHADIACABQAHADAHAIQAEAHADADQAXAQASAFIAWAIQA8ARAVADIAHACQAYAFAfgGIARgEQAMgDATgJQAPgHAMgLIAJgIQACgBACgEIABgEQAFgKAJgGIADgCIAEAAIABAAQAGAAAKAFg");
	this.shape_12.setTransform(-0.1847,0.976);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3CF2FF").s().p("AgwBnQgkgHgagTIgKgJQgHgKgBgDIgEgRQgEgQABgSQAAgLAEgMIAAgBIgEACIAEgDIAFgLQANgVAIgIIARgNQAggUAbgIQAfgIAhAGIANAEIAMAGIAfAWQAOAMALANIAKAPQAIAKACAGIABAGQgBAYgKAUQgKARgUASIgOAKQgbASggAKIgEABQgpAAgagFg");
	this.shape_13.setTransform(-78.36,48.6342);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3CF2FF").s().p("Ah9FXQAJgPAIgSIAFgLIAXg+QAUg4AMguQAEgOADgxQADgqALgUIAChYQABgYgCghIgIgyIgEgYIgDgFQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIAFAAQASgBAbgNQAigQALgUIAUgeQALgVAAgLQABgNAFgOQAFgNAGgBIACgBQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQADAAAFAEIAGAIIANAMIAGAFIAEACQABAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgSAJQgwBEgcAyIgPAeIgOAeIgCAGIgKAqIgIArQgHAkAEA8IABAFIABANQADArAGASQAMAcAgAMIAGACIATARIASAOIACAHQAAAMgdAPQglAVgwAhQg0AkgjAeIglAeIASgdg");
	this.shape_14.setTransform(-86.4389,11.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CBFEFF").s().p("AhQE9IAHgPQAPglAbg8IAWg7IAKgiIAIgfIAPhoIAAAAIAAgEQAHg4AFhGIACgeQAEhOAEg5IAGABIADAAIAFAAIAEABIACAIIAFAYQAHAhABARQACAhgBAZIgCBYQgLAUgDAqQgDAwgEAOQgMAvgUA4IgXA+IgEAKQgLAagXAjIgDAFIgSAVQgLANgMAIg");
	this.shape_15.setTransform(-97.0357,21.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CBFEFF").s().p("AAjD2IgBAAQgigHgXgaQgUgWgQgpQgFgGgBgLIgIg0QgDgQAAgLIgBgiIAAgGIAAgFQAAgPACgSQAGgtAXgwQAagzAggjIAngpIABgBIAAAAIAHAAQhZB3gWBjQghCQB9BEQALAKAbAFIgBAZIgjAVIgDAAIgEAAg");
	this.shape_16.setTransform(-94.375,-39.005);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3CF2FF").s().p("AAzBNQgLgBgRgGIgNgIQgUgLgTgNIgHgEIgEgEQAAABAAgBIgBgBQgfgbgIgUQgBgFAAgGIAAgBIgBgKQAfg4AyAhIAIAEQAGABADADIATAOIARAQQAGAIAEAIIAKAQIAFAOIAAABIABABQgCADACAFQACAGABABQADABgCAGQgBAPgGAHQgJAKgOAAIgBAAg");
	this.shape_17.setTransform(89.1,44.5393);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3CF2FF").s().p("AhLBuQgVgzAKgmQAKgnA5g0QA3gzA3gVQgrA/ghBEQgfA/gdBRQgEAKgFAAQgJAAgMghg");
	this.shape_18.setTransform(36.8996,56.8608);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009EFB").s().p("AheA0QgJgRgIgzQgEgjAogPQAZgJA1gEQAkgCAeAWQAeAWAMAmQAKAjg9AYQgxATg1ABIgCAAQgjAAgPgcg");
	this.shape_19.setTransform(5.8996,50.9877);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1918B8").s().p("AI2E9Qg4gKgdgCIgRgCQgIgBgWgHIgGgCQgbgHgTgIIgEgCQgFgCgFgFIgJgJIgVgaQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgLgFgGAAIgHACQgIAFgFAKIgCAEQgBAEgCABIgJAIQgKAKgRAIQgXAMgIACIgRADQgfAHgXgHIgHgCQgQgDgZgIIgogMIgWgIQgKgEgNgHQgOgHgEgFIgHgJQgIgIgFgCIgCgBQgGgDgFAAIgPAAQgJABgHAOIgBAEQABANAJACQhhAPiGgNQiYgVhLgIIgDAAIg+AAIgIAAQgFAAgJACIgQAGIglALQg5ATggACQgLABgMAAQhEADgpgNIhggcIgBgBIgBgCIgBgBIgCgEQgvglgHhBQgFg2AWg9QAFgLAFgGIAKgOIAHgJIAPgKIAygnIAAABQgEAMAAANQgBARAEARIAEARQABADAHAJIAKAJQAaASAkAHQAaAFAqAAIAEgBQAggKAbgSIAOgJQAUgRAKgSQAKgUABgZIgBgGQgCgGgIgKIgKgOQgLgNgOgMIgfgWQgBgDAAgFQgFghAkgUQALgGBJgZQAogNBRgJQBQgKAqADQBEAGAlAQQAYAMA9AlQgSAGAGAIQAGAHAVAGQA2ANAsgQQBygoB8AXQC+AlCihIQAhgPA6geQA0gZAigHQBegUBfBYIASAPQAPANAIASIgggZQgLgJgKABQgKAAgGALQgEAHgBAGIAAANIgZggQgFgGgJgHIgQgMQgIgHgPgFQgPgFgKABQgTABgNAEQgGABgBACIgBADQgeAgAKAnQAHAdAhAnQgPAEgcAMQgcANgLADQghAtAIAqQAHAoAkALQA3ARAtgWQAugXACgtQAAgFgBAAQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAAgEQABgFAFgFQALgLAGgNIABgBIAEgFIACgDIAAAAIABAAIAEADIAHAFIAoAYIANAIQARAGAKAAQAQABAJgLQAFgGACgPQACgGgDgCIgDgGIgBgIIAAgEQAJgTAAgXIgBgGIgEgTIgIgQQA1BIAJBIQAJBGghBWQgIAXgiAoQguA1g6AiIgbAPIABAAIgBAAIgBAAIgDABIgFABQhZAOhFAGIgwABQgcAAgTgCgAFcg1Qg5A0gLAnQgJAmAUAzQAUAzAKgcQAdhRAghAQAhhDArg/Qg2AVg4AzgAA8h5Qg1AEgYAJQgpAPAFAjQAIA0AJAQQAPAdAjgBQA2gBAygTQA9gXgLgjQgLgngegWQgbgUggAAIgIAAg");
	this.shape_20.setTransform(0.1186,55.1898);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#009EFB").s().p("AM4MqIABgBIAcgPQA5giAug1QAignAJgYQAghVgJhHQgIhIg2hJIAIAQIAFATIAAAHQAAAXgIATIAAABIgBABIAAgBIgFgOIgKgRQgDgIgGgIIgRgQIgUgOQgDgDgGgBIgJgEQgyghgfA4IABAKIAAABQAAAGACAFQAHAVAfAbIABABIgDADIgEAFIAAABQgGANgLALQgFAFgBAGIgBADQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQACAAgBAFQgCAugtAXQgtAWg3gQQglgMgHgoQgHgrAggtQAMgDAcgMQAbgNAPgDQgggngHgdQgKgoAeggIABgDQABgBAFgCQANgEATgBQAKAAAPAFQAPAFAIAHIAQAMQAJAGAFAGIAZAhIABgNQABgGAEgIQAGgKAKgBQAJgBALAJIAhAaQgJgSgPgNIgSgPQhehYhfAUQgiAHgzAZQg7AeggAOQijBIi9gkQh8gXhzAoQgsAPg1gNQgWgFgFgHQgGgIARgHQg8glgZgLQgkgRhEgFQgqgEhRAKQhQAKgoANQhKAYgKAGQglAVAFAhIABAHIAAAAIgMgGIgNgEQghgGgfAIQgbAIggAUIgSANQgHAIgOAVQgCADgCAIIgyAoIgPAKIgHAIIgLAOQgFAHgEAMQgXA9AGA2QAGBAAvAmIADAEIAAABIACACIAAAAIgWgHQgigcgRgmQgOgggFgxIAHhbIAAgBQAMgIALgNIAVgZIACgCIAigcQAjgeA0gkQAxghAlgVQAdgPAAgMIgCgHIgSgNIgTgSIgGgCQgggMgMgcQgGgRgEgsIAAgHIgCgLQgEg+AHgjIAJgqIAKgqIACgGIAOgeIAPgdQAcgzAwhDIASgKIADAAIAUAJQAQAHAJACQANADAeADQAmgNBBgUQAwgcAqgzIBoBPQAGAFALAFIARAIQAUAKALACQAsALAzAJQAIACAMAAIATgBIAEgDQAmgjgBgiQAAgGgDgLQgJgggngnIgUgRIgIgGIh6hBQgGgDgIgBQg+gQgqgJIgpgIIgYgFQg7gQgwgaIgYgOQgxggggghQgGgEAAgCQgFgQgCgNIgDgPQgDgZAFgTQAKgvAWgTQAXgSA0gBQALgBBSAXQAXAHAcALQAiANAOAJQAWAOAMAFQAPAGAaAIIApAOQgBACALAIQALAJALAGQAmAWAfAHQArAJBFgKQAngGBJgSICjgrQBfgXBIgLQAwgLBDgGQBKgGAdAJQAZAIAOAIQAUAKARARQAgAhgcAlQgWAegzAYQgBAqgJALQgJALgvANQhcAbgiAJIgrAMIgHACIhMAJIhmANIgSADQgPADgKAGQgmAYAiA2QADAFAKAJQAGAGAJAEQAUAJAnADIAIABIAcAAIB5gKIAigBIAhgCQBRgIAvAAIAPgBQATgCAPAJQAFADAIAIQAKAKAGAPIAJATQAFAWAIALQAUAeAngOQAYgKAggaIABgBIALgNQASgVALgGIADgBQATgDAMAgIABACIALA2QAIAxAEAhIAAAEIABAFQAHBaACAxIAABJIABBVQACAcAKAbQALAeASAUQAKAFAUAHQABAAAEgEQADgDACgGIACgEIAAgBIAFAKIADABIAqBuIApBvIADAQIABAYQgDAcgEAVQgBALgEALQgRA0gyA8IgBABIgBABIgBACIgBABIgBABIgBABIgBACIgBABIgBABIgBABIhTA/QgXAJgeAEIgKADIgCAAg");
	this.shape_21.setTransform(0.3813,3.8245);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CBFEFF").s().p("AlQCrQgCgHAEgPQA5gNBRgJICJgPQBwggBngpQASgkAFgoQAEgdgBgyQgGgWgBgMQgBgSAHgSIATAEIABABIA8B3IAnBEQAOAWACAGQAIAQAGAVIAHAhIAAgCIgBAFQgBAKgHAUQgIAXgIAGIgDAAQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAABIAAAKQg0AGgxgJQgbgEhEgUQg0ADiiASQiGAOhUABQgLgHgCgJg");
	this.shape_22.setTransform(61.1025,-52.675);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CBFEFF").s().p("ACwArIhXgJQg9gHkmgcIgGghIAEABQABABABAAQAAAAABAAQAAAAABgBQAAAAAAAAQABgIADgCIBRAIQAvADAhgJQCOATAsAIQBpARBRAZIgBAJIgLgBQgZAIgjAAIgZgBg");
	this.shape_23.setTransform(-55.825,-38.2312);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3CF2FF").s().p("APQJLIgegMQgmgrgDg/QgCgYABg7IAAhLQgDg5gIhZIABADIgBgGQgGg1gGgcIgLg2IgBgCQgLgfgUADIgDABQgKAFgTAVIgKANIgCABQggAagYAKQgnAOgUgeQgHgLgGgWIgIgTQgGgOgLgKQgHgIgGgDQgOgJgUACIgOABQgwAAhRAIIggACIgjABIiUAKIgIgBQgogDgTgJQgJgEgHgGQgJgJgEgFQgig2AngYQAJgGAPgDIASgDIBngNIBMgJIAGgCIArgMQAigJBdgbQAugNAKgLQAJgLAAgqQA0gYAWgeQAcglghghQgRgRgTgKQgPgIgYgIQgegJhKAGQhCAGgxALQhIALheAXIikArQhJASgnAGQhEAKgrgJQgggHglgWQgMgGgLgJQgKgIAAgCIgogOQgbgIgOgGQgMgFgWgOQgPgJghgNQgcgLgYgHQhSgXgLABQgzABgXASQgWATgLAvQgEATADAZIADAPQADAVADAIIAGAGQAgAhAxAgIAYAOQAwAaA7AQIAYAFIAqAIIBnAYIAPAFIB6BBIAHAGIAVARQAnAnAJAgQADAKAAAGQABAigmAjIgEADIgUABQgLAAgIgCQg0gJgrgLQgLgCgUgKIgRgIQgLgFgHgFIhohOQgqAygwAcIABgBIADgDQALgHALgQQAMgPABgKIABgIIAAgJQgCgSgUAFIgGACIgFACQgEABgBACIgMAXIgBACIgEAGQgJALgMAHIgFACIgCAAQgYANgUAEQgXADgZgHIgHgDQgPgIgGgFQgRgNgOgNIgUgVQgWgWgQAFIgHACQgKAIgDAHIgBADIgDAaIgDALQgJAigLAWQgLAWgTASIgCACIgGAEIABgZQgbgGgLgKQh+hDAhiRQAWhiBah4IgHAAIACgCIAighIAAAAIABgBQAGgEABgDQAIgSANgXIAXgpIAGgKIABgBQAEgDAFgLIARgaIABgBQATgXAZgNIAGgBQATgDAPAAIAHABIAwASQAQAFAWAFIAFABQFqBsGqgyQCpgUBKgMQB9gUBwggQANgEAGAAQAIABAKAFIARAJIACABIANAIQAEACAMAOIADAEQAKARAMAhQANAjAIAQIgBgBIgTgEQgHASABASQABAMAGAWQABAygEAdQgFApgSAkQhnAphxAgIiJAPQhRAJg5ANQgEAPACAHQACAJALAHQBUgBCGgOQCjgSA0gDQBEAUAbAEQAxAJA0gGIAAgKQAAgBAAAAQAAAAABgBQAAAAABAAQABAAABAAIADABQAUgcAFgkIADBQQACCTgEE3QAABTABAOIARBPIADALIgCAFIgEAJQgEAEgBAAIAAAAgAstiVIAGAhQEmAcA+AHIBWAKQA1ADAggKIAMABIAAgJQhRgahpgSQgrgHiQgUQggAKgvgDIhSgJQgDADAAAHQgBABAAAAQAAAAgBAAQAAAAgBAAQgBAAAAAAIgEgBIAAAAg");
	this.shape_24.setTransform(-1.6685,-26.6753);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AI3OGQhKgIhdggIgmgNQgRgFgQgMIgvAdQgaAPgcAFQgYAEg1gGQgNgBghgKQgegKgUgIQgNgFgYgHIgjgJQh2AdipgRQi7gahcgEQiYA/ijgZQhNgagUgKQg5gcgRgpQgjhRAChaQAAgMAEgcIAFgmIAAgDIACgEIAAAAQAQgoAdhAIAvhpIACgGQAHgiADgXQAJhSAChjIADihQg6hkgUhYQgWhhAVhgQAEgXAYgaQAdgcALgPQAigrA1guQAUgqArhPQAeg1AngZQAyghA1AUQEoBzFpgKQEWgHF+hZQBGgRA0AhIBPChQAvBgAuBAQArBQgFBfQgDEzAECVIACBWQACA1AEAlQBJCLAVBUQAhCHg3BhQhkB+h3AtQhOAehnAAQgwAAg1gHgAFOMHQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAIAWAaIAJAJQAFAFAFACIADACQAUAIAbAHIAFACQAXAHAHABIARACQAeACA4AKQATACAcAAIAwgBIBUgKIBKgKIAJgCIgBABIACgBIAKgDQAegDAXgJIBTg/IABgBIACgCIABgBIABgBIABgBIABgCIAAgBIABgBIABgBIABgCQAyg8ARgzQAEgLABgMQAEgUADgdIgBgYIgDgQIgphuIgphvQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBIgCgEIAAgCIgDgEIAAAAQgDgGgBgFIgQhPQgBgOgBhSQAFk3gDiUIgDhQIgHgfIgFgUIgIgRIgQgcQgLgQgcg2QgZgugdhCIgyhsIgCgDQgKgNgGgEIgNgIIgDgBIgQgJQgKgFgIAAQgGgBgNAEQhwAgh9AVQhKAMipATQmqAylqhsIgFgBQgWgEgQgGIgxgSIgGAAQgPAAgTACIgHACQgYANgUAXIgBABIgQAZQgFAMgFADIAAABIgHAKIgWAoQgNAYgIASQgCADgFAEIgBAAIAAABQgPAPgVAUIgBABIgFADIgiAmQghAhgaA1QgYAwgGAtQgCASAAAQIAAAFIAAAGIABAiQABALADAQIAIA0QABALAEAGQARApATAWQAYAaAjAHIABAAQAFABACgBIAVgMIALgHIAEgCIAFgDIACgCQATgTALgWQAKgVAKgiIAGgfIABgKQACgHAKgIIAIgDQAPgFAXAXIATAUQAOAOASANQAGAFAPAIIAHADQAZAIAXgEQAUgDAYgNIABAAIAGgDQAMgGAJgMIAEgHIABgBIALgYQABgCAFgBIAEgCIAHgCQAUgFABATIAAAIIgBAIQgBAKgLAQQgLAQgLAIIgDACIgBABQg+ATgpAOQgdgDgNgDQgKgCgPgGIgUgKIgGgDQgEgBgBgDIgCAAIgMgNIgGgHQgEgFgDABQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAIgCAAQgFABgGAOQgFAOgBANQAAALgLAUIgTAfQgMAUghAQQgdANgSAAIgFAAIgGAAIgEgBIgDABIgGgCIgGBZQgCA3gDAaQgCAlgJBYIgEAdIgLBMIgIAfIgLAiIgWA7QgaA7gPAlIgHAPIgBADIAAABIgHBbQAGAxANAgQARAmAiAcIAWAHIAAgBIABABIBfAcQApANBEgDQANAAALgBQAggCA5gTIAlgLIAQgGQAJgCAFAAIAIAAIA+AAIADAAQBKAICYAVQCGANBigPQgJgCgBgNIABgEQAHgOAJgBIAPAAQAFAAAGADIACABQAFACAIAIIAGAJQAFAFANAHQAOAHAKAEIAWAIIAoAMQAZAIAPADIAHACQAYAHAfgHIARgDQAIgCAWgMQASgIAKgKIAIgIQADgBABgEIACgEQAEgKAJgFIAGgCQAHAAAKAFg");
	this.shape_25.setTransform(0.1499,0.9852);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.8,-90.6,219.7,181.2);
p.frameBounds = [rect, new cjs.Rectangle(-110.1,-89.5,219.9,181.1), rect=new cjs.Rectangle(-110.1,-89.9,220.5,181.8), rect, rect, rect];


(lib.PuppetShape_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.WarpedAsset_7("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3CF2FF").s().p("AguBzQgjgFgcgRIgFgFIgFgFQgGgGgCgHIgFgSQgDgQAAgUQAAgLAEgQIAAgBIgDADIADgEIAFgMIAVghQADgEAOgMQAfgYAbgKQAegLAiADQAGAAAHAEIAMAFIAAABQAWAOAJAIQAOANALAOIALAPQAGAIAEAJIAAAHQgCAagJAWQgKAUgTAVIgOAMQgZATggAOIgEABIgZABQgYAAgSgDg");
	this.shape.setTransform(-78.025,43.9273);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3CF2FF").s().p("AhqFlIAEgLQAQgrAIgcIAQg4IAPg7QADgOAFg3QADgrAKgZIABheQAAgkgCgbIgJgzQgFgRAAgIIgDgFQAAAAAAgBQgBgBABAAQAAgBAAAAQABgBAAAAIABAAIAEgCQAUgFAbgUQAhgYALgXIASgmQAMgaABgOQABgVACgJQAEgPAKgKIACAAIABAAQAEABAEAEIAGAIIAMANIABAAIAGAFIAEACQAAAAAAABQAAAAAAAAQAAAAgBAAQgBAAgBAAIgRAOQgqBPgiBKIgcBFIgCAHIgKAvIgHAvQgFAjADBFIABAGIABANQADAwAGAQQAHASALAJQAGAGAUAJIAGACIATASIAJAGIAIAHIADADQABACgBADQgFAMgFAFIgVARQhbBAhOBPIgkAjQAbg2AHgQg");
	this.shape_1.setTransform(-86.2795,3.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CBFEFF").s().p("AhOFbIAHgQIA+itIAKgmIADgKIAUiRQAKhoACggIAGiwIAFAAIAEAAIAFgBQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAABQABABABAHIAGAZIAJAzQACAbAAAkIgBBfQgKAZgDArQgFA2gDAOIgPA7IgQA4QgIAcgQArIgDAKQgNAigVAkIgDAGIgSAXQgKANgMAKg");
	this.shape_2.setTransform(-96.775,15.9917);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CBFEFF").s().p("AAiEjQgngHgXgfQgPgVgRgyQgFgKgBgLIgKhjIgBgpIAAgNIACgpQAIg+ARguQAUg2AhgtIAngwIAAgBIABAAIAGgBQhcCmgOBfQgVCQB1BlQAOALAZABIAAAfIgkAfQgBABgGAAg");
	this.shape_3.setTransform(-94.525,-52.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3CF2FF").s().p("AA4BRQgJAAgSgHIgNgIIgngZIgIgGIgFgFIAAABIgBgBQgggegKgXIgCgLIgBgBIgCgLQANgcASgFQARgFAaAQIAJAEIAIAFIAVAPIASASQAEAEAHAMIAMASQADAFAEAKIAAAAIABACQgBADACAFIAEAHQADADgBAFIAAAMQgBAHgEAEQgIAKgOAAIgBAAg");
	this.shape_4.setTransform(85.2111,38.7308);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3CF2FF").s().p("AhGByQgVhAANgiQAQgqAtg2QA1g/AwgOQgiA5giBeIg3CcQgDAIgEAAQgKAAgOgsg");
	this.shape_5.setTransform(35.0015,51.7155);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009EFB").s().p("AgnBaQglgEgQgiQgMgagBgwQgBglAjgTQAegPArADQApACAbAZQAeAaAGArQAGApg3AaQgnATgmAAIgTgCg");
	this.shape_6.setTransform(4.9281,44.4547);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1918B8").s().p("AJAFbIgsgFIgrgGIgSgBQgIgCgVgHIgGgCQgXgHgYgLIgEgCQgFgDgFgFIgJgKQgTgXgDgGIgDgCQgMgGgFABIgEAAIgDACQgJAIgDAJQgDAKgDABIgIAKQgNANgMAGQgZALgGABIgQADQggAGgWgFIgHgCQgggFgwgQIgVgJQgKgDgNgJIgSgNIgIgLQgHgJgGgEIgCgBQgHgFgEAAQgKgDgFAAQgJABgGAOQAAAAAAABQAAAAAAABQgBAAABABQAAABAAAAQABAOAJAFQhnABh8gHQhVgGiOgMIgDABIg/ABIgIABQgFAAgJACIgQAHQgUAIgQAEQgpAMguAGIgXACQg+AHgxgMIgGgBIhdgYIgBgBIgBgCIgBgBIgCgEQgugugFhAQgFgzAVhFQAEgNAFgIIALgOIAIgKIAHgGIAHgGIAygvIgBACQgDASgBAJQAAAVAEAPQACAMACAGQADAHAGAGIAEAFIAGAEQAcASAiAFQAbAEApgCIAEgBQAhgPAZgTIAOgLQATgUAJgVQAKgVACgcIgBgGQgDgJgHgJIgLgPQgKgNgPgOQgLgKgTgMQgCgEAAgEQAFggACgDQAFgNAZgSQASgLBDgcQAhgOBOgQQBUgSAiADQA9AFArATQAUAKBBAqQgRAWAuAIQAuAIAtgOQA2gQAtgEQA/gGBDANQBdASA/gCQBdgEBVgsIBXgtQAtgWAhgEQBSgKBXBcQAHADAEAEIAKAJQAMAKANAWIghgbQgLgJgIAAQgKAAgFAKQgEAHAAAHIAAAOIgbgiQgFgGgKgHQgMgJgEgEQgHgIgNgGQgMgGgJgBQgNgBgQAEIgGACIgCAFQgaAnALAoQAHAdAiAsQgPAFgYAMIgmATQgZAmAHAwQAIAyAlANQA6AVAmgYQAjgWAKg1QABgGgCAAIgCgBIABgFQAAgFAFgGQAKgOAEgMIABgCQABgDADgCIABgDIAAAAIABgBIAFAEIAIAGIAoAZIANAJQASAGAJABQAOAAAJgKQAEgFABgGIAAgNQABgEgDgEQgCgBgCgGQgCgFABgCIgBgEQAGgVgDgZIgBgHIgGgUIgKgRQA5BTASBFQATBJgRBhQgFAdgfArQgqA7g2ApIgcASIgDABIAFgBIgLACIihAVIgxAAQgcAAgTgCgAFXhEQgtA2gQAqQgNAiAVA/QAUBAALgcIA4idQAihcAig6QgwAPg2A/gAgLiLQgjATABAlQABAxAMAaQAQAhAkAEQAwAGAxgXQA3gZgGgpQgGgsgegaQgbgZgpgCIgOgBQgjAAgYANg");
	this.shape_7.setTransform(-1.091,50.5965);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009EFB").s().p("ANFOjIABgBIAcgSQA2gpAqg7QAfgtAFgbQARhhgThKQgShFg5hTIAKARIAGAUIABAHQADAZgGAUIAAACIAAAAIAAAAQgEgJgDgGIgMgSQgHgNgEgEIgSgSIgVgPIgJgFIgJgEQgagQgRAGQgSAFgNAbIACAMIABABIACALQAKAYAgAdIAAABIgBAEQgDACgBADIgBACQgEAMgKAOQgFAGAAAFIgBAFIACABQACAAgBAGQgKA2gjAWQgmAYg6gVQglgNgIgzQgHgwAZgmIAmgTQAYgMAPgFQgigsgHgdQgLgoAagnIACgFIAGgCQAQgEANABQAJABAMAGQANAGAHAIQAEAEAMAJQAKAHAFAGIAbAiIAAgOQAAgHAEgHQAFgKAKAAQAIAAALAJIAhAbQgNgWgMgKIgKgJQgEgEgHgDQhXhchSAKQghAEgtAWIhXAtQhVAshdAEQg/AChdgSQhDgNg/AGQgsAEg3AQQgtAOgugIQgugIARgWQhBgqgUgKQgrgTg9gFQgigDhUASQhOAQghAOQhDAcgSALQgZASgGANIgGAjQAAAEACAEIgBAAIgMgGQgHgDgGgBQgigDgfAMQgaAKggAYQgOALgDAEQgIAKgNAXIgCAHQgBAEgCACIgEAFIgtAqIgHAGIgHAGIgIAKIgLAPQgFAIgEANQgVBFAFAzQAFBAAuAuIACAEIABABIABACIAAABIgWgHQghgfgQgnQgOgigFgzIAHhgIABgCQAMgKAKgNIAXgeIAighQBOhPBchAIAVgRQAFgFAFgMQABgDgBgCIgDgDIgIgHIgJgGIgTgSIgGgCQgUgJgGgGQgLgJgHgSQgGgQgEgwIAAgHIgCgMQgDhGAFgjIAIgvIAKguIACgHIAchFQAihKAqhPIASgOIABgBIACAAIAUAJQAOAFALACQALABAgAAQA8ggArgVQAvgoAshBIAzArQAfAbAUAPQAHAFAKAFIARAJQAUAKALACQAqAKAzAJQAIABALgBIATgBQACAAACgEQAjgtADgqQAAgHgDgOQgKgogkgtIgUgUQgEgGgDgBIh4hEQgGgDgIgCIhngTQgcgCgOgCIgYgDQg6gIgzgWIgYgMQgtgagmglQgGgEAAgCIgHghIgDgRQgCglADgNQASg6ASgWQAXgcA4gPQAOgEBOALQBOAMAVALIATALIARAIQAbAJA2ANIAOAPQAHAFAOAGQAKAFATAMQATALAUACQAtAEBAgNQArgIBBgVQCkgyCpgIQBCgHA0AHIA5AKQAgAHAUAOQAgAXAHAGQATAQAOAXQAeAugaAjQgVAeg4ASQgCAqgOAOQgNANgqAIQhYARgqAHIgtAJIgHAAIglACIgnABIhlAFQgLABgHACIgNAEQgGADgFAEQgVAUABAaQAAAVAOAeQACAEAKANQAIAIAHAFQAXANAjAGIAIACIAdACIB1gBIAiACIAgABQBZAEAqAEIAPACQAUACAMALQAGAFAGAKQAIAMAFAUIAGAXQAFAfAFAJQALATALAFQAMAGAWgEQAVgFAigYIACgCIAMgMQATgVAMgFIAEAAQAMABAGAOIAGAYIAAADIAJCeIAAAMQAAAZgGB9IgCBMQAAA3ABAgQACAeALAdQAMAeAUAWQAVALAJACQACABADgFIADgIIABgFIAAgBIAHAKIADABQAtBaBBCJQAEAIACAJQAEASAAAHIABAzIgCAZQgNA7goBHIgBACIgBABIgBACIgBABIgDAFIgBADIhRBKQgXALgfAFQgHAEgDAAIgCABg");
	this.shape_8.setTransform(-0.675,-9.8033);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CBFEFF").s().p("ADJDCQgjgOg1geQhTgEiIgEIjcgGQgKgKgCgMQgCgJAEgQQA8gLBPAAICMACQB2gXBxgdQAUgmAIgrQAGgjAAgzQgFgYAAgQQAAgTAHgUQALADAKAGIAAABIAgBEQATAnAKAeIAPArIAOArIALAlQAFAXACAXIABAdIgBAKIABgCIgCAFQgEAPgIARQgMAagJAJQgFgDgCADIgCAMQgugFgxgUg");
	this.shape_9.setTransform(60.5275,-68.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CBFEFF").s().p("AkRgBIADABQABAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBIACgFQAAgFACgBIBSgDQAugEAjgOQB1AABHAGQBnAIBTAXIgBALIgMAAQggAPgzABIhWgCIloAHg");
	this.shape_10.setTransform(-56,-57.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3CF2FF").s().p("AOkKlIgegMQgqg0gDg9QgCg3ADhsIAEhSQACgogBghIAAgIQAAgtgDgxIgFg/IAAgDIgGgYQgGgOgMgBIgEAAQgMAFgTAVIgMAMIgCACQgiAYgVAFQgWAEgMgGQgLgFgLgTQgFgJgFgfIgGgXQgFgTgIgMQgGgKgGgFQgMgLgUgCIgPgCQgrgEhYgEIgggBIgigCIhnABIgRgBIgagBIgIgCQgjgGgXgNQgHgFgIgIQgKgNgCgEQgOgeAAgVQgBgaAVgUQAFgEAGgDIANgEQAHgCALgBIBlgFIAngBIAlgCIAHAAIAtgJQAqgHBYgRQAqgIANgNQAOgOACgqQA4gSAVgeQAagjgeguQgOgXgTgQQgHgGgggXQgUgOgggHIg5gKQg0gHhCAHQipAIikAyQhCAVgqAIQhAANgtgEQgUgCgTgLQgTgMgKgFQgOgGgHgFIgOgPQg2gNgbgJIgRgIIgTgLQgVgLhOgMQhOgLgOAEQg4APgXAcQgSAWgSA6QgDANACAlIADARIAGAgIAHAHQAmAlAtAaIAYAMQAzAWA6AIIAYADQAOACAcACIBnATIAIADIAGACIB4BEQADABAEAGIAUAUQAkAtAKAoQADAOAAAHQgDApgjAtQgCAEgCAAIgTABQgLABgIgBQgzgJgqgKQgLgCgUgKIgRgJQgKgFgHgFQgUgOgfgbIgzgrQgsBBgvAnIAEgFQAcgdAHghIABgKQABgFgBgGQgCgVgTAHIgGAEIgLAHIgMAeIAAACIgFAIQgJAPgMAKIgGAEIgBAAQgYARgTAGQgXAIgagFIgHgCQgPgIgHgFQgOgLgTgSIgTgVQgWgWgPAHIgIAEQgJAKgDAKIgBADIgFAnIgCAHQgIApgLAdQgKAYgUAdIgCADIgGAFIABgeQgagCgNgLQh2hlAViQQANhfBeimIgGABIABgCIAmgpIAAAAIABgBQAGgFACgEQAWg1AYgvIAGgMIABgCQACgCAHgPIARgfIABgBQARgdATgRQACgCAEgBQASgIAPgEIAIgCIA1AGIArABIAGAAQCgAMDtgDIGIgIQA6AADBAEQCWADBigFIAJgBQAFgBAEACQAJACAJAIIAPANIACABIANANQAGAHAIAOIADAGIAbA/IAaBBIAAgBQgKgGgLgDQgHAUAAATQAAAQAFAYQAAAzgGAjQgIArgUAnQhxAdh3AXIiMgCQhPAAg8ALQgEAQACAJQACAMAKAKIDcAGQCJAEBTAEQA1AeAjAOQAxAUAuAFIACgMQABAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIADABQAVgbANgrIAAACIgLBeQgtFJgHCjQgCAoABARIACAyIAAADIAYBPIAEAMIgBAEIgDAJQgDAFgBAAIgBgBgAsjiaIAHAlIFpgHIBVACQAzgBAhgPIAMAAIAAgLQhSgYhngIQhHgGh2AAQgjAOguAEIhSADQgCABAAAFIgCAFQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgDgBIgBAAg");
	this.shape_11.setTransform(-3.0836,-42.1475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AJDP+QgpgDgvgMQgfgIgxgRIgogPQgOgGgUgNQgkAWgKAFQgZAMgcAGQgiAGgsgEQgOgBgfgIQgfgIgRgHIglgMQgYgIgLgFQh4AGihgHIkYgQQigA0icgJQhNgXgXgMQg1gagUgsQgTgpgGgwQgEgcgChBQgBgGAFgkIAFgoIAAgDIABgEIBbjpQABgCAAgEQAIgnADgZQALhxgBhSQgDh1ABg0Qg0h3gThuQgVh1AOh3QAEgdATgaQAZgdAMgTQAPgYAZgeIAvg0QA1hvAPgdQAmhIAagZQAjgjA/gIQEyAfFyADQFuADE3gYQAnAHAYAJQAfAMAZAXIBbDBQAzBwAfBVQAYBlgUByQgbDAgaExQgEAtAEAuIAMBYQBZCMAeBUQArB9gdB8QhjCdhrAuQhGAeh5AAQgtAAg2gEgAFUNzIADACQAEAGATAXIAIAKQAGAFAEADIAEACQAYALAXAHIAGACQAVAHAJACIARABIArAGIAsAFQATACAcAAIAxAAQAngGB7gPIAKgCQAEAAAGgEQAggFAXgLIBQhKIACgDIADgFIAAgBIABgCIABgBIABgCQAphHAMg7IADgZIgBgzQgBgHgEgSQgCgLgDgGQhBiJguhaIgDgBIgGgKIAAAAIgFgLIgXhPIgBgDIgCgyQAAgRACgoQAHiiAtlKIALheIgBgpIgCgZIgEgWIgMgkIgchXQgTg4gkhOIg8iDIgDgGQgIgOgGgHIgMgNIgCgBIgQgNQgJgIgIgCQgFgCgEABIgKABQhiAFiVgDQjBgEg6AAImJAIQjsADiggMIgHAAIgqgBIg2gGIgHACQgQAEgRAIQgFABgBACQgTARgRAdIgBABIgRAfQgHAPgDACIAAACIgHAMQgYAvgWA1QgBAEgHAFIgBABIAAAAIgyA3IgdAmQgiAsgUA3QgRAtgIA+IgCAqIAAANIABAqIAKBiQABAMAFAKQARAxAPAVQAXAfAoAIIABAAQAFAAACgCIAkgfIAGgFIACgDQAUgdAKgYQALgcAIgqIACgHIAEgeIABgNQACgHALgNIAHgEQAPgHAXAWIATAVQASATAOALQAHAFAPAIIAHACQAaAFAXgIQAUgGAYgSIABAAIAGgEQAMgKAJgPIAEgIIABgCIAMgeIAKgHIAHgEQATgHACAVQABAGgBAFIgBAKQgHAhgcAeIgDAEIgCABQguAWg4AfQggAAgMgBQgLgCgNgFIgVgJIgFgCIgGgFIgBAAIgMgNIgGgIQgEgEgEgBIgBAAIgCAAQgJAKgEAPQgCAJgCAVQgBAPgLAZQgGAOgMAYQgLAXghAYQgdAUgTAFIgIACIADgBIgOACIgGAAIgHC1QgDAvgIBZIgUCMIgCAKIgMAmIg+CtIgHAQIAAACIgBACIgHBgQAGAzAOAiQAQAnAgAfIAXAHIAAgBIABABIBdAYIAFABQAyAMA+gHIAXgCQAtgGApgMQAQgEAUgIIARgHQAIgCAGAAIAHgBIA/gBIADgBQCPAMBUAGQB9AHBmgBQgJgFgBgOQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAGgOAJgBQAFAAAKADQADAAAIAFIACABQAGAEAHAJIAIALIARANQAOAJAJADIAVAJQAwAQAhAFIAHACQAWAFAggGIAQgDQAGgBAYgLQANgGANgNIAIgKQACgBADgKQAEgLAIgGIAEgCIAEAAIABAAQAEAAALAFg");
	this.shape_12.setTransform(-1.0475,-12.2043);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3CF2FF").s().p("AgvBwQgkgFgagTIgKgJQgHgIgBgFIgFgSQgEgRABgTQABgMACgNIABgBIgFAEIAFgFQACgJADgDQANgXAHgJQAGgGAMgJQAggXAbgKQAegLAhAGIANAEIANAGIAeAWQAQAOAJAMIALAOIAKARIAAAHQAAAZgLAWQgJATgUAUIgOALQgbAUgeAMIgFABIgZABQgYAAgSgDg");
	this.shape_13.setTransform(-77.95,45.2167);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3CF2FF").s().p("Ah6F5QAJgRAHgSIAFgMQAQgrAHgYQAZhTAGgcQAEgOADg2QADgsAKgWIABhbQABgVgDgoQAAgJgIgqQgFgRgBgIIgCgEQgBgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBIABAAIAEgBQASgCAcgSQAhgVAMgYIATgkQALgYABgMQAAgQAFgQQAFgQAGgCIACgBIACABQADAAAEAFIAHAHIALAMIABABIAHAFIAEACIgDABIgRANQgtBJggBDIgeBIIgRBcQgGAmAFBAIAAAIIABAKQADAvAHARQALAdAgALIAGADIAUARIARANQACACABAGQAAAMgdASQglAZgvAlQg0AqgjAhIgkAhIASgfg");
	this.shape_14.setTransform(-86.2139,5.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CBFEFF").s().p("AhOFRIAHgRIAphnIALgfIALggIAKglIADgLQADgNABgJIAPhwIAAAAIAAgEQAIhGADhAIACgfQAChaADgzIAGABIADAAIAFgBQABAAAAAAQABAAABAAQAAAAABABQAAAAAAAAIACAIIAGAZQAHAfACATQACApAAAUIgCBcQgKAXgDAsQgDA0gDAOQgHAcgYBUQgHAXgRAsIgDAKQgKAbgYAoIgDAFIgSAXQgJAMgOALg");
	this.shape_15.setTransform(-96.7708,17.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CBFEFF").s().p("AAjEUIgCAAQgigDgYgdQgUgYgPgwQgFgGgBgNIgHg9IgDgfIgBgnIAAgHIAAgFQABgUABgSQAFgyAUg1QAXg4AggoIAegkIAKgKIAAgBIABAAIACAAQABgBAAAAQABAAABAAQAAAAAAABQABAAAAAAQhUB8gVB3QgdCjB5BKQAOALAZABIgBAdQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAgBABIggAZQgCACgEAAIgBAAg");
	this.shape_16.setTransform(-94.45,-48.4033);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3CF2FF").s().p("AAbBJIgNgIQgPgJgZgQIgHgFIgEgEIgBgBQghgegIgVIgCgLIAAgBIgCgLQAag5AzAjIAIAEQAFACADADIAVAPIARARQAGAGAFAKIALASIAGAOIABACQAAADACAGIADAGQADACgBAGQgBAQgFAHQgHAJgPAAQgMAAgRgHg");
	this.shape_17.setTransform(86.3475,40.3214);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3CF2FF").s().p("AhGB2QgVg2AIgqQAKgqA2g4QA0g2A1gWQgoBCgfBKQgbBCgcBZQgDAKgFAAQgJAAgNgjg");
	this.shape_18.setTransform(35.4775,52.8211);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009EFB").s().p("AhbA4QgJgTgIg4QgFgnAngPQAXgKA0gDQAkgDAdAZQAeAZAMAqQAKAng7AZQgwAVgzAAQgkAAgPggg");
	this.shape_19.setTransform(5.3207,45.8386);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1918B8").s().p("AI5FQQg4gIgegDIgRgCIgkgMQgagIgVgKIgEgCQgFgDgNgPQgTgVgDgGQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgLgGgGAAIgGACQgIAFgFAMIgCAEQgBAFgCABIgIAJQgQAOgKAFQgWALgIACIgQADQgiAHgUgGIgHgCQgegEgxgSIgVgJQgggOgJgLIgIgLQgIgJgEgCIgCgBQgIgEgDgBIgPgCQgJAAgGAOIAAAEQAAAOAJAEQheADiFgHIjigPIgDAAIg/ADIgIAAQgGAAgHADIgRAGQgPAGgVAHQgqAMguAFIgXADQhDAHgsgMIgGgBIhdgYIgBgBIgCgDIgCgEQgwgngGhEQgFg4AYhBQAEgNAFgHQAHgHAEgHIAHgJIAPgLIAygtIgBACQgDAMgBAOQgBATAEARIAFARQABAFAHAIIAKAJQAaATAkAFQAbAEAqgCIAEgBQAegMAcgUIANgLQAUgTAKgTQAKgWABgaIgBgHIgKgRIgLgOQgJgMgPgOQgHgGgZgQIgBgIQgFgjAkgZQANgJBHgcQApgRBOgOQBQgPApACQBDAEAkARQAYAMA8AoQgRAHAGAJQAFAIAWAFQA0AOArgRQBygrB2AbQC8AsCYhIQAggPA4geQAxgYAhgGQBYgQBcBeQAIAGAKAKQAPALAKAVIghgbQgLgJgJAAQgKABgFAKQgEALAAAQIgaghQgFgGgKgHIgPgNQgJgIgNgGQgNgGgKAAQgUABgJADIgHADIAAADQg3A6BOBaQgPAEgaANQgcAOgLADQgdAvAJAuQAJArAmAMQA3ASArgYQAsgYgBgxQAAgFgBAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgEQABgFAEgGQAMgOAEgLIAAgCIAEgFIACgCIABgBIAEAEIAHAFQAZAQAQAJIANAIQAmAQANgSQAFgHABgQQABgGgDgCQgCAAgCgHQgCgGABgCIAAgDQAHgWgCgXIgBgGIgGgUIgJgRQA6BNAQBIQAPBHgYBeQgHAbggArQgrA6g4AmIgcARIgKABIifASIggABQgsAAgVgDgAFVhAQg2A4gJAqQgJAqAVA2QAVA2AKgdQAchZAchCQAfhKAohCQg1AWg2A2gAA9iQQg1ADgWAKQgnAPAFAnQAIA5AJATQAPAfAjAAQA0AAAwgVQA7gYgKgnQgMgrgegZQgbgWggAAIgGAAg");
	this.shape_20.setTransform(-0.6804,51.6217);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#009EFB").s().p("AM+N5IACgBIAcgQQA4gmArg6QAggrAHgbQAYhegPhIQgQhIg6hNIAJARIAGAUIABAGQACAYgHAUIAAACIAAAAIgBAAIgGgOIgLgTQgFgKgGgGIgRgRIgVgPQgDgDgFgCIgJgEQgzgjgaA5IACALIAAABIACALQAIAWAhAeIAAABIgCADIgEAFIAAACQgEALgMAOQgEAGgBAFIAAAEQAAAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAFQABAygsAYQgrAYg3gSQgmgMgJgsQgJguAdgvQALgDAcgOQAagNAPgEQhOhaA3g6IAAgDIAHgDQAJgDAUgBQAKAAANAGQANAGAJAIIAPANQAKAHAFAGIAaAhQAAgQAEgLQAFgKAKgBQAJAAALAJIAhAbQgKgVgPgLQgKgKgIgGQhchehYAQQghAGgxAYQg4AeggAPQiYBIi8gsQh2gbhyArQgrARg0gOQgWgFgFgIQgGgJARgHQg8gogYgMQgkgRhDgEQgpgChQAPQhOAOgpARQhHAcgNAJQgkAZAFAjIABAIIAAgBIgMgFIgNgEQghgGgfALQgbAKggAXQgMAJgFAGQgIAJgNAXQgCADgDAJIgEAFIgtAoIgPALIgHAJQgEAHgHAIQgFAHgEANQgYBBAFA4QAGBEAwAnIACAEIABABIABACIAAABIgWgHQgjgdgQgnQgOgigEgzIAIhgIAAgBQAOgLAJgMIAXgdIAigfQAigiA1gpQAwgmAlgYQAdgSAAgNQgBgFgCgCIgRgNIgUgSIgGgCQgggLgMgdQgGgSgEguIgCgTQgFhBAGglIAShbIAehIQAghDAthKIASgMQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAIAUAJQASAGAHABIAWACIAVABQA7gdAsgSQAwgjArg9IAzApIA0AqQAGAFAcANQAWAKAIACQAsAKAyAJQAHABAMAAIATgBIAFgEQAlgpAAgoQAAgGgDgNQgJgmgmgqIgUgUIgHgGIh4hCIgPgFIhmgVIgqgFIgYgEQg9gKgwgXIgYgNQgwgcgigjQgGgEAAgCQgDgKgEgVIgDgQQgDgZAFgYQALg1AWgXQAYgZA0gJQANgCBSAOQBOAPAXANIASALIAQAHQAPAGAaAHIAoALQAAACAKAJQALAJALAGIAdAPQAUALAUADQAqAIBEgNQAtgIBBgUQC8g2CQgIQA3gKA+AEQApADAQADQAgAEATALQAZAPAMAJQASAOARAVQAiAqgcAlQgXAeg3ATQgBAtgKALQgKALgwAKQhfAVgjAHIgyAKIhLAFIhnAHIgSADQgQAEgIAGQgmAcAhA+IAMAQQAHAHAIAFQAWAMAkAFIAIABIAcACIC6gCQBRgCAxAFIAPABQATAAAOALQAHAHAEAGQAKANAFARIAHAXQADAXAIAOQARAiAngLQAZgIAggWIABgCIAMgNQAVgWAJgDIADgBQATgBAIAlIABADIAHA8IAHBeIgBgEIABAKIABA/QAAAxgCAeIgCBLIABBZQAAAcAMAeQALAeAUAVQASAJAMAEIAFgEIAEgJIABgEIAAgBIAGAKIADABIBkDgQADAHACAKQADAPAAAKQABAWgCAcIgDAZQgMA2guBGIAAACIgCADIgBABIgCADIgBABIgBABIgBACIgBABIhRBGQgWAKghAEIgJAEIgCAAg");
	this.shape_21.setTransform(-0.3937,-5.3875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CBFEFF").s().p("ADLC+QgZgIhCggQhDgBiXADQiQAChLgCQgLgJgCgKQgBgIAEgRQA5gNBRgDQAugBBegBQB8gbBlgfQAVgkAHgsQAEgdgBg2QgGgZAAgNQgBgTAIgTQAKACAKAGIABAAIAgBBQASAlAMAeIAfBRIAHARIAHARQAFAUADAYIADAbIAAAKIAAgCIgBAFQgDAOgIASQgLAZgIAHIgDgBQgBAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQgBADAAAJQgygBgvgRg");
	this.shape_22.setTransform(60.6358,-63.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CBFEFF").s().p("ACxAjIhVgFQg+gCkogDIgHgjIAEABQABABAAAAQABAAAAgBQABAAAAAAQABAAAAgBIABgFQABgEABgCIBTABQAwgBAggOQCPAHAtAFQBqAKBPAZIAAAKIgMgBQgeAPgwAAIgHgBg");
	this.shape_23.setTransform(-55.95,-51.3469);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3CF2FF").s().p("AO1KGQgMgEgSgJQgqgvgCg/QgBhIADhcIAChMQABgpgDgeIAAgGQgBgsgFgtIgHg8IgBgDQgIglgTABIgDABQgJADgVAWIgMANIgBACQggAWgZAIQgnALgRgiQgIgOgDgXIgHgXQgFgQgKgNQgEgGgHgHQgOgLgTAAIgPgBQgxgFhRACIjWAAIgIgBQgkgFgWgMQgIgFgHgHIgMgQQghg+AmgcQAIgGAQgEIASgDIBngHIBLgFIAygKQAjgHBfgVQAwgKAKgLQAKgLABgtQA3gTAXgeQAcglgigqQgRgVgSgOQgMgJgZgPQgTgLgggEQgQgDgpgDQg+gEg3AKQiQAIi8A2QhBAUgtAIQhEANgqgIQgUgDgUgLIgdgPQgLgGgLgJQgKgJAAgCIgogLQgagHgPgGIgQgHIgSgLQgXgNhOgPQhSgOgNACQg0AJgYAZQgWAXgLA1QgFAWADAbIADAQIAGAfIADADIAEADQAhAiAxAdIAYANQAwAXA9AKIAYAEIAqAFIBmAVIAJADIAGABIB4BDIAHAGIAUAUQAmAqAJAmQADANAAAGQAAAnglApIgFAEIgTABQgMAAgHgBQgygJgsgKQgIgCgWgKQgcgNgGgFIg0gpIgzgpQgrA9gwAiIABgBIADgDQALgKALgSQAMgSABgMIABgTQgBgWgUAIIgHADQgIADgCAEQgFAKgHASIgBABIgEAIQgIANgNAKIgGACIgBAAQgYARgUAGQgXAGgZgGIgHgDQgOgGgHgGQgPgLgRgQIgUgVQgXgXgPAHIgHADQgKALgCAHIgCADIgEAlIgCAGQgKAqgKAXQgLAagSAXIgDADIgGAEIABgcQgYgCgPgLQh6hJAdikQAVh2BVh8QAAAAgBAAQAAgBAAAAQgBAAgBAAQAAAAgBAAIgCABIABgDIAlglIAAgBIABgBIAEgDIAEgFQATguAbgwIAGgLIABgCIAKgQIARgdIAAgBQASgcAVgPIAGgCQAVgHAMgCIAHgBIA0AJQAZAEAQAAIAGABQC3AZDaACQCTACDxgJQBYgECggDQCLgFBpgPQAOgCAEABQAIACAKAGIAQAMIACACIAMAKIAPAUIADAFIAZA7IAYA8IgBgBQgKgFgKgCQgIASABAUQAAAMAGAaQABA1gEAeQgHArgVAmQhlAeh9AcQheAAguACQhRADg5AMQgEARABAIQACALALAIQBLADCQgDQCYgDBDACQBCAfAZAJQAvARAyAAQAAgIABgDQAAAAABgBQAAAAAAAAQABAAAAAAQABAAABAAIADABQAWgdAJgnIgBATIgFBHIgkHhQgCAbABAjIABAmIAWBRIAEALIgBAFQgBAEgDAFQgDAEgCAAIAAAAgAsjiYIAHAjQEpAEA+ACIBWAFQA0ABAggPIAMAAIAAgKQhPgZhqgLQgtgEiQgHQggANgwABIhSAAQgCABAAAEIgCAGQAAAAgBABQAAAAAAAAQgBAAgBAAQAAAAgBAAIgDgBIgBAAg");
	this.shape_24.setTransform(-2.9613,-37.0975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AI6PSQgpgFgvgMQgvgMgigPIgngPQgRgHgPgMQgjAXgKAFQgYANgcAFQgbAFgxgDQgNgBghgJQgfgJgSgHIglgMQgXgIgLgFQhzAJimgHQi7gJhdgDQihA5ibgOQhIgUgcgOQg7gbgRgsQghhVAEhdQAAgRAEgaIAFgnIAAgDIACgEIgBAAIBbjhIACgFQAHgmADgYQAKhegBhfQgChxACg3QhxjXAijbQAEgaAVgbQAageALgQQAggwA3g2QA5hxANgXQAlhCAagYQArgnA7AJQEpA0FzgHQDbgEHHgbQAcgFAgAKQAgAKAZAVQAaA7A8B8QA4BzAeBGQAiBdgTBuQgLBkgJCfQgLCxgEAsQgHBUARBcQBVCMAcBVQAuCKguBoQhWCQh+AyQhLAdhoAAQgzAAg6gHgAFONGQAAAAABAAQAAAAAAABQABAAAAAAQAAABABAAQADAGATAVQANAQAFACIAEACQAVAKAaAJIAkAMIARABQAeADA4AJQATACAcAAIAyAAICggTIAJgBQADAAgDABIACgBIAJgDQAggEAXgLIBRhFIABgBIABgCIABgBIABgCIACgDIABgBIACgDIAAgBQAuhGAMg3IADgYQACgcgBgXQAAgJgDgPQgCgLgDgGIhkjhQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBIgDgEIAAgCIgDgEIAAAAIgEgLIgWhQIgBgnQgBgiACgbIAkniIAFhHIgCg3QAAgKgDgOIgFgUIgOgiIgfhSQgRgognhVQgkhPgTgvIgDgEQgJgPgGgFIgMgLIgCgBIgQgMQgKgHgIgCQgEgBgOADQhpAPiLAEIj4AHQjvAKiVgCQjagDi3gZIgGAAQgQgBgZgEIg0gJIgHABQgMACgVAHIgGADQgVAPgSAbIAAABIgRAdIgKARIgBABIgGAMQgbAwgTAuIgEAEIgEAEIgBAAIAAABIgoApIgEAEIgFAGIgeAkQghAogWA4QgVAygEA1QgCARgBAWIABAFIgBAHIABAnIADAfIAHA9QACANAEAGQAPAwAUAYQAYAdAjADIACAAQAFAAACgCIAVgPIAMgKIADgCIAGgFIACgCQASgXALgaQAKgXAKgqIACgHIAGgoQACgHAKgLIAHgEQAPgHAXAXIAUAVQARARAPALQAHAGAOAHIAHACQAZAHAXgHQAUgFAYgRIABAAIAGgEQANgJAIgOIAEgHIABgCQAHgRAFgLQACgEAIgCIAHgDQAUgIABAWIgBATQgBALgMATQgLATgLAJIgDADIgBABQgqASg9AdIgVAAIgWgCQgHgBgSgGIgZgMQgDgBgDgDIgBgBIgMgNIgGgHQgFgFgDAAIgBAAIgCAAQgGACgFAQQgFAQgBAQQAAAMgMAYIgTAlQgMAXghAVQgdASgSADIgHABIACgBIgGABIgEAAIgDABIgGgBQgDAmgBA1IgEBVIgKCGIgPBvQgBAKgDANIgDALIgLAkIgLAhIgLAfIgpBnIgHAQIAAADIAAABIgIBfQAEA0AOAhQAQAoAjAdIAWAGIAAAAIABAAIBdAYIAGABQAsAMBDgHIAXgCQAugGAqgMQAVgGAPgGIARgHQAHgCAGAAIAIgBIA/gCIADgBIDiAPQCFAIBegEQgJgDAAgOIAAgFQAGgOAJAAIAPADQADAAAIAEIACABQAEACAIAKIAIAKQAJALAgAPIAVAIQAxASAeAFIAHACQAUAFAigGIAQgEQAIgCAWgKQAKgFAQgOIAIgJQACgCABgEIACgFQAFgMAIgEIAGgCIABAAQAFAAALAFg");
	this.shape_25.setTransform(-0.4605,-7.8226);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3CF2FF").s().p("AgvBsQglgGgagSIgJgJQgHgIgCgFIgEgSQgEgRABgRQABgMADgNIAAgBIgEAEIAEgFQADgIACgDQANgWAIgJQAEgGANgIQAggWAagJQAfgKAgAGQAGABAIADIALAFIABABQAaARAGAEQAQAQAIAKIALAOQAHAJADAHIABAGQgBAZgKAVQgJATgVATIgNAKQgcAUgfALIgEABIgQAAQgeAAgVgDg");
	this.shape_26.setTransform(-77.9,46.5374);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3CF2FF").s().p("Ah6FnQAJgPAIgTIAEgKQAQgqAHgXQAWhIAJgjQADgNADg0QACgrALgVIAChaQAAgdgCgeQgBgNgIglQgEgRgBgHIgCgFQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAFAAQASgCAbgPQAigTAMgVIATgiQALgXABgLQAAgPAFgOQAFgPAGgBIACgBIABABQAEgBAEAFIAGAHIAMANIABAAIAGAEIAEACQABABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBABIgRALQgxBIgcA5QgGAKgJAVIgQAmIgJAsIgIAsQgHAoAGA7IAAAFIAAADIABAKQAEAtAGASQAMAcAgALIAGACIATARIASAOQACACAAAFQABAMgdASQgkAVgwAlQgzAmgkAgIgIAIIgZAWIgDACIASgfg");
	this.shape_27.setTransform(-86.1889,8.35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CBFEFF").s().p("AhNFGIAHgPIAphkIALgeIAKgfIALgkIACgJIAEgXIAPhwQAIhdACglIACgeQADhbAEgvIAFABIAEgBQACACAHAAIABAHIAGAYQAHAdACAWQACAeAAAcIgCBbQgLAVgDArQgCA0gDANQgJAjgWBIQgHAWgQArIgEAKQgMAegWAhIgDAGIgSAWQgJALgNALg");
	this.shape_28.setTransform(-96.75,19.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CBFEFF").s().p("AAjEEIgCAAQgigFgXgaQgUgXgQgsQgDgFgDgNIgHg4IgEhMQAAgSACgSQAGgxAVgyQAXg2AgglIAegjIAJgJIABgBIABAAIAGAAQhVB5gWBuQgeCaB6BEQAIAHAKADIAVAEIgBAaIgDACIggAXIgFABIgCAAg");
	this.shape_29.setTransform(-94.375,-43.8437);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3CF2FF").s().p("AA0BPQgKgBgSgGIgMgJQgRgJgXgPIgGgFIgFgEIAAAAIgBgBQgfgcgIgVQgCgFAAgGIAAgBIgBgLQAcg4AzAiQACACAFACQAGACADADIAUAOIARASQAFAFAFAKIALARIAGAPIAAAAIAAACQAAACABAGIADAGQACACAAAGQgCAQgFAGQgIAKgNAAIgDAAg");
	this.shape_30.setTransform(87.5,42.0254);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3CF2FF").s().p("AhKBwQgUg0AJgoQAKgoA4g0QA2g0A2gVQgpA/giBHQgcA/geBUQgEAKgFAAQgIAAgNgig");
	this.shape_31.setTransform(36.022,53.9045);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#009EFB").s().p("AhbA1QgIgRgJg2QgFglAogPQAXgJA0gDQAkgDAdAYQAeAXALAoQALAlg8AYQgxAUgzAAQgjAAgPgeg");
	this.shape_32.setTransform(5.6455,47.313);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1918B8").s().p("AI0FEQgQgCgbgEIgqgGIgRgCQgJgCgWgIIgGgCQgWgHgYgMIgEgCQgFgCgFgGIgIgJQgTgWgDgFIgDgCQgNgFgEAAIgGACQgIAFgFALIgCAEQgBAFgCABIgIAIQgOAMgNAHQgUAKgJADIgQADQggAGgVgEIgHgCQgfgFgwgSIgVgIQgLgFgMgHQgOgIgEgFQgGgGgBgEQgGgIgGgDIgCgBIgLgEQgKgDgFAAQgJAAgGANIgBAEQABAOAJADQhfACiDgGIjigKIgDAAQgbADglABIgHAAQgGAAgIADIgRAGQgTAHgRAFQgsAMgtAGIgXACQhEAGgrgLIgFgBIhdgYIgBgBIgBgCIgBgBIgDgEQgwgmgGhDQgFg4AYg/QAFgNAFgGIAKgOIAIgJIAOgLIAygqIgBACQgDANgBANQgBARAEARIAFASQABAEAHAIIAKAJQAaASAkAGQAaAEArgBIAEgBQAegLAcgUIAOgKQAUgSAJgTQAKgVABgaIgBgGQgDgHgHgJIgLgOQgHgKgRgQQgFgEgbgRIgBgIQgFgiAkgXQANgHBGgbQApgQBPgOQBRgNApADQBDAEAlARQAYALA8AmQgRAHAGAIQAFAIAWAFQA1ANArgQQBzgoB3AZQC/AoCahFQAggPA6gdQAygYAigHQBcgQBcBbIASAPQAOAMAKAUIghgaQgLgJgJAAQgKAAgGALQgDAIgBAFIgBANIgZggQgFgGgJgHIgQgNQgIgHgOgGQgOgGgJABQgUAAgMAEIgGACIgBAEQgeAfAKApQAIAgAhAnQgPAEgbAMQgcANgLADQggAuAJAsQAHAqAlAMQA3ASAtgXQAsgYABgvQAAgFgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIAAgDQABgFAFgGQAJgJAHgPIABgCIAEgFIABgCIABgBIAAAAIAFAEIAHAFQAWAPASAJIANAJQARAGAKABQAQABAIgLQAFgGACgQQAAgHgCAAQgBgBgCgGIgBgIIAAgEQAIgVgBgWIgBgHQgCgMgDgHIgEgIIgEgJQA3BMAMBHQAMBHgcBbQgHAagiAoQgsA4g6AjIgcAQIgJABQh7AMgkAEQhLgBgVgCgAFXg9Qg4A0gJAoQgKAoAUA0QAUA0AKgcQAehUAeg/QAhhHApg/Qg2AVg3A0gAA9iJQg1ADgWAJQgoAPAGAlQAIA3AJARQAOAdAjAAQA0AAAxgUQA7gXgKglQgMgpgdgXQgbgVggAAIgHAAg");
	this.shape_33.setTransform(-0.326,52.824);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#009EFB").s().p("AM4NRIABgBIAdgPQA6gkAsg3QAhgpAHgaQAdhagNhIQgMhHg3hMIAEAIIAFAJQACAGACANIABAHQABAWgHAVIAAABIgBABIAAgBIgFgOIgLgSQgFgKgFgGIgRgRIgVgPQgDgCgFgCQgGgCgDgCQgygjgcA5IABALIAAABQAAAFABAFQAIAWAfAdIABAAIgCAEIgEAFIAAABQgIAPgJAJQgFAGgBAFIAAAEQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQABAAAAAFQgBAwgsAXQgsAXg4gSQgkgMgIgqQgJgtAgguQALgDAcgMQAbgNAPgDQghgogIgfQgKgpAfggIAAgDIAHgDQALgEAUAAQAJAAAPAGQAOAFAHAIIAQAMQAKAHAEAGIAZAhIABgNQABgGAEgIQAFgKAKAAQAKgBALAJIAgAaQgKgTgOgMIgSgPQhchchcARQgiAGgxAYQg7AegfAOQiaBGjAgpQh2gZh0ApQgrAPg1gNQgVgFgGgHQgGgIARgHQg8gmgYgMQgkgRhEgEQgpgDhRAOQhPANgpAQQhFAbgOAHQgkAYAFAiQAAAEACADIgBAAIgMgFQgIgEgFgBQghgFgfAKQgbAIggAXQgMAIgFAFQgIAJgNAWQgCADgCAJIgyAqIgOALIgHAJIgLAOQgFAGgFANQgYBAAFA3QAHBEAvAmIADAEIABABIABACIAAAAIgXgGQgigcgQgoQgOghgEgzIAHheIABgBQANgLAJgLIAYgcIAYgWIAJgIQAkggAzgmQAxglAkgWQAdgRgBgMQAAgFgDgCIgRgOIgUgRIgFgCQghgMgLgcQgHgRgEgtIgCgSQgFg9AHgoIAIgrIAKgsIAPglQAJgVAHgKQAcg5AwhJIARgLIAEAAIAVAJQANAGALABIArAEQBBgaAmgOQAugeAsg6IBnBRQAJAGAaAMQAWAKAJACQA4ANAmAGIATABIAUAAIAEgEQAlglAAgmQAAgGgDgLQgJgjgngoIgUgTIgHgGIh5hBQgGgDgJgCQg/gPgogHIgqgGIgXgFQg7gLgxgaIgYgNQgxgeghghIgHgGIgGgeIgDgQQgDgZAEgVQAMgyAWgVQAXgWA0gFQAPgCBPATQAYAFAbAIQAjALAOAJQAYAOALAEQAOAGAaAIIApAMQAAACAKAIQALAJALAGIAcAQQAVAKAUAEQArAIBEgLQAngGBIgTQBrgcA5gMQBYgUBOgIQA2gKA+gBQBOgCAcANQAaAMANAIQASAMARATQAiAmgcAkQgXAeg2AVQAAAsgKALQgJALgvALIiAAgIgsAKIgHABIhLAHIhnAKIgSADQgPADgJAGQgmAaAhA6QADAEAKAKQAGAGAJAFQAUALAnAEIAIABIAcABIAPgBIBogFIAjAAIAhgBQBSgEAvACQAIABAHgBQAUAAANAJQAHAFAGAHQAKANAFAPQAGAPABAGQAFAWAIANQATAgAngNQAXgIAhgYIANgPQAUgVAKgEIACgBQATgCALAjIAKA7QAGAtAEAsIgBgEIABAKQACAQABAtQACAygBAdQgEBgACBAQABAdALAcQALAeATAUQANAHARAGQABAAADgEQADgEACgFIABgEIAAgBIAGAJQAAABAAAAQAAAAABAAQAAABABAAQAAAAABAAIBZDeIAEARIADAYIgEAyQAAAMgEAMQgOA2gwBBIAAACIgBABIgBABIgBABIgBACIgCABIgBABIgBABIgBACIAAABIhTBCQgXAJggAEQgIADgBAAIgDAAg");
	this.shape_34.setTransform(-0.05,-1.0306);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CBFEFF").s().p("ADLC4QgYgGhFgbQg/ABiZAJQiLAJhPgBQgLgIgCgJQgCgIAEgQQA5gMBRgGICKgJQBsgaBxgmQATglAGgpQAEgdgBg0QgGgWgBgNQgBgTAIgTIATAGIABABIAfA9QATAlAMAbIAjBLQANAbACAFQAFANAGAbIAFAjIAAgCIgBAFQgCAMgHATQgKAYgHAGIgEAAQAAAAgBAAQgBAAAAAAQgBAAAAABQAAAAgBAAQgBADAAAIIgPABQgrAAgpgMg");
	this.shape_35.setTransform(60.9025,-58.3805);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CBFEFF").s().p("ACxAmIhWgHQhJgFhpgEIiygJIgHghIAEABQAAAAABAAQABAAAAAAQABAAAAAAQABgBAAAAIABgFQABgEABgBIBSAEQAvAAAhgLQCKALAxAHQBpAOBQAYIAAAJIgLAAQgcAKgrAAIgOAAg");
	this.shape_36.setTransform(-55.925,-45.1112);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3CF2FF").s().p("APGJnQgNgDgRgJQgTgWgLgcQgKgcgBgeIABihQABhcgFg3IgBgEQgEgxgFgjIgKg7QgLgigSACIgDAAQgKAEgUAWIgNAPQggAYgYAHQgnANgTggQgIgNgEgWQgBgFgHgQQgFgOgKgMQgGgIgHgEQgMgKgVAAQgHABgIgBQgvgChSAFIghAAIgiAAIhpAGIgrgBIgIAAQgngFgUgKQgJgGgGgFQgKgKgCgFQgig5AmgaQAJgGAQgEIARgDIBngJIBMgHIAGgBIAsgLICAggQAvgLAKgLQAJgLABgrQA1gWAXgdQAcglghglQgRgTgTgMQgNgJgZgLQgdgOhNACQg/ABg1ALQhOAHhZAUQg5AMhrAdQhIASgnAHQhEALgrgJQgUgEgUgKIgdgPQgLgGgLgJQgKgJAAgCIgpgMQgagHgOgGQgLgFgYgOQgOgIgigLQgcgIgYgGQhOgSgQABQgzAGgYAWQgWAVgLAyQgFAUADAaIADAPQAEAXACAHIAHAHQAhAhAxAeIAYANQAxAZA7ALIAYAFIApAGIBoAXIAOAEIB5BCIAIAGIAUASQAmAoAJAjQADALAAAHQAAAkglAmIgEADIgTABIgUgBQgmgHg4gMQgJgCgWgLQgagLgIgGIhohQQgrA5guAdIADgDQALgJALgQQAMgSABgKIABgJIAAgJQgCgUgTAGIgHADIgFACQgEACgBACIgGAOIgGAMIgBABIgEAHQgIAMgNAIIgGADIgBAAQgYAPgUAEQgXAGgZgHIgHgDQgNgGgIgGQgSgNgOgNIgTgVQgIgIgJgEQgNgIgIAEIgIADQgKAKgCAGIgBADIgFAiIgCAGQgJAmgKAWQgLAXgTAVIgCADIgGAEIABgbIgVgEQgKgDgIgGQh7hEAeibQAWhtBWh6IgHAAIACgCIAkgjIAAAAIABgBQAGgEABgDQARgnAcgxIAHgLIAAgBQAEgDAGgNIARgbIABgBQARgYAYgPIAGgCQAVgFAMgBQAFgCACABIAyANQAQAEAYADIAFAAQFlBJGwggQC6gNA8gGQCCgNBvgXQAOgDAEABQAIABAKAGIAQAKIACACIANAJQAFAEAKAOIADAEQAKATANAjIAXA3IgBgBIgTgGQgIATABATQABANAGAWQABA0gEAdQgGAqgTAlQhxAmhtAaIiKAJQhRAGg5AMQgEAQACAIQACAJALAIQBPABCLgJQCagJA/gBQBFAbAYAGQAxAOAygDQAAgIABgDQAAAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIAEABQATgbAIgmIgBBUQgLFNgICHQgCAmACA8IASBQIADALIgBAFQgBAFgEADQgDAEgBAAIAAAAgAskiWIAHAiICyAIQBrAFBIAFIBWAHQA1ACAggNIAMABIAAgJQhQgahqgOQgxgGiLgMQggAMgwgBIhRgEQgCACAAAEIgCAFQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgEgBIAAAAg");
	this.shape_37.setTransform(-2.752,-32.0675);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AI1OnQgpgFgvgMQgvgNghgOIgngQQgRgHgPgMQglAYgHADQgYAOgbAFQgYAFg0gDQgNAAghgKQgegIgUgIIgkgNQgXgHgLgGQh0AGikgDIkXgHQihA4icgNQhLgWgZgMQg7gbgRgrQgihTAEhdQAAgRAEgZIAFgnIAAgDIACgEIAAABIBajZIACgGQABgKAEgTIAEgeQAJhWAAhlQAAiHABgbQg4hmgUhhQgUhmAShoQAEgZAWgbQAagdAMgQQAigvA1gwQAxhhASgfQAhg6AhgaQAugkA4ANQEyBQFlgFQEHgEGUg7QAggFAeAGQAhAHAZATIBSCrQAuBcAsBRQAnBXgMBmQgFBZgECdQgECigDA6QgFBcALBTQBNCNAYBTQAoCJgxBlQhbCIh+AtQhIAahjAAQg2AAg9gIgAFLMdIADACQADAFATAVIAIAKQAFAFAFACIAEACQAYAMAWAHIAGACQAWAJAJABIARACIAqAGQAbAFAQABQAVADBLABICfgQIAKgBIgDAAIAEAAQACAAAIgDQAggEAWgJIBThCIABgBIABgCIABgBIABgBIABgBIABgCIABgBIABgBIABgBIABgCQAwhBAOg2QAEgMAAgMIADgyIgCgYIgEgRIhZjeQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAIgGgLIAAABQgDgGgBgFIgShPQgCg9ACglQAJiHAKlOIABhVIAAgIIgEgZIgFgWIgHgTIgPgfIgjhNIg3h2QgfhCgVgxIgDgEQgKgPgFgDIgNgKIgCgBIgQgLQgKgFgIgCQgFAAgOACQhvAXiBANQg8AHi6ANQmuAflnhIIgGgBQgXgCgQgFIgygMQgCgBgFABQgNABgUAFIgHACQgXAPgSAZIgBABIgRAbQgFAMgEAEIgBABIgGAKQgdAygQAmQgBADgHAEIgBABIAAABIgmAlIAAABIgFADIgFAGIgdAjQgiAlgXA2QgVAygFAxQgCASAAATIADBMIAIA4QACANAEAFQAPAsAUAXQAXAaAkAFIABAAQAFAAACgBIAVgOIAMgJIADgCIAFgEIADgCQASgUALgZQAKgVAKgnIACgGIAGglQACgHAKgKIAHgDQAJgDANAHQAIAFAIAIIAUAUQAOAOARANQAIAGAOAHIAGACQAaAHAXgFQAUgFAYgPIABAAIAGgDQAMgIAJgNIAEgHIAAgBIAGgMIAGgOQABgCAEgBIAGgDIAGgCQAUgGABAUIABAJIgCAIQgBALgLARQgLARgLAJIgDADIgCABQgiAMhEAcIgrgEQgLgBgOgGIgUgJIgLgHIgBgBIgMgMIgHgHQgEgFgDAAIgBAAIgCAAQgGABgFAPQgFAPgBAPQAAALgMAWIgTAiQgMAVghATQgdAQgSABIgPABIgDAAIgFgBQgEAkgCA2IgEBTIgKCCIgOBrIgEAXIgDAJIgLAkIgKAfIgLAeIgpBkIgIAQIAAACIAAABIgIBeQAFAzANAhQARAoAiAcIAXAGIAAAAIABAAIBdAZIAFABQArALBEgGIAXgDQAtgFAsgNQARgEATgIIARgGQAIgCAGAAIAHgBQAlgBAbgDIADAAIDiALQCDAFBfgBQgJgEgBgNIABgEQAGgOAJABQAFAAAKACIALAFIACABQAGADAGAIQABAEAGAGQAEAEAOAIQAMAIALAEIAVAJQAwASAfAEIAHACQAVAFAggGIAQgEQAJgCAUgKQANgHAOgMIAIgIQACgCABgEIACgFQAFgKAIgFIAGgCIABAAQAEAAAMAFg");
	this.shape_38.setTransform(-0.2101,-3.7436);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.8,-90.6,219.7,181.2);
p.frameBounds = [rect, new cjs.Rectangle(-109.8,-114.8,217.5,205.3), new cjs.Rectangle(-109.8,-106.2,218.6,197), new cjs.Rectangle(-109.7,-98,219.1,188.6)];


(lib.PuppetShape_2复制2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.WarpedAsset_7("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3CF2FF").s().p("AguBoQgjgGgcgRIgKgJQgHgGgCgGIgFgSQgDgQABgRQAAgJADgQIABgBIgFAEIAEgFIADgFIADgGIAUgeQAFgFANgIQAfgVAcgIQAdgIAiADIANAEQAEABAIAEIABAAQAXAOAHAGQAPANALANIAKAOQAIAIACAIIABAGQgCAYgKAUQgJATgTASIgPALQgcATgdALIgEABIgNAAQgfAAgXgEg");
	this.shape.setTransform(-77.7,47.3442);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3CF2FF").s().p("AhrE4QAEgGABgEQAQgnAHgZIARgzQAJgfAFgWQAEgOAEgzQAEgpAKgXIADhWIgBg5IgHgxQgFgPAAgGIgCgEQgBgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBIAAAAIAEAAQATgEAagOQAhgSALgSIASgdQAKgUABgMQACgRACgHQAEgLAIgHIACAAIACAAQADAAAEAEIAHAGIAMAKIABABIAKAFQAAAAAAAAQABAAgBAAQAAABgBAAQAAAAgBAAIgRALQgwBGgaAxIgfBCIgKAqIgIArQgHAjADA+IABASQADAtAGAPQAHARAMAIQAHAHASAJIAGACIAUARIAIAGIAJAHIACACQACACgCADQgEALgFAFIgWAOQhbA3hOBFIgkAfQAZgrAJgUg");
	this.shape_1.setTransform(-85.8525,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CBFEFF").s().p("AhQE9IAHgQIAphgIAMgeIAXhLIAViEQAIg9AFhDIALieIAFAAIAEAAIAEAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQACABABAGIAFAVQAEAUADAdIABA5IgDBXQgKAXgEApQgEAygEAOQgFAWgJAfIgRAzQgHAZgQAnIgEAJQgLAbgXAkIgDAFIgSAVQgKAMgNAKg");
	this.shape_2.setTransform(-96.375,20.7667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CBFEFF").s().p("AgSDQQgUgRgTgiQgFgGgCgJIgKguQgCgKgCgOIgDgeIAAgFIAAgFIABggQAIg0APgpQARgvAjgsQATgbAJgJIAJgKIABgBIAAAAIAHgBQhYCWgMBFQgTB1B6BHQANAIAaACIAAAYIgiAXIgHAAIgCABQgjgGgWgTg");
	this.shape_3.setTransform(-94.225,-38.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3CF2FF").s().p("AAxBNQgJAAgRgHIgNgIIgmgYIgIgGIgEgEIAAAAIgBgBQgdgagJgXQgCgEAAgHIAAgBIgBgKQASgaASgFQATgFAaAQIAIAEIAJAFIAUAOIARASQAFAGAEAJIAKARIAFAOIAAABIAAABIABAIIADAGQACADgBAFIgCALQgCAGgEAEQgKAJgNAAIgCAAg");
	this.shape_4.setTransform(88.4643,43.3917);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3CF2FF").s().p("AhQBkQgSg4APgfQASgmAzgwQA6g4AugJQgkAxgnBTIhACKQgEAHgEAAQgKAAgNgng");
	this.shape_5.setTransform(36.3515,53.935);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009EFB").s().p("AgpBQQg/gHgChdQAAgjAmgPQAegNAqADQAoACAbAUQAfAXAFAnQAEAng5AXQgoAPgkAAIgTgBg");
	this.shape_6.setTransform(5.841,47.4552);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1918B8").s().p("AIwE7IgrgGIgqgHIgSgCQgIgCgVgJIgGgCQgXgIgYgMIgEgCQgFgDgMgOQgQgRgGgJIgDgCQgNgGgDABQgEAAgDACQgHAEgGAMIgBAEQgCAEgDACIgIAIQgNAMgMAGQgYALgFABIgQAEQgfAGgWgEIgHgCQgjgGgsgQIgUgJQgVgHgTgQIgJgKQgGgJgFgDIgDgBIgKgFQgKgDgFAAQgJAAgGANIgBAEQACAMAIAFInDgKIgDAAQgoAEgYABIgIABIgNADIgRAGQgZAJgLADQgwAMgpAFIgYADQg/AGgwgLIgGgBIhdgYIgBAAIgBgCIgBgBIgCgEQgugsgGg9QgFgyAVhBQAEgNAGgGIALgPIAIgJIAHgFIAHgFIAygpIgBACQgDAQgBAJQgBASAEAQIAFARQACAGAGAGIAKAJQAdAQAjAHQAcAFAogBIAEgBQAdgLAcgUIAOgKQAUgSAJgSQAKgUACgaIgBgGQgDgHgHgJIgLgOQgLgMgOgNQgLgKgUgKQgCgFABgDQAFgdABgDQAGgMAZgPQAMgHBJgbQAigNBOgOQBVgQAiADQA8AFAsARQAVAJBCAlQgQATAvAHQAuAHAtgMQA2gOAvgEQBBgFBDALQBdAQBGgDQBigEBXgmIBbgoQAygVAkgEQBdgLBYBXQAGADAEAEIAJAJQAOAMAJASIgggZQgXgTgNAUQgFAGgBAHIgBANIgZghIgOgNIgQgNQgIgHgOgGQgOgFgKgBQgPAAgSAEIgGACIgDAEQgaAjAIAlQAHAcAfApQgQAEgaAKIgoAQQgcAhADAtQAEAuAkANQA4AVAogTQAngSAPgyQABgFgCgBIgBgBIABgEQABgFAFgFQAKgMAHgMIAAgBQABgDADgCQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIABgBIAFAEIAHAGIAnAYIANAIQARAHAKAAQAOABALgJQAEgEABgGIADgMQABgFgDgDIgDgGIAAgHIAAgEQAIgWAAgUIAAgHIgEgTIgIgRQAwBQAJBEQAJBFgbBZQgIAZgjAmQguAzg6AjIgcAOIgDABIgGAAIieAOQhGgCgagDgAFehGQg0AxgSAlQgOAgASA4QASA4AMgYIBBiLQAohSAkgyQgvAKg6A3gAgJiDQgmAPAAAjQACBdA+AHQAuAFAygTQA5gWgEgnQgFgogfgXQgbgUgogCIgOgBQgiAAgYALg");
	this.shape_7.setTransform(-0.0752,53.5886);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009EFB").s().p("AMyM5IACgBIAcgOQA6gjAugzQAjgmAIgZQAbhZgJhGQgJhEgxhQIAIARIAFATIAAAHQAAAUgIAWIAAABIgBABIAAgBIgFgOIgJgSQgEgJgGgGIgRgSIgTgOIgJgFIgJgEQgbgQgSAFQgTAFgRAaIABAKIAAABQAAAHABAEQAJAYAdAaIAAABIgCADIgEAFIAAABQgHAMgKAMQgGAFgBAFIAAAEIABABQACABgCAFQgOAzgnASQgoATg4gVQgkgNgEgvQgEgtAdghIAogQQAagKAPgEQgegpgHgcQgIglAagjIACgEIAHgCQASgEAOAAQAKABAOAFQAPAGAIAHIAQANIAOANIAZAhIABgNQABgHAEgGQAOgUAWATIAhAZQgKgSgOgMIgJgJQgDgEgHgDQhXhXheALQgjAEgyAVIhbAoQhYAmhhAEQhHADhcgQQhEgLhBAFQguAEg2AOQguAMgtgHQgwgHARgTQhCglgVgJQgsgRg9gFQghgDhVAQQhOAOgjANQhIAbgMAHQgZAPgGAMQgCADgEAdQgBADACAEIAAAAQgIgEgEgBIgOgEQghgDgfAJQgbAIgfAUQgNAIgFAGIgLAOIgKAQIgCAFIgDAGIgFAEIgsAlIgIAFIgGAFIgIAJIgLAPQgGAHgEANQgWBBAGAyQAGA9AtAsIADAEIABABIABACIAAAAIgXgGQgggfgRglQgOghgGgxIAIhdIABgBQAOgMAJgKIAVgZIACgCIAigdQBOhEBcg4IAWgOQAEgEAFgMQACgDgCgCIgCgCIgJgHIgIgGIgUgRIgGgCQgSgJgIgGQgLgJgHgRQgGgPgEgtIgBgSQgDg/AGgjIAKgqIAKgqIAfhCQAZgwAxhHIARgLIADgBIAVAIQAPAEAJABIArACIBmgqQAvgiApg4IBqBLQAHAGAbALQATAJALACQArAJAzAIQANACAagCQABAAACgEQAkgmAAglQABgGgEgMQgKgjglgoQgHgHgOgLQgFgFgCgBIh6g7IgPgEIhogSIgVgBIgVgBIgYgCQg7gGgzgRIgZgLQgtgVgogeIgHgFQgDgIgEgUIgEgOIgCgWQgBgNADgJQAQgyATgVQAVgYA0gPQAOgEBMAGQBLAGAZAMIAUAJIASAHQAbAIA5AKQAJAKAGAEQAGAEAQAGQAKAEAUALQAVAJAUACQBLAICTgkQCrgqCngJQA9gGA3AFQApAEAPADQAgAGAUANQAdATAJAIQASAPAOAVQAaApgaAeQgVAYg0APQgBAmgOAMQgMAKgoAGQhXAQgpAGIgsAIIgHAAIhMADIhlAEIgSADIgNADQgGACgFAEQgVARABAXQABARAOAbQACAGALAJQAJAJAGACQAYAMAjAFIAlADIB2gBIAjABIAgABQBDADA/AFIAPABQAUABAOAJQAFADAIAJQAJAKAHARQAFAJADALIAFARQADAKAFAGQAMAQAOAFQANAEAVgFQAUgGAkgXIAMgMQASgSAMgEIADgBQAMAAAHAJQAFAGAGAOIABACIALA0QAGAnAGArIABAGQAGBNACA6IAABJQgBA6ACAZQACAcAJAbQALAeARAVQAYALAHACQACAAACgEQAEgDACgFIABgFIAAAAIAGAJIADACIBQDcQABAGABALIACAXQgBAagDAYQgCANgEAKQgTA2guA9IgBABIgBABIgBACIgBABIgCABIgBABIgBACIgBABIAAABIgBABIhWA/QgXAIgfADIgKADIgBAAg");
	this.shape_8.setTransform(0.25,1.67);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CBFEFF").s().p("ADOCpQgngKg5gYIm1gMQgKgJgCgJQgCgJADgOQA+gJBNgBQAqAABgACQBwgRBugXQASgiAHglQAFgeAAguQgGgUgBgOQAAgSAGgRIAUAIIABABIA9B8IAkBGIAPAdQAHAQAFAUIAFAeIABgBIgBAFQgDAKgGAPQgJAVgIAHIgEgBQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAABIgBAJQgyAAgygOg");
	this.shape_9.setTransform(61.185,-51.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CBFEFF").s().p("AkSAAIAEABQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQABgHACgCIBSgEQAugEAjgMQBzgCBJAEQBmAHBVAUIAAAJIgMAAQghANg0AAQg5gCgbAAQhKABhqAEIi0AGg");
	this.shape_10.setTransform(-55.95,-41.6196);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3CF2FF").s().p("APOJKIgegMQgkgwgEg7QgBgaAAg4IABhKQgDhGgHhKIAAgDQgDgjgJgqIgKgzIgBgCQgGgOgFgGQgIgJgLAAIgDAAQgMAFgSARIgNANQgjAXgUAFQgVAFgOgEQgNgEgMgQQgFgGgDgKIgFgSQgDgKgFgJQgHgQgJgKQgIgJgFgDQgOgJgUgCIgQgBQg+gFhEgCIgggBIgigCIhoACIg0gDQgjgFgXgMQgGgDgJgIQgLgKgCgFQgPgbAAgSQgBgXAUgQQAFgEAHgCIANgEIASgCIBlgEIBMgDIAHgBIAsgHQApgGBWgQQApgHAMgJQAOgNABgmQAzgOAVgYQAbgfgbgpQgOgVgRgOQgKgJgdgTQgTgNgggGQgPgDgqgEQg2gEg+AGQimAIirAqQiTAlhLgIQgUgCgVgKQgUgLgLgEQgPgFgGgFQgGgDgKgKQg4gKgbgJIgSgHIgUgJQgagLhKgGQhNgGgOAEQgzAOgWAZQgTAUgPAzQgDAIABANIACAWIADAPQAFAWADAFIAGAGQAoAeAuAVIAZAKQAzASA7AGIAYACIAVAAIAVACIBoARIAJACIAFACIB7A8QACABAFAFQAOAKAGAHQAlAoALAjQAEAMgBAGQgBAmgjAlQgCADgCAAQgaADgMgCQgzgIgrgJQgLgDgUgJQgagKgIgFIhphMQgpA3gtAhIADgDQAagYAHgdIABgJIgBgJQgDgSgSAGIgHADIgKAGIgLAaIgBABIgEAIQgJANgLAJIgGADIgBAAQgYAOgUAGQgWAFgagDIgHgCQgPgGgHgEQgUgMgNgLIgUgSQgYgTgOAHIgHADQgJAIgDAIIgBADIgDAYIgCALQgIAhgKAVQgJASgUAXIgCACIgGAEIAAgXQgagDgNgIQh7hGATh2QAMhFBZiWIgHABIACgCIAlgkIAAgBIABgBQAHgEABgDQAbg7ARgdIAGgLIABgBQACgCAIgNIARgcIABgBQASgaATgOIAGgDIAdgLIAGgCIAwAAIVKgBQAOAAADABQAIADAJAGIAOAMIACACIAMALQAGAHAHANIADAEIAuBuIgBgBIgUgIQgGARAAASQABAOAGAUQAAAugFAeQgHAngSAhQhuAXhxARQhggCgqAAQhNABg+AJQgDAPACAIQACAJAKAJIG2AMQA5AYAnALQAyANAyAAQAAgIABgBQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIAEAAQATgXAHghIABABIgHH3QgBBDACAjIAPBOIAEAMIgCAEQgBAEgEAEQgCAFgCAAIgBgBgAstiLIAIAeIC0gGQBrgDBJgBQAbgBA6ADQA0gBAhgNIAMAAIAAgJQhVgVhmgGQhJgFh0ADQgjALguAEIhSAEQgDADAAAHQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAgBIgEAAIAAAAg");
	this.shape_11.setTransform(-2.008,-27.5975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AIzOBQhIgHhdgmIgogRQgNgHgUgNIgsAbQgYANgbAGQgeAGgvgEQgOAAgfgJQgegIgSgIQgxgQgVgKQkXABkXAAQigAziegIQhNgWgYgMQg1gZgVgrQgTgngHgvQgEgbgCg+IAFgpIAFgmIAAgDIACgEIAAAAIBcjSIABgGQAIgjACgYQAKhUAEhmIACiTQg6hagWhGQgZhTAMhfQADgYATgcQAZgfALgRQAigzAzgwQA1hiAPgZQAlg9AbgYQAjgfA3gLQKSAKLHgJQAlAIAYAJQAeAMAXAUQBiDYBIB4QAkBPgGBbQgGCkACEGQABBvAFBCQBFCMATBSQAbB5gqBxQhxCGhuAkQg9AUhiAAQg3AAhEgGgAFLL1IADACQAGAKAPAQQAMAOAGADIAEACQAYANAWAIIAGACQAWAIAIACIARACIArAHIArAGQAZADBGACICfgNIAGgBQABAAABAAQABAAABAAQAAAAAAAAQAAAAAAAAIAAAAQADAAAHgDQAdgCAZgJIBVg+IABgBIABgCIABgBIABgBIABgBIABgCIABgBIABgBIABgBIABgCQAvg8ATg3QADgJACgOQADgYACgZIgCgYQgBgKgCgGIhQjdIgDgBIgCgEIgBgCIgCgEIAAAAIgEgLIgPhOQgCgjABhDIAHn3IgBgCIgFgeQgCgLgDgJIgHgRIgPgcIgkhHQhBiJgqhhIgDgEQgHgNgGgHIgMgLIgCgCIgOgMQgJgGgIgDQgDgBgOAAI1KABIgwAAIgGACIgdALIgGADQgTAOgSAaIgBABIgRAcQgIANgCACIgBABIgGALQgRAdgbA7QgBADgHAEIgBABIAAABIgyAwIgcAlQgjAtgRAuQgPApgIA1IgBAhIAAAEIAAAFIADAeQACAOACALIAKAtQACAJAFAGQATAiAUARQAXATAjAGIACAAQAFAAACgBIAUgNQAFgDAHgFIACgCIAGgEIACgCQAUgXAJgSQAKgVAIghIAFgcIABgKQADgHAJgKIAHgDQAOgHAYATIAUASQANALAUAMQAHAFAPAGIAHACQAaADAWgFQAUgGAYgPIABAAIAGgDQALgJAJgNIAEgIIABgBIALgaIAKgGIAHgDQASgGADASIABAJIgBAJQgHAdgaAZIgDADIgCABIhmAqIgrgCQgJAAgPgFIgagJIgHgEIgNgKIgGgGQgEgEgEAAIgBgBIgCABQgJAGgDAMQgCAGgCASQgBAMgKATIgSAdQgMATggASQgcAOgSADIgIABIADAAIgKAAIgDABIgGgBIgZErIgTB4IgDAJIgWBBIgLAeIgpBhIgIAPIAAADIAAABIgIBdQAFAxAPAhQAQAlAhAeIAXAHIAAgBIABABIBdAYIAGABQAvAKBAgGIAXgCQAqgFAvgNQAMgDAYgJIARgGIAOgDIAIAAQAYgBAngEIADgBIHDAKQgIgFgBgMIABgEQAFgMAKAAQAFAAAJADIALAEIACABQAGAEAGAIIAJALQATAQAUAHIAVAIQAsARAjAGIAHABQAVAEAggGIAPgDQAGgCAXgLQAMgGAOgMIAIgIQACgBACgEIACgFQAFgLAHgEQADgCAEgBIABAAQAEAAAMAFg");
	this.shape_12.setTransform(-0.2429,-0.151);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.8,-90.6,219.7,181.2);
p.frameBounds = [rect, new cjs.Rectangle(-109.6,-90.5,218.7,180.7)];


(lib.PuppetShape_2复制 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.WarpedAsset_7("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3CF2FF").s().p("AguBmQgjgHgcgQIgKgJQgGgIgDgFIgEgRQgEgQABgSQAAgIAEgQIAAgBIgEAEIAEgFQADgIACgDIAVgdQAEgFANgIQAggUAagHQAegIAhADQAGABAIAEQAEABAHAEIABAAQAWAOAJAHQAOAMALANIALAOQAHAIADAIIABAGQgCAYgKATQgKATgTASIgNAKQgaARggAMIgEABQgnAAgcgFg");
	this.shape.setTransform(-77.9,47.9467);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3CF2FF").s().p("AhpE2IAEgKQAQgmAIgZIAPgyQAKgfAEgVQADgNAEgyQADgoAJgWIAChYQAAgmgCgUIgHgyQgFgQAAgHIgCgFQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIABgBIADAAQATgCAagNQAhgPAMgTIATgdQALgTABgMQACgSACgHQAEgMAJgHQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIACABQADAAAEAEIAHAHIAMANIAKAGIgCABIgRAKQgxBEgcAxQgGAKgJATIgNAeIgDAGIgJArQgGAbgCAQQgGAjAEA+IABAIIABAJQAEAvAGANQAHAQALAKQAHAGATAJIAGACIATARIAJAHIAJAHIACACQAAABABAAQAAABAAAAQAAABAAABQgBAAAAABQgFALgFAEIgUANQhaA2hPBCIgjAeQAagsAIgSg");
	this.shape_1.setTransform(-86.1639,10.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CBFEFF").s().p("AhNE9IAHgPIAphhIAihmIASh6IABgJQAGg9AEhBIACgeQADhQAFg2IAFABIAEAAIAEAAIAEABIACAHIAFAXQAHAlABANQACAVAAAlIgCBZQgJAWgDAoQgEAxgDANQgEAVgKAgIgPAxQgIAZgQAmIgEAKQgJAXgYAmIgDAFIgSAWQgJALgOALg");
	this.shape_2.setTransform(-96.775,20.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CBFEFF").s().p("AAjD0IgBAAQgjgKgWgYQgTgTgRgoQgEgHgCgKIgMhvIABgGIgBgEQABgbACgHQAIg0ATgqQAVguAjgpIAfggIAJgJIABgBIAGAAQhhCUgOBJQgXB1B2BZQANAKAZAFIgBAYIgCACIghAUIgDABIgEgBg");
	this.shape_3.setTransform(-94.4,-39.3417);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3CF2FF").s().p("AAxBMQgKgBgRgGIgNgIIglgXQgEgEgEgCIgEgEIAAABIgBgBQgdgbgJgVQgBgEAAgHIAAgBIgBgKQARgaASgGQATgFAbAPIAIAEIAIAEIAUAPQAGAFAKALQAFAFAFALIAJAQIAFAOIAAABIABACIAAAHQABAFACACQADADgBAEIgDAMQgBAGgFAEQgJAJgNAAIgCAAg");
	this.shape_4.setTransform(88.7143,43.8075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3CF2FF").s().p("AhQBiQgSg3AOgeQASgkA1gwQA7g3AtgJQgkAwgpBRIhACHQgEAHgEAAQgKAAgMgmg");
	this.shape_5.setTransform(36.6265,54.779);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009EFB").s().p("AgqBOQg+gGgChaQgBgjAngPQAegMArADQAnACAbATQAfAVAFAnQAFAmg7AWQgoAPglAAIgSgBg");
	this.shape_6.setTransform(5.8908,48.7975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1918B8").s().p("AIwE3IhVgNIgSgCIgdgKIgGgCQgVgHgagNIgEgCQgFgCgNgOIgVgZIgDgCQgLgGgFABIgHACQgJAFgEAKIgCAFQgCAEgCABIgIAIQgNALgNAGQgRAJgMAEIgQAEQgfAGgVgEIgHgCQgegFgygRIgUgJQgJgDgNgHIgSgMQgDgDgFgHQgGgHgGgEIgCgBQgHgEgEgBQgKgCgFAAQgJAAgGAMIAAADQABAMAIAFQiVgCkvgJIgDAAIhHAGQgJABgFACIgRAFQgTAHgRAFQgoALgxAHIgXACQhAAFgvgKIhjgZIgBgBIgBgCIgBgBIgCgEQgugrgGg9QgGgyAWhBQAEgMAFgHIALgOIAIgJQACgDAFgCIAHgFIAygoIgBACQgDAQgBAJQgBARAEAQIAFARQACAFAGAHIAKAJQAcARAjAHQAcAFAoAAIAEgBQAhgMAZgSIAOgKQATgRAJgSQAKgTACgaIgBgGQgDgIgHgIIgLgOQgLgMgOgNQgKgJgVgLQgCgFABgDQAEgcACgDQAFgLAZgPQANgHBHgYQAhgMBQgNQBVgNAiAEQA9AGAsARQAYAKBAAkQgWAWAyAFQAwAGAwgNQB3geB0ASQBcAOBIgEQBjgGBWgnQAggOA7gcQAxgVAkgFQBdgOBYBVQAGADAEAEIAJAIQANALAKATIgggZQgWgSgOAUQgEAGgBAHIgCANQgPgWgJgKQgFgGgJgHIgPgMQgIgHgPgFQgOgFgKgBQgPAAgRAEIgGACIgCAFQgbAjAIAkQAGAbAeApQgQAEgZAKIgpAQQgcAhAEAtQADAtAkANQA4ATAogTQAngSAOgxQACgGgCAAIgBgBIAAgEQACgGAEgEQAKgLAIgNIAAgBIAEgFQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIABgBIAAAAIAFAEQAEACADADIAnAYIANAIQAQAGAKAAQAPABAKgKQAEgEACgGIACgLQABgFgCgDQgCgBgBgGIgBgHIAAgDQAJgWAAgUIgBgHIgDgTQgGgKgCgGQAvBPAJBDQAJBFgcBYQgHAYgkAnQgyA2g2AfIgdAPIABAAIinAOQhBgBgfgDgAFghAQg0AwgSAkQgPAeASA3QASA2AMgXIBCiIQAohQAlgwQguAJg8A3gAgJh5QgnAPABAjQACBaA9AGQAvAFAxgTQA7gVgFgmQgFgogfgVQgbgTgngCIgPgBQgiAAgYAKg");
	this.shape_7.setTransform(-0.0466,54.0765);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009EFB").s().p("AMyMoIACAAIAcgPQA4ghAvg0QAlgnAGgYQAdhYgKhGQgIhDgvhPQABAGAHAKIADATIAAAHQABAUgJAVIAAACQAAABgBgBIAAAAIgEgOIgKgSQgFgLgEgEQgKgMgHgFIgTgOIgJgEIgJgEQgbgQgSAGQgSAFgSAaIABALIAAABQAAAHACADQAIAWAdAbIAAABIgCADIgEAFIgBABQgHANgKALQgEAEgCAGIAAAEIABABQACAAgCAGQgPAygmASQgpATg3gTQgkgNgDguQgEgtAcghIApgQQAZgKAQgEQgfgpgFgbQgIgkAbgjIABgFIAHgCQARgEAPAAQAKABAOAFQAPAFAIAHIAPAMQAJAHAFAGQAJAKAPAWIACgNQAAgHAFgGQANgUAXASIAgAZQgKgTgNgLIgJgIQgEgEgGgDQhYhVhdAOQgkAFgxAVQg7AcggAOQhWAnhjAGQhIAEhcgOQh0gSh4AeQgvANgwgGQgygFAWgWQhAgkgYgKQgsgRg9gGQgjgEhUANQhQANghAMQhHAYgNAHQgZAPgFALQgCADgFAcQAAADACAEIgBAAQgHgEgEgBQgIgDgGgBQghgEgfAIQgaAIggATQgNAIgEAGIgVAdIgDAFIgCAGIgxAoIgHAFQgGACgBADIgIAJIgLAOQgGAHgDANQgWBBAFAyQAHA9AuArIACAEIAAABIACACIAAABIgWgHQgigegQglQgPghgFgxIAIhdIAAgBQAKgHAOgOIAVgaIABgCIAigcQBOhCBbg2IAVgNQAEgEAFgLQABgBAAAAQAAgBAAgBQAAAAAAgBQAAAAgBgBIgCgCIgIgHIgJgHIgUgRIgGgCQgSgJgIgGQgLgKgHgQQgGgNgFgvIAAgGIgBgLQgFg/AGgjQADgPAGgbIAJgrIADgGIANgeQAJgTAGgKQAcgxAxhEIARgKIADgBIAVAKQANAFALADQAMACAfADQAogOA/gUQAwgdAqgxIBoBOQAGAEAdANQAUAKALACIBfAUQANACAagBIAEgDQAjgjACgiQAAgHgEgKQgKghglgkIgUgRIgIgGIh7hAQgFgEgJgBQgugMg6gMIgpgIIgYgFQg6gPgxgZIgYgOQgtgcglgjIgGgGIgGgdIgDgOIgCgXQAAgNADgIQARgxATgPQAWgTA1gDQAPgBBMAWQBJAWAYAOQAbAQAJAEQAPAGAZAIIApAOIAPAOQAGAFAOAHIAeAQQATAJAVADQBRAMCKgjIClgoQBcgWBLgLQBKgOAogDIA2gEQAegBAUAHQAeALALAGQAUAKAPASQAcAigeAlQgWAcguAVQgBAmgNAPQgLAMgoALIh+AkIgrAMIgHABIglAGIgoAEIhmAMIgSADIgMADQgHACgEAEQgVAPABAVQAAAQAPAZQAEAGAJAHQAJAGAGAEQAXAKAlACIAIABIAdAAIARgBICJgJIAggCQBQgHAwgBIAPAAQAVgBANAIQAHAEAHAHQALALAGAOIAIATIAFARQADAKAFAFQANAQAOADQAMADAWgGQARgGAmgbIALgPQATgUAKgGIAEAAQALgBAIAJQAFAGAGAPIABACIAMA1QAJAsAEApIABAGQAIBQAAA9IgBBJQAAA5AAAYQABAcAKAbQALAdARAVQAVAKAJACQABABAEgFIAFgIIABgEIABgBIAEAJIAEACIBPDcQACAFABALIABAYIgFAxQgCAMgDALQgSA0gwA+IgCACIgBABIgBABIgBABIgBACIgCADIgBABIgCABIhVA/QgUAHgiAEIgJACIgCABg");
	this.shape_8.setTransform(0.3,3.3728);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CBFEFF").s().p("AlQCpQgBgIADgNQA5gMBPgKICKgOQBRgZCHgvQAPglAGgnQAFghgCguQgMgnAKgeIAUAEIAAAAIA/B3QAbAzAMASIARAdQAHAQAGAWIAGAXQABAEAAAFIAAADQgCAKgGATQgIAWgIAIIgDAAQgBAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAIAAAKQgwAEg0gJQgngHg6gSIjXAUQiEANhVADQgLgJgCgIg");
	this.shape_9.setTransform(61.175,-53.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CBFEFF").s().p("ACvAoIhVgIIljgfIgHggIAEABQABABAAAAQABAAAAgBQABAAAAAAQAAAAABgBIACgEQAAgEABgBQBAAGARAAQAtACAkgIQBuALBNANQBmARBTAZIAAAIIgMAAQgbAHgjAAIgYgBg");
	this.shape_10.setTransform(-55.9,-38.889);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3CF2FF").s().p("APPJIQgJgCgVgKQgkgugDg7QgBgZABg4IABhKQgBhDgIhSIAAgDQgGgugHgiIgGgaQgDgUgDgHIgBgCQgGgPgFgGQgIgIgMABIgDAAQgKAFgTAUIgMAPQglAbgSAGQgVAGgNgDQgNgDgNgQQgFgFgDgKIgFgRIgJgTQgGgNgLgLQgGgHgHgEQgOgIgUABIgPAAQgvABhRAHIggACIi4AKIgIgBQgkgCgXgKQgHgEgIgGQgJgHgEgGQgPgZAAgQQgBgVAUgPQAFgEAHgCIAMgDIASgDIBmgMIAngEIAmgGIAGgBIAsgMIB+gkQAogLALgMQANgPABgmQAugVAWgcQAeglgdgiQgOgSgUgKQgLgGgegLQgUgHgfABIg2AEQgnADhLAOQhKALhcAWIilAoQiLAjhRgMQgUgDgTgJIgfgQQgOgHgGgFIgOgOIgpgOQgagIgOgGQgJgEgbgQQgZgOhIgWQhMgWgPABQg1ADgWATQgTAPgRAxQgDAIAAANIABAXIADAOIAHAdQAAACAGAEQAiAhAwAeIAYAOQAxAZA6APIAYAFIApAIIBoAYQAEAAAFADIAFABIB7BBIAHAGIAUARQAlAkALAhQAEAKAAAGQgCAigjAjIgEADQgbABgMgCIhfgUQgLgCgUgKQgdgNgGgEIhohNQgqAxgwAcIABgBIADgCQAcgWAGgaIABgIIAAgJQgCgRgTAEQgDAAgEACQgJAEgBABIgGAMIgGAMIAAABIgEAGQgIALgNAHIgGACIgBAAQgYANgVADQgWAEgZgGIgHgDQgOgHgIgGQgUgOgMgMIgTgTQgXgVgOAEIgHADQgKAHgDAIIgBADIgFAgIgCAFQgJAjgKATQgKATgUAWIgCACIgGADIABgYQgZgFgNgKQh3hYAXh2QAOhJBiiUIgGAAIABgCIAjggIAAgBIABAAQAGgEABgDQALgZAhg4IAHgLIAAgBIAGgHIAEgHQAGgMAKgOIABgBQASgVAagPIAHgCIAigDIAGAAIAwARIAmAKIAHABQGCBgGPgkQB0gKCCgYIDugyIAKgCIAJgBQAIABAKAFIAQAJIACABIAOAJQACABANAPIADAEQAKAQALAgQAOAkAGANIgBgBIgTgEQgKAfAMAmQABAugFAiQgFAogQAkQiHAwhRAYIiKAPQhQAJg5AMQgDAOACAHQACAJAKAIQBVgDCEgNIDZgUQA5ASAoAHQAzAJAwgDIABgKQAAAAAAgBQABAAAAAAQAAAAABAAQABgBAAAAIAEAAQARgZAHglIAAABIAEBQQAFDegHDkQgCA3ABAuIAPBOIADALIgCAFQAAADgEAFQgEAFgBAAIAAgBgAstiVIAGAgIFlAgIBVAIQAzADAjgKIAMABIAAgIQhTgahmgRQhOgNhvgMQgjAIgtgBQgRgBhAgGQgBACgBADIgCAFQAAAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAIgEgBIAAAAg");
	this.shape_11.setTransform(-1.7863,-27.0475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AIzN9QhJgHhcgmIgngQQgOgHgUgNIgtAbQgYAOgbAFQgeAGgvgDQgNgBgfgJQgegIgSgIQgxgQgVgKQh9ACmxgBQigAyifgIQhMgWgYgMQg1gZgVgrQgTgngHguQgEgagChAIAEgoIAFgmIAAgDIACgEIAAAAIBajRQACgCAAgDQAHgjACgXQAJhVAAhkIACicQg1hkgThSQgWhfAQhjQAEgZAWgZQAbgcAMgQQAYghA/g5IA/h1QAkg6AkgWQAogYA8AHQEyBsFhAAQFUAAFBhkQAqgBAVADQAgAEAbAQQAXAoA9B3QA0BlAlA5QAoBQgCBhIACDjIAADgQgBB1AFA8QBECMASBSQAbB5gqBwQhyCEhuAlQg+AUhlAAQg2AAhBgGgAFLL0IADACIAVAZQANAOAFADIAEACQAaANAVAHIAGACIAdAKIASACIBVANQAfADBAABICfgOIAOgBIAGgCQAhgDAVgIIBWg+IABgBIABgCIADgDIABgBIABgBIABgCIABgBIABgBQAwg/ASg0QAEgLABgLIAFgyIgBgXQgBgLgCgGIhPjcIgDgBIgDgEIAAgCIgCgEQAAABgBgBIgDgKIgOhOQgCguACg3QAIjkgGjfIgDhPIgBgCIgBgIIgGgYQgCgLgEgJIgHgRIgRgdQgSgfgVgnQgVgpgfhDIgzhsIgDgDQgKgNgGgEIgNgIIgCgCIgRgIQgJgFgJgBQgEgBgFACIgJACIjvAxQiBAZh1AKQmPAjmChgIgGgBIgngKIgvgQIgHAAIghADIgHACQgaAOgSAWIgBABQgKAOgHAMIgEAHIgFAHIgBABIgGAKQghA5gLAYQgBADgHAEIAAABIAAABIgmAjIgEADIgjAmQglAogVAuQgTArgIA0QgCAHgBAbIABAEIgBAGIAMBwQACAKAEAHQARAnATAUQAWAYAkAJIACAAIAHAAIAogZIADgCQAUgWAJgSQAKgTAKgkIACgGIAGgiQACgIAKgHIAHgDQAPgFAXAVIATAUQAMALAUAQQAIAGANAHIAHACQAZAGAXgDQAVgDAXgNIACAAIAGgDQAMgHAIgLIAEgHIABgBIAGgMIAGgLQABgCAJgDQADgCAEAAQASgEADARIAAAIIgBAJQgHAbgcAVIgDADIgBABIhnAiQgfgDgMgDQgLgCgNgGIgUgJIgFgDIgGgEIgNgMIgGgHQgEgEgEgBIgBAAQAAAAAAgBQgBAAAAAAQAAAAAAAAQgBABAAAAQgJAGgEAMQgCAHgCASQgCAMgLATIgSAdQgNATghAQQgbANgSABIgIABIADAAIgNAAIgGgBQgFA4gFBxIgYDmIgHAfIggBeIgpBgIgIAPIAAADIAAABIgIBcQAGAxAOAhQARAlAhAfIAWAGIAAAAIABAAIBjAaQAvAJBAgFIAXgCQAxgGAogMQARgEATgHIARgGQAFgCAJgBIBHgFIADgBQEvAJCVACQgIgEgBgMIAAgEQAGgMAJAAQAFAAAKADQAEAAAHAEIACABQAGAEAGAHQAFAIADADIASALQANAIAJADIAUAIQAyASAeAFIAHABQAVAFAfgHIAQgDQAMgEARgJQANgHANgLIAIgIQACgBACgEIACgEQAEgKAJgGIAHgCIABAAQAFAAAKAFg");
	this.shape_12.setTransform(-0.2124,0.3189);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3CF2FF").s().p("AgvBnQglgGgagTIgJgJQgHgIgCgFIgEgRQgEgQABgSQAAgHAEgQIAAgBIgFADIAFgEQADgIACgDQANgVAIgIQAEgFANgIQAggVAbgHQAegJAhAGIANAEIAMAFIABABIAfAVQARAQAHAJIALAOQAIALACAFIABAGQgBAYgKAUQgKATgUARIgOAKQgaASggALIgEABQgqAAgZgFg");
	this.shape_13.setTransform(-78.075,48.1887);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3CF2FF").s().p("Ah7FWQAJgPAIgRIAFgKQAQgpAHgWQAUg6ALgsQADgOADgyQADgpAKgVIAChXQAAgcgCgeQAAgJgHgoQgFgRAAgHIgCgFQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIABgBIADAAQASgBAcgNQAhgPAMgUIATgfQALgUABgLQAAgNAFgOQAGgOAGAAIACgBIABABQADAAAEAEIAHAIIAMAMIAHAEIADADIgCABIgRAJQgyBDgbAzIgcA7IgDAGIgJAqQgGAbgCAQQgHAmAFA7IABAFIAAAMQAEAtAGAQQAMAcAgAMIAGACIAUASIARANQACACAAAFQABAMgdAPQglAVgvAiQg0AkgjAeIgiAcIgDACIASgeg");
	this.shape_14.setTransform(-86.2875,11.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CBFEFF").s().p("AhOE9IAHgPIA/icIALgiIACgKIAFgWIAOhnIAAAAIAAgFQAGgsAFhSIACgdQADhRAFg2IAFABIAEAAIAEAAIAEABIACAHIAFAZQAHAjABAOQACAeAAAcIgCBYQgKAVgDApQgDAxgDANQgLAtgUA6QgHAWgQApIgEAJQgLAagXAkIgDAEIgSAWQgMAOgLAHg");
	this.shape_15.setTransform(-96.875,21.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CBFEFF").s().p("AAjD1IgBAAQgigHgXgZQgUgVgQgpQgEgGgCgLIgIg0QgCgPgBgMIgBghIAAgLQAAgPACgSQAGgvAXguQAXgyAiglIAngpIABgBIAAAAIAHAAQhYB1gWBlQggCQB8BCQAMAKAaAFIgBAYIgCACIghATIgDABIgEAAg");
	this.shape_16.setTransform(-94.375,-39.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3CF2FF").s().p("AAyBNQgLAAgRgHIgMgIIgngYIgHgFQgDgCgBgCIAAABIgBgBQgfgbgHgVQgCgFAAgFIAAgBIgBgLQAhg4AwAiQACACAGACQAGACADACIATAOIARARQAGAGAEAJIAJARIAGAOIAAAAIAAACQAAACABAGQACAFABABQACACAAAGIgDALQgBAGgEAEQgJAKgPAAIgBAAg");
	this.shape_17.setTransform(88.85,44.0992);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3CF2FF").s().p("AhNBsQgUgxAKgnQALgmA5gzQA3gyA3gVQgrA+giBDQgfA+geBQQgEAKgEAAQgJAAgNghg");
	this.shape_18.setTransform(36.7333,55.7515);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009EFB").s().p("AhdAzQgIgQgIgzQgFgjAogPQAYgJA1gDQAkgDAeAWQAeAXALAlQAKAjg9AYQgxATg0ABQgkAAgPgdg");
	this.shape_19.setTransform(5.9434,49.7372);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1918B8").s().p("AIyE6QgQgBgbgFIgqgGIgRgCIgegJIgGgCQgbgJgTgJIgEgCQgIgEgKgNQgRgQgFgJIgDgCQgLgFgGAAIgGACQgIAFgFAKIgGAKIgIAIIgbASQgYAMgGABIgQAEQggAGgVgFIgHgCQgSgDgWgHIgogNIgVgIIgXgLQgOgIgEgEIgHgKQgIgIgEgCIgCgBQgHgDgFgBIgOgBQgJAAgHANIAAAEQABAMAIAEQhgAGiEgIIjigQIgDAAIg/ADIgIAAQgGAAgIADIgQAFQgOAGgXAGQgxAPgoAEIgXACQgiACgWgBQgdgBgZgHIhhgbIgBgBIgCgCIAAgBIgDgEQgvglgHhCQgFg2AXg+QAFgLAFgHQAGgGAEgHIAIgJIAOgKIAygoIgBACQgDAMgBAMQgBASAEAQIAFARQABAFAHAHIAKAJQAaATAkAGQAaAFArAAIAEgBQAfgLAbgSIAOgKQAUgQAJgTQALgUAAgZIAAgGQgCgFgIgLIgLgOQgIgJgRgQIgfgVIgCgHQgFghAlgWQAKgFBJgaQApgOBQgLQBQgLAqADQBEAFAlARQAYALA9AlQgSAGAGAIQAGAHAVAFQA2ANArgPQBzgoB7AYQC/AlCghGQAggOA7geQAzgYAjgHQBfgSBdBYIASAPQAOAMAJATIgggZQgLgJgKAAQgKABgGAKQgGALAAAPIgYggQgFgGgJgGIgQgMQgIgHgPgGQgOgFgKAAQgTABgOAEIgGADIgBADQgfAgAKAnQAHAdAhAnQgPAEgcAMQgcAMgMADQggAtAHAqQAGAoAlAMQA3ARAtgWQAtgXADgtQAAgFgBAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAgBABAAIAAgDQABgGAFgFQAMgLAFgMIABgBQABgEADgBIACgDIAAAAIABAAIAEADIAHAFIAnAYIANAIQARAHALAAQAPABAJgLQAEgEACgGIACgLQAAgHgBgBQgCAAgBgGIgBgIIAAgEQAJgTAAgXIgBgGIgEgTIgIgQQA0BJAJBHQAJBGggBXQgJAYgiAnQgvA1g5AiIgcAOIAAAAIimASQhGAAgagDgAFag4Qg5AzgKAmQgKAnAUAxQATAyALgbQAehQAfg/QAjhCArg+Qg3AVg5AygAA9h+Qg1AEgXAIQgpAPAFAjQAJA0AIAQQAPAcAiAAQA1AAAygUQA8gWgKgjQgLgngegWQgagUghAAIgHAAgAM4ErIAAABIgDAAg");
	this.shape_20.setTransform(0.0957,54.4901);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#009EFB").s().p("AM0MpIACAAIAcgPQA5giAvg0QAignAJgYQAghXgJhHQgJhIg1hJIAIAQIAEATIABAHQAAAVgIAVIAAABIgBABIAAgBIgFgOIgKgRQgEgKgFgGIgRgQIgUgOQgDgDgFgCQgHgCgCgCQgxghggA4IABAKIAAABQAAAGABAFQAHAVAfAbIABABIgCADQgEACgBADIAAABQgGAMgLAMQgFAFgBAFIgBAEQAAAAAAAAQAAAAAAABQAAAAABAAQAAAAAAAAQACAAgBAFQgCAuguAWQgtAWg2gRQglgLgHgpQgHgrAhgsQALgDAdgNQAbgMAPgDQgggngHgdQgKgoAegfIABgEIAHgCQANgFATAAQAKgBAPAGQAPAFAIAHIAQAMQAJAHAFAGIAYAgQAAgPAGgLQAGgLAKAAQAJgBALAJIAgAaQgJgTgOgMIgRgPQhehZhfATQgiAHgzAYQg7AeghAOQigBFi/glQh7gXhyAnQgsAPg1gMQgWgFgFgIQgGgHARgHQg8glgZgLQgkgQhEgFQgqgEhRALQhQALgoAPQhJAZgLAGQgkAVAFAhIABAHIAAAAIgMgFIgNgEQghgHgfAJQgbAIggAUQgMAIgFAFQgIAJgNAUQgCADgDAJIgxAnIgPAKIgHAJQgFAHgGAHQgFAGgFANQgXA9AGA3QAGBBAwAmIACAEIABABIABACIAAAAIgWgGQgigcgRgmQgOghgFgyIAHhcIABgBQALgHAMgOIAVgZIACgCIAigcQAjgeA0gkQAwgiAlgVQAdgPgBgMQAAgFgCgCIgRgNIgUgSIgGgCQgggMgMgcQgGgQgFgtIAAgGIgBgLQgFg8AHgmQACgPAHgbIAJgqIADgGIAcg7QAbgzAyhDIARgJIADgBIAVAKIAYAIQANACAeADIBnghQAugaAsg1IBoBPQAIAGAbAMQAYAKAHACIBfATQAIACALAAIAUgBIAEgDQAmgigBgjQAAgFgDgLQgKghgnglIgUgSIgHgFIh6hBQgHgDgIgCQg9gPgqgJIgqgIIgYgFQg5gOgygbIgYgOQgwgfghghQgGgEAAgCIgHgdIgDgOQgDgZAFgTQAKgwAWgSQAXgTA0gBQALgBBSAXQAXAGAdALQAhAMAPAJQAVANANAGQAaALA3ARQAAACAKAIQALAJAMAGIAcAQQAUAJAVAEQAqAKBFgKQAngGBJgSICkgpQBegXBIgKQAxgLBCgHQBKgHAeAKQAZAIAOAIQATAKARARQAgAhgcAlQgWAdgzAYQAAAqgJALQgKALguAMQhdAcgiAJIgrAMIgGABIggAEIgsAFIhnANIgSADQgQADgIAFQgnAZAjA1QADAEAJAJQAHAGAJAEQATAKAoADIAIAAICVgJIAigBIAhgBQBRgJAvAAIAPAAQATgCAPAJQAHAFAGAFQALAPAFALIAJATQAGAXAHAKQAUAeAngPQAWgHAigbIABgCIALgMQAUgXAJgDIADgBQATgEAMAhIAMA3QAJAvAEAmIABAFQAIBNABA9IgBBKQAAA8ABAYQABAcAKAcQALAdARAUQAPAIAPAEQABABAEgFQADgCACgGIACgFIAAgBIAFAKIADACIApBtIAoBvIADAQIABAYQgCAYgEAZQgBAMgEALQgRA0gyA9IgBABIgBABIgBACIgBABIgBABIgBABIgBACIgBABIgBABIgBABIhUA/QgXAJgfACIgJADIgCABg");
	this.shape_21.setTransform(0.3313,3.5495);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CBFEFF").s().p("AlQCqQgCgHAEgPQA5gMBRgKICJgPQBwgfBngoQASgkAFgoQAEgdgCgyQgGgWgBgMQgBgSAHgSQAKABAJAEIABAAIA9B3QAdA1AKAQQAOAWADAHQAHAQAGAVIAFAXIACAJIAAgCIgBAFQgBALgHASQgIAXgHAHIgEAAQAAAAgBAAQgBAAAAAAQgBABAAAAQAAAAgBABIAAAKQgzAFgygJQgYgFhHgVQg4ADieASQiGAOhUABQgLgIgCgIg");
	this.shape_22.setTransform(61.1025,-52.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CBFEFF").s().p("ACwAqIhWgKQhMgIkXgYIgHggIAEABQABAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAIACgFQAAgBAAgBQAAAAAAgBQABgBAAAAQAAAAABgBIBRAIQAwACAggJQCOASAsAHQBpARBRAZIAAAJIgMgBQgZAJglAAIgXgBg");
	this.shape_23.setTransform(-55.875,-38.5417);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3CF2FF").s().p("APPJJQgKgDgUgJQglgqgDg/QgBgZABg6IAAhLQgChHgHhKIgBgEQgGg0gGgcIgGgaIgGgbIAAgCQgMgggTAEIgDABQgKACgTAXIgLAMIgCACQghAbgWAHQgnAPgVgeQgHgKgGgXIgIgTQgFgKgMgPQgFgFgIgFQgPgJgTACIgPAAQgvAAhRAJIggABIgjABIiVAJIgIAAQgngDgUgKQgJgEgGgGQgKgIgDgFQgjg1AngZQAJgFAQgDIASgDIBmgNIAtgFIAfgEIAHgBIArgMQAigJBcgcQAvgMAJgLQAJgLAAgqQA0gYAWgdQAcglghghQgQgRgTgKQgPgIgYgIQgegKhLAHQhBAHgyALQhIAKheAXIijApQhKASgmAGQhFAKgrgKQgUgEgUgJIgdgQQgLgGgLgJQgKgIAAgCQg4gRgagLQgNgGgVgNQgOgJgigMQgcgLgXgGQhSgXgMABQgzABgXATQgWASgLAwQgEATADAZIADAOQAEAXACAGIAGAGQAgAgAyAgIAYAOQAxAbA6AOIAYAFIApAIIBoAYIAOAFIB6BBIAIAFIAUASQAnAlAJAhQADAKAAAFQABAjgmAiIgEADIgTABQgMAAgIgCIhfgTQgGgCgZgKQgbgMgHgGIhohOQgrAzguAaIADgDQALgHALgQQALgPABgKIABgIIAAgIQgBgTgUAFIgHACQgJAEgBABQgFAJgHAPIAAABIgEAHQgJAMgMAFIgGADIgBAAQgYANgUADQgXAEgZgHIgHgDQgNgGgIgHQgUgOgMgMIgTgUQgIgHgJgFQgNgIgJADIgHADQgJAIgDAHIgBACIgEAaIgDAMQgJAigLAVQgLAVgSATIgCACIgGAEIAAgZQgagFgMgKQh8hBAgiRQAWhlBYh1IgGAAIABgCIAjghIAAAAIABgBQAGgEABgDQALgaAhg3IAGgLIABgBQAEgDAFgLIARgZIABgBQASgXAagNIAGgCIAigDIAGAAIAwARQANAFAaAFIAFABQF2BpGegtQCXgRBdgPQB6gUBzghQANgDAGAAQAIABAKAFIAQAJIADABIANAIQAEADALANIADAEQAKASAMAfQAMAjAIAQIAAgBQgJgDgLgBQgHASABASQABAMAHAWQABAxgEAeQgFApgRAkQhnAnhyAgIiIAPQhSAJg5ANQgDAOABAIQACAIAMAIQBTgBCHgPQCfgRA4gDQBGAVAZAFQAxAJA0gGIAAgKQAAAAAAAAQAAgBABAAQAAAAABAAQABAAABAAIADAAQATgbAFgkIAAABQACAGAAAJIACA/QAEDigGDnQgCBEACAcIAQBPIADALQAAAAAAABQAAAAAAABQgBAAAAABQAAABgBABIgEAIQgEAEgBAAIAAAAgAstiVIAGAhQEZAZBLAIIBXAJQA0ADAhgKIALABIAAgJQhQgahqgRQgsgHiPgTQggAKgvgDIhSgHQAAAAAAAAQgBABAAAAQAAABAAABQgBAAAAABIgBAFQgBABAAAAQAAAAgBAAQAAAAgBAAQgBAAAAAAIgEgBIAAAAgAn+AeIAAAAIAAAAg");
	this.shape_24.setTransform(-1.7222,-26.8725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AIyOCQgngFgwgNQgsgMgjgOIgngOQgQgHgQgMIguAcQgZAOgaAFQgYAFg1gEQgNgBghgJQgegJgTgIIglgNIgigLQhzAOingIQi7gMhcgCQieA7ifgSQhNgYgWgLQg6gbgRgqQgjhTAEhaQAAgPAEgZIAFgmIAAgDIACgEIgBAAIBcjRIABgFQAHgjADgXQAIhKABhsIADifQg5higUhYQgVhfAThhQAEgXAXgaQAcgdAMgPQAkguAzgrQAUgqAshPQAeg0AngZQAxghA1ASQEuBvFkgGQEmgGFvhaQBKgOAvAgQAdA2AyBqQAvBeAvBCQAqBQgEBgIABHEIABBXQABA0AEAlQBHCMAVBSQAhCIg2BhQhiCAh6AqQhKAahjAAQg0AAg7gHgAFKL8IADACQAGAJAQAQQALANAHAEIAEACQAUAJAaAJIAGACIAeAJIARACIArAGQAaAFARABQAZADBGAAICegQIAKgBIAAAAIgCAAIACAAIAKgDQAfgDAXgJIBUg+IABgBIABgCIABgBIABgBIABgBIABgCIABgBIABgBIABgBIABgCQAyg8ARg1QAEgLABgLQAEgaACgYIgBgXIgDgRIgohuIgphuQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgCgEIgBgCIgCgEIAAAAQgDgGgBgFIgPhOQgCgdABhEQAHjmgFjiIgCg/QAAgJgBgGIAAgCIgCgIIgFgXQgCgMgEgIIgHgSIgRgcQgKgQgdg2QglhFhCiVIgEgEQgLgOgEgCIgNgJIgCgBIgRgJQgKgFgIAAQgFgBgNAEQh0Agh6AVQhcAPiXAQQmeAul2hqIgGgBQgagFgMgEIgwgRIgHgBIghADIgHACQgaAOgSAWIgBABIgQAZQgGAMgEADIAAABIgHAKQggA3gLAbQgCACgGAEIgBABIAAABIgkAiIgBABIgEADIgjAmQgjAlgXAyQgXAvgGAvQgCARAAARIAAAKIABAiQABALACAQIAIAzQACAMAEAFQAQApAUAWQAXAYAjAHIABAAIAEABIADgBIAVgMQAIgEAEgEIAIgFIACgCQATgSALgWQALgVAJgiIAGgeIACgLQACgHAKgIIAHgCQAJgDANAHQAJAFAHAIIAUAUQALALAUAQQAJAGAMAGIAHADQAZAIAXgEQAUgDAYgOIABAAIAGgCQAMgHAJgMIAEgGIABgCQAGgPAGgIQABgCAJgDIAGgCQAUgGACATIAAAJIgBAIQgBAJgMAQQgLAQgLAIIgDACIgBABQg3ARgwARQgegDgNgDIgYgIIgZgMIgIgFIgLgMIgHgHQgEgFgDAAIgBAAIgCAAQgGABgGAOQgFANAAAOQgBALgLAUIgTAfQgMATghAQQgdANgSABIgLAAIgDgBIgEABIgFgBQgEAjgCA0IgFBRQgGBQgEAvIgOBnIgFAWIgCAJIgMAiIg/CcIgHAPIAAADIgBABIgHBcQAFAyAOAgQARAmAiAcIAWAHIAAAAIABAAIBhAbQAZAHAeABQAWABAhgCIAYgCQAngEAygPQAXgGANgGIARgFQAHgDAHAAIAHAAIA/gDIADAAIDjAQQCEAIBggGQgJgEgBgMIABgEQAGgNAJAAIAPABQAEABAHADIACABQAEACAJAIIAGAKQAFAEANAIIAXALIAVAIIAoANQAXAHARADIAHACQAWAFAggGIAQgEQAGgBAYgMIAbgSIAIgIIAFgKQAFgKAIgFIAHgCQAFAAALAFg");
	this.shape_25.setTransform(0.1252,0.5969);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3CF2FF").s().p("AgwBnQgkgHgagSIgKgJQgHgKgBgDIgEgRQgEgRABgRQAAgNAEgLIAAgBIgFAEIAFgEQADgJACgDQANgUAIgJQAFgFAMgIQAggUAbgIQAegIAhAGIANAEIAMAGIABAAQAXAPAIAHIAYAZIALAOQAHAKADAGIABAGQgBAYgKAUQgKASgUASIgOAJQgdAUgdAJIgEABQgqAAgagFg");
	this.shape_26.setTransform(-78.225,48.4342);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3CF2FF").s().p("Ah8FWQAJgPAIgRIAEgLIAYg9QAVg/AKgpQAEgMADgzQADgpAKgVIACgsIABgrQAAgcgCgdQgBgKgGgoQgFgRgBgHIgCgFQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAIABgBIAEAAQASgBAcgNQAhgOAMgVIATgeQALgVAAgKQABgOAFgNQAGgOAFgBIACgBQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAABAAQADgBAEAFIAGAHIAOAOIAKAGIgDAAIgSALQgxBFgbAwIgPAdIgNAeIgDAGIgKArQgFAbgDAPQgHAoAFA5IABAFIAAAMQAEAsAGARQALAcAhAMIAGADIAkAfQADABAAAGQAAALgdAQQgkATgwAjQgzAjgkAeIglAfIASgeg");
	this.shape_27.setTransform(-86.35,11.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CBFEFF").s().p("AhPE9IAHgQIAqhgIALgdIALgeIAKgiIADgKQADgNABgIIAQhtIALh+IABgeQADhEAFhCIAGABIADAAIAFAAIAEABIACAHIAGAZQAGAgABARQACAeAAAcIgBArIgCAtQgKAVgDApQgDAxgEANQgKApgVA+IgYA+IgDAKQgKAZgYAlIgDAEIgSAWQgKALgNAKg");
	this.shape_28.setTransform(-96.95,21.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CBFEFF").s().p("AAjD1IgBAAQgigHgXgZQgUgWgQgpQgEgFgCgMIgLhPIgBghIAAgHIAAgEQAAgMACgVQAFgsAYgyQAZgzAhgjIAngpIAAgBIABAAIAGAAQhYB3gWBjQggCQB8BDQAHAHALADIAUAFIgBAZIgjAVIgDABIgEgBg");
	this.shape_29.setTransform(-94.375,-39.075);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3CF2FF").s().p("AAyBNQgKgBgRgGIgNgIQgVgLgSgNIgHgFIgEgDIAAAAIgBgBQgggcgGgUQgCgEAAgGIAAgBIgBgLQAgg3AxAhIAIAEQAGABADADIAUAOQAKAJAGAIQAEAEAGALIAKARIAFAOIAAACIABAIQACAFABABQACABAAAGIgDAMQgBAGgEAEQgJAKgOAAIgCAAg");
	this.shape_30.setTransform(88.975,44.3359);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3CF2FF").s().p("AhMBtQgUgyAJgnQALgmA5gzQA3gzA3gVQgrA+giBEQgeA+geBRQgEAKgFAAQgIAAgNghg");
	this.shape_31.setTransform(36.822,56.3744);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#009EFB").s().p("AheA0QgIgRgIgzQgFgjAogPQAYgJA1gEQAlgCAeAWQAeAWALAmQAKAjg8AYQgyATg1ABIgBAAQgjAAgPgcg");
	this.shape_32.setTransform(5.9184,50.4127);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1918B8").s().p("AI0E7IgrgGIgqgGIgRgBIgegJIgGgCQgbgIgUgJIgEgCQgEgCgGgFIgIgJIgVgZIgDgCQgLgFgGAAIgHACQgJAGgEAJIgFAKIgJAIQgLAKgQAIQgVALgJACIgRAEQgeAHgYgHIgHgCQgRgDgXgHIgogNIgVgIQgLgEgNgHQgNgHgEgFIgHgJQgIgIgFgCIgCgBQgGgDgFAAIgPgBQgJAAgHAOIAAAEQABANAJACQhhAMiFgLIjjgYIgDABIg/AAIgHAAIgOADIgRAGIgkALQg5ASggACIgYACQhEADgpgMIgGgBIhbgbIgBAAIgBgCIgBgBIgCgEQgvgmgHhBQgFg2AXg9QAEgLAFgHIALgOIAHgIIAPgKIAygoIgBACQgDAMgBAMQgBARAEARIAFARQAAADAIAJIAJAJQAaATAlAGQAaAFAqAAIAEgBQAdgJAdgTIAOgKQAVgRAJgSQALgUAAgZIAAgFQgDgHgHgKIgLgOIgYgZQgFgEgbgRIgBgIQgGghAlgVQALgFBJgZQAogOBQgKQBRgLAqAEQBEAFAlARQAYALA9AlQgSAGAGAIQAFAHAWAFQA1ANAsgPQBygoB8AYQDAAkCghHQAggOA7geQAzgYAjgHQBegUBeBYIASAQQAOALAJATIgggZQgLgJgKABQgKAAgFALQgFAHgBAGIAAANIgZggQgFgGgJgHIgQgMQgIgHgPgFQgOgFgKAAQgUABgNAEQgFACgBABIgBADQgfAgAKAoQAHAdAhAnQgPADgcAMQgcANgLADQghAtAIAqQAGAoAlALQA3ARAtgWQAtgXACgtQABgFgCAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAgBIABgDQABgGAFgFQAKgKAHgNIABgCQABgEADAAIABgDIABgBIAFAEIAGAFQATAMAVAMIANAIQARAGALAAQAPABAJgLQAEgEACgGIACgLQAAgHgBAAQgCgBgBgGIgBgIIAAgDQAIgUAAgXIAAgGIgEgTIgIgQQA0BJAJBHQAJBHggBWQgIAXgjAnQgvA3g4AgQgLAHgSAIIgDABIgFABQglAFh5AOQhJAAgWgDgAFbg2Qg5AzgLAmQgJAnAUAyQAUAzAKgcQAehRAfg/QAihDArg+Qg3AVg4AzgAA8h7Qg2AEgXAIQgoAPAFAjQAIA1AIAPQAPAdAjgBQA2AAAygUQA8gWgKgjQgLgngegXQgbgTggAAIgIAAg");
	this.shape_33.setTransform(0.1033,54.8731);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#009EFB").s().p("AM2MqIABgBIAcgPQA4ggAwg3QAignAJgYQAghVgJhIQgJhIg1hIIAIAQIAEATIABAGQAAAWgIAUIgBABQAAACAAgBIAAgBIgFgNIgKgSQgGgLgEgEQgGgIgKgJIgUgOQgDgCgGgCIgJgEQgxghggA3IABALIAAABQAAAGACAFQAGAUAgAcIAAABIgCADQgCAAgCAFIgBABQgGANgLALQgFAFgBAGIAAADQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAABAAQABAAAAAFQgCAuguAXQgtAVg2gQQglgLgHgpQgHgqAggtQAMgEAcgMQAbgMAPgEQgggngHgcQgKgoAeggIABgDQABgBAGgCQANgFATAAQAKgBAPAGQAPAFAIAHIAQAMQAJAHAFAFIAYAhIABgOQABgFAEgHQAGgLAKAAQAJgCALAJIAhAaQgJgTgPgLIgRgQQhfhYheAUQgiAGgzAZQg7AeghAOQigBGjAgjQh7gZhyApQgsAPg2gNQgVgFgFgHQgGgIARgGQg8gmgZgKQglgShEgFQgqgDhQALQhRAKgoAOQhJAYgKAGQglAVAFAhIACAHIgBAAIgMgGIgNgEQghgGgfAJQgbAHggAVQgMAIgFAEQgIAJgNAVIgFALIgyAnIgOAKIgIAJIgKAOQgFAHgFALQgWA+AFA2QAGBBAvAlIADAFIAAABIACABIAAABIgWgHQgigbgRgmQgOghgEgxIAGhbIABgBQANgKAKgMIASgVIACgEIAkgfQAkgeA0gjQAxgjAkgTQAdgQAAgLQAAgGgDgBIglgfIgFgDQgggMgMgcQgGgPgFguIAAgMIgBgFQgFg6AHgoQADgPAGgaIAKgrIACgGIAOgeIAPgdQAagwAyhFIASgKIABgBIACAAIAUAKQANAFAMADQANADAeADQAxgRA2gRQAugaAsg0IBoBPQAGAFALAFIARAIQAWAKAJACQBGAPAZAFQANADAagCIAEgDQAmgjAAgjIgEgQQgJghgngmIgUgRIgIgFIh6hBQgFgDgJgCQg+gQgqgJIhBgNQg6gOgxgbIgYgOQgvgdgjgjIgGgGIgGgdIgDgPQgDgZAEgTQALgwAWgRQAYgUAzgBQAMAABRAWQAWAHAdALQAiANAPAIQAWAOAMAGQAOAGAaAIIApAOQAAACAKAIQALAJALAGIAdAPQAUAKAVAEQArAJBEgKQApgGBHgSQA4gOBsgcQBegXBIgKQAwgLBDgHQBIgHAfAKQAZAIAOAIQATAKARARQAhAhgcAlQgWAeg0AXQAAArgJAKQgJAMgvAMQhcAbgiAKIgrALIgHACIhMAJIhmANIgSADQgPADgKAGQgmAZAiA1QADAEAKAJQAGAGAJAEQAUAKAnADIAIAAICVgJIAjgBIAggCQBRgJAvABIAPgBQAUgCAOAJQAFADAIAIQAKAJAHAQIAEAJIAEALQAFAVAIALQAUAdAngNQAXgJAhgaIABgCIALgNQAVgXAIgDIADgBQAUgEALAhIABACIAGAcIAFAaQAIAwAEAhIABAKQAHA+ADBLIgBBKQAAA9ABAXQABAdAKAbQAMAeASAUIAdAMQACAAADgFIAFgIIACgEIAAgBIAFAKIADAAIAqBvQAYBBAQAuQACAFABAKQACAOgBAKQgCAcgEAWQgBALgEALQgRAygyA+IgBACIgBABIgBABIgBABIgBABIgBABIgBACIgBABIgBACIgBABIhUA/QgXAJgeACIgKAEIgCAAg");
	this.shape_34.setTransform(0.38,3.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CBFEFF").s().p("AlQCrQgBgHADgPQA6gNBRgJICIgPQBvggBogoQASgkAGgpQAEgegCgxQgGgVgBgNQgBgRAHgTIATAFIABAAIA9B3IAmBFQAOAWADAGQAGAOAHAXIAHAhIAAADQgCALgGATQgIAXgIAGIgEAAQgBAAAAAAQgBAAgBABQAAAAAAAAQgBAAAAABIAAAKQgzAGgygJQgbgFhDgUQg2ADigARQiHAPhTABQgMgHgCgJg");
	this.shape_35.setTransform(61.0775,-52.775);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CBFEFF").s().p("ACwArIhXgKQhKgIkZgZIgGghIAEABQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAIABgFQABgDACgBIBRAIQAvACAhgJQCTAUAnAHQBpAQBRAaIgBAIIgLAAQgYAHgkAAIgZAAg");
	this.shape_36.setTransform(-55.825,-38.3562);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3CF2FF").s().p("APPJKIgegMQglgrgEg/QgBgWABg9IAAhKQgDhEgHhOIAAgDQgHg1gGgcIgFgaIgGgcIgBgCQgLgfgTAEIgDABQgJACgUAXIgLAMIgCACQggAbgXAIQgnAOgVgdQgHgLgGgWIgEgKIgEgJQgHgPgKgKQgHgHgGgDQgNgJgVABIgOABQgvAAhRAJIghABIgjABIiUAJIgIAAQgogDgTgJQgJgEgHgGQgJgJgDgFQgjg1AngYQAJgHAPgCIASgEIBngMIBMgJIAGgCIArgMQAigJBdgcQAugMAKgLQAJgLAAgqQAzgYAWgdQAcglggghQgRgSgTgKQgPgHgYgJQgfgJhJAHQhCAGgxALQhIALheAXQhrAcg5ANQhHATgoAGQhFAKgrgJQgVgFgTgJIgdgPQgMgHgKgJQgLgIAAgCIgogNQgagIgPgHQgMgFgWgOQgOgJgigNQgdgLgXgGQhQgXgNABQgzAAgXAUQgWASgLAwQgFATADAYIADAPIAHAcQAAAEAGAEQAhAhAwAfIAYAOQAxAaA6AOIBCAOIBnAYIAPAFIB6BBIAHAGIAVARQAmAmAKAhIADAPQAAAjglAjIgEADQgbABgMgDQgZgEhGgPQgJgCgWgKIgRgIQgLgFgHgFIhohOQgqAxguAbIACgCQALgIALgPQAMgPABgKIABgIIAAgJQgCgTgUAGIgGACIgFACQgEABgBABIgGANQgEAIgCADIgBACIgEAGQgJALgMAHIgFACIgCAAQgYANgUAEQgXADgZgHIgHgEQgMgFgJgHQgRgNgOgNIgUgUQgHgIgJgFQgNgHgJADIgHACQgKAIgDAHIgBADIgDAZIgDAMQgJAhgLAWQgMAXgSASIgCACIgGADIABgZQgNgCgHgCQgKgEgIgHQh9hCAgiRQAWhjBZh3IgGAAIABgCIAjghIAAgBIAAAAQAHgEABgDQAIgTAkg/IAGgKIABAAQAEgEAFgLIARgaIABAAQARgWAbgPIAGgCIAigCIAGAAIAwASIAnAKIAFAAQFvBsGlgwQCggSBTgOQB8gUBxggQANgEAGAAQAIABAKAFIARAJIACABIANAIQADACANAOIADAEQAKASAMAgQAMAjAIAPIAAAAIgUgFQgHATABARQABANAHAVQABAxgEAeQgFAqgSAkQhoAohwAgIiJAOQhRAKg5ANQgEAPACAGQACAKALAHQBUgBCGgPQChgRA2gDQBDAUAcAFQAxAJA0gGIAAgKQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAIADAAQAUgbAFgkIAAABQABAGAAAJIACBAQADClgFEkQgBBPACARIAQBPIADALIgBAGQgDAFgCADQgDAEgCAAIAAAAgAstiVIAGAhQEaAaBKAIIBWAKQA1ADAggLIAMABIAAgJQhQgZhqgRQgmgHiVgUQggAJgvgDIhSgHQgBABgBADIgCAFQAAAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAIgEgBIAAAAg");
	this.shape_37.setTransform(-1.6853,-26.7503);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AI1OEQgngFgwgMQgsgMgkgNIgmgNQgRgHgQgLIguAcQgaAPgbAFQgYAEg1gFQgNgBghgKQgegJgTgIQgOgFgXgHIgjgKQh0AWipgNQi7gThbgEQibA9ihgWQhMgYgXgLQg5gbgRgqQgjhRADhbQAAgMAEgcIAFgmIAAgDIACgEIgBAAQA/iLAdhGQACgCAAgDQAHgjADgXQAJhPABhnIADifQg6hkgThYQgWhgAUhgQAFgXAXgaQAcgdAMgOQAhgqA2gwQAUgqAshOQAdg1AngZQAxghA2ATQErByFngJQEegHF1hZQBIgQAyAhQAdA3AyBqQAvBfAuBBQArBQgFBfQgBD4ADDOIABBXQABAzAEAmQBICKAWBVQAhCIg3BhQhjB+h4AsQhMAchlAAQgyAAg4gHgAFNMCIADABIAVAaIAIAJQAGAFAEACIAEACQAUAJAbAHIAGACIAeAJIARACIAqAGIArAGQAWACBJAAQBngLA3gIIAKgBIgBABIABgBIAKgDQAggDAWgJIBUg/IABgBIABgBIABgBIABgCIABgBIABgBIABgBIABgCIABgBIABgBQAyg+AQgyQAEgLACgMQADgVADgcQAAgKgCgOQgBgKgCgGIgohuIgphvQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAgBIgDgEIAAgCIgDgEIAAAAIgDgLIgQhOQgCgSABhPQAFkjgDimIgChAIgBgPIAAgBIgHggIgGgUIgIgRIgQgcIgnhGQgihBhFiaIgEgEQgLgNgEgDIgNgIIgCgBIgRgJQgKgFgIgBQgGAAgNAEQhxAgh8AUQhTAOigASQmlAwlvhrIgFgBIgngKIgwgSIgGAAIgiADIgGABQgbAPgRAWIgBAAIgRAaQgFALgEAEIgBAAIgGALQgkA+gIATQgBADgHAEIAAABIAAAAIglAjIAAABIgnApQgiAjgZAzQgXAwgGAuQgCAVAAANIAAAEIAAAHIABAhIALBPQACAMAEAFQAQApAUAWQAXAZAjAHIABAAIAEABIADgBIAVgMIAMgHIACgCIAGgDIACgCQASgSAMgXQALgWAJghIAGgeIACgLQACgHAKgIIAHgCQAJgDANAHQAJAFAHAIIAUAUQAOAOARANQAJAHAMAGIAHADQAZAHAXgDQAUgEAYgNIACAAIAFgCQAMgHAJgMIAEgGIABgCQACgDAEgIIAGgMQABgCAEgBIAFgCIAGgCQAUgGACATIAAAJIgBAIQgBAKgMAQQgLAPgLAIIgDADIgBAAQgyAPg1ATQgdgDgNgDQgMgDgNgFIgZgNIgGgEIgNgNIgHgHQgEgFgDABQgBAAAAAAQgBAAAAAAQAAgBAAAAQAAAAABAAIgCAAQgGABgFAOQgFANgBAOQgBALgLAUIgTAfQgMAUghAPQgdAOgSAAIgEAAIgHAAIgHAAIgFgBQgEAjgCA0IgFBRIgLB/IgPBoQgBAIgDANIgDAKIgLAiIgLAeIgLAdIgqBgIgHAQIAAACIAAABIgHBbQAFAxAOAhQAQAmAiAcIAWAHIABAAIBbAaIAGABQApANBEgEIAYgBQAggDA5gRIAkgMIARgFIAOgDIAHAAIA/gBIADAAIDjAXQCFALBhgLQgJgDgBgNIAAgEQAHgNAJgBIAPABQAFAAAGADIACABQAFACAIAIIAHAKQAEAEANAHQANAHALAEIAVAIIAoANQAXAIARADIAHACQAYAGAegHIARgDQAJgDAVgLQAQgIALgKIAJgIIAFgJQAEgKAJgFIAHgCQAGAAALAFg");
	this.shape_38.setTransform(0.147,0.8145);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3CF2FF").s().p("AgwBnQgkgHgagTIgKgJQgHgKgBgDIgEgRQgEgQABgSQAAgLAEgMIAAgBIgFADIAFgEQADgIACgDQANgVAIgIIARgNQAggUAbgIQAfgJAhAHQAFABAIADIALAGIABAAIAfAWQARAQAIAJIAKAOQAIAKACAGIABAGQgBAYgKAUQgKASgUASIgOAKQgcASgeAKIgEABQgpAAgbgFg");
	this.shape_39.setTransform(-78.325,48.5637);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3CF2FF").s().p("Ah8FWQAJgPAIgRIAEgLIAYg+QAUg9AMgqQADgOAEgxQADgpAKgVIABgsIACgrQAAgcgCgeIgIgxIgEgYIgDgFQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAIAFgBQASgBAbgNQAigPALgUIAUgfQALgUAAgLQABgOAFgNQAFgOAGgBIACAAIABABQAEgBAEAFIAGAIIAMAMIABAAQABADAFABIAEADQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAABgBAAIgRAJQgwBCgdA0QgGAJgJAUIgOAeIgCAGIgKAqQgGAcgCAPQgHAoAFA5IABAIIAAAJQADAuAHAPQALAcAgAMIAGADIAUARIARAOQACACAAAFQABALgdAQQglAUgwAiQg0AjgkAeIgkAfIASgeg");
	this.shape_40.setTransform(-86.4139,11.525);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CBFEFF").s().p("AhPE9IAGgQQAPglAbg7IAWg7IALgiIAHggIAPhsQAGgsAGhSIACgeQAChDAGhDIAFABIAEAAIAEAAIAFABIACAIIAFAYQAGAhABAQQACAeAAAcIgBArIgCAtQgKAVgCApQgEAwgDAOQgMAqgVA9IgXA+IgEAKQgLAbgXAjIgDAEIgSAWQgJALgNAKg");
	this.shape_41.setTransform(-97,21.425);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CBFEFF").s().p("AAjD2IgBAAQgjgIgWgZQgUgWgQgpQgEgFgCgMIgLhPIgBgiIAAgGIAAgEQAAgMACgVQAGguAXgwQAZgzAhgjIAngpIABgBIAAAAIAHAAQhZB4gWBiQggCQB8BDQAIAHAKAEIAUAFIgBAZIgjAUIgDABIgEAAg");
	this.shape_42.setTransform(-94.375,-39.025);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3CF2FF").s().p("AAyBNQgLgBgQgGIgNgIIgogYQgCgDgEgBIgEgEIgBAAIAAgBQgggbgGgUQgCgFAAgGIAAgBIgBgKQAfg5AyAiIAIAEQAFABADADIAUAOIASAQQAGAIADAIIAKAQIAFAOIAAABIAAABQAAADABAFQABAGACABQADABgBAGQgDAPgFAHQgJAKgOAAIgCAAg");
	this.shape_43.setTransform(89.05,44.4777);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3CF2FF").s().p("AhMBuQgUgzAKgmQAKgnA5g0QA3gzA3gVQhQB1g4CeQgEAKgFAAQgJAAgNghg");
	this.shape_44.setTransform(36.847,56.7212);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#009EFB").s().p("AhdA0QgJgQgJg0QgEgjAogPQAZgJA1gEQAkgCAeAWQAeAWAMAmQAKAjg9AYQgyATg0ABIgCAAQgjAAgOgcg");
	this.shape_45.setTransform(5.8996,50.8127);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1918B8").s().p("AI1E8IgrgGIgqgGIgRgBIgegJIgGgBQgdgIgRgIIgEgCQgGgCgMgOQgRgRgFgIQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQgMgFgFAAIgEAAIgDACQgIAFgFAKIgFAKIgJAIQgPAMgMAFQgWAMgJACIgQADQgfAHgYgHIgHgCQgQgDgYgHIgogNIgVgIQgLgEgNgHQgOgHgEgFIgHgJQgHgHgFgDIgCgBQgIgDgEAAIgPAAQgJABgGAOQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAANAKACQhhAOiGgNQiYgThLgIIgDAAQgvABgPgBIgIAAQgGAAgIADIgQAFIglAMQg7ASgeACIgXACQhEACgpgMIhggcIgBgBIgCgCIAAgBIgDgEQgvglgGhBQgGg2AXg9QAEgLAFgHIALgOIAHgIIAHgFIAIgFIAygoIgBACQgDAMgBAMQgBASAEAQIAFARQAAADAIAJIAJAJQAbATAkAHQAaAFAqAAIAEgBQAfgKAbgSIAOgKQAUgRAKgSQALgUAAgZIAAgGQgCgGgIgKIgLgOQgHgJgRgQIgfgWIgCgHQgFgiAlgUQALgGBIgYQApgOBQgKQBQgKArAEQBEAFAkARQAZALA8AlQgRAHAGAIQAFAHAWAFQA1ANAsgPQBygoB8AXQC/AkChhHQAggPA7geQAzgZAjgHQBegTBeBYIASAPQAOALAKAUIghgaQgLgJgJABQgKABgGAKQgEAIgBAFIgBANIgZggQgFgGgJgGIgQgMQgIgHgPgFQgOgGgKABQgXABgKAEIgGADIgBADQgeAgAKAnQAHAeAgAmQgOAEgcAMQgcANgMADQggAtAHAqQAHAoAlALQA3ARAtgWQAtgXACgtQAAgBAAgBQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIABgDQABgGAFgFQAKgKAGgOIABgBIAEgFIACgCIAAgBIABAAQABACADACQAEABADADIAoAYIANAIQARAGALABQAPAAAJgKQAGgHACgPQABgGgDgBQgBgBgCgGIgBgHIABgEQAIgVAAgVIgBgHIgEgTIgIgQQA1BJAJBIQAJBGggBVQgJAYgiAnQguA1g5AiIgcAPIgBABIgIABIhKAKIhTAKQhLAAgVgCgAFbg1Qg5A0gKAmQgKAnAUAyQAVAzAKgcQA5idBQh1Qg3AVg4AzgAA8h5Qg1ADgYAJQgpAPAFAkQAJA0AIAPQAPAdAjgBQA2AAAygUQA9gXgLgjQgLgngegWQgbgTggAAIgIAAg");
	this.shape_46.setTransform(0.1186,55.0731);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#009EFB").s().p("AM3MqIACgBIAbgPQA6giAug1QAignAIgYQAhhVgJhHQgJhIg2hJIAJAQIAEATIAAAHQABAWgJAUIAAABIAAABIAAgBIgGgOIgJgRQgEgIgGgIIgRgQIgUgOQgDgDgFgBIgJgEQgygigfA5IABAKIAAABQAAAGABAFQAHAVAfAbIABABIgCADIgEAFIgBABQgHAOgKAKQgFAFgBAGIAAADQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABQAAABAAACQgCAuguAXQgtAWg3gRQglgLgGgpQgIgqAhgtQAMgDAbgNQAcgMAPgEQghgmgHgeQgKgnAeggIABgDIAHgDQAKgEAWgBQAKgBAPAGQAPAFAIAHIAQAMQAJAGAFAGIAZAgIAAgNQABgFAEgIQAGgKAKgBQAKgBALAJIAgAaQgJgUgOgLIgSgPQhfhYheATQgiAHgzAZQg7AeghAPQigBGjAgjQh7gXhyAoQgsAPg2gNQgWgGgFgGQgGgIASgHQg9glgYgLQglgRhEgFQgqgEhQAKQhRAKgoAOQhIAYgMAGQgkAUAEAiIACAHIgBgBIgLgFQgIgDgFgBQghgHggAJQgbAIggAUIgRANQgIAIgNAVQgCADgDAIIgyAoIgIAFIgGAFIgIAIIgKAOQgFAHgFAMQgWA9AFA2QAHBBAvAlIACAEIABABIABACIAAABIgWgHQgigcgQgmQgOgggFgxIAGhbIABgBQANgKAKgMIAUgZIACgCIAigcQAkgeA0gkQAxghAlgVQAdgPgBgMQAAgFgCgCIgRgNIgUgSIgGgCQgggMgLgdQgHgPgEgtIgBgSQgFg5AHgpQACgPAHgaIAKgrIACgGIAOgdQAJgUAGgJQAdg1AwhBIARgKIADAAIAUAJQAQAHAJACQANADAeADQA2gTAxgOQAwgcAqgzIBoBPQAIAGAaAMQAWAKAJACIBfAUQANACAagBQACAAACgDQAmgkgBgiQAAgFgDgLQgJghgngmIgUgRIgIgGIh6hAQgFgEgJgBQg+gQgqgJIhBgNQg8gQgvgaIgYgOQgxgfggghIgGgHQgFgPgCgOIgDgOQgDgZAFgTQAKgwAWgSQAYgTAzgBQALAABSAXQAXAHAcAKQAiANAOAJQAXAOAMAFQAOAGAaAJIApANQAAACAKAJQALAJALAGQAnAWAeAGQArAKBFgLQAogGBIgSQA4gOBrgcQBfgYBHgKQAxgLBDgHQAkgDATAAQAeAAASAHQAZAIAOAHQATALARARQAhAhgcAlQgWAdg0AYQAAArgJAKQgJAMgvAMQhdAcgiAIIgrANIgGABIgfAEIgtAFIhmANIgSADQgPADgKAGQgmAYAiA2QACAEALAKQAGAFAJAFQATAJAoADIAkABIB5gKIAigBIAhgCQBRgIAvAAIAPgBQAUgBAOAIQAEADAIAIQALALAGAOIAJAUQAEAUAIAMQAVAeAngOQAXgJAggaIACgCIALgNQATgWAKgEIADgBQATgEALAgIABADIALA2QAJAvAEAmIAAgEIAAAKQAIBKACBAIAABJIABBUQABAcALAcQALAeASAUQAPAHAPAFQABAAAEgEQADgDABgGIACgEIAAgBIAGAKIADABIApBuIApBvQACAGABAKQACAOgBAKQgCAcgEAVQgBAJgEANQgSAzgxA9IgCACIgBACIgBABIgBABIgBABIgBACIgBABIgBABIgBABIhUA/QgXAJgeAEIgKADIgBAAg");
	this.shape_47.setTransform(0.38,3.7995);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CBFEFF").s().p("AlQCrQgBgGADgQQA5gNBRgJICJgPQBugfBpgqQASgjAFgpQAEgdgBgyQgGgVgBgNQgBgSAHgSQAGAAANAFIABAAIA8B3QAbAxAMAUIARAcQAHAQAGAVIAGAXIABAJIAAgCIgBAFQgBALgHATQgIAXgHAGIgEAAIgEACIAAAKQg0AHgxgKQgbgFhEgTQgzADijASQiFAOhVABQgLgHgCgJg");
	this.shape_48.setTransform(61.0775,-52.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CBFEFF").s().p("ACwArIhXgJQhngMj8gWIgGghIAEABQABAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAQABgIADgCIBRAIQAvADAhgJQCOATAsAIQBpARBRAZIgBAJIgLgBQgYAIgkAAIgZgBg");
	this.shape_49.setTransform(-55.825,-38.2562);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#3CF2FF").s().p("APPJKQgPgFgPgHQglgrgEg+QgBgXABg9IgBhLQgCg5gIhYIABADIgBgGQgGgzgGgeIgFgaIgGgcIgBgCQgMgggTAEIgDABQgJAEgUAVIgLANIgBACQghAbgXAIQgmAPgVgeQgIgMgFgVIgIgTQgGgOgLgLQgIgIgFgCQgNgJgVABIgPABQgvAAhRAJIggACIgjABIicAJQgpgDgTgKQgIgEgHgGQgKgJgDgEQgig2AngYQAJgGAPgDIASgDIBngNIAsgFIAfgFIAHgBIArgMQAigJBdgbQAugNAKgLQAIgLABgqQAzgZAWgdQAcglggghQgRgRgTgKQgPgIgYgIQgTgGgeAAQgSAAglADQhCAGgxALQhIAKheAYQhsAdg4ANQhHATgpAGQhEAKgrgJQgegHgngWQgMgGgLgJQgKgIAAgCIgogOQgbgIgOgGQgLgFgXgOQgPgJghgNQgcgLgYgHQhSgXgLABQgzABgXATQgWASgLAvQgEATADAZIADAPQADAVADAIIAGAGQAgAhAxAgIAZAOQAvAaA7APIBCAOIBnAYIAPAFIB6BBIAHAGIAUARQAnAlAKAhQADAKAAAGQAAAiglAkQgDADgBAAQgbABgMgCIhfgUQgJgCgWgLQgbgLgIgGIhohPQgqAyguAbIACgCQALgIALgQQAMgPABgKIABgIIAAgIQgCgTgUAFIgGACIgFACQgEABgBACIgGANQgEAIgCADIgBABIgEAHQgHAKgNAHIgGADIgCAAQgYANgUADQgXAEgZgIIgHgDQgPgIgGgEIgfgbIgUgUQgHgIgJgFQgNgHgJADIgHACQgKAIgCAHIgCADIgEAgIgCAFQgKAkgKATQgLAWgSATIgDACIgGADIABgZIgUgFQgKgDgIgHQh9hDAgiRQAWhiBah4IgHAAIACgCIAiggIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAgBQAGgEABgDQAIgUAkg9IAGgKIABgBQAEgEAFgLIARgZIABgBQASgXAagNIAGgCQAWgDAMAAIAHABIAwASQAQAFAWAFIAFABQFrBrGpgxQCngTBMgNQB9gUBwggQAOgEAFABQAIAAAKAFIARAJIACABIANAIQADACANAOIADAEQAKASAMAgQAMAjAIAQIAAgBQgNgEgHAAQgHASABASQABAMAHAWQABAygEAdQgGApgRAkQhqAqhvAfIiIAPQhRAJg5ANQgEAPACAHQACAJALAHQBUgBCGgPQCjgSA0gDQBEAUAbAFQAxAJAzgGIABgKQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAIADAAQATgdAFgjIABABIADBPQACCTgEE3QgBBOACASIAQBPIADAMIgBAFIgFAIQgDAFgBAAIgBgBgAstiVIAGAhQD7AXBpAMIBWAJQA1AEAggLIAMABIAAgJQhRgZhpgSQgrgIiQgTQggAJgvgDIhSgIQgCACgBAIQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgEgBIAAAAg");
	this.shape_50.setTransform(-1.6843,-26.6975);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AI2OGQhHgJhgggIgmgNQgQgGgRgLIgvAdQgaAOgcAFQgXAFg1gGQgOgCgggKQgfgJgTgIQgOgFgXgHIgjgKQh0AciqgQQi7gZhcgEQiXA/ikgYQhOgagUgKQg4gcgSgpQgihRAChaQAAgMAEgcIAEgmIAAgDIADgEIgBAAQARgoAdhAIAvhpIABgGQAHgiADgXQAKhTABhiIADihQg5hkgVhXQgWhhAVhgQAEgXAYgaQAdgdALgOQAigrA1guQAUgrArhOQAeg1AngZQAxghA1ATQEpBzFpgJQEYgIF8hYQBHgRAzAhQAdA3AyBqQAuBfAvBBQArBPgFBgQgDEvAECYIACBWQAAA0AGAmQBICMAWBTQAhCIg3BgQhkB+h3AtQhOAdhoAAQgwAAg1gGgAFOMFQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAGAJARAQQAMAOAGACIADACQARAIAeAIIAGACIAdAJIARABIArAGIArAGQAVACBKAAIBUgKIBKgLQAWgDgMACIgBABIACgBIAJgDQAegDAYgJIBTg/IABgBIACgCIABgBIABgBIABgBIABgCIAAgBIABgBIACgCQAyg9ARgzQAEgNABgKQAEgUACgdQABgJgCgPQgBgKgCgGIgphuIgphvQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAIgDgGIgCgEIAAAAQgEgGAAgFIgRhPQgCgSABhOQAFk2gDiUIgChAQABgJgCgGIAAgBIgBgIIgLgrIgIgSIgRgcQgMgUgagxQgagxgdg/IgxhsIgDgEQgLgNgEgDIgNgIIgDgBIgQgJQgKgFgIAAQgHgBgMAEQhwAgh9AUQhNANimATQmpAxlrhrIgFgBQgWgFgQgFIgxgSIgGgBQgMAAgWADIgHACQgZANgTAXIgBABIgQAZQgFALgFAEIAAABIgHAKQgjA9gIAUQgCADgFAEQgBAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAABIgkAiIgBABIgFADIgiAmQghAigaA1QgYAwgFAtQgCAVgBANIABAFIgBAGIABAhIAMBPQACAMAEAFQAQAqATAWQAXAZAkAHIABAAIADABIAEgBIAVgMQAFgBAGgGIAEgCIAFgDIACgCQATgTALgWQAKgTAKgkIABgGIAHgjQACgHAJgIIAIgCQAIgDANAHQAKAFAHAIIATAUIAgAcQAGAEAPAIIAHADQAZAIAXgEQAUgDAYgNIABAAIAHgDQAMgIAIgKIAEgHIABgBQACgDADgIIAGgNQABgCAFgBIAEgCIAHgCQAUgFABATIAAAIIgBAIQgBAKgLAQQgLAQgLAIIgDACIgBABQgyAPg1ASQgdgDgNgDQgKgCgPgGIgUgKIgGgDQgEgBgBgDIgCAAIgMgMIgGgIQgEgFgDABIgCgBIgCAAQgFABgFAOQgFANgCAOQAAALgLAUIgTAfQgMAUghAQQgdANgSAAIgFAAIgGAAIgHAAIgGgCQgDAjgDA1IgEBRIgQCbIgQBhIgCAKIgLAiIgXA7QgaA7gPAlIgHAQIAAACIAAABIgHBbQAFAxAOAgQAQAmAjAcIAVAHIAAAAIACAAIBfAcQApANBEgDIAYgBQAegDA7gSIAlgLIAQgGQAIgDAGAAIAHAAQAPABAwAAIADAAQBKAHCZAUQCFAMBhgOQgJgCAAgNQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAHgOAJgBIAPABQAEAAAIADIABABQAGACAHAIIAHAJQAEAEAOAIQANAHALADIAVAIIAoANQAYAIAQADIAHACQAXAHAfgHIARgEQAIgCAXgLQAMgGAPgMIAIgIIAGgKQAFgKAIgFIADgBIAEAAIABAAQAFAAALAEg");
	this.shape_51.setTransform(0.1499,0.942);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.8,-90.6,219.7,181.2);
p.frameBounds = [rect, new cjs.Rectangle(-109.6,-89.6,218.9,179.9), new cjs.Rectangle(-109.8,-89.8,220,180.9), new cjs.Rectangle(-110,-89.8,220.3,181.4), new cjs.Rectangle(-110,-89.8,220.4,181.6)];


(lib.PuppetShape_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.WarpedAsset_7("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3CF2FF").s().p("AguBoQgjgGgcgRIgKgJQgHgGgCgGIgFgSQgDgQABgRQAAgJADgQIABgBIgFAEIAEgFIADgFIADgGIAUgeQAFgFANgIQAfgVAcgIQAdgIAiADIANAEQAEABAIAEIABAAQAXAOAHAGQAPANALANIAKAOQAIAIACAIIABAGQgCAYgKAUQgJATgTASIgPALQgcATgdALIgEABIgNAAQgfAAgXgEg");
	this.shape.setTransform(-77.7,47.3442);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3CF2FF").s().p("AhrE4QAEgGABgEQAQgnAHgZIARgzQAJgfAFgWQAEgOAEgzQAEgpAKgXIADhWIgBg5IgHgxQgFgPAAgGIgCgEQgBgBAAAAQAAgBAAAAQAAgBABAAQAAAAABgBIAAAAIAEAAQATgEAagOQAhgSALgSIASgdQAKgUABgMQACgRACgHQAEgLAIgHIACAAIACAAQADAAAEAEIAHAGIAMAKIABABIAKAFQAAAAAAAAQABAAgBAAQAAABgBAAQAAAAgBAAIgRALQgwBGgaAxIgfBCIgKAqIgIArQgHAjADA+IABASQADAtAGAPQAHARAMAIQAHAHASAJIAGACIAUARIAIAGIAJAHIACACQACACgCADQgEALgFAFIgWAOQhbA3hOBFIgkAfQAZgrAJgUg");
	this.shape_1.setTransform(-85.8525,10.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CBFEFF").s().p("AhQE9IAHgQIAphgIAMgeIAXhLIAViEQAIg9AFhDIALieIAFAAIAEAAIAEAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQACABABAGIAFAVQAEAUADAdIABA5IgDBXQgKAXgEApQgEAygEAOQgFAWgJAfIgRAzQgHAZgQAnIgEAJQgLAbgXAkIgDAFIgSAVQgKAMgNAKg");
	this.shape_2.setTransform(-96.375,20.7667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CBFEFF").s().p("AgSDQQgUgRgTgiQgFgGgCgJIgKguQgCgKgCgOIgDgeIAAgFIAAgFIABggQAIg0APgpQARgvAjgsQATgbAJgJIAJgKIABgBIAAAAIAHgBQhYCWgMBFQgTB1B6BHQANAIAaACIAAAYIgiAXIgHAAIgCABQgjgGgWgTg");
	this.shape_3.setTransform(-94.225,-38.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3CF2FF").s().p("AAxBNQgJAAgRgHIgNgIIgmgYIgIgGIgEgEIAAAAIgBgBQgdgagJgXQgCgEAAgHIAAgBIgBgKQASgaASgFQATgFAaAQIAIAEIAJAFIAUAOIARASQAFAGAEAJIAKARIAFAOIAAABIAAABIABAIIADAGQACADgBAFIgCALQgCAGgEAEQgKAJgNAAIgCAAg");
	this.shape_4.setTransform(88.4643,43.3917);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3CF2FF").s().p("AhQBkQgSg4APgfQASgmAzgwQA6g4AugJQgkAxgnBTIhACKQgEAHgEAAQgKAAgNgng");
	this.shape_5.setTransform(36.3515,53.935);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#009EFB").s().p("AgpBQQg/gHgChdQAAgjAmgPQAegNAqADQAoACAbAUQAfAXAFAnQAEAng5AXQgoAPgkAAIgTgBg");
	this.shape_6.setTransform(5.841,47.4552);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1918B8").s().p("AIwE7IgrgGIgqgHIgSgCQgIgCgVgJIgGgCQgXgIgYgMIgEgCQgFgDgMgOQgQgRgGgJIgDgCQgNgGgDABQgEAAgDACQgHAEgGAMIgBAEQgCAEgDACIgIAIQgNAMgMAGQgYALgFABIgQAEQgfAGgWgEIgHgCQgjgGgsgQIgUgJQgVgHgTgQIgJgKQgGgJgFgDIgDgBIgKgFQgKgDgFAAQgJAAgGANIgBAEQACAMAIAFInDgKIgDAAQgoAEgYABIgIABIgNADIgRAGQgZAJgLADQgwAMgpAFIgYADQg/AGgwgLIgGgBIhdgYIgBAAIgBgCIgBgBIgCgEQgugsgGg9QgFgyAVhBQAEgNAGgGIALgPIAIgJIAHgFIAHgFIAygpIgBACQgDAQgBAJQgBASAEAQIAFARQACAGAGAGIAKAJQAdAQAjAHQAcAFAogBIAEgBQAdgLAcgUIAOgKQAUgSAJgSQAKgUACgaIgBgGQgDgHgHgJIgLgOQgLgMgOgNQgLgKgUgKQgCgFABgDQAFgdABgDQAGgMAZgPQAMgHBJgbQAigNBOgOQBVgQAiADQA8AFAsARQAVAJBCAlQgQATAvAHQAuAHAtgMQA2gOAvgEQBBgFBDALQBdAQBGgDQBigEBXgmIBbgoQAygVAkgEQBdgLBYBXQAGADAEAEIAJAJQAOAMAJASIgggZQgXgTgNAUQgFAGgBAHIgBANIgZghIgOgNIgQgNQgIgHgOgGQgOgFgKgBQgPAAgSAEIgGACIgDAEQgaAjAIAlQAHAcAfApQgQAEgaAKIgoAQQgcAhADAtQAEAuAkANQA4AVAogTQAngSAPgyQABgFgCgBIgBgBIABgEQABgFAFgFQAKgMAHgMIAAgBQABgDADgCQABAAAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIABgBIAFAEIAHAGIAnAYIANAIQARAHAKAAQAOABALgJQAEgEABgGIADgMQABgFgDgDIgDgGIAAgHIAAgEQAIgWAAgUIAAgHIgEgTIgIgRQAwBQAJBEQAJBFgbBZQgIAZgjAmQguAzg6AjIgcAOIgDABIgGAAIieAOQhGgCgagDgAFehGQg0AxgSAlQgOAgASA4QASA4AMgYIBBiLQAohSAkgyQgvAKg6A3gAgJiDQgmAPAAAjQACBdA+AHQAuAFAygTQA5gWgEgnQgFgogfgXQgbgUgogCIgOgBQgiAAgYALg");
	this.shape_7.setTransform(-0.0752,53.5886);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#009EFB").s().p("AMyM5IACgBIAcgOQA6gjAugzQAjgmAIgZQAbhZgJhGQgJhEgxhQIAIARIAFATIAAAHQAAAUgIAWIAAABIgBABIAAgBIgFgOIgJgSQgEgJgGgGIgRgSIgTgOIgJgFIgJgEQgbgQgSAFQgTAFgRAaIABAKIAAABQAAAHABAEQAJAYAdAaIAAABIgCADIgEAFIAAABQgHAMgKAMQgGAFgBAFIAAAEIABABQACABgCAFQgOAzgnASQgoATg4gVQgkgNgEgvQgEgtAdghIAogQQAagKAPgEQgegpgHgcQgIglAagjIACgEIAHgCQASgEAOAAQAKABAOAFQAPAGAIAHIAQANIAOANIAZAhIABgNQABgHAEgGQAOgUAWATIAhAZQgKgSgOgMIgJgJQgDgEgHgDQhXhXheALQgjAEgyAVIhbAoQhYAmhhAEQhHADhcgQQhEgLhBAFQguAEg2AOQguAMgtgHQgwgHARgTQhCglgVgJQgsgRg9gFQghgDhVAQQhOAOgjANQhIAbgMAHQgZAPgGAMQgCADgEAdQgBADACAEIAAAAQgIgEgEgBIgOgEQghgDgfAJQgbAIgfAUQgNAIgFAGIgLAOIgKAQIgCAFIgDAGIgFAEIgsAlIgIAFIgGAFIgIAJIgLAPQgGAHgEANQgWBBAGAyQAGA9AtAsIADAEIABABIABACIAAAAIgXgGQgggfgRglQgOghgGgxIAIhdIABgBQAOgMAJgKIAVgZIACgCIAigdQBOhEBcg4IAWgOQAEgEAFgMQACgDgCgCIgCgCIgJgHIgIgGIgUgRIgGgCQgSgJgIgGQgLgJgHgRQgGgPgEgtIgBgSQgDg/AGgjIAKgqIAKgqIAfhCQAZgwAxhHIARgLIADgBIAVAIQAPAEAJABIArACIBmgqQAvgiApg4IBqBLQAHAGAbALQATAJALACQArAJAzAIQANACAagCQABAAACgEQAkgmAAglQABgGgEgMQgKgjglgoQgHgHgOgLQgFgFgCgBIh6g7IgPgEIhogSIgVgBIgVgBIgYgCQg7gGgzgRIgZgLQgtgVgogeIgHgFQgDgIgEgUIgEgOIgCgWQgBgNADgJQAQgyATgVQAVgYA0gPQAOgEBMAGQBLAGAZAMIAUAJIASAHQAbAIA5AKQAJAKAGAEQAGAEAQAGQAKAEAUALQAVAJAUACQBLAICTgkQCrgqCngJQA9gGA3AFQApAEAPADQAgAGAUANQAdATAJAIQASAPAOAVQAaApgaAeQgVAYg0APQgBAmgOAMQgMAKgoAGQhXAQgpAGIgsAIIgHAAIhMADIhlAEIgSADIgNADQgGACgFAEQgVARABAXQABARAOAbQACAGALAJQAJAJAGACQAYAMAjAFIAlADIB2gBIAjABIAgABQBDADA/AFIAPABQAUABAOAJQAFADAIAJQAJAKAHARQAFAJADALIAFARQADAKAFAGQAMAQAOAFQANAEAVgFQAUgGAkgXIAMgMQASgSAMgEIADgBQAMAAAHAJQAFAGAGAOIABACIALA0QAGAnAGArIABAGQAGBNACA6IAABJQgBA6ACAZQACAcAJAbQALAeARAVQAYALAHACQACAAACgEQAEgDACgFIABgFIAAAAIAGAJIADACIBQDcQABAGABALIACAXQgBAagDAYQgCANgEAKQgTA2guA9IgBABIgBABIgBACIgBABIgCABIgBABIgBACIgBABIAAABIgBABIhWA/QgXAIgfADIgKADIgBAAg");
	this.shape_8.setTransform(0.25,1.67);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CBFEFF").s().p("ADOCpQgngKg5gYIm1gMQgKgJgCgJQgCgJADgOQA+gJBNgBQAqAABgACQBwgRBugXQASgiAHglQAFgeAAguQgGgUgBgOQAAgSAGgRIAUAIIABABIA9B8IAkBGIAPAdQAHAQAFAUIAFAeIABgBIgBAFQgDAKgGAPQgJAVgIAHIgEgBQgBAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAABIgBAJQgyAAgygOg");
	this.shape_9.setTransform(61.185,-51.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CBFEFF").s().p("AkSAAIAEABQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQABgHACgCIBSgEQAugEAjgMQBzgCBJAEQBmAHBVAUIAAAJIgMAAQghANg0AAQg5gCgbAAQhKABhqAEIi0AGg");
	this.shape_10.setTransform(-55.95,-41.6196);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3CF2FF").s().p("APOJKIgegMQgkgwgEg7QgBgaAAg4IABhKQgDhGgHhKIAAgDQgDgjgJgqIgKgzIgBgCQgGgOgFgGQgIgJgLAAIgDAAQgMAFgSARIgNANQgjAXgUAFQgVAFgOgEQgNgEgMgQQgFgGgDgKIgFgSQgDgKgFgJQgHgQgJgKQgIgJgFgDQgOgJgUgCIgQgBQg+gFhEgCIgggBIgigCIhoACIg0gDQgjgFgXgMQgGgDgJgIQgLgKgCgFQgPgbAAgSQgBgXAUgQQAFgEAHgCIANgEIASgCIBlgEIBMgDIAHgBIAsgHQApgGBWgQQApgHAMgJQAOgNABgmQAzgOAVgYQAbgfgbgpQgOgVgRgOQgKgJgdgTQgTgNgggGQgPgDgqgEQg2gEg+AGQimAIirAqQiTAlhLgIQgUgCgVgKQgUgLgLgEQgPgFgGgFQgGgDgKgKQg4gKgbgJIgSgHIgUgJQgagLhKgGQhNgGgOAEQgzAOgWAZQgTAUgPAzQgDAIABANIACAWIADAPQAFAWADAFIAGAGQAoAeAuAVIAZAKQAzASA7AGIAYACIAVAAIAVACIBoARIAJACIAFACIB7A8QACABAFAFQAOAKAGAHQAlAoALAjQAEAMgBAGQgBAmgjAlQgCADgCAAQgaADgMgCQgzgIgrgJQgLgDgUgJQgagKgIgFIhphMQgpA3gtAhIADgDQAagYAHgdIABgJIgBgJQgDgSgSAGIgHADIgKAGIgLAaIgBABIgEAIQgJANgLAJIgGADIgBAAQgYAOgUAGQgWAFgagDIgHgCQgPgGgHgEQgUgMgNgLIgUgSQgYgTgOAHIgHADQgJAIgDAIIgBADIgDAYIgCALQgIAhgKAVQgJASgUAXIgCACIgGAEIAAgXQgagDgNgIQh7hGATh2QAMhFBZiWIgHABIACgCIAlgkIAAgBIABgBQAHgEABgDQAbg7ARgdIAGgLIABgBQACgCAIgNIARgcIABgBQASgaATgOIAGgDIAdgLIAGgCIAwAAIVKgBQAOAAADABQAIADAJAGIAOAMIACACIAMALQAGAHAHANIADAEIAuBuIgBgBIgUgIQgGARAAASQABAOAGAUQAAAugFAeQgHAngSAhQhuAXhxARQhggCgqAAQhNABg+AJQgDAPACAIQACAJAKAJIG2AMQA5AYAnALQAyANAyAAQAAgIABgBQAAAAAAgBQAAAAABAAQAAAAABAAQAAAAABAAIAEAAQATgXAHghIABABIgHH3QgBBDACAjIAPBOIAEAMIgCAEQgBAEgEAEQgCAFgCAAIgBgBgAstiLIAIAeIC0gGQBrgDBJgBQAbgBA6ADQA0gBAhgNIAMAAIAAgJQhVgVhmgGQhJgFh0ADQgjALguAEIhSAEQgDADAAAHQgBABAAAAQAAAAgBAAQAAABgBAAQgBAAAAgBIgEAAIAAAAg");
	this.shape_11.setTransform(-2.008,-27.5975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AIzOBQhIgHhdgmIgogRQgNgHgUgNIgsAbQgYANgbAGQgeAGgvgEQgOAAgfgJQgegIgSgIQgxgQgVgKQkXABkXAAQigAziegIQhNgWgYgMQg1gZgVgrQgTgngHgvQgEgbgCg+IAFgpIAFgmIAAgDIACgEIAAAAIBcjSIABgGQAIgjACgYQAKhUAEhmIACiTQg6hagWhGQgZhTAMhfQADgYATgcQAZgfALgRQAigzAzgwQA1hiAPgZQAlg9AbgYQAjgfA3gLQKSAKLHgJQAlAIAYAJQAeAMAXAUQBiDYBIB4QAkBPgGBbQgGCkACEGQABBvAFBCQBFCMATBSQAbB5gqBxQhxCGhuAkQg9AUhiAAQg3AAhEgGgAFLL1IADACQAGAKAPAQQAMAOAGADIAEACQAYANAWAIIAGACQAWAIAIACIARACIArAHIArAGQAZADBGACICfgNIAGgBQABAAABAAQABAAABAAQAAAAAAAAQAAAAAAAAIAAAAQADAAAHgDQAdgCAZgJIBVg+IABgBIABgCIABgBIABgBIABgBIABgCIABgBIABgBIABgBIABgCQAvg8ATg3QADgJACgOQADgYACgZIgCgYQgBgKgCgGIhQjdIgDgBIgCgEIgBgCIgCgEIAAAAIgEgLIgPhOQgCgjABhDIAHn3IgBgCIgFgeQgCgLgDgJIgHgRIgPgcIgkhHQhBiJgqhhIgDgEQgHgNgGgHIgMgLIgCgCIgOgMQgJgGgIgDQgDgBgOAAI1KABIgwAAIgGACIgdALIgGADQgTAOgSAaIgBABIgRAcQgIANgCACIgBABIgGALQgRAdgbA7QgBADgHAEIgBABIAAABIgyAwIgcAlQgjAtgRAuQgPApgIA1IgBAhIAAAEIAAAFIADAeQACAOACALIAKAtQACAJAFAGQATAiAUARQAXATAjAGIACAAQAFAAACgBIAUgNQAFgDAHgFIACgCIAGgEIACgCQAUgXAJgSQAKgVAIghIAFgcIABgKQADgHAJgKIAHgDQAOgHAYATIAUASQANALAUAMQAHAFAPAGIAHACQAaADAWgFQAUgGAYgPIABAAIAGgDQALgJAJgNIAEgIIABgBIALgaIAKgGIAHgDQASgGADASIABAJIgBAJQgHAdgaAZIgDADIgCABIhmAqIgrgCQgJAAgPgFIgagJIgHgEIgNgKIgGgGQgEgEgEAAIgBgBIgCABQgJAGgDAMQgCAGgCASQgBAMgKATIgSAdQgMATggASQgcAOgSADIgIABIADAAIgKAAIgDABIgGgBIgZErIgTB4IgDAJIgWBBIgLAeIgpBhIgIAPIAAADIAAABIgIBdQAFAxAPAhQAQAlAhAeIAXAHIAAgBIABABIBdAYIAGABQAvAKBAgGIAXgCQAqgFAvgNQAMgDAYgJIARgGIAOgDIAIAAQAYgBAngEIADgBIHDAKQgIgFgBgMIABgEQAFgMAKAAQAFAAAJADIALAEIACABQAGAEAGAIIAJALQATAQAUAHIAVAIQAsARAjAGIAHABQAVAEAggGIAPgDQAGgCAXgLQAMgGAOgMIAIgIQACgBACgEIACgFQAFgLAHgEQADgCAEgBIABAAQAEAAAMAFg");
	this.shape_12.setTransform(-0.2429,-0.151);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3CF2FF").s().p("AgvBsQgkgGgbgSIgKgJQgHgIgBgFIgEgRQgFgRABgSQABgJAEgPIAAgBIgFADIAFgEIAEgMQAOgVAIgJIARgOQAfgWAbgJQAfgKAhAFIANAEIAMAFIAAABQAbARAFAEQAQAOAIALIALAOQAHAKAEAHIAAAGQAAAZgLAVQgJASgVATIgNALQgaATggAMIgEABIgVAAQgcAAgTgDg");
	this.shape_13.setTransform(-77.75,46.5979);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3CF2FF").s().p("Ah7FiQAJgPAHgSIAFgLQAQgqAHgWQATg7ANgwQADgMAEg2QADgrALgWIADhXQAAgkgCgWQgBgUgGgdQgFgQAAgHIgDgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAABAAIAAgBIAEAAQASgDAbgQQAigSALgVIASghQALgVAAgLQAAgNAFgOQAFgPAGgBIACgBIABABQADgBAFAEIAGAHIANALIALAGIgDABIgRALQguBGgcA4IgfBEIgSBWQgGAkADA/IABASQADArAHATQALAdAgALIAGACIAlAeQACACABAFQAAANgdARQglAWgwAlQg0AmgjAgIgFAFIgfAbIASgfg");
	this.shape_14.setTransform(-85.9139,9.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CBFEFF").s().p("AhQFDIAIgQIAphjIALgeIAKgfIALgjIACgKIAFgWIAQhwQAJhUADguIAKihIAGAAIADAAIAFgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQABABABAGIAGAWQAGAZABAYQACAWAAAkIgDBZQgLAWgDArQgEA0gDANQgNAwgTA6QgHAWgQArIgEAKQgLAcgXAjIgDAFIgSAWQgKAMgNAKg");
	this.shape_15.setTransform(-96.425,19.7917);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CBFEFF").s().p("AAmD0QgjgDgXgWQgUgTgSgmQgEgFgCgLIgNhLIgDghIABgGIgBgEQAAgOABgTQAGgxARgwQASgyAjgsIAcgkIAJgKIABgBIAAAAIAHgBQhSCCgRBmQgYCRB7AyQAIAGALACIAUADIAAAZIgCABIggAXQgCABgGAAIgBABIAAgBg");
	this.shape_16.setTransform(-94.2562,-41.1875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3CF2FF").s().p("AAYBIIgNgJIgngZIgHgFQgDgCgBgCIAAAAIgBgBQgggdgHgVQgCgEAAgGIAAgBIgBgLQAeg3AyAjIAIAEQAFACADACIAUAPIASASQAEAEAGALIAKARIAFAPIAAAAIABACQgBACABAGQACAFACABQABABAAAHQgCAPgFAHQgIAJgOAAQgMAAgSgHg");
	this.shape_17.setTransform(87.775,42.3623);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3CF2FF").s().p("AhLBwQgUg0AKgoQAJgpA5g0QA2gzA2gVQgpA/giBHQgcA+gfBUQgDALgFAAQgJAAgNgig");
	this.shape_18.setTransform(36.072,53.6045);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#009EFB").s().p("AhbA1QgIgRgJg2QgFglAogQQAXgIA0gEQAkgCAdAYQAeAYALAoQAKAlg7AYQgwAUg0AAQgjAAgPgfg");
	this.shape_19.setTransform(5.7257,46.8172);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1918B8").s().p("AIyFCQg3gJgegDIgRgCQgKgDgUgIIgGgCQgUgGgbgNIgEgCQgEgCgGgGIgIgKQgRgTgEgHIgDgCQgNgGgEABIgGACQgIAFgFAKIgCAFQgBAEgCACIgJAIQgPANgLAGQgWAKgHACIgQAEQgeAGgXgFIgHgBQgdgFgygSIgVgJQgKgEgNgIQgNgIgEgEQgHgIgBgCQgHgJgEgDIgCgBQgIgEgEAAIgOgDQgJAAgGANIgBAEQABANAJAEQheAAiEgEIjigIIgDAAQgwAEgPAAIgIABIgOADIg0ASQgqAMgvAGIgYACQhDAHgsgLIgGgBIhdgYIgBgBIgBgCIgBgBIgCgEQgxgmgFhDQgFg3AYhAQAFgNAFgFIAKgOIAIgJIAHgGIAHgFIAygqIgBACQgDAMgBANQgBASAEARIAFARQABAEAHAIIAKAJQAaASAlAGQAaAEArgBIAEgBQAggMAZgTIAOgLQAUgSAKgSQAKgVABgaIgBgGQgDgHgHgKIgLgOQgJgLgPgOQgFgEgbgRIgBgIQgFgiAlgXQAKgHBJgdQAqgQBOgOQBRgPApACQBDADAkARQAYALA8AmQgRAHAGAIQAFAIAWAFQA0AMAsgPQB0gpB1AaQC/AqCbhEQAggOA6gcQAxgXAjgGQBdgPBeBdIASAPQAOAMAKAUIghgbQgLgJgKAAQgKABgFAKQgGALAAAPIgZghQgFgGgJgHIgQgMQgIgIgOgGQgPgGgKAAQgVAAgKAEIgHACIgBAEQg1A2BKBZQgPADgbAMQgdANgLADQgfAtAIAsQAHApAlANQA3ASAsgWQAtgWACgvQAAgFgBAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAABAAIAAgEQABgGAFgEQAKgMAGgNIABgBQABgDADgCIACgCIABgBQABACADACIAHAFIAoAZIANAJQAmAOAOgQQAFgHACgPQAAgHgBgBQgCAAgBgGQgCgGAAgCIABgEQAIgTgBgYIgBgGIgEgTIgJgRQA2BLALBHQAMBHgdBaQgIAZgiApQgtA2g6AjIgdAPIABABIgDAAIgGAAQh7ALgkAEQhGgBgagDgAFXhBQg5A0gJAoQgKAoAUA0QAUA0AKgcQAfhVAdg9QAihIApg+Qg2AUg3A0gAA+iPQg2ADgWAJQgnAPAFAlQAIA3AJASQAOAdAjAAQA0AAAwgTQA8gYgLglQgLgpgdgYQgbgVghAAIgFAAg");
	this.shape_20.setTransform(-0.2048,52.8708);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#009EFB").s().p("AM1NNIACAAIAcgQQA4ghAvg4QAigpAIgZQAdhagMhHQgLhHg2hMIAJARIAEATIABAHQABAXgIATIAAACIgBABIAAgBIgFgOIgKgSQgGgLgEgFIgSgRIgUgPQgDgDgFgCIgJgEQgygjgeA4IABAKIAAABQAAAGACAFQAHAVAgAeIAAAAIgCAEQgDABgBAEIgBABQgGANgKALQgFAFgBAGIAAADQAAABAAAAQAAAAAAAAQAAABAAAAQABAAAAgBQABAAAAAFQgCAwgtAXQgsAWg3gTQglgMgHgqQgIgtAfgtQALgDAdgMQAbgMAPgEQhKhYA1g3IABgDIAHgDQAKgDAVAAQAKgBAPAGQAOAGAIAIIAQANQAJAGAFAHIAZAhQAAgPAGgLQAFgLAKAAQAKAAALAJIAhAaQgKgTgOgMIgSgQQhehdhdAPQgjAGgxAXQg6AdggAOQibBEi/grQh1gah0ApQgsAQg0gNQgWgFgFgHQgGgIARgIQg8glgYgLQgkgRhDgEQgpgChRAPQhOAOgqARQhJAdgKAGQglAXAFAjIABAHIAAAAIgMgFIgNgEQghgGggAKQgbAJgfAWIgSAOQgHAJgOAWIgEALIgyArIgHAFIgHAFIgIAJIgKAOQgFAHgFANQgYA/AFA4QAGBDAwAmIACAEIABABIABACIAAAAIgWgGQgjgcgQgnQgOghgEgzIAIheIAAgBQAOgLAJgLIAVgaIAfgbIAFgFQAjggA0gmQAxglAlgWQAdgRAAgNQgBgFgCgCIglgeIgGgCQgggLgLgdQgHgPgEgvIgBgSQgDhAAGgkIAThVIAfhEQAcg4AuhGIASgLQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAIAVAIQARAFAHAAQAMACAfAAIBmgsQAvgiAqg7IBoBNQAHAFAKAFIARAHQAZAKAGACQArAJAzAIQAHABAMgBIATgBQACAAACgDQAlgnAAgnQAAgEgEgOQgIgkgngpIgUgTIgIgGIh6g9QgGgDgIgBIhngSIgVgBIgVgBIgZgDQg8gFgxgTIgZgLQgwgXglgeQgGgEAAgCIgIgdIgDgPQgEgZAEgUQALgxAVgXQAXgaAygOQAIgCAiACQAaABAaACQBNAGAaANQAYAMALAEQAbAJA4ALQAAACALAHQAMAJALAFIAeAPQAVAKAUADQArAGBFgLQAsgIBEgSQCzgwCdgDQA2gHA+AFQAoAEASAEQAfAGAUANQAaARALAKQAQAOARAVQAgAqgcAhQgWAag3APQAAAqgKAKQgKAKgwAHIhHAMIg6AKIgrAHIgHABIhLADIhnAEIgRADQgQADgJAGQgnAaAiA9QAEAGAJAJQAGAHAJAFQAUALAmAGIAkADIB4gBIAiACIAgABQBVADAuAFIAPABQAUABANAKQAIAGAFAGQAJALAHARIAHAVQAFAWAHANQASAfApgKQAYgHAggWIANgNQAUgTAKgEIADAAQATgCAKAhIABACIAJA2QAIAyADAkIgBgEIABAIQAGA/AABIIgBBKIABBXQABAdALAcQALAeATAUQAQAJAOAEQABABADgFIAFgIIABgEIABgBIAFAKIADABIBXDeQACAFABALQACAQAAAIQgBAcgDAWQgBAMgDALQgPA2gwBAIgBACIgBABIgBABIgBABIgBACIgBABIgBACIgBABIgBABIgBABIhUBBQgVAJghADIgKADIgCABg");
	this.shape_21.setTransform(0.0542,-0.5944);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CBFEFF").s().p("ADMCwQgbgJhCgeQkkgHiRgFQgLgJgCgJQgCgIAEgQQA6gLBQgBQAvAABcAEQBygSBugZQAUggAHgpQAEgcgBgyQgGgXgBgNQgBgSAIgRQALADAJAFIABABIAfA/IAeBAIAjBKIAOAeQAGAOAFAZIAEAXIAAAJIABgBIgBAEQgCAKgIASQgKAWgHAGIgEAAQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAABQgBACAAAIIgGAAQgwAAgugPg");
	this.shape_22.setTransform(60.9795,-55.222);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CBFEFF").s().p("AkSAAIAEAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAIACgFQAAgDACgCIBSgDQAwgEAggNQCIgBA1ADQBpAFBRAXIAAAJIgMAAQgfAPg1ABQg8gEgaABIlmAKg");
	this.shape_23.setTransform(-55.975,-44.75);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3CF2FF").s().p("APJJcIgegNQgngtgDg/IgBhWIABhLQgChjgEgqIgBgEQgEgygGgeIgJg2IgBgCQgKghgTABIgDABQgKAEgUATIgNAMQggAXgYAGQgpALgSggQgHgNgFgWIgHgUQgHgQgJgMQgFgGgIgGQgNgKgUgBIgPgBQgugFhVgDIgggBIgigBIh5AAIgbgBIgIgBQgmgGgUgMQgJgFgGgGQgJgJgEgHQgig8AngaQAJgGAQgEIARgCIBngFIBLgDIAHAAIArgIQARgCApgIIBHgMQAwgHAKgKQAKgJAAgrQA3gPAWgaQAcgggggqQgRgWgQgNQgLgKgagRQgUgNgfgHQgSgEgogDQg+gGg2AHQidAEizAvQhEATgsAHQhFAMgrgHQgUgDgVgKIgegPQgLgFgMgIQgLgIAAgCQg4gLgbgIQgLgEgYgMQgagNhNgGQgagDgagBQgigCgIADQgyANgXAaQgVAYgLAxQgEATAEAaIADAPIAHAcQABADAGADQAiAdAzAZIAZAKQAxATA8AGIAZACIAVABIAVACIBnARIAOAEIB6A+IAIAGIAUASQAnAqAIAjQAEAOAAAFQAAAmglAmQgCAEgCAAIgTABQgMABgHgCQgzgIgrgJQgGgBgZgKIgRgIQgKgEgHgEIhohOQgpA7guAgIADgDQAKgIALgSQALgSABgLIABgJIAAgJQgCgVgTAIIgMAGQgEACgBACIgMAaIAAACIgEAHQgJAOgMAJIgGADIgBAAQgXAQgVAGQgWAGgagFIgHgCQgPgGgGgEQgSgLgPgNIgUgTQgYgUgOAHIgHAEQgKAIgDAIIgBADIgFAmQgIAigLAXQgLAYgRATIgCACIgGAEIAAgZIgVgCQgKgDgIgGQh9gxAZiSQARhlBSiCIgGABIABgCIAmgmIAAAAIABgBQAHgFABgDQAag6ASggIAHgLIAAgBQAEgEAHgMIARgdIABgBQASgaATgOIAGgDIAdgMIAHgBIAxABIAogBIAGAAQCkACD0AAIGQgCID6ABQCPABBmgBIAJgBIAIABQAJADAIAHIAPAMIACACIAMALQAEAFAJAPIACAEIAwByIgBgBQgJgFgLgDQgIARABASQABANAGAXQABAygEAcQgHApgUAhQhuAZhzASQhcgEgvAAQhQABg6ALQgEAQACAIQACAJALAJQCRAFElAHQBCAeAbAJQAxAQAzgBQAAgJABgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIAEAAQATgYAJgjIgCBOQgJC0gHEJQgCA9ACAmIABADIARBMIADAMIgBAFIgFAIQgCAEgCAAIAAAAgAsoiPIAIAgIFngKQAbAAA7ADQA1AAAggPIALAAIAAgJQhQgYhqgGQg1gDiIACQggANgwAEIhTADQgBABgBAEIgBAFQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgEgBIAAAAg");
	this.shape_24.setTransform(-2.5264,-30.4475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AIzOZQgpgGgvgMQgvgNghgPIgngQQgQgIgPgMIgsAcQgYANgbAFQgbAGgxgDQgNgBghgJQgfgJgTgHQgxgQgVgKQh0AEijgCIkXgEQigA4iegNQhKgUgagNQg7gbgRgrQgihUAEhcQABgTAEgWIAFgnIAAgDIACgEIgBABIBcjXIACgGQAHgkADgYQAJhQAEhrIABiYQg8hcgWhSQgYhaAPhjQAEgYAUgcQAYgfALgRQAng7AvgqQAyhfAUgjQAlg+AbgaQAnglA0gBQEMAIGegCQIugCB9ABQBIAHApAoQBMCwBfCsQAlBUgMBgQgHBhgDCBIgEDUQgCBoAKBJQBLCMAWBTQAlCIgxBkQhdCHh+AsQhGAYhfAAQg4AAhAgIgAFKMMIADACQAEAHARAUIAIAJQAGAGAEACIAEACQAbAOAUAGIAGACQAUAIAKACIARACQAdAEA4AJQAaADBGABQAlgFB6gKIAGgBQACAAABAAQABAAAAAAQABAAAAAAQAAAAgBAAIABAAIAKgDQAhgDAVgJIBUhBIABgBIABgBIABgBIABgCIABgBIABgCIABgBIABgBIABgBIABgCQAwhAAPg2QADgLABgMQADgWABgcQAAgIgCgQQgBgKgCgGIhXjeQAAAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAIgCgFIgBgBIgCgFIAAABIgEgLIgShQQgCgmACg8QAHkJAJi0IAChPIgJg1IgHgSIgOgeIgjhLIg3h3QghhHgVgyIgCgFQgJgPgEgFIgMgLIgCgBIgPgNQgIgHgJgCIgIgBIgJAAQhmACiPgBIj6gBImQABQj0ABikgDIgGABIgoABIgxgCIgHACIgdALIgGADQgTAOgSAbIgBABIgRAcQgHANgEAEIAAABIgHALQgSAfgaA6QgBAEgHAEIgBABIAAABIgyAxIgcAlQgjAsgSAyQgSAwgFAxQgCAUABAOIAAAEIAAAGIACAhIANBLQADALAEAFQARAmAUATQAYAWAkADIABAAQAGAAABgBIAVgOQAGgDAFgGIADgBIAGgEIACgDQARgTALgYQALgWAIgjIAHgpQACgIAKgJIAHgDQAOgIAYAVIAUATQAPAMASAMQAGAEAPAGIAHACQAaAGAWgHQAVgFAXgRIABAAIAGgEQAMgIAJgOIAEgIIAAgBIAMgbQABgCAEgCIAMgGQATgIACAVIAAAJIgBAJQgBALgLASQgLASgKAJIgDAEIgCABIhmAsQgfAAgMgCQgHAAgRgFIgagKIgHgEIgNgLIgGgHQgFgEgDABIgBgBIgCABQgGABgFAPQgFAOAAANQAAALgLAVIgSAhQgLAVgiASQgcAQgSADIgHABIACgBIgGABIgEAAIgDABIgGgBIgLCmIgNCJIgOBlIgFAWIgCAKIgMAiIgKAgIgLAeIgpBjIgIAPIAAADIAAABIgIBeQAEAzAOAhQAQAnAjAcIAWAGIAAAAIABAAIBdAYIAGABQAsAMBDgHIAYgDQAvgFAqgMIA0gTIAOgDIAIAAQAPAAAwgEIADgBIDiAIQCEAFBeAAQgJgEgBgNIABgFQAGgNAJABIAOACQAEABAIAEIACABQAEACAHAJQABACAHAIQAEAFANAIQANAHAKAFIAVAIQAyATAdAEIAHACQAXAFAegHIAQgDQAHgCAWgLQALgFAPgOIAJgIQACgBABgFIACgEQAFgLAIgFIAGgCIABAAQAEAAAMAFg");
	this.shape_25.setTransform(-0.135,-2.3717);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3CF2FF").s().p("AgvBuQgkgGgbgSIgJgJQgIgKgBgDIgEgSQgEgRABgSQAAgJAEgPIAAgCIgFAEIAFgEQADgJACgDQANgWAIgJIARgPQAggXAbgJQAegKAhAFIANAEIAMAFIABABQAbARAEAFQASARAGAIIALAOQAJAMABAFIABAGQgBAZgKAVQgJAUgUATIgOALQgdAVgdAKIgEABIgYABQgZAAgTgDg");
	this.shape_26.setTransform(-77.825,45.9362);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3CF2FF").s().p("Ah7FtQAIgQAIgTIAFgLQAQgrAHgWQAXhNAIggQAEgOADg1QADgsALgWIADhZQAAgdgCgeQgBgTgHgfQgFgPAAgIIgCgEQAAgBgBAAQAAgBAAAAQABgBAAAAQAAAAABgBIABAAIADgBQATgDAbgQQAhgUALgWIATgjQALgWAAgMQABgOAEgPQAFgPAGgBIACgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAGAAAJALIAMAMIABAAIAGAEIAEACIgCABIgRAMQgwBLgcA6IgeBGIgSBYQgGAlAEA/IABASQADAuAGARQAMAdAgALIAGACIATARIASAOQACACAAAFQABAMgdASQglAXgwAlQg0AogjAhIgkAgIASgeg");
	this.shape_27.setTransform(-85.9889,7.525);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CBFEFF").s().p("AhPFIIAHgQIA/ijIAKgjIADgKIAEgXIAQhyQAIhJAEg7IAJilIAFABIAEgBIAJABIACAHIAGAXQAGAeABATQACAXAAAlIgCBaQgLAWgDAsQgEA0gDANQgIAhgXBMQgHAXgRArIgDAKQgMAcgWAlIgDAFIgSAWQgKAMgNALg");
	this.shape_28.setTransform(-96.525,18.875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CBFEFF").s().p("AAkEAQgjgCgXgZQgUgUgQgqQgFgFgCgMIgMhRIgCgjIAAgGIAAgFIABgjQAGgzARgwQAUg1AigrQASgZAKgMIAJgKIABgBIAHAAQhSCBgSBsQgaCZB7A5QAIAFALADIAUADIAAAaIgDABIggAZQgBABgGAAg");
	this.shape_29.setTransform(-94.325,-44.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3CF2FF").s().p("AA1BQQgLgBgRgGIgNgJIgngZIgHgFIgFgEIAAAAIgBgBQgfgdgIgVIgCgLIAAgBIgCgLQAdg4AyAjIAIAEQAGACADADIAUAPIARARQAGAGAFAKIAKARIAGAPIAAAAIAAACQAAACABAGQACAGACABQACABAAAGQgCAQgFAGQgIAKgOAAIgCAAg");
	this.shape_30.setTransform(87.125,41.4407);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3CF2FF").s().p("AhIBzQgVg1AJgpQAJgpA4g2QA1g1A2gVQgpBAggBJQgcBAgdBWQgEAKgFAAQgIAAgNgig");
	this.shape_31.setTransform(35.7877,53.1264);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#009EFB").s().p("AgoBWQgkAAgOgfQgJgSgIg3QgGgmAogQQAXgJA0gDQAkgCAdAYQAdAYAMApQAKAmg7AZQgvAUgyAAIgCAAg");
	this.shape_32.setTransform(5.5457,46.1929);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1918B8").s().p("AI1FJQg4gJgdgDQgKAAgHgCIgegKIgGgCQgXgIgYgMIgEgCQgFgCgFgGIgIgJIgMgOQgHgHgDgGQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgNgGgEAAIgGACQgIAFgFALIgBAFQgCAEgCACIgIAIQgPAOgLAFQgUALgKACIgQADQgfAHgWgFIgHgCQgbgEg0gTIgVgJIgXgMQgOgIgEgFIgHgKQgGgIgGgDIgCgBIgLgFQgKgCgFAAQgJgBgGAOIAAAEQAAANAJAFQhfACiDgGIjigLIgDAAIhAAEIgHAAQgFAAgJADIgQAGQgSAHgTAFQgnAMgxAGIgXADQhEAHgsgMIgFgBIhdgYIgBAAIgCgCIAAgBIgDgEQgwgmgFhEQgFg4AXhBQAFgNAFgFIALgOIAHgKIAHgFIAIgFIAxgrIAAABQgEAMAAAOQgBASAEARIAEARQABADAIAKIAJAJQAbASAkAFQAbAFAqgCIAEgBQAdgLAdgVIAOgLQAUgRAJgUQAKgVABgbIgBgGQgBgEgJgMIgLgPQgGgIgSgRQgEgEgbgSQgCgCAAgFQgFgkAlgXQAKgHBJgeQAqgQBOgPQBRgPApACQBDADAjARQAYAMA8AmQgRAIAGAIQAFAIAWAFQA0ANAsgQQBzgqB1AaQC9AsCahFQAggPA5gdQAxgXAigGQBbgPBdBeIASAQQAOALALAUIghgaQgLgJgKAAQgKAAgFAKQgDAIgBAGIAAANIgaghQgFgGgKgHIgQgNQgIgIgOgGQgOgGgJAAQgSAAgNAEIgHACIAAAEQg2A3BMBaQgPAEgbAMQgcANgLADQgfAvAJAsQAIAqAlANQA3ASAsgXQAtgXAAgwQAAgFgBAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgDQABgHAFgEQALgMAFgNIAAgBIAFgFIABgDIAAAAIABgBQABACAEACIAGAFIApAaIANAIQAlAPAOgRQAFgGACgQQAAgHgCgBQgBAAgCgHQgCgGABgBIAAgEQAHgTgBgZIgBgGQgCgNgDgHIgJgQQA4BMANBHQANBHgaBcQgIAbghAoQguA6g3AjIgdAQIgJABQh7AMgkAEQhNgBgTgCgAFWhCQg4A2gJApQgJApAVA2QAUA0AKgcQAdhWAdhBQAghIAphBQg2AWg2A0gAA9iRQg1ADgWAJQgnAQAFAmQAJA4AIASQAPAeAiAAQA0AAAxgUQA7gYgLgmQgLgqgegYQgbgXggAAIgGABg");
	this.shape_33.setTransform(-0.4049,52.2903);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#009EFB").s().p("AM5NjIACgBIAcgQQA4gjAtg5QAhgpAIgbQAahcgNhHQgNhHg4hNIAJARQADAGACANIABAHQABAZgHASIAAACIAAAAIgBAAIgFgPIgLgSQgFgKgFgGIgSgRIgUgPQgDgDgFgCIgJgEQgzgjgcA4IABALIAAABIACALQAIAWAgAdIAAABIgBADIgFAFIAAACQgFAMgLAMQgFAFgBAGIAAAEQAAAAAAAAQAAABAAAAQAAAAAAAAQABAAAAAAQABAAAAAFQAAAxgtAXQgsAXg3gTQglgMgIgrQgJgtAfguQALgDAcgNQAbgNAPgDQhMhaA2g4IAAgDIAHgDQANgDASAAQAJgBAOAHQAOAGAIAHIAQANQAKAHAFAGIAaAhIAAgNQABgFADgIQAFgLAKAAQAKAAALAJIAhAbQgLgUgOgMIgSgQQhdhehbAQQgiAFgxAYQg5AdggAOQiaBGi9gsQh1gbhzAqQgsAQg0gNQgWgFgFgHQgGgJARgHQg8gngYgLQgjgRhDgEQgpgChRAPQhOAPgqARQhJAegKAGQglAYAFAjQAAAFACADIgBgBIgMgFIgNgEQghgFgfAKQgbAJggAXIgRAPQgIAJgNAWQgCADgDAJIgxArIgIAFIgHAGIgHAJIgLAOQgFAHgFANQgXBAAFA4QAFBEAwAmIADAEIAAABIACACIAAABIgXgHQgigcgQgoQgOghgEgzIAHhfIABgBQANgKAKgMIASgXIADgEIAjggQAkghA0goQAwglAlgXQAegSgBgMQAAgFgDgCIgRgOIgUgRIgGgCQgggLgLgdQgHgRgEguIgBgSQgDhAAGglIAShXIAfhGQAcg6AvhLIARgMIABgBIACAAIAVAIIAZAGIArACIBmgvQAvgiAqg+IA0AoIA0AoQAHAEAKAFIARAIQAUAJALADQA1ALAoAGQANACAagCIAEgEQAlgoAAgoQAAgFgEgOQgIgmgngpIgUgTIgHgGIh5g/IgPgEIhngSIgqgDIgYgDQg7gGgzgUIgYgLQgwgYglggIgGgGQgEgNgDgQIgDgQQgEgYAEgWQALgzAWgYQAXgbAzgNQAPgDBPAHQBSAKAVALIASAKQAHADAJADQAPAFAbAGIApAJQAAACAKAIQAMAJAMAFIAdAPQAUAKAUADQArAHBFgNQAsgIBEgTQCvgxCfgDQA3gHA/AGQApAFAQADQAgAHATANQAaARAMAKQAQAOARAWQAgArgcAiQgWAbg3APQgBAsgKAKQgKAKgxAHIhHANIg6AKIgrAHIgHABQgSACg5ABIhnAEIgRADQgQAEgJAGQgmAbAhA+IAMAQQAGAHAJAFQAWAMAlAGIAIABIAcACIB3gBIARABIARABIAgABQBLACA4AGIAPABQATABAOALQAHAFAFAHQAKANAFAQIAHAWQAEAWAIAOQASAhAogLQAXgFAhgXIACgCIALgLQAUgUALgDIADgBQASgBAJAjIABACIAIA4QAFAnAEAyIABAFQABAPABAsIAABNQgCBoACA7QABAcALAdQAMAfATAVQARAJANADQABABAEgEIAEgJIABgEIAAgBIAGAKIADABQA2CAAnBfQACAFACALIACAZQAAAWgCAcQgBALgDANQgNA0gwBFIgBABIgBABIgCADIAAACIgBABIgBABIgBABIgCADIhTBDQgYAKgfADQgIAEgBgBIgCABgAOwEsIAAAAIAAAAg");
	this.shape_34.setTransform(-0.125,-2.8807);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CBFEFF").s().p("ADMC1QgcgJhBgfQhOgEiMgDIjbgHQgLgJgCgKQgBgIADgRQA6gLBQAAICMADQB2gTBsgZQAVghAGgqQAFgdgBgzQgHgZAAgMQgBgTAIgRQALACAJAGIABABIAfBAQATAlALAcIAhBOIAOAgQAGAUAEAUIADAaIAAAIIgBAEQgCALgIATQgKAWgIAHIgEgBQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBABAAAAQgBADAAAIQgygBgwgRg");
	this.shape_35.setTransform(60.8275,-58.55);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CBFEFF").s().p("AkSAAIAEAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAIACgGQAAgEABgBIBTgDQAwgDAggOQCMgBAxADQBqAGBQAYIgBAJIgLAAQgfAQg1AAQg8gDgbAAIlmAJg");
	this.shape_36.setTransform(-55.975,-47.8786);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3CF2FF").s().p("APBJuIgegMQgUgXgLgcQgLgdgBgeQgBgcABg6IAAhMQAAhqgDgmIAAADIAAgGQgFg/gEgVIgIg4IgBgCQgJgjgSABIgDABQgLADgUAUIgLALIgCACQghAXgXAFQgoALgSghQgIgOgEgWIgHgWQgFgPgKgNQgFgHgHgFQgOgLgTgBIgPgBQg4gGhLgCIgggBIgRgBIgRgBIhpABIgygDQglgGgWgMQgJgFgGgHIgMgQQghg+AmgbQAJgGAQgEIARgDIBngEQA5gBASgCIAHgBIArgHIA6gKIBHgNQAxgHAKgKQAKgKABgsQA3gPAWgbQAcgigggrQgRgWgQgOQgMgKgagRQgTgNgggHQgQgDgpgFQg/gGg3AHQifADivAxQhEATgsAIQhFANgrgHQgUgDgUgKIgdgPQgMgFgMgJQgKgIAAgCIgpgJQgbgGgPgFQgJgDgHgDIgSgKQgVgLhSgKQhPgHgPADQgzANgXAbQgWAYgLAzQgEAWAEAYIADAQQADATAEAKIAGAGQAlAgAwAYIAYALQAzAUA7AGIAYADIAqADIBnASIAPAEIB5A/IAHAGIAUATQAnApAIAmQAEAOAAAFQAAAoglAnIgEAEQgaACgNgCQgogGg1gLQgLgDgUgJIgRgIQgKgFgHgDIg0goIg0goQgqA+guAgIAAAAIADgDQALgJALgSQALgTACgLIABgJIgBgKQgBgVgUAIIgHADIgFADQgEACgBACQgFAKgGASIgBABIgEAIQgIAOgNAJIgGAEIgBAAQgYAQgUAGQgXAGgZgFIgHgCQgOgGgHgFQgSgMgPgMIgTgUQgIgHgJgFQgNgGgJAEIgHAEQgKAJgCAIIgBADIgGAoQgJAlgKAXQgKAXgTAXIgCACIgGAFIAAgbIgUgCQgLgDgIgGQh8g5AaiYQAShsBTiBIgEAAIgDAAIACgCIAlgmIAAgBIABgBQAHgEABgEQAag7ATghIAHgMIABgBIAKgQIARgdIABgBQASgcATgOIAGgDQASgIAMgDIAHgCIBbACIAGAAQClAFDxgCIGNgDID6ADQCRABBkgDQAPgBADABQAIADAJAHIAPAMIACACIAMALQAEAEAJARIADAEIAwB2IAAgBQgJgFgLgDQgIARAAATQABANAGAYQABAzgEAdQgHAqgVAiQhrAZh3AUIiMgEQhRAAg5AMQgEAQACAIQABAKALAJIDcAHQCMADBPAEQBBAfAbAKQAwAQAzABQAAgIABgDQAAAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIADABQAVgZAJglIgEBTQgOC9gMELQgCA0ADAvIABAEIASBNIAEALIgBAFQgBAEgDAFIgFADIAAAAgAsliRIAIAhIFngJQAaAAA8ADQA1AAAggQIALAAIAAgJQhQgZhqgGQgwgDiNABQggAOgwADIhTADQgCABAAAEIgBAGQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgDgBIgBAAg");
	this.shape_37.setTransform(-2.8175,-33.3722);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AI2OxQgpgFgvgMQgvgNghgPIgngQQgRgHgPgMIgsAcQgZANgbAFQgYAFg0gDQgNAAghgKQgdgIgUgIIgkgNQgXgHgLgGQh0AHikgEIkYgIQiiA5ibgNQhLgVgZgMQg7gcgRgrQghhUADhdQABgTAEgXIAFgnIAAgDIACgEIAAAAIBbjbIABgFQAIglACgYQALhYABhlQAAhqABgzQg7hhgVhbQgXhgAQhnQADgaAUgcQAZgfALgRQAlg5AxgtQA5hvAOgXQAnhCAYgXQAognA2ABQEDAMGlgEQHygEC3ADQAfABAdAMQAfAMAXAWQAhBMAzBpIBXCzQAjBXgPBmQgKBjgGCJIgIDXQgEBeANBTQBPCMAZBUQApCIgwBnQhaCLh+AuQhHAahjAAQg2AAg+gIgAFLMlQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQAEAGAHAHIALAOIAIAJQAGAGAEACIAEACQAYAMAXAIIAGACIAeAKQAIACAJAAQAeADA4AJQATACBNABICfgQIALgBQACAAAIgDQAegDAZgLIBShCIACgDIABgBIABgCIABgBIABgBIACgDIABgBIABgCQAvhEANg1QAEgNAAgLQADgbAAgXIgDgYQgCgMgCgFQgmhfg2iAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAgBIgGgKIAAAAIgEgLIgThNIAAgDQgEgwADgzQAMkLANi+IAEhTIgDgiQgCgOgCgHIgGgUIgOgfIghhPIg3h6QgjhOgUgvIgCgFQgKgQgEgEIgMgMIgCgBIgPgNQgIgHgIgCQgDgBgPABQhlADiRgCIj6gDImMAEQjyACikgGIgHABIhbgDIgGACQgMAEgSAHIgGADQgTAPgSAbIgBABIgSAdIgKARIAAABIgHAMQgTAhgaA7QgCADgHAFIAAABIAAAAIgpAqIgEADQgCACgDAEIgdAmQgiAqgTA1QgSAwgFA0IgCAkIABAEIAAAGIABAjIANBRQABAMAFAFQARAqAUAVQAXAYAkACIABAAQAGAAACgBIAUgPQAFgCAHgHIADgCQABgDAFgBIACgDQATgXAJgWQALgYAIglIAGggIABgLQADgIAJgKIAHgDQAJgEANAGQAJAEAIAIIAUATQAOANASAMQAIAGANAFIAHACQAaAGAXgHQAUgGAYgRIABAAIAGgEQAMgJAIgOIAEgIIABgBQAHgRAFgKQABgDAEgCIAFgCIAHgDQATgJACAWIAAAJIgBAJQgBAMgLASQgLATgLAJIgDADIgCABIhmAvIgrgBQgHgBgRgFIgVgIIgFgDIgGgDIgBgBIgMgLQgJgMgGABQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBIgCABQgGACgFAPQgEAOgBAPQAAALgLAXIgTAiQgLAWghAUQgdARgSADIgHABIACgBIgGABIgEAAIgDABIgGgBIgFBXIgFBTQgEA4gHBMIgEAeIgLBPQgBAKgEANIgCAKIgMAjIg+CjIgIAQIAAADIAAABIgIBeQAEA0AOAhQAQAnAjAdIAWAGIAAAAIABAAIBdAYIAGABQAsAMBDgHIAYgDQAxgGAngMQASgFASgHIARgGQAIgDAFAAIAIAAIA/gEIADAAIDiALQCEAGBfgCQgKgFAAgNIABgEQAFgOAKABQAEAAAKACIALAFIADABQAFADAGAIIAIAKQAEAFANAIIAXAMIAVAJQA1ATAbAEIAHACQAWAFAfgHIAQgDQAKgCATgLQALgFAPgOIAJgIQACgCABgEIACgFQAEgLAIgFIAHgCQAEAAAMAGg");
	this.shape_38.setTransform(-0.2846,-4.7267);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3CF2FF").s().p("AgvBwQglgFgagSIgJgKQgHgIgCgFIgEgSQgEgRABgSQAAgNAEgMIAAgCIgFAEIAFgEQACgJADgDIAKgRQAGgKAFgFIARgPQAggYAbgJQAegLAhAFIANAEIAMAGIAAAAQAbASAFAEQAOANAKANIALAOQAIALACAGQABADgBADQAAAagKAWQgKATgUAUIgOALQgbAUgeAMIgEABIgaABQgZAAgRgDg");
	this.shape_39.setTransform(-77.88,45.2444);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3CF2FF").s().p("Ah7F3QAJgRAIgSIAFgMQAQgrAHgYQAWhHAJgoQADgNAEg3QADgsALgWIAChaQABgegDgfQgBgOgHgkQgFgQAAgIIgDgFQAAAAAAgBQgBAAABgBQAAAAAAgBQAAAAABAAIABgBIAEAAQASgDAbgTQAigVALgWIATglQALgYABgLQAAgQAFgPQAFgQAGgCIACgBQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQADgBAFAGIAGAGIAMANIABAAQADADAEABIADACQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBABIgRAMQguBLgeBAIgPAhIgPAmIgSBbQgFAmADA/IABAJIABAKQACAuAHASQAMAdAgALIAGADIAlAdQACAEAAAEQABAMgeATQglAYgvAmQg0ApgjAiIgkAgIARgeg");
	this.shape_40.setTransform(-86.1125,6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#CBFEFF").s().p("AhPFOIAHgQIAphmIAMgfIAKghIALgkIACgKIAFgXIAPh0QAJhQADg2IAIipIAFABIAEgBIAFAAQAAAAABAAQABAAAAAAQABAAAAAAQAAABABAAIACAHIAGAYQAHAeABAUQADAggBAdIgCBbQgLAWgDAtQgEA1gDANQgJAogWBIQgHAXgQArIgEALQgLAbgXAnIgDAFIgSAXQgKANgNAKg");
	this.shape_41.setTransform(-96.6125,17.8667);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CBFEFF").s().p("AAlEMIgCAAQgjgCgXgbQgUgWgQgtQgFgGgBgMIgJg5IgDgeIgBglIAAgGIAAgFQAAgSACgTQAEgzATgzQAUg3AhgqQATgaAKgLIAJgLIAAgBIABAAIADAAIADAAQhSCDgSBwQgbCfB6BAQAOAKAZABIAAAcQAAAAAAAAQgBAAAAABQAAAAgBAAQAAAAgBABIggAZQgCACgDAAIgCAAg");
	this.shape_42.setTransform(-94.375,-47.0575);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3CF2FF").s().p("AAbBJIgOgIIgngaIgHgFQgDgCgBgCIAAAAIgCgBQgggdgIgWIgCgLIAAgBIgCgLQAbg5AyAkIAIAEQAGACADADIAUAPQAIAHAKAKQAFAGAFAKIAMASIAFAOIAAABIABACIACAIQABAFACABQACACAAAGQgBAQgFAHQgIAKgOAAQgMAAgRgIg");
	this.shape_43.setTransform(86.45,40.5024);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3CF2FF").s().p("AhHB2QgVg3AJgqQAJgqA2g3QA1g2A1gWQgoBCgfBKQgbBBgdBZQgDALgFAAQgIAAgOgjg");
	this.shape_44.setTransform(35.5025,52.6575);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#009EFB").s().p("AhaA4QgJgTgIg4QgGgnAogQQAXgJAzgEQAkgCAdAZQAeAZAMAqQAKAng6AZQgwAVg0AAQgjgBgPgfg");
	this.shape_45.setTransform(5.3463,45.5675);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1918B8").s().p("AI4FPQgQgBgbgFIgrgGIgRgBIgkgMQgVgHgagMIgEgCQgEgCgOgQIgWgbIgDgDQgNgFgEAAIgGACQgIAFgFAMQAAAHgFADIgIAJQgLALgPAIQgUAKgKADIgPADQgiAHgUgGIgHgCQgegFgxgSIgVgJQgLgEgMgIQgOgIgEgFIgIgLQgHgJgEgCIgCgBQgIgEgEgBIgOgCQgKAAgFAOQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAOAKAEQhfAEiFgHIjigOIgDAAQg1ADgKAAIgIAAQgKACgDABIgRAGQgWAJgOAEQgoAMgwAGIgYACQhDAHgsgMIgFgBIhdgYIgBAAIgCgCIgDgGQgwgmgFhEQgFg5AYhAQAEgNAFgHQAHgHAEgHIAHgJIAHgGIAIgFIAygsIgBABQgDANgBANQgBATAEARIAFARQABAFAHAIIAKAJQAaATAlAFQAZAEArgCIAEgBQAfgMAbgVIAOgLQAUgSAJgUQALgVAAgbQABgEgCgCQgCgHgHgKIgLgPQgIgJgRgQQgEgFgbgRIgCgIQgFgkAlgYQALgIBIgeQAqgRBOgPQBRgQAoACQBDAEAkARQAYAMA8AnQgRAIAFAJQAGAIAVAFQA1ANArgQQBxgsB1AcQC9AtCYhHQAfgPA5geQAwgXAigGQBZgPBcBfIATAQQAOAMALAUIghgbQgMgJgJAAQgKAAgFALQgFALACAPIgbghQgFgGgKgHIgPgNQgJgIgNgGQgOgGgJAAQgSAAgMAEIgGACIgBAEQg3A5BOBaQgOAEgbANQgcANgLADQgeAwAKAtQAJArAlANQA3ASAsgYQAsgYgBgwQAAgGgBABQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIAAgEQABgHAFgEQAIgKAHgQIABgBQABgEADgBIABgDIABgBQABACAEACIAGAGIApAZIAOAJQAlAPAOgSQAFgHABgPQAAgHgCgBQgCgBgCgGQgCgGABgCIAAgEQAHgUgCgYIgBgGIgFgUIgKgRQA7BOAOBGQAPBHgZBfQgHAcgfApQgsA5g4AmIgdARIgDAAIAFAAIgKABIigASQhLAAgWgDgAFVhCQg3A3gJAqQgIAqAVA3QAUA2AKgeQAchZAchBQAghKAohCQg2AWg1A2gAA9iUQg1AEgWAJQgnAQAFAnQAIA5AKATQAOAeAjABQA0AAAwgVQA7gYgLgnQgMgrgdgZQgbgXghAAIgFAAg");
	this.shape_46.setTransform(-0.6486,51.6663);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#009EFB").s().p("AM+N4IABgBIAcgRQA4glAsg6QAfgpAIgcQAYhegOhIQgPhHg6hOIAJARIAGAUIABAHQABAYgHAUIAAABQAAABAAAAIAAgBIgGgOIgLgTQgFgKgGgGQgJgKgJgHIgUgPQgDgDgGgCIgJgEQgygkgbA5IACALIAAABIACALQAIAXAhAdIAAABIgCADQgCACgCAEIAAABQgHAPgJAKQgEAFgBAGIgBAEQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAQACAAAAAFQAAAygsAYQgrAXg3gSQgmgMgJgsQgJguAegvQALgDAbgNQAbgOAPgDQhOhaA2g6IABgDIAGgDQAMgEATAAQAJAAAOAHQANAGAIAHIAQANQAKAHAFAGIAaAiQgBgQAFgLQAFgKAJgBQAKAAALAJIAiAbQgLgUgPgMIgSgQQhdhfhZAQQghAFgwAYQg5AeggAOQiYBHi8gtQh1gbhyArQgrAQg0gNQgWgFgFgIQgGgIARgIQg8gogYgLQgkgShCgDQgpgChQAPQhOAQgqARQhIAdgLAIQglAYAFAkIABAIIAAAAIgMgGIgNgEQghgFgfALQgbAJggAYIgRAPQgFAFgGAKIgKARQgDADgCAJIgyAsIgHAGIgHAFIgIAKQgEAHgGAHQgFAHgFANQgYBBAFA4QAGBEAwAnIADAFIABACIAAABIgWgHQgjgdgQgnQgNghgFg0IAIhfIABgBQANgMAKgMIAXgdIAhgfQAjghA0gpQAxgmAlgYQAegTgBgMQAAgEgDgEIglgeIgGgCQgggLgLgdQgIgSgDgvIgBgSQgEhBAGglIAShaIAQgmIAPghQAehAAthLIASgNQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAABABIAVAIQANAFALACQALABAgAAIBngxQAtgiAthBIAzApIA0ApQAFADAdAOQAWALAIABIBeASQAHABAMAAIATgCIAEgDQAlgqAAgpQAAgGgDgNQgIgngngqIgTgUIgIgGIh5hAQgEgDgKgCIhngSIgqgDIgYgDQg7gHgygUIgZgMQgugYglgiIgHgGQgEgPgCgQIgEgQQgDgcAEgUQAMg0AVgZQAYgbAzgNQAQgEBPAKQBQAJAWAMQAbAPAHACQAbAJA4ALQgBACALAJQALAIAMAFIAcAQQAVALAUADQAqAGBFgNQAtgIBCgUQCtgzChgDQA1gIBAAIQApAFARADQAgAHATANQAbASAKAJQARAPARAWQAhAtgcAjQgXAcg3AQQgBAsgLALQgKAKgwAIQhfASgjAFIgsAHIgGABIhMADIhmAEQgHAAgLADQgQAEgIAGQgnAdAhA/IANAQQAGAHAJAFQATAMAnAHIAjAEIAPAAIBogBIASAAIARABIAgACQBUACAuAGIAPABQAUABANAMQAGAEAGAJQAKANAFARIAGAWQADAVAIARQASAiAngLQAZgGAggWIANgNQAVgVAKgDIADgBQASAAAIAkIABADIAHA6QAFAtACAwIABAFQABAPAAAuQAAAwgCAdIgBBLIAABYQABAdAMAeQALAeAUAWQAPAHAQAFIAEgEIAEgIIABgFIAAgBIAGAKIAEABQAXA0BMCtIAEARQADAOAAAKQAAAXgBAcQgBAKgDAOQgMA2guBGIgBACIAAABIgDAEIgBABIgCADIgBACIgBABIhRBFQgXAKggAEIgKAEIgCAAg");
	this.shape_47.setTransform(-0.3687,-5.1593);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#CBFEFF").s().p("ADLC7QgagKhBgiQhKgEiRgEQiXgDhEgDQgLgJgCgLQgBgIAEgRQA5gMBRAAQAuAABeAEQB3gVBsgZQAWgkAGgqQAFgcgBg2QgGgYAAgOQgBgTAIgTQAJADALAGIABAAIAgBCQATAnALAdIAfBRIAHAQQAEAKACAIQAGAWACAVIADAaIAAAKIAAgCIgBAFQgDAMgJATQgKAYgIAGQgGgCgBACQgCADAAAIQgygBgvgSg");
	this.shape_48.setTransform(60.6858,-61.85);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CBFEFF").s().p("AkRAAIADAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAgBIACgFQAAgEACgBIBSgDQAxgDAggPQCMAAAwADQBqAHBQAXIAAALIgMAAQggAPg0AAQg8gCgbAAIlmAIg");
	this.shape_49.setTransform(-56,-51.05);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#3CF2FF").s().p("AOZJ0QgqgvgChAQgChSADhRQADhngDgoIAAgHIgHhXIgHg6IgBgDQgIgkgTAAIgDABQgKADgVAVIgNANQgfAWgZAGQgnALgSgiQgIgRgDgVIgHgWQgFgQgJgNQgHgJgFgEQgNgMgUgBIgPgBQgugGhVgCIgggCIgRgBIgRAAIhoABIgzgEQgmgHgUgMQgJgFgGgHIgMgQQghg/AmgdQAJgGAQgEQALgDAGAAIBngEIBLgDIAHgBIArgHQAjgFBfgSQAxgIAKgKQAKgLABgsQA4gQAWgcQAdgjgigtQgQgWgRgPQgLgJgagSQgUgNgfgHQgRgDgpgFQhBgIg1AIQigADiuAzQhCAUgtAIQhEANgrgGQgTgDgVgLIgdgQQgLgFgMgIQgKgJAAgCQg4gLgagJQgIgCgbgPQgVgMhRgJQhPgKgPAEQg0ANgXAbQgWAZgLA0QgEAUADAcIADAQIAGAfIAHAGQAlAiAvAYIAZAMQAxAUA8AHIAYADIAqADIBnASIAIADIAGABIB5BBIAHAGIAUAUQAmAqAJAnQADANAAAGQAAApglApIgEADIgUACQgLAAgIgBIhdgSQgIgBgWgLQgegOgFgCIgzgpIg0gpQgsBBguAhIAFgEQALgKALgSQALgUABgLIABgJIAAgKQgCgWgTAIIgHAEIgFACQgEACgBADIgGAPIgGANIgBABIgEAIQgJAQgMAIIgGAEIgBAAQgYARgUAGQgXAHgZgGIgHgCQgNgGgIgFQgXgRgJgJIgUgUQgIgHgJgFQgNgHgJAFIgHADQgJAKgDAIIgBADIgDAdIgDANQgJAngKAZQgMAagRAWIgCACIgGAFIAAgcQgagBgNgKQh7hAAaifQAThwBTiDIgHAAIACgCIAmgnIAAgBIABgBQAHgFABgDQAag8ATgjIAIgMIAAgBIAKgRIASgdIABgCQASgbATgPIAGgDIAfgMQAFgCACABIAzADIApABIAGAAQCkAHDwgDIGKgFID6AEQCRADBlgGIAJAAIAJABQAIACAJAHIAPANIACACIAMALQAEAEAKARIACAFIAyB5IgBgBQgLgGgJgCQgIASABATQAAAOAGAYQABA2gFAcQgGArgWAkQhsAah4AUQhegDguAAQhRAAg5ALQgEARABAIQACALALAJQBEADCXAEQCSAEBKADQBBAiAaAKQAvASAyACQAAgJACgDQAAAAAAAAQAAgBABAAQAAAAABAAQABABABAAIADAAQAVgaAKgmIgBASIgGBFQgJBkgKCXIgPDYQgDAtADA3IAWBRIAEAMQAAABAAAAQAAABAAAAQgBABAAAAQAAABAAABQgBADgDAFIgFAEQgOgFgQgHgAskiUIAIAiIFngIQAaAAA8ADQA1AAAfgQIAMAAIAAgKQhQgZhpgHQgxgDiNAAQggAPgwADIhTADQgBABgBAEIgBAGQgBAAAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgEgBIAAAAg");
	this.shape_50.setTransform(-2.9099,-36.28);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AI5PKQgqgFgugMQgvgNghgOIgogPQgRgHgPgNIgsAcQgYAOgbAFQgdAFgvgDQgOgBgggKQgfgJgTgHIgkgNQgXgHgLgGQh0AKimgGQi7gJhcgDQiiA6ibgOQhJgVgbgMQg7gcgRgsQghhVAEhdQABgTADgXIAFgoIAAgDIACgEIAAAAIBbjfIACgGQAHglADgZQAKhbABhiQgChuACg1Qg6hmgUhkQgWhmAQhsQADgaAUgcQAZgeALgSQAlg4AxgwIBIiKQAqhFAWgWQAognA4ACQEAAPGjgFQHjgGDHAGQAdgBAfAMQAfAMAYAXQAcBDA5B3QA7B6AbA/QAgBcgSBrQgMBkgJCUIgNDZQgHBWARBaQBTCLAcBWQAsCJgtBpQhXCPh+AwQhKAdhmAAQg0AAg8gIgAFNM9IADADIAWAbQAOAQAFACIAEACQAaAMAVAHIAkAMIARABIAqAGQAbAFARABQAWADBKAAICggSIAHgBQABAAABAAQABAAABAAQAAAAAAAAQgBAAgBABIACgBIAKgDQAggEAXgLIBRhFIABgBIABgBIACgDIABgBIADgFIAAgBIABgBQAuhGAMg3QADgOABgKQABgcAAgWQAAgLgDgOIgEgQQhMiugXgzQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAIgDgEIgBgCIgDgFIAAABIgEgLIgVhRQgEg4ADgsIAPjXQALiYAJhlIAGhFIgCg2IgDgXIgFgUIgOghIgfhSQgQgpgnhVQgmhSgSgvIgDgEQgIgQgFgFIgMgMIgCgBIgQgNQgJgIgIgCIgIgBIgKABQhkAFiRgDIj7gEImJAFQjxADikgHIgGAAIgpAAIgzgEQgBAAgGACIgeALIgGADQgUAPgSAcIAAABIgSAeIgKARIgBABIgHAMQgTAjgbA8QgBADgHAFIgBABIAAAAIgoAqIAAABIgFAEIgFAGIgcAlQgiArgUA3QgTAygEA0QgCATAAASIAAAFIAAAHIABAlIADAdIAJA5QABAMAFAHQAQAtAUAWQAYAaAjACIACAAQAFABACgCIAVgQIAMgKIACgCIAGgFIACgCQASgVALgbQALgYAIgnIADgOIAFggQACgJAKgJIAHgEQAJgEANAGQAJAFAHAIIAUAUQAJAIAXASQAIAGAOAFIAHADQAZAFAXgHQAUgGAYgSIABAAIAGgDQAMgJAJgPIAEgIIAAgBIAGgNIAGgQQABgCAEgCIAGgDIAGgDQAUgJABAWIABAKIgBAJQgCAMgLATQgLATgLAKIgDAEIgCABQgqATg8AdQggAAgLgBQgLgBgNgFIgVgJIgFgCIgGgEIgBAAIgMgMIgHgHQgEgFgDAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgBABQgGABgFAQQgFAPgBAQQAAAMgLAXIgTAlQgLAXgiAVQgcASgTADIgEAAIgBABIgKAAIgDABIgGgBIgJCtIgLCGIgPBwIgEAXIgDAKIgLAkIgLAhIgLAfIgpBmIgHAQIgBADIAAABIgIBfQAFA0ANAhQAQAoAjAdIAWAGIAAAAIABAAIBdAYIAGABQAsAMBDgHIAXgCQAxgGAngMQAPgEAWgJIAQgGQADgBALgCIAHAAQAKAAA2gDIADAAIDiAOQCEAHBfgEQgJgEAAgOQgBAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAGgOAJAAIAPACQADABAIAEIACABQAEACAIAJIAIALQAEAFANAIQANAIAKAEIAVAJQAxASAfAFIAHACQAUAGAhgHIAQgDQAJgDAUgKQAPgIAMgLIAIgJQAEgDAAgHQAGgMAHgFIAHgCIAAAAQAFAAALAFg");
	this.shape_51.setTransform(-0.4666,-7.1075);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#3CF2FF").s().p("AgvByQgkgFgagSIgKgKQgHgIgBgFIgFgSQgEgRABgTQABgNACgMIABgCIgFAEIAFgEQACgJADgEQANgXAHgJIASgPQAggZAbgKQAfgLAgAFIANAEIAMAGIABAAQAbASADAEQAQAPAJALIALAPQAHAKADAHIAAAHQAAAagLAWQgJAUgUAUIgOALQgbAVgeAMIgFABIgdABQgWAAgQgDg");
	this.shape_52.setTransform(-77.95,44.5841);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3CF2FF").s().p("Ah7GAQAJgRAIgTIAEgLIAYhEQAYhVAHgdQADgOAEg2QADguAKgWIAChcQAAgVgCgpQgBgJgIgpQgFgRAAgIIgDgFQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAAgBIAEAAQATgEAbgTQAigWALgYIATgmQALgZABgNQAAgQAFgQQAFgRAGgBIACgBIABABQAEgBAEAEIAHAIIANAOIAGADIAEACQAAABAAAAQAAAAAAAAQgBAAAAABQgBAAgBAAIgRANQgtBOgfBEIgfBJIgRBdQgFAkAEBCIABAJIAAAKQADAsAHAVQALAeAgALIAGACIAUARIARAOQADACAAAEQABANgeAUQglAZgvAnQg0ApgjAjIgkAiIARggg");
	this.shape_53.setTransform(-86.1889,4.55);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CBFEFF").s().p("AhOFVIAHgRIAphoIALgfIAKghIALglIACgLQAEgNABgKIALhSIAEggIgBAEIABgJQAJhMADg7IABgfIAGiNIAFAAIAEAAIAEgBQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQACABABAHIAGAZQAHAeABAUQACAfAAAfIgBBdQgLAWgDAtQgDA2gEAOQgGAdgZBVIgXBEIgEAKQgKAcgXAnIgDAGIgSAXQgMAOgLAJg");
	this.shape_54.setTransform(-96.725,16.8917);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#CBFEFF").s().p("AAjEXIgBAAQgjgCgXgcQgUgYgQgwQgEgGgCgOIgKhcIgBgnIAAgHIAAgFQAAgTACgUQAEg1ATg0QAVg5AggqQATgaAKgLIAKgLIAAgBIABAAIAGAAQhSCDgTB2QgcCmB5BHQANAKAaABIAAAdQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAIghAbQgBACgEAAIgCAAg");
	this.shape_55.setTransform(-94.425,-49.995);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#3CF2FF").s().p("AAdBKIgOgIQgTgLgVgPIgHgFIgFgEIAAAAIgBgBQghgegIgWIgDgLIAAgBIgCgLQAZg5A0AjIAIAFQAFACADACIAVAPIASASQAFAGAFAKIAMASIAGAPIAAAAIABACQAAACACAGQACAGACABQACACAAAGQgCAQgEAGQgHAKgOAAQgMAAgRgHg");
	this.shape_56.setTransform(85.8,39.5758);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3CF2FF").s().p("AhFB5QgVg4AIgrQAJgrA1g5QA0g3A1gXQgnBEgfBMQgaBDgbBbQgDALgFAAQgJAAgOgkg");
	this.shape_57.setTransform(35.2046,52.2158);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#009EFB").s().p("AgnBaQgkAAgPggQgJgUgIg5QgGgoAngQQAXgKA0gDQAjgDAdAaQAeAZAMAsQALAog7AZQgvAVgxAAIgCAAg");
	this.shape_58.setTransform(5.1653,44.9394);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1918B8").s().p("AI7FWQg4gJgegDIgRgBIgegKIgGgCQgXgHgYgLIgEgCQgFgDgOgQQgTgXgDgFIgDgCQgLgFgGAAIgDAAIgDACQgHAFgGAMIgBAEQgCAFgCABQAAACgIAHQgLANgPAHQgTAKgKACIgQAEQgiAGgUgGIgHgBQgegGgxgSQgJgDgMgGQgLgEgNgIQgNgIgEgFIgIgLQgHgJgFgDIgCgBQgIgEgDAAIgPgCQgJAAgGAOIgBAFQABAOAJAEQhfAFiFgIIjigRIgDAAIhHADQgFAAgJACIgQAHQgWAIgOAEQgoAMgwAGIgXADQhDAHgsgMIgGgBIhdgYIgBgBIgBgCIgBgBIgCgEQgwgngFhFQgFg4AXhCQAFgNAFgHIAKgOIAIgKIAOgLIAygtIAAABQgEAOAAANQgBATAEARIAEARQACAFAHAIIAJAKQAaASAlAFQAaAEAqgCIAEgBQAegMAcgVIAOgLQAUgTAJgUQALgWAAgbIAAgHQgEgHgGgKIgLgPQgJgLgQgPQgFgFgagRQgBgCAAgGQgFgkAkgZQAMgJBIgeQApgRBOgQQBQgQApACQBCAEAkARQAYAMA8ApQgRAIAGAIQAFAIAWAGQA0ANArgQQBygtB0AdQBUAUBJgCQBfgDBVgqQAggPA4geQAvgYAhgGQBXgPBcBgQAIAGALAKQAOALALAVIghgbQgMgJgJAAQgKABgEAKQgFAMACAPIgbgiQgFgGgKgHIgQgNQgIgIgNgGQgNgGgJAAQgTAAgLAEIgGACIgBAEQgeAgAMAsQAJAiAiAoQgPAEgaANQgbAOgLADQgdAwAKAvQAKArAlANQA4ASArgZQArgYgBgyQgBgFgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIAAgEQABgHAFgEQAKgNAFgNIAAgBQACgEACgCIACgCIABgBQABACADACIAHAFQAVAPAUALIAOAIQAlAQANgTQAFgGABgQQAAgHgCgBQgCgBgCgGQgCgGAAgCIAAgEQAHgVgDgYIgBgGIgGgUIgKgRQA9BOAQBHQARBIgXBgQgGAcgfArQgrA7g3AnIgdARIgDABIgGABIigATQhMAAgVgCgAFUhCQg2A4gIArQgJArAWA4QAVA4AJgfQAbhbAchCQAehMAnhEQg1AWg0A4gAA9iWQg1AEgWAJQgnARAGAnQAIA7AJATQAPAfAjAAQAzABAwgVQA7gZgLgoQgMgsgegaQgbgXgfAAIgGAAg");
	this.shape_59.setTransform(-0.8198,51.0927);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#009EFB").s().p("ANBONIACgBIAcgRQA3gnArg7QAfgrAGgcQAXhggRhJQgQhHg9hOIAKARIAGAUIABAGQADAZgHAUIAAABIAAABIAAAAIgHgPIgLgTQgFgKgGgGIgSgSIgVgPQgDgCgFgCIgJgFQg0gjgYA5IACALIAAABIACALQAIAXAhAeIABABIgCADQgCACgCAEIAAABQgFANgKANQgFAEgBAHIAAAEQAAABAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAABAFQABAzgrAYQgrAZg4gSQglgNgKgsQgKgvAdgwQALgDAbgOQAagNAPgEQgigogJgiQgMgsAeggIABgEIAGgCQALgEATAAQAJAAANAGQANAGAIAIIAQANQAKAHAFAGIAbAiQgCgPAFgMQAEgKAKgBQAJAAAMAJIAhAbQgLgVgOgLQgLgKgIgGQhchghXAPQghAGgvAYQg4AeggAPQhVAqhfADQhJAChUgUQh0gdhyAtQgrAQg0gNQgWgGgFgIQgGgIARgIQg8gpgYgMQgkgRhCgEQgpgChQAQQhOAQgpARQhIAegMAJQglAZAGAkQAAAFABADIgBAAIgLgGIgNgEQghgFgfALQgbAKggAZIgSAPQgHAJgNAXQgDAEgCAIIgFAFIgtApIgOALIgIAKIgKAPQgFAHgFANQgXBCAFA4QAFBFAwAnIAEAHIAAABIgWgHQgigdgRgoQgNghgEg0IAHhhIABgBQALgJAMgOIAXgeIAhgfQAjgjA0gqQAwgnAmgZQAdgTgBgNQAAgFgCgCIgSgNIgTgRIgGgDQgggKgMgeQgGgSgEgvIgCgTQgEhEAGgjIAShcIAehJQAfhFAuhNIARgNIABgBIACgBIAVAJQANAFALACQAIABAjAAQBSgqAVgJQAwglArhBIAzAqIA0ApQAGAFALAGIARAIQAUAJAKADIBdASQAIABALgBIATgBQACAAACgEQAmgrAAgqQAAgHgDgNQgJgngmgsQgIgJgLgLIgIgGIh4hCQgGgDgIgCIhngTIgpgDIgZgDQg7gGgygXQgOgGgKgGQgxgagigiIgHgGIgGggIgDgQQgDgbAEgXQAMg2AWgZQAYgbA0gNQAQgEBOALQAmAFAPADQAjAGAOAIIASALQAGADAKADQAaAKA4ALQgBACALAJQALAJALAFIAdAQQAUALAUADQAqAGBEgNQAsgJBDgVQCsg1ChgCQA5gJA9AJQArAGAPADQAgAHATANQAbATAKAJQARAPARAXQAiAtgdAkQgXAdg4ARQgBAugKALQgKAKgxAIIhIANIg6AKIgsAIIgHABIhLADIhnAEIgRADQgPAEgKAGQgmAdAhBCQADAHAJAKQAGAGAJAGQAVAMAlAHIAIABIAbADIAPAAIBogBIAiACIAgABQBQACAzAHIAPABQAUABANAMQAFAFAGAJQAJANAFASIAGAXQADAYAIAPQARAjAngKQAZgGAfgWIACgCIAMgMQAVgVAKgDIADgBQASAAAHAmIABADIAGA9QACAcADBDIAAgEIABAKQABARgBAuQgBAxgDAdQgBAQAAA6QgBA1ABAlQABAdAMAeQAMAfAUAVQARAJANAEQABABAEgFIAEgJIABgEIAAgBIAGAKIADABQAkBKBFCYQADAFACAMIAEAYQABAagBAZIgDAZQgLA5gtBGIgBADIgDAEIgCADIgBABIgCADIhQBHQgVAKgiAGIgJADIgCABg");
	this.shape_60.setTransform(-0.525,-7.4302);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#CBFEFF").s().p("ADKDAQgYgKhCgkQhLgEiPgEQiZgEhDgDQgLgJgCgLQgBgIAEgSQA5gMBRAAQAvABBeADQBygUBzgcQAWglAHgsQAEgdAAg3QgGgZgBgNQAAgUAIgTQANAEAHAFIABAAIAgBDQATAnALAeIAdBVIAHARQAEALACAHQAGAaABAUIACAbIgBALIABgCIgBAFQgEAMgJAUQgLAZgIAGIgDAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABIgCALQgxgDgvgTg");
	this.shape_61.setTransform(60.54,-65.175);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CBFEFF").s().p("AkRgBIADABQABAAABAAQAAAAABAAQAAAAABAAQAAgBAAAAIACgGQAAgEACgBIBSgCQAxgEAggPQCKAAAyAEQBqAHBQAYIgBALIgLAAQggAQg0AAQg8gCgbgBQhYABkOAHIgHgjg");
	this.shape_62.setTransform(-56,-54.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3CF2FF").s().p("AOtKTQgOgFgQgIQgVgXgMgdQgMgeAAgeQgChnADg+IADhLQACgogCgeIAAgHQgCg5gEghIgFg9IgBgCQgIgngSABIgDAAQgKADgVAVIgMANIgBACQggAVgZAGQgmAKgSgjQgHgPgDgXIgGgXQgFgSgJgNQgGgIgGgFQgNgMgUgBIgOgCQg0gGhPgCIgggCIgigCIhoABIgzgDQglgHgVgNQgJgFgFgHQgJgKgEgGQghhCAngdQAJgHAPgEIASgDIBmgEIBMgDIAGAAIAsgIIA7gLIBHgNQAxgHAKgLQALgLABguQA4gQAXgdQAdglgigtQgSgXgQgPQgLgJgbgSQgTgNgfgHQgPgEgrgFQg+gJg5AIQihACisA2QhDAUgrAJQhFAOgqgHQgTgDgVgLIgcgPQgLgGgMgJQgKgIAAgCQg3gMgagJQgKgDgGgEIgSgKQgOgIgkgHQgOgDgmgFQhOgKgRAEQg0ANgXAbQgXAZgLA2QgFAWADAbIADARIAGAfQABADAGAEQAjAhAwAbQALAGAOAGQAxAWA8AHIAYADIAqADQAiAFBEAOIAPAEIB4BCIAHAHQAMAKAIAKQAmAsAIAnQADANAAAHQAAAoglAsQgDADgBAAIgTACQgMAAgHgBIhegSQgJgCgVgKIgRgIQgKgFgHgFIg0gpIgzgqQgrBCgvAjIAEgEQALgKALgTQAMgUABgMIABgTQgCgXgTAJIgHADIgFADQgEACgBACIgMAeIgBABIgEAIQgHAOgOALIgGADIgBABQgYARgUAGQgXAHgagFIgHgDQgOgGgHgGQgRgMgPgOIgTgVQgXgXgQAIIgHAEQgKAKgCAJIgBADIgHArQgJArgKAYQgMAbgSAYIgCACIgGAFIABgdQgagBgNgKQh6hHAbimQAUh2BTiDQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABIgDAAIACgCIAmgoIAAgBIAAgBQAHgFACgDQAZg7AVgnIAIgNIAKgRIASgfIABgBQASgcATgPIAGgEQATgHANgEIAHgCIA0AFQAZABAQAAIAGAAQClAKDugEIGGgHQAqAADRAFQCSAEBkgHQAPgBADABQAIACAJAIIAQANIACABIAMAMQADADALATIACAEIAzB9IgBAAQgHgFgNgEQgIATAAAUQABANAGAZQAAA3gEAdQgHAsgWAmQhzAchzAUQhegDgvgBQhRAAg5AMQgEASABAIQACALALAJQBDADCZAEQCQAEBLAEQBCAkAYAKQAvATAxADIACgLQAAgBAAAAQABAAAAAAQABAAAAAAQABAAABAAIADABQAWgcALgnIAAABIgJBZQgMBrgNCbIgTDaQgCAbABAiIACAoIAAADIAXBOIAEAMIgBAFQAAADgEAFQgDAFgBAAIAAAAgAskiXIAIAkQEPgHBYgBQAbAAA7ADQA1gBAggQIALAAIAAgKQhPgZhqgHQgzgEiKAAQghAPgwADIhSACQgCACAAAEIgCAGQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgDgBIgBAAg");
	this.shape_63.setTransform(-2.9779,-39.1727);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AI8PjQgrgGgtgLQgwgMghgPIgogPQgRgHgPgMIgtAdQgYANgbAFQgaAFgzgEQgNgBgggJQgfgJgTgIIgkgNQgYgHgLgFQh0AMimgHQi8gMhcgEQiiA6iZgOQhKgVgbgNQg6gcgRgsQghhXAEhcQABgYADgTIAFgoIAAgDIACgEIgBAAIBbjjIACgGQAHgmADgZQALhgAAhfIgCioQhwjVAgjgQADgaAVgcQAYgfALgRQAig1A1g1QA9h6ALgTQAthKATgUQAogoA7ADQD+AUGigHQHYgIDRAJQAbgEAhANQAfAMAYAXQAXA6BACFQA4B1AcBMQAfBfgWBxQgOBlgMCeQgNCvgFAsQgJBSAVBeQBXCLAeBXQAwCKgrBqQhUCUh+AzQhMAehoAAQgzAAg6gHgAFONWIAEACQACAEAUAYQANAQAFACIAEACQAZAMAWAHIAGACIAfAJIARACQAdADA5AJQAUACBMAAIChgUIAGgBQACAAABAAQABAAAAAAQABAAgBAAQAAAAgBAAIACAAQACAAAIgEQAhgFAWgKIBQhHIACgDIABgBIABgDIADgFIACgDQAshFALg6IADgYQABgagBgZIgDgZQgDgLgCgGIhpjiQgBABAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBIgDgEIgEgGIAAAAIgEgLIgXhOIAAgDIgCgoQgBgiACgbIATjZQANibAMhsIAJhZIgCgnQAAgOgDgKIgEgWIgNgjIgdhWQgRgtgmhTQgohXgSguIgCgEQgLgTgDgDIgMgMIgCgBIgQgNQgJgIgIgCQgDgBgPABQhkAHiSgEQjRgFgqAAImGAHQjuAEilgKIgGAAQgQAAgZgBIg0gFIgHACQgNAEgTAHIgGAEQgTAPgSAcIgBABIgSAfIgKARIgIANQgVAngZA7QgCADgHAFIAAABIAAABIgzA1IgcAmQghAqgVA5QgTA0gFA1QgCAUAAAUIAAAFIAAAHIABAnIAKBcQADAOAEAGQAPAwAUAYQAYAcAjACIACAAQAFAAACgCIAVgQIAMgLIACgCIAGgFIACgCQASgYAMgbQAKgXAJgrIAIgwQACgJAKgKIAHgEQAQgIAXAXIATAVQAPAOARANQAHAGAOAGIAHADQAaAFAXgHQAUgGAYgSIABgBIAGgDQAOgLAHgOIAEgIIABgBIAMgeQABgCAEgCIAFgDIAHgDQATgJACAXIgBATQgBAMgMAUQgLAUgLAKIgDADIgCABQgRAIhVArQgjAAgIgBQgLgBgOgFIgUgJIgFgDQgEgBgCgCIgNgOIgHgHQgEgFgEABIgBgBIgCABQgGACgFAQQgFAQAAAQQgBANgLAZIgTAmQgLAYgiAWQgcATgTAEIgHABIACgBIgGABIgEAAIgDABIgGgBQgEBGgEBrIgLCIIgEAfIgLBSQgBALgDANIgDAKIgLAlIgLAiIgLAfIgpBoIgHAQIAAADIAAABIgIBgQAEA0AOAiQAQAoAiAdIAXAGIAAAAIABAAIBdAYIAFABQAsAMBDgHIAYgCQAwgGAngMQAPgEAVgJIARgGQAIgDAGAAIBGgCIADgBIDjARQCFAJBfgGQgJgEgBgOIAAgEQAGgPAKAAIAOACQAEABAIAEIACABQAFADAGAIIAIALQAEAFAOAIQANAJAKAEQAMAGAJADQAyASAeAFIAHACQATAGAigHIAQgDQAKgCAUgLQAOgHAMgMQAIgHAAgCQACgCABgEIACgFQAFgMAHgEIADgCIAEAAIABAAQAFAAAKAFg");
	this.shape_64.setTransform(-0.5873,-9.4777);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).wait(13));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-109.8,-90.6,219.7,181.2);
p.frameBounds = [rect, new cjs.Rectangle(-109.6,-90.5,218.8,180.7), new cjs.Rectangle(-109.6,-95.2,219.1,185.7), new cjs.Rectangle(-109.7,-100,218.8,190.6), new cjs.Rectangle(-109.7,-104.8,218.6,195.5), rect=new cjs.Rectangle(-109.7,-109.6,218.4,200.4), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


(lib.PuppetShape_1复制 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.WarpedAsset_4("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgnDUQgogUgcgYQgdgYgagjIgHgWQgIgQgJAFIgxAJQgXgGgHgYQARgKANgBIAegTQAYhCAcgqQAkg2A0gcQCOhICeAWQAMACAHAHQAGAJgPAGQgFACgPABQgOABgGACQgbABgCADQgCAEAOAQQAtAsASAyQATAygFA9QgSA8ghAkQgeAig5AdQg2ASgwAAQghAAgfgJgAAUigQhWAVgkAsQgfAmgHAbQgGAUACAuQADBYBWAxQArAZBCgFQBAgGAsgeQBLg1gEhsQgBgygOgcQgQgfgtgjQgagUgtAAQgdAAglAIg");
	this.shape.setTransform(44.0532,-0.0972);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3FEFF").s().p("AgIDMQhJAAg2gtQg5gwgLhAQgLhBAog/QAlg5BJgeQAzgWBXgNQBGAvAMALQAoAmAHAxQAKBCgRA6QgUBHg3AfQg+AkhBAAIgCAAg");
	this.shape_1.setTransform(48.0799,0.6253);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgsDcQgfgDg1gOQg5gfgdghQghgkgSg7QgFg9AUgyQATgyAtgsQARgPgHgFIgYgFIgbgCQgNgBgDgEQgNgIgBgEQAAgHAkgFQA1gIBWAMQBjAOAyAgQBlBCAnB9IAeAUQALAAATAKQgHAYgXAGIgxgIQgOgJgKApQgfAngZAVQggAcglAOQgcALggAAIgXgBgAikiSQgjAhgQAeQgUAmACApQADA1AMAjQARAuAlAaQA9AgAxAFQA6AHA3gdQAkgUAXgkQAXgkAFgtQADgfgLgiQgKgjgUgaQhGg3g7gPQgagHgZAAQgvAAgtAXg");
	this.shape_2.setTransform(-43.825,-0.0395);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3FEFF").s().p("Ah9CqQgzgpgSg/QgQg0AFhKQAQgwAiglQAggfAygaQC6AYA9BgQBSCAh3ByQg7ArhGAAQg6AAhLghg");
	this.shape_3.setTransform(-47.7046,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.7,-22.1,141.5,44.3);
p.frameBounds = [rect, rect=new cjs.Rectangle(-70.5,-22.1,141.2,44.2), rect];


(lib.PuppetShape_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.WarpedAsset_4("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgnDUQgogUgcgYQgdgYgagjIgHgWQgIgQgJAFIgxAJQgXgGgHgYQARgKANgBIAegTQAYhCAcgqQAkg2A0gcQCOhICeAWQAMACAHAHQAGAJgPAGQgFACgPABQgOABgGACQgbABgCADQgCAEAOAQQAtAsASAyQATAygFA9QgSA8ghAkQgeAig5AdQg2ASgwAAQghAAgfgJgAAUigQhWAVgkAsQgfAmgHAbQgGAUACAuQADBYBWAxQArAZBCgFQBAgGAsgeQBLg1gEhsQgBgygOgcQgQgfgtgjQgagUgtAAQgdAAglAIg");
	this.shape.setTransform(44.0532,-0.0972);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3FEFF").s().p("AgIDMQhJAAg2gtQg5gwgLhAQgLhBAog/QAlg5BJgeQAzgWBXgNQBGAvAMALQAoAmAHAxQAKBCgRA6QgUBHg3AfQg+AkhBAAIgCAAg");
	this.shape_1.setTransform(48.0799,0.6253);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgsDcQgfgDg1gOQg5gfgdghQghgkgSg7QgFg9AUgyQATgyAtgsQARgPgHgFIgYgFIgbgCQgNgBgDgEQgNgIgBgEQAAgHAkgFQA1gIBWAMQBjAOAyAgQBlBCAnB9IAeAUQALAAATAKQgHAYgXAGIgxgIQgOgJgKApQgfAngZAVQggAcglAOQgcALggAAIgXgBgAikiSQgjAhgQAeQgUAmACApQADA1AMAjQARAuAlAaQA9AgAxAFQA6AHA3gdQAkgUAXgkQAXgkAFgtQADgfgLgiQgKgjgUgaQhGg3g7gPQgagHgZAAQgvAAgtAXg");
	this.shape_2.setTransform(-43.825,-0.0395);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3FEFF").s().p("Ah9CqQgzgpgSg/QgQg0AFhKQAQgwAiglQAggfAygaQC6AYA9BgQBSCAh3ByQg7ArhGAAQg6AAhLghg");
	this.shape_3.setTransform(-47.7046,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(13));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-70.7,-22.1,141.5,44.3);
p.frameBounds = [rect, rect=new cjs.Rectangle(-70.5,-22.1,141.2,44.2), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


// stage content:
(lib.AttackDownAnimation = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_2
	this.instance = new lib.元件10();
	this.instance.setTransform(248.05,263.6,0.8735,0.0744,0,-168.2936,5.4903,32.9,265.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({regX:33.1,regY:265.4,scaleY:0.5834,skewX:-177.9855,x:252.65,y:269.25},3).to({regX:32.8,regY:266.4,scaleY:0.7166,skewX:-177.2697,x:253.5,y:270.65},3).to({regX:32.9,regY:265.6,scaleY:0.0744,skewX:-168.2936,x:253.55,y:273.6},5/*,cjs.Ease.get(-1)*/).to({_off:true},1).wait(1));

	// 图层_3
	this.instance_1 = new lib.元件10();
	this.instance_1.setTransform(300.05,271.05,0.6116,0.0768,0,165.6712,-12.8129,32.6,265.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({regX:32.5,regY:266.1,scaleY:0.4169,skewX:165.6703,x:303,y:276.45},5/*,cjs.Ease.get(1)*/).to({regX:32.6,regY:265.7,scaleY:0.0768,skewX:165.6712,x:303.05,y:276.55},4/*,cjs.Ease.get(-1)*/).to({_off:true},1).wait(2));

	// 图层_5
	this.instance_2 = new lib.元件10();
	this.instance_2.setTransform(212.7,275.7,0.563,0.076,0,-172.3841,178.8616,32.4,265.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({regX:32.6,regY:266.4,scaleY:0.3518,skewX:-162.3722,skewY:188.8639,x:212.65,y:277.6},6/*,cjs.Ease.get(1)*/).to({regX:32.4,regY:265.7,scaleY:0.076,skewX:-172.3841,skewY:178.8616,x:212.7,y:275.7},3/*,cjs.Ease.get(-1)*/).to({_off:true},1).wait(2));

	// 组_2
	this.instance_3 = new lib.PuppetShape_1("synched",1,false);
	this.instance_3.setTransform(253.9,249.5);

	this.instance_4 = new lib.PuppetShape_6("synched",1,false);
	this.instance_4.setTransform(253.9,222.95,1,1.2032);

	this.instance_5 = new lib.PuppetShape_7("synched",1,false);
	this.instance_5.setTransform(253.9,238.45,1,0.9886);

	this.instance_6 = new lib.元件8();
	this.instance_6.setTransform(254.65,254.55,4.2965,2.6111,0,0,0,16.2,5);

	this.instance_7 = new lib.补间3("synched",0);
	this.instance_7.setTransform(255.15,266.1,0.9069,0.9069,0,0,0,0.1,0.2);
	this.instance_7._off = true;

	this.instance_8 = new lib.PuppetShape_1复制("synched",1,false);
	this.instance_8.setTransform(253.9,255.5);

	this.instance_9 = new lib.PuppetShape_8("synched",1,false);
	this.instance_9.setTransform(253.9,249.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6,p:{y:254.55}}]},1).to({state:[{t:this.instance_6,p:{y:260.8}}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true,scaleY:1.2032,y:222.95},5/*,cjs.Ease.get(1)*/).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(9).to({_off:false},0).to({y:267.85},3/*,cjs.Ease.get(1)*/).to({x:255.95,y:261.35},3/*,cjs.Ease.get(-1)*/).to({_off:true},1).wait(2));

	// 图层_1
	this.instance_10 = new lib.PuppetShape_2("synched",1,false);
	this.instance_10.setTransform(256.1,336.45,1,1,0,0,0,-0.2,90.3);

	this.instance_11 = new lib.PuppetShape_4("synched",1,false);
	this.instance_11.setTransform(254.95,335.7,0.936,1,0,0,0,-0.2,90.3);
	this.instance_11._off = true;

	this.instance_12 = new lib.PuppetShape_2复制("synched",1,false);
	this.instance_12.setTransform(256.1,336.45,1.0274,0.8395,0,0,0,-0.2,90.3);
	this.instance_12._off = true;

	this.instance_13 = new lib.PuppetShape_5("synched",1,false);
	this.instance_13.setTransform(256.2,336.5,1.0503,0.7838,0,0,0,-0.1,90.4);
	this.instance_13._off = true;

	this.instance_14 = new lib.PuppetShape_2复制2("synched",1,false);
	this.instance_14.setTransform(256.1,336.45,1,1,0,0,0,-0.2,90.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},5).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_13}]},4).to({state:[{t:this.instance_14}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true,scaleX:0.936,x:254.95,y:335.7},5).wait(13));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:false},5).to({_off:true,scaleX:1.0274,scaleY:0.8395,x:256.1,y:336.45},3).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(5).to({_off:false},3).to({_off:true,regX:-0.1,regY:90.4,scaleX:1.0503,scaleY:0.7838,x:256.2,y:336.5},4/*,cjs.Ease.get(1)*/).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(8).to({_off:false},4/*,cjs.Ease.get(1)*/).to({_off:true,regX:-0.2,regY:90.3,scaleX:1,scaleY:1,x:256.1,y:336.45},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(396.7,405.7,218.8,180.7);
p.frameBounds = [rect, new cjs.Rectangle(397.8,400.8,216.3,185.7), new cjs.Rectangle(399,395.9,213.2,190.6), new cjs.Rectangle(400,390.9,210.3,195.5), new cjs.Rectangle(401.3,386,207.2,200.4), new cjs.Rectangle(402.4,380.6,203.5,205.3), new cjs.Rectangle(399.4,399.9,211.2,186.5), new cjs.Rectangle(396.5,418,218.4,210), new cjs.Rectangle(393.7,435.5,224.9,242.1), new cjs.Rectangle(431.6,508.6,156.8,178.8), new cjs.Rectangle(427.2,509.5,164,190.1), new cjs.Rectangle(424.4,510.1,180.5,204.8), new cjs.Rectangle(390.7,445.5,230.9,260.4), new cjs.Rectangle(427.3,509.6,159.6,175.9), new cjs.Rectangle(436.5,507.4,143.9,144.3), new cjs.Rectangle(437,503.8,145.4,100.4), new cjs.Rectangle(433.4,483.4,141.2,63), new cjs.Rectangle(396.7,405.7,218.7,180.7)];
// library properties:
lib.properties = {
	id: '4D569BB5D2DBEF4B829577BA6A28D8E2',
	width: 500,
	height: 500,
	fps: 30,
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
an.compositions['4D569BB5D2DBEF4B829577BA6A28D8E2'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
