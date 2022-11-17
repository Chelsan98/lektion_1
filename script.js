


const booklist=[
    {
        id: 1,
        author: "Charles Dickens",
        title: "Oliver Twist"
    },
    {
        id: 2,
        author: "William Shakespear",
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



function renderbooklist(bookList){
    /* element i html-lsitan visas/döljs beroende på listans innehåll */

    // hur man använder css klasser och hämtar dem.
    const existingElement = document.querySelector(".book-list");
    console.log(existingElement)

    const root = document.getElementById("root");
    if(existingElement){
        root.removeChild(existingElement);
    }
    if(bookList.length>0){
        root.insertAdjacentHTML("beforeend", BookList(bookList));
    }

    
    //hur man kan skapa element med javascri
    

}
