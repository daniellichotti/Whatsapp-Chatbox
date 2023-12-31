import styles from './Main.module.css';
import profile from '../img/download.jpeg';
import { ReactNode, useEffect, useState } from 'react';

export function Main() {
    // Defina um estado para armazenar seus elementos
    const [elementos, setElementos] = useState<ReactNode[]>([]);

    // Use useEffect para iniciar o intervalo quando o componente for montado
    useEffect(() => {
        let contador = 0;

        const intervalId = setInterval(() => {
            if (contador < 5) {
                // Crie um novo elemento (por exemplo, uma div) e adicione-o ao estado
                const novoElemento = (
                    <div key={contador}>
                        {contador + 1}
                        <div className={styles.container}>
                            <img
                                className={styles.profileImg}
                                src={profile}
                                alt="imagem profile do whatsapp"
                            />
                            <div className={styles.chatBox}>
                                <p>{contador}</p>
                            </div>
                        </div>
                    </div>
                );
                setElementos((prevElementos) => [
                    ...prevElementos,
                    novoElemento,
                ]);
                contador += 1;
            } else {
                clearInterval(intervalId); // Interrompe o intervalo após adicionar 5 elementos
            }
        }, 2000); // Adiciona um novo elemento a cada 2 segundos

        // Retorna uma função de limpeza para interromper o intervalo quando o componente for desmontado
        return () => clearInterval(intervalId);
    }, []); // Dependência vazia para garantir que o

    return (
        <main className={styles.main}>
            <div className={styles.chatBoxContainer} id="meu-elemento">
                {elementos}
                <div id="meu-elemento">Conteúdo do elemento</div>
            </div>
        </main>
    );
}
