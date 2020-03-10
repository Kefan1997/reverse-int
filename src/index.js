module.exports = function reverse (n) {
    let stringNumber = String(Math.abs(n));
    console.log(stringNumber);
    let arrayNumber = [];

    for (let i = 0; i < stringNumber.length; i++) {
      arrayNumber.push(stringNumber[i]);
    }
    arrayNumber.reverse();
    let str = arrayNumber.join("");
    return str;
}
