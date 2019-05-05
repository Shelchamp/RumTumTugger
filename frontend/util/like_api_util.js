export const createLike = post => {
  return $.ajax({
    method: "POST",
    url: `/api/posts/${post.post_id}/likes`
  });
};

export const getLikes = () => {
  return $.ajax({
    method: "GET",
    url: `/api/likes`
  });
};

export const deleteLike = post => {
  return $.ajax({
    method: "DELETE",
    url: `/api/posts/${post.post_id}/likes`
  });
};
