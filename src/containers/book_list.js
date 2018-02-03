import React, {Component} from 'react';
import { connect } from 'react-redux';

//changing {Component} to Container
//Container is a React Component that has a direct connection
//to the State managed by Redux
//Containers are also called Smart Components



class BookList extends Component {
    renderList() {

        //map over array of books
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });

    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //Whatever is returned here will show up as props inside of BookList
    return {
        books: state.books
    };
}

//Whenever app state changes BookList component re-renders

export default connect(mapStateToProps) (BookList);


//connecting React and Redux is done by a Library called ReactRedux
// "react-redux": "4.3.0",


//moved book_list.js from components to containers