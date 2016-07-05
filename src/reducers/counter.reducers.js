import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/counter.constans'

//reducer其实也是个方法而已,参数是state和action,返回值是新的state
export default function counter(state ={counter:10}, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state , counter:action.counter }
    case DECREMENT_COUNTER:
      return { counter:state.counter+1 }
    default:
      return state
  }
}
