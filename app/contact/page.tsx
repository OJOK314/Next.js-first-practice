import ButtonComponent from "./Button";

export default async function Contact() {
 console.log("hey is this the server or client?");
 const response = await fetch("https://jsonplaceholder.typicode.com/posts")
const posts = await response.json()
console.log(posts);


return(
   <div>
    <ButtonComponent/>
   </div>
);
}