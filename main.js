nose_x=0;
nose_y=0;
function preload()
{}
function setup()
{
    canvas = createCanvas(500,400);
    canvas.center();
    rat = createCapture(VIDEO);
    rat.size(500,400);
    rat.hide();
    poseNet = ml5.poseNet(rat, modelLoaded);
    poseNet.on('pose', gotPoses) ;

}

function modelLoaded()
{
    console.log("poseNet model is loaded");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        
         nose_x= results[0].pose.nose.x-10;
         nose_y= results[0].pose.nose.y-10;

            console.log("nose x ="+ results[0].pose.nose.x);
            console.log("nose y ="+ results[0].pose.nose.y);
        
    }
}



function draw()
{

   image(rat,0,0,500,400);


}


function take_snapshot()
{
    save("mustache.png");
}