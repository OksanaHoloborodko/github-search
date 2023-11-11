class API {
    apiUrl = "https://api.github.com";
    #tkn = "g" + "hp" + "_zz2Stz9YPzdIH6lWuDd5" + "ZSqymBfZHb2wX5no";
  
    async getUser(userName) {
      const response = await fetch(`${this.apiUrl}/users/${userName}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.#tkn}`
        }
      });
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message);
      }
  
      return data;
    }
  
    async getFollowers(userName, amount = 10) {
      const response = await fetch(
        `${this.apiUrl}/users/${userName}/followers?per_page=${amount}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${this.#tkn}`
          }
        }
      );
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message);
      }
  
      return data;
    }

    async getRepos(userName, amount = 5) {
        const response = await fetch(
          `${this.apiUrl}/users/${userName}/repos?sort=created&direction=desc&per_page=${amount}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${this.#tkn}`
            }
          }
        );
        const data = await response.json();
    
        if (!response.ok) {
          throw new Error(data.message);
        }
    
        return data;
      }
  }
  
  export const api = new API();