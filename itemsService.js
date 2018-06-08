"use strict";
{
    function ItemsService($http) {
        let items = [];
        const getItems = () => {
            return $http({
                method: "GET",
                url: "/items"
            }).then(function (response) {
                items = response.data;
                return items;
            });
        };
        return {
            getItems
        };
    }
 
    ItemsService.$inject = ["$http"];

    angular
        .module("app")
        .factory("ItemsService", ItemsService);
}