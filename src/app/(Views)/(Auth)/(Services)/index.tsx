import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { API_METHOD } from '@/app/(Constant)';

export const apiAuth = createApi({
  reducerPath: 'api/auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000'
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => ({
        method: API_METHOD.POST,
        url: '/login',
        body
      })
    })
  })
});

export const { useLoginUserMutation } = apiAuth;
