Webcam.set({
    height: 350,
    width: 350,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

    function take_snapshot(){
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
        });
    }

    console.log("ml5.version", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/QTxJ9k7Hi/model.json", modelLoaded);

function modelLoaded(){
    console.log("ml5 is initialized");
}

function predict(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        result = results[0].label;

        console.log(results);
        document.getElementById("info_head").innerHTML = "Lego clone trooper recognized is "+results[0].label+", ";

        if("Airborne Trooper"==result){
            document.getElementById("info_body").innerHTML = "A trooper from the 212th Battalion which is highly skilled with plenty of details. This trooper specializes in Aeiral assualts.";
        }

        if("Bomb Squad Trooper"==result){
            document.getElementById("info_body").innerHTML = "These trooper were phase 1 specialists used to disarm explosives from the enemy.";
        }

        if("501st Trooper"==result){
            document.getElementById("info_body").innerHTML = "The most popular and best troopers out of the whole republic army! These trooper served under General Anakin Skywalker, a vey well known jedi.";
        }

        if("501st Jet Trooper"==result){
            document.getElementById("info_body").innerHTML = "Part of the great force derving under General Skywalker, these trooper were equiped with jetpacks and were ready for reaching outposts high. Also, reaching targets higher than usuall.";
        }

        if("41st Kashyyyk Trooper"==result){
            document.getElementById("info_body").innerHTML = "Camouflaged troopers which took place in the battle of Kashyyyk. These colors helped them keep hidden in jungle outposts.";
        }

        if("322nd Trooper"==result){
            document.getElementById("info_body").innerHTML = "This army is half as strong because they were divided from the 501st company. Ashoka Tano, Anikan's padawan with her own army.";
        }

        if("41st Elite Corps Trooper"==result){
            document.getElementById("info_body").innerHTML = "These were the elite! Elite Corps Troopers dived into the action of the battle of Kashyyyk. The carried out crucial parts for the victory of this battle.";
        }
    }
}