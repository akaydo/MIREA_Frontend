const wrap = document.querySelector(".wrap");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const searchInput = document.querySelector("input");


searchBtn.onclick =()=>{
    wrap.classList.add("active");
    searchBtn.classList.add("active");
    searchInput.classList.add("active");
    cancelBtn.classList.add("active");
    searchInput.focus();
}

cancelBtn.onclick =()=>{
    wrap.classList.remove("active");
    searchBtn.classList.remove("active");
    searchInput.classList.remove("active");
    cancelBtn.classList.remove("active");
    searchInput.value = "";
}