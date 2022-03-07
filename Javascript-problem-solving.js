//.Problem Solve number 1
function anaToVori(ana) {
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
console.log(result);


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

//problem Solving Word Count
var speech ="I am a   good person .I don't snore night";
var counter=0;
for (let i = 0; i < speech.length; i++) {
    const element = speech[i];
    if (element==" " && speech[i-1]) {
      counter++;  
    }
    
}
counter++;
console.log(counter);
 console.log(speech.length);
 console.log(speech[3]);

//problem solving Wood Caculator

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {

    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;
    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}

console.log(woodCalculator(2, 4, 6));

//Vowel Count in Sentence 
function vowelCount(sentence) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (const letter of sentence) {
        if (vowels.indexOf(letter) > -1) {
            count = count + 1;

        }
    }
    return count;
}

console.log(vowelCount('Always be ready for contradictory words while listening'));

//.Problem Solve of price expences
function mularDam(quantity) {
    if (typeof quantity != 'number') {
        return 'Error'
    }
    let price;
    if (quantity <= 2) {
        price = quantity * 30;
    }
    else {
        price = quantity * 25;
    }
    return price;
 }
 
 console.log(mularDam(8));

 //.Problem Solve of Electricity Bill
 function electricityBill(unit) {
    let bill;
    if (unit <= 100) {
        bill = unit * 5;
    } else if (unit > 200) {
        let firstBill = 100 * 5;
        let secondBill = 100 * 6;
        let remainingBill = (unit - 200) * 7;
        bill = firstBill + secondBill + remainingBill;

    }

    else if (unit > 100) {
        let firstBill = 100 * 5;
        let remaining = (unit - 100) * 6;
        bill = firstBill + remaining;

    }



}

console.log(electricityBill(120));
// .Problem Solve of  array to total sum
var numbers=[45,65,43,23,64,43];
function getArraySum (numbers){
    var sum=0;
    for (let i = 0; i < numbers.length; i++) {
        var element=numbers[i];
        sum=sum+element;
        
    }
    return sum;
}
var result= getArraySum (numbers);
console.log("total Number=",result);
// .Problem Solve of hotel cost calculation

function hotelCost(day) {
    var totalCost = 0;
    if (day <= 10) {           //  for first offer
        totalCost = day * 100;
    }
    else if (day <= 20) {          //for second offer
        var firstStep = 10 * 100;
        var remaining = day - 10;
        var secondStep = remaining * 80;
        totalCost = firstStep + secondStep;
    }
    else {                        //for third offer
        var firstStep = 10 * 100;
        var secondStep = 10 * 80;
        var remaining = day - 20;
        var thirdStep = remaining * 50;
        totalCost = firstStep + secondStep + thirdStep;
    }
    return totalCost;

}

var result = hotelCost(20);
console.log(result)
//.Problem Solve of mega friend 
function megaFriend(array) {
    var longest = '';
    for (var i = 0; i < array.length; i++) {
        const element = array[i];

        if (element.length > longest.length) {
            longest = element;

        }
    }
    return longest;

}
console.log(megaFriend(['mammon', 'mohammad', 'sheikhfoysal', 'sahib']));

//.Problem Solve of cheapest Solution

const phones = [
    { name: 'samsung', price: 45000, camera: 10, storge: 32 },
    { name: 'nokia', price: 4300, camera: 10, storge: 32 },
    { name: 'htc', price: 4100, camera: 40, storge: 22 },
    { name: 'oppo', price: 22000, camera: 10, storge: 82 }
]
let cheapest = phones[0];

for (const phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone;

    }
}
console.log(cheapest);
