const YouTubeEmbed = () => {
    const videos = ['A73vTnMLENM', 'c6myjyuCamA', 'KxgIShSkqBo', 'KxgIShSkqBo', 'KxgIShSkqBo']
    return (
        <div className=" mt-10 ">
            <div className="text-center">
                <h1 className="lg:text-4xl text-[#1A5219] xs:text-3xl">Latest Highlights and Clips</h1>
                <p className="text-[#808080] mt-3 text-sm">Watch intriguing match highlights and latest clips</p>
            </div>
            <div className="flex items-center h-full gap-4 border mt-5 xs:w-[95%] mx-auto overflow-x-auto">
                {videos.map((videoId, index) => (
                    <div key={index} className="video-wrapper w-[500px] flex-shrink-0">
                        <iframe
                            className="responsive-iframe overflow-hidden w-full h-[300px]"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title={`YouTube video ${index + 1}`}
                        ></iframe>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YouTubeEmbed;