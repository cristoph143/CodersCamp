//Palindrome checker
function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}
palindrome("AA")
palindrome("eye")
palindrome("_eye")
palindrome("race car")
palindrome("not a palindrome")
palindrome("A man, a plan, a canal. Panama")
palindrome("never odd or even")
palindrome("nope")
palindrome("almostomla")
palindrome("My age is 0, 0 si ega ym.")
palindrome("1 eye for of 1 eye.")
palindrome("0_0 (: /-\ :) 0-0")
palindrome("O_O (: /-\ :) O-O")
palindrome("five|\_/|four")

//Roman Numeral Converter
function convertToRoman(num) {
    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    var romanNum = '';
    for (var i in roman) {
        while (num >= roman[i]) {
            romanNum += i;
            num -= roman[i];
        }
    }
    return romanNum;
}
convertToRoman(36)
convertToRoman(12)
convertToRoman(1)
convertToRoman(3999)

//Ceasar Cipher
function rot13(str) {
    var ret = '';
    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            ret += String
                .fromCharCode(
                    (
                        (charCode - 65 + 13) % 26
                    ) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            ret += String
                .fromCharCode(
                    (
                        (charCode - 97 + 13) % 26
                    ) + 97);
        } else {
            ret += str.charAt(i);
        }
    }
    return ret;
}
rot13("SERR PBQR PNZC")
rot13("SERR CVMMN!")
rot13("SERR YBIR?")
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")
rot13("gur dhvpx oebja qbt whzcrq, bire gur ynml sbk.")

//Telephone Number Validator
function telephoneCheck(str) {
    // var country_code = "^(1\s?)?"; // 1
    // var state_code = "(\(\d{3}\)|\d{3})[\s\ - ]"; // (123) or 123
    // var phone_number = "\d{3}[\s\-]?\d{4}$"; // 123-4567 or 123-456
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/; // 1 (123) 456-7890 or 123-456-7890 or 1234567890
    return regex.test(str);
}
telephoneCheck("555-555-5555")
telephoneCheck("1 555-555-5555")
telephoneCheck("1 (555) 555-5555")
telephoneCheck("5555555555")
telephoneCheck("(555)555-5555")
telephoneCheck("1(555)555-5555")
telephoneCheck("1 555 555 5555")
telephoneCheck("1 456 789 4444")
telephoneCheck("123**&!!asdf#")
telephoneCheck("55555555")
telephoneCheck("(6505552368)")
telephoneCheck("2 (757) 622-7382")
telephoneCheck("0 (757) 622-7382")
telephoneCheck("-1 (757) 622-7382")
telephoneCheck("2 757 622-7382")
telephoneCheck("10 (757) 622-7382")
telephoneCheck("27576227382")
telephoneCheck("(275)76227382")
telephoneCheck("2(757)6227382")
telephoneCheck("2(757)622-7382")
telephoneCheck("555)-555-5555")
telephoneCheck("(555-555-5555")
telephoneCheck("(555)5(55?)-5555")

//Cash Register
function checkCashRegister(price, cash, cid) {
    let change;
    //check if the cash-in-drawer is less than the change due, or cannot return the exact change
    if (cash < price) {
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        };
    } else if (cash === price) {
        return {
            status: "CLOSED",
            change: cid
        };
    } else {
        //create an array of the currency values
        let currency = [
            ["ONE HUNDRED", 100.00],
            ["TWENTY", 20.00],
            ["TEN", 10.00],
            ["FIVE", 5.00],
            ["ONE", 1.00],
            ["QUARTER", 0.25],
            ["DIME", 0.10],
            ["NICKEL", 0.05],
            ["PENNY", 0.01]
        ];
        //subract the cash from the price
        change = cash - price;
        //create an array to hold the change
        let changeArr = [];
        //loop through the currency array
        for (let i = 0; i < currency.length; i++) {
            //create a variable to hold the currency value
            let currencyValue = currency[i][1];
            //create a variable to hold the currency name
            let currencyName = currency[i][0];
            //create a variable to hold the currency in the drawer
            let currencyInDrawer = cid[i][1];
            //create a variable to hold the currency in the drawer as a number
            let currencyInDrawerNum = parseFloat(currencyInDrawer);
            //create a variable to hold the change as a number
            let changeNum = parseFloat(change);
            //create a variable to hold the change in the drawer
            let changeInDrawer = 0;
            //create a variable to hold the change in the drawer as a number
            let changeInDrawerNum = 0;
            //check if the change is greater than the currency in the drawer
            if (changeNum >= currencyValue) {
                //check if the currency in the drawer is greater than the currency value
                if (currencyInDrawerNum >= currencyValue) {
                    //subtract the currency value from the change
                    change = change - currencyValue;
                    //subtract the currency value from the currency in the drawer
                    currencyInDrawer = currencyInDrawer - currencyValue;
                    //add the currency value to the change in the drawer
                    changeInDrawer = changeInDrawer + currencyValue;
                    //add the currency value to the change in the drawer as a number
                    changeInDrawerNum = changeInDrawerNum + currencyValue;
                    //add the currency value to the change in the drawer as a string
                    changeInDrawer = changeInDrawer.toFixed(2);
                    //add the currency value to the change in the drawer as a string
                    changeInDrawer = changeInDrawer.toString();
                    //add the currency value to the change in the drawer as a string
                    changeInDrawer = changeInDrawer.replace(".", ",");
                    //add the currency value to the change in the drawer as a string
                    changeInDrawer = changeInDrawer.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                    //add the currency value to the change in the drawer as a string
                    changeInDrawer = changeInDrawer.replace(",", ".");
                }
            }
            //add the currency name and change in the drawer to the change array
            changeArr.push([currencyName, changeInDrawer]);
        }
        return {
            status: "OPEN",
            change: changeArr
        };
    }
}
checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);
checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
])
checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
])
checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
])
checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
])
checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
])