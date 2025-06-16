import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  List,
  ListItem,
  ListItemText,
  Checkbox,
} from "@mui/material";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

// Sample data for charts & tables
const salesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4000 },
  { month: "May", sales: 6000 },
  { month: "Jun", sales: 7000 },
];

const recentOrders = [
  {
    id: "OD001",
    customer: "John Doe",
    date: "2025-06-10",
    total: "₹123.45",
    status: "Shipped",
  },
  {
    id: "OD002",
    customer: "Jane Smith",
    date: "2025-06-09",
    total: "₹67.89",
    status: "Processing",
  },
  {
    id: "OD003",
    customer: "Sam Wilson",
    date: "2025-06-08",
    total: "₹250.00",
    status: "Delivered",
  },
  {
    id: "OD004",
    customer: "Nancy Drew",
    date: "2025-06-07",
    total: "₹99.99",
    status: "Cancelled",
  },
];

const topProducts = [
  { name: "Product A", sales: 1500 },
  { name: "Product B", sales: 1200 },
  { name: "Product C", sales: 900 },
  { name: "Product D", sales: 750 },
  { name: "Product E", sales: 600 },
];

const trafficSources = [
  { name: "Direct", value: 400 },
  { name: "Referral", value: 300 },
  { name: "Social", value: 300 },
  { name: "Organic", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const tasks = [
  { id: 1, text: "Review Q2 financial report", completed: true },
  { id: 2, text: "Update product listings", completed: false },
  { id: 3, text: "Schedule team meeting", completed: false },
  { id: 4, text: "Fix bug in checkout page", completed: true },
];

const DashboardPage = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>

      {/* Stats cards */}
      <Grid container spacing={3} mb={4}>
        {[
          {
            title: "Users",
            value: "1,245",
            icon: <PeopleIcon fontSize="large" color="primary" />,
          },
          {
            title: "Orders",
            value: "523",
            icon: <ShoppingCartIcon fontSize="large" color="secondary" />,
          },
          {
            title: "Revenue",
            value: "₹12,345",
            icon: <MonetizationOnIcon fontSize="large" color="success" />,
          },
          {
            title: "Growth",
            value: "24%",
            icon: <TrendingUpIcon fontSize="large" color="warning" />,
          },
        ].map(({ title, value, icon }) => (
          <Grid item xs={12} sm={6} md={3} key={title}>
            <Paper sx={{ p: 2, display: "flex", alignItems: "center", gap: 2 }}>
              {icon}
              <Box>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="h5" fontWeight="bold">
                  {value}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Left side: Sales Chart + Recent Orders */}
        <Grid item xs={12} md={7}>
          <Paper sx={{ p: 3, mb: 3, height: 350 }}>
            <Typography variant="h6" gutterBottom>
              Monthly Sales
            </Typography>
            <ResponsiveContainer width="100%" height="85%">
              <LineChart data={salesData}>
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#3f51b5"
                  strokeWidth={3}
                />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recent Orders
            </Typography>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Order ID</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>{order.total}</TableCell>
                    <TableCell>{order.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>

        {/* Right side: Top Products, Traffic Sources, Tasks */}
        <Grid item xs={12} md={5} container direction="column" spacing={3}>
          <Grid item>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Top Products
              </Typography>
              <List>
                {topProducts.map((prod, index) => (
                  <ListItem key={prod.name} divider>
                    <ListItemText
                      primary={prod.name}
                      secondary={`Sales: ${prod.sales}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          <Grid item>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Traffic Sources
              </Typography>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={trafficSources}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    fill="#8884d8"
                    label
                  >
                    {trafficSources.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          <Grid item>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Tasks
              </Typography>
              <List>
                {tasks.map((task) => (
                  <ListItem key={task.id} disablePadding>
                    <Checkbox checked={task.completed} />
                    <ListItemText primary={task.text} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
