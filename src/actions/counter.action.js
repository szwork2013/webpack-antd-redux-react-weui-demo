import {
  INCREMENT_COUNTER,
} from '../constants/counter.constans';
//导出加一的方法
export function increment(counter) {
  return {
    type: INCREMENT_COUNTER,
    counter:counter
  }
}