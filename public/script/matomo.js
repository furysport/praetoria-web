var _paq = (window._paq = window._paq || [])
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['trackPageView'])
_paq.push(['enableLinkTracking'])
;(function () {
  var u = 'https://furya.matomo.cloud/'
  _paq.push(['setTrackerUrl', u + 'matomo.php'])
  _paq.push(['setSiteId', '5'])
  var d = document,
    g = d.createElement('script'),
    s = d.getElementsByTagName('script')[0]
  g.async = true
  g.src = '//cdn.matomo.cloud/furya.matomo.cloud/matomo.js'
  s.parentNode.insertBefore(g, s)
})()
