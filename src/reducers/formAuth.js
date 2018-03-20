const formAuth = (
  state = {
    login: '',
    pass: ''
  }, 
  action
) => {
  switch (action.type) {
    case 'CHANGE_FIELD':
      return Object.assign({}, state, 
        {
          [action.field]: action.value
        }
      );
    case 'CLEAR_FORM':
      return {
        login: '',
        pass: ''
      };
    default:
      return state;
  }
}

export default formAuth;