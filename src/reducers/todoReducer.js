import {
    LIST_MODIFY,
    TOGGLE_CHECKED
} from '../constants/actionTypes';
import initialState from './initialState';

export default function savedReducer(state = initialState.todo, action) {
    switch (action.type) {
        case LIST_MODIFY:
          return {
            ...state,
            todo: [... state.todo, action.todo]
          };


        case TOGGLE_CHECKED:
            return {
            ...state,
            todo: state.todo.map(x =>
                    (x.index === action.todo.index )?
                        {...x, checked: !x.checked} : x
                    )
        };

        default:
            return state;
    }
}
