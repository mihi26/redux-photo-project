const { createSlice } = require('@reduxjs/toolkit');

const photo = createSlice({
  name: 'photos',
  initialState: [],
  reducers: {
    addPhoto: (state, action) => {
      state.push(action.payload);
    },
    removePhoto: (state, action) => {
      const removePhotoID = action.payload;
      return state.filter((photo) => photo.id !== removePhotoID);
    },
    editPhoto: (state, action) => {
      const newPhoto = action.payload;
      const photoIndex = state.findIndex((photo) => photo.id === newPhoto.id);
      console.log({ newPhoto, photoIndex });
      if (photoIndex >= 0) state[photoIndex] = newPhoto;
    },
  },
});

const { reducer, actions } = photo;
export const { addPhoto, removePhoto, editPhoto } = actions;
export default reducer;
