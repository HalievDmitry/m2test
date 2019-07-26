define([
    'uiComponent'
], function (Component) {
    "use strict";

    return Component.extend({

        defaults: {
            // template: "Fisha_Test/first-form"
        },

        initialize: function () {
            this._super();
            console.log('first-form');
            console.log(this.url);
        },

        submitForm: function () {

        }

    });

});
