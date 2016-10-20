import $ from 'jquery';

function getUser () {
  return $.ajax({
    url: 'https://api.randomuser.me/?results=12',
      // success: function(data) {
      // console.log(data);}
    });
};

getUser().then(userInfo);

function userInfo (users) {
  console.log(users)
  for (var i = 0; i < users.results.length; i++) {

    var user = users.results[i];
    var userHTML = `
      <div class="ind">
        <img class="picture" src="${user.picture.large}">
        <div class="name"><a>${user.name.first} ${user.name.last}</a></div>
        <div class="email"> ${user.email}</div>
        <div class="address"> ${user.location.street}</div>
        <div class="address"> ${user.location.city}, ${user.location.state} ${user.location.postcode}</div>
        <div class="address"> ${user.phone}</div>
        <div class="ssn"> ${user.cell}</div>
      </div>`;

  $(".container").append(userHTML);

  };
};
