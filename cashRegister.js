function checkCashRegister(price, cash, cid) {
    let change = [];
    let changeDue = cash - price;
    let temp = changeDue;
    let changeReturn = {};
    let changeAmount = 0;

    console.log(changeDue);

    // reverse cid array
    let cidReverse = cid.reverse();
    console.log(cidReverse);

    // get the total amount of cid
    let cidTotal = cidReverse.reduce((acc, curr) => {
        return acc + curr[1];
    }, 0);

    console.log(cidTotal);

    // if change due is greater than cid total, return insufficient funds
    if (changeDue > cidTotal) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    // if change due is equal to cid total, return closed
    if (changeDue === cidTotal) {
        return { status: "CLOSED", change: cid.reverse() };
    }

    // if change due is less than cid total, return change
    if (changeDue < cidTotal) {
        // create an array of currency values
        let currencyValues = [
            ["ONE HUNDRED", 100],
            ["TWENTY", 20],
            ["TEN", 10],
            ["FIVE", 5],
            ["ONE", 1],
            ["QUARTER", 0.25],
            ["DIME", 0.1],
            ["NICKEL", 0.05],
            ["PENNY", 0.01],
        ];

        // loop through currency values
        for (let i = 0; i < currencyValues.length; i++) {
            let currencyValue = currencyValues[i][1];
            let currencyName = currencyValues[i][0];
            let currencyAmount = cidReverse[i][1];

            console.log(currencyValue, currencyName, currencyAmount);

            // check if currency value is less than or equal to change due
            if (currencyValue <= changeDue) {
                console.log(currencyValue, " < ", changeDue);
                // check if there is enough of the currency to give change
                if (currencyAmount > 0) {
                    console.log(currencyAmount);
                    // check if the currency amount is greater than the change due
                    if (currencyAmount > changeDue) {
                        console.log(currencyAmount, " > ", changeDue);
                        let currencyChange = Math.floor(changeDue / currencyValue);
                        console.log(currencyChange);
                        // get the amount of change to give
                        let changeAmount = Math.floor(changeDue / currencyValue) * currencyValue;

                        console.log(changeAmount, currencyChange, changeDue, currencyValue);

                        // update change due
                        changeDue = changeDue - changeAmount;

                        console.log(changeDue);

                        // push the change to the change array
                        change.push([currencyName, changeAmount]);

                        console.log(change);
                    } else {

                        console.log(currencyAmount, " < ", changeDue);
                        // round up the change Due
                        changeDue = Math.round(changeDue * 100) / 100;
                        // push the change to the change array
                        change.push([currencyName, currencyAmount]);

                        console.log(change);

                        // update change due
                        changeDue = changeDue - currencyAmount;
                        console.log(currencyAmount)
                        console.log(changeDue);
                    }
                }
            }
        }

        // get the total in the change array with 2 decimal places
        changeAmount = change.reduce((acc, curr) => {
            return acc + curr[1];
        }, 0);

        changeAmount = changeAmount.toFixed(2);
        changeAmount = parseFloat(changeAmount);
        console.log(changeAmount, temp);
        // if changeDue is not equal to changeAmount
        if (temp !== changeAmount) {
            console.log(temp, changeAmount);
            // return insufficient funds
            return { status: "INSUFFICIENT_FUNDS", change: [] };
        }
    }

    changeReturn = {
        status: "OPEN",
        change: change.reverse(),
    }

    console.log(changeReturn);
    return { status: "OPEN", change: change.reverse() };
}

console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]));

console.log(checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]))
console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]))
console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]))
console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
]))
