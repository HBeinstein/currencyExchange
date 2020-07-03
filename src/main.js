import $ from 'jquery'
import './styles.css';
import {getCurrencyAmounts} from './services/currencies.js';

$( document ).ready(function() {
  let currencies = getCurrencyAmounts();
  
  Promise.resolve(currencies) 
  .then(function(resolvedCurrencies){
    console.log(resolvedCurrencies)
  })
});