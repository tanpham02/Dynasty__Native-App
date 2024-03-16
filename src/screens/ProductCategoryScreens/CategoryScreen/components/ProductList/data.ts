import { ProductModel } from '@/models';
import { ProductType } from '@/models/productModel';
import { SvgProps } from 'react-native-svg';
import { Svg } from '@/assets';

export const productData: ProductModel[] = [
  {
    name: 'Pizza Hải Sản Đào',
    description: 'Tôm, Đào hoà quyện bùng nổ cùng sốt Thousand Island',
    image: 'https://thepizzacompany.vn/images/thumbs/000/0002214_sf-deluxe_300.png',
    price: 169000,
    types: [ProductType.NORMAL],
  },
  {
    name: 'Pizza Thịt Xông Khói',
    description: 'Thịt giăm bông, thịt xông khói và hai loại rau của ớt xanh, cà chua',

    image: 'https://thepizzacompany.vn/images/thumbs/000/0003536_aloha_300.png',
    types: [ProductType.NEW, ProductType.SPICY],
    price: 169000,
  },
  {
    name: 'Pizza Hải Sản Pesto Xanh',
    description: 'Tôm, thanh cua, mực và bông cải xanh tươi ngon trên nền sốt Pesto Xanh',
    image: 'https://thepizzacompany.vn/images/thumbs/000/0002214_sf-deluxe_300.png',
    types: [ProductType.NEW, ProductType.DELICIOUS_MUST_TRY],
    price: 149000,
  },
  //   {
  //     name: 'Gà Nướng BBQ (9 miếng)',
  //     description: 'Thịt gà mềm ngọt, thấm đẫm gia vị, da gà giòn rụm, màu vàng ươm bắt mắt.',
  //     image: 'https://thepizzacompany.vn/images/thumbs/000/0003872_bbq-chicken-platter-9pcs_500.jpeg',
  //     types: [ProductType.NEW],
  //     price: 349000,
  //   },
  {
    name: 'Mỳ Ý thịt bò bằm',
    description: 'Sốt thịt bò bằm đặc trưng kết hợp cùng mỳ Ý',
    image: 'https://thepizzacompany.vn/images/thumbs/000/0002258_spaghetti-bolognese_500.png',
    types: [ProductType.UNIQUE],
    price: 139000,
  },
  {
    name: 'Mỳ Ý Cay Hải Sản',
    description: 'Mỳ Ý rán với các loại hải sản tươi ngon cùng ớt và tỏi',
    image: 'https://thepizzacompany.vn/images/thumbs/000/0002253_spaghetti-spicy-seafood_500.png',
    types: [ProductType.DELICIOUS_MUST_TRY, ProductType.SPICY],
    price: 139000,
  },
  {
    name: 'Mỳ Ý Chay Sốt Kem Tươi',
    description: 'Mỳ Ý chay thơm ngon với sốt kem và nấm',
    image: 'https://thepizzacompany.vn/images/thumbs/000/0002260_spaghetti-veggi-mushroom-cream-sauce_500.png',
    types: [ProductType.VEGETARIAN],
    price: 139000,
  },
  {
    name: 'Mỳ Ý Chay Sốt Marinara',
    description: 'Mỳ Ý áp chảo với sốt Marinara, nấm và cà chua đỏ',
    image: 'https://thepizzacompany.vn/images/thumbs/000/0003135_spaghetti-vegetarian-w-marinara-sauce_300.png',
    types: [ProductType.VEGETARIAN],
    price: 139000,
  },
  {
    name: 'Salad Đặc Sắc',
    description: 'Salad rau và trái cây tươi dùng kèm xốt kem đặc biệt của The Pizza Company.',
    image: 'https://thepizzacompany.vn/images/thumbs/000/0002250_signature-salad_500.png',
    types: [ProductType.NEW, ProductType.SPICY],
    price: 89000,
  },
  {
    name: 'Salad Trộn Sốt Caesar',
    description: 'Rau tươi trộn với sốt Caesar',
    image: 'https://thepizzacompany.vn/images/thumbs/000/0002251_caesars-salad_500.png',
    types: [ProductType.NEW],
    price: 89000,
  },
  {
    name: 'Salad Da Cá Hồi Giòn',
    description: 'Salad với da cá hồi giòn với bắp cải đỏ, cà chua bi, ngô với sốt Yuzu',
    image: 'https://thepizzacompany.vn/images/thumbs/000/0002601_crispy-salmon-skin-salad_500.png',
    types: [ProductType.NEW, ProductType.BEST_SELLER],
    price: 89000,
  },
  {
    name: 'Pepsi Lon',
    types: [ProductType.NORMAL],
    image: 'https://thepizzacompany.vn/images/thumbs/000/0002365_pepsi-can_500.jpeg',
    price: 29000,
  },
  {
    name: 'Bia Heineken',
    image: 'https://thepizzacompany.vn/images/thumbs/000/0002436_heineken_300.png',
    types: [ProductType.NORMAL],
    price: 49000,
  },
];

export const ProductTypeIconList: {
  [key: string]: {
    Icon: React.FC<SvgProps>;
    color: string;
  };
} = {
  [ProductType.NEW]: {
    Icon: Svg.New,
    color: '#52D3D8',
  },
  [ProductType.BEST_SELLER]: {
    color: '#c71a20',
    Icon: Svg.StarSolid,
  },
  [ProductType.DELICIOUS_MUST_TRY]: {
    color: '#016b33',
    Icon: Svg.Delicious,
  },
  [ProductType.SPICY]: { color: '#ff0000', Icon: Svg.Spicy },
  [ProductType.UNIQUE]: { color: '#feb964', Icon: Svg.Unique },
  [ProductType.VEGETARIAN]: { color: '#02b143', Icon: Svg.Vegetarian },
};
