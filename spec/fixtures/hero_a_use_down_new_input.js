(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
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


(lib.Анимация2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.647)").s().p("AAAgBIABAAIgBADg");
	this.shape.setTransform(112.975,53.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.725)").s().p("AgBgIIADAIIgBAJg");
	this.shape_1.setTransform(112.35,49.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(2,4,7,0.984)").s().p("AAFEMQgXgNADgXIAAAAIAAgIIgCgvIgCgRIgFg2QgCgbgHgtIgCgMIAAgFIgBAAIgFgfIACgJIgFgIIgTiCIgMg/IgHgjIAHAXQACAIADAEIAsBDQA0BAA2AHQgCApgBAXQAAAHAGAwIgYDGIgCAKIAGAAIAAABQgCAFABAFQAAADgIAfQgVgDgcgPgAglkeIACAAIgBABIgBgBg");
	this.shape_2.setTransform(116.6,51.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(29,22,36,0.996)").s().p("AhgDpIgrgLQAIgfAAgDQgBgGADgEIAAgBIgHgBIACgKIAZjFQgHgwAAgIQACgWABgpIAEAAIALABQAUACAMAAIAKgBQAdAEAUAAQAHAAADgCQAKABAMgEQANgDAJgIIAAAAIAAAAIgGgBIAFAAQAQgDAbgoQAKgPAIgKQAUgYANACIgBAKQgHBCgDBaIgEBWQgCANABALIgDBRIgBANQgDAQABAMQgCAngDAcIgMALIgZALQgqARgpAAQgtAAgsgUg");
	this.shape_3.setTransform(135.975,57.896);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373F51").s().p("AgoAqQAGgBAEgEQgKgLgQgCQAFgBADgFQADgGgBgGQgBgFgFgDQgFgEgFAAIASgHQASgIgCgNQgBgGgFgFIBMAEIAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIAUADIgHA6QgBAFAHAGIgFAAIAGABQgJAIgNADQgMAEgKgBQgEACgHAAQgTAAgdgEgAA/AeIAAAAIAAAAg");
	this.shape_4.setTransform(134.375,38.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(55,65,82,0.996)").s().p("ABCBzIgMgBIgDAAQg1gHg1hBIgshBQgDgEgDgIIgHgXIgCgKIgEgaQgCgPAHgFQAEgDAHACIAHADIAEAAIAhA7QAgA6AqAMIgCgBIACAAQAwAMAwAAIABAAQAGAFABAGQABANgRAIIgTAHQAGAAAFAEQAFAEABAFQABAGgDAGQgDAFgGABQAQACAKALQgEAEgFABIgKABIgFAAQgLAAgQgCg");
	this.shape_5.setTransform(119.5419,31.3892);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(94,89,113,0.992)").s().p("AgzBSIAHg7IAZgYQAeggADghQADggACAHIAKACQASALAEAbQACAPgCAPIgDAYQgNgCgUAYQgIAKgJAPQgaAogRADQgHgGABgFg");
	this.shape_6.setTransform(145.1679,32.3671);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#74421D").s().p("AAjHiIghg7IgEAAIgHgDIABgEIADgTQgYhQAChoQAAgFgCgHQgkhrgbh2QgJgpgCguIgGiOQACgJACgJIAEgkQAMhJAlhHQAkhIAUgGQAUgFAagSQALCUAHAOQAIANAMBIIgDgIQgYg2gVAWIAAAdQAAAQgCANIgGBKIgGAsQAECkAVDGQAWDTAlCUIgDgBIADABQgrgLggg7gAAbHDIABgBIgCAAIABABg");
	this.shape_7.setTransform(110.15,-22.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(224,126,79,0.992)").s().p("AAEH9IgBAAQgvAAgwgMQgkiTgXjUQgVjFgDilIAFgrIAGhLQACgNAAgQIAAgdQAVgVAYA1IADAIQAcA5AsAlQACABAEgGQA8hWA/hUIAmgyIAQgVIAAAAQAPA/AQCRQAPCRggBGQggBFgNAmQgLAogFA3QgEA1gCCRIgFDIQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAIAAABg");
	this.shape_8.setTransform(130.4394,-16.725);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8A5D39").s().p("AApIuIAFjJQADiQAEg2QAEg3AMgnQAMgnAghEQAghGgPiSQgQiRgPg+IAAAAIgQAUIgmAzQg+BUg9BWQgEAGgBgCQgtgkgbg5QgNhIgIgNQgHgOgLiUIA2AGQAIALAMAAQDcAEAJADQANAFAMAvQALAvAGAbIATBrIgCAKIAAACQAFACAEAKQACAIABAMIAAATQACAMAEAXQAFAaADAmQADAmgGAaIgBAIIgCAKIg+HvIgBAKQgCgIgDAhQgEAhgeAgIgZAZg");
	this.shape_9.setTransform(134.6,-21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(99.2,-77.4,54.89999999999999,160.60000000000002);


(lib.Waist_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2C5988").s().p("AAABGIAAgPQAAgcAAgWIABhKIAACLg");
	this.shape.setTransform(-7.15,-50.4454,1.034,1,0,0,-14.7286);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#284872").s().p("AAAABQgCgPACgIQAFATgFAag");
	this.shape_1.setTransform(-7.0163,-84.7806,1.034,1,0,0,-14.7286);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#445098").s().p("AAAgKIABABIgBAUg");
	this.shape_2.setTransform(-11.95,-85.3336,1.034,1,0,0,-14.7286);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#60C1E1").s().p("AguF7QgvgNAMgbQAIgSACgRQABgHgBgHQATAHAEAAIAXAGIAZAGIAEgnIgEgBIhDgXIAAABIgDAAIgGgEIAFgYQAFgYgBgFQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIABAAIgBABIASADQAzAIADABIADAAQAAgVAHgtIADgLIAHhIIAAgKQAAhVAFhjIABgiQAChbgDhTIAAgYIACgVIABgGQADgIAEABIABAAQAFAAAFAKIABACQAAgFACgDQACgEADAAQADAAAEAFIAOAKIgBADQgCAIACARIACAWIAAAAQABAZAAAfIAAAmIgCCbIgBBLQABAWgBAcIgBAOIgGBfIgCA9IAAAWIgBARIgBAIIgBAjIADAoIAEBWQhMgRgugNgAADEMIABABIAAgCIgBABg");
	this.shape_3.setTransform(-15.297,-45.8552,1.034,1,0,0,-14.7286);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#59BDE4").s().p("AAGAEQgEgEgCAAQgDAAgCADQgCADAAAFIgBgCQgFgJgFAAIgBAAIAAgNIAdAKIAAAEIADAEIAHAJg");
	this.shape_4.setTransform(-9.075,-88.2644,1.034,1,0,0,-14.7286);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1C263D").s().p("Ag8AFIgEgoICBAhIgGAmg");
	this.shape_5.setTransform(-1.925,-17.519,1.034,1,0,0,-14.7286);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000C26").s().p("AgKAUIAGgmIAPgDIgCARQAGAWgPgGIAAAKg");
	this.shape_6.setTransform(5.1,-17.7657,1.034,1,0,0,-14.7286);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1C283D").s().p("AA4E+IgFgDIgVAAIhZgXIAAgXIACg9QAPgcgHg3IAAgLIAAiLIACibQAQgzAAhPQAAgRAcAWQADAEABAJQAMDHAXDbQACAZABA1QABA1AOAkQAJAXgFACg");
	this.shape_7.setTransform(-2.05,-56.1816,1.034,1,0,0,-14.7286);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1C293E").s().p("AgFgQIAEABIAKAfIgBAAIABABQgZgMALgVg");
	this.shape_8.setTransform(12.5237,-87.9922,1.034,1,0,0,-14.7286);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D293F").s().p("AgSCGQgHhBgMhOQgKhGgThDIABgBQAWgCAPArQAiBnAUA0IAKAgQAEAMAOACIAHAUQAFAOABAJIAAACIgGABIgKABIgMADQgFABgQAAIgTACQgPgEgCgKg");
	this.shape_9.setTransform(12.725,-74.5246,1.034,1,0,0,-14.7286);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(33,45,69,0.996)").s().p("Ah5GaIgXgGQgEAAgSgHQAAAHgBAHIABg5IADAAIBDAWIAFABIgFAnIgZgGgAhYE0QgDgBg0gIIgSgDIABgBIgBAAQgHgTgFhPIABgZIABgFIAQjZQgCg6AFgtIAJhhIAAgCIABAAIABgJIALhAIABgEIABAAIACgFIgBgCIAAgCIABgDIACgJQAEgVACgDIgCgDIAPgmIAJAJQANALAUAIQAzAUAMACQAMABAdANQATANBeABIAUA9IgNAAQgaABgagBIgGgDQgNgCgIACQg3gIgvgWQgngVgZgSIAfAiIAAANQgEgBgDAIIgBAGIgCgBIAAAWIAAAYIAADQQgEBigBBWIAAAKIgHBIIgDALQgHAtABAVgAgPCYIADABIAAAKQAHA3gPAdg");
	this.shape_10.setTransform(-5.7,-59.0766,1.034,1,0,0,-14.7286);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(2,5,33,0.996)").s().p("AAHGUIAAgKQAQAGgFgXIACgRIADAwgAgEEpQAEgCgIgXQgOgkgBg1QgBg1gDgZQgXjbgMjHQAAgJgEgEQgcgWAAARQgBBPgPAzIAAgnQAAgegCgZIAAgBQAFgbgGgTIAAgDIgHgJIgCgEIAAgFIgegKIgggiQAZASAnAVQAxAVA2AIQgIACgFAFQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABIABADQgBAJAEAXQANBFAJA1IABASQAFArAJAwQAKArgRARIgBABQABAaACAbIADACIAAAIQgCAJABANIAGBpQAAA4AFAvIgRAGgAggEmIAVAAIAFADgAC1gYQgJgKgHACIgNAIIgBgDQAAgJgGgNIgHgUQgOgDgDgMIgLggQgTg1gkhnQgOgqgWACIADgGQABgHgGgHQgCgCgFgCQAZACAbgBIAMgBIAHAUIgEgBQgMAXAaALIA/CsQAJAdAFALIALAbIAGAZIAAACg");
	this.shape_11.setTransform(4.275,-55.7488,1.034,1,0,0,-14.7286);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#87B4C6").s().p("AALAqQgLgCgzgUQgUgIgNgLIARg4QAWAbAlAHIAIACIA3AMIAUAGIAKACQgHABgEADIgCAAIAAgBIgHASIABgDIgNAlQgdgNgNgBg");
	this.shape_12.setTransform(-6.9,-99.5611,1.034,1,0,0,-14.7286);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4D86A3").s().p("AgwHsQgkgGgdgHIgEhWIB3AfIAKADIARADIAEBIIgCAEgAh4FgIABgiIABgIIABgRIAAAAIBaAXIAaAEIACAAIADAAIATgGIADBCIgBACIAAAAIgRADgAAKBLQgDgcAAgbIAAgBQARgRgJgqQgLgwgEgrIgBgSQgIg1gOhFQgEgXACgIIgCgEQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAAAQAGgGAIgBQAIgDALADIAHACQAFACADADQAGAGgCAHIgDAGIgBABQATBCAKBHQAMBPAHBAQACAJAPAFIAUgCQAQAAAFgCIAMgCIAKAAIAGgBIANgIQAIgBAIAJIAFAHIADAKIAEARIADAKIgsAWQhDAJhOgGIAAAKgAg1mEIAOglIgBACIAGgSIABACIABgBQAFgCAHgBIgKgDIAAgCIABAAIAAgBIAAAAQAeAHAlADIAWBBQhdgCgUgMgAjHnEIAAgBIgBAAIAYg0IADAFIgRA5IgJgJg");
	this.shape_13.setTransform(3.725,-57.8292,1.034,1,0,0,-14.7286);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Waist_01, new cjs.Rectangle(-23.7,-103.7,47.5,97), null);


(lib.Mouth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A1708").s().p("AB/AVQg/gMg+gDIgDAAQg+AEg/ALQgcAGgJAAIgagDIgBABQgDgCgCAAIgBAAIgLgBQgFgCgDAAIgDABIgIAAQgIgBADgKIACgHIAAgBQAKgcAQAMQAkAbBAgSQA1gPAxgFIAAAAIADAAQAxAFA1APQBAASAkgbQATgNAJAlQADAKgIABIgIAAIgDgBQgDAAgEACIgMABIgBAAQgCAAgDACIgBgBIgaADQgJAAgcgGg");
	this.shape.setTransform(-1.075,-4.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Mouth, new cjs.Rectangle(-24.3,-7.3,46.5,5.3), null);


(lib.L_Eyebrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4A2332").s().p("AiPAgQgLgUgCgbQBTgRBqgBQBhAAAbA7QAAABAAAAQAAABAAAAQgBAAAAAAQgBAAgBAAQg7gLhSAHQAAgFgCgCQhFgphOAmIAAAKIAAAKQgFAAgCgCg");
	this.shape.setTransform(0.01,-3.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#280815").s().p("AhKAJIAAgJQBNgnBGAqQACABAAAFIgKABQhBAJhKAAIAAgKg");
	this.shape_1.setTransform(-6.2,-1.9331);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.L_Eyebrow, new cjs.Rectangle(-15.7,-6.7,31.4,6.7), null);


(lib.L_eye = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFD7D6").s().p("AhTAdIgCgBQgGgFgIgLQADgRAGgNIAJgFQAFgFAFgDIgBACQgJAVAMASQAGAMAMAFIgFAAQgRgBgHAFgAAwAPIACgCIgCgBIAAgBQAIgMgFgHIgEgJIgCgJQAbAAAcAEIgEAFQgHAMgaANIgPAIg");
	this.shape.setTransform(-0.25,-5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E1108").s().p("AgeA6IgUgEIgLgCIgFABIgCgBIgDgBQgEgBgCgCIAAAAIgDgCIABAAIgFgFIABAAIgCgDIADACQAGgGASABIAFAAQgMgFgHgMQgLgSAJgVIAAgBQgEACgFAGIgKAEQgFAMgDATQgBAHgDACIgGAFQgGADgCAAQgHAAgCgJQAAgDACgJIANgjQgEgPgCgPQAVgKA9gBQAfAAAcABQAwAAAVAGQAXAHAPATQgBALgEAIQgJARgYARIgVAMIgWAKQgXALgdAAQgMAAgOgCgAAsgJIAFAJQAEAGgHANIAAABIACABIgCACIAAABIAOgIQAagOAIgKIAEgFQgcgFgcAAg");
	this.shape_1.setTransform(-0.0292,-5.8434);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.L_eye, new cjs.Rectangle(-12.9,-11.8,25.8,12), null);


(lib.strap = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.984)").s().p("AAFBeQgEgOgUAGQAAgFgBgFIg7ipIAKgBQBAAHBGgDQAIAYAEAgQAPByhNAPIgKgBg");
	this.shape.setTransform(138.9725,115.4125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(39,38,55,0.996)").s().p("AFFHDQhHhPg0hfQhKiGhehvQgJA8AhA/QAgA9AYBCQhFhCg8hKQg/hNg/hNQhfh3hXiBQgihFgQhLQBNgwBlgXIAHAAIAGARIAZA+IAMAbQgGgDgEgFQAPA8AgAqQBABXA2BhQA2BdBABVQBfB+BxBqQAdAbAFAvQAEAdAAAeQgDAYgMAAQgNAAgVgZg");
	this.shape_1.setTransform(38.625,48.7519);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#161C28").s().p("AIfI1QgrgGhWgVIhWgVQhBgQgggKQgmgNg5gXQgpgRgagMIgIgFQhDgmhPhGIhMhGIAAgCIgDAAIgZgYIhShWQgFAAgDgDQgRgRgPgUQgYhCggg8Qghg/AJg8QBeBuBKCGQA0BeBHBQQAqAwAHgvQAAgegEgeQgFgvgdgaQhxhqhfh+QhAhVg2hdQg3hhhAhXQgggrgPg7QAEAFAGACIAPAbIAAACIARAdQAIAPAiAwQAfAtAUAXIAPAPQAlA6APAUQAnA3A4A9IAJALQAgAqAwAzIAQATIAYAYIANAOIABADIAuArIArAsIABADIADABQBHBHBMAzQAdAUA8AkQBGAqAmAPQAgANA3AOQA2AOAaAFIAtAHIgKABIA6CqQACAFAAAFQAVgGADAOIgngEg");
	this.shape_2.setTransform(81.2375,67.9125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.strap, new cjs.Rectangle(1.3,1.2,145.7,123.8), null);


(lib.shirt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7CC4CF").s().p("ApWO2QAAgygHgoQgKg/gHhCQgNhvi/n5Qiom8gZgwQgkhBgRhNIgGAAIgBgKQgOhUgHgyQgLhYADg6IAKAAQA3guBIgfIApgRIAhgOQAIgEBDgLIA8gKQB5gUAMgHQAxBjBEBoQBEBoBEBQIA3BBQBJBaBNBWQgaALgZAOQgUALgFAKQgIANAEAZQAEAhAGAfIgCAEQgEAIgMALIgpAnQgiAqgjAoIAcB6QAHAggDARQgDATgQATQgKALgXATIhQBAQATAqAPA3QAJAhAOBDQAEAVgCAKQgDAPgZATIgbAVIgPAaIgLAQQAZBcAjBQQACAEAAAFQgFAAgBADQhIBohSBdQgEAKgCAAQgDAAAAgUgAIrlIQg1gtgmg0IgFgXIgIggQgEgMgFgEQgIgHgKADIgEACIgEgKIgDgNQADgBAEgBQAJgEACgKQADgJgFgKQgCgEgJgMIgVgWIgYgUQgUgygDgBQhEgLgggrQCnhiCbhtQADgDAFAAQAfgUAqALQAgAJAiAFQBYAOBnABQA7ARAnAkQACACAAAFIADABQAPAFAKAKIAJAKIAHAJQALAPAPAKQAJgBAGgFIAJAGIgBAFIgCALQgBANAKAFIAAAlIgGAmIgBALIgDAAIAAAyIAAAKIgGAoQhcDikaHPQg6llhrhbgAAOgTIgQgFIAAAAQgHgGgJgBIgDgNIgBAFIgEgUIgUhOQAjA5AaA9g");
	this.shape.setTransform(92.994,128.9723);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(54,64,82,0.992)").s().p("AlVTpIgWgBQhGgIgjgCIgVgCIhKgBQgJgEgIgFQhAgGgvgWQhPglhQgiQhngqg9hSQABg3AEhcQAEAFADAGQACAEAAAFQCdCKDXBLQBkAjCAACIAKAAIACABIAAAAIAFgLQAXgpAXguIAGgNIAmBjQgfgBgMABQgcACgTAJQAkgBAaABIAhABQAegBAoAEIABAAQAUgCAOAAIAmABIADAAIBlgDIABACIATgCIAAgBIACAAIACAAQBDgIAeAAIAgAAIABgIQAEg6gFhLQgDgpgLhcQgekbgRkEQgFARABAfQABB9AVDfQAXD1AEBmQABAjgEARIgCALQgEgCgJAAIgKAAQgFgXgCggIgHhDQgGg2gah8QgsjOgljTIAPgjIABgCQAGgOAJgiQAIgfAIgRQAEgKAFgEQAFgIAJABQAFABAFAEIAGAGQAEAHAHAPIAJAUIgBhaQAAhmgRhOIAAgKIAAj5QAAgFgCgEQgLgSgHgXQA8AAApgSIAEgCIAFgDIACgBQAJgEAIACQAFABAEADIACABQAAABABAAQAAAAABAAQAAABABAAQAAABAAABIAgJWIAPDNQAHBYAJBMQADAyAEAxQAHBZAKBYIgBAUIADANQABAHAAAKIgCAKIADAQQAHAjABAXIAAAQIAAAOIABAeIAEAcQABAQgFALQgDAKgJAEQgGADgHgDIgBgBQgHAGgKACQgPADgOAEQgpALgpAJIgWAGIg9ADQiCAKgjABIhbABQg+AAgmgCgAkURjIgth3IAqhcIAKgVIAFgLIAIgSIAPA+QAeByAhBVIg5ABIgpgBgAjlN/IgPg+IBMi1IAJgUIACALQBNEzAjCnIg7ADIg0ACQgnhcgiiHgAiQJsIgEgQIARgpIA/iUQAsD0AgChIAUBlQAKA4ADAuIADA0QACAVAEARIhLADQgmiwhRlAgAFyP8IAHACIgGACIgBgEgAASmBIgBgBIACgCQgEgDAAgFIAAgEIABgDIAFgCQA7gbA8ghIACADQACAEAAAIIABATIgKACQgdAGgTAIIgoAUQgPAHgMAEIgCgBgAgenvQgIAAgLgKIghgYIgEgDQgJgEgGgHIgNgKIgPgMQgdgQgXgWQhDhAg9hGQg0g2gmguQgUgagmg1IhFhgQgGgFgCgFIAAgBQgCgDAAgDIgEAEIgKAAQgBAAgOgPQgLgOgDgBIAvAOQACgDACgBQADgCAFAAIAYgPIAHgFQAIgGANgnQANgsAEgFQACgEAAgFIALgFQAFABADgEIACgBIAegNQABAZAKAUIAGAPQAGALBBBGQBJBOAdAJQAFAkAPCOIAAAKQAiAlA/AtQA+AuAiAmQAVAXAbAQQARAJgDANIgIAGQgHAFgNAGIgVAJQgLAFgRAMIgRALIgBABIgCgBgAgYrLQgMgMgdgTQgVgPgQgTIAAgFIgBiqIAAgBQDCg2BmidQAZgmAOg1QAGAGABAPQAFB+BzARQBfAOBOAcIAjANQAJACAMABIAPAEQALALAXgCIAcAHQAsALAdADIAHABQB+AlB1AuIAAACIAIABQAGABAGAGQAFAEABADQABACAAAHIgEAgIgIAsIgEANQgDAHgFACIgGACQgEAAgEgCIgCACQgHAFgJACQgPgKgLgPIgHgKIgJgKQgKgKgPgEIgDgBQAAgFgCgDQgngkg7gQQg9gYhNgOQhDgMhAgXQgGgCgFAAQgtAAgZgQQgtgchLgBQgkASgdAaIgqAnQgkAhg/BoQg8BjgqAjQAAgEgjgog");
	this.shape_1.setTransform(105.075,128.625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E2025").s().p("AAAAAIABAAIAAAAIAAABIgBgBg");
	this.shape_2.setTransform(66.0875,242.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(53,64,82,0.988)").s().p("AikB6QgBgFgBgOQgCgdgMggIgHgXQgBgIACgEIACgCIADgCQACgBADABQBfgZBWgiQBZgiBSgsIAIAAIACAZIAAAZIAAAKIAAAKQAHAtgQAWQiKBGiTAvIgzAPQgDgFgCgIgAiEBpIAGgCIgHgCIABAEgAitAEIABABIABABIACgCIgCAAIgCAAg");
	this.shape_3.setTransform(155.4281,220.4875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(14,30,53,0.996)").s().p("AADADIgBgBQgEgDgEgBQACgCACgBQACgBAEACIADAEIAAADIAAADQAAgBgBAAQAAgBgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_4.setTransform(119.625,97.6771);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#364153").s().p("AABAAIgGgHQAIAFADAKIgFgIg");
	this.shape_5.setTransform(101.1875,130.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#535268").s().p("AhcLrIgCAAIgKAAIAAgKIAJABIgLgbQg7iEgxh5QgSgZgIgjIgEgKIgEgLIgGAAQAAgFgCgEQgjhRgZhcIALgQIAPgZIAbgVQAZgTADgQQACgKgEgUQgOhEgJgfQgPg4gTgpIBQhBQAXgSAKgMQAQgSADgUQADgQgHggIgbh8QAjgoAhgqIApgnQAMgKAEgIIACgEQgGgggEggQgEgZAIgNQAFgKAUgLQAZgOAZgMQAZgLAagIQAQgFAIAFQAHAFADARQALBMAeB9IATBPIAFATQgBASAFAeQAmDgAgCzIg/CUIgRApQhWlTglitQgUhlgKgmQgUhNgdg4QgCAHAFAPQAWA+AUBUIAdCVQAjCpBSFGIgJAUIhMC1Qgch3gShCQgQhAgxicIheknQAGA4AUBGQAHAbAfBhQAxCWAoChIAoCnIgIASIgFAMIgKAVIgpBcIgmhfQg6iTgehYQgWhGgNgjQgVg8gUgpQAhB8A2CZQAfBWBHC6IADAHIgGANQgXAugXApIgFALIAAgBgADLi5IgVh6QgMg8gNgwQAIABAHAGIABABIARAFIAYAHQAXAGAOAMIAHAIIAGAIQAFALAGAUQAZBdALA4QAGAYAAARQgFgEgFgBQgJgBgGAIQgFAEgEAKQgIARgIAfQgJAigGAOIgBACIgPAiQgRhggQhhg");
	this.shape_6.setTransform(75.4625,167.3434);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4D86A3").s().p("ACoMUQjXhKiciLQAAgFgCgEQgDgGgFgEQAZmWgFgtIAAgKIAAgKQAAgjhhlaQhnlxgKg7IAAhkIAHAAQARBNAjBBQAZAvCpG+QC+H4AMBvQAHBCALA+QAGAoAAAzQAAAhAKgXQBShdBHhoQACgDAFAAIAGAAIAEAMIADAKQAIAiASAZQAxB5A7CEIALAbIgIgBIAAAKQiBgBhjgkg");
	this.shape_7.setTransform(25.4375,159.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(90,86,110,0.961)").s().p("AjvAyQAmgTCDgiIgqAQQhIAfg3AugADdhXQADgCAGAAQAAAFACADQADACAFAAQAAAFgDADQgCACgFAAQgMAHh6AUIg7AKQCSgnAmgQg");
	this.shape_8.setTransform(7.025,39);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(15,30,53,0.969)").s().p("AkXA7QgJgUgBgZIgeANIgCABQgDAEgGgBIgKAFQAAgDAHgTQAIgTADgEQAYghAngOIgMB+IgBAEgAEohJQAbAEASASQgOA0gZAmQgJgiADhOg");
	this.shape_9.setTransform(94.2,7.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A7195").s().p("AAAgRQgFgHgEADIgCACIgDgDIAAgCIATAAIAKAAIAAADQgEAIAAAOIAAAYQgEgdgHgNg");
	this.shape_10.setTransform(121.5375,99.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#191015").s().p("AgkAlIAGgCQAegHAvgGIgXAKIgKAAIgTAAIAAADQgDgDgDABQgDABgCACQgIgCgJAFIgCABIgBgDgAgugmIABgBIAJAAIgKACIAAgBg");
	this.shape_11.setTransform(120.5865,93.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#26161B").s().p("AhvCeIgHgEIgHgjIgIgjIgCgGIAEgDIABAAQAGgBADgEIAPgEIAFgBIADgDQABgCAEAAIADABQAMgEAOgHIApgUQATgIAcgGIAJgCIAbgGQA2gIAmAAIALAAIACANIAFAeIABAfIgBAjIhIAKIgHAAQgwAGgfAHIgFACIAAADIgEADIgDABQgpASg8AAQgFAAgFgBgAgDA6IAAACIAJgCIgHAAgAh3AoQgFgMgNgPIgbgcIgGgFIACgCQAEgHAJgIIANgKIABgCIADAAIARgLQARgMALgFIAWgJQAMgGAIgFIAHgGIALgIIABgBQALgIASgHIAdgMIAEgCIAbgMIAQgFIAIAFIAHAEIADABQAMAHAUARIACAEQAJAQAFARQgpAbgpAYIgIAFQgCACgEABIgPAIQg7Ahg6AbIgFACIgCADIgIAAIgJACIgEAAIgCgHg");
	this.shape_12.setTransform(116.2375,84.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A6A8C").s().p("AgLAGQAAgHgCgEIgCgDIAPgIQADgBACgDIAIgEQgHAeAKAOIgaAFIgBgTg");
	this.shape_13.setTransform(120.6625,82.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(77,134,163,0.996)").s().p("ADoKQQgHgPgEgIIgGgGQAAgRgGgYQgLg3gZheQgGgTgFgLQgEgLgJgGQgOgLgXgHIgYgHIAAAAQgbg+gig5Qgdh8gLhNQgDgRgHgFQgIgFgQAGQgaAIgZALQhMhVhKhaIg3hBQhEhQhEhoQhEhogxhjQAFAAADgCQACgDAAgFQgFAAgCgCQgDgDAAgFQAKgHAMgFQAWgKAYgGIADgBIAJgBIAAgCIADgBQAcgIAJgDQAIgDAYgNIASgKIABAAQADACALANQAOAPABAAIAKAAIAEgDQAAACACADIAAABQACAFAGAFIBFBhQAmA0AUAaQAmAvA0A1QA9BGBCBAQAXAWAdAQIAPANIANAJQAHAHAIAEIAEAEIAhAXQALAKAIABIAAACIgNAKQgJAIgEAHIgCABIAGAFIAaAdQANAQAFALIADAIIAEgBIAJgCIAIAAIAAAEQAAAFAEADIgCACIABABQgEAAgCADIgCABIgFABIgPAEQgDAEgHABIAAAAIgEAEIABAFIAJAjIAHAkIAHADQAEACAFAAQAHAYALARQACAEAAAFIAAD6IAAAKQARBOAABmIABBaIgJgTgAHiBtQgGgFgBgJIgBgRIACghIABgkIgBgdIgGgfIgCgNIgCgSQAAgLACgFIABAAIgBAAQgGgBgEgEQgFgFgDgSQgCgNgDgNQgFgQgJgRIgDgEQgTgRgNgHIgDgBIgGgEIgJgFIAAAAIAAgBIgCgBIgFgHIACgBQgBgFACgGIABgBQAAgFADgFQAHgKAMACIAJAEQAVAMAQAOIADADIAYAVIAVAWQAJAMACAEQAFAKgDAJQgCAJgJAFQgDABgEAAIADAOIAAABQAAAIgCAGIAAAAQADgDADgCIAEgCQAKgEAIAIQAFAEAEAMIAIAgIAFAWIAEAUIAIAmQAIAogBAWQAAAMgFAFQgEAFgHACQgQAHgJgIIgFACIgKAGQgDACgEAAQgFAAgGgDg");
	this.shape_14.setTransform(85.6515,90.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#170C0F").s().p("AAVgIIAAABIgPAFIgaALQATgLAWgGg");
	this.shape_15.setTransform(121.3875,68.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2D7093").s().p("AgjAHQgHgIgTgdQgYglADgGIATAQQATASACAAQAZAhAcANQAwAYARANQADACAEAAIgeANQgSAHgLAHIgBABIg6hDg");
	this.shape_16.setTransform(110.533,65.3743);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1B2536").s().p("AiAQcQgogEgeACIghgCQgagBgkABQATgJAcgCQANgBAeABIgmhjIgDgHQhHi6gfhWQg2iZghh8QAUApAVA9QANAiAWBGQAeBYA6CTIAmBfIAtB3QArABA3gBQghhVgehyIgPg+IgpioQgoiggxiYQgfhhgHgbQgUhGgGg4IBeEoQAxCcARBAQASBCAcB4IAPA9QAiCHAnBcIA0gCIA7gDQgkinhMkzIgCgLQhSlHgjipIgeiTQgUhVgWg9QgFgPACgIQAdA4AUBNQALAmAUBkQAlCuBWFUIAEAPQBQFAAmCwIBMgDQgDgRgDgVIgDg0QgDgugKg4IgUhlQghihgsjzQgfi0gmjgQgFgdABgTIAAgEIAEANQANAvAMA8IAVB6QAPBhARBgQAmDTAsDPQAaB7AGA2IAHBEQADAfAEAXIAKAAQAJAAAEACIACgLQAEgRgBgjQgEhmgXj1QgVjegBh+QgBgfAFgRQAREEAeEcQALBbADAqQAFBKgEA7IgBAHIggAAQgeAAhEAIIgCABIgCAAIAAAAIgTACIgBgCIhkAEIgDAAIgmgCQgOAAgUACgAFVPuIAAgRQgBgWgHgkIgCgQIABgKQAAgKgBgHIgDgNIABgUIAAgHQAAgFADgBQADADABAFQAwgEATgFIAEgBQgCAEABAIIAHAWQALAhACAdQABAOACAFQABAIAEAFIgtAOQgXAHgMAGQgKAFgCAGIAAAAIgBAAgAGkNGIAAgBIAEAAIgCABIgCAAgACPqRQgbgPgVgYQgjgmg9guQg/gtgiglIAAgKQgPiOgFgkIAQgBQAMAtAYB9QAEASAGAHIAEADIAAAAIAGAHQANAHAKgGQAJgFACgPQAPASAVAPQAdATAMAMQAkAoAAAEQgCAAgTgSIgSgQQgDAGAXAlQATAdAIAJIA7BDIgLAIQADgMgRgKg");
	this.shape_17.setTransform(96.0625,137.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(40,73,89,0.557)").s().p("AABAjIgDgmIgCgUIAAgLIAJAAIAABFIgEAAg");
	this.shape_18.setTransform(172,171.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(14,40,52,0.361)").s().p("AAAAUIAAgxIACAAIgCAgIAAAbIAAAAIAAgKg");
	this.shape_19.setTransform(203.15,65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(76,134,163,0.996)").s().p("Ai8PPIgKAAQAAgKADgLQAHgjgFgZQgOg8gIhEIgGgxQAFgFAAgNQABgVgBgcQgBgxgMheQgTiVgOiCIAAgCIAAgKQAFgngNgUQgTi3gLiPQgFhCgIgfIgEAFIgBgDIAXgKIAHgBIBJgJIgCAhIABARQABAJAGAFQAJAGAJgFIAKgGIAFgCQAJAIAQgHQAHgCAEgFQAFgFAAgMQABgWgIgoIgIgnIgEgUQAmA1A1AsQBqBcA6FlQEanPBcjiQg0FHg5BlQgUAjgaAqQiXDzgIBlQgJBoANAJIAAAFQAGBZAOCyIADBRIACAiIgJAAQhRArhZAjQhXAiheAaQgDgBgDABIgDACIgJAAgACsIHIAEAAQAAAKgBAAQgBAAgCgKgAClHAIABABIAAALgAlJmuQApgYApgcQAEANACANQADASAFAFQAEAEAGABIAAAAIAAAAQgCAFAAALIACASIgLAAQgmgBg1AKQgKgOAGgfgAjMm2QACgGAAgIIAAgBIAEAKQgDACgDADgAluoZQgSgMgvgYQgegOgZghQAqgjA8hjQA/hnAkgiIAqgnQAdgaAkgSQBLABAtAdQAZAQAsgBQAFAAAGACQBAAXBDANQBNANA9AYQhngBhYgOQgigFgggJQgpgLgfAUQgFAAgDADQibBtinBiQAgArBEALQADABAUAxIgEgDQgPgOgVgMIgJgEQgMgCgHAKQgDAFAAAFIgBABQgDAGACAFIgCABIAFAHIACABIAAABQgXAFgTAMIgEACQgEAAgDgDgAHcrlIADgCQAEACAEAAIAAABIgCAGIgJgHg");
	this.shape_20.setTransform(154.8875,123.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(34,41,52,0.639)").s().p("AgQgDIAZAFIAIACIgFAAQgSAAgKgHg");
	this.shape_21.setTransform(167.0625,25.8196);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(40,110,145,0.976)").s().p("AkdHFQgEgxgDgzQgJhLgHhYIgPjNIggpWIAAgDIABgFIABgCQAFgDAFAHQAHANAEAeIABgYQAAgPAEgIIAEgFQAIAfAFBCQALCOATC5QANATgFAnIAAAKIAAACQAOCDATCUQAMBeABAwQABAcgBAWQAAAMgFAGIAGAxQAIBEAOA8QAFAZgHAiQgDAMAAAKIAKAAIAJAAIgBACIgEABQgTAFgwAEQgBgFgDgDQgDAAAAAGIAAAGQgKhXgHhZgACcBXIgBgBIAAgHIAAAHQgNgJAJhnQAIhlCXj1QAagpAUgjIgkBkQiKF7gQAuIAAAKg");
	this.shape_22.setTransform(155.875,159.7375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shirt, new cjs.Rectangle(-18,0.6,224.6,253.9), null);


(lib.neck = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3A1708").s().p("Ag6ElQidgFhgiaQgFAtAAgHQgBgZAEkoIIZiQIAzAJQAcAJADgEIAJgBQAIgDgUA8QgfA1gNBTIgDAVQgCAWgFBvIgEBOIAChKQiaDfiJAAIgOgBg");
	this.shape.setTransform(69.3637,116.9903);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(121,79,51,0.898)").s().p("AAAAFQgBgDABgHIABALIgBgBg");
	this.shape_1.setTransform(4.274,56.9625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(113,62,24,0.992)").s().p("AhaEmQghgHgRgMIgBAAQh6gygyh7IAAgGQgKhPgBguQAihPAKhfIAHhEQABAJAAgIQA5BlCABDIAsEVIBJgCIAtkeQCFgyBaiKIABAPQABANgBgdQAKBJALAgIADAvQACA3AAALIAAADQgJBJgUA+QgRA6gcA2QgbA0gfAaQggAbg2AQQg4AQg4AAQgrAAgqgJg");
	this.shape_2.setTransform(64.2,168.3327);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(23,16,10,0.18)").s().p("AgdAAIAkAAIgkABIAAgBgAAWAAIAIAAIAAAAIgIAAg");
	this.shape_3.setTransform(67,0.1125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(136,91,56,0.996)").s().p("AhkAfQiAhCg5hlIAIhHQAAAHAFgtQBfCaCeAGQCPALCijqIgCBKIABBEQhaCJiFAxIgtEfIhJACg");
	this.shape_4.setTransform(65.5,154.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(137,92,57,0.996)").s().p("AgJgGIAQAIIADAFIgTgNg");
	this.shape_5.setTransform(94.2625,8.8125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.neck, new cjs.Rectangle(4.2,0,96.89999999999999,198.7), null);


(lib.hips = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(53,64,82,0.988)").s().p("AElJ2IjJAAQgGAAgFgCQgegOg1AGQhVgJgngtIgMgMQgygvhigHQgyghhDgVQisg0hyhoQgGAAgDgDQhHhDhEhFIAAgIQgKgnARhGQAPg9Aoh5IAFgQIACgEQABgMAFgRIAQg2QAHgbAGhLIAHhnIAFgZQAFgPAOgMIAEgDQAJgHAIgBQAHgCAPACQAFAAAGADQBAgLCsgUQGTgsDOgUQBwgKA+gEQBggFBMADQBSA/AvBhQAbA2AxCFQA2CUATArQAUA8ABBKQAAA3gLBRQgFAngGAaQgLAmgfA9QgiBDgKAcQgqA8g4AyQhCAThBARQgRAEgNAGQhCAghoACIgMAAg");
	this.shape.setTransform(70.6159,59.0471);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hips, new cjs.Rectangle(-13.5,-3.9,168.3,125.9), null);


(lib.head = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(137,92,57,0.996)").s().p("AAAgGQAJgBgDAPQgVgOAPAAg");
	this.shape.setTransform(18,-31.5508);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A1708").s().p("AhhAFIgBgBIAAAAIgBgEIAAgJQAAgKACAAQAigGALAjIAGAGIAIAGIgCAAQgOAAgrgRgAAnAVIAJgGIAGgGQAKgjAjAGQABAAAAAKIAAAKIAAADIgBABQgsARgOAAIgCAAg");
	this.shape_1.setTransform(5.15,-24.6283);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DC7C4D").s().p("AgTCXIgEgbQgBgUACgYIAGg5IACg/IAAgBIABgDIABgJQACgUgBgNIAFgRIACgTIADgUIABgEIAAgBIAAgFIAAgBQATAQgDAxQgDAuAIA9QAOB5gzANQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_2.setTransform(2.3019,-44.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#77411C").s().p("AAuDbIgVgIIgJgGIgGgGQgKgkgiAGQgCAAAAAKIAAAKIABAEIgGABQgYgHAGgaIAbgzIADgVQAKgcADgPIAEgeQACgMgDgFQgCgEgLgEIgFgCIAHgDQAKgGAAgLQABgFgCgEIAGgMQABAEACABQADABACgDIAAABIgDA/QgCATgGAnQgDAYABATQACAOAEAOQAAAAAAAAQABABAAAAQABAAAAAAQABABABAAQACAXBBABQAugEAjgcIgVgrIBCBCQALAdglACIAAgEIAAgKQAAgKgBAAQgigGgLAkIgGAGIgJAGQghALgPAAQgGAAgCgCgAgpiHQgCgGgHgFQgFgDgKgDIgOgEIgJAAIgDgEQAAgFgDgCQgKgJgMgHIgDAAIgLgCIgKABIgIAAQgFgBgGACQgOACgIgCIgGgDQgBgBAAAAQgBAAAAAAQgBgBAAAAQAAgBAAAAIAAgBIAAgEIAFgEIAEgCQAGgDAMgCIAMgCIAAgDIAyAAIADAAIAHAAIANABIAOABIAAAAQAQgBAJgIQADgDAFAAQARAggPAUQgCADAAAFIAAAAIgBAFIAAACIgBADIgHASIgBgDg");
	this.shape_3.setTransform(-1.1577,-43.5061);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6E3C18").s().p("AhgA+QAHhAACg2QAHgFAEgGQADgEABgFQBKAABEgKIAKAAQAHAWAKAUQACADgBAFIgKAAQhOgDg4AXQgCAPABAOIgWAkIgFAMQAAAJAHAAQgQARgHAAQgJAAADgZg");
	this.shape_4.setTransform(18.8289,-56.8905);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Слой_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#733F1A").s().p("AgEAkIgNgBIgggLQgvgagCgOQgDgOgFgBQgGgBgCgDIAiALQAiALBjgPQBjgQg6AhQg6AggWAKIgBgDIgQAIIgBAAg");
	this.shape_5.setTransform(6.6399,-6.0261);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(218,123,76,0.98)").s().p("ADfIQIgygBQikgviAioQhEhYgriDIgLAMQgcARgcgdIgUjUIgUg/QADg3ApAXQgRi5A2iAIBHFhIAsgIIBnA7IB7AjIAjgZIgKBmIASBcIhuCNIAaAJQA0AUBKgDIhLASQgeA9gdgcIgaAGQCkAcCkgIIhGAgIiXAHIAEAYQADADAFABQAGABADAPQACAOAuAaIAhALIAMACIABAAIASgJIAAADIATBHQgXACgOAAIgJAAgAkpiKQAPAqgHBeIABAJQAEAbAHANQADAHAFAEQAGAEAJgGIgIgJQgEgHgDgKQgIgYAAgnQAAgaADgSQAEgXgFgLQgMgWgMgKgAjMDWIACAAQAAAEgCADgAg3kdIBYglIBIgSIAQCBg");
	this.shape_6.setTransform(-17.025,-48.4625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3A1708").s().p("AniBkQgFgDgDgHQgHgOgEgbIAAgKQAGhcgOgqIgCgGQAMAKALAWQAFALgDAYQgEASAAAYQAAAoAIAYQADAKAFAIIAHAIQgFAEgEAAQgDAAgDgCgAHUBiQAXgTgBhHQAAgYgCgSQgEgYAFgLQALgWANgKIgDAGQgEALgCAPQgEAJABAQQgCAjAEAwIgCAKQgDAXgEANQgFAKgEAEQgEADgEAAQgEAAgFgEg");
	this.shape_7.setTransform(4.25,-52.708);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(137,92,57,0.996)").s().p("AAAJTQAVgJA6ghQA6ghhkAPQhiAPgigLIgigLIgFgYICWgHIBHggQijAIilgcIAagGQAeAcAdg9IBMgSQhKADg1gUIgagJIBuiNIgShdIAKhmIgiAZIh8gjIhog6IgsAIIhHlhQAdhHAzg2QCbigEOAHQEOAHBwDDQBgCmgIDfQAfgSALAxIgPA/IgVDVQgdAdgcgRIgGgEQgmBxg+BUQh2CiiAA9IgvAFgAHCAcQgFALAEAXQACASAAAaQABBGgXAUQAJAHAIgGQAEgEAFgLQAEgNADgWIACgKQgEgxACgjQgBgRAEgIQACgPAEgMIADgEQgNAJgLAWgAjai2IhYAlICxBKIgRiBg");
	this.shape_8.setTransform(8.15,-62.4647);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.head, new cjs.Rectangle(-50.8,-129.1,109.9,133.5), null);


(lib.hair_top = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D182C").s().p("AAHARQgWgHgQgUQBFgUgHAiQgDAOgMAAIgJgBg");
	this.shape.setTransform(36.2066,54.9757);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(12,3,8,0.271)").s().p("AAAAAQAAgYgGgJIACABQAIAJgBAXQgBAZAFAJQgHgJAAgZg");
	this.shape_1.setTransform(15.275,24.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(115,39,67,0.992)").s().p("ACPDkQiHhPh+h4QgIgOgHgPIgziyIgEgIQAFgJAOgHQATgNAygQIAOgEQARAZARA3QASA5APAZQAzBXBHA5QCPB0hdAxQgFgGgFgCg");
	this.shape_2.setTransform(-2.2517,35.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(51,2,22,0.98)").s().p("AgEAAQACgCADAAIAEAFIgJgDg");
	this.shape_3.setTransform(33.625,46.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#411A2F").s().p("AgrCjQgkgOghgWQBaiiB/h9QAAgDAGAAIACAGQhVCIhoCKQAIAWARAAIAEAFIAGAKIAHAKIgJgBg");
	this.shape_4.setTransform(47.375,35.725);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(115,39,67,0.988)").s().p("AgvDdQgcgTgWgoIgzh/IgDgCIABgBQAEgwARgtQAZhPAtg2QAXgUAfgOIALAAQAFAAAUAHIAzATQAeAKANAHIAbASQhaC9hlDQIgIgJg");
	this.shape_5.setTransform(34.55,22.1875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(116,39,68,0.996)").s().p("AjODWQgRABgIgWQBqiLBUiHIgCgHQAOgSAWgOQABgFAGgGQAAgBAAABQAPgRAEgBQADgDAIgDQA6goA0gXIAWAKIAHAEIAvAnIALALIAFAFQhEBBhDBGQhOBOhMBYQg7BEhWAAIgEgGg");
	this.shape_6.setTransform(62.85,28.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(66,28,49,0.996)").s().p("AkREJIgHgJQBegyiPh0QhHg5g1hXQgPgZgSg5QgRg3gQgZQARgGAOgCQAqgEAtARQAUAFAkATQAbAyAUBNIAeB2QAhAzAkA0QACAFAFAFIAHAKQAuA4AGAmIgJADQgaAGgYAAQgrAAgmgTgAAcC4IgHgLIgGgKQBWAAA7hDQBNhYBOhPQBDhFBDhCIAIAGQAiAhAdAiQgDAQgSAZQgQAXgCAUQhJAdhYA9QhiBIg1AjQg6Amg5AAQgNAAgNgCgAhlB5QhFgeg9hAQAGgbgEghQAHABABgMQABgUAEgSIACACIA0B+QAWAoAbATIAJAJQBmjPBZi+IAYARQAlAbAOANIAWAUIACABQifCLhkDDQgDAAgCACQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAAAAAABIgFAAQgKAAgFgLg");
	this.shape_7.setTransform(41.075,33.7709);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(30,0,15,0.996)").s().p("AjqD/IgQgIIgTgGIgBAAQhbgzgrggQgLgGgxglQgIgGgKgMQgtgqgSgZQgLgMgMgYQB/B3CIBPQAEACAFAGIAHAKQA7AdBHgQIAJgDQgGgmgtg5IgHgKQgFgFgCgFQgkgzghg0Igeh2QgUhNgbgyIAVAOQAaAOAPALIAQATIACABIAAAAIAAABIABABQAHAJgBAaQAAAYAHAKQABADAEAFQAFAPALABIABAAQAEAhgHAcQA+A/BFAfQAGANAOgDQgBAAABgBQAAAAAAAAQAAAAABAAQABAAAAAAIAKAEIgEgGQBkjCCfiLQALAIALAGIABAAQABADAHAAQgGAGgCAFQgWAOgOATQgFAAAAADQiAB9hZCiQAhAWAiAOIAKABQBGALBHgvQA0giBjhIQBYg9BJgdQACgUAQgYQASgZADgQIALANQAJAMAGgEQAEgDAIALIAbAwQgEALAAAGQgGABgBACIgBAAQgIAJgQAHIggASQgPAJikCKQibCDgcAJIglAKIgUACQgcACgcgFIgGACIgDABQgigWggAMQhDAXg9ABIADACQgMAFgOAAQgQAAgSgHgAhgCSQARAUAXAHQATAGAEgSQAFgXgbAAQgPAAgaAIgAC8kFIACACIAAABIgCgDg");
	this.shape_8.setTransform(42.7,39.3469);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_top, new cjs.Rectangle(-21.2,-0.8,120.8,66.39999999999999), null);


(lib.hair_back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#341124").s().p("AgFgBIAIgDIADgBIgGALIgFgHg");
	this.shape.setTransform(64.4945,35.55,0.9317,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(29,0,15,0.992)").s().p("AHXEVQgZgDgigIQgLgDgGgEQjUg4iwhqIgNgCQgngDgZACQgeACgvAJQhAAMgcAIQgcArg0AaIi4AoQg5ATg7AOQAAgFgEgCQgYgMgTgNIgCgKQAOgJB2gxICHg4IAJgDQAFgRhUAFQhSAEAIgNQABgEAAgFQAGgQAGgSQABgDgBgFQBbgyAPgLQBBgsgVgXQgBgBgFABQgCgFgDgDQgLgKhugwQhbgogNgsIBdgKQAGABBhgPQBhgQAFACIAFABQAuBNA2A+QADADABAEQAxgrBcgPIACAAIBJgKQA1gGAagGIA6gOIA6gNQAbgFAogDIBDgGIBagKQA0gEAmAFQAfAEATAOQAVAkAAA8QAAABgFABIACALQAFAjgWASIABACIAUAhIAEAHIANAVIAEAFIAfAlQAQAXADAWIAIAOIADAJQABAFgCADQgqBSgtBQIgKACIgSAEIgLAGQgTAIgdgBIgGAAIgPADIgBgFgAIEBmQAqARgRg3IgIgnQgEgUgLgFQiJhNipgbQgFABgDADQgkAwgnAuQABAFADABQAvAfA1AXIAKgCIBFgOQABAFACABQBmAVBaAkIAEAAIAFABgABUgeIgKAEIAHAIIAGgNIgDABg");
	this.shape_1.setTransform(56.9632,38.1434,0.9317,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(111,37,65,0.98)").s().p("AiABXQgXgSgDguQAWg6AVgwQABgDAFgBQA4AIAxAQQABAAABAFQAAAFgBAEQgHANBRgEQBUgFgFARIgJADIiHA3Qh1AxgOAJIgDAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_2.setTransform(5.9958,51.8417,0.9317,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(66,28,49,0.996)").s().p("AI8BmQgEgCgFABQhaglhngVQgCAAgBgFIhEANIgKACQg1gXgwgeQgDgCAAgFQAnguAkgwQACgDAFgBQCpAcCJBMQAMAGADATIAIAnQAOArgWAAQgHAAgJgEgAnsBIQgxgQg3gIIgEgTQAlgCAaAHQAEACAGgBQA1gGBGgkQBPgpgGgjIgCgKQAGAAABABQAUAWhAAtQgPAKhbAyQABAFgCAEQgFASgHAQQgBgGgCAAg");
	this.shape_3.setTransform(51.8067,38.1654,0.9317,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(115,39,67,0.988)").s().p("AgeCLQgagHglABQgEABgFgCQgxgcgXhDQAThjA+hCQAEgEAEAAIAegGQANAsBaAoQBuAwALAJQADADABAFIACAKQAGAihPAqQhGAkg0AGIgFAAIgFAAg");
	this.shape_4.setTransform(4.5816,27.745,0.9317,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair_back, new cjs.Rectangle(-11.7,10,131,56.3), null);


(lib.hair = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#84ACBD").s().p("AhxA8QgCgFABgFIAHgFQAOgXAZgUIBTgyIAJgCIAOgHQAIgEASgDIAOgBIAAAAIAGABQA5BIgrAgQgCABgBAFIgKABQgUADgVAAIgRgCQgTgCgJAAQgVgBglAHQggAGgYAIIACgGg");
	this.shape.setTransform(38.5949,8.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5085A1").s().p("AgYA5IgKgBIgegDQABgFACgBQArgfg5hJIAAgBQAegCAfADIACADQACACAFABQArAgASA1QABAEAAAFQAJABAIAEQACABAAAFIgBAFIgWABQgnAAgmgDg");
	this.shape_1.setTransform(54.555,7.4711);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B6281").s().p("ABGA6Ig8gFQAAgFgCgBQgIgEgIgBQAAgFgBgEQgSg1gsggQgFgBgCgCIgCgDIATACIAeAGQAYAWAXAUQADADAFABQAhARAWAcQACADgBAFIAAAKIgKgBg");
	this.shape_2.setTransform(61.155,7.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(30,0,15,0.996)").s().p("AqXEPQgJgVgMggQgbhOgniNQAggmAqhUQAkhGAigcQgjAUgrArQgvAvgmAZIAJhNICbhwQA1glA3gfIjsFcIAVBdICACLIgmhSIACABIgCgCIAAAAIg9h+IDemHIAjgSQAFAAAAgCQADgHAUgOIAUgNIAABNQgcAPgOAgQgBACgFAAQAAgFACgEQARggALgnIgUAAIgKAAQg1AxiPEeIggBAQAFAAABACQAYAlAYAeQASAVAkAoIAAAKIAAAKQAFAAAAABQALAlAHABQAYBQgEABQgDACgKggIgFgHIgDgGIADAIIgNArIANCUQhZhCg1h1gApDC5IANAJIAAgGIAAgKQgFAAgDgDQgCgCAAgFQgSgTgagKQAMAIAKALQAIAJAAAGIgGgBIARANgAIXEUIgNgqIADgIIgEAGIgEAGQgFAAAAgBQgFgOAAgPQAYgVALglQAAgCAFAAIAAgKIAAgKQAkgnASgVQAYgeAYglQABgCAFAAQgshZgkhGQhojIgsgpIgKAAIgUAAQALAoARAfQACAEAAAFQgFAAgBgCQgOgfgcgQIgCgBQAAgFgCgDQgRgbgpgFQADARAPAHQACABAAAFQARgBgCAVIAFAAQAJAVAHAXIAGAUQAZBfgGCEQgCAiAfAyQAiA5AEAZQAegegIg6QgPhMgEg1IgBgKIgFAAQgIg4gJgzIgIgrIAAgKIALAVIABAFQATAqAIA0IABAKIABAKQAGAeAQA9QAOA6gDAsQgFAAAAACQgMAdgWA/QgUA8gOAfQgDAcgJACIgGgRIgJgbIgFgKIgCgEQABgHAHgNQAQghAEgLIAEgLQACgNgDgFQgDgXghg+QgNgXgHgVQgIgaACgVQAOivgyhqQAAgFgCgBQgPgHgDgRQgFAAgBgCQgMgTgWgJIAAgKIAAgKQAogKAygFIAAgFIAAgBQAAgEAZAOQAZAPAFAPQAAABAFAAQBcAvBXA7ICbBwIAJBNQgmgZgvgvQgrgqgjgVQAiAcAkBGQAqBUAgAnQg3DGggBKQg1B1haBBgAJBCKQAAAFgCADQgDACgFAAIAAAKIAAAGIANgIIAQgOIgFABQAAgFAIgKQAKgLAMgHQgaAKgSASgAJvB9IgCACIAEgDIABAAIgDABgAnRDlQgdgpgHgTQgFgQAGgZIACgGIAEAHQABgIAagbQAdgfAMgUIALgUIAGgLQAGgNADgNIACgIQACgKgBgJIAAgCIAAgFQgBggAAgeIACguIAEgkIAEgbQAEgZAGgXIAAgDQAWgRAziRIACgIIgCAIQAMgIgBAFIgBAEQgEAKgjByIgoB+IgBADIgDAIIAACwIgJAXIgLAWIgGALQgKATgaAcQgXAYgBAGQgDAFADANIAVA9QAGAPABAHIAAACIgCAFIgDASIAAAAQgKgQgOgUgAn5BJQAAgCgFAAIgBgSQABgmALgtIAPg7IAHggIABgKIAAgBIABgJIABgJIACgHQAGggAKgcQAJgYALgUIAAAKIgFAYIgHAoIgCAMIgJA4IgCARIgEABIgBAAIgBAKIgCAUIgDAbIAAADQgFAkgJArQgDATgKAgIgGgQgABMBIIgHAAIAIAAIAKgBIAAgBIAJhRIABgDQAMgjAAgGIAAgeQAQgZAihRIAuhuQACgFAAgFQAAgFgCgEQgDgGgFgFQAAgFgBgEQgNgkgQgjQAlgNA0AIQABAAAAAFIgKAAIgyAAQAGAxAWAhQACADAAAFIgBAKQgOA0geBVQghBagUAnQgBAjgFAAIgHA2IgEAUQgPAJgPAAIgGgBg");
	this.shape_3.setTransform(46.275,58.1729);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(116,39,68,0.996)").s().p("AmShtIAKAAIAUAAQgLAogRAfQgCAEAAAFQAFAAABgCQAOgfAcgQIAAhNIBJgPQgzCSgWARIAAACQgGAWgEAaIgEAaIgEAlIhIBUIABgUIABgKIABAAIAEAAIACgSIAJg4IACgLIAHgoIAFgZIAAgKQgLAVgJAXQgKAcgGAgIiWB5QCPkdA1gxgAHagDIgCgEIgLgVIAAAKIAIApIhIhOQgHgXgJgUIgFAAQACgVgRABQAAgFgCgBQgPgHgDgRQApAEARAbQACAEAAAFIACABQAcAPAOAgQABACAFAAQAAgFgCgEQgRgggLgnIAUAAIAKAAQAsAoBoDHgAleBRIAoh+QAjhxAEgKIACgFIDRgsIDXgHIDsAiIAAACIgKAAIg8AAIAAAFQgyAFgyAAIgKAAIgeAAIgKABQgTAEgWACIAMAAIAUAAQAMABAHAFQAEADAAADQAAAAAAABQgBAAAAAAQgBABAAAAQgBABAAAAQAAADACACQACADAFAAQAQAiANAkQABAFAAAFQAAAFgBAAQg9ARjiA3QjLAxhRAaIABgDgAD5hDQgWgggGgxIAyAAIAKAAIAKAAIAKAAQAWAIAMAUQABACAFAAQADARAPAHQACABAAAFQAAAFgBAAQg0ARg5AIQAAgFgCgEg");
	this.shape_4.setTransform(43.8625,31.9375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#441D32").s().p("AnSENIgBgJIAAgCIAAgBIgBgDIgNgdIgBgCIgDgIIADAGIAFAHQAKAgADgCQAEgBgYhQQgHgBgLglQAAgBgFAAIAAgKIAAgKQgkgogRgVQgZgegYgkQgBgCgFAAIAghBICWh5IgBAHIgCAJIgBAJIAAABIgBAKIgHAgIgPA7QgLAuAAAlIAAASQAFAAAAACIAHAQQAKggACgSQAJgsAFgkIAAgDIAEgbIBIhVIgCAuQAAAeABAgIAAAFIAAACQABAJgCAKIgCAIQgDANgGAOIgGALIgLATQgLAUgeAfQgZAbgCAIIgEgHIgBAGQgHAZAGAQQAGATAdApQAPAUAJAQIgCAMIgIBCQgGA+gHAnQgfhagKgtgAHSDZQAIgCADgcQAOgfAVg8QAVg/AMgdQABgCAEAAQADgsgNg6QgRg9gFgeIgCgKIgBgKQgIgzgSgrIB9BpQAlBGArBZQgEAAgCADQgYAlgYAdQgSAVgkAnIAAAKIAAAKQgEAAgBACQgLAlgXAVQgBAPAFAOQABABAFAAIAEgGIAEgGIgEAIIgBACIgMAcIgBAEIAAAAIAAACIgCAKQgPBDgYA9QAAAEgCACQgHhUgfhJgAmNDIQgBgHgGgPIgVg9IABgBIAAgRQABgGAWgYQAbgcAJgTIAGgLIALgVIAJgXIAAixIADgIQBSgaDKgxQDjg3A8gRQABgBAAgFQAGAFACAGQACAEAAAFQAAAFgCAFIguBuQghBRgRAZIAAAeQAAAGgMAjIgBADIgJBRIAAABIgJABIgJAAIAHAAIgaABQgUgBgLACQl+gdgTgMIgZCPIgcBCIgBgCgAqgA6IgVhcIDrldIAkgUIjeGIIA9B9IAAAAIACACIgCgBIAmBSgAGjBnQgXg4ggg8IgIADQgfALhYAOQhXAPABgGIAEgUIAHg2QAFAAABgjQAVgnAghaQAfhVAOg0IABgKQA4gIA0gQQABgBABgFQAxBqgOCvQgCAVAJAaQAGAVANAYQAhA9AEAXIAAARIAAABIgEALQgDALgRAhQgHAOgBAGQgSgngGgRgAocCRIgRgNIAGABQAAgGgHgJQgLgLgMgIQAaAKASATQAAAFADACQACADAFAAIAAAKIAAAGIgNgJgAJeB2IAAgKQAGAAACgCQADgDAAgFQARgSAagKQgMAHgKALQgHAKgBAFIAGgBIgRAOIgNAIIAAgGgAKXBVIADgBIgBAAIgFADIADgCgAHTgZQgfgzABgiQAGiEgYhfIgGgUIBIBPQAJA0AIA3IAEAAIABAKQAEA1AQBNQAHA5geAeQgEgZghg4g");
	this.shape_5.setTransform(42.35,62.1625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#452134").s().p("AAHAAIgUABIgMAAQAWgBATgEIAKgBIAAAJIAAADQgHgFgMgCg");
	this.shape_6.setTransform(59.4375,14.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(65,27,48,0.996)").s().p("AsBAnQAmgYAvgvQArgqAjgVQgiAdgkBEQgqBVggAmgAKlgaQgkhGgigcQAjAVArAqQAvAvAmAYIgTBWQgggngqhTg");
	this.shape_7.setTransform(46.275,45.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#39161E").s().p("AnBAIIAAAQIgBACQgCgNADgFgAHCgHIAAgRQADAFgDANIAAgBg");
	this.shape_8.setTransform(44.8018,71.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#230B1C").s().p("AAFAUIgJAAQAAgFgBAAQg0gIglANQgFAAgCgDQgCgBgBgEQABAAABAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgDgEgDIAAgDIAAgJIAeAAIAKAAQAyAAAxgFIAAgFIA8AAIAKAAIAAAFQgzAEgnAKIAAAKIAAAKIgKAAg");
	this.shape_9.setTransform(72.5,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hair, new cjs.Rectangle(-30.7,1.5,154,102.1), null);


(lib.fore_leg_shoe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B2536").s().p("Ah9GtQg0gGgjgQQhAgcgbg8QgDgugBg4QgDhvAGgsQAGAoAgBVQAlBlAbAMQAcAMAwAFQAsAEAMgGQAXgLCpgOQCrgPATAKQASAKgBgmIgCgeQAYA3gEA3QgEA6gjAKQhxAfh6AEIgiABQhMAAhYgMgAlbkFQgCghAGhMIAHhGIgBAMQAAASAEABQADABAIgDQAPAAgBBQIACBXQgBBdgNAeQgVg7gGhRg");
	this.shape.setTransform(90.0036,65.0023);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(53,64,82,0.992)").s().p("AiCG5QgwgFgcgMQgbgMglhlQgghVgGgoQABgKgHhFQgJhPgBgaIAAAAQANgdABhdIgChXIAbjnIArBLQgNB6AdClQArDxAFA1IAWBfQASAKAhgQQArgUAkABQA6ACBRgKQBFgIAxgNQAMgDgFg3IgJhRQgMh3hBi2QgziTgegyQAHhdAyArQAJAgAjBwQAjCJAaDTQAEATAXA/QAXA8AIAtQAKA0AKAaQAHATACgEIADAHIACAeQABAmgSgKQgTgKirAPQipAOgXALQgHAEgSAAIgfgCg");
	this.shape_1.setTransform(90.4276,52.6172);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(2,2,4,0.992)").s().p("AgMAoQgIADgCgBQgFgBABgSIAAgMQACgZgDgbQgDgbAOgiQAOgdAfAVIgcDmQAChQgPAAg");
	this.shape_2.setTransform(58.997,19.8167);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(16,22,39,0.996)").s().p("AipEjQgFg1grjwQgdilANh7QAyBjCEANIAnHYIhEAKIgQABQgfAAgqgOgAgcioIgBgGQBOgLAfh3QAeAyAzCSQBBC3AMB2QgQALguAmIhPA+g");
	this.shape_3.setTransform(89.5117,45.271);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#535268").s().p("Ai6EZIgWhfQA1ARAkgEIBEgKIgnnZIATAIIADgEIABAGIB9HZIBPg/QAuglAQgLIAJBRQAFA3gMADQgxANhFAIQhRAKg6gCQgkgBgrAUQgUAKgOAAQgKAAgHgEg");
	this.shape_4.setTransform(93.4364,55.833);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fore_leg_shoe, new cjs.Rectangle(55.2,7.9,69.6,101.19999999999999), null);


(lib.fore_arm_hand1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(22,19,31,0.996)").s().p("ACRBZQgPgTgTgQQgSgQgTgOQgUgOhHgYQgcgLghgEQgggEgaAFQgaAFgGANQAjhRBTgfQAFgCAFAAIBPAAIAKAAQBaAZAcBWQACAEAAAFIAABZIAAAKIAAAUIAAAKQgFAAgTgkg");
	this.shape.setTransform(31.125,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(55,65,82,0.996)").s().p("ABgBbQgDAAhcgcQhcgeABAAIgHgBQAFgHgDgaQgFgnAMgyQBIAZATAOQAUAOASAQQASAQAQASQASAkAFAAIAAAlIAAAFIgCAAg");
	this.shape_1.setTransform(38.175,22.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(110,62,26,0.953)").s().p("Ag0CXQgDgRhPiZIgEgFIAEgsIADgiQAwhGAMgEIAYgDIAJARIADABQADAAAIBBQAghLARgEIARAaIABAEIAFAMIAVAjIAwgbIAVAjIAAAEIg3CrIhGAjIgFACIgUAzIglAHg");
	this.shape_2.setTransform(42.5,58.7375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(113,63,25,0.988)").s().p("AhSBlIgLh9IAnA/IAIAUIAUAEIAggBIAIgBIgGiGIgDg0IADAGQBPCZADARIAEAdIgdAGIgsgIIgQAhIgoAOg");
	this.shape_3.setTransform(28.125,68.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(110,61,24,0.969)").s().p("AgfBDIAAgyIAegkQATgYAGgXQAAAAAAAAQAAAAAAAAQABAAAAABQABAAAAABQAIAQgCALIgBALIguA8IgBgCIAAAEIgOAfg");
	this.shape_4.setTransform(10.6375,47.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(222,125,78,0.988)").s().p("AgdEeIgIgUIgPgdIgEhjIARgoIgkiYIgUh3Qg9AwgFAIQgFAHg3AmQg4AmgCBPQAAAWgBAQQgBAMAFAXIgKAAQAAgFgCgFQgIgZgBgKIAAguIAAhjQAHgdBFhQQBGhTAIgZQATAeBJAeQA4AWAOAAIABAAIAHABQgBABBdAdQBcAdADAAIACAAIgBAFIAAAAQAKAOARAcIAgA2IAZBSIgVgjIgwAbIgVgjIgFgLIAAgEIgSgaQgRAEghBJQgIg/gDAAIgCgBIgKgRIgYhHIAABKQgMAEgwBFIAAAAIAGhNIAEgSIgjANIAWBuIAAAGIgDArIACA0IgBCIIghABg");
	this.shape_5.setTransform(26.3875,46.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(96,88,109,0.992)").s().p("ABMBGQgOgBg4gWQhIgdgUgeQAAgCAMgQIALgRIAAgBQAGgNAZgFQAagFAgAEQAhAEAcALQgNAzAFAlQADAcgFAGg");
	this.shape_6.setTransform(20.65,18.2697);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(135,90,56,0.988)").s().p("ABwBgIAHCHIgIABgAAKCQIAAgDIgOieIgig0IABgLQABgLgHgQQgBAAAAgBQgBAAAAAAQAAgBgBABQAAAAAAAAQgFAXgUAXIgfAlIAAAyIAAAFQABAygGAZQgIAhgXAPQg8AngBg9IAAhGIAKAAQgFgYABgLQABgQAAgVQAChQA4gmQA3gmAFgIQAFgIA9gwIATB4IAkCXIgRApIAEBjIAPAcgABxgFIgWhvIAjgMIgEASIgGBNIAAAAIgDAhgACwi0IAYBGIgYADg");
	this.shape_7.setTransform(17.6875,51.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fore_arm_hand1, new cjs.Rectangle(-3.5,2,59.9,79.3), null);


(lib.fore_arm_hand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(22,19,31,0.996)").s().p("AA+ChQg+glgxgzQgKgPgMgMQgNgNgHgOQgXgtg3gKIAAgKQAihWBWggQAFgCAFAAIBPAAIAKAAQBaAZAdBWQABAEAAAFIAABZIAAAKIAAAUIAAAKIgKAAQgXAbgTAcQgUAdgUAAQgIAAgIgGg");
	this.shape.setTransform(31,18.6535);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(55,65,82,0.996)").s().p("AAfBoQhxglgvhlIAAgKQAVgYARgcQACgDAAgFQAxAzA+AlQAcAQAcgnQATgcAXgbIAKAAIAAAlIAAAFIgCAAQgGAAgDAHQgCADgBAHQgQAkgFAsQgGA2gxAGQgFAAgEgBg");
	this.shape_1.setTransform(35,36.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(110,62,26,0.953)").s().p("AgYCHIAAipQASgrAChDIABADQANAlgBAoQgBA0ARAbIAAAKQgLBKgmAuIAAgKg");
	this.shape_2.setTransform(43.5,69.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(113,63,25,0.988)").s().p("AgvCxIADgXQAmg6AMhXQAQhhAGhxQAwCZglCcIgBAKQAAAFgCACQgsAoguAlQAFgMACgNg");
	this.shape_3.setTransform(32.1805,78.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(110,61,24,0.969)").s().p("AhBEWIgCAAIgFgLQgEgMAAgVQAAgPADgPQADgWAIgLIARgWQAIgLAGgVQAKgSAIgTQAkhQAZhbQABgEgDgGQgMgigPgeIAAAFQACAbgRADIAAgKIAAgoQAZgoAOg5QABgBAAAAQAAAAAAAAQABAAAAABQAAAAABABQAHAQgBALQgGAlAMAfQAmBpgnBqQgiBegJBzQgFAAgEADQgeAWgoAPIAAgBg");
	this.shape_4.setTransform(13.6063,82.0769);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(222,125,78,0.988)").s().p("AhKETIgKAAQAAgFgBgFQgTg3AAhLIAAgKIAAgyIAAgKIAAgeQAVhTAhhLQAghHAXhQQAuBKAwBJQABADAFAAIAAAKQgFAAAAABQgYBGgzAnQgNBggNBdQgDATAAALQgCA8g2AAIgOAAg");
	this.shape_5.setTransform(11.4994,44.5421);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(96,88,109,0.992)").s().p("AAXBTQguhKguhJIAAgKQAFgFAGgDQAEgCAFAAQA2AKAXAuQAHAOANAMQAMAMAKAPQAAAFgCADQgRAcgVAYQgFAAgCgCg");
	this.shape_6.setTransform(19,23.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(135,90,56,0.988)").s().p("AhUGLQgEgCgBgEQgXgJgCgcQAJh0AjhdQAmhsgmhoQgMgfAGgkQACgMgIgPQgBgBAAgBQAAAAgBAAQAAgBAAABQAAAAgBAAQgOA6gZAoIAAAoIAAAKQADBXgzAiQg+AoAAg+IAAgKIAAg8IAKAAQBEAIAChDQAAgLACgTQAPhdANhhQAzgnAXhGQABgBAFAAQAuBmByAkQAEACAFAAQAxgHAGg1QAFgsAQgmQABgGACgEQADgGAGAAIACAAIgBAFIABAlQAFBiAGAwQACATAEAMIADAdIAAAKQAAAFgBAEQgQA7gXA0IAAAKIAAAJQgRgbABg0QABgogOglIgBgDQgCBDgSArIAACpIAAAKQAAAFgCAEQgSAfgeAUIABgKQAkidgviYQgGBxgQBhQgNBXgmA6IgDAXQgCANgFAMIgBACIgNAaQgiA4gTAaQgEAFgEADIgBAAQgDACgDAAIgEgBg");
	this.shape_7.setTransform(26.5,70.8079);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fore_arm_hand, new cjs.Rectangle(1,2,49,108.5), null);


(lib.belt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D293F").s().p("AAmBCQgJg4gRg9QAdAOAIAWIAeBXgAhOhFIAFgBIAIgBIATADIACABIAHABQAQADANAEg");
	this.shape.setTransform(22.3908,88.7,1.076,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C283D").s().p("AASA5IgngcIAFg0QADgKgBgKQgBgKACgEQAFgFATAPIgFABIAIADIACAKIAGBdg");
	this.shape_1.setTransform(13.218,86.439,1.076,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#87B4C6").s().p("ABmAfIAAAAIAAABgAhlgeIAAgBIACADg");
	this.shape_2.setTransform(6.8427,64.1,1.076,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(33,45,69,0.996)").s().p("Am/DKIgGheIgCgKIgIgDIBGALIAUAEIABAEQARA9AJA4gAprAgIACgFIgBgCIADgNQADgUADgEIgFgFIgCgCIgWggQgYgegEACIgCABQAEgyAGgmIAUAlIgDgIIAgA6QADAOAKAMIAJAJQANAMAUAIQA1AUAKABQAMABAdANQAUAMBeACIAkAAQCMgRB2gJQAPgCB2ANQBrAMBOgPQBfgRCehEQBPghA8gfIACAAQgDAagBAVQh8BVjbA+QjOAygiAQIgCABIAAAAQgPAEgpgqQgpgqgTAGIglAMQgtAIg+AJQgyAHhXAEIgNABIg0gBQAGACgsgGQgvgIgugUQgngWgZgRIAgAiIASANIABAAQADAAAEAFIAOAKIAUAIQgBAFABAKQABAJgDALIgFA0QhRgvgvhcgAp3hvIACACIgBgDgAlmgnQgmgEgegGIAAAAIgBABIAAABIgVgFIhAgPQgkgGgWgcQgHgJgHgOIABhqQCAB2CFgWIA6BjQgwAAgugEgAqdg9IAAgDIACAJg");
	this.shape_3.setTransform(63.8163,72.175,1.076,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4D86A3").s().p("AlWCiQhegBgTgNQgegOgMAAQgKgBg1gVQgUgIgNgLIgJgKQgKgLgDgOIggg6IAEAHIgVgkIAFgcIAAgIQABgJgBgFIAAAAQAShGAHgGQAGgHADABIAGAEIAGAbQgKgDARBfQAFAdALAWQAIAOAGAJQAWAbAlAHIA/AOIAVAGIAAgCIABABIAAgBIAAgBQAeAHAmAEQAuAEAwAAIA7gCQBZgEDOgGQC8gMCPgxQBDgXBLhEQAmgiAZggQAtB6gBABIgCABQg8AdhPAiQidBEhgASQhOAPhrgMQh2gOgPABQh2AKiMARg");
	this.shape_4.setTransform(64.4353,58.4188,1.076,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1C293E").s().p("AgWA5QhZgTgRABQhOADhlgFQgpgDgSgHQgbgLAMgXIAEABQBNABChgxIAkgMQAUgGApAqQAqApANgEIABAAQB1ghA3AAQBgAABoALQiWAziCAcQgTAEgYAAQglAAgwgLg");
	this.shape_5.setTransform(71.0827,83.3819,1.076,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(2,5,33,0.996)").s().p("AglIcQgbgBh8gTIh4gTIgfhYQgIgVgcgOIgCgEIgTgEQgNgFgRgDIgGgBIgCAAIgTgDIgJABQgUgQgFAFIgVgIIgNgKQgEgFgEAAIAAAAIgSgNIgggiQAYARAoAWQAtAUAvAIQAsAGgFgCIA0ABIAMgBQBXgEAygHQA+gJAugIQihAxhNgBIgEgBQgMAYAbALQASAHApADQBlAFBOgDQARgBBYATQBOARAzgKQCCgcCWg0QhogLhgAAQg3AAh1AiIABgBQAjgQDOgyQDag/B9hVIgBAHQAEACACAFQAEALADAQIAGAdQABAHgSAYQgXAggnAgQhyBhjQA4Qi9AyhkAEIgPAAIgNAAgApwEpIAAgCIgBAAIgaghQgCgBgEgPIgOgmIgBgJIAAgOIACgBQAEgCAYAeIAXAgIABACIAGAFQgDAEgEAVIgDANIABACIgCAFIAAABgAlFCBQiGAWiAh2IgBBqQgLgWgFgeQgRheAKAEIgGgbIgFgFIAAgOQAAgugEgdQgCgWgIghIgFgdQgFgagIg0IgLhNIgNhMQgFgsAJgcIAHgUQAzgFAvgCIAygBQAJABARADIAeAFQAlAGAiABQAaAAAgAEIA6AMIA3ALIBiANQBKAKCLA2QCbA7A6ANQAmAJBVgdQBVgcAnALIAFABIAUAGIAIADQACAFAHAKQALAOACAEQADAHADAMIADAPIABASIgBAAIAHCWQAECFgDAFQgZAeglAjQhLBEhEAXQiPAxi8ANQjNAGhZAEIg7ABg");
	this.shape_6.setTransform(64.2195,45.7796,1.076,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.belt, new cjs.Rectangle(-9,-8.2,146.5,108), null);


(lib.back_arm_top = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#885B38").s().p("ABCEdQhngHhRgaQgNgOgGgNQAAhJgJhuIgdlPIgBgHQBuBgDNAQIAmHpQg2gMg5gEg");
	this.shape.setTransform(36.3875,135.9625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7CC4CF").s().p("AlFGcQgFgYAAgZQAohVAfhfQAJgZAOgXQAlg9gJhEIgDgMIgEgNIgBgCIgFgPQgEgRgEgIIgGgMIgCgDIgCAAIgPAgIgkBOIgkBRIgJAUIgTArIgEAJQgNAbgPATIgCADIABgDIADgGIANgeQALgZAPgpIAZhCIA2h1QAQgmALgfQBChNBOhKQCbiVBAAKQAcB/B/CnIAKAKQAeAbAVAhIAoBVIAJAjQhmAch3AHQiGAJhUgsQAAgFgCgCQg9gkgbhCQgFAFgBAFQgEATABALQAEAdgNAaIgCADQAAAKgJADQgFAAgEAEQgEAFgDAJQgKAcgWBGIgKAgQgoBkg1BaQgFAAAAgBg");
	this.shape_1.setTransform(47.125,39.7214);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D86A3").s().p("AA/DeIgDgBIgKgFIgHgFQgRgLgugaIg1gcIgDgBQgMgHgFgHIgHgFIAAgKQA0haAphjIAJgfQAWhHAKgbQADgJAEgGQAEgDAEgBQADgBADACQAHACAEAQQAEANAJAMIAQATQAIAKgCAKQAAADgGAOQgLAWABAhQAAAJAGAxQAGAtgDA6QgCAigHBHQgBAMgFAGQgFAEgGAAIgFAAg");
	this.shape_2.setTransform(25.1368,69.3999);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(54,64,82,0.992)").s().p("ABiBYQhEgkhSgWQgFAAgCgCQgVgZgagSIgEgCIAAgBIgCgBIABgBQgBgDADgEIAGgHQAFgFAHgRIAEgLIADgHQADgDAEAAIAAgMIAFAAIAHAFQAGAHALAHIADABQA4ApBEAcIAKAFIADABIAPAGQgMAAgJAEQAFAGAKACIALADIABADIgGAAIAAAWIAAABIAAAbIAAAKQgFAAgEgCg");
	this.shape_3.setTransform(22.2875,91);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(116,66,29,0.996)").s().p("ADOF1IhGgTQgYgGgZgGIgmnoQjNgQhuhgQgDglgGgbIAAgGQgCgTgGgNIAAgRQBTAWBEAkQAEACAFAAQAqANAwAHIAKAAIBtAAIAKAAICqgdIAKgBIAABQIAAAKQAFAEADAFQAADmgPDiQgGBVgIAqIgCAKIgOAIIgSAFIgPgFg");
	this.shape_4.setTransform(45.3758,131.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#26516E").s().p("AgGAAIAEAAIAJAAIAAABIgNgBg");
	this.shape_5.setTransform(53.2875,94.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(125,149,170,0.925)").s().p("AgQAcIAEgHIgDAHIAAAAIgBAAgAAMgSIAFgJQgDANgFALQgNAcgKACQAOgTAMgag");
	this.shape_6.setTransform(9.95,60.2888);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6A6B83").s().p("AgBAGIAAgLIADALg");
	this.shape_7.setTransform(25.7,38.3625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(95,90,115,0.988)").s().p("AhID/QgqgdgGhAQAOgkAQgkIAfhAIABAAIgBACIACgDQAJgCAOgcQAGgLADgNIATgrIAHgUQAWgmAPgrIAkhPIAPggIACAAIABADIAHANQAEAHADASIAGAOIABACIgBANIAEAAIAEANQAIBFglA9QgOAWgIAaQgfBdgoBVQAAAZAEAYQAAABAFAAIAAAKIgFAAIAAANQgDgBgDADIgDAHIgEALQgHARgFAFIgGAHQgCAEAAADIgBABIgogeg");
	this.shape_8.setTransform(14.2566,60.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(119,147,166,0.875)").s().p("AASgoQgPArgUAmIAjhRg");
	this.shape_9.setTransform(16.225,47.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(31,32,49,0.98)").s().p("AhZBaIhuAAIgKAAQgwgHgqgNIAAgKIAAgbIAAgBIAAgWIAGAAIgBgDIgMgDQgJgCgFgFQAJgEALAAQAMgBANACQAPADAdAGQAVAFAeAAIA0ABIAZABIAOABIAAgBQB2gBBUggIAjgMQBFgcBJgaIAZAAIACARQADAdABAbQgbAUgpAOQhIAXhRATIgKABIipAdIgKAAg");
	this.shape_10.setTransform(63,93);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(33,78,102,0.745)").s().p("AgMAHIAAgJQAOABAJgFIACANIgZAAg");
	this.shape_11.setTransform(93.25,83.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(48,117,151,0.996)").s().p("AgdEiIgEAAIgZgBIg0gBQgeAAgVgFQgdgHgPgDQgNgCgMABIgPgGQAKACAGgGQAGgGABgMQAGhHADgiQACg6gFguQgHgwABgJQgBghAKgWQAHgOAAgDQABgKgIgKIgQgTQgJgMgDgNQgFgQgGgDQgDgBgDABQAJgDABgKIABgDQANgagEgdQAAgMADgSQABgGAFgFQAcBDA8AlQACABAAAFQBWAtCFgJQB2gIBmgcIAQAbIAFASQARA2AOBGIAVB9IAKA9QgIAFgPgBIAAAKQhJAahFAcIgjAMQhUAhh2ABIgKAAgAl+C+IA1AcQAvAaARALIAIAFQhEgdg5gpg");
	this.shape_12.setTransform(56,65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back_arm_top, new cjs.Rectangle(2.2,-1.5,93,171.1), null);


(lib.back_arm_hand = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(224,126,79,0.996)").s().p("AgtArQgHgIgHADQgmAPggAZIAAgBIAJhMIABgMIAFg7IACgWQAFgNgEgYIAAgCIAAgJICNiIQACgDAFAAQAjBBAbBLQAIAZgHAhQgaB1AWB8QABAKAFAGQAlA0gMA0QhRh8hbhxg");
	this.shape.setTransform(15.258,54);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(96,88,111,0.992)").s().p("AhKgaIARgPQADgDAAgFQAygTAogcQAEgDAFAAQAfAEgBAkIAAAKIAAAKQgFAAgDADIiMCIQABg1gChJg");
	this.shape_1.setTransform(11.5159,29.9625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(13,11,19,0.624)").s().p("AgCgYIACAAIABAKQAEAZgFAOg");
	this.shape_2.setTransform(3.991,17.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(13,29,52,0.969)").s().p("AgtgTQApABAcgKQAFgBAFAAQARANgGAkIgBAKIgKAAIgUAAIgKAAIgBAAQgxAAABgxg");
	this.shape_3.setTransform(32.628,17.0002);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(137,92,57,0.992)").s().p("ABoGtQAAgFgCgDQhYhXhZhVQAAgFgBgFQgyh+gviBIAAgGQAhgZAmgPQAHgDAHAIQBbBwBRB8QAMg0glg0QgFgGgBgKQgWh7Aah2QAHgigIgZQgbhKgihBIAAgKQAxgUAzgTQAEgBAFAAQAAAFADADQA/BMAECIIAAAoIAAAKQgjgZgZgtQgbgWANAyQAHAdALAZQARAlgLAxQgVBkAnB2QAVBAgnAnQg1gbgigxQgLgQgFgUQgXhWhTgWQA2BgAqBvQASAwAmAfQApAjAUAzQAIAUgRAAQgGAAgJgCg");
	this.shape_4.setTransform(19.5875,64.1236);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373F4F").s().p("Ag7AoQABglgfgDIAAgJQAegFAdgJQABgBAAgFQAZgKAZgJQAEgBAFAAQgBAxAzAAIAKAAQAAAFgBAAQgTAFgUAAQgFAAgEABQgyATgyAUIAAgKg");
	this.shape_5.setTransform(25,20);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#251A2A").s().p("AhPBSIAAgUQAMgcAMgfQAPgpAggbQApgiAlAMQAAAFgBAEQgNAggQAdQgJAmAngIIAKgBQAAAFgBAAQgdAKgeAFIAAAKQgFAAgEACQgoAcgyAUIAAgKg");
	this.shape_6.setTransform(14,15.8435);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(1,1,3,0.98)").s().p("AhYAiQAQgdAMgfQACgEAAgFQAlgUAsAOQADABACgGQADgJAAgKQAvAcAMA9IABAKQgFAAgFABQgdAKgpgBQgFAAgFABQgYAJgZAKIgKABIgMABQgaAAAIggg");
	this.shape_7.setTransform(26.9156,10.6181);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(22,18,30,0.965)").s().p("AiAB5IgChEQAHgOgEgZIgBgKIAAgJQAehaBagdQAFgBAEAAIA8AAIAKAAQAgADAUAOQADADAFAAQAAAKgDAJQgCAGgDgBQgtgOglAUQgmgMgoAiQggAbgQApQgLAfgMAcIAAAUIAAAKQAAAFgDACIgRAPIAAgFg");
	this.shape_8.setTransform(16.925,14.6375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(113,63,25,0.988)").s().p("AgMGvQAhAJgKgbQgTgzgpgjQgmgfgSgwQgshvg1hgQBSAWAYBWQAGAUALAQQAhAxA1AbQAngngVhAQgmh2AUhkQAKgxgQglQgLgZgHgdQgNgyAcAWQAYAtAjAZIAAgKIAAgoQgFiIg+hMQgCgDAAgFQATAAATgFQABAAAAgFIAUAAIAKAAQAdCIAxBzQACAEAAAFQARAlgEA/QgDA3AAA2QAHAcAUAPQADACAAAFQAbAHgMApQAAACgFAAQAAAeAJAbQAYBLg1AcIAAAKQAHA0gRAcIgJALQgGAJgGABQgnAEgUAPQgaASgbAAQgSAAgSgIg");
	this.shape_9.setTransform(31.324,63.9361);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back_arm_hand, new cjs.Rectangle(2.2,2,49.5,105.9), null);


(lib.back_arm_bottom1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#74421D").s().p("AgpHVIgthXQgthWgIAEIACgDIgBABQAMgfAKACQAFACAKASQAJAPAGgDQAIgFAKgsQAmirAZiqIAAgrIADhLQAAgNACgQIACgdQgRgYgeAzIgEAHQAVhGAJgMQAJgMAdiSQAYAUATAIQATAJAbBLQAcBMACBJIAAAlIACASIgYCNQgIAsgOAoQgpBygyBmQgDAGAAAFQgJBigfBKIgBADg");
	this.shape.setTransform(51.4625,52.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(224,126,79,0.992)").s().p("ABOFaQgKgSgGgCQgKgCgLAfQgvgVhEADIg6AHQAHhsgGAZIgFAVQgCAHABgUQACg4gGgoQgHgpgXhJQgXhIAhiOQAiiOAWg8IABAAIANAWIAfA2QA0BcAxBeQAEAGABgBQAxgfAig1IAFgHQAegzASAYIgDAdQgDAQABANIgDBLIgBArQgZCqgmCrQgKAsgIAFIgCAAQgFAAgHgMg");
	this.shape_1.setTransform(33.5338,46.6322);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(55,65,82,0.996)").s().p("ABoBTQghhLgWgKQgigQgNgDIgLAAQg6gFhZAPQgBAAAIh/IAYgJIAAABIA6gHQBDgDAwAVIABgBIgCADQAIgEAtBWIAsBWIAAADIgCAFIAAAUIACgZIABgDQADACABAOQADARABABQAGAFgEAPIgHAZIgEAKIgGASIgEAMIAAAAQgNgigRglg");
	this.shape_2.setTransform(32.8032,95.7434);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(41,41,53,0.518)").s().p("AgCgOIACgIIAAAAIABAKQAEAWgFANQAAgUgCgRg");
	this.shape_3.setTransform(4.9784,103.3125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(94,89,113,0.992)").s().p("Ag/CRIAAgIIAAgZIAAgTQAFgOgEgWIgBgKQACAAAPgnQAPgnABAAQAAAFAAgFIArg3QAug8AFACQgIB/ACAAQhyCigHAAIAAAAgAgegfIAAAAIAAAAg");
	this.shape_4.setTransform(11.4,96.3367);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(29,22,36,0.996)").s().p("AiFFIIgQgFIADhXQADgMgBgQIABgNIAHhRQACgLAAgOIAHhVQAIhZAChDIAAgCQACAKB3itQBZgOA5AEQgaFRgVBNIAADIIAAAKIgHAAIAAABQACAFgCAFIgCAFIgkAGIitAKQgPAAgDgBg");
	this.shape_5.setTransform(16.75,126.2967);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.647)").s().p("AAAgBIABAAIgBADIAAgDg");
	this.shape_6.setTransform(39.0625,135.2125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.725)").s().p("AgBAAIADgHIgDAPIAAgIg");
	this.shape_7.setTransform(40.2375,131.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(2,4,7,0.984)").s().p("AhhE8QACgGgCgFIgBAAIAHAAIAAgKIAAjIQAWhOAalQIAMAAQANADAhAQQAXALAhBLQAQAlANAjIgBADIgVA9IgjB9IgFAIIAAAJIgJAfIgBAAIAAAEIgEAMQgMAsgGAaIgKA1IgDARIgJAvIgBAHIgEAAIAAABIgDAAIg9AMIgOACIACgEg");
	this.shape_8.setTransform(36.2,125.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8A5D39").s().p("AjgG+QAAhRADiGQAEiHAAhRIAAgKIAAgHQgDgbAIgmQAJglAIgZIAJgiIADgTQACgMAEgHQAEgJAGgCIAAgCIAAgKIAghoQAIgaASgtQASguAOgCQAJgCDaAXQAMACAKgKIA2ABQgeCSgJAMQgJAMgWBGQgiA1gwAfQgCABgEgGQgxhegzhcIggg2IgNgWIAAAAQgXA8ghCOQgiCOAXBIQAYBJAGApQAHAogDA4QgBAUADgHIAEgVQAHgZgIBsIAAgBIgYAJQgFgCguA8IgsA3IAAAAIAAAAIAAACIAAgCg");
	this.shape_9.setTransform(30.8,48.5379);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back_arm_bottom1, new cjs.Rectangle(1.7,3.8,63.8,155.39999999999998), null);


(lib.back_arm_bottom = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#74421D").s().p("AiWIPIgBABQA1iMArjCQAmirAYiqIABgsIADhLQgBgNADgQIADgcQgRgYgeAyIgFAHQAWhFAJgMQAIgNAdiRQAYAUATAIQATAIAcBMQAbBMADBJIAAAkIABATIgXCNQgIAsgPAnQgpBzgxBlQgDAGgBAGQgKBnghBMIAAAUIAAAEIgIABIgIgBQgQgDgiAnQgkApgUALg");
	this.shape.setTransform(50.1375,58.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(224,126,79,0.992)").s().p("AhcH9IhFgNQATkZAFhiQACg4gGgoQgHgogXhJQgXhJAhiOQAiiOAWg8IABAAIANAWIAfA2QA0BcAxBdQAEAHABgBQAxgfAig1IAFgHQAegzASAYIgDAdQgDAPABANIgDBLIgBAsQgZCrgmCqQgrDCg1CMQgqARg7ACIgFgBg");
	this.shape_1.setTransform(33.5338,61.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(55,65,82,0.996)").s().p("Ag6BZIgEAAIgLgBQgUAAgMgCIgKgCQgFgCgEgEQAMgKAQAAQgGgCgCgFQgDgGACgGQACgFAFgDQAGgDAFAAQgGgCgLgHQgKgGgCgIIAEABQA8gCAqgQIABgBIgCADQATgLAkgpQAignAQADIAIABIAIgBQAHgBAEADQAGAGgEAPIgHAZIgEAJIgKAWQgDAIgEACIgBACQgUAogwAYQgtAWgkAAIgDAAgABGg+IAAgBIgBAAIABABg");
	this.shape_2.setTransform(36.0145,111.2672);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(41,41,53,0.518)").s().p("AgCgOIACgIIAAAAIABAKQAEAWgFANQAAgUgCgRg");
	this.shape_3.setTransform(4.9784,103.3125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(94,89,113,0.992)").s().p("AA4BXIgHgEQgfgKgKgFQgLgGgagSQgagTgCgPIAAgIIABgYIgBgTQAFgNgDgXIgBgKIAUAAIAKAAIAKAAQgCAKARAiQAQAiAIAHQAHAHAPADIAAA3QAOAWgBADIgBAAIgBgBg");
	this.shape_4.setTransform(10.7443,109.8044);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(29,22,36,0.996)").s().p("Ah9DxIgQgGIAEhWQACgMgBgQIABgNIAHhRQADgLgBgOIAIhVQAIhZAChDIAAgCQABAPAaATQAaASAMAGQALAFAeAKIAGAEQAAABABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQALAFAJAAQAEADAGAAQAVADAdAAIAJACQANACATAAIAMAAIADABQgEA1gGAZQgFASgQAzIAADIIAAAKIgHAAIABAAQACAFgCAGIgCAEIgkAGIiuALQgOAAgEgBg");
	this.shape_5.setTransform(15.9,135.0125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373F51").s().p("AgQArQgGgBgEgDQgJAAgLgFQABgCgOgXIAAg1IAVAHIgCgFIACAGIBEANQADAIAKAGQALAHAGACQgFAAgGACQgFADgCAFQgCAGADAGQACAFAGACQgQAAgMAKQAEAEAFACQgdAAgTgCg");
	this.shape_6.setTransform(21.225,115.175);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.647)").s().p("AAAgBIABAAIgBADIAAgDg");
	this.shape_7.setTransform(39.0625,135.2125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.725)").s().p("AgBAAIADgHIgDAPIAAgIg");
	this.shape_8.setTransform(40.2375,131.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(2,4,7,0.984)").s().p("AhmEDQACgGgCgFIgBAAIAHAAIAAgKIAAjIQAQgzAFgSQAGgZAEg1QAlABAvgYQAxgXATgpIABgBQAEgEAEgIIAJgVIgLAiIgUA9IgkB+IgFAIIAAAIIgJAfIgBAAIAAAEIgDAMQgNAsgGAaIgKA1IgDARIgJAvIgBAHIgEAAIAAABIgDAAIg9AMIgOACIACgEgAA+kGIABAAIAAABIgBgBg");
	this.shape_9.setTransform(36.6875,131.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8A5D39").s().p("AiLIVIACAFIgVgHQgPgEgHgHQgIgIgRgiQgRgiACgKIAAgKIAAnzIAAgKIAAgIQgDgbAIglQAIglAIgaIAKghIADgUQACgLAEgIQAEgJAGgBIAAgDIAAgKIAghoQAIgaASgtQASgtANgDQAJgBDbAXQAMACAJgLIA2ACQgdCRgJAMQgJAMgWBGQgiA1gxAfQgBABgEgGQgyhegzhbIgfg2IgNgXIgBABQgXA8ghCNQgiCOAYBJQAXBJAHAoQAGApgCA3QgFBjgTEZg");
	this.shape_10.setTransform(31.1436,57.5813);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back_arm_bottom, new cjs.Rectangle(1.7,3.8,63.8,155.39999999999998), null);


(lib.fore_leg_thigh_r = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B2536").s().p("AhQg7IgRgyQAEgBAEABQBJASBRAGQA8B4gwBFQgCACABAEQhjg2g5hzg");
	this.shape.setTransform(-38.7333,-23.145);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7AC2CD").s().p("AhMA9QAJgLgFgOQgDgIgCgIQgIgxANgrQAFgBADACQBEAtBKAiIADAJQhfAQg2AlIgIAEQgDgJADgEg");
	this.shape_1.setTransform(-11.7892,-129.5667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#617994").s().p("AgEgOIACgBIAHAfIgJgeg");
	this.shape_2.setTransform(-1.525,-156.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7EC5CF").s().p("ABKBwIgCgIQhRgdhDg1QgDgDgBgEQgOgVAEgwQADgTgDgSQgBgJABgFQABgEAKgCIAAABQgBADAEAFQAIALAOAJIAcAPQApAWAmAaIAOArIADAIIAKAgIAIAeIAEAOQgCACgFABIgHABIgEAAg");
	this.shape_3.setTransform(-9.0047,-161.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(50,105,132,0.992)").s().p("AACCoQgDgPgQgIIgKgGIgngiIgFgGQgEgGgFgFQgFgEgHABQgEABgCAFIgBACIABgoQAFgBABABQBEA+BKAwIABACIgHgDQgKgFgIACIgHAFIgFAEQgFAAgGACQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAgBAAAAgABQAaQgegYg6giQg5ghgggcIARhMQAEgBACABQAuBBAfAcQAcAaBCAmIADAIQgEATgKAQg");
	this.shape_4.setTransform(-29.45,-140.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#346B86").s().p("AABAtIhNg4QgCgCgFABIALhRQAFgCACACQAtAlAZAnQAVAfA1AlQAJAWgGAPQgBADACAEQhAgmgSgMg");
	this.shape_5.setTransform(-27.4207,-166.3125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(53,64,82,0.992)").s().p("AAFJuIgqgGQh4gxhxg/QgCgEACgDQAwhFg8h5QhRgGhJgSQgEgBgFACIgEgNQAVhnALhiQAHg2ACgrIAfiwQAeivgEggIgBh4IAEgBIABgDIAIgKIAOgPQAFgHAJgHIAJgJQAEgEASgLIATgMIAKgDQAGgDAFAAIAFgEIAIgFQAIgCAKAFIAGADIAHAEQAOAIAIAOIAAABQAFAIgEAFIgCACQALBDgEA9QgDBGgmCMQgmCNgEBEIgMCQQgDBmAfAtIAbBZQAkBmAvBRQA+gHBRgNQCkgaBmgaQBOgUAkgUQAFgBAAgCQAQhbAVhiIAGASIABAcQADBlgBAkQgDA3gJArQg4AwhHAmIgKAEQghANgtAFQgeAEg1ABIgzABQg1AAgegDg");
	this.shape_6.setTransform(-3.9875,-62.4978);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4D86A3").s().p("AjoFYIgBhuIgDgBIABgDQACgPAAgHIgBgMIABgBIABgCIABgDQABgEAEgBQAHgCAGAFQAFAEAEAHIAEAGIAoAhIAKAGQAPAIAEAQQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAIgKAEIgSALQgSALgFAFIgJAJQgIAHgGAGIgOAPIgIAKIgBADIgDACIgCgJgAg1EjQgIgPgOgHIgHgEIgBgDQhLgvhEg+QgBgBgEABQgCgEABgEQgBgdACg7IABgzQAgAbA5AiQA7AjAeAYIAFAEQALgQAEgTQA7A0BBApQBEArBNAZIgGAIQgRgLgRgIIg0gWIgIAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQgFADgEAEIAAAAIgDgIQhKgkhEgtQgCgCgGABQgNAsAJAyQABAIADAIQAGAOgJAKQgEAFADAIQgFAGgHAAQgEAAgEgBgAiCAXQgfgbgvhBQgBgBgEABIARhiQAFgBACACIBNA5QASAMBAAmQgBgEABgDQAFgPgIgWQg2glgUggQgagngtglQgCgCgFACQgBgCAKgyIAMg0QACAABAA8IBDBBQAJABALgBIADAJQgKACgBADQgBAGABAJQACASgCATQgEAwANAWQACAEADADQBCA1BSAdIACAGIgBAAQgHAAgBAEQgBADACAEIAHALQAGAGANAIIAJAJQADADAJAFIAKAJIAGAEQg1gXgsgiQg7gshHgTQgLA9ABBDIACAIQhCglgdgag");
	this.shape_7.setTransform(-16.1,-150.8252);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7CC4CF").s().p("AhKBWQhBgpg9g0IgCgIIgCgIQgBhDALg/QBIAUA6AsQAtAjA0AXIAKAEIACADIAYARIARANQAGAEAFACIAeATIAkAYIAqAeQgzAnhLAbIgKACQhLgZhEgqg");
	this.shape_8.setTransform(0.616,-140.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#535268").s().p("AkmLfIgbhYQgfguADhmIAMiQQAEhEAmiOQAmiMADhEQAEg+gLhCIACgCQAEgFgFgIIAAgBQAMAFAIgKIAIgEQA2gkBggRIAAAAQADgEAGgDQAAABAAAAQABAAAAAAQABAAAAAAQABAAABAAIAHAAIA1AWQAQAIARALIAFgIIAKgDQBLgbAzgnIgqgeIgkgYIgegTQgFgCgGgEIgRgNIgYgSIgCgCIgJgFIgGgEIgLgJQgIgFgEgDIgIgJQgOgIgFgGIgIgLQgCgEABgDQACgEAGAAIACAAIAEABIAHgBQAFgBACgCIgFgOIgIgfIgHgfIgCAAIgDgIIgOgsQgngagqgWIgbgPQgPgJgIgLQgDgFABgDIgBgBIgCgJQgIgHAAgIQgBg1AHg4QABgOAygjQAxgiA0AbQA0AbA6ATQA7ATBgBDQARA6AyBHQAuCzApCvIiZRxQhmAbijAZQhSANg+AIQgvhRgkhng");
	this.shape_9.setTransform(4.6407,-100.9349);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(53,64,82,0.988)").s().p("AE7hVQgpivguizQgyhHgRg6QhfhDg7gTQg7gTgzgbQg0gbgyAiQgxAjgCAOQgGA4ABA1QAAAIAHAHQgLABgJgBIhDhBQg/g8gDAAQgDgLBFi+QBJjIAggDQAvgEAsAEQBiAVBTArQCYBNBpCVIABABIAZAoIAMASIAJAPIAGAPQAWA+AQA/IAHAXIAGANIABACQACANAAALQAGAvABAkQACA0gHBeIgNCtIgCAJIgBAKIAAACIgDAQQADAWAAAUQgEA8gBBxIgEAQIAEAYIgcC+QgbDFgCAfQgCBiADBvIgGgSQgVBjgQBaQAAACgFABQgkAVhPATg");
	this.shape_10.setTransform(8.1627,-121.5191);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fore_leg_thigh_r, new cjs.Rectangle(-48.9,-226.7,97.9,226.7), null);


(lib.fore_leg_thigh_l = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1B2536").s().p("AhMBoQgwhFA8h4QBRgGBJgSQAEgBAEABIgRAyQg5BzhjA2QABgEgCgCg");
	this.shape.setTransform(38.7333,-23.145);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7AC2CD").s().p("ABFBGQg2glhfgQIADgJQBKgiBEgtQADgCAFABQANArgIAxQgCAIgDAIQgFAOAJALQADAEgDAJIgIgEg");
	this.shape_1.setTransform(11.7892,-129.5667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(53,64,82,0.992)").s().p("AiKJwQg1gBgegEQgtgFghgNIgKgEQhHgmg4gwQgJgrgDg3QgBgkADhlIABgcIAGgSQAVBiAQBbQAAACAFABQAkAUBOAUQBmAaCkAaQBRANA+AHQAvhRAkhmIAbhZQAfgtgDhmIgMiQQgEhEgmiNQgmiMgDhGQgEg9ALhDIgCgCQgEgFAFgIIAAgBQAIgOAOgIIAHgEIAGgDQAKgFAIACIAIAFIAFAEQAFAAAGADIAKADIATAMQASALAEAEIAJAJQAJAHAFAHIAOAPIAIAKIABADIAEABIgBB4QgEAgAeCvIAfCwQACArAHA2QALBiAVBnIgEANQgFgCgEABQhJAShRAGQg8B5AwBFQACADgCAEQhxA/h4AxIgqAGQgeADg1AAIgzgBg");
	this.shape_2.setTransform(3.9875,-62.4978);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(50,105,132,0.992)").s().p("AgNCoIgFgEIgHgFQgIgCgKAFIgHADIABgCQBKgwBEg+QABgBAFABIABAoIgBgCQgCgFgEgBQgHgBgFAEQgFAFgEAGIgFAGIgnAiIgKAGQgQAIgDAPQAAAAAAABQgBAAAAAAQAAAAAAABQAAAAAAAAQgGgCgFAAgAhjgEIADgIQBCgmAcgaQAfgcAuhBQACgBAEABIARBMQggAcg5AhQg6AigeAYIgGAFQgKgQgEgTg");
	this.shape_3.setTransform(29.45,-140.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7CC4CF").s().p("AhOCXQhLgbgzgnIAqgeIAkgYIAegTQAFgCAGgEIARgNIAYgRIACgDIAKgEQA0gXAtgjQA6gsBIgUQALA/gBBDIgCAIIgCAIQg9A0hBApQhEAqhLAZIgKgCg");
	this.shape_4.setTransform(-0.616,-140.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#617994").s().p("AADgPIACABIgJAeg");
	this.shape_5.setTransform(1.525,-156.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7EC5CF").s().p("AhUBvQgFgBgCgCIAEgOIAIgeIAKggIADgIIAOgrQAmgaApgWIAcgPQAOgJAIgLQAEgFgBgDIAAgBQAKACABAEQABAFgBAJQgDASADATQAEAwgOAVQgBAEgDADQhDA1hRAdIgCAIIgEAAIgHgBg");
	this.shape_6.setTransform(9.0047,-161.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#535268").s().p("ABEOCQijgZhmgbIiZxxQApivAuizQAyhHARg6QBghDA7gTQA6gTA0gbQA0gbAxAiQAyAjABAOQAHA4gBA1QAAAIgIAHIgCAJIgBABQABADgDAFQgIALgPAJIgbAPQgqAWgnAaIgOAsIgDAIIgCAAIgHAfIgIAfIgFAOQACACAFABIAHABIAEgBIACAAQAGAAACAEQABADgCAEIgIALQgFAGgOAIIgIAJQgEADgIAFIgLAJIgGAEIgJAFIgCACIgYASIgRANQgGAEgFACIgeATIgkAYIgqAeQAzAnBLAbIAKADIAFAIQARgLAQgIIA1gWIAHAAQABAAABAAQAAAAABAAQAAAAABAAQAAAAAAgBQAGADADAEIAAAAQBgARA2AkIAIAEQAIAKAMgFIAAABQgFAIAEAFIACACQgLBCAEA+QADBEAmCMQAmCOAEBEIAMCQQADBmgfAuIgbBYQgkBngvBRQg+gIhSgNg");
	this.shape_7.setTransform(-4.6407,-100.9349);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#346B86").s().p("AhRBYQgGgPAJgWQA1glAVgfQAZgnAtglQACgCAFACIALBRQgFgBgCACIhNA4QgSAMhAAmQACgEgBgDg");
	this.shape_8.setTransform(27.4207,-166.3125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4D86A3").s().p("ADkFfIgBgDIgIgKIgOgPQgGgGgIgHIgJgJQgFgFgSgLIgSgLIgKgEQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAEgQAPgIIAKgGIAoghIAEgGQAEgHAFgEQAGgFAHACQAEABABAEIABADIABACIABABIgBAMQAAAHACAPIABADIgDABIgBBuIgCAJIgDgCgAAiEeQADgIgEgFQgJgKAGgOQADgIABgIQAJgygNgsQgGgBgCACQhEAthKAkIgDAIIAAAAQgEgEgFgDQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgIAAIg0AWQgRAIgRALIgGgIQBNgZBEgrQBBgpA7g0QAEATALAQIAFgEQAegYA7gjQA5giAggbIABAzQACA7gBAdQABAEgCAEQgEgBgBABQhEA+hLAvIgBADIgHAEQgOAHgIAPQgEABgEAAQgHAAgFgGgAAmBOQABhDgLg9QhHATg7AsQgsAig1AXIAGgEIAKgJQAJgFADgDIAJgJQANgIAGgGIAHgLQACgEgBgDQgBgEgHAAIgBAAIACgGQBSgdBCg1QADgDACgEQANgWgEgwQgCgTACgSQABgJgBgGQgBgDgKgCIADgJQALABAJgBIBDhBQBAg8ACAAIAMA0QAKAygBACQgFgCgCACQgtAlgaAnQgUAgg2AlQgIAWAFAPQABADgBAEQBAgmASgMIBNg5QACgCAFABIARBiQgEgBgBABQgvBBgfAbQgdAahCAlIACgIg");
	this.shape_9.setTransform(16.1,-150.8252);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(53,64,82,0.988)").s().p("AkUP0QgFgBAAgCQgQhagVhjIgGASQADhvgChiQgCgfgbjFIgci+IAEgYIgEgQQgBhxgEg8QAAgUADgWIgDgQIAAgCIgBgKIgCgJIgNitQgHheACg0QABgkAGgvQAAgLACgNIABgCIAGgNIAHgXQAQg/AWg+IAGgPIAJgPIAMgSIAZgoIABgBQBpiVCYhNQBTgrBigVQAsgEAvAEQAgADBJDIQBFC+gDALQgDAAg/A8IhDBBQgJABgLgBQAHgHAAgIQABg1gGg4QgCgOgxgjQgygig0AbQgzAbg7ATQg7AThfBDQgRA6gyBHQguCzgpCvICZRxQhPgTgkgVg");
	this.shape_10.setTransform(-8.1627,-121.5191);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fore_leg_thigh_l, new cjs.Rectangle(-48.9,-226.7,97.9,226.7), null);


(lib.fore_leg_shin_r = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(224,126,79,0.992)").s().p("AgkF+QgVgyg0kyQgxkrAEgcQAMhSgJAtQgEg3ARANQAQAOBUATQBSASBvg1IhKLhIgMAFQgyAXgoAAIgPgBg");
	this.shape.setTransform(0.0063,-60.644);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(16,22,39,0.996)").s().p("AkCBQQBjAGAugGQAwgGBPgGQBRgFBmgLQAFAQgJAKQgCACgGACQgBgFiFAzQgsARgyAAQhhAAh2hBgAkuAEIBPgNQEgBSDujZQgfBcg2BPQgCACgFABQgEACh8AUQgdAFgjAAQh3AAjKg1g");
	this.shape_1.setTransform(6.4,-123.2163);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(137,92,57,0.992)").s().p("AAYJEQiUgBgSiOIgCgIIAAgIQgBgPgHgxIAAgEQAEgngNguQgIhjgTiQQgcjQgZg0QgRgjgIgZIgGgWIABgEQgBgEABgEIBNj9QAFgCgGAUQgGATAKAKQAJAKAWATQAWATAvAWQAuAWBkADQBlACAtgOQApgOAfgsIgVCoQgHA+gEArQgCAXgbDMQgXCqADAgIAGA9QADAkAFAXQAIAhAIAWQAEAKAGACQAZB5hsAyIgJAEQgqAZhIAFIAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAgBgAh2lDQgEAbAxErQA0EzAVAyQAuAFA7gbIAMgFIBKriQhvA2hSgTQhUgTgQgNQgRgOAEA3IAEgQQABAAgIA2gAERoEIAAACIAAABIgBAAIABgDg");
	this.shape_2.setTransform(-3.575,-58.3526);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(2,2,4,0.992)").s().p("AAEDQQhkgDgugWQgvgWgWgTQgWgTgJgKQgKgKAGgTQAGgUgFACIgDgJIgFgRQhEgbgnhCQgMgVAOgMQAEgEACgHQAEgVgCgbQBTAWCjBSQChBREpj3IAKAiIADAJQgDAJgFAIQgCADgFABQjuDYkhhRIhPANQEFBEB8gUQB9gVAEgBQgCAJgGAJQgCACgEABQhmAMhRAFQhQAGgvAGQgvAFhigFQCyBiCDgzQCFgyABAEQADAJgCAHQgBACgEABIAAABQgEACAAAEIgEAYQgBABAAABQAAAAAAABQAAAAAAAAQAAAAABAAIAEgEIgEAHQgfAsgpAOQgmAMhPAAIgdAAg");
	this.shape_3.setTransform(1.5283,-123.2566);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1B2536").s().p("AhZG/QijhShTgVQgWgZg1hbQg2hcAEgGQAMgRAKgMIAVgVIAPgVQAagmAHgaIAFgOIgBgBQgFgKgOgHQgJgFgCgDQBfgmBageQgVBhhQBDIgXAVQgpApgRAzIACABQAhA0AwAhQAvAgBVA4QBWA2AvgUQAugTB5hKQBSgigQgWQgQgVADgHQAEgHgNgSQgMgSALgFIADgCIAAAAIAPgMIAGgDQAhgbBXhXQBKhIA3gpQgTAjAFAlQACAXAQArQAPArADAXQADAmgUAhIgoAdQgnAdABABQgPALAPAaIADAIQjfC6iSAAQgxAAgogVgAloiMQAhg2AiguIgBgDQgEgMgCgMIgBgDIACgHIADgTIABgHIABgDIACgOIAAgEQACgIADgHIAIgVQAHgSAEgHIALgQQAXghAOgNQAIgFADgGIAEgHQAEgDADACIABACIABACQACAHgFAKIgJAQIAAABQAAAEgCAHIgCAGIAGgBQgaBTAEBlQAAABAAAAQgBAAAAAAQgBABgBAAQgBAAgBAAQgqA2hNAkIgIADQgBgEABgDg");
	this.shape_4.setTransform(0.0274,-172.2317);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(53,64,82,0.996)").s().p("AjEHAQhVg3gwghQgvgggig0IgBgBQARg0ApgpIAWgVQBQhEAWhgQhbAdhfAnIAAgBIgFgLIgDgHQALgqAggaIAJgDQBNglAqg1QABAAABgBQABAAAAAAQABAAAAgBQAAAAAAAAQgEhmAahTIgGABIACgFQADgIgBgEIABgBIAJgQQAEgJgBgHIgBgCQAegnAygbQBng1BygMQBFgIAyAOQA2APAkAjQAeAeAaAtIAyBTQAqBygVBRQgIAeAKApQABAEgBAFQgBADABAFQg3AohJBJQhYBXggAcIgGADIgPALIAAABIgDABQgMAGAMASQANASgEAHQgCAGAPAWQAQAVhRAiQh4BKgwAUQgMAFgQAAQgqAAg+gog");
	this.shape_5.setTransform(1.964,-183.277);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fore_leg_shin_r, new cjs.Rectangle(-46.1,-232.1,92.30000000000001,232.1), null);


(lib.fore_leg_shin_l = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(224,126,79,0.992)").s().p("AhEFoIgMgFIhKrhQBvA1BSgSQBUgTAQgOQARgNgEA3QgJgtAMBSQAEAcgxErQg0EygVAyIgPABQgoAAgygXg");
	this.shape.setTransform(0.0438,-60.644);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(16,22,39,0.996)").s().p("AgzCAQiEgzgCAFQgEgCgCgCQgKgKAFgQQBmALBRAFQBQAGAvAGQAvAGBigGQh2BBhhAAQgyAAgtgRgAhRA0Qh9gUgEgCQgFgBgCgCQg2hPgghcQDvDZEhhSIBPANQjLA1h3AAQgjAAgcgFg");
	this.shape_1.setTransform(-6.35,-123.2163);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(137,92,57,0.992)").s().p("AgZJIQhIgFgqgZIgJgEQhsgyAZh5QAGgCAEgKQAIgWAIghQAFgXADgkIAGg9QADgggXiqQgbjMgCgXQgEgrgHg+IgVioQAfAsApAOQAtAOBlgCQBkgDAugWQAvgWAWgTQAWgTAJgKQAKgKgGgTQgGgUAFACIBND9QABAEgBAEIABAEIgGAWQgIAZgRAjQgZA0gcDQQgTCQgIBjQgNAuAEAnIAAAEQgHAxgBAPIAAAIIgCAIQgSCOiUABQAAABgBABQAAAAAAABQAAAAgBAAQAAABAAAAIAAAAgAh0FNIAMAFQA7AbAugFQAVgyA0kzQAxkrgEgbQgMhTAJAtQAEg3gRAOQgQANhUATQhSAThvg2gAkQoBIAAgBIAAgCIABADIgBAAg");
	this.shape_2.setTransform(3.625,-58.3526);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(2,2,4,0.992)").s().p("AiVDEQgpgOgfgsIgEgHIAEAEQABAAAAAAQAAAAAAAAQAAgBAAAAQAAgBgBgBIgEgYQAAgEgEgCIAAgBQgEgBgBgCQgCgHADgJQABgECFAyQCDAzCyhiQhiAFgvgFQgvgGhQgGQhRgFhmgMQgEgBgCgCQgGgJgCgJQAEABB9AVQB8AUEFhEIhPgNQkhBRjujYQgFgBgCgDQgFgIgDgJIADgJIAKgiQEpD3ChhRQCjhSBTgWQgCAbAEAVQACAHAEAEQAOAMgMAVQgnBChEAbIgFARIgDAJQgFgCAGAUQAGATgKAKQgJAKgWATQgWATgvAWQguAWhkADIgdAAQhPAAgmgMg");
	this.shape_3.setTransform(-1.4783,-123.2566);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(53,64,82,0.996)").s().p("ABBHjQgwgUh4hKQhRgiAQgVQAPgWgCgGQgEgHANgSQAMgSgMgGIgDgBIAAgBIgPgLIgGgDQgggchYhXQhJhJg3goQABgFgBgDQgBgFABgEQAKgpgIgeQgVhRAqhyIAyhTQAagtAegeQAkgjA2gPQAygOBFAIQByAMBnA1QAyAbAeAnIgBACQgBAHAEAJIAJAQIABABQgBAEADAIIACAFIgGgBQAaBTgEBmQAAAAAAAAQAAABABAAQAAAAABAAQABABABAAQAqA1BNAlIAJADQAgAaALAqIgDAHIgFALIAAABQhfgnhbgdQAWBgBQBEIAWAVQApApARA0IgBABQgiA0gvAgQgwAhhVA3Qg+AogqAAQgQAAgMgFg");
	this.shape_4.setTransform(-1.914,-183.277);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1B2536").s().p("AlwEaIADgIQAPgagPgLQABgBgngdIgogdQgUghADgmQADgXAPgrQAQgrACgXQAFglgTgjQA3ApBKBIQBXBXAhAbIAGADIAPAMIAAAAIADACQALAFgMASQgNASAEAHQADAHgQAVQgQAWBSAiQB5BKAuATQAvAUBWg2QBVg4AvggQAwghAhg0IACgBQgRgzgpgpIgXgVQhQhDgVhhQBaAeBfAmQgCADgJAFQgOAHgFAKIgBABIAFAOQAHAaAaAmIAPAVIAVAVQAKAMAMARQAEAGg2BcQg1BbgWAZQhTAVijBSQgoAVgxAAQiSAAjfi6gAFhiIQhNgkgqg2QgBAAgBAAQgBAAgBgBQAAAAgBAAQAAAAAAgBQAEhlgahTIAGABIgCgGQgCgHAAgEIAAgBIgJgQQgFgKACgHIABgCIABgCQADgCAEADIAEAHQADAGAIAFQAOANAXAhIALAQQAEAHAHASIAIAVQADAHACAIIAAAEIACAOIABADIABAHIADATIACAHIgBADQgCAMgEAMIgBADQAiAuAhA2QABADgBAEg");
	this.shape_5.setTransform(0.0226,-172.2317);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fore_leg_shin_l, new cjs.Rectangle(-46.1,-232.1,92.30000000000001,232.1), null);


(lib.Анимация3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.back_arm_hand = new lib.back_arm_hand();
	this.back_arm_hand.name = "back_arm_hand";
	this.back_arm_hand.setTransform(123.65,-37,1,1,0,0,180,26.5,18.4);

	this.timeline.addTween(cjs.Tween.get(this.back_arm_hand).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(98.5,-53.4,49.5,105.9);


(lib.Анимация1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.back_arm_top = new lib.back_arm_top();
	this.back_arm_top.name = "back_arm_top";
	this.back_arm_top.setTransform(99.65,-58.3,1,1,0,-8.9389,171.0611,50,28.6);

	this.timeline.addTween(cjs.Tween.get(this.back_arm_top).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(50.4,-95.5,118.5,183.5);


// stage content:
(lib.Isometricview_Hero1UseDown_HTML5Canvas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hair
	this.hair = new lib.hair();
	this.hair.name = "hair";
	this.hair.setTransform(237,111,1,1,0,0,0,76,58);

	this.timeline.addTween(cjs.Tween.get(this.hair).to({rotation:-2.741,x:220.95,y:109.75},9).to({regY:58.1,rotation:-1.7908,x:226.4,y:114.85},8).to({regY:58,rotation:0,x:237,y:111},20).wait(1));

	// hair_top
	this.hair_top = new lib.hair_top();
	this.hair_top.name = "hair_top";
	this.hair_top.setTransform(208.2,59.1,1,1,0,0,0,34,57.5);

	this.timeline.addTween(cjs.Tween.get(this.hair_top).to({regY:57.6,rotation:-2.741,x:189.7,y:59.4},9).to({rotation:-1.7908,x:196,y:63.9},8).to({regY:57.5,rotation:0,x:208.2,y:59.1},20).wait(1));

	// hair_back
	this.hair_back = new lib.hair_back();
	this.hair_back.name = "hair_back";
	this.hair_back.setTransform(189.8,60.6,1,1,0,0,0,37,38);

	this.timeline.addTween(cjs.Tween.get(this.hair_back).to({rotation:-2.741,x:171.4,y:61.7},9).to({regY:38.1,rotation:-1.7908,x:177.7,y:66},8).to({regY:38,rotation:0,x:189.8,y:60.6},20).wait(1));

	// Слой_11
	this.fore_arm_hand = new lib.fore_arm_hand();
	this.fore_arm_hand.name = "fore_arm_hand";
	this.fore_arm_hand.setTransform(67.75,437.25,0.9999,0.9999,0,5.776,-174.224,25.4,2.1);
	this.fore_arm_hand._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fore_arm_hand).wait(5).to({_off:false},0).to({_off:true},1).wait(24).to({_off:false,regX:25.2,regY:2.2,scaleY:0.8766,skewX:11.954,x:62.2,y:487.75},0).to({_off:true},1).wait(7));

	// Слой_10
	this.fore_arm_hand_1 = new lib.fore_arm_hand1();
	this.fore_arm_hand_1.name = "fore_arm_hand_1";
	this.fore_arm_hand_1.setTransform(64.4,431.9,0.9999,0.9999,0,15.226,-164.774,25.4,2.2);
	this.fore_arm_hand_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fore_arm_hand_1).wait(6).to({_off:false},0).to({x:66.8,y:474.9},11).to({x:62,y:441.3},7).to({x:66.8,y:471.1},5).to({_off:true},1).wait(8));

	// Слой_12
	this.back_arm_bottom = new lib.back_arm_bottom();
	this.back_arm_bottom.name = "back_arm_bottom";
	this.back_arm_bottom.setTransform(74.1,400.2,0.9984,0.9984,-7.697,0,0,34.1,24.1);

	this.timeline.addTween(cjs.Tween.get(this.back_arm_bottom).to({regX:34,regY:24.2,scaleX:1.0138,scaleY:0.4394,rotation:0,skewX:-8.7519,skewY:3.2597,x:69.8,y:387.3},5).to({_off:true},1).wait(25).to({_off:false,regX:34.1,regY:24,scaleX:1.0167,scaleY:0.7202,skewX:-4.0496,skewY:4.5363,x:64.7,y:402.4},0).to({regY:24.1,scaleX:0.9984,scaleY:0.9984,rotation:-7.697,skewX:0,skewY:0,x:74.1,y:400.2},6).wait(1));

	// Слой_7
	this.back_arm_bottom_1 = new lib.back_arm_bottom1();
	this.back_arm_bottom_1.name = "back_arm_bottom_1";
	this.back_arm_bottom_1.setTransform(67.3,386.7,1.0271,0.466,0,-4.1912,9.3901,34.1,24.2);
	this.back_arm_bottom_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.back_arm_bottom_1).wait(6).to({_off:false},0).to({regY:24.1,scaleY:0.7498,skewX:-4.192,x:66.15,y:392.4},11).to({scaleY:0.5706,skewX:-4.1926,x:65.9,y:388.8},7).to({regX:34.2,regY:24.3,scaleY:0.7602,skewX:-4.191,x:67.85,y:392.8},6).to({_off:true},1).wait(7));

	// Слой_8
	this.back_arm_hand = new lib.back_arm_hand();
	this.back_arm_hand.name = "back_arm_hand";
	this.back_arm_hand.setTransform(82.7,540.65,1,1,0,0,0,26.5,18.4);

	this.timeline.addTween(cjs.Tween.get(this.back_arm_hand).to({regX:26.6,scaleX:0.9992,scaleY:0.8963,rotation:7.0593,x:69.35,y:466.6},4).to({_off:true},1).wait(26).to({_off:false,scaleY:0.9992,rotation:7.0595,x:62.8,y:505.9},0).to({regX:26.5,scaleX:1,scaleY:1,rotation:0,x:82.7,y:540.65},6).wait(1));

	// back_arm_bottom
	this.instance = new lib.Анимация2("synched",0);
	this.instance.setTransform(333.05,396.2,0.9999,0.9999,2.008,0,0,124,-59.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9998,scaleY:0.9998,rotation:-4.6737,x:327.5,y:391.4},9).to({rotation:-8.8723,x:325.95,y:396.2},8).to({scaleX:0.9999,scaleY:0.9999,rotation:2.008,x:333.05},20).wait(1));

	// back_arm_hand
	this.instance_1 = new lib.Анимация3("synched",0);
	this.instance_1.setTransform(336.4,537.6,0.9994,0.9994,-7.18,0,0,130.5,-36.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-12.1556,x:345.2,y:532.85},9).to({regY:-36.7,rotation:-21.6427,x:354.8,y:537.75},8).to({regY:-36.8,rotation:-7.18,x:336.4,y:537.6},20).wait(1));

	// Слой_1
	this.instance_2 = new lib.Waist_01();
	this.instance_2.setTransform(208.5,489,1,1,0,0,0,-2.4,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({y:492.2},8).to({y:489},20).wait(1));

	// strap
	this.strap = new lib.strap();
	this.strap.name = "strap";
	this.strap.setTransform(205.6,299.5,1.1878,1.1878,0,0,0,73.7,65);

	this.timeline.addTween(cjs.Tween.get(this.strap).to({regX:73.8,scaleX:1.1881,scaleY:1.1879,skewX:-0.6241,skewY:0.8058,x:198.5,y:301.5},9).to({regX:73.7,regY:65.1,skewX:0.3253,skewY:1.7553,x:200.65,y:306.25},8).to({regY:65,scaleX:1.1878,scaleY:1.1878,skewX:0,skewY:0,x:205.6,y:299.5},20).wait(1));

	// shirt
	this.shirt = new lib.shirt();
	this.shirt.name = "shirt";
	this.shirt.setTransform(218.7,328.1,1,1,0,0,0,103.5,128.5);

	this.timeline.addTween(cjs.Tween.get(this.shirt).to({scaleY:1.0011,skewX:-2.7056,x:212.75},9).to({regY:128.6,skewX:-1.7556,skewY:0.9495,x:214.6,y:333.05},8).to({regY:128.5,scaleY:1,skewX:0,skewY:0,x:218.7,y:328.1},20).wait(1));

	// Слой_6
	this.instance_3 = new lib.L_Eyebrow();
	this.instance_3.setTransform(184.45,137.05,1,1,0,0,180,0,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:-0.1,skewX:-0.0105,skewY:179.9895,x:170.25,y:140.45},9).to({regY:-3.3,skewX:0.9382,skewY:180.9382,x:175.2,y:144.7},8).to({regX:0,regY:-3.4,skewX:0,skewY:180,x:184.45,y:137.05},20).wait(1));

	// l_eyebrow
	this.instance_4 = new lib.L_Eyebrow();
	this.instance_4.setTransform(228.6,137.05,1,1,0,0,0,0,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:0.1,rotation:-13.7402,x:213.9,y:139},9).to({regY:-3.3,rotation:-12.79,x:218.85,y:144},8).to({regX:0,regY:-3.4,rotation:0,x:228.6,y:137.05},20).wait(1));

	// Слой_5
	this.instance_5 = new lib.L_eye();
	this.instance_5.setTransform(184.9,151.1,1,1,0,0,180,0,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:-0.1,regY:-6.4,skewX:-2.741,skewY:177.259,x:170.95,y:152.4},9).to({skewX:-1.7908,skewY:178.2092,x:175.7,y:156.6},8).to({regY:-6.2,scaleX:0.9995,scaleY:0.2252,skewX:-6.801,skewY:179.658,x:176.7,y:155.9},2).to({regX:-0.2,scaleX:0.9998,scaleY:0.9998,skewX:-1.2996,skewY:178.7004,x:177.25,y:156.05},1).to({regX:0,regY:-6.5,scaleX:1,scaleY:1,skewX:0,skewY:180,x:184.9,y:151.1},17).wait(1));

	// l_eye
	this.instance_6 = new lib.L_eye();
	this.instance_6.setTransform(228.6,150.65,1,1,0,0,0,0,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:-6.4,rotation:-2.741,x:214.5,y:149.85},9).to({rotation:-1.7908,x:219.3,y:154.75},8).to({regY:-6.2,scaleX:0.9995,scaleY:0.2252,rotation:0,skewX:-6.801,skewY:-0.342,x:220.3,y:155.5},2).to({regX:0.1,scaleX:0.9998,scaleY:0.9998,rotation:-1.2996,skewX:0,skewY:0,x:220.8,y:154.45},1).to({regX:0,regY:-6.5,scaleX:1,scaleY:1,rotation:0,x:228.6,y:150.65},17).wait(1));

	// mouth
	this.instance_7 = new lib.Mouth();
	this.instance_7.setTransform(209.95,188.85,1,1,0,0,0,0,-4.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:-4.5,rotation:-2.741,x:197.7,y:188.9},9).to({regX:0.1,rotation:-1.7908,x:201.9,y:193.55},8).to({regX:0,regY:-4.6,rotation:0,x:209.95,y:188.85},20).wait(1));

	// head
	this.instance_8 = new lib.head();
	this.instance_8.setTransform(204.3,192.75,1,1,0,0,0,1.6,-13);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-2.741,x:192.25,y:192.95},9).to({regY:-12.9,rotation:-1.7908,x:196.3,y:197.6},8).to({regY:-13,rotation:0,x:204.3,y:192.75},20).wait(1));

	// neck
	this.head = new lib.neck();
	this.head.name = "head";
	this.head.setTransform(207.2,236.6,1,1,0,0,0,62,167);

	this.timeline.addTween(cjs.Tween.get(this.head).to({regX:62.1,regY:167.1,rotation:-2.741,x:197.35,y:236.75},9).to({rotation:-1.7908,x:200.6,y:241.3},8).to({regX:62,regY:167,rotation:0,x:207.2,y:236.6},20).wait(1));

	// belt
	this.belt = new lib.belt();
	this.belt.name = "belt";
	this.belt.setTransform(205.35,491.85,1,0.8958,0,0,0,66,86.6);

	this.timeline.addTween(cjs.Tween.get(this.belt).wait(9).to({y:495.85},8).to({y:491.85},20).wait(1));

	// Слой_4
	this.instance_9 = new lib.fore_leg_thigh_r();
	this.instance_9.setTransform(151.6,613.15,1,1.0991,0,0.8448,0,0.1,-113.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(38));

	// fore_leg_thigh
	this.instance_10 = new lib.fore_leg_thigh_l();
	this.instance_10.setTransform(269.15,615.65,1,1.0767,0,-0.5408,0,0.1,-113.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(38));

	// Слой_2
	this.fore_leg_shoe = new lib.fore_leg_shoe();
	this.fore_leg_shoe.name = "fore_leg_shoe";
	this.fore_leg_shoe.setTransform(140.95,899.95,0.9734,1.1086,0,-2.107,177.0508,75.4,21.8);

	this.timeline.addTween(cjs.Tween.get(this.fore_leg_shoe).wait(38));

	// fore_leg_shoe
	this.fore_leg_shoe_1 = new lib.fore_leg_shoe();
	this.fore_leg_shoe_1.name = "fore_leg_shoe_1";
	this.fore_leg_shoe_1.setTransform(276,898.7,0.8691,1.1043,0,1.4308,2.9416,76,22.1);

	this.timeline.addTween(cjs.Tween.get(this.fore_leg_shoe_1).wait(38));

	// Слой_3
	this.instance_11 = new lib.fore_leg_shin_r();
	this.instance_11.setTransform(138.35,812.9,1,0.9793,0,0.8445,0,0.1,-116);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(38));

	// fore_leg_shin
	this.instance_12 = new lib.fore_leg_shin_l();
	this.instance_12.setTransform(277.45,813.1,1,0.9381,0,-1.1148,0,0,-116);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(38));

	// hips
	this.hips = new lib.hips();
	this.hips.name = "hips";
	this.hips.setTransform(211.7,537.85,1,0.9607,0,0,0,73.5,75);

	this.timeline.addTween(cjs.Tween.get(this.hips).wait(38));

	// Слой_9
	this.back_arm_top = new lib.back_arm_top();
	this.back_arm_top.name = "back_arm_top";
	this.back_arm_top.setTransform(106.7,262.35,1,1,10.2166,0,0,50.1,28.5);

	this.timeline.addTween(cjs.Tween.get(this.back_arm_top).to({x:97.9,y:263.15},9).to({rotation:11.1661,x:100.85,y:267.7},8).to({rotation:10.2166,x:106.7,y:262.35},20).wait(1));

	// back_arm_top
	this.instance_13 = new lib.Анимация1("synched",0);
	this.instance_13.setTransform(300.2,271.8,1,1,0,0,0,91.2,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({x:293},9).to({rotation:0.9495,x:295.8,y:278},8).to({rotation:0,x:300.2,y:271.8},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(211.4,498,176.49999999999997,501.1);
// library properties:
lib.properties = {
	id: '7E9D9C1005CD42CB81744FE926DBEFCB',
	width: 400,
	height: 1000,
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
an.compositions['7E9D9C1005CD42CB81744FE926DBEFCB'] = {
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
