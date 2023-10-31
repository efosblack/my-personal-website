// Function to fetch and populate research data
function populateArticleReviews() {
  const articleReviewList = document.getElementById("article-review-list");

  fetch('articleReviewData.json') 
    .then((response) => response.json())
    .then((data) => {
      data.article_reviews.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <h3 style="color: black; font-family: sans-serif; font-size: 1.5rem;">${item.title}</h3>
        <br>

          <q style="color: brown; font-style: italic; ">${item.description}</q> <br>
          <br>
          <p style="font-weight: bold; ">Publication Date: ${item.publicationDate}</p>
          <br>
          <a href="${item.article}" target="_blank">Read Article</a>
          <a href="${item.critical_appraisal}" target="_blank">Critical Appraisal</a>
        `;
        articleReviewList.appendChild(li);
        
      });
    })
    .catch((error) => console.error('Error:', error));
    
}
function populateResearchWork() {
  const researchWorkList = document.getElementById("research-work-list");

  fetch('researchWorkData.json') 
    .then((response) => response.json())
    .then((data) => {
      data.research_work.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = `
          <h3 style="color: black; font-family: cursive; font-size: 1.5rem;">${item.title}</h3>
          <br>
          <p>Authors: ${item.authors}</p>
          <br>
          <p style="font-weight: bold;">Publication Date: ${item.publicationDate}</p>
          <br>
          <q style="color: brown; font-style: italic; ">${item.abstract}</q>
          <br>
          <a href="${item.link}" target="_blank">Read Research Work</a>
        `;
        researchWorkList.appendChild(li);
      });
    })
    .catch((error) => console.error('Error:', error));
};

// Function to handle search
function handleSearch() {
  const searchInput = document.getElementById("search").value.toLowerCase();
  const articleReviewList = document.getElementById("article-review-list");
  const researchWorkList = document.getElementById("research-work-list");

  // Loop through article reviews and hide/unhide based on search
  const articleReviewItems = articleReviewList.getElementsByTagName("li");
  for (const item of articleReviewItems) {
      const title = item.querySelector("h3").textContent.toLowerCase();
      if (title.includes(searchInput)) {
          item.style.display = "block";
      } else {
          item.style.display = "none";
      }
  }

  // Loop through research work and hide/unhide based on search
  const researchWorkItems = researchWorkList.getElementsByTagName("li");
  for (const item of researchWorkItems) {
      const title = item.querySelector("h3").textContent.toLowerCase();
      if (title.includes(searchInput)) {
          item.style.display = "block";
      } else {
          item.style.display = "none";
      }
  }
};








// Call the function to populate the article review  and research work section
populateArticleReviews();
populateResearchWork();
