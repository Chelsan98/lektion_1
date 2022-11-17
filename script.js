


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
console.log(searchField);

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



function renderbooklist(list){
    /* element i html-lsitan visas/döljs beroende på listans innehåll */
    console.log(list)

}
