//To handle the exception, you can use the try...catch statement. For example

function add(x, y) {
    if (typeof x !== 'number') {
    throw 'The first argument must be a number';
    }
    if (typeof y !== 'number') {
    throw 'The second argument must be a number';
    }
    return x + y;
   }
   try {
    const result = add('a', 10);
    console.log(result);
   } catch (e) {
    console.log(e);
   }
   