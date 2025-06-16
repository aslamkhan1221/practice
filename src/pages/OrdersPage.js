import React from "react";
import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Chip,
} from "@mui/material";

const orders = [
  {
    id: "1001",
    customer: "Ali",
    date: "2025-06-10",
    status: "Delivered",
    total: "₹123.45",
  },
  {
    id: "1002",
    customer: "Rahim",
    date: "2025-06-11",
    status: "Processing",
    total: "₹45.00",
  },
  {
    id: "1003",
    customer: "Zubair",
    date: "2025-06-12",
    status: "Cancelled",
    total: "₹0.00",
  },
  {
    id: "1004",
    customer: "Daud",
    date: "2025-06-12",
    status: "Shipped",
    total: "₹78.20",
  },
  {
    id: "1005",
    customer: "Ahad",
    date: "2025-06-13",
    status: "Delivered",
    total: "₹230.00",
  },
];

const statusColors = {
  Delivered: "success",
  Processing: "info",
  Cancelled: "error",
  Shipped: "warning",
};

const OrdersPage = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Orders
      </Typography>
      <Typography mb={2}>Manage and review all orders here.</Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <Chip
                    label={order.status}
                    color={statusColors[order.status]}
                  />
                </TableCell>
                <TableCell align="right">{order.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrdersPage;
