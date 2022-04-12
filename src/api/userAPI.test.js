import MockAdapter from 'axios-mock-adapter';
import { create } from 'apisauce';
import { getUserInfo } from './userAPI';

describe('Test userAPI', () => {
  const api = create({
    baseURL: 'https://www.googleapis.com/oauth2/v1'
  });
  const mock = new MockAdapter(api.axiosInstance);
  const expectedResult = {
    'id': '11111111111111111',
    'email': 'test@gmail.com',
    'verified_email': true,
    'name': 'Tan Vo',
    'given_name': 'Tan',
    'family_name': 'Vo',
    'gender': 'male',
    'locale': 'en'
  };
  mock.onGet('/userinfo').reply(200, expectedResult);
  const accessToken = 'ya29.Gl0_BkcAttg72ZkcL9V';

  it('should getUserInformation', async () => {

    const response = await getUserInfo(accessToken, api);
    expect(response.data).toEqual(expectedResult);
  });
});