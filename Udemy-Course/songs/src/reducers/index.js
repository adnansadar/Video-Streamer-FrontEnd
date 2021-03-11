// named export imported with curly braces
import { selectSong } from "../actions";
import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Castle on the Hill", duration: "4:20" },
    { title: "On and On", duration: "3:00" },
    { title: "Set Fire to the Rain", duration: "4:45" },
    { title: "Starboy", duration: "2:50" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
