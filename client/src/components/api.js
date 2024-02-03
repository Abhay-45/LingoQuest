// import React from 'react'
// import { Button,} from "reactstrap";

// function Api() {
//     const handleProcess = () => {
//         fetch('http://127.0.0.1:5000/translate', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 english: "Hi, I'm English"
//             })
//         })
//             .then((Response) => Response.json())
//             .then((Result) => {
//                 console.log(Result)

//             });
//     }

//     const translateText = async () => {
//         try {
//           const response = await fetch('http://127.0.0.1:5000/translate', {
//             method: 'POST',
//             headers: {
//               'Accept': 'application/json',
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//               english: inputText,
//             }),
//           });
//           // console.log("inside english to")
//           const result = await response.json();
//           console.log(result);
//           const data = await response.json();
//           setTranslation(data.german_text);
//           console.log(data.german_text)
    
          
//         } catch (error) {
//           console.error('Error processing translation:', error);
//         }
//       };
    
//   return (
    
//     <Button color="danger" size='lg' className="btn-round" onClick={handleProcess} style={{
//         paddingLeft: 30,
//         paddingRight: 30
//     }}>
//         <i className="fa fa-times" /> Remove
//     </Button>
//   )
// }

// export default Api