        var shopper = {
        firstName: "James",
        lastName: "Phillips",
        age: 35,
        isAlive: true,
        groceryCart :["vegetables", "fruit", "soup", "crackers", "milk", "cereal", "chips"],
        fullName : function () {
        return this.firstName + " " +
        this.lastName;
        }
        }
        console.log(shopper)
        console.log(shopper.fullName())
        