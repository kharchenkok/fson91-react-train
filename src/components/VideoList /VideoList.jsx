export const VideoList = ({ videos, onSelect }) => {
  return (
    <ul>
      {videos.map((video) => (
        <li key={video.id}>
          <button type={'button'} onClick={() => onSelect(video.link)}>
            {video.link}
          </button>
        </li>
      ))}
    </ul>
  );
};
