
//this file will contain all different Action Creators & Actions

export function selectBook(book) {
    //console.log('A book has been selected', book.title);
    return {
        //selectBook is an ActionCreator, it needs to return an action,
        // an object with a type property
        type: 'BOOK_SELECTED',
        payload: book
    };
}