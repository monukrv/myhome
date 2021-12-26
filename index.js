const express =require('express')
const app  = express()
const connection = require('./db.js');
const Cors =require('cors')
var mqtt = require('mqtt');
const { json } = require('body-parser');
const config =require('./config.js')

app.use(Cors());
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}));

const server = require('http').createServer(app)
const io =require('socket.io')(server,{cors:{origin:"*"}})

var sock =null;
io.on('connection',(socket)=>{
  sock=socket;
})

app.post('/insertbtn',(req,res)=>{
        const pin =req.body.pin
        const name =req.body.name
        const bord =req.body.bord
        const type = req.body.type
        const mode = req.body.mode
        console.log(req.body)
          const sqlq= "insert into test (bord,pin,b_name,p_type,p_status) values (?,?,?,?,?)";
          connection.query(sqlq,[bord,pin,name,type,mode],(err,result)=>{
            if(err){
              console.log(err)
            }
          })
          console.log('llllllllllll')
  })

  app.put('/update',(req,res)=>{
    const p_n =req.body.pn
    const p_s =req.body.ps
    console.log(req.body)
      const sqlq= "update test set p_status = ? where b_name=?";
      connection.query(sqlq,[(p_s==1?0:1),p_n],(err,result)=>{
        if(err){
          console.log(err)
        }
      })
})

app.get('/app',(req,res)=>{
            const q ="select * from test";
            connection.query(q,(err,row)=>{
              res.send(row);
              console.log(err);
            });
   })

app.post('/getps',(req,res)=>{
    const q ="select p_status from test where b_name = ?";
    connection.query(q,[req.body.btnam],(err,row)=>{
      res.send(row);

});
})

app.post('/delete',(req,res)=>{
            const dpin = req.body.pinn
            const dnam = req.body.namm
            const sqlq= "delete from test where pin || b_name =?";
            connection.query(sqlq,[dpin || dnam || null],(err,result)=>{
              if(err){
                console.log(err) 
              }
            })
            
            
})

var client  = mqtt.connect(config.mqtturl);

client.on('connect', ()=> {
      client.subscribe('outt', (err)=> {
        if (!err) {
          client.publish('pre', 'Hello mqtt')
          console.log('outt connected')
        }
      })
      client.subscribe('cntd', (err)=> {
        if (!err) {
          client.publish('pre', 'Hello mqtt')
          console.log('cntd connected')
        }
      })
      client.subscribe('alive', (err)=> {
        if (!err) {
          client.publish('pre', 'Hello mqtt')
          console.log('alive connected')
        }
      })
})

client.on('message', (topic, msg)=> {
  if(topic=='outt'){
    var data =JSON.parse(msg);
                  const sq= "update test set p_status = ? where pin=?";
                  connection.query(sq,[data[1],data[0]],(err,result)=>{
                    if(err){
                      console.log(err)
                    }
                  })
              }
                 else if(topic=='cntd'){
                  const q ="select p_status ,pin from test";
                  connection.query(q,(err,row)=>{
                    console.log(row)
                    row.forEach(element => {
                      client.publish('esp8266',"{Pin:"+element.pin+",S:"+element.p_status+",st:1}")
                        });
                     })
               }
}) 


           
server.listen(3001,()=>{
    console.log("listening on port 3001")
})