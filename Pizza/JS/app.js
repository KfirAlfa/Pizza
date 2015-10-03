(function () {
    slices_in_pizza = 8;
    var app = angular.module('store', [ ]);
    app.controller('StoreController', function () {
        this.people = [];
        this.slices = 0;
        this.new_person = {
            name: '',
            slices: 0,
            has_toppings : false,
            toppings : [],
            slices_with_toppings : 0
        };
        this.chosing_slices = false;
        this.add_person = function (person) {
            this.people.push($.extend(true, {}, person));
            this.new_person = {
                name: '',
                slices: 0,
                has_toppings : false,
                toppings : [],
                slices_with_toppings : 0
            };
        };
        
        this.add_toppings = function (person) {
            person.has_toppings = true;
        };
        
        this.add_topping = function (person) {
            balance =  person.slices - person.slices_with_toppings;
            if (person.new_topping.count <= balance) {
                person.toppings.push($.extend(true, {}, person.new_topping));
                person.slices_with_toppings += person.new_topping.count;
                person.new_topping = null;
            } else {
                alert("You don't have enough slices!");
            }
             
        }; 
    });

    /*
    app.directive('pizPerson', function () {
        return {
            templateUrl: "pizPerson.html",
            controller: "StoreController",
            controllerAs: "store"
        };
    });
    */
    
    app.directive("pizPizza", function() {
        return {
            restrict: 'E',
            templateUrl: "pizPizza.html",
            scope: {
                people: '='
            },
            controller: ['$scope', function (scope) {
                function extract_toppings(people, summary) {
                    for (i = 0; i < people.length; i++) {
                        toppings = people[i].toppings;
                        for (j = 0; j < Object.keys(toppings).length; j++) {
                            current_topping_name = toppings[j].name;
                            new_topping_count = toppings[j].count;
                            current_topping_count = summary.toppings[current_topping_name] || 0;
                            updated_topping_count = current_topping_count + new_topping_count;
                            summary.toppings[current_topping_name] = updated_topping_count;
                        }
                    }
                    return summary;
                }
                scope.calculate_slices = function (people) {
                    summary = {
                        can_buy : false,
                        pizza_count : 0,
                        toppings : {}
                    };
                    slices = 0;
                    for (i = 0; i < people.length; i++) {
                        slices += people[i].slices;
                    }
                    summary.pizza_count = slices / slices_in_pizza;
                    summary.can_buy = slices !== 0 && slices % slices_in_pizza === 0;
                    summary = extract_toppings(people, summary);
                    return summary;
                };
            }]
        };
    });
})();