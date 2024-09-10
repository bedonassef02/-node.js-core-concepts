setTimeout(() => {
    console.log('Hello World');
}, 1);

for (let i = 0; i < 100000000; i++) {
    if (i === 100000000 - 1) {
        console.log(i);
    }
}