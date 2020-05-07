function getFrequency(arr) {
    const frequency = arr.reduce((acc, curr) => {
        if (acc[curr])
            acc[curr] = acc[curr] + 1;
        else
            acc[curr] = 1;

        return acc;
    }, {});

    return frequency;
}

function organizeNumArray(arr) {
    const frequency = getFrequency(arr);
    const keys = Object.keys(frequency);

    const output = keys.reduce((acc, curr) => {
        if (frequency[curr] === 1)
            acc.push(curr);
        else
            acc.push(Array(frequency[curr]).fill(curr));

        return acc;
    }, []);

    return output;
}

function organizeNumAndStrArray(arr) {
    const output = arr.reduce((acc, curr) => {
        if (typeof curr === 'string')
            acc[1].push(curr);
        else
            acc[0].push(curr);

        return acc;
    }, [
        [],
        []
    ]);

    return output;
}

let containsString = false;

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string') {
        console.log(organizeNumAndStrArray(arr));
        containsString = true;
        break;
    }
}

if (!containsString) {
    console.log(organizeNumArray(arr));
}