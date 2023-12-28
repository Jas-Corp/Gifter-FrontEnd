const baseUrl = "http://127.0.0.1:3333";

const defaultOptions = {
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include" as RequestCredentials,
};

async function handleResponse(response: Response) {
  if (!response.ok) {
    throw new Error(`${await response.text()}`);
  }
  try {
    return response;
  } catch (error) {
    return response;
  }
}

async function fetchWithErrorHandling(url: string, options = {}) {
  try {
    const response = await fetch(url, { ...defaultOptions, ...options });
    return await handleResponse(response);
  } catch (error) {
    console.error("Fetching error:", error);
    throw error;
  }
}

export const ApiService = {
  async get(endpoint: string) {
    const url = `${baseUrl}/${endpoint}`;
    return await fetchWithErrorHandling(url);
  },
  async post(endpoint: string, body?: unknown) {
    const url = `${baseUrl}/${endpoint}`;
    const options: RequestInit = {
      method: "POST",
      headers: {
        ...defaultOptions.headers,
      },
      body: body ? JSON.stringify(body) : null,
    };

    return await fetchWithErrorHandling(url, options);
  },
  async put(endpoint: string, body?: unknown) {
    const url = `${baseUrl}/${endpoint}`;
    const options: RequestInit = {
      method: "PUT",
      headers: {},
    };
    if (body) options.body = JSON.stringify(body);

    return await fetchWithErrorHandling(url, options);
  },
  async delete(endpoint: string) {
    const url = `${baseUrl}/${endpoint}`;
    return await fetchWithErrorHandling(url, {
      method: "DELETE",
    });
  },
};

export default ApiService;
