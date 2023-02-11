import { rootReducer } from './reducer';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				// Ignore these action types
				ignoredActions: ['your/action/type'],
				// Ignore these field paths in all actions
				ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
				// Ignore these paths in the state
				ignoredPaths: ['items.dates'],
			},
		}),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
