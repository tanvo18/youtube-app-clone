import moment from 'moment';

/**
 * Round number to Million or Thousand to abbreviate view count
 * @param {string} number Number of view count
 */
export const roundNumber = (number) => {
  let viewCount; 

  if (number) {
    number = parseInt(number, 10);
  } else {  
    number = 0;
  }

  if (number > 1000000) {
    number = Math.round(number/1000000);
    viewCount = `${number}M`;
  } else if (number > 1000) {
    number = Math.round(number/1000);
    viewCount = `${number}K`;
  } else {
    viewCount = `${number}`;
  }
  return viewCount;
};

/**
 * Calculate the length of date published and now
 * @param {string} dateString video date published
 */
export const calculateDate = (dateString) => {
  return moment(dateString, 'YYYY-MM-DD').fromNow();
};

/**
 * Convert date format
 * @param {string} dateString 
 */
export const convertFormatDate = (dateString) => {
  return moment(dateString, 'YYYY-MM-DD').format('MMM Do YY');
};

/**
 * Add commas to number
 * @param {string} number number need to convert
 */
export const convertNumberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};