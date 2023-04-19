const buttonRight = document.getElementById('slideRight');
    const buttonLeft = document.getElementById('slideLeft');

    buttonRight.onclick = function () {
      document.getElementById('card-container2').scrollLeft += 200;
    };
    buttonLeft.onclick = function () {
      document.getElementById('card-container2').scrollLeft -= 200;
    };

    const buttonRight1 = document.getElementById('slideRight1');
    const buttonLeft1 = document.getElementById('slideLeft1');

    buttonRight1.onclick = function () {
      document.getElementById('card-container1').scrollLeft += 200;
    };
    buttonLeft1.onclick = function () {
      document.getElementById('card-container1').scrollLeft -= 200;
    };