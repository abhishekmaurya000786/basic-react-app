import Card from './Components/Card.jsx'

const App = () => {

  let users = [
  {
    "name": "Aarav Mehta",
    "city": "Mumbai",
    "age": 28,
    "profession": "Software Engineer",
    "photo": "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    "name": "Ishita Sharma",
    "city": "Bengaluru",
    "age": 24,
    "profession": "UI/UX Designer",
    "photo": "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    "name": "Rohan Patel",
    "city": "Delhi",
    "age": 30,
    "profession": "Data Scientist",
    "photo": "https://randomuser.me/api/portraits/men/12.jpg"
  },
  {
    "name": "Simran Kaur",
    "city": "Chandigarh",
    "age": 26,
    "profession": "Digital Marketer",
    "photo": "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    "name": "Karan Verma",
    "city": "Pune",
    "age": 35,
    "profession": "Product Manager",
    "photo": "https://randomuser.me/api/portraits/men/54.jpg"
  }
]


return (
  <div>
      <div className='mr-7 p-10 w-full items-center inline-block'>
        {users.map((elem,idx)=>{
          return <Card key={idx} {...elem}/>
        })}

      </div>
    </div>
  )
}

export default App;
