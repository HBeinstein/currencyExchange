import $ from 'jquery'
import './styles.css';
import {getCurrencyAmounts} from './services/currencies.js';

$(document).ready(function() {
let currencies = getCurrencyAmounts();

  $('.user-input-form').submit(function() {
    event.preventDefault()

    $('.money-type-amount').empty();

    let usdAmount = parseFloat($('.usd-input').val())
    let currencyAbbreviation = $('#new-currency-select').val();

    Promise.resolve(currencies) 
    .then(function(resolvedCurrencies){
      if(resolvedCurrencies[currencyAbbreviation] === undefined){
        throw Error("Sorry, information for this currency type isn't available")
      } 
      const newCalcAmount = usdAmount / resolvedCurrencies[currencyAbbreviation];
      $('.money-type-amount').append(`You have ${newCalcAmount} ${currencyAbbreviation}`);
    })
    .catch(function(error) {
        $('.money-type-amount').append(error.message);
    });
  })
});
