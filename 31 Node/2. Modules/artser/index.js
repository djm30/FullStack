const figlet = require('figlet');
const colors = require('colors');

figlet('Hey There <3', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.green);
});