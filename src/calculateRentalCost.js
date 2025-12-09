/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let sum = days * 40;

  if (days >= 7) {
    sum -= 50;
  }

  if (days >= 3 && days < 7) {
    sum -= 20;
  }

  return sum;
}

module.exports = calculateRentalCost;
