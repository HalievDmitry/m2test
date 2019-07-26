define([
    'uiComponent'
], function (Component) {
    "use strict";

    return Component.extend({

        defaults: {
            template: "Fisha_Test/second-form"
        },

        initialize: function () {
            this._super();
            console.log('second-form');
        }

    });

});
