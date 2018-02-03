import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from "../actions/index";
import { bindActionCreators } from 'redux';

//bindActionCreators makes sure the action generated by Action Creator
//flows through all Reducers


//changing {Component} to Container
//Container is a React Component that has a direct connection
//to the State managed by Redux
//Containers are also called Smart Components
//connect turn component into container



class BookList extends Component {
    renderList() {

        //map over array of books
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book) }
                    className="list-group-item">
                    {book.title}
                    </li>
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
    //Puprose of this above function is to take app state as argument
    //Whatever is returned here will show up as props inside of BookList
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    //whenever selectBook is called, the result should be passed
    //to all of our reducers
    //anything returned from this function will end up as props
    //on the BookList container

    return bindActionCreators({ selectBook: selectBook }, dispatch);
    //dispatch function takes all Actions and passes to all Reducers
}

//Promote BookList from a component to a container - it needs to know
//about this new dispatch method, selectBook. Make it available as prop
export default connect(mapStateToProps, mapDispatchToProps) (BookList);
//connect takes mapStateToProps and component and returns container


//connecting React and Redux is done by a Library called ReactRedux
// "react-redux": "4.3.0",


//moved book_list.js from components to containers

//Whenever app state changes BookList component re-renders