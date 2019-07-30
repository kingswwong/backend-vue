import request from '../utils/request'
const prefix = 'users'

export function register (data, code) {
  return request({
    url: prefix + '/register?code=' + code,
    method: 'post',
    data: data
  })
}

export function login (data) {
  return request({
    url: prefix + '/login',
    method: 'post',
    data: data
  })
}
export function changeMessage (data) {
  return request({
    url: `${prefix}/${data.id}`,
    method: 'put',
    data: data
  })
}

export function sendSms (phone) {
  return request({
    url: prefix + '/sms/?phone=' + phone,
    method: 'get'
  })
}
