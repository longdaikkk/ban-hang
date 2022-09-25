import axios from "axios";

const listApi = () => {
    return axios({
        url: 'https://63252ea34cd1a2834c3a774b.mockapi.io/shirt',
        method: 'GET',
    })
}
const detailApi = (id) => {
    return axios({
        url: `https://63252ea34cd1a2834c3a774b.mockapi.io/shirt/${id}`,
        method: 'GET',
    })
}

const addItemApi = (data) => {
    return axios({
        url: `https://63252ea34cd1a2834c3a774b.mockapi.io/shirt`,
        method: 'POST',
        data,
    })
}

const deleteApi = (id) => {
    return axios({
        url: `https://63252ea34cd1a2834c3a774b.mockapi.io/shirt/${id}`,
        method: 'DELETE',
    })
}

const fetchProvinceApi = () => {
    return axios({
        url: `https://online-gateway.ghn.vn/shiip/public-api/master-data/province`,
        method: 'GET',
        headers: {
            Token: 'c369ff73-3962-11ed-8636-7617f3863de9'
        }
    })
}

const fetchDistrictApi = (id) => {
    return axios({
        url: `https://online-gateway.ghn.vn/shiip/public-api/master-data/district`,
        method: 'GET',
        headers: {
            Token: 'c369ff73-3962-11ed-8636-7617f3863de9',
        },
        data: {
            "province_id": id
        }
    })
}

const addDonHang = (data) => {
    return axios({
        url: `https://63252ea34cd1a2834c3a774b.mockapi.io/donhang`,
        method: 'POST',
        data,
    })
}

const fetchDonHang = () => {
    return axios({
        url: `https://63252ea34cd1a2834c3a774b.mockapi.io/donhang`,
        method: 'GET',
    })
}

const deleteDonHang = (id) => {
    return axios({
        url: `https://63252ea34cd1a2834c3a774b.mockapi.io/donhang/${id}`,
        method: 'DELETE',
    })
}

const fetchDonHangDaXuLy = () => {
    return axios({
        url: `https://63252ea34cd1a2834c3a774b.mockapi.io/donhangdaxuly`,
        method: 'GET',
    })
}

const addDonHangDaXuLy = (data) => {
    return axios({
        url: `https://63252ea34cd1a2834c3a774b.mockapi.io/donhangdaxuly`,
        method: 'POST',
        data,
    })
}

const deleteDonHangDaXuLy = (id) => {
    return axios({
        url: `https://63252ea34cd1a2834c3a774b.mockapi.io/donhangdaxuly/${id}`,
        method: 'DELETE',
    })
}

const listTrouserApi = () => {
    return axios({
        url: 'https://63252ea34cd1a2834c3a774b.mockapi.io/list',
        method: 'GET',
    })
}
const detailTrouserApi = (id) => {
    return axios({
        url: `https://63252ea34cd1a2834c3a774b.mockapi.io/list/${id}`,
        method: 'GET',
    })
}

const addItemTrouserApi = (data) => {
    return axios({
        url: `https://63252ea34cd1a2834c3a774b.mockapi.io/list`,
        method: 'POST',
        data,
    })
}

const deleteTrouserApi = (id) => {
    return axios({
        url: `https://63252ea34cd1a2834c3a774b.mockapi.io/list/${id}`,
        method: 'DELETE',
    })
}

export {listTrouserApi, detailTrouserApi, addItemTrouserApi, deleteTrouserApi, listApi, deleteDonHangDaXuLy, deleteDonHang, addDonHangDaXuLy, fetchDonHangDaXuLy, fetchDonHang, detailApi, addItemApi, deleteApi, fetchProvinceApi, fetchDistrictApi, addDonHang }