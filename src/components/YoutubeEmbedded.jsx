

const YouTubeEmbed = () => {
  const videos = ['A73vTnMLENM', 'A73vTnMLENM', 'A73vTnMLENM',];

  return (
    <div className="grid mt-5 xs:w-[95%] overflow-auto lg:w-[80%] mx-auto xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-3 xl:grid-cols-3 gap-8 lg:justify-items-center">
      {videos.map((videoId, index) => (
        <div key={index} className="video-wrapper w-full">
          <iframe
            className="responsive-iframe w-full h-[300px]"
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={`YouTube video ${index + 1}`}
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default YouTubeEmbed;