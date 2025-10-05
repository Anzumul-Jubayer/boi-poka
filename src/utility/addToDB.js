import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);


const getStoredBook=()=>{

    const storedBookSTR=localStorage.getItem('readList')
    if(storedBookSTR){
        const storedBookData=JSON.parse(storedBookSTR)
        return storedBookData
    }else{
        return []
    }
}
const addToStoredDB=(id)=>{
  const storedBookData=getStoredBook()
  if(storedBookData.includes(id)){
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Already added!!"
 
});
  }else{
    storedBookData.push(id)
    const data=JSON.stringify(storedBookData)
    localStorage.setItem('readList',data)
  }
}

export {addToStoredDB,getStoredBook}
