(function () {
    var person = {
        name : "unamed",
        slices : {},
        toppings : []
    };
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
                console.log(this.persons[i]);
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
            console.log(this.chosing_slices)
            this.chosing_slices = !this.chosing_slices;
            console.log(this.chosing_slices)
        }
        
        this.add_toppings = function(person) {
            console.log("ADSFAFDSDSAF")
            person.has_toppings = true;
        }
        
        
        this.add_addition = function(person) {
            balance =  person.slices_amount - person.slices_with_toppings
            if (person.new_addition.amount <= balance)
            {
                person.toppings.push($.extend(true, {}, person.new_addition));
                person.slices_with_toppings += person.new_addition.amount
                person.new_addition = null;
            }
            else 
            {
                alert("You dont have enough slcies")
            }
             
        }
            
    });
})();