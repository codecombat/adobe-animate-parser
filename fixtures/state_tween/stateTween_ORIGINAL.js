(function (cjs, an) {

  var p; // shortcut to reference prototypes
  var lib={};var ss={};var img={};
  var rect; // used to reference frame bounds
  lib.ssMetadata = [];
  
  
  // symbols:
  
  
  
  (lib.Tween3 = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});
  
    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#990000").s().p("AACBEQgLgCgIgWIAAgDQgNACgKgBQgNgBgHgIQgEgFAAgIQABgIAGgFQAFgEAIgBIAPgBIAGgBQgCgTABgYQABgPAGgGQAGgFAIACQAHACAFAGQAIAJgBATIgBAYQAOgDAJAAQALAAAHAFQAJAFgBALQAAALgJAGQgFADgHABIgNABIgGAAQADAMgDAIQgDAHgGAFQgEADgGAAIgDAAg");
    this.shape.setTransform(7.4023,-27.5695);
  
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#00CC00").s().p("AhwJVQgGgFgCgIQgDgLAFgUQAOg+AChxQAEh8AIg0QADgVAQhIQANg5ADgkQAFhFgUhFQgFgQgPgoQgNgkgFgVQgKgngDgxQgCgfABg6IAChsQAAgdAPgEQAGgBAHAEQAGAEADAGQAEAJgBASIgCBXQgBA8ABAeQACAyAKAmQAFAUAMAgIASAzQAbBZgJBcQgEAhgMA4QgOBAgEAaQgIAxgDCEQgDBzgQBBQgFAVgMADIgEABQgFAAgFgEgABcEeQgohZgGhyQgFhcARh1IAMhOQAHguACghQAGhZgZhCQgPgHgVANQgSASgKAGQgYg9AMhAQAHggAOgRQAJgLANgEQAOgFAMADQAeAJAMA3QAaB8ACBgQABBPgPBdQgLBBgFAhQgIA3AEApQADAXAHAiIALA5QAMBEgSAtQgFAKgEAAIgDgCg");
    this.shape_1.setTransform(6.9842,-2.3454);
  
    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
  
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = rect = new cjs.Rectangle(-5.3,-62.4,24.7,120.2);
  p.frameBounds = [rect];
  
  
  (lib.Scene_1_Head = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});
  
    // Head
    this.instance = new lib.Tween3("synched",0);
    this.instance.parent = this;
    this.instance.setTransform(34.1,80.25);
  
    this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,scaleY:0.2481,rotation:45,x:52,y:112.35},3).wait(1));
  
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
    this.frame_3 = function() {
      this.___loopingOver___ = true;
    }
  
    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).wait(3).call(this.frame_3).wait(1));
  
    // Head_obj_
    this.Head = new lib.Scene_1_Head();
    this.Head.name = "Head";
    this.Head.parent = this;
    this.Head.setTransform(41.1,77.9,1,1,0,0,0,41.1,77.9);
    this.Head.depth = 0;
    this.Head.isAttachedToCamera = 0
    this.Head.isAttachedToMask = 0
    this.Head.layerDepth = 0
    this.Head.layerIndex = 0
    this.Head.maskLayerName = 0
  
    this.timeline.addTween(cjs.Tween.get(this.Head).wait(4));
  
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = rect = new cjs.Rectangle(78.8,92.8,24.7,120.2);
  p.frameBounds = [rect, new cjs.Rectangle(74.4,123.3,42.3,83.7), new cjs.Rectangle(77.7,149.9,46.7,50.5), new cjs.Rectangle(88.5,174,35,30.2)];
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