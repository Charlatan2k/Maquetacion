jQuery(() => {
  var totalSum = 0; // Initialize a variable to keep track of the total sum

  $(".comprar").on("click", function () {
    var price = parseFloat($(this).closest(".card").find(".precio").text());
    var name = $(this).closest(".card").find(".card-title").text();
    $("#ex1").append("<p>" + name + " - " + price + "€</p>");

    // Update the totalSum with the clicked item's price
    totalSum += price;

    // Update the total sum in the new <p> tag
    $("#totalSum").text("Total Sum: " + totalSum.toFixed(2) + "€");
  });
});
