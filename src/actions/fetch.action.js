import {
    GET_ACCOUNTS_SUCCESS,POST_ACCOUNTS
} from '../constants/fetch.constants';
import fetch from 'isomorphic-fetch';
import config from '../config/config';
import {openMessageAction} from './message.action';
export function createAccount(data) {
    return dispatch =>
        fetch(config.baseUrl+'/accounts', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `session-token ${Store.getState().auth.token}`
            }
        }).then(res => res.json()).then(res => {
            dispatch(createAccountSuccess(res));
            return res;
        }).catch(res => {
            dispatch(openMessageAction(res.error, 'error'));
        });
}

export function getAccounts() {
    return dispatch => {
        (async() => {
            try {
                let response = await fetch(`${config.baseUrl}/accounts`, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `session-token ${Store.getState().auth.token}`
                    }
                });
                let data = await response.json();
                if (response.status === 200) {
                    dispatch(getAccountsSuccess(data));
                } else {
                    dispatch(openMessageAction(data.error, 'error'));
                }
            } catch (e) {
                console.error('Fetch error:', e);
            }
        })();
    }
}

export function createAccountSuccess(data) {
    return {
        type: POST_ACCOUNTS,
        payload: {
            data: data
        }
    }
}

export function getAccountsSuccess(data) {
    return {
        type: GET_ACCOUNTS_SUCCESS,
        payload: {
            data: data
        }
    }
}
/*
*
*
* 调用方式
*
* 在component中
*----------------------------------------------------------------
*
formSubmit(data) {
 this.props.dispatch(createAccount(data)).then(res => {
 this.context.router.push('accounts');
 });
 }

 render() {
 return (
 <div>
 <AccountForm formSubmit={this.formSubmit} />
 </div>
 );
 }
*
* ----------------------------------------------------------------
*
*componentDidMount() {
 this.props.dispatch(getAccounts()).then(res => {});
 }
*
*
*
* */