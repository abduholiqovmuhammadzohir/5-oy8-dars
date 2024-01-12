const list = document.getElementById("user-list")

function createItem(item) {
    return `

    <li class="user-item">
        <h3>${item.name}</h3>
        <p>${item.address.city} ${item.address.street}</p>
        <p>${item.email}</p>
        <p>${item.username}</p>
        <p>${item.website}</p>
    </li>

    `
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then(res => {
        if (res.length) {
            res.forEach(element => {
                let li = createItem(element)
                list.innerHTML += li
            });
        }
    })
    .catch((err => {
        console.log(err);
    }))

