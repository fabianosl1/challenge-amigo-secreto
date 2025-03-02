const friends = []

function adicionarAmigo() {
  const element = document.getElementById("amigo")

  const friend = element.value

  if (friend === "") {
    alert("Por favor, insira um nome.")
    return
  }

  friends.push(friend)
  element.value = ""

  showFriendList()
}

function showFriendList() {
  console.log(friends)
  const element = document.getElementById("listaAmigos")
  element.innerHTML = friends.map(friend => {
    return `<li>${friend}</li>`
  }).join("\n")
}

function sortearAmigo() {
  if (friends.length === 0) {
    alert("A lista de amigos está vazia.")
    return
  }

  const index = Math.floor(Math.random() * friends.length)
  const element = document.getElementById("resultado")
  element.innerHTML = `<li>${friends[index]}</li>`
}
