export function getYoutubeEmbedUrl(url) {
  try {
    const urlObj = new URL(url);

    if (
      urlObj.hostname === 'www.youtube.com' ||
      urlObj.hostname === 'youtube.com' ||
      urlObj.hostname === 'youtu.be'
    ) {
      let videoId = '';

      if (urlObj.hostname === 'youtu.be') {
        videoId = urlObj.pathname.slice(1);
      } else {
        videoId = urlObj.searchParams.get('v');
      }

      if (videoId) {
        // Embed URL with parameters to reduce branding and UI
        return `https://www.youtube.com/embed/${videoId}?controls=0&modestbranding=1&rel=0&iv_load_policy=3`;
      }
    }
  } catch (err) {
    console.log(err);
  }

  return url;
}
