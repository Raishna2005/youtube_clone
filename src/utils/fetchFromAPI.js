import axios from 'axios';

// ========================================
// VIDEO DATA API CONFIGURATION
// ========================================
// This file handles all API calls to fetch video data.
// Currently configured to use YouTube Data API v3 via RapidAPI.
//
// TO USE CUSTOM/LOCAL VIDEO DATA:
// 1. Replace the fetchFromAPI function with your own data source
// 2. Ensure returned data matches the expected format below:
//
// DATA FORMAT EXPECTED:
// {
//   items: [
//     {
//       id: { videoId: "video_id_here" },
//       snippet: {
//         title: "Video Title",
//         description: "Video description",
//         thumbnails: { medium: { url: "thumbnail_url" } },
//         channelTitle: "Channel Name",
//         publishedAt: "2024-01-01T00:00:00Z"
//       },
//       statistics: {
//         viewCount: "1000",
//         likeCount: "100"
//       }
//     }
//   ]
// }
// ========================================

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
