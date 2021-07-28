import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 0IF2itxfjeqAXr-H9-qGxtnXBWhtXxSlOnPHpVZvQsgsU_0bVKyOQC7pxg9ZTo3z2lRiL0zbmBzog3H2kvsJV20u0m7QFusSK24ffNJq1STxD6MnIHy84MgqJG8AYXYx",
  },
});
