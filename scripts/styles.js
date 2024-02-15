export function fetchGitHubUserData(username) {
    return fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        const avatar = document.getElementById("avatar");
        const userName = document.getElementById("userName");
        const itl = document.getElementById("dzagluka");
        const date = document.getElementById("joinDate");
        const location = document.getElementById("location");
        const repost = document.getElementById("totalRepost");
        const followers = document.getElementById("totalFollowers");
        const followings = document.getElementById("totalFollowings");
        const bio = document.getElementById("profileInfo");
        const blog = document.getElementById("GitHubLink");
        const twitter = document.getElementById("tvitter");
        const github = document.getElementById("agithub");
        
        avatar.src = `${data.avatar_url}`;
        userName.textContent = `${data.login}`;
        itl.textContent = `@${data.login}`;
        date.textContent = `${data.created_at}`;
        location.textContent = `${data.location}`;
        repost.textContent = `${data.public_repos}`;
        followers.textContent = `${data.followers}`;
        followings.textContent = `${data.following}`;
        bio.textContent = `${data.bio}`;
        blog.textContent = `${data.html_url}`;
        twitter.textContent = `${data.twitter_username}`;
        github.textContent = `@${data.login}`;
        
        blog.href = `${data.html_url}`
        location.href = `https://www.google.com/search?channel=fs&client=ubuntu-sn&q=${data.location}`

      })
      .catch((error) => {
        console.error(error);
      });
  }
  