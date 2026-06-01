import LifecycleDemo from "./LifecycleDemo";
import BadCounter from "./BadCounter";
import GoodCounter from "./GoodCounter";
import FlowDemo from "./FlowDemo";

function App() {
    return (
        <div>
            <h1>Tier 1 - React Flow</h1>

            <LifecycleDemo />

            <hr />

            <BadCounter />

            <hr />

            <GoodCounter />

            <hr />

            <FlowDemo />

            <h1>Tier 2 - JSX Variables</h1>

            <SimpleVariables />

            <hr />

            <TernaryDemo />

            <hr />

            <ListRendering />
        </div>
    );
}

export default App;