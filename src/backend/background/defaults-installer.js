const defaults = [{
  key: 'maxResults',
  value: 10
}, {
  key: 'propertyKey',
  value: 'title'
}, {
  key: 'activeTheme',
  value: 'light'
}, {
  key: 'accent',
  value: 'blue'
}, {
  key: 'openNew',
  value: true
}, {
  key: 'initialComponent',
  value: 'my'
}, {
  key: 'tiles',
  value: []
}, {
  key: 'showChromeUrls',
  value: false
}];

const installIfNeeded = function(settings, item) {
  return settings.get(item.key).then(function(value) {
    if (value[item.key] !== undefined) { return; }
    return settings.set(item.key, item.value);
  });
};

const install = function(settings) {
  const requests = defaults.map(installIfNeeded.bind(null, settings));
  return Promise.all(requests);
};

module.exports = {
  install
};
