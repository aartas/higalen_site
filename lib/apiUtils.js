import axios from 'axios';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { getApiUrl } from './apiUrls';

// Extend dayjs with timezone support
dayjs.extend(utc);
dayjs.extend(timezone);

// Get base API URL
const apiBaseURL = getApiUrl();

// Create Axios instance
const customAxios = axios.create({ baseURL: apiBaseURL });
// Request Interceptor: Add user's timezone
customAxios.interceptors.request.use(
  (config) => {
    const userTimeZone = dayjs.tz.guess();
    if (userTimeZone) {
      config.headers['X-User-Timezone'] = userTimeZone;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Pass successful responses, catch errors
customAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    // You can log or transform error here if needed
    return Promise.reject(error);
  }
);

export { customAxios };
