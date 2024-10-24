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
var s=8;
var hr=[];
var min=[];
var time=[];
var check=[], t, h;
var l = data.length;
for(var i=0;i<l;i++)
    check[i]=1;
for(var i=0;i<l;i++)
    for(var j=0;j<l-1-i;j++)
        if(data[j].start>data[j+1].start){
            t=data[j];
            data[j]=data[j+1];
            data[j+1]=t;
        }
for(var i=0;i<l-1;i++){
    if(data[i].start+data[i].duration>data[i+1].start){
        check[i]=2;
        check[i+1]=2;
    }
}
for(var i=0;i<l;i++){
    hr[i]=s+(Math.floor(data[i].start/60));
    if(hr[i]>12)
        hr[i]-=12;
    min[i]=data[i].start%60;
        if(min[i]==0)
            min[i]="00";
}
for(i=0;i<l;i++)
    time[i]=hr[i]+":"+min[i];
for(i=0;i<l;i++)
    console.log(time[i]);
var flag=1;
for(var i=0;i<l;i++){
    var div = document.createElement("div");
    div.style.background="rgb(225, 236, 244)";
    h=data[i].duration;
    h+="px";
    div.style.height=h;
    div.style.position="absolute";
    div.textContent=time[i]+" - "+data[i].title;
    div.style.fontSize="10px";
    div.classList.add("madeDiv");
    t=data[i].start;
    t+="px";
    div.style.top=t;
    if(check[i]==1){
        div.style.width="1257px";
        flag=1;
    }
    else{
        div.style.width="626px";
        if(flag==1){
            div.style.marginLeft="628px";
            flag=0;
        }
        else
            flag=1;
    }
    document.getElementById("main").appendChild(div);
}