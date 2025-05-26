// // export default function CoreConcept({ image, title, description }) {
// //   return(<li>
// //     <img src={image} alt={title}/>
// //     <h3>{title} </h3>
// //     <p> {description}</p>
// //   </li>
// //   );
// // }

// // or we can write above

// // export default function CoreConcept(props) {
// //   return (<li>
// //       <img src={props.image} alt={props.title} />
// //       <h3>{props.title}</h3>
// //       <p>{props.description}</p>
// //     </li>
// //   );
// // }

// // or

// // export default function CoreConcept({ concept }){
// //   return(
// //   <li>
// //     <img src={concept.image} alt={concept.title}/>
// //     <h3>{concept.title} </h3>
// //     <p> {concept.description}</p>
// //   </li>
// //   );
// // }

// // or we can write above

// export default function CoreConcept({ concept }) {
//   const { title, description, image } = concept;
//     return (
//    <li>
//       <img src={image} alt={title} />
//       <h3>{title}</h3>
//       <p>{description}</p>
      
//      </li>
//   );
// }


export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}