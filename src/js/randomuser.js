import $ from 'jquery';

function getUser () {
  return $.ajax({
    url: 'https://api.randomuser.me/?results=12',
      // success: function(data) {
      // console.log(data);}
    });
};

export {getUser};
