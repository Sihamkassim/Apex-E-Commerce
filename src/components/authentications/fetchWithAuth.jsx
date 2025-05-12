import useAuthStore from "../../store/authStore";

export async function fetchWithAuth(url, options = {}) {
  const { token, refreshToken, user, setAuth, logout } = useAuthStore.getState();

  if (!options.headers) options.headers = {};
  options.headers.Authorization = `Bearer ${token}`;

  let response = await fetch(url, options);

  if (response.status === 401) {
    // Try refreshing the token
    try {
      const refreshRes = await fetch(
        "https://ecommerce-backend-tqgh.onrender.com/api/v1/auth/refresh-token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ refreshToken }),
        }
      );

      if (refreshRes.ok) {
        const data = await refreshRes.json();
        // Preserve user data when refreshing the token
        setAuth({ 
          token: data.token, 
          refreshToken: data.refreshToken || refreshToken, 
          user: user // Keep the existing user data
        }); 
        options.headers.Authorization = `Bearer ${data.token}`;
        response = await fetch(url, options);
      } else {
        logout(); 
        throw new Error("Session expired. Please log in again.");
      }
    } catch (error) {
      console.error("Token refresh error:", error);
      logout();
      throw new Error("Authentication error. Please log in again.");
    }
  }

  return response;
}
