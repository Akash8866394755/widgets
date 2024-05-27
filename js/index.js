function action(active, inActive, oldActive, btn1, btn2, btn3) {

    var activeBtn = document.getElementById(active);
    var inActiveBtn = document.getElementById(inActive);
    var oldActiveBtn = document.getElementById(oldActive);
    var Btn1 = document.getElementById(btn1);
    var Btn2 = document.getElementById(btn2);
    var Btn3 = document.getElementById(btn3);



        activeBtn.style.display = "block";
        activeBtn.className = "animate__animated animate__slideInLeft";
        inActiveBtn.style.display = "none";
        oldActiveBtn.style.display = "none";
        Btn1.style.color = "#fff";
        Btn2.style.color = "gray";
        Btn3.style.color = "gray";
    


   
}