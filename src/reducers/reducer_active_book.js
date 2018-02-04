
//State argument below is not an application state, only the state
//that this reducer is responsible for
export default function (state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
        return action.payload;
    }
    return state;
}

//Redux is in charge of managing app state
// and state is a single plain Javascript object

//APP STATE IS DIFFERENT THAN SINGLE COMPONENT STATE
