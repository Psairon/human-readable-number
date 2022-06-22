module.exports = function toReadable (number) {
  const single = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
  const tens  = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const dozens = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

  let result = '';
  let numerator = 0;
  let numerator2 = 0;
  let numerator3 = 0;
  let numerator4 = 0;
  let numerator5 = 0;

  if (number >0 && number < 20){
      result = single[number];
    }
  else if (number > 19 && number < 100){
    numerator = number % 10;
    numerator2 = Math.floor(number / 10);
    if (numerator === 0) {
        result = tens[numerator2];
      } else {
        result = tens[numerator2] + ' ' + single[numerator];
      }      
    }
  else if (number > 99 && number < 1000){
    numerator = number % 100;
    numerator2 = Math.floor(number / 10);
    numerator3 = Math.floor(number / 100);
    numerator4 = number % 10;
    numerator5 = +numerator2.toString().substring(1);
      if (number % 100 === 0) {
       result = dozens[numerator3] //для чисел заканчивающихся х00
      }
      else if (numerator < 20) {
        return result = dozens[numerator3] + ' ' + single[numerator] //для чисел заканчивающихся до х19
      }
      else if (numerator > 19 && numerator4 === 0) {
        return result = dozens[numerator3] + ' ' + tens[numerator5] //для чисел заканчивающихся на ноль хх0
      } else {
        return result = dozens[numerator3] + ' ' + tens[numerator5] + ' ' + single[numerator4]
      }
    }

  return result
}
