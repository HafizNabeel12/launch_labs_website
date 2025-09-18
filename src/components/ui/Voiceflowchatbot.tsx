// 'use client'
// import { useEffect } from 'react';

// const VoiceflowChatbot = () => {
//   useEffect(() => {
//     const v = document.createElement('script');
//     v.type = 'text/javascript';
//     v.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
//     v.onload = () => {
//       // @ts-expect-error: voiceflow is a non-typed external script
//       window.voiceflow.chat.load({
//         verify: { projectID: '684fd45dd1e03ab7bb1a1164' },
//         url: 'https://general-runtime.voiceflow.com',
//         versionID: 'production',
//         voice: {
//           url: 'https://runtime-api.voiceflow.com'
//         }
//       });
//     };
//     document.body.appendChild(v);
//   }, []);

//   return null;
// };

// export default VoiceflowChatbot;
