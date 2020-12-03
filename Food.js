class Food{
    constructor(){
        this.FoodStock = 0;
        this.image = loadImage("Milk.png");

    }

    getFoodStock(){
        return this.FoodStock;
    }

    updateFoodStock(food){
        this.FoodStock = food;
    }

    deductFood(){
        if(this.FoodStock>0){
            this.FoodStock = this.FoodStock - 1;
        }
    }

    display(){
        var x = 80;
        var y = 100;

        if(this.FoodStock!==0){
            for(var i = 0; i<this.FoodStock; i = i+1){
              if(i%10 === 0){
                  x = 80;
                  y = y+50;
              }  
               image(this.image,x,y,50,50);
               x = x+30;
            }
        }
    }

}