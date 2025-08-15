import { useCallback, useState } from "react";

function Botao({ onClick }) {
    console.log("Botão renderizado");
    return <button onClick={onClick}>incrementar</button>;

}

export default function Atividade6() {
    const [count, setCount] = useState(0);

    const incrementar = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []);

    return (
        <div>
            <p>Contador: {count}</p>
            <Botão onClick={incrementar} />
        </div>
    );
}