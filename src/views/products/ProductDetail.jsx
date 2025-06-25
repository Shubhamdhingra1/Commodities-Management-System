import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Card, CardContent, CardMedia, Chip, Button, useTheme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTranslation } from 'react-i18next';

// Mock product data (should be replaced with real data or fetched from API)
const mockProducts = [
  {
    id: '1',
    name: 'product.diamond_ring',
    category: 'Rings',
    price: 4999.99,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3',
    stock: 15,
    description: {
      en: 'A stunning diamond engagement ring with a classic design.',
      hi: 'एक शानदार हीरे की सगाई की अंगूठी, पारंपरिक डिज़ाइन के साथ।',
      fr: 'Une superbe bague de fiançailles en diamant au design classique.'
    }
  },
  {
    id: '2',
    name: 'product.gold_chain_necklace',
    category: 'Necklaces',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3',
    stock: 25,
    description: {
      en: 'Elegant gold chain necklace, perfect for any occasion.',
      hi: 'शानदार सोने की चेन का हार, किसी भी अवसर के लिए उपयुक्त।',
      fr: 'Collier chaîne en or élégant, parfait pour toutes les occasions.'
    }
  },
  // ... add more products as needed ...
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const { t, i18n } = useTranslation();

  const product = mockProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h5" color="error">
          {t('Product not found')}
        </Typography>
        <Button startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)} sx={{ mt: 2 }}>
          {t('Back to Products')}
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
      <Button startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)} sx={{ mb: 3 }}>
        {t('Back to Products')}
      </Button>
      <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, boxShadow: 4 }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={t(product.name)}
          sx={{ width: { xs: '100%', md: 350 }, height: 350, objectFit: 'cover' }}
        />
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            {t(product.name)}
          </Typography>
          <Chip label={t(product.category)} color="primary" sx={{ mb: 2 }} />
          <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
            ${product.price.toFixed(2)}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {product.description[i18n.language] || product.description.en}
          </Typography>
          <Typography variant="subtitle1" color={product.stock > 0 ? 'success.main' : 'error.main'}>
            {product.stock > 0
              ? `${product.stock} ${t('in stock')}`
              : t('Out of stock')}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductDetail; 