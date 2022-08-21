import { baseUrl } from "./baseUrl";

export const createTodo = async (todo: string, accessToken: string) => {
  try {
    const res = await baseUrl({
      url: "/todos",
      method: "POST",
      data: todo,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

export const getTodos = async () => {
  try {
    const res = await baseUrl({
      url: "/todos",
      method: "GET",
      headers: {
        Authorization: `Bearer`,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

export const updateTodo = async (id: string) => {
  try {
    const res = await baseUrl({
      url: `/todos/${id}`,
      method: "PUT",
      headers: {
        Authorization: `Bearer`,
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.log(e);
  }
};
export const deleteTodo = async (id: string) => {
  try {
    const res = await baseUrl({
      url: `/todos/${id}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer`,
      },
    });
  } catch (e) {
    console.log(e);
  }
};
