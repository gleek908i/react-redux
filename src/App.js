import React from 'react';

// function App() {
//   return <div><h1>Hello,World!</h1></div>;
  
// }


const App = () => {
  const profile = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
    {name: "Noname" },
  ]
  return (
    <div>
      {
        profile.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}
const User = (props) => {
return <div>Hi, I am {props.name}, and {props.age} years old!</div>
}

User.defaultProps = {
  age: 1
}

export default App;
