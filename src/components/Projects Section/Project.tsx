// import React from "react";
// import placeHolderImg from "../../assets/images/expedo2.png";
// import logoImg from "../../assets/images/web/logopng.png";
// import Loader from "../others/Loader";

// {
//   /* <img loading="lazy" decoding='async' alt="smash code" src={Image_URL || placeHolderImg} /> */
// }
// {
//   /* <img loading="lazy" decoding='async' alt="smash code" src={placeHolderImg} /> */
// }

// const ProjectCard = (props) => {
//   const {
//     proj_title,
//     proj_desc,a
//     url,
//     category,
//     subCategory,
//     Image_URL,
//     video_url,
//     otherDoc,
//   } = props.data;

//   return (
//     <div
//       className="box-item project-box-item fade-in-bottom flex-column"
//       style={{ "--project-bg": props.bgColor }}
//     >
//       <div className="card-content-wrapper">
//         <div className="project-card-top">
//           <h3 className="box-item-small-title">{proj_title}</h3>
//           <p>{proj_desc}</p>
//         </div>
//         {
//           video_url ? (
//             <div className="box-item-video-block">
//               <video
//                 poster={Image_URL || logoImg}
//                 muted
//                 playsInline
//                 controls
//                 src={video_url}
//               ></video>
//             </div>
//           ) : Image_URL ? (
//             <div className="box-item-image-block">
//               <AsyncImage
//                 loading="lazy"
//                 decoding="async"
//                 alt="smash code"
//                 src={Image_URL || placeHolderImg}
//               />
//             </div>
//           ) : (
//             <div className="box-item-image-block">
//               <AsyncImage
//                 loading="lazy"
//                 decoding="async"
//                 alt="smash code"
//                 src={placeHolderImg}
//               />
//             </div>
//           )

//           // Image_URL ?
//           //   <div className="box-item-image-block">
//           //     <AsyncImage loading="lazy" decoding='async' alt="smash code" src={Image_URL || placeHolderImg} />
//           //   </div>
//           //   :

//           //   video_url ?
//           //     <div className="box-item-video-block">
//           //       <video poster={logoImg} muted playsInline controls src={video_url}></video>
//           //     </div>
//           //     :
//           //     <div className="box-item-image-block">

//           //       <AsyncImage loading="lazy" decoding='async' alt="smash code" src={placeHolderImg} />
//           //     </div>
//         }
//       </div>
//       <div className="proj-card-action-bottom">
//         {url || video_url || otherDoc ? (
//           <a
//             className="prj-card-viemore-btn"
//             href={url || video_url || otherDoc}
//             target="_blank"
//           >
//             View more
//           </a>
//         ) : null}
//       </div>
//     </div>
//   );
// };

// const AsyncImage = (props) => {
//   const [loadedSrc, setLoadedSrc] = React.useState(null);
//   React.useEffect(() => {
//     setLoadedSrc(null);
//     if (props.src) {
//       const handleLoad = () => {
//         setLoadedSrc(props.src);
//       };
//       const image = new Image();
//       image.addEventListener("load", handleLoad);
//       image.src = props.src;
//       return () => {
//         image.removeEventListener("load", handleLoad);
//       };
//     }
//   }, [props.src]);
//   if (loadedSrc === props.src) {
//     return <img {...props} />;
//   }
//   return (
//     <div className="w-100 py-3 text-center">
//       <Loader type="spinner" />
//     </div>
//   );
// };

// export default ProjectCard;
