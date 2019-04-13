import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
}

// let tempData = [];
//     let key = this._data[index].uid;
//     let count = 1;
//     let existing = this.storage.get();
//     for(let item in existing){
//       if(item == key){
//         count = parseInt(existing[item])+1;
//       }
//     }
//     tempData[key] = count;
//     this.storage.set(tempData);
//   }

// <!-- {"cart":[{id:'prd1',qty:2},{"product4":2},{"product3":2},{"product7":1},{"product8":3}],"name":"arun"} -->
