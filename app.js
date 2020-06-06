
const url = 'https://randomuser.me/api/?results=30';

(function() {
    fetch(url)
    .then(response => {
        response.json()
        .then(function(data) {
            let users = data.results;

            let singleUser = users[0];

            document.querySelector('#profImg').src = `${singleUser.picture.medium}`
            document.querySelector('#name').innerHTML = `${singleUser.name.first} ${singleUser.name.last}`
            document.querySelector('#title').innerHTML = `${singleUser.name.title}`
            document.querySelector('#profImg').src = `${singleUser.picture.medium}`
            document.querySelector('#profImg').src = `${singleUser.picture.medium}`
            document.querySelector('#profImg').src = `${singleUser.picture.medium}`

            console.log(singleUser)
            console.log(users);
        })
    })
})();