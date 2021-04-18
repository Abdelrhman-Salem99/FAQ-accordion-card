let q_div =document.querySelectorAll(".q-div");
let arrow =document.querySelectorAll(".arrow");
let theAnswer =document.querySelectorAll(".theAnswer");
let theQuestion =document.querySelectorAll(".theQuestion");

let conter=0;
answerDisplayNone();

for(let i=0;i<q_div.length;i++){
    
    q_div[i].addEventListener('click',()=>{
        
        answerDisplayNone();
       
        theAnswer[i].style.setProperty('display','block');
        doubleClick(theAnswer[i])
        
      

        arrow[i].style.setProperty('transform','rotate(180deg)');
        arrow[i].style.setProperty('transition','all 1s');
        arrowRotAndQuestionWeight();

    })
}

function answerDisplayNone(){
    for(let i=0;i<theAnswer.length;i++){
            theAnswer[i].style.setProperty('display','none');
            
            
    }
}
function doubleClick(ans){
   
        if(ans.style.display=="block" && conter!=0)
        {
            ans.style.setProperty('display','none');
            conter=0;
        }
        else{
            conter=1;
        }
    
    console.log(conter)
}

function arrowRotAndQuestionWeight(){
    for(let i=0;i<theAnswer.length;i++){

        if(theAnswer[i].style.display=="none")
        {
            arrow[i].style.setProperty('transform','rotate(0deg)');
            arrow[i].style.setProperty('transition','all 1s');
            theQuestion[i].style.setProperty('opacity','0.5');
    
        }
        else{
            theQuestion[i].style.setProperty('opacity','1');
        }
    }
     
}

