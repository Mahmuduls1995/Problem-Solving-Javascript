//.Problem Solve number 1
/*function anaToVori(ana) {
    if (typeof ana != "number") {
        return 'please give a number';
    }
    var vori = ana / 16;      // (16 ana =1 Vori)
    if (ana < 0) {
        return 'Measurement Cannot be Negative'
    }
    return vori;
}
var result = anaToVori(32);
console.log(result);

//.Problem Solve number 2

function pandaCost(somocha, shingara, jilapi) {
    if (somocha >= 0 || shingara >= 0 || jilapi >= 0) {
        if (somocha >= 0) {

            var somocha = somocha * 7;
        }
        else {
            return 'Error, Negative somocha Quantity not allowed'
        }


        if (shingara >= 0) {

            var shingara = shingara * 10;
        }
        else {
            return 'Error, Negative shingara Quantity  not allowed'
        }


        if (jilapi >= 0) {

            var jilapi = jilapi * 15;
        }
        else {
            return 'Error, Negative jilapi Quantity not allowed'
        }
        var total = somocha + shingara + jilapi;
    }
    else {
        return 'Error ,Your Input Invalid'
    }
    return total;
}

const result = pandaCost(1, 2, 0);
console.log(result);


//.Problem Solve number 3

function picnicBudget(person) {
    var totalAmount = 0;

    if (person >= 0) {

        if (person <= 100) {           //  for first  comer
            totalAmount = person * 5000;
        }

        else if (person <= 200) {          //for second  comer
            var firstStep = 100 * 5000;
            var remaining = person - 100;
            var secondStep = remaining * 4000;
            totalAmount = firstStep + secondStep;

        }

        else {                        //for third comer
            var firstStep = 100 * 5000;
            var secondStep = 100 * 4000;
            var remaining = person - 200;
            var thirdStep = remaining * 3000;
            totalAmount = firstStep + secondStep + thirdStep;
        }

        return totalAmount;
    }

    else {
        return 'Negative value is not allowed';
    }


}

var result = picnicBudget(240);
console.log(result);*/


//.Problem Solve number 4

function oddFriend(array) {

    let firstOdd = '';
    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (element.length % 2 != 0) {
            firstOdd = firstOdd + element;
            break;
        }

    }
    return firstOdd;

}
console.log(oddFriend(['Princess', 'Bambino', 'Menace', 'Senorita', 'Stinker']));



