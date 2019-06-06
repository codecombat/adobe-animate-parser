import cjs from './lib/cjs'
import Animate from './lib/animation'

import lineTween from './fixtures/line-tween/line-tween_HTML5'
import ninjaWalk from './fixtures/ninjawalk/NinjaWalk_animate'
import stateTween from './fixtures/state_tween/stateTween'

import { parseMovieClip, targetCache, schema } from './lib/parse'
import translate from './lib/translate'

const animate = new Animate()
ninjaWalk(cjs, animate)

const lib = animate.cocoGetComposition().getLibrary()
const dataTree = new lib['NinjaWalkAnimate']()

let parsedMovieClip = parseMovieClip(dataTree)

// For now assume top level is a movie clip and the top level has
// a self referencing tween that we do not support.
// We assume this self referencing tween is always the first tween.
parsedMovieClip.tweens = parsedMovieClip.tweens.filter((tween) => {
    // TODO remove direct _cocoId reference here
    return parsedMovieClip._cocoId !== tween.target.reference
})

const outputSchema = translate(schema)
console.log(JSON.stringify(outputSchema))

/*
{
   "shapes":[
      {
         "type":"shape",
         "transform":{
            "x":-0.0049,
            "y":0.0312
         },
         "_cocoId":"zqf5wkge1b860kv"
      }
   ],
   "animations":[
      {
         "type":"movie_clip",
         "bounds":[
            -4.6,
            -69.9,
            9.2,
            140
         ],
         "frameBounds":[
            [
               -4.6,
               -69.9,
               9.2,
               140
            ]
         ],
         "tweens":[
            {
               "type":"tween",
               "target":{
                  "reference":"zqf5wkge1b860kv",
                  "_cocoId":"kazkijfph0b5d5d"
               },
               "tweenCalls":[
                  {
                     "name":"wait",
                     "wait":1
                  }
               ],
               "_cocoId":"q1qiraf8wob9kul"
            }
         ],
         "_cocoId":"p9wyndowkew0wi0"
      },
      {
         "type":"movie_clip",
         "tweens":[
            {
               "type":"tween",
               "target":{
                  "reference":"p9wyndowkew0wi0",
                  "_cocoId":"b74sokuhe3r2cmi"
               },
               "tweenCalls":[
                  {
                     "name":"to",
                     "to":{
                        "scaleY":0.5461,
                        "rotation":90,
                        "x":50.2,
                        "y":140.65
                     }
                  },
                  {
                     "name":"wait",
                     "wait":1
                  }
               ],
               "_cocoId":"p4eabgcidwr9was"
            }
         ],
         "_cocoId":"sv0qugd400ck1ek"
      },
      {
         "type":"movie_clip",
         "bounds":[
            54.1,
            82,
            9.2,
            140
         ],
         "frameBounds":[
            [
               54.1,
               82,
               9.2,
               140
            ],
            [
               46.1,
               97.6,
               36.2,
               126.6
            ],
            [
               40.7,
               115.8,
               58.7,
               108.1
            ],
            [
               38.5,
               135.9,
               75.2,
               86.1
            ],
            [
               39.7,
               156.7,
               84.6,
               62.5
            ],
            [
               44.2,
               177.6,
               87.6,
               39
            ],
            [
               51.8,
               197.4,
               84.4,
               18.6
            ],
            [
               62,
               211.1,
               76.4,
               9.2
            ]
         ],
         "tweens":[
            {
               "type":"tween",
               "target":{
                  "reference":"795kwh14mlzev4c",
                  "_cocoId":"mkrfaj83cqqa7tn"
               },
               "tweenCalls":[
                  {
                     "name":"wait",
                     "wait":7
                  },
                  {
                     "name":"wait",
                     "wait":1
                  }
               ],
               "_cocoId":"73ejrwfdkryuodp"
            },
            {
               "type":"tween",
               "target":{
                  "reference":"sv0qugd400ck1ek",
                  "_cocoId":"s56idzjwzuqnkme"
               },
               "tweenCalls":[
                  {
                     "name":"wait",
                     "wait":8
                  }
               ],
               "_cocoId":"muj6tgnlf5xcolo"
            }
         ],
         "_cocoId":"795kwh14mlzev4c"
      }
   ]
}
*/
