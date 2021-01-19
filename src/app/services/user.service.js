import httpService from './http.service';

export const userService = {
    query,
    getById,
    remove,
    save,
}

function query() {
    return httpService.get('user')
}

function getById(id) {
    return httpService.get(`user/${id}`)
}

function remove(id) {
    return httpService.delete(`user/${id}`)
}

function save(user) {
    const savedUser = (user._id) ? update(user) : add(user);
    return savedUser;
}

function update(user) {
    return httpService.put(`user/${user._id}`, user)
}

function add(user) {
    console.log('posting user')
    return httpService.post(`user`, user)
}