import axios from "axios";

export const getMenuData = async () => {
  try {
    const response = await axios.get(
      "https://646f8bf209ff19b120877364.mockapi.io/login/menus"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching menu data:", error);
    throw error;
  }
};
