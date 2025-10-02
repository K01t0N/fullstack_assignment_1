export const getPosts = async (queryParams) => {
    const res = await fetch (
        `https://blog-backend-1058572838805.us-east1.run.app/api/v1/posts?` +
        new URLSearchParams(queryParams),
    )
    return await res.json()
}

export const createPost = async (token, post) => {
    const res = await fetch(`https://blog-backend-1058572838805.us-east1.run.app/api/v1/posts`, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(post),
    })
    return await res.json()
}
