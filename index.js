module.exports = function html (name, opts = {}, children = []) {
  const element = typeof name === 'object' ? name : document.createElement(name)
  if (Array.isArray(opts)) {
    children = opts
    opts = {}
  }
  for (const name of Object.keys(opts)) {
    const v = opts[name]
    if (name === 'class') {
      if (Array.isArray(v)) for (const c of v) element.classList.add(c)
      else element.classList.add(v)
    }
    if (typeof v === 'function') element.addEventListener(name.replace(/^on/, ''), v)
    else element.setAttribute(name, v)
  }
  for (const child of children) {
    element.appendChild(typeof child === 'string' ? document.createTextNode(child) : child)
  }
  return element
}
