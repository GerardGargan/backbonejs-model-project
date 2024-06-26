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

var Cars = Backbone.Collection.extend({
    model: Car,
});

var CarView = Backbone.View.extend({
    tagName: 'li',

    render: function () {
        this.$el.html(this.model.get('registrationNumber'));
        return this;
    }
});


var CarsView = Backbone.View.extend({
    tagName: 'ul',

    render: function() {
        var self = this;
        this.collection.each(car => {
            var carView = new CarView({
                model: car
            });
            self.$el.append(carView.render().$el);
        });
        return this;
    }
});



var cars = new Cars([
        new Car({ registrationNumber: 'XLI887', colour: 'Blue' }),
        new Car({ registrationNumber: 'ZNP123', colour: 'Blue' }),
        new Car({ registrationNumber: 'XUV456', colour: 'Gray' }),
    ]);

    var carsView = new CarsView({ collection: cars });
    $("#container").html(carsView.render().$el);

    /*
var blueCars = cars.where({ colour: 'Blue' });
var findCar = cars.findWhere({ registrationNumber: 'XLI887' });

console.log("Blue cars ", blueCars);
console.log("findCar ", findCar);

console.log("cars before removal ", cars);
cars.remove(findCar);
console.log("cars after removal ", cars);

console.log("Vehicles as JSON", cars.toJSON());

cars.each(car => {
    console.log(car.toJSON());
});
*/
