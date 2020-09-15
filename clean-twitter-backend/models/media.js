function toMediaModel({ id_str, media_url, type, video_info }) {
  return {
    id_str,
    photo_url: media_url,
    type,
    video_content_type:
      video_info &&
      video_info.variants[video_info.variants.length - 1].content_type,
    video_url:
      video_info && video_info.variants[video_info.variants.length - 1].url,
  };
}

module.exports = toMediaModel;
