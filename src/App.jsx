import React,{useEffect,useState} from 'react'
import Sidebar from './components/organisms/sidebar'
import Content from './components/pages/Content'
import Timeline from './components/molecules/Timeline'
import Loader from './components/atoms/Loader/loader'
import { TaskProvider } from './context/TaskContext';

function App() {
const [isloading,setIsLoading]=useState(true);

setTimeout(() => {
  setIsLoading(false);

}, 1000);
  return (
    <>
  
 <div style={{display:'flex'}}>

{
isloading?<Loader/>
:
<TaskProvider>


<Sidebar/>
<Content/>


<Timeline/>

</TaskProvider>

}


 </div>
    
 
    </>
  )
}

export default App
