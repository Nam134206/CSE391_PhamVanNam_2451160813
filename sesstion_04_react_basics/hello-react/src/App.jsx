import LifecycleDemo from "./LifecycleDemo";
import BadCounter from "./BadCounter";
import GoodCounter from "./GoodCounter";
import FlowDemo from "./FlowDemo";
import NumberState from "./components/NumberState";
import StringState from "./components/StringState";
import BooleanState from "./components/BooleanState";
import MultipleStates from "./components/MultipleStates";
import SimpleVariables from "./SimpleVariables";
import TernaryDemo from "./TernaryDemo";
import ListRendering from "./ListRendering";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import UserCard from "./components/UserCard";
import ClickEvents from "./ClickEvents";
import InputEvents from "./InputEvents";
import KeyboardEvents from "./KeyboardEvents";
import FormEvents from "./FormEvents";
import ListBasics from "./ListBasics";
import CreateItem from "./CreateItem";
import DeleteItem from "./DeleteItem";
import UpdateItem from "./UpdateItem";

function App() {
    const products = [
        {
            id: 1,
            name: "iPhone 15",
            price: "25.000.000",
            image: "https://picsum.photos/250/150?1"
        },
        {
            id: 2,
            name: "Samsung S24",
            price: "22.000.000",
            image: "https://picsum.photos/250/150?2"
        },
        {
            id: 3,
            name: "Xiaomi 14",
            price: "15.000.000",
            image: "https://picsum.photos/250/150?3"
        }
    ];

    const users = [
        {
            id: 1,
            name: "Nguyễn Văn Minh",
            email: "minh@gmail.com",
            avatar: "https://i.pravatar.cc/100?img=1"
        },
        {
            id: 2,
            name: "Trần Văn An",
            email: "an@gmail.com",
            avatar: "https://i.pravatar.cc/100?img=2"
        },
        {
            id: 3,
            name: "Lê Thị Linh",
            email: "linh@gmail.com",
            avatar: "https://i.pravatar.cc/100?img=3"
        }
    ];
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

            <Header />

            <div style={{ padding: "20px" }}>
                <h2>Danh sách sản phẩm</h2>

                <div
                    style={{
                        display: "flex",
                        gap: "20px",
                        flexWrap: "wrap"
                    }}
                >
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>

                <hr />

                <h2>Danh sách người dùng</h2>

                {users.map((user) => (
                    <UserCard
                        key={user.id}
                        name={user.name}
                        email={user.email}
                        avatar={user.avatar}
                    />
                ))}
            </div>

            <Footer />

            <h1>Tier 4 - useState Basics</h1>

            <NumberState />

            <hr />

            <StringState />

            <hr />

            <BooleanState />

            <hr />

            <MultipleStates />
            <h1>Tier 5 - Events</h1>

            <ClickEvents />

            <hr />

            <InputEvents />

            <hr />

            <KeyboardEvents />

            <hr />

            <FormEvents />
            <h1>
                Tier 6 - Lists & CRUD
            </h1>

            <ListBasics />

            <hr />

            <CreateItem />

            <hr />

            <DeleteItem />

            <hr />

            <UpdateItem />
        </div>
    );
}

export default App;