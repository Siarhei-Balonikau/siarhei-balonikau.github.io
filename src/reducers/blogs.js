const blogs = (
  state = {
    isFetching: false,
    filter: 'None',
    items: []
  }, 
  action
) => {
  switch (action.type) {
    case 'REQUEST_BLOGS':
      return Object.assign({}, state, 
        {
          isFetching: true
        }
      );
    case 'RECEIVE_BLOGS':
      return Object.assign({}, state,
        {
          isFetching: false,
          items: state.items.concat(action.data.blogs)
        }
      );
    case 'SET_FILTER':
      return Object.assign({}, state,
        {
          filter: action.author
        }
      );
    case 'ADD_BLOG':
    console.log(action.blog);
      return Object.assign({}, state,
        {
          items: state.items.concat(action.blog)
        }
      );
    default:
      return state;
  }
}

export default blogs;