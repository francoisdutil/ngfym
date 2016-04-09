'use strict';

angular.module('ngFYM').filter('cityfilter', function() {
  return function(itemsCity, search) {
    if (!search) {
      return itemsCity;
    }
    
    var cityName = search.cityName;
    if (!cityName || '' === cityName) {
      return itemsCity;
    }
    
    return itemsCity.filter(function(element, index, array) {
      return element.cityName.name === search.cityName;
    });
    
  };
});

angular.module('ngFYM').filter('isFuture', function() {
  return function(items) {
    return items.filter(function(item){
      return moment(item.date).isAfter(new Date());
    })
  }
})


