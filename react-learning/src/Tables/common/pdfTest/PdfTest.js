import React from 'react'

import { usePDF, Document, Page, View, Text, PDFDownloadLink, StyleSheet } from '@react-pdf/renderer';
import PdfFile from './PdfFile';


// const PdfBody = ()=>{
//     const styles = StyleSheet.create({
//         page: {
//           flexDirection: "coloum",
//           backgroundColor: "white",
//           paddingBottom: 75
//         },
//         section: {
//           margin: 10,
//           padding: 10,
//           flexGrow: 1,
//           position:"relative"
//         },
//         pNumber:{
//             position: "absolute",
//             fontSize: 12,
//             bottom: 0,
//             left: 0,
//             right: 0,
//             textAlign: "center",
//             color: "grey",
//         },
//         watermark :{
//             color: 'rgba(0, 0, 0, 0.2)',
//           fontSize: "50px",
//           fontWeight: 'bold',
//           textTransform: 'uppercase',
//           transform: 'rotate(-45deg)',
//           position: "absolute",
//          left: "30%",
//            top: "50%",
//         display: "flex",
//         alignItems:"center",
//         justifyContent:"center"
//         }
        
//       });
//     return(
//         <Document>
//         {/** Page defines a single page of content. */}
//         <Page size="A4" style={styles.page}>
//           <View style={styles.section}>
//             <Text>S.0</Text>
//           </View>
//           <View style={styles.section}>
//           <Text fixed style={styles.watermark}>WaterMark</Text>
//             <Text>sum is that it has a more-or-less normal distribution 
//                 of letters, as oppoto using 'Content here, content here', 
//                 making it lo<br/>
//                 sum is that it has a more-or-less normal distribution 
//                 of letters, as oppoto using 'Content here, content here', 
//                 making it lo<br/>
//                 sum is that it has a more-or-less normal distribution 
//                 of letters, as oppoto using 'Content here, content here', 
//                 making it lo <br />
//                 sum is that it has a more-or-less normal distribution 
//                 of letters, as oppoto using 'Content here, content here', 
//                 making it lo <br />
//                 sum is that it has a more-or-less normal distribution 
//                 of letters, as oppoto using 'Content here, content here', 
//                 making it lo <br />
//                 </Text>
//                 <Text>sum is that it has a more-or-less normal distribution 
//                 of letters, as oppoto using 'Content here, content here', 
//                 making it lo<br/>
//                 sum is that it has a more-or-less normal distribution 
//                 of letters, as oppoto using 'Content here, content here', 
//                 making it lo<br/>
//                 sum is that it has a more-or-less normal distribution 
//                 of letters, as oppoto using 'Content here, content here', 
//                 making it lo <br />
//                 sum is that it has a more-or-less normal distribution 
//                 of letters, as oppoto using 'Content here, content here', 
//                 making it lo <br />
//                 sum is that it has a more-or-less normal distribution 
//                 of letters, as oppoto using 'Content here, content here', 
//                 making it lo <br />
//                 </Text>
//                 <Text>sum is that it has a more-or-less normal distribution 
//                 of letters, as oppoto using 'Content here, content here', 
//                 making it lo<br/>
//                 sum is that it has a more-or-less normal distribution 
//                 of letters, as oppoto using 'Content here, content here', 
//                 making it lo<br/>
//                 sum is that it has a more-or-less normal distribution 
//                 of letters, as oppoto using 'Content here, content here', 
//                 making it lo <br />
//                 sum is that it has a more-or-less normal distribution 
//                 of letters, as oppoto using 'Content here, content here', 
//                 making it lo <br />
//                 sum is that it has a more-or-less normal distribution 
//                 of letters, as oppoto using 'Content here, content here', 
//                 making it lo <br />
//                 </Text>
//                 <Text>sum is that it has a more-or-less normal distribution 
//                 of letters, as oppoto using 'Content here, content here', 
//                 making it lo<br/>
//                 sum is that it has a more-or-less normal distribution 
//                 of letters, as oppoto using 'Content here, content here', 
//                 making it lo<br/>
//                 sum is that it has a more-or-less normal distribution 
//                 of letters, as oppoto using 'Content here, content here', 
//                 making it lo <br />
//                 sum is that it has a more-or-less normal distribution 
//                 of letters, as oppoto using 'Content here, content here', 
//                 making it lo <br />
//                 sum is that it has a more-or-less normal distribution 
//                 of letters, as oppoto using 'Content here, content here', 
//                 making it lo <br />
//                 </Text>
//                 <Text>sum is that it has a more-or-less normal distribution 
//                 of letters, as oppoto using 'Content here, content here', 
//                 making it lo<br/>
//                 sum is that it has a more-or-less normal distribution 
//                 of letters, as oppoto using 'Content here, content here', 
//                 making it lo<br/>
//                 sum is that it has a more-or-less normal distribution 
//                 of letters, as oppoto using 'Content here, content here', 
//                 making it lo <br />
//                 sum is that it has a more-or-less normal distribution 
//                 of letters, as oppoto using 'Content here, content here', 
//                 making it lo <br />
//                 sum is that it has a more-or-less normal distribution 
//                 of letters, as oppoto using 'Content here, content here', 
//                 making it lo <br />
//                 </Text>
//           </View>
//           <View style={styles.footer} fixed>
//           <Text
//             style={styles.pNumber}
//             render={({ pageNumber, totalPages }) =>
//               `${pageNumber} / ${totalPages}`
//             }
//           ></Text>
        
        
//           </View>
//         </Page>
//       </Document>
//     )
// }

const PdfTest = () => {
  return (
    <PDFDownloadLink document={<PdfFile />} fileName='report'>
        Download
       {/* {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download</button> )} */}
    </PDFDownloadLink>
  );
}
export default PdfTest;
