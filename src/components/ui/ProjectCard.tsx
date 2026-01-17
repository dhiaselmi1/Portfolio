import { useState } from 'react';
import { SiGithub } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";
import { Play, X } from 'lucide-react';
import { IconType } from 'react-icons';

interface TechStackItem {
  icon: IconType;
  name: string;
  color?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  video?: string;
  videoThumbnail?: string; // Custom thumbnail for video
  link?: string;
  github?: string;
  techStack: TechStackItem[];
}

export function ProjectCard({ title, description, image, video, videoThumbnail, link, github, techStack }: ProjectCardProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Detect video type (direct file, Vimeo, or YouTube)
  const getVideoType = (url: string) => {
    if (url.includes('vimeo.com')) return 'vimeo';
    if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
    return 'direct';
  };

  // Extract Vimeo ID from URL
  const getVimeoId = (url: string) => {
    const match = url.match(/vimeo\.com\/(\d+)/);
    return match ? match[1] : null;
  };

  // Extract YouTube ID from URL
  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/);
    return match ? match[1] : null;
  };

  const videoType = video ? getVideoType(video) : null;
  const vimeoId = video && videoType === 'vimeo' ? getVimeoId(video) : null;
  const youtubeId = video && videoType === 'youtube' ? getYouTubeId(video) : null;

  // Force video to stay muted (for direct videos only)
  const handleVolumeChange = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const videoElement = e.currentTarget;
    if (!videoElement.muted) {
      videoElement.muted = true;
    }
    if (videoElement.volume > 0) {
      videoElement.volume = 0;
    }
  };

  return (
      <>
        <div className="group relative">
          <div className="relative bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:shadow-blue-500/10">

            {/* Media Section - Image or Video */}
            <div className="relative overflow-hidden p-4 pb-0 h-64">
              {video ? (
                  // Video Preview with Play Button
                  <div
                      className="relative cursor-pointer group/video h-full"
                      onClick={() => setIsVideoModalOpen(true)}
                  >
                    {videoThumbnail ? (
                        // Custom Thumbnail Image
                        <img
                            src={videoThumbnail}
                            alt={`${title} video thumbnail`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    ) : videoType === 'direct' ? (
                        // Auto Video Preview
                        <video
                            src={video}
                            className="w-full h-full object-cover rounded-lg"
                            muted
                            loop
                            playsInline
                        />
                    ) : (
                        // Placeholder for Vimeo/YouTube
                        <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center">
                          <Play className="w-16 h-16 text-white" />
                        </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-lg opacity-0 group-hover/video:opacity-100 transition-opacity">
                      <div className="bg-blue-600 rounded-full p-4 transform group-hover/video:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>
                  </div>
              ) : image ? (
                  // Image
                  <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
                    <img
                        src={image}
                        alt={`Screenshot of ${title}`}
                        className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                  </a>
              ) : null}
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Title + Icons */}
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
                <div className="flex gap-3">
                  {github && (
                      <a
                          href={github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                      >
                        <SiGithub className="w-6 h-6" />
                      </a>
                  )}
                  {link && (
                      <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                      >
                        <FaGlobe className="w-6 h-6" />
                      </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                {description}
              </p>

              {/* Tech Stack Icons with Tooltip */}
              <div className="flex flex-wrap gap-3 mt-4">
                {techStack.map((item, index) => {
                  const Icon = item.icon;
                  return (
                      <div key={index} className="relative">
                        <div className="peer p-2 rounded-lg bg-gray-200 dark:bg-gray-800">
                          <Icon className="w-6 h-6" color={item.color} />
                        </div>
                        {/* Tooltip */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-700 text-white text-xs rounded px-2 py-1
                        opacity-0 peer-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                          {item.name}
                        </div>
                      </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>

        {/* Video Modal */}
        {isVideoModalOpen && video && (
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-12"
                onClick={() => setIsVideoModalOpen(false)}
            >
              <div className="relative w-full h-full max-w-5xl max-h-[90vh] flex items-center justify-center">
                {/* Close Button */}
                <button
                    onClick={() => setIsVideoModalOpen(false)}
                    className="absolute -top-8 md:-top-12 right-0 text-white hover:text-blue-400 transition-colors z-10"
                >
                  <X className="w-8 h-8" />
                </button>

                {/* Video Player */}
                {videoType === 'vimeo' && vimeoId ? (
                    <iframe
                        src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&muted=1`}
                        className="max-w-full max-h-full rounded-lg shadow-2xl"
                        style={{ width: '100%', height: '80vh', maxHeight: '90vh' }}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        onClick={(e) => e.stopPropagation()}
                    />
                ) : videoType === 'youtube' && youtubeId ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1`}
                        className="max-w-full max-h-full rounded-lg shadow-2xl"
                        style={{ width: '100%', height: '80vh', maxHeight: '90vh' }}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                        onClick={(e) => e.stopPropagation()}
                    />
                ) : (
                    <video
                        src={video}
                        controls
                        controlsList="nodownload"
                        autoPlay
                        muted
                        playsInline
                        onVolumeChange={handleVolumeChange}
                        className="max-w-full max-h-full rounded-lg shadow-2xl object-contain"
                        onClick={(e) => e.stopPropagation()}
                    >
                      Your browser does not support the video tag.
                    </video>
                )}
              </div>
            </div>
        )}
      </>
  );
}