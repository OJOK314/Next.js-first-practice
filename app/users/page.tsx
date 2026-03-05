
export default async function Users() {
   console.log("hey is this the server or client?");
   const response = await fetch("https://jsonplaceholder.typicode.com/users");
   const users = await response.json()
   return  <div>
      <h1>user List</h1>
      <ul>
         {users.map((user: {Id:"number", name:"string"}) =>(
            <li key={user.Id}>
               <h1>
                  {user.name}
               </h1>
            </li>
         ))}
      </ul>

       </div>;
      
}