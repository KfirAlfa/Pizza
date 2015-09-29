(function(){
    var person = {
        name : "unamed",
        slices : {},
        additions : []
    }
    var app = angular.module('store', [ ]);
    app.controller('StoreController', function(){ 
        this.persons = [];
        this.new_person = {
            name: '',
            slices: '',
            has_additions : false,
            additions : [],
            slices_with_additions : 0
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
                has_additions : false,
                additions : [],
                slices_with_additions : 0
            };
        }
        this.show_slices = function() {
            console.log(this.chosing_slices)
            this.chosing_slices = !this.chosing_slices;
            console.log(this.chosing_slices)
        }
        
        this.add_additions = function(person) {
            person.has_additions = true;
        }
        
        
        this.add_addition = function(person) {
            balance =  person.slices_amount - person.slices_with_additions
            if (person.new_addition.amount <= balance)
            {
                person.additions.push($.extend(true, {}, person.new_addition));
                person.slices_with_additions += person.new_addition.amount
                person.new_addition = null;
            }
            else 
            {
                alert(balance);
            }
             
        }
            
    });
})();