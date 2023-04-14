import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import { dataReducer, toggleSidebar } from "./slices/dataSlice"
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
    data: dataReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userApi.middleware),
})

setupListeners(store.dispatch)

export { toggleSidebar }
export { useLoginQuery, useUpdateAvatarMutation, useDeleteAvatarMutation, useUpdateProfileMutation, useLogoutMutation }
