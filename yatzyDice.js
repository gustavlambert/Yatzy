// Face values of the 5 dice
let values = [0, 0, 0, 0, 0];

// Number of throws
let throwCount = 0;

// Get values
function getValues() {
    return values;
}

// Set values (kun til test)
function setValues(newValues) {
    values = newValues;
}

// Get throw count
function getThrowCount() {
    return throwCount;
}

// Reset throw count
function resetThrowCount() {
    throwCount = 0;
}

// Throw dice
function throwDice(holdStatus) {
    for (let i = 0; i < holdStatus.length; i++) {
        if (!holdStatus[i]) {
            values[i] = Math.floor(Math.random() * 6) + 1;
        }
    }
    throwCount++;
}
 
// Hjælpemetode til at tælle hvor mange gange hvert øjental forekommer på terninger
function frequency() {
    let freq = [0, 0, 0, 0, 0, 0, 0];

    for (let i = 0; i < values.length; i++) {
        let v = values[i];
        freq[v] = freq[v] + 1;
    }

    return freq;
}

// Same value points
function sameValuePoints(value) {
    let points = 0;

    for (let i = 0; i < values.length; i++) {
        if (values[i] === value) {
            points = points + value;
        }
    }

    return points;
}

// One pair
function onePairPoints() {
    let freq = frequency();

    for (let i = 6; i >= 1; i--) {
        if (freq[i] >= 2) {
            return i * 2;
        }
    }

    return 0;
}

// Two pairs
function twoPairPoints() {
    let freq = frequency();
    let firstPair = 0;
    let secondPair = 0;

    for (let i = 6; i >= 1; i--) {
        if (freq[i] >= 2) {
            if (firstPair === 0) {
                firstPair = i * 2;
            } else {
                secondPair = i * 2;
                break;
            }
        }
    }

    if (firstPair > 0 && secondPair > 0) {
        return firstPair + secondPair;
    }

    return 0;
}

// Three of a kind
function threeSamePoints() {
    let freq = frequency();

    for (let i = 1; i <= 6; i++) {
        if (freq[i] >= 3) {
            return i * 3;
        }
    }

    return 0;
}

// Four of a kind
function fourSamePoints() {
    let freq = frequency();

    for (let i = 1; i <= 6; i++) {
        if (freq[i] >= 4) {
            return i * 4;
        }
    }

    return 0;
}

// Full house
function fullHousePoints() {
    let freq = frequency();
    let three = 0;
    let pair = 0;

    for (let i = 1; i <= 6; i++) {
        if (freq[i] === 3) {
            three = i * 3;
        }
        if (freq[i] === 2) {
            pair = i * 2;
        }
    }

    if (three > 0 && pair > 0) {
        return three + pair;
    }

    return 0;
}

// Small straight
function smallStraightPoints() {
    let freq = frequency();

    for (let i = 1; i <= 5; i++) {
        if (freq[i] !== 1) {
            return 0;
        }
    }

    return 15;
}

// Large straight
function largeStraightPoints() {
    let freq = frequency();

    for (let i = 2; i <= 6; i++) {
        if (freq[i] !== 1) {
            return 0;
        }
    }

    return 20;
}

// Chance
function chancePoints() {
    let sum = 0;

    for (let i = 0; i < values.length; i++) {
        sum = sum + values[i];
    }

    return sum;
}

// Yatzy
function yatzyPoints() {
    let freq = frequency();

    for (let i = 1; i <= 6; i++) {
        if (freq[i] === 5) {
            return 50;
        }
    }

    return 0;
}

// Get all results
function getResults() {
    return [
        sameValuePoints(1),
        sameValuePoints(2),
        sameValuePoints(3),
        sameValuePoints(4),
        sameValuePoints(5),
        sameValuePoints(6),
        onePairPoints(),
        twoPairPoints(),
        threeSamePoints(),
        fourSamePoints(),
        fullHousePoints(),
        smallStraightPoints(),
        largeStraightPoints(),
        chancePoints(),
        yatzyPoints()
    ];
}