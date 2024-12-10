const img1 ="" 
const img2 ="" 
const img3 ="" 
const img4 ="" 
const icon1 ="" 
const icon2 ="" 
const icon3 ="" 

const ddIcon1 ="" 
const ddIcon2 ="" 
const ddIcon3 ="" 
const ddIcon4 ="" 
const ddIcon5 ="" 
const ddIcon6 ="" 
const ddIcon7 ="" 
const ddIcon8 ="" 




//
// Notifications dropdown
//
const notifications = [
  {
    avatar: img1,
    title: 'Roman Joined the Team!',
    subtitle: 'Congratulate him',
  },
  {
    avatar: img2,
    title: 'New message received',
    subtitle: 'Salma sent you new message',
  },
  {
    avatar: img3,
    title: 'New Payment received',
    subtitle: 'Check your earnings',
  },
  {
    avatar: img4,
    title: 'Jolly completed tasks',
    subtitle: 'Assign her new tasks',
  },
  {
    avatar: img1,
    title: 'Roman Joined the Team!',
    subtitle: 'Congratulate him',
  },
  {
    avatar: img2,
    title: 'New message received',
    subtitle: 'Salma sent you new message',
  },
  {
    avatar: img3,
    title: 'New Payment received',
    subtitle: 'Check your earnings',
  },
  {
    avatar: img4,
    title: 'Jolly completed tasks',
    subtitle: 'Assign her new tasks',
  },
];

//
// Profile dropdown
//
const profile = [
  {
    href: '/user-profile',
    title: 'My Profile',
    subtitle: 'Account Settings',
    icon: icon1,
  },
  {
    href: '/apps/email',
    title: 'My Inbox',
    subtitle: 'Messages & Emails',
    icon: icon2,
  },
  {
    href: '/apps/notes',
    title: 'My Tasks',
    subtitle: 'To-do and Daily Tasks',
    icon: icon3,
  },
];

// apps dropdown

const appsLink = [
  {
    href: '/apps/chats',
    title: 'Chat Application',
    subtext: 'Messages & Emails',
    avatar: ddIcon1,
  },
  {
    href: '/apps/ecommerce/shop',
    title: 'eCommerce App',
    subtext: 'Messages & Emails',
    avatar: ddIcon2,
  },
  {
    href: '/apps/invoice/list',
    title: 'Invoice App',
    subtext: 'Messages & Emails',
    avatar: ddIcon3,
  },
  {
    href: '/apps/calendar',
    title: 'Calendar App',
    subtext: 'Messages & Emails',
    avatar: ddIcon4,
  },
  {
    href: '/apps/contacts',
    title: 'Contact Application',
    subtext: 'Account settings',
    avatar: ddIcon5,
  },
  {
    href: '/apps/tickets',
    title: 'Tickets App',
    subtext: 'Account settings',
    avatar: ddIcon6,
  },
  {
    href: '/apps/email',
    title: 'Email App',
    subtext: 'To-do and Daily tasks',
    avatar: ddIcon7,
  },
  {
    href: '/dashboards/ecommerce',
    title: 'Ecom Dashboard ',
    subtext: 'Data-genic Dashbaords',
    avatar: ddIcon8,
  },
];

const pageLinks = [
  {
    href: '/pricing',
    title: 'Pricing Page',
  },
  {
    href: '/auth/login',
    title: 'Authentication Design',
  },
  {
    href: '/auth/register',
    title: 'Register Now',
  },
  {
    href: '/404',
    title: '404 Error Page',
  },
  {
    href: '/apps/notes',
    title: 'Notes App',
  },
  {
    href: '/user-profile',
    title: 'User Application',
  },
  {
    href: '/frontend-pages/blog/',
    title: 'Blog Design',
  },
  {
    href: '/apps/ecommerce/eco-checkout',
    title: 'Shopping Cart',
  },
];
let dropdownData={notifications, profile, pageLinks, appsLink}
export default  dropdownData ;
