const  logReg = document.getElementById('login-registration')
const discoverMore = document.getElementById('discoverMore');


const brands = document.getElementById('brands');

const brandWatch = ['Seiko', 'Rolex', 'Tudor', 'Seiko', 'Rolex', 'Tudor','Seiko', 'Rolex', 'Tudor', 'Seiko', 'Rolex', 'Tudor',];


brandWatch.forEach(brandName => {
    const watchBrandDiv = document.createElement('button');
    watchBrandDiv.innerText = brandName;
    watchBrandDiv.className = 'watchBrandNames';
    brands.appendChild(watchBrandDiv)

})