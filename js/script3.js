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

let start;
let duration=0;
let overlapParent=[];
let overlapChild=[];
let num=[];
let div=document.createElement("div");
let flag=1;

    for( let i=0;i<data.length-1;i++)
    {
        
            
            let diff=data[i+1].start-data[i].start;
            if(data[i].duration>diff)
            {
                overlapParent.push(i);
                overlapChild.push(i+1);
                console.log(overlapChild);
                console.log(overlapParent)
            }
            else{
                num.push(i);
            }
    }

    for( let i=0;i<data.length;i++)
    {
            let div=document.createElement("div");

            if(overlapChild.includes(i) && overlapChild.includes(i-1))
            {
                div.style.left='52%';
                div.style.width='45%';
            }
            else if(overlapChild.includes(i) && overlapParent.includes(i))
            {
                div.style.width='45%';
            }
            else if(overlapParent.includes(i) )
            {
                div.style.left='52%';
                div.style.width='45%';
            }
            else if(overlapChild.includes(i) )
            {
                div.style.width='45%';
            }
            
            duration=data[i].duration + "px";
            start=data[i].start + "px";
            console.log(duration,start)
            div.style.background="rgb(225, 236, 244)";
            div.style.width="200px";
            div.style.fontSize="12px";
            div.style.height=duration ;
            div.style.top=start ;
            div.innerHTML=data[i].title;
            div.classList.add("outer")
            document.getElementById("main").appendChild(div);
            console.log(num)

            
    }
    
   
   

