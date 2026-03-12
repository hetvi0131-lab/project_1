// import Card from "./components/card"


// const App = () => {
//   const data = [
//   {
//     "photo": "https://randomuser.me/api/portraits/men/11.jpg",
//     "name": "Arjun Patel",
//     "username": "arjun_dev",
//     "bio": "Frontend developer who loves React and UI design.",
//     "points": 1250,
//     "friends": 320,
//     "joined_at": "March 2022"
//   },
//   {
//     "photo": "https://randomuser.me/api/portraits/women/12.jpg",
//     "name": "Priya Sharma",
//     "username": "priya.codes",
//     "bio": "Full stack developer and open source contributor.",
//     "points": 980,
//     "friends": 210,
//     "joined_at": "July 2021"
//   },
//   {
//     "photo": "https://randomuser.me/api/portraits/men/13.jpg",
//     "name": "Rohan Mehta",
//     "username": "rohan_ai",
//     "bio": "AI enthusiast building smart applications.",
//     "points": 1430,
//     "friends": 410,
//     "joined_at": "January 2023"
//   },
//   {
//     "photo": "https://randomuser.me/api/portraits/women/14.jpg",
//     "name": "Neha Verma",
//     "username": "neha.design",
//     "bio": "UI/UX designer passionate about user experience.",
//     "points": 860,
//     "friends": 190,
//     "joined_at": "October 2022"
//   },
//   {
//     "photo": "https://randomuser.me/api/portraits/men/15.jpg",
//     "name": "Karan Shah",
//     "username": "karan_js",
//     "bio": "JavaScript developer exploring new frameworks.",
//     "points": 1110,
//     "friends": 275,
//     "joined_at": "May 2020"
//   },
//   {
//     "photo": "https://randomuser.me/api/portraits/women/16.jpg",
//     "name": "Ananya Gupta",
//     "username": "ananya.tech",
//     "bio": "Tech blogger sharing coding tutorials.",
//     "points": 760,
//     "friends": 150,
//     "joined_at": "December 2021"
//   },
//   {
//     "photo": "https://randomuser.me/api/portraits/men/17.jpg",
//     "name": "Vikram Singh",
//     "username": "vikram_dev",
//     "bio": "Backend engineer specializing in Node.js.",
//     "points": 1340,
//     "friends": 360,
//     "joined_at": "August 2019"
//   },
//   {
//     "photo": "https://randomuser.me/api/portraits/women/18.jpg",
//     "name": "Sneha Kapoor",
//     "username": "sneha_creates",
//     "bio": "Creative developer blending art and code.",
//     "points": 905,
//     "friends": 220,
//     "joined_at": "February 2023"
//   },
//   {
//     "photo": "https://randomuser.me/api/portraits/men/19.jpg",
//     "name": "Aditya Nair",
//     "username": "adi_codes",
//     "bio": "Passionate coder building web apps.",
//     "points": 1195,
//     "friends": 295,
//     "joined_at": "June 2021"
//   },
//   {
//     "photo": "https://randomuser.me/api/portraits/women/20.jpg",
//     "name": "Kavya Iyer",
//     "username": "kavya_ui",
//     "bio": "Frontend developer focused on clean design.",
//     "points": 1020,
//     "friends": 250,
//     "joined_at": "September 2020"
//   }
// ];
//   return (
//     <>
//    <section className="flex flex-wrap justify-center">

//     {data.map(function(user) {
//       return <Card data = {user} />;
//     })}
//    </section>
//     </>
//   );
// };

// export default App;



import Card from "./components/card"


const App = () => {
  const data =[
  {
    "company_logo": "https://thumbs.dreamstime.com/b/amazon-logo-editorial-illustrative-white-background-eps-download-vector-jpeg-banner-ai-amazon-logo-editorial-illustrative-208329107.jpg",
    "company_name": "Amazon",
    "posted": "5 days ago",
    "job_title": "Senior UI/UX Designer",
    "job_type": "Part-time",
    "experience_level": "Senior level",
    "salary": "$120/hr",
    "location": "San Francisco, CA",
    "apply_button": "Apply now"
  },
  {
    "company_logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/500px-Google_%22G%22_logo.svg.png",
    "company_name": "Google",
    "posted": "2 days ago",
    "job_title": "Product Designer",
    "job_type": "Full-time",
    "experience_level": "Mid level",
    "salary": "$110/hr",
    "location": "Mountain View, CA",
    "apply_button": "Apply now"
  },
  {
    "company_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
    "company_name": "Microsoft",
    "posted": "1 week ago",
    "job_title": "UX Researcher",
    "job_type": "Full-time",
    "experience_level": "Senior level",
    "salary": "$115/hr",
    "location": "Seattle, WA",
    "apply_button": "Apply now"
  },
  {
    "company_logo": "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    "company_name": "Apple",
    "posted": "4 days ago",
    "job_title": "Senior Product Designer",
    "job_type": "Full-time",
    "experience_level": "Senior level",
    "salary": "$130/hr",
    "location": "Cupertino, CA",
    "apply_button": "Apply now"
  },
  {
    "company_logo": "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    "company_name": "Netflix",
    "posted": "6 days ago",
    "job_title": "UX Designer",
    "job_type": "Part-time",
    "experience_level": "Mid level",
    "salary": "$118/hr",
    "location": "Los Gatos, CA",
    "apply_button": "Apply now"
  },
  {
    "company_logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/960px-Spotify_App_Logo.svg.png",
    "company_name": "Spotify",
    "posted": "3 days ago",
    "job_title": "UI Designer",
    "job_type": "Contract",
    "experience_level": "Mid level",
    "salary": "$108/hr",
    "location": "New York, NY",
    "apply_button": "Apply now"
  }
];
  return (
    <>
   <section className="flex flex-wrap justify-center">

    {data.map(function(user) {
      return <Card data = {user} />;
    })}
   </section>
    </>
  );
};

export default App;