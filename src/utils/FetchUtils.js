export const fetchGet = async (url) => {
    let response;
    try {
      console.debug(url);
      const data = await fetch(url, {
        method: "GET",
      });
      response = { status: data.status, data: await data.json() };
    } catch (e) {
      response = { err: e.message };
    }
    return response;
  };

  export const fetchGet1 = async (url,payload) => {
    let response;
    try {
      console.debug(url);
      const data = await fetch(url, {
        method: "GET",
        body: JSON.stringify(payload)
      });
      response = { status: data.status, data: await data.json() };
    } catch (e) {
      response = { err: e.message };
    }
    return response;
  };

  export const fetchPut = async (url, payload) => {
    let resp;
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const data = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(payload),
        headers,
      });
      resp = { status: data.status,data: await data.json() };
    } catch (e) {
      resp = { err: e.message };
    }
    return resp;
  };

  export const fetchPost = async (url, payload) => {
    let resp;
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const data = await fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
        headers,
      });
      resp = { data: await data.json(), status: data.status };
    } catch (e) {
      resp = { err: e.message };
    }
    return resp;
  };