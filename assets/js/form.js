/**
* Template Name: PhotoFolio - v1.1.1
* Template URL: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

const submitForm = (name, email, PreferredContactMethod, phone, EventLocation, Chanel, EventDate, EventType, Hours, TimeInterval, Comments) => {
  
// POST request using fetch()
fetch("https://18bsbinhgi.execute-api.us-east-1.amazonaws.com/develop/360glam", {
     
    // Adding method type
    method: "POST",
    mode: 'cors',
     
    // Adding body or contents to send
    body: JSON.stringify({
                name: name,
                email: email,
                PreferredContactMethod: PreferredContactMethod,
                phone: phone,
                EventLocation: EventLocation,
                Chanel: Chanel,
                EventDate: EventDate,
                EventType: EventType,
                Hours: Hours,
                TimeInterval: TimeInterval,
                Comments: Comments
    }),
})
 
// Converting to JSON
.then(response => response.json())
 
// Displaying results to console
.then(json => console.log(json));
  
}

const validateinputs = () => {
 const name = document.getElementById("name").value;
 const email = document.getElementById("email").value;
 const method = document.getElementById("method").value;
 const phone= document.getElementById("phone").value;
 const eventLocation= document.getElementById("event-location").value;
 const platform =  document.getElementById("platform").value;
 const eventDate = document.getElementById("event-date").value;
 const eventType = document.getElementById("event-type").value;
 const hours = document.getElementById("hours").value;
 const time = document.getElementById("time").value;
 const message = document.getElementById("message").value;

 console.log(name);
 console.log(method);
 console.log(email);
 console.log(phone);
 console.log(eventLocation);
 console.log(platform);
 console.log(eventDate);
 console.log(eventType);
 console.log(hours);
 console.log(time);
 console.log(message);
 submitForm (name, email, method, phone, eventLocation, platform, eventDate, eventType, hours, time, message);
}