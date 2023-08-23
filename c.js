var sc=document.getElementById("skill-container");
var bars=document.querySelectorAll(".skill-progress>div");
function initialise(){
    for(let bar of bars){
        bar.style.width=0+"%";
    }
}
initialise();
var animationdone=false;
window.addEventListener("scroll",check);
function fillbars(){
    for(let bar of bars){
        let dest=bar.getAttribute("data-value");
        let count=0;
        let id=setInterval(function(){
            if(count>=dest){
            	clearInterval(id);
                return;
        	}
            count++;
            bar.style.width=count+"%";
            
        },12);
    }
}
function check(){
    var coor=sc.getBoundingClientRect();
    if(animationdone==false&&coor.top<window.innerHeight){
        animationdone=true;
        fillbars();
 	}
    else if(coor.top>window.innerHeight){
        animationdone=false;
    }
}

var skill=document.querySelectorAll('.nav-menu a');

for(var i=0;i<skill.length;i++){
    skill[i].addEventListener("click",function(event){
        
		event.preventDefault();
    	var sectionid=this.textContent.trim().toLowerCase();
    	var section=document.getElementById(sectionid);
    	var id=setInterval(function(){
        	var dest=section.getBoundingClientRect();
        	if(dest.top<=0){
            	clearInterval(id);
            	return;
        	}
        	window.scrollBy(0,50);
    	},20);
    
	});
 
}

