import axios from 'axios';

const normalizeId = id => id.padStart(9, '0');

export default class LikudClient {
    constructor({baseUrl = 'http://62.219.214.75/memberswebapi/api/', timeout = 0} = {}) {
        this._client = axios.create({
            baseURL: baseUrl,
            timeout
        });
    }

    async getAccountDetails({id}) {
        try {
            const response = await this._client.post('utilities/AccountDetails', `Id=${normalizeId(id)}`);
            return response.data;
        } catch (e) {
            if (e.code === 'ECONNABORTED') {
                throw { type: 'timeout' };
            } else {
                throw { type: 'other' };
            }
        }
    }
};
