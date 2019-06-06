module.exports = function (cjs, an) {

  var p; // shortcut to reference prototypes
  var lib={};var ss={};var img={};
  var rect; // used to reference frame bounds
  lib.ssMetadata = [];
  
  
  // symbols:
  
  
  
  (lib.Tween1 = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});
 
    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#0000CC").s().p("AgeK7QgQgDABgdQABgkADgSQACgMAGgSIAJgeQAOgwAGhOQAIhlAChtQAChegFiWQgFjDAAgxIAAjKIACjGQAAgUAIgFQAGgEAJADQAHADAEAGQAGAKgBAUIgBCkQgCCFABBfIAHEKQAEChgDBpQgBAygDAyQgHBpgNA8IgQBBQgIAmgCAbQgBATgDAHQgDAGgGAEQgEADgFAAIgDgBg");
    this.shape.setTransform(-0.0049,0.0312);
  
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = rect = new cjs.Rectangle(-4.6,-69.9,9.2,140);
  p.frameBounds = [rect];
  
  
  (lib.Scene_1_Layer_1 = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});
  
    // Layer_1
    this.instance = new lib.Tween1("synched",0);
    this.instance.parent = this;
    this.instance.setTransform(8.7,76.9);
  
    this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.5461,rotation:90,x:50.2,y:140.65},7).wait(1));
  
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
    this.frame_7 = function() {
      this.___loopingOver___ = true;
    }
  
    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(1));
  
    // Layer_1_obj_
    this.Layer_1 = new lib.Scene_1_Layer_1();
    this.Layer_1.name = "Layer_1";
    this.Layer_1.parent = this;
    this.Layer_1.setTransform(8.7,76.9,1,1,0,0,0,8.7,76.9);
    this.Layer_1.depth = 0;
    this.Layer_1.isAttachedToCamera = 0
    this.Layer_1.isAttachedToMask = 0
    this.Layer_1.layerDepth = 0
    this.Layer_1.layerIndex = 0
    this.Layer_1.maskLayerName = 0
  
    this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(8));
  
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = rect = new cjs.Rectangle(54.1,82,9.2,140);
  p.frameBounds = [rect, new cjs.Rectangle(46.1,97.6,36.2,126.6), new cjs.Rectangle(40.7,115.8,58.7,108.1), new cjs.Rectangle(38.5,135.9,75.2,86.1), new cjs.Rectangle(39.7,156.7,84.6,62.5), new cjs.Rectangle(44.2,177.6,87.6,39), new cjs.Rectangle(51.8,197.4,84.4,18.6), new cjs.Rectangle(62,211.1,76.4,9.2)];
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
  
  an.Layer = new function() {
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
      var layer = new cjs.MovieClip();
      layer.name = layerName;
      layer.depth = zDepth;
      layer.layerIndex = 0;
      timeline.addChild(layer);
    }
  }
}