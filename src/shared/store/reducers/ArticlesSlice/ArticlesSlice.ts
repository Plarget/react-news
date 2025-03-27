import type { TArticlesSlice } from "./types.ts"
import type {TArticle} from "@/shared/types/common.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import articlesData from "@/shared/data/articlesData.ts";

const initialState: TArticlesSlice = articlesData

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    addArticle(state, action: PayloadAction<TArticle>) {
      state.unshift(action.payload)
    },
    deleteArticle(state, action: PayloadAction<number | string>) {
      return state.filter(({ id }) => id !== action.payload)
    },
    editArticle(state, action: PayloadAction<Omit<TArticle, "time">>) {
      const updatedArticle = action.payload
      const articleIndex = state.findIndex(article => article.id === updatedArticle.id);

      if (articleIndex !== -1) state[articleIndex] = {
        time: state[articleIndex].time,
        ...updatedArticle
      };

      return state
    },
  },
})

export const {addArticle, deleteArticle, editArticle} = articlesSlice.actions
export default articlesSlice.reducer