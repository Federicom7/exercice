const categories = [
    {
        name: 'category1',
        subcategories: [
            {
                name: 'category2',
                subcategories: []
            },
            {
                name: 'category3',
                subcategories: [
                    {
                        name: 'category4',
                        subcategories: []
                    }
                ]
            }
        ]
    },
    {
        name: 'category5',
        subcategories: []
    }
];

// TO-DO: Implement this function
const getCategoryPath = (categories, categoryName) => {
  let path = ''
   for (element of categories) {
     if (!path.includes(categoryName)) {
       path = `${path}/${element.name}`
       path = path+getCategoryPath(element.subcategories, categoryName)
     }
     if (!path.includes(categoryName)) {path = ''}
    }
    return path;
};

console.log(getCategoryPath(categories, 'category4')); // should output: '/category1/category3/category4'
console.log(getCategoryPath(categories, 'category2')); // should output: '/category1/category2'
console.log(getCategoryPath(categories, 'category5')); // should output: '/category5'
