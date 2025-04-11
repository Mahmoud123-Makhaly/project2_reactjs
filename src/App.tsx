import Alert from "./components/ui/alert/Alert" ; 
import { BellRing } from 'lucide-react';
import {Ban  } from 'lucide-react';
import { CircleAlert } from 'lucide-react';
import { BookCopy } from 'lucide-react';
import { LaptopMinimalCheck } from 'lucide-react';

const alertData=[
  {
    id:crypto.randomUUID() , 
    type:"defaultAlert" , 
    title:"Alert title1" , 
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quis adipisci consequuntur officia numquam voluptatibus amet perferendis ut alias aut?" , 
    icon:<BellRing /> 
  } , 
  {
    id:crypto.randomUUID() , 
    type:"infoAlert" , 
    title:"Alert title2" , 
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quis adipisci consequuntur officia numquam voluptatibus amet perferendis ut alias aut?" , 
    icon:<BookCopy /> 
  } , 
  {
    id:crypto.randomUUID() , 
    type:"warningAlert" , 
    title:"Alert title3" , 
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quis adipisci consequuntur officia numquam voluptatibus amet perferendis ut alias aut?" , 
    icon:<CircleAlert /> 
  } , 
  {
    id:crypto.randomUUID() , 
    type:"errorAlert" , 
    title:"Alert title4" , 
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quis adipisci consequuntur officia numquam voluptatibus amet perferendis ut alias aut?" , 
    icon:<Ban /> 
  } , 
 
  {
    id:crypto.randomUUID() , 
    type:"successAlert" , 
    title:"Alert title5" , 
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quis adipisci consequuntur officia numquam voluptatibus amet perferendis ut alias aut?" , 
    icon:<LaptopMinimalCheck /> 
  } , 
]
const App = () => {
  return (
    <div className="app">
      {
        alertData.map((alertItem)=>{
          return(
            <Alert key={alertItem.id} alertItem={alertItem} /> 
          )
        })
      }

 
    </div>
  )
}

export default App