import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SubjectIcon from '@mui/icons-material/Subject';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PeopleIcon from '@mui/icons-material/People';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import ReviewsIcon from '@mui/icons-material/Reviews';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatIcon from '@mui/icons-material/Chat';
import WalletIcon from '@mui/icons-material/Wallet';

 export const SidebarData = [
{
    title: "Home",
    icon: <HomeIcon />,
    link: "/home"
},

{
    title: "Giveaway List",
    icon: <SubjectIcon />,
    link: "/Giveaway List"
},

{
    title: "Order Details",
    icon: <ContentCopyIcon />,
    link: "/Order Details"
},

{
    title: "Participant",
    icon: <PeopleIcon />,
    link: "/Participant"
},

{
    title: "Leaderboard",
    icon: <LeaderboardIcon />,
    link: "/Leaderboard"
},

{
    title: "Reviews",
    icon: <ReviewsIcon />,
    link: "/Reviews"
},

{
    title: "Calendar",
    icon: <CalendarMonthIcon />,
    link: "/Calendar"
},

{
    title: "Chat",
    icon: <ChatIcon />,
    link: "/Chat"
},

{
    title: "Wallet",
    icon: <WalletIcon />,
    link: "/Wallet"
},
]
