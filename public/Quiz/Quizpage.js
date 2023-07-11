
const idString=document.location.search;
const id=Number(idString[4]);
const product=Topics[id];
document.getElementById("ContentItem").innerHTML=` <!-- start Quiz button -->
<div class="start_btn"><button>Start Quiz</button></div>

<!-- Info Box -->
<div class="info_box">
  <div class="info-title"><span>Some Rules of this Quiz</span></div>
  <div class="info-list">
      <div class="info">1. You will have only <span>45 seconds</span> per each question.</div>
      <div class="info">2. Once you select your answer, it can't be undone.</div>
      <div class="info">3. You can't select any option once time goes off.</div>
      <div class="info">4. You can't exit from the Quiz while you're playing.</div>
      <div class="info">5. You'll get points on the basis of your correct answers.</div>
  </div>
  <div class="buttons">
      <button class="quit">Exit Quiz</button>
      <button class="restart">Continue</button>
  </div>
</div>

<!-- Quiz Box -->
<div class="quiz_box ">
  <header>
      <div class="title">${product.name}</div>
      <div class="timer">
          <div class="time_left_txt">Time Left</div>
          <div class="timer_sec">45</div>
      </div>
      <div class="time_line"></div>
  </header>
  <section>
      <div class="que_text">
          <!-- Here I've inserted question from JavaScript -->
      </div>
      <div class="option_list">
          <!-- Here I've inserted options from JavaScript -->
      </div>
  </section>

  <!-- footer of Quiz Box -->
  <footer class="d-flex justify-content-between">
      <div class="total_que">
          <!-- Here I've inserted Question Count Number from JavaScript -->
      </div>
      <button class="skip_btn">Skip Que</button>
      <button class="next_btn">Next Que</button>
      
  </footer>
</div>

<!-- Result Box -->
<div class="result_box">
  <div class="icon" style="font-size: 24px;">
      <i class="fas fa-crown" ></i>
  </div>
  <div class="complete_text">You've completed the Quiz!</div>
  <div class="score_text">
      <!-- Here I've inserted Score Result from JavaScript -->
  </div>
  <div class="buttons">
      <button class="restart">Replay Quiz</button>
      <button class="quit">Show Result</button>
  </div>
</div>


`;
function QuizApp(a,b,c){

}
//document.getElementsById("Pages").src=`"QuizJs/quiz1questions.js"`;
var s = document.createElement( 'script' );
s.setAttribute( 'src', product.srcUrl);// Dynamicaly insert js file
document.body.appendChild( s );