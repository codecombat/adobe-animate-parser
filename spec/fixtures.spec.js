import fs from 'fs'
import isEqual from 'lodash.isequal'

import { AdobeAnimation } from '../src/index'
import { translateToCoco } from '../src/lib/translate'

const fixture_tests = [
  [ 'spec/fixtures/cube_attack_down_input.js', './fixtures/cube_attack_down_output.json' ],
  [ 'spec/fixtures/cube_idle_input.js', './fixtures/cube_idle_output.json' ],
  [ 'spec/fixtures/hero_a_use_down_new_input.js', './fixtures/hero_a_use_down_new_output.json' ],
  [ 'spec/fixtures/lever_new_input.js', './fixtures/lever_new_output.json' ],
  [ 'spec/fixtures/lever_old_input.js', './fixtures/lever_old_output.json' ],
  [ 'spec/fixtures/hero_a_input.js', './fixtures/hero_a_output.json' ],
  [ 'spec/fixtures/hero_a_use_down_input.js', './fixtures/hero_a_use_down_output.json' ],
  [ 'spec/fixtures/hero_b_use_left_input.js', './fixtures/hero_b_use_left_output.json' ],
  [ 'spec/fixtures/hero_b_use_right_input.js', './fixtures/hero_b_use_right_output.json' ],
  [ 'spec/fixtures/hero_b_use_up_input.js', './fixtures/hero_b_use_up_output.json' ],
  [ 'spec/fixtures/ninja_walk_input.js', './fixtures/ninja_walk_output.json' ],
  [ 'spec/fixtures/pole_input.js', './fixtures/pole_output.json' ],
  [ 'spec/fixtures/robo_ball_input.js', './fixtures/robo_ball_output.json' ],
  [ 'spec/fixtures/acodus_container.js', './fixtures/acodus_container.json']
]

describe("fixture tests", () => {
  for (const [ fixture, resultFile ] of fixture_tests) {
    it(`test '${fixture}'`, () => {
      const importedFile = fs.readFileSync(fixture)
      const parser = new AdobeAnimation(importedFile.toString())

      parser.parse()

      const translatedOutput = translateToCoco(parser.parsedEntryPoint)

      const expectedOutput = require(resultFile)

      // Use lodash equality instead of build in jasmine deep equal so that jasmine
      // does not output 1000+ line differences in error output
      expect(isEqual(translatedOutput, expectedOutput)).toBe(true)
    })
  }
})
