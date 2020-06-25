const url = 'https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?results=30';

(function() {
    fetch(url)
    .then(response => {
        response.json()
        .then(function(data) {
            console.log(data);

            let users = data.results;
            let singleUser = users[0];
            
            singleUser = {
                fName: singleUser.name.first,
                lName: singleUser.name.last,
                email: singleUser.email,
                cell: singleUser.cell,
                src: singleUser.picture.large,
                login: singleUser.login.username,
                location: {
                    city: singleUser.location.city,
                    state: singleUser.location.state,
                    country: singleUser.location.country
                },
                
            };

            let imageContainer = document.querySelector('#imgContainer');
            let profileCard = document.createElement("IMG");

            profileCard.setAttribute("src", singleUser.src);
            profileCard.setAttribute("alt", singleUser.name);

            imageContainer.appendChild(profileCard);

            document.querySelector('#name').innerHTML = `${singleUser.fName} ${singleUser.lName}`;
            document.querySelector('#loginUserName').innerHTML = `<i class="fas fa-user"></i> ${singleUser.login}`


            // employee information
            let employeeDetails = document.querySelector('#employeeDetails');

            let cell = document.querySelector('#cell')
            let email = document.querySelector('#email')
            let city = document.querySelector('#city')
            let country = document.querySelector('#country')
            let state = document.querySelector('#state')

            console.log(singleUser);

            email.innerHTML = `<i class="far fa-envelope"></i> ${singleUser.email}`
            cell.innerHTML = `<i class="fas fa-mobile-alt"></i> ${singleUser.cell}`
            city.innerHTML = `<i class="fas fa-city"></i> ${singleUser.location.city}`
            state.innerHTML = `<i class="far fa-flag"></i> ${singleUser.location.state}`
            country.innerHTML = `<i class="fas fa-globe-americas"></i> ${singleUser.location.country}`



            // Contact information

            let contactDetails = document.querySelector('#contactDetails');

            let emailAction = document.querySelector('#emailAction');
            let callAction = document.querySelector('#callAction');

            emailAction.querySelector('button').addEventListener('click', function() {
                alert(`Emailing: ${singleUser.fName} ${singleUser.lName}`)
            });
            emailAction.querySelector('span').innerHTML = `${singleUser.fName}`;

            callAction.querySelector('button').addEventListener('click', function() {
                alert(`Calling: ${singleUser.fName} ${singleUser.lName}`)
            });
            callAction.querySelector('span').innerHTML = `${singleUser.fName}`;



            let emailModal = document.querySelector("#emailModal");
            let composeEmail = document.querySelector("#composeEmail");

            composeEmail.addEventListener('click', function() {
                emailModal.style.display = "flex";
            })

            
            // send email button
            let sendEmailBtn = document.querySelector('#sendEmailBtn');
            sendEmailBtn.addEventListener('click', function(e) {
                e.preventDefault();
                alert('Email sent');
                emailModal.style.display = "none";
            })


            // refresh btn
            let newUserBtn = document.querySelector('#newUserBtn');
            newUserBtn.addEventListener('click', function() {
                location.reload();
            })
            
        })
    })
})();