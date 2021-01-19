import httpService from './http.service';

export const gigService = {
    query,
    getById,
    remove,
    save,
}

function query() {
    return httpService.get('gig')
}

function getById(id) {
    return httpService.get(`gig/${id}`)
}

function remove(id) {
    return httpService.delete(`gig/${id}`)
}

function save(gig) {
    const savedGig = (gig._id) ? update(gig) : add(gig);
    return savedGig;
}

function update(gig) {
    return httpService.put(`gig/${gig._id}`, gig)
}

function add(gig) {
    console.log('posting gig')
    return httpService.post(`gig`, gig)
}