import { IPost, IPosts } from '../types/types';

const url = 'https://dev.codeleap.co.uk/careers/';

export async function postData(body: IPost): Promise<{ response: boolean }> {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return { response: response.ok };
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('Unexpected error: ', error);
    }
    return { response: false };
  }
}

export async function getData(
  paginationUrl?: string,
): Promise<{ response: boolean; data: IPosts }> {
  const fetchUrl = paginationUrl ? paginationUrl : url;
  try {
    const response = await fetch(fetchUrl);
    const data = await response.json();
    return { data, response: response.ok };
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('Unexpected error: ', error);
    }
    return { response: false, data: {} as IPosts };
  }
}

export async function updateData(
  id: number,
  body: { title: string; content: string },
): Promise<{ response: boolean }> {
  try {
    const response = await fetch(`${url}${id}/`, {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return { response: response.ok };
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('Unexpected error: ', error);
    }
    return { response: false };
  }
}

export async function deleteData(id: number): Promise<{ response: boolean }> {
  try {
    const response = await fetch(`${url}${id}/`, {
      method: 'DELETE',
    });

    return { response: response.ok };
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log('Unexpected error: ', error);
    }
    return { response: false };
  }
}
