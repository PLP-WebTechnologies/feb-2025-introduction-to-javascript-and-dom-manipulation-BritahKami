function changeTitle() {
  document.getElementById("mainTitle").textContent = "Updated Shopping Cart";
}

function addItem() {
  const ul = document.getElementById("shoppingList");
  const li = document.createElement("li");
  li.textContent = "2kg sugar";
  ul.appendChild(li);
}
