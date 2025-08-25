import './App.css'
import {UseStateExample} from './hooks/UseState'
import {UseEffectExample} from './hooks/UseEffect'
import { UseContextExample } from './hooks/UseContext'
import  {UseRefExample} from './hooks/UseRef'
function App() {


	return (
		<>
            <UseStateExample/>
			<UseEffectExample/>
			<UseContextExample/>
			<UseRefExample/>
		</>		
	)
}

export default App