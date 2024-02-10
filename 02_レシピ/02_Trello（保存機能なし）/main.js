const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButoon = document.getElementById("add-button")

addButoon.onclick = function () {
  const card = createCard(inputElement.value)
  container.append(card)
}

const createCard = function (text) {
  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  deleteButton.onclick = function () {
    card.remove()
  }

  card.append(todo)
  card.append(deleteButton)
  inputElement.value = ""

  return card
}
