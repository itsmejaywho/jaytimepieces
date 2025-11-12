const  logReg = document.getElementById('login-registration')
const login = document.getElementById('login');
const frontPage = document.getElementById('myfront');
const show_password = document.getElementById('show_password')
const password = document.getElementById('password')
const discoverMore = document.getElementById('discoverMore');
const rating = document.getElementById('rating')
const brands = document.getElementById('brands');
const brandWatch = ['Seiko', 'Rolex', 'Tudor', 'Seiko', 'Rolex', 'Tudor','Seiko', 'Rolex', 'Tudor', 'Seiko', 'Rolex', 'Tudor', ];
const howManyRate = document.getElementById('howManyRate')
const userCount = document.getElementById('userCount')
const protectionCount = document.getElementById('protectionCount');
const buyerCount = document.getElementById('buyerCount')
const buyerProtection = 100;
const buyerCounts = 1000;
const stars = 5;
const peopleRate = [2, 5, 5, 4, 3, 2, 5];
let total = 0;
let totalRating = 0
const users = peopleRate.length
const loginbtn = document.getElementById('loginBtn')

const hideorshow = document.getElementById('hideorshow');
const hideorshowText = document.getElementById('hideorshowText')
const loginLogo = document.getElementById('loginLogo')



loginLogo.addEventListener('click', () => {
    login.style.display = 'none'
    frontPage.style.display = 'flex'
})


console.log(100000/1000)

peopleRate.forEach(rate => {
    total = total + rate
    totalRating = Number((total/peopleRate.length).toFixed(1))
})

if(peopleRate.length > 0){

    if(users < 999){
        userCount.innerText = users
    }else if(users >=1000 || users <= 999999){
        userCount.innerText = Math.floor(peopleRate/1000) + 'thousand'
    }else if (users >= 1000000 || users <= 100000000){
        userCount.innerText = Math.floor(peopleRate/1000000) + 'million'
    }
}

protectionCount.innerText = 'Over' + buyerProtection
buyerCount.innerText = 'More than ' + buyerCounts
rating.innerText =  `${totalRating} out of ${stars}`;
howManyRate.innerText = `from ${peopleRate.length} reviews Worldwide`;


logReg.addEventListener('click', () => {

    frontPage.style.display = 'none'
    login.style.display  =  'flex'

})


show_password.addEventListener('click', () => {

    if(password.type === 'password'){
        password.type = 'text'
        hideorshowText.innerText = 'Hide Password'
        hideorshow.src = './watches/hide.svg'
    }else if(password.type === 'text'){
        password.type = 'password'
        hideorshowText.innerText = `Show Password`
        hideorshow.src = './watches/show.svg'
    }


    console.log(password.type)
})

brandWatch.forEach(brandName => {
    const watchBrandDiv = document.createElement('button');
    watchBrandDiv.innerText = brandName;
    watchBrandDiv.className = 'watchBrandNames';
    brands.appendChild(watchBrandDiv)

})

