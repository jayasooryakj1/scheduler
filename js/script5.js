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
var l=data.length;
for(var i=0;i<l;i++){
    div1=document.createElement("div");
    h=data[i].duration+"px";
    div1.style.position="absolute"
    div1.style.height=h;
    div1.style.background="rgb(225, 236, 244)";
    document.getElementById("main").appendChild(div1);
}