import { entities } from "../data/mock-data.js";

export function initSearch() {
  const input = document.querySelector(".search-box input");

  input.addEventListener("input", () => {
    const value = input.value.toLowerCase();
    const results = entities.filter(e =>
      e.name.toLowerCase().includes(value)
    );

    console.log("Search results:", results);
    // later → renderResults(results)
  });
}
