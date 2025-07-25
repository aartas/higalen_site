import config from './config'

export const getApiUrl = () => {
  const environment = process.env.NODE_ENV || 'development'
  return config[environment].apiUrl
}
