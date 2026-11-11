import { useState } from "react";

function Counter({ initialCount }) {
const [count, setCount] = useState(0);

return (
<div>
<h2>Counter: {count}</h2>
<button onClick={() => setCount(count + 1)}>
Increase
</button>
</div>
);
}

function UserProfile({ name }) {
return <h2>Welcome, {name}</h2>;
}

function App() {
return (
<div>
<h1>React Debugging Practice</h1>
<Counter initialCount={5} />
<UserProfile name="Aisha" />
</div>
);
}

export default App;