const fs = require('../ray-fs.min.js');

const file = "june.json";
fs
  .updateJSON(file, (json) => {
    json.version = "v2.0.8";
    return json;	
  });

/*
fs
  .ls()
  .logVal()
  .rm('tail')
  .logVal()
  .rm('hail')
  .logVal()
*/

/*
fs
  .initDir("face")
  .initDirs("head", "tail")
  .initFile("dogs.json", {name: "scrappy"})
  .initFile("cats.txt", "name: jelly")
*/

/*
fs
  .cd('tests')
  .logDir()
  .ls().logVal()
  .mkdir('dests')
  .logDir()
  .ls().logVal()
  .cd('dests')
  .logDir()
  .ls().logVal()
  .mkdir('bests')
  .logDir()
  .ls().logVal()
*/
/*
  .relPath('LICENSE')
  .logVal()
  .cd('tests')
  .ls()
  .logVal()
  .write("bella.txt", "dark night!")
  .ls()
  .logVal()
  .read("bella.txt")
  .logVal()
*/
/*
fs
  .version() // logs the version of ray-fs
  .logVal()
  .cd('.') // changes working-directory to '.' or any other directory
  .ls() // sets .value to a list of items in the working-directory
  .logVal()
  .exists('tests/') // check fs item exists or not, sets .value to true or false
  .logVal()
  .exists('rounds/') 
  .logVal()
  .isFile('README.md') // check fs item File or not, sets .value to true or false
  .logVal()
  .isFile('tests/')
  .logVal()
  .isDir('README.md') // check fs item Directory or not, sets .value to true of false
  .logVal()
  .isDir('tests/')
  .logVal()
  .lsMatches(item=> fs.isFile(item).value && /.js$/.test(item)) // lists all fs items that match the regex
  .logVal()
  .lsFile() // lists all file items
  .logVal()
  .lsDir() // lists all directory items
  .logVal()
*/
