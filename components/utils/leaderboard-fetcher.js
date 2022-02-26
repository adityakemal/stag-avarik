import axios from "axios";

const leaderboardFetcher = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_LEADERBORD,
  timeout: 5000,
  headers: {
    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_LEADERBOARD_SECRET_KEY}`
  }
});

export default leaderboardFetcher;
