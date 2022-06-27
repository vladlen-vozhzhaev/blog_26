const http = require('http')
const express = require('express');
const app = express();
const multer  = require('multer')
const port = 7000
const queryString = require('query-string');


app.use(express.static(`${__dirname}/public`));
app.post('/auth', multer().any(), (req, res)=>{
    console.log(req.body);
    if(req.body.login === "ivan2@mail.ru" && req.body.pass === "12345")
        res.send({result: "success"});
    else{
        res.send({result: "error"});
    }
})

/*const server = http.createServer((req, res)=>{
    console.log(req.url);
    if(req.url.indexOf('/auth') === 0){
        /!*let params = req.url.split('&');
        let login = params[0].split('=')[1];
        let pass = params[1].split('=')[1];
        if(login === 'ivan2%40mail.ru' && pass === '12345'){
            res.end("success");
        }else{
            res.end("error");
        }*!/
        const chunks = [];
        req.on('data', (chunk) => { chunks.push(chunk)});
        req.on('end', () => {

            console.log('No more data', Buffer.concat(chunks));
        })
        console.log(req.body);
    }
});*/

app.listen(port, ()=>{
    console.log(`Сервер запущен http://localhost:${port}`)
})