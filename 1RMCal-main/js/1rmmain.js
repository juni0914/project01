const openButton = document.querySelector(".result_table");
const closeButton = document.querySelector(".close_btn");
const result = document.querySelector(".result");
const result_text = document.querySelector("#result_excercise");
const modal = document.querySelector("#modal");

const coefficient = {
  스쿼트: [0, 1, 1.0475, 1.13, 1.1575, 1.2, 1.242, 1.284, 1.326, 1.368, 1.41],
  벤치프레스: [0, 1, 1.035, 1.08, 1.115, 1.15, 1.18, 1.22, 1.255, 1.29, 1.325],
  데드리프트: [0, 1, 1.065, 1.13, 1.147, 1.164, 1.181, 1.198, 1.22, 1.232, 1.24]
}


// var exercise_value = document.getElementById("exercise");
// var exercise_option =  exercise_value.options[exercise_value.selectedIndex].value);

function calculate(exercise, reps, weights) {
  let rm1 = weights * ((coefficient[exercise])[reps]);
  let data = [];
  for (let i = 1; i < 11; i++) {
    data[i] = (rm1 / coefficient[exercise][i]).toFixed(2);
  }
  return data;
  result.style.display = "none";

}

function result_element(rm, weights) {
  return ("<div class='result-element'>" +
    "<p class='re-rm'>" + rm + "RM</p>" +
    "<p class='re-we'>" + weights + "KG</p>" +
    "</div>");
}


function result_exercise_text(exercise){
  return ("<div class='result_exercise_text'>" +
  "<p class='exercise'>" + "나의 "+ exercise+  " 1RM은 입니다." + "</p>" +
  "</div>");
}



function action() {
  const exercise = $('select[name=exercise]').val();
  const reps = parseInt($('select[name=reps]').val());
  const weights = parseFloat($('input[name=weights]').val());


  if (!exercise || !reps || !weights) {
    alert("모든 항목을 정확히 입력해주세요");
    return;
  }

  if (weights < 0) {
    alert("무게는 양수만 가능합니다.");
    return;
  }

    $('.result-element').remove();
    $('.result_exercise_text').remove();


  let list = calculate(exercise, reps, weights);

  $('#result_excercise').append(result_exercise_text(exercise));

  for (let i = 1; i < 11; i++) {
    // console.log(i);

  $('#list').append(result_element(i, list[i]));

  }



  console.log(list);
  showExercise();

  result_text.style.display = "flex";
  result.style.display = "flex";

}

function showExercise(){
  let ex = document.getElementById("exercise");
  let ex_1 = ex.options[ex.selectedIndex].value;
  // console.log(ex_1);
}

function openModal(){
  modal.style.display = 'flex';
}

function closeModal(){
  modal.style.display = 'none';
}

window.onclick = function (event){
  if(event.target == modal){
    closeModal();
  }
}

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
