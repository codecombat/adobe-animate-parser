(function (cjs, an) {

  var p; // shortcut to reference prototypes
  var lib={};var ss={};var img={};
  lib.ssMetadata = [];


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


  (lib.heart_Layer_1 = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FF3300").s().p("ABKPjQgMgBgCgOQgDgOAGgNQARgiAngmQAugnAVgVQgwAGgyADQhKAEgqgOQgpgOg9gvQjCiYjxjyQhZhagxg8QhGhXgmhTQg8iCAGiVQAGiWBIh8QAohFA3g0QA6g2BFgdQBWgjBoAEQBEACApAYQAhATAbAoQASAbAWAzQAnBXAmBeQAKhGAohTQBWi6Cjh5QCqh+DBgJQBCgDA0AOQA/ASAlAoQAxAzAQBnQAmDohpEhQgmBohDCMIh2DtQiTE0gKASQhBB9hHBbQANAEABAKQABAKgKAGQgIAFgMACIgRADQgRAVgSASIg5A7QggAigSAeQgMAVgMAAIgBgBg");
    this.shape.setTransform(3.1009,2.9015);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

  }).prototype = getMCSymbolPrototype(lib.heart_Layer_1, null, null);


  (lib.heart = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // Layer_1_obj_
    this.Layer_1 = new lib.heart_Layer_1();
    this.Layer_1.name = "Layer_1";
    this.Layer_1.parent = this;
    this.Layer_1.setTransform(3.1,2.9,1,1,0,0,0,3.1,2.9);
    this.Layer_1.depth = 0;
    this.Layer_1.isAttachedToCamera = 0
    this.Layer_1.isAttachedToMask = 0
    this.Layer_1.layerDepth = 0
    this.Layer_1.layerIndex = 0
    this.Layer_1.maskLayerName = 0

    this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

  }).prototype = getMCSymbolPrototype(lib.heart, new cjs.Rectangle(-83.5,-96.6,173.3,199.1), null);


  (lib.Scene_1_Layer_2 = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // Layer_2
    this.instance = new lib.heart();
    this.instance.parent = this;
    this.instance.setTransform(436,253.05,1,1,0,0,0,3.1,2.9);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

  }).prototype = getMCSymbolPrototype(lib.Scene_1_Layer_2, null, null);


  (lib.Scene_1_Layer_1 = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});

    // Layer_1
    this.instance = new lib.heart();
    this.instance.parent = this;
    this.instance.setTransform(160,160.05,1,1,0,0,0,3.1,2.9);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

  }).prototype = getMCSymbolPrototype(lib.Scene_1_Layer_1, null, null);


// stage content:
  (lib.duplicate_symbol_test_HTML5 = function(mode,startPosition,loop) {
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

    // Layer_2_obj_
    this.Layer_2 = new lib.Scene_1_Layer_2();
    this.Layer_2.name = "Layer_2";
    this.Layer_2.parent = this;
    this.Layer_2.setTransform(436,253.1,1,1,0,0,0,436,253.1);
    this.Layer_2.depth = 0;
    this.Layer_2.isAttachedToCamera = 0
    this.Layer_2.isAttachedToMask = 0
    this.Layer_2.layerDepth = 0
    this.Layer_2.layerIndex = 0
    this.Layer_2.maskLayerName = 0

    this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(1));

    // Layer_1_obj_
    this.Layer_1 = new lib.Scene_1_Layer_1();
    this.Layer_1.name = "Layer_1";
    this.Layer_1.parent = this;
    this.Layer_1.setTransform(160,160.1,1,1,0,0,0,160,160.1);
    this.Layer_1.depth = 0;
    this.Layer_1.isAttachedToCamera = 0
    this.Layer_1.isAttachedToMask = 0
    this.Layer_1.layerDepth = 0
    this.Layer_1.layerIndex = 1
    this.Layer_1.maskLayerName = 0

    this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(393.4,300.5,129.30000000000007,52.10000000000002);
// library properties:
  lib.properties = {
    id: '3D00C79BC2354FE0B68BB79CD8B9E59F',
    width: 640,
    height: 480,
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
  an.compositions['3D00C79BC2354FE0B68BB79CD8B9E59F'] = {
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
