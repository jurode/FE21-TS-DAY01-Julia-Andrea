// Basic ex 1

// Make a multiplication table using TypeScript loops from an array with number values 1 to 10 and the result should look like this:
// 1 X 1 = 1
// 2 X 1 = 2
// 3 X 1 = 3
// …

// 1 X 2 = 2
// 2 X 2 = 4
// …



for (var i = 1; i <= 10; i++) {
    // 1st: .. X 1 = ...

    for (var j = 1; j <= 10; j++){
        // 2nd: 1 X ... = ...; 2 X ...

        let multi : number = [i] * [j];
        console.log([j] + " X " + [i] + " = " + multi);

    }
}

