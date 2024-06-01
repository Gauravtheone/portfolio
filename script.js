document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the "Visit site" button
    document.getElementById('visitSiteBtn1').addEventListener('click', function() {
      // URL of the site you want to redirect to
      const siteUrl = 'https://study-notionapp.vercel.app/'; // Replace with your actual URL
      window.location.href = siteUrl;
    });
  
    document.getElementById('visitSiteBtn2').addEventListener('click', function() {
        // URL of the site you want to redirect to
        const siteUrl = 'https://gauravtheone.github.io/weatherApi/'; // Replace with your actual URL
        window.location.href = siteUrl;
      });

});
  
  
