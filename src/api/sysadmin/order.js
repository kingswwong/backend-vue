import request from '../../utils/request'

const prefixUrl = '/sysadmin/orders'


export function findAllOrder(page){
  return request({
    url: `${prefixUrl}/all/${page}`,
    method: 'get',
  })
}
