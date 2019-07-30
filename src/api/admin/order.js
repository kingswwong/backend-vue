import request from '../../utils/request'
const prefix = '/admin/orders'

export function getByOrderId (id) {
  return request({
    url: `${prefix}/${id}`,
    method: 'get'
  })
}
