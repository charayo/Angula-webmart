import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyservicesService {
  signup = false;
  logged = false;
  presentUser: any = '';
  amountToPay: any;
  searchResult = [{}];
  cartCount: any = 0;
  clickedProducts = JSON.parse(localStorage.getItem('clickedProduct') || '{}');
  allProducts = [
    {
      productName: 'Glossy Strap Bag',
      productCost: '₦14,000',
      productPrice: '₦10,000',
      productimgSrc: '/assets/images/bag2.jpg',
      productBrand: 'Designer',
      productDetails: 'Product description here....',
    },
    {
      productName: 'Beach Comfort',
      productCost: '₦10,000',
      productPrice: '₦3,000',
      productimgSrc: '/assets/images/beach-comfort-slides.jpg',
      productBrand: 'Designer',
      productDetails: 'Product description here....',
    },
    {
      productName: "Men's Casual Shirt",
      productCost: '#8,000',
      productPrice: '#3,999',
      productimgSrc: '/assets/images/mans-shirt.jpg',
      productBrand: 'Designer',
      productDetails: 'Product description here....',
    },
    {
      productName: 'Ladies Portable Bags',
      productCost: '#32,000',
      productPrice: '₦15,000',
      productimgSrc: '/assets/images/bags3.jpg',
      productBrand: 'Designer',
      productDetails: 'Product description here....',
    },
    {
      productName: 'Maroon Leather',
      productCost: '₦34,000',
      productPrice: '₦24,000',
      productimgSrc: '/assets/images/maroon-bag.jpg',
      productBrand: 'Designer',
      productDetails: 'Product description here....',
    },
    {
      productName: 'Black Smart Watch',
      productCost: '₦10,000',
      productPrice: '₦6,000',
      productimgSrc: '/assets/images/smart-watch.jpg',
      productBrand: 'Designer',
      productDetails: 'Product description here....',
    },
    {
      productName: 'Benassi Nike Slide',
      productCost: '₦17,000',
      productPrice: '₦9,999',
      productimgSrc: '/assets/images/bennassi.jpg',
      productBrand: 'Designer',
      productDetails: 'Product description here....',
    },
    {
      productName: 'Diamond Laced Ring',
      productCost: '₦100,000',
      productPrice: '₦70,000',
      productimgSrc: '/assets/images/ring.jpg',
      productBrand: 'Designer',
      productDetails: 'Product description here....',
    },
    {
      productName: 'Apple - iPhone 8 Plus 64GB, 4GB - Space Gray',
      productCost: '₦250,700',
      productPrice: '₦200,000',
      productimgSrc: '/assets/images/phone1.jpg',
      productBrand: 'Brand: Apple',
      productQty: 1,
      productDetails: ``
    },
    {
      productName: 'Infinix HOT 7 (6.2-inch, 32GB + 2GB RAM)',
      productCost: '₦8,000',
      productPrice: '₦6,000',
      productimgSrc: '/assets/images/phone2.jpg',
      productBrand: 'Brand: Infinix',
      productQty: 1,
      productDetails: ``
    },
    {
      productName: 'Samsung Galaxy A10 (6.2-Inch, 32GB + 2GB RAM, Red)',
      productCost: '₦140,000',
      productPrice: '₦120,999',
      productimgSrc: '/assets/images/phone3.jpg',
      productBrand: 'Brand: Samsung',
      productQty: 1,
      productDetails: 'Product description here....',
    },
    {
      productName: 'TECNO Pop 2 Power (5.5-inch, 16GB + 1GB RAM, Black)',
      productCost: '₦97,000',
      productPrice: '₦90,000',
      productimgSrc: '/assets/images/phone4.jpg',
      productBrand: 'Brand: Tecno',
      productQty: 1,
      productDetails: ``,
    },
    {
      productName: 'Suede Brogue Shoe',
      productCost: '₦34,000',
      productPrice: '₦9,940',
      productimgSrc: '/assets/images/shoe.jpg',
      productBrand: 'Brand: E. Mich',
      productQty: 1,
      productDetails: "E. Mich Shoe is a shoe brand that comes with international Standard. A premium shoe and leather accessories brand with a difference! A unique brand that gets you inspired. BLIGHT SUEDE BROGUE SHOE with LACE provides the structure of the foot with optimum protection from the stresses of everyday life. Their attention to detail and quality of their products put them at the very top of the fashion scene especially when it comes to the men's fashion.E.Mich shoes show the extent of creativity, quality and workmanship put into them.These shoes range from rugged brogues, derby shoes, boat shoes, loafers to sleek sneakers and trainers..A shoe brand that have come to show the style & philosophy of E.Mich Global.Comes with lace top that adds to its uniqueness and makes it the chairman in your shoe rack.This particular Suede Brogue Shoe with Suede Design can go with Casual, formal and traditional wear.Shoe made for REAL MEN!",
    },
    {
      productName: 'Black-Lava Watch',
      productCost: '₦10,000',
      productPrice: '₦6,000',
      productimgSrc: '/assets/images/watch.jpg',
      productBrand: 'Brand: Designer',
      productQty: 1,
      productDetails: `WATCH MATERIAL: ensures the accuracy of time. High hardness wear-resistant glass, avoiding the surface mirror from being scratched. IP plating stainless steel band and case will not easy to fade and get rusty.

      FASHION CLASSICS – minimalist design Men's  watches with clear lines create a unique texture. Elegant and precise, light and rich in texture, this is the ultimate watch, the best watch.
      
      GIFTS: The watch is suitable for every occasion (outdoor, business, party), also a great gift for family and friends; Luxury simple design watch.
      
      SUITABLE FOR THE CROWD - leaders, bosses, colleagues, classmates, boyfriends, students, neighbors, teachers, husbands, etc., are good gifts for loved ones. Suitable for outdoor and indoor sports such as running, hiking, fishing, Christmas, Thanksgiving, Hollywood, weddings, anniversaries, birthdays, graduations, Valentine's Day, Father's Day and gifts, gifts, etc.
      
      Good quality`,
    },
    {
      productName: 'Casual Sneakers',
      productCost: '₦17,000',
      productPrice: '₦9,999',
      productimgSrc: '/assets/images/shoe2.jpg',
      productBrand: 'Brand: Designer',
      productQty: 1,
      productDetails: `This pair of "air cushion sock shoes" has swept the Internet this year.
      Fashionistas on ins are wearing these American "sock shoes", how good are they?
      Fashionable socks and shoes are easy to wear and breathable. At the same time, with air cushion soles, they are not only comfortable but also shock-resistant`,
    },
    {
      productName: 'Firman 5.5kva',
      productCost: '₦230,000',
      productPrice: '₦216,000',
      productimgSrc: '/assets/images/firman-generator.jpg',
      productBrand: 'Brand: Firman',
      productQty: 1,
      productDetails: `The New Sumec Firman AC6000E2 is a  Semi Silent Zero gravity Power generating machine, Its Max Power output is 5500W with  Average output Power 15L petrol capacity, 0.6L Oil Capacity nd 9h Operation Hours at 75% Load. AC6000E2 

      YOU Dont need to use key to start this generator all you need to do is to switch and hold the start switch and the generator will come back to life 
      
      this generator is made to carry air condition of up to 1,5hp  it is made with 100% copper 
      
       FIRMAN is a generating equipment brand under SUMEC Group.As an important member of SINOMACH, a Fortune 500 enterprise, SUMEC Group was founded in 1978 and specializes in trade and service, engineering contracting, and investment development.
      
      After 30 years of development, SUMEC has become an international and diversified modern manufacturing service group.
      
      For years, FIRMAN brand trademark has been registered in 92 countries and regions all over the world. FIRMAN products are widely applied to many fields such as routine life, industrial production, communications, medical care, finance, energy, and construction. FIRMAN provides professional products and services for customers from more than 100 countries and regions in the world.
      
      We are committed to creating stable, highly-efficient, and clean generating equipment and integrated power solution for customers and help customers obtain reliable power supply, reduce energy consumption, and save operation and maintenance (O&M) costs.
      
      FIRMAN generator sets ranked first for six consecutive years among brands of exported portable Gasoline Generator in China.
      
      FIRMAN products have extremely high market share in Southeast Asia and Africa, where the market share in the core sales area exceeds 30%. Buy Firman generators from Jumia and enjoy great value for your money`,
    }
  ]
  constructor(
    private http: HttpClient
  ) {
    if (localStorage.getItem('cartCount')) {
      this.cartCount = localStorage.getItem('cartCount');
    }
    if (localStorage.getItem('presentUser')) {
      this.presentUser = localStorage.getItem('presentUser');
      this.logged = true;
    }
  }
  public get_data(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
