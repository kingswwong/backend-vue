import request from '../../utils/request'

const prefixUrl = '/admin/users'

export function findAllParkingBoy(){
  return request({
    url: `${prefixUrl}`,
    method: 'get'
  })
}

// export function createUser(user) {
//   return request({
//     url: `${prefixUrl}`,
//     method: 'post',
//     data: user
//   })
// }
//
// export function getUserById(id){
//   return request({
//     url: `${prefixUrl}/${id}`,
//     method: 'get'
//   })
// }
//
// export function updateUser(user, id) {
//   return request({
//     url: `${prefixUrl}/${id}`,
//     method: 'put',
//     data: user
//   })
// }
//
// export function lockUser(id){
//   return request({
//     url: `${prefixUrl}/${id}/lock`,
//     method: 'put'
//   })
// }
//
//
// export function deleteUser(id){
//   return request({
//     url: `${prefixUrl}/${id}`,
//     method: 'delete'
//   })
// }

