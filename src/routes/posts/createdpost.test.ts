import axios from 'axios';
import exp from 'constants';
import { response } from 'express';

const endpoint = 'http://localhost:3000/posts/';

describe('create a post', () => {
  it('it should successfully create a new post', async () => {
    const testData = {
      authorId: '043ccd91-2554-4c13-b1ed-62f7d81cdd84',
      title: 'my new post3',
      content: 'nunc ac viverra justo, et aliquam nibh',
      summary: 'small summary for nonsense pos 3'
    };

    const Response = await axios.post(endpoint, testData, {
        headers: {
            'content-type: application/json'
        }
    });

    const responseData = response.data;

    expect(responsedata.authorId).toEqual(testData.authorId);
    expect(responsedata.title).toEqual(testData.title;
    expect(responsedata.content).toEqual(testData.content);
    expect(responsedata.summary).toEqual(testData.summary);
    return;
  });
});
