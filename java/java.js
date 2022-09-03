const fakeRequest = (url) => {                                   //request url   ,  name const
    return new Promise((resolve, reject) => {
       setTimeout(() => {                                          //delay function
         const rand = Math.random()                               //uint picker
         if(rand < 0.7){                                          //arguments
            reject();
         } else {
            resolve();
         }
       },3000);
    });
};
fakeRequest().then(() => {                                        //rtesolve is success
    console.log('It worked!!');                                   //print
}).catch(() => {                                                  //reject successful
    console.log('Still A success!!');
});