export const createLike = post => {
  return $.ajax({
    method: "POST",
    url: `/api/posts/${post.id}/likes`
  });
};

// export const deleteLike = like => {
//   return $.ajax({
//     method: "DELETE",
//     url: `/api/posts/${post.id}/likes`
//   });
// };
