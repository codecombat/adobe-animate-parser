
Main Goal:
 - Import the shape raw data from an animate js.

Subtasks:
 [ ] Monkey patch createjs apis (see them execute)
 [ ] How are shapes referenced in raw data


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
