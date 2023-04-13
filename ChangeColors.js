

// const bk = document.querySelector('button')
// // MATHS FUNCTION and Return 

// const Newfunction = () => {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
// }


// // CALLBACK FUNCTION 
// bk.addEventListener('click', () => {
//     const Newcolor = Newfunction();
//     document.body.style.backgroundColor = Newcolor;
//     fk.innerText = Newcolor;

// })









const bk = document.querySelector('button')
bk.addEventListener('click', () => {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    // String Template Literals Manipulation
    const Newcolor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = Newcolor;
})