import { AbstractControl } from '@angular/forms';

export class MyValidator{
  static passwordMatch(obj:any):{ [key:string] : boolean } | null{
    if(
      obj.value.password != null &&
      obj.value.password != '' &&
      obj.value.password == obj.value.confirmPass
    ){
      return null;
    }else{
      return{
        passwordMismatch : true
      }
    }
  }
}