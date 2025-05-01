const API_KEY = 'AIzaSyCO8gSHP_CCJodpeaX-k53gHR9jig2SrJ0'; 
const inputSearch = document.querySelector('.input');
// 1.
const filterButton = document.querySelector('#search-icon');
const videoContainer = document.querySelector('#video-container');
const mainPlayer = document.querySelector('#main-player'); // New player container

// Fetch videos from YouTube
async function fetchYouTubeVideos(query) {
    const loader = document.querySelector('#loader');
    loader.style.display = 'block';
    videoContainer.style.display = 'none';
    mainPlayer.innerHTML = '';

    try {
        // First, fetch the search results
        const searchResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(
                query
            )}&key=${API_KEY}&maxResults=12`
        );
        const searchData = await searchResponse.json();

        // 2.
        if (!searchData.items || searchData.items.length === 0) {
            loader.style.display = 'none';
            videoContainer.innerHTML = '<p>No videos found. Try another search.</p>';
            videoContainer.style.display = 'block';
            return;
        }

        // Get video IDs for checking status
        const videoIds = searchData.items.map(item => item.id.videoId).join(',');

        // Check video status using videos API with additional parts
        const videoResponse = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=status,contentDetails&id=${videoIds}&key=${API_KEY}&maxResults=12`
        );
        const videoData = await videoResponse.json();

        // Enhanced filter for playable videos
        const playableVideos = searchData.items.filter(searchItem => {
            const videoStatus = videoData.items.find(v => v.id === searchItem.id.videoId);
            return videoStatus && 
                   videoStatus.status.embeddable && 
                   videoStatus.status.privacyStatus === 'public' &&
                   !videoStatus.status.uploadStatus?.failed &&
                   !videoStatus.contentDetails?.regionRestriction?.blocked;
        });

        loader.style.display = 'none';

        if (playableVideos.length > 0) {
            displayVideos(playableVideos);
            playInMainPlayer(playableVideos[0].id.videoId);
        } else {
            videoContainer.innerHTML = '<p>No playable videos found. Try another search.</p>';
            videoContainer.style.display = 'block';
        }

    } 
    // 3.
    catch (error) {
        console.error('Error fetching YouTube API:', error);
        loader.style.display = 'none';
        videoContainer.innerHTML = '<p>An error occurred while fetching videos. Please try again.</p>';
        videoContainer.style.display = 'block';
    }
}

// Show thumbnails in grid
function displayVideos(videos) {
    videoContainer.innerHTML = '';
    videoContainer.style.display = 'grid';

    videos.forEach((video) => {
        const videoElement = document.createElement('div');
        videoElement.className = 'video-item';
        videoElement.innerHTML = `
            <img src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}" />
            <p>${video.snippet.title}</p>
        `;

        videoElement.addEventListener('click', () => {
            playInMainPlayer(video.id.videoId);
        });

        videoContainer.appendChild(videoElement);
    });
}

// Play selected video in main player

// 4.
function playInMainPlayer(videoId) {
    mainPlayer.innerHTML = `
        <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/${videoId}?autoplay=1"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
        ></iframe>
    `;
}

// Event listeners
inputSearch.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = inputSearch.value.trim();
        if (query) {
            fetchYouTubeVideos(query);
        }
    }
});

filterButton.addEventListener('click', () => {
    const query = inputSearch.value.trim();
    if (query) {
        fetchYouTubeVideos(query);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('.form-group input');

    inputs.forEach(input => {
        // Autofill detection on load
        if (input.value.trim() !== '') {
            input.classList.add('filled');
        }

        // Recheck when input changes
        input.addEventListener('input', () => {
            if (input.value.trim() !== '') {
                input.classList.add('filled');
            } else {
                input.classList.remove('filled');
            }
        });
    });
});

// 5.
function playInMainPlayer(videoId) {
    mainPlayer.classList.add('active');
    mainPlayer.innerHTML = `
        <iframe
            src="https://www.youtube.com/embed/${videoId}?autoplay=1"
            allow="autoplay; encrypted-media"
            allowfullscreen
        ></iframe>
    `;
}

function clearPlayer() {
    mainPlayer.classList.remove('active');
    mainPlayer.innerHTML = '';
}

