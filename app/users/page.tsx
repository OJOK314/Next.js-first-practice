export default async function users() {
console.log("hello world")

const response = await fetch("https://jsonplaceholder.typicode.com/users")
const users = await response.json()
   return <div>
      <h1><strong>list for me the users</strong></h1>
      <ul>

{users.map((users:{id:"number", name:"string"})=>(
<li key={users.id}><h1>{users.name}</h1></li>

          ))}
         
      </ul>

   </div>
   
}