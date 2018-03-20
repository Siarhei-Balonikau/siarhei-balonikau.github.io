export const changeField = (field, value) => {
  return {
    type: 'CHANGE_FIELD',
    field: field,
    value: value 
  }
}

export const clearForm = () => {
  return {
    type: 'CLEAR_FORM'
  }
}