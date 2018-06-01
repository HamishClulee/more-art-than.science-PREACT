import { h } from 'preact'
import Header from '../components/Header/'

export const App = () => (
  <div>
    <Header/>
    <div className="text-container">
      <h1>But what does that even mean?</h1>
    </div>
  </div>
)


export default () => (
    <App />
)
