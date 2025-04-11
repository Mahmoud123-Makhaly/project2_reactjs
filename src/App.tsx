import Alert from "./components/ui/alert/Alert" ; 
import { BellRing } from 'lucide-react';
import {Ban  } from 'lucide-react';
import { CircleAlert } from 'lucide-react';
import { BookCopy } from 'lucide-react';
import { LaptopMinimalCheck } from 'lucide-react';

const alertData=[
  {
    id:crypto.randomUUID() , 
    type:"defaultAlert" as const , 
    title:"Alert title1" , 
    
    icon:<BellRing /> 
  } , 
  {
    id:crypto.randomUUID() , 
    type:"infoAlert"  as const, 
    title:"Alert title2" , 
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quis adipisci consequuntur officia numquam voluptatibus amet perferendis ut alias aut?" , 
    icon:<BookCopy /> 
  } , 
  {
    id:crypto.randomUUID() , 
    type:"warningAlert"  as const, 
    title:"Alert title3" , 
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quis adipisci consequuntur officia numquam voluptatibus amet perferendis ut alias aut?" , 
    icon:<CircleAlert /> 
  } , 
  {
    id:crypto.randomUUID() , 
    type:"errorAlert"  as const, 
    title:"Alert title4" , 
    description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quis adipisci consequuntur officia numquam voluptatibus amet perferendis ut alias aut?" , 
    icon:<Ban /> 
  } , 
 
  {
    id:crypto.randomUUID() , 
    type:"successAlert" as const , 
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
            <Alert key={alertItem.id} alertItem={alertItem} >
             <div>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque quis adipisci consequuntur officia numquam voluptatibus amet perferendis <a href=""> ut alias aut?</a>
    </div>
            </Alert> 
          )
        })
      }

 
    </div>
  )
}

export default App