// Redirect to spotify login page after clicking login button
export const authEndPoint = "https://accounts.spotify.com/authorize";

// Redirect to home page once authorized
const redirectUri = "http://localhost:3000";

const clientId = "4f7527c65a6d445b93abd2d230f4aa6d";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
