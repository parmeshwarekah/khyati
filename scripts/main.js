import { initSearch } from "./search.js";
import { initQR } from "./qr.js";
import { loadTrendingReviews } from "./reviews.js";

document.addEventListener("DOMContentLoaded", () => {
  initSearch();
  initQR();
  loadTrendingReviews();
});
