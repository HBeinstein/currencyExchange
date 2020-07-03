import $ from 'jquery'
import './styles.css';
import {getCurrencyAmounts} from './services/currencies.js';

$(document).ready(function() {
let currencies = getCurrencyAmounts();

  $('.user-input-form').submit(function() {
    event.preventDefault()

    let usdAmount = $('.usd-input')
    let currencyAbbreviation = $('#new-currency-select').val();

    Promise.resolve(currencies) 
    .then(function(resolvedCurrencies){
      $('.money-type-amount').append(`${resolvedCurrencies[currencyAbbreviation]} ${currencyAbbreviation}`)
    })
    
    
  });
});