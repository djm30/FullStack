import {franc} from 'franc';
import colors from 'colors';
import langs from 'langs';
import figlet from 'figlet';

let args = process.argv.splice(2)[0];

let foundLanguageCode = franc(args);
let foundLanguageString = langs.where("3", foundLanguageCode)

if(foundLanguageString !== undefined) {
    

    figlet(foundLanguageString.name, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data.blue)
    });
}else{
    console.log("Oops, could not detect a langugae!".red)
    console.log('Are you wrapping your text with "double quotes"?'.red)
}
