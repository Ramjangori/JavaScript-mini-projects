const container = document.querySelector(".container");
const searchField = document.querySelector(".search-container input");
const searchButton = document.querySelector(".search-container button");
const seeMoreBtn = document.querySelector("#see-more");
const imageContainer = document.querySelector(".image-container");
const resultmsj = document.querySelector(".result-msg");


let keyword = '';
let page =1

async function searchImage(){
    keyword = searchField.value;
    if(keyword==''){
        resultmsj.innerHTML="Please search image by name";
    }
    else{
         const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=56fO6Uq_dNjEk51Sc75Xu8pR9YztJtSHCbv1wOVKL_0&per_page=15`;

    const responce = await fetch(url);
    const data = await responce.json();
    const {results} = data;
    resultmsj.innerHTML=`Showing result : ${keyword} images`
    let imgList = '';
    results.forEach((result,index)=>{
        imgList+=` <div class="image">
        <a href="${result.links.html}">
            <img src="${result.urls.small}" alt="">
            </a>
        </div>`
    })
    imageContainer.innerHTML += imgList;
    seeMoreBtn.style.display="block";


}
    }
   
searchButton.addEventListener("click",()=>{
     page = 1;                       // new search → page reset
    imageContainer.innerHTML = ""; 
    
searchImage();

})

seeMoreBtn.addEventListener("click",()=>{
    page++;
    searchImage();

})