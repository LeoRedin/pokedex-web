const INITIAL_STATE = {
  isAuthenticated: false,
  userName: '',
}

//action : {type: 'LOGIN', payload: {username : 'Leonardo'}}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        userName: action.payload.username,
      }
    case 'LOGOUT':
      return {
        ...INITIAL_STATE,
      }
    default:
      return {
        ...INITIAL_STATE,
      }
  }
}

export {authReducer}
