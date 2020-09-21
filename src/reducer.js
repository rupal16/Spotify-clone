export const initialState = {
  user: null,
  playlists: [],
  discover_weekly: null,
  playing: false,
  item: null,
  //   token:
  //     //   REMOVE after finished developing
  //     "BQANa_-BYeewwmdA-lZdG3j8JQRR62jZks6_bVxtvrmqf0aidM2OVOFXHrxlQe1Oojy-UGgozYlDYZNY1ZZ1eQABI3ZDGeszScQSjhw5yre6pWbtKUU1Dc9uK89hjjbaURw0q5CuuvZb_q02AB459T9331pZXyG-ABpFypsm0YVrvHmB",
  // };
};
const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
