// Menu Data from local images
const menuItems = [
    {
        id: 1,
        name: 'Sashimi 130g - Yellowtail Fish',
        description: 'Sashimi',
        price: 56,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 2,
        name: 'Sashimi 130g - Tuna',
        description: 'Sashimi',
        price: 48,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 3,
        name: 'Sashimi 130g - Prawns',
        description: 'Sashimi',
        price: 39,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 4,
        name: 'Sashimi 130g - Eel',
        description: 'Sashimi',
        price: 58,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 5,
        name: 'Sashimi 130g - Salmon',
        description: 'Sashimi',
        price: 47,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 6,
        name: 'Nigiri 2pcs - Yellowtail Fish',
        description: 'Nigiri',
        price: 35,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 7,
        name: 'Nigiri 2pcs - Tuna',
        description: 'Nigiri',
        price: 32,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 8,
        name: 'Nigiri 2pcs - Prawns',
        description: 'Nigiri',
        price: 28,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 9,
        name: 'Nigiri 2pcs - Eel',
        description: 'Nigiri',
        price: 37,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 10,
        name: 'Nigiri 2pcs - Salmon',
        description: 'Nigiri',
        price: 30,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 11,
        name: 'Gunkan 2pcs - Salmon Roe',
        description: 'Gunkan',
        price: 82,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 12,
        name: 'Gunkan 2pcs - Tuna',
        description: 'Gunkan',
        price: 36,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 13,
        name: 'Gunkan 2pcs - Prawns',
        description: 'Gunkan',
        price: 28,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 14,
        name: 'Gunkan 2pcs - Eel',
        description: 'Gunkan',
        price: 42,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 15,
        name: 'Gunkan 2pcs - Salmon',
        description: 'Gunkan',
        price: 32,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 16,
        name: 'Gunkan 2pcs - Tobiko',
        description: 'Gunkan',
        price: 40,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 17,
        name: 'Maki roll - Tuna',
        description: 'Maki roll',
        price: 38,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 18,
        name: 'Maki roll - Eel',
        description: 'Eel sauce, sesame seeds',
        price: 38,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 19,
        name: 'Maki roll - Salmon',
        description: 'Maki roll',
        price: 32,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 20,
        name: 'Maki roll - Shrimp',
        description: 'Maki roll',
        price: 30,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 21,
        name: 'Maki roll - Avocado',
        description: 'Eel sauce, sesame seeds',
        price: 28,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 22,
        name: 'Maki roll - Cucumber',
        description: 'Eel sauce, sesame seeds',
        price: 27,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 23,
        name: 'Maki roll - Hamachi',
        description: 'With yellowtail fish and spicy sauce',
        price: 40,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 24,
        name: 'California',
        description: 'With Crab Surimi, Cream Cheese, Cucumber, Avocado, Tobiko And Japanese Mayo',
        price: 50,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 25,
        name: 'Philadelphia',
        description: 'With Salmon, Cream Cheese, Cucumber, Avocado And Tobiko',
        price: 59,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 26,
        name: 'Spicy Tuna',
        description: 'With Tuna, Cream Cheese, Cucumber, Avocado, Tobiko, Takuan And Spicy Sauce',
        price: 52,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 27,
        name: 'Geisha',
        description: 'With Shrimp, Eel, Cream Cheese, Avocado, Tobiko',
        price: 68,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 28,
        name: 'Cream roll',
        description: 'With Fried Salmon, Crab Surimi, Salmon Roe, Cream Cheese, Cucumber And Avocado',
        price: 72,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 29,
        name: 'Shogun',
        description: 'With Salmon, Eel, Salmon Roe, Cream Cheese, Cucumber, Avocado, Japanese Mayo, Tobiko, Eel Sauce And Sesame Seeds',
        price: 79,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 30,
        name: 'Ninja',
        description: 'With Tuna, Salmon, Cucumber, Avocado And Tobiko',
        price: 69,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 31,
        name: 'Canada',
        description: 'With Eel, Salmon, Cucumber, Avocado, Cream Cheese, Eel Sauce And Sesame Seeds',
        price: 72,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 32,
        name: 'Red Dragon',
        description: 'With Salmon, Eel, Avocado, Cucumber, Tobiko, Japanese Mayo And Salmon Roe',
        price: 85,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 33,
        name: 'Green Dragon',
        description: 'With Avocado, Eel, Crab Surimi, Cucumber, Tobiko, Cream Cheese, Eel Sauce And Sesame Seeds',
        price: 69,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 34,
        name: 'Futomaki',
        description: 'With Shrimp, Crab Surimi, Eel, Salmon, Cucumber, Avocado, Cream Cheese, Eel Sauce, Sesame Seeds, Tobiko And Spicy Sauce',
        price: 79,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 35,
        name: 'Black Pearl',
        description: 'With Salmon Roe, Eel, Avocado, Cream Cheese, Cucumber And Tobiko',
        price: 87,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 36,
        name: 'Alaska',
        description: 'With Salmon, Avocado, Cream Cheese And Tobiko',
        price: 55,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 37,
        name: 'Tataki Tuna',
        description: 'With fried tuna on top, Japanese mayonnaise and tobiko, inside surimi crab and avocado',
        price: 70,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 38,
        name: 'Rainbow',
        description: 'Roll with shrimp, salmon, eel, tuna, crab and yellowtail fish, Philadelphia cheese and avocado',
        price: 69,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 39,
        name: 'Vegan Roll',
        description: 'With cucumber, chuka salad, avocado, bell pepper, pickled white radish and Philadelphia cheese',
        price: 69,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 40,
        name: 'Spicy Salmon',
        description: 'With salmon, cucumber, avocado, tobiko and spicy sauce',
        price: 58,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 41,
        name: 'Unagi Roll',
        description: 'With eel on top, shrimp, avocado, cucumber and Philadelphia cheese inside',
        price: 69,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 42,
        name: 'Tempura roll',
        description: 'With fried tempura shrimp, Philadelphia cheese, avocado in tobiko',
        price: 58,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 43,
        name: 'Philadelphia with Tuna',
        description: 'Classic roll with tuna on top and Philadelphia cheese inside, tobiko, avocado and cucumber',
        price: 63,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 44,
        name: 'Philadelphia with Shrimp',
        description: 'Classic roll with prawns on top and Philadelphia cheese inside, tobiko, avocado and cucumber',
        price: 55,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 45,
        name: 'Philadelphia with Unagi',
        description: 'Classic roll with eel on top and Philadelphia cheese inside, tobiko, avocado, cucumber, sesame seeds and eel sauce',
        price: 62,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 46,
        name: 'Tiger Dragon',
        description: 'With shrimp on top, chuka salad inside and cucumber, also spicy sauce and green tobiko',
        price: 64,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 47,
        name: 'Chicken roll',
        description: 'With fried chicken tempura, cherry tomato, Philadelphia cheese, cucumber in tobiko',
        price: 56,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 48,
        name: 'Bonito roll',
        description: 'With grilled salmon, fresh wild scallion, Philadelphia cheese in tuna flakes',
        price: 50,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 49,
        name: 'Fried Salmon',
        description: 'With fried salmon, Philadelphia cheese, avocado, tobiko, sesame seeds',
        price: 51,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 50,
        name: 'Sake hot',
        description: 'With Salmon, Cream Cheese, Avocado, Tempura, Bread Crumbs, Eel Sauce, Sesame Seeds',
        price: 65,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 51,
        name: 'Unagi hot',
        description: 'With Eel, Cream Cheese, Avocado, Tempura, Bread Crumbs, Eel Sauce, Sesame Seeds',
        price: 70,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 52,
        name: 'Shrimp hot',
        description: 'With Shrimp, Crab Surimi, Tobiko, Cream Cheese, Avocado, Tempura, Bread Crumbs, Eel Sauce, Sesame Seeds',
        price: 60,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 53,
        name: 'Maguro hot',
        description: 'With Tuna, Cream Cheese, Avocado, Tobiko, Tempura, Bread Crumbs, Eel Sauce, Sesame Seeds',
        price: 65,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 54,
        name: 'Vegan hot',
        description: 'Hot with pickled white radish, cream cheese, avocado, tempura, bread crumbs, bell pepper and sesame seed',
        price: 45,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 55,
        name: 'Baked Roll - Maguro',
        description: 'With Tuna, Cream Cheese, Avocado, Parmesan, Tobiko, Japanese Mayo And Eel Sauce',
        price: 71,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 56,
        name: 'Baked Roll - Hamachi',
        description: 'With Yellowtail Fish, Cream Cheese, Avocado, Parmesan, Tobiko, Japanese Mayo And Eel Sauce',
        price: 71,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 57,
        name: 'Baked Roll - Crab surimi',
        description: 'With Crab Surimi, Cream Cheese, Avocado, Parmesan, Tobiko, Japanese Mayo And Eel Sauce',
        price: 67,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 58,
        name: 'Baked Roll - Sake',
        description: 'With Salmon, Cream Cheese, Avocado, Parmesan, Tobiko, Japanese Mayo And Eel Sauce',
        price: 70,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 59,
        name: 'Baked Roll - Shrimp',
        description: 'With Shrimp, Cream Cheese, Avocado, Parmesan, Tobiko, Japanese Mayo And Eel Sauce',
        price: 68,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 60,
        name: 'Baked Roll - Unagi',
        description: 'With Eel, Cream Cheese, Avocado, Parmesan, Tobiko, Japanese Mayo And Eel Sauce',
        price: 72,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 61,
        name: 'Signature roll - Truffle',
        description: 'With yellowtail fish, cream cheese, truffle, avocado and sesame seeds',
        price: 132,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 62,
        name: 'Signature roll - King Crab',
        description: 'Exclusive roll with King Crab, fried in tempura with Philadelphia cheese and avocado',
        price: 150,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 63,
        name: 'Set Moriawase (900g)',
        description: 'Sashimi with Salmon, Tuna, Yellowtail Fish; Nigiri with Salmon, Tuna, Yellowtail Fish, Shrimp, Eel; Gunkan with Salmon Roe, Tobiko, Tuna, Eel',
        price: 455,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 64,
        name: 'Set #1 (830g)',
        description: 'Maki with Salmon, California, Spicy Tuna, Philadelphia',
        price: 180,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 65,
        name: 'Set #2 (1470g)',
        description: 'Cream roll, Philadelphia, Geisha, California, Shogun, Ninja',
        price: 375,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 66,
        name: 'Set #3 (1250g)',
        description: 'Philadelphia x2, Canada x2, Shogun x1',
        price: 320,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 67,
        name: 'Set #4 (1300g)',
        description: 'Unagi Hot, Shrimp Hot, Salmon Hot, Tuna Hot',
        price: 250,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 68,
        name: 'Set Dragon (780g)',
        description: 'Red Dragon, Green Dragon, Unagi Dragon',
        price: 200,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 69,
        name: 'Set Philadelphia',
        description: 'Philadelphia, Philadelphia Tuna, Philadelphia Unagi, Philadelphia Shrimp',
        price: 250,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 70,
        name: 'Set Baked',
        description: 'Baked with salmon, baked with eel, baked with Hamachi, baked with shrimp',
        price: 260,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 71,
        name: 'Happy Box',
        description: 'California, Maki Cucumber, Gunkan with Tobiko',
        price: 90,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 72,
        name: 'Set Unagi',
        description: 'Sashimi with eel, Nigiri with Eel, Maki eel, Unagi Roll',
        price: 190,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 73,
        name: 'Set for One',
        description: 'Maki salmon, Nigiri shrimp, Philadelphia',
        price: 105,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 74,
        name: 'Mix Box',
        description: 'Ninja roll, Shogun, Nigiri with yellowtail fish, Gunkan with eel, Maki with shrimp',
        price: 225,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 75,
        name: 'Signature Box',
        description: 'Sashimi shrimp, Sashimi Tuna, Nigiri shrimp, Nigiri tuna, Nigiri eel, Gunkan eel, Gunkan salmon, Gunkan tuna',
        price: 280,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 76,
        name: 'Set Salmon',
        description: 'Philadelphia, Maki salmon, Sashimi salmon, Nigiri salmon, Gunkan with salmon',
        price: 190,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 77,
        name: 'Set Sakura',
        description: 'Philadelphia, Unagi, Geisha, Maki shrimp, Maki avocado, Nigiri eel, Nigiri shrimp',
        price: 215,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 78,
        name: 'TarTar - Salmon',
        description: 'Fried crispy rice with Truffle and Norwegian salmon on nori chip',
        price: 68,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 79,
        name: 'TarTar - Eel',
        description: 'Fried crispy rice with Truffle and eel on nori chip, sesame seeds',
        price: 69,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 80,
        name: 'TarTar - Tuna',
        description: 'Fried crispy rice with Truffle and bluefin tuna on nori chip',
        price: 70,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 81,
        name: 'Poke with Chicken',
        description: 'Poke salad with rice, fried chicken tempura dressed with teriyaki sauce, corn, red onion, snow peas, bell pepper, avocado, cherry tomatoes, cucumber and scallion. Served with soy sauce',
        price: 55,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 82,
        name: 'Poke with Eel',
        description: 'Poke salad with rice, eel, edamame beans, corn, soy sprouts, avocado, arugula, eel sauce and sesame seeds. Served with soy sauce',
        price: 68,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 83,
        name: 'Poke with Salmon',
        description: 'Poke salad with rice, Norwegian salmon, Edamame beans, corn, soy sprouts, avocado, cucumber, cherry tomatoes and tobiko. Served with soy sauce',
        price: 70,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 84,
        name: 'Salad Chuka',
        description: 'With Wakame, Lemon, Sesame Sauce, Ginger, Eel Sauce And Sesame Seeds',
        price: 32,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 85,
        name: 'Poke with Shrimp',
        description: 'Poke salad with rice, local shrimp, surimi crab dressed with Japanese mayonnaise, avocado, pickled white radish, cucumber, cherry tomatoes, mango, snow peas and tobiko. Served with soy sauce',
        price: 60,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 86,
        name: 'Poke with Tuna',
        description: 'Poke salad with rice, bluefin tuna, avocado, cucumber, Edamame beans, red onion, lemon, scallion and tobiko. Served with soy sauce',
        price: 75,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 87,
        name: 'Poke Vegan',
        description: 'Poke salad with rice, avocado, cucumber, Edamame beans, scallion Chuka, baby carrots, soy sprouts, snow peas and nori. Served with soy sauce',
        price: 49,
        image: 'images/photo_5231325408857363727_y.jpg'
    },
    {
        id: 88,
        name: 'Poke with Hamachi',
        description: 'Poke salad with rice, Japanese yellowtail fish, cucumber, Edamame beans, scallion, Chuka, soy sprouts and cuma. Served with soy sauce',
        price: 75,
        image: 'images/photo_5231325408857363727_y.jpg'
    }
];

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const contactForm = document.getElementById('contactForm');

const imageByName = {
    'sashimi 130g': 'sushi/sashimi.png',
    'nigiri 2pcs': 'sushi/nigiri.png',
    'gunkan 2pcs': 'sushi/gunkan.png',
    'maki roll': 'sushi/maki-roll1.png',
    'california': 'sushi/sushi-roll-california.png',
    'philadelphia': 'sushi/sushi-roll-philadelphia.png',
    'spicy tuna': 'sushi/sushi-roll-spicy-tuna.png',
    'geisha': 'sushi/sushi-roll-geisha.png',
    'cream roll': 'sushi/sushi-roll-cream-roll.png',
    'shogun': 'sushi/sushi-roll-shogun.png',
    'ninja': 'sushi/sushi-roll-ninja.png',
    'canada': 'sushi/sushi-roll-canada.png',
    'red dragon': 'sushi/sushi-roll-red-dragon.png',
    'green dragon': 'sushi/sushi-roll-green-dragon.png',
    'futomaki': 'sushi/sushi-roll-futomaki.png',
    'black pearl': 'sushi/sushi-roll-black-pearl.png',
    'alaska': 'sushi/sushi-roll-alaska.png',
    'tataki tuna': 'sushi/sushi-roll-tataki-tuna.png',
    'rainbow': 'sushi/sushi-roll-rainbow.png',
    'vegan roll': 'sushi/sushi-roll-vegan.png',
    'spicy salmon': 'sushi/sushi-roll-spicy-salmon.png',
    'unagi roll': 'sushi/sushi-roll-unagi.png',
    'tempura roll': 'sushi/sushi-roll-tempura.png',
    'philadelphia with tuna': 'sushi/sushi-roll-philadelphia-tuna.png',
    'philadelphia with shrimp': 'sushi/sushi-roll-philadelphia-shrimp.png',
    'philadelphia with unagi': 'sushi/sushi-roll-philadelphia-unagi.png',
    'tiger dragon': 'sushi/sushi-roll-tiger-dragon.png',
    'chicken roll': 'sushi/sushi-roll-chicken.png',
    'bonito roll': 'sushi/sushi-roll-bonito.png',
    'fried salmon': 'sushi/sushi-roll-fried-salmon.png',
    'sake hot': 'sushi/hot-roll.png',
    'unagi hot': 'sushi/hot-roll.png',
    'shrimp hot': 'sushi/hot-roll.png',
    'maguro hot': 'sushi/hot-roll.png',
    'vegan hot': 'sushi/hot-roll.png',
    'baked roll': 'sushi/baked-roll.png',
    'signature roll - truffle': 'sushi/signature-roll-truffle.png',
    'signature roll - king crab': 'sushi/signature-roll-king-crab.png',
    'set moriawase (900g)': 'sushi/set-moriawase.png',
    'set #1 (830g)': 'sushi/set-1.png',
    'set #2 (1470g)': 'sushi/set-2.png',
    'set #3 (1250g)': 'sushi/set-3.png',
    'set #4 (1300g)': 'sushi/set-4.png',
    'set dragon (780g)': 'sushi/set-dragon.png',
    'set philadelphia': 'sushi/set-philadelphia.png',
    'set baked': 'sushi/set-baked.png',
    'happy box': 'sushi/set-happy-box.png',
    'set unagi': 'sushi/set-unagi.png',
    'set for one': 'sushi/set-for-one.png',
    'mix box': 'sushi/set-mix-box.png',
    'signature box': 'sushi/set-signature-box.png',
    'set salmon': 'sushi/set-salmon.png',
    'set sakura': 'sushi/set-sakura.png',
    'tartar - salmon': 'sushi/tartar-with-salmon.png',
    'tartar - eel': 'sushi/tartar-with-eel.png',
    'tartar - tuna': 'sushi/tartar-with-tuna.png',
    'poke with chicken': 'sushi/salad-poke-chicken.png',
    'poke with eel': 'sushi/salad-poke-eel.png',
    'poke with salmon': 'sushi/salad-poke-salmon.png',
    'salad chuka': 'sushi/salad-chuka.png',
    'poke with shrimp': 'sushi/salad-poke-shrimp.png',
    'poke with tuna': 'sushi/salad-poke-tuna.png',
    'poke vegan': 'sushi/salad-poke-vegan.png',
    'poke with hamachi': 'sushi/salad-poke-hamachi.png'
};

const categoryConfig = [
    { key: 'Sashimi & Nigiri', tags: ['Sashimi 130g', 'Nigiri 2pcs', 'Gunkan 2pcs'], defaultImage: 'sushi/sashimi.png' },
    { key: 'Maki Roll', tags: ['Maki roll'], defaultImage: 'sushi/maki-roll2.png' },
    { key: 'Sushi Roll', tags: ['California', 'Philadelphia', 'Spicy Tuna', 'Geisha', 'Cream roll', 'Shogun', 'Ninja', 'Canada', 'Dragon', 'Futomaki', 'Black Pearl', 'Alaska', 'Tataki Tuna', 'Rainbow', 'Vegan Roll', 'Spicy Salmon', 'Unagi Roll', 'Tempura roll', 'Tiger Dragon', 'Chicken roll', 'Bonito roll', 'Fried Salmon'], defaultImage: 'sushi/sushi-roll-california.png' },
    { key: 'Hot Roll', tags: ['hot'], defaultImage: 'sushi/hot-roll.png' },
    { key: 'Baked Roll', tags: ['Baked Roll'], defaultImage: 'sushi/baked-roll.png' },
    { key: 'Signature Roll', tags: ['Signature roll'], defaultImage: 'sushi/signature-roll-truffle.png' },
    { key: 'Set', tags: ['Set', 'Box'], defaultImage: 'sushi/set-moriawase.png' },
    { key: 'TarTar', tags: ['TarTar'], defaultImage: 'sushi/tartar-with-salmon.png' },
    { key: 'Salads', tags: ['Poke', 'Salad Chuka'], defaultImage: 'sushi/salad-poke-salmon.png' }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    setupEventListeners();
});

function normalizeName(name) {
    return name.toLowerCase().trim();
}

function categoryForItem(name) {
    const n = normalizeName(name);

    for (const category of categoryConfig) {
        if (category.tags.some(tag => n.includes(tag.toLowerCase()))) {
            return category.key;
        }
    }

    return 'Chef Specials';
}

function defaultImageForCategory(categoryName) {
    const category = categoryConfig.find(item => item.key === categoryName);
    return category ? category.defaultImage : 'sushi/sashimi.png';
}

function resolveImage(name, categoryName) {
    const normalized = normalizeName(name);
    return imageByName[normalized] || defaultImageForCategory(categoryName);
}

function groupMenuItems(items) {
    const groupedByCategory = new Map();

    items.forEach(item => {
        const [baseName, variantName] = item.name.split(' - ');
        const category = categoryForItem(item.name);

        if (!groupedByCategory.has(category)) {
            groupedByCategory.set(category, new Map());
        }

        const categoryItems = groupedByCategory.get(category);

        if (variantName) {
            if (!categoryItems.has(baseName)) {
                categoryItems.set(baseName, {
                    type: 'group',
                    title: baseName,
                    description: item.description,
                    image: resolveImage(baseName, category),
                    variants: []
                });
            }

            categoryItems.get(baseName).variants.push({
                id: item.id,
                name: variantName,
                description: item.description,
                price: item.price
            });
        } else {
            categoryItems.set(`${item.id}-${item.name}`, {
                type: 'single',
                item: {
                    ...item,
                    image: resolveImage(item.name, category)
                }
            });
        }
    });

    const sortedCategories = Array.from(groupedByCategory.entries()).map(([title, mapItems]) => {
        const entries = Array.from(mapItems.values()).sort((a, b) => {
            const left = a.type === 'group' ? a.title : a.item.name;
            const right = b.type === 'group' ? b.title : b.item.name;
            return left.localeCompare(right);
        });

        return { title, entries };
    });

    return sortedCategories.sort((a, b) => {
        const aIndex = categoryConfig.findIndex(category => category.key === a.title);
        const bIndex = categoryConfig.findIndex(category => category.key === b.title);
        const left = aIndex === -1 ? Number.MAX_SAFE_INTEGER : aIndex;
        const right = bIndex === -1 ? Number.MAX_SAFE_INTEGER : bIndex;
        return left - right;
    });
}

function renderCategory(category) {
    return `
        <section class="menu-category-block">
            <h3 class="menu-category-title">${category.title}</h3>
            <div class="menu-grid">
                ${category.entries.map(group => renderCard(group)).join('')}
            </div>
        </section>
    `;
}

function renderCard(group) {
    if (group.type === 'single') {
        const item = group.item;
        return `
            <article class="menu-card single-menu-card">
                <div class="menu-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="menu-content">
                    <h3 class="menu-title">${item.name}</h3>
                    <p class="menu-description">${item.description}</p>
                    <div class="menu-footer">
                        <span class="menu-price">${item.price} AED</span>
                    </div>
                </div>
            </article>
        `;
    }

    return `
        <article class="menu-card menu-group-card">
            <div class="menu-image">
                <img src="${group.image}" alt="${group.title}">
            </div>
            <div class="menu-content">
                <button class="group-toggle" type="button" aria-expanded="false">
                    <span class="menu-title">${group.title}</span>
                    <span class="group-arrow">▼</span>
                </button>
                <p class="menu-description">${group.description}</p>
                <div class="menu-footer">
                    <span class="menu-price">from ${Math.min(...group.variants.map(v => v.price))} AED</span>
                    <span class="variants-count">${group.variants.length} options</span>
                </div>
                <div class="group-variants" hidden>
                    ${group.variants.map(variant => `
                        <div class="variant-item">
                            <div>
                                <div class="variant-name">${variant.name}</div>
                                <div class="variant-description">${variant.description}</div>
                            </div>
                            <span class="variant-price">${variant.price} AED</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </article>
    `;
}

// Render Menu
function renderMenu() {
    const groupedItems = groupMenuItems(menuItems);

    menuGrid.classList.add('menu-category-wrapper');
    menuGrid.innerHTML = groupedItems.map(renderCategory).join('');

    document.querySelectorAll('.group-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const variants = button.parentElement.querySelector('.group-variants');
            const isOpen = button.getAttribute('aria-expanded') === 'true';

            button.setAttribute('aria-expanded', String(!isOpen));
            variants.hidden = isOpen;
        });
    });
}

// Event Listeners
function setupEventListeners() {
    // Mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Form validation
    contactForm.addEventListener('submit', handleFormSubmit);
}

// Form Validation
function handleFormSubmit(e) {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const successMessage = document.getElementById('successMessage');

    let isValid = true;

    // Reset errors
    [name, email, message].forEach(field => {
        field.classList.remove('error');
        document.getElementById(`${field.id}Error`).classList.remove('show');
    });

    // Validate name
    if (name.value.trim() === '') {
        showError(name, 'Name is required');
        isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        showError(email, 'Please enter a valid email');
        isValid = false;
    }

    // Validate message
    if (message.value.trim() === '') {
        showError(message, 'Message is required');
        isValid = false;
    }

    if (isValid) {
        successMessage.textContent = 'Thank you! Your message has been sent successfully.';
        successMessage.classList.add('show');
        contactForm.reset();

        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
    }
}

function showError(input, message) {
    input.classList.add('error');
    const errorElement = document.getElementById(`${input.id}Error`);
    errorElement.textContent = message;
    errorElement.classList.add('show');
}
