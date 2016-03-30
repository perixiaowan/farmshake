

var SHAKE_THRESHOLD = 3000;
var last_update = 0;
var random = 0;
var x = y = z = last_x = last_y = last_z = 0;

if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', deviceMotionHandler, false);
} else {
    alert('非常抱歉，您的手机不支持摇一摇的功能！');
}

var int=self.setInterval("removeClassShake()",2000);
var count = 0;
function removeClassShake(){
   
    // $("#fmp1-img").removeClass("fmp1");
    $("#shake").removeClass("shake-slow");
    $("#farm_introduction").removeClass("fmpg1");
    /*audio.pause(); */
}
 
var audio2 = document.getElementById("music2");
function funx(){
   
    if(audio2!==null){
        audio2.play();
    }
}

function funy(tmp){
    
    $("#farm_introduction").addClass("fmpg1").attr("src","images/"+tmp+".png");
    $("#farm_introduction").attr("name",tmp);

}


function deviceMotionHandler(eventData) {
 
/*    shake();*/
    var acceleration = eventData.accelerationIncludingGravity;  
    var curTime = new Date().getTime(); 
    
   
    random = Math.ceil(Math.random()*7); //取1~7随机整数
    if ((curTime - last_update) > 100) {
        var diffTime = curTime - last_update;  
        last_update = curTime;
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;
        var speed = Math.abs(x + y + z - last_x - last_y - last_z) / diffTime * 10000;
        
        var audio1 = document.getElementById("music1");
        if (speed > SHAKE_THRESHOLD) {
            /*shake();*/
            audio1.play();
            $("#shake").addClass("shake-slow");
            
            /*if(audio1!==null){
                alert('播放声音啦！！！');
               
            }*/
           /* alert(audio1.pause());*/
            /*alert('audio'+audio);*/
            
            var dataname = "farm_"+random;
            var indexfarm = "images/"+dataname+".png";
            /*$("#fmp1-img").addClass("fmp1");*/
          /* var audio2 = document.getElementById("music2");
            if(audio2!==null){
                audio2.play();
            }*/
            
            setTimeout('funx()',900);
            setTimeout(funy(dataname),3000);
            /*$("#farm_introduction").addClass("fmpg1").attr("src",indexfarm);*/
           
            $('.tips2').removeClass('hide');
            $('.tips3').removeClass('hide');
            $('.fmb1').addClass('hide');
            

           
            
            // /*if(audio2!==null){
            //    /* alert('播放声音啦！！！');*/
            //    if(audio1)
            //     audio2.play();
            // }*/
           
           
            
        }  
        /*$("#shake-slow").removeClass("shake-slow");*/
        last_x = x;
        last_y = y;
        last_z = z;

    }
} 