const features = document.getElementById('features');
const featuresRow = document.getElementById('features-row')
const featuresInfo = document.getElementById('features-info')
const company = document.getElementById('company')
const companyRow = document.getElementById('company-row')
const companyInfo = document.getElementById('company-info')

let open1 = false;
let open2 = false;
features.addEventListener('click', ()=>{
    if(!open1){
        featuresRow.src = './images/icon-arrow-up.svg'
        featuresInfo.style.display = 'block'
        open1 = true
    }else{
        featuresRow.src = './images/icon-arrow-down.svg'
        featuresInfo.style.display = 'none'
        open1 = false
    }
})
company.addEventListener('click', ()=>{
    if(!open2){
        companyRow.src = './images/icon-arrow-up.svg'
        companyInfo.style.display = 'block'
        open2 = true
    }else{
        companyRow.src = './images/icon-arrow-down.svg'
        companyInfo.style.display = 'none'
        open2 = false
    }
    
})