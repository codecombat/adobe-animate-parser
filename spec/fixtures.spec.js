const fixture_tests = [
  ["line-tween/line-tween_HTML5.js", "line-tween/line-tween_result.js"]
]

describe("fixture tests", () => {
  for ([fixture, result] of fixture_tests) {
    it(`test '${fixture}'`, () => {
      expect(fixture).toEqual(result)
    })
  }
})