
const UserAnswer=JSON.parse(window.localStorage.getItem("SaveScore"))||[];
const ShowRl=document.getElementById("results");
let useropt=['a','b','c','d',"Not Answered"];
       // document.write( "<h1>Thank You!</h1>");
       // document.write("<p>Now,your data will send via email.</p>");
       // document.write("<h3>Hera is your Data:</h3>");
        let tickIconTag = '<i class="fa fa-check" style="font-size:16px;color:green;margin-left:10px"></i>';
        let crossIconTag = '<i style="font-size:16px;color:red;margin-left:10px;font-weight:bold;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg></i>';
     // insert all question with user response in show result page
     for(i=0;i<questions.length;i++){
    var ProductCard=showQuetions1(questions[i],i);
   // document.write(`<div class="cont">${ProductCard}</div>`);
   ShowRl.innerHTML+=ProductCard;
    option_list = document.querySelector(`.option_list${i}`);
    option = option_list.querySelectorAll(`.option${i}`);
    
    for(j=0;j<4;j++){
     if(questions[i].answer==questions[i].options[j]){
   option[j].insertAdjacentHTML("beforeend", tickIconTag);
        
 }
 
     else
     option[j].insertAdjacentHTML("beforeend", crossIconTag);
   }
  
    }
   // Print only result area
   function printPageArea(areaID){
    var printContent = document.getElementById(areaID).innerHTML;
    var originalContent = document.body.innerHTML;
    document.body.innerHTML = printContent;
    window.print();
    document.body.innerHTML = originalContent;
}
   function showQuetions1(que,i){ 
  
    return `<span class="ques${i}"style="   font-size: 18px;
    font-weight: bold;">${que.numb}.${"   "}${que.question}</span>
    <br/>
    <div class="option_list${i}">
    <div class="option${i}"style="  margin-left: 8px;
        font-size: 16px;" ><span>a.  ${que.options[0]}</span></div>
    <div class="option${i}"style="  margin-left: 8px;
        font-size: 16px;" ><span>b.  ${que.options[1]}</span></div>
    <div class="option${i}"style="  margin-left: 8px;
        font-size: 16px;" ><span>c.  ${que.options[2]}</span></div>
    <div class="option${i}"style="  margin-left: 8px;
        font-size: 16px;" ><span>d.  ${que.options[3]}</span></div>
    <div class="AnsBox"><p >Choosen Option:<span>${useropt[UserAnswer[i].ans]}<span></p></div>
    </div>
    `;
}
//<p>CorrectAns:${que.answer} </p>


