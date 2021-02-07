const url = require('url')

module.exports = (src) => {
  if (typeof document === 'undefined') {
    return Promise.resolve()
  }

  const { port, protocol, hostname, pathname } = url.parse(src)
  const element = document.querySelector(
    `script[src^="${url.format({
      port,
      protocol,
      hostname,
      pathname,
    })}"]`,
  )

  if (element != null) {
    return Promise.resolve()
  }

  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.async = true
    script.defer = true
    script.src = src
    document.body.appendChild(script)

    script.addEventListener('load', resolve)
  })
}
