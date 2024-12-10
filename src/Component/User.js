
import React, { useContext, useEffect, useState } from 'react';

import {
  Table,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tooltip,
  IconButton,
  Tabs,
  Tab,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Typography,
  Grid,
  Stack,
  InputAdornment,
  Chip,
} from '@mui/material';
import {
  IconEdit,
  IconEye,
  IconListDetails,
  IconSearch,
  IconShoppingBag,
  IconSortAscending,
  IconTrash,
  IconTruck,
} from "@tabler/icons";
// import CustomCheckbox from 'src/components/forms/theme-elements/CustomCheckbox';
import { Link } from 'react-router-dom';
import { fetchUser } from '../api/index';

const invoceLists = [
  {
    id: 101,
    billFrom: 'PineappleInc.',
    billFromEmail: 'first@xabz.com',
    billFromAddress: 'Ganesh glory,Godrej garden city,Ahmedabad.',
    billFromPhone: 979796786,
    billFromFax: 13,
    billTo: 'Redq Inc.',
    billToEmail: 'toFirst@agth.com',
    billToAddress: 'Godrej garden city,Ahmedabad.',
    billToPhone: 757575233,
    billToFax: 76,
    orders: [
      {
        itemName: 'Courge',
        unitPrice: 10,
        units: 9,
        unitTotalPrice: 90,
      },
    ],
    orderDate: new Date(),
    totalCost: 90,
    vat: 9,
    grandTotal: 99,
    status: 'Shipped',
    completed: false,
    isSelected: false,
  },
  {
    id: 102,
    billFrom: 'Pineapple.',
    billFromEmail: 'first@xabz.com',
    billFromAddress: 'Ganesh glory,Godrej garden city,Ahmedabad.',
    billFromPhone: 979796786,
    billFromFax: 13,
    billTo: 'ME Inc.',
    billToEmail: 'toFirst@agth.com',
    billToAddress: 'Godrej garden city,Ahmedabad.',
    billToPhone: 757575233,
    billToFax: 76,
    orders: [
      {
        itemName: 'Courge',
        unitPrice: 10,
        units: 9,
        unitTotalPrice: 90,
      },
    ],
    orderDate: new Date(),
    totalCost: 90,
    vat: 9,
    grandTotal: 99,
    status: 'Delivered',
    completed: false,
    isSelected: false,
  },
  {
    id: 103,
    billFrom: 'Incorporation.',
    billFromEmail: 'first@xabz.com',
    billFromAddress: 'Ahmedabad.',
    billFromPhone: 979796786,
    billFromFax: 13,
    billTo: 'Redirwed.',
    billToEmail: 'toFirst@agth.com',
    billToAddress: 'Godrej garden city,Ahmedabad.',
    billToPhone: 757575233,
    billToFax: 76,
    orders: [
      {
        itemName: 'Courge',
        unitPrice: 10,
        units: 9,
        unitTotalPrice: 90,
      },
    ],
    orderDate: new Date(),
    totalCost: 90,
    vat: 9,
    grandTotal: 99,
    status: 'Pending',
    completed: false,
    isSelected: false,
  },
  {
    id: 104,
    billFrom: 'PineappleTimes.',
    billFromEmail: 'first@xabz.com',
    billFromAddress: 'Ganesh glory,Godrej garden city,Ahmedabad.',
    billFromPhone: 979796786,
    billFromFax: 13,
    billTo: 'RFc.',
    billToEmail: 'toFirst@agth.com',
    billToAddress: 'Godrej garden city,Ahmedabad.',
    billToPhone: 757575233,
    billToFax: 76,
    orders: [
      {
        itemName: 'Courge',
        unitPrice: 10,
        units: 9,
        unitTotalPrice: 90,
      },
    ],
    orderDate: new Date(),
    totalCost: 90,
    vat: 9,
    grandTotal: 99,
    status: 'Shipped',
    completed: false,
    isSelected: false,
  },
  {
    id: 105,
    billFrom: 'FortuneCreation',
    billFromEmail: 'first@xabz.com',
    billFromAddress: 'Ganesh glory,Godrej garden city,Ahmedabad.',
    billFromPhone: 979796786,
    billFromFax: 13,
    billTo: 'Soft solution.',
    billToEmail: 'toFirst@agth.com',
    billToAddress: 'Godrej garden city,Ahmedabad.',
    billToPhone: 757575233,
    billToFax: 76,
    orders: [
      {
        itemName: 'Courge',
        unitPrice: 10,
        units: 9,
        unitTotalPrice: 90,
      },
    ],
    orderDate: new Date('2020-10-15'),
    totalCost: 90,
    vat: 9,
    grandTotal: 99,
    status: 'Delivered',
    completed: false,
    isSelected: false,
  },
  {
    id: 106,
    billFrom: 'PineappleTimes.',
    billFromEmail: 'first@xabz.com',
    billFromAddress: 'Ganesh glory,Godrej garden city,Ahmedabad.',
    billFromPhone: 979796786,
    billFromFax: 13,
    billTo: 'RFc.',
    billToEmail: 'toFirst@agth.com',
    billToAddress: 'Godrej garden city,Ahmedabad.',
    billToPhone: 757575233,
    billToFax: 76,
    orders: [
      {
        itemName: 'Courge',
        unitPrice: 10,
        units: 9,
        unitTotalPrice: 90,
      },
    ],
    orderDate: new Date(),
    totalCost: 90,
    vat: 9,
    grandTotal: 99,
    status: 'Shipped',
    completed: false,
    isSelected: false,
  },
  {
    id: 107,
    billFrom: 'FortuneCreation',
    billFromEmail: 'first@xabz.com',
    billFromAddress: 'Ganesh glory,Godrej garden city,Ahmedabad.',
    billFromPhone: 979796786,
    billFromFax: 13,
    billTo: 'Soft solution.',
    billToEmail: 'toFirst@agth.com',
    billToAddress: 'Godrej garden city,Ahmedabad.',
    billToPhone: 757575233,
    billToFax: 76,
    orders: [
      {
        itemName: 'Courge',
        unitPrice: 10,
        units: 9,
        unitTotalPrice: 90,
      },
    ],
    orderDate: new Date('2020-10-15'),
    totalCost: 90,
    vat: 9,
    grandTotal: 99,
    status: 'Delivered',
    completed: false,
    isSelected: false,
  },
];

const InvoiceList = (props) => {
  const invoices = useState(invoceLists);
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState('CUSTOMER');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const tabItem = ['CUSTOMER', 'PARTNER', 'FULLFILLMENT', 'EMPLOYEES'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function setPayload() {
      let res = await fetchUser();
      setData(res);
    }
    setPayload()
  }, [])

  // Handle status filter change
  const handleClick = (status) => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tabItem.length);
    setActiveTab(status);
  };

  // Filter invoices based on search term
  const filteredInvoices = data.length > 0
    ? data.filter((val) => {
        return (
          val.role === activeTab &&
          (
            val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.mobileNumber.toString().includes(searchTerm) 
          )
        );
      })
    : [];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Calculate the counts for different statuses
  // const Shipped = invoices.filter((t) => t.status === 'Shipped').length;
  // const Delivered = invoices.filter((t) => t.status === 'Delivered').length;
  // const Pending = invoices.filter((t) => t.status === 'Pending').length;

  // Toggle all checkboxes
 
 

  // Handle opening delete confirmation dialog
 

  // Handle confirming deletion of selected products
  
  // Handle closing delete confirmation dialog
  

  return (
    <Box>
      <Grid container spacing={3}>
        {[{
          color: "primary.light",
          text: "Customer",
          bgcolor: "primary.main"

        }, {
          color: "secondary.light",
          bgcolor: "secondary.main",
          text: "Partner",
        }, {
          color: "success.light",
          bgcolor: "success.main",
          text: "Fullfillment"

        }, {
          color: "success.light",
          bgcolor: "success.main",
          text: "Employees"

        }].map((ItemCard) => {
          return (<Grid item xs={12} sm={6} lg={3}>
            <Box bgcolor={ItemCard.color} p={3} onClick={() => handleClick(ItemCard.text.toUpperCase())} sx={{ cursor: "pointer" }}>
              <Stack direction="row" gap={2} alignItems="center">
                <Box
                  width={18}
                  height={18}
                  bgcolor="primary.main"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Typography
                    color="primary.contrastText"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                   
                  </Typography>
                </Box>
                <Box>

                  <Typography fontWeight={500}> {ItemCard.text}</Typography>
                </Box>
              </Stack>
            </Box>
          </Grid>)
        })}


      </Grid>

      <Stack
        mt={3}
        justifyContent="space-between"
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <TextField
          id="search"
          type="text"
          size="small"
          variant="outlined"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconSearch size={'16'} />
              </InputAdornment>
            ),
          }}
        />
        
      </Stack>
      <Box sx={{ overflowX: 'auto' }}>
        <Table sx={{ whiteSpace: { xs: 'nowrap', md: 'unset' } }}>
          <TableHead>
            <TableRow>
             
              <TableCell>
                <Typography variant="h6" fontSize="14px" sx={{ textAlign: 'center' }}>
                  Key
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" fontSize="14px" sx={{ textAlign: 'center' }}>
                  email
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" fontSize="14px" sx={{ textAlign: 'center' }}>
                 mobile number
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" fontSize="14px" sx={{ textAlign: 'center' }}>
                 country code
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" fontSize="14px" sx={{ textAlign: 'center' }}>
                 isActive
                </Typography>
              </TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredInvoices.length>0 &&  filteredInvoices.map((invoice,index) => (
              <TableRow key={invoice._id}>
                <TableCell padding="checkbox">
                <Typography variant="h6" fontSize="14px" sx={{ textAlign: 'center' }}>
                {index+1}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6" fontSize="14px" sx={{ textAlign: 'center' }}>
                    {invoice.email}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6" fontSize="14px" sx={{ textAlign: 'center' }}>
                    {invoice.mobileNumber}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="14px" sx={{ textAlign: 'center' }}>{invoice.countryCode}</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize="14px" sx={{ textAlign: 'center' }}>{invoice.isActive}</Typography>
                </TableCell>
                
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
     
    </Box>
  );
};
export default InvoiceList;
