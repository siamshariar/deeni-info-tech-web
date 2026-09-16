import { useEffect } from 'react';
import styles from './Video.module.css';
import Share from '../share';
import Meta from '../core/Meta';

import { generateVParam } from '../pages/Home/ScholarsRecommendation';

export default function VideoModal({ isOpen, onClose, videoId, title, description, playlistId }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const videoUrl = `scholars-recommendation?v=${generateVParam(videoId, title)}`;

    return (
        <>
            <Meta
                title={title || 'Scholars Recommendation | DeeniInfoTech.com'}
                url={videoUrl}
                type="website"
            />
            <section className={styles.modalWrapper}>
                <button
                    type="button"
                    className={styles.closeIcon}
                    onClick={onClose}
                    aria-label="Close"
                >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="4" y1="4" x2="20" y2="20" />
                        <line x1="20" y1="4" x2="4" y2="20" />
                    </svg>
                </button>
                <div className={styles.overlay}>
                    <div
                        className={styles.content}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={styles.iframeContainer}>
                            <iframe
                                className={styles.iframe}
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&playlist=${videoId}`}
                                title={title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className={styles.details}>
                            <h2 className={styles.title}>{title}</h2>
                            <div className={styles.share}>
                                 <Share
                                    urlWeb={videoUrl} // Dynamic playlist-based URL
                                    urlMobile={videoUrl}
                                    title={title}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
