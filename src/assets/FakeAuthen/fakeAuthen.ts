import {Images} from '@assets/imageAssests';

export const FAKE_AUTHEN = [
  {
    id: 1,
    phone_number: '0978589470',
    password: '123456789a',
  },
];

export const LIST_TYPE_FASTFOOD = [
  {
    id: 1,
    img: Images.img_type_food1,
    title: 'Hot deals',
  },
  {
    id: 2,
    img: Images.img_type_food2,
    title: 'New on FastFood',
  },
  {
    id: 3,
    img: Images.img_type_food3,
    title: 'Save Food, Save Hunger',
  },
  {
    id: 4,
    img: Images.img_type_food4,
    title: 'Set Your Preferences Now!',
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
