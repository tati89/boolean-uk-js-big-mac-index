/*
Index is calculated by :
  - Get current US Big Mac price
  - Get current Big Mac price from country we're comparing
  - Divide US Big Mac price by country's Big Mac price
    (this is called the implied purchasing power)
  - Get country's currency rate to USD value
  - Substract currency rate with the implied purchasing power
  - Divide the previous result by the implied purchasing power
  - This will give you the Big Mac Index
  - Make sure you search for updated values!

For example, using figures in July 2008:
  - the price of a Big Mac was $3.57 in the United States 
  - the price of a Big Mac was £2.29 in the United Kingdom 
  - the implied purchasing power parity was $1.56 to £1, that is $3.57/£2.29 = 1.56
  - this compares with an actual exchange rate of $2.00 to £1 at the time
  - (2.00 – 1.56) / 1.56 = 28%
  - the pound was thus overvalued against the dollar by 28%
*/

let usPrice = 5.66;

// UK
let ukPrice = 3.19;
let impliedPurchasingPower = usPrice / ukPrice;
let currentExchangeRate = 1.39;
let ukOvervalued =
  (currentExchangeRate - impliedPurchasingPower) / impliedPurchasingPower;

let intUkOvervalued = ukOvervalued.toFixed(2) * 100;

console.log("Big Mac Index in UK " + intUkOvervalued + "%");

//Australia
let ozPrice = 6.4;
impliedPurchasingPower = usPrice / ozPrice;
currentExchangeRate = 0.78;
let ozOvervalued =
  (currentExchangeRate - impliedPurchasingPower) / impliedPurchasingPower;

let intOzOvervalued = ozOvervalued.toFixed(2) * 100;

console.log("Big Mac Index in Australia " + intOzOvervalued + "%");

//Canada
let canadaPrice = 5.69;
impliedPurchasingPower = usPrice / canadaPrice;
currentExchangeRate = 0.81;
let canadaOvervalued =
  (currentExchangeRate - impliedPurchasingPower) / impliedPurchasingPower;

let intCanadaOvervalued = canadaOvervalued.toFixed(2) * 100;

console.log("Big Mac Index in Canada " + intCanadaOvervalued + "%");

//France
let francePrice = 4.98;
impliedPurchasingPower = usPrice / francePrice;
currentExchangeRate = 1.21;
let franceOvervalued =
  (currentExchangeRate - impliedPurchasingPower) / impliedPurchasingPower;

let intFranceOvervalued = franceOvervalued.toFixed(2) * 100;

console.log("Big Mac Index in France " + intFranceOvervalued + "%");

//China
let chinaPrice = 21.7;
impliedPurchasingPower = usPrice / chinaPrice;
currentExchangeRate = 0.15;
let chinaOvervalued =
  (currentExchangeRate - impliedPurchasingPower) / impliedPurchasingPower;

let intChinaOvervalued = chinaOvervalued.toFixed(2) * 100;

console.log("Big Mac Index in China " + intChinaOvervalued + "%");

console.log(
  "The Big Mac Index in Australia is less than in UK? " +
    (intOzOvervalued < intUkOvervalued)
);

console.log(
  "The Big Mac Index in Canada is less than in UK? " +
    (intCanadaOvervalued < intUkOvervalued)
);

console.log(
  "The Big Mac Index in France is less than in UK? " +
    (intFranceOvervalued < intUkOvervalued)
);

console.log(
  "The Big Mac Index in China is less than in UK? " +
    (intChinaOvervalued < intUkOvervalued)
);
