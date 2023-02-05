import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
require('dotenv').config()


const TatuajesApi = createApi({
    reducerPath: "TatuajesApi",
    
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://lurocotattooback-production.up.railway.app/'
    }),
    
    endpoints: (builder) => ({
        
        nuevoTatuaje: builder.mutation({
            query: (data) => ({
                url: '/tatuajes',
                method: "POST",
                body: data
            })
        }),

        tatuajeS: builder.query({
            query: () => '/tatuajes'
        }),

        eliminarTatuaje: builder.mutation({
            query: (id) => ({
                url: `/tatuajes/${id}`,
                method: "DELETE",
                headers: {"Authorization": "Bearer" + localStorage.getItem("token")}
            })
        }),

        tatuajeArtista: builder.query({
            query: (id) => (`tatuajes?artista=${id.id}`),
        })
    })
})

export default TatuajesApi

export const { useNuevoTatuajeMutation,
            useTatuajeSQuery,
            useEliminarTatuajeMutation,
            useTatuajeArtistaQuery} = TatuajesApi