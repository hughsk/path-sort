module.exports = pathsort

function pathsort(paths, sep) {
  sep = sep || '/'

  return paths.map(function(el) {
    return el.split(sep)
  }).sort(function(a, b) {
    var l = Math.max(a.length, b.length)
    for (var i = 0; i < l; i += 1) {
      if (!(i in a)) return -1
      if (!(i in b)) return +1
      if (a[i].toUpperCase() > b[i].toUpperCase()) return +1
      if (a[i].toUpperCase() < b[i].toUpperCase()) return -1
      if (a.length < b.length) return -1
      if (a.length > b.length) return +1
    }
  }).map(function(el) {
    return el.join(sep)
  })
}
