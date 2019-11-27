import { elements } from './base';

// Colors is an array
const renderColors = (colors) => {
  let markup = '';
  colors.forEach(color => {
      markup += `
      <span class="card-text color-box" style="background: ${color.hex_value};"></span>
    `;
  });
  return markup;
};


// Render products on UI
export const renderResults = (products) => {

  let html = '';

  products.forEach(product => {

  html += `
        <div class="card search-result mb-4">
          <div class="card-image-container">
              <img src="${product.image_link}" alt="image" class="card-img">
          </div>
          <div class="card-body">
              <h4 class="card-title">${product.name}</h4>
              
              <div class="brandName-likeIcon">
                <p class="card-text"><em>${product.brand}</em></p>
                <div class="like">
                  <i class="fas fa-heart"></i>
                </div>
              </div>
              
              
              <p class="card-text mb-1">Price: $${product.price}</p>
              <div class="colors-info mb-2">
                <p class="color-title">Color(s):</p> ${renderColors(product.product_colors)}
              </div>

              <button class="btn btn-primary d-block mb-4" data-toggle="collapse" data-target="#${product.id}">Read more</button>
              <div class="collapse mb-5" id="${product.id}">
                <div class="card">
                  <div class="card-body">
                     <em>${product.description}</em>
                  </div>
                </div>
              </div>
              <a href="${product.product_link}" class="product-link" target="_blank">Go to its website</a>

          </div>
        </div>
      `;
  });
  elements.searchResults.insertAdjacentHTML('afterbegin', html);
};

// Render loader
export const renderLoader = (parent) => {
  const loader = `
    <div class="loader mt-3">
      <svg class="icon icon-spinner3">
         <use xlink:href="img/icons.svg#icon-spinner3"></use>
      </svg>
    </div>
  `;
  parent.insertAdjacentHTML('afterend', loader);
};

// Clear loader
export const clearLoader = () => {
  if (document.querySelector('.loader')) {
    document.querySelector('.loader').remove();
  }
};

// Clear results
export const clearResults = () => {
  elements.searchResults.innerHTML = '';
};

// Clear input
export const clearInput = () => {
  elements.brand.value = '';
  elements.product.value = '';
  elements.price.value = '';
}

// Show message
export const showMessage = (msg) => {
  const html = `
    <div class="alert alert-danger mt-3">${msg}</div>
  `;
  elements.searchForm.insertAdjacentHTML('afterend', html);
  setTimeout(clearMessage, 3000);
};

// Clear message
const clearMessage = () => {
  document.querySelector('.alert').remove();
}