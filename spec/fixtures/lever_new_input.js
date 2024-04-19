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


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#5C4D2E").s().p("An8HfQjGAAiMiMQiNiMABjHQgBjFCNiNQCMiMDGAAIP5AAQDGAACMCMQCNCNgBDFQABDHiNCMQiMCMjGAAg");
	this.shape.setTransform(-0.7966,-12.962,0.2627,0.2627);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3A382").s().p("AomOvQj/hNjEiOQjEiOhsi4Qhvi+AAjQQAAjPBvi/QBsi3DEiOQDEiOD/hNQEHhREfAAQEgAAEIBRQD+BNDECOQDECOBrC3QBwC/AADPQAADQhwC+QhrC4jECOQjECOj+BNQkIBRkgAAQkgAAkGhRg");
	this.shape_1.setTransform(-0.0217,-10.8146,0.2627,0.2627);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A1916A").s().p("AqNRfQkthcjpioQjpioiAjaQiEjiABj3QgBj2CEjiQCAjaDpioQDpioEthcQE4hfFVAAQFWAAE5BfQEtBcDoCoQDpCoB/DaQCFDiAAD2QAAD3iFDiQh/DajpCoQjoCoktBcQk5BflWAAQlVAAk4hfg");
	this.shape_2.setTransform(-0.0217,-5.561,0.2627,0.2627);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#756C57").s().p("ArFS+QlHhkj8i3Qj9i2iKjsQiPj1AAkMQAAkLCPj1QCKjsD9i2QD8i3FHhkQFThnFyAAQFzAAFSBnQFIBkD8C3QD9C2CKDsQCPD1AAELQAAEMiPD1QiKDsj9C2Qj8C3lIBkQlSBnlzAAQlyAAlThng");
	this.shape_3.setTransform(-0.0217,-2.9342,0.2627,0.2627);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#484238").s().p("AsEUpQlkhtkSjGQkTjHiWkBQickKAAkkQAAkjCckKQCWkBETjHQESjGFkhtQFxhxGTAAQGTAAFxBxQFkBtETDGQETDHCWEBQCcEKAAEjQAAEkicEKQiWEBkTDHQkTDGlkBtQlwBxmUAAQmTAAlxhxg");
	this.shape_4.setTransform(-0.0152,-0.0447,0.2627,0.2627);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.1,-37.7,104.2,75.30000000000001);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#A9A59C").s().p("AkTEUQhxhzAAihQAAihBxhxQBzhzCgABQCigBBxBzQBzBxgBChQABChhzBzQhxBxiiABQiggBhzhxg");
	this.shape.setTransform(-0.275,-85.492,0.2626,0.2626);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7B7870").s().p("AkVJtQiAg3hjhiQjSjSAAkmQAAhuAghnQAfhkA7hXIABgBQB1hxCVg+QCbhACqAAQCrAACdBCQCYBBB2B1QA4BVAeBjQAfBlAABrQAACQg4CFQg3CAhjBjQhiBiiBA3QiEA4iSAAQiQAAiFg4g");
	this.shape_1.setTransform(-0.0058,-81.9333,0.2626,0.2626);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4F4C46").s().p("Ak4LKQiQg9hwhvQhvhwg9iQQhAiWAAiiQAAjABXisQA2hSBDhAIAAgBQB1hxCWg+QCbhACpAAQCsAACdBCQCYBAB1B2QBmBkA9B+QAxCEAACQQAACihACWQg9CQhvBwQhvBviRA9QiVA/ikAAQiiAAiWg/g");
	this.shape_2.setTransform(0.1123,-79.3004,0.2626,0.2626);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#625F58").s().p("AlKMOQiYhAh2h2Qh1h1hAiZQhEidAAitQABh9Ajh4QAkhzBChmQBziyC6hmQC/hrDbAAQD3AADPCEQDKCBBqDWQBXCwAADGQABCthDCdQhBCZh1B1Qh2B2iYBAQieBDitABQisgBiehDg");
	this.shape_3.setTransform(-0.0387,-77.4029,0.2626,0.2626);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B3A382").s().p("AoYCSQithPABhuQAAg1BAgyQBAgyBughIALgBIAACwIAZATQAjAWAwASQCWA8DSACQEYACCQhDQBIggAQgiIAEiMIACACQBWAgAwAoQAwAqABAtQAABtijBKQi8BWlhAFIglAAQk8AAi9hVg");
	this.shape_4.setTransform(-1.0104,-53.0591,0.2626,0.2626);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3C2413").s().p("Ah5p4QB5glCDhBQg2KHA6LSQiAA/h9AlQgerLAbqMg");
	this.shape_5.setTransform(12.0124,-17.8703,0.2626,0.2626);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3C2413").s().p("AiGJ6QA8rWg2qEQB+BFB8AnQAcKJggLMQiAgnh8hAg");
	this.shape_6.setTransform(-13.7703,-17.8309,0.2626,0.2626);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#423125").s().p("AlzKTQAfrLgbqKQFoBwF4h1QgbKNAeLKQi/A4i8AAQi3AAi1g1g");
	this.shape_7.setTransform(-0.8922,-15.7132,0.2626,0.2626);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#492F1B").s().p("AhfIJIAAu7QBgggBfg2IAAQRg");
	this.shape_8.setTransform(10.2894,78.1029,0.2626,0.2626);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#492F1B").s().p("AhfIJIAAwRQBfA0BgAhIAAO8g");
	this.shape_9.setTransform(-10.5637,78.1029,0.2626,0.2626);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#52351D").s().p("AksHfIAAu9QEuBnErhlIAAO7g");
	this.shape_10.setTransform(-0.1372,79.2125,0.2626,0.2626);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6B4727").s().p("AkEBfQhtgnAAg4QAAg3BtgnQBsgoCYAAQCZAABtAoQBsAnAAA3QAAA4hsAnQhtAoiZAAQiYAAhsgog");
	this.shape_11.setTransform(-0.1503,-61.5201,0.2626,0.2626);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#49301F").s().p("AlfCXQiSg+AAhZQAAhYCSg+QCSg/DNAAQDOAACSA/QCSA+AABYQAABZiSA+QiSA/jOAAQjNAAiSg/g");
	this.shape_12.setTransform(-0.1437,-61.0999,0.2626,0.2626);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5D442F").s().p("AmeFEQAdlrAPlWQFuBtF5hwQAPFgAaFiQjSA/jQAAQjNAAjNg9g");
	this.shape_13.setTransform(-0.9054,11.5415,0.2626,0.2626);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5D442F").s().p("AlvDyQgLkKgXkQQCzAqDeABQDhAACxgqQgWEHgLENQjBA8i8AAQizAAiwg3g");
	this.shape_14.setTransform(-0.8922,-40.7075,0.2626,0.2626);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#50321A").s().p("AmeVZQiQgqiRhKQA0lrAblKQA8rVg2qEQgak5g3ktQASA9BRAxQBMAsB8AdQCyAqDeAAQDhABCygrQB8gdBMguQBSgxAQhAQg1EvgaE8Qg1KHA6LSQAaFHAzFuQiOBHiUArQjSA+jQAAQjNAAjNg8g");
	this.shape_15.setTransform(-0.9054,-15.8972,0.2626,0.2626);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#925D2E").s().p("EgEsAqtMAAAhWOIJZAAMAAABWQQiUAziUAAQiXAAiag1g");
	this.shape_16.setTransform(-0.2073,12.9239,0.2625,0.2625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6B4727").s().p("EgHsAvjMAAAhfFIPZAAMAAABfFg");
	this.shape_17.setTransform(-0.2073,19.6774,0.2625,0.2625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.3,-99.7,44.6,199.3);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#7B7870").s().p("AikClQhEhEAAhhQAAhgBEhEQBEhEBgAAQBgAABFBEQBFBEAABgQAABhhFBEQhEBEhhAAQhgAAhEhEg");
	this.shape.setTransform(-0.6559,1.8983,0.2626,0.2626);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#514A47").s().p("AjVDWQhZhZAAh9QAAh9BZhYQBZhZB8AAQB+AABZBZQBYBYAAB9QAAB9hYBZQhZBZh+AAQh8AAhZhZg");
	this.shape_1.setTransform(-0.6624,2.9488,0.2626,0.2626);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B3A382").s().p("AomHbQj/hNjEiOQjEiOhsi2Qhvi/AAjQQAAgvAFgpIGLAAIAAAGQAABiAmBZQAkBWBDBDQBBBBBXAlQBYAmBiAAIP4AAQDHgBCLiLQCNiNAAjHIAAgGIHGAAQAFApAAAvQAADQhwC/QhrC2jECOQjECOj+BNQkIBRkgAAQkgAAkGhRg");
	this.shape_2.setTransform(-0.0217,-7.8277,0.2627,0.2627);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A1916A").s().p("AqNKQQkthcjpioQjpioiAjaQiEjhABj3QAAiTAviNIDdAAQgFApAAAvQAADQBvC+QBsC4DECNQDECOD/BNQEGBREgAAQEgAAEIhRQD+hNDEiOQDEiNBri4QBwi+AAjQQAAgvgFgpIDdAAQAwCNAACTQAAD3iFDhQh/DajpCoQjoCokuBcQk4BflWAAQlVAAk4hfg");
	this.shape_3.setTransform(-0.0217,-2.6989,0.2627,0.2627);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#756C57").s().p("ArFLtQlHhkj8i2Qj9i3iKjsQiPj0AAkMQAAjHBRi9IBtAAQgvCOAACSQgBD3CEDiQCADZDpCoQDpCoEtBcQE4BgFVAAQFWAAE4hgQEuhcDoioQDpioB/jZQCFjiAAj3QAAiSgwiOIBuAAQBQC9AADHQAAEMiPD0QiKDsj9C3Qj8C2lIBkQlSBolzAAQlyAAlThog");
	this.shape_4.setTransform(-0.0217,-0.0327,0.2627,0.2627);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.9,-22.4,95.8,44.8);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(47.9,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,95.8,44.8), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(22.3,99.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,44.6,199.3), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Tween3("synched",0);
	this.instance.setTransform(52.1,37.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,104.2,75.3), null);


// stage content:
(lib.Town_Lever_Switch_Disabled_withBlue_01_JSCC = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol4();
	this.instance.setTransform(124.75,206.05,1,1,0,0,0,47.9,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_6
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(125.25,209.1,1,1,21.2447,0,0,22.8,193.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_2
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(124.75,196.65,1,1,0,0,0,52.1,37.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54351E").s().p("AihPiQhjAAhbgcQhWgahCgwIAAAAQhAgugjg8IgBAAQgig7AAhBQAAhBAig7IABAAQAjg8BAguQBCgwBWgaIAAAAQBKgXBPgDIAlgCIABAAIAlACIACAAIAEAAQAPACANgIQANgIAGgPIBfj2QAFgOgDgNQgEgOgKgJIgWgUQAmhFAghCQBWiwAyilIAAgBQAWhMAQhKIABgHQAMgCARABIAEAAIACABQATAAANgOQANgNAAgSIABgCQAAgNgIgMQgHgLgFgMIgBgBQgOggAAgiQgBglANgiIAAABQAKgZAQgVIAAAAQAPgTAVgPIAAAAQAbgTAegIIgBAAIAZgFIAOgBIAFAAIAEgBIACABIATABQAXADAVAIIABAAIABABQAdALAXAVQAHAMAIAEIAZAlQAIAPAFAQIAFAgIAAgBIAAADQAEApgPAnIAAAAQgOAigYAZIgBAAQgYAZggAOIAAAAQgPAGgQAEQgJADgHAGQgIAGgEAJIgDAGQgGANACAOQACAPALAKIAAAAIACACQAIAIAFAGQgpBDgjBJIAAAAQhNCcg5C7QgVBEgTBNIgRAAQgOAAgLAIQgMAIgFANIhXDgQgHAQAGAQQAHAQAPAIQAhARAdAVQBBAuAjA8QAiA7ABBBQgBBBgiA7QgjA8hBAuIAAAAQhCAwhWAaQhZAchjAAIgBAAg");
	this.shape.setTransform(140.9448,130.5375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#91E8FE").s().p("Al5QcQhlgfhOg4IAAgBQhQg5gshLIAAgBQgvhRAAhYQAAhZAvhQIAAgBQAshLBQg6QBOg4BlgfIAAAAQBUgaBbgEIAkgCIADAAIACAAIADAAIABAAIAOABIBKi8QgPgPgOgQQgKgLgBgNQgCgPAIgMQAuhSAmhMQBRipAxifIgBAAQAVhFAOhDQgBgSAGgQIAAgCQAIggAugNQgMgkAAgnQgCg2AUgzIAAAAQAPglAYgfIAAAAQAYgeAfgWIAAgBQAogcAvgMIABgBIAcgGIAFgBIAVgBIAFAAIADAAIAMAAIADAAIAUABIAEAAQAgAEAfAMIACABIADABIABABQAvATAlAkIABABIAHAHIAEAEIAUAaIAFAHIAOAWIABACQANAaAIAcIABAEIAGAhIAAAAIABANQAFA9gWA5IAAgBQgUAzgmAnIAAAAQggAhgpAUQAPAggNAZIAAAAQgDAIgFAIQgoBCgkBIIABgBQhKCXg3CzQgYBPgWBdQgEAOgKAKQgLAJgPABIgaACIg+CgQATAMATANQBRA6ArBLQAwBRAABZQAABZgwBQQgrBMhRA5IAAABQhOA4hlAfQhmAghxAAQhxAAhngggAAcPGQBWgaBCgwIAAAAQBBguAjg8QAig7ABhBQgBhBgig7Qgjg8hBguQgdgVghgRQgPgIgHgQQgGgQAHgQIBXjgQAFgNAMgIQALgIAOAAIARAAQAThNAVhEQA5i7BNicIAAAAQAjhJAphDQgFgGgIgIIgCgCIAAAAQgKgKgDgPQgCgOAGgNIADgGQAEgJAIgGQAHgGAJgDQAQgEAPgGIAAAAQAggOAYgZIABAAQAZgZANgiIAAAAQAPgngEgpIAAgDIAAABIgFggQgFgQgIgPIgZglQgIgEgHgMQgXgVgdgLIgBgBIgBAAQgVgIgXgDIgTgBIgCgBIgEABIgFAAIgOABIgZAFIABAAQgeAIgbATIAAAAQgUAPgQATIAAAAQgQAVgKAZIAAgBQgNAjABAkQAAAiAOAgIABABQAFAMAHALQAIAMAAANIgBACQAAASgNANQgNAOgTAAIgCgBIgEAAQgRgBgMACIgBAHQgQBKgWBMIAAABQgyClhWCwQggBCgmBFIAWAUQAKAJAEAOQADANgFAOIhfD2QgGAPgNAIQgNAIgPgCIgEAAIgCAAIglgCIgBAAIglACQhPADhKAXIAAAAQhWAahCAwQhAAugjA8IgBAAQgiA7AABBQAABBAiA7IABAAQAjA8BAAuIAAAAQBCAwBWAaQBbAcBjAAQBjAABagcg");
	this.shape_1.setTransform(140.9413,130.5363);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(193.2,145.2,22.600000000000023,93.70000000000002);
// library properties:
lib.properties = {
	id: 'B1FCE898AAF73641918A3B6D3A7C42CF',
	width: 250,
	height: 250,
	fps: 20,
	color: "#666666",
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
an.compositions['B1FCE898AAF73641918A3B6D3A7C42CF'] = {
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
