let a = document.querySelector("#a"),
    b = document.querySelector("#b"),
    r = document.querySelector("#r"),
    a2 = document.querySelector("#a2"),
    h = document.querySelector("#h"),
    a3 = document.querySelector("#a3"),
    m = document.querySelector("#m"),
    name = [a, b, r, a2, h, a3, m],
    typeWriter = document.querySelector("#typeWriter"),
    leaderBoard = document.querySelector("#leaderBoard"),
    school = document.querySelector("#school"),
    divInDiv = document.querySelector("#divInDiv"),
    divInDiv2 = document.querySelector("#divInDiv2"),
    divInDiv3 = document.querySelector("#divInDiv3"),
    divs = [
      {
        type: typeWriter,
        child: divInDiv
      },{
        type: leaderBoard,
        child: divInDiv2
      },{
        type: school,
        child: divInDiv3
      }
    ];

let rColor;
let gColor;
let bColor;

let imTesting = document.querySelectorAll(".divInContent");
let imTesting2 = document.querySelectorAll(".divInDiv");

name.forEach(function(letter){
  letter.addEventListener("mouseover", function(){
    rColor = Math.floor(Math.random() * 256);
    gColor = Math.floor(Math.random() * 256);
    bColor = Math.floor(Math.random() * 256);

    this.style.color = `rgb(${rColor}, ${gColor}, ${bColor})`;
  });

  letter.addEventListener("mouseout", function(){
    this.style.color = "#fff";
  });
});

imTesting.forEach(function(elm, i){
  elm.addEventListener("mouseover", function(){
    imTesting2[i].classList.remove("invisible");
  });
  elm.addEventListener("mouseout", function(){
    imTesting2[i].classList.add("invisible");
  });
});
