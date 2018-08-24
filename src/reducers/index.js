
const todoes = (state = [], action) => {

    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    comment: action.comment,
                    time: action.time,
                }
            ];

        case 'REMOVE_TODO':
            console.log(action);

            var newState = state.filter((e) => e.id !== action.id);

            return newState;

        default:
            return state;
    }
}

export default todoes;