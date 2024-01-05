import CreatePostForm from '../../components/Forms/CreatePostForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { createPostThunk, getAllPostsThunk } from '../../store/posts/thunks';

const PostsPage = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.posts);
  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getAllPostsThunk(user._id));
  }, [dispatch, user._id]);
  const createPost = text => {
    dispatch(createPostThunk({ id: user._id, body: text }));
  };
  return (
    <>
      <CreatePostForm createPost={createPost} />
      {posts && posts.length > 0 ? (
        <ul className="list-group">
          {posts.map(post => (
            <li key={post.id} className="list-group-item">
              <h5>{post.title}</h5>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts yet</p>
      )}
    </>
  );
};

export default PostsPage;
