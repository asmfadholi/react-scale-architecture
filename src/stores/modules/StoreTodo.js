const pre = 'StoreTodo'

const initState = {
  list: [],
  detail: null
}

export default function StoreTodo(state = initState, action) {
    switch (action.type) {
      case pre + 'LIST_TODO':
        return { ...state, list: action.data }
      case pre + 'DETAIL_TODO':
          return { ...state, detail: action.data }
      default:
        return state
    }
  }