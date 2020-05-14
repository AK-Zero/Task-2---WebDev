let canvas = document.getElementById("gamescreen");
let ctx = canvas.getContext("2d");
let app = 2*Math.PI/180;
let app1 = 3*Math.PI/180;
let app2 = 2.5*Math.PI/180;
let center = {};
let angles1 = {};
let angles2 = {};
let angles11 = {};
let angles21 = {};
let angles12 = {};
let angles22 = {};
let radius = {};
let obj = {};
let stat=5;
let stat1;
let stat2;
let tim;
let tom;
let score;
let min;
let liny;
let sound2 = new Audio("snd.mp3");
let sound = new Audio("gameover.mp3");
let hscore = null;
let counter;
let stat4;
let pu;
if(hscore!=null){
document.getElementById("hsc").innerHTML = "High Score : " + localStorage.getItem("hscore1");
}
function faller(){
    if(tom){
    obj.y+=stat-2; 
    object();
    if(obj.y>870){
        tom=false;
        gameover();
    }
    if(obj.y<=liny-40 && !tim){
        window.requestAnimationFrame(faller);
    }
    else if(!tim){
        for(i=0;i<3;i++){
            object();
        }
    }
    
}
}
function jumper(){
if(tom){
    object();
    obj.y-=stat-1;
    stat1++;
    if(stat1<14){
    window.requestAnimationFrame(jumper);
    }
    else{
        stat1=0;
        tim=false;
        for(i=0;i<4;i++){
            object();
        }
        faller();
    }
}
}

document.addEventListener('click' , function
click(){
    sound2.play();
    tim=true;
    if(tom){
        stat1=0;
window.requestAnimationFrame(jumper);
}
} );

function startline(){
ctx.beginPath();
ctx.strokeStyle = '#8c2cec';
ctx.lineWidth = 7;
ctx.moveTo(270,liny);
ctx.lineTo(330,liny);
ctx.stroke();
}

function object(){
    
    ctx.beginPath();
    ctx.strokeStyle = '#57d6e7';
    ctx.lineWidth = 0;
    ctx.arc(obj.x,obj.y,5,0, 2*Math.PI,false);
    ctx.stroke();
    ctx.fillStyle = '#57d6e7';
    ctx.fill();
    }

function move_obs(){
    if(stat2<16){
        center.y2+=0.25;
        center.y1+=0.25;
        center.y+=0.25;
        liny+=0.25;
        obj.y+=0.25;
        stat2++;
        window.requestAnimationFrame(move_obs);
    }
    else{
        stat2=0;
    }
}
function powerup(){
    ctx.beginPath();
    ctx.strokeStyle = '#57d6e7';
    ctx.lineWidth = 10;
    ctx.arc(center.x,pu,10,0, 2*Math.PI,false);
    ctx.stroke();
    ctx.fillStyle = '#f00';
    ctx.fill();
}

function animate_obs(){
if(tom){
    if(obj.y<pu+5&&obj.y>pu-5){
        score++;
        document.getElementById("sc").innerHTML = "Score : " + score.toString();
        counter++;
        let hsc = localStorage.getItem("hscore1");
        if(hsc<score){
            hscore = score;
            localStorage.setItem("hscore1",hscore.toString());
            document.getElementById("hsc").innerHTML = "High Score : " + hscore.toString();
        }
        if(stat4<3){
            stat4++;
        }
        else{
            stat4=1;
        }
    }
    if((obj.y>center.y+(radius.r1-5)&&obj.y<center.y+(radius.r1+5))){
        for(o=1;o*2*Math.PI<angles2.a1;o++);
        o--;
        let w1 = angles2.a1 - o*2*Math.PI;
        for(o=1;o*2*Math.PI<angles2.a2;o++);
        o--;
        let w2 = angles2.a2 - o*2*Math.PI; 
        if((w1>=0&&w1<=0.5*Math.PI&&w2>=Math.PI&&w2<=1.5*Math.PI)||(w1>=1.5*Math.PI&&w1<=2*Math.PI&&w2>=0.5*Math.PI&&w2<=Math.PI)){
           tom=false;
           gameover();
        }
    }
    if(obj.y<center.y-(radius.r1-5)&&obj.y>center.y-(radius.r1+5)){
 if(counter!=0){
        counter=0;
    }
        for(o=1;o*2*Math.PI<angles1.a1;o++);
        o--;
        let w1 = angles1.a1 - o*2*Math.PI;
        for(o=1;o*2*Math.PI<angles1.a2;o++);
        o--;
        let w2 = angles1.a2 - o*2*Math.PI; 
        if((w1>=0&&w1<=0.5*Math.PI&&w2>=Math.PI&&w2<=1.5*Math.PI)||(w1>=1.5*Math.PI&&w1<=2*Math.PI&&w2>=0.5*Math.PI&&w2<=Math.PI)){
            tom=false;
            gameover();
         }
        }
    if((obj.y>center.y1+(radius.r2-5)&&obj.y<center.y1+(radius.r2+5))){
            for(o=1;o*-2*Math.PI>angles21.a1;o++);
            let w1 = angles21.a1 + o*2*Math.PI;
            for(o=1;o*-2*Math.PI>angles21.a2;o++);
            let w2 = angles21.a2 + o*2*Math.PI; 
            if((w1>=0&&w1<=0.5*Math.PI&&w2>=Math.PI&&w2<=1.5*Math.PI)||(w1>=1.5*Math.PI&&w1<=2*Math.PI&&w2>=0.5*Math.PI&&w2<=Math.PI)){
               tom=false;
               gameover();
            }
        }
    if(obj.y<center.y1-(radius.r2-5)&&obj.y>center.y1-(radius.r2+5)){
        
        if(counter!=0){
            counter=0;
        }
            for(o=1;o*-2*Math.PI>angles11.a1;o++);
            let w1 = angles11.a1 + o*2*Math.PI;
            for(o=1;o*-2*Math.PI>angles11.a2;o++);
            let w2 = angles11.a2 + o*2*Math.PI; 
            if((w1>=0&&w1<=0.5*Math.PI&&w2>=Math.PI&&w2<=1.5*Math.PI)||(w1>=1.5*Math.PI&&w1<=2*Math.PI&&w2>=0.5*Math.PI&&w2<=Math.PI)){
                tom=false;
                gameover();
             }
            }

  if((obj.y>center.y2+(radius.r3-5)&&obj.y<center.y2+(radius.r3+5))){
                for(o=1;o*2*Math.PI<angles22.a1;o++);
                o--;
                let w1 = angles22.a1 - o*2*Math.PI;
                for(o=1;o*2*Math.PI<angles22.a2;o++);
                o--;
                let w2 = angles22.a2 - o*2*Math.PI; 
                if((w1>=0&&w1<=0.5*Math.PI&&w2>=Math.PI&&w2<=1.5*Math.PI)||(w1>=1.5*Math.PI&&w1<=2*Math.PI&&w2>=0.5*Math.PI&&w2<=Math.PI)){
                   tom=false;
                   gameover();
                }
            }
    if(obj.y<center.y2-(radius.r3-5)&&obj.y>center.y2-(radius.r3+5)){
        if(counter!=0){
            counter=0;
        }
                for(o=1;o*2*Math.PI<angles12.a1;o++);
                o--;
                let w1 = angles12.a1 - o*2*Math.PI;
                for(o=1;o*2*Math.PI<angles12.a2;o++);
                o--;
                let w2 = angles12.a2 - o*2*Math.PI; 
                if((w1>=0&&w1<=0.5*Math.PI&&w2>=Math.PI&&w2<=1.5*Math.PI)||(w1>=1.5*Math.PI&&w1<=2*Math.PI&&w2>=0.5*Math.PI&&w2<=Math.PI)){
                    tom=false;
                    gameover();
                 }
                }
    if(obj.y<490 && obj.y<min){
        move_obs();
        min=obj.y;
    }
    if(obj.y<20){
        move_obs();
    }

    if(center.y-(radius.r1)>680){
        center.y=-60;
        radius.r1=radius.r2;
        move_obs();
    }
    if(center.y1-(radius.r2)>680){
        center.y1=-60;
        radius.r2=radius.r3;
        move_obs();
    }
    if(center.y2-(radius.r3)>680){
        center.y2=-60;
        radius.r3=radius.r1;
        move_obs();
    }

    if(stat4==1){
        pu = center.y1+140;
    }
    else if(stat4==2){
        pu = center.y2+140;
    }
    else if(stat4==3){
        pu = center.y+140;
        
    }
    if(pu>600){
        pu=-600;
    }
    ctx.clearRect(0,0,600,950);
    ctx.beginPath();
    ctx.strokeStyle = '#57d6e7';
    ctx.lineWidth = 13;
    ctx.arc(center.x,center.y,radius.r1,angles1.a1,angles1.a2);
    ctx.stroke();


    ctx.beginPath();
    ctx.strokeStyle = '#f00';
    ctx.arc(center.x,center.y,radius.r1,angles2.a1,angles2.a2);
    ctx.stroke();
    
    
    ctx.beginPath();
    ctx.strokeStyle = '#57d6e7';
    ctx.arc(center.x1,center.y1,radius.r2,angles11.a1,angles11.a2);
    ctx.stroke();


    ctx.beginPath();
    ctx.strokeStyle = '#f00';
    ctx.arc(center.x1,center.y1,radius.r2,angles21.a1,angles21.a2);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = '#57d6e7';
    ctx.arc(center.x2,center.y2,radius.r3,angles12.a1,angles12.a2);
    ctx.stroke();


    ctx.beginPath();
    ctx.strokeStyle = '#f00';
    ctx.arc(center.x2,center.y2,radius.r3,angles22.a1,angles22.a2);
    ctx.stroke();

    angles1.a1+=app;
    angles1.a2+=app;
    angles2.a1+=app;
    angles2.a2+=app;
    
    angles11.a1-=app1;
    angles11.a2-=app1;
    angles21.a1-=app1;
    angles21.a2-=app1;

    angles12.a1+=app2;
    angles12.a2+=app2;
    angles22.a1+=app2;
    angles22.a2+=app2;

    window.requestAnimationFrame(animate_obs);
    object();
    startline();
    powerup();
}
}
function startgame(){
    sound.pause();
    sound.currentTime=0;
document.getElementById("st").style.display="none";
center.x=300;
center.y=550;
center.x1=300;
center.y1=240;
center.x2=300;
center.y2=-70;
angles1.a1=0.5*Math.PI;
angles1.a2=1.5*Math.PI;
angles2.a1=1.5*Math.PI;
angles2.a2=0.5*Math.PI;
angles11.a1=0.5*Math.PI;
angles11.a2=1.5*Math.PI;
angles21.a1=1.5*Math.PI;
angles21.a2=0.5*Math.PI;
angles12.a1=0.5*Math.PI;
angles12.a2=1.5*Math.PI;
angles22.a1=1.5*Math.PI;
angles22.a2=0.5*Math.PI;
radius.r1=70+Math.floor(Math.random()*30);
radius.r2=70+Math.floor(Math.random()*30);
radius.r3=70+Math.floor(Math.random()*30);
tim = false;
tom=true;
obj.x=300;
obj.y=750;
score=0;
counter=0;
min=750;
liny=790;
stat1=0;
stat2=0;
stat4=1;
hscore=Number(localStorage.getItem("hscore1"));
if(hscore != null){
document.getElementById("hsc").innerHTML = "High Score : " + hscore.toString();
}
document.getElementById("sc").innerHTML = "Score : " + score.toString();
animate_obs();
}

function gameover(){
    ctx.clearRect(0,0,600,950);
    document.getElementById("st").style.display="";
    document.getElementById("st").innerHTML="Click Here To Restart Game!!!";
    sound.play();
    if(hscore){
        if(hscore<score){
            hscore = score;
            localStorage.setItem("hscore1",hscore.toString());
            document.getElementById("hsc").innerHTML = "High Score : " + hscore.toString();
        }
    }
    else{
        localStorage.setItem("hscore1",score.toString());
        document.getElementById("hsc").innerHTML = "High Score : " + score.toString();
    }
}