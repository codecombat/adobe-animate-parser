export default function recursiveWalk (object, callback) {
  Object.entries(object, ([ key, value ]) => {
    if (typeof value === 'object') {
      recursiveWalk(value, callback)
    }

    callback(value)
  })
}
