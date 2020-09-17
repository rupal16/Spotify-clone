export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    //   REMOVE after finished developing
    "BQANa_-BYeewwmdA-lZdG3j8JQRR62jZks6_bVxtvrmqf0aidM2OVOFXHrxlQe1Oojy-UGgozYlDYZNY1ZZ1eQABI3ZDGeszScQSjhw5yre6pWbtKUU1Dc9uK89hjjbaURw0q5CuuvZb_q02AB459T9331pZXyG-ABpFypsm0YVrvHmB",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET TOKEN":
      return {
        ...state,
        token: action.token,
      };

    default:
      return state;
  }
};

export default reducer;
