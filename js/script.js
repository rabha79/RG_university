let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

menu.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

async function fetchData(){
    try{
        let result = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await result.json()
        console.log(data);
    }catch(error){
        console.log(error);
    }finally{
        console.log("test");
    }
}
fetchData()