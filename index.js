const {google} = require('googleapis');
const Console = require("console");
const sheets = google.sheets({
    version: 'v4',
    auth: '#', // specify your API key here
});
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

main(); // Call the function

async function main () {
    const name = sheets.spreadsheets.values.get({spreadsheetId: '#', range: 'Schedule!E3:E'}); // Go to the sheet and this range
    console.log(name); // Output to console
}