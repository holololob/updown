let computerNum = 0;
let userNum = document.getElementById("user-input");
let playButton = document.getElementById("play-button");
let resetButton = document.getElementById("reset-button");
let resultArea = document.getElementById("result-area");
let chance = 5;
let chanceArea = document.getElementById("chance-area");
let history = [];
let userInput = document.getElementById("user-input");

chanceArea.innerHTML = `남은 기회: ${chance}`;
userNum.addEventListener("focus", () => {userNum.value = ""})
playButton.addEventListener("click", playGame)
resetButton.addEventListener("click", reset)

// 랜덤숫자를 지정하는 함수
function randomNum(){
  computerNum = Math.floor(Math.random() * 50) + 1;
  console.log("랜덤숫자:", computerNum)
}
// 페이지가 로드되면 바로 실행
window.onload = function() {
  randomNum();
};

// 게임을 진행하는 함수
function playGame(){
  let userValue = userNum.value

  if(userValue < 1 || userValue > 50){ // 입력값이 1 미만 50 초과인 경우
      resultArea.textContent = "1에서 50 사이의 숫자를 입력하세요."
      return; // 함수가 더 진행되지 않게 함
  }
  if(history.includes(userValue)){ // 입력값이 이미 입력한 값인 경우(한 게임 내에서)
      resultArea.textContent = "이미 입력한 값입니다."
      return;
  }

  chance--;
  chanceArea.textContent = `남은 기회: ${chance}`;
  console.log("남은 기회:", chance);
  history.push(userValue); // 입력값을 history 배열에 추가 (중복값 확인용)
  console.log("입력값", history);

  if(userValue > computerNum){ // 입력값이 지정값보다 큰 경우
      resultArea.textContent = "Down!";

  }else if(userValue < computerNum){ // 입력값이 지정값보다 작은 경우
      resultArea.textContent = "Up!";
  
  }else{
      resultArea.textContent = "정답!"; // 입력값과 지정값이 동일한 경우
      chanceArea.innerHTML = "Reset 버튼을 눌러주세요.";
      playButton.disabled = true;
      return;
  }

  if(chance == 0){ // 기회(chance)를 모두 소진한 경우, GO 버튼 비활성화(게임 중지)
      resultArea.textContent = "패배!";
      chanceArea.innerHTML = "Reset 버튼을 눌러주세요."
      playButton.disabled = true;
  }
}

// 초기화 (Reset 버튼 클릭 시)
function reset(){ 
  userNum.value = "";
  resultArea.textContent = "";
  chanceArea.innerHTML = "남은 기회: 5";
  randomNum();
  playButton.disabled = false; // GO 버튼 활성화
  chance = 5;
  history = []; // 배열 초기화
}