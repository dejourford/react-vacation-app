import Header from "./components/Header"
import Card from "./components/Card"
import data from "../data.js"
import Footer from "./components/Footer"
export default function App() {
const cardElement = data.map(function(item) {
  return <Card 
  key = {item.id}
  description = {item.description}
  date = {item.date}
  img = {item.img}
  location = {item.location}
  title = {item.title}
  link = {item.link}
  />
})
  
console.log(cardElement)  
  return (
    <div className="container">
        <Header />
        <main>
          {cardElement}
        </main>
        <Footer />
    </div>
  )
}
