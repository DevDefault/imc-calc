import { useState } from "react";
import InputMask from "react-input-mask";
import "./App.css";

function App() {
    const [UserHeight, setUserHeight] = useState("");
    const [UserWeight, setUserWeight] = useState("");
    const [result, setResult] = useState("");
    const [classification, setClassification] = useState("");

    function handleCalc() {
        setResult(UserWeight / (UserHeight * UserHeight));
        console.log(result);

        if (result < 18.5) {
            setClassification("em estágio da magreza");
        }
        if (result < 24.9 && result > 18.5) {
            setClassification("estágio normal");
        }
        if (result < 30 && result > 24.9) {
            setClassification("acima do seu peso ideal");
        }
        if (result > 30) {
            setClassification("em estágiode obesidade, atenção!");
        }
    }

    let resultContainer;

    if (result > 0) {
        resultContainer = (
            <div className="containerResult">
                <h3>Seu IMC atual é {result.toFixed(2)}</h3>
                <p> E você está {classification} </p>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="card">
                <div className="headerTitle">
                    <h1>Cálcule seu IMC</h1>
                </div>
                <div className="containerInput">
                    <InputMask
                        mask="9.99"
                        type="text"
                        placeholder="Digite sua altura"
                        value={UserHeight}
                        onChange={(e) => setUserHeight(e.target.value)}
                    ></InputMask>
                </div>
                <div className="containerInput">
                    <input
                        type="text"
                        placeholder="Digite seu peso"
                        value={UserWeight}
                        onChange={(e) => setUserWeight(e.target.value)}
                    />
                </div>
                <div className="containerButton">
                    <button className="buttonCalculate" onClick={handleCalc}>
                        Calcular
                    </button>
                </div>
                {resultContainer}
            </div>
            <div></div>
        </div>
    );
}

export default App;
