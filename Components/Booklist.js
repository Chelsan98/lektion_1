const BookList = (bookList) => {
    console.log(bookList);
   

    let html = `<ul class="book-list bg-white/70 rounded-md">`;
    for (let i =0; i < bookList.length; i++){
      html +=  BookListItem(bookList[i]);
     }             
    html += `</ul>`;

    return html;

}