(function () {
    var app = angular.module('store', [ ]);
    app.controller('StoreController', function () { 
        this.persons = [];
        this.new_person = {
            name: '',
            slices: '',
            has_toppings : false,
            toppings : [],
            slices_with_toppings : 0
        };
        this.chosing_slices = false;
        this.summary = function () {
            for (i = 0; i < this.persons.length; i++) {
            }
        }
        this.add_person = function(person) {
            this.persons.push($.extend(true, {}, person));
            this.new_person = {
                name: '',
                slices: '',
                has_toppings : false,
                toppings : [],
                slices_with_toppings : 0
            };
        }
        this.show_slices = function() {
            this.chosing_slices = !this.chosing_slices;
        }
        
        this.add_toppings = function(person) {
            person.has_toppings = true;
        }
        
        
        this.add_topping = function(person) {
            balance =  person.slices_amount - person.slices_with_toppings
            if (person.new_topping.amount <= balance)
            {
                person.toppings.push($.extend(true, {}, person.new_topping));
                person.slices_with_toppings += person.new_topping.amount
                person.new_topping = null;
            }
            else 
            {
                alert("You don't have enough slices!");
            }
             
        }
            
    });
})();