const login = (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
          name: action.name
      }
    default:
      return state
  }
}

export default login

export const userLogin = name => ({
  type: 'USER_LOGIN',
  // id: nextTodoId++,
  name
})
