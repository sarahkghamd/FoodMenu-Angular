import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
total=0;
quantity=0;
  foodmenu=[
    {id:1,name:"coffee",price:18,description:"Flat White",img:"/assets/flat-white.webp"},
    {id:2,name:"coffee",price:14,description:"Americano",img:"/assets/americano.jpg"},
    {id:3,name:"Tea",price:16,description:"Ice Peach Tea",img:"/assets/peach-tea.jpg"},
    {id:4,name:"Tea",price:16,description:"Ice Passion Fruit Tea",img:"/assets/passion-tea.jpg"}
  ]

  foodname="";
  search(food:any[]){
    return food.filter(item => item.name.toLowerCase().includes(this.foodname.toLowerCase()))
  }

sum(event:any,price:number)
{
    const isChecked:boolean=event.target.checked;
    console.log(isChecked);
    if(isChecked){
      this.total=this.total+price;
      this.quantity+=1;
    }
    else{
      this.total=this.total-price;
      this.quantity-=1;
    }

  }


}
