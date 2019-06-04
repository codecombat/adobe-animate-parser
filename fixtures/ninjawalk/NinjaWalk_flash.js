(function (lib, img, cjs, ss) {

  var p; // shortcut to reference prototypes
  var rect; // used to reference frame bounds
  
  // library properties:
  lib.properties = {
      width: 150,
      height: 150,
      fps: 14,
      color: "#999999",
      manifest: []
  };
  
  
  
  // symbols:
  
  
  
  (lib.Tail = function() {
      this.initialize();
  
      // Layer 1
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#0D1011").s().p("AgREKQg4htAAidQAAg4AHhBIAKhEQACgTARgXQAOgTAVgSQAKgJAKgGQAGgDAGAAIAGABQACAAADADQASAUAIAfQAHAdAAAwQAAApgFA5QgEA4gCAUQgEAigGAeQgLA1gqCAIgGAWgAAckJIgGADQgKAHgGAFQgTARgOAWQgIAOgCAKIgJBEQgHBBAAA2QgBCIAsBjQAihtAKgvQAGgcADghIAGhLQAFg5AAgoQAAgugHgaQgGgZgMgOg");
      this.shape.setTransform(5.7,22.3,0.774,0.774);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#3D4344").s().p("AgjA8QgEhCgDgNQgFgZA6g6QAHgFAZAbQgKAmgNAlQgUA1gWAzQgBAFgCAAQgGAAgEgsg");
      this.shape_1.setTransform(5.5,8.9,0.774,0.774);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#272B2D").s().p("AgrBKQgHgZgCg3QgBgzADgZQACgSAbgcQAOgOAOgMQAIgGAPAEQAPAFAHAKQAIAOgmCIIg1CWQgCgwgKglg");
      this.shape_2.setTransform(6.1,13.6,0.774,0.774);
  
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#1F2224").s().p("AhNAKQgChnAYhVQAGgWAegmQAdgmAKAEQAgAKAPAvQAPAzgGBYQgGBQgWBKIg+DEQg8h0gDiUg");
      this.shape_3.setTransform(6.2,21.3,0.774,0.774);
  
      this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
  }).prototype = p = new cjs.Container();
  p.nominalBounds = rect = new cjs.Rectangle(0,0,12.3,44.5);
  p.frameBounds = [rect];
  
  
  (lib.R_SholderArmor = function() {
      this.initialize();
  
      // Isolation Mode
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#5B3304").s().p("ABYCKIgBgGIAAgBIgBgEIgGgMQgLgVgRgJQgRgJgVAAIgNABIgBgGQgjhBgsgaQgdgSgeAAQgLAAgIACIgHADIgFgHIgDgIQgFgJAAgJQAAgHAEgFIgGAIIAGgJIAEgFIAZgRQAbgSAVgMIAbgNIABgBIADAAQBGAAA2AoQAqAgAhA5QAWAmANAwQAHAXADAQIABAIIg/AdgAhEgkQAuAdAiA/IACAAQAbAAAUALQASAJALAQQAKAPAFAOIALAEIApgUIgDgOQgGgcgLgbQgghSg6gqQgvglhAAAIgQAJIgbAPQgdARgQANIgEADIgBACQAAAEACAFIARgBIADAAQAhAAAiAWg");
      this.shape.setTransform(-47,-13.6);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#703D09").s().p("AB6BrIgGABQgFgTgNgSQgbgjgpACQgigzgagXQgygqg9AHQgIgjANgDQAVgEA4AZQBMAjAdBFQAoALAVASQAbAXALAqQgPgDgIAAg");
      this.shape_1.setTransform(-49.2,-11);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#EA8B00").s().p("AgwAcQgGgLgCgCQgDgDAigWIAhgXIAVADQAWAGAGALQAGAKgwAQQgyARgEADIgDABQgDAAgDgGg");
      this.shape_2.setTransform(-42.8,-16.6);
  
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#FFCF2E").s().p("AhEAZQgIgEAlgdIAlgdQAVgCAUALQAMAGASAPQAKAHg+AUQgcAKghAIQgLgHgNgGg");
      this.shape_3.setTransform(-48.9,-22.3);
  
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#EA8B00").s().p("AgJAzQgLgCgIgIQgLgLgHgEIgggNIgagJQgHgDApgZQApgaADAAQAkACAwAdQAlAVAKAOQAGAIg2APQgtAMgQAAIgFAAg");
      this.shape_4.setTransform(-49.2,-21.7);
  
      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f("#A85F00").s().p("ABgCDQgDgRgNgRQgaghgvADQgwhZhAgVQghgKgWAIQgMgRAHgLQACgEAogZQApgaAQgHQB7ABBEB8QAiA7AJA/IgzAXg");
      this.shape_5.setTransform(-47,-13.6);
  
      this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
  }).prototype = p = new cjs.Container();
  p.nominalBounds = rect = new cjs.Rectangle(-65,-28.2,36,29.3);
  p.frameBounds = [rect];
  
  
  (lib.R_Sholder = function() {
      this.initialize();
  
      // Isolation Mode
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#3D4344").s().p("AgGAkQgIAAgBgBQgDgEgDgSQgCgPAGgRIAGgOQAGgGAJAIIAQAQQAGAHgNAWQgNAWgGAAIAAAAg");
      this.shape.setTransform(16.4,15.6,0.999,0.999,0,-22.3,157.7);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#2E3335").s().p("AgWBCIgEgjQgCgDgPgNQgQgNgDgGQgEgIASglIATgoQAdAXAEAAQAEAAAaAQQAaAPADAFQAEAFgiA1QghA3gKAGIgCABQgHAAgDgYg");
      this.shape_1.setTransform(16.2,20.9,0.999,0.999,0,-22.3,157.7);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#0D1011").s().p("AhmCkQgZgHgOgZQgNgVAAgYQABgLACgIQAEgKAHgGQAAAAABAAQAAAAAAAAQAAAAABgBQAAgBABAAIAEgGIAOgVIAkg7IA9hxIAGgMIAFgBQAqgMAhAAQAjAAAXAOQAVAMAHAYQAFAPgBAQQAAAggQAtQgLAegOAZQgMAZgZAhQgUAagHAQQgFAKgKAHQgIAHgMAFQgVAHgcAAQglAAgegLgAgCiQIgmBHQgqBMgaAnQgHAMgGAIQgDADgEAEQgCABgCAEQgCAFAAAIQAAATAKAQQALARARAHQAbAJAiAAQAQAAATgDQAOgEAIgHQAGgEACgFQAHgRAXgfQAVgZAPgcQARglAHgRQAPgogBgeQABgWgJgMQgIgPgTgHQgOgFgVAAQgbAAgnAKg");
      this.shape_2.setTransform(12.8,15.7,0.999,0.999,0,-22.3,157.7);
  
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#121314").s().p("AAHAjQgmhMg6gFQAEgSAUghQAhgOAiAAQBHAAAQBLQAFAbgdA/QgOAggQAaQgIgmgUgng");
      this.shape_3.setTransform(5.9,12.3,0.999,0.999,0,-22.3,157.7);
  
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#1F2224").s().p("AhiCbQgggKgKglQgKgjARgNQAUgPBpjGQCUgmAFBcQACAzgqBTQgNAagXAeQgWAbgHARQgLAZguAEIgTABQghAAgdgKg");
      this.shape_4.setTransform(12.8,15.7,0.999,0.999,0,-22.3,157.7);
  
      this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
  }).prototype = p = new cjs.Container();
  p.nominalBounds = rect = new cjs.Rectangle(-5.9,0,37,31.8);
  p.frameBounds = [rect];
  
  
  (lib.R_Leg = function() {
      this.initialize();
  
      // Isolation Mode
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#2A2F30").s().p("AgKA4QgJgEARhuQAAgGAEAcIAIAnQAHAwgEAFQgDAEgGAAQgEAAgKgEg");
      this.shape.setTransform(20.4,9.4,0.892,0.867,0,4.7,-161.5);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#232728").s().p("AgaA8QgHgBgDgGIAAgGIAMhvIAVAOIASASQATATADAEQACAEgHAbQgGAagEAKQgDAHgPAAQgLAAgTgFg");
      this.shape_1.setTransform(19.9,8.8,0.892,0.867,0,4.7,-161.5);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#3D4344").s().p("AgDAKIgDgFQgBgEABgDIACgFQAAgFAEAFQAEAEADADQACADgDADQgDADgDABIgCAAIgBAAg");
      this.shape_2.setTransform(7.2,15.6,0.892,0.867,0,4.7,-161.5);
  
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#3D4344").s().p("AgjgIQAGgDASADIAOADQAIgBANAGQAMADAAADQAAAEggAAQgOAAgZgSg");
      this.shape_3.setTransform(13.6,19.9,0.892,0.867,0,4.7,-161.5);
  
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#5B3304").s().p("ABWAkQgQgOgKgGQgSgMgggEIgKAAQgPAAgVAEQgUAHgLAJQgEADgFAAQgEAAgGgDQgFgBgDgEQgDgEAAgDQAAgDACgDIAAAAIAAgBQAZgTAcgKQAXgJATAAQALAAAHADQAmAMAYASIAHAFIAHAKIADAHIABAHIgCAGIgEAFIgDACgAALgJQAjAGATAKQALAHAMALIgBgEIgCgFIgGgJIgFgFQgGgDgHgDQgTgMgbgJQgGgCgJAAQgRAAgVAIQgaAKgXARIAAAAIADACQAEADAEAAIADgBQAMgKAWgFQAXgHAQAAg");
      this.shape_4.setTransform(15.3,19.2,0.892,0.867,0,4.7,-161.5);
  
      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f("#FFCF2E").s().p("AALALQgEgBgLgHIgcgLQAIgFAXAGQAPADAPAEQAIAEgJAFQgGACgGAAIgFAAg");
      this.shape_5.setTransform(13.8,17,0.892,0.867,0,4.7,-161.5);
  
      this.shape_6 = new cjs.Shape();
      this.shape_6.graphics.f("#EA8B00").s().p("AgEALIgxgOQgCgCARgFIARgFQANABAcAMIAhAOQAHAEgZAAQgaAAgNgFg");
      this.shape_6.setTransform(14,17,0.892,0.867,0,4.7,-161.5);
  
      this.shape_7 = new cjs.Shape();
      this.shape_7.graphics.f("#A85F00").s().p("AA6AJQgVgMgYgCQghgDggALQgPAHgKAHQgKgEgBgBQgFgEADgFQAfgXAjgIQAZgGAPAFQAdAJAUAMQAOAIAEAFQAFAHAEAPIgBAAQgBAAgCAFQgSgPgMgIg");
      this.shape_7.setTransform(15.3,19.1,0.892,0.867,0,4.7,-161.5);
  
      this.shape_8 = new cjs.Shape();
      this.shape_8.graphics.f("#5B3304").s().p("AAEAnQgHgFgNgDIgDgBIgBgLQAAgTAFgSQAEgOAGgGIAEgDIACAAQAHAAAFAEQAIAGAAAJIAAACIgBABQgKAPAAAZIABAVgAABAbIgBgGQAAgbALgRQgBgDgDgDQgDgDgDAAIgBABIAAACIgEAKQgGASAAAUIABADIAKAFg");
      this.shape_8.setTransform(9.2,15.1,0.892,0.867,0,4.7,-161.5);
  
      this.shape_9 = new cjs.Shape();
      this.shape_9.graphics.f("#FFCF2E").s().p("AgHgDQAAgIAKADIAIADQgBABABAGQABAHgKgBQgKgBgBACIgBABQgCAAAFgNg");
      this.shape_9.setTransform(9.4,13.7,0.892,0.867,0,4.7,-161.5);
  
      this.shape_10 = new cjs.Shape();
      this.shape_10.graphics.f("#EA8B00").s().p("AgMABIABgJQAAgIAHgIQADgDAGADIAIAFIAAAIQgBALgDAGQgCAFgDAAQgEgBgJAQQgDgLAAgOg");
      this.shape_10.setTransform(9.6,14.9,0.892,0.867,0,4.7,-161.5);
  
      this.shape_11 = new cjs.Shape();
      this.shape_11.graphics.f("#A85F00").s().p("AgPAcQgBgbAGgSQAFgQAFgCQACgBAFADQAFAEAEAHQgOAWAEAkQgIgFgNgDg");
      this.shape_11.setTransform(9.2,14.9,0.892,0.867,0,4.7,-161.5);
  
      this.shape_12 = new cjs.Shape();
      this.shape_12.graphics.f("#131719").s().p("AgBCPIgbgOIgZgNQgMgEgNgDQgUgEgQgPIgNgPIgDgDIAShMIgNiFIAHgDQAXgKAiAAQArAAA0AOQAwALAAACIAKADIgvB+IAMALIAaAWIADACIAQAIQAOAHAHAKQAGAIACALIAAAEQAAALgHAIQgFAFgJAFQgJAFgIABIgSAJQgSAJgRAHQgFACgGAAQgOAAgQgIgAhnh8IAMB5IgRBGIAIAIQANAMAMADQATADAKAFIAQAIIATAKQALAHAOAFQAIADAHAAIAEgBQAWgIAZgOIAFgCIACgBIACAAIAHgDQAIgCAEgFQADgDAAgDIAAgCQgBgGgHgHQgDgEgNgGIgKgFIgOgJIgpgmIAsh3IgDgBIghgJQg0gNgnAAQgaAAgQAGg");
      this.shape_12.setTransform(15.8,11.4,0.892,0.867,0,4.7,-161.5);
  
      this.shape_13 = new cjs.Shape();
      this.shape_13.graphics.f("#272B2D").s().p("AgzAWQgKgFgPgPQgPgMgBgGQgBgGACgDQAFgFAOgCQAmAAAegGQAMgDAIgEQAIgBAMAKIASASIAVAQQANAIAFAGQAFAGgoAOQgkANgNABIAAAAQgJAAgzgYg");
      this.shape_13.setTransform(14,16.5,0.892,0.867,0,4.7,-161.5);
  
      this.shape_14 = new cjs.Shape();
      this.shape_14.graphics.f("#131719").s().p("AgfAVQgKgHgJgLQgGgGgFgJIgEgJIASgHIAAAAIABABIABACIAFAKQAKANAKAGQAJAFAJAAIAEAAQAUgDAPgKQAFgFAFgJIAAgBIATAFQAAAHgLALQgSAUghAFIgGAAQgPAAgOgIg");
      this.shape_14.setTransform(15.3,2.8,0.892,0.867,0,4.7,-161.5);
  
      this.shape_15 = new cjs.Shape();
      this.shape_15.graphics.f("#1A1D1E").s().p("AgCCEIgggRIgQgIQgKgEgRgDQgPgDgPgOIgMgNIARhJIgMiAQAngRBQAQQApAIAhALIgtB7IAUASQAVATAGADIAXAMQAPAKABAOQACAOgQAJQgIAEgJACQghARgUAIIgHABQgNAAgSgJg");
      this.shape_15.setTransform(15.8,11.4,0.892,0.867,0,4.7,-161.5);
  
      this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
  }).prototype = p = new cjs.Container();
  p.nominalBounds = rect = new cjs.Rectangle(4.1,-1.7,23.4,25.7);
  p.frameBounds = [rect];
  
  
  (lib.R_ForeLeg = function() {
      this.initialize();
  
      // Isolation Mode
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#32383A").s().p("AgcBIQgjg6gFgbQgEgRAKgnQAJglAFgEQAOgPAyAaQA0AaACASQABAOgVA7IghBaQgDAIgFAAQgLAAgagsg");
      this.shape.setTransform(23.7,6.3,0.944,0.944);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#0D1011").s().p("Ag4D3Ig8gJQgmgGgVgGIgPgFIgKgGIgCgCIgBAAIAAgBIgBgBIAAAAIgCgEQgHgMgGgRQgKgagGghQgHgoACgWQACgQAJgqQAKgwAUhEQANgvAVhEIABgDIADgCQANgIAMgDQAOgDANAAQAWAAAcAFQArAIAyAWQAtATArAaIAVANQAJAGALAJQAJAHAKAKIAJALIAEAIIABACIAAABIABADIgTAFIgBgDIAAgBIgBgBIgCgDIgGgIQgJgJgJgGIgngbQgngYgugUQgwgUgpgIQgagFgUAAQgNAAgJADQgIABgIAFIghBuQgWBPgIAiQgIAngCATQgCAUAHAkQAFAeAKAaQAEAMAHAOIACADIAAAAIAAAAIACABIACABIANAEQATAGAnAHIA6AIQAiAFAWAAIAPgBIANgCQANgCAMgGQASgKAQggIAag0QAWgvAThAIACgGIBTgQIAAAAIhDAgQgWBFgTAoIgbA2QgGANgKAOQgLAOgOAIQgPAIgQADIgQACIgPABQgOAAgtgFg");
      this.shape_1.setTransform(21.3,4.9,0.901,0.901);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#272B2D").s().p("AAiCcQhogKgOgNIgcgZQgSgSAAgKQAAgSAlhrQAnhyAMAEQBQAXAqAAQAwBDADAKQADAIgSBAQgTBFgQAeQgPAbgRAKQgHADgFAAIgDAAg");
      this.shape_2.setTransform(20,6.7,0.901,0.901);
  
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#1F2224").s().p("AhWDmQhRgNgHgLQgJgOgKggQgMgngEgpQgDglAniKQAThGAUg/QA3glCQBBQA5AZAqAeQArAfACAQQAEAhgaBUQgYBTgYArIgnBGQgYAcg2AAQghAAhLgNg");
      this.shape_3.setTransform(19.4,4.9,0.901,0.901);
  
      this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
  }).prototype = p = new cjs.Container();
  p.nominalBounds = rect = new cjs.Rectangle(-0.4,-17.8,43.6,45.5);
  p.frameBounds = [rect];
  
  
  (lib.R_Arm_Sword = function() {
      this.initialize();
  
      // Isolation Mode
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#131719").s().p("AEKCiQgbgBgngHQgngHg4gOQhVgTiQgoQidgsiNgqIgEgBIgCgEQgXgkgQgfQgJgRgEgLIgDgNIAAgBQAAgEACgDIADgFQACgEAFgFIAOgOIOtDyIgOANQgUARgjARQhFAihNAAgAnNh4IAEALIAPAdIAdAyIDtBEQEIBMB0AUQAqAIAUAAIADAAQBGAABAgeQAUgKASgMIt9jlIAAABIgLANIAAgBIAAABIAAAAIACAFg");
      this.shape.setTransform(56,82.6);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#6D787A").s().p("Ak3g+QgagQgEABQgCAAgcgQQgXgNgGgCIMhDLIgdAOg");
      this.shape_1.setTransform(61.7,81.7);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#495254").s().p("AnMhmQgEgDAHgKIAIgJIOPDrIgUAPg");
      this.shape_2.setTransform(55.3,80.3);
  
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#33373A").s().p("AEQCXQhMAAk3hYQidgsiOgpQg0hUgBgUQgBgFAKgKIAJgKIOWDsQgTARgjARQhDAhhKAAIgCgBg");
      this.shape_3.setTransform(55.5,82.7);
  
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#131719").s().p("AgQB4IgngDIgmgGIgLgDIgFgCIgBgCIAAgBIgBgBIACgCQABAAAAgBQABgBAAAAQAAgBABAAQAAAAAAgBIAAgCIgCgUIACgoIAQiZIAAgDIAFACIDFAUIAAAJQAAAngCAmQgDAygDAaQgEAdgEAKIgEAKIgDAFIgDADIgDABIgDABIgVACIgIAAQgdAAgmgDgAheAlIgEA5IABACIAGABQASADAUACIAmADQAwACAagBIARgBIABgCIADgIQAEgOADgWQAEglAAgkQACgegBgmIitgaQgJBfgEAyg");
      this.shape_4.setTransform(12.4,73);
  
      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f("#495254").s().p("AgGhYIAbAKIgOCRIgbAWg");
      this.shape_5.setTransform(4.4,71);
  
      this.shape_6 = new cjs.Shape();
      this.shape_6.graphics.f("#33373A").s().p("AhqBpIAWjVIC9AVIACALQACADikgVQgTDEACAHg");
      this.shape_6.setTransform(12.1,72.4);
  
      this.shape_7 = new cjs.Shape();
      this.shape_7.graphics.f("#1F2224").s().p("AgDBsQhhgEgDgHQgEgJAXjEIBZAFQBcAHAIAMQgCCygGAKQgEAFguAAIgygBg");
      this.shape_7.setTransform(12.2,73);
  
      this.shape_8 = new cjs.Shape();
      this.shape_8.graphics.f("#0D1011").s().p("AAEBSQgWgTgLgOQgEgGgBgEQgEgJAAgKQAAgLAFgPIAIggQACgIAAgIQAAgNgHgIQgEgHgDAAIADgDIAHgOQAHADAGAIQAMAOgBAUQAAAMgCAJIgJAgQgEAOAAAHQAAAHACAEIAJALIAuArIgMAPIgXgSg");
      this.shape_8.setTransform(8.6,48.2);
  
      this.shape_9 = new cjs.Shape();
      this.shape_9.graphics.f("#0D1011").s().p("AgQAOIgQgCQgTgEgJgDIgLgFIgPgHIAHgHIAFAEIARAJQAIACATAFIAPACIAPACIAQABIAsgDIAbgDIg3AJIggABIgQgBg");
      this.shape_9.setTransform(-3.1,66.7);
  
      this.shape_10 = new cjs.Shape();
      this.shape_10.graphics.f("#0D1011").s().p("AgUAVIgTgDIgRgFIgPgFQgMgFgLgEIgFgDIgBgBIAKgRIAGAJIAHAHIAKAGIANAGIARAEQAJADAJAAIASAAIARgBIASgCIARgDIAtgMIAFARIhUAKg");
      this.shape_10.setTransform(-2.3,64.1);
  
      this.shape_11 = new cjs.Shape();
      this.shape_11.graphics.f("#0D1011").s().p("AhqDQQgNgIgKgWQgGgSgEgaQgGgiAAg3IABgcIAJhFQAMhSAFgbIAEgRQAJgaAUgNQARgNAbAAQAmAAAqAbIgJARQgngYggAAQgUAAgNAJQgPAKgFAUIgDAJIgbC2IAAAZQAAAjACAcQAEApAIAWQAHAQAHADQAkAVAYAAQARAAATgJQAVgJAJgNQAGgIABgJQAAgGgDgEIAAgBIgBgBQgGgTAAgWQAAgXAJgRQAKgUAWgKIAbgzIgEgEQgDgFAAgFIAAgFIAQgzIAQg3QAFgSABgGIAUABQgBAKgFASIgLAkIgUBFIACACIAEAFQACADAAADIgBAFIghBAIgEABQgRAHgIAPQgHANAAASQAAAQAFARIADAGQACAGAAAIQAAAPgKAOQgNAQgbAMQgWALgVAAQgdAAgpgXg");
      this.shape_11.setTransform(1.7,58.6);
  
      this.shape_12 = new cjs.Shape();
      this.shape_12.graphics.f("#495254").s().p("AgCALIgXgQIgEgYIA5AsQAFADgGAMQgGgBgXgSg");
      this.shape_12.setTransform(8.7,55.6);
  
      this.shape_13 = new cjs.Shape();
      this.shape_13.graphics.f("#353B3D").s().p("AAuBUQgggYgMgLQgGgIABgTIADgXQANg6gNgLQgJgIgrgMIgogLQAHgHAgAAQAQABAPACIA1AaIAEAIQAFAIABAFQAAAEgHAuQgIArABAFQACAHAgAZIAgAXQgHANgEABIAAAAQgDAAghgZg");
      this.shape_13.setTransform(3.1,47.7);
  
      this.shape_14 = new cjs.Shape();
      this.shape_14.graphics.f("#495254").s().p("AgLAUQgmgBgigPQgEgEgEgTQAZAXA6AFQAvAEAsgLQAMgCgDAFQgBAFgOADQgXAHgwAAIgRAAg");
      this.shape_14.setTransform(-3,66.9);
  
      this.shape_15 = new cjs.Shape();
      this.shape_15.graphics.f("#2A2F30").s().p("AgRCAIgFgtQAGgSABgIIAGgUIAaikIgDC4QAAAEAJAGIgDASIgFApQgIABgMABg");
      this.shape_15.setTransform(-1.6,53.1);
  
      this.shape_16 = new cjs.Shape();
      this.shape_16.graphics.f("#232728").s().p("AAFCJIgYAAQgHAAgOgDIgNgEQADgaACgGQABgDAEgEIAJgMQAIgOABgyIADgvQAAgWAIhSQAHgDA4AcQADADACAPIgCARIgLA5IAAAOIgEAyIAAAFIABAHQABAHgCAzQAAANgIAGQgFADgPAAIgEAAg");
      this.shape_16.setTransform(-1.5,52);
  
      this.shape_17 = new cjs.Shape();
      this.shape_17.graphics.f("#2A2F30").s().p("AgKA4IAAhKIgDgXIgIgPIgBgDIAtAEIgCAoIgEAQQgIATAAAGIADAhg");
      this.shape_17.setTransform(-2.2,74.4);
  
      this.shape_18 = new cjs.Shape();
      this.shape_18.graphics.f("#232728").s().p("AgBA9QgRgCgGgCIgRgIIAOgJIAAggQAAgfgCgDIgOgiIAOADIAXACIAzgDIgBALQAAACgHAOQgBBUgMAFQgGADgNAAIgGAAg");
      this.shape_18.setTransform(-2.2,74.4);
  
      this.shape_19 = new cjs.Shape();
      this.shape_19.graphics.f("#1F2224").s().p("AgaDdQgXgCglgOQgbgLgGhYIgBhXIAPhfQAPhkAIgOQAOgcAhgCQAjgCA1AeQAVAagLAnQgLArAIASQAIARARAPQARAPATAIQgGALgWAnQglAOgEAxQgDAZAFAWIAFATQgCAYgkATQgSAKgUAAIgJAAg");
      this.shape_19.setTransform(0.3,58.6);
  
      this.shape_20 = new cjs.Shape();
      this.shape_20.graphics.f("#1F2224").s().p("AgcA+QgNgPgCgTQgBgLADgZIAHgqQAFgdgFgOQAhAKAUAOQAYAOACAMQACASgPAwIgYBHQgSgNgSgTg");
      this.shape_20.setTransform(10.4,47.4);
  
      this.shape_21 = new cjs.Shape();
      this.shape_21.graphics.f("#93542A").s().p("AgFBNQgFgBgEgDQgEgDgEgFQgHgKgEgOQgJgXgFgfIgBgLQAAgRAIgPIAIgKIABAAIAAAAIALgFQAMgEAJAAQAKAAAGADQAJAGAHARQAFALAEAUQAFAVACATIAAACIgGAUQgGAVgKAFIgBAAIAAAAIgMAEQgMADgFAAgAgZg6IgCACIgEAGQgHAKAAAQIABAKQAFAnAOAbQAFAJAFAEQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAIABAAIAKgCIAPgEIAAAAIAAAAIABAAIACgDQAFgGADgLIAGgSIgBgHIgDgQQgFgdgGgRQgGgOgGgDQgFgCgGAAQgLAAgPAHgAAWA9IAAAAIAAAAg");
      this.shape_21.setTransform(8,70.6);
  
      this.shape_22 = new cjs.Shape();
      this.shape_22.graphics.f("#AA673A").s().p("AgYAeQgGgXATgpIARgmIAMARIAIAXIgMAJQgNAMgDALQgHAOAEApIgLASQgBgLgHggg");
      this.shape_22.setTransform(8.1,69.4);
  
      this.shape_23 = new cjs.Shape();
      this.shape_23.graphics.f("#D68B54").s().p("AgUA3QgEgEgFgWIgEgWIACg7IALgEIAAACIABASQABASADAJIAKAbIAPACQASAAAGgIIgNAfQgDAFgGADQgQAGgJAAQgFAAgCgCg");
      this.shape_23.setTransform(8.9,72.1);
  
      this.shape_24 = new cjs.Shape();
      this.shape_24.graphics.f("#FFBA82").s().p("AgFBHQgMgEgLgdQgKgagEgaQgDgVAIgPIAJgMIAOgHQAPgGANAHQAOAHAJAcQAFAPACANIgDAfIgOAkQgLALgNAAIgIgCg");
      this.shape_24.setTransform(8,70.6);
  
      this.shape_25 = new cjs.Shape();
      this.shape_25.graphics.f("#353C3D").s().p("AgHALIgrgLIgbgKQgFgDgDgGQgDgHAFgCQAFgDAOAFIATAFQAMAAA4AUQBAAUAAALQhGgMgYgHg");
      this.shape_25.setTransform(-7.9,66.3);
  
      this.shape_26 = new cjs.Shape();
      this.shape_26.graphics.f("#131719").s().p("AgOAWIAAgOIADgNQAEgJAEgFIADgGIAMgJIADgBIgDACIgGAHIgDAEIgDAGQgBAGAAAHIABALIABALIADAHIACADIgRAHg");
      this.shape_26.setTransform(-17.8,65.7);
  
      this.shape_27 = new cjs.Shape();
      this.shape_27.graphics.f("#131719").s().p("ABhBNIhOgVQhKgXgsgUIgVgKIgIgEQgKgKABgOQAAgOAIgMQAFgLALgJQAIgFAHgCIACAAIANACIBIAUQBLAXAeALIAOAGIADACIADADIALALQANASAAASQAAALgFAKQgFALgKAIIAAABIgFACIgDAAgAhlg3QgEADgEAFQgJAMABAKQAAAHAEAEIAGAEIA7AWQA5AUAxAOQAgAKAQADIACAAIgDACIAEgCIABAAIgCAAQAEgFADgGQADgFAAgHQAAgMgJgMIgKgMIAAAAIAAAAIAAAAIAAAAIgBAAIgygQQgqgOg2gQQgbgIgRgDIgDgBIgGADg");
      this.shape_27.setTransform(-9.3,68.3);
  
      this.shape_28 = new cjs.Shape();
      this.shape_28.graphics.f("#FFCF2E").s().p("AAEAQQgDAAgEgFQgHgFgBgDQgCgCACgFQABgIAEgDQABgBAIAHQAKAHAAACQAAADgDAGQgEAHgCAAIAAAAg");
      this.shape_28.setTransform(-19.6,63.6);
  
      this.shape_29 = new cjs.Shape();
      this.shape_29.graphics.f("#EA8B00").s().p("AgSALIAAAAQgBgFAFgLQAFgOAEABIAQADQAMADgEAGIgTAZg");
      this.shape_29.setTransform(-19.1,63.5);
  
      this.shape_30 = new cjs.Shape();
      this.shape_30.graphics.f("#A85F00").s().p("AgUAWQgMgIAFgPQAEgNAHgIQAOgRAfANQgcAbACAfIgCABQgGAAgPgLg");
      this.shape_30.setTransform(-19.6,64.8);
  
      this.shape_31 = new cjs.Shape();
      this.shape_31.graphics.f("#2A2F30").s().p("AgRAPQhQgbgEgEQgEgFAHgHIAMgKQAEgEAEAAIAJAAQCpAyADAGQABADgFAMQgGAMgCABIgfABIhNgcg");
      this.shape_31.setTransform(-8.5,67.5);
  
      this.shape_32 = new cjs.Shape();
      this.shape_32.graphics.f("#1F2224").s().p("AAHAoQhzglgMgLQgNgOAKgXQAKgWAKgCQAIgCBiAeQBkAeACAFIASAZQAOAegaATQABABABAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgIAAhigeg");
      this.shape_32.setTransform(-9.3,68.3);
  
      this.addChild(this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
  }).prototype = p = new cjs.Container();
  p.nominalBounds = rect = new cjs.Rectangle(-23.1,35.5,127.6,63.4);
  p.frameBounds = [rect];
  
  
  (lib.Nojnu = function() {
      this.initialize();
  
      // Layer 1
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#5B3304").s().p("AgZglIgCgFIAAgBIATgEIAAABIABACIAjBcg");
      this.shape.setTransform(70.2,14.4,0.707,0.707);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#FFCF2E").s().p("AgdAFIACgCIApAIIARgeIgOAng");
      this.shape_1.setTransform(54.3,23,0.707,0.707);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#7F4B05").s().p("AgYANIAMglIAlAMIgMAlg");
      this.shape_2.setTransform(54.4,22,0.707,0.707);
  
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#EA8B00").s().p("AgfARIAPgwIAwAPIgPAwg");
      this.shape_3.setTransform(54.4,22.2,0.707,0.707);
  
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#FFCF2E").s().p("AgdAFIACgCQAmAJACgBIARgeIgNAng");
      this.shape_4.setTransform(66.6,17.2,0.707,0.707);
  
      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f("#7F4B05").s().p("AgYANIAMglIAlAMIgMAlg");
      this.shape_5.setTransform(66.6,16.2,0.707,0.707);
  
      this.shape_6 = new cjs.Shape();
      this.shape_6.graphics.f("#EA8B00").s().p("AgfARIAPgwIAwAPIgPAwg");
      this.shape_6.setTransform(66.6,16.4,0.707,0.707);
  
      this.shape_7 = new cjs.Shape();
      this.shape_7.graphics.f("#FFCF2E").s().p("AgdAGIACgDIAoAJIARgfIgNAng");
      this.shape_7.setTransform(60.8,19.9,0.707,0.707);
  
      this.shape_8 = new cjs.Shape();
      this.shape_8.graphics.f("#7F4B05").s().p("AgYANIAMglIAlAMIgMAlg");
      this.shape_8.setTransform(60.8,18.9,0.707,0.707);
  
      this.shape_9 = new cjs.Shape();
      this.shape_9.graphics.f("#EA8B00").s().p("AggARIAQgwIAxAPIgQAwg");
      this.shape_9.setTransform(60.9,19,0.707,0.707);
  
      this.shape_10 = new cjs.Shape();
      this.shape_10.graphics.f("#FFCF2E").s().p("AgdAFIACgCQAmAJACgBIARgeIgNAng");
      this.shape_10.setTransform(41.4,29.3,0.707,0.707);
  
      this.shape_11 = new cjs.Shape();
      this.shape_11.graphics.f("#7F4B05").s().p("AgYANIAMglIAlAMIgMAlg");
      this.shape_11.setTransform(41.4,28.3,0.707,0.707);
  
      this.shape_12 = new cjs.Shape();
      this.shape_12.graphics.f("#EA8B00").s().p("AgfARIAPgwIAwAPIgPAwg");
      this.shape_12.setTransform(41.4,28.5,0.707,0.707);
  
      this.shape_13 = new cjs.Shape();
      this.shape_13.graphics.f("#FFCF2E").s().p("AgdAFIACgCIAoAIIARgeIgNAng");
      this.shape_13.setTransform(47.9,26.2,0.707,0.707);
  
      this.shape_14 = new cjs.Shape();
      this.shape_14.graphics.f("#7F4B05").s().p("AgYANIAMglIAmAMIgNAlg");
      this.shape_14.setTransform(47.9,25.2,0.707,0.707);
  
      this.shape_15 = new cjs.Shape();
      this.shape_15.graphics.f("#EA8B00").s().p("AgfARIAPgwIAwAPIgPAwg");
      this.shape_15.setTransform(47.9,25.3,0.707,0.707);
  
      this.shape_16 = new cjs.Shape();
      this.shape_16.graphics.f("#FFCF2E").s().p("AgdAFIACgCQAmAJACgBIARgeIgNAng");
      this.shape_16.setTransform(28.4,35.6,0.707,0.707);
  
      this.shape_17 = new cjs.Shape();
      this.shape_17.graphics.f("#7F4B05").s().p("AgYANIAMglIAlAMIgMAlg");
      this.shape_17.setTransform(28.4,34.6,0.707,0.707);
  
      this.shape_18 = new cjs.Shape();
      this.shape_18.graphics.f("#EA8B00").s().p("AgfARIAPgwIAwAPIgPAwg");
      this.shape_18.setTransform(28.5,34.8,0.707,0.707);
  
      this.shape_19 = new cjs.Shape();
      this.shape_19.graphics.f("#FFCF2E").s().p("AgdAFIACgCQAmAJACgBIARgeIgNAng");
      this.shape_19.setTransform(34.9,32.5,0.707,0.707);
  
      this.shape_20 = new cjs.Shape();
      this.shape_20.graphics.f("#7F4B05").s().p("AgYANIAMglIAlAMIgMAlg");
      this.shape_20.setTransform(34.9,31.5,0.707,0.707);
  
      this.shape_21 = new cjs.Shape();
      this.shape_21.graphics.f("#EA8B00").s().p("AgfARIAPgwIAwAPIgPAwg");
      this.shape_21.setTransform(35,31.6,0.707,0.707);
  
      this.shape_22 = new cjs.Shape();
      this.shape_22.graphics.f("#FFCF2E").s().p("AgdAFIACgCIAoAJIARgfIgNAng");
      this.shape_22.setTransform(15.4,41.9,0.707,0.707);
  
      this.shape_23 = new cjs.Shape();
      this.shape_23.graphics.f("#7F4B05").s().p("AgYANIAMglIAlAMIgMAmg");
      this.shape_23.setTransform(15.4,40.9,0.707,0.707);
  
      this.shape_24 = new cjs.Shape();
      this.shape_24.graphics.f("#EA8B00").s().p("AgfARIAPgwIAwAPIgPAwg");
      this.shape_24.setTransform(15.5,41.1,0.707,0.707);
  
      this.shape_25 = new cjs.Shape();
      this.shape_25.graphics.f("#FFCF2E").s().p("AgeAFIADgCIAoAJIARgfIgMAng");
      this.shape_25.setTransform(21.9,38.8,0.707,0.707);
  
      this.shape_26 = new cjs.Shape();
      this.shape_26.graphics.f("#7F4B05").s().p("AgYANIAMgmIAlANIgMAlg");
      this.shape_26.setTransform(22,37.8,0.707,0.707);
  
      this.shape_27 = new cjs.Shape();
      this.shape_27.graphics.f("#EA8B00").s().p("AgfARIAPgwIAwAPIgPAwg");
      this.shape_27.setTransform(22,37.9,0.707,0.707);
  
      this.shape_28 = new cjs.Shape();
      this.shape_28.graphics.f("#5B3304").s().p("AmhEQQgIgCgLgFQgTgIgLgOQgKgOAAgSQAAgVARgcIACgCIACgCQBqg6GMi9QDEhfCvhTIAJgEIATAqQAPAjAKAPIADAFIABADIACAFIgCAGIgBABIgCABIh1A9QhhAvitBQInwDxIgDABgAA3hHQmAC4hzA+QgMAVAAAPQAAALAGAIQAFAHAJAGQAJAGALACQKIk2CvhXIAugXIgFgIIgehDg");
      this.shape_28.setTransform(43.3,27.3,0.707,0.707);
  
      this.shape_29 = new cjs.Shape();
      this.shape_29.graphics.f("#FFCF2E").s().p("AmzDKQACgEDLhgQEkiKB/g+QCQhHBAgiIAegRQAEACAGAMIgJABQglALiEBAQirBVkjCUQjnB2gCAAQgKgCALgRgAG1jOQAIgCgGAGIgCgEgAG1jOIAAAAg");
      this.shape_29.setTransform(42.4,26.7,0.707,0.707);
  
      this.shape_30 = new cjs.Shape();
      this.shape_30.graphics.f("#EA8B00").s().p("Am5C+QAGgNGyjSIGujSIAUAxIhGAgQjTBlpqEwIgCABQgIAAATg2gAHBjCQANgGgNAGgAHBjCg");
      this.shape_30.setTransform(42.9,26.2,0.707,0.707);
  
      this.shape_31 = new cjs.Shape();
      this.shape_31.graphics.f("#A85F00").s().p("AnDDyQgegbAfgxQBtg8GIi8IF0ixQAmBYAGAEQADABmJC6QmoDLhEAlQgVgEgPgOg");
      this.shape_31.setTransform(43.3,27.4,0.707,0.707);
  
      this.addChild(this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
  }).prototype = p = new cjs.Container();
  p.nominalBounds = rect = new cjs.Rectangle(9.6,8,67.5,38.5);
  p.frameBounds = [rect];
  
  
  (lib.L_Sholder = function() {
      this.initialize();
  
      // Isolation Mode
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#3D4344").s().p("AATAhQgOgNgBAAQgGABgQgQQgQgNAGgHQAMgNAFgDQAKgIAFAGIAPAUQAOAXgDARQgBAKgEAAQgDAAgDgEg");
      this.shape.setTransform(25.3,30.7,0.841,0.841,16.8);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#2E3335").s().p("AgkAqQgjgWAGgHQADgFAagNQAagQAEAAQAFAAAcgXQAAADAWAkQAVAjgDAJQgEAHgTgFQgYgHgIABIgVAHQgJADgHAAQgHAAgEgDg");
      this.shape_1.setTransform(23.1,30.2,0.841,0.841,16.8);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#0D1011").s().p("AgBCrQgUgFgNgKQgJgHgEgKQgIgQgUgaQgYgegNgcQgPgdgKgaQgQgugBgfQAAgbALgRQAMgWAagJQAQgGAZAAQAiAAAqAMIAEABIArBOQArBRAXAhIANASIADAEQAGAEAEALQADAIAAALQAAAYgMAVQgPAZgYAHQggALgjAAQgUAAgRgEgAhuiPQgOAJgGARQgDAKgBAOQABAeAPAoQAKAbAOAbQAMAaAXAbQAWAeAIASQACAFAGAEQAGAFAIADQASAGAZAAQAhAAAbgJQASgHALgRQAJgQAAgTQAAgGgCgHQgBgEgCgCIgHgGIgHgJIg7hjIg1hiQgngKgcAAQgcAAgSALg");
      this.shape_2.setTransform(22.3,28.6,0.841,0.841,16.8);
  
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#121314").s().p("AhOBGQAVgQAWgVQAsgoAMgaQATgpAQgfIAXBAQAAAIgFATQgIAWgMATQgUAcgPAGIgbAEIg3Apg");
      this.shape_3.setTransform(20.5,22.5,0.841,0.841,16.8);
  
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#1F2224").s().p("AASCkQgugEgLgZQgHgRgVgbQgYgegNgaQgqhTACgzQAFhcCUAmIA3BmQA6BmAMAJQARANgKAjQgKAlggAKQgdAKghAAIgTgBg");
      this.shape_4.setTransform(22.3,28.6,0.841,0.841,16.8);
  
      this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
  }).prototype = p = new cjs.Container();
  p.nominalBounds = rect = new cjs.Rectangle(11.5,12.4,21.5,32);
  p.frameBounds = [rect];
  
  
  (lib.l_Leg = function() {
      this.initialize();
  
      // Isolation Mode
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#2A2F30").s().p("AgKA4QgJgEARhuQAAgGAEAcIAIAnQAHAwgEAFQgDAEgGAAQgEAAgKgEg");
      this.shape.setTransform(16.5,6.5,1,1,-4.5);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#232728").s().p("AgaA8QgHgBgDgGIAAgGIAMhvIAVAOIASASQATATADAEQACAEgHAbQgGAagEAKQgDAHgPAAQgLAAgTgFg");
      this.shape_1.setTransform(17.1,6,1,1,-4.5);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#3D4344").s().p("AgDAKIgDgFQgBgEABgDIACgFQAAgFAEAFQAEAEADADQACADgDADQgDADgDABIgCAAIgBAAg");
      this.shape_2.setTransform(32.1,17.3,1,1,-4.5);
  
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#3D4344").s().p("AgjgIQAGgDASADIAOADQAIgBANAGQAMADAAADQAAAEggAAQgOAAgZgSg");
      this.shape_3.setTransform(24.5,20.3,1,1,-4.5);
  
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#5B3304").s().p("ABWAkQgQgOgKgGQgSgMgggEIgKAAQgPAAgVAEQgUAHgLAJQgEADgFAAQgEAAgGgDQgFgBgDgEQgDgEAAgDQAAgDACgDIAAAAIAAgBQAZgTAcgKQAXgJATAAQALAAAHADQAmAMAYASIAHAFIAHAKIADAHIABAHIgCAGIgEAFIgDACgAALgJQAjAGATAKQALAHAMALIgBgEIgCgFIgGgJIgFgFQgGgDgHgDQgTgMgbgJQgGgCgJAAQgRAAgVAIQgaAKgXARIAAAAIADACQAEADAEAAIADgBQAMgKAWgFQAXgHAQAAg");
      this.shape_4.setTransform(22.5,19,1,1,-4.5);
  
      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f("#FFCF2E").s().p("AALALQgEgBgLgHIgcgLQAIgFAXAGQAPADAPAEQAIAEgJAFQgGACgGAAIgFAAg");
      this.shape_5.setTransform(24.2,17,1,1,-4.5);
  
      this.shape_6 = new cjs.Shape();
      this.shape_6.graphics.f("#EA8B00").s().p("AgEALIgxgOQgCgCARgFIARgFQANABAcAMIAhAOQAHAEgZAAQgaAAgNgFg");
      this.shape_6.setTransform(24,16.9,1,1,-4.5);
  
      this.shape_7 = new cjs.Shape();
      this.shape_7.graphics.f("#A85F00").s().p("AA6AJQgVgMgYgCQghgDggALQgPAHgKAHQgKgEgBgBQgFgEADgFQAfgXAjgIQAZgGAPAFQAdAJAUAMQAOAIAEAFQAFAHAEAPIgBAAQgBAAgCAFQgSgPgMgIg");
      this.shape_7.setTransform(22.5,18.9,1,1,-4.5);
  
      this.shape_8 = new cjs.Shape();
      this.shape_8.graphics.f("#5B3304").s().p("AAEAnQgHgFgNgDIgDgBIgBgLQAAgTAFgSQAEgOAGgGIAEgDIACAAQAHAAAFAEQAIAGAAAJIAAACIgBABQgKAPAAAZIABAVgAABAbIgBgGQAAgbALgRQgBgDgDgDQgDgDgDAAIgBABIAAACIgEAKQgGASAAAUIABADIAKAFg");
      this.shape_8.setTransform(29.7,16.1,1,1,-4.5);
  
      this.shape_9 = new cjs.Shape();
      this.shape_9.graphics.f("#FFCF2E").s().p("AgHgDQAAgIAKADIAIADQgBABABAGQABAHgKgBQgKgBgBACIgBABQgCAAAFgNg");
      this.shape_9.setTransform(29.4,14.5,1,1,-4.5);
  
      this.shape_10 = new cjs.Shape();
      this.shape_10.graphics.f("#EA8B00").s().p("AgMABIABgJQAAgIAHgIQADgDAGADIAIAFIAAAIQgBALgDAGQgCAFgDAAQgEgBgJAQQgDgLAAgOg");
      this.shape_10.setTransform(29.3,15.8,1,1,-4.5);
  
      this.shape_11 = new cjs.Shape();
      this.shape_11.graphics.f("#A85F00").s().p("AgPAcQgBgbAGgSQAFgQAFgCQACgBAFADQAFAEAEAHQgOAWAEAkQgIgFgNgDg");
      this.shape_11.setTransform(29.7,15.9,1,1,-4.5);
  
      this.shape_12 = new cjs.Shape();
      this.shape_12.graphics.f("#131719").s().p("AgBCPIgbgOIgZgNQgMgEgNgDQgUgEgQgPIgNgPIgDgDIAShMIgNiFIAHgDQAXgKAiAAQArAAA0AOQAwALAAACIAKADIgvB+IAMALIAaAWIADACIAQAIQAOAHAHAKQAGAIACALIAAAEQAAALgHAIQgFAFgJAFQgJAFgIABIgSAJQgSAJgRAHQgFACgGAAQgOAAgQgIgAhnh8IAMB5IgRBGIAIAIQANAMAMADQATADAKAFIAQAIIATAKQALAHAOAFQAIADAHAAIAEgBQAWgIAZgOIAFgCIACgBIACAAIAHgDQAIgCAEgFQADgDAAgDIAAgCQgBgGgHgHQgDgEgNgGIgKgFIgOgJIgpgmIAsh3IgDgBIghgJQg0gNgnAAQgaAAgQAGg");
      this.shape_12.setTransform(21.9,10.1,1,1,-4.5);
  
      this.shape_13 = new cjs.Shape();
      this.shape_13.graphics.f("#272B2D").s().p("AgzAWQgKgFgPgPQgPgMgBgGQgBgGACgDQAFgFAOgCQAmAAAegGQAMgDAIgEQAIgBAMAKIASASIAVAQQANAIAFAGQAFAGgoAOQgkANgNABIAAAAQgJAAgzgYg");
      this.shape_13.setTransform(24,16.3,1,1,-4.5);
  
      this.shape_14 = new cjs.Shape();
      this.shape_14.graphics.f("#131719").s().p("AgfAVQgKgHgJgLQgGgGgFgJIgEgJIASgHIAAAAIABABIABACIAFAKQAKANAKAGQAJAFAJAAIAEAAQAUgDAPgKQAFgFAFgJIAAgBIATAFQAAAHgLALQgSAUghAFIgGAAQgPAAgOgIg");
      this.shape_14.setTransform(22.6,0.5,1,1,-4.5);
  
      this.shape_15 = new cjs.Shape();
      this.shape_15.graphics.f("#1A1D1E").s().p("AgCCEIgggRIgQgIQgKgEgRgDQgPgDgPgOIgMgNIARhJIgMiAQAngRBQAQQApAIAhALIgtB7IAUASQAVATAGADIAXAMQAPAKABAOQACAOgQAJQgIAEgJACQghARgUAIIgHABQgNAAgSgJg");
      this.shape_15.setTransform(22,10.1,1,1,-4.5);
  
      this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
  }).prototype = p = new cjs.Container();
  p.nominalBounds = rect = new cjs.Rectangle(8.3,-4.6,27.4,29.6);
  p.frameBounds = [rect];
  
  
  (lib.L_Heand = function() {
      this.initialize();
  
      // Isolation Mode
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#93542A").s().p("AAMAVIAHgBIABgBIAAgKIgCgZIghACIgDAAIgCABIgDgJIAEgBIAIgBIAiABIABAmIgBAFIgBACIgCABIgDAAIgjACg");
      this.shape.setTransform(8.3,62.5,0.814,0.814,12.7);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#0D1011").s().p("AgEAaQgvAAgmgQIgOgHIgEgCIgEgBIAAAAIAAgBIgCgDIAAgDIAAgEIABgCIABgDQADgFACgCIACgCIAMAGIAAADIgBAEIAMAGQAkAMAqACQAlABAogJIAjgLIAFALIgJAEIgbAKQgnAMgoAAIgDAAg");
      this.shape_1.setTransform(13.5,54.1,0.814,0.814,12.7);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#0D1011").s().p("AgIAVIgegDIgTgDIgRgDIgZgGIgKgDIAIgQIASAIIAdAIIARAEIAUAEIASACIAVAAIATgCIASgEIAOgHIAMgFIAIgHIAGgJIAKARIgCABQAAgBgFAEIgLADIgeALQgJADgKABIgUADIgKABg");
      this.shape_2.setTransform(14.5,52.4,0.814,0.814,12.7);
  
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#1F2224").s().p("AgOAKQgtgGgGgDIgNgBQgIgCAAgFQABgEAIgCIAJgCIAIAEQANAFAZAEQAuAHAygHIANAIQgCAIgfACIgIAAQgVAAgngGg");
      this.shape_3.setTransform(12.5,53.2,0.814,0.814,12.7);
  
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#0D1011").s().p("AhHBgIAcgSIA0gkIAcgWIAGgHIAAAAQADgHAAgGQAAgNgKgkQgCgIAAgJQAAgNAEgKQAEgHAIgHQAMgJAFAAIAFATIgGADQgGAEgEAHQgCAEAAAJIABAMQAKApAAANQAAALgDAKIgFAGIgFAGIgQANIgnAeIg6Alg");
      this.shape_4.setTransform(12.3,37.7,0.814,0.814,12.7);
  
      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f("#0D1011").s().p("AAMDtIgNiRIgSgNQgZgQgngPIgEgCIghg/IAAAAIgBgFIABgGIABgDIAGgFIgPgxQgIgZgJgfQgEgSgBgJIAUgCQAAAIAFAQIAKAkIAWBHIAAAAIABAEQAAAEgCAEIgFAFIgBACIAbAyQA5AXAeAaIACADIAOCMIANADIAYgKQAbgMAVgLIAHgHQACgFACgKQAFgTAAgbQAAgtgKhCIgBgCIAAgBIgKhFQgMhSgEgaIgEgOQgLgggGgIIgEgDQgCgCgEAAQgIAAgYAJIgHgTQAdgKAKAAQAKAAAGAEQAGAEAGAIQAIALAKAgIAEAQIAbCyIAAABIAFAlQAFAtABAiQAAATgCAUQgDATgHAMQgGAKgIAFQgfASgvASIgDACg");
      this.shape_5.setTransform(13.2,48.4,0.814,0.814,12.7);
  
      this.shape_6 = new cjs.Shape();
      this.shape_6.graphics.f("#495254").s().p("AgPAsIgEgBQgEgPgEgSQgGgjAHgQQAGgNAOgCIAUABQAMAAAFADIgRADIgEADIgFAEQgGAMABAMIAFAgIAEAVQABARgCAFQgPgLgIgCg");
      this.shape_6.setTransform(18.9,35.6,0.814,0.814,12.7);
  
      this.shape_7 = new cjs.Shape();
      this.shape_7.graphics.f("#495254").s().p("AgcASIABgDIA5gsIgEAYQgrAhgJACQgDgIABgEg");
      this.shape_7.setTransform(8,43.8,0.814,0.814,12.7);
  
      this.shape_8 = new cjs.Shape();
      this.shape_8.graphics.f("#353B3D").s().p("AhSBuQgBgBgFgGIgEgHQA1gcAZgRQAqgeAIgcQABgFgIgcQgIgcAAgEQACgIAGgRIAWgMIAQAAQATACAHAHQgFgDgFgBQgNgDgKAIQgOALANA6QAJAlgOANQgLAJg7ApQg9AogEAAIgBAAg");
      this.shape_8.setTransform(13.8,38.5,0.814,0.814,12.7);
  
      this.shape_9 = new cjs.Shape();
      this.shape_9.graphics.f("#2A2F30").s().p("AgSBWIAAgaIACgWIgKilIAkC0QABADAKAEIABASQACAVADAUQgMAGgTADg");
      this.shape_9.setTransform(21.7,44.7,0.814,0.814,12.7);
  
      this.shape_10 = new cjs.Shape();
      this.shape_10.graphics.f("#232728").s().p("AgfCHQgDgaAAgHQABgEADgEQADgGADgIQAFgPgKgxIgJguQgDgNgGgvIgGgrQAEgDAiAGQAJATgBAdIgBARQgBALACAHQAHAYAeAGQAGAuABADIACAEIACAHQADAGAJAyQADANgHAIQgEAEgTAEIgZAFQgFACgMAAIgPAAg");
      this.shape_10.setTransform(20.9,43.8,0.814,0.814,12.7);
  
      this.shape_11 = new cjs.Shape();
      this.shape_11.graphics.f("#353B3D").s().p("AAABKQgGgBgDgEQgCgDgFg/QgFg8gCAAQgDABADgSIATACIANB6IACAMQAEAMALAAIgQABIgKgBg");
      this.shape_11.setTransform(13,61.6,0.814,0.814,12.7);
  
      this.shape_12 = new cjs.Shape();
      this.shape_12.graphics.f("#2A2F30").s().p("AgKApQACghgBgGIAAgIQAAgCADgEQAFgFgFgwIABgCIARgDIgBA+QAAAugEAUQgCAKgGACIgKABIAAAAIABgeg");
      this.shape_12.setTransform(18.6,61.6,0.814,0.814,12.7);
  
      this.shape_13 = new cjs.Shape();
      this.shape_13.graphics.f("#232728").s().p("AgaBOIAIgKQABgDgEgLQgEgNAAgJIgFhXIA5gYIACASIACArQAAApgLAdQgFALgMAEQgTAIgDACIgIADQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAABgBg");
      this.shape_13.setTransform(17.8,61.7,0.814,0.814,12.7);
  
      this.shape_14 = new cjs.Shape();
      this.shape_14.graphics.f("#1F2224").s().p("AAGDZIgGhFQgFgzgDgQQAAgBgRgDQgVgEgQgGQgVgJgCgCQgDgDgLgbIgcgyQAbgKAjgUQAqgYAHgPQAIgSgNgmQgLgiAUgaQAygcAPADQAJABAPAfQALAWAaC6IANBYQAGBcggATQgyAegYAAQgSAAgDgSg");
      this.shape_14.setTransform(14.4,48.8,0.814,0.814,12.7);
  
      this.shape_15 = new cjs.Shape();
      this.shape_15.graphics.f("#1F2224").s().p("Ag/AiQgPgvACgTQACgKA8gbQAvgVAsgOQgKAbAHBSQACARgOANQgIAIgWARQgIAJg/AkIgYhHg");
      this.shape_15.setTransform(10.7,36.7,0.814,0.814,12.7);
  
      this.shape_16 = new cjs.Shape();
      this.shape_16.graphics.f("#93542A").s().p("AgTAuIgCAAQgTgEgPgFIgEgBIgBgBIgBAAIgBgBIgCgCIgBgCIgDgKIgDghIABgJQABgHACgDQABgDAIgFIAIgDIAJgCIAKAAIgBAEQgFABgKAFIgHAEIgEADIgBAPIADAfIACAGIADABIAgAJIANgEQAGgCAFgEIADgCIASgWIACAAIAWgBQAMgBAKACIAAAAQgIAEgNADIgTADIABgCIgDACIACAAIgKAOIgHAHIgDADQgHAFgHADIgRAEgAg3AYIABAAIgBAAIAAAAIAAAAg");
      this.shape_16.setTransform(5.6,58.7,0.814,0.814,12.7);
  
      this.shape_17 = new cjs.Shape();
      this.shape_17.graphics.f("#93542A").s().p("AgpAUQABgHADgKQAFgLADgEIAEgFIADgCIABAAIAAAAIABAAIACgBIACAAIALADQAVAIAMAGIALAFIADAFIAAABQgDABgDAAIgMgDQgMgEgWgIIgIgEIAAAAIgBAAIgDADQgFAEgEAIIgGAQg");
      this.shape_17.setTransform(6.5,53.4,0.814,0.814,12.7);
  
      this.shape_18 = new cjs.Shape();
      this.shape_18.graphics.f("#EAA36E").s().p("AgfARQgFgDgEgOQgDgPADgKQADAKAIAKQAIAIAIADQAHADAIABIARACIAIACIgQAMIgIAAQgPAAgTgJgAAbAOIAQgLQAAAJgHACIgEAAIgFAAgAAbAOIAAAAg");
      this.shape_18.setTransform(3.2,59.3,0.814,0.814,12.7);
  
      this.shape_19 = new cjs.Shape();
      this.shape_19.graphics.f("#D68B54").s().p("AADAiQgHgDgEgCQgSgLgKgIIgIgGIgEgJIAHgbIAYgDIAFABQAHgBgBACQgEARACAJQABAEABABIAWAGQAZAHAIgFIgVAZQgEAEgGAAIgDABIgMgCg");
      this.shape_19.setTransform(3.7,58.5,0.814,0.814,12.7);
  
      this.shape_20 = new cjs.Shape();
      this.shape_20.graphics.f("#AF6E41").s().p("AgXALIgegNIAKgVIgBgBIBhAOQABAAgCAHQgBAKADASIgHAAQglAAghgOg");
      this.shape_20.setTransform(8.2,54.1,0.814,0.814,12.7);
  
      this.shape_21 = new cjs.Shape();
      this.shape_21.graphics.f("#D68B54").s().p("AAGAOQgIgEgmAFQgKgEAYglIAGgCQAFgCAEABQAFACgBAGIgBAFQAzAMAAABIgLAhQgSgNgIgDg");
      this.shape_21.setTransform(6.4,54.3,0.814,0.814,12.7);
  
      this.shape_22 = new cjs.Shape();
      this.shape_22.graphics.f("#D68B54").s().p("AAOAaQAPgWAAgDQADgLgXgCQgNgCgSACQgRACgFAEIgJAIQgBABgBABQAAABgBAAQAAAAgBAAQAAAAAAgBIADgLQADgJACgCQACgCAFAAIAJgBIAQgFQAOgFAEgBQAIgBAVACQAWACAEACQAEACgDAXQgBADgGALQgHANgFACQgGAFgMgBIAAACQgCAAgEgHg");
      this.shape_22.setTransform(4.9,57.1,0.814,0.814,12.7);
  
      this.shape_23 = new cjs.Shape();
      this.shape_23.graphics.f("#FFBA82").s().p("AggA0QgKgJAAgfQAAgaAHgcQACgEADgEIAGgHQAQAEARANQAYAQAKAEQAAALgBAIIgQAcIgZAdQgDACgHAAIgCAAQgNAAgIgGg");
      this.shape_23.setTransform(5.8,57.1,0.814,0.814,12.7);
  
      this.shape_24 = new cjs.Shape();
      this.shape_24.graphics.f("#93542A").s().p("AgJADIATgMIgMATg");
      this.shape_24.setTransform(12.6,65.3,0.814,0.814,12.7);
  
      this.shape_25 = new cjs.Shape();
      this.shape_25.graphics.f("#2A2F30").s().p("AgJAaIgDgNIgEgMIgEgRIgCgmIAtgFIgBADIgIAOIgEAYIAABKIgWAEg");
      this.shape_25.setTransform(13.2,60.7,0.814,0.814,12.7);
  
      this.shape_26 = new cjs.Shape();
      this.shape_26.graphics.f("#232728").s().p("AgXA6QgHgDgEgsIgCgqQgHgOAAgCIgBgLIAzADQAKAAAbgFIgOAiQgBADAAAfIgBAgIANAJIgQAIQgGACgRACIgGAAQgNAAgGgDg");
      this.shape_26.setTransform(14.8,61.1,0.814,0.814,12.7);
  
      this.shape_27 = new cjs.Shape();
      this.shape_27.graphics.f("#93542A").s().p("AhwA9IAAgCIgCgaIABgkIABgFIAEgDIAIgHIAegWIABgFIABgLQAAgSgCgLIAAgDIgBgDIADgCQADgBAEAAQAFAAALACICgA0IgIBEIgBACIgwAwQgKAKgGAEIgCACIgDAAIh5ABgAg6g4IgBAMQAAAGgDAEIgHAHIgdAUIgFAEIgBAjIACAYIAXAdIBzgBIgBABIACgBIgBAAIAAAAQADgBACgDIA5g4IAGg5Ig5gUQhAgXgegGIgNgCIACAcg");
      this.shape_27.setTransform(12.3,61.2,0.814,0.814,12.7);
  
      this.shape_28 = new cjs.Shape();
      this.shape_28.graphics.f("#AF6E41").s().p("AAEgFQAAgBgJAAIgMABIgKgBQgHgBABgBQAFgGASgLQAKgHABgSIAAgQIAWgGQAQCTgGgDQgDgBgKABIgMABQgCAAgChOg");
      this.shape_28.setTransform(9.6,61.7,0.814,0.814,12.7);
  
      this.shape_29 = new cjs.Shape();
      this.shape_29.graphics.f("#D68B54").s().p("AhqA7IgDgbIABgTIAAgQQAAgDASgNQAVgOADgEQAEgFgBgYIgCgWQAIgFBUAcQAqANApAPIgHA/Qg+BAgEgBIh2ABg");
      this.shape_29.setTransform(12.3,61.2,0.814,0.814,12.7);
  
      this.addChild(this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
  }).prototype = p = new cjs.Container();
  p.nominalBounds = rect = new cjs.Rectangle(-0.3,29.7,25.7,39.6);
  p.frameBounds = [rect];
  
  
  (lib.L_ForeLeg = function() {
      this.initialize();
  
      // Isolation Mode
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#0D1011").s().p("AhID1QgbgGgRgOQgNgMgHgRQgSgtgNg2QgPhBgBg0QAAgXAEgYQADgSAPgTQAOgQAWgRQAigaA/gfQBCghBDgWIAHATIgTAHQgQAFggANQhLAfgzAgQgrAZgVAaQgMANgCAOQgEAYAAAUQAAAwAQBBQAMAzASAtQAFAMAJAJQAKAIAMAEQAVAIAjAAIAugBQAcAAAsgQQATgHAigQIAAAAIABgDIAEgMQAFgRACgZQAGgtAAg8IgBgdQAAgQgIghQgFgTgNgpQgNgpgVg7IgEgLIATgHIAWA9QAXBFAJAjQAKApABAUIABAeQAABNgJA1QgDATgEAMQgCAHgFAGIgGAFQgXANggAMQguAQghAAIguACQgbAAgUgFg");
      this.shape.setTransform(12.6,-0.9,0.878,0.922,0,10.2,11.3);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#272B2D").s().p("AhBCOQgJgJAShOIAThKQAHgGA5h1QAJgIAKAHQAFAEADAFQAGA5AFA7QAIB0gJAOQguAOgvASQgMADgJAAQgKAAgFgFg");
      this.shape_1.setTransform(18.3,5.4,0.878,0.922,0,10.2,11.3);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#1F2224").s().p("AhVDsQgZgFgPgnQgRg0gMgeQgSgugDgrQgEgqALhAQAJg1CIg6QBCgdBCgSIAAAPQASAuAOArQAeBVADAkQAHA5gHBPQgHBRgOAHQgiASgxAKQgsAKgnAAQglAAgjgIg");
      this.shape_2.setTransform(12.5,-0.6,0.878,0.922,0,10.2,11.3);
  
      this.addChild(this.shape_2,this.shape_1,this.shape);
  }).prototype = p = new cjs.Container();
  p.nominalBounds = rect = new cjs.Rectangle(-3.5,-21.8,32.2,44.2);
  p.frameBounds = [rect];
  
  
  (lib.Head = function() {
      this.initialize();
  
      // Isolation Mode
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#3D4344").s().p("AAqBbIgqgTQgKgCArgPQAIgDiAgHQgZgGgagOQgygagCglQAjg8BVgGQAqgDAiAJQBoAcAlAfQAWARARAqQAMAggWAZQgVAYgnAEIgKAAQgcAAgkgOg");
      this.shape.setTransform(40.7,2.6,0.834,0.834);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#2E3335").s().p("AhKBvIgxgmICIADQAKAAiwgrQgSgGgTgMQgngXgGgdQAcg4BJggQA1gYAVACQCwAMBMBkQAxA8gGA1QgCAYgqAVQgzAZhQAAQhHAAg/glg");
      this.shape_1.setTransform(40.1,5.7,0.834,0.834);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#272B2D").s().p("Ag4C1QgmgJgigPIgbgMICAAAQgmgHgqgMQhVgYgagVQgZgUAFghIALgcQgIAFgKADQgUAGgNgJQAEgnAng2QAXggAcgcIACgCQBgg9BeARQAmAGBnAvQA1AZAmBLQAbAzAMA+QAEAngiAjQgdAegnAMQg0ALg0AAQhDAAhCgSg");
      this.shape_2.setTransform(39.2,10.1,0.834,0.834);
  
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#5B3304").s().p("ABXBhIABgBIgOgHQgSgGgRgCQgTgBgmgIQgpgJghgJIhagYIgpAEIgFhYIAPAHQCXA+BkAAQA6AAAmgSQAfgQAUgcQAWghABgjIAUgBIACAaQAAAfgJAcQgGAUgVAcQgWAggGANQgIAVgVASQgLAJgIAEIgGADgAh6AaQBFASAoAIQAkAJARAAQAhACAbARIABAAIANANIAKgHQAQgOAIgRQAHgQAWghQAUgaAFgRIAAgBQgVAhgkARQgrAXhAAAQhjAAiSg6IADAjIAYgCg");
      this.shape_3.setTransform(46.5,37.3,0.834,0.834);
  
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#FFCF2E").s().p("AAOAdQgkgBgpgIQgPgDgcgPIgagNQBqAXBZgRQAtgJAYgOQABAHgQAdQggAVg8AAIgLAAg");
      this.shape_4.setTransform(49.1,39.1,0.834,0.834);
  
      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f("#EA8B00").s().p("AhgAoIh4gnIgBgRQBTAcBnALQBZAKApgIQAggHAcgVQANgKAugwQgEAdgZAgQgfAogsAOQgcAIglAAQg8AAhVgWg");
      this.shape_5.setTransform(47,36.5,0.834,0.834);
  
      this.shape_6 = new cjs.Shape();
      this.shape_6.graphics.f("#A85F00").s().p("ABeBeIgQgJQgUgIgTgBQghgBhggZIhbgZIghADIgFg/QEMBwBrhNQAigXAPgrQAKgoACgDIACAhQABAUgIAbQgKAWgNAVIgLAOQgNASgIASQgIATgTAQQgJAHgIAEg");
      this.shape_6.setTransform(46.5,36.9,0.834,0.834);
  
      this.shape_7 = new cjs.Shape();
      this.shape_7.graphics.f("#19110C").s().p("AgDAcIgFgEIgMgKIgCgCIAAgDQADgMAOgOQAJgLADAAIACgBIACABQAHADADAGQACAFAAAGQAAAIgFAMQgEAIgFAGIgDACQgCACgDAAIgEgCgAABAUIAAAAIACgDIAFgIQAFgJAAgIQAAgEgBgDIgDgCIgJAIQgJAJgCAJIAJAHIADAEIAAAAIAAAAg");
      this.shape_7.setTransform(60.5,31.7,0.834,0.834);
  
      this.shape_8 = new cjs.Shape();
      this.shape_8.graphics.f("#EEE8DF").s().p("AgDAWIgOgMQACgKANgNIALgLQAVALgbAlIgCABQgBAAgDgDg");
      this.shape_8.setTransform(60.5,31.7,0.834,0.834);
  
      this.shape_9 = new cjs.Shape();
      this.shape_9.graphics.f("#19110C").s().p("AgcAWQgMgGgMgMIgLgIIgDgEIAEgEIATgIQAXgJAVAAIAFAAQAZABAUATQAJAIAFAIIACAEIgEACQgeARgbAAQgRAAgRgIgAglgMIgOAGIAFAFQALAHAMAHQANAHAQAAQAXAAAYgNIAAAAIgJgJQgQgQgWgBIgFAAQgSAAgUAHg");
      this.shape_9.setTransform(44.5,35.5,0.834,0.834);
  
      this.shape_10 = new cjs.Shape();
      this.shape_10.graphics.f("#FFFFFF").s().p("AgaARQgLgGgMgLIgKgHIATgJQAYgJAWABQAXABASARQAJAHAEAIQgdAQgaAAQgPAAgQgIg");
      this.shape_10.setTransform(44.6,35.6,0.834,0.834);
  
      this.shape_11 = new cjs.Shape();
      this.shape_11.graphics.f("#020102").s().p("AgkgEQAIgLAUgGQAVgHAYAEQgHACgbAXIgXAZg");
      this.shape_11.setTransform(60.6,29.5,0.834,0.834);
  
      this.shape_12 = new cjs.Shape();
      this.shape_12.graphics.f("#020102").s().p("AhggSQA/gIBGAHQAkAEAXAFIgBAEIACAdg");
      this.shape_12.setTransform(41.7,32.4,0.834,0.834);
  
      this.shape_13 = new cjs.Shape();
      this.shape_13.graphics.f("#0D1011").s().p("Ag6BYQhVgeg8gqQgpgbgRgZIgRgbIAdAMIACAAIASAHQAVAHAhAIQBcAWBXAAQBoAABageQAigRAPgaQAJgQAAgPIAAgCIAAgBIAAgBIAAgBIATgEIABAAIABAOQACAQAAARQAAA5gSApQgZA9g8AXQgfAMgpAAQhIAAhaghgAjAAAQAoAaAxAWQA1AYAzAOQA5APAuAAQAlAAAcgLQAzgTAWg2QAPgfABgvQgRAZgiARIgBAAIAAAAQhdAehtAAQhaAAhegUIgpgNQAMALARALg");
      this.shape_13.setTransform(41.7,31.1,0.834,0.834);
  
      this.shape_14 = new cjs.Shape();
      this.shape_14.graphics.f("#D68B54").s().p("AASA3QhHgBhQgPQhEgMgHgGIgcgWQgSgPACAAQEDA6CQgqQBIgVAUghIALADQgNBqjMAAIgTAAg");
      this.shape_14.setTransform(42.8,29.6,0.834,0.834);
  
      this.shape_15 = new cjs.Shape();
      this.shape_15.graphics.f("#D68B54").s().p("AglASIgNgBIgKgDQgJgDgEgBQgGgBgKgVQgJgXACgBICdgLIAkAWIgJAdIgagKQgbgMgBABIgTARQgPAPgFAHQgEAFgBAKIgCALIAAAAQgDAAgWgeg");
      this.shape_15.setTransform(53.1,34.9,0.834,0.834);
  
      this.shape_16 = new cjs.Shape();
      this.shape_16.graphics.f("#FEBA84").s().p("AhKBOQiRg3gpg9QA5AXBWANQCqAYCNgvQAugXAOgjIAEgfIADAcQABAigFAeQgQBghNAdQgfAMgoAAQhGAAhhglg");
      this.shape_16.setTransform(42.3,30.8,0.834,0.834);
  
      this.shape_17 = new cjs.Shape();
      this.shape_17.graphics.f("#0D1011").s().p("ABLGcQhIAAhLgkQhKgig+g8QhAg9glhKQgnhPAAhPQAAhRAbhKQAahHAxg4QAwg3A/gfQBBggBGAAQBHAABBAgQA/AfAwA3QAxA4AaBHQAbBKAABRQAACCgiBhQgnBvhLAxQg4AkhEAAIgCAAgAh+lpQg7AdguA0QguA1gZBEQgbBHAABNQAABKAmBLQAjBHA9A7QA8A5BIAhQBHAiBDAAQBBAAAyghQAugeAhg7QA9htAAisQAAhNgahHQgahEgug1Qgug0g7gdQg8gdhDgBQhBABg9Adg");
      this.shape_17.setTransform(36.6,25.3,0.834,0.834);
  
      this.shape_18 = new cjs.Shape();
      this.shape_18.graphics.f("#1F2224").s().p("AjKETQiJiDAAibQAAihBkhzQBjhyCMAAQCMAABkByQBjBzABChQgBCvg9BvQhHB/iFAAQiPAAiFh/g");
      this.shape_18.setTransform(36.6,25.4,0.834,0.834);
  
      this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
  }).prototype = p = new cjs.Container();
  p.nominalBounds = rect = new cjs.Rectangle(7.5,-9,58.4,68.8);
  p.frameBounds = [rect];
  
  
  (lib.Body = function() {
      this.initialize();
  
      // Isolation Mode
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#3D4344").s().p("AAmA9QhEgBgQgNQgOgLgRgjIgRgnQACgIAOgIIAOgHIBGA1QBJA0ANAIQAOAKg4AAIgMgBg");
      this.shape.setTransform(24.4,5.4,0.913,1);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#0D1011").s().p("AAWBKQh5gBhVgnQgbgNgUgPQgNgIgCgDIgCgDIAAhBIAMADQB0AeB3AAQB0AAB6geIAMgDIAABBIgCACQgQATgjAVQhHAohlAAgAjlgQIABAAIAJAIQATAMAZAMQBSAlBzABIACAAQBdAABDglQAfgRAPgPIAAghQh4AchvAAQhzAAhxgbg");
      this.shape_1.setTransform(29.1,36.8,0.913,1);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#1F2224").s().p("AijApQgfgLgagPIgTgMIAAg9QB9AcBWACQAIACAZgBIAXgBQAdAAA4gMQAjgHBcgWIAAA/QgSAOggASQhAAkhMAGQgYACgXAAQhXAAhPgdg");
      this.shape_2.setTransform(29.2,36.6,0.913,1);
  
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#5B3304").s().p("AgMCIIAAgKQAAgXgDgjQgHg5gQgkQgNghgTgQQgLgKgOgFIgigKIAigJQBTgVAygLIAEAAIADABIAbATQAeAXAOAbQAOAYAAAaIAAAHIgFADQgMAHgLAQQgJAQgGAUQgGAWgDAfIAAABIgBAFIg1AhgAg/hfIAHAGQAMAMAMASQARAdALAsQAJAzABA1IANACIAngYIAEgbQAHgmAOgaQANgTAOgKQgBgSgJgRQgJgQgQgQQgLgLgPgKIgLgHg");
      this.shape_3.setTransform(52.7,-14.8,0.913,1);
  
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#703D09").s().p("AAWBxQAEgWgLg/QgLg7gcgvIgcgiIAJgDQAJgEACABQBBAZARB4QAGAwgFAsg");
      this.shape_4.setTransform(50.2,-13.5,0.913,1);
  
      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f("#FFCF2E").s().p("Ag5gTIABgCQADgCAEAAIATABIAIgDIALgEQAJgBAtgOQACAAANAQQgLASgGABQgDABgJAIQgKAHgCABQgCAAgRATIgSASg");
      this.shape_5.setTransform(55.1,-21,0.913,1);
  
      this.shape_6 = new cjs.Shape();
      this.shape_6.graphics.f("#EA8B00").s().p("AgnA7QgGgMAAgCQAAgEgQguIArg7IAQgDQAQgDAJAGQAOAJAZAqQAFAGhYA1QgFADgFAMIgDAIIgFgKg");
      this.shape_6.setTransform(56.8,-19.9,0.913,1);
  
      this.shape_7 = new cjs.Shape();
      this.shape_7.graphics.f("#A85F00").s().p("AgIAdQgPhphGgVQBTgVAYgMIAoAfQAoAmAAArQgeARgOA0QgHAbgCAYIgvAdQAGgxgIg1g");
      this.shape_7.setTransform(55.1,-14.8,0.913,1);
  
      this.shape_8 = new cjs.Shape();
      this.shape_8.graphics.f("#161819").s().p("AgMBlQhzgsgWhNQgLgpAsgfQAigZAggDQARgCAfAYIAsAnQAdAYAXAjQASAaASAqQAHAQAPAKQgbAbguAAQgnAAg0gUg");
      this.shape_8.setTransform(1.2,1.7,0.913,1);
  
      this.shape_9 = new cjs.Shape();
      this.shape_9.graphics.f("#0D1011").s().p("AhDEqQgdgEgigJIgDgBIgGAAIgOgEQgEAAgFgDIgFgDIgDgEIgfhBIABAAQgqhJgohkQglhZgMg1QgDgOAAgKIABgFQABgEACgDQAKgOAjgXQAbgRAkgTQArgWAngSQBLgtBYAAQBJABBLAdQAmAOAXAPIABAAIABABIAnA6QAqBKAOBTQAGAhAAAsQAABnggBwIgCAFIgfAHQhRAPgqAFQhEAKg4gBQgtAAgtgGgAk6iGIADATIAIAgQAOArAQAoQAsBxAuBTIAAAAIAeA/IAAAAIAHACIAVAFQAiAJAbADQAtAHAqgBQA3ABBCgKQAtgFBNgPIATgEQAehtAAheQAAgrgGgfQgNhNgmhGIgmg5IgOgHQgYgMgSgHQhJgbhEAAQhSAAhHAqIAAAAIgBAAIgEACIgvAWQg9AfggAUQgcATgLAMIAAgBIgBACIABgBgAk6iHIAAAAg");
      this.shape_9.setTransform(23.8,5.1,0.913,1);
  
      this.shape_10 = new cjs.Shape();
      this.shape_10.graphics.f("#0D1011").s().p("AiGAmIBagLIAZgEIAZgGIAagGIAXgIIAqgQIAQgJIALgIIAKgIIgIAJIgLAKIgPAMIgTAJIgvATIgaAHQgYAGgbADIgYACg");
      this.shape_10.setTransform(41.3,15.5,0.913,1);
  
      this.shape_11 = new cjs.Shape();
      this.shape_11.graphics.f("#090B0C").s().p("AgtCiIgBgBIABgCQAKgdALgoIA0jOIgXguIgCgDIAAAAIANgQIAEAGIAaA5IgBADQgSBEgWBGIgUBGQgPAwgIATIAAATIgHADg");
      this.shape_11.setTransform(48.3,-10.5,0.913,1);
  
      this.shape_12 = new cjs.Shape();
      this.shape_12.graphics.f("#131719").s().p("AgChYIAFAAIgDCxg");
      this.shape_12.setTransform(44.3,16.4,0.913,1);
  
      this.shape_13 = new cjs.Shape();
      this.shape_13.graphics.f("#131719").s().p("AgChZIAFAAIgCCzg");
      this.shape_13.setTransform(39.9,17.8,0.913,1);
  
      this.shape_14 = new cjs.Shape();
      this.shape_14.graphics.f("#090B0C").s().p("ACZCAIg/ghIhAgjQg5gghEgmIgDgBIgBgDIg7h8IAbAWIAwBdIC1BuQAqAYAWALIACAAIAAACIADAPIgHABg");
      this.shape_14.setTransform(25.2,-5.3,0.913,1);
  
      this.shape_15 = new cjs.Shape();
      this.shape_15.graphics.f("#090B0C").s().p("AAnBBIhOg2Ih2hUIgTgPQgIgGgKgKQALAIAJAGIElC3IAihmQAXhGATgtQgLA3gRBBIgPA5IgVBIg");
      this.shape_15.setTransform(29.1,-8.6,0.913,1);
  
      this.shape_16 = new cjs.Shape();
      this.shape_16.graphics.f("#121314").s().p("AiGBAQhJhHgyhRQgBgEB6guIB6gtID2BIQAbA3gBA+QgBCAiKArQgVAHgWAAQhdAAh1h4g");
      this.shape_16.setTransform(31.8,-9.5,0.913,1);
  
      this.shape_17 = new cjs.Shape();
      this.shape_17.graphics.f("#0D1011").s().p("AAgArIgngEIgpgIIgTgGIgTgGIhBgZQgTgJgYgRIgMgIIgEgEIAFADIAMAHQAOAIAeAOIBBAWQAMAEAaAGQAUAFAVADQAQADAWABIBtAEIAygCIATgCIgTAEQgdAFgVABIhGADIgogCg");
      this.shape_17.setTransform(30.4,16.6,0.913,1);
  
      this.shape_18 = new cjs.Shape();
      this.shape_18.graphics.f("#3D4344").s().p("AAwBdQgEgKgJgQQgUgggcgfQgYgXgfgNIgmgOQgFgDgEABIgRAAQApgXAygYQAwAGBEBUQAjApAYAoIglABIACATg");
      this.shape_18.setTransform(11.7,-5,0.913,1);
  
      this.shape_19 = new cjs.Shape();
      this.shape_19.graphics.f("#272B2D").s().p("AgFCLQg2gHgXgPQgNgIgIgRIgOgqQgJgZglg2Qgkg2gGAAIgtgrIBQgPIA1AvQA3AyAMAQQANAQBBAPQAeAHBBAMQAZAFAygbQAZgNAUgPIAIBdQgDAJgOANQgeAag9ARQgzAMgyAAQgZAAgWgDg");
      this.shape_19.setTransform(28.8,3.4,0.913,1);
  
      this.shape_20 = new cjs.Shape();
      this.shape_20.graphics.f("#272B2D").s().p("AhRAbIhJgPIgTgwQAzAbCZgBQBMAABEgGQgIALgRAKQglAYg4AGQgSACgUAAQgrAAg5gKg");
      this.shape_20.setTransform(34,23.4,0.913,1);
  
      this.shape_21 = new cjs.Shape();
      this.shape_21.graphics.f("#272B2D").s().p("AiWgKIAKgWQBKACDZgFQgtAwh8AQIh1AGg");
      this.shape_21.setTransform(34.4,29.9,0.913,1);
  
      this.shape_22 = new cjs.Shape();
      this.shape_22.graphics.f("#1F2224").s().p("AhCEgQgcgEghgJIgSgDQgOgDgCgDIgehBQgzhbgth3Qgth2AKgNQATgZBWgtQArgWAngSQBuhBCIAgQBFAQAvAeIAmA4QApBJANBRQAMBFgLBbQgJBAgSA/IgZAFQhsAUg7AFQgpAEgmAAQgtAAgrgGg");
      this.shape_22.setTransform(23.2,5.2,0.913,1);
  
      this.addChild(this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
  }).prototype = p = new cjs.Container();
  p.nominalBounds = rect = new cjs.Rectangle(-12.7,-29,77.4,73.3);
  p.frameBounds = [rect];
  
  
  (lib.Belt = function() {
      this.initialize();
  
      // Layer 1
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#EA8B00").s().p("Ag5AyIBmhsIANALIhmBqg");
      this.shape.setTransform(26.9,20.1,0.76,0.76);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#7F4B05").s().p("AhnAXQB1hrgDgEIBdBHIhoBqg");
      this.shape_1.setTransform(23.4,17.8,0.76,0.76);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#5B3304").s().p("AgdCiIi6iHIDcjJIAdAJIC2B4IjHDcgAi4AZICkB3IAfAJICvjCIighqIgQgFg");
      this.shape_2.setTransform(21.7,17.6,0.76,0.76);
  
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#A85F00").s().p("AipAZIC6isICZBpIiqC/g");
      this.shape_3.setTransform(22.7,18.3,0.76,0.76);
  
      this.shape_4 = new cjs.Shape();
      this.shape_4.graphics.f("#FFCF2E").s().p("AhtBXIgCABIDDi0IAZAHIAEAPIhNBHIiPBcg");
      this.shape_4.setTransform(15.4,12.4,0.76,0.76);
  
      this.shape_5 = new cjs.Shape();
      this.shape_5.graphics.f("#EA8B00").s().p("AgbCVIivh/IDCi1IAnAIICsBmIi/DRg");
      this.shape_5.setTransform(21.9,17.9,0.76,0.76);
  
      this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
  }).prototype = p = new cjs.Container();
  p.nominalBounds = rect = new cjs.Rectangle(5.2,4.2,32.9,26.8);
  p.frameBounds = [rect];
  
  
  (lib.Bandage = function() {
      this.initialize();
  
      // Layer 1
      this.shape = new cjs.Shape();
      this.shape.graphics.f("#0D1011").s().p("AAABiQgnABgegdQgegeABgoQgBgnAegdQAegdAnAAQAoAAAeAdQAeAdgBAnQABAogeAeQgdAcgnAAIgCAAgAg3g2QgXAWgBAgQABAhAXAWQAXAXAgAAQAhAAAXgXQAXgWABghQgBgggXgWQgWgWgigBQggABgXAWg");
      this.shape.setTransform(8.1,8,0.815,0.815);
  
      this.shape_1 = new cjs.Shape();
      this.shape_1.graphics.f("#3D4344").s().p("AgjARQgLgBAZgQIAagQQAMgCAXAHIgTAbIgrABIgNAAg");
      this.shape_1.setTransform(5.7,2.6,0.815,0.815);
  
      this.shape_2 = new cjs.Shape();
      this.shape_2.graphics.f("#2E3335").s().p("AALAdQgCgCgOgBIgtADQgQABApgiQAGgGATgJIAVgJQAKgCAYAWQgkAlgHAAIgBAAg");
      this.shape_2.setTransform(5.6,2.9,0.815,0.815);
  
      this.shape_3 = new cjs.Shape();
      this.shape_3.graphics.f("#1F2224").s().p("Ag+A+QgagZAAglQAAgjAagaQAagaAkAAQAkAAAbAaQAbAaAAAjQAAAkgbAaQgbAagkAAQgkAAgagag");
      this.shape_3.setTransform(8.1,8,0.815,0.815);
  
      this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
  }).prototype = p = new cjs.Container();
  p.nominalBounds = rect = new cjs.Rectangle(0,0,16.3,16.1);
  p.frameBounds = [rect];
  
  
  // stage content:
  (lib.NinjaWalkFlash = function(mode,startPosition,loop) {
      this.initialize(mode,startPosition,loop,{});
  
      // Shild
      this.instance = new lib.R_Arm_Sword();
      this.instance.setTransform(61.4,82.9,0.609,0.609,-2,0,0,25.7,33.4);
  
      this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:33.5,rotation:2.3,x:59.2,y:78},3).to({regX:25.6,regY:33.4,rotation:6,x:57.5,y:82.8},2).to({regX:25.7,regY:33.5,rotation:1.8,x:60.6,y:77.2},3).to({regY:33.4,rotation:-2,x:61,y:78.8},1).wait(1));
  
      // Belt
      this.instance_1 = new lib.Belt();
      this.instance_1.setTransform(85.8,99.9,1,1,0,0,0,21.7,17.6);
  
      this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:96.1},3).to({y:99.9},2).to({y:96.1},3).to({y:98.9},1).wait(1));
  
      // Weapon
      this.instance_2 = new lib.R_SholderArmor();
      this.instance_2.setTransform(114.1,93.3,0.744,0.744,-7,0,0,24.3,24.2);
  
      this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:24.2,regY:24,y:88},3).to({regX:24.3,regY:24.2,x:114.4,y:94.1},2).to({regX:24.2,x:114,y:87.2},3).to({regX:24.3,x:114.1,y:90.1},1).wait(1));
  
      // Head
      this.instance_3 = new lib.Head();
      this.instance_3.setTransform(76.6,51.7,0.744,0.744,5,0,0,35.4,39);
  
      this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:46.6},3).to({y:51.7},2).to({y:46.3},3).to({y:49.4},1).wait(1));
  
      // R_Sholder
      this.instance_4 = new lib.R_Sholder();
      this.instance_4.setTransform(53.2,82.3,0.744,0.744,0,-18.9,161.1,12.2,18.6);
  
      this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:18.7,skewX:-8.2,skewY:171.8,x:52.7,y:76.9},3).to({regY:18.6,skewX:-5,skewY:175,x:51.3,y:80.7},2).to({regX:12,regY:18.7,skewX:-15.7,skewY:164.3,x:52.2,y:76.1},3).to({regX:12.2,regY:18.6,skewX:-18.9,skewY:161.1,x:52.9,y:78.8},1).wait(1));
  
      // Body
      this.instance_5 = new lib.Body();
      this.instance_5.setTransform(85.8,106.9,0.744,0.706,0,0,0,41.6,48.5);
  
      this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleY:0.74,y:103.5},3).to({scaleY:0.71,y:106.9},2).to({scaleY:0.74,y:102.7},3).to({scaleY:0.73,y:104},1).wait(1));
  
      // Isolation Mode
      this.instance_6 = new lib.Tail();
      this.instance_6.setTransform(58,44.2,1,1,0,0,0,6.2,22.2);
  
      this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleY:1,skewX:-5,x:60,y:38.1},3).to({scaleY:1,skewX:0,x:58,y:42.4},2).to({scaleY:1,skewX:4,x:56.4,y:37.8},3).to({scaleY:1,skewX:1.7,x:57.3,y:41.1},1).wait(1));
  
      // Isolation Mode
      this.instance_7 = new lib.Bandage();
      this.instance_7.setTransform(64.5,25.5,1,1,0,0,0,8.1,8.1);
  
      this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:64.6,y:20.2},3).to({x:64.5,y:25.1},2).to({x:64.4,y:19.5},3).to({x:64.5,y:22.8},1).wait(1));
  
      // Layer 3
      this.instance_8 = new lib.R_ForeLeg();
      this.instance_8.setTransform(64.3,115.7,0.794,0.753,0,15,15.7,15.1,8.7);
  
      this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:15,regY:8.5,scaleX:0.8,scaleY:0.78,skewX:-43.2,skewY:-40.2,x:75.5,y:107.5},3).to({regY:8.8,scaleX:0.73,scaleY:0.81,skewX:-25.6,skewY:-26.4,x:73.2,y:116},2).to({regX:15.1,regY:8.7,scaleX:0.81,scaleY:0.79,skewX:-3.2,skewY:0.1,x:66.2,y:114.1},3).to({regY:8.6,scaleX:0.78,scaleY:0.74,skewX:0,skewY:4.1,x:65.5,y:114.9},1).wait(1));
  
      // R_Leg
      this.instance_9 = new lib.l_Leg();
      this.instance_9.setTransform(58.2,127.9,0.744,0.734,0,63.5,59.2,19.5,7.9);
  
      this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:19.6,regY:7.8,scaleX:0.74,scaleY:0.77,skewX:22.9,skewY:24.3,x:78.8,y:123},3).to({regX:19.7,regY:7.9,scaleX:0.74,scaleY:0.75,skewX:-29.1,skewY:-13.7,x:81.2,y:133.8},2).to({regX:19.5,regY:7.8,scaleX:0.73,scaleY:0.74,skewX:11.2,skewY:0.8,x:65.7,y:132.7},3).to({regX:19.3,scaleX:0.72,scaleY:0.7,skewX:24.5,skewY:9.1,x:63.1,y:133.1},1).wait(1));
  
      // Plate
      this.instance_10 = new lib.L_ForeLeg();
      this.instance_10.setTransform(85.9,119,0.744,0.746,0,-17.8,-14.5,7.1,8.2);
  
      this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:12.6,regY:-0.9,scaleY:0.75,skewX:-3.4,skewY:-4.2,x:85.6,y:110.1},0).wait(1).to({skewX:0.8,skewY:-1.2,x:85,y:109.8},0).wait(1).to({regX:7.2,regY:8.2,skewX:2.5,skewY:0,x:80.4,y:116.5},0).to({scaleY:0.75,skewX:11.9,skewY:20.7,x:78,y:116.2},2).to({regX:7.1,scaleX:0.73,scaleY:0.68,skewX:-21.5,skewY:-19.5,x:86.8,y:114},3).to({regX:7.2,regY:8.4,scaleX:0.74,scaleY:0.75,skewX:-18.4,skewY:-22.7,y:117.3},1).wait(1));
  
      // L_Heand
      this.instance_11 = new lib.L_Heand();
      this.instance_11.setTransform(93.5,92.8,0.744,0.744,-22.1,0,0,7.7,51.4);
  
      this.timeline.addTween(cjs.Tween.get(this.instance_11).to({rotation:-23.1,x:103.2,y:90.8},3).to({regX:7.5,regY:51.2,rotation:-42.3,x:107.7,y:91.1},2).to({regX:7.7,regY:51.3,rotation:-35.4,x:98.3,y:87.5},3).to({regY:51.4,rotation:-22.1,x:93.9,y:90},1).wait(1));
  
      // L_Leg
      this.instance_12 = new lib.R_Leg();
      this.instance_12.setTransform(91.4,130.6,0.744,0.704,0,-14.5,180,19.6,8.2);
  
      this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleY:0.77,skewX:6,x:83,y:127.9},3).to({regX:19.7,scaleY:0.7,skewX:90.8,skewY:249.7,x:75,y:122.9},2).to({regX:19.6,regY:8.3,scaleX:0.74,scaleY:0.61,skewX:15.6,skewY:196.3,x:88.7,y:122.2},3).to({regX:19.4,scaleX:0.74,scaleY:0.72,skewX:-3.6,skewY:191,x:90.4,y:127.7},1).wait(1));
  
      // l_Sholder
      this.instance_13 = new lib.L_Sholder();
      this.instance_13.setTransform(84.7,61.6,0.744,0.744,14.2,0,0,11.2,16.2);
  
      this.timeline.addTween(cjs.Tween.get(this.instance_13).to({rotation:-20.2,x:86.3,y:63.8},3).to({x:88.2,y:68},2).to({regY:16.1,rotation:5,x:85,y:60.8},3).to({regY:16.2,rotation:14.2,x:85.1,y:62.1},1).wait(1));
  
      // Nojnu
      this.instance_14 = new lib.Nojnu();
      this.instance_14.setTransform(76.1,92.6,1,1,0,0,0,47.8,27.2);
  
      this.timeline.addTween(cjs.Tween.get(this.instance_14).to({y:89.2},3).to({y:92.6},2).to({y:89.2},3).to({y:90},1).wait(1));
  
      // Shadow
      this.shape = new cjs.Shape();
      this.shape.graphics.f("rgba(0,0,0,0.451)").s().p("AhSBSQgfgHgagMQgjgQgOgTQgKgNAAgPIAAAAQAAgkA7gaQA7gbBQAAQBSAAA6AbQA7AaAAAkQAAAOgJAOQgFAHgHAGQgOAMgYAKQgaAMgfAHQgmAIgtAAQgrAAgngIg");
      this.shape.setTransform(76.5,139.2);
  
      this.timeline.addTween(cjs.Tween.get(this.shape).wait(10));
  
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = rect = new cjs.Rectangle(107.2,89.3,78.5,134);
  p.frameBounds = [rect, new cjs.Rectangle(106.1,89.4,79,133.8), new cjs.Rectangle(104.9,87.7,83.5,135.5), new cjs.Rectangle(103.4,84.2,91.9,139), new cjs.Rectangle(102.2,88.6,92.4,134.6), new cjs.Rectangle(100.3,89.3,101,134), new cjs.Rectangle(102.4,89.3,91.9,133.9), new cjs.Rectangle(103.9,87.5,87.2,135.7), new cjs.Rectangle(105.1,83.9,86.5,139.4), new cjs.Rectangle(106.9,87,79,136.3)];
  
  })(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
  var lib, images, createjs, ss;