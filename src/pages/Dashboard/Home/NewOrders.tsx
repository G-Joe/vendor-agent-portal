import { useState } from "react";
import { Table } from "antd";
import "./home.scss";

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
    title: "Loan ID",
    dataIndex: "loanId",
    sorter: {
      compare: (a: any, b: any) => a.loanId - b.loanId,
      multiple: 6,
    },
  },
  {
    title: "Order Date",
    dataIndex: "odate",
    sorter: {
      compare: (a: any, b: any) => a.odate - b.odate,
      multiple: 5,
    },
  },
  {
    title: "Disbursal Date",
    dataIndex: "disbursal",
    sorter: {
      compare: (a: any, b: any) => a.disbursal - b.disbursal,
      multiple: 4,
    },
  },
  {
    title: "Product Category",
    dataIndex: "category",
    sorter: {
      compare: (a: any, b: any) => a.category - b.category,
      multiple: 3,
    },
  },
  {
    title: "Product Brand",
    dataIndex: "brand",
    sorter: {
      compare: (a: any, b: any) => a.brand - b.brand,
      multiple: 2,
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    sorter: {
      compare: (a: any, b: any) => a.status - b.status,
      multiple: 1,
    },
  },
];

const data = [
  {
    key: "1",
    sn: "1",
    loanId: "FNX1234",
    odate: "1/4/2022 6:33am",
    disbursal: "1/4/2022 6:33am",
    category: "Mobile Phones",
    brand: "Samsung",
    status: "Completed"
  },
  {
    key: "2",
    sn: "2",
    loanId: "FNX1232",
    odate: "1/4/2022 2:30pm",
    disbursal: "Not Disbursed",
    category: "Laptops",
    brand: "Dell",
    status: "Pending"
  },
  {
    key: "3",
    sn: "3",
    loanId: "FNX1236",
    odate: "1/4/2022 4:12pm",
    disbursal: "Not Disbursed",
    category: "Mobile Phone Accessories",
    brand: "Apple",
    status: "Cancelled"
  },
  {
    key: "4",
    sn: "4",
    loanId: "FNX1238",
    odate: "1/4/2022 5:00pm",
    disbursal: "1/4/2022 5:00pm",
    category: "Laptops Accessories",
    brand: "Hp",
    status: "Cancelled"
  },
    
];

const onChange = ({pagination, filters, sorter, extra}:any) => {
  console.log("params", pagination, filters, sorter, extra);
};

const NewOrders = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const onSelectChange = ({newSelectedRowKeys}:any) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
      };
      const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
      };
  return (
    <div className="outlet-table">
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} onChange={onChange} />
    </div>
  )
};

export default NewOrders;
