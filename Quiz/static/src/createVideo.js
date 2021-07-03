const createVideo = (link) => {
    const video = document.createElement('div');
    video.className = 'correspondence__item';
    video.innerHTML = `
        <div class="video-wrap">
        <iframe width="560" height="315" src="/./static/player/player.html?file=${link}" 
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
        </div>
    `;
    return video;
}
