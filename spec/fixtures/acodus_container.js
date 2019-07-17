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
  
  
  (lib.Group = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});
  
    // Layer_1
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#84F8FD").s().p("AgUAWQgJgJAAgNQAAgMAJgIQAIgKAMABQANgBAIAKQAJAIAAAMQAAANgJAJQgIAIgNABQgMgBgIgIg");
    this.shape.setTransform(13.225,156.3);
  
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#84F8FD").s().p("AgcAiQgMgKgDgOIhlAAQgBAJgGAFQgHAHgJgBQgKABgHgIQgHgGAAgLQAAgIAHgIQAHgGAKAAQAIgBAHAGQAGAFACAIIBjAAIAAgCQAAgRANgNQANgNASABQARgBAMANQANANAAARIAAACIBoAAQACgIAGgFQAHgGAIABQAKAAAHAGQAHAIAAAIQAAALgHAGQgHAIgKgBQgJABgGgHQgHgFgBgJIhpAAQgEAOgLAKQgMAKgOgBQgPABgMgKg");
    this.shape_1.setTransform(224.775,88.75);
  
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#84F8FD").s().p("AgdAfQgNgNAAgSQAAgRANgNQAMgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
    this.shape_2.setTransform(224.525,58.525);
  
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#84F8FD").s().p("Ai+BUQgKgJAAgOQAAgNAKgKQAJgJANAAQAVAAAJATIDdh2QACgKAGgGQAIgHAKAAQALAAAHAIQAJAIgBALQAAAEgBAGIAcAcQAHgEAGAAQALAAAIAIQAHAIAAALQAAAKgHAIQgIAHgLAAQgLAAgIgHQgIgIABgKQgBgHAFgHIgcgaQgJAFgHAAQgJAAgHgFQgGgFgDgJIjbB2IAAACQAAAOgJAJQgKAKgOAAQgNAAgJgKg");
    this.shape_3.setTransform(222.35,9.375);
  
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#84F8FD").s().p("AstAOIAAgbIZbAAIAAAbg");
    this.shape_4.setTransform(111.375,167.5);
  
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#84F8FD").s().p("AgPIiIABxDIAeAAIAARDg");
    this.shape_5.setTransform(1.575,78.875);
  
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#84F8FD").s().p("AuUAKIABgUIcoAAIAAAUg");
    this.shape_6.setTransform(116.4,6.1);
  
    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
  
  }).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,244,168.9), null);
  
  
  // stage content:
  (lib.Acodus = function(mode,startPosition,loop) {
    this.initialize(mode,startPosition,loop,{});
  
    // Shapes
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#84F8FD").s().p("ADrA5IgKgCIAAgLIABAAIAJACQAFACAGAAQAGAAAEgCIAFgDIADgGIACgHIAAgGIgKAGQgEACgIAAQgLAAgIgIQgGgJAAgPQAAgIACgGQACgGAEgFQAEgEAGgCQAGgCAFgBQAGABAEABIAIAEIAAgEIALAAIAAA6QAAAQgIAIQgHAIgRAAIgKgBgADrgRQgFAGAAALQAAALAEAFQAEAGAJAAQAEAAAGgCIAJgFIAAgiIgIgEIgIgBQgJABgGAGgAqrA5IgGgBIAAgLIAAAAIAFACIAGABIAGgBIAEgDQABgDABgEIAAg7IgOAAIAAgKIAZAAIAABDQAAALgGAGQgFAGgKAAgALoA5IAAgBIAJgKQAEgFAEgHQADgIACgIQACgIAAgKQAAgJgCgJIgFgQQgEgHgEgFQgFgHgEgDIAAgBIANAAQAKAMAGAOQAGAOAAARQAAARgGAOQgGAOgKAMgABEA5QgKgMgGgOQgGgOAAgRQAAgRAGgOQAGgOAKgMIANAAIAAABQgFADgEAHQgEAFgEAHIgFAQQgDAJAAAJQAAAKADAIQACAIADAIQAEAHAEAFIAJAKIAAABgAMiA2IAKglIAPAAIgQAlgAEvAcQgFgGgBgMIAAgqIALAAIABAuIACAFQABADADABQADABAFABQAEgBAFgCQAEgCAFgDIAAgxIALAAIAABBIgLAAIAAgHIgKAHQgGACgGAAQgKAAgGgHgABlAdQgFgGAAgJQgBgHAEgFQADgEAGgDQAGgCAJgBIARgBIAAgCIgBgGIgEgEIgGgCIgGgBIgKACIgLADIgBAAIAAgLIAJgCIANgBIAMABQAFABADADQAFADACAEQABAEAAAHIAAArIgLAAIAAgHIgEADIgLAFIgIABQgJAAgHgGgACAAAIgLABQgEABgDAEQgDACAAAGQAAAFADADQAEACAGABQAGAAAGgCIAIgGIAAgRgAgZAaQgHgJAAgQQABgIACgGQACgGAEgFQAEgFAFgCQAFgCAHgBQADABAFABIAIADIAAgcIALAAIAABaIgLAAIAAgHIgKAHQgEACgGAAQgMAAgHgJgAgPgRQgGAHABAKQAAAMADAGQAEAHAKAAQADAAAFgCIAJgGIAAgkIgIgEIgGAAQgKAAgFAGgAhgAaQgJgKAAgQQAAgPAJgJQAIgKAOAAQANAAAJAKQAIAJAAAPQAAAQgIAKQgJAJgNAAQgOAAgIgJgAhYgRQgFAFAAAMQAAAMAFAHQAFAGAJABQAIgBAGgGQAFgHAAgMQAAgMgFgFQgFgHgJAAQgJAAgFAHgAraAiIgIgEIgBADIgKAAIAAhaIALAAIAAAgQAFgEAEgCQAGgCAGgBQAMABAHAIQAGAJAAAQQABAIgDAHQgCAGgEAFQgFAEgFADQgEACgGAAQgGAAgEgBgArZgUIgJAEIAAAlQAFACADABIAIABQAIAAAGgGQAFgGAAgNQAAgKgEgHQgDgGgKAAQgEAAgFADgAsyAaQgJgKAAgQQAAgPAJgJQAIgKAOAAQAOAAAIAKQAIAJAAAPQAAAQgIAKQgIAJgOAAQgOAAgIgJgAsqgRQgFAFAAAMQAAAMAFAHQAFAGAJABQAJgBAFgGQAFgHAAgMQAAgMgFgFQgFgHgJAAQgJAAgFAHgAKxAhIgKgEIAAgMIABAAQAFADAGADQAHACAFABQAIgBADgCQAFgDAAgEQAAgFgCgCQgCgBgHgBIgNgEQgIgCgEgDQgEgFAAgGQAAgEACgDQACgEADgDQAEgDAEgCQAGgBAFAAIANABIAKAEIAAALIgBAAQgFgCgFgCQgHgDgFAAQgGAAgFADQgDACAAAEQgBAFADABQADADAFABIANADQAIACAEACQAEAFAAAHQAAAJgIAGQgGAFgOABQgHgBgGgBgAKCAdQgGgGABgMIAAghIgIAAIAAgKIAIAAIAAgTIAKAAIAAATIAYAAIAAAKIgYAAIABAlQAAADABACIAEAEIAHABIAFgBIAEgBIACAAIAAAKIgHABIgHABQgKgBgFgFgAHuAaQgJgJAAgRQAAgPAJgJQAJgKAOAAQANABAIAHQAGAIABAPIAAAEIgxAAQABAHABAEQACAEADADQADADAFACQADABAGAAQAGAAAHgCQAHgDADgDIAAAAIAAAMIgLAEIgMACQgQAAgKgJgAIWgGQAAgJgEgEQgFgFgJAAQgIAAgFAFQgGAFgBAIIAmAAIAAAAgAjYAdQgGgGAAgMIAAghIgIAAIAAgKIAIAAIAAgTIALAAIAAATIAXAAIAAAKIgXAAIABAlQAAADABACIADAEIAIABIAFgBIAEgBIABAAIAAAKIgHABIgGABQgLgBgEgFgAkgAaQgKgJAAgRQAAgPAJgJQAJgKAOAAQANABAIAHQAGAIAAAPIAAAEIgwAAQABAHABAEQACAEADADQADADAFACQADABAGAAQAGAAAHgCQAHgDADgDIAAAAIAAAMIgLAEIgMACQgQAAgJgJgAj5gGQAAgJgEgEQgFgFgJAAQgIAAgFAFQgGAFgBAIIAmAAIAAAAgAnvAdQgFgGAAgMIAAghIgHAAIAAgKIAHAAIAAgTIALAAIAAATIAXAAIAAAKIgXAAIABAlQAAADABACIADAEIAIABIAFgBIAEgBIABAAIAAAKIgHABIgGABQgLgBgFgFgAokAhQgGgCgEgFQgEgEgDgGQgDgHABgJQgBgPAKgJQAJgJAOAAIALABIAKAFIAAALIgBAAIgKgFQgFgDgGAAQgJAAgFAHQgGAGAAALQAAAMAGAGQAFAHAJAAIAHgBIAHgCIAHgFIABAAIAAAMIgKAEQgGABgFABQgIAAgFgCgAp1AaQgKgJAAgRQAAgPAJgJQAJgKAPAAQANABAHAHQAHAIAAAPIAAAEIgwAAQAAAHABAEQADAEACADQADADAFACQAEABAFAAQAHAAAGgCQAIgDACgDIABAAIAAAMIgMAEIgLACQgRAAgJgJgApOgGQABgJgFgEQgEgFgJAAQgJAAgFAFQgFAFgBAIIAlAAIAAAAgAJcAhIAAgsIgCgHQgCgCgCgBQgDgCgEAAQgFAAgEADQgGACgEADIAAAwIgLAAIAAhBIALAAIAAAIQAFgFAGgCQAFgCAGgBQAKABAGAGQAGAHgBALIAAAqgAHKAhIAAgkIAAgIIgCgGIgEgEQgCgCgGAAQgEAAgFADIgJAFIAAAEIAAADIAAApIgLAAIAAgsQAAgFgCgBQgBgDgCgBQgDgCgEAAQgFAAgEADIgJAFIAAAwIgLAAIAAhBIALAAIAAAIQAFgFAFgCQAFgCAFgBQAHAAAFAEQAEADADAEQAHgFAFgCQAFgEAHAAQALAAAFAHQAFAHAAALIAAAqgACsAhIAAhBIALAAIAAAKQAHgFAFgCQAFgDAFAAIAEAAIAEACIAAALIAAAAIgFgBIgFAAQgGAAgFACIgJAGIAAAtgAiEAhIAAgsIgCgHQgCgCgCgBQgDgCgEAAQgFAAgEADQgFACgFADIAAAwIgLAAIAAhaIALAAIAAAhQAFgFAGgCQAFgCAGgBQAKABAGAGQAGAHAAALIAAAqgAlFAhIAAgkIAAgIIgCgGIgEgEQgDgCgFAAQgEAAgFADIgJAFIAAAEIAAADIAAApIgLAAIAAgsQAAgFgBgBQgCgDgDgBQgCgCgEAAQgFAAgEADIgJAFIAAAwIgMAAIAAhBIAMAAIAAAIQAEgFAGgCQAFgCAFgBQAHAAAFAEQAEADADAEQAGgFAGgCQAFgEAHAAQALAAAFAHQAFAHAAALIAAAqgAnBAhIAAgQIAOAAIAAAQgAMpgPIAAgRIAPAAIAAARgAqagrIAAgLIALAAIAAALg");
    this.shape.setTransform(140.9,97.25);
  
    this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
  
    // Light
    this.instance = new lib.Group();
    this.instance.parent = this;
    this.instance.setTransform(156.15,94.55,1,1,0,0,0,122,84.5);
  
    this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
  
    // Acodus
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#000000").s().p("AgUAVQgJgIAAgNQAAgMAJgJQAIgIAMgBQANABAIAIQAJAJAAAMQAAANgJAIQgIAKgNgBQgMABgIgKg");
    this.shape_1.setTransform(47.375,166.35);
  
    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#000000").s().p("AgcAiQgMgKgDgOIhlAAQgBAJgGAFQgHAGgJABQgKgBgHgGQgHgIAAgKQAAgIAHgIQAHgGAKgBQAIAAAHAGQAGAFACAHIBjAAIAAgBQAAgRANgMQANgOASAAQARAAAMAOQANAMAAARIAAABIBoAAQACgHAGgFQAHgGAIAAQAKABAHAGQAHAIAAAIQAAAKgHAIQgHAGgKABQgJgBgGgGQgHgFgBgJIhpAAQgEAOgLAKQgMAJgOAAQgPAAgMgJg");
    this.shape_2.setTransform(258.925,98.8);
  
    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#000000").s().p("AgdAfQgNgNAAgSQAAgRANgNQAMgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgMgMg");
    this.shape_3.setTransform(258.675,68.575);
  
    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#000000").s().p("Ai/BUQgKgJAAgOQAAgNAKgKQAKgJAOAAQAUAAAJATIDdh2QABgKAIgGQAHgHAKAAQALAAAIAIQAHAIABALQgBAEgCAGIAdAcQAGgEAHAAQALAAAIAIQAIAIAAALQAAAKgIAIQgIAHgLAAQgLAAgIgHQgHgIAAgKQAAgHAEgHIgdgaQgHAFgIAAQgJAAgGgFQgIgFgCgJIjcB2IABACQAAAOgKAJQgJAKgNAAQgOAAgKgKg");
    this.shape_4.setTransform(256.5,19.425);
  
    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f("#000000").s().p("AstAOIAAgbIZbAAIAAAbg");
    this.shape_5.setTransform(145.525,177.55);
  
    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#000000").s().p("AgPIiIABxDIAeAAIAARDg");
    this.shape_6.setTransform(35.725,88.925);
  
    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics.f("#000000").s().p("AuUAKIABgTIcoAAIAAATg");
    this.shape_7.setTransform(150.55,16.15);
  
    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics.f("#8A7648").s().p("AAVAZIgpgxQAPALASAKQACAOAHAOg");
    this.shape_8.setTransform(267.45,128.075);
  
    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics.f("#C1AF64").s().p("AgHALQgEgUgJgPQAPALASAKQACAOAHAOQgLgHgSgHg");
    this.shape_9.setTransform(267.45,128.075);
  
    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics.f("#8A7648").s().p("AgMABQAIgIARgXIgYA8QABgQgCgNg");
    this.shape_10.setTransform(249.675,128.1);
  
    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics.f("#C1AF64").s().p("AgMAAQAIgHARgXQgEAQACAWQgQANgGAKQABgRgCgOg");
    this.shape_11.setTransform(249.675,128.125);
  
    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics.f("#8A7648").s().p("AguhHIAIgDIAFADIAhAaIAGAGIACAGQAKAnAcBFg");
    this.shape_12.setTransform(269.7,120.825);
  
    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics.f("#C1AF64").s().p("AAbAxQgagYgQgPIgOgKIgNgJQgCgEAAgKIAAgDIAAgBIAAAAIgDgeQAAgPgCAAQADABAEgCIAGgDIAFADIAhAbIAGAFIACAGQAGAYAMAgIAVA3g");
    this.shape_13.setTransform(269.5,121);
  
    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics.f("#8A7648").s().p("AgHghIACgGQADgEACgCIAigaIAEgDIAIADIhbCSQAbhCALgqg");
    this.shape_14.setTransform(247.725,120.825);
  
    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics.f("#C1AF64").s().p("AgbAVQAMgfAGgZIACgGQADgDAEgCIAggbIAFgDIAGADQAEACACgBQgBAAgBAPIgCAeIAAAAIAAABIAAADIgDAOIgMAJIgOAKQgPAMgaAbIgXAbIAVg3g");
    this.shape_15.setTransform(247.9,121);
  
    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics.f("#C1AF64").s().p("AhRAVQAWgZArgQQAsgQA2gBIAAAOIgIAAQgKAAgIABQgaACgTAJQgpALgZAbIgIAJIAAACIgSgRg");
    this.shape_16.setTransform(249.575,92.65);
  
    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics.f("#C1AF64").s().p("AAXAfQgjgLgcgPQgTgOgLgMIAOgNQAMAXAjAOQAiAPAuABIAAAQQgWgBgagDg");
    this.shape_17.setTransform(250.95,104.55);
  
    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics.f("#C1AF64").s().p("Ag4AgIAAgOQAkgFAagNQAagNALgSIAMAIIACACQgiAZgUALQgfARgbAAIgBAAg");
    this.shape_18.setTransform(267.55,104.4757);
  
    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics.f("#C1AF64").s().p("AAYAHQg1gigsABIAAgPQA1AGAnATQAoASAPAbIgEAEIgLAJQgKgUgZgPg");
    this.shape_19.setTransform(269.425,93.1);
  
    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics.f("#8A7648").s().p("Ah0BRIAAgBQABAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgMgFIAKgSQACgCgHAAIgLAQQgygdAAgoQAAgpA4gfQA4geBNAAQBPAAA4AeQA3AfAAApQAAAYgTAWQgTAUgiAOQgKgDACAGIAAABIgVAHIgCgMQgBgCgFAAQgBAAgBABQgBAAAAAAQgBAAAAABQAAAAAAAAIABAPQgnAJgnAAQhBAAgzgWgAhfg1QgUALgMANQgLAPAAAOQAAAfApAWQAoAWA5AAQA6AAApgWQAogWAAgfQAAghgvgWIABgOIgLAKQglgPgtAAQgbAAgcAHIgCgQIgCAQQgQAEgQAIIgFgIg");
    this.shape_20.setTransform(258.625,99);
  
    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics.f("#8A7648").s().p("AgUAYIApgvIABgBQgHAOgCAOQgNAHgUAOg");
    this.shape_21.setTransform(267.45,73.35);
  
    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics.f("#C1AF64").s().p("AgHgKQATgHAKgHQgHAOgCAOQgNAHgUAOQAJgPAEgUg");
    this.shape_22.setTransform(267.45,73.35);
  
    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics.f("#8A7648").s().p("AgMAAQACgOgBgQIAYA8IAAABQgOgUgLgLg");
    this.shape_23.setTransform(249.675,73.325);
  
    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics.f("#C1AF64").s().p("AgMAAQACgOgBgQQAHALAPAMQgCAVAEARQgOgUgLgLg");
    this.shape_24.setTransform(249.675,73.325);
  
    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics.f("#8A7648").s().p("AguBIIBciSQgeBMgIAgIgCAGIgGAGIghAaQgCADgDAAIgBAAQgCAAgFgDg");
    this.shape_25.setTransform(269.7,80.5786);
  
    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics.f("#C1AF64").s().p("AgqBKQgEgCgDABQACAAAAgPIADgeIAAAAIAAgEQAAgKACgDQADgEAKgGIAOgKQASgQAYgYIAWgaIgVA3QgMAfgGAZIgCAGIgGAGIghAaQgCACgDAAIgGgCg");
    this.shape_26.setTransform(269.5,80.425);
  
    this.shape_27 = new cjs.Shape();
    this.shape_27.graphics.f("#8A7648").s().p("AAmBLQgCAAgCgDIgigaQgCgCgDgEIgCgGQgJgjgdhJIBbCSQgFADgCAAIgBAAg");
    this.shape_27.setTransform(247.725,80.5786);
  
    this.shape_28 = new cjs.Shape();
    this.shape_28.graphics.f("#C1AF64").s().p("AAgBKIgggaQgEgCgDgEIgCgGQgGgZgMgfIgVg3IAXAaQAZAaAQAOIAVAOIAFAGIADANIAAACIAAACIAAAAIACAeQABAPABAAQgCgBgEACIgGACQgDAAgCgCg");
    this.shape_28.setTransform(247.9,80.425);
  
    this.shape_29 = new cjs.Shape();
    this.shape_29.graphics.f("#251D1D").s().p("ABVFZIgOiGIhJCBIgLAMQgHAJgLABQgLACgJgHIgyglQgIgFgBgLQAAgKAHgHIAvgtIgCoQQAAgdAPgbQAPgaAagOIBIAAQACAMALAIQAFAFAFABIAAERIgIBEIAXC/IADDPgAgUFfQAHgHAIgOIALgYQAFgDABgCIAfgwQAVgiAIgaIAAAAIAEACQADAOACAcIABAwQABAcAGASQACAHAHgBQAHgCABgGQAEgmgGhKQgBgRgIgTIgOgiIgDgKIAAgBQACghgFhBQgEgwAAgyQAKgUgDghIAAAAQAGgUgFgbQAQgngThKQAAgEgFgBQgHgKgXgDQgdgEgEgDQgHgDgFADQgBAAAAgBQgBAAAAAAQgBAAgBAAQAAAAgBAAQgDAAgBADIgBABQgEADgDAEQgCACgBAFQgKALgBAUQAAADADAEQgDAEAAAFQgHARgBAZQgBAVADAVQAAASACAZQgCAQACAKQAAADACABQgECMAFBPIgDAHQgDAdADBIIgbAcQgQASgBANQgBAMALAOQAKAOAMADQAGACAEgBQAMAHAJgJg");
    this.shape_29.setTransform(246.0733,139.1);
  
    this.shape_30 = new cjs.Shape();
    this.shape_30.graphics.f("#251D1D").s().p("AgNAAIAGgNQABgFgBgDIASgNQgBAHADAIIAAACIADAHQgBAKgFAIQgEAHgIAIIgNAMIACgjg");
    this.shape_30.setTransform(249.925,130.075);
  
    this.shape_31 = new cjs.Shape();
    this.shape_31.graphics.f("#251D1D").s().p("AgnBMQgCgEgFgCIgBgEQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAIAAgEQAFgBABgFQAGgVAHgQQACgEAAgEIABgCIAFgMIAFgDQAFgFALgQQAGAAAEgEQAGgGAHgMIACgBQAGgCADgEQAEgGAAgIQADgCAAgCIABgBQAEAkgBAWQgCAQgGAKQgFAHgOANIgfAZQgVAQgHAOg");
    this.shape_31.setTransform(248.1438,122.175);
  
    this.shape_32 = new cjs.Shape();
    this.shape_32.graphics.f("#251D1D").s().p("AhOCwIAcjAIgNhDIgBh7IAAiVQATgIADgTIBGAAQAaAOAOAaQAPAaAAAeIgCIbQgBAegPAXQgQAZgaALIhCiGIgOCKIgYAlgAgykXQgEAHAFAEQgIAEACAIQACANABAjQgBAfAGARIAAAnQgBAbAEAPQABAHACADQAAAMAFARIADAsIABAGIgLBMQgHAugIAbQgEADAAAEQgIAngBAuQAAAiACA1QABABAAAAQAAABAAAAQABABAAAAQABAAAAAAQABAAABAAQAAAAABgBQAAAAAAgBQAAAAABgBIAEhGQADgoAHgcIAKAQQABADACAEIACAGIACAEIACACQAVApAKALQAHARAGAHQAWAUARgYQAKgNAAgWQADgDABgFIAAgFQALhGgUhNIgBgeQAFgEABgEIAAgFIAAAAIABgIQAFgSgCgUIgCgGIABgKQAGgcgBghQgBgHgEgEIABgPQABgEgDgDIACgGIgBgIQAEAAADgCQAEgEgBgEIgDglIgDglQgCgWgEgQQAGgMAAgVIgDgiQAAgFgDgEQAAgJgHgGQgHgGgIAGQgGAEgOAEQgPAEgGADIgUAKQgMAEgMAAQgFAAgDAGg");
    this.shape_32.setTransform(268.4,139.3);
  
    this.shape_33 = new cjs.Shape();
    this.shape_33.graphics.f("#251D1D").s().p("AgTANQgCgFgBgIIgDgfIAAgFQAIAJARAPQgBAIAGAEIAJADIAFAKQAAAEAFABIACATQgRgSgcgGg");
    this.shape_33.setTransform(267.775,129.475);
  
    this.shape_34 = new cjs.Shape();
    this.shape_34.graphics.f("#251D1D").s().p("AAAA3IgUgTQgMgLgFgLQgIgQAAgZQABgcAAgOIAbARQAPALAIAMIAFADIACADIASAqQALAaAEATIAAACIgCAAIgKAEIgigPg");
    this.shape_34.setTransform(269.55,122);
  
    this.shape_35 = new cjs.Shape();
    this.shape_35.graphics.f("#332A29").s().p("ABVFZIgOiGIhJCBIgLAMQgHAJgLABQgLACgJgHIgyglQgIgFgBgLQAAgKAHgHIAvgtIgCoQQAAgdAPgbQAPgaAagOIBIAAQACAMALAIQAFAFAFABIAAERIgIBEIAXC/IADDPg");
    this.shape_35.setTransform(246.0733,139.1);
  
    this.shape_36 = new cjs.Shape();
    this.shape_36.graphics.f("#332A29").s().p("AhOCwIAcjAIgNhDIgBh7IAAiVQATgIADgTIBGAAQAaAOAOAaQAPAaAAAeIgCIbQgBAegPAXQgQAZgaALIhCiGIgOCKIgYAlg");
    this.shape_36.setTransform(268.4,139.3);
  
    this.shape_37 = new cjs.Shape();
    this.shape_37.graphics.f("#251D1D").s().p("AgWAEQgNgEgJgGQgHgDADgCIAHAAIAHABIALACIAMAHIAKACIAHAAIAJADQAKADAPACQAGABAEgBIgMACIgNABIgDAAQgWAAgWgIg");
    this.shape_37.setTransform(119.2042,184.5764);
  
    this.shape_38 = new cjs.Shape();
    this.shape_38.graphics.f("#251D1D").s().p("AuxAwQgIAAgGgEIh0hLQgBAAAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAMAhigAJQAEAAABAEQABAEgDACIh3BQQgHAFgJAAgAsMApIA2AFQAJAAAEgGIApgDQAXAFAdAAQARABAlgDQAFAAAEgDQAfADAqAAIBKgCIA8ABQAlAAAYgEQA4AHBbgLQAcALAsABQAZABAwgCQA7ABAjgCQA1gDAogGQAEgBACgCQAJAGAQgEIADAAQALAFAGABQALABAUgGIANgBQAXAFAMABQAOAAARgIIAEABQAEAIAJABQApADBFgEQBSgEAdgBQAdABBAgCQA8gCAhABQA1ANAxgIIASgDQAAABABAAQAAAAABAAQABABAAAAQABAAAAgBIARABQAKABAHgDQAIgCAKgHIARgKIAkgRQAVgLAMgMQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAQgBAAAAAAIgSACQgEgFgIAAQgtAEgXABQglADgggCQgWgBggAGQgFgFgJABQgIACgEAGIgBAAQADgIgOABQgHgDgIAEQgDgCgEAAQgSgCgTANQgCgDgEAAQgPgEgSABQg8ADgfgGQhCgKglAHQgJACgRAFQgRAGgKABIgDABIgMgCQgngGgWgBQgggCgfADIgfACIgfACIgFgCQgvgPg4ACQgrABg9AMQgQgDgbAAIgsgBQgbgCgaAGQgTgBgRACIgEgCQgegLgoADIhFAJQgNACgVgEIghgFQgRAAgaAIIghgFQgngEgTAHIgTgBQgNgFgQADIgPAEIhMAAQgJgKgVACQgPACgJAEIgDABQgvgFgYAIQhZgKhDAKQgHgEgLAAIgTAAIhAAAQgBAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAQAAAAAAAAIAMAHQgCAFABAEQABAEAFADQATAJAUAIQAQAIAUADQATAIARAAQAWAAAggBIA3gCQAGAEAGAAg");
    this.shape_38.setTransform(152.7319,15.3);
  
    this.shape_39 = new cjs.Shape();
    this.shape_39.graphics.f("#251D1D").s().p("AhtAeQAbgXAKgVQAFgKAAgFICNAAQAJAaAOATIANANIgWAAIgLgXQgIgPgHgEQgIgGgSABIgbABIgagBQgRAAgKAEQgJAFgKAPQgJAPgNAEQgEABABAEg");
    this.shape_39.setTransform(191.575,5.35);
  
    this.shape_40 = new cjs.Shape();
    this.shape_40.graphics.f("#251D1D").s().p("AhtAeQAbgXAKgVQAFgKABgFICMAAQAKAaANATQAIAJAEAEIgJAAQgCgHgHgEIgFgBQgPgkg8gBIgcgCQgSAAgLAGQgJAFgOAPIgEABQgJADAAALIgJAHQAAABgBAAQAAABAAAAQAAABAAAAQABABAAAAg");
    this.shape_40.setTransform(153.6,5.35);
  
    this.shape_41 = new cjs.Shape();
    this.shape_41.graphics.f("#251D1D").s().p("AhtAeQAbgXAKgVQAFgKAAgFICNAAQAJAaAOATIANANIgNAAIgCgEIgQgVQgKgMgJgGQgKgFgRgBIgcAAIgdAAQgTAAgLAGQgJAEgMANQgQASgEADQgCACABAEg");
    this.shape_41.setTransform(114.75,5.35);
  
    this.shape_42 = new cjs.Shape();
    this.shape_42.graphics.f("#251D1D").s().p("Ah9ARIBmggIAbAEQAhgBAWgWIBDAHIgbAOQgCgCgDgBQgMgDgSAGIgeANIgEgBIgkABIgEAAQgLAAgRAGIgdAIQgFABABAGIABABQgHAFgBAIg");
    this.shape_42.setTransform(47.025,172.75);
  
    this.shape_43 = new cjs.Shape();
    this.shape_43.graphics.f("#251D1D").s().p("AhFAjQgbgtAeg7ICVAtIgKARQgJAVAKAVIhuAjQgTgLgOgYgAg/ghQgFAFABAHQACAJAEAJIABAAQgCAJAEALQADALAHAJQABAHACAHQACAIAIABQAHABAFgFIAFAAIANgDQAKgBASgHIABgBIAWgIQAHgCACgFQACgGgDgFQAAgLAFgHQADgGgGgDQgJgEgRgCIgbgEQgKgCgQgGIgcgKIgEgBQgFAAgDAFg");
    this.shape_43.setTransform(35.2174,165.5);
  
    this.shape_44 = new cjs.Shape();
    this.shape_44.graphics.f("#251D1D").s().p("AMSBCQAHgEAIgHQAwAFAbAAQApAAAbgLQAIgDAAgIQAAgIgIgDIgLgDQgCgMgNgBQgJgBgKgGQgEgDgDgBQgIgDgMgLIgTgOQgIgFgHAGQgGABgCADIgegMQgFgCgFADIgegFQgRgDgNACQgNABgaAJQgRgEgUADQgXAFgNACQgBgJgJgCIgtgIQgbgFgSgBQgMgBgjADQgeADgQgDIgBAAQgDgCgKgBQgGAAgEAEQgVgEgRAMIgJABQgjgDgRAAQgdAAgYAFIgVAAQgNgBgjACIgEABQgqgchLARQg6AGgcABQgFAAgFAEIgZgBQg9gLguALIgGAAIgCAAQgIABgLADQgBgGgEgDQgMgJgUAAIgjACQhIAGgsgFQg/gHgrABQg3AAgxAMQgDgDgCgBQg/gNhGAWIgNABQgdgMgPAAQgTgBgXALIgnAWIggANQgUAIgGALQgLAUASALQAQAJAUgGQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBABgBIAIAAIALAAQANAABEgIQA9AYA3gPIABABQAFAFAGgBIABAAQALADAfgCQAYgDAmABIA/AAQAlAHArgFIAIgBQAdACArgCIACAEIAEAEIAFADIpHAAQgIAAgJgEQgXgNgZgLQgHgEAAgIQAAgIAHgDICEhHQAQgJATAAIZXAAQAWAAARAOIBkBQQAEAEABAGQABAHgDAFIgFAHQgFAIgJAAg");
    this.shape_44.setTransform(145.4861,176.725);
  
    this.shape_45 = new cjs.Shape();
    this.shape_45.graphics.f("#251D1D").s().p("AjoAHQAMgEAGgHIBjgCIBKAGQBFACBngFQAvAGA0gCIAAACIABABIAAABIABABIABABg");
    this.shape_45.setTransform(160.1,182.575);
  
    this.shape_46 = new cjs.Shape();
    this.shape_46.graphics.f("#251D1D").s().p("AAIF9QgNgTgWgIQgWgKgWAFIAAixQAbg1gMg0IgPgoIAAkhQAAgeAXguIAZgqQA4AqAZA0QANAbACARIAAJJQgVAYgZALQgHACgHABgAA4CLIABAdIgBABQgPAmgIAdIgJAgQgIASgRAEQgBAAAAAAQAAAAgBABQAAAAAAABQAAAAAAAAIgFACQgFABABAFQABAFAEAAIAIAAQAAABAAAAQAAABABAAQAAAAABABQAAAAAAAAIAIACQACAGAFACIAPAFIASANQAFADAFgDQAGgDAAgGQABgcgDgRQAGgzgCgbQgBgGgCgCIADgaQAAgEgEgBQgBgOgCgRIgBgLQAFgCABgGQAAgegLgeQAVg3gUhSIAAg5QgHACgKAEIgRAGQgHACgPACQgJABgGACIAKgGIAOgMIAYgRQAOgKAGgNQAEgLAAgMIgBgaQgHACgJAFQgLAGgXAKQgWAIgKAGQgNAGgFAIIgJAOIAEAOQgDABgCADQgJANAEAUIgBAOQgFAxAEAnQAFAsASAoIAAAjIgJAVQgGARABALQgHADAAAGIABAPQgEAEACAGIACAKIgCAkQgEAEAAAEIgFAcQgCALAKAFQAJADAHgJQAKgPgCgUIABgHQAEgCABgEIAEgHQADgMAMgMIANgJIABAAQAIAEAFgHIAKgMIABgBIABgCQADgBABgDQAHgNACgLQANgFABgKgAg6jGIAEAEQAEACAIgCQAIgCALgFIASgKIAhgPQARgIAKgNQgDgLgEgJQgDgIgGgIQAAgGgCgFQgDgLgHgFQgIgHgIACIgKgJQgMgOgCgKQgCgFgEAAQgEAAgBAFIgLAkQgGAHgGAKIgBACIgCAEQgHATAKAaIgBAEIABACIgGAKIgFAMIgBANIAAACIAAgCg");
    this.shape_46.setTransform(269.2,58.95);
  
    this.shape_47 = new cjs.Shape();
    this.shape_47.graphics.f("#251D1D").s().p("AgPAiIgBgBIgBgDIgCgUIgBgCQAHgDAEgTIACgIQAEgGADgGQAMACAJgDQgCAMAAAXIgBAOQgIAEgGAFQgMAHgHAGg");
    this.shape_47.setTransform(267.35,74.525);
  
    this.shape_48 = new cjs.Shape();
    this.shape_48.graphics.f("#251D1D").s().p("AgeFnQgVgLgRgVIAApJIAZgsQAhgwArgNIARAbQAQAfADAbIAAEhIgPAoQgLA0AaA1IAACpQgagBgOAFQgHADgbARIAAAAQgFADAAAFQAAAEACAEQgLgBgLgFgAg5ChQgBABAAAAQgBAAAAAAQAAABAAAAQAAABAAAAIAAAKQgBAAADAYIADBCIgCAOIAAABQgCALAAANQAAAHAJACQAHADAEgGQAFACADgFQAJgIAWgFQADAAADgBIAAgBQAHgCgBgFQgBgFgDgDIgCgBQgRgMgIgGIgGgOQgCgDgDgBIgCgMQgEgLgHgVIgMggQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAIgBAAgAAkDgQAAAPACAQIAAACIABAJQgCALAMAAQAMAAABgLIAAgLIABgEIgBg8IgBgHQACgKgDgJIgJgUQgIgRgEglIAAgHQACgCAAgDIAMgtQAIgbgBgTIgBhFQAAgcACgZQghAMggATQgUAMgIAKIgLAOIgJAIQgDADgBAHIACAhIAAAUQgCACgBADIAABBQAAAoAKAXQAbA/AoAaQADADAFgBQAEgBADgDgAAOlNQgGABgDAGIgJAWQgEAAgEAFIgaAkQgMASgBAXQAAADADACIAAABQgDADAAAFIAAAWQgDAEgBAFIgBAuIgCASQAAANAHAAQADAAAHgEQALgIAbgOIBBgdQAEgqgGghQgIglgWgjIgHgYQgBgHgHAAIgBAAg");
    this.shape_48.setTransform(248.4,60.55);
  
    this.shape_49 = new cjs.Shape();
    this.shape_49.graphics.f("#251D1D").s().p("AAGAeQgTgXgCgEIABgPQACgDAAgFIAAgUIAPAPIAEADIACALQAAAFAHAMQgCATABAPg");
    this.shape_49.setTransform(249.525,75.25);
  
    this.shape_50 = new cjs.Shape();
    this.shape_50.graphics.f("#251D1D").s().p("AAfKSIhdhEQgGgFAAgHIAAzOIAKgHIB4BNQAHAEAAAIIAASqQAAAEgCAEIgQAWQgEAFgFABIgDAAQgFAAgDgCgAgrpqQgFADABAIIAGAYIADAZIAAAFIAAAEIgHAuQgEAdACAUQgEAAAAAEQAAANgFAiIgCAJQAAAFACALIACAQQABAFgDALQgCAMAAAFQAAAQAFAOIADAGIgBACIADAGQgBANADAVQACAOAAASIgBACIgBA/QgCADABAEIAAA5IAAADIABAkIAAAEQgJAcAAARQAAAGADANIAEAUQAAAHgCAQQgDAPAAAIQACAiAFA0IALBXQgFATgBAZIAAAuQAAASgDAqIgCA8QAAAOgCAhQgBAdAGAQIAEAHQAEAQAZASIAZAXIAFAEIADAEQACADAFgCIALgFIAKgHQAAgBABAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQgFgRACgTIADgaQACgQgBgMIgEgxQgCgcADgXQAGgugJgiIAEiIQADhRgCg2IAGhiQADg7gKgmQADgQgDgUIgBgCIAAgGQANgKgEgTIABgLQgBgJgFgIQACgFAAgIQAOgTgDgTQgEgOgOgHQAOgHAEgTQAAgFgDgPQgBgIgBgOIgCgVIgEgTIgEhAIACgsQAAgegFgMQgJgSgcgSQgfgSgMgJQgDgDgEAAIgFABg");
    this.shape_50.setTransform(35.35,88.4361);
  
    this.shape_51 = new cjs.Shape();
    this.shape_51.graphics.f("#251D1D").s().p("AkqBcIASgJQAOgIAigaIAUgKQAEAFAFgDIBAgdQAngQAXgPQAEgDACgGIEhABQAGgEADgFQAQgTAWgKIAXgJIAEgDIkcAAIAMgGIABgBQAfgCAjgFIAzADQAhADASAAIBrgCIAAACQABAFACAEIgHAFIgJAEIgSALQgOAJgDAGIAAACQgKAGgHAFQgIAGgLANIgTATIgUARQgMAJgIAJIgVAXQgNAOgLAIIAAACgAiDAWQgEABgCAFIgKAFIgEABQgZADgMADQgIACgCAIQgYAHgMAJQgEADABAFQABAFAGgBQAcgBAWgCQAWgCAJgFIAmgEIBtACQBBABArgIQANAEAHgLIAFgHQAHgJgFgMQgFgLgNADQgFgIgKgBIgKAAQgDgFgGAAQgfgEgfAAQhKAAhMAYg");
    this.shape_51.setTransform(184.525,191.075);
  
    this.shape_52 = new cjs.Shape();
    this.shape_52.graphics.f("#251D1D").s().p("AkGA8QAJgGALgLIATgSQAKgKASgKIAegPQAqgZASgYIFsABQABAAAAAAQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgTATgYAhQghAvgLANgAiwAtQAjADAxABIBUAAQAcAAA5AEQAzACAigEQAMgBACgLQACgJgHgHIAGgCQAKgDACgMQACgLgJgEIgGgEQgdgMgrABQg9gKhAALIgGACIgaADQgtgBgiAKQgoAKgcAcQgHAGAGAHQAGAHAHgEIAFgDQADADAEAAg");
    this.shape_52.setTransform(222.0417,194.275);
  
    this.shape_53 = new cjs.Shape();
    this.shape_53.graphics.f("#251D1D").s().p("AmrA+QgygphHhIQgDgDACgDQABgEAEAAIRHADQgMAJgWAUQgMALgTAMIgiASQgEACADAEQgaASgSAJIgfARgAEvAkQAOgDAbACQAcACANgDQANgCAYgQIAXgKQAEgCABgEIAQgGQAFgCAAgHQgBgGgGABIgCAAIggAFIgMACQgGgFgHACIgtAIIgwABQgDgEgEAAQgdgHglABQgGABgEAGIgCAAIgTgBQgFgHgHAAQhAgCgiAAQg2ABgsAHIgVADQgfAAgYACQgtgEgWgBIgBgBQgngKg1AEIhaAIQgrgKgnACQgFAAgEADIgGAAIgBABIgRgCQABgBAAAAQAAgBgBAAQAAgBAAAAQgBAAgBgBQAAAAgBAAQgBAAAAABQgBAAAAAAQAAABgBAAIAAACQgIACgCAIQgDAXAXALQAVAJAUgMIACgCQAbAKAdgEQAdAEAWACQAIAAAEgEQA0AHBhgJQAZAAAfgCIA4AEQAeABAZgDQAHgBAFgGIAFABIAUABQBVAPBFgKIADgBQAhAKAggCQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAg");
    this.shape_53.setTransform(115.2219,194.125);
  
    this.shape_54 = new cjs.Shape();
    this.shape_54.graphics.f("#332A29").s().p("AuxAwQgIAAgGgEIh0hLQgBAAAAAAQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAMAhigAJQAEAAABAEQABAEgDACIh3BQQgHAFgJAAg");
    this.shape_54.setTransform(152.7319,15.3);
  
    this.shape_55 = new cjs.Shape();
    this.shape_55.graphics.f("#332A29").s().p("AhIgOQAFgKAAgFICNAAQAJAaAOATIANANIjbABQAbgXAKgVg");
    this.shape_55.setTransform(191.575,5.35);
  
    this.shape_56 = new cjs.Shape();
    this.shape_56.graphics.f("#332A29").s().p("AhIgOQAFgKABgFICMAAQAKAaANATQAIAJAEAEIjaABQAbgXAKgVg");
    this.shape_56.setTransform(153.6,5.35);
  
    this.shape_57 = new cjs.Shape();
    this.shape_57.graphics.f("#332A29").s().p("AhIgOQAFgKAAgFICNAAQAJAaAOATIANANIjbABQAbgXAKgVg");
    this.shape_57.setTransform(114.75,5.35);
  
    this.shape_58 = new cjs.Shape();
    this.shape_58.graphics.f("#332A29").s().p("AgpAqIhUgiIBmgfIAbAEQAhgBAWgWIBDAHIiSBMQgGACgFAAQgFAAgFgBg");
    this.shape_58.setTransform(47.025,173.5889);
  
    this.shape_59 = new cjs.Shape();
    this.shape_59.graphics.f("#332A29").s().p("AhFAjQgbgtAeg7ICVAtIgKARQgJAVAKAVIhuAjQgTgLgOgYg");
    this.shape_59.setTransform(35.2174,165.5);
  
    this.shape_60 = new cjs.Shape();
    this.shape_60.graphics.f("#332A29").s().p("AgyF9QgCgOgJgKIgKgIIAAixQAbg1gMg0IgPgoIAAkhQAAgeAXguIAZgqQA4AqAZA0QANAbACARIAAJJQgVAYgZALQgHACgHABg");
    this.shape_60.setTransform(269.2,58.95);
  
    this.shape_61 = new cjs.Shape();
    this.shape_61.graphics.f("#332A29").s().p("AgHFtQgOgBgJgFQgVgLgRgVIAApJIAZgsQAhgwArgNIARAbQAQAfADAbIAAEhIgPAoQgLA0AaA1IAACxQgEADgFAFQgJAKgCAOg");
    this.shape_61.setTransform(248.4,60.55);
  
    this.shape_62 = new cjs.Shape();
    this.shape_62.graphics.f("#332A29").s().p("AAfKSIhdhEQgGgFAAgHIAAzOIAKgHIB4BNQAHAEAAAIIAASqQAAAEgCAEIgQAWQgEAFgFABIgDAAQgFAAgDgCg");
    this.shape_62.setTransform(35.35,88.4361);
  
    this.shape_63 = new cjs.Shape();
    this.shape_63.graphics.f("#332A29").s().p("Ar2CXQgygphHhJQgDgDACgDQABgEAEAAIRLADQAFgBACgCIAFgEQARgPAigGIAbgEQAPgEALgGIAKgGInMAAQgnALg+AHIghADIgbACQgYAAgUgIIgcgPIpHAAQgJAAgJgEQgWgNgZgLQgHgEgBgIQAAgIAHgDICFhIQAQgJATAAIZWAAQAWAAARAOIBkBRQAFAEABAGQABAHgEAFIgFAHQgFAIgIAAIimAAQgiAQgjAIQADABgBAGQgBADgEACQgLAHgbAFIFeABQABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQgTASgYAiQghAvgLAOgAFxgSIgFACIgEAEQgFAGgPAEIgZAGQgBAAgBAAQAAABAAAAQgBAAAAAAQAAABABAAIACABQAAAAAAABQABAAAAAAQAAABAAAAQABABAAAAIgBAEIgHAFQgEACgIAJIEcAAQAFgEAIgKQAPgQAmgNIAOgFIkjAAg");
    this.shape_63.setTransform(148.3417,185.225);
  
    this.shape_64 = new cjs.Shape();
    this.shape_64.graphics.f("#000000").s().p("At9LKQgVAAgPgPQgPgPAAgVIAA0tQAAgVAPgPQAPgPAVAAIb7AAQAVAAAPAPQAPAPAAAVIAAUtQAAAVgPAPQgPAPgVAAg");
    this.shape_64.setTransform(142.775,94.725);
  
    this.shape_65 = new cjs.Shape();
    this.shape_65.graphics.f("#8A7648").s().p("AN8O7IA8hRQAJABAPgEQAAAAABgBQAAAAAAAAQAAgBAAAAQgBAAAAgBIgGgBQgGABgGgCIAQgXIAKAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAIgIgCIgEgBIgCAAQgGgDgFADIgCADIgBABIABABIgWASIgSgEQgEgBgEADQgEACAGACIAOAGIggAbIggAwIABANI5ZAAIADgTIgfgxIh3g3IgHACIgFALIB0BuIglAAQkjjeiJgvIAA4XICFgFIB3BUIBDgqIABAAIbPAAQAPAJAdAVIAPALQAKAGAIABQAIABAQgFQAPgHAVgNIAkgWIAcAWIAJAQIACADQANAhAEANQAHAaABAWQgBABgBAAQAAAAAAABQgBAAAAAAQAAABAAAAIgJBsQgBADAGABIAAAGQgLA7gCARQgBAEAJAAQAHAAACgEIABgDIACAPIgEAbQAAgDgGAAQgGgBgBADIAABAQgLAiADAXQAAAEAJgBQgCA5AGArQABAGAMgBIgBBHQgFAAAAADIAAAFQgBAEABACIAAAuIgBABIAAAEQAAAAgBABQAAAAgBAAQAAAAAAABQgBAAAAABIAAABQgGABAAADIAAADQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIgBAAIAAADIgIACQgCgDgDgBQgBgBgEgCIgHAAIgKACQhMgEAKgWQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIgFAAQgKAEADAHQgEAHANAJQAKANAYAEIADABQARAFAWgDIAHAAIAXACQgCALAEALIAAADIABACIgHAMIgBACIAAABQgDAEAIABIgBADQAAABAAAAQAAAAAAABQAAAAAAAAQAAAAABABQgBAEAKABQAKABADgDIgDBvIACACIgBAWQAAAAABABQAAAAAAAAQAAABAAAAQABAAAAAAQgHBuAEAxQAAAAgBABQAAAAgBAAQAAABAAAAQAAAAAAABQgHAegBAVIAAAWQABAMAHAHIACACIABA4QAAADAGAAQAEAAAAgCIADgbIgCBaIACACIgBA7QgCA8ABA0QAAAAAAAAQAAABABAAQAAAAABABQABAAABAAIAAARQAAAAAAAAQAAABABAAQAAAAABABQAAAAABAAIAAASQAAAB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");
    this.shape_65.setTransform(151.45,104.775);
  
    this.shape_66 = new cjs.Shape();
    this.shape_66.graphics.f("#8A7648").s().p("APMATIh9gLI8bAAIADAeIhngzIglgaMAiqAAAIgTAQIgBABIAAAAIgGgBQgNgBgGAGQgEABgCADIgBABQgJABACAEQACADAGADIhFAqg");
    this.shape_66.setTransform(151.85,13.275);
  
    this.shape_67 = new cjs.Shape();
    this.shape_67.graphics.f("#C1AF64").s().p("AtIPFQiziJh+hJQhYgyg0gOIAA4jICUhUMAkaAAAIBdBPIAAYlQhCAYhMAzQh5BQhlB6g");
    this.shape_67.setTransform(151.525,103.775);
  
    this.shape_68 = new cjs.Shape();
    this.shape_68.graphics.f("#C1AF64").s().p("Ai0A0QA0gcAXgoQAMgUABgPIC5AAQAHA3AqAeQATAPATADg");
    this.shape_68.setTransform(192.2,5.525);
  
    this.shape_69 = new cjs.Shape();
    this.shape_69.graphics.f("#C1AF64").s().p("AizA0QAzgcAXgoQAMgUABgPIC5AAQAIA3AoAeQAVAPASADg");
    this.shape_69.setTransform(154.225,5.525);
  
    this.shape_70 = new cjs.Shape();
    this.shape_70.graphics.f("#C1AF64").s().p("Ai0A0QA0gcAXgoQAMgUABgPIC5AAQAIA3ApAeQAUAPASADg");
    this.shape_70.setTransform(115.35,5.525);
  
    this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));
  
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(173,100.3,107.10000000000002,100.00000000000001);
  // library properties:
  lib.properties = {
    id: 'B0680C605233490E9B561EE4421CE410',
    width: 300,
    height: 200,
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
  an.compositions['B0680C605233490E9B561EE4421CE410'] = {
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
  
  
  })(createjs = createjs||{}, AdobeAn = AdobeAn||{});
  var createjs, AdobeAn;