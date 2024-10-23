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
var t=0;

for(var i=0;i<l;i++)
    for(var j=0;j<l-1-i;j++)
        if(data[i].start>data[i+1].start){
            t=data[i].start;
            data[i].start=data[i+1].start;
            data[i+1].start=t;

            t=data[i].duration;
            data[i].duration=data[i+1].duration;
            data[i+1].duration=t;

            t=data[i].title;
            data[i].title=data[i+1].title;
            data[i+1].title=t;
        }


var h=0;
var t=0;
var h=0;
var flag=0;
for(var i=0;i<l;i++){
    var div = document.createElement("div");
    h=data[i].duration+"px";
    div.style.position="absolute"
    div.style.height=h;
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

// for(var i=0;i<l;i++){
//     var div1=document.createElement("div");
//     var div2=document.createElement("div");
//     h=data[i].duration+"px";
//     div1.style.height=h;
//     if(i+1<l){
//         h=data[i+1].start-(data[i].start+data[i].duration);
//         h+="px";
//     }
//     div2.style.height=h;
//     div1.style.background="red";
//     div2.style.background="white";
//     document.getElementById("main").appendChild(div1);
//     document.getElementById("main").appendChild(div2);
// }