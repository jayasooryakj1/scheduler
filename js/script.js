var data = [{
    start: 0,
    duration: 15,
    title: "Exercise"
}, {
    start: 25,
    duration: 30,
    title: "Travel to work"
}, {
    start: 30,
    duration: 30,
    title: "Plan day"
}, {
    start: 60,
    duration: 15,
    title: "Review yesterday's commits"
}, {
    start: 100,
    duration: 15,
    title: "Code review"
}, {
    start: 180,
    duration: 90,
    title: "Have lunch with John"
}, {
    start: 360,
    duration: 30,
    title: "Skype call"
}, {
    start: 370,
    duration: 45,
    title: "Follow up with designer"
}, {
    start: 400,
    duration: 30,
    title: "Push up branch"
}
];


var l = data.length;
var s=8;
var hr=[];
var min=[];
var start=[];
var end=[];

for(var i=0;i<l;i++){
    hr[i]=s+(Math.floor(data[i].start/60));
    min[i]=data[i].start%60;
}

for(i=0;i<l;i++){
    start[i]=hr[i]+"."+min[i];
}
var t=0;
var h=0;
var flag=0;
for(var i=0;i<l;i++){
    var div = document.createElement("div");
    h=data[i].duration+"px";
    div.style.position="absolute"
    div.style.height=h;
    // if(flag==0){
    //     div.style.width="628px";
    //     flag=1;
    // }
    // else{
    //     div.style.width="628px";
    //     div.style.marginLeft="628px";
    //     div.style.zIndex="1";
    //     flag=0;
    // }
    div.style.width="1257px";
    div.style.background="rgb(225, 236, 244)";
    div.style.border="1px solid rgb(218, 218, 218)";
    div.style.fontSize="10px";
    t=data[i].start+"px"
    div.style.top=t;
    div.textContent=data[i].title;
    if(i+1<l)
        if(data[i+1].start-data[i].start<data[i].duration){
            div.style.marginLeft="628px";
            div.style.width="628px";
            div.style.zIndex="1";
        }

    document.getElementById("main").appendChild(div);
}





































//gap

// for(var i=0;i<l;i++){
//     if((data[i].start+data[i].duration)<data[i+1].start){
//         var div = document.createElement("div");
//         h=(data[i+1].start-(data[i].start+data[i].duration))+"px";
//         div.style.height=h;
//         div.style.background="white";
//         document.getElementById("main").appendChild(div);
//     }
//     else{
//         var div = document.createElement("div");
//         h=data[i].duration+"px";
//         div.style.height=h;
//         div.style.background="red";
//         document.getElementById("main").appendChild(div);
//         break;
//     }
//     var div = document.createElement("div");
//         h=data[i].duration+"px";
//         div.style.height=h;
//         div.style.background="red";
//         document.getElementById("main").appendChild(div);
// }






// var h=0;
// for(var i=0;i<l;i++){
//     var div = document.createElement("div");
//     var br = document.createElement("br");
//     h=data[i].duration+"px";
//     div.style.height=h;
//     div.style.background="red";
//     div.textContent=data[i].title;
//     document.getElementById("main").appendChild(div);
//     document.getElementById("main").appendChild(br);
// // }


// var h=0;
// for(var i=0;i<l;i++){
//     var div = document.createElement("div");
//     var br = document.createElement("br");
//     h=data[i].duration+"px";
//     div.style.height=h;
//     div.style.background="red";
//     div.textContent=data[i].title;
//     document.getElementById("main").appendChild(div);
//     if(data[i].start+data[i].duration<data[i].start){
//         var div = document.createElement("div");
//         h=data[i+1].start-(data[i].start+data[i].duration)
//         h+="px";
//         div.style.height=h;
//         div.style.background="white";
//         document.getElementById("main").appendChild(div);
//     }
// }





