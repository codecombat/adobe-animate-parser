import fs from 'fs'
import isEqual from 'lodash.isequal'

import { AdobeAnimation, translate } from '../src/index'

const fixture_tests = [
  // [ 'spec/fixtures/robo_ball_input.js', './fixtures/robo_ball_output.json' ],
  [ 'spec/fixtures/hero_a_input.js', './fixtures/hero_a_output.json' ],
  // [ 'spec/fixtures/pole_input.js', './fixtures/pole_output.json' ],
  // [ 'spec/fixtures/ninja_walk_input.js', './fixtures/ninja_walk_output.json' ],
]

describe("fixture tests", () => {
  for (const [ fixture, resultFile ] of fixture_tests) {
    it(`test '${fixture}'`, () => {
      const importedFile = fs.readFileSync(fixture)
      const parser = new AdobeAnimation(importedFile.toString())

      parser.parse()
      const translatedOutput = translate(parser.parsedEntryPoint)
      const expectedOutput = require(resultFile)

      // Use lodash equality instead of build in jasmine deep equal so that jasmine
      // does not output 1000+ line differences in error output
      expect(isEqual(translatedOutput, expectedOutput)).toBe(true)
    })
  }
})
