var HIDDEN_DETAIL_CLASS = 'hidden-detail';


function hideDetails() {
    'use strict';
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}


function showDetails() {
    'use strict';
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
}
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

    //Initially hide details
    hideDetails();


    /*
    bind( ) is used to guarantee that you get myTruck
    */
    formHandler.displaySlide();
    formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));


    console.log(formHandler);

})(window);
