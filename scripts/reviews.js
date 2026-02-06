import { reviews } from "../data/mock-data.js";

export function loadTrendingReviews() {
  const trending = reviews.sort((a, b) => b.helpful - a.helpful);
  console.log("Trending reviews:", trending);
}

export function loadLatestReviews() {
  const latest = reviews.sort((a, b) => b.date - a.date);
  console.log("Latest reviews:", latest);
}
