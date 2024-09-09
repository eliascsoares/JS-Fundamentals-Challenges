let coffeeShop = {
    branch: "Downtown",
    drinks: {
        "Espresso": 2.50,
        "Latte": 3.00,
        "Cappuccino": 3.50,
        "Americano": 2.00
    },
    food: {
        "Croissant": 2.00,
        "Muffin": 1.50,
        "Sandwich": 4.00,
        "Bagel": 2.50
    },
    drinksOrdered: function(...orders) {
        let totalCost = 0;
        let orderSummary = "Your order is: ";
        
        orders.forEach(item => {
            if (this.drinks[item]) {
                orderSummary += `${item} (£${this.drinks[item].toFixed(2)}), `;
                totalCost += this.drinks[item];
            }
        });
        
        return orderSummary + `Total: £${totalCost.toFixed(2)}`;
    },
    foodOrdered: function(...orders) {
        let totalCost = 0;
        let orderSummary = "Your order is: ";
        
        orders.forEach(item => {
            if (this.food[item]) {
                orderSummary += `${item} (£${this.food[item].toFixed(2)}), `;
                totalCost += this.food[item];
            }
        });
        
        return orderSummary + `Total: £${totalCost.toFixed(2)}`;
    }
};

console.log(coffeeShop.drinksOrdered("Espresso", "Latte"));
console.log(coffeeShop.foodOrdered("Croissant", "Sandwich"));