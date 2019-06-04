{
  "shapes": {
    "0": {
      "t": [
        0,
        0
      ],
      "p": "AgiAtQgLgGgDgJQgCgFAAgLIgDgOQAAgGAGgKQAKgPAUgLQAFgEAHgBIAKgCQAKAAAFACQAIAEAIALIAOAUQAEAHAAAKQAAAMgCAFQgFAPgOAEQgGACgMAAIgVAGIgIABQgKAAgKgFg",
      "fc": "#0000CC"
    },
    "1": {
      "t": [
        0,
        0
      ],
      "p": "ABgEUIhHgCQgmgDgdgKQgWgIgdgQIgygdIgngVQgYgNgPgKQgrgdgRgkQgLgWgDgeQgCgTAAgjQAAg5ADgbQAEguAQghQASgjAggaQAggaAngKQAVgFAcgCIAygBICIABIAhABQASACAMAGQALAGAQANQASAQAIAEIAbAOQARAIAIAIIAGAIQAEAHADAJIAJAbIALAjQAFAUgFAPQgGATgVAMQgLAGgNAFIghALQgSAHgMAJQAAAIAIAIQAIAIALACQAJACALgCIAVgDQAKgCAJABQAOAAAIAGQATAMABAgQABAhgQAlQgJAUgSAeIgKAOQgPAYgKALQgPATgRAJQgSAJgbADIggABIgQAAgAiIjmQgjAHgcAXQgcAXgOAhQgLAagDAkQgCAQAAAxQgBAoACATQAFAhAPAWQALAQAWAPIApAYIBIArQArAYAiAIQAVAGAiACIA6ABIAiAAQATgBANgHQAOgGANgPQAHgJANgTQAXgkAKgWQAIgTACgRQACgOgCgNQgjAFgVgCQgegDgSgQQgSgQgFgaQgDgRAFgKQAHgNAbgKIA+gZQANgGADgFQAEgHgDgNQgFgTgHgTQgGgOgHgJQgGgGgWgMQgSgKgbgUQgPgMgJgEQgIgCgRAAQhoABg1gBIgcgBQggAAgQAEg",
      "fc": "#0000CC"
    }
  },
  "containers": {
    "Tween2": {
      "c": [ // Children of the container 'c'
        "0" // a shape reference
      ],
      "b": [ // a bounding box of the container
        -5.4,
        -5,
        10.9,
        10
      ]
    }
  },
  "animations": {
    "circle_mc": {
      "shapes": [
        {
          "bn": "shape",
          "gn": "1"
        }
      ],
      "containers": [
        {
          "bn": "instance",
          "t": [
            -9.8,
            -5.5
          ],
          "gn": "Tween2"
        }
      ],
      "animations": [],
      "tweens": [
        [
          {
            "n": "get",
            "a": [
              "instance"
            ]
          },
          {
            "n": "to",
            "a": [
              {
                "x": 12.4,
                "y": 8
              },
              9
            ]
          },
          {
            "n": "wait",
            "a": [
              1
            ]
          }
        ],
        [
          {
            "n": "get",
            "a": [
              "shape"
            ]
          },
          {
            "n": "wait",
            "a": [
              10
            ]
          }
        ]
      ],
      "graphics": [],
      "bounds": [
        -29.8,
        -27.6,
        59.7,
        55.3
      ],
      "frameBounds": [
        [
          -29.8,
          -27.6,
          59.7,
          55.3
        ],
        [
          -29.8,
          -27.6,
          59.7,
          55.3
        ],
        [
          -29.8,
          -27.6,
          59.7,
          55.3
        ],
        [
          -29.8,
          -27.6,
          59.7,
          55.3
        ],
        [
          -29.8,
          -27.6,
          59.7,
          55.3
        ],
        [
          -29.8,
          -27.6,
          59.7,
          55.3
        ],
        [
          -29.8,
          -27.6,
          59.7,
          55.3
        ],
        [
          -29.8,
          -27.6,
          59.7,
          55.3
        ],
        [
          -29.8,
          -27.6,
          59.7,
          55.3
        ],
        [
          -29.8,
          -27.6,
          59.7,
          55.3
        ]
      ]
    },
    "nest_movieclip": {
      "shapes": [],
      "containers": [],
      "animations": [
        {
          "bn": "instance",
          "t": [
            49.4,
            73.3
          ],
          "gn": "circle_mc",
          "a": []
        }
      ],
      "tweens": [
        [
          {
            "n": "get",
            "a": [
              "instance"
            ]
          },
          {
            "n": "to",
            "a": [
              {
                "scaleY": 0.66,
                "rotation": 67.5,
                "x": 44.7,
                "y": 84.8
              },
              6
            ]
          },
          {
            "n": "wait",
            "a": [
              1
            ]
          }
        ]
      ],
      "graphics": [],
      "bounds": [
        19.5,
        45.7,
        59.7,
        55.3
      ],
      "frameBounds": [
        [
          19.5,
          45.7,
          59.7,
          55.3
        ],
        [
          18.700000000000003,
          47.400000000000006,
          59.9,
          56.2
        ],
        [
          18.299999999999997,
          49.099999999999994,
          59.9,
          56.8
        ],
        [
          19,
          50.7,
          58.1,
          57.1
        ],
        [
          20.599999999999994,
          52,
          54.2,
          57.5
        ],
        [
          23.099999999999994,
          53.5,
          48.1,
          58.5
        ],
        [
          16.400000000000006,
          50.3,
          56.5,
          69.2
        ]
      ]
    }
  }
}