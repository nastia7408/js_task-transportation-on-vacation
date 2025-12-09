/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const BIG__SALE = 50;
  const DAY__RENT__LONG = 7;
  const SMOLL__SALE = 20;
  const DAY__RENT__SHORT = 3;

  let sum = days * COST_PER_DAY;

  if (days >= DAY__RENT__LONG) {
    sum -= BIG__SALE;
  }

  if (days >= DAY__RENT__SHORT && days < DAY__RENT__LONG) {
    sum -= SMOLL__SALE;
  }

  return sum;
}

module.exports = calculateRentalCost;
