import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
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
  Fade,
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterListIcon,
  Add as AddIcon,
  Edit as EditIcon,
} from '@mui/icons-material';
import { useSelector } from 'react-redux';
<<<<<<< HEAD
=======
import { useTranslation } from 'react-i18next';
>>>>>>> f703f8e (added some changes)

const Products = () => {
  const theme = useTheme();
  const { role } = useSelector((state) => state.auth);
<<<<<<< HEAD
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
=======
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
>>>>>>> f703f8e (added some changes)
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
<<<<<<< HEAD
        name: 'Diamond Engagement Ring',
=======
        name: 'product.diamond_ring',
>>>>>>> f703f8e (added some changes)
        category: 'Rings',
        price: 4999.99,
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3',
        stock: 15,
      },
      {
        id: 2,
<<<<<<< HEAD
        name: 'Gold Chain Necklace',
=======
        name: 'product.gold_chain_necklace',
>>>>>>> f703f8e (added some changes)
        category: 'Necklaces',
        price: 1299.99,
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3',
        stock: 25,
      },
      {
        id: 3,
<<<<<<< HEAD
        name: 'Pearl Earrings',
=======
        name: 'product.pearl_earrings',
>>>>>>> f703f8e (added some changes)
        category: 'Earrings',
        price: 299.99,
        image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3',
        stock: 50,
      },
      {
        id: 4,
<<<<<<< HEAD
        name: 'Sapphire Tennis Bracelet',
=======
        name: 'product.sapphire_bracelet',
>>>>>>> f703f8e (added some changes)
        category: 'Bracelets',
        price: 3499.99,
        image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3',
        stock: 10,
      },
      {
        id: 5,
<<<<<<< HEAD
        name: 'Emerald Pendant',
=======
        name: 'product.emerald_pendant',
>>>>>>> f703f8e (added some changes)
        category: 'Pendants',
        price: 899.99,
        image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3',
        stock: 20,
      },
      {
        id: 6,
<<<<<<< HEAD
        name: 'Ruby Cocktail Ring',
=======
        name: 'product.ruby_ring',
>>>>>>> f703f8e (added some changes)
        category: 'Rings',
        price: 2499.99,
        image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3',
        stock: 8,
      },
      {
        id: 7,
<<<<<<< HEAD
        name: 'Diamond Tennis Necklace',
=======
        name: 'product.diamond_necklace',
>>>>>>> f703f8e (added some changes)
        category: 'Necklaces',
        price: 5999.99,
        image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3',
        stock: 5,
      },
      {
        id: 8,
<<<<<<< HEAD
        name: 'Gold Hoop Earrings',
=======
        name: 'product.gold_hoop_earrings',
>>>>>>> f703f8e (added some changes)
        category: 'Earrings',
        price: 199.99,
        image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3',
        stock: 100,
      },
      {
        id: 9,
<<<<<<< HEAD
        name: 'Diamond Tennis Bracelet',
=======
        name: 'product.diamond_bracelet',
>>>>>>> f703f8e (added some changes)
        category: 'Bracelets',
        price: 3999.99,
        image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3',
        stock: 12,
      },
      {
        id: 10,
<<<<<<< HEAD
        name: 'Gold Chain Bracelet',
=======
        name: 'product.gold_chain_bracelet',
>>>>>>> f703f8e (added some changes)
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

<<<<<<< HEAD
=======
  // Filter products based on search query and selected category
  useEffect(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchQuery]);

  // Get unique categories for dropdown
  const categories = ['All', ...Array.from(new Set(products.map(product => product.category)))];

>>>>>>> f703f8e (added some changes)
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

<<<<<<< HEAD
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

=======
>>>>>>> f703f8e (added some changes)
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
<<<<<<< HEAD
            Luxury Jewelry Collection
          </Typography>
=======
            {t('Luxury Jewelry Collection')}
          </Typography>
          
          {/* Category Filter Dropdown */}
          <Box sx={{ mb: 3 }}>
            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel>{t('Filter by Category')}</InputLabel>
              <Select
                value={selectedCategory}
                label={t('Filter by Category')}
                onChange={(e) => setSelectedCategory(e.target.value)}
                sx={{ bgcolor: 'background.paper' }}
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category === 'All' ? t('All') : t(category)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          
>>>>>>> f703f8e (added some changes)
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <TextField
              fullWidth
              variant="outlined"
<<<<<<< HEAD
              placeholder="Search jewelry..."
=======
              placeholder={t('Search jewelry...')}
>>>>>>> f703f8e (added some changes)
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
<<<<<<< HEAD
                Add Product
=======
                {t('Add Product')}
>>>>>>> f703f8e (added some changes)
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
<<<<<<< HEAD
                  <TableCell sx={{ width: '100px' }}>Image</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Stock</TableCell>
                  {role === 'manager' && <TableCell align="center">Actions</TableCell>}
=======
                  <TableCell sx={{ width: '100px' }}>{t('Image')}</TableCell>
                  <TableCell>{t('Name')}</TableCell>
                  <TableCell>{t('Category')}</TableCell>
                  <TableCell align="right">{t('Price')}</TableCell>
                  <TableCell align="right">{t('Stock')}</TableCell>
                  {role === 'manager' && <TableCell align="center">{t('Actions')}</TableCell>}
>>>>>>> f703f8e (added some changes)
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredProducts.map((product) => (
                  <Fade in={true} key={product.id}>
                    <TableRow
                      sx={{
<<<<<<< HEAD
=======
                        cursor: 'pointer',
>>>>>>> f703f8e (added some changes)
                        '&:hover': {
                          bgcolor: theme.palette.action.hover,
                        },
                        transition: 'background-color 0.2s ease-in-out',
                      }}
<<<<<<< HEAD
=======
                      onClick={() => navigate(`/products/${product.id}`)}
>>>>>>> f703f8e (added some changes)
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
<<<<<<< HEAD
                          {product.name}
=======
                          {t(product.name)}
>>>>>>> f703f8e (added some changes)
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Chip
<<<<<<< HEAD
                          label={product.category}
=======
                          label={t(product.category)}
>>>>>>> f703f8e (added some changes)
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
<<<<<<< HEAD
                          label={`${product.stock} in stock`}
=======
                          label={`${product.stock} ${t('in stock')}`}
>>>>>>> f703f8e (added some changes)
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
                    </TableRow>
                  </Fade>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>

      {role === 'manager' && (
        <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
          <DialogTitle>
<<<<<<< HEAD
            {editingProduct ? 'Edit Product' : 'Add New Product'}
=======
            {editingProduct ? t('Edit Product') : t('Add New Product')}
>>>>>>> f703f8e (added some changes)
          </DialogTitle>
          <DialogContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
              <TextField
<<<<<<< HEAD
                label="Product Name"
=======
                label={t('Product Name')}
>>>>>>> f703f8e (added some changes)
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                fullWidth
              />
              <FormControl fullWidth>
<<<<<<< HEAD
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
=======
                <InputLabel>{t('Category')}</InputLabel>
                <Select
                  value={formData.category}
                  label={t('Category')}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <MenuItem value="Rings">{t('Rings')}</MenuItem>
                  <MenuItem value="Necklaces">{t('Necklaces')}</MenuItem>
                  <MenuItem value="Earrings">{t('Earrings')}</MenuItem>
                  <MenuItem value="Bracelets">{t('Bracelets')}</MenuItem>
                  <MenuItem value="Pendants">{t('Pendants')}</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label={t('Price')}
>>>>>>> f703f8e (added some changes)
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                fullWidth
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
              <TextField
<<<<<<< HEAD
                label="Stock"
=======
                label={t('Stock')}
>>>>>>> f703f8e (added some changes)
                type="number"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                fullWidth
              />
              <TextField
<<<<<<< HEAD
                label="Image URL"
=======
                label={t('Image URL')}
>>>>>>> f703f8e (added some changes)
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                fullWidth
              />
            </Box>
          </DialogContent>
          <DialogActions>
<<<<<<< HEAD
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleSubmit} variant="contained">
              {editingProduct ? 'Update' : 'Add'}
=======
            <Button onClick={handleCloseDialog}>{t('Cancel')}</Button>
            <Button onClick={handleSubmit} variant="contained">
              {editingProduct ? t('Update') : t('Add')}
>>>>>>> f703f8e (added some changes)
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default Products; 