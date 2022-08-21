import { baseUrl } from "./baseUrl";

export const createTodo = async (todo: string) => {
  try {
    const res = await baseUrl({
      url: "/todos",
      method: "POST",
      data: {
        todo,
      },
    });
    console.log(res);
    if (res?.status === 201) {
      return res?.data;
    }
  } catch (e) {
    console.log(e);
  }
};

export const getTodos = async () => {
  try {
    const res = await baseUrl({
      url: "/todos",
      method: "GET",
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
  isCompleted: boolean
) => {
  try {
    const res = await baseUrl({
      url: `/todos/${id}`,
      method: "PUT",
      data: {
        todo: newTodo,
        isCompleted,
      },
    });
    if (res?.status === 200) {
      return res?.data;
    }
  } catch (e) {
    console.log(e);
  }
};
export const deleteTodo = async (id: number) => {
  try {
    const res = await baseUrl({
      url: `/todos/${id}`,
      method: "DELETE",
    });
    console.log(res);
    if (res?.status === 204) {
      return res;
    }
  } catch (e) {
    console.log(e);
  }
};
