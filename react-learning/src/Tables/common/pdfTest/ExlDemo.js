
// import axios from 'axios'

// import {ExportToExcel} from './ExportToExcel'
// import { useEffect, useState } from 'react';

// function ExlDemo() {
//   const [data, setData] = useState([])
//   const fileName = "myfile"; // here enter filename for your excel file

//   useEffect(() => {
//     const fetchData = () =>{
//      axios.get('https://jsonplaceholder.typicode.com/posts').then(postData => {

//      // reshaping the array
//      const customHeadings = postData.data.map(item=>({
//        "Article Id": item.id,
//        "Article Title": item.title
//      }))

//       setData(customHeadings) 
//      })
//     }
//     fetchData()
//   }, [])

//   return (
//     <div>
//       <ExportToExcel ExportTitle="Export" apiData={data} fileName={fileName} />
//     </div>
//   );
// }

// export default ExlDemo;