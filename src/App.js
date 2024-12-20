import './App.css';
import Timer from './components/Timer';
import Player from './components/Player';
import Button from './components/Buttons';
import { useRef, useEffect } from 'react';

function App() {
  // Рефи дозволяють отримати прямий доступ до DOM вузлів або реакт елементів і з шаблону компоненту
  // Рефи створюються хуком useRef т априв'язуються до елементів через атрибут ref(скороченр від referebce) 
  // у якому зерігається посидання на DOM елемент
  // Якщо посилання не може знайти елемент то у ньому буде значення null
  // Рефи це не стан, тому вони не реактивні. Це означає що зміна рефу не впливає на ононвлення компоненту
  // та не виклиткає ререндер
  // 

  const buttoonRef = useRef()
  console.log(buttoonRef.current);
  
  useEffect(()=> {
    buttoonRef.current.style.backgroundColor = "red"
  })

  return (
  <>
    <Timer/>
    <Player source={"https://videos.pexels.com/video-files/855029/855029-hd_1920_1080_30fps.mp4"}/>
    <Button text="Button" ref={buttoonRef}/>
  </>
  );
}

export default App;
