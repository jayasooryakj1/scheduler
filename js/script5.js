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

for(var i=0;i<l;i++)
    for(var j=0;j<l-1-i;j++)
        if(data[i].start>data[i+1].start){
            t=data[i];
            data[i]=data[i+1];
            data[i+1]=t;
        }

// for(var i=0;i<l;i++){
//     hr[i]=s+(Math.floor(data[i].start/60));
//     min[i]=data[i].start%60;
// }

// for(i=0;i<l;i++){
//     start[i]=hr[i]+"."+min[i];
// }
var t=0;
var h=0;
var flag=0;
for(var i=0;i<l;i++){
    var div = document.createElement("div");
    h=data[i].duration+"px";
    div.style.position="absolute"
    div.style.height=h;
    if(i==0)
        div.style.width="1257px";
    if(i>0&&i<l-1)
    if(data[i+1].start-data[i].start<data[i].duration || data[i].start-data[i-1].start<data[i].duration)
        if(flag==0){
            div.style.width="628px";
            flag=1;
        }
        else{
            div.style.width="628px";
            div.style.marginLeft="628px";
            div.style.zIndex="1";
            flag=0;
        }
    else
        div.style.width="1257px";
    div.style.background="rgb(225, 236, 244)";
    div.style.border="1px solid rgb(218, 218, 218)";
    div.style.fontSize="10px";
    t=data[i].start+"px"
    div.style.top=t;
    div.textContent=data[i].title;
    document.getElementById("main").appendChild(div);
}