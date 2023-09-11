import { useQuery } from "@tanstack/react-query";
import StudentsTemp from "./studentstemp";
import { FallingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";

const api = 'https://student-s-table-default-rtdb.firebaseio.com/students.json'

const StudentsData = () => {


    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          fetch(api).then(
            (res) => res.json(),
          ),
      })
    
      if (isLoading) return <div className="loadericon"> 
         <FallingLines
      color="#ff5252"
      width="100"
      visible={true}
      ariaLabel='falling-lines-loading'
    />
      </div>
    
      if (error) return 'An error has occurred: ' + error.message

      if (!data) return <p className="emptyerror"> No data available, Head to  <Link to='/input' style={
        {textDecoration:'none',color:"#32a852", margin:"5px"} }> Input data </Link>  to Add data </p>

    const keys = Object.values(data)



      
    return ( 
        <div>
            <StudentsTemp Stemp={keys} />
        </div>
     );
}
 
export default StudentsData;