// Dish data for the Thai Food guide. Terms follow CONTEXT.md.
//
// Each Dish has exactly one Category and a Spice Level from 0 to 3
// (its default heat when served without any request to adjust it).
// `image` points to a per-Category placeholder until real photos are added.
// `featured: true` puts a Dish on the Home page.

const CATEGORIES = [
  "Curry",
  "Soup",
  "Stir-fry",
  "Salad",
  "Noodles",
  "Rice",
  "Dessert",
  "Snack",
];

const DISHES = [
  {
    id: "green-curry",
    thai: "แกงเขียวหวาน",
    english: "Green Curry",
    pronunciation: "gaeng keow wan",
    category: "Curry",
    spice: 2,
    spiceNote:
      "Usually medium-hot. Ask for “pet nit noi” (เผ็ดนิดหน่อย, a little spicy) to go milder.",
    image: "images/placeholder-curry.svg",
    featured: true,
    taste:
      "Creamy and fragrant from coconut milk, with a sweet-savory base and a green chili heat that builds slowly. Thai basil and kaffir lime leaf add herbal notes.",
    ingredients: [
      "Green curry paste",
      "Coconut milk",
      "Chicken (or beef, tofu)",
      "Thai eggplant",
      "Thai basil",
      "Kaffir lime leaf",
    ],
    culture:
      "A central Thai curry named for the color of its paste, made from fresh green chilies. “Wan” means sweet, describing the gentle sweetness that balances the heat.",
    howToOrder:
      "Order it with steamed rice (khao suay). Add the protein you want: “gaeng keow wan gai” for chicken, “nuea” for beef, “tao hoo” for tofu. Spoon a little curry over your rice at a time.",
  },
  {
    id: "massaman-curry",
    thai: "แกงมัสมั่น",
    english: "Massaman Curry",
    pronunciation: "gaeng massaman",
    category: "Curry",
    spice: 1,
    spiceNote: "Usually mild. One of the gentlest Thai curries.",
    image: "images/placeholder-curry.svg",
    featured: true,
    taste:
      "Rich, slightly sweet and nutty, with warm spices like cinnamon and cardamom. The heat is gentle and the sauce is thick.",
    ingredients: [
      "Massaman curry paste",
      "Coconut milk",
      "Beef or chicken",
      "Potatoes",
      "Roasted peanuts",
      "Tamarind",
    ],
    culture:
      "Shaped by Muslim traders and Persian and Indian flavors. Its warm spices stand out in a cuisine where fresh herbs usually dominate.",
    howToOrder:
      "A good first curry if you are wary of heat. Eat it with steamed rice; some restaurants serve it with roti instead. Contains peanuts.",
  },
  {
    id: "tom-yum-goong",
    thai: "ต้มยำกุ้ง",
    english: "Tom Yum Goong",
    pronunciation: "tom yum goong",
    category: "Soup",
    spice: 3,
    spiceNote:
      "Usually hot and sour. Ask for “mai pet” (ไม่เผ็ด, not spicy) or “pet nit noi” to tone it down; the sourness will stay.",
    image: "images/placeholder-soup.svg",
    featured: true,
    taste:
      "Hot, sour, salty and strongly aromatic, with a bright lime and lemongrass scent.",
    ingredients: [
      "Shrimp (goong)",
      "Lemongrass",
      "Galangal",
      "Kaffir lime leaf",
      "Lime juice",
      "Chilies",
      "Mushrooms",
    ],
    culture:
      "One of Thailand’s best-known dishes. “Tom” means to boil and “yum” refers to the hot-and-sour flavor. It comes as a clear broth (nam sai) or a creamier one (nam khon).",
    howToOrder:
      "Share it as part of a meal and ladle it into small bowls next to your rice. Lemongrass, galangal and lime leaves are for flavor, so leave them in the bowl. Choose “nam sai” for clear or “nam khon” for creamy.",
  },
  {
    id: "tom-kha-gai",
    thai: "ต้มข่าไก่",
    english: "Tom Kha Gai",
    pronunciation: "tom kha gai",
    category: "Soup",
    spice: 1,
    spiceNote: "Usually mild, with only a hint of chili.",
    image: "images/placeholder-soup.svg",
    taste:
      "Creamy coconut soup with a tangy lime finish and a peppery, citrusy warmth from galangal.",
    ingredients: [
      "Chicken (gai)",
      "Coconut milk",
      "Galangal (kha)",
      "Lemongrass",
      "Kaffir lime leaf",
      "Mushrooms",
      "Lime juice",
    ],
    culture:
      "A milder, creamier cousin of tom yum. “Kha” is galangal, the ginger-like root that gives the soup its character.",
    howToOrder:
      "Order it alongside spicier dishes to cool your palate. As with tom yum, leave the galangal, lemongrass and lime leaves in the bowl.",
  },
  {
    id: "pad-kra-pao",
    thai: "ผัดกะเพรา",
    english: "Pad Kra Pao",
    pronunciation: "pad ga-prao",
    category: "Stir-fry",
    spice: 3,
    spiceNote:
      "Traditionally very spicy from bird’s eye chilies. Say “mai pet” for none or “pet nit noi” for a little.",
    image: "images/placeholder-stir-fry.svg",
    taste:
      "Savory, garlicky and peppery, with a sharp holy basil aroma and a salty-sweet sauce.",
    ingredients: [
      "Minced pork or chicken",
      "Holy basil (kra pao)",
      "Garlic",
      "Bird’s eye chilies",
      "Soy sauce",
      "Oyster sauce",
    ],
    culture:
      "An everyday street and home dish, often a quick one-plate lunch. It uses holy basil, which is more peppery than the sweeter Thai basil.",
    howToOrder:
      "Say “pad kra pao moo” for pork or “gai” for chicken, served over rice. Adding “sai kai dao” (ใส่ไข่ดาว, with a fried egg) is the usual way to eat it.",
  },
  {
    id: "cashew-chicken",
    thai: "ไก่ผัดเม็ดมะม่วงหิมพานต์",
    english: "Cashew Chicken",
    pronunciation: "gai pad med ma-muang",
    category: "Stir-fry",
    spice: 1,
    spiceNote:
      "Mild. The dried chilies are mostly for flavor and can be left uneaten.",
    image: "images/placeholder-stir-fry.svg",
    taste:
      "Sweet and savory with a smoky wok aroma and crunchy cashews.",
    ingredients: [
      "Chicken",
      "Cashews",
      "Dried chilies",
      "Onion",
      "Spring onion",
      "Bell pepper",
      "Oyster sauce",
    ],
    culture:
      "A Chinese-influenced stir-fry that is a staple in Thai-Chinese restaurants.",
    howToOrder:
      "An easy dish to share with steamed rice. Say “mai sai prik haeng” (ไม่ใส่พริกแห้ง) to skip the dried chilies. Contains cashews.",
  },
  {
    id: "som-tam",
    thai: "ส้มตำ",
    english: "Som Tam (Green Papaya Salad)",
    pronunciation: "som tam",
    category: "Salad",
    spice: 3,
    spiceNote:
      "Often very spicy. Say “mai pet” for no chili or “pet nit noi” for a little, and say it before the salad is pounded.",
    image: "images/placeholder-salad.svg",
    featured: true,
    taste:
      "Sour, spicy, sweet and salty at once, with a fresh crunch from shredded green papaya.",
    ingredients: [
      "Green papaya",
      "Tomato",
      "Long beans",
      "Garlic and chilies",
      "Lime juice",
      "Fish sauce",
      "Palm sugar",
      "Peanuts",
      "Dried shrimp",
    ],
    culture:
      "From Isan, Thailand’s northeast, and pounded to order in a mortar. There are many variations: “tam thai” is sweeter and has peanuts, while “tam pu pla ra” uses salted crab and fermented fish sauce for a stronger, funkier taste.",
    howToOrder:
      "Traditionally eaten with sticky rice (khao niao) and grilled chicken (gai yang). Ask for “som tam thai” for the sweeter version, and say “mai sai pla ra” (ไม่ใส่ปลาร้า) to skip the fermented fish sauce. It is not vegetarian by default.",
  },
  {
    id: "larb",
    thai: "ลาบ",
    english: "Larb (Minced Meat Salad)",
    pronunciation: "laab",
    category: "Salad",
    spice: 3,
    spiceNote: "Usually hot. Ask for “pet nit noi” to go milder.",
    image: "images/placeholder-salad.svg",
    taste:
      "Sour, salty and spicy, with fresh herbs and a nutty crunch from toasted ground rice.",
    ingredients: [
      "Minced pork or chicken",
      "Lime juice",
      "Fish sauce",
      "Toasted ground rice",
      "Chili flakes",
      "Shallots",
      "Mint",
    ],
    culture:
      "A dish of Isan that is also shared with neighboring Laos, often served at gatherings and celebrations.",
    howToOrder:
      "Say “laab moo” for pork or “laab gai” for chicken. Eat it with sticky rice, using your fingers to pinch the rice and scoop. Raw cabbage and long beans on the side cool the heat.",
  },
  {
    id: "pad-thai",
    thai: "ผัดไทย",
    english: "Pad Thai",
    pronunciation: "pad tai",
    category: "Noodles",
    spice: 0,
    spiceNote:
      "Not spicy as served. Chili flakes, sugar, fish sauce and lime come on the side so you season it yourself.",
    image: "images/placeholder-noodles.svg",
    featured: true,
    taste:
      "Sweet, sour and salty with chewy rice noodles, tamarind tang and crunchy peanuts.",
    ingredients: [
      "Rice noodles",
      "Shrimp or chicken",
      "Egg",
      "Tofu",
      "Bean sprouts",
      "Tamarind",
      "Fish sauce",
      "Crushed peanuts",
    ],
    culture:
      "Promoted in the 1930s and 40s as part of building a national identity, which is why “Thai” is in the name. Today it is a symbol of Thai food worldwide.",
    howToOrder:
      "Squeeze the lime, then add chili and peanuts to taste. Ask for “pad tai goong sod” (fresh shrimp) or “gai” (chicken). “Pad tai hor kai” comes wrapped in a thin egg omelet. Contains peanuts.",
  },
  {
    id: "khao-soi",
    thai: "ข้าวซอย",
    english: "Khao Soi",
    pronunciation: "khao soy",
    category: "Noodles",
    spice: 2,
    spiceNote:
      "Medium. Chili paste and pickles come on the side so you can adjust the heat.",
    image: "images/placeholder-noodles.svg",
    taste:
      "A rich, mildly spiced coconut curry with soft egg noodles, topped with crispy fried noodles for crunch.",
    ingredients: [
      "Egg noodles",
      "Curry paste",
      "Coconut milk",
      "Chicken or beef",
      "Crispy fried noodles",
      "Pickled mustard greens",
      "Shallots",
      "Lime",
    ],
    culture:
      "A specialty of Northern Thailand, especially Chiang Mai, shaped by Burmese and Chinese Muslim traders.",
    howToOrder:
      "Say “khao soi gai” for chicken. Squeeze in the lime, add the pickled greens and shallots, and stir in the chili paste a little at a time.",
  },
  {
    id: "khao-pad",
    thai: "ข้าวผัด",
    english: "Thai Fried Rice",
    pronunciation: "khao pad",
    category: "Rice",
    spice: 0,
    spiceNote:
      "Not spicy. It comes with prik nam pla (พริกน้ำปลา, chilies in fish sauce) on the side.",
    image: "images/placeholder-rice.svg",
    taste:
      "Savory and lightly smoky with jasmine rice and egg. It is mild and easy to like.",
    ingredients: [
      "Jasmine rice",
      "Egg",
      "Garlic",
      "Onion",
      "Tomato",
      "Soy sauce",
      "Fish sauce",
    ],
    culture:
      "An everyday one-plate meal found anywhere, usually served with cucumber slices and a lime wedge.",
    howToOrder:
      "Say “khao pad gai” (chicken), “moo” (pork) or “goong” (shrimp). Add a squeeze of lime and a spoonful of prik nam pla if you want more salt and heat.",
  },
  {
    id: "khao-man-gai",
    thai: "ข้าวมันไก่",
    english: "Khao Man Gai (Chicken Rice)",
    pronunciation: "khao man gai",
    category: "Rice",
    spice: 0,
    spiceNote:
      "The chicken and rice are not spicy. The dipping sauce can be spicy, so add it to your taste.",
    image: "images/placeholder-rice.svg",
    taste:
      "Clean, comforting and gently gingery. The dipping sauce is salty, tangy and spicy.",
    ingredients: [
      "Poached chicken",
      "Rice cooked in chicken broth",
      "Cucumber",
      "Ginger-chili-soybean sauce",
      "Clear broth",
    ],
    culture:
      "A Thai take on Hainanese chicken rice, brought by Chinese immigrants. It is an inexpensive lunch staple, often sold at stalls that make only this.",
    howToOrder:
      "It comes with a small bowl of clear soup. Add the sauce a little at a time. Ask for “khao man gai tod” if you prefer crispy fried chicken.",
  },
  {
    id: "mango-sticky-rice",
    thai: "ข้าวเหนียวมะม่วง",
    english: "Mango Sticky Rice",
    pronunciation: "khao niao ma-muang",
    category: "Dessert",
    spice: 0,
    spiceNote: "Not spicy.",
    image: "images/placeholder-dessert.svg",
    featured: true,
    taste:
      "Sweet ripe mango with warm sticky rice and salty-sweet coconut cream.",
    ingredients: [
      "Glutinous (sticky) rice",
      "Ripe mango",
      "Coconut milk",
      "Sugar and salt",
      "Toasted mung beans",
    ],
    culture:
      "A seasonal favorite, best when mangoes are at their peak, roughly March to May, in the hot season.",
    howToOrder:
      "Sold in restaurants and from street carts, often boxed to go. Try a piece of mango, some rice and a little coconut cream in the same bite. It is easy to share.",
  },
  {
    id: "moo-ping",
    thai: "หมูปิ้ง",
    english: "Moo Ping (Grilled Pork Skewers)",
    pronunciation: "moo ping",
    category: "Snack",
    spice: 0,
    spiceNote:
      "Not spicy. Some vendors add a chili dipping sauce on the side.",
    image: "images/placeholder-snack.svg",
    taste:
      "Sweet, savory and smoky, with tender pork and slightly charred edges.",
    ingredients: [
      "Pork",
      "Garlic",
      "Coriander root",
      "Pepper",
      "Soy sauce",
      "Palm sugar",
    ],
    culture:
      "A popular street breakfast, grilled over charcoal by vendors along the roadside in the morning.",
    howToOrder:
      "Point at the skewers and hold up fingers for how many you want. It is often eaten with a bag of sticky rice (khao niao).",
  },
  {
    id: "satay",
    thai: "สะเต๊ะ",
    english: "Satay",
    pronunciation: "sa-teh",
    category: "Snack",
    spice: 1,
    spiceNote:
      "Mostly mild. The peanut sauce is sweet with a faint chili kick.",
    image: "images/placeholder-snack.svg",
    taste:
      "Smoky, turmeric-marinated grilled meat with a creamy, sweet peanut sauce and a sharp, tangy cucumber relish.",
    ingredients: [
      "Pork or chicken",
      "Turmeric",
      "Coconut milk",
      "Lemongrass",
      "Peanut sauce",
      "Cucumber relish (ajad)",
      "Toasted bread",
    ],
    culture:
      "Adapted from Malay and Indonesian satay, and sold as both street food and restaurant starters.",
    howToOrder:
      "Usually served with toasted bread for dipping and a cucumber relish. Contains peanuts, so tell the staff if you have a nut allergy.",
  },
];
