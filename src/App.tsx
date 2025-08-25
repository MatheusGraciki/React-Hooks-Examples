import './App.css'
import {UseStateExample} from './hooks/UseState'
import {UseEffectExample} from './hooks/UseEffect'
import { UseContextExample } from './hooks/UseContext'
function App() {


	return (
		<>
            <UseStateExample/>
			<UseEffectExample/>
			<UseContextExample/>
		</>		
	)
}

export default App