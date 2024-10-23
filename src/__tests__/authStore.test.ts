import { authStore } from "../store/AuthStore";
import { userStore } from "../store/UserStore";

describe("AuthStore isAuth method", () => {
  it("should return false when userstore.user is null", () => {
    userStore.user = null;
    expect(authStore.isAuth()).toBe(false);
  });
  it("should return false when authStore.token is null", () => {
    userStore.user = { id: "1", email: "test", role: "user", isActive: false };
    authStore.token = null;
    expect(authStore.isAuth()).toBe(false);
  });
  it("should return true when both userStore.user and getToken() are not null", () => {
    userStore.user = { id: "1", email: "test", role: "user", isActive: true };
    authStore.setToken("testToken");
    expect(authStore.isAuth()).toBe(true);
  });
});

describe("AuthStore isAdmin method", () => {
  it("should return false when userStore.user is null", () => {
    userStore.user = null;
    expect(authStore.isAdmin()).toBe(false);
  });
  it("should return false when userStore.user.role is not 'admin'", () => {
    userStore.user = { id: "1", email: "test", role: "user", isActive: true };
    expect(authStore.isAdmin()).toBe(false);
  });
  it("should return true when userStore.user.role is 'admin'", () => {
    userStore.user = { id: "1", email: "test", role: "admin", isActive: true };
    expect(authStore.isAdmin()).toBe(true);
  });
});

describe("AuthStore setToken method", () => {
  it("should set authStore.token to the newToken parameter", () => {
    const newToken = "new_token_value";
    authStore.setToken(newToken);
    expect(authStore.getToken()).toBe(newToken);
  });
});

describe("AuthStore clearToken method", () => {
  it("should set authStore.token to null", () => {
    authStore.setToken("testToken");
    authStore.clearToken();
    expect(authStore.getToken()).toBe(null);
  });
});
