/**
 * Hand coded by Andrew.
 * This represents the data that we expect to return
 * from an animate file.
 * 
 * Notice the absence of `containers`.
 * A major difference from Flash is everything is a `movieclip` or `animation`.
 */

export default {
  "containers": [],
	"shapes": {
		"0": {
			"t": [
				0,
				0
			],
			"p": "AgdK7QgQgDABgeQABgkADgRQACgNAFgRIAKgeQANgxAHhOQAGhkADhtQABhegEiVQgEjDgBgyIABjKIABjGQAAgTAIgGQAGgEAIADQAIADAEAHQAGAKgBAUIgCCjQgBCFABBfIAGEKQAEChgCBoQgCAzgDAyQgGBogOA8IgQBBQgHAmgBAcQgBASgEAHQgDAHgFADQgFADgEAAIgDAAg",
			"fc": "#0000CC"
		}
	},
	"animations": {
		"Tween1": {
			"shapes": [{
				"bn": "shape",
				"gn": "0"
			}],
			"containers": [],
      "animations": [],
      "graphics": [],
			"tweens": [
				[{
						"n": "get",
						"a": ["shape"]
					},
					{
						"n": "wait",
						"a": [1]
					}
				]
			],
			"bounds": [
				-4.6,-69.9,9.2,140
			],
			"frameBounds": [
				[ -4.6,-69.9,9.2,140 ]
			]
		},
		"Scene_1_Layer_1": {
			"shapes": [],
      "containers": [],
      "graphics": [],
			"animations": [{
				"bn": "instance",
				"gn": "Tween1",
				"t": [8.7, 76.9],
				"a": ["synched", 0]
			}],
			"tweens": [
				[{
						"n": "get",
						"a": ["instance"]
					},
					{
						"n": "to",
						"a": [{
							"scaleY": 0.5461,
							"rotation": 90,
							"x": 50.2,
							"y": 140.65
						}, 7]
					},
					{
						"n": "wait",
						"a": [1]
					}
				]
			]
		},
		"linetween_HTML5": {
      "shapes": [],
			"containers": [],
			"graphics": [],
      "animations": [{
        "bn": "instance",
        "gn": "Scene_1_Layer_1",
				"t": [8.7,76.9,1,1,0,0,0,8.7,76.9],
				"a": []
      }],
      "tweens": [
        [
          {
            "n": "get",
            "a": ["instance"]
          },
          {
            "n": "wait",
            "a": [ 8 ]
          }
        ]
			],
			"bounds": [ 54.1, 82, 9.2, 140 ],
			"frameBounds": [
				[ 54.1, 82, 9.2, 140 ],
				[ 46.1,97.6,36.2,126.6 ],
				[ 40.7,115.8,58.7,108.1 ],
				[ 38.5,135.9,75.2,86.1 ],
				[ 39.7,156.7,84.6,62.5 ],
				[ 44.2,177.6,87.6,39 ],
				[ 51.8,197.4,84.4,18.6 ],
				[ 62,211.1,76.4,9.2 ]
			]
    }
	}
}
