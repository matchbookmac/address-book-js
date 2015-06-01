"use strict";


//jQuery
$( document ).ready(function() {
  $("form#new_contact").submit(function(event) {
    event.preventDefault();

    var firstName = $("input#first_name").val();
    var lastName = $("input#last_name").val();
    var phone = $("input#phone_number").val();
    var street = $("input#street").val();
    var city = $("input#city").val();
    var state = $("input#state").val();
    var zip = $("input#zip").val();

    var newContact = { firstName: firstName, lastName: lastName, phone: phone, addresses: [] }
    newContact.fullName = function() { return this.firstName + " " + this.lastName; };
    var newAddress = { street: street, city: city, state: state, zip: zip }

    newContact.addresses.push(newAddress);

    $(".contacts").show();
    $("#contact_list").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("form#new_contact").find("input").val('')

    $(".contact").last().click(function() {
      $("#show_contact").show();

      $("#show_contact h2").text(newContact.fullName());
      $(".first_name").text(newContact.firstName);
      $(".last_name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.street + "<br>" + address.city + ", " + address.state + " " + address.zip + "</li>");
      });
    });
  });

});
