const header = document.querySelector('.header');
fetch('/globalAssets/header.html')
.then(res=>res.text())
.then(data=>{
    header.innerHTML=data;
})

const footer = document.querySelector('.footer');
fetch('/globalAssets/footer.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML=data;
})

