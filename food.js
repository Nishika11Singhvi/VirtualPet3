class Foods 
{
  constructor()
  {
    this.foodStock = 0;
    this.lastFed;
    this.image = loadImage('Milk.png');
  }

  updateFoodStock(foodStock)
  {
    this.foodStock = foodStock;
  }

  getFedTime(lastFed)
  {
    this.lastFed = lastFed;
  }

  deductFood()
  {
    if(this.foodStock > 0)
    {
      this.foodStock = this.foodStock - 1;
    }
  }

    getFoodStock()
    {
      return this.foodStock;
    }

    display()
    {
        var x = 70, y = 130; 

        imageMode(CENTER);

        if(this.foodStock != 0)
        {
        for(var i = 0; i < this.foodStock; i++)
        {
          if(i % 8 == 0)
          {
            x = 70;
            y = y + 50;
          }
          image(this.image, x, y, 50, 50);
          x = x  +30;
        }
      }
    }

    bedroom()
    {
      var bed = createSprite(400,250);
      bed.addImage(bedroom);
      bed.scale = 0.5

    }

    garden()
    {
      var gar = createSprite(400,250);
      gar.addImage(garden);
      gar.scale = 0.5
    }

    washroom()
    {
      var wash = createSprite(400,250);
      wash.addImage(washroom);
      wash.scale = 0.5
    }
}