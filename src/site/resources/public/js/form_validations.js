$().ready(function() {
  $("#createCustomer").validate({
    rules: {
      clientName: "required",
      clientPhone: {
        required: true,
        digits: true
      },
      clientURL: {
        required: true,
        url: true
      },
      clientStreet_01: "required",
      clientCity: "required",
      clientRegion: "required",
      clientCountry: "required"
    },
    messages: {
      clientName: "Please enter the client's name",
      clientPhone: {
        required: "Please enter the client's phone number",
        digits: "Client's phone number can contain only digits"
      },
      clientURL: {
        required: "Please enter the client's website",
        url: "Please enter valid website"
      },
      clientStreet_01: "Please enter a street address",
      clientCity: "Please enter a city",
      clientRegion: "Please enter a state, province or region",
      clientCountry: "Please select a country"
    }
  });
})