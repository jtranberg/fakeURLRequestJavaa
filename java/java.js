const fakeRequest = (url) => {                                   //request url   ,  name const
    return new Promise((resolve, reject) => {
       setTimeout(() => {                                          //delay function
         const pages = {                              //uint picker
                '/users': [
                    { id: 1, username: "Bilbo" },
                    { id: 5, username: "Esmerelda" }
                 ],
                 '/about' : 'This is the about page!'
            };
            const data = pages [url]
            if(data){
            resolve({status: 200, data});
            }   else {
            reject({ status: 404});
         }
       },1000);
    });
};
fakeRequest('/users')
  .then((res) => { 
    console.log('Status Code', res.status);
    console.log('Data', res.data);                                         //rtesolve is success
    console.log('It worked!!');                                   //print
}).catch((res) => {
    console.log(res.status);                                                  //reject successful
    console.log('Still A success!!');
});
fakeRequest('/cats')
  .then((res) => { 
    console.log('Status Code', res.status);
    console.log('Data', res.data);                                         //rtesolve is success
    console.log('It worked!!');                                   //print
}).catch((res) => {
    console.log(res.status);                                                  //reject successful
    console.log('Still A success!!');
});