/*
const {readFileSync, writeFileSync} = require('fs');

const text1 = readFileSync('./content/text1.txt','utf-8');
const text2 = readFileSync('./content/text2.txt','utf-8');

writeFileSync('./content/merge_text_sync',
     `This is a merge file of text1 & text2 : ${text1} . ${text2}`,'utf-8');
     */
const fs = require("fs");

// Reading the first file asynchronously
console.log('start');
fs.readFile("./content/text1.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const text1 = data;

  fs.readFile("./content/text2.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const text2 = data;

    fs.writeFile(
      "./content/merge_text_async",
      `This is a merge file of text1 & text2 : ${text1} . ${text2}`,
      (err,data) => {
        if(err){
            console.log(err);
            return ;
        }
        console.log(data);
        console.log('done the task')
      }
    );
  });
});
console.log('starting the next task');