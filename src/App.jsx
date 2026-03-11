import Card from "./components/card"


const App = () => {
  const data = [
  {
    "photo": "https://randomuser.me/api/portraits/men/11.jpg",
    "name": "Arjun Patel",
    "username": "arjun_dev",
    "bio": "Frontend developer who loves React and UI design.",
    "points": 1250,
    "friends": 320,
    "joined_at": "March 2022"
  },
  {
    "photo": "https://randomuser.me/api/portraits/women/12.jpg",
    "name": "Priya Sharma",
    "username": "priya.codes",
    "bio": "Full stack developer and open source contributor.",
    "points": 980,
    "friends": 210,
    "joined_at": "July 2021"
  },
  {
    "photo": "https://randomuser.me/api/portraits/men/13.jpg",
    "name": "Rohan Mehta",
    "username": "rohan_ai",
    "bio": "AI enthusiast building smart applications.",
    "points": 1430,
    "friends": 410,
    "joined_at": "January 2023"
  },
  {
    "photo": "https://randomuser.me/api/portraits/women/14.jpg",
    "name": "Neha Verma",
    "username": "neha.design",
    "bio": "UI/UX designer passionate about user experience.",
    "points": 860,
    "friends": 190,
    "joined_at": "October 2022"
  },
  {
    "photo": "https://randomuser.me/api/portraits/men/15.jpg",
    "name": "Karan Shah",
    "username": "karan_js",
    "bio": "JavaScript developer exploring new frameworks.",
    "points": 1110,
    "friends": 275,
    "joined_at": "May 2020"
  },
  {
    "photo": "https://randomuser.me/api/portraits/women/16.jpg",
    "name": "Ananya Gupta",
    "username": "ananya.tech",
    "bio": "Tech blogger sharing coding tutorials.",
    "points": 760,
    "friends": 150,
    "joined_at": "December 2021"
  },
  {
    "photo": "https://randomuser.me/api/portraits/men/17.jpg",
    "name": "Vikram Singh",
    "username": "vikram_dev",
    "bio": "Backend engineer specializing in Node.js.",
    "points": 1340,
    "friends": 360,
    "joined_at": "August 2019"
  },
  {
    "photo": "https://randomuser.me/api/portraits/women/18.jpg",
    "name": "Sneha Kapoor",
    "username": "sneha_creates",
    "bio": "Creative developer blending art and code.",
    "points": 905,
    "friends": 220,
    "joined_at": "February 2023"
  },
  {
    "photo": "https://randomuser.me/api/portraits/men/19.jpg",
    "name": "Aditya Nair",
    "username": "adi_codes",
    "bio": "Passionate coder building web apps.",
    "points": 1195,
    "friends": 295,
    "joined_at": "June 2021"
  },
  {
    "photo": "https://randomuser.me/api/portraits/women/20.jpg",
    "name": "Kavya Iyer",
    "username": "kavya_ui",
    "bio": "Frontend developer focused on clean design.",
    "points": 1020,
    "friends": 250,
    "joined_at": "September 2020"
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