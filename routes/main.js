// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes

router.get("/", (req, res) => res.send("Hello World!"));
router.get('/about', (req, res) => res.send ('<h1>This is about page</h1>'));
router.get('/contact', (req, res) => res.send ('<h1>You can contact me by sending an email to: anushka@gmail.com</h1>'));
//first line is for requests beign made to the /date endpoint. req contains details of incoming http request and res sends back response to client
router.get('/date', (req, res) => {
    //new date stores current date and time
    const currentDate = new Date();
    res.send(`<p>Current Date and Time: ${currentDate.toLocaleString()}</p>`);
});

// Export the router object so index.js can access it
module.exports = router;
