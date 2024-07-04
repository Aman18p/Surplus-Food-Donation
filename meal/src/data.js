import img1 from './Data Image/img1.jpeg'
import img2 from './Data Image/img2.jpg'
import img3 from './Data Image/img3.jpg'
import img4 from './Data Image/img4.jpeg'
import img5 from './Data Image/img5.jpeg'


const data = {
    productData:[
    { id: 1, img: img1, title: "Apple", desc: "Fresh fruit", price: 30 },
    { id: 2, img: img2, title: "Banana", desc: "Fresh fruit", price: 20 },
    { id: 3, img: img3, title: "Berries", desc: "Fresh fruit", price: 40 },
    { id: 4, img: img4, title: "Citrus", desc: "Fresh fruit", price: 35 },
    { id: 5, img: img5, title: "Grapes", desc: "Fresh fruit", price: 25 },
    { id: 6, img: img1, title: "Mango", desc: "Fresh fruit", price: 50 },
    { id: 7, img: img2, title: "Melon", desc: "Fresh fruit", price: 45 },
    { id: 8, img: img3, title: "Pear", desc: "Fresh fruit", price: 30 },
    { id: 9, img: img4, title: "Pineapple", desc: "Fresh fruit", price: 55 },
    { id: 10, img: img5, title: "Stone Fruit", desc: "Fresh fruit", price: 40 },
    { id: 11, img: img1, title: "Asparagus", desc: "Fresh vegetable", price: 60 },
    { id: 12, img: img2, title: "Bell Pepper", desc: "Fresh vegetable", price: 30 },
    { id: 13, img: img3, title: "Broccoli", desc: "Fresh vegetable", price: 25 },
    { id: 14, img: img4, title: "Brussels Sprout", desc: "Fresh vegetable", price: 35 },
    { id: 15, img: img5, title: "Carrot", desc: "Fresh vegetable", price: 20 },
    { id: 16, img: img1, title: "Celery", desc: "Fresh vegetable", price: 25 },
    { id: 17, img: img2, title: "Corn", desc: "Fresh vegetable", price: 40 },
    { id: 18, img: img3, title: "Cucumber", desc: "Fresh vegetable", price: 15 },
    { id: 19, img: img4, title: "Green Bean", desc: "Fresh vegetable", price: 30 },
    { id: 20, img: img5, title: "Leafy Green", desc: "Fresh vegetable", price: 25 },
    { id: 21, img: img1, title: "Mushroom", desc: "Fresh vegetable", price: 45 },
    { id: 22, img: img2, title: "Onion", desc: "Fresh vegetable", price: 20 },
    { id: 23, img: img3, title: "Potato", desc: "Fresh vegetable", price: 25 },
    { id: 24, img: img4, title: "Tomato", desc: "Fresh vegetable", price: 30 },
    { id: 25, img: img5, title: "Zucchini", desc: "Fresh vegetable", price: 35 },
    { id: 26, img: img1, title: "Barley", desc: "Healthy grain", price: 50 },
    { id: 27, img: img2, title: "Brown Rice", desc: "Healthy grain", price: 60 },
    { id: 28, img: img3, title: "Buckwheat", desc: "Healthy grain", price: 55 },
    { id: 29, img: img4, title: "Cornbread", desc: "Healthy grain", price: 45 },
    { id: 30, img: img5, title: "Oat", desc: "Healthy grain", price: 35 },
    { id: 31, img: img1, title: "Quinoa", desc: "Healthy grain", price: 70 },
    { id: 32, img: img2, title: "Rye Bread", desc: "Healthy grain", price: 50 },
    { id: 33, img: img3, title: "Whole Wheat Bread", desc: "Healthy grain", price: 40 },
    { id: 34, img: img4, title: "Whole Wheat Pasta", desc: "Healthy grain", price: 60 },
    { id: 35, img: img5, title: "Wild Rice", desc: "Healthy grain", price: 55 },
    { id: 36, img: img1, title: "Bean", desc: "Protein-rich food", price: 30 },
    { id: 37, img: img2, title: "Beef", desc: "Protein-rich food", price: 100 },
    { id: 38, img: img3, title: "Chicken", desc: "Protein-rich food", price: 80 },
    { id: 39, img: img4, title: "Egg", desc: "Protein-rich food", price: 20 },
    { id: 40, img: img5, title: "Fish", desc: "Protein-rich food", price: 90 },
    { id: 41, img: img1, title: "Lentil", desc: "Protein-rich food", price: 40 },
    { id: 42, img: img2, title: "Nut", desc: "Protein-rich food", price: 70 },
    { id: 43, img: img3, title: "Seed", desc: "Protein-rich food", price: 60 },
    { id: 44, img: img4, title: "Tofu", desc: "Protein-rich food", price: 50 },
    { id: 45, img: img5, title: "Cheese", desc: "Dairy product", price: 65 },
    { id: 46, img: img1, title: "Milk", desc: "Dairy product", price: 30 },
    { id: 47, img: img2, title: "Yogurt", desc: "Dairy product", price: 40 },
    { id: 48, img: img3, title: "Avocado", desc: "Healthy fat/oil", price: 50 },
    { id: 49, img: img4, title: "Olive Oil", desc: "Healthy fat/oil", price: 90 },
    { id: 50, img: img5, title: "Nut Butter", desc: "Healthy fat/oil", price: 70 },
    { id: 51, img: img1, title: "Dark Chocolate", desc: "Sweet treat", price: 60 },
    { id: 52, img: img2, title: "Dried Fruit", desc: "Sweet treat", price: 45 },
    { id: 53, img: img3, title: "Honey", desc: "Sweet treat", price: 40 },
    { id: 54, img: img4, title: "Maple Syrup", desc: "Sweet treat", price: 55 },
    { id: 55, img: img5, title: "Smoothie", desc: "Refreshing beverage", price: 50 },
    { id: 56, img: img1, title: "Apple (Fruit)", desc: "Fresh fruit", price: 30 },
    { id: 57, img: img2, title: "Banana (Fruit)", desc: "Fresh fruit", price: 20 },
    { id: 58, img: img3, title: "Berries (Fruit)", desc: "Fresh fruit", price: 40 },
    { id: 59, img: img4, title: "Citrus (Fruit)", desc: "Fresh fruit", price: 35 },
    { id: 60, img: img5, title: "Grapes (Fruit)", desc: "Fresh fruit", price: 25 }


    ],
};

export default data

