
// create card components for quiz
function Cards(items){
let jump=`Quiz?id=${items.id}`;
return `
<div class="col-lg-3 col-md-4 col-sm-6">
<div class="single-topic text-center mb-30">
    <div class="topic-img">
        <a herf="${jump}"><img src="${items.imgUrl}" alt=""></a>
        <div class="topic-content-box">
            <div class="topic-content">
                <h3><a href="${jump}">${items.name}</a></h3>
            </div>
        </div>
    </div>
</div>
</div>

`;
}
var CardHolder=document.getElementById("quizitems");
for(i=0;i<Topics.length;i++){
   // var ItemsCard;
    CardHolder.innerHTML+=Cards(Topics[i]);
   // CardHolder.appendChild(ItemsCard);
}