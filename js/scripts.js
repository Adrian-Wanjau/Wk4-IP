// business logic
function Order(size, crust, toppings) {
    this.pizzaSize = size;
    this.crustType = crust;
    this.pizzaToppings = toppings;
}

Order.prototype.pizzadetails = function() {
    return this.pizzaSize + " " + this.crustType + " " + this.pizzaToppings;
}

function Contact(first, last, place) {
    this.firstName = first;
    this.lastName = last;
}


Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}

  
// user interface logic
$(document).ready(function() {
    $(".clickable1").click(function() {
        $(".columnshowing").toggle();
        $(".columnone img").toggle();
    });
    $(".clickable2").click(function() {
        $(".columnshowing2").toggle();
        $(".columnone2 img").toggle();
    });
    $(".clickable3").click(function() {
        $(".columnshowing3").toggle();
        $(".columnone3 img").toggle();
    });
    $(".row").click(function() {
        $(".hidden-delivery").toggle();
        $(".show-delivery").toggle();
    });
    
    
    $(".form").submit(function(event) {
        event.preventDefault();
    
        var inputtedSize = $("radio#size").val();
        var inputtedCrust = $("radio#crust").val();
        var inputtedTopping = $("radio#topping").val();
    
        var newOrder = new Order(inputtedSize, inputtedCrust, inputtedTopping);
    
        $("ul#Order").append("<li><span class='order'>" + newOrder.pizzadetails() + "</span></li>");
    
        $("radio#size").val();
        $("radio#crust").val();
        $("radio#topping").val();
    });
});