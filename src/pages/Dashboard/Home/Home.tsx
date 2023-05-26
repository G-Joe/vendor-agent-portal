import { Radio } from "antd";
import Graph from "./Graph";
import OrderCard from "components/VendorPortal/OrderCard";
import TrendingProducts from "./TrendingProducts";
import NewOrders from "./NewOrders";
import receivedIcon from "assets/icons/orders_received.svg";
import outletIcon from "assets/icons/outlets.svg";
import arrowDown from "assets/icons/arrow_down.svg";
import "./home.scss";

const Home = () => {
  
  return (
    <>
    
      <div className="orders">
        <OrderCard
          title="Orders Received"
          status="You have not received any orders"
          icon={receivedIcon}
        />
        <OrderCard
          title="Total Products"
          status="There are no outlets available"
          icon={outletIcon}
        />
      </div>
      <div className="bottom-section">
        <div className="revenue">
          <div className="top-title">
            <h3>Orders</h3>
            <Radio.Group defaultValue="a" buttonStyle="solid"
            >
              <Radio.Button value="a">Monthly</Radio.Button>
              <Radio.Button value="b">Quarterly</Radio.Button>
              <Radio.Button value="c">Annually</Radio.Button>
            </Radio.Group>
          </div>

          <Graph />
        </div>
        <div className="trending">
          <div className="heading">
            <h3>Trending Products</h3>
            <h3>
              Sort By: <span className="today">Today</span>{" "}
              <img src={arrowDown} alt="dropdown caret" />
            </h3>
          </div>
          <hr />
          <TrendingProducts />
        </div>
      </div>

      <div className="outlets">
        <div className="heading">
          <h3>New Orders</h3>
        </div>
        <br />
        <NewOrders />
      </div>
    </>
  );
};

export default Home;
