let img = document.getElementById("img");
let list =document.getElementById("list")
img.addEventListener("click",()=>{
   list.innerText = "ابوه : عبدالله \n جده : عبدالمطلب \n عمه : ابوطالب \n مكان ولادته : مكة المكرمة \n مولده : 12 ربيع 1 عام الفيل \n امه : امينة بنت وهب"
})

img.addEventListener("dblclick",()=>{
  list.innerText = "";
})

