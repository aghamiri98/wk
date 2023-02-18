
addEventListener("fetch", event => {
  var url = new URL(event.request.url)
  var newUrl = new URL("https://" + url.pathname.replace(/^\/|\/$/g, ''))
  var request = new Request(newUrl, event.request)
  event.respondWith(fetch(request))
})
