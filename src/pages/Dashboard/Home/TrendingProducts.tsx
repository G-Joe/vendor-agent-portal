import phone from "assets/icons/vendor_phone.svg";
import phone2 from "assets/icons/vendor_phone2.svg";
import phone3 from "assets/icons/vendor_phone3.svg";
import phone4 from "assets/icons/vendor_phone4.svg";
import "./home.scss";


const data = [
    {
        img: phone, 
        name: "Samsung Galaxy A04s",
        date: "5/02/2023",
        price: "₦‎ 110,000",
        priceTitle: "Price",
        orders: "246/300",
        orderTitle: "Orders"
    },
    {
        img: phone2, 
        name: "Oppo Refurbished A3S",
        date: "5/02/2023",
        price: "₦‎ 110,000",
        priceTitle: "Price",
        orders: "246/300",
        orderTitle: "Orders"
    },
    {
        img: phone3, 
        name: "Apple IPhone 13 Pro Max",
        date: "5/02/2023",
        price: "₦‎ 110,000",
        priceTitle: "Price",
        orders: "246/300",
        orderTitle: "Orders"
    },
    {
        img: phone4, 
        name: "XIAOMI Redmi 10A",
        date: "5/02/2023",
        price: "₦‎ 110,000",
        priceTitle: "Price",
        orders: "246/300",
        orderTitle: "Orders"
    },
   

]

const TrendingProducts = () => {
    return (
        <div>
            {data.map(phones => (
                <div className="trending-products">
                    <img src={phones.img} className="trending-device" alt="trending-device"/>
                    <div className="trends">
                        <h4>{phones.name}<br/><span>{phones.date}</span></h4>
                        <h4>{phones.price}<br/><span>{phones.priceTitle}</span></h4>
                        <h4 className="last-column">{phones.orders}<br/><span>{phones.orderTitle}</span></h4>
                    </div>
                </div>   
            ))}
                         
        </div>
    )
}

export default TrendingProducts;