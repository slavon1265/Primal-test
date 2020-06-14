// window.onload = () => {
//     initState()
// }
// function initState() {
//     initialState = {
//         users: {
//             count:0
//         },
//     };
//     if (!localStorage.hasOwnProperty('state')){
//         localStorage.state = JSON.stringify(initialState);
//     }
// }
// function storeGet(){
//
//     const state = JSON.parse(localStorage.state);
//     return state
//
// }
// function storeSet(target, ){
//     const state = JSON.parse(localStorage.state);
// }

let sizeCntr = document.querySelector('#size-ctr');

sizeCntr.addEventListener('input', (e)=>{
    console.log(e)
})

let delay = ms => {
    return new Promise(resolve => ()=> setTimeout(()=>{console.log('delayed:', ms)},ms))
}
delay(4000).then(console.log(12))























