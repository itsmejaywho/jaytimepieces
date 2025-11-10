const  logReg = document.getElementById('login-registration')
const discoverMore = document.getElementById('discoverMore');
const rating = document.getElementById('rating')
const brands = document.getElementById('brands');
const brandWatch = ['Seiko', 'Rolex', 'Tudor', 'Seiko', 'Rolex', 'Tudor','Seiko', 'Rolex', 'Tudor', 'Seiko', 'Rolex', 'Tudor', ];
const howManyRate = document.getElementById('howManyRate')
const stars = 5;
const peopleRate = [2, 5, 5, 4, 3, 2, 5];
let total = 0;
let totalRating = 0


peopleRate.forEach(rate => {
    total = total + rate
    totalRating = Number((total/peopleRate.length).toFixed(1))
})


rating.innerText =  `${totalRating} out of ${stars}`;
howManyRate.innerText = `from ${peopleRate.length} reviews Worldwide`;


brandWatch.forEach(brandName => {
    const watchBrandDiv = document.createElement('button');
    watchBrandDiv.innerText = brandName;
    watchBrandDiv.className = 'watchBrandNames';
    brands.appendChild(watchBrandDiv)

})