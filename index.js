let allInputs = document.getElementsByTagName('input');
for(let i = 0; i < allInputs.length; i++){
  allInputs[i].addEventListener('input', function (evt) {updateCard();});
}

let cardHolder_CARD = document.getElementById("card-holder");
let cardHolder_INPUT = document.getElementById("cardholder-inpt");
let cardHolder_WARNING = document.getElementById("cardholder-warning");

let cardnumber_CARD = document.getElementById("card-code");
let cardnumber_INPUT = document.getElementById("cardnumber-inpt");
let cardnumber_WARNING = document.getElementById("cardnumber-warning");

let cardDate_CARD = document.getElementById("card-date");
let cardDate_INPUT_MM = document.getElementById("exp-date-mm-inpt");
let cardDate_INPUT_YY = document.getElementById("exp-date-yy-inpt");
let cardDate_WARNING = document.getElementById("cardDate-warning");

let cardCvc_CARD = document.getElementById("card-cvc");
let cardCvc_INPUT = document.getElementById("cvc-inpt");
let cardCvc_WARNING = document.getElementById("cardCvc-warning");

function updateCard(){
  cardHolder_CARD.textContent = cardHolder_INPUT.value;
  cardnumber_CARD.textContent = cardnumber_INPUT.value;
  cardDate_CARD.textContent = cardDate_INPUT_MM.value + "/" + cardDate_INPUT_YY.value;
  cardCvc_CARD.textContent = cardCvc_INPUT.value;
}

function reloadPage(){
  location.reload();
}


function confirm(){
  cardHolder_WARNING.style.display = "none";
  cardnumber_WARNING.style.display = "none";
  cardDate_WARNING.style.display = "none";
  cardCvc_WARNING.style.display = "none";

  cardHolder_INPUT.style.borderColor = "hsl(270, 3%, 87%)";
  cardnumber_INPUT.style.borderColor = "hsl(270, 3%, 87%)";
  cardDate_INPUT_MM.style.borderColor = "hsl(270, 3%, 87%)";
  cardDate_INPUT_YY.style.borderColor = "hsl(270, 3%, 87%)";
  cardCvc_INPUT.style.borderColor = "hsl(270, 3%, 87%)";



  let cardHolder = cardHolder_INPUT.value.replace(/\s+/g, '');
  let cardHolder_OK = /^[a-zA-Z]+$/.test(cardHolder);
  if (!cardHolder_OK){
    cardHolder_WARNING.style.display = "block";
    cardHolder_INPUT.style.borderColor = "hsl(0, 100%, 66%)";
  }

  let cardnumber = cardnumber_INPUT.value.replace(/\s+/g, '');
  let cardnumber_OK = /^\d+$/.test(cardnumber) && (cardnumber.length == 16);
  if (!cardnumber_OK){
    cardnumber_WARNING.style.display = "block";
    cardnumber_INPUT.style.borderColor = "hsl(0, 100%, 66%)";
  }

  let dateMM_OK = /^\d+$/.test(cardDate_INPUT_MM.value) && (cardDate_INPUT_MM.value.length == 2);
  let dateYY_OK = /^\d+$/.test(cardDate_INPUT_YY.value) && (cardDate_INPUT_YY.value.length == 2);
  if (!dateMM_OK){
    cardDate_WARNING.style.display = "block";
    cardDate_INPUT_MM.style.borderColor = "hsl(0, 100%, 66%)";
  }
  if (!dateYY_OK){
    cardDate_WARNING.style.display = "block";
    cardDate_INPUT_YY.style.borderColor = "hsl(0, 100%, 66%)";
  }

  let cardCvc_OK = /^\d+$/.test(cardCvc_INPUT.value) && (cardCvc_INPUT.value.length == 3);
  if (!cardCvc_OK){
    cardCvc_WARNING.style.display = "block";
    cardCvc_INPUT.style.borderColor = "hsl(0, 100%, 66%)";
  }

  if (cardHolder_OK && cardnumber_OK && dateMM_OK && dateYY_OK && cardCvc_OK){
    document.getElementById("main-inpt").style.display = "none";
    document.getElementById("thank-message").style.display = "flex";
  }
}