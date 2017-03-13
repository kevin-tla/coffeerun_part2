(function(window) {
    'use strict';
    var App = window.App || {};

    //Notes: Constructors should have their first letter capitalized
    function DataStore() {
        this.data = {};
    }

    //Methods to access information
    DataStore.prototype.add = function(key, val) {
        this.data[key] = val;
    };

    DataStore.prototype.get = function(key) {
        return this.data[key];
    };

    DataStore.prototype.getAll = function() {
        return this.data;
    };

    DataStore.prototype.remove = function(key) {
        delete this.data[key];
    };

    App.DataStore = DataStore;
    window.App = App;
})(window);
