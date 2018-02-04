import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;


//Reducers are combined together inside rootReducer
//Reducers have keys such as 'books' and 'activeBook' above

//App state is formed by Reducers
//Reducers manipulate/change App State through Actions
