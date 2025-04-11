 import "./index.scss" ; 
 import { X } from 'lucide-react';
import { ReactNode } from "react";
interface IAlertProps{
    alertItem:{   
        type:string , 
        title:string, 
        description:string ; 
        icon:ReactNode
    }

}
const Alert = ({alertItem}:IAlertProps) => {
    const {type="defaultAlert" ,title , description , icon } = alertItem
  return (
    <div  className={`${type} p-3 rounded-2 mb-3`}>
        <div className="d-flex justify-content-between  align-items-center">
     <div className="d-flex align-items-center gap-3">
 {icon}
     <h4 className="fw-medium">{title}</h4> 
     </div>
<X/>
        </div>
        <p>{description}</p>
    </div>
  )
}

export default Alert