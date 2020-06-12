window.onload = () => {
    initState()
}
function initState() {
    initialState = {
        users: {
            count:0
        },
    };
    if (!localStorage.hasOwnProperty('state')){
        localStorage.state = JSON.stringify(initialState);
    }
}
function storeGet(){

    const state = JSON.parse(localStorage.state);
    return state

}
function storeSet(target, ){
    const state = JSON.parse(localStorage.state);



}