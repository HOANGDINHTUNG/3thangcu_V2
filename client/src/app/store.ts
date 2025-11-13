import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../stores/theme/themeSlice'
import teachersReducer from '../stores/teachers/teachersSlice'
import timelineReducer from '../stores/timeline/timelineSlice'
import tributesReducer from '../stores/tributes/tributesSlice'
import uiReducer from '../stores/ui/modalSlice'
import memoriesReducer from '../stores/memories/memorySlice'
import gratitudeReducer from '../stores/gratitude/gratitudeSlice'
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    teachers: teachersReducer,
    timeline: timelineReducer,
    tributes: tributesReducer,
    ui: uiReducer,
    memories: memoriesReducer,   
    gratitude: gratitudeReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
