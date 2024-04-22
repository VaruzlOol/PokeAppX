export function useAddEventListener(type, listener, method){
    try {
        //CHROME
        if(!window.addEventListener) return;

        if(!method){
            window.addEventListener(type, listener);
        } else {
            method.addEventListener(type, listener);
        }
    } catch (error) {
        //SAFARI
        if(!window.addListener) return;

        if(!method){
            window.addListener(type, listener);
        } else {
            method.addListener(type, listener);
        }
    }
}


export function useRemoveListener(type, listener, method) {
    try {
        //CHROME
        if(!window.removeEventListener) return;

        if(!method){
            window.removeEventListener(type, listener);
        } else {
            method.removeEventListener(type, listener);
        }
    } catch (error) {
         //SAFARI
         if(!window.removeListener) return;

        if(!method){
            window.removeListener(type, listener);
        } else {
            method.removeListener(type, listener);
        }
    }
}

//window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', () => {console.log(this['matchMedia'])});
//window['matchMedia'].matchMedia("(prefers-color-scheme: dark)") = function() {this.addEventListener('change', () => {console.log(this)})};