


const booklist=[
    {
        id: 1,
        autor: "Charles Dickens",
        title: "Oliver Twist"
    },
    {
        id: 2,
        autor: "William Shakespear",
        title: "Hamlet"
    }


];
// const searchField =document.children[0].children[1].children[1].children[1];
const searchField =document.getElementById("searchField");


// keydown, keyup
searchField.addEventListener("keyup", handlekeyPress);

function handlekeyPress(e){
    searchbooks(e.target.value);

}

function searchbooks(searchTerm){
    let filteredlist =[];
    for (let i=0; i< booklist.length; i++){
        const title = booklist[i].title.toLowerCase();
        
        if (title.indexOf(searchTerm.toLowerCase()) >=0){
    
            filteredlist.push(booklist[i]);
        }
    }
    renderbooklist(filteredlist);
}



function renderbooklist(booklist){
    /* element i html-lsitan visas/döljs beroende på listans innehåll */
    let html = `<ul class="book-list bg-white/70 rounded-md">`;
    for (let i =0; i < booklist.length; i++){
      html += `<li class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700">

                ${booklist[i].autor} - ${booklist[i].title}
                </li>`
       
    }             
    html += `</ul>`;
    
    // hur man använder css klasser och hämtar dem.
    const existingElement = document.querySelector(".book-list");
    console.log(existingElement);

    const root = document.getElementById("root");
    if(existingElement){
        root.removeChild(existingElement);
    }
    
    // const htmlElement = document.createElement("ul");
    // hur man kan skapa element med javascript
    root.insertAdjacentHTML("beforeend", html);

}
