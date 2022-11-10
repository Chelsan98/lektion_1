

const searchInput =null;
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
function handlekeyPress(input){
    searchbooks(input)

}

function searchbooks(searchterm){
    let filteredlist =[];
    for (let i=0; i< booklist.length; i++){
        const title = booklist[i].title.toLowerCase();
        

        if (title.indexOf(searchterm.toLowerCase()) >=0){
    
            filteredlist.push(booklist[i]);
        }
    }
    renderbooklist(filteredlist);
}

handlekeyPress("e");

function renderbooklist(list){
    /* element i html-lsitan visas/döljs beroende på listans innehåll */
    console.log(list)

}
