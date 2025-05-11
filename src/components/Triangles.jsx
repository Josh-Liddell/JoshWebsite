// export default function AnimatedTriangle1() {
//   return (
//     <svg viewBox="0 0 100 100" className="triangle-svg">
//       <polygon fill="#7794ab">
//         <animate
//           attributeName="points"
//           dur="3s"
//           repeatCount="indefinite"
//           values="
//             10,90 90,90 50,10;
//             5,95 95,95 50,5;
//             10,90 90,90 50,10
//           "
//         />
//       </polygon>
//     </svg>
//   );
// }

export default function AnimatedTriangle({ type = 1 }) {
  const points = type === 1 ? "0,10 0,100 100,100" : "0,100 100,100 100,35";
  return (
    <svg
      viewBox="0 0 100 100"
      className="triangle-svg"
      preserveAspectRatio="none"
    >
      <polygon points={points} />
    </svg>
  );
}

// I want to make it so that I specify a slope for each because the slope needs to stay the same I know that much
