import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import {
  userApi,
  useLoginQuery,
  useUpdateAvatarMutation,
  useDeleteAvatarMutation,
  useUpdateProfileMutation,
  useLogoutMutation,
} from "./apis/userApi"

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
})

setupListeners(store.dispatch)

export { useLoginQuery, useUpdateAvatarMutation, useDeleteAvatarMutation, useUpdateProfileMutation, useLogoutMutation }
