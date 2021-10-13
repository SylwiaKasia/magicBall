const j_ball = document.querySelector(".ball_img");
const j_input = document.querySelector("#inp");
const j_answer = document.querySelector(".answer");
const j_error = document.querySelector(".error");



ballAnimation = () => {
    let ball_old_width = j_ball.style.width;
    let ball_old_height = j_ball.style.height;
    let style_size = "";
    //--------------
    j_ball.style.width = "25%";
    j_ball.style.height = "25%";
    setTimeout(function(){
        j_ball.style.width = ball_old_width;
        j_ball.style.height = ball_old_height;        
     }, 500);

}

ballCick = () => {
    let pytanie = j_input.value;
    let odpowiedz_str = "";
    //------------------
    //---uruchomienie animacji------------------------
    ballAnimation();
    //---sprawdzenie czy wpisane pytanie, jeśli nie to wyświetl komunikat----
    if (pytanie === ""){
        odpowiedz_str = "Musisz najpierw zadać pytanie";
    }
    //---sprawdzenie czy na końcu pytania jest znak zapytania, jeśli nie, wyświetl komunikat----
    else if (pytanie[pytanie.length - 1] !== '?'){
        odpowiedz_str ="Musi być znak zapytania na końcu pytania";
    }
    else
    {
        let odpowiedz_random = Math.random () * 3;
        odpowiedz_random = odpowiedz_random.toFixed(0);
        //console.log(odpowiedz_random);
        if (odpowiedz_random === '0'){
            odpowiedz_str ="NIE";
        }
        else if (odpowiedz_random === '1'){
            odpowiedz_str ="TAK";
        }
        else
        {
            odpowiedz_str = "Nie mogę udzielić odpowiedzi na to pytanie";
        }
        //console.log("odpowiedz_str: ", odpowiedz_str);
    }
    //-------------------
    j_answer.textContent = odpowiedz_str;
}

clearAnswer = () => {
    j_answer.textContent = "";
}
 
j_ball.addEventListener("click", ballCick);
j_input.addEventListener("click", clearAnswer);
