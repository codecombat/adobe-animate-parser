import fs from 'fs'

import { isEqual } from 'lodash'

import AdobeAnimateParser from '../src/index'
import translate from '../src/lib/translate'

const fixture_tests = [
  [ 'spec/fixtures/pole_input.js', './fixtures/pole_output.json' ],
]

describe("fixture tests", () => {
  for (const [ fixture, resultFile ] of fixture_tests) {
    it(`test '${fixture}'`, () => {
      const importedFile = fs.readFileSync(fixture)
      const parser = new AdobeAnimateParser(importedFile.toString())

      parser.parse()
      const tranlsatedOutput = translate(parser.parsedEntryPoint)
      const expectedOutput = require(resultFile)

      expect(isEqual(tranlsatedOutput, expectedOutput)).toBe(true)
    })
  }
})
