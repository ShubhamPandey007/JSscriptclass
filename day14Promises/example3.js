//handling sequence of asynchronous events :

// chain of asynchronous operations using callback
setTimeout(() => {
    console.log("a");
    setTimeout(() => {
     console.log("b");
     setTimeout(() => {
     console.log("c");
     setTimeout(() => {
     console.log("d");
     setTimeout(() => {
     console.log("e");
     }, 1000);
     }, 1000);
     }, 1000);
     }, 1000);
    }, 1000);
    // chain of asynchronous operations using Promise
    const delay = (time) =>
    new Promise((resolve) => {
     setTimeout(resolve, time);
     });
    delay(1000)
     .then(() => {
     console.log("a");
     return delay(2000);
     })
     .then(() => {
     console.log("b");
     return delay(2000);
     })
     .then(() => {
     console.log("c");
     return delay(2000);
     })
     .then(() => {
     console.log("d");
     return delay(2000);
     })
     .then(() => {
     console.log("e");
     return delay(2000);
     });