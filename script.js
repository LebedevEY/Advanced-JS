// const c = require('./func');
// console.log(c.func.a(50));
// console.log(c.func.b(10));

// const os = require('os');
// console.log(os.cpus());

//Работа с файлами

// const fs = require('fs');
//
// let users = [{name: 'Ivan', id: 1}];
//
// fs.writeFile('test.json', JSON.stringify(users), err => {
//     if (err) {
//         console.log(err);
//     }
// });
//
// let user = {"name": "Alex", "id": 2};
//
// fs.readFile('test.json', 'UTF-8', (err, data) =>{
//     if (err) {
//         console.log(err);
//     } else {
//         let users = JSON.parse(data);
//         users.push(user);
//         fs.writeFile('test.json', JSON.stringify(users), err => {
//             if (err) {
//                 console.log(err);
//             }
//         });
//     }
// });

// const http = require('http');
// const server = http.createServer((req, res) => {
//     if(req.url == '/') {
//         res.write('Welcome to server');
//         res.end;
//     }
// });
//
// server.on('connection', (socket, err) => {
//     if (err) {
//         console.log(err);
//     }else {
//         console.log('Соединение установлено');
//     }
// });
//
// server.listen('3000');