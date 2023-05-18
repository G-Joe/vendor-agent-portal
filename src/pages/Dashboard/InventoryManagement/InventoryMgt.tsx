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
import "./Inventory.scss"


const InventoryMgt = () => {
  const columns = [
    {
      title: "S/N",
      dataIndex: "sn",
      sorter: {
        compare: (a: any, b: any) => a.sn - b.sn,
        multiple: 7,
      },
    },
    {
      title: "Date Created",
      dataIndex: "date",
      sorter: {
        compare: (a: any, b: any) => a.date - b.date,
        multiple: 6,
      },
    },
    {
      title: "Image",
      dataIndex: "img",
      sorter: {
        compare: (a: any, b: any) => a.img - b.img,
        multiple: 5,
      },
    },
    {
      title: "Product Category",
      dataIndex: "category",
      sorter: {
        compare: (a: any, b: any) => a.category - b.category,
        multiple: 4,
      },
    },
    {
      title: "Product Brand",
      dataIndex: "brand",
      sorter: {
        compare: (a: any, b: any) => a.brand - b.brand,
        multiple: 3,
      },
    },
    {
      title: "Product Name",
      dataIndex: "name",
      sorter: {
        compare: (a: any, b: any) => a.name - b.name,
        multiple: 2,
      },
    },
    {
      title: "View",
      dataIndex: "view",
      sorter: {
        compare: (a: any, b: any) => a.view - b.view,
        multiple: 1,
      },
      render: () => (
        <div onClick={() => setModalOpen(true)}>
          <p style={{ cursor: "pointer" }}>Edit</p>
        </div>
      ),
    },
  ];
  
  const data = [
    {
      key: "1",
      sn: "1",
      date: "1/4/2022 6:33am",
      img: Samsung,
      category: "Mobile Phones",
      brand: "Samsung",
      name: "Samsung S22 Ultra"
    },
    {
      key: "2",
      sn: "2",
      date: "1/4/2022 6:33am",
      img:Dell,
      category: "Laptops",
      brand: "Dell",
      name: "Dell XPS 9305"
    },
    {
      key: "3",
      sn: "3",
      date: "1/4/2022 6:33am",
      img:AppleCharger,
      category: "Mobile Phones Accessories",
      brand: "Apple",
      name: "Apple Phone Charger"
    },
    {
      key: "4",
      sn: "4",
      date: "1/4/2022 6:33am",
      img:LaptopCharger,
      category: "Laptop Accessories",
      brand: "Hp",
      name:"Hp Laptop Charger"
    },
    
  ];
  
  const onChange = ({ pagination, filters, sorter, extra }: any) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  
  const navigate = useNavigate();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const statusModal = useDisclosure();
  const confirmModal = useDisclosure();

  const SuccessModal = () => {
    setModalOpen(false);
    statusModal.onOpen()
  };

  const Deactivate = () => {
    setModalOpen(false);
    confirmModal.onOpen();
  };
  const onSelectChange = ({ newSelectedRowKeys }: any) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <div className="ratings">
    <div className="header">
    <h3>Inventory Management</h3>
    <div className="action">
    <Button variant="transparent" label="EXPORT AS CSV" />
    </div>
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
        dataSource={data}
        onChange={onChange}
      />
    </div>
    <div className="modal">
        <Modal
          centered
          open={modalOpen}
          onOk={() => setModalOpen(false)}
          onCancel={() => setModalOpen(false)}
          className="inventory-modal"
        >
          <h3>Edit Inventory</h3>
          <br />
          <div className="topper">
            <div className="left">
              <Input label="Product Brand" type="text" />
              <br />
              <Input label="Product Name" type="text" />
              <br />
            </div>
            <div className="right">
              <Select label="Product Category">
                <option value=""></option>
              </Select>
              <br />
              <Input label="Product Price" type="text" leftIcon={Naira} withFlag/>
              <br />
            </div>
            <br />
          </div>
          <br />
          <Input label="Product Unit Left" type="text" />
          <br />
          <div className="edit-submit">
            <Button label="UPDATE" variant="primary" onClick={SuccessModal} />
            <Button label="DEACTIVATE" variant="secondary" onClick={Deactivate}/>
          </div>
        </Modal>
      </div>
      <StatusModal
        status="success"
        title="Successful"
        message="you have just updated your inventory"
        duration={6000}
        isOpen={statusModal.isOpen}
        onClose={statusModal.onClose}
      />
       <ConfirmModal
            question2="You are about to deactivate this product, please note that this product will not be visible to the users for pick up once deactivated. Are you sure you want to carry out this action?"
            confirmSuccessMessage="Product Deactivated"
            isOpen={confirmModal.isOpen}
            onClose={confirmModal.onClose}
          />
    </div>
  );
};

export default InventoryMgt;
