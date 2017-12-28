  document.addEventListener('DOMContentLoaded', function () {
      var checkPageButton = document.getElementById('clearLimit');
      var div = document.getElementById('successDiv');
      var ifr = document.getElementsByClassName('clearlimitframe')[0];
      checkPageButton.addEventListener('click', function () {

          for (var i = 0; i <= 5; i++) {
              ifr.setAttribute('src', 'http://dfiles.eu/get_file.php?fd2=clearlimit');
          }
          ifr.onload = function () {
              div.innerHTML = '<div class="mb-3"><span class="text-success lead" style="font-size:1em;">Limit Cleared</span></div>';
          }

          setTimeout(function () {
              div.innerHTML = '';
          }, 5000);

      }, false);

  }, false);