import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

// Generic logo placeholder - replace with your own logo
export const logo = 'https://via.placeholder.com/180x45/000000/ffffff?text=Video+Platform';

// VIDEO CATEGORIES - Available for content filtering
// Add or modify categories as needed for your video platform
export const categories = [
  { name: 'Home', icon: <HomeIcon />, },
  { name: 'Technology', icon: <CodeIcon />, },
  { name: 'Gaming', icon: <SportsEsportsIcon />, },
  { name: 'Education', icon: <SchoolIcon />, },
  { name: 'Music', icon: <MusicNoteIcon /> },
  { name: 'Movies', icon: <OndemandVideoIcon />, },
  { name: 'Podcasts', icon: <GraphicEqIcon />, },
  { name: 'Live', icon: <LiveTvIcon />, },
  { name: 'Sports', icon: <FitnessCenterIcon />, },
  { name: 'News', icon: <DeveloperModeIcon />, },
  { name: 'Coding', icon: <CodeIcon />, },
  { name: 'AI & Tech', icon: <DeveloperModeIcon />, },
];

// DEMO DATA - Replace with real video data from your API
// When using video data, include these fields in your data structure:
// - title: Video title
// - thumbnail URL: Thumbnail image
// - video URL or ID: Link to video
// - channel name: Channel/creator name
// - views: View count
// - upload date: When video was published
export const demoThumbnailUrl = 'https://via.placeholder.com/320x180/000000/ffffff?text=Sample+Thumbnail';
export const demoChannelUrl = '/channel/sample-channel';
export const demoVideoUrl = '/watch?v=sample-video-id';
export const demoChannelTitle = 'Sample Channel';
export const demoVideoTitle = 'Sample Video Title';
export const demoProfilePicture = 'https://via.placeholder.com/150/000000/ffffff?text=Channel'