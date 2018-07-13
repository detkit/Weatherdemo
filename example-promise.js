// function getTempCallback(location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// }
// getTempCallback('Hanoi', function(err, temp) {
//     if(err) {
//         console.log('error', err);
//     }else {
//         console.log('success', temp)
//     }
// });

// function getTempPromise(location) {
//     return new Promise(function(resolve, reject) {
//         resolve(79);
//         reject('City not found');
//     });
// }
// getTempPromise('Hanoi').then(function(temp) {
//     console.log('promise success', temp);
// }, function (err) {
//     console.log('promise error', err);
// })

// Challenge Area
function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if(typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        }else {
            reject('A & B need tp be numbers');
        }
    });
}

addPromise(2, 3).then(function (sum) {
    console.log('success', sum);
}, function (err) {
    console.log('error',err);
});

addPromise('Quang', 10).then( function (sum) {
    console.log('this sould not show up')
}, function (err) {
    console.log('This is not found', err);
});