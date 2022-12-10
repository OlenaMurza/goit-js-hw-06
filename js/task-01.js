const totalCategories = document.querySelectorAll(".item");
console.log(`всього категорій: ${totalCategories.length}`);

const categoriesArray = [...totalCategories]
  .map(
    categories => `Категорія: ${categories.children[0].textContent}
Кількість елементів: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);