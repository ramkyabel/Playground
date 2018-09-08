export default const reducer = (action) => {
  switch (action.type) {
    case 'UPDATE_COUNT':
      return {
        ...state,
        count: action.payload + 1
      }
      break;
    default:
      return {...state}

  }
}
