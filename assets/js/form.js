/**
* Template Name: PhotoFolio - v1.1.1
* Template URL: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

const submitForm = () => {
  console.log("submit this form")
  
// POST request using fetch()
fetch("https://6kmiwnu3oa.execute-api.us-east-1.amazonaws.com/360GlamEmail", {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
        name: "foo",
    }),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Converting to JSON
.then(response => response.json())
 
// Displaying results to console
.then(json => console.log(json));
  
}