const myInformation = require('./information.txt');
const cowsay = require("cowsay");

console.log(myInformation);


console.log(cowsay.think({
    text: `I'm ${myInformation.name} from ${myInformation.campus} Campus!`
}));