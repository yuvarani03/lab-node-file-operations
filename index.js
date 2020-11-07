const fs = require('fs');
const os=require('os')
var value=require('./data')
const crypto = require('crypto');
var data=os.userInfo()
const secret = data.username;
const password = crypto.createHmac('sha256', secret).update('Prograd').digest('hex');

var userdata= value.data("Prograd",2020,"BE")
fs.appendFile('message.txt',(
  `ProGrad Details
   UserId ->        ${data.uid},
   Name ->          ${userdata.name},
   Year ->          ${userdata.Year},
   Qualification -> ${userdata.Qualification},
   UserName->       ${data.username},
   Password ->      ${password}
  `),  
(err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });
