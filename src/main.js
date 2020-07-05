import $ from 'jquery'
import './styles.css';
import {getCurrencyAmounts} from './services/currencies.js';

function checkFormInputs(input){
  if(input === null || input.trim() === '' || input === undefined || isNaN(input) || input < 0){
    return true;
  } 
}

function MyError(message) {
  this.name = 'MyError';
  this.message = message;
  this.stack = (new Error()).stack;
}

$(document).ready(function() {
  $('.user-input-form').submit(function() {
    event.preventDefault()
    $('.money-type-amount').empty();

    if(checkFormInputs($('.usd-input').val())) {
      $('.money-type-amount').append(`Please fill both input fields with valid inputs!`)
      return //exit function
    } 
    
    let currencies = getCurrencyAmounts();

    let usdAmount = parseFloat($('.usd-input').val())
    let currencyAbbreviation = $('#new-currency-select').val();

    Promise.resolve(currencies) 
    .then(function(resolvedCurrencies){
      if(resolvedCurrencies[currencyAbbreviation] === undefined){
        throw new MyError("Sorry, information for this currency type isn't available, try another!")
      } else {
      const newCalcAmount = (usdAmount / resolvedCurrencies[currencyAbbreviation]).toFixed(2);
      $('.money-type-amount').append(`You have ${newCalcAmount} ${currencyAbbreviation}`);
    }
    })
    .catch(function(error) {
      if (error instanceof MyError) {
        console.error(error.message)
        $('.money-type-amount').append(error.message);
      } else {
        console.error(error)
        $('.money-type-amount').append("Sorry, unable to retrieve that information due to error!");
      }
    });
  })
});
