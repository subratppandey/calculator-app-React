import { useState } from "react";

function App() {

	const [calc, setCalc] = useState("");
	const [result, setResult] = useState("");

	const operators = ['*', '/', '+', '-', '.'];

	const updateCalc = (value) => {
		if (
			operators.includes(value) && calc === "" ||
			operators.includes(value) && operators.includes(calc.slice(-1)
			)
		) {
			return;
		}

		setCalc(calc + value);

		if (!operators.includes(value)) {
			setResult(eval(calc + value).toString());
		}
	}

	const createDigits = () => {
		const digits = [];

		for (let i = 1; i < 10; i++){
			digits.push(
				<button 
					onClick={() => updateCalc(i.toString())} 
					key = {i}> 
						{i} 
				</button>
			)
		}
		return digits;
	}

	const calculate = () => {
		setCalc(eval(calc).toString());
	}

	const deleteLast = () => {
		if (calc == ""){
			return;
		}
		const value = calc.slice(0, -1);
		setCalc(value);
	}

	return (
		<div className="App">
			<div className="fi-calculator">

				<div className="fi-display">
					{ result ? <span>({result})</span>: "" } 
					&nbsp;
					{ calc || "0"}
				</div>

				<div className="fi-operators" >
					<button onClick={() => updateCalc('*')}>*</button>
					<button onClick={() => updateCalc('/')}>/</button>
					<button onClick={() => updateCalc('+')}>+</button>
					<button onClick={() => updateCalc('-')}>-</button>

					<button onClick={deleteLast}>DEL</button>
				</div>

				<div className="fi-digits" >
					{ createDigits() }
					<button onClick={() => updateCalc('0')}>0</button>
					<button onClick={() => updateCalc('.')}>.</button>

					<button onClick={calculate}>=</button>				
				</div>

			</div>
		</div>
	);
}

export default App;