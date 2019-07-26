define([
    'uiComponent'
], function (Component) {
    "use strict";

    return Component.extend({

        defaults: {
            // template: "Fisha_Test/third-form"
        },

        initialize: function () {
            this._super();
            console.log('third-form');
        }

    });

});
