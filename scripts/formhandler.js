(function(window) {
    'use strict';
    var App = window.App || {};

    var $ = window.jQuery;


    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }
        /*
        Prefixing variables with '$' refers to elements select using jQuery
              Does not return refereneces to DOM elements, but returns a single
              Object that contains references to the selected elemnet
              Object contains special methods to manipulate the collection of references
                  known as “jQuery-wrapped selection” or “jQuery-wrapped collection
        */
        this.$formElement = $(selector);
        /*
        .length property tells how many elements were matched
        */
        if (this.$formElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    FormHandler.prototype.addSubmitHandler = function(fn) {




        console.log('Setting submit handler for form');
        /*
        event.preventDefault() makes sure the user is not sent to a different page after sending a form
        on(<name of event>, <callback to run>), works like addEventListener
        */
        this.$formElement.on('submit', function(event) {
            event.preventDefault();

            /*
            $(this) allow the object to be able to get the serializeArray which gets data from form
                returns data in an array of objects
            */
            var data = {};

            $(this).serializeArray().forEach(function(item) {
                data[item.name] = item.value;
                console.log(item.name + ' is ' + item.value);
            });



            //Gold Challenge
            var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName('close')[0];
            var yesmodal = document.getElementById('yesdisplay');

            yesmodal.onclick = function() {
                modal.style.display = 'none';
                showDetails();
            };

            //Exiting out of the modal
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = 'none';
                }
            };

            span.onclick = function() {
                modal.style.display = 'none';
            };


            $('input').bind('input propertychange', function() {
                $('#output').html($(this).val());
            });



            if (data.strength == 100 && data.size == 'coffee-zilla' && data.flavor != '' && data.emailAddress != '') {



                modal.style.display = 'block';

                //  document.getElementById('modalMsg').value =
                //      'Achievement Unlock! Good job! Does this work? Hell naw. That\'s some strong coffee';

                //  document.getElementById('modalMsg') = 'poop \n\n\n\n';


            }




            console.log(data);
            fn(data);

            //Resets the info put in form


            /*
              Same as autofocus, but after resets, goes back to the first form elements[0]
              elements[] property is an array of the form's field
            */
            this.elements[0].focus();
        });
    };


    //Display the value of the slider as the person click and drags
    FormHandler.prototype.displaySlide = function() {

        //To display when it loads up
        document.getElementById('displayme').value = 30;

        var mouse = document.getElementById('strengthLevel');
        var color;
        mouse.addEventListener('mousemove', function() {
            var visual = document.getElementById('displayme');

            if (mouse.value < 40) {
                //weak
                color = 'green';
            } else if (mouse.value < 75) {
                //regular
                color = '#FFA500';
            } else {
                //strong
                color = 'red';
            }

            visual.value = mouse.value;
            visual.style.color = color;
        });

    };

    //  FormHandler.prototype.modal4U = function(strengthValue, sizeCoffee) {
    // Get the modal


    App.FormHandler = FormHandler;
    window.App = App;
})(window);
