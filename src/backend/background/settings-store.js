function SettingsStore() {
    'use strict';

    const storage = chrome.storage.sync;

    this.get = function(key) {
        return new Promise(function(resolve, _reject) {
            storage.get(key, resolve);
        });
    };

    this.set = function(key, value) {
        return new Promise(function(resolve, _reject) {
            const values = {};
            values[key] = value;
            storage.set(values, resolve);
        });
    };

    this.all = function() {
        return new Promise(function(resolve, _reject) {
            storage.get(null, resolve);
        });
    };

    return this;
}