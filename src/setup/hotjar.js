const hotjar = `
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:${window.env.REACT_APP_HOTJAR_TOKEN},hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
`;

export const setupHotjar = () => {
  const script = document.createElement('script');
  const textNode = document.createTextNode(hotjar);
  script.append(textNode);
  document.head.appendChild(script);
};
