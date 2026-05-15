const API_KEY =  "9f96941eace6d0b35d9d0b252a3c65c8"; //'your_gnews_api_key_here'; // Replace with your actual API key
const API_URL = `https://gnews.io/api/v4/search?q=Google&lang=en&max=5&apikey=9f96941eace6d0b35d9d0b252a3c65c8`;

// Fetch news from GNews API
async function fetchNews() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        console.log(data)
        
        
        if (data.articles.length > 0) {
            displayNewsCards(data.articles);
        } else {
            document.getElementById('news-container').innerHTML = 
                '<p>No news articles found.</p>';
        }
    } catch (error) {
        console.error('Error fetching news:', error);
        document.getElementById('news-container').innerHTML = 
            '<p>Failed to load news. Please try again later.</p>';
    }
}
fetchNews();

// Display 6 news cards

function displayNewsCards(articles) {
    const newsContainer = document.getElementById('news-container');
    
    const newsCardsHTML = articles.map((article, index) => `
        <div class="news-card" onclick="redirectToDetail(${index})">
            <img src="${article.image || 'placeholder.jpg'}" alt="${article.title}" class="news-image">
            <div class="news-content">
                <h3 class="news-title">${article.title}</h3>
                <p class="news-description">${article.description || 'No description available'}</p>
                <div class="news-meta">
                    <span class="news-source">${article.source.name}</span>
                    <span class="news-date">${new Date(article.publishedAt).toLocaleDateString()}</span>
                </div>
            </div>
        </div>
    `).join('');
    
    newsContainer.innerHTML = newsCardsHTML;
    
    // Store articles in localStorage for detail page access
    localStorage.setItem('newsArticles', JSON.stringify(articles));
}

// Redirect to detail page with article index
function redirectToDetail(articleIndex) {
    window.location.href = `detail.html?index=${articleIndex}`;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', fetchNews);


