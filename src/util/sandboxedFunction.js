function has (target, key) {
  return true
}

// Taken from https://blog.risingstack.com/writing-a-javascript-framework-sandboxed-code-evaluation/
export default function sandboxFunction (src) {
  src = 'with (sandbox) {' + src + '}'
  const code = new Function('sandbox', src)

  return function (sandbox) {
    const sandboxProxy = new Proxy(sandbox, {has})
    return code(sandboxProxy)
  }
}
