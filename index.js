function receivesAFunction(callback) {

    callback();

}
    function returnsANamedFunction () {
        return function recievesAFunction(callback){
            console.log("callback hello");
        };
    }
    let callbackExample = returnsANamedFunction();
    callbackExample();
function returnsAnAnonymousFunction() {
    return function(){
        console.log('anonymous return');
    };
}
let anonymousExample = returnsAnAnonymousFunction();
anonymousExample();