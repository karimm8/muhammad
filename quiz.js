let question = [
    {
        qText:"أين ولد رسول الله محمد صلى الله عليه وسلم",
        aOption:[
             {answerText:"دمام",isCorrecte:false},
             {answerText:"مكة المكرمة",isCorrecte:true},
             {answerText:"مدينة منورة",isCorrecte:false},
             {answerText:"الرياض",isCorrecte:false},
        ],
    },
    {
       qText:"ما هو نسب محمد عليه الصلاة والسلام ",
       aOption:[
             {answerText:"الى نوح بن ابراهيم عليهما السلام",isCorrecte:false},
             {answerText:"الى حمزة بن ابراهيم عليهما السلام",isCorrecte:false},
             {answerText:"الى احمد بن ابراهيم عليهما السلام",isCorrecte:false},
             {answerText:"إلى إسماعيل بن إبراهيم عليهما السلام ",isCorrecte:true},
       ],
    },
    {
        qText:"من هي الزوجة الأولى للرسول صلى الله عليه وسلم",
        aOption:[
            {answerText:"خديجة بنت خويلد رضي الله عنها",isCorrecte:true},
            {answerText:"امينة بنت وهب رضي الله عنها",isCorrecte:false},
            {answerText:"ثويبة",isCorrecte:false},
            {answerText:"حليمة السعدية",isCorrecte:false},
        ],
    },
    {
        qText:"كم عدد مرضعات محمد صلى الله عليه وسلم",
        aOption:[
            {answerText:1,isCorrecte:false},
            {answerText:2,isCorrecte:true},
            {answerText:3,isCorrecte:false},
            {answerText:4,isCorrecte:false},
        ],
    },
    {
        qText:"ماهو لقب محمد صلى الله عليه وسلم",
        aOption:[
            {answerText:"الصادق الامين",isCorrecte:true},
            {answerText:"الصادق",isCorrecte:false},
            {answerText:"الامين",isCorrecte:false},
            {answerText:"الامين الصادق",isCorrecte:false},
        ],
    },
]

let counter = 0;
let score = 0;

dis = () => {
    const quiz = document.getElementById("quiz");
    const numb = question[counter];
    if(counter < question.length){
        const ele = document.createElement("div");
        ele.innerHTML = `<h1 style="font-size:32px;">سؤال ${counter+1} من ${question.length}</h1>
        <h1 style="font-size:22px;margin-bottom:60px;margin-top:20px;">${numb.qText}</h1>
        `;
        const answer = document.createElement("div");
        numb.aOption.forEach((opt,index)=>{
            const btn = document.createElement("button");
            btn.innerHTML = opt.answerText;
            btn.classList.add("active");
            btn.addEventListener("click",()=>checkAnswer(index));
            answer.appendChild(btn);
        });
        quiz.innerHTML = "";
        quiz.appendChild(ele);
        quiz.appendChild(answer);
    }else {
        quiz.innerHTML = `<h1 style="font-size:32px;">النتيجة هي ${score * 4}/${question.length * 4}</h1>
        <h2 style="margin-bottom:40px;font-size:32px;">${score * 4 > 10 ? "حسن ":"سيء" }</h2>
        <a href="arbre.html" >الرجوع</a>
        `;
    }
   
}
checkAnswer = (selectIndex) => {
    const numb = question[counter];
    if(numb.aOption[selectIndex].isCorrecte){
        score++;
    }
     counter++;
     dis();
}

dis();




