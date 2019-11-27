import axios from 'axios';
import * as search from './models/Search';
import { elements } from './views/base';
import * as searchView from './views/searchView';

global._babelPolyfill = false;


/** Global state of the app
 *  - Brand object
 *  - current product object
 *  - Likes object
 */
const state = {};

// ---------------------------Event listeners --------------------------------
// ---------------------------------------------------------------------------
elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();

  const brand = elements.brand.value;
  const product = elements.product.value;
  const price = elements.price.value;
  
  // Search just by brand name
  if (brand !== '' && product === '' && price === '') {
    ctrlBrand(brand);
  // Search just by product name
  } else if (brand === '' && product !== '' && price === '') {
    ctrlProduct(product);
  // Search just by price
  } else if (brand === '' && product === '' && price !== '') {
    ctrlPrice(price);
  // Search just by brand name & product
  } else if (brand !== '' && product !== '' && price === '') {
    ctrlBrandProduct(brand, product);
  // Search just by brand name & price
  } else if (brand !== '' && product === '' && price !== '') {
    ctrlBrandPrice(brand, price);
  // Search just by product & price
  } else if (brand === '' && product !== '' && price !== '') {
    ctrlProductPrice(product, price);
      // Search just by brand, product & price
  } else if (brand !== '' && product !== '' && price !== '') {
    ctrlBrandProductPrice(brand, product, price);
  }  
});












// -------------------------------- Functions --------------------------------
// ---------------------------------------------------------------------------
const ctrlBrand = async(brand) => {
  // New Brand object and add to the state
  state.brand = new search.Brand(brand);

  // Prepare UI for results
  searchView.clearResults();
  searchView.clearInput();
  searchView.renderLoader(elements.searchForm);
  // Search for products of this brand
  await state.brand.getResults();
  
  searchView.clearLoader();
  // Render results on UI
  if (state.brand.products.length === 0) {
    searchView.showMessage('Sorry, results not found! :(');
  } else {
    searchView.renderResults(state.brand.products);
  }; 
};

// --------------------------------------------------
const ctrlProduct = async(product) => {
    // New Product object and add to the state
    state.product = new search.Product(product);

    // Prepare UI for results
    searchView.clearResults();
    searchView.clearInput();
    searchView.renderLoader(elements.searchForm);

    // Search for products of this brand
    await state.product.getResults();
    
    searchView.clearLoader();
    // Render results on UI
    if (state.product.productResults.length === 0) {
      searchView.showMessage('Sorry, results not found! :(');
    } else {
      searchView.renderResults(state.product.productResults);
    };  
};

// -------------------------------------------------------
const ctrlPrice = async(price) => {
  // New Product object and add to the state
  state.price = new search.Price(price);

  // Prepare UI for results
  searchView.clearResults();
  searchView.clearInput();
  searchView.renderLoader(elements.searchForm);

  // Search for products of this brand
  await state.price.getResults();

  searchView.clearLoader();
  // Render results on UI
  if (state.price.priceResults.length === 0) {
    searchView.showMessage('Sorry, results not found! :(');
  } else {
    searchView.renderResults(state.price.priceResults);
  }; 
};

// -------------------------------------------------------
const ctrlBrandProduct = async(brand, product) => {
  // New Brand object and add to the state
  state.brandProduct = new search.BrandProduct(brand, product);

  // Prepare UI for results
  searchView.clearResults();
  searchView.clearInput();
  searchView.renderLoader(elements.searchForm);

  // Search for products of this brand
  await state.brandProduct.getResults();

  searchView.clearLoader();
  // Render results on UI
  if (state.brandProduct.brandProductResults.length === 0) {
    searchView.showMessage('Sorry, results not found! :(');
  } else {
    searchView.renderResults(state.brandProduct.brandProductResults);
  };
};

// -------------------------------------------------------
const ctrlBrandPrice = async(brand, price) => {
  // New Brand object and add to the state
  state.brandPrice = new search.BrandPrice(brand, price);

  // Prepare UI for results
  searchView.clearResults();
  searchView.clearInput();
  searchView.renderLoader(elements.searchForm);

  // Search for products of this brand
  await state.brandPrice.getResults();

  searchView.clearLoader();
  // Render results on UI
  if (state.brandPrice.brandPriceResults.length === 0) {
    searchView.showMessage('Sorry, results not found! :(');
  } else {
    searchView.renderResults(state.brandPrice.brandPriceResults);
  };
};

// -------------------------------------------------------
const ctrlProductPrice = async(product, price) => {
  // New Brand object and add to the state
  state.productPrice = new search.ProductPrice(product, price);

  // Prepare UI for results
  searchView.clearResults();
  searchView.clearInput();
  searchView.renderLoader(elements.searchForm);

  // Search for products of this brand
  await state.productPrice.getResults();

    searchView.clearLoader();
  // Render results on UI
  if (state.productPrice.productPriceResults.length === 0) {
    searchView.showMessage('Sorry, results not found! :(');
  } else {
    searchView.renderResults(state.productPrice.productPriceResults);
  };
};

// -------------------------------------------------------
const ctrlBrandProductPrice = async(brand, product, price) => {
  // New Brand object and add to the state
  state.brandProductPrice = new search.BrandProductPrice(brand, product, price);

  // Prepare UI for results
  searchView.clearResults();
  searchView.clearInput();
  searchView.renderLoader(elements.searchForm);

  // Search for products of this brand
  await state.brandProductPrice.getResults();  
  
  searchView.clearLoader();
  // Render results on UI
  if (state.brandProductPrice.brandProductPriceResults.length === 0) {
    searchView.showMessage('Sorry, results not found! :(');
  } else {
    searchView.renderResults(state.brandProductPrice.brandProductPriceResults);
  };
};