import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { searchWord } from "../main";

export function apiPixabay(searchWord) {
const API_KEY = "43264950-7d4cd6be2017577f15438949e";
const params = new URLSearchParams({
    keys: API_KEY,
    q: searchWord,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
});

    fetch(`https://pixabay.com/api?${params}`)
        .then(response => {
            if (!response.ok) {
                iziToast.show({
                    message: `Sorry, there are no images matching your search query. Please try again!`,
                    messageColor: "#fff",
                    position: "topRight",
                    backgroundColor: "#ef4040",
                    progressBar: false,
                    close: false,
                    timeout: 5000,
                });
            }
            return response.json()
        })
        .then(data => { console.log(data) })
        .catch(error => { console.log("catch", error); });
   
}