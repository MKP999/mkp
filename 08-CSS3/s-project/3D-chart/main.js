var stage = document.querySelector('.stage');
// document.body.onmousemove = function (e) {
//     // console.log(e.clientX);
//     var x = e.clientX - stage.offsetLeft - stage.offsetWidth/2;
//     var y = e.clientY - stage.offsetTop - stage.offsetHeight/2;
//     // console.log(x,y);
//     // transform: rotateX(15deg) rotateY(15deg)
//     stage.style.transform = 'rotateX(' + -x/15 + 'deg) rotateY('+ -y/15 +'deg)';

//   }

// document.body.onclick = function () {
//     stage.classList.toggle('active');
//     document.body.toggle('mousemove',stagemove);
//   }



  function stagemove(e) {
    // console.log(e.clientX);
    var x = e.clientX - stage.offsetLeft - stage.offsetWidth / 2;
    var y = e.clientY - stage.offsetTop - stage.offsetHeight / 2;
    // console.log(x,y);
    // transform: rotateX(15deg) rotateY(15deg)
    stage.style.transform = "rotateX(" + -x / 20 + "deg) rotateY(" + -y / 20 + "deg)";
  }

document.body.addEventListener('mousemove',stagemove);

var states = true;
function stageClick() {
    if (states == true) {
        states = false;
            stage.classList.toggle('active');
            //rotateX(60deg) rotateY(0deg)
            stage.style.transform = 'rotateX(' + 60 + 'deg) rotateY('+ 0 +'deg)';
        document.body.removeEventListener('mousemove',stagemove);
    } else {
            stage.classList.toggle('active');
        document.body.addEventListener('mousemove',stagemove);
        states = true;
    }
}

document.body.onclick = function (){
    stageClick();
}