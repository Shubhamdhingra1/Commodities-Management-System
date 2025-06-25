import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, Chip, useTheme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTranslation } from 'react-i18next';

const mockProducts = [
  {
    id: 1,
    name: 'product.diamond_ring',
    category: 'Rings',
    price: 4999.99,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3',
    stock: 15,
    description: 'product.diamond_ring_desc',
  },
  {
    id: 2,
    name: 'product.gold_chain_necklace',
    category: 'Necklaces',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3',
    stock: 25,
    description: 'product.gold_chain_necklace_desc',
  },
  {
    id: 3,
    name: 'product.pearl_earrings',
    category: 'Earrings',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3',
    stock: 50,
    description: 'product.pearl_earrings_desc',
  },
  {
    id: 4,
    name: 'product.sapphire_bracelet',
    category: 'Bracelets',
    price: 3499.99,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3',
    stock: 10,
    description: 'product.sapphire_bracelet_desc',
  },
  {
    id: 5,
    name: 'product.emerald_pendant',
    category: 'Pendants',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3',
    stock: 20,
    description: 'product.emerald_pendant_desc',
  },
  {
    id: 6,
    name: 'product.ruby_ring',
    category: 'Rings',
    price: 2499.99,
    image: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?ixlib=rb-4.0.3',
    stock: 8,
    description: 'product.ruby_ring_desc',
  },
  {
    id: 7,
    name: 'product.diamond_necklace',
    category: 'Necklaces',
    price: 5999.99,
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3',
    stock: 5,
    description: 'product.diamond_necklace_desc',
  },
  {
    id: 8,
    name: 'product.gold_hoop_earrings',
    category: 'Earrings',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3',
    stock: 100,
    description: 'product.gold_hoop_earrings_desc',
  },
  {
    id: 9,
    name: 'product.diamond_bracelet',
    category: 'Bracelets',
    price: 3999.99,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3',
    stock: 12,
    description: 'product.diamond_bracelet_desc',
  },
  {
    id: 10,
    name: 'product.gold_chain_bracelet',
    category: 'Bracelets',
    price: 799.99,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3',
    stock: 30,
    description: 'product.gold_chain_bracelet_desc',
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const theme = useTheme();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = mockProducts.find((p) => p.id === Number(id));
    setProduct(found);
  }, [id]);

  if (!product) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h6">{t('Product not found')}</Typography>
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
          <Chip label={t(product.category)} color="primary" variant="outlined" sx={{ mb: 2 }} />
          <Typography variant="h6" color="primary" sx={{ fontWeight: 600, mb: 1 }}>
            ${product.price.toFixed(2)}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            <strong>{t('Stock')}:</strong> {product.stock}
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {t(product.description)}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductDetail; 