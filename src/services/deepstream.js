import creatdeepstream from 'deepstream.io-client-js';

const url = '10.1.10.148:6020';

export default () => {


    const ds = creatdeepstream(url);
    
    ds.on('connectionStateChanged',(connectionState) =>{

        console.log('connectionState',connectionState);
    })

   return ds;

};