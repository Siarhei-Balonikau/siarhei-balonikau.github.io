const blogs = (
  state = {
    title: '',
    text: '',
    date: '',
    author: ''
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
        title: '',
        text: '',
        date: '',
        author: ''
      };
    default:
      return state;
  }
}

export default blogs;