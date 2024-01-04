    function validateForm() {
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var checkin = document.getElementById('checkin');
      var checkout = document.getElementById('checkout');

      // Basic email validation
      var emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // Check if check-out date is after check-in date
      if (new Date(checkout.value) <= new Date(checkin.value)) {
        alert('Check-out date must be after check-in date.');
        return;
      }

      // Check if the dates are in the future
      var today = new Date();
      if (new Date(checkin.value) <= today || new Date(checkout.value) <= today) {
        alert('Check-in and check-out dates must be in the future.');
        return;
      }

      // Additional validations can be added as needed

      // If all validations pass, submit the form
      alert('Thank you for booking with us! We look forward to seeing you soon.');
      document.getElementById('bookingForm').reset();

      document.getElementById('bookingForm').submit();

    }



    // Set min and max attributes for date inputs
    window.onload = function () {
      var today = new Date();
      var nextYear = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate());

      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
      var yyyy = today.getFullYear();

      today = yyyy + '-' + mm + '-' + dd;
      nextYear = nextYear.toISOString().split('T')[0];

      document.getElementById('checkin').setAttribute('min', today);
      document.getElementById('checkout').setAttribute('min', today);
      document.getElementById('checkin').setAttribute('max', nextYear);
      document.getElementById('checkout').setAttribute('max', nextYear);
    };

    function openchat() {
      document.getElementById('chatform').style.display = "block";
    };

    function closechat() {
      document.getElementById('chatform').style.display = "none";
    };

