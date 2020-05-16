import axios from 'axios'
/**
 *
 * @description：
 *
 */
// 获取用户信息
export const getUserInfo = () => axios.post('/getUserInfo')
