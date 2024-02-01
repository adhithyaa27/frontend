const Batsman = document.querySelectorAll("#batsman")

links = [ "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sehwag.png",
"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sachin.png",
"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-gambhir.png",
"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-virat-kohli.png",
"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-dhoni.png",
"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-yuvraj.png",
"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-suresh-raina.jpg",
"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-harbhajan.jpg",
"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-zaheer-khan.jpg",
"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-munaf-patel.jpg",
"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sreeshanth.jpg"
]
function change(e){
    div = document.createElement("div")
    Batsman[e-1].append(div);
    div.setAttribute('id','profile')
    div.innerHTML = `<img src=${links[e-1]}>`;
}

