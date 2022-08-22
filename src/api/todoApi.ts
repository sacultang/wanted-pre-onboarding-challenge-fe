import { baseUrl } from "./baseUrl";

export const createTodo = async (todo: string, accessToken: string) => {
  try {
    const res = await baseUrl({
      url: "/todos",
      method: "POST",
      data: {
        todo,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res?.status === 201) {
      return res?.data;
    }
  } catch (e) {
    console.log(e);
  }
};

export const getTodos = async (accessToken: string) => {
  try {
    const res = await baseUrl({
      url: "/todos",
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (res?.status === 200) {
      return res?.data;
    }
  } catch (e) {
    console.log(e);
  }
};

export const updateTodo = async (
  id: number,
  newTodo: string,
  isCompleted: boolean,
  accessToken: string
) => {
  try {
    const res = await baseUrl({
      url: `/todos/${id}`,
      method: "PUT",
      data: {
        todo: newTodo,
        isCompleted,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (res?.status === 200) {
      return res?.data;
    }
  } catch (e) {
    console.log(e);
  }
};
export const deleteTodo = async (id: number, accessToken: string) => {
  try {
    const res = await baseUrl({
      url: `/todos/${id}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (res?.status === 204) {
      return res;
    }
  } catch (e) {
    console.log(e);
  }
};
