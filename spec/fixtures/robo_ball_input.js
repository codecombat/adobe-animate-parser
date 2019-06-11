(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
var rect; // used to reference frame bounds
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(206,0,0,0)"],[0,1],-8.5,-10.3,0,-8.5,-10.3,45.7).s().p("AjfC6QgmgugShNQgThRAPhKQARhUA6gvQA2AiBNAUQCaApB1hDQB4CDgeBeQgsCPl8AwQgKADgJAAQggAAgggmg");
	this.shape.setTransform(29,22.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, rect = new cjs.Rectangle(0,0,58.1,44.8), [rect]);


(lib.Cord_Part = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCE084").s().p("AgoAVQgHgFAOgQQAMgPALgGQAZgPAZAlQANASgrAFQgPACgLAAQgSAAgGgFg");
	this.shape.setTransform(9.8,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#723104").s().p("AhJBKQgfgfAAgrQAAgqAfgfQAfgfAqAAQArAAAfAfQAfAfAAAqQAAArgfAfQgfAfgrAAQgqAAgfgfgAg7g7QgYAYgBAjQABAkAYAYQAYAZAjAAQAkAAAYgZQAZgZAAgjQAAgigZgZQgYgYgkgBQgjABgYAYg");
	this.shape_1.setTransform(11.4,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C78F00").s().p("AACBNQglAAgigZQgHgGgDgFIgBgBIgDgMQgEgWgCgbQACAWAUARQAUASAYABQAgABAZgaQASgSAFgaQAHgegUgOQAhAWAKAiQALAmgbAeQgNAOgSAIQgSAHgSAAIgCAAg");
	this.shape_2.setTransform(11.3,3.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3BB00").s().p("AhCBDQgcgcAAgnQAAgnAcgbQAbgcAnAAQAnAAAcAcQAcAbAAAnQAAAngcAcQgcAcgnAAQgnAAgbgcg");
	this.shape_3.setTransform(11.5,3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Cord_Part, rect = new cjs.Rectangle(1,-6.6,21,21), [rect]);


(lib.Cord = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353535").s().p("ACLA/QgUgUgRgMQgcgUgfgJQgSgEgUAAIgOABQgtADgrAhQgSAOgGAGIgCACIgCAAQgQADgPAAIgOgBIgLgDQgFgDgCgEIgBgGIACgIQAQgbAqgdQAsgfAugKQAYgFAUAAQAQAAANACQA3AIAzAkQAZASAUAUIAFAFIguAugAAvgLQAfAIAhAWQASAMAPAQIAZgZQgRgRgVgOQgwgigzgHQgMgCgPAAQgUAAgVAFQgrAJgpAdQgnAbgPAYIACABQAFACALAAIAagCIAAAAIAYgUQAugiAygFIAPgBQATAAAXAGg");
	this.shape.setTransform(-7.1,10.1,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("ABLAHQgggNgiAAQggAAghALQgcALgWARQgNAKgIAIIgEAGIgGgCIgqgIQABgIAGgLIAOgQQARgQAXgPQA9glBCAAQAtAAApASQAvAVAnAoIglAiQghgjgkgPg");
	this.shape_1.setTransform(-7,10,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Cord, rect = new cjs.Rectangle(-26.1,3.3,38.1,13.6), [rect]);


(lib.Body_Part = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#353535").s().p("AAAATIg9gEIgdgCIgZgGIgVgHIgOgJIgMgKIABgBIAdALIBIAQQAQAEAOAAIAPABIAPgCIAfgDIBSgLIAkgKIAOgFIAAABQgEAEgHAFQgPAJgUAIIgZAHQgNADgQABIggACIgfgCg");
	this.shape.setTransform(21.3,18.4,0.939,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353535").s().p("AhZBzQgtgMgVgTQgQgQgBgTQAAhHAzgzQAygyBHAAQBHAAAzAyQAyAzAABHQAAATgQAQQgOAMgaAKQgvAShFAAQgxAAgogJgAhug+QgvAuABBBQAAANAMAKQALAMAYAJQAsAQBBAAQAxAAAmgKQApgJASgSQAMgLAAgMQAAhBguguQguguhCAAQhAAAguAug");
	this.shape_1.setTransform(21.3,12.4,0.939,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7E796D").s().p("Ag1BoQhAgJgagWQgYgUAEgiQAYAKAiAFQBEAKAxgZQA1gZAMgvQAKgmgPgQQAxAhAbAuQAfA2gbAoQgvAbgsAJQgdAGggAAQgZAAgcgEg");
	this.shape_2.setTransform(21.2,13.1,0.939,1,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(255,255,255,0.6)","rgba(153,153,153,0)"],[0,0.973],0.7,-1.4,0,0.7,-1.4,15.1).s().p("AhdAyQgLguA6gkQAdgTAegJQAdgLAfAeQAeAdgJAbQgIAbhWAQQgjAGgWAAQghAAgDgOg");
	this.shape_3.setTransform(25.4,7.5,0.939,1,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AhxBjQgzgTAAggQAAhDAwgxQAxgwBDAAQBEAAAxAwQAwAxAABDQAAAgg0ATQguAShDAAQhCAAgvgSg");
	this.shape_4.setTransform(21.6,12.4,0.939,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Body_Part, rect = new cjs.Rectangle(5.2,0,32.4,24.8), [rect]);


(lib._12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C60000").s().p("AA+A1QgPgBgOgDQgiAFgnAAIgTAAQAAgGgCgJIgFgUIgDgKIgDgPIgBgKIAAAAQAOgBANgEQARgFAOgJQAOgKAEgJQAhAMAQAMIAHAIIAFAFQAEAHACAKQACALACAPIAAAQIAAAHIgQAGIAEgCg");
	this.shape.setTransform(7.4,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AANAOIgyAAQgLgHgSgPIAAgBIATAAQAnAAAigEQAOACAPABIgEACIAQgGQgBALgCADQgKAPgiAAIgHgBg");
	this.shape_1.setTransform(8.1,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._12, rect = new cjs.Rectangle(0,0,14.8,13.3), [rect]);


(lib._11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AgaAdIgIgYIAAgzIATAHQAVAqAdAmQgLgCgQACQgOgKgNgOQAJANALAMQgPABgGAEIgGgSg");
	this.shape.setTransform(3.5,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C60000").s().p("AAXAoQgcgmgWgqIADAAIAgAJQACAEADAKIAEAPIALAiIAEAJIgJgBgAgfAQQANAOAPAKIgCAAIgFABQgLgMgKgNg");
	this.shape_1.setTransform(4.7,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._11, rect = new cjs.Rectangle(0,0,7.9,9.4), [rect]);


(lib._10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AAEANIgJgCIAAgYIABADIAKAYIgCgBg");
	this.shape.setTransform(0.6,5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C60000").s().p("AAIAsQgCgMgKgDQgNgDgegIIgLgYIgBgDIAAgLQACACAGAAQAbAAAbgLQAWgIAHgJQAcAdAAAFIgbAeQgRAUgHAJIgBgDg");
	this.shape_1.setTransform(6,4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._10, rect = new cjs.Rectangle(0,0,12,9.4), [rect]);


(lib._9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330B0A").s().p("AAfBLIgEgOQgEgPgGgOQgSgrgjgjIgPgPIALgQIASARQA7A8APBOIgVgDg");
	this.shape.setTransform(9.5,7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#CE0000","#A40000"],[0,1],-6.7,-7.7,0,-6.7,-7.7,819.2).s().p("AgPAtIgBAAIglg3IAIgXIASgZIADgCIAPAOQAiAjATArQAGAPAEAOg");
	this.shape_1.setTransform(6.8,7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9F0000").s().p("AA5A2IgNgCIg/gHQgJgEgEgJIgCgEIgDgIIAAAAIgOgZIgLgUIAEgFIAOgTIAEgFIgIAYIAlA2IABAAIBFAQIAEAPIgGgBg");
	this.shape_2.setTransform(6.3,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._9, rect = new cjs.Rectangle(0,0,14.7,15.6), [rect]);


(lib._8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330B0A").s().p("ABsAaQgUgOgXgJQgugTgyAAQgrAAgnAOIgPgMIgEgDQAugTA3AAQBdAABHA4IgIAKIgDAHIgOgLg");
	this.shape.setTransform(13.3,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#CE0000","#A40000"],[0,1],-12.9,-8.8,0,-12.9,-8.8,819.2).s().p("AhgAlIAAg9IACgHQAAgDgEgGIgMgNQAngOArAAQAyAAAuAUQAXAJAUAOIhLBYIhTAEg");
	this.shape_1.setTransform(13,8.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9F0000").s().p("AhSA3IgMgMQgKgLgGgDIAAgZIAxAfIBTgEIBLhYIAOALIgCADIgRAbIgfAjIgPATQgKAKgPAGIgwABIgyADIgFgDg");
	this.shape_2.setTransform(14.4,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._8, rect = new cjs.Rectangle(0,0,26.6,17.9), [rect]);


(lib._7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330B0A").s().p("Ag+AoQAOgTARgRQAigjArgTIARAPIgCAAQgtATghAiQgNAMgKAOIgFAHIgRgLg");
	this.shape.setTransform(6.3,5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9F0000").s().p("AguA2IgBgCIBGgbQAJgIgFgHIABg6IAAgWIANALIABACQAGAHAAAQIgDAdQAAAZgCANQgBAIgCACQgIAJhHATIgHgRg");
	this.shape_1.setTransform(9.8,8.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AACABIgCgBIAFgGIAJAXIgMgQgAgMgIIAEgIIAAALIgEgDg");
	this.shape_2.setTransform(3.1,11.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F70303").s().p("AADAZIgGgQQgHgWAQgPIgBA5IgCgEg");
	this.shape_3.setTransform(11.9,6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C60000").s().p("AgdA0IgIgXIgGAGIgIgFIAAgLQALgOAMgLQAigjAsgTIACAAIAAAWQgSAPAHAXIAIAPIACAFQAEAHgIAIIhGAaIgGgJg");
	this.shape_4.setTransform(7.4,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._7, rect = new cjs.Rectangle(0,0,14.6,15.8), [rect]);


(lib._6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330B0A").s().p("AAECHIgIgTIgZhsIACABIAAgEQAAhQAog/IARAMQgLARgIASQgSAvAAAxIAAAQIAAAEIABACIAAABIADALIAXBiIgEACQgDAAgJgEg");
	this.shape.setTransform(4.7,13.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E796D").s().p("AgqgwIBVAaIgDADIgJANIgJALIgRAVIgKAMIgGAGIgHAFg");
	this.shape_1.setTransform(8.5,22.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AgnBGIgDgLIgBAAIAAgDIAAgDIgBgRQAAgxAUgvQAIgSALgRIAKAIIAAABIAAgBIAEADQAaAXgDATIAABgIAHAVQAGAQAAAFg");
	this.shape_2.setTransform(8.3,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._6, rect = new cjs.Rectangle(1.7,0,11.2,27.8), [rect]);


(lib._5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C60000").s().p("AgoA5IgJgcQgGgUgGgLIAAgCQAEAAAcgjIAZghQAFAFAUALQAfARAEAKIADAeIADAkQAAAPgsAMQgSAFgLAEIgdgQg");
	this.shape.setTransform(6.2,7.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib._5, rect = new cjs.Rectangle(0,0,12.4,14.6), [rect]);


(lib._4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AgFAgIgRgHIgWggIACgGQArASANgJQARgNADgRIAAgCIAHAAQADARABASIgBABQgHARgYARIgFADIgNgFg");
	this.shape.setTransform(23.8,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#CE0000","#A40000"],[0,1],-23.3,-9.8,0,-23.3,-9.8,819.2).s().p("AgmAKIAMggQANAEATADIAhADIgBACQgCAQgSANQgFAEgIAAQgOAAgdgNg");
	this.shape_1.setTransform(23.3,9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._4, rect = new cjs.Rectangle(19.3,7.7,9,8.4), [rect]);


(lib._3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330B0A").s().p("AhEBPIgDgLQATgLARgOIADgEIAFgFIgBABIAdgiIAAAAIACgCIADgFIAKgRIADgFIAmg7IAAgBIAOAGIABAAIgEAFIgMAOQgTA9gwAwQgZAagdARIgDgKg");
	this.shape.setTransform(8.7,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("Ag3ASQAFgHACgFIgBAXIAbAEIAGgCIAAAAIABgBIARgJIABAAIgEAFIgDADQgRAOgTAMQgGgXgJgOgAAggMIADgeIAVgLIgGALIgDAGIgKAQIgDAFIgCADg");
	this.shape_1.setTransform(5.6,13.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C60000").s().p("AhCBOIABgWIABgIIAAgMIAAgCIgCgPIgBgGIgDgTQAZgGAXgIQAzgRAbgWIAQAHIgBABIgmA6IAGgLIgVAKIgDAeIgdAjIgSAJIgBABIgGACgAgwgvIAHgHQAWgcACAAQAHAAAZAJIATAGQgOAKgQAHIgdAMQgTAGgVAGIARgVg");
	this.shape_2.setTransform(7.3,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._3, rect = new cjs.Rectangle(0,0,15.9,20.8), [rect]);


(lib._2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330B0A").s().p("Ah7gBQAYgDAWABIABgCQAkAKAmAAQAxAAAvgSIAXgLIAGAUQg5AdhEAAQhCAAg3gag");
	this.shape.setTransform(12.4,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E796D").s().p("AhgAcQARgSAOgSQAMgSAGgMIAIAHIAWAOIA3AAQAdAGATgPIALAjIgXALQgvATgxAAQgmAAgkgLg");
	this.shape_1.setTransform(14.4,3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._2, rect = new cjs.Rectangle(0,0,24.7,9.9), [rect]);


(lib._1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#330B0A").s().p("AgcAFQgVgUgQgYIAFABQAEAAAKgJQANAVATASQAhAiAtATIACABIgoACQgcgRgagag");
	this.shape.setTransform(6.6,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AAXBXQgrgTgjgiQgSgTgOgUIALgMIALgMIAGgHIALgOIAJgMIAJgNIACABIACAAQARgGAMgDIAOAMIAIAHQAUACAVABIABADIABABIAGABIABAAIABACIAAAIIgBAEIADAMIAHAeIADAOIAAABQAAALguA8IgRACIgCgBgAAKhVQAKgCAGAAIALAGIAMAOQgUgHgTgLg");
	this.shape_1.setTransform(10.7,8.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C60000").s().p("AgKAJIgIgHIgNgLIAHgCQASALAUAGIgNgNIAXAMIAJAFIgCACIAAAAQgVgBgUgCg");
	this.shape_2.setTransform(14.2,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._1, rect = new cjs.Rectangle(0,0,19.5,17.9), [rect]);


(lib.Robo_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(206,0,0,0)"],[0,1],-12.7,12.4,0,-12.7,12.4,50).s().p("Ag2BQQhCgHgtgeIgfgeQg0hOCSgPQBJgIBSAJIAoAOQAuARAdASQBdA4huAlQgyARgmAEIgeABQgjAAg0gFg");
	this.shape.setTransform(35.3,-0.1,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#330B0A").s().p("AgCBuIgTgBQgZgBgMgCQglgEgigLQgigKgcgSQgdgTgPgXIgGgNIgFgMQgCgRACgIQADgSANgSQAIgLAJgHIAHgGIgGAGQgKAKgGAJQgMASgCASQgBAYAOAVQAPAVAcARQAbAPAiAKQAfAKAmAEIA2ADIARgBQAngBAigHQAkgHAfgOQAigOAVgUQAZgWAFgYQAEgYgNgXQgHgPgRgOIgUgQIgIgEIAIAEQAQAJAGAFQAQANALAPQAGALAEAMQACAIAAAFIgBAPQgEAbgaAZQgYAXgiAPQhAAchPADIgOABIgEAAg");
	this.shape_1.setTransform(33,-0.1,1,1,0,0,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#330B0A").s().p("AgCGPIgagBQgPAAgLgCQgvgGg5gXIgagMIgYgOIgXgQIgXgRQgrgjgigxQgggxgSg4QgRg2gBg+QABg/APg0QASg6AegvQAhgxAqglIAigaIAMgHIAYgOIAYgNQA4gYAwgHIA0gFIAZABIAMAAIANABQBiALBQA0QBDArAvBEQAhAyATA/IANA/IADArIgEA9IgJAtQgSBCggAwQguBGhCAtQhQA2hhAMIgZACIgTABgAgKl/QghACgRADQgtAFg2AYIgYAMIgXAOIgWAPIgWAQQgpAlgfAuQgdAsgSA6QgOAzgBA7QACA9AQAzQATA4AeAsQAgAuAqAjIAVAQIAXAOIAXAOIAYALQA3AXAtAEQAKADAPAAIAZABIAYgBIAYgCQBcgMBMg0QBAgsAqhCQAegtASg+IALg9IABgPIgBg1IgBgOIgDgRIgDgVIgGgXQgTg/gegsQgshBhBgrQhNgyhcgKIgZgCIgSgBg");
	this.shape_2.setTransform(32.5,24,1,1,0,0,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353535").s().p("Ah9gcIACAAQAxgBA3gFQA4gFAvgIQBBgMAkgNIAwgUIAXgMIAVgQIgUARQgNAJgJAFIgwAXQgSAHggAJQgcAIgYAEQg2AKgxAEQg/AFgogBIhNBGIhOBHg");
	this.shape_3.setTransform(22.5,46.9,1,1,0,0,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7E796D").s().p("AkUBjICZiQQBIABBVgKQCtgXBGhAQgkB8hlBNQhoBQiDACIgCAAQheAAhVgrg");
	this.shape_4.setTransform(22.5,49,1,1,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#723104").s().p("AAnB8QglgWgYgiQgJgNgLgXQgIgXgCgQQAEAQAKAVQAIARAOARQAMAPAPANIARAMIADACIgPgsIgOg9QgEghgDgbIgCgfIgCgXIgjAfIApgxIACAJIAGA9IAYB4IAYBJg");
	this.shape_5.setTransform(66.8,26.7,1,1,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F4C902").s().p("AgZAxIgSgsIAEhWIAlgmIAKBXQAQBhAUA3QgsgXgZgwg");
	this.shape_6.setTransform(67.1,26.6,1,1,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7E0200").s().p("AjlC0Qg8gjgrg1IgfguQAaAYA1AQQBsAgCMgnQCmguBohUQBUhFAmhaQAWBTgmBmQgnBnhMA2QhjA+iNAOQgjADgeAAQhdAAg4gfg");
	this.shape_7.setTransform(29.7,39.5,1,1,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7E0200").s().p("AgzBsQgmgEghgKQgjgKgbgRQgegSgQgYQgIgNgDgMQgDgJABgPQADgUAPgQQAEgFAPgLIAHgGIgGAGQgKAKgHAJQgNAQAAARQgBAXAQAUQAQATAbAQQAaAOAiAJQAeAIAmAEQAeADAogCQAngCAggHQAlgIAcgOQAhgPATgUQAWgXACgYQACgVgTgVQgJgLgTgPIgcgSIAeAPQAXAPAIAJQAKAJAGAKQAIANgBAPQAAAegYAbQgWAZghAQQg9AfhRAEIgcAAQgXAAgXgCg");
	this.shape_8.setTransform(33,-0.7,1,1,0,0,180);

	this.instance = new lib.Path_6();
	this.instance.parent = this;
	this.instance.setTransform(35,25.8,1,1,0,0,180,29,22.4);
	this.instance.alpha = 0.578;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#CE0000","#A40000"],[0,1],0.2,-7.3,0,0.2,-7.3,39.2).s().p("AkREXQh0hxgCiiQgBiiBxhzQByh0CigBQChgDB0ByQB0BxACCjQABChhxB0QhyB0iiACIgFAAQieAAhyhxg");
	this.shape_9.setTransform(32.6,23.9,1,1,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F70303").s().p("AgMAZIgtgXQgXgUAzgNQAzgNAYAQQAWAOgDATQgDARgSANQgEADgIAAQgQAAgcgNg");
	this.shape_10.setTransform(46.1,22.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1A1D1E").s().p("AB5BwIABgtIgWAFQgwAKg3gBQhJAAhFgQQhHgRg1ggIgGgFIgFgIQgIgMAAgNQAAgIAEgJQACgMAGgMIAFgJIAKAKIAJAHQAQAMAXAMQBHAiBdADIAZAAQBNAABBgOQA+gPAkgZQAXgRAJgSIADgTIADgIIADgDQAAgBABAAQAAAAABgBQAAAAABAAQABAAAAAAIABAAIAIACQAJAEAFAHQAEAHAAAJIABAHIgBALIAAAAIAAAKIgCAMQgCATgPATQgVAagrAVIgFAyIg1AbgACJBBIgBAiIAJACIApgVIAGgyIADgDQAqgUAUgZQAMgPACgPIADgfIgBgGQAAgFgCgDIgEgFIgBAAIgEASIAAACIAAABQgLAWgbATQgZASgmANQhPAahqAAIgZAAQhhgEhKgjIgugeQgDAGAAAHIgBABIAAACQgDAFAAAFQAAANAJAJIACADQA0AfBFARQBEAQBGAAQA1AAAvgKIAogJg");
	this.shape_11.setTransform(28.9,34.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#81949D").s().p("AgWAAIAAgWIAvgUIgJA7IgoAaQACgPAAgcg");
	this.shape_12.setTransform(46.5,41.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#81949D").s().p("AgoAZIATgKQANgHAMgRQAQgVAKgYQAOADACAPQACAOgIARQgJASgpAZQgKAGgOAHIgLAEg");
	this.shape_13.setTransform(52.2,29.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#53646B").s().p("AhfBVQh3gPg1gvQgFgEgFgRQgGgVAHgMIAHAKQAKANASAKQA5AlBxAMQCAAOBsgkQBlghAGgyIAEgaIAAgJIADATQADAXgDARQgEAegUAUQgpAnhpAUQg6ALg8AAQgqAAgsgFg");
	this.shape_14.setTransform(28.9,32.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C4E1E8").s().p("AijBJQiVgoAqhNIAGAIQAJAKARAJQA3AdBuAOQBfAMBngaQBugbASgxQADgRACgHIADgEIAJADQAJAGABANQACAkgYAgQgrA4h3AbQg2AMg3AAQhJAAhNgUg");
	this.shape_15.setTransform(29,32.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#990000").s().p("AgbAiIgjg4QgOgkAPgcIASgUIAYBGQAiBSA3A9Qg2gRgrg4g");
	this.shape_16.setTransform(14.6,23.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#53646B").s().p("AgeAqIgBgjQgBgiADgCIA9gVIglBlg");
	this.shape_17.setTransform(44.8,40.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1A1D1E").s().p("Ai9C+QhPhPAAhvQAAhvBPhOQBOhPBvAAQBvAABPBPQBPBOAABvQAABwhPBOQhOBPhwAAQhvAAhOhPgAhgjlQgtATgiAjQgjAigTAtQgTAuAAAyQAAAzATAuQATAtAjAiQAiAjAtATQAuATAyAAQAyAAAvgTQAsgTAjgjQAjgiATgtQATguAAgzQAAgygTguQgTgtgjgiQgjgjgsgTQgvgTgyAAQgyAAguATg");
	this.shape_18.setTransform(28.8,26.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#990000").s().p("AiDBDQg7hWAchZQAIgbAQgZQAJgMAGgHQgVCTByBeQBZBMByAJQg7Ahg4AAQhlAAhYhxg");
	this.shape_19.setTransform(21.5,27.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#990000").s().p("Ai2BYQhMhMAAhrQAAggAJgkQAIBlBKBEQBKBGBlAAQBZAABGg2QBEg1AXhTIABATQAABrhMBMQhMBMhrAAQhrAAhLhMg");
	this.shape_20.setTransform(29.2,36.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F70303").s().p("AiDAkQgPgPgLgUIgHgPQgOgwBYgOQBXgOBAAiQA6AfAYAhQARAZAHAtQgXgSg5AFQgZAChEAOIgMAAQhEAAgtgtg");
	this.shape_21.setTransform(34.7,11.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C60000").s().p("Ai2C3QhMhMAAhrQAAhqBMhMQBMhMBqAAQBsAABLBMQBMBMAABqQAABrhMBMQhLBMhsAAQhqAAhMhMg");
	this.shape_22.setTransform(28.9,26.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Robo_body, rect = new cjs.Rectangle(-7.5,-16,80.1,80), [rect]);


// stage content:
(lib.Robo_Bomb_Death = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 14
	this.instance = new lib.Cord_Part();
	this.instance.parent = this;
	this.instance.setTransform(134.9,76.3,1,1,0,0,180,11.3,5.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(11));

	// Head
	this.instance_1 = new lib.Cord();
	this.instance_1.parent = this;
	this.instance_1.setTransform(98.9,68.9,1,1,0,0,180,8.2,8.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(11));

	// Head
	this.instance_2 = new lib.Cord_Part();
	this.instance_2.parent = this;
	this.instance_2.setTransform(140.8,67.4,1.123,1.123,0,10.2,-169.8,8.2,9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({x:173.4,y:20},3).to({_off:true},1).wait(7));

	// circle part
	this.instance_3 = new lib.Body_Part();
	this.instance_3.parent = this;
	this.instance_3.setTransform(115.9,125.9,1,1,0,0,180,10.4,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.12,scaleY:1.12,x:118,y:120.8},1).to({skewX:123.8,skewY:303.8,x:159.2,y:147.8},2).to({regY:11.7,skewX:210.5,skewY:390.5,x:170.4,y:123.4,alpha:0.031},2).to({_off:true},1).wait(6));

	// Layer 2
	this.instance_4 = new lib._2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(99.4,138,1.123,1.123,0,0,180,12.4,5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({x:101.1,y:153.4},3).to({_off:true},1).wait(7));

	// Layer 3
	this.instance_5 = new lib._3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(70.3,125.5,1.123,1.123,0,-3.9,176.1,8,10.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({skewX:-108.9,skewY:71.1,x:13.4,y:132.8},3).to({_off:true},1).wait(7));

	// Layer 4
	this.instance_6 = new lib._4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(71.8,89.7,1.123,1.123,0,-18.1,161.9,16.1,10.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({regY:10,skewX:88.2,skewY:268.2,x:24.8,y:116.8},3).to({_off:true},1).wait(7));

	// Layer 5
	this.instance_7 = new lib._5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(98.9,112.7,1.123,1.123,0,0,180,6.2,7.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({regX:6.1,regY:7.4,skewX:-85.7,skewY:94.3,x:95.1,y:140.2},3).to({_off:true},1).wait(7));

	// Layer 6
	this.instance_8 = new lib._1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(120.8,122.4,1.123,1.123,0,0,180,9.8,9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({regX:9.7,skewX:87.2,skewY:267.2,x:143.3,y:141.1},3).to({_off:true},1).wait(7));

	// Layer 7
	this.instance_9 = new lib._6();
	this.instance_9.parent = this;
	this.instance_9.setTransform(135.1,102.4,1.123,1.123,0,0,180,6.4,14);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({_off:false},0).to({regY:13.9,skewX:127.5,skewY:307.5,x:186.4,y:108.1},3).to({_off:true},1).wait(7));

	// Layer 8
	this.instance_10 = new lib._7();
	this.instance_10.parent = this;
	this.instance_10.setTransform(122.6,75.6,1.123,1.123,0,0,180,7.2,7.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).to({regX:7.3,skewX:88.2,skewY:268.2,x:158.8,y:50.7},3).to({_off:true},1).wait(7));

	// Layer 9
	this.instance_11 = new lib._8();
	this.instance_11.parent = this;
	this.instance_11.setTransform(95,73,1.123,1.123,0,0,180,13.3,9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({_off:false},0).to({regX:11.6,regY:8.2,skewX:-66,skewY:114,x:98.8,y:19.3},3).to({_off:true},1).wait(7));

	// Layer 10
	this.instance_12 = new lib._9();
	this.instance_12.parent = this;
	this.instance_12.setTransform(69.6,81.1,1.123,1.123,0,0,180,7.4,7.8);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({_off:false},0).to({skewX:90,skewY:270,x:40.9,y:67.4},3).to({_off:true},1).wait(7));

	// Layer 11
	this.instance_13 = new lib._10();
	this.instance_13.parent = this;
	this.instance_13.setTransform(107.6,93.4,1.123,1.123,0,0,180,6,4.7);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({_off:false},0).to({regY:4.8,skewX:131.3,skewY:311.3,x:137.4,y:47.6},3).to({_off:true},1).wait(7));

	// Layer 12
	this.instance_14 = new lib._11();
	this.instance_14.parent = this;
	this.instance_14.setTransform(110.7,105.5,1.123,1.123,0,0,180,3.9,4.7);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({_off:false},0).to({skewX:99.1,skewY:279.1,x:145.3,y:116.1},3).to({_off:true},1).wait(7));

	// Layer 13
	this.instance_15 = new lib._12();
	this.instance_15.parent = this;
	this.instance_15.setTransform(88,126.5,1.123,1.123,0,0,180,8,6.7);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({_off:false},0).to({regY:6.6,skewX:-96.5,skewY:83.5,x:65.8,y:148.1},3).to({_off:true},1).wait(7));

	// Fire
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F41003","rgba(232,39,35,0.608)","rgba(212,70,69,0)"],[0.027,0.373,0.988],0.1,-4,0.2,7.3).s().p("AAFBRIgcgZQgMALg1APQghgagUg/QgTg8AKgCQBEgNBHgIQCNgOARAeQAcAvhNB4QgDACgIAAQgWAAg8gOg");
	this.shape.setTransform(104.8,139);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(11));

	// Body
	this.instance_16 = new lib.Robo_body();
	this.instance_16.parent = this;
	this.instance_16.setTransform(102.8,105.5,1,1,0,0,180,28.9,26.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#53646B").s().p("AAAAAIAAAAIABAAg");
	this.shape_1.setTransform(87.5,124.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C60000").s().p("AAAAAIAAAAIAAABg");
	this.shape_2.setTransform(122.9,93.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_16}]}).to({state:[]},1).wait(11));

	// EF
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD446").s().p("AArhjIAuAyIiyCVg");
	this.shape_3.setTransform(79.3,137);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFD446").s().p("AA1h4IA6A8IjdC1g");
	this.shape_4.setTransform(77.4,137.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFD446").s().p("ABCiVIBKBLIkXDgg");
	this.shape_5.setTransform(74,141.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFD446").s().p("ABQiyIBZBaIlRELg");
	this.shape_6.setTransform(70.1,144.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[]},1).wait(7));

	// ef
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFD446").s().p("AjxDxQhjhkgBiNQABiNBjhkQBlhkCMAAQCNAABlBkQBjBkAACNQAACNhjBkQhlBliNAAQiMAAhlhlg");
	this.shape_7.setTransform(100.1,105.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFD446").s().p("AkDEDQhrhsAAiXQAAiXBrhsQBrhrCYAAQCYAABrBrQBsBsAACXQAACXhsBsQhrBriYABQiYgBhrhrg");
	this.shape_8.setTransform(99.4,101.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFD446").s().p("Ak7E7QiDiDABi4QgBi4CDiDQCCiDC5AAQC5AACDCDQCDCDAAC4QAAC4iDCDQiDCEi5AAQi5AAiCiEgAhDD5QANAAAIgFQAdgFAOgOQAFgHACgKIAAgHQAAgpgZgBIgSABQgGgLgKgHQgYgTglgCQgfgCgYAKIgBAAQgogVABBAQAAAZAlAaQAmAaAkAAIAXAAIAKAAgAC4B3QgaANgVAWQgWAVAAALQABAPAMAMQAMAMAQAAQAuAAAdgkQAUgZAAgRQAAgpgbAAQgQAAgYANgAkLguQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBAAQgCABAAAMQAAALAIAPQAJAQAAAIQACAAAFAEIAMAGQAPgFAEgLQABgEAAgNQABgWgEgGQgJgOgeAAIgJAAgABEg0QgBAhAHAJQAOATA3AAQA9AAAOgYQAEgIgBgKIgBgJQAAgRgZgmQgZgpgbgUQgTgPgPAAQgpAAAAB5gAiYjNQgWAMgTASQgSATAAAPQgBARAMAKQANAMAUAAQAoAAAWgiQAOgVgBgPQAAgpgcAAQgNAAgTAIgAgalOQgWAGg8AWQhfAlAAAWQAAAWARALQANAIAOAAQAUAAAUgRQAUgRAGAAIARANQAQANAMAAQA2AAAngfQAfgZAAgPQAAgWgRgKQgVgPgxgBIAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAQgBgBgBAAIgLACg");
	this.shape_9.setTransform(98.9,103.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFD446").s().p("AlGFGQiHiHAAi/QAAi/CHiIQCHiGC/AAQC/AACICGQCICIAAC/QAAC/iICHQiICIi/AAQi/AAiHiIgAkdAIQgZAJgVAKQAJAbALAYQBFCbBtAAQAgAAAwgXIAtgWIAHADQAIgBAFgCQBCgHAsgPIAvgeIAUgKIAKgMQAOgTAEgDQALg3AUAAQARACAAAjQAAARgHAPQAFADABAHIACgDQAkhAAAg1QAAhhhBhOQgMgOgSgQQAIAMgBAMQAAAHgDAKQgGAOgLALQglgpgvgkIgBABQgGACgNAAQgJgBgQgJQgcgSgTgKIg2gSQgjgMgMgPQAlgWAdgKQAEgUATgEIgGgEQhlg+iJCMQgTASgQAUQgDARgKARQgMAVAAAIIAAAKQAHgjAngnQAygzAqgBIACAEIABASQAAADg7BAQg8BBgCAAQgGAAgFgBQARAeAtAfIAJAFQAFgEAHgBQAKgCAMAEIAAgCQAbghAmgZQBKgxA2AjQA7AyAZAYQArArAAAdQAAAJgQASQgTAUgOAAQgLABghgUQghgSgWAAQgrAAgaARIgcAcIAAAAQgDAMgQAFQgagGglgzIgKgQQgmABguARg");
	this.shape_10.setTransform(97.9,103.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFD446").s().p("AlRFSQiNiMAAjGQAAjFCNiOQCLiKDGAAQDFAACOCKQCLCOAADFQAADGiLCMQggAfgiAZQAYggAWgqQAZg0AQg8IANg1QAAgigMgZIAGgcQADgIAAgFIgBgIQAEgYAAgXQAAhCgbgpQgYgmgkgCQgHgBgHABIAEgJIACghQAAgwgzgzQgtguhDgeQhBgegvABIgHABQgOgGgUgCQg4gFhNAVQhPAWg2AkQg8ApAAAqQAAAOAJAOQAKARATADIgLAQQgNATgIAPQAKgIAKgDQBDABAEACIAKAPIgVAPQgSAPgSARQgXAKgfAKIABAJQgogeAABVQAAAUAEAbQAHA0AQAqQA2CFCGAAQA5gBAQgXIABgDQANgCAOgFQgHARAAARQAAAiAbAeQAlAmBAAAQBVAABCgdIgGAEQgbAXgyAjQgiAZAAANQAAAQAMAMIAEAFQgmAFgqAAQjGABiLiNgADQEiIgMgTQBwhiAAgYIAAAAQALgMALgOIANgSIAFAEQADAFAAAcIgjBOQgqBNgwAAQgNAAgFgHgABEAaQgLgEgPgEQAuACAXALQgJAGgIACQgLgIgPgFgAihgEQAignA+hKIBAgcQAJgFAHgGQA5AwAYAZQAtAsAAAdIgBAHQgUgNgagGQhjgZiNBGIAJAOIgDABIgVgqgAkAk5QAAgjBAgQQAQgEATgCQAXgNATgEQA2gOAzAhQA4AGArAPQAyATALAVQgQgQgngKQhAgRhaAFQhbAEhBAXQgZAIgQAMIAAgPg");
	this.shape_11.setTransform(100.2,103.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFD446").s().p("AleFxQiRiSAAjNQAAjMCRiSQAlgmArgcQAHAFAKACIB4ABQgVAEgYAGQhRAXg4AlQg+ArgBArIABAHQgOAOgPAXQhQB2AABtIAAAiQABAlAHAdQATBeA+AAIAJgBIAAABQAAAlAuAhQATANAYAJQACAHAGAMQgagEAAAhQgBAiBnA8IAZANQhYglhIhIgADZFBQAXgSAWgcIAAAAIgQAcIgOAXQgKgBgFgEgAG1DQQABgHAAhJQgBhDgHgkQgHgbgogZQgGgmgSgcQgZgnglgDQgHAAgIABIAFgKIABghQAAgggUghQgJg6hEg/QhchWiGgHIAAgCIhsAAQBEgTBLAAQDNAACSCRQCSCSgBDMQABCdhVB5QAWhJADgPgAmeB0IgFg/IABAHQAHA1ARAsIABACQgSgOgDgdgAg7g2QAbgHAgAAQAxAAAjAVQg0gChBAKQgZAEgWAFIAVgfgAmSg2QAMgdARghIAMgXIAKgFIAmACQgZAfgUAkIgGAOIgSAGIACAJQgNgKgJACgAASh7QgPgCgMAAIAEgFIAEgCQAKgFAHgHIAcAYIgagDgAB7lAIACgHQAYAMAHAPQgMgLgVgJgAh3l/QAygNAwAaIh5ABIgTACQAXgMATgEgAgFmEIgBgBIADABIgCAAg");
	this.shape_12.setTransform(98.2,101.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[]},1).wait(5));

	// EF
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFD446").s().p("AhZhiICzCdIg3Aog");
	this.shape_13.setTransform(76.6,75.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFD446").s().p("AAlB0IiIjqIACgBICnCfQgEAJAFAIQAEALAKAIQAHAFAIADIguAkg");
	this.shape_14.setTransform(75.1,74.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFD446").s().p("AAuCMIinkrIAMAKIDPDOQgQANADAJQACARAOAJQAJAHALACIg4Aug");
	this.shape_15.setTransform(71.6,71.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFD446").s().p("AiNjIIEMETQgbAQAAALQAAAWARAMQAMAHANABIhDA5g");
	this.shape_16.setTransform(67.5,68.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[]},1).wait(7));

	// EF
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFD446").s().p("AhUhBIA6gkIBvDLg");
	this.shape_17.setTransform(122.9,136.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFD446").s().p("AhkhMIBEgpICFDrg");
	this.shape_18.setTransform(122.7,136.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFD446").s().p("Ah7hbIBUgyICjEbg");
	this.shape_19.setTransform(124.5,140.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFD446").s().p("AiShrIBjg7IDCFNg");
	this.shape_20.setTransform(125.8,142.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[]},1).wait(7));

	// EF
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFD446").s().p("Ah1AEIDrglIgEBDg");
	this.shape_21.setTransform(60,99.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFD446").s().p("Ah/AQIgCgCIDngLIAIgIQACgFAEgEQADgFADAAIACgBIAFgBIABAAIgqArg");
	this.shape_22.setTransform(60.4,99.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFD446").s().p("AiqAPIEGgKIBFgWQgCABgBAHQgCAHADAJIgGAPgACigSQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAIAEgBIgHADgACogUIADgBIAAABIgDAAg");
	this.shape_23.setTransform(55.8,100.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFD446").s().p("AjVADIGrghIgBABIgIAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBABQgCABABALQgBAKAIAOIgEAVg");
	this.shape_24.setTransform(50.5,101.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[]},1).wait(7));

	// EF
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFD446").s().p("AhoAWIDRhmIivCig");
	this.shape_25.setTransform(132.2,84);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFD446").s().p("AiGAZIENhzIjhC1g");
	this.shape_26.setTransform(132.9,84);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFD446").s().p("AitAdIFbiGIkiDTg");
	this.shape_27.setTransform(136.2,83.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFD446").s().p("AjUAhIGpiaIljDzg");
	this.shape_28.setTransform(139.1,82.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[]},1).wait(7));

	// EF
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFD446").s().p("AhABQICBjBIhGDjg");
	this.shape_29.setTransform(115.3,65.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFD446").s().p("AhPBnICfj6IhWEng");
	this.shape_30.setTransform(115.4,64.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFD446").s().p("AhjCFIDHlCIhsF7g");
	this.shape_31.setTransform(116.9,61.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFD446").s().p("Ah3CjIDvmLIiCHRg");
	this.shape_32.setTransform(118,57.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[]},1).wait(7));

	// Layer 17
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.451)").s().p("AjNBdQhWgngCg2IAAAAQAAgMAEgLQANgoBDgeQBWgnB5AAQB5ABBWAnQBDAeARAnQAEANABALQABAhggAbQgUASghAPQhVAmh6ABQh4gBhYgng");
	this.shape_33.setTransform(101.7,149.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.451)").s().p("AjNBYQhWglgCgzIAAAAQAAgMAEgKQANglBDgdQBWgkB5AAQB5AABWAlQBDAdARAkQAEAMABALQABAfggAaQgUARghANQhVAlh6AAQh4gBhYgkg");
	this.shape_34.setTransform(101.7,149.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.451)").s().p("AjNBSQhWgigCgwIAAAAQAAgLAEgJQANgkBDgbQBWgiB5ABQB5AABWAiQBDAbARAjQAEALABAKQABAdggAYQgUAQghANQhVAjh6AAQh4gBhYgjg");
	this.shape_35.setTransform(101.7,150.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.451)").s().p("AjNBNQhWgggCgtIAAAAQAAgKAEgJQANghBDgaQBWgfB5AAQB5AABWAgQBDAaARAgQAEALABAJQABAbggAXQgUAPghAMQhVAgh6AAQh4AAhYghg");
	this.shape_36.setTransform(101.7,150.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.451)").s().p("AjNBIQhWgegCgqIAAAAQAAgJAEgJQANgfBDgXQBWgeB5AAQB5ABBWAeQBDAXARAeQAEAKABAIQABAaggAVQgUAOghAMQhVAeh6AAQh4gBhYgeg");
	this.shape_37.setTransform(101.7,150.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.451)").s().p("AjNBDQhWgcgCgnIAAAAQAAgJAEgHQANgdBDgWQBWgbB5gBQB5ABBWAcQBDAWARAcQAEAIABAJQABAXggAUQgUANghAKQhVAch6AAQh4AAhYgcg");
	this.shape_38.setTransform(101.7,151);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.451)").s().p("AjNA+QhWgagCgkIAAAAQAAgIAEgHQANgbBDgUQBWgZB5AAQB5ABBWAZQBDAUARAaQAEAIABAHQABAWggASQgUAMghAKQhVAah6AAQh4gBhYgZg");
	this.shape_39.setTransform(101.7,151.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.451)").s().p("AjNA4QhWgXgCghIAAAAQAAgHAEgHQANgYBDgTQBWgWB5AAQB5AABWAYQBDASARAXQAEAIABAHQABATggARQgUALghAJQhVAXh6ABQh4gBhYgYg");
	this.shape_40.setTransform(101.7,151.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33}]}).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(159.2,162.6,86.1,100.2);
p.frameBounds = [rect, new cjs.Rectangle(148.2,147.4,103.7,115), new cjs.Rectangle(139.7,133.5,123.5,128.4), new cjs.Rectangle(121.9,117.7,165.2,143.7), new cjs.Rectangle(99.6,100,203.6,162.1), new cjs.Rectangle(152.3,155.3,151.9,105.3), new cjs.Rectangle(148.5,153.6,99.3,106.4), rect=new cjs.Rectangle(172.3,243.5,58.8,16.1), rect, rect, rect, rect];
// library properties:
lib.properties = {
	width: 200,
	height: 200,
	fps: 24,
	color: "#999999",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;