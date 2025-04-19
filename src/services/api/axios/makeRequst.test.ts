import {vi, describe, it, expect, Mock} from 'vitest';
import {makeRequest} from './makeRequest'; // Adjust path if needed
import {axiosInstance} from './instance';

vi.mock('./instance');

interface MockResponseData {
  message: string;
}

describe('makeRequest function', () => {
  it('should return the parsed response data on successful request', async () => {
    const mockResponseData: MockResponseData = {message: 'Success!'};
    (axiosInstance.request as Mock).mockResolvedValueOnce({
      data: mockResponseData,
    });

    const responseData = await makeRequest<MockResponseData>({}); // Use appropriate config here

    expect(responseData).toEqual(mockResponseData);
  });

  it('should throw an error on failed request', async () => {
    const mockError = new Error('rejected promise');
    (axiosInstance.request as Mock).mockRejectedValueOnce(mockError);

    await expect(makeRequest<MockResponseData>({})).rejects.toThrow(
      'rejected promise'
    );
  });
});
