import { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  useTheme,
  Tooltip,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import {
  Inventory as InventoryIcon,
  TrendingUp as TrendingUpIcon,
  Warning as WarningIcon,
  AttachMoney as MoneyIcon,
  People as PeopleIcon,
  Star as StarIcon,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Legend } from 'recharts';

const StatCard = ({ title, value, icon: Icon, color, tooltip }) => {
  const theme = useTheme();
  return (
    <Tooltip title={tooltip || ''} arrow>
      <Card
        sx={{
          height: '100%',
          bgcolor: theme.palette.background.paper,
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: 6,
          },
        }}
      >
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Box
              sx={{
                bgcolor: `${color}20`,
                borderRadius: 2,
                p: 1,
                mr: 2,
              }}
            >
              <Icon sx={{ color: color, fontSize: 32 }} />
            </Box>
            <Typography variant="h6" color="text.secondary">
              {title}
            </Typography>
          </Box>
          <Typography variant="h4" component="div" sx={{ fontWeight: 600 }}>
            {value}
          </Typography>
        </CardContent>
      </Card>
    </Tooltip>
  );
};

const salesData = [
  { month: 'Jan', sales: 8000, revenue: 12000 },
  { month: 'Feb', sales: 9670, revenue: 13500 },
  { month: 'Mar', sales: 10980, revenue: 15000 },
  { month: 'Apr', sales: 12000, revenue: 17000 },
  { month: 'May', sales: 9900, revenue: 14000 },
  { month: 'Jun', sales: 12300, revenue: 18000 },
];

const lowStockProducts = [
  { name: 'product.diamond_ring', stock: 3 },
  { name: 'product.gold_chain_necklace', stock: 5 },
  { name: 'product.sapphire_bracelet', stock: 2 },
];

const Dashboard = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
        {t('Dashboard Overview')}
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title={t('Total Products')}
            value="1,234"
            icon={InventoryIcon}
            color={theme.palette.primary.main}
            tooltip={t('Total number of products in inventory.')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title={t('Total Sales')}
            value="$45,678"
            icon={MoneyIcon}
            color={theme.palette.success.main}
            tooltip={t('Total sales made this year.')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title={t('Growth Rate')}
            value="+12.5%"
            icon={TrendingUpIcon}
            color={theme.palette.info.main}
            tooltip={t('Growth rate compared to last year.')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title={t('Low Stock Items')}
            value="23"
            icon={WarningIcon}
            color={theme.palette.warning.main}
            tooltip={t('Number of products low in stock.')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title={t('New Customers')}
            value="342"
            icon={PeopleIcon}
            color={theme.palette.secondary.main}
            tooltip={t('New customers acquired this month.')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title={t('Revenue This Month')}
            value="$12,300"
            icon={StarIcon}
            color={theme.palette.success.dark}
            tooltip={t('Revenue generated this month.')}
          />
        </Grid>
      </Grid>

      {/* Sales/Revenue Chart */}
      <Box sx={{ mt: 5, p: 3, bgcolor: theme.palette.background.paper, borderRadius: 2, boxShadow: 2 }}>
        <Typography variant="h6" gutterBottom>
          {t('Sales & Revenue (Last 6 Months)')}
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <RechartsTooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke={theme.palette.primary.main} name={t('Sales')} strokeWidth={2} />
            <Line type="monotone" dataKey="revenue" stroke={theme.palette.success.main} name={t('Revenue')} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Box>

      {/* Low Stock Products List */}
      <Box sx={{ mt: 5, p: 3, bgcolor: theme.palette.background.paper, borderRadius: 2, boxShadow: 2 }}>
        <Typography variant="h6" gutterBottom>
          {t('Low Stock Products')}
        </Typography>
        <List>
          {lowStockProducts.map((product, idx) => (
            <div key={product.name}>
              <ListItem>
                <ListItemText
                  primary={t(product.name)}
                  secondary={`${t('Stock')}: ${product.stock}`}
                />
              </ListItem>
              {idx < lowStockProducts.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </Box>

      {/* Recent Activity */}
      <Box sx={{ mt: 4 }}>
        <Card sx={{ bgcolor: theme.palette.background.paper }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {t('Recent Activity')}
            </Typography>
            <Typography color="text.secondary">
              {t('No recent activity to display.')}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Dashboard; 