const fs = require('fs');
const folderName = process.argv[2] || "Project"; 

// console.log(fs)

// fs.mkdir("Dogs", {recursive: true}, (err) =>{
//     console.log("IN THE CALLBACK");
//     if(err) throw err;
// });

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, data="");
    fs.writeFileSync(`${folderName}/stlye.css`, data="");
    fs.writeFileSync(`${folderName}/app.js`, data="");
}catch(err) {
    console.error(err);
}

console.log("After callback");
