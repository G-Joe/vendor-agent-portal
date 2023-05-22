import { useState } from "react";
import { Table } from "antd";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import useDisclosure from "components/Modal/useDisclosure";
import ConfirmModal from "components/Modal/ConfirmModal";
import StatusModal from "components/Modal/StatusModal";
import AppleCharger from "assets/images/apple_charger.png";
import Naira from "assets/icons/naira_small.svg";
import Dell from "assets/images/dell_xps.png";
import LaptopCharger from "assets/images/laptop_charger.png";
import Samsung from "assets/images/samsung_22.png";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import Select from "components/Input/Select";
import searchIcon from "assets/icons/search_icon.svg";
import OtpInput from "react-otp-input";
import successIcon from "assets/icons/success.gif";
import warning from "assets/icons/warning.svg";



import "./orderMgt.scss";

const InventoryMgt = () => {
  // Columns
  const columns = [
    {
      title: "S/N",
      dataIndex: "sn",
      sorter: {
        compare: (a: any, b: any) => a.sn - b.sn,
        multiple: 9,
      },
    },
    {
      title: "Loan ID",
      dataIndex: "loanId",
      sorter: {
        compare: (a: any, b: any) => a.date - b.date,
        multiple: 8,
      },
    },
    {
      title: "Order Date",
      dataIndex: "orderDate",
      sorter: {
        compare: (a: any, b: any) => a.img - b.img,
        multiple: 7,
      },
    },

    {
      title: "Disbursal Date",
      dataIndex: "disbursalDate",
      sorter: {
        compare: (a: any, b: any) => a.img - b.img,
        multiple: 6,
      },
    },
    {
      title: "Product Category",
      dataIndex: "category",
      sorter: {
        compare: (a: any, b: any) => a.category - b.category,
        multiple: 5,
      },
    },
    {
      title: "Product Brand",
      dataIndex: "brand",
      sorter: {
        compare: (a: any, b: any) => a.brand - b.brand,
        multiple: 4,
      },
    },
    {
      title: "Product Name",
      dataIndex: "name",
      sorter: {
        compare: (a: any, b: any) => a.name - b.name,
        multiple: 3,
      },
    },
    {
      title: "Total Amount",
      dataIndex: "totalAmount",
      sorter: {
        compare: (a: any, b: any) => a.name - b.name,
        multiple: 2,
      },
    },
    {
      title: "Status",
      dataIndex: "view",
      sorter: {
        compare: (a: any, b: any) => a.view - b.view,
        multiple: 1,
      },
      render: () => (
        <div onClick={() => setModalOpen(true)}>
          <p style={{ cursor: "pointer", color: "#4CAF50" }}>Completed</p>
        </div>
      ),
    },
  ];

  // Datas

  const data1 = [
    {
      key: "1",
      sn: "1",
      loanId: "FNX1234",
      orderDate: "1/4/2022 6:33am",
      disbursalDate: "Not Disbursed",
      category: "Mobile Phones",
      brand: "Samsung",
      name: "Samsung S22 Ultra",
      totalAmount: "₦ 100,000",
    },
    {
      key: "2",
      sn: "2",
      loanId: "FNX1234",
      orderDate: "Dell",
      disbursalDate: "Not Disbursed",
      category: "Laptops",
      brand: "Dell",
      totalAmount: "₦ 100,000",
      name: "Dell XPS 9305",
    },
    {
      key: "3",
      sn: "3",
      loanId: "FNX1234",
      orderDate: "Apple",
      disbursalDate: "Not Disbursed",
      category: "Mobile Phones Accessories",
      brand: "Apple",
      totalAmount: "₦ 100,000",
      name: "Apple Phone Charger",
    },
    {
      key: "4",
      sn: "4",
      loanId: "FNX1234",
      orderDate: "LaptopCharger",
      disbursalDate: "Not Disbursed",
      category: "Laptop Accessories",
      brand: "Hp",
      totalAmount: "₦ 100,000",
      name: "Hp Laptop Charger",
    },
  ];
  const data2 = [
    {
      key: "1",
      sn: "1",
      loanId: "FNX1234",
      orderDate: "Pending Order",
      disbursalDate: "Not Disbursed",
      category: "Mobile Phones",
      brand: "Samsung",
      totalAmount: "₦ 100,000",
      name: "Samsung S22 Ultra",
    },
    {
      key: "2",
      sn: "2",
      loanId: "FNX1234",
      orderDate: "Dell",
      disbursalDate: "Not Disbursed",
      category: "Laptops",
      brand: "Dell",
      totalAmount: "₦ 100,000",
      name: "Dell XPS 9305",
    },
    {
      key: "3",
      sn: "3",
      loanId: "FNX1234",
      orderDate: "Apple",
      disbursalDate: "Not Disbursed",
      category: "Mobile Phones Accessories",
      brand: "Apple",
      totalAmount: "₦ 100,000",
      name: "Apple Phone Charger",
    },
    {
      key: "4",
      sn: "4",
      loanId: "FNX1234",
      orderDate: "LaptopCharger",
      disbursalDate: "Not Disbursed",
      category: "Laptop Accessories",
      brand: "Hp",
      totalAmount: "₦ 100,000",
      name: "Hp Laptop Charger",
    },
  ];
  const data3 = [
    {
      key: "1",
      sn: "1",
      loanId: "FNX1234",
      orderDate: "Completed Order",
      disbursalDate: "Not Disbursed",
      category: "Mobile Phones",
      brand: "Samsung",
      totalAmount: "₦ 100,000",
      name: "Samsung S22 Ultra",
    },
    {
      key: "2",
      sn: "2",
      loanId: "FNX1234",
      orderDate: "Dell",
      disbursalDate: "Not Disbursed",
      category: "Laptops",
      brand: "Dell",
      totalAmount: "₦ 100,000",
      name: "Dell XPS 9305",
    },
    {
      key: "3",
      sn: "3",
      loanId: "FNX1234",
      orderDate: "Apple",
      disbursalDate: "Not Disbursed",
      category: "Mobile Phones Accessories",
      brand: "Apple",
      totalAmount: "₦ 100,000",
      name: "Apple Phone Charger",
    },
    {
      key: "4",
      sn: "4",
      loanId: "FNX1234",
      orderDate: "LaptopCharger",
      disbursalDate: "Not Disbursed",
      category: "Laptop Accessories",
      brand: "Hp",
      totalAmount: "₦ 100,000",
      name: "Hp Laptop Charger",
    },
  ];
  const data4 = [
    {
      key: "1",
      sn: "1",
      loanId: "FNX1234",
      orderDate: "Cancelled Order",
      disbursalDate: "Not Disbursed",
      category: "Mobile Phones",
      brand: "Samsung",
      totalAmount: "₦ 100,000",
      name: "Samsung S22 Ultra",
    },
    {
      key: "2",
      sn: "2",
      loanId: "FNX1234",
      orderDate: "Dell",
      disbursalDate: "Not Disbursed",
      category: "Laptops",
      brand: "Dell",
      totalAmount: "₦ 100,000",
      name: "Dell XPS 9305",
    },
    {
      key: "3",
      sn: "3",
      loanId: "FNX1234",
      orderDate: "Apple",
      disbursalDate: "Not Disbursed",
      category: "Mobile Phones Accessories",
      brand: "Apple",
      totalAmount: "₦ 100,000",
      name: "Apple Phone Charger",
    },
    {
      key: "4",
      sn: "4",
      loanId: "FNX1234",
      orderDate: "LaptopCharger",
      disbursalDate: "Not Disbursed",
      category: "Laptop Accessories",
      brand: "Hp",
      totalAmount: "₦ 100,000",
      name: "Hp Laptop Charger",
    },
  ];
  const data5 = [
    {
      key: "1",
      sn: "1",
      loanId: "FNX1234",
      orderDate: "Expired Order",
      disbursalDate: "Not Disbursed",
      category: "Mobile Phones",
      brand: "Samsung",
      totalAmount: "₦ 100,000",
      name: "Samsung S22 Ultra",
    },
    {
      key: "2",
      sn: "2",
      loanId: "FNX1234",
      orderDate: "Dell",
      disbursalDate: "Not Disbursed",
      category: "Laptops",
      brand: "Dell",
      totalAmount: "₦ 100,000",
      name: "Dell XPS 9305",
    },
    {
      key: "3",
      sn: "3",
      loanId: "FNX1234",
      orderDate: "Apple",
      disbursalDate: "Not Disbursed",
      category: "Mobile Phones Accessories",
      brand: "Apple",
      totalAmount: "₦ 100,000",
      name: "Apple Phone Charger",
    },
    {
      key: "4",
      sn: "4",
      loanId: "FNX1234",
      orderDate: "LaptopCharger",
      disbursalDate: "Not Disbursed",
      category: "Laptop Accessories",
      brand: "Hp",
      totalAmount: "₦ 100,000",
      name: "Hp Laptop Charger",
    },
  ];

  const onChange = ({ pagination, filters, sorter, extra }: any) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const navigate = useNavigate();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const statusModal = useDisclosure();
  const confirmModal = useDisclosure();
  const [open, setOpen] = useState(false)
  const [success2, setSuccess2] = useState(false)
  const [otpComplete, setOtpComplete] = useState(false)
  const [activeTable, setActiveTable] = useState({
    table: 1,
  })

  const [orderInfo, setOrderInfo] = useState({
    type: 1,
  });

  const [orderMgtStep, setOrderMgtStep] = useState({
    step: 1,
  });

  const t = activeTable;
  const o = orderInfo;
  const s = orderMgtStep;

  const onTableClick = (table: string) => {
    switch (table) {
      case "All Orders":
        setActiveTable((prevState) => ({
          ...prevState,
          table: 1,
        }));
        break;
      case "Pending Orders":
        setActiveTable((prevState) => ({
          ...prevState,
          table: 2,
        }));
        break;
      case "Completed Orders":
        setActiveTable((prevState) => ({
          ...prevState,
          table: 3,
        }));
        break;
      case "Cancelled Orders":
        setActiveTable((prevState) => ({
          ...prevState,
          table: 4,
        }));
        break;
      case "Expired Orders":
        setActiveTable((prevState) => ({
          ...prevState,
          table: 5,
        }));
        break;

      default:
        break;
    }
  };

  const onClickOrder = (OType: string) => {
    switch (OType) {
      case "Description":
        setOrderInfo((prevState) => ({
          ...prevState,
          type: 1,
        }));
        break;
      case "Specifications":
        setOrderInfo((prevState) => ({
          ...prevState,
          type: 2,
        }));
        break;
      case "Key Features":
        setOrderInfo((prevState) => ({
          ...prevState,
          type: 3,
        }));
        break;
      case "Expired Orders":
        setOrderInfo((prevState) => ({
          ...prevState,
          type: 4,
        }));
        break;

      default:
        break;
    }
  };

  const handleOtpChange = (value: string) => {
    setOtp(value);
  };


  const onSelectChange = ({ newSelectedRowKeys }: any) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const getDetails = () => {
    setOrderMgtStep({step: 3})
  }

  const showModal = () => {
    setModalOpen(true);
  };

  const handleOk = () => {
    setModalOpen(false);
    setOrderMgtStep({step: 4})
  };
  const otpOk = () => {
    setOtpComplete(false)
    setSuccess2(true)
  };

  

  const handleCancel = () => {
    setSuccess2(false)
    setOpen(false)
    setOrderMgtStep({step: 1})
  };

  return (
    <div>
      <h1 className={`${(s.step === (2 || 3)) ? "show" : "none"} font-bold text-xs text-[#002639] p-5`}>
        Complete Order &gt;{" "}
        <span className="opacity-50">Order Management</span>
      </h1>
      <div className="ratings">
        <div className={`${s.step == 1 ? "show" : "none"}`}>
          <div className="header">
            <h3>Order Management</h3>
            <div className="action">
              <div onClick={() => setOrderMgtStep({ step: 2 })}>
                COMPLETE ORDER
              </div>
              <Button variant="transparent" label="EXPORT AS CSV" />
            </div>
          </div>
          <div className="orderCont">
            <h1
              onClick={() => onTableClick("All Orders")}
              className={`${t.table == 1 && "active"}`}
            >
              All Orders
            </h1>
            <h1
              onClick={() => onTableClick("Pending Orders")}
              className={`${t.table == 2 && "active"}`}
            >
              Pending Orders
            </h1>
            <h1
              onClick={() => onTableClick("Completed Orders")}
              className={`${t.table == 3 && "active"}`}
            >
              Completed Orders
            </h1>
            <h1
              onClick={() => onTableClick("Cancelled Orders")}
              className={`${t.table == 4 && "active"}`}
            >
              Cancelled Orders
            </h1>
            <h1
              onClick={() => onTableClick("Expired Orders")}
              className={`${t.table == 5 && "active"}`}
            >
              Expired Orders
            </h1>
          </div>
          <div className="outlet-table">
            <div className="filter">
              <div className="search">
                <Input
                  type="text"
                  label=""
                  placeholder="Search"
                  withFlag
                  leftIcon={searchIcon}
                />
              </div>
              <div className="date">
                <Input label="" type="date" placeholder="Select Date" />
              </div>
              <Button label="FILTER" variant="orange" />
            </div>
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={
                t.table == 1
                  ? data1
                  : t.table == 2
                  ? data2
                  : t.table == 3
                  ? data3
                  : t.table == 3
                  ? data4
                  : data5
              }
              onChange={onChange}
              scroll={{ x: "max-content" }}
            />
          </div>
         
        </div>

        <div className={`${s.step == 2 ? "show" : "none"}`}>
          <div className="orderNumber">
            <Input label="Enter Order Number" type="text" />
            <Button onClick={() => getDetails()} label="Get Details" variant="primary" />
          </div>
        </div>

        <div className={`${s.step == 3 ? "show" : "none"}`}>
          <div className="mt-5 w-full">
            <h1 className="text-base font-bold px-5">Customer Information</h1>
            <div className="text-xs font-extrabold flex sm:gap-16 md:gap-20 flex-wrap justify-around md:justify-start gap-4 my-5 px-5 py-3 bg-[#F5F5F5]">
              <div className=" flex gap-1 items-center">
                <h1 className="text-[#7398B3]">Name: </h1>
                <h1 className="text-[#002639] text-center">
                  Samuel Oluwatimileyin
                </h1>
              </div>
              <div className=" flex gap-1 items-center">
                <h1 className="text-[#7398B3]">Phone Number: </h1>
                <h1 className="text-[#002639]">*******6308</h1>
              </div>
              <div className=" flex gap-1 items-center">
                <h1 className="text-[#7398B3]">Application Date:</h1>
                <h1 className="text-[#002639]">Feb 26,2022 </h1>
              </div>
            </div>
            <div className="flex items-center md:items-start flex-col gap-3 mt-10">
              <img
                className="h-40 w-40"
                src="/src/assets/images/phone.svg"
                alt="phone img"
              />
              <h1 className="text-[#002639] px-5 text-sm font-bold">
                Order Information
              </h1>
            </div>
            <div className="text-xs font-extrabold flex sm:gap-16 md:gap-20 flex-wrap justify-around md:justify-start gap-4 my-5 px-5 py-3 bg-[#F2FFFE]">
              <div className=" flex gap-1 items-center">
                <h1 className="text-[#7398B3]">Product name: </h1>
                <h1 className="text-[#002639]">Samsung Galaxy A56</h1>
              </div>
              <div className=" flex gap-1 items-center">
                <h1 className="text-[#7398B3]">Quantity: </h1>
                <h1 className="text-[#002639]">1</h1>
              </div>
              <div className=" flex gap-1 items-center">
                <h1 className="text-[#7398B3]">Product Price:</h1>
                <h1 className="text-[#002639]">N110,000</h1>
              </div>
            </div>
            <h1 className="px-5 font-normal text-sm">
              Ensure to verify the customer’s information by checking their
              Identification (ID) card. After Confirmation, proceed to generate
              Pick-up OTP which will be sent to customer’s registered email
              address and phone number. Please confirm that the phone number of
              the customer ends with 0102
            </h1>


            <div className="px- mx-5 mt-16 md:border-b-2 flex flex-wrap justify- gap-5 justify-center sm:justify-between bg-none">
              <h1
                style={{ cursor: "pointer" }}
                onClick={() => onClickOrder("Description")}
                className={`${
                  o.type == 1 && "active"
                } text-xs font-bold max-w-fit`}
              >
                Description
              </h1>
              <h1
                style={{ cursor: "pointer" }}
                onClick={() => onClickOrder("Specifications")}
                className={`${
                  o.type == 2 && "active"
                } text-xs font-bold max-w-fit `}
              >
                Specifications
              </h1>
              <h1
                style={{ cursor: "pointer" }}
                onClick={() => onClickOrder("Key Features")}
                className={`${
                  o.type == 3 && "active"
                } text-xs font-bold max-w-fit `}
              >
                Key Features
              </h1>
              <h1
                style={{ cursor: "pointer" }}
                onClick={() => onClickOrder("Expired Orders")}
                className={`${
                  o.type == 4 && "active"
                } text-xs font-bold max-w-fit `}
              >
                Expired Orders
              </h1>
            </div>


            <div className="">
              <h1
                style={{ maxWidth: "50rem", lineHeight: "25px" }}
                className={`${
                  o.type == 1 ? "show" : "none"
                } text-[#7398B3] text-sm font-normal px-5 my-5`}
              >
                6.7 inch Super- Retina XDR display with Promotion for a faster,
                more responsive feel Cinematic mode with shallow depth of fields
                and shifts focus automatically in your videos. Pro camera system
                with new 12MP Telephoto, Wide and Ultra Wide Cameras; LiDAR
                Scanner; 6x optical zoom range; macro photography; Photographic
                styles, ProRes video, Smart HDR 4, Night mode, Apple ProRAW, 4K
                Dolby Vision HDR recording (12MP + 12MP+ 12MP)
              </h1>

              <div className={`${o.type == 2 ? "show" : "none"}`}>
                <div className="keyFeatCont">
                  <div className="keyCont">
                    <div className="roundBtn"></div>
                    <div className="key">
                      <h1 className="key1">Display:</h1>
                      <h1 className="key2">6.7 inch (720 x1600)</h1>
                    </div>
                  </div>

                  <div className="keyCont">
                    <div className="roundBtn"></div>
                    <div className="key">
                      <h1 className="key1">Processor:</h1>
                      <h1 className="key2"> Unison T606</h1>
                    </div>
                  </div>

                  <div className="keyCont">
                    <div className="roundBtn"></div>
                    <div className="key">
                      <h1 className="key1">Front Camera:</h1>
                      <h1 className="key2">12MP</h1>
                    </div>
                  </div>

                  <div className="keyCont">
                    <div className="roundBtn"></div>
                    <div className="key">
                      <h1 className="key1">Rear Camera:</h1>
                      <h1 className="key2">12MP + 12MP</h1>
                    </div>
                  </div>

                  <div className="keyCont">
                    <div className="roundBtn"></div>
                    <div className="key">
                      <h1 className="key1">RAM:</h1>
                      <h1 className="key2">6GB</h1>
                    </div>
                  </div>

                  <div className="keyCont">
                    <div className="roundBtn"></div>
                    <div className="key">
                      <h1 className="key1">Storage:</h1>
                      <h1 className="key2">128GB</h1>
                    </div>
                  </div>

                  <div className="keyCont">
                    <div className="roundBtn"></div>
                    <div className="key">
                      <h1 className="key1">Battery Capacity:</h1>
                      <h1 className="key2">5000mAh</h1>
                    </div>
                  </div>

                  <div className="keyCont">
                    <div className="roundBtn"></div>
                    <div className="key">
                      <h1 className="key1">OS:</h1>
                      <h1 className="key2">Android 11</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${o.type == 3 ? "show" : "none"}`}>
                <div className="keyFeatCont">
                  <div className="keyCont">
                    <div className="roundBtn"></div>
                    <div className="key">
                      <h1 className="key1">SKU:</h1>
                      <h1 className="key2">AP044MJHU78HSNIKAN</h1>
                    </div>
                  </div>

                  <div className="keyCont">
                    <div className="roundBtn"></div>
                    <div className="key">
                      <h1 className="key1">Product Line:</h1>
                      <h1 className="key2">Missoula Gadgets</h1>
                    </div>
                  </div>

                  <div className="keyCont">
                    <div className="roundBtn"></div>
                    <div className="key">
                      <h1 className="key1">Model:</h1>
                      <h1 className="key2">iPhone 13 Pro Max</h1>
                    </div>
                  </div>

                  <div className="keyCont">
                    <div className="roundBtn"></div>
                    <div className="key">
                      <h1 className="key1">Size (L x W x H cm):</h1>
                      <h1 className="key2">
                        160.8 x 78.1 x 7,7mm(6.33 x 3.07 x 0.30 in)
                      </h1>
                    </div>
                  </div>

                  <div className="keyCont">
                    <div className="roundBtn"></div>
                    <div className="key">
                      <h1 className="key1">Weight (kg):</h1>
                      <h1 className="key2"> 0.24</h1>
                    </div>
                  </div>

                  <div className="keyCont">
                    <div className="roundBtn"></div>
                    <div className="key">
                      <h1 className="key1">Colour:</h1>
                      <h1 className="key2">Graphite/ Midnight blue/ Silver</h1>
                    </div>
                  </div>

                  <div className="keyCont">
                    <div className="roundBtn"></div>
                    <div className="key">
                      <h1 className="key1">Main Material:</h1>
                      <h1 className="key2">Alloyed Material</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="chkCon">
              <input className="checkbox" type="checkbox" />
              <h1>
                I confirm that the customer picking up the phone has passed the
                verification check
              </h1>
            </div>

            <div className="orderBtn">
              <div onClick={() => setModalOpen(true)} className="btn1">GENERATE PICK-UP TOKEN</div>
              <div onClick={() => setCancelModalOpen(true)} className="btn2">CANCEL PICK-UP TOKEN</div>
            </div>
          </div>
        </div>

        <div className={`${s.step == 4 ? "show" : "none"}`}>
          <h1 style={{fontSize: "12px", fontWeight: "700", color: "#7398B3"}} className="cod">Code</h1>
          <OtpInput
            value={otp}
            onChange={handleOtpChange}
            numInputs={6}
            inputStyle={`otp-input ${
              otp.length > 5 ? "otp-input-active" : ""
            }`}
            isInputNum
            containerStyle={{
              display: "flex",
              gap: "30px",
              
            }}
            isInputSecure
          />
          <div style={{padding: "0", margin: "1rem 0", alignItems: "start"}} className="chkCon">
            <input className="checkbox" type="checkbox" />
            <h1 style={{maxWidth: "35rem"}}>
            I can confirm that customer is satisfied with the device. Please inform the customer that the Device Finance request will not be reversible after confirmation
            </h1>
          </div>

          <div style={{padding: "0"}} className="orderBtn">
              <div onClick={() => setOtpComplete(true)} className="btn1">COMPLETE TRANSACTION</div>
              <div onClick={() => setCancelModalOpen(true)} className="btn3">CANCEL TRANSACTION</div>
          </div>
        </div>

      
          <Modal title="Basic Modal" bodyStyle={{background: "white", padding: "1rem", textAlign: "center", display: "grid", placeItems: "center", borderRadius: "5px"}} okText={"ted"} centered  maskClosable={true} open={modalOpen}>
            <img src={successIcon} alt="success" className="success" />
            <p className="successTxt">
              Pick-up Token has been sent to your
              registered phone number <span>0805****914 </span>
                and email address 
              <span> sam******@gmail.com</span>
            </p>
            <div onClick={handleOk} className="btn4">PROCEED</div>
          </Modal>

          <Modal title="Basic Modal" bodyStyle={{background: "white", padding: "1rem", textAlign: "center", display: "grid", placeItems: "center", borderRadius: "5px"}} okText={"ted"} centered  maskClosable={true} open={otpComplete}>
            <img src={warning} alt="success" className="success" />
            <p className="successTxt">
            You are about to complete this 
            transaction, kindly click on the
            confirmation button to complete 
            the transaction
            </p>
            <div onClick={otpOk} className="btn4">Confirm Transaction</div>
          </Modal>


          <Modal title="Basic Modal" bodyStyle={{background: "white", padding: "1rem", textAlign: "center", display: "grid", placeItems: "center", borderRadius: "5px"}} centered closable open={cancelModalOpen} onOk={handleOk}>
            <img src={warning} alt="success" className="success" />
            <p className="successTxt">
            You are about to complete this 
            transaction, kindly click on the
            confirmation button to complete  the transaction
            <div className="orderNumber">
              <Input label="Description" type="text" />
            </div>
            </p>
            <div onClick={() => {setOpen(true), setCancelModalOpen(false)}} className="btn4">Cancel Transaction</div>
          </Modal>

          <StatusModal status="success" message="Transaction has been cancelled." title='Successful' isOpen={open} onClose={handleCancel} />

          <StatusModal status="success" message="Transaction is successful." title='Successful' isOpen={success2} onClose={handleCancel} />
        

      </div>
    </div>
  );
};

export default InventoryMgt;
