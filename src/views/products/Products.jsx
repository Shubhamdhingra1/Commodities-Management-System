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
  Fade,
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterListIcon,
  Add as AddIcon,
  Edit as EditIcon,
} from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const theme = useTheme();
  const { role } = useSelector((state) => state.auth);
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openDialog, setOpenDialog] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    image: '',
  });
  const navigate = useNavigate();

  // Mock data for demonstration
  useEffect(() => {
    const mockProducts = [
      {
        id: 1,
        name: 'product.diamond_ring',
        category: 'Rings',
        price: 4999.99,
        image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3',
        stock: 15,
      },
      {
        id: 2,
        name: 'product.gold_chain_necklace',
        category: 'Necklaces',
        price: 1299.99,
        image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3',
        stock: 25,
      },
      {
        id: 3,
        name: 'product.pearl_earrings',
        category: 'Earrings',
        price: 299.99,
        image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3',
        stock: 50,
      },
      {
        id: 4,
        name: 'product.sapphire_bracelet',
        category: 'Bracelets',
        price: 3499.99,
        image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3',
        stock: 10,
      },
      {
        id: 5,
        name: 'product.emerald_pendant',
        category: 'Pendants',
        price: 899.99,
        image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3',
        stock: 20,
      },
      {
        id: 6,
        name: 'product.ruby_ring',
        category: 'Rings',
        price: 2499.99,
        image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3',
        stock: 8,
      },
      {
        id: 7,
        name: 'product.diamond_necklace',
        category: 'Necklaces',
        price: 5999.99,
        image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3',
        stock: 5,
      },
      {
        id: 8,
        name: 'product.gold_hoop_earrings',
        category: 'Earrings',
        price: 199.99,
        image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3',
        stock: 100,
      },
      {
        id: 9,
        name: 'product.diamond_bracelet',
        category: 'Bracelets',
        price: 3999.99,
        image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3',
        stock: 12,
      },
      {
        id: 10,
        name: 'product.gold_chain_bracelet',
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
          
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder={t('Search jewelry...')}
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
                {t('Add Product')}
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
                  <TableCell sx={{ width: '100px' }}>{t('Image')}</TableCell>
                  <TableCell>{t('Name')}</TableCell>
                  <TableCell>{t('Category')}</TableCell>
                  <TableCell align="right">{t('Price')}</TableCell>
                  <TableCell align="right">{t('Stock')}</TableCell>
                  {role === 'manager' && <TableCell align="center">{t('Actions')}</TableCell>}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredProducts.map((product) => (
                  <Fade in={true} key={product.id}>
                    <TableRow
                      sx={{
                        '&:hover': {
                          bgcolor: theme.palette.action.hover,
                          cursor: 'pointer',
                        },
                        transition: 'background-color 0.2s ease-in-out',
                      }}
                      onClick={() => navigate(`/products/${product.id}`)}
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
                          {t(product.name)}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={t(product.category)}
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
                          label={`${product.stock} ${t('in stock')}`}
                          size="small"
                          color={product.stock > 20 ? 'success' : 'warning'}
                        />
                      </TableCell>
                      {role === 'manager' && (
                        <TableCell align="center">
                          <IconButton
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenDialog(product);
                            }}
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
            {editingProduct ? t('Edit Product') : t('Add New Product')}
          </DialogTitle>
          <DialogContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
              <TextField
                label={t('Product Name')}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                fullWidth
              />
              <FormControl fullWidth>
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
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                fullWidth
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
              <TextField
                label={t('Stock')}
                type="number"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                fullWidth
              />
              <TextField
                label={t('Image URL')}
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                fullWidth
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>{t('Cancel')}</Button>
            <Button onClick={handleSubmit} variant="contained">
              {editingProduct ? t('Update') : t('Add')}
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default Products; 