// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const errorCatch = (error: any): string => {
  const msg = error?.response?.data?.message;
  return msg
    ? typeof error.response.data.message === "object"
      ? msg[0]
      : msg
    : error.message;
};

export const getContentType = () => ({
  "Content-Type": "application/json",
});

export const storage = {
  getToken: () => localStorage.getItem("token") || null,
  setToken: (token: string) => localStorage.setItem("token", token),
  clearToken: () => localStorage.removeItem("token"),
};
