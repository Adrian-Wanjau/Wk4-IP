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
    this.address = place;
}

Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName + ", " + this.address;
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
    $(".col-md-4").click(function() {
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

    $(".col-md-4").submit(function(event) {
        event.preventDefault();
    
        var inputtedFirstName = $("input#firstName").val();
        var inputtedLastName = $("input#lastName").val();
        var inputtedAddress = $("input#address").val();
    
        var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedAddress);
    
        $("input#firstName").val("");
        $("input#lastName").val("");
        $("input#address").val("");
      });
});