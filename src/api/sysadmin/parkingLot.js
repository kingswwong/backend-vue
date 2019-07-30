import request from '../../utils/request'

const prefixUrl = '/sysadmin/parkinglots'

export function createParkingLot(data) {
  return request({
    url: `${prefixUrl}`,
    method: 'post',
    data: data
  })
}

export function findAllParkingLot(page){
  return request({
    url: `${prefixUrl}?page=${page}`,
    method: 'get',
  })
}

export function updataParkingLot(data, id){
  return request({
    url: `${prefixUrl}/${id}`,
    method: 'put',
    data: data
  })
}

export function getParkingLotById(id){
  return request({
    url: `${prefixUrl}/${id}`,
    method: 'get'
  })
}

export function deleteParkingLotById(id){
  return request({
    url: `${prefixUrl}/${id}`,
    method: 'delete'
  })
}
