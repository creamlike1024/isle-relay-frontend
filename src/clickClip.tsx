import React from 'react';
import copyIcon from './assets/content_copy_black_24dp.svg' ;

interface ClickToCopyProps {
  children: string;
}

const ClickToCopy: React.FC<ClickToCopyProps> = ({ children }) => {

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(children);
    } catch (error) {
      console.error('复制失败:', error);
    } finally {
      alert("复制成功！");
    }
  };

  return (
      <a title="点击复制" onClick={handleCopyClick} style={{cursor: 'pointer'}}>
        <img src={copyIcon} style={{'height' : '0.8em'}} />{children && <span>{children}</span>}
      </a>
  );
};

export default ClickToCopy;
