import creatdeepstream from 'deepstream.io-client-js';

const url = '10.1.10.148:6020';

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