const cat_dictionary = [
    ["12l","https://cdn2.thecatapi.com/images/12l.jpg",364,341],
    ["44f","https://cdn2.thecatapi.com/images/44f.jpg",900,600],
    ["9jb","https://cdn2.thecatapi.com/images/9jb.jpg",506,337],
    ["a3j","https://cdn2.thecatapi.com/images/a3j.jpg",650,433],
    ["b2f","https://cdn2.thecatapi.com/images/b2f.jpg",500,375],
    ["eco","https://cdn2.thecatapi.com/images/eco.jpg",600,450],
    ["MTUyMzY4Mw","https://cdn2.thecatapi.com/images/MTUyMzY4Mw.jpg",640,427],
    ["YyLhgyzy5","https://cdn2.thecatapi.com/images/YyLhgyzy5.jpg",1280,959],
    ["KWVenr3Pq","https://cdn2.thecatapi.com/images/KWVenr3Pq.jpg",1080,1253],
    ["OHmkotmj9","https://cdn2.thecatapi.com/images/OHmkotmj9.jpg",960,540]
]


class CatPhoto{
    constructor(id, url , width, height){
        this.id = id;
        this.url = url;
        this.width = width;
        this.height = height;
    }
}

cat1 = new CatPhoto();
cat2 = new CatPhoto();
cat3 = new CatPhoto();
cat4 = new CatPhoto();
cat5 = new CatPhoto();
cat6 = new CatPhoto();
cat7 = new CatPhoto();
cat8 = new CatPhoto();
cat9 = new CatPhoto();
cat10 = new CatPhoto();

const catClassList = [cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8, cat9, cat10]

for (let i = 0; i < catClassList.length; i++){
    catClassList[i].id = cat_dictionary[i][0];
    catClassList[i].url = cat_dictionary[i][1];
    catClassList[i].width = cat_dictionary[i][2];
    catClassList[i].height = cat_dictionary[i][3];
}

{/* <div id="target">
<div class="vh-100 bg-secondary d-flex justify-content-center align-items-center"> //bgDiv
    <div class="container bg-white p-5 m-5"> // containerDiv
        <div class="row"> // rowDiv
            <div class="col-12 col-md-8 d-flex align-items-center"> // slideDiv
                <div class="main deplete-animation d-flex justify-content-center data-index="1"> //mainDiv
                    <i class="fa fa-solid fa-heart fa-10x"></i>
                </div>
                <div class="extra expand-animation d-flex justify-content-center" data-index="2"> //extraDiv
                    <i class="fa fa-solid fa-eye fa-10x" data-index="2"></i>
                </div>
            </div>
            <div class="col-12 col-md-4 text-center"> //btnDiv
                <h3 class="">heart</h3> // idH3
                <h3 class="">$10</h3> // widthH3
                <p class="">fa fa-solid fa-heart</p> // p
                <button class="btn btn-secondary col-3 m-1">1</button> //btn
                <button class="btn btn-secondary col-3 m-1">2</button>
                <button class="btn btn-secondary col-3 m-1">3</button>
                <button class="btn btn-secondary col-3 m-1">4</button>
                <button class="btn btn-secondary col-3 m-1">5</button>
                <button class="btn btn-secondary col-3 m-1">6</button>
                <button class="btn btn-secondary col-3 m-1">7</button>
                <button class="btn btn-secondary col-3 m-1">8</button>
                <button class="btn btn-secondary col-3 m-1">9</button>
            </div>
        </div>
    </div>
</div>
</div> */}

let bgDiv = document.createElement("div");
let containerDiv = document.createElement("div");
let rowDiv = document.createElement("div");
let slideDiv = document.createElement("div");
let mainDiv = document.createElement("div");
let extraDiv = document.createElement("div");
let btnDiv = document.createElement("div");

let idH3 = document.createElement("h3");
let widthH3 = document.createElement("h3");
let heightH3 = document.createElement("h3");
let p = document.createElement("p");

let mainImg = document.createElement("img");
let extraImg = document.createElement("img");

mainDiv.id = "main";
extraDiv.id = "extra";
btnDiv.id = "btn";

bgDiv.classList.add("vh-100", "bg-secondary", "d-flex", "justify-content-center", "align-items-center");
containerDiv.classList.add("container", "bg-white", "p-5", "m-5");
rowDiv.classList.add("row");
slideDiv.classList.add("col-12", "col-md-8", "d-flex", "align-items-center");
mainDiv.classList.add("main", "d-flex", "justify-content-center");
extraDiv.classList.add("extra", "d-flex", "justify-content-center");
btnDiv.classList.add("col-12", "col-md-4", "text-center");
mainImg.classList.add("imgfit", "col-10");
extraImg.classList.add("imgfit", "col-10");

btnDiv.append(idH3);
btnDiv.append(widthH3);
btnDiv.append(heightH3);
btnDiv.append(p);
makeBtnHtml(catClassList.length, btnDiv);

mainDiv.append(mainImg);
extraDiv.append(extraImg);

rowDiv.append(slideDiv);
rowDiv.append(btnDiv);
containerDiv.append(rowDiv);
bgDiv.append(containerDiv);

document.getElementById("target").append(bgDiv);

mainDiv.setAttribute("data-index", "0");

function sliderJump(num){
    let index = parseInt(mainDiv.getAttribute("data-index"));

    let currentImg = ""
    if (index > 0) currentImg = catClassList[index].url;

    let nextIndex = num;
    let nextImg = catClassList[nextIndex].url;

    let animationType = "";
    if (nextIndex >= index) animationType = "right";
    else if (nextIndex < index) animationType = "left";

    mainDiv.setAttribute("data-index", `${nextIndex}`);

    idH3.innerHTML = "cat id: " + catClassList[index].id;
    widthH3.innerHTML = "width: " + catClassList[index].width;
    heightH3.innerHTML = "height: " + catClassList[index].height;
    animation(currentImg, nextImg, animationType);

}

function animation(currentImg, nextImg, animationType){
    mainDiv.classList.add("deplete-animation");
    mainImg.src = "";
    mainImg.src = currentImg;

    extraDiv.classList.add("expand-animation");
    extraImg.src = "";
    extraImg.src = nextImg;

    slideDiv.innerHTML = "";

    if (animationType === "right") {
        slideDiv.append(extraDiv);
        slideDiv.append(mainDiv);
    }
    else if (animationType === "left") {
        slideDiv.append(mainDiv);
        slideDiv.append(extraDiv);
    }
}

function makeBtnHtml(num, parentDiv){
    for (let i = 0; i < num; i++){
        let btn = document.createElement("button");
        btn.innerHTML = i+1;
        btn.classList.add("btn", "btn-secondary", "col-3", "m-1")
        parentDiv.append(btn);
    }
}

function addToBtnEvent(){
    let btnList = btnDiv.querySelectorAll(".btn")
    for (let i = 0; i < btnList.length; i++){
        btnList[i].addEventListener("click", function(){
            sliderJump(i);
        });
    }
}

addToBtnEvent();













