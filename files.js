const fs = require('fs');

//reading files
fs.readFile('./Readme.md', (err,data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})

console.log('last line');


// Writting files 

fs.writeFile('./Readme.md', 'Node Training hard', () => {
    console.log('file was written');
})

// Directories 
if(!fs.existsSync('./assets')){
fs.mkdir('./assets', (err)=>{
    if(err){
        console.log(err);
    }
    console.log('folder created');
})
}