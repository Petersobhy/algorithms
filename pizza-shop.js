/*
    https://aonecode.com/google-phone-pizza-shop
*/

var findClosestPricedPizza = function(pizzas, toppings, amount) {
    var offers = []; // [[1000: 0], [1050, -50], ...] [cost, change]

    for(var p = 0; p < pizzas.length; p++) {
        var closestOfer = pizzas[p];
        
        offers.push([closestOfer, amount-closestOfer]);

        for(var t = 0; t < toppings.length; t++) {
            if(closestOfer < amount){
                closestOfer += toppings[t];
                offers.push([closestOfer, amount-closestOfer]);
            }
        }
    }

    // sort Abs change desc
    offers.sort(function(a, b){ 
        return Math.abs(a[1]) != Math.abs(b[1]) ?
                Math.abs(a[1]) < Math.abs(b[1]) ? -1 : 1 :
                a[1] < b[1] ? 1 : -1;

    });

    return offers[0][0];
}


console.log(findClosestPricedPizza([800, 850, 900], [100, 150], 1000)); // 1000
console.log(findClosestPricedPizza([850, 900], [200, 250], 1000)); // 1050
console.log(findClosestPricedPizza([1100, 900], [200], 1000)); // 900
console.log(findClosestPricedPizza([800, 800, 800], [100], 1000)); // 900


