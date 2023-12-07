/* Four built in Modules*/
// OS 
// Path
// FS
// HTTP

/*
const os = require('os');

const user = os.userInfo();
console.log(user);
console.log(os.uptime());
console.log(os.homedir())

const system = {
    name : os.type(),
    release : os.release(),
    freemem : os.freemem(),
    totmem : os.totalmem(),
};
console.log(system);
*/

/*******PATH****/
const path = require('path');
console.log(path.dirname('./NODEJS/6-built-int-module.js'));

console.log(path.basename('./nodeJS/6-built_in_module.js'))