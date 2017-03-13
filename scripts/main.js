(function(window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var myTruck = new Truck('ncc-1701', new DataStore());
    window.myTruck = myTruck;

    var formHandler = new FormHandler(FORM_SELECTOR);

    /*
    bind( ) is used to guarantee that you get myTruck
    */
    formHandler.displaySlide();
    formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));

    console.log(formHandler);



})(window);
