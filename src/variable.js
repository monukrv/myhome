import mqtt from 'mqtt'


export var urll = {

    /*
    remoteurl:'http://192.168.43.45:3001', 
    */
    remoteurl: 'http://localhost:3001',
    client: mqtt.connect('ws://broker.hivemq.com:8000/mqtt'),

};









