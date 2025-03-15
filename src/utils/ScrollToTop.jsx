import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = () => {
  const { pathname } = useLocation(); // 監聽當前網址路徑變化

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // 當網址變更時觸發

  return null; // 這個組件不需要渲染任何東西
};

export default ScrollToTop;
