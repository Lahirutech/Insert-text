import React, { useState } from 'react';
import styles from './document.module.css';

export const Document = () => {
  const [text, setText] = useState('');
  const [document, setDocument] = useState([]);

  const checkEnter = (e) => {
    if (e.key == 'Enter') {
      setDocument([...document, text]);
      setText('');
    }
  };

  return (
    <div>
      <textarea
      className={styles.textArea}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={checkEnter}
      />
      <div className={styles.container}>
        {document.map((t, idx) => {
          return <p key={idx}> {t}</p>;
        })}
      </div>
    </div>
  );
};
