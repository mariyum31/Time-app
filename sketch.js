var fetchTime;
var Image;
var database;
var time;

function preload() {
    Image = loadImage("clockImg.png");
}
function setup() {
    createCanvas(1000,500);

    database = firebase.database();
}
function draw() {
    background(Image);

    fetchTime = database.ref("Time");
    fetchTime.on("value",function(data){

    time = data.val();
    })
    if(time >= 12) {
        textSize(20);
        fill("blue");
        text("Time:"+time%12+"PM",475,280);
        database.ref("/").update({

            Time:hour()
        })

    }else if(time==0) {
        textSize(20);
        fill("blue");
        text("Time:12AM",475,280);
        database.ref("/").update({

            Time:hour()
        })
        
    }else{
        textSize(20);
        fill("blue");
        text("Time:"+time+"AM",475,280);
        database.ref("/").update({

            Time:hour()
        })
        
    }
}
