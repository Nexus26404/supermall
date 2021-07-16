import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutations-types.js'

export default {
    addCart(context, payload) {
        // 1. payLoad 新添加的商品
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

        // 2. 判断 oldProduct
        if (oldProduct) {
            // oldProduct.count += 1;
            context.commit(ADD_COUNTER, oldProduct);
        } else {
            payload.count = 1;
            // state.cartList.push(payload);
            context.commit(ADD_TO_CART, payload);
        }
    }
}