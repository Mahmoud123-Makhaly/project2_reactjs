 import "./index.scss" ; 
 import { X } from 'lucide-react';
import { ReactNode } from "react";
import { AlertTypes } from "../../../interfaces";
interface IAlertProps{
    alertItem:{  
        
        type:AlertTypes, 
        title:string, 
        description?:string ; 
        icon:ReactNode 
    } ; 
    children?:ReactNode

}
const Alert = ({alertItem , children}:IAlertProps) => {
    const {type="defaultAlert" ,title , description , icon  } = alertItem
  return (
    <div  className={`${type} p-3 rounded-2 mb-3`}>
        <div className="d-flex justify-content-between  align-items-center">
     <div className="d-flex align-items-center gap-3">
 {icon}
     <h4 className="fw-medium">{title}</h4> 
     </div>
<X/>
        </div>
 {
    description ? <p>{description}</p>:children
 }
    
      
    </div>
  )
}

export default Alert