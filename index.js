const express =require('express')
const app  = express()
const connection = require('./db.js');
const Cors =require('cors')
var mqtt = require('mqtt');

app.use(Cors());
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}));
 
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

var client  = mqtt.connect('mqtt://broker.hivemq.com');
var data=null;
const server = require('http').createServer(app)
const io =require('socket.io')(server,{cors:{origin:"*"}})

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

var data=null;

var sock =null;

client.on('message', (topic, message)=> {
  // message is Buffer

  data=(message.toString())
  if(topic=='outt'){
      var lnt =data.length;
            if(lnt==6){
                  t=data[1]+data[2];
                  k=data[4];
                  }
                else if(lnt==7){
                      t=data[1]+data[2],data[3];
                      k=data[5];
                      }
                                else{
                                t=data[1];
                                k=data[3];
                                }
        p=parseInt(t,10)
        s=parseInt(k,10)
        data=[p,s]
        sock.emit('me',data)
        console.log(data)
                  const sq= "update test set p_status = ? where pin=?";
                  connection.query(sq,[(s==1?1:0),p],(err,result)=>{
                    if(err){
                      console.log(err)
                    }
                  })
              }
                 else if(topic=='cntd'){
                  const q ="select p_status ,pin from test";
                  connection.query(q,(err,row)=>{
                    row.forEach(element => {
                      client.publish('esp8266',"{Pin:"+element.pin+",S:"+element.p_status+",st:1}")
                        });
                     })
               }
               else if(topic=='alive'){
                lastTime=Date.now();
                 
                }

})



      io.on('connection',(socket)=>{
        sock=socket;
        if(socket){
        socket.on('msg',(dataa)=>{
         console.log(dataa)
          if(dataa){
          client.publish('esp8266',dataa)

            }
        })
        
       }
      })
           
server.listen(3001,()=>{
    console.log("listening on port 3001")
})