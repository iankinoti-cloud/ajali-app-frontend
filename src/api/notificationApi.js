import apiClient from "./axiosConfig";

const unwrap = (res) => res.data;

export const getNotifications = (params = {}) =>
  apiClient.get("/notifications/", { params }).then(unwrap);

export const getUnreadCount = () =>
  apiClient.get("/notifications/unread-count/").then(unwrap);

export const markAsRead = (id) =>
  apiClient.patch(`/notifications/${id}/read/`).then(unwrap);

export const markAllAsRead = () =>
  apiClient.post("/notifications/read-all/").then(unwrap);

export const getPreferences = () =>
  apiClient.get("/notifications/preferences/").then(unwrap);

export const updatePreferences = (payload) =>
  apiClient.patch("/notifications/preferences/", payload).then(unwrap);

export const deleteNotification = (id) =>
  apiClient.delete(`/notifications/${id}/`).then(unwrap);

export const deleteAllNotifications = () =>
  apiClient.delete("/notifications/all/").then(unwrap);
