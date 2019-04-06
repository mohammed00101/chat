import creatdeepstream from 'deepstream.io-client-js';

const url = '192.168.44.106:6020';

export default () => {

        const ds = creatdeepstream(url);

        ds.on('connectionStateChanged',(connectionState) =>{
            console.log('connection State',connectionState);
        });

        ds.on('error',(error)=>{
            console.log('connection error',error);

        });

        return ds;

};