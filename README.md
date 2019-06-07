Main Goal:
 - Import the shape raw data from an animate js.
 - We seem to have most or all of the data. Now it's an organization and cleanup question.


Subtasks:
 [x] Monkey patch createjs apis (see them execute)
 [x] How are shapes referenced in raw data
 [x] Animations are referenced and can be nested.
 [x] We can expose `lib` from `an` mutation (composition).


 Preformatting steps for animate JS file:
 
 1. Remove self executing function and export as default
 1. Replace all references to `createjs` with `cjs`
 1. Replace all `AdobeAn` references with `an`


## Entry point

There is only ever 1 animation.
It is the name of the file and it's attached to `lib` as a `MovieClip`.

To get the `lib.<filename>`, return it from the `an.compositions`. The id corresponds to the `lib.properties.id`.


## Next steps:

 - Access lib from the `an` file.
 - Private animation names don't matter.
 - Start fleshing out a `parse` method that is wired to the tests.
 - Hard to test Animate against Flash because Containers are replaced with Animations.



The relationships of Movieclips, Tweens, Containers, Shapes.

A Movieclip (animation) is comprised of:
  Any number of movieclips, containers or shapes being tweened.
  Has a bounding box and frame bounds.

  From a coding perspective. We start with a root movieclip.
  It contains tweens of shapes/movieclips, and instantiates them.
  
  Then you can recursively walk these shapes/movieclips.

A container
  - Grouping around movieclips, containers and shapes.

A shape
 - Base case - Path and fill and other shape vector properties.

A tween:
 - Andrew believes is only ever in a movieclip.
 - Moves a shape, container or movieclip.

## Know issues

Raw shapes don't work correctly in our engine.
They work when you import. But they stop working via an Action referencing an Animation.

Thoughts going forward:
 - Is wrapping a shape in a container an easy fix?
 - [YES] Is our game engine fundamentally broken for frame by frame animation.

 - [NO] What if the shape in the animate file is grouped before being tweened?
    - Andrew checked. Even if you group shapes. Animate unwraps them.

NEXT STEPS:

- [x] NOT DOING - Add CONTAINERS extension
- [ ] named items
- [ ] Deterministic imports of IDs for color tintings 
- [ ] Can we automatically determine entrypoint?
- [ ] Deduping shapes
