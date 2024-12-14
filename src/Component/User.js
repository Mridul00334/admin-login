
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
  FormControl,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  Checkbox
} from '@mui/material';
import {
  IconEdit,
  IconEye,
  IconListDetails,
  IconSearch,
  IconShoppingBag,
  IconSortAscending,
  IconTrash,
  IconTruck
} from "@tabler/icons";
// import CustomCheckbox from 'src/components/forms/theme-elements/CustomCheckbox';
import { Link } from 'react-router-dom';
import { fetchUser } from '../api/index';
import { isAction } from '@reduxjs/toolkit';
import { addEmployee } from '../api/index';


const InvoiceList = (props) => {

  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState('CUSTOMER');

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [isOpenDialog, setIsDialogOpen] = useState(false);
  const tabItem = ['CUSTOMER', 'PARTNER', 'FULFILLMENT', 'EMPLOYEES'];
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0);
  const [checkbox1, setCheckbox1] = useState("");
  const [checkbox2, setCheckbox2] = useState("");
  const [checkbox3, setCheckbox3] = useState("");

  useEffect(() => {
    async function setPayload() {
      let res = await fetchUser();
      setData(res);
    }
    setPayload()
  }, [])

  async function callApi() {
    let res = await fetchUser();
    setData(res);
  }

  // Handle status filter change
  const handleClick = (status) => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tabItem.length);
    setActiveTab(status);
  };

  function handleCloseDialog() {
    setIsDialogOpen(false);
    refreshData();
  }

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
  const refreshData=()=>{
    setEmail('');
    setRole("");
    setCheckbox1("");
    setCheckbox2("");
    setCheckbox3("")

  }

  async function handleDone() {
    try {
      let feat = [];
      if (checkbox1) {
        feat.push("Finance")
        if (checkbox2) {
          feat.push("Employee management")
        }
        if (checkbox3) {
          feat.push("Other screens")
        }
      }


      let body = {
        email,
        role: activeTab.toUpperCase(),
        isActive: "ACTIVE",
        accessType: role,
        restrictedFeatures: feat
      }
      let result = await addEmployee(body);
      if (result.success) {
        handleCloseDialog();
        refreshData();
        callApi();
      }
    } catch (err) {
      console.log(err);
    }
  }
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
          text: "Fulfillment"

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
        <Button variant="contained" color="primary" onClick={() => { setIsDialogOpen(true) }} >
          Add User
        </Button>

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
            {filteredInvoices.length > 0 && filteredInvoices.map((invoice, index) => (
              <TableRow key={invoice._id}>
                <TableCell padding="checkbox">
                  <Typography variant="h6" fontSize="14px" sx={{ textAlign: 'center' }}>
                    {index + 1}
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
      <Dialog open={isOpenDialog} onClose={handleCloseDialog}>
        <DialogTitle>Assign Role and Email</DialogTitle>
        <DialogContent>
          {/* Email input field */}
          <TextField
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
          />

          {/* Role Access Radio Buttons */}
          <FormControl component="fieldset" margin="normal">
            <FormLabel component="legend">Role Access</FormLabel>
            <RadioGroup
              value={role}
              onChange={(e) => setRole(e.target.value.toUpperCase())}
              row
            >
              <FormControlLabel
                value="OWNER"
                control={<Radio />}
                label="Owner"
              />
              <FormControlLabel
                value="EDITOR"
                control={<Radio />}
                label="Editor"
              />
              <FormControlLabel
                value="VIEWER"
                control={<Radio />}
                label="Viewer"
              />
            </RadioGroup>
          </FormControl>

          <FormControl component="fieldset" margin="normal" style={{ display: "flex" }}>
            <FormLabel component="legend">Additional Options</FormLabel>
            <FormControlLabel
              control={<Checkbox checked={checkbox1} onChange={(e) => setCheckbox1(e.target.checked)} />}
              label="Finance"
            />
            <FormControlLabel
              control={<Checkbox checked={checkbox2} onChange={(e) => setCheckbox2(e.target.checked)} />}
              label="Employee management"
            />
            <FormControlLabel
              control={<Checkbox checked={checkbox3} onChange={(e) => setCheckbox3(e.target.checked)} />}
              label="Other screens"
            />
          </FormControl>
        </DialogContent>

        <DialogActions>
          {/* Cancel button */}
          <Button variant="contained" onClick={handleCloseDialog}>
            Cancel
          </Button>
          {/* Done button */}
          <Button
            variant="outlined"
            onClick={()=>handleDone()}
            color="primary"
          >
            Done
          </Button>
        </DialogActions>
      </Dialog>

    </Box>
  );
};
export default InvoiceList;
