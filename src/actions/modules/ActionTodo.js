import Api from '../../services/index'

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
                throw err
            }
        }
    },

    addTodo(req) {
        return async (dispatch) => {
            try {
                await Api.addTodo(req)
                dispatch(this.getListTodo());
            } catch (err) {
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
                throw err
            }
        }
    },

    editTodo(req) {
        return async (dispatch) => {
            try {
                await Api.editTodo(req)
                dispatch(this.getListTodo());
            } catch (err) {
                throw err
            }
        }
    },

    deleteTodo(req) {
        return async (dispatch) => {
            try {
                await Api.deleteTodo(req)
                dispatch(this.getListTodo());
            } catch (err) {
                throw err
            }
        }
    }

}