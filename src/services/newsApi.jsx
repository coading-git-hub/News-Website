
export const API_KEY = "d7efaf23a76b4fd1b5101961ba3d08db"; 
const BASE_URL = "https://newsapi.org/v2";

export const fetchTopHeadlines = async (country = "us", page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}/top-headlines?country=${country}&page=${page}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching top headlines:", error);
    throw error;
  }
};

export const fetchNewsByCategory = async (category, country = "us", page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}/top-headlines?category=${category}&country=${country}&page=${page}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching ${category} news:`, error);
    throw error;
  }
};

export const searchNews = async (query, page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}/everything?q=${query}&page=${page}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error searching news:", error);
    throw error;
  }
};
