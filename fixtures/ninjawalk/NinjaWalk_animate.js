module.exports = function (cjs, an) {

  var p; // shortcut to reference prototypes
  var lib={};var ss={};var img={};
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
      while(cur != null && cur != exportRoot) {		
          if(cacheList.indexOf(cur) != -1)		
              break;		
          cur = cur.parent;		
      }		
      if(cur != exportRoot) {		
          var cur2 = textInst;		
          var index = cacheList.indexOf(cur);		
          while(cur2 != null && cur2 != cur) {		
              cacheList.splice(index, 0, cur2);		
              cur2 = cur2.parent;		
              index++;		
          }		
      }		
      else {		
          cur = textInst;		
          while(cur != null && cur != exportRoot) {		
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
  
  
  (lib.Tail = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});
  
      // Layer 1
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#0D1011").s().p("AgRELQg4htAAifQAAg3AHhBIAJhEQACgTASgYQAOgSAUgSQALgKALgFQAFgDAHgBIAFABQADABADADQASATAHAfQAHAeAAAwQAAApgEA5QgEA4gDAUQgDAjgGAdQgLA1grCAIgHAXgAAdkKIgGADQgLAHgGAGQgTARgOAWQgIANgCALIgJBEQgHBBAAA1QgBCJAsBkQAihtAKgvQAGgcAEgiIAGhMQAEg5AAgnQAAgugGgbQgGgZgMgOg");
      this.shape.setTransform(5.7,22.3,0.774,0.774);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#3D4344").s().p("AgjA8QgFhDgCgMQgFgZA7g6QAGgFAZAaQgKAngNAkQgUA2gWA0QgCAEgCAAQgFAAgEgsg");
      this.shape_1.setTransform(5.5,8.9,0.774,0.774);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#272B2D").s().p("AgsBKQgHgZgBg4QgBgzADgZQACgSAbgbQAOgPAOgMQAJgGAPAFQAPAFAGAKQAIANgmCJIg2CWQgCgwgKglg");
      this.shape_2.setTransform(6.1,13.6,0.774,0.774);
  
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#1F2224").s().p("AhNALQgChoAXhVQAGgWAfgmQAegmAJADQAgAKAPAvQAQAzgHBZQgGBQgVBLIhADDQg8hzgCiUg");
      this.shape_3.setTransform(6.2,21.3,0.774,0.774);
  
      this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
  
  }).prototype = getMCSymbolPrototype(lib.Tail, rect = new cjs.Rectangle(0,0,12.3,44.5), [rect]);
  
  
  (lib.R_SholderArmor = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});
  
      // Isolation Mode
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#5B3304").s().p("ABYCLIgBgHIAAAAIgBgFIgGgMQgLgVgRgIQgRgKgVABIgMABIgDgHQgjhBgrgaQgdgSgfAAQgLAAgHABIgIADIgEgGIgEgIQgFgKABgIQgBgHAEgGIgFAIIAFgJIAFgEIAYgRQAcgSAVgNIAbgNIABgBIACAAQBIABA1AoQArAfAgA5QAWAnANAwQAIAYACAQIABAHIg+AegAhEglQAtAdAkBBIABAAQAbgBAUAMQASAJALAQQALAOAEAPIALADIAqgTIgDgPQgHgbgKgcQghhSg5grQgxgkhAgBIgQAJIgaAQQgdARgRAMIgEAEIAAACQgBAEADAFIAQgBIADgBQAiAAAiAWg");
      this.shape.setTransform(-47,-13.6);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#703D09").s().p("AB6BsIgFAAQgFgSgOgSQgagkgqACQgig0gagWQgygrg9AHQgJgiAOgDQAVgEA4AYQBNAjAcBHQApALAVASQAbAWAKArQgPgDgIAAg");
      this.shape_1.setTransform(-49.2,-11);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#EA8B00").s().p("AgxAdQgFgLgDgDQgDgDAigXIAigXIAVAEQAWAFAGALQAGALgwARQgyARgEADIgDABQgDAAgEgGg");
      this.shape_2.setTransform(-42.8,-16.6);
  
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#FFCF2E").s().p("AhEAZQgIgEAkgdIAmgeQAVgBAVAKQAMAGARAPQALAIg+AUQgeAKghAJQgLgIgMgGg");
      this.shape_3.setTransform(-48.9,-22.3);
  
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#EA8B00").s().p("AgKAzQgLgCgIgIQgKgKgIgEIgggNIgagKQgGgCApgaQAogbADABQAmACAwAdQAlAWAKAOQAFAIg2AOQgsAMgRAAIgGAAg");
      this.shape_4.setTransform(-49.2,-21.7);
  
      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f("#A85F00").s().p("ABhCDQgEgRgMgQQgagigwADQgwhahBgUQgggKgXAIQgLgSAHgLQACgEAogZQApgaAQgGQB7AABEB8QAjA9AJA+Ig0AYg");
      this.shape_5.setTransform(-47,-13.6);
  
      this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
  
  }).prototype = getMCSymbolPrototype(lib.R_SholderArmor, rect = new cjs.Rectangle(-65,-28.2,36,29.3), [rect]);
  
  
  (lib.R_Sholder = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});
  
      // Isolation Mode
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#3D4344").s().p("AgHAlQgIgBgBgBQgDgDgCgSQgCgRAFgRIAGgNQAHgGAJAIIAQAQQAHAHgOAWQgNAXgGAAIgBAAg");
      this.shape.setTransform(16.4,15.6,0.999,0.999,0,-22.3,157.7);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#2E3335").s().p("AgWBDIgFgkQgBgDgQgNQgPgMgEgHQgEgIASgmIAUgnQAdAWAFAAQAEAAAZAQQAaAQAEAFQADAEgiA2QghA3gKAHIgDAAQgGAAgDgXg");
      this.shape_1.setTransform(16.2,20.9,0.999,0.999,0,-22.3,157.7);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#0D1011").s().p("AhnClQgYgHgOgaQgNgVAAgYQAAgKADgJQAEgKAHgGQAAABAAAAQAAAAABgBQAAAAAAgBQABAAAAgBIAFgGIANgVIAkg8IA9hwIAHgNIAEgBQAsgMAhAAQAjAAAWAOQAVAMAHAZQAFAPAAAPQAAAhgRAtQgLAfgOAZQgLAYgaAhQgUAagHARQgEAKgKAHQgJAHgMAEQgVAHgcAAQglABgfgLgAgDiRIgmBHQgqBNgZAnQgIANgGAHQgDAEgEADQgBABgCAFQgCAEAAAIQAAATAKAQQAKASASAHQAbAIAiABQAQgBASgDQAQgEAHgHQAHgEABgFQAIgRAWgeQAWgZAOgdQASgmAGgQQAPgpAAgeQAAgVgIgNQgIgPgTgGQgPgGgUAAQgcABgoAJg");
      this.shape_2.setTransform(12.8,15.7,0.999,0.999,0,-22.3,157.7);
  
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#121314").s().p("AAHAkQgmhNg6gFQADgTAVggQAhgPAiAAQBIABAPBKQAGAcgdA/QgPAggPAbQgJgmgUgng");
      this.shape_3.setTransform(5.9,12.3,0.999,0.999,0,-22.3,157.7);
  
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#1F2224").s().p("AhjCcQgfgLgLglQgJgjAQgMQAUgPBpjHQCWgnAEBdQADAzgrBUQgNAagXAdQgVAcgIARQgKAYgvAFIgTABQghAAgegKg");
      this.shape_4.setTransform(12.8,15.7,0.999,0.999,0,-22.3,157.7);
  
      this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
  
  }).prototype = getMCSymbolPrototype(lib.R_Sholder, rect = new cjs.Rectangle(-5.9,0,37,31.8), [rect]);
  
  
  (lib.R_Leg = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});
  
      // Isolation Mode
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#2A2F30").s().p("AgKA4QgJgDAQhwQABgGAFAcIAHAoQAHAwgDAGQgDAEgGAAQgGAAgJgFg");
      this.shape.setTransform(20.4,9.4,0.892,0.867,0,4.7,-161.5);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#232728").s().p("AgbA9QgHgCgCgGIgBgGIANhvIAVANIASATQAUATACAEQADAEgHAbQgGAbgFAJQgDAHgPAAQgLAAgUgEg");
      this.shape_1.setTransform(19.9,8.8,0.892,0.867,0,4.7,-161.5);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#3D4344").s().p("AgDAKIgDgFQgCgEACgEIABgEQABgFAEAFQAFAEADAEQACACgEADQgCADgEABIgCABIgBgBg");
      this.shape_2.setTransform(7.2,15.6,0.892,0.867,0,4.7,-161.5);
  
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#3D4344").s().p("AgkgIQAHgDARACIAPADQAIgBAOAGQAMAFAAACQAAAFggAAQgQAAgZgTg");
      this.shape_3.setTransform(13.6,19.9,0.892,0.867,0,4.7,-161.5);
  
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#5B3304").s().p("ABWAkQgPgNgLgHQgSgMgggEIgKgBQgQAAgVAGQgTAGgLAJQgFADgEAAQgFAAgGgCQgFgCgDgEQgDgEAAgDQAAgCACgDIAAgBIABAAQAYgUAdgLQAXgIATAAQALAAAIACQAmANAYASIAHAGIAGAKIADAHIACAHIgCAGIgFAEIgDACgAAMgKQAiAGAUAMQAKAGANALIgBgEIgDgEIgFgJIgGgFQgGgEgGgEQgTgMgcgIQgGgCgJAAQgSAAgVAHQgaAKgXASIABABIACACQAEACAFAAIACAAQANgLAVgGQAYgHAQAAg");
      this.shape_4.setTransform(15.3,19.2,0.892,0.867,0,4.7,-161.5);
  
      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f("#FFCF2E").s().p("AAMALQgEgBgNgHIgcgLQAIgFAYAFQAPAEAPAFQAJAEgKAEQgGADgFAAIgFgBg");
      this.shape_5.setTransform(13.8,17,0.892,0.867,0,4.7,-161.5);
  
      this.shape_6 = new cjs.Shape();
      this.shape_6.graphics.f("#EA8B00").s().p("AgFAMIgxgQQgCgBARgFIARgFQANAAAdANIAiAPQAGADgZAAQgaAAgOgEg");
      this.shape_6.setTransform(14,17,0.892,0.867,0,4.7,-161.5);
  
      this.shape_7 = new cjs.Shape();
      this.shape_7.graphics.f("#A85F00").s().p("AA7AKQgVgNgZgCQgigDgfAMQgQAGgJAHQgKgDgCgCQgFgDADgFQAfgYAkgIQAZgGAQAFQAdAJATAMQAOAIAEAFQAFAHAFAQIgBgBQgCABgBAFQgTgQgLgHg");
      this.shape_7.setTransform(15.3,19.1,0.892,0.867,0,4.7,-161.5);
  
      this.shape_8 = new cjs.Shape();
      this.shape_8.graphics.f("#5B3304").s().p("AAEAoQgHgFgNgDIgEgBIAAgMQAAgTAFgTQAEgNAFgGIAEgDIADgBQAHABAGAEQAHAFAAAJIAAADIgBABQgJAPAAAZIABAWgAABAbIAAgGQAAgbAKgSQAAgDgDgCQgDgDgEAAIAAABIgBACIgEAKQgGARAAAVIAAAEIALAEg");
      this.shape_8.setTransform(9.2,15.1,0.892,0.867,0,4.7,-161.5);
  
      this.shape_9 = new cjs.Shape();
      this.shape_9.graphics.f("#FFCF2E").s().p("AgHgEQAAgHAKADIAJACQgCABABAHQACAIgKgBQgLgBgBABIgCABQgBAAAFgOg");
      this.shape_9.setTransform(9.4,13.7,0.892,0.867,0,4.7,-161.5);
  
      this.shape_10 = new cjs.Shape();
      this.shape_10.graphics.f("#EA8B00").s().p("AgMACIABgLQAAgHAGgIQADgEAIAEIAIAEIgBAJQgBAKgDAIQgBAFgEgBQgEAAgJAQQgEgLABgOg");
      this.shape_10.setTransform(9.6,14.9,0.892,0.867,0,4.7,-161.5);
  
      this.shape_11 = new cjs.Shape();
      this.shape_11.graphics.f("#A85F00").s().p("AgPAcQgCgaAHgUQAFgQAEgBQADgCAFAEQAGAEADAHQgNAWADAkQgJgEgMgEg");
      this.shape_11.setTransform(9.2,14.9,0.892,0.867,0,4.7,-161.5);
  
      this.shape_12 = new cjs.Shape();
      this.shape_12.graphics.f("#131719").s().p("AgBCPIgcgNIgZgNQgLgEgOgDQgUgEgPgQIgOgOIgCgEIAShNIgNiFIAGgDQAXgJAiAAQAsAAA1ANQAwALAAADIAJADIguB/IALALIAaAWIADACIARAIQAOAHAGAJQAHAIABAMIAAADQAAALgHAIQgFAGgJAFQgIAEgJACIgRAJQgSAJgRAGQgGACgGAAQgNAAgRgIgAhoh9IAMB6IgRBHIAIAIQANAMANACQATAEAKAEIAQAIIATAKQALAHAOAFQAJADAGAAIAEAAQAXgJAYgNIAGgDIABgBIACAAIAIgCQAIgDAEgFQACgCAAgEIAAgBQAAgHgHgHQgEgDgMgHIgKgEIgOgKIgpglIAsh5IgEgBIghgIQg1gNgnAAQgZAAgRAFg");
      this.shape_12.setTransform(15.8,11.4,0.892,0.867,0,4.7,-161.5);
  
      this.shape_13 = new cjs.Shape();
      this.shape_13.graphics.f("#272B2D").s().p("AgzAWQgKgEgPgPQgPgOgBgFQgCgHADgDQAEgFAPgCQAlABAegHQAOgDAHgDQAJgBALAKIASARIAVAQQAOAKAFAFQAFAHgoANQglANgNABIAAAAQgJAAgzgYg");
      this.shape_13.setTransform(14,16.5,0.892,0.867,0,4.7,-161.5);
  
      this.shape_14 = new cjs.Shape();
      this.shape_14.graphics.f("#131719").s().p("AgfAVQgLgHgJgLQgGgHgFgJIgDgIIASgIIAAABIABAAIAAADIAGAJQAJAOALAGQAJAGAJAAIAEgBQAVgDAOgLQAGgFAEgJIAAgBIAUAFQAAAHgMANQgSATggAFIgHABQgQAAgNgJg");
      this.shape_14.setTransform(15.3,2.8,0.892,0.867,0,4.7,-161.5);
  
      this.shape_15 = new cjs.Shape();
      this.shape_15.graphics.f("#1A1D1E").s().p("AgCCEIghgRIgPgHQgLgEgQgEQgQgDgPgOIgMgNIAShKIgNh/QAngRBRAPQApAIAhALIgtB8IAUATQAWATAGADIAWALQAPAKACAPQABAOgQAIQgIAFgIABQghASgUAHIgIABQgMAAgTgJg");
      this.shape_15.setTransform(15.8,11.4,0.892,0.867,0,4.7,-161.5);
  
      this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
  
  }).prototype = getMCSymbolPrototype(lib.R_Leg, rect = new cjs.Rectangle(4.1,-1.7,23.4,25.7), [rect]);
  
  
  (lib.R_ForeLeg = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});
  
      // Isolation Mode
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#32383A").s().p("AgdBIQgig6gGgbQgDgRAJgnQAJglAFgFQAPgOAzAaQAzAZACASQACAOgVA8IghBaQgDAJgGAAQgLAAgbgtg");
      this.shape.setTransform(23.7,6.3,0.944,0.944);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#0D1011").s().p("Ag5D4Ig7gJQgngHgVgGIgPgFIgJgFIgDgCIAAgBIAAAAIgBgBIgBgBIgCgEQgHgMgGgQQgJgbgHggQgHgoADgWQABgRAJgqQALgwAThEQANgwAVhDIACgEIACgBQANgIANgDQANgDANAAQAWgBAdAFQAqAJAzAWQAuASAqAaIAVAOQAKAGAKAJQAJAGALALIAIAKIAFAIIABACIAAACIABADIgUAEIAAgCIgBgCIAAgBIgCgCIgHgIQgJgJgIgHIgngbQgngXgvgUQgxgVgogIQgbgFgTABQgNAAgJACQgIACgIAFIgiBuQgVBPgIAjQgIAngCASQgCAUAGAlQAGAdAJAbQAEAMAHAOIACACIAAABIABAAIABAAIADACIANAEQASAFAnAHIA7AJQAiAEAWAAIAPAAIANgCQANgCAMgHQASgKAQgfIAbg1QAWgvASg/IACgGIBUgSIAAABIhDAgQgWBGgTAoIgbA1QgHAOgKANQgLAPgOAHQgPAJgQACIgQADIgPAAQgPAAgtgEg");
      this.shape_1.setTransform(21.3,4.9,0.901,0.901);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#272B2D").s().p("AAjCdQhqgKgNgOIgdgZQgSgRAAgLQAAgRAmhsQAnhyALADQBSAYAqgBQAvBDADAKQADAJgSBAQgSBGgRAeQgOAbgSAJQgHAEgFAAIgCAAg");
      this.shape_2.setTransform(20,6.7,0.901,0.901);
  
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#1F2224").s().p("AhXDnQhQgOgHgKQgKgOgKggQgMgogDgoQgDgmAmiLQAUhGAUg+QA2gmCRBBQA6AaAqAeQArAeACARQADAggZBWQgZBSgXAsIgnBFQgZAcg2AAQgiAAhLgMg");
      this.shape_3.setTransform(19.4,4.9,0.901,0.901);
  
      this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
  
  }).prototype = getMCSymbolPrototype(lib.R_ForeLeg, rect = new cjs.Rectangle(-0.4,-17.8,43.6,45.5), [rect]);
  
  
  (lib.R_Arm_Sword = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});
  
      // Isolation Mode
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#131719").s().p("AELCjQgbgBgngIQgngHg4gNQhWgUiQgoQidgsiOgrIgDgBIgCgDQgXgkgQggQgJgQgEgMIgDgMIAAgBQAAgFABgCIADgGQADgEAEgFIAOgNIOuDzIgOAMQgUASgjAQQhFAjhNAAgAnOh5IAFAMIAPAdIAcAxIDtBFQEKBMBzAVQArAHAUABIACAAQBHAABAgfQAUgKARgLIt9jmIgBAAIgKANIAAAAIgBABIABgBIABAFg");
      this.shape.setTransform(56,82.6);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#6D787A").s().p("Ak3g+QgagQgFAAQgCAAgcgPQgXgOgGgCIMjDNIgeAOg");
      this.shape_1.setTransform(61.7,81.7);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#495254").s().p("AnMhmQgEgEAHgKIAHgJIORDtIgUAOg");
      this.shape_2.setTransform(55.3,80.3);
  
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#33373A").s().p("AEQCYQhLgBk5hXQidgsiNgrQg1hUgBgUQAAgEAJgKIAKgKIOWDtQgTARgiAQQhDAhhLAAIgCAAg");
      this.shape_3.setTransform(55.5,82.7);
  
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#131719").s().p("AgRB4IgmgDIgngFIgKgDIgFgDIgBgBIgBgBIAAgCIACgBQAAgBABAAQAAgBABgBQAAAAAAAAQAAgBAAAAIAAgDIgCgTIADgoIAPiaIAAgDIAGABIDFAVIAAAJQAAAngBAmQgDAzgDAZQgFAdgDAKIgEAKIgEAGIgDADIgDABIgDABIgVABIgIAAQgdAAgngDgAhfAmIgDA4IAAACIAHACQARADAUABIAmADQAyACAZAAIASgCIABgCIADgHQAEgPACgVQAEgmABglQABgegBgmIitgaQgKBggEAzg");
      this.shape_4.setTransform(12.4,73);
  
      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f("#495254").s().p("AgGhZIAcAKIgPCSIgcAXg");
      this.shape_5.setTransform(4.4,71);
  
      this.shape_6 = new cjs.Shape();
      this.shape_6.graphics.f("#33373A").s().p("AhrBqIAWjWIC/AVIACAKQABADikgUQgTDFABAGg");
      this.shape_6.setTransform(12.1,72.4);
  
      this.shape_7 = new cjs.Shape();
      this.shape_7.graphics.f("#1F2224").s().p("AgEBsQhhgDgDgHQgEgJAXjGIBaAFQBdAHAIANQgDCygGAKQgDAGguAAIg0gCg");
      this.shape_7.setTransform(12.2,73);
  
      this.shape_8 = new cjs.Shape();
      this.shape_8.graphics.f("#0D1011").s().p("AAFBTQgXgTgLgPQgEgGgCgEQgEgIABgKQgBgLAFgQIAIghQACgHAAgIQABgNgHgJQgFgGgCAAIACgDIAHgPQAHAEAGAHQAMAOAAAVQAAALgDAKIgJAgQgDAPgBAHQAAAGACAFIAJALIAwAqIgNAQIgWgSg");
      this.shape_8.setTransform(8.6,48.2);
  
      this.shape_9 = new cjs.Shape();
      this.shape_9.graphics.f("#0D1011").s().p("AgQAOIgRgCQgSgDgJgEIgLgEIgQgIIAIgHIAEADIARAJQAJADASAFIAQADIAPACIAQABIAsgDIAbgEIg3AJIggABIgQgBg");
      this.shape_9.setTransform(-3.1,66.7);
  
      this.shape_10 = new cjs.Shape();
      this.shape_10.graphics.f("#0D1011").s().p("AgVAWIgSgEIgSgEIgPgGQgLgFgLgEIgGgDIgBgBIALgRIAGAJIAGAGIAKAHIAOAGIAQAEQAKADAIABIATAAIASgBIASgDIARgDIAsgMIAGASIhVAKg");
      this.shape_10.setTransform(-2.3,64.1);
  
      this.shape_11 = new cjs.Shape();
      this.shape_11.graphics.f("#0D1011").s().p("AhrDQQgMgHgKgXQgGgSgFgZQgFgjAAg3IABgbIAJhHQAMhRAFgcIADgQQAJgaAUgOQASgMAaAAQAnAAArAaIgKASQgngYghAAQgTAAgNAJQgPAJgGAUIgDAJIgbC3IAAAZQAAAjACAdQAEAoAJAWQAGARAHADQAkAUAZAAQARAAATgJQAWgJAJgMQAGgJAAgJQAAgGgCgEIAAgBIgBAAQgGgTgBgXQAAgWAJgSQALgUAWgKIAbgzIgFgFQgCgFAAgFIAAgEIAQg0IAQg3QAFgRAAgHIAUACQAAAJgFASIgMAlIgUBFIACACIAFAEQABADAAAEIAAAFIgiBAIgDACQgSAGgIAQQgHANAAARQABARAFARIACAFQACAHAAAHQAAAQgKAOQgNAQgaAMQgYAKgUAAQgeAAgpgXg");
      this.shape_11.setTransform(1.7,58.6);
  
      this.shape_12 = new cjs.Shape();
      this.shape_12.graphics.f("#495254").s().p("AgCALIgYgRIgDgYIA5AuQAFACgGANQgFgCgYgSg");
      this.shape_12.setTransform(8.7,55.6);
  
      this.shape_13 = new cjs.Shape();
      this.shape_13.graphics.f("#353B3D").s().p("AAvBVQghgZgLgKQgIgIABgTIAFgZQAMg5gNgMQgKgIgqgMIgpgLQAIgHAgABQAQAAAPACIA1AbIAFAHQAFAIAAAGQABAEgIAtQgHAsABAGQABAGAgAZIAgAYQgGAMgEACIAAAAQgEAAgggZg");
      this.shape_13.setTransform(3.1,47.7);
  
      this.shape_14 = new cjs.Shape();
      this.shape_14.graphics.f("#495254").s().p("AgMAUQglgBgjgPQgEgFgEgTQAZAYA6AFQAxAFAsgMQAMgCgEAGQgBAEgNAEQgXAHgxAAIgSgBg");
      this.shape_14.setTransform(-3,66.9);
  
      this.shape_15 = new cjs.Shape();
      this.shape_15.graphics.f("#2A2F30").s().p("AgSCAIgEgtQAFgSABgHIAHgVIAbikIgEC4QAAAFAJAGIgDARIgEApQgIACgNAAg");
      this.shape_15.setTransform(-1.6,53.1);
  
      this.shape_16 = new cjs.Shape();
      this.shape_16.graphics.f("#232728").s().p("AAFCKIgZgBQgGABgOgEIgNgDQADgaACgHQABgDAEgEIAJgMQAIgNABgyIACgwQABgWAHhSQAIgDA4AbQAEAEABAOIgCASIgLA4IABAPIgFAzIABAFIAAAHQACAHgDAyQABAOgJAGQgEADgPAAIgFAAg");
      this.shape_16.setTransform(-1.5,52);
  
      this.shape_17 = new cjs.Shape();
      this.shape_17.graphics.f("#2A2F30").s().p("AgLA4IAAhLIgDgXIgIgOIgBgDIAuAEIgCAnIgDARQgIAUAAAFIACAig");
      this.shape_17.setTransform(-2.2,74.4);
  
      this.shape_18 = new cjs.Shape();
      this.shape_18.graphics.f("#232728").s().p("AgBA9QgRgBgHgDIgQgHIANgKIAAggQAAgfgBgEIgPghIAPACIAWACIA0gCIgBAKQAAADgHANQAABWgMAFQgHACgNAAIgGAAg");
      this.shape_18.setTransform(-2.2,74.4);
  
      this.shape_19 = new cjs.Shape();
      this.shape_19.graphics.f("#1F2224").s().p("AgaDdQgYgCglgOQgbgKgGhZIAAhXIAOhgQAQhjAHgOQAOgdAigBQAjgCA2AdQAUAbgKAnQgMArAJASQAHAQARAPQARAQATAHQgFAMgWAnQglAOgFAyQgCAYAFAWIAFAUQgDAXgkAUQgSAKgUAAIgJgBg");
      this.shape_19.setTransform(0.3,58.6);
  
      this.shape_20 = new cjs.Shape();
      this.shape_20.graphics.f("#1F2224").s().p("AgcA+QgOgOgCgTQgBgLADgaIAIgrQAEgcgFgPQAhALAWAOQAXAOACAMQACASgPAxIgYBHQgSgNgSgUg");
      this.shape_20.setTransform(10.4,47.4);
  
      this.shape_21 = new cjs.Shape();
      this.shape_21.graphics.f("#93542A").s().p("AgGBNQgFAAgEgEQgEgDgDgFQgHgKgFgNQgJgXgFghIAAgLQAAgRAIgOIAIgLIAAAAIABAAIAKgEQANgFAJAAQAKAAAHAEQAIAGAHAQQAFAMAFAUQAEAVACAUIAAACIgGAUQgGAUgKAGIAAAAIgBAAIgLADQgMADgGAAgAgag7IgBACIgFAGQgGALAAAPIAAAKQAFApAPAbQAEAJAFADQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAIACAAIALgCIAPgDIAAAAIAAAAIAAAAIADgEQAFgGADgKIAFgSIAAgHIgDgRQgFgdgHgRQgFgOgGgDQgFgDgHAAQgMAAgPAHgAAXA+IAAAAIAAAAg");
      this.shape_21.setTransform(8,70.6);
  
      this.shape_22 = new cjs.Shape();
      this.shape_22.graphics.f("#AA673A").s().p("AgZAfQgFgYASgqIATgmIALASIAJAWIgMAKQgOAMgDAKQgIAQAEApIgKASQgBgMgIgfg");
      this.shape_22.setTransform(8.1,69.4);
  
      this.shape_23 = new cjs.Shape();
      this.shape_23.graphics.f("#D68B54").s().p("AgVA3QgDgDgFgXIgEgWIACg7IAKgEIABABIAAASQACASADAJIAJAcIAQACQASAAAGgIIgNAgQgCAFgGACQgRAGgJAAQgGAAgCgCg");
      this.shape_23.setTransform(8.9,72.1);
  
      this.shape_24 = new cjs.Shape();
      this.shape_24.graphics.f("#FFBA82").s().p("AgFBIQgMgEgMgeQgKgZgEgcQgDgUAJgQIAIgMIAOgHQAQgFAOAGQAOAHAJAdQAEAOACANIgDAhIgNAkQgMAKgMAAIgJgBg");
      this.shape_24.setTransform(8,70.6);
  
      this.shape_25 = new cjs.Shape();
      this.shape_25.graphics.f("#353C3D").s().p("AgHAMIgrgMIgcgKQgEgDgDgGQgDgHAFgDQAEgCAOAEIATAFQAMAAA6AUQA/AVABAMQhHgMgYgHg");
      this.shape_25.setTransform(-7.9,66.3);
  
      this.shape_26 = new cjs.Shape();
      this.shape_26.graphics.f("#131719").s().p("AgOAXIAAgOIADgPQADgIAEgGIAEgFIAMgJIADgCIgCADIgGAGIgEAFIgCAFQgCAGAAAHIAAAMIACALIAEAIIABACIgRAIg");
      this.shape_26.setTransform(-17.8,65.7);
  
      this.shape_27 = new cjs.Shape();
      this.shape_27.graphics.f("#131719").s().p("ABhBOIhNgWQhMgXgsgTIgVgKIgHgFQgKgLABgOQAAgNAHgNQAGgLALgIQAHgGAHgBIADgBIAMACIBJAVQBMAXAdALIAPAGIADACIACACIALAMQANATAAASQAAALgEAJQgGALgKAJIAAAAIgFACIgCABgAhlg3QgEACgEAGQgJALABAKQAAAHAEAEIAGAEIA7AYQA6AUAxAOQAgAJAQADIABABIgCABIAEgBIABAAIgDAAQAFgFADgGQACgFAAgHQAAgMgJgNIgKgMIABABIAAgBIAAAAIgBAAIAAAAIgzgRQgqgOg2gPQgbgJgRgDIgDAAIgGADg");
      this.shape_27.setTransform(-9.3,68.3);
  
      this.shape_28 = new cjs.Shape();
      this.shape_28.graphics.f("#FFCF2E").s().p("AAEARQgDgBgFgFQgGgFgCgCQgCgCACgHQACgIADgDQABAAAJAGQALAHAAADQgBADgDAHQgDAHgCAAIgBAAg");
      this.shape_28.setTransform(-19.6,63.6);
  
      this.shape_29 = new cjs.Shape();
      this.shape_29.graphics.f("#EA8B00").s().p("AgSAMIgBgBQAAgFAEgMQAFgNAEAAIARADQAMAEgEAGIgTAag");
      this.shape_29.setTransform(-19.1,63.5);
  
      this.shape_30 = new cjs.Shape();
      this.shape_30.graphics.f("#A85F00").s().p("AgVAWQgLgIAFgQQADgMAHgIQAOgRAhAMQgdAdADAfIgDAAQgHAAgPgLg");
      this.shape_30.setTransform(-19.6,64.8);
  
      this.shape_31 = new cjs.Shape();
      this.shape_31.graphics.f("#2A2F30").s().p("AgRAPQhQgcgEgEQgEgEAHgHIAMgLQADgDAFgBIAIABQCrAzACAFQACAEgGAMQgFALgDABIgeACIhOgdg");
      this.shape_31.setTransform(-8.5,67.5);
  
      this.shape_32 = new cjs.Shape();
      this.shape_32.graphics.f("#1F2224").s().p("AAIAoQh0gkgNgNQgMgNAKgYQAJgVALgDQAHgCBjAfQBkAeADAEIASAaQANAfgZATQABAAAAABQABAAAAAAQAAAAAAABQAAAAgBAAQgIAAhhgfg");
      this.shape_32.setTransform(-9.3,68.3);
  
      this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
  
  }).prototype = getMCSymbolPrototype(lib.R_Arm_Sword, rect = new cjs.Rectangle(-23.1,35.5,127.6,63.4), [rect]);
  
  
  (lib.Nojnu = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});
  
      // Layer 1
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#5B3304").s().p("AgagmIgBgEIgBgBIAUgFIAAABIAAADIAlBdg");
      this.shape.setTransform(70.2,14.4,0.707,0.707);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#FFCF2E").s().p("AgeAGIADgDIApAJIARgfIgNAng");
      this.shape_1.setTransform(54.3,23,0.707,0.707);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#7F4B05").s().p("AgZAOIAMgnIAnAMIgMAng");
      this.shape_2.setTransform(54.4,22,0.707,0.707);
  
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#EA8B00").s().p("AggARIAQgxIAxAQIgQAxg");
      this.shape_3.setTransform(54.4,22.2,0.707,0.707);
  
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#FFCF2E").s().p("AgeAGIADgDQAnAJACAAIARgfIgNAng");
      this.shape_4.setTransform(66.6,17.2,0.707,0.707);
  
      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f("#7F4B05").s().p("AgZAOIANgnIAmAMIgMAng");
      this.shape_5.setTransform(66.6,16.2,0.707,0.707);
  
      this.shape_6 = new cjs.Shape();
      this.shape_6.graphics.f("#EA8B00").s().p("AggARIAQgxIAxAQIgQAxg");
      this.shape_6.setTransform(66.6,16.4,0.707,0.707);
  
      this.shape_7 = new cjs.Shape();
      this.shape_7.graphics.f("#FFCF2E").s().p("AgeAGIADgDIApAJIARgfIgNAng");
      this.shape_7.setTransform(60.8,19.9,0.707,0.707);
  
      this.shape_8 = new cjs.Shape();
      this.shape_8.graphics.f("#7F4B05").s().p("AgZANIANgmIAmAMIgMAng");
      this.shape_8.setTransform(60.8,18.9,0.707,0.707);
  
      this.shape_9 = new cjs.Shape();
      this.shape_9.graphics.f("#EA8B00").s().p("AggARIAQgxIAxAQIgPAxg");
      this.shape_9.setTransform(60.9,19,0.707,0.707);
  
      this.shape_10 = new cjs.Shape();
      this.shape_10.graphics.f("#FFCF2E").s().p("AgeAGIADgDQAnAJACAAIARgfIgNAng");
      this.shape_10.setTransform(41.4,29.3,0.707,0.707);
  
      this.shape_11 = new cjs.Shape();
      this.shape_11.graphics.f("#7F4B05").s().p("AgZAOIAMgnIAnAMIgMAng");
      this.shape_11.setTransform(41.4,28.3,0.707,0.707);
  
      this.shape_12 = new cjs.Shape();
      this.shape_12.graphics.f("#EA8B00").s().p("AggARIAQgxIAxAQIgQAxg");
      this.shape_12.setTransform(41.4,28.5,0.707,0.707);
  
      this.shape_13 = new cjs.Shape();
      this.shape_13.graphics.f("#FFCF2E").s().p("AgeAGIADgDIApAJIARgfIgNAng");
      this.shape_13.setTransform(47.9,26.2,0.707,0.707);
  
      this.shape_14 = new cjs.Shape();
      this.shape_14.graphics.f("#7F4B05").s().p("AgZAOIANgnIAmAMIgMAng");
      this.shape_14.setTransform(47.9,25.2,0.707,0.707);
  
      this.shape_15 = new cjs.Shape();
      this.shape_15.graphics.f("#EA8B00").s().p("AggARIAQgxIAxAQIgQAxg");
      this.shape_15.setTransform(47.9,25.3,0.707,0.707);
  
      this.shape_16 = new cjs.Shape();
      this.shape_16.graphics.f("#FFCF2E").s().p("AgeAGIADgDQAnAJACAAIARgfIgNAng");
      this.shape_16.setTransform(28.4,35.6,0.707,0.707);
  
      this.shape_17 = new cjs.Shape();
      this.shape_17.graphics.f("#7F4B05").s().p("AgZAOIAMgnIAnANIgMAmg");
      this.shape_17.setTransform(28.4,34.6,0.707,0.707);
  
      this.shape_18 = new cjs.Shape();
      this.shape_18.graphics.f("#EA8B00").s().p("AggARIAQgxIAxAQIgQAxg");
      this.shape_18.setTransform(28.5,34.8,0.707,0.707);
  
      this.shape_19 = new cjs.Shape();
      this.shape_19.graphics.f("#FFCF2E").s().p("AgeAGIADgDQAnAJACAAIARgfIgNAng");
      this.shape_19.setTransform(34.9,32.5,0.707,0.707);
  
      this.shape_20 = new cjs.Shape();
      this.shape_20.graphics.f("#7F4B05").s().p("AgZAOIAMgnIAnAMIgNAng");
      this.shape_20.setTransform(34.9,31.5,0.707,0.707);
  
      this.shape_21 = new cjs.Shape();
      this.shape_21.graphics.f("#EA8B00").s().p("AggARIAQgxIAxAQIgQAxg");
      this.shape_21.setTransform(35,31.6,0.707,0.707);
  
      this.shape_22 = new cjs.Shape();
      this.shape_22.graphics.f("#FFCF2E").s().p("AgeAGIADgDIApAJIARgfIgNAng");
      this.shape_22.setTransform(15.4,41.9,0.707,0.707);
  
      this.shape_23 = new cjs.Shape();
      this.shape_23.graphics.f("#7F4B05").s().p("AgZAOIANgnIAmANIgMAmg");
      this.shape_23.setTransform(15.4,40.9,0.707,0.707);
  
      this.shape_24 = new cjs.Shape();
      this.shape_24.graphics.f("#EA8B00").s().p("AggARIAQgxIAxAPIgPAyg");
      this.shape_24.setTransform(15.5,41.1,0.707,0.707);
  
      this.shape_25 = new cjs.Shape();
      this.shape_25.graphics.f("#FFCF2E").s().p("AgeAGIACgDIAqAJIARgfIgNAng");
      this.shape_25.setTransform(21.9,38.8,0.707,0.707);
  
      this.shape_26 = new cjs.Shape();
      this.shape_26.graphics.f("#7F4B05").s().p("AgZANIAMgmIAnAMIgMAng");
      this.shape_26.setTransform(22,37.8,0.707,0.707);
  
      this.shape_27 = new cjs.Shape();
      this.shape_27.graphics.f("#EA8B00").s().p("AggARIAQgxIAxAPIgQAyg");
      this.shape_27.setTransform(22,37.9,0.707,0.707);
  
      this.shape_28 = new cjs.Shape();
      this.shape_28.graphics.f("#5B3304").s().p("AmhEQQgJgBgKgFQgUgIgLgPQgKgNAAgSQAAgWASgcIABgCIACgBQBqg6GNi/QDFhfCvhSIAJgFIATArQAPAiAJAPIAEAGIABACIABAGIgBAFIgBACIgCABIh2A8QhgAvitBSInyDwIgCACgAA3hIQmBC5hyA/QgNAUAAAQQAAALAHAIQAEAHAJAFQAKAGAKACQKJk2CvhXIAvgYIgFgIIgfhCg");
      this.shape_28.setTransform(43.3,27.3,0.707,0.707);
  
      this.shape_29 = new cjs.Shape();
      this.shape_29.graphics.f("#FFCF2E").s().p("AmzDLQABgFDLhgQEliKB/g/QCRhHBAgiIAegQQADABAHAMIgJACQgmAKiDBBQirBUkkCVQjnB2gDAAQgJgBALgRgAG2jPQAHgBgFAFIgCgEgAG2jPIAAAAg");
      this.shape_29.setTransform(42.4,26.7,0.707,0.707);
  
      this.shape_30 = new cjs.Shape();
      this.shape_30.graphics.f("#EA8B00").s().p("Am6C+QAHgMGxjUIGwjSIATAxIhGAhQjTBkpqEyIgCABQgJAAATg3gAHBjDQAOgGgNAHgAHBjDg");
      this.shape_30.setTransform(42.9,26.2,0.707,0.707);
  
      this.shape_31 = new cjs.Shape();
      this.shape_31.graphics.f("#A85F00").s().p("AnEDzQgegcAggxQBtg8GIi8IF0ixQAnBXAGAEQADABmKC7QmoDLhFAmQgVgEgPgOg");
      this.shape_31.setTransform(43.3,27.4,0.707,0.707);
  
      this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
  
  }).prototype = getMCSymbolPrototype(lib.Nojnu, rect = new cjs.Rectangle(9.6,8,67.5,38.5), [rect]);
  
  
  (lib.L_Sholder = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});
  
      // Isolation Mode
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#3D4344").s().p("AATAiQgNgNgCAAQgHAAgPgPQgQgPAGgHQAMgNAEgDQALgIAFAGIAPAVQAOAXgCARQgCAKgEAAQgCAAgEgDg");
      this.shape.setTransform(25.3,30.7,0.841,0.841,16.8);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#2E3335").s().p("AglAqQgjgVAGgHQAEgFAagPQAZgQAEAAQAFAAAdgWQABACAWAlQAVAkgEAIQgDAIgTgGQgZgHgHACIgWAHQgJACgHAAQgHAAgFgDg");
      this.shape_1.setTransform(23.1,30.2,0.841,0.841,16.8);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#0D1011").s().p("AgCCsQgTgGgNgJQgKgHgEgKQgHgRgVgaQgXgegOgbQgPgdgKgbQgQguAAggQAAgaALgSQAMgWAagIQAQgGAZgBQAhAAArAMIAFABIAqBOQAsBRAXAiIAMASIADAEQAHAEAEALQADAJAAAKQAAAYgMAVQgQAagYAHQgfALgjgBQgVABgSgEgAhviQQgOAJgGARQgDAKAAAOQAAAeAPApQALAcANAaQANAbAWAbQAXAdAHASQACAFAGAEQAGAFAJADQATAGAZABQAhgBAbgIQASgHALgSQAJgQAAgTQAAgGgCgGQgBgFgDgCIgHgGIgGgJIg8hkIg1hiQgngJgcgBQgdAAgSALg");
      this.shape_2.setTransform(22.3,28.6,0.841,0.841,16.8);
  
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#121314").s().p("AhOBHQAUgQAXgWQAtgpAMgZQATgpAQgfIAWA/QABAIgGATQgHAXgNATQgTAdgQAFIgbAFIg3Aog");
      this.shape_3.setTransform(20.5,22.5,0.841,0.841,16.8);
  
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#1F2224").s().p("AATClQgwgFgKgYQgHgRgWgcQgXgdgNgaQgrhUADgzQAFhdCVAnIA3BmQA5BmANAKQAQAMgJAjQgLAlgfALQgeAKghAAIgSgBg");
      this.shape_4.setTransform(22.3,28.6,0.841,0.841,16.8);
  
      this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
  
  }).prototype = getMCSymbolPrototype(lib.L_Sholder, rect = new cjs.Rectangle(11.5,12.4,21.5,32), [rect]);
  
  
  (lib.l_Leg = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});
  
      // Isolation Mode
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#2A2F30").s().p("AgKA4QgJgDAQhwQABgGAFAcIAHAoQAHAwgDAGQgDAEgGAAQgGAAgJgFg");
      this.shape.setTransform(16.5,6.5,1,1,-4.5);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#232728").s().p("AgbA9QgHgCgCgGIgBgGIANhvIAVANIASATQAUATACAEQADAEgHAbQgGAbgFAJQgDAHgPAAQgLAAgUgEg");
      this.shape_1.setTransform(17.1,6,1,1,-4.5);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#3D4344").s().p("AgDAKIgDgFQgCgEACgEIABgEQABgFAEAFQAFAEADAEQACACgEADQgCADgEABIgCABIgBgBg");
      this.shape_2.setTransform(32.1,17.3,1,1,-4.5);
  
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#3D4344").s().p("AgkgIQAHgDARACIAPADQAIgBAOAGQAMAFAAACQAAAFggAAQgQAAgZgTg");
      this.shape_3.setTransform(24.5,20.3,1,1,-4.5);
  
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#5B3304").s().p("ABWAkQgPgNgLgHQgSgMgggEIgKgBQgQAAgVAGQgTAGgLAJQgFADgEAAQgFAAgGgCQgFgCgDgEQgDgEAAgDQAAgCACgDIAAgBIABAAQAYgUAdgLQAXgIATAAQALAAAIACQAmANAYASIAHAGIAGAKIADAHIACAHIgCAGIgFAEIgDACgAAMgKQAiAGAUAMQAKAGANALIgBgEIgDgEIgFgJIgGgFQgGgEgGgEQgTgMgcgIQgGgCgJAAQgSAAgVAHQgaAKgXASIABABIACACQAEACAFAAIACAAQANgLAVgGQAYgHAQAAg");
      this.shape_4.setTransform(22.5,19,1,1,-4.5);
  
      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f("#FFCF2E").s().p("AAMALQgEgBgNgHIgcgLQAIgFAYAFQAPAEAPAFQAJAEgKAEQgGADgFAAIgFgBg");
      this.shape_5.setTransform(24.2,17,1,1,-4.5);
  
      this.shape_6 = new cjs.Shape();
      this.shape_6.graphics.f("#EA8B00").s().p("AgFAMIgxgQQgCgBARgFIARgFQANAAAdANIAiAPQAGADgZAAQgaAAgOgEg");
      this.shape_6.setTransform(24,16.9,1,1,-4.5);
  
      this.shape_7 = new cjs.Shape();
      this.shape_7.graphics.f("#A85F00").s().p("AA7AKQgVgNgZgCQgigDgfAMQgQAGgJAHQgKgDgCgCQgFgDADgFQAfgYAkgIQAZgGAQAFQAdAJATAMQAOAIAEAFQAFAHAFAQIgBgBQgCABgBAFQgTgQgLgHg");
      this.shape_7.setTransform(22.5,18.9,1,1,-4.5);
  
      this.shape_8 = new cjs.Shape();
      this.shape_8.graphics.f("#5B3304").s().p("AAEAoQgHgFgNgDIgEgBIAAgMQAAgTAFgTQAEgNAFgGIAEgDIADgBQAHABAGAEQAHAFAAAJIAAADIgBABQgJAPAAAZIABAWgAABAbIAAgGQAAgbAKgSQAAgDgDgCQgDgDgEAAIAAABIgBACIgEAKQgGARAAAVIAAAEIALAEg");
      this.shape_8.setTransform(29.7,16.1,1,1,-4.5);
  
      this.shape_9 = new cjs.Shape();
      this.shape_9.graphics.f("#FFCF2E").s().p("AgHgEQAAgHAKADIAJACQgCABABAHQACAIgKgBQgLgBgBABIgCABQgBAAAFgOg");
      this.shape_9.setTransform(29.4,14.5,1,1,-4.5);
  
      this.shape_10 = new cjs.Shape();
      this.shape_10.graphics.f("#EA8B00").s().p("AgMACIABgLQAAgHAGgIQADgEAIAEIAIAEIgBAJQgBAKgDAIQgBAFgEgBQgEAAgJAQQgEgLABgOg");
      this.shape_10.setTransform(29.3,15.8,1,1,-4.5);
  
      this.shape_11 = new cjs.Shape();
      this.shape_11.graphics.f("#A85F00").s().p("AgPAcQgCgaAHgUQAFgQAEgBQADgCAFAEQAGAEADAHQgNAWADAkQgJgEgMgEg");
      this.shape_11.setTransform(29.7,15.9,1,1,-4.5);
  
      this.shape_12 = new cjs.Shape();
      this.shape_12.graphics.f("#131719").s().p("AgBCPIgcgNIgZgNQgLgEgOgDQgUgEgPgQIgOgOIgCgEIAShNIgNiFIAGgDQAXgJAiAAQAsAAA1ANQAwALAAADIAJADIguB/IALALIAaAWIADACIARAIQAOAHAGAJQAHAIABAMIAAADQAAALgHAIQgFAGgJAFQgIAEgJACIgRAJQgSAJgRAGQgGACgGAAQgNAAgRgIgAhoh9IAMB6IgRBHIAIAIQANAMANACQATAEAKAEIAQAIIATAKQALAHAOAFQAJADAGAAIAEAAQAXgJAYgNIAGgDIABgBIACAAIAIgCQAIgDAEgFQACgCAAgEIAAgBQAAgHgHgHQgEgDgMgHIgKgEIgOgKIgpglIAsh5IgEgBIghgIQg1gNgnAAQgZAAgRAFg");
      this.shape_12.setTransform(21.9,10.1,1,1,-4.5);
  
      this.shape_13 = new cjs.Shape();
      this.shape_13.graphics.f("#272B2D").s().p("AgzAWQgKgEgPgPQgPgOgBgFQgCgHADgDQAEgFAPgCQAlABAegHQAOgDAHgDQAJgBALAKIASARIAVAQQAOAKAFAFQAFAHgoANQglANgNABIAAAAQgJAAgzgYg");
      this.shape_13.setTransform(24,16.3,1,1,-4.5);
  
      this.shape_14 = new cjs.Shape();
      this.shape_14.graphics.f("#131719").s().p("AgfAVQgLgHgJgLQgGgHgFgJIgDgIIASgIIAAABIABAAIAAADIAGAJQAJAOALAGQAJAGAJAAIAEgBQAVgDAOgLQAGgFAEgJIAAgBIAUAFQAAAHgMANQgSATggAFIgHABQgQAAgNgJg");
      this.shape_14.setTransform(22.6,0.5,1,1,-4.5);
  
      this.shape_15 = new cjs.Shape();
      this.shape_15.graphics.f("#1A1D1E").s().p("AgCCEIghgRIgPgHQgLgEgQgEQgQgDgPgOIgMgNIAShKIgNh/QAngRBRAPQApAIAhALIgtB8IAUATQAWATAGADIAWALQAPAKACAPQABAOgQAIQgIAFgIABQghASgUAHIgIABQgMAAgTgJg");
      this.shape_15.setTransform(22,10.1,1,1,-4.5);
  
      this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
  
  }).prototype = getMCSymbolPrototype(lib.l_Leg, rect = new cjs.Rectangle(8.3,-4.6,27.4,29.6), [rect]);
  
  
  (lib.L_Heand = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});
  
      // Isolation Mode
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#93542A").s().p("AAMAWIAHgCIABAAIAAgKIgCgbIgiADIgCAAIgCAAIgEgJIAFgBIAIAAIAjABIABAmIgBAGIgCACIgCAAIgDABIgjABg");
      this.shape.setTransform(8.3,62.5,0.814,0.814,12.7);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#0D1011").s().p("AgFAbQgugBgmgPIgPgHIgDgCIgEgCIgBgBIAAAAIgCgEIAAgDIAAgEIABgCIABgDQADgEACgCIACgDIANAHIAAACIgCAFIANAFQAkAOApABQAnACAngKIAjgLIAGALIgJAFIgbAJQgoANgoAAIgEAAg");
      this.shape_1.setTransform(13.5,54.1,0.814,0.814,12.7);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#0D1011").s().p("AgIAWIgfgDIgTgDIgRgEIgYgGIgKgCIAHgSIASAIIAeAJIARAFIAUADIATACIAUAAIATgCIASgEIAPgGIALgGIAIgIIAHgIIAKARIgCABQAAgBgGAEIgKAEIgeAKQgKADgKACIgUACIgKABg");
      this.shape_2.setTransform(14.5,52.4,0.814,0.814,12.7);
  
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#1F2224").s().p("AgOALQgtgGgHgDIgNgDQgIgCABgEQAAgFAIgCIAKgBIAIAEQAMAFAaADQAvAIAygIIANAJQgDAJgeABIgJAAQgVAAgngFg");
      this.shape_3.setTransform(12.5,53.2,0.814,0.814,12.7);
  
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#0D1011").s().p("AhIBhIAcgSIA1glIAdgWIAFgHIABAAQACgHAAgGQAAgNgKglQgCgIAAgJQAAgMAFgKQADgHAIgHQANgJAFAAIAEATIgFADQgHAEgDAGQgDAFAAAIIACAMQAKApAAAOQAAAMgEAJIgEAHIgGAGIgPAMIgoAeIg6Alg");
      this.shape_4.setTransform(12.3,37.7,0.814,0.814,12.7);
  
      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f("#0D1011").s().p("AAMDuIgNiSIgSgMQgagRgngPIgEgBIghhBIAAABIgBgGIABgFIACgDIAFgFIgOgxQgJgZgIgfQgFgSgBgKIAUgBQABAIAFAQIAKAkIAVBGIAAABIABAEQAAAEgCAEIgEAFIgBABIAbA0QA5AWAeAaIADADIANCMIAOAEIAXgKQAbgMAWgMIAGgHQACgFADgKQAFgSgBgbQABgugLhBIgBgDIAAAAIgKhHQgLhSgFgZIgDgOQgLgggGgIIgEgEQgDgBgDAAQgJAAgYAIIgGgSQAdgKAKAAQAJAAAHAEQAGADAFAJQAIALALAfIADARIAbCzIAAAAIAFAmQAGAsABAjQAAASgDAUQgDATgHANQgFAJgIAFQggASgvATIgCABg");
      this.shape_5.setTransform(13.2,48.4,0.814,0.814,12.7);
  
      this.shape_6 = new cjs.Shape();
      this.shape_6.graphics.f("#495254").s().p("AgPAsIgEAAQgFgPgDgTQgHgkAIgQQAFgMAOgCIAVAAQAMABAFADIgRADIgEACIgEAEQgIANABALIAHAhIADAVQACARgDAFQgQgKgHgDg");
      this.shape_6.setTransform(18.9,35.6,0.814,0.814,12.7);
  
      this.shape_7 = new cjs.Shape();
      this.shape_7.graphics.f("#495254").s().p("AgdATIACgDIA5guIgDAYQgsAigJADQgEgIABgEg");
      this.shape_7.setTransform(8,43.8,0.814,0.814,12.7);
  
      this.shape_8 = new cjs.Shape();
      this.shape_8.graphics.f("#353B3D").s().p("AhSBvQgCgBgFgHIgDgGQA0gcAZgRQArgeAIgdQACgGgJgbQgHgcAAgEQABgJAGgRIAXgMIAQAAQATACAHAHQgFgDgGgBQgNgDgJAIQgOAMANA5QAIAmgOANQgKAKg9ApQg9AogEAAIAAAAg");
      this.shape_8.setTransform(13.8,38.5,0.814,0.814,12.7);
  
      this.shape_9 = new cjs.Shape();
      this.shape_9.graphics.f("#2A2F30").s().p("AgTBWIABgaIABgVIgJinIAlC1QABAEAKADIABASQABAWADAUQgMAFgUAEg");
      this.shape_9.setTransform(21.7,44.7,0.814,0.814,12.7);
  
      this.shape_10 = new cjs.Shape();
      this.shape_10.graphics.f("#232728").s().p("AggCHQgDgaABgHQAAgDADgFQAEgGACgHQAFgPgKgxIgIgwQgDgNgGguIgGgsQAEgDAiAGQAJAUgCAcIgBASQAAAKACAHQAHAYAfAHQAFAuACADIABAFIACAHQADAGAJAyQADANgGAHQgEAFgTAEIgaAFQgFACgMAAIgQgBg");
      this.shape_10.setTransform(20.9,43.8,0.814,0.814,12.7);
  
      this.shape_11 = new cjs.Shape();
      this.shape_11.graphics.f("#353B3D").s().p("AABBLQgHgBgDgEQgCgDgGhAQgFg9gBABQgEABAEgSIATACIANB6IADAMQAEAMAKABIgQAAIgJAAg");
      this.shape_11.setTransform(13,61.6,0.814,0.814,12.7);
  
      this.shape_12 = new cjs.Shape();
      this.shape_12.graphics.f("#2A2F30").s().p("AgKAqQACghgBgGIgBgJQAAgDAEgDQAFgFgGgxIACgCIASgDIgBA+QAAAwgEATQgCAKgIACIgJABIAAABIABgeg");
      this.shape_12.setTransform(18.6,61.6,0.814,0.814,12.7);
  
      this.shape_13 = new cjs.Shape();
      this.shape_13.graphics.f("#232728").s().p("AgbBPIAIgLQABgCgDgLQgEgOAAgIIgFhYIA6gZIACATIABAqQAAArgLAcQgEAMgMAEQgUAHgDACIgIAEQgBAAAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAg");
      this.shape_13.setTransform(17.8,61.7,0.814,0.814,12.7);
  
      this.shape_14 = new cjs.Shape();
      this.shape_14.graphics.f("#1F2224").s().p("AAHDaIgHhFQgFgzgEgRQAAgBgQgDQgVgDgQgHQgVgIgDgDQgCgCgLgbIgcgzQAagKAjgUQArgZAGgOQAJgSgNgmQgMgiAVgbQAzgcAOADQAJACAPAeQAMAXAaC7IAMBYQAGBcggATQgyAegXAAQgTAAgCgSg");
      this.shape_14.setTransform(14.4,48.8,0.814,0.814,12.7);
  
      this.shape_15 = new cjs.Shape();
      this.shape_15.graphics.f("#1F2224").s().p("Ag/AjQgQgxADgSQABgLA9gaQAvgVAsgPQgJAbAHBUQACAQgPANQgIAIgVASQgIAIhAAlIgYhHg");
      this.shape_15.setTransform(10.7,36.7,0.814,0.814,12.7);
  
      this.shape_16 = new cjs.Shape();
      this.shape_16.graphics.f("#93542A").s().p("AgUAvIgBgBQgTgDgPgFIgFgCIgBgBIAAAAIgBAAIgDgDIgBgCIgDgJIgDgjIABgJQABgGACgEQACgDAHgEIAJgDIAIgDIAKAAIAAAFQgGABgJAFIgHADIgEAEIgCAOIADAgIACAHIAEABIAgAIIANgDQAHgDAEgEIADgCIATgWIACAAIAVgBQANgBAKACIAAAAQgJAFgMACIgTAEIABgCIgEACIADAAIgLAOIgGAHIgEACQgHAFgHADIgRAFgAg3AZIAAAAIAAgBIgBAAIABABg");
      this.shape_16.setTransform(5.6,58.7,0.814,0.814,12.7);
  
      this.shape_17 = new cjs.Shape();
      this.shape_17.graphics.f("#93542A").s().p("AgqAUQABgHAEgKQAFgLADgFIAEgEIADgCIAAAAIABgBIAAAAIACAAIACAAIALACQAWAIANAHIALAFIADAFIgBABQgCACgEAAIgMgEQgLgDgXgKIgJgEIAAAAIgBAAIgDADQgEAFgEAJIgGAPg");
      this.shape_17.setTransform(6.5,53.4,0.814,0.814,12.7);
  
      this.shape_18 = new cjs.Shape();
      this.shape_18.graphics.f("#EAA36E").s().p("AgfARQgGgCgDgPQgEgQADgJQAEAKAIAJQAIAJAIAEQAGADAJABIASACIAIABIgRAMIgHAAQgRAAgSgJgAAcAOIAPgLQABAKgIABIgDAAIgFAAgAAcAOIAAAAg");
      this.shape_18.setTransform(3.2,59.3,0.814,0.814,12.7);
  
      this.shape_19 = new cjs.Shape();
      this.shape_19.graphics.f("#D68B54").s().p("AAEAiQgIgCgFgDQgSgLgKgIIgIgGIgDgKIAHgaIAXgDIAGAAQAHAAgBABQgFARACAJQABAEACABIAWAIQAZAHAJgGIgWAaQgEADgGABIgCAAIgMgCg");
      this.shape_19.setTransform(3.7,58.5,0.814,0.814,12.7);
  
      this.shape_20 = new cjs.Shape();
      this.shape_20.graphics.f("#AF6E41").s().p("AgXAMIgfgPIAKgVIgBAAIBiANQABAAgCAIQgBALAEARIgHAAQglAAgigNg");
      this.shape_20.setTransform(8.2,54.1,0.814,0.814,12.7);
  
      this.shape_21 = new cjs.Shape();
      this.shape_21.graphics.f("#D68B54").s().p("AAHAPQgJgEgmAFQgKgFAYgmIAFgCQAGgCAEACQAEACgBAFIgBAFQA0AMABACIgLAiQgTgOgHgCg");
      this.shape_21.setTransform(6.4,54.3,0.814,0.814,12.7);
  
      this.shape_22 = new cjs.Shape();
      this.shape_22.graphics.f("#D68B54").s().p("AAPAbQAOgXABgDQADgLgXgDQgPgCgRACQgRACgGAEIgIAJQgBACgBAAQgBABAAAAQgBABAAgBQAAAAAAgBIADgLQACgKADgCQABgBAGgBIAIAAIARgGQAOgFAFgBQAHgBAWACQAVACAEACQAEADgCAWQgBAEgHAMQgHAMgEADQgHAEgLAAIgBACQgBAAgEgHg");
      this.shape_22.setTransform(4.9,57.1,0.814,0.814,12.7);
  
      this.shape_23 = new cjs.Shape();
      this.shape_23.graphics.f("#FFBA82").s().p("AggA0QgLgIABggQgBgaAIgcQABgFADgEIAHgHQAQAEASANQAYAQAJAEQAAALgBAIIgPAeIgZAcQgFACgHABIgBAAQgNAAgIgHg");
      this.shape_23.setTransform(5.8,57.1,0.814,0.814,12.7);
  
      this.shape_24 = new cjs.Shape();
      this.shape_24.graphics.f("#93542A").s().p("AgKADIAUgMIgMAUg");
      this.shape_24.setTransform(12.6,65.3,0.814,0.814,12.7);
  
      this.shape_25 = new cjs.Shape();
      this.shape_25.graphics.f("#2A2F30").s().p("AgJAaIgDgMIgFgMIgDgSIgDgnIAvgEIgBACIgIAPIgFAXIAABMIgWADg");
      this.shape_25.setTransform(13.2,60.7,0.814,0.814,12.7);
  
      this.shape_26 = new cjs.Shape();
      this.shape_26.graphics.f("#232728").s().p("AgYA7QgHgDgDgtIgCgrQgHgNAAgDIgBgKIA0ACQAKAAAbgEIgPAhQAAAEgBAfIgBAgIAOAKIgQAHQgHADgRABIgGAAQgNAAgHgCg");
      this.shape_26.setTransform(14.8,61.1,0.814,0.814,12.7);
  
      this.shape_27 = new cjs.Shape();
      this.shape_27.graphics.f("#93542A").s().p("AhwA9IAAgBIgDgbIABgkIACgFIADgEIAJgHIAdgVIACgGIAAgKQAAgSgCgLIAAgDIAAgEIADgBQADgCADAAQAFAAAMADIChAzIgIBGIgCABIgwAwQgKALgFADIgDACIgDABIh5ABgAg7g4IAAAMQgBAGgDAEIgHAGIgcAUIgGAFIgBAjIADAZIAWAdIB0gBIAAAAIABAAIgBAAIABgBQACgBACgDIA5g3IAHg7Ig5gUQhBgWgegGIgOgCIACAcg");
      this.shape_27.setTransform(12.3,61.2,0.814,0.814,12.7);
  
      this.shape_28 = new cjs.Shape();
      this.shape_28.graphics.f("#AF6E41").s().p("AAFgFQgBgCgJABIgNAAIgJAAQgHgCAAgBQAGgFASgLQAKgHACgSIAAgRIAVgGQAQCUgFgCQgDgCgLABIgLACQgDAAgBhPg");
      this.shape_28.setTransform(9.6,61.7,0.814,0.814,12.7);
  
      this.shape_29 = new cjs.Shape();
      this.shape_29.graphics.f("#D68B54").s().p("AhrA7IgCgaIAAgUIABgQQgBgEATgMQAVgPADgDQAEgGgCgXIgCgXQAJgFBUAcQArAOApAPIgIBAQg+BAgDgBIh3ABg");
      this.shape_29.setTransform(12.3,61.2,0.814,0.814,12.7);
  
      this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
  
  }).prototype = getMCSymbolPrototype(lib.L_Heand, rect = new cjs.Rectangle(-0.3,29.7,25.7,39.6), [rect]);
  
  
  (lib.L_ForeLeg = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});
  
      // Isolation Mode
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#0D1011").s().p("AhJD2QgbgGgQgPQgOgMgGgRQgTgtgMg1QgQhCAAg1QAAgXAEgYQADgSAPgSQAOgRAVgQQAigaA/gfQBEghBDgWIAGASIgTAHQgPAFghAOQhMAfgzAfQgrAagVAZQgLAOgDANQgDAZAAATQAAAyAPBAQAMA0ASAsQAFANAKAIQAKAIAMAFQAUAHAkAAIAugBQAdAAAsgQQATgHAigQIgBAAIACgCIAEgNQAEgQADgZQAFguAAg7IAAgeQgBgQgIghQgEgUgNgpQgNgpgVg6IgFgMIATgGIAWA8QAYBFAJAjQAKApABAVIAAAfQAABNgIA0QgDATgFANQgCAHgEAGIgGAFQgYANgfALQguARgiAAIguABQgcAAgUgEg");
      this.shape.setTransform(12.6,-0.9,0.878,0.922,0,10.2,11.3);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#272B2D").s().p("AhCCPQgIgKARhOIAThLQAHgGA7h0QAJgJAKAIQAFADADAGQAGA4AEA7QAJB1gJAOQgvAPgvARQgNAEgJAAQgKAAgFgFg");
      this.shape_1.setTransform(18.3,5.4,0.878,0.922,0,10.2,11.3);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#1F2224").s().p("AhWDtQgYgGgQgmQgRg1gMgeQgSgtgDgsQgDgrALg/QAJg1CIg6QBDgdBCgTIAAAPQARAuAPAsQAdBVAEAjQAGA7gHBOQgHBSgOAHQghARgyALQgrAKgpAAQglAAgjgIg");
      this.shape_2.setTransform(12.5,-0.6,0.878,0.922,0,10.2,11.3);
  
      this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
  
  }).prototype = getMCSymbolPrototype(lib.L_ForeLeg, rect = new cjs.Rectangle(-3.5,-21.8,32.2,44.2), [rect]);
  
  
  (lib.Head = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});
  
      // Isolation Mode
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#3D4344").s().p("AArBcIgrgTQgKgDAsgPQAHgCiBgIQgZgGgZgOQgzgagBgmQAig7BVgGQArgDAiAIQBoAdAmAeQAVASARAqQANAhgWAZQgWAXgnAEIgJABQgcAAgkgOg");
      this.shape.setTransform(40.7,2.6,0.834,0.834);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#2E3335").s().p("AhLBvIgwglICIACQAKAAiwgqQgSgGgUgNQgmgXgHgeQAdg3BJghQA0gXAVABQCxANBNBjQAwA9gFA2QgDAXgqAVQgzAahPAAQhJAAg/gmg");
      this.shape_1.setTransform(40.1,5.7,0.834,0.834);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#272B2D").s().p("Ag5C2QgmgKgigOIgagMIB/AAQglgIgrgMQhVgXgZgVQgagVAGggIAKgdQgHAFgKADQgUAGgNgJQAEgnAng3QAWgfAcgcIADgDQBfg8BfAQQAmAHBoAvQA1AYAlBLQAbA0AMA/QAEAmghAjQgeAfgnAMQgzAKg0AAQhDAAhEgRg");
      this.shape_2.setTransform(39.2,10.1,0.834,0.834);
  
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#5B3304").s().p("ABYBhIAAAAIgOgHQgSgHgRgBQgSgBgngIQgpgJghgJIhagZIgqAEIgFhYIAPAGQCXA/BlAAQA6ABAngUQAfgQATgcQAWghABgiIAUgBIACAaQAAAfgIAbQgGAVgVAdQgXAggGANQgIAVgVARQgKAJgJAEIgGAEgAh7AbQBFARAoAJQAlAJARAAQAhABAbASIABAAIAOAMIAKgHQAQgOAHgQQAHgQAXgiQAUgaAEgSIABgBQgVAhglASQgrAYhAAAQhjAAiSg7IACAjIAZgBg");
      this.shape_3.setTransform(46.5,37.3,0.834,0.834);
  
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#FFCF2E").s().p("AAPAdQgmgBgpgIQgOgCgdgPIgZgOQBpAXBagRQAugJAYgPQAAAHgPAfQggAVg8AAIgLgBg");
      this.shape_4.setTransform(49.1,39.1,0.834,0.834);
  
      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f("#EA8B00").s().p("AhhAoIh4gmIgBgSQBTAcBoAMQBaAKApgJQAfgGAdgWQAMgLAvgvQgEAcgZAhQggApgrANQgdAIglAAQg9AAhVgWg");
      this.shape_5.setTransform(47,36.5,0.834,0.834);
  
      this.shape_6 = new cjs.Shape();
      this.shape_6.graphics.f("#A85F00").s().p("ABfBfIgQgJQgUgIgTgBQghgBhhgZIhcgaIggADIgFhAQEMBxBrhNQAigXAQgrQAJgoACgDIADAgQAAAVgIAbQgKAWgMAWIgMANQgNASgIASQgIAUgSAPQgKAHgIAEg");
      this.shape_6.setTransform(46.5,36.9,0.834,0.834);
  
      this.shape_7 = new cjs.Shape();
      this.shape_7.graphics.f("#19110C").s().p("AgDAdIgFgEIgNgLIgCgCIABgCQACgNAOgOQAKgLADAAIACgCIADABQAGAEADAFQADAFAAAHQAAAIgGAMQgEAIgFAHIgCACQgCACgDgBIgFgBgAACAUIAAAAIACgCIAEgIQAGgKAAgIQAAgEgCgDIgCgDIgKAIQgJAKgDAJIAJAIIAFADIgBAAIABAAg");
      this.shape_7.setTransform(60.5,31.7,0.834,0.834);
  
      this.shape_8 = new cjs.Shape();
      this.shape_8.graphics.f("#EEE8DF").s().p("AgEAWIgOgMQACgLANgNIAMgKQAWAKgbAnIgCAAQgCAAgEgDg");
      this.shape_8.setTransform(60.5,31.7,0.834,0.834);
  
      this.shape_9 = new cjs.Shape();
      this.shape_9.graphics.f("#19110C").s().p("AgdAXQgLgHgNgLIgKgJIgEgFIAFgDIATgJQAXgJAWAAIAFAAQAZABATATQAKAJAFAIIACAFIgEACQgeARgcAAQgSgBgRgHgAgmgMIgNAGIAFAEQAKAJAMAHQANAGARABQAYAAAYgOIAAAAIgJgKQgRgPgWgCIgEAAQgTABgVAHg");
      this.shape_9.setTransform(44.5,35.5,0.834,0.834);
  
      this.shape_10 = new cjs.Shape();
      this.shape_10.graphics.f("#FFFFFF").s().p("AgbASQgLgGgMgLIgKgJIAUgJQAYgJAWABQAYACASARQAJAHAEAIQgeARgZAAQgRAAgQgIg");
      this.shape_10.setTransform(44.6,35.6,0.834,0.834);
  
      this.shape_11 = new cjs.Shape();
      this.shape_11.graphics.f("#020102").s().p("AglgFQAIgKAUgGQAWgHAZAEQgHABgbAYIgYAZg");
      this.shape_11.setTransform(60.6,29.5,0.834,0.834);
  
      this.shape_12 = new cjs.Shape();
      this.shape_12.graphics.f("#020102").s().p("AhhgSQBAgIBGAHQAlADAXAFIgBAEIACAfg");
      this.shape_12.setTransform(41.7,32.4,0.834,0.834);
  
      this.shape_13 = new cjs.Shape();
      this.shape_13.graphics.f("#0D1011").s().p("Ag6BZQhVgfg8gqQgpgbgRgaIgRgaIAdAMIABAAIASAGQAWAIAgAIQBcAWBZAAQBnAABagfQAjgRAPgZQAJgQAAgQIgBgBIAAgBIAAgCIAAgBIAUgDIAAAAIACANQABAQAAARQAAA5gSAqQgYA+g9AXQgfALgpAAQhIAAhagggAjAAAQAnAbAyAWQA0AYA0ANQA5APAuAAQAmAAAbgKQAzgTAXg2QAOghACguQgSAYgiARIAAAAIgBABQhcAfhtAAQhbAAhegWIgqgNQAMAMASALg");
      this.shape_13.setTransform(41.7,31.1,0.834,0.834);
  
      this.shape_14 = new cjs.Shape();
      this.shape_14.graphics.f("#D68B54").s().p("AATA4QhJgChQgOQhEgMgHgHIgcgXQgSgPACABQEFA7CQgrQBIgVAUgiIAKAEQgNBrjMAAIgSAAg");
      this.shape_14.setTransform(42.8,29.6,0.834,0.834);
  
      this.shape_15 = new cjs.Shape();
      this.shape_15.graphics.f("#D68B54").s().p("AglATIgOgCIgKgCQgIgEgFAAQgGgCgJgWQgJgXACgBICegLIAkAWIgKAfIgagLQgagMgCAAIgTASQgQAQgFAGQgEAGgBAKIgBALIgBAAQgDAAgVgeg");
      this.shape_15.setTransform(53.1,34.9,0.834,0.834);
  
      this.shape_16 = new cjs.Shape();
      this.shape_16.graphics.f("#FEBA84").s().p("AhLBOQiRg2gpg/QA6AXBWANQCqAaCOgwQAugXANgkIAEgfIADAcQACAigFAfQgQBhhNAdQgfAMgoAAQhHAAhigmg");
      this.shape_16.setTransform(42.3,30.8,0.834,0.834);
  
      this.shape_17 = new cjs.Shape();
      this.shape_17.graphics.f("#0D1011").s().p("ABLGcQhIAAhLgjQhKgig/g8QhAg9gkhKQgohQAAhPQAAhRAbhKQAbhIAwg3QAxg4A+geQBCggBGAAQBIAABBAgQA+AeAxA4QAwA3AbBIQAbBKAABRQAACCgjBiQgnBuhLAxQg3AkhFAAIgCAAgAh/lpQg7AcguA1QguA0gZBFQgaBGAABOQAABKAlBMQAjBHA+A7QA8A5BHAhQBIAiBDgBQBCAAAxggQAugeAhg7QA9huAAisQAAhOgahGQgZhFgug0Qgug1g7gcQg9gehDAAQhCAAg9Aeg");
      this.shape_17.setTransform(36.6,25.3,0.834,0.834);
  
      this.shape_18 = new cjs.Shape();
      this.shape_18.graphics.f("#1F2224").s().p("AjKETQiJiCAAidQAAihBkhyQBjhyCMgBQCMABBkByQBkBzAACgQAACwg+BvQhHCAiEAAQiRAAiEiAg");
      this.shape_18.setTransform(36.6,25.4,0.834,0.834);
  
      this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
  
  }).prototype = getMCSymbolPrototype(lib.Head, rect = new cjs.Rectangle(7.5,-9,58.4,68.8), [rect]);
  
  
  (lib.Body = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});
  
      // Isolation Mode
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#3D4344").s().p("AAmA+QhFgCgQgMQgOgLgRgkIgQgoQABgIAPgIIAOgGIBGA1QBKA1AMAIQAPAJg5AAIgMAAg");
      this.shape.setTransform(24.4,5.4,0.913,1);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#0D1011").s().p("AAWBKQh6AAhUgoQgbgMgUgPQgOgKgBgDIgDgCIAAhBIAMADQB0AeB3AAQB1AAB7geIAMgDIAABAIgCADQgQAUgkAUQhHAohkAAgAjlgRIAAABIAKAIQASAMAZAMQBSAmB1AAIACAAQBdAABDgkQAfgSAOgQIAAggQh3AchxAAQhyAAhxgcg");
      this.shape_1.setTransform(29.1,36.8,0.913,1);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#1F2224").s().p("AikApQgfgLgZgOIgTgNIAAg9QB9AcBVACQAJACAZgBIAYgBQAcgBA4gMQAkgHBbgVIAAA+QgRAQggASQhBAjhMAGQgXACgYAAQhYAAhPgdg");
      this.shape_2.setTransform(29.2,36.6,0.913,1);
  
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#5B3304").s().p("AgMCIIAAgKQAAgXgEgiQgHg5gPglQgNghgTgQQgLgLgPgEIgigKIAjgJQBSgWA0gKIADgBIAEACIAaASQAeAYAPAbQAOAYAAAZIAAAIIgFADQgNAHgLAQQgJARgFATQgHAXgDAeIAAABIAAAFIg2AigAhAhfIAHAGQANALALATQASAdAKAtQALAzABA1IANACIAngYIAEgcQAHgmAOgZQAMgUAPgKQgBgSgKgRQgJgRgPgPQgMgMgOgKIgLgHg");
      this.shape_3.setTransform(52.7,-14.8,0.913,1);
  
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#703D09").s().p("AAXBxQAEgWgMg/QgLg8gdguIgbgiIAIgEQAKgDACABQBCAZAQB4QAGAwgFAsg");
      this.shape_4.setTransform(50.2,-13.5,0.913,1);
  
      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f("#FFCF2E").s().p("Ag6gUIACgBQADgCADAAIAUABIAHgDIAMgEQAIgCAvgOQACAAANARQgMARgFACQgEABgJAIQgKAIgCAAQgCABgRASIgSATg");
      this.shape_5.setTransform(55.1,-21,0.913,1);
  
      this.shape_6 = new cjs.Shape();
      this.shape_6.graphics.f("#EA8B00").s().p("AgoA8QgGgMAAgCQAAgEgQgwIAsg7IAQgDQARgCAIAFQAOAJAZArQAFAGhZA2QgEACgFAMIgEAJIgFgKg");
      this.shape_6.setTransform(56.8,-19.9,0.913,1);
  
      this.shape_7 = new cjs.Shape();
      this.shape_7.graphics.f("#A85F00").s().p("AgIAdQgQhqhFgVQBSgVAZgLIApAeQAoAngBAqQgdARgPA2QgHAbgBAYIgwAdQAGgygIg1g");
      this.shape_7.setTransform(55.1,-14.8,0.913,1);
  
      this.shape_8 = new cjs.Shape();
      this.shape_8.graphics.f("#161819").s().p("AgMBlQhzgsgWhNQgMgpAsggQAigYAggEQARgBAgAYIAtAnQAcAYAXAjQASAaATAqQAHARAOAJQgbAcgtAAQgoAAg0gVg");
      this.shape_8.setTransform(1.2,1.7,0.913,1);
  
      this.shape_9 = new cjs.Shape();
      this.shape_9.graphics.f("#0D1011").s().p("AhEErQgcgFgjgIIgDgBIgFgBIgOgEQgFAAgEgCIgFgEIgDgDIgfhBIAAAAQgphJgohlQglhagMg1QgDgNAAgKIAAgGQABgEACgDQALgOAigXQAbgRAlgTQArgWAmgRQBLgtBaAAQBJAABLAdQAlAPAYAOIABAAIABACIAnA6QApBJAOBTQAGAiAAAsQAABnggBwIgBAGIggAGQhRAPgqAGQhEAJg3AAQgvAAgtgGgAk6iGIACATIAJAfQANAsARApQAsBxAuBTIAAAAIAeA/IAAAAIAHACIAUAEQAiAJAbAEQAtAGAsAAQA2AABDgJQAsgGBOgPIASgDQAehtAAhfQAAgqgGggQgNhNgmhHIgmg5IgNgHQgYgLgSgIQhKgbhDAAQhTAAhHArIgBAAIAAAAIgEABIgvAXQg+AfgfATQgdATgKANIAAgBIgBACIABgBgAk6iHIAAAAg");
      this.shape_9.setTransform(23.8,5.1,0.913,1);
  
      this.shape_10 = new cjs.Shape();
      this.shape_10.graphics.f("#0D1011").s().p("AiGAmIBagKIAZgFIAZgFIAagHIAYgHIAqgRIAPgKIAMgIIAKgHIgIAJIgLAKIgPALIgTAKIgvATIgaAHQgZAGgbADIgZACg");
      this.shape_10.setTransform(41.3,15.5,0.913,1);
  
      this.shape_11 = new cjs.Shape();
      this.shape_11.graphics.f("#090B0C").s().p("AgtCjIgBgBIABgCQAJgeAMgnIA1jPIgYguIgCgDIAAgBIANgPIAEAGIAbA5IgBADQgSBDgXBIIgUBFQgQAxgIATIAAASIgGADg");
      this.shape_11.setTransform(48.3,-10.5,0.913,1);
  
      this.shape_12 = new cjs.Shape();
      this.shape_12.graphics.f("#131719").s().p("AgChYIAFgBIgDCzg");
      this.shape_12.setTransform(44.3,16.4,0.913,1);
  
      this.shape_13 = new cjs.Shape();
      this.shape_13.graphics.f("#131719").s().p("AgChZIAFAAIgCCzg");
      this.shape_13.setTransform(39.9,17.8,0.913,1);
  
      this.shape_14 = new cjs.Shape();
      this.shape_14.graphics.f("#090B0C").s().p("ACaCAIhAggIhAgjQg6gghDgnIgDgCIgBgDIg8h8IAcAXIAwBcIC2BwQAqAYAVAKIACABIAAACIAEAOIgHABg");
      this.shape_14.setTransform(25.2,-5.3,0.913,1);
  
      this.shape_15 = new cjs.Shape();
      this.shape_15.graphics.f("#090B0C").s().p("AAoBBIhPg2Ih2hUIgTgPQgIgHgKgJQALAIAJAFIEmC5IAhhnQAXhGATgtQgKA2gSBBIgPA7IgUBHg");
      this.shape_15.setTransform(29.1,-8.6,0.913,1);
  
      this.shape_16 = new cjs.Shape();
      this.shape_16.graphics.f("#121314").s().p("AiHBBQhIhJgzhQQgBgFB6guIB7gsID2BHQAbA4AAA+QgCCAiJArQgVAHgXAAQhdAAh2h3g");
      this.shape_16.setTransform(31.8,-9.5,0.913,1);
  
      this.shape_17 = new cjs.Shape();
      this.shape_17.graphics.f("#0D1011").s().p("AAhArIgpgEIgogIIgUgFIgTgGIhBgbQgSgJgZgQIgMgJIgDgDIAEADIAMAHQAOAIAeAOIBCAXQAMAEAaAGQAUAFAUACQASADAWACIBtAEIAxgDIATgCIgTAEQgcAFgVACIhHACIgngCg");
      this.shape_17.setTransform(30.4,16.6,0.913,1);
  
      this.shape_18 = new cjs.Shape();
      this.shape_18.graphics.f("#3D4344").s().p("AAxBeQgEgKgKgQQgUghgcgeQgZgYgegOIgngNQgFgDgEABIgRAAQAqgYAygYQAwAHBFBUQAiApAYApIglABIACATg");
      this.shape_18.setTransform(11.7,-5,0.913,1);
  
      this.shape_19 = new cjs.Shape();
      this.shape_19.graphics.f("#272B2D").s().p("AgGCLQg2gHgXgOQgNgIgHgSIgPgqQgJgZgkg2Qgkg3gGAAIgtgqIBQgPIA0AvQA3AyANAPQANAQBCAQQAeAIBBAMQAZAEAygbQAZgOAUgPIAHBeQgCAKgPAMQgdAag9ARQg0AMgxAAQgZAAgYgDg");
      this.shape_19.setTransform(28.8,3.4,0.913,1);
  
      this.shape_20 = new cjs.Shape();
      this.shape_20.graphics.f("#272B2D").s().p("AhRAcIhJgPIgUgxQAzAaCaAAQBNgBBDgFQgHAKgSALQgkAYg5AGQgRACgVAAQgrAAg5gJg");
      this.shape_20.setTransform(34,23.4,0.913,1);
  
      this.shape_21 = new cjs.Shape();
      this.shape_21.graphics.f("#272B2D").s().p("AiWgKIAJgXQBKACDagEQgtAwh8AQIh1AHg");
      this.shape_21.setTransform(34.4,29.9,0.913,1);
  
      this.shape_22 = new cjs.Shape();
      this.shape_22.graphics.f("#1F2224").s().p("AhCEhQgcgEgigJIgRgEQgPgDgBgDIgfhBQgyhaguh5Qgsh2AJgMQAUgaBWgtQArgWAngRQBthCCJAhQBGAQAvAdIAmA5QAoBIAOBRQAMBGgMBbQgIBAgSBAIgZAFQhsATg7AGQgqAEgmAAQguAAgqgGg");
      this.shape_22.setTransform(23.2,5.2,0.913,1);
  
      this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
  
  }).prototype = getMCSymbolPrototype(lib.Body, rect = new cjs.Rectangle(-12.7,-29,77.4,73.3), [rect]);
  
  
  (lib.Belt = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});
  
      // Layer 1
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#EA8B00").s().p("Ag5AzIBmhtIAOAKIhoBrg");
      this.shape.setTransform(26.9,20.1,0.76,0.76);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#7F4B05").s().p("AhoAYQB2htgDgEIBeBIIhpBrg");
      this.shape_1.setTransform(23.4,17.8,0.76,0.76);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#5B3304").s().p("AgdCjIi7iIIDdjKIAeAJIC2B5IjHDdgAi4AaICjB2IAgAJICwjDIihhqIgPgEg");
      this.shape_2.setTransform(21.7,17.6,0.76,0.76);
  
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#A85F00").s().p("AiqAaIC8iuICZBqIiqC/g");
      this.shape_3.setTransform(22.7,18.3,0.76,0.76);
  
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#FFCF2E").s().p("AhtBXIgDABIDEi1IAZAHIAEAPIhMBJIiQBcg");
      this.shape_4.setTransform(15.4,12.4,0.76,0.76);
  
      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f("#EA8B00").s().p("AgbCWIiwh/IDDi2IAnAIICsBlIi/DSg");
      this.shape_5.setTransform(21.9,17.9,0.76,0.76);
  
      this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
  
  }).prototype = getMCSymbolPrototype(lib.Belt, rect = new cjs.Rectangle(5.2,4.2,32.9,26.8), [rect]);
  
  
  (lib.Bandage = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});
  
      // Layer 1
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#0D1011").s().p("AAABjQgoAAgegdQgdgdAAgpQAAgnAdgeQAegdAoAAQApAAAeAdQAdAeAAAnQAAApgdAdQgdAdgnAAIgDAAgAg4g2QgWAWgBAgQABAiAWAWQAXAXAhAAQAiAAAXgXQAWgWABgiQgBgggWgWQgXgXgigBQghABgXAXg");
      this.shape.setTransform(8.1,8,0.815,0.815);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#3D4344").s().p("AgjASQgMgBAagRIAagQQANgDAWAIIgTAbIgsACIgMAAg");
      this.shape_1.setTransform(5.7,2.6,0.815,0.815);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#2E3335").s().p("AAMAdQgCgCgPAAIguACQgPACAogkQAHgFATgJIAWgJQAKgDAYAXQglAmgGAAIgBgBg");
      this.shape_2.setTransform(5.6,2.9,0.815,0.815);
  
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#1F2224").s().p("Ag/A/QgagaAAglQAAgkAagaQAbgaAkAAQAlAAAaAaQAbAbAAAjQAAAlgbAaQgaAaglAAQgkAAgbgag");
      this.shape_3.setTransform(8.1,8,0.815,0.815);
  
      this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
  
  }).prototype = getMCSymbolPrototype(lib.Bandage, rect = new cjs.Rectangle(0,0,16.3,16.1), [rect]);
  
  
  // stage content:
  (lib.NinjaWalkAnimate = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});
  
      // Shild
      this.instance = new lib.R_Arm_Sword();
      this.instance.parent = this;
      this.instance.setTransform(61.4,82.9,0.609,0.609,-2,0,0,25.7,33.4);
  
      this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:33.5,rotation:2.3,x:59.2,y:78},3).to({regX:25.6,regY:33.4,rotation:6,x:57.5,y:82.8},2).to({regX:25.7,regY:33.5,rotation:1.8,x:60.6,y:77.2},3).to({regY:33.4,rotation:-2,x:61,y:78.8},1).wait(1));
  
      // Belt
      this.instance_1 = new lib.Belt();
      this.instance_1.parent = this;
      this.instance_1.setTransform(85.8,99.9,1,1,0,0,0,21.7,17.6);
  
      this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:96.1},3).to({y:99.9},2).to({y:96.1},3).to({y:98.9},1).wait(1));
  
      // Weapon
      this.instance_2 = new lib.R_SholderArmor();
      this.instance_2.parent = this;
      this.instance_2.setTransform(114.1,93.3,0.744,0.744,-7,0,0,24.3,24.2);
  
      this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:24,x:114.2,y:88},3).to({regY:24.2,x:114.4,y:94.1},2).to({x:114.1,y:87.2},3).to({y:90.1},1).wait(1));
  
      // Head
      this.instance_3 = new lib.Head();
      this.instance_3.parent = this;
      this.instance_3.setTransform(76.6,51.7,0.744,0.744,5,0,0,35.4,39);
  
      this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:46.6},3).to({y:51.7},2).to({y:46.3},3).to({y:49.4},1).wait(1));
  
      // R_Sholder
      this.instance_4 = new lib.R_Sholder();
      this.instance_4.parent = this;
      this.instance_4.setTransform(53.2,82.3,0.744,0.744,0,-18.9,161.1,12.2,18.6);
  
      this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:18.7,skewX:-8.2,skewY:171.8,x:52.7,y:76.9},3).to({regY:18.6,skewX:-5,skewY:175,x:51.3,y:80.7},2).to({regX:12,regY:18.7,skewX:-15.7,skewY:164.3,x:52.2,y:76.1},3).to({regX:12.2,regY:18.6,skewX:-18.9,skewY:161.1,x:52.9,y:78.8},1).wait(1));
  
      // Body
      this.instance_5 = new lib.Body();
      this.instance_5.parent = this;
      this.instance_5.setTransform(85.8,106.9,0.744,0.706,0,0,0,41.6,48.5);
  
      this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:0.74,y:103.5},3).to({scaleY:0.71,y:106.9},2).to({scaleY:0.74,y:102.7},3).to({scaleY:0.73,y:104},1).wait(1));
  
      // Isolation Mode
      this.instance_6 = new lib.Tail();
      this.instance_6.parent = this;
      this.instance_6.setTransform(58,44.3,1,1,0,0,0,6.2,22.3);
  
      this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleY:1,skewX:-5,x:60,y:38.2},3).to({scaleY:1,skewX:0,x:58,y:42.5},2).to({scaleY:1,skewX:4,x:56.4,y:37.9},3).to({scaleY:1,skewX:1.7,x:57.3,y:41.2},1).wait(1));
  
      // Isolation Mode
      this.instance_7 = new lib.Bandage();
      this.instance_7.parent = this;
      this.instance_7.setTransform(64.5,25.5,1,1,0,0,0,8.1,8.1);
  
      this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:64.6,y:20.2},3).to({x:64.5,y:25.1},2).to({x:64.4,y:19.5},3).to({x:64.5,y:22.8},1).wait(1));
  
      // Layer 3
      this.instance_8 = new lib.R_ForeLeg();
      this.instance_8.parent = this;
      this.instance_8.setTransform(64.3,115.7,0.794,0.753,0,15,15.7,15.1,8.7);
  
      this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:15,regY:8.5,scaleX:0.8,scaleY:0.78,skewX:-43.2,skewY:-40.2,x:75.5,y:107.5},3).to({regY:8.8,scaleX:0.73,scaleY:0.81,skewX:-25.6,skewY:-26.4,x:73.2,y:116},2).to({regX:15.1,regY:8.7,scaleX:0.81,scaleY:0.79,skewX:-3.2,skewY:0.1,x:66.2,y:114.1},3).to({regY:8.6,scaleX:0.78,scaleY:0.74,skewX:0,skewY:4.1,x:65.5,y:114.9},1).wait(1));
  
      // R_Leg
      this.instance_9 = new lib.l_Leg();
      this.instance_9.parent = this;
      this.instance_9.setTransform(58.2,127.9,0.744,0.734,0,63.5,59.2,19.5,7.9);
  
      this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:19.6,regY:7.8,scaleX:0.74,scaleY:0.77,skewX:22.9,skewY:24.3,x:78.8,y:123},3).to({regX:19.7,regY:7.9,scaleX:0.74,scaleY:0.75,skewX:-29.1,skewY:-13.7,x:81.2,y:133.8},2).to({regX:19.5,regY:7.8,scaleX:0.73,scaleY:0.74,skewX:11.2,skewY:0.8,x:65.7,y:132.7},3).to({regX:19.3,scaleX:0.72,scaleY:0.7,skewX:24.5,skewY:9.1,x:63.1,y:133.1},1).wait(1));
  
      // Plate
      this.instance_10 = new lib.L_ForeLeg();
      this.instance_10.parent = this;
      this.instance_10.setTransform(85.9,119.1,0.744,0.746,0,-17.8,-14.5,7.1,8.3);
  
      this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:12.6,regY:-0.9,scaleY:0.75,skewX:-3.4,skewY:-4.2,x:85.6,y:110.1},0).wait(1).to({skewX:0.8,skewY:-1.2,x:85,y:109.8},0).wait(1).to({regX:7.2,regY:8.3,skewX:2.5,skewY:0,x:80.4,y:116.6},0).to({regY:8.2,scaleY:0.75,skewX:11.9,skewY:20.7,x:78,y:116.2},2).to({regX:7.1,regY:8.3,scaleX:0.73,scaleY:0.68,skewX:-21.5,skewY:-19.5,x:86.8,y:114},3).to({regX:7.3,regY:8.4,scaleX:0.74,scaleY:0.75,skewX:-18.4,skewY:-22.7,y:117.3},1).wait(1));
  
      // L_Heand
      this.instance_11 = new lib.L_Heand();
      this.instance_11.parent = this;
      this.instance_11.setTransform(93.5,92.8,0.744,0.744,-22.1,0,0,7.7,51.4);
  
      this.timeline.addTween(cjs.Tween.get(this.instance_11).to({rotation:-23.1,x:103.2,y:90.8},3).to({regX:7.5,regY:51.3,rotation:-42.3,x:107.8,y:91.2},2).to({regX:7.7,rotation:-35.4,x:98.3,y:87.5},3).to({regY:51.4,rotation:-22.1,x:93.9,y:90},1).wait(1));
  
      // L_Leg
      this.instance_12 = new lib.R_Leg();
      this.instance_12.parent = this;
      this.instance_12.setTransform(91.4,130.6,0.744,0.704,0,-14.5,180,19.6,8.2);
  
      this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleY:0.77,skewX:6,x:83,y:127.9},3).to({regX:19.7,scaleY:0.7,skewX:90.8,skewY:249.7,x:75,y:122.9},2).to({regX:19.6,regY:8.3,scaleX:0.74,scaleY:0.61,skewX:15.6,skewY:196.3,x:88.7,y:122.2},3).to({regX:19.4,scaleX:0.74,scaleY:0.72,skewX:-3.6,skewY:191,x:90.4,y:127.7},1).wait(1));
  
      // l_Sholder
      this.instance_13 = new lib.L_Sholder();
      this.instance_13.parent = this;
      this.instance_13.setTransform(84.7,61.7,0.744,0.744,14.2,0,0,11.2,16.3);
  
      this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regY:16.2,rotation:-20.2,x:86.3,y:63.8},3).to({x:88.2,y:68},2).to({regY:16.1,rotation:5,x:85,y:60.8},3).to({regY:16.3,rotation:14.2,x:85.1,y:62.2},1).wait(1));
  
      // Nojnu
      this.instance_14 = new lib.Nojnu();
      this.instance_14.parent = this;
      this.instance_14.setTransform(76.1,92.7,1,1,0,0,0,47.8,27.3);
  
      this.timeline.addTween(cjs.Tween.get(this.instance_14).to({y:89.3},3).to({y:92.7},2).to({y:89.3},3).to({y:90.1},1).wait(1));
  
      // Shadow
      this.shape = new cjs.Shape();
      this.shape.graphics.f("rgba(0,0,0,0.451)").s().p("AhSBSQgfgGgbgMQgigQgOgUQgKgNAAgOIAAgBQAAgkA6gbQA7gaBRAAQBTAAA6AaQA6AbAAAkQABAPgKANQgFAHgGAGQgPAMgXALQgaAMggAGQgmAIgtAAQgsAAgmgIg");
      this.shape.setTransform(76.5,139.2);
  
      this.timeline.addTween(cjs.Tween.get(this.shape).wait(10));
  
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = rect = new cjs.Rectangle(107.2,89.3,78.5,134);
  p.frameBounds = [rect, new cjs.Rectangle(106,89.3,79.2,133.9), new cjs.Rectangle(104.9,87.6,83.6,135.6), new cjs.Rectangle(103.4,84.2,91.9,139), new cjs.Rectangle(102.3,88.5,92.4,134.7), new cjs.Rectangle(100.3,89.3,101,134), new cjs.Rectangle(102.4,89.2,92,134), new cjs.Rectangle(104,87.4,87.1,135.8), new cjs.Rectangle(105.1,83.9,86.5,139.4), new cjs.Rectangle(106.9,87,79,136.3)];
  // library properties:
  lib.properties = {
      id: 'CC71CEB0FACE1043B81845BD1BAEBA10',
      width: 150,
      height: 150,
      fps: 14,
      color: "#999999",
      opacity: 1.00,
      webfonts: {},
      manifest: [],
      preloads: []
  };
  
  
  
  // bootstrap callback support:
  
  (lib.Stage = function(canvas) {
      cjs.Stage.call(this, canvas);
  }).prototype = p = new cjs.Stage();
  
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
  an.compositions['CC71CEB0FACE1043B81845BD1BAEBA10'] = {
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
  
  
  
}
