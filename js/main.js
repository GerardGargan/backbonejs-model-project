var Vehicle = Backbone.Model.extend({
    urlRoot: "/api/vehicle",

    start: function () {
        console.log('The vehicle has started');
    }
});


var Car = Vehicle.extend({

    validate: function(attrs) {
        if(!attrs.registrationNumber) {
            return "Car must have a reg number!";
        }
    },
    start: function() {
        console.log('The car car started');
    }
});

var car = new Car({
    registrationNumber: 'XLI887',
    colour: 'Blue',
});
car.start();