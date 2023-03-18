export const goToLoginPage = (navigate) => {
  navigate('/users/login')
}

export const goToSignupPage = (navigate) => {
  navigate('/users/signup')
}

export const goToPostsPage = (navigate) => {
  navigate('/posts')
}

export const goToCommentsPage = (navigate, id) => {
  navigate(`/posts/${id}`)
}
