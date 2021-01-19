import httpService from './http.service';

export const orderService = {
    query,
    getById,
    remove,
    save,
}

function query() {
    return httpService.get('order')
}

function getById(id) {
    return httpService.get(`order/${id}`)
}

function remove(id) {
    return httpService.delete(`order/${id}`)
}

function save(order) {
    const savedOrder = (order._id) ? update(order) : add(order);
    return savedOrder;
}

function update(order) {
    return httpService.put(`order/${order._id}`, order)
}

function add(order) {
    console.log('posting order')
    return httpService.post(`order`, order)
}