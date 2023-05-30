// Array to track the occupancy of each slot
var slotsOccupancy = [false, false, false, false, false, false];

// Function to update the slot status based on occupancy
function updateSlotStatus() {
  var slots = document.querySelectorAll('.slot');
  for (var i = 0; i < slots.length; i++) {
    var slot = slots[i];
    var slotNumber = parseInt(slot.getAttribute('data-slot'));
    if (slotsOccupancy[slotNumber - 1]) {
      slot.classList.remove('empty');
      slot.classList.add('occupied');
    } else {
      slot.classList.remove('occupied');
      slot.classList.add('empty');
    }
  }
}

// Add event listener to slots for booking
var slots = document.querySelectorAll('.slot');
for (var i = 0; i < slots.length; i++) {
  slots[i].addEventListener('click', function() {
    if (!this.classList.contains('occupied')) {
      var selectedSlot = this.getAttribute('data-slot');
      document.getElementById('slot').value = selectedSlot;
    }
  });
}

// Form submission
document.getElementById('booking-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var date = document.getElementById('date').value;
  var slot = document.getElementById('slot').value;

  // Here, you can send an AJAX request to the server or integrate with a third-party service to send a message to the provided phone number with the booking details.

  // Update the slot occupancy
  slotsOccupancy[slot - 1] = true;
  updateSlotStatus();

  alert("Booking successful! You will receive a confirmation message shortly.");
});

// Install the Java helper library from twilio.com/docs/java/install

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

public class Example {
    // Find your Account SID and Auth Token at twilio.com/console
    // and set the environment variables. See http://twil.io/secure
    public static final String ACCOUNT_SID = System.getenv("TWILIO_ACCOUNT_SID");
    public static final String AUTH_TOKEN = System.getenv("TWILIO_AUTH_TOKEN");

    public static void main(String[] args) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Message message = Message.creator(
                new com.twilio.type.PhoneNumber("+15558675310"),
                new com.twilio.type.PhoneNumber("+15017122661"),
                "Hi there")
            .create();

        System.out.println(message.getSid());
    }
}