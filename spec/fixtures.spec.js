import fs from 'fs'

import isEqual from 'lodash.isequal'

import AdobeAnimateParser from '../src/index'
import translate from '../src/lib/translate'

const fixture_tests = [
  [ 'spec/fixtures/robo_ball_input.js', './fixtures/robo_ball_output.json' ],
  [ 'spec/fixtures/pole_input.js', './fixtures/pole_output.json' ],
  [ 'spec/fixtures/ninja_walk_input.js', './fixtures/ninja_walk_output.json' ],
]

describe("fixture tests", () => {
  for (const [ fixture, resultFile ] of fixture_tests) {
    it(`test '${fixture}'`, () => {
      const importedFile = fs.readFileSync(fixture)
      const parser = new AdobeAnimateParser(importedFile.toString())

      parser.parse()
      const tranlsatedOutput = translate(parser.parsedEntryPoint)
      const expectedOutput = require(resultFile)

      expect(isEqual(
        // Stringify to JSON and back to ensure that undefined properties are normalized for isEqual comparison
        JSON.parse(JSON.stringify(tranlsatedOutput)),
        JSON.parse(JSON.stringify(expectedOutput))
      )).toBe(true)
    })
  }
})
