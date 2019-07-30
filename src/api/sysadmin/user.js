import request from '../../utils/request'

const prefixUrl = '/sysadmin/users'

export function findAllUserByStatus(role, page){
  return request({
    url: `${prefixUrl}/${role}?page=${page}`,
    method: 'get'
  })
}

export function getUserById(id){
  return request({
    url: '',
    method: 'get'
  })
}

export function updateUser(user, id) {
  return request({
    url: `/${id}`,
    method: 'put',
    data: user
  })
}

export function lockUser(id){
  return request({
    url: `/${id}/lock`,
    method: 'lock'
  })
}
