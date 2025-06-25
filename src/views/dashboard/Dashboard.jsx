import { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  useTheme,
} from '@mui/material';
import {
  Inventory as InventoryIcon,
  TrendingUp as TrendingUpIcon,
  Warning as WarningIcon,
  AttachMoney as MoneyIcon,
} from '@mui/icons-material';

const StatCard = ({ title, value, icon: Icon, color }) => {
  const theme = useTheme();
  
  return (
    <Card
      sx={{
        height: '100%',
        bgcolor: theme.palette.background.paper,
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
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
  );
};

const Dashboard = () => {
  const theme = useTheme();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
<<<<<<< HEAD
        Dashboard Overview
=======
        {t('Dashboard Overview')}
>>>>>>> f703f8e (added some changes)
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
<<<<<<< HEAD
            title="Total Products"
            value="1,234"
            icon={InventoryIcon}
            color={theme.palette.primary.main}
=======
            title={t('Total Products')}
            value="1,234"
            icon={InventoryIcon}
            color={theme.palette.primary.main}
            tooltip={t('Total number of products in inventory.')}
>>>>>>> f703f8e (added some changes)
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
<<<<<<< HEAD
            title="Total Sales"
            value="$45,678"
            icon={MoneyIcon}
            color={theme.palette.success.main}
=======
            title={t('Total Sales')}
            value="$45,678"
            icon={MoneyIcon}
            color={theme.palette.success.main}
            tooltip={t('Total sales made this year.')}
>>>>>>> f703f8e (added some changes)
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
<<<<<<< HEAD
            title="Growth Rate"
            value="+12.5%"
            icon={TrendingUpIcon}
            color={theme.palette.info.main}
=======
            title={t('Growth Rate')}
            value="+12.5%"
            icon={TrendingUpIcon}
            color={theme.palette.info.main}
            tooltip={t('Growth rate compared to last year.')}
>>>>>>> f703f8e (added some changes)
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
<<<<<<< HEAD
            title="Low Stock Items"
            value="23"
            icon={WarningIcon}
            color={theme.palette.warning.main}
=======
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
>>>>>>> f703f8e (added some changes)
          />
        </Grid>
      </Grid>

<<<<<<< HEAD
=======
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
>>>>>>> f703f8e (added some changes)
      <Box sx={{ mt: 4 }}>
        <Card sx={{ bgcolor: theme.palette.background.paper }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
<<<<<<< HEAD
              Recent Activity
            </Typography>
            <Typography color="text.secondary">
              No recent activity to display.
=======
              {t('Recent Activity')}
            </Typography>
            <Typography color="text.secondary">
              {t('No recent activity to display.')}
>>>>>>> f703f8e (added some changes)
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Dashboard; 