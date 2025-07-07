import React from "react";
import { motion } from "framer-motion";
import dashboard from "../Dashboard/Css/Dashboard.module.css";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Badge,
} from "react-bootstrap";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const salesData = [
  { date: "Mon", sales: 120 },
  { date: "Tue", sales: 90 },
  { date: "Wed", sales: 150 },
  { date: "Thu", sales: 100 },
  { date: "Fri", sales: 180 },
  { date: "Sat", sales: 200 },
  { date: "Sun", sales: 130 },
];

const categorySales = [
  { name: "Imported", value: 540 },
  { name: "Local", value: 660 },
  { name: "Dry Fruits", value: 240 },
];

const Cards = [
  { id: 1, total: 8, heading: "Total Orders" },
  { id: 2, total: 3, heading: "Total Delivered" },
  { id: 3, total: 4, heading: "Total Pending" },
  { id: 4, total: 19, heading: "Total Customers" },
  { id: 5, total: 16, heading: "New Customers" },
  { id: 6, total: 3, heading: "Cancelled Orders" },
  { id: 7, total: 18, heading: "Out Of Stock" },
];

const handleLogout = () => {
  localStorage.removeItem("isAdminLoggedIn");
  window.location.href = "/login";
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const orders = [
  { id: 1, customer: "Alice", item: "Apples", status: "Pending", price: "$12" },
  { id: 2, customer: "Bob", item: "Bananas", status: "Delivered", price: "$8" },
  { id: 3, customer: "Charlie", item: "Cherries", status: "Cancelled", price: "$15" },
];

const headerStyle = { backgroundColor: "#002072", color: "white" }; 


export default function Dashboard() {
  return (
    <Container fluid>
      {/* Heading */}
      <Row className="text-dark p-3 mt-3">
             <button
  onClick={handleLogout}
  className="bg-red-500 text-white px-4 py-2 rounded float-right"
>
  Logout
</button>
        <Col>
          <h3>Fruit Store Admin Dashboard</h3>
        </Col>
      </Row>

      {/* Animated Cards */}
      <Row className="mb-5 ">
        {Cards.map((item, index) => (
          <Col md={3} key={`${item.id}-${index}`} className={dashboard.main}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}>
              <Card >
                <Card.Body>
                  <Card.Title>{item.heading}</Card.Title>
                  <Card.Text>{item.total}</Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* Charts Section */}
      <Row className="mb-4">
        {/* Line Chart */}
        <Col md={8}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <Card.Body>
                <Card.Title>Sales Over Time</Card.Title>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>

        {/* Pie Chart */}
        <Col md={4}>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <Card.Body>
                <Card.Title>Sales by Category</Card.Title>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={categorySales}
                      dataKey="value"
                      nameKey="name"
                      outerRadius={80}
                      label
                    >
                      {categorySales.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>

      {/* Orders Table */}
      <Row>
        <Col>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <Card.Body>
                <Card.Title>Recent Orders</Card.Title>
                <Table responsive bordered hover>
                  <thead>
                    <tr>
                      <th style={headerStyle}>ID</th>
                      <th style={headerStyle}>Customer</th>
                      <th style={headerStyle}>Item</th>
                      <th style={headerStyle}>Status</th>
                      <th style={headerStyle}>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{order.customer}</td>
                        <td>{order.item}</td>
                        <td>
                          <Badge
                            bg={
                              order.status === "Pending"
                                ? "warning"
                                : order.status === "Delivered"
                                ? "success"
                                : "danger"
                            }
                          >
                            {order.status}
                          </Badge>
                        </td>
                        <td>{order.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}
