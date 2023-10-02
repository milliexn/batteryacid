const header = document.querySelector('.header');
fetch('../header.html')
    .then(res => res.text())
    .then(data => {
        header.innerHTML = data;
    })

const footer = document.querySelector('.footer');
fetch('../footer.html')
    .then(res => res.text())
    .then(data => {
        footer.innerHTML = data;
    })

//fix this
document.addEventListener("select", function (event) {
    event.preventDefault()
});

// window.onload = function(){
//     var container = document.getElementByClassName('.container');
//         container.style.paddingTop = (headerHeight+"px");
//     }

function scrollToHead() {
    document.documentElement.scrollTop = 0;
}

var html_theme = document.querySelector("html");
html_theme.style.transition="0.4s";
var pageTheme = "dark";
function toggleMode() {
    var checkBox = document.getElementById("mode_checkbox");
    if (checkBox.checked == true) {
        pageTheme = "light";
        html_theme.setAttribute("data-theme", pageTheme);
    }
    else {
        pageTheme = "dark";
        html_theme.setAttribute("data-theme", pageTheme);
    }
}

window.onload = function () {
    console.log(pageTheme);
    html_theme.setAttribute("data-theme", pageTheme);
}