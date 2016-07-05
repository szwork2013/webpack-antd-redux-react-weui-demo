import { combineReducers } from 'redux';
import counter from './counter.reducers';
import itemsdefinition from './itemsdefinition.reducers';
import breadcrumbitem from './breadcrumbitem.reducers';

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
  counter,
  itemsdefinition,
  breadcrumbitem
})

export default rootReducer