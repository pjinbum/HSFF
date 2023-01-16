let slidebtn1 = document.querySelector('.btn1');
let slidebtn2 = document.querySelector('.btn2');
let slidebtn3 = document.querySelector('.btn3');
console.log(slidebtn1, slidebtn2, slidebtn3);

slidebtn1.addEventListener('click', function(){
  // slidebtn1을 클릭했을 때 실행할 함수 코드 작성
  // 첫번째 사진이 보여야함
  document.querySelector('.slide-list').style.transform = 'translateX(0)' 
})

slidebtn2.addEventListener('click', function(){
  // slidebtn2를 클릭 했을 때 두번째 사진이 보여야함
  document.querySelector('.slide-list').style.transform = 'translateX(-100vw)' 
})

slidebtn3.addEventListener('click', function() {
  // slidebtn3을 클릭 했을 때 세번째 사진 -200vw
  document.querySelector('.slide-list').style.transform = 'translateX(-200vw)' 
})