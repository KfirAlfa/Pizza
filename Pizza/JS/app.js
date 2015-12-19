(function () {
    var app = angular.module('store', ['ngMaterial']);
    slices_in_pizza = 8;
    app.controller('StoreController', function () {
        this.people = [];
        this.new_person = {
            name: '',
            slices: {},
            total_slices:0, 
        };
        this.toppings = [
            { value: 'blank', display: 'blank'},
            { value: 'גבינה בולגרית', display: 'גבינה בוולגרית'},
            { value: 'זיתעם', display: 'זיתים'},
        ]
        this.chosing_slices = false;
        this.add_person = function (person) {
            this.people.push($.extend(true, {}, person));
            this.new_person = {
                name: '',
                slices: 0,
            };
        };
        
        this.add_slices = function (person) {
            //person.toppings.push($.extend(true, {}, person.new_topping));
            console.log(person.new_topping.name.display)
            person.slices[person.new_topping.name.display] = person.new_topping.count;
            console.log(person)
            person.new_topping = null;
             
        }; 

        this.findToppings = function (search_text) {
            return this.toppings;
        }
    });
 
    /*   
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
*/
})();