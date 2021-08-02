import { Component, OnInit } from '@angular/core';
import { MyservicesService } from '../myservices.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  getProdDetails = (productCard: any) => {
    this.myservice.clickedProducts = productCard;
    localStorage.setItem('clickedProduct', JSON.stringify(productCard));
  }
  drinks = [
    {
      productName: 'Chivas Regal Scotch Whiskey Extra 70cl',
      productCost: '₦11,700',
      productPrice: '₦10,000',
      productimgSrc: '/assets/images/drink1.jpg',
      productBrand: 'Brand: Chivas Regal',
      productQty: 1,
      productDetails: `As the newest member to our family, Chivas Regal Extra will satisfy the desires of the discerning whisky drinker with something exceptional - deep in aroma, rich in fruitiness and generous in sweetness. It’s created with an exceptional blend of rare whiskies combined with malt whiskies aged in sherry casks from the Oloroso sherry bodegas in Spain.   Chivas is an inspiration from James and John Chivas, who pioneered and excelled in the art of blending whiskies in the 19th century. The Chivas Regal master blender has carried on this expertise in crafting unique and outstanding blends to make Chivas Regal one of the most generous and tasteful blended scotch whiskies.   With Chivas Regal Extra, discover an exceptionally rich and generous Chivas blend, a real tribute to the brothers’ pioneering mastery in the art of blending legendary and generous whiskies. Colin Scott, the Chivas regal master blended, created this exclusive blend with whiskies matured in sherry casks as a foundation to a rich and generous taste along with some of our rarest malts for outstanding and deep flavours.   Chivas Regal Extra takes the unequalled Chivas nose-style taste and its renowned unique quality to a whole new level.`,
    },
    {
      productName: 'Olmeca Tequila Dark Chocolate 75cl',
      productCost: '₦8,000',
      productPrice: '₦6,000',
      productimgSrc: '/assets/images/drink2.jpg',
      productBrand: 'Brand: Chivas Regal',
      productQty: 1,
      productDetails: `Olmeca Dark Chocolate Tequila has a smooth silk-like texture that perfectly combines the rich dark chocolate flavour balanced with a dash of tequila. Made from hand-picked Weber Blue agave, fermented using organic yeast and distilled in copper pot stills, it delivers a smooth and easy drink.

      Olmeca was created in 1967 and is now made at Destileria Colonial de Jalisco, México, under the care of Jesús Hernández, Maestro Tequilero (Master Distiller) where he uses different artisan methods for the elaboration of tequila.    The Weber Blue agave is grown in Los Altos (the highlands) region, 2,100m above sea level; known for its rich red soil that gives Olmeca its unique naturally sweet profile. Olmeca Tequila has won different gold and silver medals at competitions such as The Tequila Masters, San Francisco World Spirits Competition and the International Wine & Spirits Competition.    Rich dark chocolate flavor balanced with a dash of tequila, smooth and effortlessly drinkable. Creamy dark chocolate, roasted hazelnut and vanilla, followed by fresh agave notes.     Consumption Tips: OLMECA CHOCOLOSSAL.    SHOT 1: 1 part of Olmeca Dark Chocolate chilled.  SHOT 2: 1 part of chilled tomato juice and dashes of tabasco sauce on top.  Ritual: First have the shot of tomato juice then a shot of Olmeca Dark Chocolate. Consumption Tips: OLMECA CHOCOLOSSAL.  SHOT 1: 1 part of Olmeca Dark Chocolate chilled.  SHOT 2: 1 part of chilled tomato juice and dashes of tabasco sauce on top.  Ritual: First have the shot of tomato juice then a shot of Olmeca Dark Chocolate`,
    },
    {
      productName: 'Chivas Regal XV Scotch Whisky 70cl',
      productCost: '₦14,000',
      productPrice: '₦12,999',
      productimgSrc: '/assets/images/drink3.jpg',
      productBrand: 'Brand: Chivas Regal',
      productQty: 1,
      productDetails: 'Product description here....',
    },
    {
      productName: 'Chivas Regal Scotch Whiskey 25YO 70cl',
      productCost: '₦97,000',
      productPrice: '₦90,000',
      productimgSrc: '/assets/images/drink4.jpg',
      productBrand: 'Brand: Chivas Regal',
      productQty: 1,
      productDetails: `Chivas 25 is a rare and exclusive blend of the finest Scotch whiskies, which have all been aged for a minimum of 25 years. Chivas 25 was the worlds first luxury whisky, launched in 1909 to America’s high society in New York.

      The world’s first luxury whisky is an enticingly fruity blend. A smooth New York high society regular since 1909. This legendary whisky has seen it all: having survived not one, but two World Wars, outliving prohibition to be reborn a masterpiece, to be saluted and honoured forever more.
      
      
      Because blended is better, in life and in Scotch. 
      
       
      
      Chivas Regal 25 was The World’s First Luxury Whisky, launched to America’s high society in New York in 1909 as the first whisky to be aged at least 25 years. In the 1920’s during WW1 and prohibition Chivas Regal 25 disappeared and became a highly coveted collector’s item. It wasn’t until 1950 that Chivas Regal returned as a 12 year old whisky. In 2007 Master Blender Colin Scott, inspired by the very first recipe, re- created Chivas Regal 25 to celebrate where the story began.
      
      Consumption Tips: Enjoy neat, optional: ice/ drop of wate`,
    }
  ];
  constructor(public myservice: MyservicesService) { }

  ngOnInit(): void {
  }

}
