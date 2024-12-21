import Container from '../../utils/Container';
import { useState, useEffect } from "react";
import styles from './About.module.scss';
import { videos } from '../../../data/ScholarsRecommendation';
import VideoModal from '../../modal/VideoModal';


export const generateVParam = (videoID, title) => {
  const formattedTitle = encodeURIComponent((title || "").split(" ").join("=$"));
  return `${videoID}=$$=${formattedTitle}`;
};


const parseVParam = (slug) => {
  const [videoID, encodedTitle] = slug.split("=$$=");
  const videoTitle = decodeURIComponent(encodedTitle).split("=$").join(" ");
  return { videoID, videoTitle };
};

export default function ScholarsRecommendation() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [modalTitle, setModalTitle] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const v = params.get("v");

    if (v) {
      const { videoID, videoTitle } = parseVParam(v);
      setModalTitle(videoTitle);
      openModal({ id: videoID, title: videoTitle });
    }
  }, []);

  // Open modal and update the URL
  const openModal = ({ id, title}) => {
    setSelectedVideo({ id, title});
    setModalTitle(title);
    setModalOpen(true);

    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("v", generateVParam(id, title));
    const updatedUrl = `${window.location.pathname}?${urlParams.toString()}`;
    window.history.replaceState(null, "", updatedUrl);
  };

  // Close modal and reset the URL
  const closeModal = () => {
    setSelectedVideo(null);
    setModalTitle("");
    setModalOpen(false);

    const urlParams = new URLSearchParams(window.location.search);
    urlParams.delete("v");
    const updatedUrl = `${window.location.pathname}${urlParams.toString() ? `?${urlParams.toString()}` : ""}`;
    window.history.replaceState(null, "", updatedUrl);
  };


  const getThumbnail = (id) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

  return (
    <div className={styles.wrapper} style={{ maxWidth: "1440px", margin: "0 auto" }}>
      <Container>
        <div className={styles.grid}>
          {videos.map((video, index) => (
            <div
              key={index}
              className={styles.card}
              style={{ borderRadius: "8px", overflow: "hidden", cursor: "pointer" }}
              onClick={() => openModal({ id: video.id, title: video.title })}
            >
              <a
                  href={`?v=${generateVParam(video.id, video.title)}`}
                  onClick={(e) => {
                    e.preventDefault(); 
                    openModal({ id: video.id, title: video.title }); 
                  }}
                >
              <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
                
                  <img
                    src={getThumbnail(video.id)}
                    alt={video.title}
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
               
              </div>
              <div className={styles.videoInfo}>
                <p className={styles.videoTitle}>{video.title}</p>
              </div>
               </a>
            </div>
          ))}
        </div>
      </Container>

      {selectedVideo && (
        <VideoModal
          isOpen={isModalOpen}
          onClose={closeModal}
          videoId={selectedVideo.id}
          title={selectedVideo.title}
        />
      )}
    </div>
  );
}
