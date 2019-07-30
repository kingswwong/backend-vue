import request from '../../utils/request'

const prefixUrl = '/admin/parkinglots'



export function findAllParkingLotsCanDispatch(page){
  return request({
    url: `${prefixUrl}?page=${page}`,
    method: 'get',
  })
}

// export function updataParkingLot(data, id){
//   return request({
//     url: `${prefixUrl}/${id}`,
//     method: 'put',
//     data: data
//   })
// }


