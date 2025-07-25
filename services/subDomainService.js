import { customAxios } from '@/lib/apiUtils';

const handleError = (error, fallbackMessage = 'Something went wrong') => {
    const message = error?.response?.data?.message || fallbackMessage;
    throw new Error(message);
};

const subDomainServices = {
    checkDomainExists: async (post) => {
        try {
            const { data } = await customAxios.post('api/booking/checkDomainExist', post)
            return data
        } catch (error) {
            handleError(error, 'Failed to check domain existence');
        }
    },
}

export default subDomainServices
