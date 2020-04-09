import Api from '../../services/index'
import { NotificationManager } from 'react-notifications';

const pre = 'StoreTodo'

export default {
    storeListTodo(data) {
        return {
            type: pre + "LIST_TODO",
            data
        };
    },

    storeDetailTodo(data) {
        return {
            type: pre + "DETAIL_TODO",
            data
        };
    },

    getListTodo() {
        return async (dispatch) => {
            try {
                const res = await Api.listTodo()
                dispatch(this.storeListTodo(res.data));
            } catch (err) {
                NotificationManager.error('Error', 'Please check your connection');
                throw err
            }
        }
    },

    addTodo(req) {
        return async (dispatch) => {
            try {
                await Api.addTodo(req)
                dispatch(this.getListTodo());
                NotificationManager.success('Success', req.description + ' have been added');
            } catch (err) {
                NotificationManager.error('Error', 'Please check your connection');
                throw err
            }
        }
    },

    detailTodo(req) {
        return async (dispatch) => {
            try {
                const res = await Api.detailTodo(req)
                dispatch(this.storeDetailTodo(res.data));
            } catch (err) {
                NotificationManager.error('Error', 'Please check your connection');
                throw err
            }
        }
    },

    editTodo(req) {
        return async (dispatch) => {
            try {
                await Api.editTodo(req)
                dispatch(this.getListTodo());
                NotificationManager.success('Success', 'Todo list have been edited');
            } catch (err) {
                NotificationManager.error('Error', 'Please check your connection');
                throw err
            }
        }
    },

    deleteTodo(req) {
        return async (dispatch) => {
            try {
                const res = await Api.deleteTodo(req)
                dispatch(this.getListTodo());
                NotificationManager.success('Success', res.data.description + ' have been deleted');
            } catch (err) {
                NotificationManager.error('Error', 'Please check your connection');
                throw err
            }
        }
    }

}