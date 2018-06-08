"use strict";
{
    let shop ={
        controller: function(itemsService){
            let vm = this;
            itemsService.getItems().then(function(response){
                vm.items = response;
            });
            
        },
        template:` <h1> Welcome to box world </h1>
                <div ng-repeat="item in $ctrl.items"> 
                    <p>Product: {{item.name}}</p>
                    <p>Price: {{item.price}}</p>
                    <p>Stock: {{item.quantity}}</p>
                    <button>Remove item</button>
                    <p> ------------------------------------------------------------------------------ </p>
                </div>
        `

    }
    shop.$inject= ["ItemsService"];

    angular
        .module("app")
        .component("shop", shop)
}