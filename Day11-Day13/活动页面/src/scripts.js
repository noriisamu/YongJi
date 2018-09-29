
window.onload=function(){
    var loading = document.getElementById("loading-page");
    var index_page=document.getElementsByClassName("index-page")[0];
    var index_btn=document.getElementById("index-btn");
    var alert_page=document.getElementById("alert-page");
    var sex_btn=document.getElementsByClassName("sex_button");
    var insurance_btn=document.getElementsByClassName("insurance_button");
 
    // // // 定时器模拟用户加载时间
    // // setTimeout(function(){
    // //     loading.style.display="none";
    // //     index_page.style.display="block";
    // // },1000)

    index_btn.onclick=function(){
        index_page.style.display="none";
        alert_page.style.display="block";
        alert_page.classList.add("fadeIn");
    }
    var img_flag = document.getElementById("load-image");
    if(img_flag.complete){
        loading.style.display="none";
        index_page.style.display="block";
        setTimeout(function(){
        index_btn.classList.remove("fadeInUp");
        index_btn.classList.add("pulse");
        },2500)
    }else {
        alert("图片加载失败");
    }

     

    for(let i=0;i<sex_btn.length;i++){
        sex_btn[i].onclick=function(){
            for(var j=0;j<sex_btn.length;j++){
                sex_btn[j].classList.remove("button--selected");
            }
            sex_btn[i].classList.add("button--selected");
        }
    }

    for(let i=0;i<insurance_btn.length;i++){
        insurance_btn[i].onclick=function(){
            for(var j=0;j<insurance_btn.length;j++){
                insurance_btn[j].classList.remove("button--selected");
            }
            insurance_btn[i].classList.add("button--selected");
        }
    }

    
 
}