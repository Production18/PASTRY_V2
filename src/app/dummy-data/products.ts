import { Product } from "../interfaces/product.interface";

export const products: Product[] = [
  {
    id: 1,
    name: 'Heyla Jus Banane',
    description: 'Un jus Heyla goût banane, crémeux et tropical. Préparé avec des bananes mûres pour une saveur douce et naturelle.',
    rating: 4.7,
    image: 'https://lh5.googleusercontent.com/proxy/DVGFCNq2QCUD3MkI1dAoqJBST90gGVGEOZzxbY6Y9ZAwlou-AM54H_EMWYWih0bfB9wfGzdnXgeyWrrhSZQcLZ-TLd0axaxy-xBZ1tOSsdbsuucEeEqovDJmzbD-',
    category_id: 10,
    seller_id: 1,
    default_price: 5,
    cut_price: 8,
    type: 'veg',
    varieties: [
      { id: 11, unit: 'Bottle', quantity: 0.25, price: 2, is_default: false },
      { id: 12, unit: 'Bottle', quantity: 0.5, price: 3.5, is_default: true },
      { id: 13, unit: 'Bottle', quantity: 1, price: 5, is_default: false }
    ]
  },
  {
    id: 2,
    name: 'Heyla Jus Kiwi',
    description: 'Un jus Heyla goût kiwi, frais et légèrement acidulé. Idéal pour un boost vitaminé.',
    rating: 4.8,
    image: 'https://lh5.googleusercontent.com/proxy/yTAttrA9ZgqMeyJMNPpnSvZqhnZy_heZMiF9uF7hRu0oYJVcJLrg0HbArlV2i9JmhPifGFbYEhiSWlDuS9cHYoigyl1F37YyGXylj9m786vh-riHD60DxxqSkkNkjnWm8_fAejY',
    category_id: 10,
    seller_id: 1,
    default_price: 5,
    cut_price: 8,
    type: 'veg',
    varieties: [
      { id: 14, unit: 'Bottle', quantity: 0.25, price: 2, is_default: false },
      { id: 15, unit: 'Bottle', quantity: 0.5, price: 3.5, is_default: true },
      { id: 16, unit: 'Bottle', quantity: 1, price: 5, is_default: false }
    ]
  },
  {
    id: 3,
    name: 'Heyla Jus Fraise',
    description: 'Un jus Heyla goût fraise, sucré et gourmand. Préparé avec des fraises fraîches pour un goût authentique.',
    rating: 4.9,
    image: 'https://cloudtiktak.com/media/static/media/Design_sans_titre_87_ofdzNU9.webp',
    category_id: 10,
    seller_id: 1,
    default_price: 5,
    cut_price: 8,
    type: 'veg',
    varieties: [
      { id: 17, unit: 'Bottle', quantity: 0.25, price: 2, is_default: false },
      { id: 18, unit: 'Bottle', quantity: 0.5, price: 3.5, is_default: true },
      { id: 19, unit: 'Bottle', quantity: 1, price: 5, is_default: false }
    ]
  },
  {
    id: 4,
    name: 'Heyla Jus Citron',
    description: 'Un jus Heyla goût citron, pétillant et rafraîchissant, parfait pour étancher la soif.',
    rating: 4.6,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyIBaAMIoFJZKrhlyqz9nTTWfrLUpkovpG_QQBS2E8iRntsrnNqSkvbi4XNATQ7Spl19E&usqp=CAU',
    category_id: 10,
    seller_id: 1,
    default_price: 5,
    cut_price: 8,
    type: 'veg',
    varieties: [
      { id: 20, unit: 'Bottle', quantity: 0.25, price: 2, is_default: false },
      { id: 21, unit: 'Bottle', quantity: 0.5, price: 3.5, is_default: true },
      { id: 22, unit: 'Bottle', quantity: 1, price: 5, is_default: false }
    ]
  },
  {
    id: 5,
    name: 'Heyla Jus Pomegranate',
    description: 'Un jus Heyla goût mangue, exotique et sucré, préparé avec des mangues mûries au soleil.',
    rating: 4.8,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcm5Ifh9ttztVsEKF0pPGAUdHtyWamlHu3GDOOpEYpNgbdDM_gOevT_9LN6f1-ZZfqyUU&usqp=CAU',
    category_id: 10,
    seller_id: 1,
    default_price: 6,
    cut_price: 9,
    type: 'veg',
    varieties: [
      { id: 23, unit: 'Bottle', quantity: 0.25, price: 2.5, is_default: false },
      { id: 24, unit: 'Bottle', quantity: 0.5, price: 4, is_default: true },
      { id: 25, unit: 'Bottle', quantity: 1, price: 6, is_default: false }
    ]
  },
  {
    id: 6,
    name: 'Heyla Jus Pêche',
    description: 'Un jus Heyla goût pêche, doux et parfumé, idéal pour un moment de fraîcheur.',
    rating: 4.7,
    image: 'https://lh6.googleusercontent.com/proxy/fuzj0yRRWSUmUxR4FnDQ_Lf6hd8CfHs4yIiREM0bc27GOMBWyj1090cnMceBJcMquFlP28GmJj_Rk7NuJzQayBvOeG2UueduHmwbPb9o8gnhh2zmtRdQ96dKBV6gRrfMIQqSObA',
    category_id: 10,
    seller_id: 1,
    default_price: 5,
    cut_price: 8,
    type: 'veg',
    varieties: [
      { id: 26, unit: 'Bottle', quantity: 0.25, price: 2, is_default: false },
      { id: 27, unit: 'Bottle', quantity: 0.5, price: 3.5, is_default: true },
      { id: 28, unit: 'Bottle', quantity: 1, price: 5, is_default: false }
    ]
  },
  {
    id: 7,
    name: 'Heyla Jus Ananas',
    description: 'Un jus Heyla goût ananas, tropical et acidulé, parfait pour une boisson estivale.',
    rating: 4.8,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs9H_ooOA4tYdgR8Mp2FeaBb7EOdJ0INOp-w&s',
    category_id: 10,
    seller_id: 1,
    default_price: 6,
    cut_price: 9,
    type: 'veg',
    varieties: [
      { id: 29, unit: 'Bottle', quantity: 0.25, price: 2.5, is_default: false },
      { id: 30, unit: 'Bottle', quantity: 0.5, price: 4, is_default: true },
      { id: 31, unit: 'Bottle', quantity: 1, price: 6, is_default: false }
    ]
  },
  {
    id: 8,
    name: 'Heyla Tropical',
    description: 'Un jus Heyla goût orange, classique et rafraîchissant, riche en vitamine C.',
    rating: 4.9,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnWGEv-q62frGMVMi2QKWV2oS5kZySHQiadg4YkyH1C2JNd_7N_yQhtNdX9asrwYEvaOM&usqp=CAU',
    category_id: 10,
    seller_id: 1,
    default_price: 5,
    cut_price: 8,
    type: 'veg',
    varieties: [
      { id: 32, unit: 'Bottle', quantity: 0.25, price: 2, is_default: false },
      { id: 33, unit: 'Bottle', quantity: 0.5, price: 3.5, is_default: true },
      { id: 34, unit: 'Bottle', quantity: 1, price: 5, is_default: false }
    ]
  },
  {
    id: 9,
    name: 'Heyla Jus Menthe',
    description: 'Un jus Heyla goût pastèque, léger et désaltérant, parfait pour les journées chaudes.',
    rating: 4.6,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRvoTIbTGy4bv1-HRoTI37g9OcpAVpha91KQ&s',
    category_id: 10,
    seller_id: 1,
    default_price: 5,
    cut_price: 8,
    type: 'veg',
    varieties: [
      { id: 35, unit: 'Bottle', quantity: 0.25, price: 2, is_default: false },
      { id: 36, unit: 'Bottle', quantity: 0.5, price: 3.5, is_default: true },
      { id: 37, unit: 'Bottle', quantity: 1, price: 5, is_default: false }
    ]
  },
  {
    id: 10,
    name: 'Heyla Jus Rose',
    description: 'Un jus Heyla goût grenade, riche et légèrement acidulé, plein d’antioxydants.',
    rating: 4.8,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmaADSKANrKtZZLpZq8s6rzbPQw8wLVNpgtTL-HdUpSCbU3uX6IM9xSSKMNdeTllFfJPo&usqp=CAU',
    category_id: 10,
    seller_id: 1,
    default_price: 6,
    cut_price: 9,
    type: 'veg',
    varieties: [
      { id: 38, unit: 'Bottle', quantity: 0.25, price: 2.5, is_default: false },
      { id: 39, unit: 'Bottle', quantity: 0.5, price: 4, is_default: true },
      { id: 40, unit: 'Bottle', quantity: 1, price: 6, is_default: false }
    ]
  }
];