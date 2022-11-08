// let dropdown1 = document.querySelector('.dropdown1');
// let dropdown2 = document.querySelector('.dropdown2');
// let dropdownContent1 = document.querySelector('#dropdown-content1');
// let dropdownContent2 = document.querySelector('#dropdown-content2');

// dropdown1.addEventListener('cilck', function() {
//     dropdownContent1.classList.toggle("show");
//     console.log("ele")
// })

// dropdown2.addEventListener('cilck', function() {
//     dropdownContent2.classList.toggle("show");
//     console.log("ele")
// })


const dropdown = document.querySelectorAll('.dropdown');

for (let i = 1; i <= dropdown.length; i++) {
    const dpDown = document.querySelector(`.dropdown${i} a`);
    dpDown.addEventListener('click', () => {
        document.querySelector(`#dropdown-content${i}`).classList.toggle('show');
        console.log("hey");
    })
}