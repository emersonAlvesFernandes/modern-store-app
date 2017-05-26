export class Ui{
    lock(element){
        document.getElementById(element).classList.add('isloading');
        document.getElementById(element).setAttribute('disabled', 'disabled');
    }
    unlock(element){
        document.getElementById(element).classList.remove('isloading');
        document.getElementById(element).removeAttribute('disabled');
    }
}