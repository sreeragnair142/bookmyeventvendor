import React, { useState } from 'react';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  IconButton,
  Tooltip,
  Button,
  useTheme,
} from '@mui/material';
import { Settings as SettingsIcon, Download as DownloadIcon } from '@mui/icons-material';

const Category = () => {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const categories = [
    { id: 11, image: 'https://via.placeholder.com/100x50', name: 'Luxury Minibus' },
    { id: 10, image: 'https://via.placeholder.com/100x50', name: 'Crossover' },
    { id: 9, image: 'https://via.placeholder.com/100x50', name: 'Limousine' },
    { id: 8, image: 'https://via.placeholder.com/100x50', name: 'Family Van' },
    { id: 7, image: 'https://via.placeholder.com/100x50', name: 'Electric Car' },
    { id: 6, image: 'https://via.placeholder.com/100x50', name: 'Executive Sedan' },
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExport = () => {
    // Logic for exporting data
    alert('Export functionality to be implemented');
  };

  return (
    <Box sx={{ p: 3, backgroundColor: theme.palette.grey[100], minHeight: '100vh' }}>
      <Box sx={{ maxWidth: 'lg', margin: 'auto', backgroundColor: 'white', borderRadius: theme.shape.borderRadius, boxShadow: theme.shadows[1], p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h5" component="h1">
            Category List
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <TextField
              variant="outlined"
              placeholder="Search categories"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              size="small"
            />
            <Button
              variant="outlined"
              startIcon={<DownloadIcon />}
              onClick={handleExport}
            >
              Export
            </Button>
           
          </Box>
        </Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>SI</TableCell>
              <TableCell>Category Id</TableCell>
              <TableCell>Category Image</TableCell>
              <TableCell>Category Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCategories.map((category, index) => (
              <TableRow key={category.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{category.id}</TableCell>
                <TableCell>
                  <img src={category.image} alt={category.name} style={{ width: 100, height: 50, objectFit: 'contain' }} />
                </TableCell>
                <TableCell>{category.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default Category;