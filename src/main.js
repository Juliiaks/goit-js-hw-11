import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css"
import { apiPixabay } from "./js/pixabay-api";
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";





const form = document.querySelector(".form");
const searchButton = document.querySelector("button");

form.addEventListener("submit", handleSubmit);


function handleSubmit(event) {
    event.preventDefault();

    const input = document.querySelector("#pictures");
    const searchWord = input.value.trim();
    
    if (searchWord === "") {
        console.log("empty");
          iziToast.show({
                    message: `Sorry, there are no images matching your search query. Please try again!`,
                    messageColor: "#fff",
                    position: "topRight",
                    backgroundColor: "#ef4040",
                    progressBar: false,
                    close: false,
                    timeout: 5000,
            });
       return;
    };
    // showLoader();
    apiPixabay(searchWord);
    // hideLoader();
    form.reset()  
}

// function showLoader() {
//     const loader = document.querySelector(".loader").classList.add("active");
//     return loader;
        
//     }

// function hideLoader() {
//     const loader = document.querySelector(".loader").classList.remove("active")
//     return loader;
// }