import React, { FC, useState } from "react";
import { postAPI } from "../services/PostServices";
import { IPost } from "../store/models/IPost";


const Posts = () => {
  const [limit, setLimit] = useState(5)
  const { data: posts, isLoading, isError } = postAPI.useFetchAllPostQuery(limit);

  return (
    <div className="">
      {isLoading && <h1>Загрузка</h1>}
      {isError && <h1>Ошибка</h1>}
      <button onClick={() => setLimit(prevLimit => prevLimit + 1)}>Загрузкить ещё</button>
      {posts && posts.map(post => <PostItem key={post.id} post={post} />)}
    </div>
  )
}

const PostItem: FC<PostItemPros> = ({ post }) => {
  return (
    <div className="post">
      <span className="post__id">{post.id}</span>
      <h2 className="post__title">{post.title}</h2>
      <button className="post__delete">Удалить</button>
      <button className="post__change">Изменить</button>
    </div>
  )
}

interface PostItemPros {
  post: IPost
}

export default Posts