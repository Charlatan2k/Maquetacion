jQuery(() => {
  var totalSum = 0;

  $(".comprar").on("click", function () {
    var price = parseFloat($(this).closest(".card").find(".precio").text());
    var name = $(this).closest(".card").find(".card-title").text();
    $("#ex1").append("<p>" + name + " - " + price + "€</p>");

    totalSum += price;

    $("#totalSum").text("Total Sum: " + totalSum.toFixed(2) + "€");
  });
});
