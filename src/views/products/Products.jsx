import { useState, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  InputAdornment,
  Container,
  CircularProgress,
  Chip,
  IconButton,
  useTheme,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterListIcon,
  Add as AddIcon,
  Edit as EditIcon,
} from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

const MotionTableRow = motion(TableRow);

const Products = () => {
  const theme = useTheme();
  const { role } = useSelector((state) => state.auth);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    image: '',
  });

  // Mock data for demonstration
  useEffect(() => {
    const mockProducts = [
      {
        id: 1,
        name: 'Diamond Engagement Ring',
        category: 'Rings',
        price: 4999.99,
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3',
        stock: 15,
      },
      {
        id: 2,
        name: 'Gold Chain Necklace',
        category: 'Necklaces',
        price: 1299.99,
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3',
        stock: 25,
      },
      {
        id: 3,
        name: 'Pearl Earrings',
        category: 'Earrings',
        price: 299.99,
        image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3',
        stock: 50,
      },
      {
        id: 4,
        name: 'Sapphire Tennis Bracelet',
        category: 'Bracelets',
        price: 3499.99,
        image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3',
        stock: 10,
      },
      {
        id: 5,
        name: 'Emerald Pendant',
        category: 'Pendants',
        price: 899.99,
        image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3',
        stock: 20,
      },
      {
        id: 6,
        name: 'Ruby Cocktail Ring',
        category: 'Rings',
        price: 2499.99,
        image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3',
        stock: 8,
      },
      {
        id: 7,
        name: 'Diamond Tennis Necklace',
        category: 'Necklaces',
        price: 5999.99,
        image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3',
        stock: 5,
      },
      {
        id: 8,
        name: 'Gold Hoop Earrings',
        category: 'Earrings',
        price: 199.99,
        image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3',
        stock: 100,
      },
      {
        id: 9,
        name: 'Diamond Tennis Bracelet',
        category: 'Bracelets',
        price: 3999.99,
        image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3',
        stock: 12,
      },
      {
        id: 10,
        name: 'Gold Chain Bracelet',
        category: 'Bracelets',
        price: 799.99,
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3',
        stock: 30,
      },
    ];

    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 1000);
  }, []);

  const handleOpenDialog = (product = null) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        name: product.name,
        category: product.category,
        price: product.price.toString(),
        stock: product.stock.toString(),
        image: product.image,
      });
    } else {
      setEditingProduct(null);
      setFormData({
        name: '',
        category: '',
        price: '',
        stock: '',
        image: '',
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingProduct(null);
    setFormData({
      name: '',
      category: '',
      price: '',
      stock: '',
      image: '',
    });
  };

  const handleSubmit = () => {
    if (editingProduct) {
      // Update existing product
      setProducts(products.map(p => 
        p.id === editingProduct.id 
          ? { ...p, ...formData, price: parseFloat(formData.price), stock: parseInt(formData.stock) }
          : p
      ));
    } else {
      // Add new product
      const newProduct = {
        id: products.length + 1,
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
      };
      setProducts([...products, newProduct]);
    }
    handleCloseDialog();
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        bgcolor: theme.palette.background.default,
        py: 4,
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Luxury Jewelry Collection
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search jewelry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <IconButton
              sx={{
                bgcolor: theme.palette.primary.main,
                color: 'white',
                '&:hover': { bgcolor: theme.palette.primary.dark },
              }}
            >
              <FilterListIcon />
            </IconButton>
            {role === 'manager' && (
              <Button
                variant="contained"
                startIcon={<AddIcon />}
                onClick={() => handleOpenDialog()}
                sx={{
                  bgcolor: theme.palette.success.main,
                  '&:hover': { bgcolor: theme.palette.success.dark },
                }}
              >
                Add Product
              </Button>
            )}
          </Box>
        </Box>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <TableContainer component={Paper} sx={{ boxShadow: theme.shadows[2] }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ width: '100px' }}>Image</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Stock</TableCell>
                  {role === 'manager' && <TableCell align="center">Actions</TableCell>}
                </TableRow>
              </TableHead>
              <TableBody>
                <AnimatePresence>
                  {filteredProducts.map((product) => (
                    <MotionTableRow
                      key={product.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      sx={{
                        '&:hover': {
                          bgcolor: theme.palette.action.hover,
                        },
                      }}
                    >
                      <TableCell>
                        <Avatar
                          src={product.image}
                          alt={product.name}
                          variant="rounded"
                          sx={{
                            width: 80,
                            height: 80,
                            boxShadow: theme.shadows[2],
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                          {product.name}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={product.category}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      </TableCell>
                      <TableCell align="right">
                        <Typography
                          variant="subtitle1"
                          color="primary"
                          sx={{ fontWeight: 'bold' }}
                        >
                          ${product.price.toFixed(2)}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Chip
                          label={`${product.stock} in stock`}
                          size="small"
                          color={product.stock > 20 ? 'success' : 'warning'}
                        />
                      </TableCell>
                      {role === 'manager' && (
                        <TableCell align="center">
                          <IconButton
                            onClick={() => handleOpenDialog(product)}
                            color="primary"
                            size="small"
                          >
                            <EditIcon />
                          </IconButton>
                        </TableCell>
                      )}
                    </MotionTableRow>
                  ))}
                </AnimatePresence>
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>

      {role === 'manager' && (
        <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
          <DialogTitle>
            {editingProduct ? 'Edit Product' : 'Add New Product'}
          </DialogTitle>
          <DialogContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
              <TextField
                label="Product Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                fullWidth
              />
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={formData.category}
                  label="Category"
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <MenuItem value="Rings">Rings</MenuItem>
                  <MenuItem value="Necklaces">Necklaces</MenuItem>
                  <MenuItem value="Earrings">Earrings</MenuItem>
                  <MenuItem value="Bracelets">Bracelets</MenuItem>
                  <MenuItem value="Pendants">Pendants</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Price"
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                fullWidth
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
              <TextField
                label="Stock"
                type="number"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                fullWidth
              />
              <TextField
                label="Image URL"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                fullWidth
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleSubmit} variant="contained">
              {editingProduct ? 'Update' : 'Add'}
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default Products; 