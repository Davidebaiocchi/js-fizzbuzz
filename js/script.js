// Scrivi un programma che stampi i numeri da 1 a 100 
// ma per i multipli di 3 stampi anche "Fizz" di fianco al numero e per i multipli di 5 stampi "Buzz". 
// Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz". :collisione:


for(var i = 1; i <= 100; i++) {
    if(i % 3 == 0 & i % 5 == 0 & i % 6 == 0) {
        console.log(i + 'FizzBuzzBoolean');
    }else if(i % 3 == 0 & i % 5 == 0) {
        console.log(i + 'FizzBuzz');
    } else if(i % 5 == 0) {
        console.log(i + 'Buzz');
    } else if(i % 6 == 0) {
        console.log(i + 'FizzBoolean');
    } else if(i % 3 == 0) {
        console.log(i + 'Fizz');
    } else {
        console.log(i);
    }
}

