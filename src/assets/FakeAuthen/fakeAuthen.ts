import {Images} from '@assets/imageAssests';
import trans from '@assets/trans';

export const FAKE_AUTHEN = [
  {
    id: 1,
    phone_number: '+84978589470',
    password: '123456789a',
  },
];

export const LIST_TYPE_FASTFOOD = [
  {
    id: 1,
    img: Images.img_type_food1,
    title: trans().hot_deal,
  },
  {
    id: 2,
    img: Images.img_type_food2,
    title: trans().new_on_fastfood,
  },
  {
    id: 3,
    img: Images.img_type_food3,
    title: trans().save_food,
  },
  {
    id: 4,
    img: Images.img_type_food4,
    title: trans().set_preference,
  },
];

export const DATA_BREAKFAST = [
  {
    id: 1,
    img: Images.img_coffee,
    name: 'Cappuccino',
    restaurant: 'Suhani Restaurant',
    realPrice: 20000,
    offerPrice: 25000,
    freeDelivery: false,
  },
  {
    id: 2,
    img: Images.img_rice_egg,
    name: 'Egg and cheese sandwich',
    restaurant: "Mehfil's Place",
    realPrice: 20000,
    offerPrice: 25000,
    freeDelivery: false,
    discount: '25%',
  },
  {
    id: 3,
    img: Images.img_coffee,
    name: 'Cappuccino',
    restaurant: 'Suhani Restaurant',
    realPrice: 20000,
    offerPrice: 25000,
    freeDelivery: false,
  },
  {
    id: 4,
    img: Images.img_rice_egg,
    name: 'Egg and cheese sandwich',
    restaurant: "Mehfil's Place",
    realPrice: 20000,
    offerPrice: 25000,
    freeDelivery: false,
  },
  {
    id: 5,
    img: Images.img_coffee,
    name: 'Cappuccino',
    restaurant: 'Suhani Restaurant',
    realPrice: 20000,
    offerPrice: 25000,
    freeDelivery: false,
  },
];

export const RESTAURANTS = [
  {
    id: 1,
    name: 'Pizza Hut',
    description:
      'Home cook - Fast food - Burger - Home cook - Fast food - BurgerHome cook - Fast food - Burger',
    rescued: true,
    freeDelivery: true,
    closed: false,
    offers: '50%',
    timeOpen: '',
    img: Images.img_pizza_hut,
  },
  {
    id: 2,
    name: 'KFC Banani',
    description: 'Fast food - Burger',
    rescued: true,
    freeDelivery: false,
    closed: false,
    offers: '',
    timeOpen: '',
    img: Images.img_kfc,
  },
  {
    id: 3,
    name: 'Mehfil Coffees',
    description: 'Home cook - Beverages',
    rescued: false,
    freeDelivery: true,
    closed: true,
    offers: '15%',
    timeOpen: '10:00 AM',
    img: Images.img_mehfil_coffee,
  },
  {
    id: 4,
    name: 'Madchef Biryani',
    description: 'Middle Eastern',
    rescued: false,
    freeDelivery: false,
    closed: false,
    offers: '',
    timeOpen: '',
    img: Images.img_madchef,
  },
];
export const LIST_FOOD_APP = [
  {
    id: 1,
    img: Images.img_coffee,
    name: 'Cappuccino',
    restaurant: 'Suhani Restaurant',
    realPrice: 20000,
    freeDelivery: false,
  },
  {
    id: 2,
    img: Images.img_rice_egg,
    name: 'Egg and cheese sandwich',
    restaurant: "Mehfil's Place",
    realPrice: 20000,
    freeDelivery: false,
    discount: '25%',
  },
  {
    id: 3,
    img: Images.img_coffee,
    name: 'Cappuccino',
    restaurant: 'Suhani Restaurant',
    realPrice: 20000,
    freeDelivery: false,
    nutritional_value: {
      Protein: '2.5g',
      Carbohydrates: '14.7g',
      Fat: '0,5%',
    },
  },
  {
    id: 4,
    img: Images.img_rice_egg,
    name: 'Egg and cheese sandwich',
    restaurant: "Mehfil's Place",
    realPrice: 20000,
    freeDelivery: false,
  },
  {
    id: 5,
    img: Images.img_coffee,
    name: 'Cappuccino',
    restaurant: 'Suhani Restaurant',
    realPrice: 20000,
    freeDelivery: false,
  },
  {
    id: 6,
    img: Images.img_rice1,
    name: 'Fried rice',
    restaurant: 'Pista House',
    description:
      'Our fried rice is made from the finest ingredients and veggies. single dish is made with fresh vegetables, rescued.',
    title_offer:
      'Left over food and supplies are gathered and sold for 50% off!',
    // type: ['Rescued', 'Vegan'],
    nutritional_value: {
      Protein: '2.5g',
      Carbohydrates: '14.7g',
      Sodium: '19%',
      Potassium: '5%',
    },
    calo: 145,
    ingredients: [],
    offers: 50,
    realPrice: 40000,
    star: 4.5,
  },
];
