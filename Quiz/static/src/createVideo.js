const createVideo = (link) => {
    const video = document.createElement('div');
    video.className = 'correspondence__item video';
    video.id = 'video';

    video.innerHTML = `
        <div class="video-wrap">
        <iframe style="width: 560; height: 315" src="${link}" 
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
                clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
        </div>
    `;
    return video;
}
