/**
 * This is a guess for what sort of raw data could work
 * in our editor.
 * 
 * If this data imports we can use it to test against
 * our parse function.
 * It's bootstrapped data.
 * 
 * This works!
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
				"a": []
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
		}
	}
}

/**

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
			]
		},
		"Scene_1_Layer_1": {
			"shapes": [],
			"containers": [],
			"animations": [{
				"bn": "instance",
				"gn": "Tween1",
				"t": [8.7, 76.9],
				"a": ["synched", 0]
			}],
			"tweens": [
				[{
						"n": "get",
						"a": ["instace"]
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
      "animations": [{
        "bn": "Layer_1",
        "gn": "Scene_1_Layer_1",
        "t": [8.7, 76.9]
      }],
      "tweens": [
        [
          {
            "n": "get",
            "a": ["Layer_1"]
          },
          {
            "n": "wait",
            "a": [ 8 ]
          }
        ]
      ]
    }
	}
}
 */
