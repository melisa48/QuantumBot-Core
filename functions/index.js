const admin = require("firebase-admin");
admin.initializeApp();

// Import the functions from the specific file

const {addMessage} = require("./api/addMessage");

// Export the functions for deplyoment
exports.addMessage = addMessage;


