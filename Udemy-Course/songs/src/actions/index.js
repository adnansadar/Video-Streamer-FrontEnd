// Action Creator
export const selectSong = (song) => {
  // Return the action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
